import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { useMarkVisited } from '../hooks/useMarkVisited'
import {
  loadQuizHistory,
  removeWrongAnswer,
  type WrongAnswer,
} from '../hooks/useQuizHistory'

interface ReviewQuestionProps {
  item: WrongAnswer
  onCorrect: () => void
}

function ReviewQuestion({ item, onCorrect }: ReviewQuestionProps) {
  const [chosen, setChosen] = useState<number | null>(null)
  const isCorrect = chosen === item.correctIndex

  function handleSelect(idx: number) {
    if (chosen !== null) return
    setChosen(idx)
    if (idx === item.correctIndex) {
      onCorrect()
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-4">
      <p className="text-gray-800 font-medium text-base leading-snug">
        {item.question}
      </p>

      <div className="space-y-2">
        {item.options.map((option, oi) => {
          let classes =
            'w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-colors '

          if (chosen === null) {
            classes += 'border-gray-200 bg-gray-50 hover:bg-blue-50 hover:border-blue-300 text-gray-700 cursor-pointer'
          } else if (oi === item.correctIndex) {
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
              onClick={() => handleSelect(oi)}
              disabled={chosen !== null}
            >
              <span className="flex items-center gap-2">
                {chosen !== null && oi === item.correctIndex && (
                  <span className="text-green-600 font-bold">&#x2713;</span>
                )}
                {chosen !== null && oi === chosen && oi !== item.correctIndex && (
                  <span className="text-red-600 font-bold">&#x2717;</span>
                )}
                {option}
              </span>
            </button>
          )
        })}
      </div>

      {chosen !== null && (
        <div
          className={`rounded-xl p-4 text-sm leading-relaxed ${
            isCorrect
              ? 'bg-green-50 border border-green-200 text-green-800'
              : 'bg-amber-50 border border-amber-200 text-amber-800'
          }`}
        >
          <strong>{isCorrect ? 'Correct! ' : 'Not quite. '}</strong>
          {item.explanation}
        </div>
      )}
    </div>
  )
}

export function QuizReview() {
  useMarkVisited('quiz-review')
  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswer[]>([])
  const [corrected, setCorrected] = useState<Set<string>>(new Set())

  useEffect(() => {
    setWrongAnswers(loadQuizHistory())
  }, [])

  function handleCorrect(item: WrongAnswer) {
    const key = `${item.lessonId}::${item.question}`
    setCorrected(prev => new Set([...prev, key]))
    removeWrongAnswer(item.lessonId, item.question)
  }

  // Group by lesson
  const byLesson = wrongAnswers.reduce<Record<string, WrongAnswer[]>>((acc, item) => {
    if (!acc[item.lessonId]) acc[item.lessonId] = []
    acc[item.lessonId].push(item)
    return acc
  }, {})

  const remaining = wrongAnswers.filter(
    item => !corrected.has(`${item.lessonId}::${item.question}`)
  )

  const allCleared = wrongAnswers.length > 0 && remaining.length === 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="text-6xl" aria-hidden="true">&#x1F4DD;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Quiz review
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Questions you got wrong — try them again.
          </p>
        </div>

        {wrongAnswers.length === 0 && (
          <div className="bg-white rounded-2xl shadow-md p-8 text-center space-y-4">
            <div className="text-5xl" aria-hidden="true">&#x1F389;</div>
            <h2 className="text-2xl font-bold text-gray-700">Nothing to review yet!</h2>
            <p className="text-gray-500 leading-relaxed">
              When you answer a quiz question incorrectly, it will appear here so
              you can try it again. Go through some lessons and quizzes to get started.
            </p>
            <Link
              to="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Go to lessons &rarr;
            </Link>
          </div>
        )}

        {allCleared && (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center space-y-3">
            <div className="text-4xl">&#x2705;</div>
            <h2 className="text-2xl font-bold text-green-800">All cleared!</h2>
            <p className="text-green-700">
              You answered every review question correctly. Well done!
            </p>
          </div>
        )}

        {Object.entries(byLesson).map(([lessonId, items]) => {
          const visibleItems = items.filter(
            item => !corrected.has(`${item.lessonId}::${item.question}`)
          )
          if (visibleItems.length === 0) return null

          return (
            <div key={lessonId} className="space-y-4">
              <h2 className="text-lg font-bold text-gray-700 border-b border-gray-200 pb-2">
                {items[0].lessonTitle}
              </h2>
              {visibleItems.map(item => (
                <ReviewQuestion
                  key={item.question}
                  item={item}
                  onCorrect={() => handleCorrect(item)}
                />
              ))}
            </div>
          )
        })}

        <div className="text-center pt-4 space-y-3">
          <Link
            to="/learning-recap"
            className="inline-block text-blue-600 hover:text-blue-800 text-base font-medium underline"
          >
            &larr; Back to learning recap
          </Link>
        </div>
      </div>
    </div>
  )
}
