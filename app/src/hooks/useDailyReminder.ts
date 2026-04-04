/**
 * useDailyReminder
 *
 * Returns whether to show the daily learning reminder banner on the home page.
 * The banner appears if the user has not visited in more than 24 hours.
 * It can be dismissed for the current session.
 *
 * localStorage key: ronny-last-visit (ISO timestamp string)
 */

import { useState, useEffect } from 'react'

const LAST_VISIT_KEY = 'ronny-last-visit'
const MS_PER_DAY = 24 * 60 * 60 * 1000

function loadLastVisit(): number | null {
  try {
    const raw = localStorage.getItem(LAST_VISIT_KEY)
    if (!raw) return null
    const ts = parseInt(raw, 10)
    return isNaN(ts) ? null : ts
  } catch {
    return null
  }
}

function saveLastVisit(ts: number) {
  try {
    localStorage.setItem(LAST_VISIT_KEY, String(ts))
  } catch {
    // ignore
  }
}

interface DailyReminderResult {
  show: boolean
  dismiss: () => void
}

export function useDailyReminder(): DailyReminderResult {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const now = Date.now()
    const lastVisit = loadLastVisit()

    // Update the last-visit timestamp immediately on every page load
    saveLastVisit(now)

    // Show the banner only if a previous visit exists and was more than 24 hours ago
    if (lastVisit !== null && now - lastVisit > MS_PER_DAY) {
      setShow(true)
    }
  }, [])

  function dismiss() {
    setShow(false)
  }

  return { show, dismiss }
}
