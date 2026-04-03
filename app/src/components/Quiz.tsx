import { useState } from 'react'

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

interface QuizProps {
  questions: QuizQuestion[]
  title?: string
}

export function Quiz({ questions, title = 'Quick Check' }: QuizProps) {
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  )
  const [submitted, setSubmitted] = useState(false)

  const score = answers.filter((a, i) => a === questions[i].correctIndex).length

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    if (submitted) return
    setAnswers(prev => {
      const next = [...prev]
      next[questionIndex] = optionIndex
      return next
    })
  }

  const allAnswered = answers.every(a => a !== null)

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
      <div className="flex items-center gap-3">
        <span className="text-4xl">?</span>
        <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
      </div>

      <div className="space-y-6">
        {questions.map((q, qi) => {
          const selected = answers[qi]
          const isCorrect = selected === q.correctIndex

          return (
            <div key={qi} className="space-y-3">
              <p className="text-gray-800 font-medium text-lg">
                {qi + 1}. {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((option, oi) => {
                  let bg = 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                  if (selected === oi && !submitted) {
                    bg = 'bg-blue-50 border-blue-400 text-blue-800'
                  }
                  if (submitted) {
                    if (oi === q.correctIndex) {
                      bg = 'bg-green-50 border-green-400 text-green-800'
                    } else if (selected === oi && !isCorrect) {
                      bg = 'bg-red-50 border-red-400 text-red-800'
                    } else {
                      bg = 'bg-gray-50 border-gray-200 text-gray-500'
                    }
                  }

                  return (
                    <button
                      key={oi}
                      onClick={() => handleSelect(qi, oi)}
                      className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-colors ${bg} ${submitted ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>
              {submitted && (
                <p className={`text-sm px-4 py-2 rounded-lg ${isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {isCorrect ? 'Correct! ' : 'Not quite. '}
                  {q.explanation}
                </p>
              )}
            </div>
          )
        })}
      </div>

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={!allAnswered}
          className={`w-full py-3 rounded-xl font-semibold text-lg transition-colors ${
            allAnswered
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {allAnswered ? 'Check my answers' : 'Answer all questions to continue'}
        </button>
      ) : (
        <div className="text-center space-y-3">
          <div className={`text-5xl font-bold ${score === questions.length ? 'text-green-600' : score >= questions.length / 2 ? 'text-blue-600' : 'text-orange-500'}`}>
            {score} / {questions.length}
          </div>
          <p className="text-gray-600 text-lg">
            {score === questions.length
              ? 'Perfect score! You have got it.'
              : score >= questions.length / 2
              ? 'Good effort! Review the explanations above.'
              : 'Keep at it! Read through the explanations above and try again.'}
          </p>
          <button
            onClick={() => {
              setAnswers(new Array(questions.length).fill(null))
              setSubmitted(false)
            }}
            className="text-blue-600 hover:text-blue-800 underline text-sm"
          >
            Try again
          </button>
        </div>
      )}
    </div>
  )
}
