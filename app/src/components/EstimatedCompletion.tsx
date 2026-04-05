interface EstimatedCompletionProps {
  completedCount: number
  totalCount: number
}

const MINUTES_PER_LESSON = 4

function formatTime(minutes: number): string {
  if (minutes < 60) return `about ${minutes} minute${minutes !== 1 ? 's' : ''}`
  const hours = Math.floor(minutes / 60)
  const remaining = minutes % 60
  if (remaining === 0) return `about ${hours} hour${hours !== 1 ? 's' : ''}`
  return `about ${hours} hour${hours !== 1 ? 's' : ''} and ${remaining} minute${remaining !== 1 ? 's' : ''}`
}

export function EstimatedCompletion({ completedCount, totalCount }: EstimatedCompletionProps) {
  const remaining = totalCount - completedCount
  const estimatedMinutes = remaining * MINUTES_PER_LESSON

  const allDone = remaining === 0

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 p-6 space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-3xl" aria-hidden="true">{allDone ? '&#x1F3C6;' : '&#x23F3;'}</span>
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">How long to finish?</h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 bg-indigo-100 dark:bg-indigo-900 rounded-full h-3 overflow-hidden">
          <div
            className="bg-indigo-500 dark:bg-indigo-400 h-3 rounded-full transition-all duration-500"
            style={{ width: totalCount > 0 ? `${Math.round((completedCount / totalCount) * 100)}%` : '0%' }}
            role="progressbar"
            aria-valuenow={completedCount}
            aria-valuemin={0}
            aria-valuemax={totalCount}
            aria-label={`${completedCount} of ${totalCount} lessons completed`}
          />
        </div>
        <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 whitespace-nowrap">
          {completedCount} / {totalCount}
        </span>
      </div>

      {allDone ? (
        <p className="text-gray-700 dark:text-gray-200 font-medium">
          You have completed every lesson. Amazing work!
        </p>
      ) : remaining === 1 ? (
        <p className="text-gray-700 dark:text-gray-200 font-medium">
          Just <span className="text-indigo-600 dark:text-indigo-400 font-bold">1 lesson</span> to go
          — only {formatTime(estimatedMinutes)} of learning left. You are almost there!
        </p>
      ) : remaining <= 5 ? (
        <p className="text-gray-700 dark:text-gray-200 font-medium">
          Just <span className="text-indigo-600 dark:text-indigo-400 font-bold">{remaining} lessons</span> to
          go — {formatTime(estimatedMinutes)} of learning left. The finish line is in sight!
        </p>
      ) : (
        <p className="text-gray-700 dark:text-gray-200 font-medium">
          You have <span className="text-indigo-600 dark:text-indigo-400 font-bold">{remaining} lessons</span> left
          — {formatTime(estimatedMinutes)} of learning to go.
        </p>
      )}

      <p className="text-gray-500 dark:text-gray-400 text-sm">
        Based on an average of {MINUTES_PER_LESSON} minutes per lesson.
      </p>
    </div>
  )
}
