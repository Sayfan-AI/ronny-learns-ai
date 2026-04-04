import { useEffect } from 'react'

export const VISIT_COUNTS_KEY = 'ronny-lesson-visit-counts'

export function useLessonVisit(lessonId: string) {
  useEffect(() => {
    if (!lessonId) return
    try {
      const raw = localStorage.getItem(VISIT_COUNTS_KEY)
      const counts: Record<string, number> = raw ? JSON.parse(raw) : {}
      counts[lessonId] = (counts[lessonId] ?? 0) + 1
      localStorage.setItem(VISIT_COUNTS_KEY, JSON.stringify(counts))
    } catch {
      // ignore storage errors
    }
  }, [lessonId])
}

export function loadVisitCounts(): Record<string, number> {
  try {
    const raw = localStorage.getItem(VISIT_COUNTS_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}
