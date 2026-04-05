import { Link } from '@tanstack/react-router'
import { loadLessonViewCounts } from '../hooks/useMarkVisited'

interface LessonEntry {
  id: string
  title: string
  to: string
  icon: string
}

interface PopularLessonsProps {
  lessons: LessonEntry[]
  /** Minimum number of visited lessons before this panel appears */
  minVisited?: number
}

export function PopularLessons({ lessons, minVisited = 3 }: PopularLessonsProps) {
  const counts = loadLessonViewCounts()

  // Build ranked list from lessons that have been viewed at least once
  const viewed = lessons
    .filter(l => (counts[l.id] ?? 0) > 0)
    .map(l => ({ ...l, count: counts[l.id] ?? 0 }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)

  if (viewed.length < minVisited) return null

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-5 space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-xl" aria-hidden="true">&#x1F525;</span>
        <h2 className="text-base font-bold text-gray-800">Your most visited lessons</h2>
      </div>
      <p className="text-xs text-gray-500">The lessons you have returned to most often.</p>
      <ol className="space-y-2">
        {viewed.map((lesson, index) => (
          <li key={lesson.id}>
            <Link
              to={lesson.to as '/'}
              className="flex items-center gap-3 group hover:bg-amber-50 rounded-xl px-3 py-2 transition-colors"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center">
                {index + 1}
              </span>
              <span className="text-base flex-shrink-0" aria-hidden="true">{lesson.icon}</span>
              <span className="flex-1 text-sm text-gray-700 group-hover:text-amber-800 leading-snug line-clamp-1">
                {lesson.title}
              </span>
              <span className="text-xs text-gray-400 flex-shrink-0">{lesson.count}x</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
