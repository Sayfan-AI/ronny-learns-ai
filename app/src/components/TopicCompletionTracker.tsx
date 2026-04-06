import { useMemo } from 'react'

interface TopicGroup {
  heading: string
  icon: string
  lessonIds: string[]
}

const TOPIC_GROUPS: TopicGroup[] = [
  {
    heading: 'Getting started',
    icon: '&#x1F680;',
    lessonIds: [
      'github-signup',
      'github-basics',
      'what-is-api',
    ],
  },
  {
    heading: 'Understanding AI',
    icon: '&#x1F9E0;',
    lessonIds: [
      'what-is-ai',
      'what-is-ml',
      'how-ai-training-works',
      'neural-network',
      'language-models',
      'how-chatbots-work',
      'ai-history',
      'ai-everyday-life',
      'ai-pros-and-cons',
      'ai-bias',
      'ai-safety',
      'prompt-engineering',
      'trusting-ai',
      'ai-in-healthcare',
      'future-of-ai',
      'ai-in-your-apps',
      'ai-laws-and-rights',
    ],
  },
  {
    heading: 'AI and society',
    icon: '&#x1F30D;',
    lessonIds: [
      'how-to-use-ai-safely',
    ],
  },
  {
    heading: 'AI in the real world',
    icon: '&#x1F3D9;&#xFE0F;',
    lessonIds: [
      'ai-for-accessibility',
      'ai-productivity-tools',
    ],
  },
  {
    heading: 'How software is built',
    icon: '&#x2699;&#xFE0F;',
    lessonIds: [
      'genesis-system',
      'how-this-was-built',
      'what-is-ci-cd',
      'version-control',
      'pull-request',
      'meet-the-agents',
    ],
  },
]

function loadVisitedIds(): Set<string> {
  try {
    const raw = localStorage.getItem('ronny-visited-modules')
    if (!raw) return new Set()
    const data = JSON.parse(raw)
    if (Array.isArray(data)) return new Set(data)
    if (typeof data === 'object') return new Set(Object.keys(data))
    return new Set()
  } catch {
    return new Set()
  }
}

export function TopicCompletionTracker() {
  const visited = useMemo(() => loadVisitedIds(), [])

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 space-y-4">
      <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">Topic completion</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">How far through each section of the curriculum are you?</p>
      <div className="space-y-4">
        {TOPIC_GROUPS.map((group) => {
          const completedCount = group.lessonIds.filter((id) => visited.has(id)).length
          const total = group.lessonIds.length
          const pct = total === 0 ? 0 : Math.round((completedCount / total) * 100)
          const isComplete = completedCount === total

          return (
            <div key={group.heading} className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="text-lg"
                    dangerouslySetInnerHTML={{ __html: group.icon }}
                  />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    {group.heading}
                  </span>
                  {isComplete && (
                    <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full font-semibold">
                      Complete &#x2713;
                    </span>
                  )}
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 tabular-nums">
                  {completedCount}/{total}
                </span>
              </div>
              <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    isComplete
                      ? 'bg-green-500 dark:bg-green-400'
                      : pct > 50
                      ? 'bg-blue-500 dark:bg-blue-400'
                      : pct > 0
                      ? 'bg-indigo-400 dark:bg-indigo-500'
                      : 'bg-gray-200 dark:bg-gray-600'
                  }`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              {pct > 0 && pct < 100 && (
                <p className="text-xs text-gray-400 dark:text-gray-500">{pct}% complete</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
