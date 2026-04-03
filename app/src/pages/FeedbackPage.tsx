import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useProfile } from '../hooks/useProfile'

const SUBJECTS = [
  { value: 'loved', label: 'I loved something' },
  { value: 'question', label: 'I have a question' },
  { value: 'confused', label: 'Something confused me' },
  { value: 'idea', label: 'I have an idea' },
  { value: 'other', label: 'Something else' },
]

const SUBJECT_LABELS: Record<string, string> = {
  loved: 'Loved something',
  question: 'Question',
  confused: 'Found something confusing',
  idea: 'Idea or suggestion',
  other: 'Feedback',
}

export function FeedbackPage() {
  const { profile } = useProfile()
  const [name, setName] = useState(profile?.name || '')
  const [subject, setSubject] = useState('loved')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!message.trim()) return

    const title = `[Feedback from ${name || 'Ronny'}] ${SUBJECT_LABELS[subject]}`
    const body = `**From:** ${name || 'Ronny'}\n**Subject:** ${SUBJECT_LABELS[subject]}\n\n${message.trim()}`
    const url = `https://github.com/Sayfan-AI/ronny-learns-ai/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}&labels=feedback`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10 flex items-center justify-center">
        <div className="max-w-lg w-full text-center space-y-6">
          <div className="text-7xl">&#x1F4EC;</div>
          <h1 className="text-3xl font-bold text-gray-800">Message sent!</h1>
          <p className="text-gray-600 leading-relaxed">
            A new tab opened with GitHub pre-filled with your message. If you are already signed in
            to GitHub, just click "Submit new issue" and the AI agents will see it.
          </p>
          <p className="text-gray-500 text-sm">
            Do not have a GitHub account yet?{' '}
            <Link to="/tutorial/github-signup" className="text-blue-500 hover:underline">
              Follow the signup guide
            </Link>{' '}
            — it only takes a few minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => { setSubmitted(false); setMessage('') }}
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
            >
              Send another message
            </button>
            <Link
              to="/"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10">
      <div className="max-w-lg mx-auto space-y-8">

        {/* Header */}
        <div className="space-y-3">
          <Link to="/" className="text-blue-500 hover:underline text-sm">
            &larr; Back to home
          </Link>
          <div className="text-center space-y-3">
            <div className="text-5xl">&#x1F4AC;</div>
            <h1 className="text-3xl font-bold text-gray-800">Share your thoughts</h1>
            <p className="text-gray-600 leading-relaxed">
              Got a question, idea, or reaction? Let us know! The AI agents monitor this and will
              take action on your feedback.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-6 space-y-5">
          {/* Name */}
          <div className="space-y-1">
            <label htmlFor="feedback-name" className="block text-sm font-semibold text-gray-700">
              Your name
            </label>
            <input
              id="feedback-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ronny"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
            />
          </div>

          {/* Subject */}
          <div className="space-y-1">
            <label htmlFor="feedback-subject" className="block text-sm font-semibold text-gray-700">
              What kind of feedback?
            </label>
            <select
              id="feedback-subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
            >
              {SUBJECTS.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="space-y-1">
            <label htmlFor="feedback-message" className="block text-sm font-semibold text-gray-700">
              Your message
            </label>
            <textarea
              id="feedback-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              rows={5}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow resize-none"
            />
          </div>

          <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-500 leading-relaxed">
            Clicking "Send message" will open GitHub with your message pre-filled. If you have a
            GitHub account, just click "Submit new issue" there. The AI agents will see it within
            hours.
          </div>

          <button
            type="submit"
            disabled={!message.trim()}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors text-lg"
          >
            Send message &rarr;
          </button>
        </form>

      </div>
    </div>
  )
}
