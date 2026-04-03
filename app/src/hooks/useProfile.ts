import { useState, useCallback } from 'react'

const PROFILE_KEY = 'ronny-profile'

export interface Profile {
  name: string
  avatar: string // emoji
}

function loadProfile(): Profile | null {
  try {
    const raw = localStorage.getItem(PROFILE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function saveProfile(profile: Profile): void {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile))
}

export function useProfile() {
  const [profile, setProfileState] = useState<Profile | null>(() => loadProfile())

  const setProfile = useCallback((p: Profile) => {
    saveProfile(p)
    setProfileState(p)
  }, [])

  const clearProfile = useCallback(() => {
    localStorage.removeItem(PROFILE_KEY)
    setProfileState(null)
  }, [])

  return { profile, setProfile, clearProfile }
}
