import { useState, useCallback } from 'react'

const CALENDAR_KEY = 'ronny-learning-calendar'

// Record: { 'YYYY-MM-DD': count }
type CalendarRecord = Record<string, number>

function todayStr(): string {
  return new Date().toISOString().slice(0, 10)
}

function readCalendar(): CalendarRecord {
  try {
    const raw = localStorage.getItem(CALENDAR_KEY)
    if (!raw) return {}
    return JSON.parse(raw) as CalendarRecord
  } catch {
    return {}
  }
}

function writeCalendar(record: CalendarRecord): void {
  try {
    localStorage.setItem(CALENDAR_KEY, JSON.stringify(record))
  } catch { /* ignore */ }
}

export interface LearningCalendarState {
  /** Record of { 'YYYY-MM-DD': lessonCount } */
  calendar: CalendarRecord
  /** Increment today's lesson count by 1 */
  recordToday: () => void
}

export function useLearningCalendar(): LearningCalendarState {
  const [calendar, setCalendar] = useState<CalendarRecord>(() => readCalendar())

  const recordToday = useCallback(() => {
    const today = todayStr()
    setCalendar(prev => {
      const updated = { ...prev, [today]: (prev[today] ?? 0) + 1 }
      writeCalendar(updated)
      return updated
    })
  }, [])

  return { calendar, recordToday }
}

/** Non-hook version: record today's lesson and return updated calendar. Safe to call anywhere. */
export function recordTodayAndGetCalendar(): CalendarRecord {
  const today = todayStr()
  const current = readCalendar()
  const updated = { ...current, [today]: (current[today] ?? 0) + 1 }
  writeCalendar(updated)
  return updated
}
