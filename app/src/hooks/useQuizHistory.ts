/**
 * Persists quiz question outcomes to localStorage.
 * Each wrong answer is stored so Ronny can review and retry it.
 */

const QUIZ_HISTORY_KEY = 'ronny-quiz-history'

export interface WrongAnswer {
  lessonId: string
  lessonTitle: string
  question: string
  options: string[]
  correctIndex: number
  chosenIndex: number
  explanation: string
}

export function loadQuizHistory(): WrongAnswer[] {
  try {
    const raw = localStorage.getItem(QUIZ_HISTORY_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveQuizHistory(items: WrongAnswer[]): void {
  try {
    localStorage.setItem(QUIZ_HISTORY_KEY, JSON.stringify(items))
  } catch {
    // ignore
  }
}

/**
 * Records a wrong answer. If this question is already in the history
 * (matched by lessonId + question text), it is replaced (not duplicated).
 */
export function recordWrongAnswer(answer: WrongAnswer): void {
  const existing = loadQuizHistory()
  const filtered = existing.filter(
    a => !(a.lessonId === answer.lessonId && a.question === answer.question)
  )
  saveQuizHistory([...filtered, answer])
}

/**
 * Removes a specific wrong answer once Ronny answers it correctly on review.
 */
export function removeWrongAnswer(lessonId: string, question: string): void {
  const existing = loadQuizHistory()
  saveQuizHistory(
    existing.filter(a => !(a.lessonId === lessonId && a.question === question))
  )
}
