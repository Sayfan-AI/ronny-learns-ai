import { useState, useEffect, useCallback } from 'react'

const QUIZ_KEY = 'ronny-quiz-completed'
const CELEBRATED_KEY = 'ronny-celebrated-milestones'

const MILESTONE_DATA: Array<{ count: number; message: string; icon: string }> = [
  { count: 10, message: '10 lessons done — you are on a roll!', icon: '&#x2B50;' },
  { count: 20, message: '20 lessons! You are halfway through the full curriculum.', icon: '&#x1F3C6;' },
  { count: 25, message: '25 lessons — almost there, keep going!', icon: '&#x1F525;' },
  { count: 37, message: 'You completed all the lessons! You are an AI expert now.', icon: '&#x1F393;' },
]

export interface MilestoneInfo {
  count: number
  message: string
  icon: string
}

function loadCompletedCount(): number {
  try {
    const raw = localStorage.getItem(QUIZ_KEY)
    const arr: string[] = raw ? JSON.parse(raw) : []
    return arr.length
  } catch {
    return 0
  }
}

function loadCelebrated(): Set<number> {
  try {
    const raw = localStorage.getItem(CELEBRATED_KEY)
    const arr: number[] = raw ? JSON.parse(raw) : []
    return new Set(arr)
  } catch {
    return new Set()
  }
}

function saveCelebrated(celebrated: Set<number>) {
  try {
    localStorage.setItem(CELEBRATED_KEY, JSON.stringify([...celebrated]))
  } catch {
    // ignore
  }
}

export function useCompletionMilestone() {
  const [activeMilestone, setActiveMilestone] = useState<MilestoneInfo | null>(null)

  const dismiss = useCallback(() => {
    setActiveMilestone(null)
  }, [])

  useEffect(() => {
    // Listen for storage events from other tabs, and also poll on mount
    function check() {
      const count = loadCompletedCount()
      const celebrated = loadCelebrated()
      for (const milestone of MILESTONE_DATA) {
        if (count >= milestone.count && !celebrated.has(milestone.count)) {
          celebrated.add(milestone.count)
          saveCelebrated(celebrated)
          setActiveMilestone(milestone)
          break // show one at a time
        }
      }
    }

    check()

    function onStorage(e: StorageEvent) {
      if (e.key === QUIZ_KEY) check()
    }

    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  return { activeMilestone, dismiss }
}
