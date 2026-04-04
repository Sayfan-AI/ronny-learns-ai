import { useState, useCallback } from 'react'

const REVIEW_LATER_KEY = 'ronny-review-later'

function loadReviewLater(): Set<string> {
  try {
    const raw = localStorage.getItem(REVIEW_LATER_KEY)
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

function saveReviewLater(ids: Set<string>) {
  try {
    localStorage.setItem(REVIEW_LATER_KEY, JSON.stringify(Array.from(ids)))
  } catch {
    // ignore
  }
}

export function useReviewLater(lessonId: string) {
  const [reviewSet, setReviewSet] = useState<Set<string>>(loadReviewLater)
  const isMarked = reviewSet.has(lessonId)

  const toggle = useCallback(() => {
    setReviewSet(prev => {
      const next = new Set(prev)
      if (next.has(lessonId)) {
        next.delete(lessonId)
      } else {
        next.add(lessonId)
      }
      saveReviewLater(next)
      return next
    })
  }, [lessonId])

  return { isMarked, toggle }
}

export function loadAllReviewLater(): string[] {
  try {
    const raw = localStorage.getItem(REVIEW_LATER_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}
