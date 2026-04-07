import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { NextLesson } from '../components/NextLesson'
import { RelatedLessons } from '../components/RelatedLessons'

const VISITED_KEY = 'ronny-visited-modules'

function markVisited(id: string) {
  try {
    const raw = localStorage.getItem(VISITED_KEY)
    const set: Set<string> = new Set(raw ? JSON.parse(raw) : [])
    set.add(id)
    localStorage.setItem(VISITED_KEY, JSON.stringify([...set]))
  } catch {
    // ignore
  }
}

const questions: QuizQuestion[] = [
  {
    question: 'What is a pull request?',
    options: [
      'A request to delete old code',
      'A proposal to merge changes from one branch into another',
      'A way to download the project',
      'A message to ask for help',
    ],
    correctIndex: 1,
    explanation:
      'A pull request says "I have made some changes on my branch — please review them and merge them into main if you agree." It is a proposal, not an automatic action.',
  },
  {
    question: 'Why is the review step in a pull request useful?',
    options: [
      'It makes the website load faster',
      'It lets someone catch mistakes before they go live',
      'It automatically fixes all bugs',
      'It removes the need for branches',
    ],
    correctIndex: 1,
    explanation:
      'The review step is a quality check. A second pair of eyes (human or automated test) can catch bugs, typos, or problems before they reach the live site.',
  },
  {
    question: 'In this project, who reviews pull requests?',
    options: [
      'Ronny reviews every pull request manually',
      'Nobody — all code goes straight to main',
      'Automated checks (CI/CD) and sometimes Gigi',
      'Only external contributors',
    ],
    correctIndex: 2,
    explanation:
      'Automated checks run first — they build the app and run tests. If those pass, Gigi (or the orchestrator agent) can approve the merge. This keeps quality high without slowing things down.',
  },
  {
    question: 'What happens after a pull request is merged?',
    options: [
      'Nothing — it just closes the PR',
      'The branch is deleted and all changes are lost',
      'The changes appear on the main branch and the CI/CD pipeline deploys them',
      'A new repository is created',
    ],
    correctIndex: 2,
    explanation:
      'Once merged, the changes become part of main. The CI/CD pipeline then automatically builds and deploys the new version — so the live website updates within minutes.',
  },
]

const PR_WALKTHROUGH = [
  {
    stage: 'Branch',
    icon: '&#x1F332;',
    color: 'emerald',
    title: 'Create a branch',
    description:
      'A developer (or AI agent) starts by creating a new branch. Think of it as making a private copy of the project where changes can be tried out safely without affecting the live site.',
    realExample: {
      label: 'Real example from this project',
      text: 'Every lesson you have read in this app was built on a separate branch — for example a branch called "add-shell-basics-lesson" just for the shell commands page.',
    },
  },
  {
    stage: 'Commit',
    icon: '&#x270F;&#xFE0F;',
    color: 'blue',
    title: 'Make commits',
    description:
      'The developer writes code and saves their progress using commits. Each commit is a snapshot — a named checkpoint in the history of the branch. Commit messages explain what was done.',
    realExample: {
      label: 'Real example from this project',
      text: 'A commit message might say: "add WSL2 setup page with step-by-step instructions". Every change in this app is recorded this way.',
    },
  },
  {
    stage: 'Pull Request',
    icon: '&#x1F4CC;',
    color: 'violet',
    title: 'Open a pull request',
    description:
      'When the work is ready, the developer opens a pull request on GitHub. This says: "Here are my changes — please review them." The PR shows a summary and a diff (a list of every line that was added or removed).',
    realExample: {
      label: 'See real PRs from this project',
      link: 'https://github.com/Sayfan-AI/ronny-learns-ai/pulls?state=closed',
      linkText: 'View closed pull requests',
      text: 'Every feature in this app arrived through a PR just like this.',
    },
  },
  {
    stage: 'Review',
    icon: '&#x1F50D;',
    color: 'amber',
    title: 'Review and checks',
    description:
      'Automated checks (CI/CD) run to build the app and test it. If they pass, a human reviewer (or the orchestrator agent) looks at the code. They can approve it, request changes, or leave comments on specific lines.',
    realExample: {
      label: 'Real example from this project',
      text: 'GitHub Actions runs the build automatically on every PR. If the build fails, the PR shows a red cross and cannot be merged until the problem is fixed.',
    },
  },
  {
    stage: 'Merge',
    icon: '&#x2705;',
    color: 'green',
    title: 'Merge and deploy',
    description:
      'Once the PR is approved, it is merged into the main branch. The CI/CD pipeline then automatically builds and deploys the updated app — so the live website reflects the changes within minutes.',
    realExample: {
      label: 'Real example from this project',
      text: 'When the agent that built this lesson merged its PR, Cloudflare Pages automatically rebuilt the site. Within 2-3 minutes the lesson appeared here for you to read.',
    },
  },
]

