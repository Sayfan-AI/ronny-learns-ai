import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useProfile } from '../hooks/useProfile'

const VISITED_KEY = 'ronny-visited-modules'

const ALL_MODULES = [
  { id: 'github-signup',    icon: '🔑', title: 'Create your GitHub account',           to: '/tutorial/github-signup' },
  { id: 'github-basics',    icon: '📁', title: 'What is GitHub for?',                  to: '/learn/github-basics' },
  { id: 'what-is-ai',       icon: '🤖', title: 'What is AI?',                          to: '/learn/what-is-ai' },
  { id: 'what-is-api',      icon: '🔗', title: 'What is an API?',                      to: '/learn/what-is-api' },
  { id: 'genesis-system',   icon: '⚙️',  title: 'What is the Genesis system?',         to: '/learn/genesis-system' },
  { id: 'how-this-was-built', icon: '🏗️', title: 'How this app was built',             to: '/learn/how-this-was-built' },
  { id: 'what-is-ci-cd',    icon: '🏭', title: 'How does the website update?',         to: '/learn/what-is-ci-cd' },
  { id: 'version-control',  icon: '💾', title: 'How does version control work?',       to: '/learn/what-is-version-control' },
  { id: 'pull-request',     icon: '📋', title: 'What is a pull request?',              to: '/learn/what-is-a-pull-request' },
  { id: 'meet-the-agents',  icon: '👥', title: 'Meet the AI agents',                  to: '/agents' },
]

function loadVisited(): Set<string> {
  try {
    const raw = localStorage.getItem(VISITED_KEY)
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

export function MyProgress() {
  const [visited, setVisited] = useState<Set<string>>(new Set())
  const { profile } = useProfile()

  useEffect(() => {
    setVisited(loadVisited())
  }, [])

  const completedCount = ALL_MODULES.filter(m => visited.has(m.id)).length
  const total = ALL_MODULES.length
  const pct = Math.round((completedCount / total) * 100)
  const allDone = completedCount === total
  const displayName = profile?.name || 'Ronny'

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center space-y-3">
          <Link to="/" className="text-blue-500 hover:underline text-sm block">
            &larr; Back to home
          </Link>

          {allDone ? (
            <>
              <div className="text-7xl pt-2">&#x1F389;</div>
              <h1 className="text-4xl font-bold text-gray-800">
                You did it, {displayName}!
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                You have completed every module. From zero programming knowledge to understanding
                how AI agents build real software — that is genuinely impressive.
              </p>
            </>
          ) : (
            <>
              <div className="text-6xl pt-2">&#x1F4AA;</div>
              <h1 className="text-3xl font-bold text-gray-800">
                Your learning progress
              </h1>
              <p className="text-gray-600 leading-relaxed">
                {completedCount === 0
                  ? 'Start with the first module and work your way through the list!'
                  : `You have visited ${completedCount} of ${total} modules. Keep going!`}
              </p>
            </>
          )}
        </div>

        {/* Progress bar */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">Overall progress</span>
            <span className="text-2xl font-bold text-emerald-600">{pct}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-4">
            <div
              className="bg-emerald-500 h-4 rounded-full transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="text-gray-500 text-sm text-center">
            {completedCount} of {total} modules visited
          </p>
        </div>

        {/* Module list */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-3">
          <h2 className="text-xl font-semibold text-gray-700">All modules</h2>
          <div className="space-y-2">
            {ALL_MODULES.map((mod) => {
              const done = visited.has(mod.id)
              return (
                <Link
                  key={mod.id}
                  to={mod.to}
                  className={`flex items-center gap-4 p-3 rounded-xl border transition-all duration-150 ${
                    done
                      ? 'border-emerald-200 bg-emerald-50 hover:bg-emerald-100'
                      : 'border-gray-100 bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-2xl flex-shrink-0">{mod.icon}</span>
                  <span className={`flex-1 font-medium leading-tight ${done ? 'text-emerald-800' : 'text-gray-600'}`}>
                    {mod.title}
                  </span>
                  {done ? (
                    <span className="text-emerald-500 font-bold text-xl flex-shrink-0">&#x2713;</span>
                  ) : (
                    <span className="text-gray-300 text-xl flex-shrink-0">&#x25CB;</span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>

        {/* What's next */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">What would you like to do next?</h2>
          <div className="space-y-3">
            <Link
              to="/feedback"
              className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors"
            >
              <span className="text-3xl flex-shrink-0">&#x1F4AC;</span>
              <div>
                <p className="font-semibold text-blue-800">Share your thoughts</p>
                <p className="text-blue-600 text-sm">Tell us what you enjoyed or what confused you — no GitHub needed.</p>
              </div>
              <span className="text-blue-400 ml-auto flex-shrink-0">&rarr;</span>
            </Link>

            <Link
              to="/explore/live-activity"
              className="flex items-center gap-4 p-4 rounded-xl bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 transition-colors"
            >
              <span className="text-3xl flex-shrink-0">&#x1F4CB;</span>
              <div>
                <p className="font-semibold text-indigo-800">See the AI at work</p>
                <p className="text-indigo-600 text-sm">Browse the real GitHub issues from this project — fetched live.</p>
              </div>
              <span className="text-indigo-400 ml-auto flex-shrink-0">&rarr;</span>
            </Link>

            <a
              href="https://github.com/Sayfan-AI/ronny-learns-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors"
            >
              <span className="text-3xl flex-shrink-0">&#x1F3E0;</span>
              <div>
                <p className="font-semibold text-gray-800">Explore the project on GitHub</p>
                <p className="text-gray-500 text-sm">Browse the real repository, issues, pull requests, and commit history.</p>
              </div>
              <span className="text-gray-400 ml-auto flex-shrink-0">&rarr;</span>
            </a>

            {allDone && (
              <Link
                to="/certificate"
                className="flex items-center gap-4 p-4 rounded-xl bg-amber-50 border border-amber-200 hover:bg-amber-100 transition-colors"
              >
                <span className="text-3xl flex-shrink-0">&#x1F3C6;</span>
                <div>
                  <p className="font-semibold text-amber-800">Get your certificate</p>
                  <p className="text-amber-600 text-sm">You earned it — view and save your certificate of completion.</p>
                </div>
                <span className="text-amber-400 ml-auto flex-shrink-0">&rarr;</span>
              </Link>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
