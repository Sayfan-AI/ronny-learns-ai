import { Link } from '@tanstack/react-router'
import { useStreak } from '../hooks/useStreak'
import { loadLessonTimestamps } from '../hooks/useMarkVisited'

function getBestStreak(): number {
  try {
    const v = localStorage.getItem('ronny-streak-best')
    const n = v !== null ? parseInt(v, 10) : 0
    return isNaN(n) ? 0 : n
  } catch {
    return 0
  }
}

function getLast7Days(): { date: string; label: string; visited: boolean }[] {
  const timestamps = loadLessonTimestamps()
  const visitedDays = new Set<string>()
  Object.values(timestamps).forEach(ts => {
    if (ts) visitedDays.add(new Date(ts).toISOString().slice(0, 10))
  })

  const days = []
  for (let i = 6; i >= 0; i--) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    const dateStr = d.toISOString().slice(0, 10)
    const dayLabel = i === 0 ? 'Today' : i === 1 ? 'Yesterday' : d.toLocaleDateString('en-GB', { weekday: 'short' })
    days.push({ date: dateStr, label: dayLabel, visited: visitedDays.has(dateStr) })
  }
  return days
}

const CHALLENGES = [
  { days: 3, label: '3-day starter', icon: '&#x2B50;', description: 'Visit a lesson 3 days in a row' },
  { days: 7, label: 'Week warrior', icon: '&#x1F525;', description: 'Visit lessons every day for a week' },
  { days: 14, label: 'Fortnight focus', icon: '&#x1F525;&#x1F525;', description: '14 consecutive days of learning' },
  { days: 30, label: 'Monthly master', icon: '&#x1F3C6;', description: 'A full month of daily learning' },
]

export function StreakChallengePage() {
  const { streak } = useStreak()
  const bestStreak = getBestStreak()
  const last7Days = getLast7Days()
  const daysVisitedThisWeek = last7Days.filter(d => d.visited).length

  const currentChallenge = CHALLENGES.find(c => streak < c.days) ?? CHALLENGES[CHALLENGES.length - 1]
  const progressPct = currentChallenge ? Math.min(100, Math.round((streak / currentChallenge.days) * 100)) : 100
  const daysRemaining = currentChallenge ? currentChallenge.days - streak : 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-3">
          <div className="text-5xl mb-2">&#x1F525;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">Your streak</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Keep your learning momentum going — visit a lesson every day to build your streak.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5 text-center">
            <p className="text-4xl font-bold text-amber-500 mb-1">{streak}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Current streak</p>
            <p className="text-xs text-gray-400 mt-0.5">{streak === 1 ? 'day' : 'days'} in a row</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5 text-center">
            <p className="text-4xl font-bold text-indigo-500 mb-1">{bestStreak}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Best streak</p>
            <p className="text-xs text-gray-400 mt-0.5">personal best</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
          <h2 className="font-bold text-gray-800 dark:text-gray-100 mb-4">Last 7 days</h2>
          <div className="flex justify-between gap-2">
            {last7Days.map((day) => (
              <div key={day.date} className="flex flex-col items-center gap-2 flex-1">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${
                  day.visited
                    ? 'bg-amber-500 border-amber-500 text-white'
                    : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-300 dark:text-gray-500'
                }`}>
                  {day.visited ? '&#10003;' : ''}
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500">{day.label}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
            {daysVisitedThisWeek} of 7 days this week
          </p>
        </div>

        {currentChallenge && streak < currentChallenge.days && (
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl" dangerouslySetInnerHTML={{ __html: currentChallenge.icon }} />
              <div>
                <p className="font-bold text-gray-800 dark:text-gray-100">{currentChallenge.label}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{currentChallenge.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-1 h-2.5 bg-amber-100 dark:bg-amber-900/40 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full transition-all duration-500"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <span className="text-sm font-bold text-amber-600 dark:text-amber-400 flex-shrink-0">{streak}/{currentChallenge.days}</span>
            </div>
            <p className="text-sm text-amber-700 dark:text-amber-300">
              {daysRemaining === 1 ? 'Just 1 more day to complete this challenge!' : `${daysRemaining} more days to go`}
            </p>
          </div>
        )}

        {streak >= 30 && (
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 rounded-2xl p-5 text-center">
            <span className="text-3xl">&#x1F3C6;</span>
            <p className="font-bold text-emerald-700 dark:text-emerald-300 mt-2">All challenges complete!</p>
            <p className="text-sm text-emerald-600 dark:text-emerald-400">30+ day streak — you are a dedicated learner.</p>
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5">
          <h2 className="font-bold text-gray-800 dark:text-gray-100 mb-3">Streak milestones</h2>
          <div className="space-y-3">
            {CHALLENGES.map(c => {
              const achieved = streak >= c.days || bestStreak >= c.days
              return (
                <div key={c.days} className={`flex items-center gap-3 p-3 rounded-xl ${achieved ? 'bg-amber-50 dark:bg-amber-900/20' : 'bg-gray-50 dark:bg-gray-700/50'}`}>
                  <span className="text-xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: c.icon }} />
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold text-sm ${achieved ? 'text-amber-700 dark:text-amber-300' : 'text-gray-500 dark:text-gray-400'}`}>{c.label}</p>
                    <p className="text-xs text-gray-400">{c.description}</p>
                  </div>
                  {achieved && <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex-shrink-0">Achieved!</span>}
                  {!achieved && <span className="text-xs text-gray-400 flex-shrink-0">{c.days} days</span>}
                </div>
              )
            })}
          </div>
        </div>

        <div className="text-center pt-4 space-y-3">
          <Link
            to="/learn/what-is-ai"
            className="block w-full py-3 px-6 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-center"
          >
            Continue learning today
          </Link>
          <Link to="/" className="text-indigo-600 dark:text-indigo-400 text-sm hover:underline">
            &larr; Back to home
          </Link>
        </div>

      </div>
    </div>
  )
}