const STAGE_COLORS: Record<string, { bg: string; border: string; badge: string; active: string }> = {
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-300', badge: 'bg-emerald-100 text-emerald-800', active: 'border-emerald-400 shadow-emerald-100' },
  blue:    { bg: 'bg-blue-50',    border: 'border-blue-300',    badge: 'bg-blue-100 text-blue-800',    active: 'border-blue-400 shadow-blue-100' },
  violet:  { bg: 'bg-violet-50',  border: 'border-violet-300',  badge: 'bg-violet-100 text-violet-800',  active: 'border-violet-400 shadow-violet-100' },
  amber:   { bg: 'bg-amber-50',   border: 'border-amber-300',   badge: 'bg-amber-100 text-amber-800',   active: 'border-amber-400 shadow-amber-100' },
  green:   { bg: 'bg-green-50',   border: 'border-green-300',   badge: 'bg-green-100 text-green-800',   active: 'border-green-400 shadow-green-100' },
}

function WalkthroughStep({ step, isActive, onSelect }: { step: typeof PR_WALKTHROUGH[0]; isActive: boolean; onSelect: () => void }) {
  const colors = STAGE_COLORS[step.color]
  return (
    <div
      className={`rounded-2xl border-2 transition-all shadow-sm cursor-pointer ${isActive ? `${colors.active} shadow-lg` : 'border-gray-200 hover:border-gray-300'} bg-white`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onSelect()}
      aria-expanded={isActive}
    >
      <div className="px-4 sm:px-6 py-4 flex items-center gap-4">
        <span className="text-2xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: step.icon }} />
        <div className="flex-1 min-w-0">
          <span className={`text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${colors.badge}`}>{step.stage}</span>
          <p className="font-semibold text-gray-800 mt-1">{step.title}</p>
        </div>
        <span className={`text-gray-400 text-lg transition-transform flex-shrink-0 ${isActive ? 'rotate-180' : ''}`}>&#x25BC;</span>
      </div>
      {isActive && (
        <div className={`mx-3 mb-3 rounded-xl p-4 space-y-3 ${colors.bg} border ${colors.border}`}>
          <p className="text-gray-700 text-base leading-relaxed">{step.description}</p>
          <div className="bg-white bg-opacity-70 rounded-lg p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">{step.realExample.label}</p>
            <p className="text-gray-700 text-sm leading-relaxed">{step.realExample.text}</p>
            {step.realExample.link && (
              <a
                href={step.realExample.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-semibold underline mt-2"
                onClick={e => e.stopPropagation()}
              >
                {step.realExample.linkText} &#x2197;
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export function PullRequest() {
  useEffect(() => {
    markVisited('pull-request')
  }, [])

  const [activeWalkthroughStep, setActiveWalkthroughStep] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-8">

        {/* Header */}
        <div className="space-y-3">
          <Link to="/" className="text-blue-500 hover:underline text-sm">
            &larr; Back to home
          </Link>
          <div className="bg-violet-100 border border-violet-200 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-4xl">&#x1F4CB;</span>
              <div>
                <p className="text-xs font-semibold text-violet-700 uppercase tracking-wide">Lesson</p>
                <h1 className="text-3xl font-bold text-gray-800 leading-tight">
                  What is a pull request?
                </h1>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              A pull request is how changes get reviewed and approved before they go live. It is one of
              the most important collaboration tools in software development.
            </p>
            <p className="text-violet-700 text-sm font-medium">About 4 min read</p>
          </div>
        </div>

        {/* Section 1: The idea */}
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The idea behind a pull request</h2>
          <p className="text-gray-600 leading-relaxed">
            Imagine you have been working on a revised version of a document. You are happy with your
            changes and want to add them to the shared original. But before you do, you send it to a
            colleague and say: "I made these changes — have a look and let me know if it is OK."
          </p>
          <p className="text-gray-600 leading-relaxed">
            That is a pull request. In GitHub, a developer (or an AI agent) works on a branch, then
            opens a pull request to propose merging that branch into main. It is a request for someone
            to review the changes before they go live.
          </p>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
            <p className="text-violet-800 font-medium">
              The name "pull request" comes from the technical action: you are asking the main branch
              to "pull in" your changes. Some platforms call it a "merge request" — same idea.
            </p>
          </div>
        </div>

        {/* Section 2: What's in a PR */}
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What does a pull request contain?</h2>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4DD;',
                title: 'A description',
                desc: 'What changed, why, and how to test it. In this project the AI agents write these descriptions automatically.',
              },
              {
                icon: '&#x1F50D;',
                title: 'A diff',
                desc: 'A side-by-side view showing exactly what lines were added, changed, or removed. Green = added, red = removed.',
              },
              {
                icon: '&#x2705;',
                title: 'Automated checks',
                desc: 'The CI/CD pipeline runs tests and builds the app. If anything fails, the PR shows a red cross — and the merge is blocked.',
              },
              {
                icon: '&#x1F4AC;',
                title: 'Review comments',
                desc: 'Reviewers can leave comments on specific lines of code, request changes, or approve the PR.',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <span className="text-2xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: item.icon }} />
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: PR in this project */}
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How pull requests work in this project</h2>
          <p className="text-gray-600 leading-relaxed">
            In this project, the AI agents do most of the work — and they use pull requests to do it
            safely. Here is the flow:
          </p>
          <ol className="space-y-3">
            {[
              'The orchestrator agent creates a GitHub issue describing a new feature',
              'A worker agent picks up the issue and creates a branch',
              'The worker builds the feature on the branch and commits the code',
              'The worker opens a pull request on GitHub',
              'Automated checks run — they build the app and check for errors',
              'If checks pass, the PR is merged into main',
              'The live website updates automatically within minutes',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-violet-100 text-violet-700 font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-gray-600 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
            <p className="text-violet-800 font-medium">
              You can see real pull requests from this project on{' '}
              <a
                href="https://github.com/Sayfan-AI/ronny-learns-ai/pulls?state=closed"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-violet-900"
              >
                GitHub &rarr;
              </a>
              . Every feature you have read about in this app arrived through a pull request.
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl p-6 text-white space-y-3">
          <h2 className="text-xl font-bold">Why pull requests matter</h2>
          <ul className="space-y-2">
            {[
              'They make it safe to try new things — on a branch, not the live site',
              'They create a record of every change and why it was made',
              'They give automated checks a chance to catch problems before users see them',
              'They enable collaboration — multiple people (or agents) can work in parallel',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-violet-300 font-bold flex-shrink-0 mt-0.5">&#x2713;</span>
                <span className="text-violet-100">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interactive walkthrough */}
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">&#x1F5FA;&#xFE0F;</span>
            <h2 className="text-2xl font-bold text-gray-800">Interactive walkthrough: branch to merge</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Click each stage to see what happens at that point in a real pull request, with examples from this very project.
          </p>
          {/* Flow diagram */}
          <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap py-2">
            {PR_WALKTHROUGH.map((step, i) => (
              <div key={step.stage} className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={() => setActiveWalkthroughStep(activeWalkthroughStep === i ? null : i)}
                  className={`flex flex-col items-center px-2 sm:px-3 py-2 rounded-xl transition-all text-xs sm:text-sm font-semibold ${activeWalkthroughStep === i ? `${STAGE_COLORS[step.color].badge} ring-2 ring-offset-1 ring-current` : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  <span className="text-xl mb-1" dangerouslySetInnerHTML={{ __html: step.icon }} />
                  {step.stage}
                </button>
                {i < PR_WALKTHROUGH.length - 1 && (
                  <span className="text-gray-300 font-bold text-lg">&#x2192;</span>
                )}
              </div>
            ))}
          </div>
          {/* Step details */}
          <div className="space-y-2">
            {PR_WALKTHROUGH.map((step, i) => (
              <WalkthroughStep
                key={step.stage}
                step={step}
                isActive={activeWalkthroughStep === i}
                onSelect={() => setActiveWalkthroughStep(activeWalkthroughStep === i ? null : i)}
              />
            ))}
          </div>
        </div>

        {/* Quiz */}
        <Quiz questions={questions} title="Test your knowledge: pull requests" lessonId="pull-request" lessonTitle="What is a pull request?" />

        {/* Navigation */}
        <div className="flex justify-between items-center pt-2">
          <Link
            to="/learn/what-is-version-control"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
          >
            &larr; Version control
          </Link>
          <Link
            to="/my-progress"
            className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-colors"
          >
            My progress &rarr;
          </Link>
        </div>


        {/* Next lesson */}
        <RelatedLessons currentId="pull-request" />

        <NextLesson currentId="pull-request" />

      </div>
    </div>
  )
}
