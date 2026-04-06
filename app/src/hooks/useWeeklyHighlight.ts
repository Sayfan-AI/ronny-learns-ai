/**
 * useWeeklyHighlight
 *
 * Returns a lesson to highlight on the home page. The same lesson is shown for
 * an entire ISO week (Monday–Sunday). On the next week a new uncompleted lesson
 * is selected. If all lessons are completed, returns null.
 */

const WEEKLY_HIGHLIGHT_KEY = 'ronny-weekly-highlight'
const QUIZ_KEY = 'ronny-quiz-completed'

interface HighlightLesson {
  id: string
  icon: string
  title: string
  description: string
  path: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  readingTime: string
}

// Lessons eligible for the weekly highlight (educational lessons with reading times)
const HIGHLIGHT_POOL: HighlightLesson[] = [
  { id: 'what-is-ai',           icon: '&#x1F916;', title: 'What is AI?',                                     description: 'Artificial intelligence explained without jargon — what it is and what it cannot do.',           path: '/learn/what-is-ai',               difficulty: 'Beginner',     readingTime: '5 min' },
  { id: 'what-is-ml',           icon: '&#x1F4CA;', title: 'What is machine learning?',                       description: 'How computers learn from examples instead of rules — with everyday analogies.',                path: '/learn/what-is-machine-learning',  difficulty: 'Intermediate', readingTime: '6 min' },
  { id: 'how-ai-training-works',icon: '&#x1F9EA;', title: 'How does AI training work?',                      description: 'What actually happens when an AI model learns — datasets, weights, and more.',                  path: '/learn/how-ai-training-works',     difficulty: 'Intermediate', readingTime: '7 min' },
  { id: 'neural-network',       icon: '&#x1F9E0;', title: 'What is a neural network?',                       description: 'The brain-inspired technology behind modern AI — explained without the maths.',                 path: '/learn/neural-network',            difficulty: 'Advanced',     readingTime: '6 min' },
  { id: 'language-models',      icon: '&#x1F4AC;', title: 'How do language models work?',                    description: 'Tokens, context windows, and how Claude generates text — demystified.',                        path: '/learn/language-models',           difficulty: 'Advanced',     readingTime: '7 min' },
  { id: 'how-chatbots-work',    icon: '&#x1F4AC;', title: 'How do chatbots work?',                           description: 'Rule-based bots vs AI chatbots, hallucination, and when to trust your chatbot.',               path: '/learn/how-chatbots-work',         difficulty: 'Beginner',     readingTime: '6 min' },
  { id: 'ai-history',           icon: '&#x1F4DC;', title: 'The history of AI',                               description: 'From the Turing Test in 1950 to ChatGPT in 2022 — the key milestones.',                       path: '/ai-history',                      difficulty: 'Beginner',     readingTime: '5 min' },
  { id: 'ai-everyday-life',     icon: '&#x1F30D;', title: 'AI in everyday life',                             description: 'Search engines, recommendations, spam filters — AI is already all around you.',                path: '/learn/ai-everyday-life',          difficulty: 'Beginner',     readingTime: '5 min' },
  { id: 'ai-pros-and-cons',     icon: '&#x2696;&#xFE0F;', title: 'AI: the good and the bad',                description: 'A balanced, honest look at what AI can do for us and the real risks.',                         path: '/learn/ai-pros-and-cons',          difficulty: 'Beginner',     readingTime: '6 min' },
  { id: 'ai-bias',              icon: '&#x2696;&#xFE0F;', title: 'What is AI bias?',                         description: 'How AI picks up unfair patterns from training data and why it matters.',                       path: '/learn/ai-bias',                   difficulty: 'Intermediate', readingTime: '6 min' },
  { id: 'ai-safety',            icon: '&#x1F6E1;&#xFE0F;', title: 'AI safety and alignment',                description: 'Why making AI do what we actually want matters — and what Anthropic does about it.',            path: '/learn/ai-safety',                 difficulty: 'Intermediate', readingTime: '6 min' },
  { id: 'prompt-engineering',   icon: '&#x270F;&#xFE0F;', title: 'What is prompt engineering?',             description: 'How to write better prompts to get clearer, more useful answers from AI.',                      path: '/learn/prompt-engineering',        difficulty: 'Intermediate', readingTime: '6 min' },
  { id: 'trusting-ai',          icon: '&#x1F50D;', title: 'Can I trust what AI says?',                       description: 'Hallucinations, out-of-date info, bias — how to use AI wisely and verify.',                   path: '/learn/trusting-ai',               difficulty: 'Intermediate', readingTime: '5 min' },
  { id: 'ai-in-healthcare',     icon: '&#x1FA7A;', title: 'AI in healthcare',                                description: 'How AI is helping doctors diagnose diseases, discover drugs, and personalise treatment.',       path: '/learn/ai-in-healthcare',          difficulty: 'Intermediate', readingTime: '6 min' },
  { id: 'future-of-ai',         icon: '&#x1F52D;', title: 'What does the future of AI look like?',           description: 'Near-term trends, the AGI debate, what experts think, and how to stay informed.',               path: '/learn/future-of-ai',              difficulty: 'Intermediate', readingTime: '7 min' },
  { id: 'ai-in-your-apps',      icon: '&#x1F4F1;', title: 'AI in the apps you already use',                  description: 'Google Maps, Spotify, Netflix, autocorrect — how AI powers your daily apps.',                   path: '/learn/ai-in-your-apps',           difficulty: 'Beginner',     readingTime: '5 min' },
  { id: 'ai-laws-and-rights',   icon: '&#x2696;&#xFE0F;', title: 'AI, laws, and your rights',               description: 'The EU AI Act explained, AI copyright, and your rights when AI makes decisions about you.',     path: '/learn/ai-laws-and-rights',        difficulty: 'Intermediate', readingTime: '7 min' },
  { id: 'ai-for-accessibility', icon: '&#x267F;',  title: 'AI for accessibility',                            description: 'How AI is helping people with disabilities use technology more fully.',                        path: '/learn/ai-for-accessibility',      difficulty: 'Beginner',     readingTime: '5 min' },
]

