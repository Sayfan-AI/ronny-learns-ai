/**
 * Shows a 'You completed this lesson' badge when Ronny has finished
 * the quiz for this lesson. Quiz completion is stored in localStorage
 * under 'ronny-quiz-completed' (an array of lesson IDs).
 *
 * Usage: <CompletedBadge lessonId="what-is-ai" />
 * Place this just below the lesson title on any lesson page.
 */
export function CompletedBadge({ lessonId }: { lessonId: string }) {
  let completed = false
  try {
    const raw = localStorage.getItem('ronny-quiz-completed')
    if (raw) {
      const ids = JSON.parse(raw) as string[]
      completed = ids.includes(lessonId)
    }
  } catch {
    // localStorage unavailable — treat as not completed
  }

  if (!completed) return null

  return (
    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full border border-green-200">
      <span>&#x2713;</span>
      <span>You completed this lesson</span>
    </div>
  )
}
