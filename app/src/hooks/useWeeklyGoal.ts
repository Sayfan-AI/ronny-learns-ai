// Weekly learning goal — stored in localStorage.
// Tracks how many lessons Ronny completes in the current calendar week (Mon-Sun).

const GOAL_KEY = 'ronny-weekly-goal'

export interface WeeklyGoalData {
  /** Target lessons per week chosen by the user, or null if not set */
  goal: number | null
  /** Number of lessons completed so far this calendar week */
  completedThisWeek: number
  /** ISO date string (YYYY-MM-DD) of Monday of the current week */
  weekStart: string
}

function getMondayOfWeek(date: Date): string {
  const d = new Date(date)
  const day = d.getDay() // 0 = Sunday
  const diff = day === 0 ? -6 : 1 - day
  d.setDate(d.getDate() + diff)
  return d.toISOString().slice(0, 10)
}


/**
 * Call this when a lesson is completed to register it for the current week.
 */
export function recordWeeklyCompletion(lessonId: string): void {
  try {
    const weekStart = getMondayOfWeek(new Date())
    const raw = localStorage.getItem('ronny-weekly-completions')
    const data: Record<string, string[]> = raw ? JSON.parse(raw) : {}
    if (!data[weekStart]) data[weekStart] = []
    if (!data[weekStart].includes(lessonId)) {
      data[weekStart].push(lessonId)
      localStorage.setItem('ronny-weekly-completions', JSON.stringify(data))
    }
  } catch {
    // ignore
  }
}

export function loadWeeklyGoal(): WeeklyGoalData {
  const weekStart = getMondayOfWeek(new Date())

  let goal: number | null = null
  try {
    const raw = localStorage.getItem(GOAL_KEY)
    if (raw !== null) goal = parseInt(raw, 10)
    if (isNaN(goal as number)) goal = null
  } catch {
    goal = null
  }

  let completedThisWeek = 0
  try {
    const raw = localStorage.getItem('ronny-weekly-completions')
    const data: Record<string, string[]> = raw ? JSON.parse(raw) : {}
    completedThisWeek = (data[weekStart] ?? []).length
  } catch {
    completedThisWeek = 0
  }

  return { goal, completedThisWeek, weekStart }
}

export function saveWeeklyGoal(goal: number): void {
  try {
    localStorage.setItem(GOAL_KEY, String(goal))
  } catch {
    // ignore
  }
}

export function clearWeeklyGoal(): void {
  try {
    localStorage.removeItem(GOAL_KEY)
  } catch {
    // ignore
  }
}

