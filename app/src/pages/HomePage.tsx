import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

const MODULES = [
  {
    id: 'github-signup',
    title: 'Create your GitHub account',
    description: 'Step-by-step guide to signing up for GitHub — your key to the whole project.',
    readingTime: '5 min',
    icon: '🔑',
    to: '/tutorial/github-signup',
    color: 'blue',
  },
  {
    id: 'github-basics',
    title: 'What is GitHub for?',
    description: 'Repos, commits, issues, and pull requests — explained simply, no coding needed.',
    readingTime: '4 min',
    icon: '📁',
    to: '/learn/github-basics',
    color: 'green',
  },
  {
    id: 'what-is-ai',
    title: 'What is AI?',
    description: 'Artificial intelligence explained without jargon — plus what Claude can and cannot do.',
    readingTime: '5 min',
    icon: '🤖',
    to: '/learn/what-is-ai',
    color: 'purple',
  },
  {
    id: 'what-is-api',
    title: 'What is an API?',
    description: 'How programs talk to each other — in plain English, with real-world examples.',
    readingTime: '4 min',
    icon: '🔗',
    to: '/learn/what-is-api',
    color: 'teal',
  },
  {
    id: 'genesis-system',
    title: 'What is the Genesis system?',
    description: 'The AI team that builds this app — see how agents coordinate through GitHub.',
    readingTime: '4 min',
    icon: '⚙️',
    to: '/learn/genesis-system',
    color: 'orange',
  },
  {
    id: 'how-this-was-built',
    title: 'How this app was built',
    description: 'The full story — how AI planned, coded, and deployed what you are reading.',
    readingTime: '5 min',
    icon: '🏗️',
    to: '/learn/how-this-was-built',
    color: 'indigo',
  },
]

const COLOR_MAP: Record<string, { border: string; badge: string; button: string }> = {
  blue:   { border: 'hover:border-blue-300',   badge: 'bg-blue-100 text-blue-700',   button: 'bg-blue-600 hover:bg-blue-700 text-white' },
  green:  { border: 'hover:border-green-300',  badge: 'bg-green-100 text-green-700', button: 'bg-green-600 hover:bg-green-700 text-white' },
  purple: { border: 'hover:border-purple-300', badge: 'bg-purple-100 text-purple-700', button: 'bg-purple-600 hover:bg-purple-700 text-white' },
  teal:   { border: 'hover:border-teal-300',   badge: 'bg-teal-100 text-teal-700',   button: 'bg-teal-600 hover:bg-teal-700 text-white' },
  orange: { border: 'hover:border-orange-300', badge: 'bg-orange-100 text-orange-700', button: 'bg-orange-600 hover:bg-orange-700 text-white' },
  indigo: { border: 'hover:border-indigo-300', badge: 'bg-indigo-100 text-indigo-700', button: 'bg-indigo-600 hover:bg-indigo-700 text-white' },
}

const VISITED_KEY = 'ronny-visited-modules'

function loadVisited(): Set<string> {
  try {
    const raw = localStorage.getItem(VISITED_KEY)
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

export function HomePage() {
  const [visited, setVisited] = useState<Set<string>>(new Set())

  useEffect(() => {
    setVisited(loadVisited())
  }, [])

  const completedCount = MODULES.filter(m => visited.has(m.id)).length

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl">👋</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Hi Ronny! Welcome to your AI learning journey.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Follow the steps below to learn about GitHub and AI — no experience needed.
          </p>
        </div>

        {/* Progress bar */}
        {completedCount > 0 && (
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">Your progress</span>
              <span className="text-sm text-gray-500">{completedCount} of {MODULES.length} modules visited</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3">
              <div
                className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${(completedCount / MODULES.length) * 100}%` }}
              />
            </div>
            {completedCount === MODULES.length && (
              <p className="text-green-700 font-medium text-center">
                You have visited all the modules. Nice work!
              </p>
            )}
          </div>
        )}

        {/* Learning path */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">Your learning path</h2>
          <p className="text-gray-500 text-center text-sm">Start at the top and work your way down.</p>

          <div className="space-y-3">
            {MODULES.map((mod, idx) => {
              const done = visited.has(mod.id)
              const colors = COLOR_MAP[mod.color]
              return (
                <Link
                  key={mod.id}
                  to={mod.to}
                  onClick={() => {
                    const next = new Set(visited)
                    next.add(mod.id)
                    setVisited(next)
                    localStorage.setItem(VISITED_KEY, JSON.stringify([...next]))
                  }}
                  className={`bg-white rounded-xl shadow-sm border-2 transition-all duration-200 p-5 flex items-center gap-4 ${
                    done ? 'border-green-300' : `border-gray-100 ${colors.border}`
                  }`}
                >
                  {/* Step number / check */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${
                    done ? 'bg-green-500 text-white' : colors.badge
                  }`}>
                    {done ? '✓' : idx + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{mod.icon}</span>
                      <h3 className="font-semibold text-gray-800 text-lg leading-tight">{mod.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">{mod.description}</p>
                    {'readingTime' in mod && (
                      <p className="text-gray-400 text-xs mt-1">{(mod as { readingTime: string }).readingTime} read</p>
                    )}
                  </div>

                  {/* Arrow */}
                  <span className="text-gray-400 text-xl flex-shrink-0">&rarr;</span>
                </Link>
              )
            })}
          </div>
        </div>

        <p className="text-gray-400 text-sm text-center">
          Each page ends with a short quiz to check what you learned.
        </p>

        {/* Next steps CTA */}
        <div className="border-t border-gray-200 pt-6">
          <Link
            to="/learn/next-steps"
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-md p-6 flex items-center gap-4 transition-colors duration-200"
          >
            <span className="text-4xl flex-shrink-0">&#x1F680;</span>
            <div>
              <h3 className="font-semibold text-white text-xl leading-tight">Ready to get involved?</h3>
              <p className="text-emerald-100 text-sm mt-1">After you have gone through the modules, here is how to go from learning to doing.</p>
            </div>
            <span className="text-white text-xl flex-shrink-0 ml-auto">&rarr;</span>
          </Link>
        </div>

        {/* For Gigi section */}
        <div className="border-t border-gray-200 pt-4 space-y-2">
          <p className="text-xs text-gray-400 text-center uppercase tracking-wide font-semibold">For Gigi</p>
          <Link
            to="/invite-ronny"
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-indigo-200 transition-all duration-200 flex items-center gap-4"
          >
            <span className="text-3xl flex-shrink-0">&#x1F4E9;</span>
            <div>
              <h3 className="font-semibold text-gray-800 text-base">How to invite Ronny to GitHub</h3>
              <p className="text-gray-500 text-sm">Step-by-step guide to adding Ronny as a collaborator on this project.</p>
            </div>
            <span className="text-gray-400 text-xl flex-shrink-0 ml-auto">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
