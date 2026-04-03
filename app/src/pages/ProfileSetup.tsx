import { useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { useProfile } from '../hooks/useProfile'

const AVATARS = ['🙂', '😄', '🤩', '🧑', '👩', '🧔', '🦸', '🧙', '🐱', '🐶', '🦊', '🐼']

export function ProfileSetup() {
  const { profile, setProfile } = useProfile()
  const navigate = useNavigate()

  const [name, setName] = useState(profile?.name ?? '')
  const [avatar, setAvatar] = useState(profile?.avatar ?? '🙂')
  const [saved, setSaved] = useState(false)

  function handleSave() {
    const trimmed = name.trim()
    setProfile({ name: trimmed || 'Ronny', avatar })
    setSaved(true)
    setTimeout(() => {
      navigate({ to: '/' })
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10">
      <div className="max-w-md mx-auto space-y-8">

        {/* Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="text-blue-500 hover:underline text-sm">
            &larr; Back to home
          </Link>
          <div className="text-5xl pt-2">{avatar}</div>
          <h1 className="text-3xl font-bold text-gray-800">Set up your profile</h1>
          <p className="text-gray-500 leading-relaxed">
            Let&apos;s personalise this app for you. Enter your name and pick an avatar — it only takes a moment.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
          {/* Name input */}
          <div className="space-y-2">
            <label htmlFor="name-input" className="block font-semibold text-gray-700">
              What should we call you?
            </label>
            <input
              id="name-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your first name"
              maxLength={30}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <p className="text-gray-400 text-sm">Leave blank and we will use &ldquo;Ronny&rdquo;</p>
          </div>

          {/* Avatar picker */}
          <div className="space-y-3">
            <p className="font-semibold text-gray-700">Pick an avatar</p>
            <div className="grid grid-cols-6 gap-2">
              {AVATARS.map((a) => (
                <button
                  key={a}
                  onClick={() => setAvatar(a)}
                  className={`text-3xl p-2 rounded-xl transition-all ${
                    avatar === a
                      ? 'bg-blue-100 ring-2 ring-blue-400 scale-110'
                      : 'hover:bg-gray-100 hover:scale-110'
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          {/* Save button */}
          <button
            onClick={handleSave}
            disabled={saved}
            className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-green-500 text-white font-bold text-lg transition-colors"
          >
            {saved ? '✓ Saved! Taking you home...' : 'Save my profile'}
          </button>
        </div>

        <p className="text-center text-gray-400 text-sm">
          Your name and avatar are only saved in your browser — nothing is sent anywhere.
        </p>
      </div>
    </div>
  )
}
