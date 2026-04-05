import { useMemo } from 'react'
import { getSeriesForLesson, getSeriesProgress } from '../data/lessonSeries'

const VISITED_KEY = 'ronny-visited-modules'

function loadVisited(): Set<string> {
  try {
    const raw = localStorage.getItem(VISITED_KEY)
    const arr: string[] = raw ? JSON.parse(raw) : []
    return new Set(arr)
  } catch {
    return new Set()
  }
}

interface LessonSeriesBadgeProps {
  lessonId: string
}

/**
 * Shows a small banner for each series this lesson belongs to,
 * with a progress bar indicating how many lessons in the series
 * the user has completed.
 */
export function LessonSeriesBadge({ lessonId }: LessonSeriesBadgeProps) {
  const seriesList = useMemo(() => getSeriesForLesson(lessonId), [lessonId])
  const visited = useMemo(() => loadVisited(), [])

  if (seriesList.length === 0) return null

  return (
    <div className="space-y-2 mb-6">
      {seriesList.map(series => {
        const { completed, total } = getSeriesProgress(series, visited)
        const pct = Math.round((completed / total) * 100)
        return (
          <div
            key={series.slug}
            className="flex items-center gap-3 bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 rounded-xl px-4 py-3"
          >
            <span className="text-xl flex-shrink-0" aria-hidden="true" dangerouslySetInnerHTML={{ __html: series.icon }} />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-0.5">
                Series
              </p>
              <p className="text-sm font-medium text-indigo-900 dark:text-indigo-100 truncate">
                {series.name}
              </p>
              <div className="flex items-center gap-2 mt-1.5">
                <div className="flex-1 bg-indigo-200 dark:bg-indigo-800 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-indigo-500 dark:bg-indigo-400 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-xs text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                  {completed} of {total}
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
