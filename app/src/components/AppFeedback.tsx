import { useState } from 'react'

const STORAGE_KEY = 'appRating'
const COMPLETED_KEY = 'visited_lessons'
const MIN_LESSONS = 5

function loadCompletedCount(): number {
  try {
    const raw = localStorage.getItem(COMPLETED_KEY)
    if (!raw) return 0
    const ids = JSON.parse(raw)
    return Array.isArray(ids) ? ids.length : 0
  } catch {
    return 0
  }
}

function loadExistingRating(): number | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const val = parseInt(raw, 10)
    return isNaN(val) ? null : val
  } catch {
    return null
  }
}

export function AppFeedback() {
  const completedCount = loadCompletedCount()
  const existingRating = loadExistingRating()

  const [selected, setSelected] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState<boolean>(existingRating !== null)

  if (completedCount < MIN_LESSONS) return null
  if (submitted) return null

  function handleSubmit() {
    if (selected === null) return
    try {
      localStorage.setItem(STORAGE_KEY, String(selected))
    } catch {
      // ignore
    }
    setSubmitted(true)
  }

  return (
    <div className="bg-pink-50 dark:bg-pink-950 border border-pink-200 dark:border-pink-800 rounded-2xl p-5 space-y-3">
      <p className="text-sm font-semibold text-pink-700 dark:text-pink-300 uppercase tracking-wide">How are we doing?</p>
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
        You have completed {completedCount} lessons — thank you! How would you rate this learning site so far?
      </p>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setSelected(star)}
            aria-label={`Rate ${star} star${star === 1 ? '' : 's'}`}
            className={`text-2xl transition-transform hover:scale-110 ${
              selected !== null && star <= selected
                ? 'text-yellow-400'
                : 'text-gray-300 dark:text-gray-600'
            }`}
          >
            &#x2605;
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={selected === null}
        className="bg-pink-600 hover:bg-pink-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
      >
        Submit rating
      </button>
    </div>
  )
}
