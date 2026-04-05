import { useState, useEffect } from 'react'

interface Props {
  facts: string[]
}

export function AIFactsTicker({ facts }: Props) {
  const [index, setIndex] = useState<number>(() => Math.floor(Math.random() * facts.length))

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % facts.length)
    }, 8000)
    return () => clearInterval(id)
  }, [facts.length])

  function handleNext() {
    setIndex((prev) => (prev + 1) % facts.length)
  }

  if (facts.length === 0) return null

  return (
    <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-2xl p-5 space-y-3">
      <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
        &#x1F4A1; Did you know?
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed min-h-[3rem]">
        {facts[index]}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-amber-500 dark:text-amber-500">
          {index + 1} of {facts.length}
        </span>
        <button
          onClick={handleNext}
          className="text-sm font-semibold text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100 transition-colors"
        >
          Next fact &rarr;
        </button>
      </div>
    </div>
  )
}
