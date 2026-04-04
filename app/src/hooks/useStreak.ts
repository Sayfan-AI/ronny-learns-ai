import { useState, useEffect, useCallback } from 'react'

const STREAK_KEY = 'ronny-streak-current'
const LAST_VISIT_KEY = 'ronny-streak-last-visit'
const BEST_KEY = 'ronny-streak-best'

function todayStr(): string {
  return new Date().toISOString().slice(0, 10) // 'YYYY-MM-DD'
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

function readStr(key: string): string {
  try {
    return localStorage.getItem(key) ?? ''
  } catch {
    return ''
  }
}

function writeInt(key: string, value: number): void {
  try { localStorage.setItem(key, String(value)) } catch { /* ignore */ }
}

function writeStr(key: string, value: string): void {
  try { localStorage.setItem(key, value) } catch { /* ignore */ }
}

interface StreakState {
  streak: number
  bestStreak: number
}

function computeStreak(): StreakState {
  const current = readInt(STREAK_KEY)
  const best = readInt(BEST_KEY)
  const lastVisit = readStr(LAST_VISIT_KEY)

  if (!lastVisit) {
    // First ever visit
    return { streak: 0, bestStreak: best }
  }

  const today = todayStr()

  if (lastVisit === today) {
    // Already visited today — streak unchanged
    return { streak: current, bestStreak: best }
  }

  if (lastVisit === yesterdayStr()) {
    // Visited yesterday — streak is still active
    return { streak: current, bestStreak: best }
  }

  // Skipped at least one day — streak broken
  return { streak: 0, bestStreak: best }
}

export function useStreak(): StreakState & { recordVisit: () => void } {
  const [state, setState] = useState<StreakState>(() => computeStreak())

  const recordVisit = useCallback(() => {
    const today = todayStr()
    const lastVisit = readStr(LAST_VISIT_KEY)

    if (lastVisit === today) return // Already recorded today

    let newStreak: number

    if (!lastVisit || (lastVisit !== yesterdayStr() && lastVisit !== today)) {
      // First visit ever, or streak broken
      newStreak = 1
    } else {
      // Consecutive day
      newStreak = readInt(STREAK_KEY) + 1
    }

    const currentBest = readInt(BEST_KEY)
    const newBest = Math.max(newStreak, currentBest)

    writeInt(STREAK_KEY, newStreak)
    writeInt(BEST_KEY, newBest)
    writeStr(LAST_VISIT_KEY, today)

    setState({ streak: newStreak, bestStreak: newBest })
  }, [])

  // Recompute on mount in case a day has passed since last render
  useEffect(() => {
    setState(computeStreak())
  }, [])

  return { ...state, recordVisit }
}

// ---- Backward-compatible exports used by MyProgress.tsx ----

export interface StreakData {
  /** Current streak in days */
  current: number
  /** All-time best streak in days */
  longest: number
}

/**
 * Non-hook version: records a visit immediately and returns the updated streak.
 * Safe to call outside of React (e.g. in useState initialiser).
 */
export function recordVisitAndGetStreak(): StreakData {
  const today = todayStr()
  const lastVisit = readStr(LAST_VISIT_KEY)

  if (lastVisit === today) {
    // Already recorded today — return current values
    return { current: readInt(STREAK_KEY), longest: readInt(BEST_KEY) }
  }

  let newStreak: number
  if (!lastVisit || (lastVisit !== yesterdayStr())) {
    newStreak = 1
  } else {
    newStreak = readInt(STREAK_KEY) + 1
  }

  const newBest = Math.max(newStreak, readInt(BEST_KEY))
  writeInt(STREAK_KEY, newStreak)
  writeInt(BEST_KEY, newBest)
  writeStr(LAST_VISIT_KEY, today)

  return { current: newStreak, longest: newBest }
}
