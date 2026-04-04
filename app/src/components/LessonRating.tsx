import { useLessonRating } from '../hooks/useLessonRating'

interface LessonRatingProps {
  lessonId: string
}

export function LessonRating({ lessonId }: LessonRatingProps) {
  const { rating, setRating } = useLessonRating(lessonId)

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
      <p className="text-sm font-semibold text-gray-700">Was this lesson helpful?</p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setRating(rating === 'up' ? null : 'up')}
          aria-label="Rate this lesson as helpful"
          aria-pressed={rating === 'up'}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all ${
            rating === 'up'
              ? 'bg-emerald-100 border-emerald-400 text-emerald-700'
              : 'bg-white border-gray-300 text-gray-600 hover:border-emerald-300 hover:bg-emerald-50'
          }`}
        >
          <span aria-hidden="true">&#x1F44D;</span>
          <span>Yes, helpful</span>
        </button>
        <button
          onClick={() => setRating(rating === 'down' ? null : 'down')}
          aria-label="Rate this lesson as not helpful"
          aria-pressed={rating === 'down'}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all ${
            rating === 'down'
              ? 'bg-red-100 border-red-400 text-red-700'
              : 'bg-white border-gray-300 text-gray-600 hover:border-red-300 hover:bg-red-50'
          }`}
        >
          <span aria-hidden="true">&#x1F44E;</span>
          <span>Not really</span>
        </button>
      </div>
      {rating === 'up' && (
        <p className="text-emerald-700 text-xs font-medium">Thanks — glad it was useful!</p>
      )}
      {rating === 'down' && (
        <p className="text-gray-500 text-xs font-medium">Thanks for the feedback — we will keep improving!</p>
      )}
    </div>
  )
}
