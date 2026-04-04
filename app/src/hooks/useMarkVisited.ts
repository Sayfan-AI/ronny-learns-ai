import { useEffect } from 'react'

const VISITED_KEY = 'ronny-visited-modules'
const STREAK_KEY = 'ronny-streak-current'
const LAST_VISIT_KEY = 'ronny-streak-last-visit'
const BEST_KEY = 'ronny-streak-best'

function todayStr(): string {
  return new Date().toISOString().slice(0, 10)
}

function yesterdayStr(): string {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return d.toISOString().slice(0, 10)
}

function readInt(key: string): number {
  try {
    const v = localStorage.getItem(key)
    const n = v !== null ? parseInt(v, 10) : 0
    return isNaN(n) ? 0 : n
  } catch {
    return 0
  }
}

function recordStreakVisit() {
  try {
    const today = todayStr()
    const lastVisit = localStorage.getItem(LAST_VISIT_KEY) ?? ''
    if (lastVisit === today) return // Already recorded today

    let newStreak: number
    if (!lastVisit || (lastVisit !== yesterdayStr())) {
      newStreak = 1
    } else {
      newStreak = readInt(STREAK_KEY) + 1
    }

    const newBest = Math.max(newStreak, readInt(BEST_KEY))
    localStorage.setItem(STREAK_KEY, String(newStreak))
    localStorage.setItem(BEST_KEY, String(newBest))
    localStorage.setItem(LAST_VISIT_KEY, today)
  } catch {
    // ignore storage errors
  }
}

const TIMESTAMPS_KEY = 'ronny-lesson-timestamps'

/**
 * Records this module key as visited in localStorage when the page mounts.
 * Also records a streak visit for the day, and stores a completion timestamp
 * (on first visit) in ronny-lesson-timestamps.
 * Works whether the user arrived via the home page or a direct link.
 */
export function useMarkVisited(moduleKey: string) {
  useEffect(() => {
    try {
      const raw = localStorage.getItem(VISITED_KEY)
      const visited: string[] = raw ? JSON.parse(raw) : []
      if (!visited.includes(moduleKey)) {
        visited.push(moduleKey)
        localStorage.setItem(VISITED_KEY, JSON.stringify(visited))

        // Record timestamp for the learning timeline (first visit only)
        try {
          const tsRaw = localStorage.getItem(TIMESTAMPS_KEY)
          const timestamps: Record<string, string> = tsRaw ? JSON.parse(tsRaw) : {}
          if (!timestamps[moduleKey]) {
            timestamps[moduleKey] = new Date().toISOString()
            localStorage.setItem(TIMESTAMPS_KEY, JSON.stringify(timestamps))
          }
        } catch {
          // ignore
        }
      }
    } catch {
      // ignore storage errors (e.g. private browsing restrictions)
    }
    recordStreakVisit()
  }, [moduleKey])
}

/**
 * Loads lesson completion timestamps from localStorage.
 * Returns a map of lessonId -> ISO date string.
 */
export function loadLessonTimestamps(): Record<string, string> {
  try {
    const raw = localStorage.getItem(TIMESTAMPS_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}
