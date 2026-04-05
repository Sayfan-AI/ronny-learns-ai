import { useMemo } from 'react'
import { Link } from '@tanstack/react-router'
import { LESSON_SERIES } from '../data/lessonSeries'

interface LessonEntry {
  id: string
  title: string
  to: string
}

interface ContinueYourSeriesProps {
  lessons: LessonEntry[]
}

function loadVisited(): Set<string> {
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

export function ContinueYourSeries({ lessons }: ContinueYourSeriesProps) {
  const visited = useMemo(() => loadVisited(), [])

  const lessonMap = useMemo(() => {
    const map = new Map<string, LessonEntry>()
    for (const l of lessons) map.set(l.id, l)
    return map
  }, [lessons])

  // Find the series with at least 1 completed lesson and the highest completion ratio
  const bestSeries = useMemo(() => {
    let best: { series: typeof LESSON_SERIES[0]; completedCount: number; total: number; nextLesson: LessonEntry } | null = null

    for (const series of LESSON_SERIES) {
      const seriesLessons = series.lessonIds
        .map((id) => lessonMap.get(id))
        .filter((l): l is LessonEntry => l !== undefined)

      if (seriesLessons.length === 0) continue

      const completedCount = seriesLessons.filter((l) => visited.has(l.id)).length
      if (completedCount === 0) continue // Must have started

      const total = seriesLessons.length
      if (completedCount >= total) continue // Already finished

      const nextLesson = seriesLessons.find((l) => !visited.has(l.id))
      if (!nextLesson) continue

      const ratio = completedCount / total

      if (!best || ratio > best.completedCount / best.total) {
        best = { series, completedCount, total, nextLesson }
      }
    }

    return best
  }, [visited, lessonMap])

  if (!bestSeries) return null

  const { series, completedCount, total, nextLesson } = bestSeries
  const progressPct = Math.round((completedCount / total) * 100)

  return (
    <div className="bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-950 dark:to-indigo-950 rounded-2xl border border-violet-200 dark:border-violet-800 p-4 space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wide">Continue your series</span>
      </div>

      <div className="flex items-start gap-3">
        <span
          className="text-3xl flex-shrink-0"
          dangerouslySetInnerHTML={{ __html: series.icon }}
        />
        <div className="flex-1 min-w-0">
          <p className="font-bold text-violet-900 dark:text-violet-100 text-lg leading-snug">{series.name}</p>
          <p className="text-violet-700 dark:text-violet-300 text-sm leading-relaxed mt-0.5">{series.description}</p>

          <div className="mt-2 flex items-center gap-3">
            <div className="flex-1 bg-violet-200 dark:bg-violet-800 rounded-full h-2">
              <div
                className="bg-violet-500 dark:bg-violet-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <span className="text-violet-600 dark:text-violet-400 text-xs font-semibold whitespace-nowrap">
              {completedCount} of {total} done
            </span>
          </div>
        </div>
      </div>

      <Link
        to={nextLesson.to as '/'}
        className="flex items-center justify-center gap-2 w-full bg-violet-600 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-400 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm"
      >
        <span>Continue</span>
        <span>&rarr;</span>
      </Link>
    </div>
  )
}
