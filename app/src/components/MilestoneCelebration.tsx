import { useEffect, useRef } from 'react'
import { useCompletionMilestone } from '../hooks/useCompletionMilestone'

export function MilestoneCelebration() {
  const { activeMilestone, dismiss } = useCompletionMilestone()
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (activeMilestone) {
      // Auto-dismiss after 6 seconds
      timerRef.current = setTimeout(() => {
        dismiss()
      }, 6000)
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [activeMilestone, dismiss])

  if (!activeMilestone) return null

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4"
    >
      <div className="bg-white border border-emerald-300 shadow-xl rounded-2xl p-5 flex items-start gap-4 animate-bounce-in">
        <span
          className="text-4xl flex-shrink-0 leading-none"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: activeMilestone.icon }}
        />
        <div className="flex-1 min-w-0">
          <p className="font-bold text-gray-800 text-sm leading-tight">{activeMilestone.message}</p>
          <p className="text-xs text-gray-500 mt-0.5">Keep going — you are doing great!</p>
        </div>
        <button
          onClick={dismiss}
          aria-label="Dismiss celebration"
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors ml-1"
        >
          &#x2715;
        </button>
      </div>
    </div>
  )
}
