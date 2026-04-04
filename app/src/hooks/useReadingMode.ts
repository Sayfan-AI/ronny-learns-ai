import { useState, useEffect } from 'react'

export function useReadingMode() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && active) {
        setActive(false)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [active])

  useEffect(() => {
    if (active) {
      document.body.classList.add('reading-mode')
    } else {
      document.body.classList.remove('reading-mode')
    }
    return () => {
      document.body.classList.remove('reading-mode')
    }
  }, [active])

  return { active, toggle: () => setActive(v => !v) }
}