/** Get the ISO week number for a given date (1–53). */
function getISOWeek(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const dayNum = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum)
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7)
}

function getWeekKey(): string {
  const now = new Date()
  return `${now.getFullYear()}-W${getISOWeek(now)}`
}

interface StoredHighlight {
  weekKey: string
  lessonId: string
}

function loadCompleted(): Set<string> {
  try {
    const raw = localStorage.getItem(QUIZ_KEY)
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

function loadStored(): StoredHighlight | null {
  try {
    const raw = localStorage.getItem(WEEKLY_HIGHLIGHT_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function saveStored(data: StoredHighlight) {
  try {
    localStorage.setItem(WEEKLY_HIGHLIGHT_KEY, JSON.stringify(data))
  } catch {
    // ignore
  }
}

/** Pick a random uncompleted lesson using a seeded index. */
function pickLesson(completed: Set<string>, seed: number): HighlightLesson | null {
  const eligible = HIGHLIGHT_POOL.filter(l => !completed.has(l.id))
  if (eligible.length === 0) return null
  return eligible[seed % eligible.length]
}

export function useWeeklyHighlight(): HighlightLesson | null {
  const weekKey = getWeekKey()
  const completed = loadCompleted()
  const stored = loadStored()

  // If we already picked a lesson this week and it is still uncompleted, return it
  if (stored && stored.weekKey === weekKey) {
    const lesson = HIGHLIGHT_POOL.find(l => l.id === stored.lessonId)
    if (lesson && !completed.has(lesson.id)) return lesson
    // Lesson was completed — fall through to pick a new one
  }

  // Pick a new lesson for this week
  // Use a numeric seed derived from the week key so results are stable across page loads
  const seed = weekKey.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0)
  const lesson = pickLesson(completed, seed)

  if (lesson) {
    saveStored({ weekKey, lessonId: lesson.id })
  }

  return lesson
}
