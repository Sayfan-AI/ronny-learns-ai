import { Link } from '@tanstack/react-router'

interface Lesson {
  id: string
  title: string
  description: string
  readingTime?: string
  icon: string
  to: string
  difficulty?: string
}

interface LessonOfTheDayProps {
  lessons: Lesson[]
  completedIds: Set<string>
}

function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = date.getTime() - start.getTime()
  return Math.floor(diff / 86400000)
}

const DIFFICULTY_COLOUR: Record<string, string> = {
  Beginner:     'bg-green-100 text-green-700',
  Intermediate: 'bg-amber-100 text-amber-700',
  Advanced:     'bg-red-100 text-red-700',
}

/**
 * Highlights one lesson per day, rotating deterministically through all lessons.
 * The same lesson is shown to all users on the same date.
 * If the user has already completed today's lesson, a tick is shown.
 */
export function LessonOfTheDay({ lessons, completedIds }: LessonOfTheDayProps) {
  if (lessons.length === 0) return null

  const today = new Date()
  const dayIndex = getDayOfYear(today)
  const lesson = lessons[dayIndex % lessons.length]
  const isCompleted = completedIds.has(lesson.id)
  const difficultyClass = DIFFICULTY_COLOUR[lesson.difficulty ?? 'Beginner'] ?? DIFFICULTY_COLOUR['Beginner']

  return (
    <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-4 sm:p-6 space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-lg">&#x1F4C5;</span>
        <p className="text-xs font-semibold text-sky-600 uppercase tracking-wide">Lesson of the day</p>
      </div>

      <div className="flex items-start gap-4">
        <span
          className="text-4xl flex-shrink-0 leading-none"
          dangerouslySetInnerHTML={{ __html: lesson.icon }}
        />
        <div className="flex-1 min-w-0 space-y-1">
          <p className="font-bold text-sky-900 leading-tight text-base sm:text-lg">
            {lesson.title}
          </p>
          <p className="text-sky-700 text-sm leading-relaxed">
            {lesson.description}
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {lesson.readingTime && (
              <span className="text-sky-500 text-xs">{lesson.readingTime} read</span>
            )}
            {lesson.difficulty && (
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${difficultyClass}`}>
                {lesson.difficulty}
              </span>
            )}
            {isCompleted && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                &#x2713; You&apos;ve completed this lesson
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="pt-1">
        <Link
          to={lesson.to as '/'}
          className="inline-block bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors"
        >
          {isCompleted ? 'Read again \u2192' : 'Read today\u2019s lesson \u2192'}
        </Link>
      </div>
    </div>
  )
}
