/**
 * Badge system for the gamification layer.
 *
 * Badge IDs and their unlock criteria:
 *  - first-lesson    : at least 1 module visited
 *  - quiz-master     : at least 1 perfect quiz score recorded
 *  - half-way        : at least 50 % of all modules visited
 *  - curious-mind    : at least 1 question asked on the /ask page
 *  - graduate        : all modules visited
 *
 * localStorage keys used:
 *  - 'ronny-visited-modules'   (string[])  — set by useMarkVisited
 *  - 'ronny-perfect-quizzes'   (number)    — incremented by Quiz component
 *  - 'ronny-questions-asked'   (number)    — incremented by AskPage
 */

export interface Badge {
  id: string
  icon: string
  name: string
  description: string
  color: string   // Tailwind bg colour class
  textColor: string
  borderColor: string
  earned: boolean
}

const VISITED_KEY = 'ronny-visited-modules'
const PERFECT_QUIZZES_KEY = 'ronny-perfect-quizzes'
const QUESTIONS_ASKED_KEY = 'ronny-questions-asked'

const TOTAL_MODULES = 12  // keep in sync with HomePage MODULES array

function loadVisitedCount(): number {
  try {
    const raw = localStorage.getItem(VISITED_KEY)
    const arr: string[] = raw ? JSON.parse(raw) : []
    return arr.length
  } catch {
    return 0
  }
}

function loadPerfectQuizzes(): number {
  try {
    const raw = localStorage.getItem(PERFECT_QUIZZES_KEY)
    return raw ? parseInt(raw, 10) : 0
  } catch {
    return 0
  }
}

function loadQuestionsAsked(): number {
  try {
    const raw = localStorage.getItem(QUESTIONS_ASKED_KEY)
    return raw ? parseInt(raw, 10) : 0
  } catch {
    return 0
  }
}

/** Increment the "perfect quizzes" counter. Call when a quiz finishes with 100 %. */
export function recordPerfectQuiz(): void {
  try {
    const current = loadPerfectQuizzes()
    localStorage.setItem(PERFECT_QUIZZES_KEY, String(current + 1))
  } catch {
    // ignore
  }
}

/** Increment the "questions asked" counter. Call when the user submits a question. */
export function recordQuestionAsked(): void {
  try {
    const current = loadQuestionsAsked()
    localStorage.setItem(QUESTIONS_ASKED_KEY, String(current + 1))
  } catch {
    // ignore
  }
}

/** Compute which badges are currently earned. */
export function computeBadges(): Badge[] {
  const visited = loadVisitedCount()
  const perfectQuizzes = loadPerfectQuizzes()
  const questionsAsked = loadQuestionsAsked()

  return [
    {
      id: 'first-lesson',
      icon: '📖',
      name: 'First Lesson',
      description: 'Completed your first lesson',
      color: 'bg-blue-100',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-300',
      earned: visited >= 1,
    },
    {
      id: 'quiz-master',
      icon: '🎯',
      name: 'Quiz Master',
      description: 'Got 100% on a quiz',
      color: 'bg-purple-100',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-300',
      earned: perfectQuizzes >= 1,
    },
    {
      id: 'half-way',
      icon: '⚡',
      name: 'Half Way There',
      description: 'Completed 50% of all lessons',
      color: 'bg-amber-100',
      textColor: 'text-amber-800',
      borderColor: 'border-amber-300',
      earned: visited >= Math.ceil(TOTAL_MODULES / 2),
    },
    {
      id: 'curious-mind',
      icon: '🤔',
      name: 'Curious Mind',
      description: 'Asked your first question',
      color: 'bg-teal-100',
      textColor: 'text-teal-800',
      borderColor: 'border-teal-300',
      earned: questionsAsked >= 1,
    },
    {
      id: 'graduate',
      icon: '🎓',
      name: 'Graduate',
      description: 'Completed every lesson',
      color: 'bg-emerald-100',
      textColor: 'text-emerald-800',
      borderColor: 'border-emerald-300',
      earned: visited >= TOTAL_MODULES,
    },
  ]
}
