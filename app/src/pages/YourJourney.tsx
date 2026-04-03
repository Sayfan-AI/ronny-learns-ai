import { Link } from '@tanstack/react-router'

const modules = [
  { icon: '🔑', title: 'GitHub Registration', desc: 'You created a real GitHub account — your key to the open source world.', path: '/tutorial/github-signup' },
  { icon: '📁', title: 'What is GitHub for?', desc: 'Repos, commits, issues, pull requests — you know what they all mean now.', path: '/learn/github-basics' },
  { icon: '🤖', title: 'What is AI?', desc: 'You understand what AI is, how it learns, and what it can and cannot do.', path: '/learn/what-is-ai' },
  { icon: '🔗', title: 'What is an API?', desc: 'You can now explain APIs using the waiter analogy — just like real developers do.', path: '/learn/what-is-api' },
  { icon: '⚙️', title: 'What is the Genesis system?', desc: 'You learned how Gigi uses AI agents to build software — automatically.', path: '/learn/genesis-system' },
  { icon: '🏗️', title: 'How this app was built', desc: 'You saw the full story of how AI planned, coded, and deployed what you are reading.', path: '/learn/how-this-was-built' },
  { icon: '📋', title: 'Live Activity', desc: 'You saw the real GitHub issues from this project — fetched live from the GitHub API.', path: '/explore/live-activity' },
  { icon: '🔄', title: 'How the agents work', desc: 'You understand the genesis dev loop: trigger → orchestrator → worker → commit → deploy.', path: '/explore/how-agents-work' },
]

const reflections = [
  'What surprised you the most on this learning journey?',
  'Is there something you would like to explore more deeply?',
  'If you had to explain "how AI builds software" to a friend in two sentences, what would you say?',
]

export function YourJourney() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center space-y-3">
          <Link to="/" className="text-blue-500 hover:underline text-sm">
            &larr; Back to home
          </Link>
          <div className="text-6xl pt-2">🎉</div>
          <h1 className="text-3xl font-bold text-gray-800">You did it, Ronny!</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            You have completed the learning journey. From zero programming knowledge to understanding
            how AI agents build software — that is genuinely impressive.
          </p>
        </div>

        {/* Certificate-style summary */}
        <div className="bg-white rounded-2xl shadow-md border-2 border-emerald-200 p-8 space-y-6">
          <div className="text-center space-y-1">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Learning Summary</p>
            <h2 className="text-2xl font-bold text-gray-800">What you covered</h2>
          </div>

          <div className="space-y-3">
            {modules.map((mod, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-xl flex-shrink-0">
                  {mod.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-800">{mod.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{mod.desc}</p>
                </div>
                <Link
                  to={mod.path}
                  className="text-xs text-emerald-600 hover:underline flex-shrink-0 mt-1"
                >
                  Review
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* What Ronny can now do */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold text-emerald-800">What you can do now</h2>
          <ul className="space-y-2 text-gray-700">
            {[
              'Browse the project on GitHub and understand what you are looking at',
              'Read an issue and know whether it is open (to do) or closed (done)',
              'Look at the commit history and understand that an AI wrote that code',
              'Watch a GitHub Actions run and know it is an agent executing',
              'Explain to someone else what an API is',
              'Explain the genesis dev loop from memory',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold flex-shrink-0 mt-0.5">&#x2713;</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Reflection questions */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">A moment to reflect</h2>
          <p className="text-gray-500 text-sm">
            These are not graded — they are just for you. Think about them, or discuss them with Gigi.
          </p>
          <div className="space-y-3">
            {reflections.map((q, i) => (
              <div key={i} className="flex gap-3 items-start bg-gray-50 rounded-xl p-4">
                <span className="text-gray-400 font-bold flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Explore the real thing */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Explore the real project</h2>
          <p className="text-gray-600 leading-relaxed">
            Everything you have learned about is real and public. You can browse it all right now,
            no login needed.
          </p>
          <div className="space-y-2">
            <a href="https://github.com/Sayfan-AI/ronny-learns-ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
              <span>🏠</span> The project repository &rarr;
            </a>
            <a href="https://github.com/Sayfan-AI/ronny-learns-ai/issues" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
              <span>📋</span> All the issues (the AI team&apos;s to-do list) &rarr;
            </a>
            <a href="https://github.com/Sayfan-AI/ronny-learns-ai/actions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
              <span>&#x26A1;</span> The automated runs (agents in action) &rarr;
            </a>
            <a href="https://github.com/Sayfan-AI/ronny-learns-ai/commits/main" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
              <span>&#x1F4BE;</span> The commit history (every change ever made) &rarr;
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-2">
          <Link
            to="/explore/how-agents-work"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
          >
            &larr; How agents work
          </Link>
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors"
          >
            Back to home
          </Link>
        </div>

      </div>
    </div>
  )
}
