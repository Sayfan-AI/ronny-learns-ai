import { useMemo } from 'react'

function loadCompletedCount(): number {
  try {
    const raw = localStorage.getItem('ronny-visited-modules')
    if (!raw) return 0
    const data = JSON.parse(raw)
    if (Array.isArray(data)) return data.length
    if (typeof data === 'object') return Object.keys(data).length
    return 0
  } catch {
    return 0
  }
}

function loadTotalCorrect(): number {
  try {
    const raw = localStorage.getItem('ronny-quiz-scores')
    if (!raw) return 0
    const scores: Record<string, { score: number; total: number }> = JSON.parse(raw)
    return Object.values(scores).reduce((sum, s) => sum + (s.score ?? 0), 0)
  } catch {
    return 0
  }
}

function loadStreak(): number {
  try {
    const raw = localStorage.getItem('ronny-streak-current')
    if (!raw) return 0
    const n = parseInt(raw, 10)
    return isNaN(n) ? 0 : n
  } catch {
    return 0
  }
}

function motivatingMessage(lessons: number): string {
  if (lessons === 0) return 'Start your first lesson — your AI learning journey begins today!'
  if (lessons < 5) return 'Great start — every expert was once a beginner!'
  if (lessons < 15) return "You're building real knowledge. Keep it up!"
  if (lessons < 30) return "Impressive — you're in the top tier of learners!"
  return "You're an AI learning champion!"
}

export function LearningStatsCard() {
  const completed = useMemo(() => loadCompletedCount(), [])
  const totalCorrect = useMemo(() => loadTotalCorrect(), [])
  const streak = useMemo(() => loadStreak(), [])
  const message = motivatingMessage(completed)

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950 rounded-2xl border border-indigo-100 dark:border-indigo-800 p-6 space-y-4">
      <h2 className="text-lg font-bold text-indigo-900 dark:text-indigo-100">Your learning at a glance</h2>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-sm">
          <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{completed}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-tight">lessons<br />completed</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-sm">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400">{totalCorrect}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-tight">quiz questions<br />answered correctly</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-sm">
          <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">{streak}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-tight">day<br />streak</div>
        </div>
      </div>
      <p className="text-sm text-indigo-700 dark:text-indigo-300 font-medium text-center">{message}</p>
    </div>
  )
}
