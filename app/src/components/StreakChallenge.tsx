import { useMemo } from 'react'
import { Link } from '@tanstack/react-router'
import { LESSON_SERIES } from '../data/lessonSeries'

const STREAK_KEY = 'ronny-streak-current'
const LAST_VISIT_KEY = 'ronny-streak-last-visit'
const VISITED_KEY = 'ronny-visited-modules'

function todayStr(): string {
  return new Date().toISOString().slice(0, 10)
}

function yesterdayStr(): string {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return d.toISOString().slice(0, 10)
}

function loadStreak(): number {
  try {
    const lastVisit = localStorage.getItem(LAST_VISIT_KEY) ?? ''
    const current = parseInt(localStorage.getItem(STREAK_KEY) ?? '0', 10)
    if (!lastVisit) return 0
    const today = todayStr()
    if (lastVisit === today || lastVisit === yesterdayStr()) return isNaN(current) ? 0 : current
    return 0
  } catch {
    return 0
  }
}

function loadVisited(): Set<string> {
  try {
    const raw = localStorage.getItem(VISITED_KEY)
    const arr: string[] = raw ? JSON.parse(raw) : []
    return new Set(arr)
  } catch {
    return new Set()
  }
}

function findNextLesson(visited: Set<string>): string | null {
  // Find the first unvisited lesson across all series
  for (const series of LESSON_SERIES) {
    const next = series.lessonIds.find(id => !visited.has(id))
    if (next) return next
  }
  return null
}

function getStreakMessage(streak: number): string {
  if (streak === 1) return "You have started your streak — visit again tomorrow to keep it going!"
  if (streak < 7) return `${streak} days in a row! Keep the momentum going.`
  if (streak < 14) return `Impressive — ${streak} days straight! You are building a real learning habit.`
  return `Outstanding! ${streak} days of learning without a break.`
}

/**
 * Shows a streak challenge card when the user has an active streak of at least 1 day.
 * Encourages them to complete their next lesson to maintain the streak.
 */
export function StreakChallenge() {
  const { streak, nextPath } = useMemo(() => {
    const streak = loadStreak()
    if (streak === 0) return { streak: 0, nextPath: null }
    const visited = loadVisited()
    const nextId = findNextLesson(visited)
    const nextPath = nextId ? `/learn/${nextId}` : null
    return { streak, nextPath }
  }, [])

  if (streak === 0 || !nextPath) return null

  const message = getStreakMessage(streak)

  return (
    <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-4 sm:p-5 space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-xl">&#x1F525;</span>
        <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide">7-day streak challenge</p>
      </div>

      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
          <span className="text-2xl font-bold text-orange-600">{streak}</span>
        </div>
        <div className="flex-1 min-w-0 space-y-1">
          <p className="font-semibold text-orange-900 text-sm leading-tight">
            {streak} day{streak !== 1 ? 's' : ''} in a row
          </p>
          <p className="text-orange-700 text-sm leading-relaxed">
            {message}
          </p>
        </div>
      </div>

      {/* Progress towards 7-day goal */}
      {streak < 7 && (
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-orange-600">
            <span>Progress to 7-day badge</span>
            <span>{streak}/7</span>
          </div>
          <div className="w-full bg-orange-100 rounded-full h-2">
            <div
              className="bg-orange-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min((streak / 7) * 100, 100)}%` }}
            />
          </div>
        </div>
      )}

      <Link
        to={nextPath}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-xl transition-colors"
      >
        Keep your streak going
        <span>&#x2192;</span>
      </Link>
    </div>
  )
}
