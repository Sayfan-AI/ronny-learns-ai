import { useState, useCallback } from 'react'

const STORAGE_KEY = 'ronny-name'

export function useUserName(): {
  name: string | null
  setName: (value: string) => void
  clearName: () => void
} {
  const [name, setNameState] = useState<string | null>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || null
    } catch {
      return null
    }
  })

  const setName = useCallback((value: string) => {
    const trimmed = value.trim().slice(0, 30)
    if (!trimmed) return
    try {
      localStorage.setItem(STORAGE_KEY, trimmed)
    } catch {
      // ignore storage errors
    }
    setNameState(trimmed)
  }, [])

  const clearName = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore storage errors
    }
    setNameState(null)
  }, [])

  return { name, setName, clearName }
}
