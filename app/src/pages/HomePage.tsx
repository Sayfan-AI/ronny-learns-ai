import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useProfile } from '../hooks/useProfile'

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
    id: 'what-is-ml',
    title: 'What is machine learning?',
    description: 'How computers learn from examples instead of rules — with everyday analogies and real-world uses.',
    readingTime: '6 min',
    icon: '📊',
    to: '/learn/what-is-machine-learning',
    color: 'emerald',
  },
  {
    id: 'how-ai-training-works',
    title: 'How does AI training work?',
    description: 'Datasets, weights, loss functions, and RLHF — all explained in plain language, no maths required.',
    readingTime: '7 min',
    icon: '🧪',
    to: '/learn/how-ai-training-works',
    color: 'violet',
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
  {
    id: 'what-is-ci-cd',
    title: 'How does the website update automatically?',
    description: 'CI/CD explained — how every code change goes live without anyone pressing publish.',
    readingTime: '4 min',
    icon: '🏭',
    to: '/learn/what-is-ci-cd',
    color: 'cyan',
  },
  {
    id: 'version-control',
    title: 'How does version control work?',
    description: 'Commits, branches, and merges — using everyday analogies like Google Docs history.',
    readingTime: '4 min',
    icon: '💾',
    to: '/learn/what-is-version-control',
    color: 'sky',
  },
  {
    id: 'pull-request',
    title: 'What is a pull request?',
    description: 'How code changes get reviewed and approved before going live — with real examples.',
    readingTime: '4 min',
    icon: '📋',
    to: '/learn/what-is-a-pull-request',
    color: 'violet',
  },
  {
    id: 'meet-the-agents',
    title: 'Meet the AI agents',
    description: 'The five agents behind this project — their roles, their loop, and how they coordinate.',
    icon: '👥',
    to: '/agents',
    color: 'violet',
  },
]

