import { useState, useEffect } from 'react'
import { recordPerfectQuiz } from '../hooks/useBadges'
import { recordWrongAnswer } from '../hooks/useQuizHistory'
import { recordWeeklyCompletion } from '../hooks/useWeeklyGoal'
import { recordTodayAndGetCalendar } from '../hooks/useLearningCalendar'

export interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

interface QuizProps {
  questions: QuizQuestion[]
  title?: string
  /** Provide lessonId + lessonTitle to persist wrong answers for the review page */
  lessonId?: string
  lessonTitle?: string
}

type AnswerMap = Record<number, number>

const PERSONAL_BEST_KEY = 'ronny-quiz-personal-best'

function loadPersonalBest(): Record<string, number> {
  try {
    const raw = localStorage.getItem(PERSONAL_BEST_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function savePersonalBest(lessonId: string, pct: number): void {
  try {
    const bests = loadPersonalBest()
    if ((bests[lessonId] ?? -1) < pct) {
      bests[lessonId] = pct
      localStorage.setItem(PERSONAL_BEST_KEY, JSON.stringify(bests))
    }
  } catch {
    // ignore
  }
}

export function Quiz({ questions, title = 'Test your knowledge', lessonId, lessonTitle }: QuizProps) {
  const [answers, setAnswers] = useState<AnswerMap>({})
  const [key, setKey] = useState(0)
  const [personalBest, setPersonalBest] = useState<number | null>(null)

  // Load personal best on mount (before any answers are given)
  useEffect(() => {
    if (!lessonId) return
    const bests = loadPersonalBest()
    if (bests[lessonId] !== undefined) {
      setPersonalBest(bests[lessonId])
    }
  }, [lessonId])

  const answered = Object.keys(answers).length
  const total = questions.length
  const allDone = answered === total
  const score = allDone
    ? questions.filter((q, i) => answers[i] === q.correctIndex).length
    : 0

  // Record a perfect quiz score in localStorage for the badge system
  useEffect(() => {
    if (allDone && score === total && total > 0) {
      recordPerfectQuiz()
    }
  }, [allDone, score, total])

  // Record that this lesson quiz was completed (any score) for the CompletedBadge
  useEffect(() => {
    if (allDone && lessonId) {
      try {
        const raw = localStorage.getItem('ronny-quiz-completed')
        const completed: string[] = raw ? JSON.parse(raw) : []
        if (!completed.includes(lessonId)) {
          completed.push(lessonId)
          localStorage.setItem('ronny-quiz-completed', JSON.stringify(completed))
        }
        // Track completion order for "recently completed" feature
        const orderRaw = localStorage.getItem('ronny-completion-order')
        const order: string[] = orderRaw ? JSON.parse(orderRaw) : []
        // Remove existing entry (if retaken) then push to end (most recent)
        const filtered = order.filter((id) => id !== lessonId)
        filtered.push(lessonId)
        localStorage.setItem('ronny-completion-order', JSON.stringify(filtered))
        // Record for weekly goal tracking
        recordWeeklyCompletion(lessonId)
        // Record for streak calendar
        recordTodayAndGetCalendar()
      } catch {
        // ignore storage errors
      }
    }
  }, [allDone, lessonId])

  // Persist quiz score per lesson so home page cards can display it
  useEffect(() => {
    if (allDone && lessonId && total > 0) {
      try {
        const raw = localStorage.getItem('ronny-quiz-scores')
        const scores: Record<string, { score: number; total: number }> = raw ? JSON.parse(raw) : {}
        scores[lessonId] = { score, total }
        localStorage.setItem('ronny-quiz-scores', JSON.stringify(scores))
      } catch {
        // ignore storage errors
      }
    }
  }, [allDone, lessonId, score, total])

  // Persist personal best score
  useEffect(() => {
    if (allDone && lessonId && total > 0) {
      const pct = score / total
      savePersonalBest(lessonId, pct)
      setPersonalBest(prev => (prev === null || pct > prev ? pct : prev))
    }
  }, [allDone, lessonId, score, total])

  function handleSelect(questionIndex: number, optionIndex: number) {
    if (answers[questionIndex] !== undefined) return
    setAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }))

    // Persist wrong answers for review
    if (lessonId && lessonTitle && optionIndex !== questions[questionIndex].correctIndex) {
      const q = questions[questionIndex]
      recordWrongAnswer({
        lessonId,
        lessonTitle,
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        chosenIndex: optionIndex,
        explanation: q.explanation,
      })
    }
  }

  function reset() {
    setAnswers({})
    setKey((k) => k + 1)
  }

  function resultMessage() {
    const pct = score / total
    if (pct === 1) return 'Perfect score! Great job!'
    if (pct >= 0.75) return 'Well done! You know your stuff.'
    if (pct >= 0.5) return 'Good effort! Give it another try to lock it in.'
    return 'Keep going — you will get there with another read!'
  }

  return (
    <div key={key} className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3">
          <span className="text-4xl">&#x1F4DD;</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">{title}</h2>
        </div>
        {personalBest !== null && (
          <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium px-3 py-1.5 rounded-full">
            <span>&#x1F3C6;</span>
            <span>Personal best: {Math.round(personalBest * 100)}%</span>
          </div>
        )}
      </div>

      <div className="space-y-8">
        {questions.map((q, qi) => {
          const chosen = answers[qi]
          const hasAnswered = chosen !== undefined
          const isCorrect = chosen === q.correctIndex

          return (
            <div key={qi} className="space-y-3">
              <p className="text-gray-800 text-base sm:text-lg font-medium">
                {qi + 1}. {q.question}
              </p>

              <div className="space-y-2">
                {q.options.map((option, oi) => {
                  let classes =
                    'w-full text-left px-4 py-3 sm:px-5 rounded-xl border text-sm sm:text-base font-medium transition-colors duration-150 '

                  if (!hasAnswered) {
                    classes += 'border-gray-200 bg-gray-50 hover:bg-blue-50 hover:border-blue-300 text-gray-700 cursor-pointer'
                  } else if (oi === q.correctIndex) {
                    classes += 'border-green-400 bg-green-50 text-green-800 cursor-default'
                  } else if (oi === chosen) {
                    classes += 'border-red-400 bg-red-50 text-red-800 cursor-default'
                  } else {
                    classes += 'border-gray-200 bg-gray-50 text-gray-400 cursor-default'
                  }

                  return (
                    <button
                      key={oi}
                      className={classes}
                      onClick={() => handleSelect(qi, oi)}
                      disabled={hasAnswered}
                    >
                      <span className="flex items-center gap-3">
                        {hasAnswered && oi === q.correctIndex && (
                          <span className="text-green-600 font-bold">&#x2713;</span>
                        )}
                        {hasAnswered && oi === chosen && oi !== q.correctIndex && (
                          <span className="text-red-600 font-bold">&#x2717;</span>
                        )}
                        {option}
                      </span>
                    </button>
                  )
                })}
              </div>

              {hasAnswered && (
                <div
                  className={`rounded-xl p-4 text-sm leading-relaxed ${
                    isCorrect
                      ? 'bg-green-50 border border-green-200 text-green-800'
                      : 'bg-amber-50 border border-amber-200 text-amber-800'
                  }`}
                >
                  <strong>{isCorrect ? 'Correct! ' : 'Not quite. '}</strong>
                  {q.explanation}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {allDone && (
        <div className="space-y-4">
          {/* Recap card — shows right/wrong breakdown */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 sm:p-6 space-y-3">
            <p className="text-base font-semibold text-gray-700">Your results at a glance</p>
            <div className="space-y-2">
              {questions.map((q, qi) => {
                const chosen = answers[qi]
                const correct = chosen === q.correctIndex
                return (
                  <div
                    key={qi}
                    className={`flex gap-3 items-start rounded-xl p-3 text-sm ${
                      correct
                        ? 'bg-green-50 border border-green-200'
                        : 'bg-red-50 border border-red-200'
                    }`}
                  >
                    <span className={`flex-shrink-0 font-bold ${correct ? 'text-green-600' : 'text-red-600'}`}>
                      {correct ? '&#x2713;' : '&#x2717;'}
                    </span>
                    <div className="space-y-0.5">
                      <p className={`font-medium ${correct ? 'text-green-800' : 'text-red-800'}`}>
                        Q{qi + 1}: {q.question}
                      </p>
                      {!correct && (
                        <p className="text-red-700 text-xs">
                          Correct answer: <strong>{q.options[q.correctIndex]}</strong>
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Score and CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-6 space-y-4 text-center">
            <p className="text-xl sm:text-2xl font-bold text-blue-800">
              {score} out of {total} correct
            </p>
            <p className="text-blue-700 text-base sm:text-lg">{resultMessage()}</p>
            <button
              onClick={reset}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 rounded-xl transition-colors duration-200 min-h-[48px]"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
