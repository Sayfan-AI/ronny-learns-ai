import { useState, useEffect } from 'react'

interface LessonFeedbackProps {
  lessonId: string
}

type FeedbackValue = 'helpful' | 'not-helpful'

function storageKey(lessonId: string) {
  return `lessonFeedback:${lessonId}`
}

function getSavedFeedback(lessonId: string): FeedbackValue | null {
  try {
    const raw = localStorage.getItem(storageKey(lessonId))
    if (raw === 'helpful' || raw === 'not-helpful') return raw
  } catch {
    // ignore
  }
  return null
}

function saveFeedback(lessonId: string, value: FeedbackValue) {
  try {
    localStorage.setItem(storageKey(lessonId), value)
  } catch {
    // ignore
  }
}

/**
 * A small 'Was this lesson helpful?' prompt shown at the bottom of lesson pages.
 * Hides after the user responds and does not reappear on subsequent visits.
 */
export function LessonFeedback({ lessonId }: LessonFeedbackProps) {
  const [feedback, setFeedback] = useState<FeedbackValue | null>(null)
  const [thanksVisible, setThanksVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const saved = getSavedFeedback(lessonId)
    if (saved) setDismissed(true)
  }, [lessonId])

  if (dismissed) return null

  function handleFeedback(value: FeedbackValue) {
    saveFeedback(lessonId, value)
    setFeedback(value)
    setThanksVisible(true)
    setTimeout(() => setDismissed(true), 2000)
  }

  if (thanksVisible) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex items-center justify-center gap-2 text-gray-600 text-sm font-medium">
        <span>{feedback === 'helpful' ? '&#128077;' : '&#128078;'}</span>
        Thanks for your feedback!
      </div>
    )
  }

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
      <p className="text-sm font-semibold text-gray-700 text-center">Was this lesson helpful?</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => handleFeedback('helpful')}
          aria-label="Yes, this lesson was helpful"
          className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-green-50 hover:border-green-400 hover:text-green-700 transition-colors"
        >
          <span>&#x1F44D;</span> Yes
        </button>
        <button
          onClick={() => handleFeedback('not-helpful')}
          aria-label="No, this lesson was not helpful"
          className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-red-50 hover:border-red-400 hover:text-red-700 transition-colors"
        >
          <span>&#x1F44E;</span> Not really
        </button>
      </div>
    </div>
  )
}

/**
 * Helper to count how many lessons the user has marked as helpful.
 * Used in MyProgress.
 */
export function countHelpfulLessons(lessonIds: string[]): number {
  return lessonIds.filter(id => getSavedFeedback(id) === 'helpful').length
}
