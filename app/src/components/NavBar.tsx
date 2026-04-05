import { useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { useProfile } from '../hooks/useProfile'
import { useDarkMode } from '../hooks/useDarkMode'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/learning-path', label: 'Learning path' },
  { to: '/collections', label: 'Collections' },
  { to: '/tutorial/github-signup', label: 'GitHub signup' },
  { to: '/learn/github-basics', label: 'GitHub basics' },
  { to: '/learn/what-is-ai', label: 'What is AI?' },
  { to: '/learn/what-is-machine-learning', label: 'Machine learning' },
  { to: '/learn/neural-network', label: 'Neural networks' },
  { to: '/learn/language-models', label: 'Language models' },
  { to: '/ai-history', label: 'AI history' },
  { to: '/ai-in-the-news', label: 'AI in the news' },
  { to: '/learn/ai-everyday-life', label: 'AI in everyday life' },
  { to: '/learn/ai-pros-and-cons', label: 'AI pros and cons' },
  { to: '/learn/what-is-api', label: 'What is an API?' },
  { to: '/learn/genesis-system', label: 'Genesis system' },
  { to: '/learn/what-is-ci-cd', label: 'How does it update?' },
  { to: '/glossary', label: 'Glossary' },
  { to: '/learning-recap', label: 'Learning recap' },
  { to: '/quiz-review', label: 'Quiz review' },
  { to: '/quiz/ai-facts', label: 'AI facts quiz' },
  { to: '/quiz/what-next', label: 'What to learn next' },
  { to: '/quiz/guess-the-ai', label: 'Guess the AI' },
  { to: '/quiz/sort-it-out', label: 'Sort it out' },
  { to: '/quiz/true-or-false', label: 'True or False' },
  { to: '/streak', label: 'My streak' },
  { to: '/ask', label: 'Ask a question' },
  { to: '/feedback', label: 'Give feedback' },
  { to: '/my-progress', label: 'My progress' },
  { to: '/series', label: 'Series' },
  { to: '/bookmarks', label: 'Bookmarks' },
]

export function NavBar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { profile } = useProfile()
  const { dark, toggle } = useDarkMode()

  function isActive(to: string) {
    if (to === '/') return location.pathname === '/'
    return location.pathname.startsWith(to)
  }

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo / brand */}
        <Link to="/" className="font-bold text-blue-700 dark:text-blue-400 text-lg tracking-tight hover:text-blue-900 dark:hover:text-blue-300 transition-colors flex-shrink-0">
          Ronny Learns AI
        </Link>

        {/* Profile greeting (desktop) */}
        {profile && (
          <Link
            to="/profile"
            className="hidden md:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            title="Edit your profile"
          >
            <span className="text-xl">{profile.avatar}</span>
            <span className="font-medium">Hi, {profile.name}!</span>
          </Link>
        )}
        {!profile && (
          <Link
            to="/profile"
            className="hidden md:flex items-center gap-1 text-xs text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
          >
            Set your name &rarr;
          </Link>
        )}

        {/* Desktop: key links only to avoid overflow */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { to: '/', label: 'Home' },
            { to: '/learning-path', label: 'Learning path' },
            { to: '/series', label: 'Series' },
            { to: '/collections', label: 'Collections' },
            { to: '/ask', label: 'Ask' },
            { to: '/my-progress', label: 'My progress' },
            { to: '/streak', label: 'My streak' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.to)
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Dark mode toggle */}
        <button
          onClick={toggle}
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {dark ? (
            /* Sun icon */
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="5" />
              <path strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            /* Moon icon */
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown — all links */}
      {open && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 pb-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-3 py-3 rounded-lg text-sm font-medium transition-colors min-h-[44px] flex items-center ${
                isActive(link.to)
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
