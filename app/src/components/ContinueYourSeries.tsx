import { Link } from '@tanstack/react-router'
import { LESSON_SERIES } from '../data/lessonSeries'

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

interface SeriesProgress {
  id: string
  name: string
  description: string
  icon: string
  completedCount: number
  total: number
  ratio: number
  nextLessonId: string
  nextLessonPath: string
}

function getBestSeriesInProgress(): SeriesProgress | null {
  const visited = loadVisited()
  if (visited.size === 0) return null

  let best: SeriesProgress | null = null

  for (const series of LESSON_SERIES) {
    const total = series.lessonIds.length
    const completedCount = series.lessonIds.filter(id => visited.has(id)).length

    // Must have started but not fully completed
    if (completedCount === 0 || completedCount === total) continue

    const ratio = completedCount / total

    const nextLessonId = series.lessonIds.find(id => !visited.has(id))
    if (!nextLessonId) continue

    // Build the path for the next lesson — convert lesson id to route slug
    const nextLessonPath = `/learn/${nextLessonId}`

    const candidate: SeriesProgress = {
      id: series.id,
      name: series.name,
      description: series.description,
      icon: series.icon,
      completedCount,
      total,
      ratio,
      nextLessonId,
      nextLessonPath,
    }

    if (!best || ratio > best.ratio) {
      best = candidate
    }
  }

  return best
}

export function ContinueYourSeries() {
  const series = getBestSeriesInProgress()
  if (!series) return null

  const progressPercent = Math.round(series.ratio * 100)

  return (
    <div className="bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-200 rounded-2xl p-4 sm:p-5 space-y-3">
      <p className="text-xs font-semibold text-violet-600 uppercase tracking-wide">Continue your series</p>
      <Link
        to={series.nextLessonPath as '/'}
        className="flex items-center gap-4 group"
      >
        <span className="text-3xl flex-shrink-0">{series.icon}</span>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-violet-900 group-hover:underline text-base leading-tight">{series.name}</p>
          <p className="text-violet-700 text-sm mt-0.5 leading-relaxed">{series.description}</p>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex-1 bg-violet-200 rounded-full h-1.5 max-w-[120px]">
              <div
                className="bg-violet-600 h-1.5 rounded-full transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-violet-500 text-xs whitespace-nowrap">
              {series.completedCount} of {series.total} done
            </span>
          </div>
        </div>
        <span className="text-violet-400 text-xl flex-shrink-0 group-hover:translate-x-1 transition-transform">&rarr;</span>
      </Link>
    </div>
  )
}
