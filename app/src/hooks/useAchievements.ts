import { useMemo } from 'react'

export interface Achievement {
  id: string
  icon: string
  name: string
  description: string
  unlockHint: string
  earned: boolean
}

// All lesson IDs from MODULE_GROUPS, grouped by topic
const TOPIC_GROUPS: Record<string, string[]> = {
  'Getting started': ['github-signup', 'github-basics', 'what-is-api'],
  'Understanding AI': [
    'what-is-ai', 'what-is-ml', 'how-ai-training-works', 'neural-network',
    'language-models', 'how-chatbots-work', 'ai-history', 'ai-everyday-life',
  ],
  'AI in the real world': [
    'ai-and-creativity', 'ai-in-healthcare', 'ai-for-accessibility',
    'ai-and-scientific-research', 'ai-productivity-tools',
    'ai-and-food', 'ai-and-sport', 'ai-and-transport', 'ai-and-art',
    'ai-and-cybersecurity', 'ai-and-space', 'ai-and-climate-change',
  ],
  'AI and society': [
    'ai-pros-and-cons', 'ai-bias', 'ai-safety', 'prompt-engineering',
    'trusting-ai', 'ai-and-jobs', 'ai-and-environment', 'ai-and-privacy',
    'ai-and-education', 'ai-and-social-media', 'ai-and-misinformation',
    'ai-and-mental-health', 'future-of-ai', 'ai-laws-and-rights',
    'ai-and-copyright', 'how-to-use-ai-safely', 'ai-and-money',
    'ai-and-democracy', 'ai-and-language', 'ai-and-music',
  ],
  'How software is built': [
    'genesis-system', 'how-this-was-built', 'what-is-ci-cd',
    'version-control', 'pull-request', 'meet-the-agents',
  ],
}

function loadCompletedLessons(): Set<string> {
  const result = new Set<string>()
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && key.startsWith('quiz-completed-')) {
        const val = localStorage.getItem(key)
        if (val === 'true') {
          result.add(key.replace('quiz-completed-', ''))
        }
      }
    }
  } catch {
    // ignore
  }
  return result
}

function loadStreak(): number {
  try {
    const raw = localStorage.getItem('learningStreak')
    if (!raw) return 0
    const parsed = JSON.parse(raw)
    return typeof parsed?.streak === 'number' ? parsed.streak : 0
  } catch {
    return 0
  }
}

function hasQuizAce(): boolean {
  try {
    const raw = localStorage.getItem('ronny-quiz-scores')
    if (!raw) return false
    const scores = JSON.parse(raw) as Record<string, { score: number; total: number }>
    return Object.values(scores).some(s => s.score === s.total && s.total > 0)
  } catch {
    return false
  }
}

export function useAchievements(): Achievement[] {
  return useMemo(() => {
    const completed = loadCompletedLessons()
    const completedCount = completed.size
    const streak = loadStreak()
    const quizAce = hasQuizAce()

    // Count how many topic groups have at least one completed lesson
    const groupsWithCompletion = Object.values(TOPIC_GROUPS).filter(ids =>
      ids.some(id => completed.has(id))
    ).length

    const allIds = Object.values(TOPIC_GROUPS).flat()

    return [
      {
        id: 'first-step',
        icon: '&#x1F463;',
        name: 'First step',
        description: 'Complete your first lesson.',
        unlockHint: 'Complete 1 lesson',
        earned: completedCount >= 1,
      },
      {
        id: 'getting-started',
        icon: '&#x1F680;',
        name: 'Getting started',
        description: 'Complete 5 lessons.',
        unlockHint: 'Complete 5 lessons',
        earned: completedCount >= 5,
      },
      {
        id: 'on-a-roll',
        icon: '&#x1F525;',
        name: 'On a roll',
        description: 'Complete 10 lessons.',
        unlockHint: 'Complete 10 lessons',
        earned: completedCount >= 10,
      },
      {
        id: 'halfway-there',
        icon: '&#x1F3AF;',
        name: 'Halfway there',
        description: 'Complete 25 lessons.',
        unlockHint: 'Complete 25 lessons',
        earned: completedCount >= 25,
      },
      {
        id: 'ai-expert',
        icon: '&#x1F3C6;',
        name: 'AI expert',
        description: 'Complete every lesson.',
        unlockHint: `Complete all ${allIds.length} lessons`,
        earned: allIds.every(id => completed.has(id)),
      },
      {
        id: 'streak-3',
        icon: '&#x1F4C5;',
        name: '3-day streak',
        description: 'Learn 3 days in a row.',
        unlockHint: 'Maintain a 3-day learning streak',
        earned: streak >= 3,
      },
      {
        id: 'streak-7',
        icon: '&#x2B50;',
        name: '7-day streak',
        description: 'Learn 7 days in a row.',
        unlockHint: 'Maintain a 7-day learning streak',
        earned: streak >= 7,
      },
      {
        id: 'quiz-ace',
        icon: '&#x1F947;',
        name: 'Quiz ace',
        description: 'Score 100% on any quiz.',
        unlockHint: 'Get every question right in a quiz',
        earned: quizAce,
      },
      {
        id: 'curious-mind',
        icon: '&#x1F9E0;',
        name: 'Curious mind',
        description: 'Complete lessons in 3 different topic groups.',
        unlockHint: 'Complete at least one lesson in 3 different topic groups',
        earned: groupsWithCompletion >= 3,
      },
    ]
  }, [])
}