const COLOR_MAP: Record<string, { border: string; badge: string; button: string }> = {
  blue:   { border: 'hover:border-blue-300',   badge: 'bg-blue-100 text-blue-700',   button: 'bg-blue-600 hover:bg-blue-700 text-white' },
  green:  { border: 'hover:border-green-300',  badge: 'bg-green-100 text-green-700', button: 'bg-green-600 hover:bg-green-700 text-white' },
  purple: { border: 'hover:border-purple-300', badge: 'bg-purple-100 text-purple-700', button: 'bg-purple-600 hover:bg-purple-700 text-white' },
  teal:   { border: 'hover:border-teal-300',   badge: 'bg-teal-100 text-teal-700',   button: 'bg-teal-600 hover:bg-teal-700 text-white' },
  orange: { border: 'hover:border-orange-300', badge: 'bg-orange-100 text-orange-700', button: 'bg-orange-600 hover:bg-orange-700 text-white' },
  violet: { border: 'hover:border-violet-300', badge: 'bg-violet-100 text-violet-700', button: 'bg-violet-600 hover:bg-violet-700 text-white' },
  indigo: { border: 'hover:border-indigo-300', badge: 'bg-indigo-100 text-indigo-700', button: 'bg-indigo-600 hover:bg-indigo-700 text-white' },
  cyan:   { border: 'hover:border-cyan-300',   badge: 'bg-cyan-100 text-cyan-700',     button: 'bg-cyan-600 hover:bg-cyan-700 text-white' },
  sky:     { border: 'hover:border-sky-300',     badge: 'bg-sky-100 text-sky-700',       button: 'bg-sky-600 hover:bg-sky-700 text-white' },
  emerald: { border: 'hover:border-emerald-300', badge: 'bg-emerald-100 text-emerald-700', button: 'bg-emerald-600 hover:bg-emerald-700 text-white' },
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
  const [visited, setVisited] = useState<Set<string>>(loadVisited)
  const { profile } = useProfile()

  const completedCount = MODULES.filter(m => visited.has(m.id)).length
  const displayName = profile?.name || 'Ronny'
  const avatar = profile?.avatar || '👋'

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center px-4 py-8 sm:py-16">
      <div className="max-w-2xl w-full space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="text-5xl sm:text-6xl">{avatar}</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Hi {displayName}! Welcome to your AI learning journey.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Follow the steps below to learn about GitHub and AI — no experience needed.
          </p>
          {!profile && (
            <Link
              to="/profile"
              className="inline-block text-sm text-blue-500 hover:text-blue-700 underline"
            >
              Personalise this app with your name &rarr;
            </Link>
          )}
        </div>

        {/* Progress bar */}
        {completedCount > 0 && (
          <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 space-y-3">
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
            {completedCount === MODULES.length ? (
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                <p className="text-green-700 font-medium">
                  You have visited all the modules. Nice work!
                </p>
                <Link
                  to="/certificate"
                  className="text-sm font-semibold text-amber-600 hover:text-amber-800 underline flex-shrink-0"
                >
                  Get your certificate &rarr;
                </Link>
              </div>
            ) : (
              <Link to="/my-progress" className="text-sm text-blue-500 hover:underline">
                View detailed progress &rarr;
              </Link>
            )}
          </div>
        )}

        {/* For Gigi section */}
        <div className="bg-pink-50 border border-pink-200 rounded-2xl p-4 sm:p-6 space-y-3">
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
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 text-center">Your learning path</h2>
          <p className="text-gray-500 text-center text-sm">Start at the top and work your way down.</p>

          <div className="space-y-3">
            {MODULES.map((mod, idx) => {
              const done = visited.has(mod.id)
              const colors = COLOR_MAP[mod.color] ?? COLOR_MAP['blue']
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
                  className={`bg-white rounded-xl shadow-sm border-2 transition-all duration-200 p-4 sm:p-5 flex items-center gap-3 sm:gap-4 ${
                    done ? 'border-green-300' : `border-gray-100 ${colors.border}`
                  }`}
                >
                  {/* Step number / check */}
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0 ${
                    done ? 'bg-green-500 text-white' : colors.badge
                  }`}>
                    {done ? '✓' : idx + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xl sm:text-2xl">{mod.icon}</span>
                      <h3 className="font-semibold text-gray-800 text-base sm:text-lg leading-tight">{mod.title}</h3>
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">{mod.description}</p>
                    {'readingTime' in mod && (
                      <p className="text-gray-400 text-xs mt-1">{(mod as { readingTime: string }).readingTime} read</p>
                    )}
                  </div>

                  {/* Arrow */}
                  <span className="text-gray-400 text-lg sm:text-xl flex-shrink-0">&rarr;</span>
                </Link>
              )
            })}
          </div>
        </div>

        <p className="text-gray-400 text-sm text-center">
          Each page ends with a short quiz to check what you learned.
        </p>

        {/* Participate section */}
        <div className="border-t border-gray-200 pt-6 space-y-3">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">Get involved</h2>
          <div className="space-y-3">
            <Link
              to="/ask"
              className="bg-purple-50 border border-purple-200 rounded-xl p-5 hover:bg-purple-100 hover:border-purple-300 transition-all flex items-center gap-4"
            >
              <span className="text-3xl flex-shrink-0">&#x1F914;</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-purple-800 text-base">Ask a question</h3>
                <p className="text-purple-600 text-sm">Get a plain-language answer to any question about AI, GitHub, or this project.</p>
              </div>
              <span className="text-purple-400 text-xl flex-shrink-0">&rarr;</span>
            </Link>

            <Link
              to="/feedback"
              className="bg-blue-50 border border-blue-200 rounded-xl p-5 hover:bg-blue-100 hover:border-blue-300 transition-all flex items-center gap-4"
            >
              <span className="text-3xl flex-shrink-0">&#x1F4AC;</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-blue-800 text-base">Share your thoughts</h3>
                <p className="text-blue-600 text-sm">Leave feedback or ask something — no GitHub account needed.</p>
              </div>
              <span className="text-blue-400 text-xl flex-shrink-0">&rarr;</span>
            </Link>

            <Link
              to="/my-progress"
              className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 hover:bg-emerald-100 hover:border-emerald-300 transition-all flex items-center gap-4"
            >
              <span className="text-3xl flex-shrink-0">&#x1F4AA;</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-emerald-800 text-base">My progress</h3>
                <p className="text-emerald-600 text-sm">See which modules you have visited and how far you have come.</p>
              </div>
              <span className="text-emerald-400 text-xl flex-shrink-0">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Next steps CTA */}
        <div className="border-t border-gray-200 pt-6">
          <Link
            to="/learn/next-steps"
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-md p-4 sm:p-6 flex items-center gap-3 sm:gap-4 transition-colors duration-200"
          >
            <span className="text-3xl sm:text-4xl flex-shrink-0">&#x1F680;</span>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white text-lg sm:text-xl leading-tight">Ready to get involved?</h3>
              <p className="text-emerald-100 text-sm mt-1">After you have gone through the modules, here is how to go from learning to doing.</p>
            </div>
            <span className="text-white text-xl flex-shrink-0">&rarr;</span>
          </Link>
        </div>

        {/* Explore section */}
        <div className="border-t border-gray-200 pt-6 space-y-4">
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-semibold text-gray-700">Explore the real thing</h2>
            <p className="text-gray-500 text-sm">See the AI at work — hands on.</p>
          </div>

          <div className="space-y-3">
            <Link
              to="/explore/live-activity"
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-indigo-200 transition-all duration-200 flex items-center gap-4"
            >
              <span className="text-3xl flex-shrink-0">📋</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800 text-base">Live Activity</h3>
                <p className="text-gray-500 text-sm">See the real GitHub issues from this project — fetched live right now.</p>
              </div>
              <span className="text-gray-400 text-xl flex-shrink-0">&rarr;</span>
            </Link>

            <Link
              to="/explore/how-agents-work"
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-violet-200 transition-all duration-200 flex items-center gap-4"
            >
              <span className="text-3xl flex-shrink-0">🔄</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800 text-base">How the agents work</h3>
                <p className="text-gray-500 text-sm">The genesis dev loop from trigger to deployed website — with a quiz.</p>
              </div>
              <span className="text-gray-400 text-xl flex-shrink-0">&rarr;</span>
            </Link>

            <Link
              to="/explore/your-journey"
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-emerald-200 transition-all duration-200 flex items-center gap-4"
            >
              <span className="text-3xl flex-shrink-0">🎉</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800 text-base">Your learning journey</h3>
                <p className="text-gray-500 text-sm">A summary of everything you have learned and links to explore the real project.</p>
              </div>
              <span className="text-gray-400 text-xl flex-shrink-0">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* For Gigi bottom */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-6 space-y-3">
          <h2 className="text-lg font-semibold text-amber-800">For Gigi</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            This site was built by the Genesis AI system to help Ronny learn about AI, GitHub, and this project.
            It updates automatically as new lessons are added.
          </p>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>To invite Ronny to GitHub:</strong>{' '}
              <Link to="/invite-ronny" className="text-blue-600 hover:underline">
                see the step-by-step invite guide
              </Link>{' '}
              or go directly to{' '}
              <a
                href="https://github.com/Sayfan-AI/ronny-learns-ai/settings/access"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                repository settings
              </a>{' '}
              and add Ronny as a collaborator.
            </p>
            <p>
              <strong>To give feedback or request changes:</strong> open an issue in the{' '}
              <a
                href="https://github.com/Sayfan-AI/ronny-learns-ai/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub repository
              </a>.
              The AI agents monitor issues and will act on your requests automatically.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
