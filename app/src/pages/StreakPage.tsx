import { Link } from '@tanstack/react-router'
import { useStreak } from '../hooks/useStreak'

function todayStr(): string {
  return new Date().toISOString().slice(0, 10)
}

function getStreakStartDate(streak: number): string {
  if (streak <= 0) return ''
  const d = new Date()
  d.setDate(d.getDate() - (streak - 1))
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

function getMotivationalMessage(streak: number): { title: string; body: string } {
  if (streak === 0) {
    return {
      title: 'Start your streak today',
      body: 'Every learning journey begins with a single day. Complete a lesson today to start your streak.',
    }
  }
  if (streak === 1) {
    return {
      title: 'Day 1 — great start!',
      body: 'You have taken the first step. Come back tomorrow to build your streak.',
    }
  }
  if (streak < 3) {
    return {
      title: `${streak} days in a row!`,
      body: 'You are building momentum. Keep it up — consistency is the key to learning.',
    }
  }
  if (streak < 7) {
    return {
      title: `${streak}-day streak — impressive!`,
      body: 'You are forming a habit. Can you make it to 7 days? You are almost there.',
    }
  }
  if (streak < 14) {
    return {
      title: `${streak} days — a full week or more!`,
      body: 'You have proven you can commit. Learning at this pace, you will know an extraordinary amount about AI by the end of the year.',
    }
  }
  if (streak < 30) {
    return {
      title: `${streak} days — you are on fire!`,
      body: 'Two weeks or more of daily learning. This is truly impressive dedication.',
    }
  }
  return {
    title: `${streak} days — incredible!`,
    body: 'A month or more of daily learning. You are in a tiny minority of people who stick with it this long. Well done.',
  }
}

export function StreakPage() {
  const { streak, bestStreak } = useStreak()

  const today = todayStr()
  let visitedToday = false
  try {
    const lastVisit = localStorage.getItem('ronny-streak-last-visit') ?? ''
    visitedToday = lastVisit === today
  } catch { /* ignore */ }

  const streakStart = getStreakStartDate(streak)
  const message = getMotivationalMessage(streak)

  // Build 7-day grid (last 6 days + today)
  const days: Array<{ label: string; dayStr: string }> = []
  for (let i = 6; i >= 0; i--) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    const dayStr = d.toISOString().slice(0, 10)
    const label = i === 0 ? 'Today' : d.toLocaleDateString('en-GB', { weekday: 'short' })
    days.push({ label, dayStr })
  }

  // Determine which days in the grid were visited (approximate from streak + lastVisit)
  const visitedDayStrings = new Set<string>()
  try {
    const lastVisit = localStorage.getItem('ronny-streak-last-visit') ?? ''
    if (lastVisit && streak > 0) {
      // Mark the last N days as visited based on streak count
      for (let i = 0; i < streak; i++) {
        const d = new Date(lastVisit)
        d.setDate(d.getDate() - i)
        visitedDayStrings.add(d.toISOString().slice(0, 10))
      }
    }
  } catch { /* ignore */ }

  const flameEmoji = streak >= 7 ? '&#x1F525;' : streak >= 3 ? '&#x1F4AA;' : '&#x1F4DA;'

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-xl w-full space-y-6">

        <div className="text-center space-y-3">
          <div className="text-6xl" dangerouslySetInnerHTML={{ __html: flameEmoji }} />
          <h1 className="text-3xl font-bold text-gray-800">Your learning streak</h1>
          <p className="text-gray-500 text-sm">Keep coming back every day to build your streak</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl border border-orange-200 p-5 text-center space-y-1 shadow-sm">
            <p className="text-5xl font-bold text-orange-500">{streak}</p>
            <p className="text-sm font-semibold text-gray-600">Current streak</p>
            <p className="text-xs text-gray-400">{streak === 1 ? 'day' : 'days'}</p>
          </div>
          <div className="bg-white rounded-2xl border border-amber-200 p-5 text-center space-y-1 shadow-sm">
            <p className="text-5xl font-bold text-amber-500">{bestStreak}</p>
            <p className="text-sm font-semibold text-gray-600">Best streak</p>
            <p className="text-xs text-gray-400">{bestStreak === 1 ? 'day' : 'days'}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-orange-100 p-5 shadow-sm space-y-3">
          <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide">Last 7 days</p>
          <div className="flex justify-between gap-1">
            {days.map(({ label, dayStr }) => {
              const isToday = dayStr === today
              const wasVisited = visitedDayStrings.has(dayStr)
              return (
                <div key={dayStr} className="flex flex-col items-center gap-1 flex-1">
                  <div
                    className={[
                      'w-8 h-8 rounded-full flex items-center justify-center text-sm',
                      isToday && wasVisited
                        ? 'bg-orange-500 text-white font-bold ring-2 ring-orange-300'
                        : isToday
                        ? 'bg-orange-100 text-orange-500 ring-2 ring-orange-300 font-bold'
                        : wasVisited
                        ? 'bg-green-100 text-green-600 font-semibold'
                        : 'bg-gray-100 text-gray-300',
                    ].join(' ')}
                  >
                    {wasVisited ? '&#x2713;' : isToday ? '!' : ''}
                    {!wasVisited && !isToday && <span className="text-gray-300">&#x25CB;</span>}
                  </div>
                  <p className="text-xs text-gray-400">{label}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className={`rounded-2xl p-5 space-y-2 ${streak >= 7 ? 'bg-orange-50 border border-orange-200' : streak >= 3 ? 'bg-amber-50 border border-amber-200' : 'bg-blue-50 border border-blue-200'}`}>
          <p className={`font-bold text-lg ${streak >= 7 ? 'text-orange-700' : streak >= 3 ? 'text-amber-700' : 'text-blue-700'}`}>
            {message.title}
          </p>
          <p className={`text-sm leading-relaxed ${streak >= 7 ? 'text-orange-600' : streak >= 3 ? 'text-amber-600' : 'text-blue-600'}`}>
            {message.body}
          </p>
          {streakStart && (
            <p className="text-xs text-gray-400 pt-1">Streak started: {streakStart}</p>
          )}
        </div>

        {!visitedToday ? (
          <div className="bg-white rounded-2xl border border-green-200 p-5 shadow-sm space-y-3 text-center">
            <p className="font-semibold text-gray-800">You have not visited today yet</p>
            <p className="text-sm text-gray-500">Complete a lesson to keep your streak alive.</p>
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors"
            >
              Go to lessons &rarr;
            </Link>
          </div>
        ) : (
          <div className="bg-green-50 rounded-2xl border border-green-200 p-5 text-center space-y-2">
            <p className="text-2xl">&#x2705;</p>
            <p className="font-semibold text-green-700">Your streak is safe for today!</p>
            <p className="text-sm text-green-600">Come back tomorrow to keep it going.</p>
          </div>
        )}

        <div className="text-center">
          <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 underline">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
