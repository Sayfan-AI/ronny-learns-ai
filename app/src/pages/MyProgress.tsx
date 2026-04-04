import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useProfile } from '../hooks/useProfile'
import { recordVisitAndGetStreak, type StreakData } from '../hooks/useStreak'
import { computeBadges, type Badge } from '../hooks/useBadges'

const APP_URL = 'https://sayfan-ai.github.io/ronny-learns-ai/'

async function shareProgress(completedCount: number, total: number) {
  const text = `I have completed ${completedCount} of ${total} lessons on Ronny Learns AI! Check it out: ${APP_URL}`
  if (navigator.share) {
    try {
      await navigator.share({ title: 'My progress on Ronny Learns AI', text, url: APP_URL })
      return
    } catch {
      // fall through
    }
  }
  await navigator.clipboard.writeText(text)
}

const VISITED_KEY = 'ronny-visited-modules'

interface ModuleEntry { id: string; icon: string; title: string; to: string }

interface SectionGroup {
  heading: string
  modules: ModuleEntry[]
}

const SECTION_GROUPS: SectionGroup[] = [
  {
    heading: 'Getting started',
    modules: [
      { id: 'github-signup',    icon: '🔑', title: 'Create your GitHub account',        to: '/tutorial/github-signup' },
      { id: 'github-basics',    icon: '📁', title: 'What is GitHub for?',               to: '/learn/github-basics' },
      { id: 'what-is-api',      icon: '🔗', title: 'What is an API?',                   to: '/learn/what-is-api' },
    ],
  },
  {
    heading: 'Understanding AI',
    modules: [
      { id: 'what-is-ai',            icon: '🤖', title: 'What is AI?',                              to: '/learn/what-is-ai' },
      { id: 'what-is-ml',            icon: '📊', title: 'What is machine learning?',               to: '/learn/what-is-machine-learning' },
      { id: 'how-ai-training-works', icon: '🏋️', title: 'How does AI training work?',             to: '/learn/how-ai-training-works' },
      { id: 'neural-network',        icon: '🧠', title: 'What is a neural network?',               to: '/learn/neural-network' },
      { id: 'language-models',       icon: '💬', title: 'How do language models work?',            to: '/learn/language-models' },
      { id: 'how-chatbots-work',     icon: '💬', title: 'How do chatbots work?',                   to: '/learn/how-chatbots-work' },
      { id: 'ai-history',            icon: '📜', title: 'AI history timeline',                     to: '/ai-history' },
      { id: 'ai-everyday-life',      icon: '🌍', title: 'AI in everyday life',                     to: '/learn/ai-everyday-life' },
    ],
  },
  {
    heading: 'AI and society',
    modules: [
      { id: 'ai-pros-and-cons',      icon: '⚖️', title: 'AI: the good and the bad',               to: '/learn/ai-pros-and-cons' },
      { id: 'ai-bias',               icon: '⚖️', title: 'What is AI bias?',                        to: '/learn/ai-bias' },
      { id: 'ai-safety',             icon: '🛡️', title: 'AI safety and alignment',                to: '/learn/ai-safety' },
      { id: 'prompt-engineering',    icon: '✏️', title: 'What is prompt engineering?',            to: '/learn/prompt-engineering' },
      { id: 'trusting-ai',           icon: '🔍', title: 'Can I trust what AI says?',              to: '/learn/trusting-ai' },
      { id: 'ai-and-jobs',           icon: '💼', title: 'AI and jobs',                             to: '/learn/ai-and-jobs' },
      { id: 'ai-and-creativity',     icon: '🎨', title: 'AI and creativity',                       to: '/learn/ai-and-creativity' },
      { id: 'ai-in-healthcare',      icon: '🩺', title: 'AI in healthcare',                        to: '/learn/ai-in-healthcare' },
      { id: 'ai-and-environment',    icon: '🌱', title: 'AI and the environment',                  to: '/learn/ai-and-environment' },
      { id: 'ai-and-privacy',        icon: '🔒', title: 'AI and privacy',                          to: '/learn/ai-and-privacy' },
      { id: 'ai-and-education',      icon: '🎓', title: 'AI and education',                        to: '/learn/ai-and-education' },
      { id: 'ai-and-misinformation', icon: '🔎', title: 'AI and misinformation',                  to: '/learn/ai-and-misinformation' },
      { id: 'ai-and-mental-health',  icon: '🧠', title: 'AI and your mental health',              to: '/learn/ai-and-mental-health' },
      { id: 'future-of-ai',          icon: '🔭', title: 'What does the future of AI look like?', to: '/learn/future-of-ai' },
    ],
  },
  {
    heading: 'How software is built',
    modules: [
      { id: 'genesis-system',    icon: '⚙️',  title: 'What is the Genesis system?',   to: '/learn/genesis-system' },
      { id: 'how-this-was-built', icon: '🏗️', title: 'How this app was built',        to: '/learn/how-this-was-built' },
      { id: 'what-is-ci-cd',     icon: '🏭', title: 'How does the website update?',  to: '/learn/what-is-ci-cd' },
      { id: 'version-control',   icon: '💾', title: 'How does version control work?', to: '/learn/what-is-version-control' },
      { id: 'pull-request',      icon: '📋', title: 'What is a pull request?',        to: '/learn/what-is-a-pull-request' },
      { id: 'meet-the-agents',   icon: '👥', title: 'Meet the AI agents',             to: '/agents' },
    ],
  },
]

