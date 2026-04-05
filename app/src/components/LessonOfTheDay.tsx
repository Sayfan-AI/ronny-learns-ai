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
  visitedIds: Set<string>
}

function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = date.getTime() - start.getTime()
  const oneDay = 1000 * 60 * 60 * 24
  return Math.floor(diff / oneDay)
}

const DIFFICULTY_COLOUR: Record<string, string> = {
  Beginner:     'bg-green-100 text-green-700',
  Intermediate: 'bg-amber-100 text-amber-700',
  Advanced:     'bg-red-100 text-red-700',
}

export function LessonOfTheDay({ lessons, visitedIds }: LessonOfTheDayProps) {
  if (lessons.length === 0) return null

  const dayIndex = getDayOfYear(new Date())
  const lesson = lessons[dayIndex % lessons.length]
  const isCompleted = visitedIds.has(lesson.id)
  const difficultyClass = DIFFICULTY_COLOUR[lesson.difficulty ?? 'Beginner'] ?? DIFFICULTY_COLOUR['Beginner']

  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 dark:from-gray-800 dark:to-gray-800 dark:border-amber-700 rounded-2xl p-4 sm:p-5 space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-lg">&#x2600;&#xFE0F;</span>
        <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide">Lesson of the day</p>
      </div>

      <div className="flex items-start gap-3 sm:gap-4">
        <span
          className="text-4xl flex-shrink-0 leading-none"
          dangerouslySetInnerHTML={{ __html: lesson.icon }}
        />
        <div className="flex-1 min-w-0 space-y-1">
          <p className="font-bold text-amber-900 dark:text-gray-100 leading-tight text-base sm:text-lg">
            {lesson.title}
          </p>
          <p className="text-amber-700 dark:text-gray-300 text-sm leading-relaxed">
            {lesson.description}
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {lesson.readingTime && (
              <span className="text-amber-500 dark:text-amber-400 text-xs">{lesson.readingTime} read</span>
            )}
            {lesson.difficulty && (
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${difficultyClass}`}>
                {lesson.difficulty}
              </span>
            )}
            {isCompleted && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                &#x2713; Completed
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="pt-1">
        <Link
          to={lesson.to as '/'}
          className="inline-block bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors"
        >
          {isCompleted ? 'Read again \u2192' : "Read today's lesson \u2192"}
        </Link>
      </div>
    </div>
  )
}
