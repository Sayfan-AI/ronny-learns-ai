import { useState, useMemo } from 'react'
import { QUIZ_BANK } from '../data/quizBank'
import type { BankedQuestion } from '../data/quizBank'

const VISITED_KEY = 'ronny-visited-modules'
const QUIZ_COUNT = 5

function loadCompletedLessons(): Set<string> {
  try {
    const raw = localStorage.getItem(VISITED_KEY)
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

function pickRandom<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, n)
}

export function TestYourself() {
  const completed = useMemo(() => loadCompletedLessons(), [])

  // Only show if user has completed 2+ lessons
  const availableQuestions = useMemo(
    () => QUIZ_BANK.filter((q) => completed.has(q.lessonId)),
    [completed],
  )

  const [questions, setQuestions] = useState<BankedQuestion[]>([])
  const [started, setStarted] = useState(false)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)

  if (completed.size < 2 || availableQuestions.length < 2) {
    return null
  }

  function startQuiz() {
    const picked = pickRandom(availableQuestions, Math.min(QUIZ_COUNT, availableQuestions.length))
    setQuestions(picked)
    setAnswers({})
    setSubmitted(false)
    setStarted(true)
  }

  function handleSelect(qIdx: number, optIdx: number) {
    if (submitted) return
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }))
  }

  function handleSubmit() {
    if (Object.keys(answers).length < questions.length) return
    setSubmitted(true)
  }

  const score = submitted
    ? questions.filter((q, i) => answers[i] === q.correctIndex).length
    : 0

  if (!started) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 p-6 space-y-4">
        <div className="flex items-start gap-3">
          <span className="text-3xl">&#x1F9E0;</span>
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Test yourself</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Ready to check what you remember? Get {Math.min(QUIZ_COUNT, availableQuestions.length)} random questions
              drawn from the lessons you have already completed.
            </p>
          </div>
        </div>
        <button
          onClick={startQuiz}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
        >
          Start quiz
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 p-6 space-y-6">
      <div className="flex items-center gap-2">
        <span className="text-2xl">&#x1F9E0;</span>
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Test yourself</h2>
        {submitted && (
          <span className="ml-auto text-lg font-bold text-indigo-600 dark:text-indigo-400">
            {score} / {questions.length}
          </span>
        )}
      </div>

      {submitted && (
        <div className={`rounded-xl p-4 text-center ${score === questions.length ? 'bg-green-50 dark:bg-green-950' : score >= Math.ceil(questions.length / 2) ? 'bg-blue-50 dark:bg-blue-950' : 'bg-amber-50 dark:bg-amber-950'}`}>
          <p className="font-semibold text-gray-800 dark:text-gray-100 text-lg">
            {score === questions.length
              ? 'Perfect score!'
              : score >= Math.ceil(questions.length / 2)
              ? 'Well done!'
              : 'Keep practising!'}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
            You got {score} out of {questions.length} questions right.
          </p>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((q, qIdx) => {
          const chosen = answers[qIdx]
          const isCorrect = submitted && chosen === q.correctIndex
          const isWrong = submitted && chosen !== undefined && chosen !== q.correctIndex

          return (
            <div key={qIdx} className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 mt-1 flex-shrink-0 uppercase tracking-wide">
                  {q.lessonTitle}
                </span>
              </div>
              <p className="font-medium text-gray-800 dark:text-gray-100 leading-snug">
                {qIdx + 1}. {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((opt, optIdx) => {
                  let cls =
                    'w-full text-left px-4 py-3 rounded-xl border text-sm transition-all '
                  if (!submitted) {
                    cls +=
                      chosen === optIdx
                        ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-semibold'
                        : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950'
                  } else {
                    if (optIdx === q.correctIndex) {
                      cls += 'border-green-500 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 font-semibold'
                    } else if (chosen === optIdx) {
                      cls += 'border-red-400 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300'
                    } else {
                      cls += 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-500 opacity-60'
                    }
                  }
                  return (
                    <button
                      key={optIdx}
                      className={cls}
                      onClick={() => handleSelect(qIdx, optIdx)}
                      disabled={submitted}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>

              {submitted && (
                <div className={`rounded-xl p-3 text-sm leading-relaxed ${isCorrect ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200' : isWrong ? 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200' : 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300'}`}>
                  <span className="font-semibold mr-1">{isCorrect ? 'Correct.' : 'Not quite.'}</span>
                  {q.explanation}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={Object.keys(answers).length < questions.length}
          className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-colors"
        >
          Submit answers
        </button>
      ) : (
        <button
          onClick={startQuiz}
          className="w-full bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900 dark:hover:bg-indigo-800 text-indigo-700 dark:text-indigo-300 font-semibold py-3 px-6 rounded-xl transition-colors"
        >
          Try again with new questions
        </button>
      )}
    </div>
  )
}
