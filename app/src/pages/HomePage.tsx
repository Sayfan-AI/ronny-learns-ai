import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

const MODULES = [
  {
    id: 'github-signup',
    title: 'Create your GitHub account',
    description: 'Step-by-step guide to signing up — takes about 5 minutes.',
    icon: '🔑',
    to: '/tutorial/github-signup',
    color: 'blue',
  },
  {
    id: 'github-basics',
    title: 'What is GitHub for?',
    description: 'Repos, commits, issues, and pull requests — explained simply.',
    icon: '📁',
    to: '/learn/github-basics',
    color: 'green',
  },
  {
    id: 'what-is-ai',
    title: 'What is AI?',
    description: 'Artificial intelligence explained without jargon.',
    icon: '🤖',
    to: '/learn/what-is-ai',
    color: 'purple',
  },
  {
    id: 'what-is-api',
    title: 'What is an API?',
    description: 'How programs talk to each other — in plain English.',
    icon: '🔗',
    to: '/learn/what-is-api',
    color: 'teal',
  },
  {
    id: 'genesis-system',
    title: 'What is the Genesis system?',
    description: 'The AI team that builds this app — watch it work in real time.',
    icon: '⚙️',
    to: '/learn/genesis-system',
    color: 'orange',
  },
  {
    id: 'how-this-was-built',
    title: 'How this app was built',
    description: 'The full story — how AI planned, coded, and deployed what you are reading.',
    icon: '&#x1F3D7;&#xFE0F;',
    to: '/learn/how-this-was-built',
    color: 'indigo',
  },
  {
    id: 'what-is-ci-cd',
    title: 'What is a CI/CD pipeline?',
    description: 'How code goes from a developer\'s computer to a live website — automatically.',
    icon: '&#x1F3ED;',
    to: '/learn/what-is-ci-cd',
    color: 'slate',
  },
  {
    id: 'meet-the-agents',
    title: 'Meet the AI agents',
    description: 'The team behind this app — who they are and how they coordinate.',
    icon: '&#x1F916;',
    to: '/learn/meet-the-agents',
    color: 'violet',
  },
]

const COLOR_MAP: Record<string, { border: string; badge: string }> = {
  blue:   { border: 'hover:border-blue-300',   badge: 'bg-blue-100 text-blue-700' },
  green:  { border: 'hover:border-green-300',  badge: 'bg-green-100 text-green-700' },
  purple: { border: 'hover:border-purple-300', badge: 'bg-purple-100 text-purple-700' },
  teal:   { border: 'hover:border-teal-300',   badge: 'bg-teal-100 text-teal-700' },
  orange: { border: 'hover:border-orange-300', badge: 'bg-orange-100 text-orange-700' },
  indigo: { border: 'hover:border-indigo-300', badge: 'bg-indigo-100 text-indigo-700' },
  slate:  { border: 'hover:border-slate-300',  badge: 'bg-slate-100 text-slate-700' },
  violet: { border: 'hover:border-violet-300', badge: 'bg-violet-100 text-violet-700' },
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

        {/* For Gigi section */}
        <div className="bg-pink-50 border border-pink-200 rounded-2xl p-6 space-y-3">
          <p className="text-sm font-semibold text-pink-700 uppercase tracking-wide">For Gigi</p>
          <p className="text-gray-700 leading-relaxed">
            This site is a step-by-step guide for Ronny. Share the link and they can work through it
            at their own pace. Once Ronny has a GitHub account, you can invite them to the project
            so they can follow along in real time.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/invite-ronny"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              How to invite Ronny to GitHub &rarr;
            </Link>
            <a
              href="https://github.com/Sayfan-AI/ronny-learns-ai/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-pink-300 text-pink-700 hover:bg-pink-100 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Give feedback on GitHub &rarr;
            </a>
          </div>
        </div>

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
      </div>
    </div>
  )
}
