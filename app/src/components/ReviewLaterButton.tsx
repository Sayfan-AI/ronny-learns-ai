import { useReviewLater } from '../hooks/useReviewLater'

interface ReviewLaterButtonProps {
  lessonId: string
}

export function ReviewLaterButton({ lessonId }: ReviewLaterButtonProps) {
  const { isMarked, toggle } = useReviewLater(lessonId)

  return (
    <button
      onClick={toggle}
      aria-label={isMarked ? 'Remove from review list' : 'Add to review later list'}
      aria-pressed={isMarked}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all ${
        isMarked
          ? 'bg-orange-100 border-orange-400 text-orange-700'
          : 'bg-white border-gray-300 text-gray-600 hover:border-orange-300 hover:bg-orange-50'
      }`}
    >
      <span aria-hidden="true">&#x1F514;</span>
      <span>{isMarked ? 'In your review list' : 'Review later'}</span>
    </button>
  )
}
