import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useProfile } from '../hooks/useProfile'

const VISITED_KEY = 'ronny-visited-modules'

const ALL_MODULE_IDS = [
  'github-signup', 'github-basics', 'what-is-ai', 'what-is-api',
  'genesis-system', 'how-this-was-built', 'what-is-ci-cd',
  'version-control', 'pull-request', 'meet-the-agents',
]

function loadVisited(): Set<string> {
  try {
    const raw = localStorage.getItem(VISITED_KEY)
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

function todayString(): string {
  const d = new Date()
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function Certificate() {
  const [visited] = useState<Set<string>>(loadVisited)
  const { profile } = useProfile()

  const completedCount = ALL_MODULE_IDS.filter(id => visited.has(id)).length
  const total = ALL_MODULE_IDS.length
  const allDone = completedCount === total
  const displayName = profile?.name || 'Ronny'

  if (!allDone) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white px-4 py-10 flex items-center justify-center">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="text-6xl">&#x1F4AA;</div>
          <h1 className="text-3xl font-bold text-gray-800">Almost there!</h1>
          <p className="text-gray-600 leading-relaxed">
            You have visited {completedCount} of {total} modules. Complete all of them to earn
            your certificate.
          </p>
          {/* Mini progress */}
          <div className="w-full bg-gray-100 rounded-full h-4">
            <div
              className="bg-amber-500 h-4 rounded-full transition-all duration-700"
              style={{ width: `${Math.round((completedCount / total) * 100)}%` }}
            />
          </div>
          <p className="text-gray-500 text-sm">{Math.round((completedCount / total) * 100)}% complete</p>
          <Link
            to="/"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Continue learning &rarr;
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-6">

        <div className="text-center">
          <Link to="/my-progress" className="text-blue-500 hover:underline text-sm">
            &larr; Back to My Progress
          </Link>
        </div>

        {/* Certificate card */}
        <div
          id="certificate"
          className="bg-white rounded-3xl border-4 border-amber-300 shadow-xl p-8 sm:p-12 space-y-6 print:shadow-none print:border-amber-400"
        >
          {/* Top decoration */}
          <div className="text-center space-y-1">
            <div className="flex justify-center gap-2 text-2xl">
              <span>&#x2B50;</span>
              <span>&#x1F3C6;</span>
              <span>&#x2B50;</span>
            </div>
            <p className="text-xs font-bold text-amber-600 uppercase tracking-widest">
              Certificate of Completion
            </p>
          </div>

          {/* Body */}
          <div className="text-center space-y-4">
            <p className="text-gray-500 text-lg">This certifies that</p>
            <p className="text-4xl font-extrabold text-gray-800">{displayName}</p>
            <p className="text-gray-500 text-lg">has successfully completed</p>
            <p className="text-2xl font-bold text-amber-700">Ronny Learns AI</p>
            <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
              A self-directed learning journey through AI, GitHub, APIs, version control,
              and the Genesis AI development system.
            </p>
          </div>

          {/* What they learned */}
          <div className="bg-amber-50 rounded-2xl p-6 space-y-3">
            <p className="text-sm font-semibold text-amber-800 uppercase tracking-wide text-center">Topics mastered</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                'Creating a GitHub account',
                'What GitHub is for',
                'What AI is and how it works',
                'What APIs are',
                'The Genesis AI system',
                'How this app was built',
                'CI/CD and automatic deployment',
                'Version control (commits, branches)',
                'Pull requests and code review',
                'How AI agents collaborate',
              ].map((topic, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-amber-500 font-bold flex-shrink-0">&#x2713;</span>
                  <span className="text-gray-700 text-sm">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Date and signature */}
          <div className="flex justify-between items-end pt-4 border-t border-amber-100">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide">Date completed</p>
              <p className="font-semibold text-gray-700">{todayString()}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Issued by</p>
              <p className="font-semibold text-gray-700">Genesis AI System</p>
              <p className="text-xs text-gray-400">sayfan-ai.github.io/ronny-learns-ai</p>
            </div>
          </div>
        </div>

        {/* Print / actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center print:hidden">
          <button
            onClick={() => window.print()}
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
          >
            &#x1F5A8; Print or save as PDF
          </button>
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold transition-colors text-center"
          >
            Back to home
          </Link>
        </div>

        <p className="text-gray-400 text-sm text-center print:hidden">
          To save as an image, right-click the certificate and choose "Save image as" — or use
          your browser's print dialog and select "Save as PDF".
        </p>

      </div>
    </div>
  )
}
