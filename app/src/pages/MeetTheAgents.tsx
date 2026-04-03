import { Link } from '@tanstack/react-router'
import { useMarkVisited } from '../hooks/useMarkVisited'

export function MeetTheAgents() {
  useMarkVisited('meet-the-agents')
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F916;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Meet the AI agents
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            This app was not built by a single person sitting at a keyboard. A team of AI agents
            built it together — automatically. Here is who they are.
          </p>
        </div>

        {/* The dev loop overview */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F504;</span>
            <h2 className="text-2xl font-semibold text-gray-700">The genesis development loop</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every 10 minutes (or when something happens on GitHub), a loop runs automatically:
          </p>
          <div className="bg-violet-50 rounded-xl p-4 space-y-2">
            {[
              'A trigger fires (a timer, or an event like an issue being closed)',
              'The Orchestrator wakes up, reads the current state, and decides what to do',
              'A Worker is sent to build the next feature or fix the next bug',
              'The Worker commits code to GitHub, which deploys the updated app',
              'The cycle repeats',
            ].map((step, i) => (
              <div key={i} className="flex gap-3 items-start text-violet-900">
                <span className="font-bold flex-shrink-0">{i + 1}.</span>
                <span className="text-base leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Gigi does not press a button to start any of this. It runs around the clock.
          </p>
        </div>

        {/* The agents */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F465;</span>
            <h2 className="text-2xl font-semibold text-gray-700">The team</h2>
          </div>

          {[
            {
              icon: '&#x1F5FA;&#xFE0F;',
              name: 'The Orchestrator',
              analogy: 'Like a project manager',
              desc: 'Checks what is open, decides what to tackle next, and dispatches the right agent for each job. It reads all the GitHub issues, decides which ones are ready to work on, and sends a Worker to handle them.',
            },
            {
              icon: '&#x1F477;',
              name: 'Workers',
              analogy: 'Like a builder or developer',
              desc: 'Workers write the actual code, create files, update pages, and push changes to GitHub. Each task gets its own fresh Worker. The Worker you are reading about right now wrote this very page.',
            },
            {
              icon: '&#x1F4AC;',
              name: 'Human Interaction Agent',
              analogy: 'Like a messenger or reporter',
              desc: 'When the AI hits a wall — needs access to something, needs Gigi to make a decision, or has something important to report — this agent opens a GitHub issue and writes a clear, human-readable message. It speaks on behalf of the whole system.',
            },
            {
              icon: '&#x1F50D;',
              name: 'Health Monitor',
              analogy: 'Like a doctor for the dev system',
              desc: 'Watches for signs of trouble: agents stuck in loops, tasks not progressing, the same work being repeated. If something looks wrong, it escalates to Gigi.',
            },
            {
              icon: '&#x1F9EC;',
              name: 'Evolver',
              analogy: 'Like a systems architect',
              desc: 'Responsible for improving the dev system itself — writing better agent instructions, designing new tools, and making the whole operation smarter over time.',
            },
          ].map((agent, i) => (
            <div key={i} className="flex gap-4 items-start border-b border-gray-100 pb-5 last:border-0 last:pb-0">
              <span className="text-3xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: agent.icon }} />
              <div className="space-y-1">
                <p className="font-semibold text-gray-800 text-lg">{agent.name}</p>
                <p className="text-sm text-violet-700 font-medium">{agent.analogy}</p>
                <p className="text-gray-600 text-base leading-relaxed">{agent.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What coordinates them */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F517;</span>
            <h2 className="text-2xl font-semibold text-gray-700">What coordinates them all: GitHub</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            All these agents share the same workspace: GitHub. They do not have a private channel
            or a group chat. Everything happens in public, on GitHub:
          </p>
          <ul className="list-none space-y-2 text-gray-600 text-lg">
            <li className="flex gap-3"><span>&#x1F4CB;</span><span><strong>Issues</strong> = tasks to do</span></li>
            <li className="flex gap-3"><span>&#x1F4BE;</span><span><strong>Commits</strong> = work done</span></li>
            <li className="flex gap-3"><span>&#x1F4AC;</span><span><strong>Issue comments</strong> = updates and messages</span></li>
            <li className="flex gap-3"><span>&#x26A1;</span><span><strong>GitHub Actions</strong> = the timer that kicks everything off</span></li>
          </ul>
          <p className="text-gray-600 text-lg leading-relaxed">
            And now that you have a GitHub account, you can watch it all happening in real time.
          </p>
        </div>

        {/* Call to action */}
        <div className="bg-violet-50 border border-violet-200 rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F440;</span>
            <h2 className="text-2xl font-semibold text-violet-800">Watch the team work right now</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every issue on the GitHub repo is a real task that was opened, worked on, and closed
            by one of these agents. You can read them, see the code that was written, and follow
            the history of how this whole app came to be.
          </p>
          <a
            href="https://github.com/Sayfan-AI/ronny-learns-ai/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-violet-600 hover:bg-violet-700 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow transition-colors duration-200"
          >
            See all issues on GitHub &rarr;
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
          <Link
            to="/learn/genesis-system"
            className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-colors"
          >
            The Genesis System &rarr;
          </Link>
        </div>

      </div>
    </div>
  )
}
