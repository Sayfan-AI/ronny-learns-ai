import { Link } from '@tanstack/react-router'
import { useStreak } from '../hooks/useStreak'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function getMotivationalMessage(streak: number): string {
  if (streak === 0) return 'Start your streak today — just read one lesson!'
  if (streak === 1) return 'Great start! Come back tomorrow to keep it going.'
  if (streak === 2) return 'Two days in a row — you are building a habit!'
  if (streak < 7) return `You are on a ${streak}-day streak — keep it up!`
  if (streak === 7) return 'Amazing! A full week-long streak. You are a learning champion!'
  return `Incredible — ${streak} days in a row! You are on fire!`
}

function get7DayProgress(): { dayName: string; completed: boolean; isToday: boolean }[] {
  const today = new Date()
  const todayStr = today.toISOString().slice(0, 10)

  // Get last 7 days
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today)
    d.setDate(d.getDate() - 6 + i)
    const dateStr = d.toISOString().slice(0, 10)
    const dayName = DAYS[d.getDay() === 0 ? 6 : d.getDay() - 1]
    const isToday = dateStr === todayStr

    // Check localStorage for a visit on this day
    let completed = false
    try {
      const lastVisit = localStorage.getItem('ronny-streak-last-visit') ?? ''
      const currentStreak = parseInt(localStorage.getItem('ronny-streak-current') ?? '0', 10)
      // Simple heuristic: if this day is within the current streak window, mark as completed
      if (lastVisit) {
        const diffDays = Math.round((new Date(todayStr).getTime() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24))
        // This day was in the streak if diffDays < currentStreak and dateStr <= lastVisit
        if (diffDays < currentStreak && dateStr <= lastVisit) {
          completed = true
        }
        // Or if it is today and lastVisit is today
        if (isToday && lastVisit === todayStr) {
          completed = true
        }
      }
    } catch {
      // ignore
    }

    return { dayName, completed, isToday }
  })
}

export function StreakChallengePage() {
  const { streak, bestStreak } = useStreak()
  const days7 = get7DayProgress()
  const message = getMotivationalMessage(streak)

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-3">
          <div className="text-6xl">&#x1F525;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">Your learning streak</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{message}</p>
        </div>

        {/* Streak stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 text-center">
            <div className="text-5xl font-bold text-amber-600 dark:text-amber-400">{streak}</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">Current streak</div>
            <div className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{streak === 1 ? 'day' : 'days'} in a row</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 text-center">
            <div className="text-5xl font-bold text-purple-600 dark:text-purple-400">{bestStreak}</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">Best ever</div>
            <div className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{bestStreak === 1 ? 'day' : 'days'} streak</div>
          </div>
        </div>

        {/* 7-day challenge */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">7-day challenge</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Can you learn something new every day for a week?</p>

          <div className="flex justify-between gap-2">
            {days7.map((day, i) => (
              <div key={i} className="flex flex-col items-center gap-2 flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold border-2 transition-all ${
                    day.completed
                      ? 'bg-green-500 border-green-500 text-white'
                      : day.isToday
                      ? 'bg-amber-100 dark:bg-amber-900 border-amber-400 dark:border-amber-500 text-amber-600 dark:text-amber-300'
                      : 'bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-400 dark:text-gray-500'
                  }`}
                >
                  {day.completed ? '✓' : day.isToday ? '★' : '○'}
                </div>
                <span className={`text-xs font-medium ${day.isToday ? 'text-amber-600 dark:text-amber-400' : 'text-gray-500 dark:text-gray-400'}`}>
                  {day.dayName}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 pt-1">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-green-500" />
              <span>Completed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-amber-100 dark:bg-amber-900 border-2 border-amber-400" />
              <span>Today</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-gray-100 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600" />
              <span>Not yet</span>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-3">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Streak milestones</h2>
          <div className="space-y-2">
            {[
              { days: 1, label: 'First day', emoji: '&#x1F331;' },
              { days: 3, label: '3-day streak', emoji: '&#x1F525;' },
              { days: 7, label: 'One week', emoji: '&#x1F3C6;' },
              { days: 14, label: 'Two weeks', emoji: '&#x1F4AA;' },
              { days: 30, label: 'One month', emoji: '&#x1F31F;' },
            ].map((milestone) => {
              const achieved = bestStreak >= milestone.days
              return (
                <div
                  key={milestone.days}
                  className={`flex items-center gap-3 p-3 rounded-xl ${achieved ? 'bg-green-50 dark:bg-green-950' : 'bg-gray-50 dark:bg-gray-700'}`}
                >
                  <span className="text-2xl" dangerouslySetInnerHTML={{ __html: milestone.emoji }} />
                  <div className="flex-1">
                    <p className={`font-medium text-sm ${achieved ? 'text-green-800 dark:text-green-200' : 'text-gray-500 dark:text-gray-400'}`}>
                      {milestone.label}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{milestone.days} {milestone.days === 1 ? 'day' : 'days'} in a row</p>
                  </div>
                  {achieved && <span className="text-green-600 dark:text-green-400 font-bold">&#x2713;</span>}
                  {!achieved && <span className="text-gray-300 dark:text-gray-600 text-sm">{milestone.days - streak > 0 ? `${milestone.days - streak} more` : ''}</span>}
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-3">
          <Link
            to="/"
            className="block w-full bg-amber-500 hover:bg-amber-600 text-white rounded-xl py-4 font-semibold text-center text-lg transition-colors"
          >
            Go to today's lesson &#x2192;
          </Link>
          <Link
            to="/"
            className="block w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl py-3 font-medium text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Back to home
          </Link>
        </div>

        {streak === 0 && (
          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-2xl p-5 text-center space-y-2">
            <p className="font-semibold text-amber-800 dark:text-amber-200">Ready to start your streak?</p>
            <p className="text-sm text-amber-700 dark:text-amber-300">Visit a lesson each day to build your streak. Even just reading a lesson counts!</p>
          </div>
        )}
      </div>
    </div>
  )
}
