import { useState, useEffect } from 'react'

interface KeyTakeawaysProps {
  points: string[]
}

export function KeyTakeaways({ points }: KeyTakeawaysProps) {
  // Default to expanded on desktop (>=640px), collapsed on mobile
  const [open, setOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 640
    }
    return true
  })

  // Keep in sync if window resizes across the breakpoint
  useEffect(() => {
    function handleResize() {
      setOpen(window.innerWidth >= 640)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-2xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        aria-expanded={open}
      >
        <div className="flex items-center gap-2">
          <span className="text-xl select-none" aria-hidden="true">&#x1F4A1;</span>
          <span className="text-base font-bold text-blue-900 dark:text-blue-100">
            Key takeaways
          </span>
          <span className="hidden sm:inline-block bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2 py-0.5 rounded-full">
            {points.length} points
          </span>
        </div>
        <span
          className="text-blue-700 dark:text-blue-300 text-sm font-semibold flex-shrink-0 transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          aria-hidden="true"
        >
          &#x25BC;
        </span>
      </button>

      <div
        className="transition-all duration-200 ease-in-out overflow-hidden"
        style={{ maxHeight: open ? '600px' : '0px', opacity: open ? 1 : 0 }}
        aria-hidden={!open}
      >
        <ul className="px-5 pb-4 space-y-2">
          {points.map((point, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <p className="text-blue-900 dark:text-blue-100 text-sm leading-relaxed">{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
