import { useEffect, useState } from 'react'

const STORAGE_KEY = 'ronny-dark-mode'

function getInitialDark(): boolean {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored !== null) return stored === 'true'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function applyDark(dark: boolean) {
  if (dark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export function useDarkMode() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return getInitialDark()
  })

  // Apply on mount and whenever dark changes
  useEffect(() => {
    applyDark(dark)
    localStorage.setItem(STORAGE_KEY, String(dark))
  }, [dark])

  // Listen for OS preference changes (only when no manual override stored)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    function handleChange(e: MediaQueryListEvent) {
      const stored = localStorage.getItem(STORAGE_KEY)
      // Only follow OS if user hasn't manually overridden
      if (stored === null) {
        setDark(e.matches)
      }
    }
    mq.addEventListener('change', handleChange)
    return () => mq.removeEventListener('change', handleChange)
  }, [])

  function toggle() {
    setDark((d) => !d)
  }

  return { dark, toggle }
}
