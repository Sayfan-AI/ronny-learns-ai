import { useState, useEffect } from 'react'

const STREAK_KEY = 'ronny-streak-current'
const DISMISSED_KEY = 'ronny-streak-reward-dismissed'

function loadStreak(): number {
  try {
    const v = localStorage.getItem(STREAK_KEY)
    const n = v !== null ? parseInt(v, 10) : 0
    return isNaN(n) ? 0 : n
  } catch {
    return 0
  }
}

function isDismissed(): boolean {
  try {
    return sessionStorage.getItem(DISMISSED_KEY) === '1'
  } catch {
    return false
  }
}

function dismiss() {
  try {
    sessionStorage.setItem(DISMISSED_KEY, '1')
  } catch {
    // ignore
  }
}

function getMotivation(streak: number): string {
  if (streak >= 30) return `You have been learning every day for ${streak} days. That is exceptional!`
  if (streak >= 14) return `${streak} days in a row! You are building a real learning habit. Aim for 30 days!`
  if (streak >= 7) return `One week! Can you make it to 14 days in a row?`
  return `Keep it up — can you reach 7 days in a row?`
}

export function StreakReward() {
  const [streak, setStreak] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const s = loadStreak()
    setStreak(s)
    setVisible(s >= 3 && !isDismissed())
  }, [])

  if (!visible) return null

  const motivation = getMotivation(streak)

  return (
    <div className="bg-gradient-to-r from-amber-400 to-orange-400 dark:from-amber-600 dark:to-orange-600 rounded-2xl px-5 py-4 flex items-start gap-3 shadow-sm relative" role="status">
      <span className="text-3xl flex-shrink-0" aria-hidden="true">&#x1F525;</span>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-white text-base leading-snug">
          You are on a {streak}-day streak!
        </p>
        <p className="text-amber-50 text-sm leading-relaxed mt-0.5">{motivation}</p>
      </div>
      <button
        onClick={() => { dismiss(); setVisible(false) }}
        className="flex-shrink-0 text-white/80 hover:text-white transition-colors text-lg leading-none mt-0.5"
        aria-label="Dismiss streak notification"
      >
        &times;
      </button>
    </div>
  )
}
