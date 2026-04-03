import { Link } from '@tanstack/react-router'

const agents = [
  {
    emoji: '&#x1F5FA;&#xFE0F;',
    name: 'The Orchestrator',
    role: 'Project Manager',
    analogy: 'Think of a skilled project manager who checks the to-do list every few minutes, decides what is most important right now, and hands the task to the right person. The Orchestrator does exactly that — automatically.',
    does: [
      'Reads all open GitHub Issues to understand what work is waiting',
      'Decides which task to tackle next based on priority and dependencies',
      'Launches the right Worker agent for each task',
      'Checks if a milestone is done and plans what comes next',
    ],
  },
  {
    emoji: '&#x1F477;',
    name: 'Worker Agents',
    role: 'The Builders',
    analogy: 'Like a skilled contractor who is given a blueprint and goes off to build it — no micromanagement needed. A fresh Worker is dispatched for every task.',
    does: [
      'Reads the task description from a GitHub Issue',
      'Writes or edits the code needed to complete the task',
      'Verifies the build passes (no errors)',
      'Commits the changes and marks the issue as done',
    ],
  },
  {
    emoji: '&#x1F4AC;',
    name: 'Human Interaction Agent',
    role: 'The Communicator',
    analogy: 'Like a very polite assistant who only interrupts you when something genuinely requires your attention — and always explains clearly what is needed and why.',
    does: [
      'Writes updates and status reports as GitHub Issues',
      'Asks Gigi for help when the AI is blocked or needs a decision',
      'Translates technical problems into plain language',
      'Closes issues once the human has responded and the problem is unblocked',
    ],
  },
  {
    emoji: '&#x1F9EC;',
    name: 'The Evolver',
    role: 'Self-Improver',
    analogy: 'Like a consultant who watches the whole team work and occasionally says "we should do this differently" — and then actually makes the change.',
    does: [
      'Reviews how the system is working and spots inefficiencies',
      'Proposes and implements improvements to the agents themselves',
      'Updates the rules and guides the agents follow',
      'Escalates big changes that need human approval',
    ],
  },
  {
    emoji: '&#x1F50D;',
    name: 'Health Monitor',
    role: 'The Watchdog',
    analogy: 'Like a quality inspector who walks the factory floor looking for anything that has stalled, looped, or gone wrong — and raises the alarm when needed.',
    does: [
      'Watches for signs that agents are stuck or repeating the same work',
      'Checks that progress is being made on milestones',
      'Escalates to Gigi if something has been broken for too long',
      'Keeps the whole system honest and forward-moving',
    ],
  },
]

export function MeetTheAgents() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F465;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Meet the AI agents
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            This app was built by a team — but not a human one. Here are the five AI
            agents that planned, built, and deployed everything you have read.
          </p>
        </div>

        {/* The loop diagram */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F501;</span>
            <h2 className="text-2xl font-semibold text-gray-700">How the loop works</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every few minutes (or whenever something happens on GitHub), this cycle runs:
          </p>
          <div className="space-y-3">
            {[
              { step: 'Trigger', desc: 'A timer fires, or a GitHub event happens (like an issue being labeled)' },
              { step: 'Orchestrator assesses', desc: 'It reads the open issues, decides what to work on, and dispatches a Worker' },
              { step: 'Worker builds', desc: 'The Worker reads the task, writes the code, and commits it to GitHub' },
              { step: 'GitHub deploys', desc: 'The new code is automatically built and published to the website' },
              { step: 'Human reviews (optionally)', desc: 'Gigi checks in when asked, or when something is blocked' },
              { step: 'Repeat', desc: 'The loop runs again — the project keeps advancing, around the clock' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <span className="font-semibold text-gray-800">{item.step}: </span>
                  <span className="text-gray-600">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Agent cards */}
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">The team</h2>
          {agents.map((agent, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl" dangerouslySetInnerHTML={{ __html: agent.emoji }} />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{agent.name}</h3>
                  <p className="text-violet-600 font-medium text-sm">{agent.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-violet-200 pl-4">
                {agent.analogy}
              </p>
              <div>
                <p className="font-semibold text-gray-700 mb-2">What it actually does:</p>
                <ul className="space-y-1">
                  {agent.does.map((item, j) => (
                    <li key={j} className="flex gap-2 text-gray-600">
                      <span className="text-violet-400 flex-shrink-0">&#x2022;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* You are part of this */}
        <div className="bg-violet-50 border border-violet-200 rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F91D;</span>
            <h2 className="text-2xl font-semibold text-violet-800">You are now part of this team</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            By reading this app, you have seen the results of these agents working together.
            Every page, every quiz, every update happened automatically — with Gigi setting
            the direction and the agents doing the building.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            When you get your GitHub account and join the repository, you will be able
            to open issues, leave comments, and watch the agents respond in real time.
            You become part of the coordination layer that makes this whole system work.
          </p>
          <a
            href="https://github.com/Sayfan-AI/ronny-learns-ai/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
          >
            See the agents&rsquo; work on GitHub &rarr;
          </a>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-2">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
          >
            &larr; Home
          </Link>
        </div>

      </div>
    </div>
  )
}
