import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { useProfile } from '../hooks/useProfile'

const VISITED_KEY = 'ronny-visited-modules'

function loadVisited(): Set<string> {
  try {
    const raw = localStorage.getItem(VISITED_KEY)
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

interface Lesson {
  id: string
  icon: string
  title: string
  summary: string
  path: string
}

interface Group {
  label: string
  color: string
  lessons: Lesson[]
}

const GROUPS: Group[] = [
  {
    label: 'Getting started',
    color: 'blue',
    lessons: [
      { id: 'github-signup', icon: '&#x1F511;', title: 'Create your GitHub account', summary: 'Step-by-step guide to signing up for GitHub.', path: '/tutorial/github-signup' },
      { id: 'github-basics', icon: '&#x1F4C1;', title: 'What is GitHub for?', summary: 'Repos, commits, issues, and pull requests explained simply.', path: '/learn/github-basics' },
      { id: 'what-is-api', icon: '&#x1F50C;', title: 'What is an API?', summary: 'How two pieces of software talk to each other.', path: '/learn/what-is-api' },
      { id: 'genesis-system', icon: '&#x2699;&#xFE0F;', title: 'What is the Genesis system?', summary: 'The AI-powered dev loop that built this app.', path: '/learn/genesis-system' },
    ],
  },
  {
    label: 'AI basics',
    color: 'purple',
    lessons: [
      { id: 'what-is-ai', icon: '&#x1F916;', title: 'What is AI?', summary: 'Artificial intelligence explained without jargon.', path: '/learn/what-is-ai' },
      { id: 'what-is-ml', icon: '&#x1F4CA;', title: 'What is machine learning?', summary: 'How computers learn from examples instead of rules.', path: '/learn/what-is-machine-learning' },
      { id: 'how-ai-training-works', icon: '&#x1F3CB;&#xFE0F;', title: 'How does AI training work?', summary: 'What actually happens when an AI model is trained.', path: '/learn/how-ai-training-works' },
    ],
  },
  {
    label: 'AI in depth',
    color: 'pink',
    lessons: [
      { id: 'neural-network', icon: '&#x1F9E0;', title: 'What is a neural network?', summary: 'Layers, neurons, and how deep learning works.', path: '/learn/neural-network' },
      { id: 'language-models', icon: '&#x1F4AC;', title: 'How do language models work?', summary: 'Tokens, context, and how Claude generates text.', path: '/learn/language-models' },
      { id: 'ai-history', icon: '&#x1F4DC;', title: 'AI history timeline', summary: 'Key moments in AI from the 1950s to today.', path: '/ai-history' },
    ],
  },
  {
    label: 'AI and the world',
    color: 'sky',
    lessons: [
      { id: 'ai-everyday-life', icon: '&#x1F30D;', title: 'AI in everyday life', summary: 'Where you already encounter AI without realising it.', path: '/learn/ai-everyday-life' },
      { id: 'ai-pros-and-cons', icon: '&#x2696;&#xFE0F;', title: 'AI pros and cons', summary: 'Benefits and risks of AI, explained honestly.', path: '/learn/ai-pros-and-cons' },
    ],
  },
  {
    label: 'How this works',
    color: 'emerald',
    lessons: [
      { id: 'how-this-was-built', icon: '&#x1F528;', title: 'How this app was built', summary: 'An AI system built this entire website, autonomously.', path: '/learn/how-this-was-built' },
      { id: 'meet-the-agents', icon: '&#x1F4BC;', title: 'Meet the agents', summary: 'The specialist AI agents that run this project.', path: '/agents' },
      { id: 'what-is-ci-cd', icon: '&#x1F680;', title: 'What is CI/CD?', summary: 'How code changes reach you automatically.', path: '/learn/what-is-ci-cd' },
      { id: 'version-control', icon: '&#x1F4BE;', title: 'Version control', summary: 'How developers track changes without losing work.', path: '/learn/what-is-version-control' },
      { id: 'pull-request', icon: '&#x1F501;', title: 'What is a pull request?', summary: 'How code changes are proposed and reviewed.', path: '/learn/what-is-a-pull-request' },
    ],
  },
]

const COLOR_MAP: Record<string, { bg: string; border: string; label: string; check: string }> = {
  blue:    { bg: 'bg-blue-50',    border: 'border-blue-200',    label: 'text-blue-700',    check: 'text-blue-500' },
  purple:  { bg: 'bg-purple-50',  border: 'border-purple-200',  label: 'text-purple-700',  check: 'text-purple-500' },
  pink:    { bg: 'bg-pink-50',    border: 'border-pink-200',    label: 'text-pink-700',    check: 'text-pink-500' },
  sky:     { bg: 'bg-sky-50',     border: 'border-sky-200',     label: 'text-sky-700',     check: 'text-sky-500' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', label: 'text-emerald-700', check: 'text-emerald-500' },
}

function buildPlainTextSummary(visited: Set<string>, groups: Group[], name: string): string {
  const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  const allLessons = groups.flatMap(g => g.lessons)
  const completedCount = allLessons.filter(l => visited.has(l.id)).length
  const lines: string[] = [
    `Learning recap for ${name}`,
    `Printed on ${date}`,
    `Overall progress: ${completedCount} of ${allLessons.length} lessons visited`,
    '',
  ]
  for (const group of groups) {
    lines.push(`--- ${group.label} ---`)
    for (const lesson of group.lessons) {
      const status = visited.has(lesson.id) ? '[done]' : '[ ]  '
      lines.push(`  ${status} ${lesson.title}`)
    }
    lines.push('')
  }
  return lines.join('\n')
}

export function LearningRecap() {
  useMarkVisited('learning-recap')
  const [visited, setVisited] = useState<Set<string>>(new Set())
  const [copied, setCopied] = useState(false)
  const { profile } = useProfile()

  useEffect(() => {
    setVisited(loadVisited())
  }, [])

  const allLessons = GROUPS.flatMap(g => g.lessons)
  const completedCount = allLessons.filter(l => visited.has(l.id)).length
  const total = allLessons.length
  const displayName = profile?.name || 'Ronny'

  function handlePrint() {
    window.print()
  }

  async function handleCopyText() {
    const text = buildPlainTextSummary(visited, GROUPS, displayName)
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback for browsers that block clipboard
      const el = document.createElement('textarea')
      el.value = text
      el.style.position = 'fixed'
      el.style.opacity = '0'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center px-4 py-16 print:bg-white print:py-4">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="text-6xl print:hidden">&#x1F393;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Your learning recap
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed print:hidden">
            Everything you have covered, all in one place.
          </p>
          <p className="hidden print:block text-gray-500 text-base">
            {displayName} &mdash; printed {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Print / copy buttons — hidden when printing */}
        <div className="flex flex-wrap gap-3 justify-center print:hidden">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors shadow-sm"
          >
            <span>&#x1F5A8;&#xFE0F;</span> Print summary
          </button>
          <button
            onClick={handleCopyText}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-indigo-300 text-indigo-700 hover:bg-indigo-50 font-semibold text-sm transition-colors"
          >
            {copied ? (
              <><span>&#x2705;</span> Copied!</>
            ) : (
              <><span>&#x1F4CB;</span> Copy as text</>
            )}
          </button>
        </div>

        {/* Progress bar */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-semibold text-lg">Overall progress</span>
            <span className="text-gray-500 text-sm">{completedCount} of {total} lessons visited</span>
          </div>
          <div
            className="w-full bg-gray-200 rounded-full h-4"
            role="progressbar"
            aria-valuenow={completedCount}
            aria-valuemin={0}
            aria-valuemax={total}
            aria-label={`${completedCount} of ${total} lessons visited`}
          >
            <div
              className="bg-indigo-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${total > 0 ? (completedCount / total) * 100 : 0}%` }}
            />
          </div>
          {completedCount === total && (
            <p className="text-indigo-700 font-semibold text-center">
              You have visited every lesson! &#x1F389;
            </p>
          )}
        </div>

        {/* Groups */}
        {GROUPS.map(group => {
          const colors = COLOR_MAP[group.color]
          const groupCompleted = group.lessons.filter(l => visited.has(l.id)).length
          return (
            <div key={group.label} className={`${colors.bg} border ${colors.border} rounded-2xl p-6 space-y-4`}>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className={`text-xl font-bold ${colors.label}`}>{group.label}</h2>
                <span className="text-sm text-gray-500">{groupCompleted}/{group.lessons.length} visited</span>
              </div>
              <div className="grid gap-3">
                {group.lessons.map(lesson => {
                  const done = visited.has(lesson.id)
                  return (
                    <a
                      key={lesson.id}
                      href={`#${lesson.path}`}
                      className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <span className="text-2xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: lesson.icon }} />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-800 text-base leading-tight">{lesson.title}</p>
                        <p className="text-gray-500 text-sm mt-1 leading-relaxed">{lesson.summary}</p>
                      </div>
                      <div className="flex-shrink-0 mt-0.5">
                        {done ? (
                          <span className={`text-2xl ${colors.check}`}>&#x2705;</span>
                        ) : (
                          <span className="text-2xl text-gray-300">&#x25CB;</span>
                        )}
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          )
        })}

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-center gap-4 print:hidden">
          <span className="text-3xl flex-shrink-0">&#x1F4DD;</span>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-amber-800 text-base">Review quiz questions you got wrong</h3>
            <p className="text-amber-700 text-sm">Practice the questions you missed and check your understanding.</p>
          </div>
          <Link
            to="/quiz-review"
            className="flex-shrink-0 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors"
          >
            Review &rarr;
          </Link>
        </div>

        <div className="text-center print:hidden">
          <a
            href="#/"
            className="inline-block text-blue-600 hover:text-blue-800 text-lg font-medium underline"
          >
            &larr; Back to home
          </a>
        </div>
      </div>
    </div>
  )
}
