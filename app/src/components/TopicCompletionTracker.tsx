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
      'ai-and-jobs',
      'ai-and-creativity',
      'ai-in-healthcare',
      'ai-and-environment',
      'ai-and-privacy',
      'ai-and-education',
      'ai-and-misinformation',
      'ai-and-mental-health',
      'future-of-ai',
      'ai-in-your-apps',
      'ai-laws-and-rights',
      'ai-and-social-media',
    ],
  },
  {
    heading: 'AI and society',
    icon: '&#x1F30D;',
    lessonIds: [
      'ai-and-the-law',
      'how-to-use-ai-safely',
      'ai-and-money',
      'ai-and-democracy',
      'ai-and-language',
      'ai-and-music',
      'ai-and-gaming',
      'ai-and-journalism',
      'ai-and-the-military',
      'ai-and-streaming',
      'ai-and-the-news',
      'ai-and-smart-cities',
      'ai-and-charities',
      'ai-and-volunteering',
      'ai-and-adult-education',
      'ai-and-the-arts',
      'ai-and-advertising',
      'ai-and-emergency-services',
      'ai-and-virtual-reality',
      'ai-and-supply-chains',
      'ai-and-film-and-tv',
      'ai-and-water',
      'ai-and-sleep',
      'ai-and-the-ocean',
      'ai-and-parenting',
      'ai-and-language-learning',
    ],
  },
  {
    heading: 'AI in the real world',
    icon: '&#x1F3D9;&#xFE0F;',
    lessonIds: [
      'ai-for-accessibility',
      'ai-and-scientific-research',
      'ai-productivity-tools',
      'ai-and-food',
      'ai-and-sport',
      'ai-and-transport',
      'ai-and-art',
      'ai-and-space',
      'ai-and-cybersecurity',
      'ai-and-creative-writing',
      'ai-and-relationships',
      'ai-and-photography',
      'ai-and-mental-health-apps',
      'ai-and-scams',
      'ai-and-pets',
      'ai-and-fitness-apps',
      'ai-and-disability',
      'ai-and-elections',
      'ai-and-banking',
      'ai-and-manufacturing',
      'ai-and-drug-discovery',
      'ai-and-smart-homes',
      'ai-and-architecture',
      'ai-and-housing',
      'ai-and-energy',
      'ai-and-elderly-care',
      'ai-and-insurance',
      'ai-and-policing',
      'ai-and-the-nhs',
      'ai-and-hiring',
      'ai-and-customer-service',
      'ai-and-weather',
      'ai-and-the-environment',
      'ai-and-fashion',
      'ai-and-agriculture',
      'ai-and-copyright',
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
