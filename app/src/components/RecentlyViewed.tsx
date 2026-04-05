import { Link } from '@tanstack/react-router'

const RECENTLY_VIEWED_KEY = 'ronny-recently-viewed'
const MAX_ENTRIES = 5

/**
 * Returns the ordered list of recently viewed lesson IDs (most recent first).
 */
export function loadRecentlyViewed(): string[] {
  try {
    const raw = localStorage.getItem(RECENTLY_VIEWED_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

/**
 * Records a lesson visit — adds the lesson ID to the front of the list,
 * deduplicates, and trims to MAX_ENTRIES. Call this from lesson pages.
 */
export function recordRecentlyViewed(lessonId: string): void {
  try {
    const current = loadRecentlyViewed()
    const updated = [lessonId, ...current.filter(id => id !== lessonId)].slice(0, MAX_ENTRIES)
    localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(updated))
  } catch {
    // ignore storage errors
  }
}

interface Lesson {
  id: string
  title: string
  icon: string
  to: string
  difficulty?: string
}

interface RecentlyViewedProps {
  lessons: Lesson[]
  recentIds: string[]
}

const DIFFICULTY_COLOUR: Record<string, string> = {
  Beginner:     'bg-green-100 text-green-700',
  Intermediate: 'bg-amber-100 text-amber-700',
  Advanced:     'bg-red-100 text-red-700',
}

/**
 * Shows a compact list of the last lessons Ronny visited, so they can
 * quickly jump back to something they were reading.
 * Hidden when fewer than 2 recently viewed lessons exist.
 */
export function RecentlyViewed({ lessons, recentIds }: RecentlyViewedProps) {
  if (recentIds.length < 2) return null

  const lessonMap = new Map(lessons.map(l => [l.id, l]))
  const recentLessons = recentIds
    .map(id => lessonMap.get(id))
    .filter((l): l is Lesson => l !== undefined)

  if (recentLessons.length < 2) return null

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 space-y-3 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-lg">&#x1F4D6;</span>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Recently viewed</p>
      </div>

      <ul className="space-y-2">
        {recentLessons.map(lesson => {
          const diffClass = DIFFICULTY_COLOUR[lesson.difficulty ?? 'Beginner'] ?? DIFFICULTY_COLOUR['Beginner']
          return (
            <li key={lesson.id}>
              <Link
                to={lesson.to as '/'}
                className="flex items-center gap-3 rounded-xl p-2 hover:bg-gray-50 transition-colors group"
              >
                <span
                  className="text-2xl flex-shrink-0"
                  dangerouslySetInnerHTML={{ __html: lesson.icon }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 group-hover:text-blue-700 leading-snug truncate">
                    {lesson.title}
                  </p>
                  {lesson.difficulty && (
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full mt-0.5 inline-block ${diffClass}`}>
                      {lesson.difficulty}
                    </span>
                  )}
                </div>
                <span className="text-gray-400 group-hover:text-blue-600 flex-shrink-0 text-sm">&#x2192;</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
