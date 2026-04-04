import { useState } from 'react'

export type Rating = 'up' | 'down' | null

const storageKey = (lessonId: string) => `ronny-lesson-rating-${lessonId}`

function loadRating(lessonId: string): Rating {
  try {
    const raw = localStorage.getItem(storageKey(lessonId))
    if (raw === 'up' || raw === 'down') return raw
    return null
  } catch {
    return null
  }
}

function saveRating(lessonId: string, rating: Rating) {
  try {
    if (rating === null) {
      localStorage.removeItem(storageKey(lessonId))
    } else {
      localStorage.setItem(storageKey(lessonId), rating)
    }
  } catch {
    // ignore
  }
}

export function useLessonRating(lessonId: string) {
  const [rating, setRatingState] = useState<Rating>(() => loadRating(lessonId))

  function setRating(newRating: Rating) {
    saveRating(lessonId, newRating)
    setRatingState(newRating)
  }

  return { rating, setRating }
}

/** Returns true if a lesson was rated "up" — used for home page card indicators */
export function isLessonHelpful(lessonId: string): boolean {
  return loadRating(lessonId) === 'up'
}
