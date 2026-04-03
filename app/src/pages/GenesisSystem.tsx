export function GenesisSystem() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl">⚙️</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            What is the Genesis system?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Gigi uses a special AI setup called <strong>Genesis</strong> to build this app.
            Let&apos;s look at how it works — without the jargon.
          </p>
        </div>

        {/* What is Genesis */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🏗️</span>
            <h2 className="text-2xl font-semibold text-gray-700">What is it?</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Genesis is a system made up of several AI agents that work together like a small dev team.
            Instead of Gigi writing every line of code herself, she sets goals and the agents
            figure out how to achieve them.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Think of it as a team of robots — each with a different job — all coordinating through
            GitHub.
          </p>
        </div>

        {/* The agents */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">👥</span>
            <h2 className="text-2xl font-semibold text-gray-700">The agents and their roles</h2>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <span className="text-2xl">🗺️</span>
              <div>
                <p className="font-semibold text-gray-800 text-lg">Project Manager (Orchestrator)</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Checks what work is open, decides what to tackle next, and sends the right
                  agent to do it. Runs automatically every 10 minutes.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl">👷</span>
              <div>
                <p className="font-semibold text-gray-800 text-lg">Workers</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  The builders — they write code, create files, run tests, and deploy
                  changes to the website. A new worker is dispatched for each task.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl">💬</span>
              <div>
                <p className="font-semibold text-gray-800 text-lg">Human Interaction Agent</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Communicates with Gigi when the AI needs help, access, or a decision.
                  Opens GitHub issues to ask questions or report problems.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl">🔍</span>
              <div>
                <p className="font-semibold text-gray-800 text-lg">Health Monitor</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Watches for signs that the system is stuck in a loop or not making progress,
                  and escalates to Gigi if needed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How they coordinate */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🔗</span>
            <h2 className="text-2xl font-semibold text-gray-700">How do they coordinate?</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            The agents communicate through GitHub — the same tool you now have an account on!
          </p>
          <ul className="list-none space-y-3 text-gray-600 text-lg">
            <li className="flex gap-3">
              <span>📋</span>
              <span><strong>Issues</strong> are tasks. When work is needed, an issue is created. When it&apos;s done, the issue is closed.</span>
            </li>
            <li className="flex gap-3">
              <span>💾</span>
              <span><strong>Commits</strong> are when code is saved. Each one has a message explaining what changed.</span>
            </li>
            <li className="flex gap-3">
              <span>⚡</span>
              <span><strong>GitHub Actions</strong> automatically run the agents on a schedule or when something happens (like an issue being closed).</span>
            </li>
          </ul>
        </div>

        {/* Watch it happen */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">👀</span>
            <h2 className="text-2xl font-semibold text-orange-800">Watch it happen in real time</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Because everything happens on GitHub, you can watch the AI team work — right now.
            All the issues it has worked on, all the code it has written, all the comments it
            has left are public.
          </p>
          <a
            href="https://github.com/Sayfan-AI/ronny-learns-ai/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow transition-colors duration-200"
          >
            See the issues on GitHub &rarr;
          </a>
          <p className="text-gray-600 text-base">
            You can also look at the code, the commits, and the automated workflows that run
            everything. No login needed to browse.
          </p>
        </div>

        {/* Back link */}
        <div className="text-center">
          <a
            href="#/"
            className="inline-block text-blue-600 hover:text-blue-800 text-lg font-medium underline"
          >
            &larr; Back to home
          </a>
        </div>
      </div>
    </div>
  )
}
