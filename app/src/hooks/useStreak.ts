/**
 * Tracks how many consecutive days the user has visited the app.
 * Stored in localStorage under 'ronny-streak'.
 *
 * Shape: { lastVisit: 'YYYY-MM-DD', current: number, longest: number }
 */

export interface StreakData {
  lastVisit: string
  current: number
  longest: number
}

const STREAK_KEY = 'ronny-streak'

function todayISO(): string {
  return new Date().toISOString().slice(0, 10)
}

function loadStreak(): StreakData {
  try {
    const raw = localStorage.getItem(STREAK_KEY)
    return raw ? JSON.parse(raw) : { lastVisit: '', current: 0, longest: 0 }
  } catch {
    return { lastVisit: '', current: 0, longest: 0 }
  }
}

function saveStreak(data: StreakData): void {
  try {
    localStorage.setItem(STREAK_KEY, JSON.stringify(data))
  } catch {
    // ignore storage errors
  }
}

/**
 * Records today as a visit and returns the up-to-date streak data.
 * Called once per page load.
 */
export function recordVisitAndGetStreak(): StreakData {
  const today = todayISO()
  const data = loadStreak()

  if (data.lastVisit === today) {
    return data
  }

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const yesterdayISO = yesterday.toISOString().slice(0, 10)

  const newCurrent = data.lastVisit === yesterdayISO ? data.current + 1 : 1
  const newLongest = Math.max(data.longest, newCurrent)

  const updated: StreakData = {
    lastVisit: today,
    current: newCurrent,
    longest: newLongest,
  }

  saveStreak(updated)
  return updated
}

/** Load streak data without recording a visit (for display only). */
export function getStreak(): StreakData {
  return loadStreak()
}
