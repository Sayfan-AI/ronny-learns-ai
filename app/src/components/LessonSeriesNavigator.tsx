import { useState, useMemo } from 'react'
import { Link } from '@tanstack/react-router'
import { LESSON_SERIES } from '../data/lessonSeries'

interface LessonEntry {
  id: string
  title: string
  to: string
}

interface LessonSeriesNavigatorProps {
  lessons: LessonEntry[]
  visitedIds: Set<string>
}

function loadCompletedSet(): Set<string> {
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

export function LessonSeriesNavigator({ lessons, visitedIds }: LessonSeriesNavigatorProps) {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null)

  const completedIds = useMemo(() => loadCompletedSet(), [])

  const lessonMap = useMemo(() => {
    const map = new Map<string, LessonEntry>()
    for (const l of lessons) map.set(l.id, l)
    return map
  }, [lessons])

  if (LESSON_SERIES.length === 0) return null

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-lg">&#x1F4DA;</span>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Learning series</p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {LESSON_SERIES.map((series) => {
          const seriesLessons = series.lessonIds
            .map((id) => lessonMap.get(id))
            .filter((l): l is LessonEntry => l !== undefined)

          const completedCount = seriesLessons.filter((l) => completedIds.has(l.id) || visitedIds.has(l.id)).length
          const total = seriesLessons.length
          const progressPct = total > 0 ? Math.round((completedCount / total) * 100) : 0
          const isExpanded = expandedSlug === series.slug

          // Find first uncompleted lesson for the CTA
          const nextLesson = seriesLessons.find(
            (l) => !completedIds.has(l.id) && !visitedIds.has(l.id),
          ) ?? seriesLessons[0]

          return (
            <div
              key={series.slug}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* Series header */}
              <button
                onClick={() => setExpandedSlug(isExpanded ? null : series.slug)}
                className="w-full text-left p-4 flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                aria-expanded={isExpanded}
              >
                <span
                  className="text-2xl flex-shrink-0 mt-0.5"
                  dangerouslySetInnerHTML={{ __html: series.icon }}
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 dark:text-gray-100 text-sm leading-tight">
                    {series.name}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mt-0.5">
                    {series.description}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0">
                      {completedCount} of {total}
                    </span>
                  </div>
                </div>
                <span
                  className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  &#x25BC;
                </span>
              </button>

              {/* Expanded lesson list */}
              {isExpanded && (
                <div className="border-t border-gray-100 dark:border-gray-700">
                  <div className="p-3 space-y-1">
                    {seriesLessons.map((lesson) => {
                      const done = completedIds.has(lesson.id) || visitedIds.has(lesson.id)
                      return (
                        <Link
                          key={lesson.id}
                          to={lesson.to as '/'}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                        >
                          <span
                            className={`text-sm flex-shrink-0 ${done ? 'text-emerald-500' : 'text-gray-300 dark:text-gray-600'}`}
                            aria-hidden="true"
                          >
                            {done ? '\u2713' : '\u25CB'}
                          </span>
                          <span
                            className={`text-sm flex-1 leading-tight ${done ? 'text-gray-500 dark:text-gray-400' : 'text-gray-700 dark:text-gray-200'} group-hover:text-blue-600 dark:group-hover:text-blue-400`}
                          >
                            {lesson.title}
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                  {nextLesson && (
                    <div className="px-4 pb-4">
                      <Link
                        to={nextLesson.to as '/'}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
                      >
                        {completedCount === 0 ? 'Start series \u2192' : completedCount === total ? 'Review series \u2192' : 'Continue series \u2192'}
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
