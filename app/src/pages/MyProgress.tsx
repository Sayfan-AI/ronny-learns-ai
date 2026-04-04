import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useProfile } from '../hooks/useProfile'
import { recordVisitAndGetStreak, type StreakData } from '../hooks/useStreak'
import { computeBadges, type Badge } from '../hooks/useBadges'
import { loadVisitCounts } from '../hooks/useLessonVisit'
import { loadAllNotes } from '../components/LessonNote'
import { loadAllReviewLater } from '../hooks/useReviewLater'

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
      { id: 'ai-in-your-apps',       icon: '📱', title: 'AI in the apps you already use',          to: '/learn/ai-in-your-apps' },
    ],
  },
  {
    heading: 'AI in the real world',
    modules: [
      { id: 'ai-and-creativity',          icon: '🎨', title: 'AI and creativity',                       to: '/learn/ai-and-creativity' },
      { id: 'ai-in-healthcare',           icon: '🩺', title: 'AI in healthcare',                        to: '/learn/ai-in-healthcare' },
      { id: 'ai-for-accessibility',       icon: '♿', title: 'AI for accessibility',                    to: '/learn/ai-for-accessibility' },
      { id: 'ai-and-scientific-research', icon: '🔬', title: 'AI and scientific research',             to: '/learn/ai-and-scientific-research' },
      { id: 'ai-productivity-tools',      icon: '⚡', title: 'AI and your productivity',               to: '/learn/ai-productivity-tools' },
      { id: 'ai-and-food',                icon: '🌿', title: 'AI and food',                              to: '/learn/ai-and-food' },
      { id: 'ai-and-sport',               icon: '⚽', title: 'AI and sport',                             to: '/learn/ai-and-sport' },
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
      { id: 'ai-and-environment',    icon: '🌱', title: 'AI and the environment',                  to: '/learn/ai-and-environment' },
      { id: 'ai-and-privacy',        icon: '🔒', title: 'AI and privacy',                          to: '/learn/ai-and-privacy' },
      { id: 'ai-and-education',      icon: '🎓', title: 'AI and education',                        to: '/learn/ai-and-education' },
      { id: 'ai-and-social-media',   icon: '📲', title: 'AI and social media',                    to: '/learn/ai-and-social-media' },
      { id: 'ai-and-misinformation', icon: '🔎', title: 'AI and misinformation',                  to: '/learn/ai-and-misinformation' },
      { id: 'ai-and-mental-health',  icon: '🧠', title: 'AI and your mental health',              to: '/learn/ai-and-mental-health' },
      { id: 'future-of-ai',          icon: '🔭', title: 'What does the future of AI look like?', to: '/learn/future-of-ai' },
      { id: 'ai-laws-and-rights',    icon: '⚖️', title: 'AI, laws, and your rights',             to: '/learn/ai-laws-and-rights' },
      { id: 'ai-and-copyright',      icon: '⚖️', title: 'AI and the law',                         to: '/learn/ai-and-copyright' },
      { id: 'how-to-use-ai-safely',  icon: '🛡️', title: 'How to use AI safely',                  to: '/learn/how-to-use-ai-safely' },
      { id: 'ai-and-money',          icon: '💰', title: 'AI and money',                            to: '/learn/ai-and-money' },
      { id: 'ai-and-democracy',      icon: '🏛️', title: 'AI and democracy',                       to: '/learn/ai-and-democracy' },
      { id: 'ai-and-language',       icon: '🗣️', title: 'AI and language',                        to: '/learn/ai-and-language' },
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

// Reading time per lesson (minutes) — matches values shown on lesson pages
const READING_TIMES: Record<string, number> = {
  'github-signup': 5, 'github-basics': 4, 'what-is-api': 4, 'genesis-system': 4,
  'what-is-ai': 5, 'what-is-ml': 6, 'how-ai-training-works': 7, 'neural-network': 6,
  'language-models': 7, 'how-chatbots-work': 6, 'ai-history': 5, 'ai-everyday-life': 5,
  'ai-in-your-apps': 5,
  'ai-and-creativity': 6, 'ai-in-healthcare': 6, 'ai-for-accessibility': 5,
  'ai-and-scientific-research': 6, 'ai-productivity-tools': 5,
  'ai-pros-and-cons': 6, 'ai-bias': 6, 'ai-safety': 6, 'prompt-engineering': 6,
  'trusting-ai': 5, 'ai-and-jobs': 6, 'ai-and-environment': 6, 'ai-and-privacy': 6,
  'ai-and-education': 6, 'ai-and-social-media': 6, 'ai-and-misinformation': 6,
  'ai-and-mental-health': 6, 'future-of-ai': 7, 'ai-laws-and-rights': 7,
  'ai-and-copyright': 6, 'how-to-use-ai-safely': 5,
  'ai-and-money': 6, 'ai-and-democracy': 7, 'ai-and-language': 5,
  'ai-and-food': 5, 'ai-and-sport': 6,
  'how-this-was-built': 5, 'what-is-ci-cd': 4, 'version-control': 4, 'pull-request': 4,
  'meet-the-agents': 4,
}

// Topic group membership for "favourite topic" stat
const TOPIC_GROUPS: Record<string, string> = {
  'github-signup': 'GitHub and coding', 'github-basics': 'GitHub and coding', 'what-is-api': 'GitHub and coding',
  'genesis-system': 'GitHub and coding', 'how-this-was-built': 'GitHub and coding',
  'what-is-ci-cd': 'GitHub and coding', 'version-control': 'GitHub and coding',
  'pull-request': 'GitHub and coding', 'meet-the-agents': 'GitHub and coding',
  'what-is-ai': 'How AI works', 'what-is-ml': 'How AI works', 'how-ai-training-works': 'How AI works',
  'neural-network': 'How AI works', 'language-models': 'How AI works', 'how-chatbots-work': 'How AI works',
  'ai-history': 'How AI works', 'ai-everyday-life': 'How AI works', 'ai-in-your-apps': 'How AI works',
  'ai-and-creativity': 'AI in the real world', 'ai-in-healthcare': 'AI in the real world',
  'ai-for-accessibility': 'AI in the real world', 'ai-and-scientific-research': 'AI in the real world',
  'ai-productivity-tools': 'AI in the real world',
  'ai-and-jobs': 'AI and society', 'ai-and-environment': 'AI and society', 'ai-and-privacy': 'AI and society',
  'ai-and-education': 'AI and society', 'ai-and-social-media': 'AI and society',
  'ai-and-misinformation': 'AI and society', 'ai-and-mental-health': 'AI and society',
  'future-of-ai': 'AI and society', 'ai-laws-and-rights': 'AI and society',
  'ai-and-copyright': 'AI and society', 'how-to-use-ai-safely': 'AI and society',
  'ai-and-money': 'AI and society', 'ai-and-democracy': 'AI and society', 'ai-and-language': 'AI and society',
  'ai-and-food': 'AI in the real world', 'ai-and-sport': 'AI in the real world',
  'ai-pros-and-cons': 'Deep dives', 'ai-bias': 'Deep dives', 'ai-safety': 'Deep dives',
  'prompt-engineering': 'Deep dives', 'trusting-ai': 'Deep dives',
}

interface StatsResult {
  totalReadingMinutes: number
  quizAccuracyPct: number | null
  favouriteTopic: string | null
}

function computeStats(visited: Set<string>): StatsResult {
  // Total reading time
  let totalReadingMinutes = 0
  for (const id of visited) {
    totalReadingMinutes += READING_TIMES[id] ?? 0
  }

  // Quiz accuracy from ronny-quiz-scores
  let quizAccuracyPct: number | null = null
  try {
    const raw = localStorage.getItem('ronny-quiz-scores')
    if (raw) {
      const scores: Record<string, { score: number; total: number }> = JSON.parse(raw)
      let totalCorrect = 0
      let totalQuestions = 0
      for (const v of Object.values(scores)) {
        totalCorrect += v.score
        totalQuestions += v.total
      }
      if (totalQuestions > 0) {
        quizAccuracyPct = Math.round((totalCorrect / totalQuestions) * 100)
      }
    }
  } catch {
    // ignore
  }

  // Favourite topic — group with most completed lessons
  const topicCounts: Record<string, number> = {}
  for (const id of visited) {
    const group = TOPIC_GROUPS[id]
    if (group) topicCounts[group] = (topicCounts[group] ?? 0) + 1
  }
  let favouriteTopic: string | null = null
  let maxCount = 0
  for (const [topic, count] of Object.entries(topicCounts)) {
    if (count > maxCount || (count === maxCount && (!favouriteTopic || topic < favouriteTopic))) {
      maxCount = count
      favouriteTopic = topic
    }
  }
  // Only show favourite if Ronny has completed at least 3 lessons in it
  if (maxCount < 3) favouriteTopic = null

  return { totalReadingMinutes, quizAccuracyPct, favouriteTopic }
}

function buildProgressSummary(
  completedCount: number,
  total: number,
  streak: number,
  favouriteTopic: string | null,
): string {
  if (completedCount === 0) {
    return "You have not completed any lessons yet — but you are here, and that counts. Pick any lesson below to get started!"
  }

  const parts: string[] = []

  // Completion sentence
  if (completedCount === total) {
    parts.push(`You have completed all ${total} lessons — that is a remarkable achievement.`)
  } else {
    parts.push(`You have completed ${completedCount} of ${total} lessons.`)
  }

  // Favourite topic
  if (favouriteTopic) {
    parts.push(`Your most-explored topic is ${favouriteTopic}.`)
  }

  // Streak
  if (streak >= 7) {
    parts.push(`You are on a ${streak}-day learning streak — incredible dedication!`)
  } else if (streak >= 3) {
    parts.push(`You are on a ${streak}-day learning streak — keep it going!`)
  } else if (streak === 2) {
    parts.push(`You have visited 2 days in a row — you are building a habit!`)
  } else if (streak === 1) {
    parts.push(`You visited today — come back tomorrow to start a streak.`)
  }

  // Encouragement for partial completion
  if (completedCount > 0 && completedCount < total) {
    const pct = Math.round((completedCount / total) * 100)
    if (pct >= 75) {
      parts.push(`You are nearly there — just ${total - completedCount} lesson${total - completedCount === 1 ? '' : 's'} to go.`)
    } else if (pct >= 50) {
      parts.push(`You are over halfway through the curriculum. Nice work!`)
    } else if (pct >= 25) {
      parts.push(`You are making real progress.`)
    }
  }

  return parts.join(' ')
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

  const visitCounts = loadVisitCounts()
  const revisitedCount = ALL_MODULES.filter(m => (visitCounts[m.id] ?? 0) >= 2).length

  const stats = computeStats(visited)

  const progressSummary = buildProgressSummary(completedCount, total, streak.current, stats.favouriteTopic)

  const allNotes = loadAllNotes()
  const noteEntries = ALL_MODULES.filter(m => allNotes[m.id])

  const reviewLaterIds = loadAllReviewLater()
  const reviewEntries = ALL_MODULES.filter(m => reviewLaterIds.includes(m.id))

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

        {/* How am I doing? summary card */}
        <div className="bg-white rounded-2xl shadow-sm border-l-4 border-indigo-400 p-5 space-y-2">
          <p className="font-semibold text-gray-800 text-base">How am I doing?</p>
          <p className="text-gray-700 leading-relaxed text-sm">{progressSummary}</p>
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

        {/* Revisit stat */}
        {revisitedCount > 0 && (
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-5">
            <div className="text-4xl flex-shrink-0">&#x1F501;</div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-blue-600">{revisitedCount}</span>
                <span className="text-gray-500 text-sm font-medium">lesson{revisitedCount !== 1 ? 's' : ''} revisited</span>
              </div>
              <p className="text-gray-400 text-xs mt-0.5">You looked twice &mdash; that is how real learning works</p>
            </div>
          </div>
        )}

        {/* Stats at a glance */}
        {completedCount >= 3 && (
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">My stats at a glance</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Reading time */}
              <div className="bg-blue-50 rounded-xl p-4 text-center space-y-1">
                <div className="text-3xl" aria-hidden="true">&#x1F4DA;</div>
                <div className="text-2xl font-extrabold text-blue-700">
                  {stats.totalReadingMinutes >= 60
                    ? `${(stats.totalReadingMinutes / 60).toFixed(1)}h`
                    : `${stats.totalReadingMinutes}m`}
                </div>
                <div className="text-xs text-blue-600 font-medium leading-tight">reading completed</div>
              </div>

              {/* Quiz accuracy */}
              <div className="bg-emerald-50 rounded-xl p-4 text-center space-y-1">
                <div className="text-3xl" aria-hidden="true">&#x1F9E0;</div>
                {stats.quizAccuracyPct !== null ? (
                  <>
                    <div className="text-2xl font-extrabold text-emerald-700">{stats.quizAccuracyPct}%</div>
                    <div className="text-xs text-emerald-600 font-medium leading-tight">quiz accuracy</div>
                  </>
                ) : (
                  <>
                    <div className="text-lg font-bold text-emerald-600">No quizzes yet</div>
                    <div className="text-xs text-emerald-500 leading-tight">complete a lesson quiz to see your score</div>
                  </>
                )}
              </div>

              {/* Favourite topic */}
              <div className="bg-purple-50 rounded-xl p-4 text-center space-y-1">
                <div className="text-3xl" aria-hidden="true">&#x2B50;</div>
                {stats.favouriteTopic ? (
                  <>
                    <div className="text-sm font-extrabold text-purple-700 leading-tight">{stats.favouriteTopic}</div>
                    <div className="text-xs text-purple-500 leading-tight">your favourite topic so far</div>
                  </>
                ) : (
                  <>
                    <div className="text-sm font-bold text-purple-600 leading-tight">Keep going!</div>
                    <div className="text-xs text-purple-500 leading-tight">your favourite topic will appear here</div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

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

        {/* My notes */}
        {noteEntries.length > 0 && (
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">My notes</h2>
            <div className="space-y-2">
              {noteEntries.map(mod => (
                <Link
                  key={mod.id}
                  to={mod.to}
                  className="flex items-start gap-3 p-4 rounded-xl bg-yellow-50 border border-yellow-100 hover:bg-yellow-100 transition-colors"
                >
                  <span className="text-xl flex-shrink-0 mt-0.5">{mod.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-yellow-800 text-sm">{mod.title}</p>
                    <p className="text-yellow-600 text-xs mt-0.5 truncate">{allNotes[mod.id]?.slice(0, 100)}{(allNotes[mod.id]?.length ?? 0) > 100 ? '...' : ''}</p>
                  </div>
                  <span className="text-yellow-400 flex-shrink-0">&#x2192;</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Review list */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">&#x1F514;</span>
            <h2 className="text-xl font-semibold text-gray-700">Review list</h2>
          </div>
          {reviewEntries.length === 0 ? (
            <p className="text-gray-400 text-sm leading-relaxed">
              No lessons marked for review yet. Tap the &ldquo;Review later&rdquo; button on any lesson to
              add it here so you can come back to it easily.
            </p>
          ) : (
            <div className="space-y-2">
              {reviewEntries.map(mod => (
                <Link
                  key={mod.id}
                  to={mod.to}
                  className="flex items-center gap-3 p-4 rounded-xl bg-orange-50 border border-orange-100 hover:bg-orange-100 transition-colors"
                >
                  <span className="text-xl flex-shrink-0">{mod.icon}</span>
                  <span className="flex-1 font-semibold text-orange-800 text-sm leading-tight">{mod.title}</span>
                  <span className="text-orange-400 flex-shrink-0">&#x2192;</span>
                </Link>
              ))}
            </div>
          )}
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
              to="/quiz/knowledge-check"
              className="flex items-center gap-4 p-4 rounded-xl bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 transition-colors"
            >
              <span className="text-3xl flex-shrink-0">&#x1F9E0;</span>
              <div>
                <p className="font-semibold text-indigo-800">Test your knowledge</p>
                <p className="text-indigo-600 text-sm">10 questions across the whole course &mdash; see how much you have taken in.</p>
              </div>
              <span className="text-indigo-400 ml-auto flex-shrink-0">&rarr;</span>
            </Link>

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
