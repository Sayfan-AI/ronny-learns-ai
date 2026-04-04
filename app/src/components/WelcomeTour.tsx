import { useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'

const TOUR_KEY = 'ronny-welcome-tour-seen'

function hasSeenTour(): boolean {
  try {
    return localStorage.getItem(TOUR_KEY) === 'true'
  } catch {
    return false
  }
}

function markTourSeen() {
  try {
    localStorage.setItem(TOUR_KEY, 'true')
  } catch {
    // ignore
  }
}

export function WelcomeTour() {
  const [visible, setVisible] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!hasSeenTour()) {
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    if (visible) {
      // Move focus to close button when modal opens
      closeRef.current?.focus()
    }
  }, [visible])

  useEffect(() => {
    if (!visible) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') dismiss()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [visible])

  function dismiss() {
    markTourSeen()
    setVisible(false)
  }

  if (!visible) return null

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-title"
      onClick={(e) => { if (e.target === e.currentTarget) dismiss() }}
    >
      {/* Modal */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative">
        {/* Close button */}
        <button
          ref={closeRef}
          onClick={dismiss}
          aria-label="Close welcome tour"
          className="absolute top-4 right-4 p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center space-y-4">
          <div className="text-5xl" aria-hidden="true">👋</div>
          <h2 id="welcome-title" className="text-2xl font-bold text-gray-900">
            Welcome to Ronny Learns AI!
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            This app will teach you about AI, GitHub, and how software gets built — all in plain English, no experience needed.
          </p>
        </div>

        {/* Highlights */}
        <div className="mt-6 space-y-3">
          <TourItem icon="📚" label="Lessons" description="Step-by-step guides that explain everything from scratch" to="/" onClick={dismiss} />
          <TourItem icon="💬" label="Ask a question" description="Type any question and get a simple, clear answer" to="/ask" onClick={dismiss} />
          <TourItem icon="📖" label="Glossary" description="Plain-language definitions for every technical term" to="/glossary" onClick={dismiss} />
          <TourItem icon="🏆" label="My progress" description="Track your learning and earn a certificate" to="/my-progress" onClick={dismiss} />
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            to="/"
            onClick={dismiss}
            className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl transition-colors"
          >
            Start learning
          </Link>
          <button
            onClick={dismiss}
            className="flex-1 text-center border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium px-5 py-3 rounded-xl transition-colors"
          >
            Explore on my own
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-gray-400">
          This message won't appear again.
        </p>
      </div>
    </div>
  )
}

function TourItem({ icon, label, description, to, onClick }: {
  icon: string
  label: string
  description: string
  to: string
  onClick: () => void
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
    >
      <span className="text-2xl flex-shrink-0" aria-hidden="true">{icon}</span>
      <div className="text-left">
        <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors text-sm">{label}</div>
        <div className="text-gray-500 text-sm">{description}</div>
      </div>
    </Link>
  )
}
