import { Link } from '@tanstack/react-router'

/**
 * Returns the ISO week number for the given date.
 * Week 1 is the week containing the first Thursday of the year.
 */
function getISOWeek(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  // Set to nearest Thursday: current date + 4 - current day number (Sunday = 0)
  const dayNum = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum)
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7)
}

/**
 * Returns a stable number for the current year+week, used to pick the lesson.
 */
function getWeekSeed(): number {
  const now = new Date()
  return now.getFullYear() * 53 + getISOWeek(now)
}

interface Lesson {
  id: string
  title: string
  description: string
  readingTime?: string
  icon: string
  to: string
  difficulty?: string
}

interface LessonOfTheWeekProps {
  lessons: Lesson[]
  visitedIds: Set<string>
}

const DIFFICULTY_COLOUR: Record<string, string> = {
  Beginner:     'bg-green-100 text-green-700',
  Intermediate: 'bg-amber-100 text-amber-700',
  Advanced:     'bg-red-100 text-red-700',
}

/**
 * Highlights one lesson per week, rotating deterministically through all lessons.
 * The same lesson is shown to all users for the entire week.
 */
export function LessonOfTheWeek({ lessons, visitedIds }: LessonOfTheWeekProps) {
  if (lessons.length === 0) return null

  const seed = getWeekSeed()
  const lesson = lessons[seed % lessons.length]
  const isCompleted = visitedIds.has(lesson.id)
  const difficultyClass = DIFFICULTY_COLOUR[lesson.difficulty ?? 'Beginner'] ?? DIFFICULTY_COLOUR['Beginner']

  return (
    <div className="bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-200 rounded-2xl p-4 sm:p-6 space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-lg">&#x2728;</span>
        <p className="text-xs font-semibold text-violet-600 uppercase tracking-wide">Lesson of the week</p>
      </div>

      <div className="flex items-start gap-4">
        <span
          className="text-4xl flex-shrink-0 leading-none"
          dangerouslySetInnerHTML={{ __html: lesson.icon }}
        />
        <div className="flex-1 min-w-0 space-y-1">
          <p className="font-bold text-violet-900 leading-tight text-base sm:text-lg">
            {lesson.title}
          </p>
          <p className="text-violet-700 text-sm leading-relaxed">
            {lesson.description}
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {lesson.readingTime && (
              <span className="text-violet-500 text-xs">{lesson.readingTime} read</span>
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
          className="inline-block bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors"
        >
          {isCompleted ? 'Read again \u2192' : 'Read now \u2192'}
        </Link>
      </div>
    </div>
  )
}
