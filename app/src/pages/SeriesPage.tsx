import { useState, useMemo } from 'react'
import { Link } from '@tanstack/react-router'
import { LESSON_SERIES } from '../data/lessonSeries'

function loadCompletedIds(): Set<string> {
  try {
    const raw = localStorage.getItem('ronny-quiz-results')
    if (!raw) return new Set()
    const data: Record<string, unknown> = JSON.parse(raw)
    return new Set(Object.keys(data))
  } catch {
    return new Set()
  }
}

function loadVisitedIds(): Set<string> {
  try {
    const raw = localStorage.getItem('ronny-visited-modules')
    if (!raw) return new Set()
    const data = JSON.parse(raw)
    if (Array.isArray(data)) return new Set(data)
    if (typeof data === 'object') return new Set(Object.keys(data))
    return new Set()
  } catch {
    return new Set()
  }
}

function useLessonInfo() {
  return useMemo(() => {
    // Try to read the module list from the global MODULES array — but since this is a
    // standalone page, we'll look lessons up from the series data and build a minimal map.
    // The HomePage exposes lessonId -> { title, to, icon } via LESSON_POOL but we can't
    // import that here without a circular dependency. Instead we use the data we have.
    return { completedIds: loadCompletedIds(), visitedIds: loadVisitedIds() }
  }, [])
}

export function SeriesPage() {
  const { completedIds, visitedIds } = useLessonInfo()
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">Learning series</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Lessons grouped by theme. Work through a series to build knowledge in a particular area.
          </p>
        </div>

        <div className="space-y-4">
          {LESSON_SERIES.map(series => {
            const done = series.lessonIds.filter(id => completedIds.has(id)).length
            const visited = series.lessonIds.filter(id => visitedIds.has(id)).length
            const total = series.lessonIds.length
            const pct = total > 0 ? Math.round((done / total) * 100) : 0
            const isExpanded = expandedSlug === series.slug

            return (
              <div
                key={series.slug}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedSlug(isExpanded ? null : series.slug)}
                  className="w-full p-5 text-left flex items-start gap-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                >
                  <span
                    className="text-3xl flex-shrink-0 mt-0.5"
                    dangerouslySetInnerHTML={{ __html: series.icon }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-bold text-gray-800 dark:text-gray-100 text-lg leading-tight">{series.name}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5 leading-relaxed">{series.description}</p>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{done}/{total}</p>
                        <p className="text-xs text-gray-400">completed</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${pct === 100 ? 'bg-emerald-500' : 'bg-indigo-500'}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      {visited > 0 && done < total && (
                        <span className="text-xs text-gray-400 flex-shrink-0">{visited} visited</span>
                      )}
                      {pct === 100 && (
                        <span className="text-xs font-semibold text-emerald-600 flex-shrink-0">Complete!</span>
                      )}
                    </div>
                  </div>
                  <span className={`text-gray-400 flex-shrink-0 transition-transform mt-1 ${isExpanded ? 'rotate-90' : ''}`}>&#x276F;</span>
                </button>

                {isExpanded && (
                  <div className="border-t border-gray-100 dark:border-gray-700 px-5 py-4 space-y-2">
                    {series.lessonIds.map(id => {
                      const isDone = completedIds.has(id)
                      const isVisited = visitedIds.has(id)
                      // Format id to readable title as fallback
                      const readableTitle = id.replace(/^ai-and-/, 'AI and ').replace(/-/g, ' ')
                      return (
                        <div key={id} className="flex items-center gap-3 py-1">
                          <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                            isDone ? 'bg-emerald-500 text-white' : isVisited ? 'bg-indigo-200 text-indigo-700' : 'bg-gray-100 dark:bg-gray-700 text-gray-400'
                          }`}>
                            {isDone ? '✓' : isVisited ? '~' : ''}
                          </div>
                          <Link
                            to={`/learn/${id}` as '/'}
                            className={`text-sm hover:underline flex-1 ${isDone ? 'text-emerald-700 dark:text-emerald-400' : 'text-gray-700 dark:text-gray-300'}`}
                          >
                            {readableTitle}
                          </Link>
                          {isDone && <span className="text-xs text-emerald-500 flex-shrink-0">done</span>}
                          {!isDone && isVisited && <span className="text-xs text-indigo-400 flex-shrink-0">in progress</span>}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="text-center pt-4">
          <Link to="/" className="text-indigo-600 dark:text-indigo-400 text-sm hover:underline">
            &larr; Back to home
          </Link>
        </div>

      </div>
    </div>
  )
}
