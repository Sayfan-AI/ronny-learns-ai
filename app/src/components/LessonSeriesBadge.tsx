import { LESSON_SERIES } from '../data/lessonSeries'

interface LessonSeriesBadgeProps {
  lessonId: string
}

function loadCompletedIds(): Set<string> {
  try {
    const raw = localStorage.getItem('ronny-quiz-completed')
    if (!raw) return new Set()
    return new Set(JSON.parse(raw) as string[])
  } catch {
    return new Set()
  }
}

/**
 * Displays a small 'Part of series' banner if the lesson belongs to a named series.
 * Shows series name and how many lessons in that series the user has completed.
 */
export function LessonSeriesBadge({ lessonId }: LessonSeriesBadgeProps) {
  const series = LESSON_SERIES.find(s => s.lessonIds.includes(lessonId))
  if (!series) return null

  const completed = loadCompletedIds()
  const completedInSeries = series.lessonIds.filter(id => completed.has(id)).length
  const total = series.lessonIds.length
  const pct = Math.round((completedInSeries / total) * 100)

  return (
    <div className="bg-violet-50 dark:bg-violet-950 border border-violet-200 dark:border-violet-800 rounded-xl p-3 flex items-center gap-3">
      <span className="text-xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: series.icon }} />
      <div className="flex-1 min-w-0 space-y-1">
        <div className="flex items-center justify-between gap-2">
          <p className="text-violet-800 dark:text-violet-200 text-xs font-semibold leading-tight">
            Series: {series.name}
          </p>
          <span className="text-violet-600 dark:text-violet-400 text-xs flex-shrink-0">
            {completedInSeries}/{total} lessons
          </span>
        </div>
        <div className="h-1.5 bg-violet-200 dark:bg-violet-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-violet-500 rounded-full transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="text-violet-500 dark:text-violet-400 text-xs">
          {completedInSeries === total
            ? 'You have completed this series!'
            : `${completedInSeries} of ${total} series lessons completed`}
        </p>
      </div>
    </div>
  )
}
