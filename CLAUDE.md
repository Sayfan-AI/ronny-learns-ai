# ronny-learns-ai

## Goal

Build an educational web application that teaches Ronny (a complete non-programmer with no familiarity with APIs, GitHub, or coding) about the genesis system and AI in general. Start with the absolute basics: a simple, friendly web interface with a GitHub registration tutorial — step-by-step instructions so Gigi can invite Ronny to the project. The system should use plain language throughout, avoid jargon, and progressively introduce concepts from the ground up.



## Meta-Concepts

These are the principles this dev system operates by. Evolve them as the project matures.

- **GitHub as coordination layer** — issues track progress, PRs deliver changes, CI/CD enforces quality. Humans and agents speak the same protocol.
- **Quality gates and e2e testing** — code, tests, CI/CD, deployment are all first-class concerns.
- **Self-improvement** — continuously evolve agents, skills, and strategies.
- **Self-monitoring** — monitor progress, detect stuck/looping states, try to unblock, escalate to human when stuck.
- **Minimal human-in-the-loop** — do everything possible autonomously. Highlight what requires human action and offer to do it if given access.
- **Deterministic over agentic** — if a task is well-understood and doesn't need LLM judgment, build a deterministic tool (script, CLI, CI step). Reserve LLMs for fuzzy reasoning.
- **Incremental planning** — only detail the current milestone. Future milestones stay high-level until they're next.

## Agent Roster

- **Onboarding** — refines goal with human, produces milestones (runs once at project start)
- **Project manager** — owns roadmap, tracks progress, drills down current milestone into tasks
- **Human interaction** — all comms with user (reports, escalations, access requests). Speaks A2H protocol.
- **Evolver** — evolves the dev system itself (new agents, tools, skills, memory design, CLAUDE.md refinement). Escalates framework-level improvements to genesis.
- **Health / self-review** — monitors for stuck/looping, audits quality
- **Workers** — designed by the dev system for the specific goal

## Execution Model

GitHub Actions serve as the trigger layer:
- **Scheduled workflows** (cron) — periodic advancement of project state
- **Event-triggered workflows** — issue/PR events, human feedback, comments

Each trigger launches a Claude Agent SDK session as the orchestrator.

## Tech Stack Preferences

Defaults (override as needed):

- **Open source + free tier only**
- **Backend:** Rust (Go if K8s-heavy)
- **CLI:** Rust
- **Frontend:** Vite + React + TanStack Router + TanStack Query, Tailwind CSS, TypeScript (strict)
- **Desktop:** Tauri
- **Mobile:** React Native (Expo)
- **Internal services:** gRPC
- **Auth:** Ory stack (K8s), Rust crates (simple apps), Clerk (managed fallback)
- **Observability:** OpenTelemetry + Grafana Cloud free tier
- **Database:** Neon (serverless Postgres)
- **Deployment:** Cloudflare, cloud free-tier
- **Local dev:** Tilt + kind (K8s), LocalStack (AWS)

## App Architecture

- App code lives in `/app/` (Vite + React + TypeScript + Tailwind CSS).
- Pages are in `app/src/pages/` — one file per lesson or module, PascalCase filename.
- Routes are registered in `app/src/router.tsx`. Every new page needs a route here.
- Module index pages (e.g. `TerminalAndTools.tsx`) group related lessons with a card layout.
- Learning path data is in `app/src/data/` — new modules must be registered there too.
- Deployed via Cloudflare Pages (see `.github/workflows/deploy.yml`).

## Lessons Learned

- **Orchestrator creates duplicate issues** — The prompt rule alone is insufficient. Milestone 2 AND Milestone 3 both created duplicate task issues (10 issues for 5 tasks each time). The problem: title searches miss near-duplicates when titles change between runs. Use the deterministic tool: `bash .genesis/scripts/issues.sh check-duplicate --title "EXACT_TITLE" --milestone N` before every `gh issue create`. This script strips common prefixes and searches by core topic words.
- **Stale labels accumulate** — The `issues.sh close` command now auto-strips `in-progress` and `blocked` before closing (fixed 2026-04-08). Always use `bash .genesis/scripts/issues.sh close --id N` rather than raw `gh issue close` to get this behavior. Issues #594 and #600 were manually cleaned up on 2026-04-08.
- **settings.json gates agent capabilities** — The `permissions.allow` list in `.claude/settings.json` controls which tools/commands agents can use. If an agent can't write files, add `Edit(*)` and `Write(*)` to the allow list.
- **Concurrent event runs cause duplicate issues** — When a human closes a milestone issue, GitHub fires multiple events simultaneously (issues:closed, issue_comment:created, etc.). Without concurrency control, multiple orchestrator runs start at the same moment, all check-duplicate before any creates, then all create duplicates. Fixed 2026-04-09 by adding `concurrency: genesis-events` (cancel-in-progress: false) to the events workflow. This serializes event runs so each waits for the previous to finish before starting.
- **Node.js 20 deprecation in Actions** — GitHub Actions runners will stop supporting Node.js 20 actions by September 2026. Deprecation warnings appear in logs for `actions/checkout@v4` and `oven-sh/setup-bun`. These are not failures yet but should be tracked. When upgrading, set `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24=true` or wait for updated action versions. No immediate action required as of 2026-04-09.
