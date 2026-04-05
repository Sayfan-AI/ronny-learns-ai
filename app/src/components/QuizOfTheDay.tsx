import { useState } from 'react'
import { QUIZ_BANK } from '../data/quizBank'

const STORAGE_KEY = 'quiz-of-the-day'

interface StoredAnswer {
  dayIndex: number
  questionIndex: number
  chosenIndex: number
}

function getDayIndex(): number {
  return Math.floor(Date.now() / 86400000)
}

function getQuestionIndex(dayIndex: number): number {
  return dayIndex % QUIZ_BANK.length
}

function loadStored(): StoredAnswer | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as StoredAnswer
  } catch {
    return null
  }
}

function saveAnswer(dayIndex: number, questionIndex: number, chosenIndex: number) {
  const data: StoredAnswer = { dayIndex, questionIndex, chosenIndex }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function QuizOfTheDay() {
  const dayIndex = getDayIndex()
  const questionIndex = getQuestionIndex(dayIndex)
  const question = QUIZ_BANK[questionIndex]

  const stored = loadStored()
  const alreadyAnsweredToday = stored !== null && stored.dayIndex === dayIndex

  const [chosen, setChosen] = useState<number | null>(
    alreadyAnsweredToday ? stored!.chosenIndex : null
  )
  const [revealed, setRevealed] = useState<boolean>(alreadyAnsweredToday)

  if (!question) return null

  function handleAnswer(index: number) {
    if (revealed) return
    setChosen(index)
    setRevealed(true)
    saveAnswer(dayIndex, questionIndex, index)
  }

  const isCorrect = chosen === question.correctIndex

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-5 space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
          &#x2753; Question of the day
        </p>
        <span className="text-xs text-gray-400 dark:text-gray-500">
          From: {question.lessonTitle}
        </span>
      </div>

      <p className="text-gray-800 dark:text-gray-100 font-medium text-sm leading-relaxed">
        {question.question}
      </p>

      <div className="space-y-2">
        {question.options.map((option, i) => {
          let baseClass =
            'w-full text-left text-sm px-4 py-3 rounded-xl border transition-all duration-200 leading-relaxed '
          if (!revealed) {
            baseClass +=
              'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 cursor-pointer'
          } else if (i === question.correctIndex) {
            baseClass +=
              'border-green-400 dark:border-green-600 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200 font-semibold'
          } else if (i === chosen && chosen !== question.correctIndex) {
            baseClass +=
              'border-red-400 dark:border-red-600 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 line-through'
          } else {
            baseClass +=
              'border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-default'
          }
          return (
            <button
              key={i}
              className={baseClass}
              onClick={() => handleAnswer(i)}
              disabled={revealed}
              aria-pressed={chosen === i}
            >
              {i === question.correctIndex && revealed && (
                <span className="mr-2">&#x2714;</span>
              )}
              {i === chosen && chosen !== question.correctIndex && revealed && (
                <span className="mr-2">&#x2718;</span>
              )}
              {option}
            </button>
          )
        })}
      </div>

      {revealed && (
        <div
          className={`rounded-xl p-4 space-y-1 ${
            isCorrect
              ? 'bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800'
              : 'bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800'
          }`}
        >
          <p
            className={`font-semibold text-sm ${
              isCorrect
                ? 'text-green-800 dark:text-green-200'
                : 'text-orange-800 dark:text-orange-200'
            }`}
          >
            {isCorrect ? 'Well done — that is correct!' : 'Not quite — here is the answer:'}
          </p>
          <p
            className={`text-sm leading-relaxed ${
              isCorrect
                ? 'text-green-700 dark:text-green-300'
                : 'text-orange-700 dark:text-orange-300'
            }`}
          >
            {question.explanation}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 pt-1">
            Come back tomorrow for a new question.
          </p>
        </div>
      )}
    </div>
  )
}