const ALL_MODULES: ModuleEntry[] = SECTION_GROUPS.flatMap(g => g.modules)

function loadVisited(): Set<string> {
  try {
    const raw = localStorage.getItem(VISITED_KEY)
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

function streakMessage(streak: number): string {
  if (streak === 0) return 'Visit again tomorrow to start a streak!'
  if (streak === 1) return 'You started your streak today — come back tomorrow!'
  if (streak < 5) return `${streak} days in a row — keep it up!`
  if (streak < 10) return `${streak} days in a row — you are on a roll!`
  return `${streak} days in a row — incredible dedication!`
}

export function MyProgress() {
  const [visited] = useState<Set<string>>(loadVisited)
  const { profile } = useProfile()
  const [streak] = useState<StreakData>(() => recordVisitAndGetStreak())
  const [badges] = useState<Badge[]>(() => computeBadges())
  const [shared, setShared] = useState(false)

  const completedCount = ALL_MODULES.filter(m => visited.has(m.id)).length
  const total = ALL_MODULES.length
  const pct = Math.round((completedCount / total) * 100)
  const allDone = completedCount === total
  const displayName = profile?.name || 'Ronny'

  async function handleShare() {
    await shareProgress(completedCount, total)
    setShared(true)
    setTimeout(() => setShared(false), 2500)
  }

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
          <div className="flex justify-center">
            <button
              onClick={handleShare}
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors text-sm"
            >
              {shared ? '&#x2713; Copied!' : '&#x1F517; Share my progress'}
            </button>
          </div>
        </div>

        {/* Section progress visualisation */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-5">
          <h2 className="text-xl font-semibold text-gray-700">Your learning path</h2>
          {SECTION_GROUPS.map(group => {
            const groupTotal = group.modules.length
            const groupDone = group.modules.filter(m => visited.has(m.id)).length
            const groupPct = Math.round((groupDone / groupTotal) * 100)
            const sectionComplete = groupDone === groupTotal
            return (
              <div key={group.heading} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700 text-sm">{group.heading}</span>
                  {sectionComplete ? (
                    <span className="flex items-center gap-1 text-emerald-600 text-sm font-semibold">
                      <span>&#x2713;</span> Section complete!
                    </span>
                  ) : groupDone === 0 ? (
                    <span className="text-gray-400 text-xs">Not started yet</span>
                  ) : (
                    <span className="text-gray-500 text-xs">{groupDone} / {groupTotal}</span>
                  )}
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full transition-all duration-700 ${sectionComplete ? 'bg-emerald-500' : 'bg-blue-500'}`}
                    style={{ width: `${groupPct}%` }}
                  />
                </div>
                {!sectionComplete && groupDone > 0 && (
                  <p className="text-gray-400 text-xs">{groupPct}% complete</p>
                )}
              </div>
            )
          })}
        </div>

        {/* Streak card */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🔥</span>
            <h2 className="text-xl font-semibold text-gray-700">Learning streak</h2>
          </div>
          <div className="flex items-end gap-4">
            <span className="text-5xl font-extrabold text-orange-500">{streak.current}</span>
            <span className="text-gray-500 pb-1">day{streak.current !== 1 ? 's' : ''} in a row</span>
          </div>
          <p className="text-gray-500 text-sm">{streakMessage(streak.current)}</p>
          {streak.longest > streak.current && (
            <p className="text-gray-400 text-xs">
              Personal best: <strong>{streak.longest}</strong> day{streak.longest !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Badges */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Your badges</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className={`rounded-xl border p-4 flex flex-col items-center gap-2 text-center transition-all ${
                  badge.earned
                    ? `${badge.color} ${badge.borderColor}`
                    : 'bg-gray-50 border-gray-200 opacity-40'
                }`}
              >
                <span className="text-3xl">{badge.icon}</span>
                <p className={`font-semibold text-sm leading-tight ${badge.earned ? badge.textColor : 'text-gray-500'}`}>
                  {badge.name}
                </p>
                <p className={`text-xs leading-tight ${badge.earned ? badge.textColor : 'text-gray-400'}`}>
                  {badge.description}
                </p>
                {!badge.earned && (
                  <span className="text-xs text-gray-400 italic">Locked</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Module list */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-5">
          <h2 className="text-xl font-semibold text-gray-700">All modules</h2>
          {SECTION_GROUPS.map(group => (
            <div key={group.heading} className="space-y-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{group.heading}</p>
              <div className="space-y-1.5">
                {group.modules.map((mod) => {
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
                      <span className={`flex-1 font-medium leading-tight text-sm ${done ? 'text-emerald-800' : 'text-gray-600'}`}>
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
          ))}
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
