import { useEffect } from 'react'

const VISITED_KEY = 'ronny-visited-modules'

/**
 * Records this module key as visited in localStorage when the page mounts.
 * Works whether the user arrived via the home page or a direct link.
 */
export function useMarkVisited(moduleKey: string) {
  useEffect(() => {
    try {
      const raw = localStorage.getItem(VISITED_KEY)
      const visited: string[] = raw ? JSON.parse(raw) : []
      if (!visited.includes(moduleKey)) {
        visited.push(moduleKey)
        localStorage.setItem(VISITED_KEY, JSON.stringify(visited))
      }
    } catch {
      // ignore storage errors (e.g. private browsing restrictions)
    }
  }, [moduleKey])
}
