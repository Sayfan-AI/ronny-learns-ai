import { useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { useProfile } from '../hooks/useProfile'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/tutorial/github-signup', label: 'GitHub signup' },
  { to: '/learn/github-basics', label: 'GitHub basics' },
  { to: '/learn/what-is-ai', label: 'What is AI?' },
  { to: '/learn/what-is-api', label: 'What is an API?' },
  { to: '/learn/genesis-system', label: 'Genesis system' },
  { to: '/learn/what-is-ci-cd', label: 'How does it update?' },
  { to: '/ask', label: 'Ask a question' },
  { to: '/feedback', label: 'Give feedback' },
  { to: '/my-progress', label: 'My progress' },
]

export function NavBar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { profile } = useProfile()

  function isActive(to: string) {
    if (to === '/') return location.pathname === '/'
    return location.pathname.startsWith(to)
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo / brand */}
        <Link to="/" className="font-bold text-blue-700 text-lg tracking-tight hover:text-blue-900 transition-colors flex-shrink-0">
          Ronny Learns AI
        </Link>

        {/* Profile greeting (desktop) */}
        {profile && (
          <Link
            to="/profile"
            className="hidden md:flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            title="Edit your profile"
          >
            <span className="text-xl">{profile.avatar}</span>
            <span className="font-medium">Hi, {profile.name}!</span>
          </Link>
        )}
        {!profile && (
          <Link
            to="/profile"
            className="hidden md:flex items-center gap-1 text-xs text-blue-500 hover:text-blue-700 transition-colors font-medium"
          >
            Set your name &rarr;
          </Link>
        )}

        {/* Desktop: key links only to avoid overflow */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { to: '/', label: 'Home' },
            { to: '/ask', label: 'Ask' },
            { to: '/feedback', label: 'Feedback' },
            { to: '/my-progress', label: 'My progress' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.to)
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

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
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-3 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.to)
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
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
