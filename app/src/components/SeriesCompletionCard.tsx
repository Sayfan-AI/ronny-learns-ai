import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { LESSON_SERIES, getSeriesProgress } from '../data/lessonSeries'

const STORAGE_KEY = 'series-completion-acknowledged'
const VISITED_KEY = 'ronny-visited-modules'

function getAcknowledged(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function acknowledge(slug: string) {
  try {
    const current = getAcknowledged()
    if (!current.includes(slug)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...current, slug]))
    }
  } catch {
    // ignore
  }
}

function getVisited(): string[] {
  try {
    const raw = localStorage.getItem(VISITED_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function SeriesCompletionCard() {
  const [completedSeries, setCompletedSeries] = useState<typeof LESSON_SERIES[0] | null>(null)
  const [nextSeries, setNextSeries] = useState<typeof LESSON_SERIES[0] | null>(null)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const visitedRaw = getVisited()
  const visited = new Set(visitedRaw)
    const acknowledged = getAcknowledged()

    // Find completed series not yet acknowledged
    const newlyCompleted = LESSON_SERIES.filter((s) => {
      if (acknowledged.includes(s.slug)) return false
      const { completed, total } = getSeriesProgress(s, visited)
      return total > 0 && completed === total
    })

    if (newlyCompleted.length === 0) return

    // Show the most recently completed (last in list)
    setCompletedSeries(newlyCompleted[newlyCompleted.length - 1])

    // Find next unstarted series
    const notStarted = LESSON_SERIES.find((s) => {
      const { completed } = getSeriesProgress(s, visited)
      return completed === 0
    })
    setNextSeries(notStarted ?? null)
  }, [])

  if (!completedSeries || dismissed) return null

  const handleDismiss = () => {
    acknowledge(completedSeries.slug)
    setDismissed(true)
  }

  return (
    <div className="rounded-2xl border-2 border-yellow-300 dark:border-yellow-600 bg-yellow-50 dark:bg-yellow-950 p-6 mb-6 relative">
      <button
        onClick={handleDismiss}
        className="absolute top-3 right-3 text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-200 text-xl leading-none"
        aria-label="Dismiss"
      >
        &times;
      </button>

      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl" dangerouslySetInnerHTML={{ __html: completedSeries.icon }} />
        <div>
          <p className="text-xs font-semibold text-yellow-700 dark:text-yellow-400 uppercase tracking-wide">Series complete!</p>
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{completedSeries.name}</h3>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
        You have finished every lesson in this series. That is a real achievement &mdash; you now have a solid understanding of {completedSeries.name.toLowerCase()}.
      </p>

      {nextSeries && (
        <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-xl p-3 border border-yellow-200 dark:border-yellow-800">
          <div className="flex items-center gap-2">
            <span className="text-xl" dangerouslySetInnerHTML={{ __html: nextSeries.icon }} />
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Up next</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{nextSeries.name}</p>
            </div>
          </div>
          <Link
            to="/series"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex-shrink-0 ml-3"
          >
            Start series &rarr;
          </Link>
        </div>
      )}

      <button
        onClick={handleDismiss}
        className="mt-4 text-xs text-yellow-600 dark:text-yellow-400 hover:underline"
      >
        Dismiss
      </button>
    </div>
  )
}
