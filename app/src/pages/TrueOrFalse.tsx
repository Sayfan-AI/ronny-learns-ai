import { useState } from 'react'
import { Link } from '@tanstack/react-router'

interface Statement {
  id: string
  text: string
  answer: boolean
  explanation: string
  topic: string
}

const STATEMENTS: Statement[] = [
  {
    id: 's1',
    text: 'AI systems can feel emotions and experience happiness or sadness.',
    answer: false,
    explanation: 'Current AI systems do not feel emotions. They process data and produce outputs, but there is no evidence of inner experience or feelings. Terms like "AI thinks" or "AI understands" are figures of speech, not literal descriptions.',
    topic: 'AI capabilities',
  },
  {
    id: 's2',
    text: 'ChatGPT was trained on text from the internet, books, and other written sources.',
    answer: true,
    explanation: 'ChatGPT and similar large language models are trained on huge datasets of text gathered from the internet, digitised books, Wikipedia, code, and many other written sources. The model learns patterns in this text rather than being programmed with rules.',
    topic: 'Training data',
  },
  {
    id: 's3',
    text: 'AI is going to replace every single job within the next five years.',
    answer: false,
    explanation: 'While AI will automate some tasks and change many roles, most economists and researchers expect it to transform jobs rather than eliminate all of them. New jobs will emerge too. Wholesale replacement of all work in five years is not a credible prediction.',
    topic: 'Job displacement',
  },
  {
    id: 's4',
    text: 'The UK has a law specifically called the AI Act.',
    answer: false,
    explanation: 'The EU passed an AI Act in 2024, but the UK has no equivalent single piece of legislation. Instead, the UK government takes a sector-by-sector approach, asking existing regulators (like the FCA and ICO) to handle AI in their domains.',
    topic: 'UK regulation',
  },
  {
    id: 's5',
    text: 'AlphaFold, developed by DeepMind in the UK, solved a 50-year-old problem in biology.',
    answer: true,
    explanation: 'AlphaFold, built by Google DeepMind in London, successfully predicted the 3D structure of proteins with remarkable accuracy — a challenge that had stumped scientists for over 50 years. This breakthrough has major implications for drug discovery and medicine.',
    topic: 'Famous AI systems',
  },
  {
    id: 's6',
    text: 'AI systems always give the same answer to the same question.',
    answer: false,
    explanation: 'Many AI systems, including large language models, include randomness (called "temperature") in their outputs, so responses can vary even to identical questions. This is by design — it makes answers feel more natural and varied.',
    topic: 'AI capabilities',
  },
  {
    id: 's7',
    text: 'Facial recognition AI has been shown to be less accurate for people with darker skin tones.',
    answer: true,
    explanation: 'Research, notably the Gender Shades study by Joy Buolamwini, found that many commercial facial recognition systems had significantly higher error rates for women and people with darker skin tones. This is often due to training datasets that lack diversity.',
    topic: 'Bias',
  },
  {
    id: 's8',
    text: 'The Turing Test, proposed by Alan Turing, is still the gold standard measure of AI intelligence today.',
    answer: false,
    explanation: 'Alan Turing proposed the Turing Test in 1950 as a thought experiment, but most AI researchers no longer consider it a meaningful benchmark. Modern AI can pass certain versions of the test without being "intelligent" in any deep sense, and the field has moved on to more rigorous evaluations.',
    topic: 'Famous AI systems',
  },
  {
    id: 's9',
    text: 'Machine learning models can be biased if the data they are trained on reflects historical inequalities.',
    answer: true,
    explanation: 'If training data reflects past discrimination — for example, historic hiring data that favoured one gender — the model can learn and replicate those biases. This is a well-documented problem, and responsible AI development requires careful attention to training data quality and diversity.',
    topic: 'Bias',
  },
  {
    id: 's10',
    text: 'The UK government has banned the use of AI in public sector decision-making.',
    answer: false,
    explanation: 'The UK has not banned AI in public sector decisions. In fact, government bodies use AI for various tasks. The focus has been on transparency and accountability rather than prohibition — for example, publishing algorithmic transparency records.',
    topic: 'UK regulation',
  },
  {
    id: 's11',
    text: 'Large language models like GPT-4 have access to real-time internet search by default.',
    answer: false,
    explanation: 'By default, most large language models are trained on a fixed dataset with a knowledge cut-off date. They do not browse the internet in real-time. Some products (like Bing AI or ChatGPT with browsing enabled) add a separate web-search tool, but this is an add-on, not how the base model works.',
    topic: 'AI capabilities',
  },
  {
    id: 's12',
    text: 'AI-generated deepfake videos have been used in real fraud and scam cases in the UK.',
    answer: true,
    explanation: 'Deepfake technology has been used in real scams, including cases where video or audio of public figures was faked to trick people into financial transfers. The UK National Cyber Security Centre has issued warnings about deepfake fraud, and cases have been reported by UK businesses and individuals.',
    topic: 'AI risks',
  },
  {
    id: 's13',
    text: 'If an AI system is wrong, the company that made it is always legally liable in the UK.',
    answer: false,
    explanation: 'UK law on AI liability is still evolving and is not straightforward. Liability may fall on developers, deployers, or users depending on the situation. There is no blanket rule that always makes the maker liable, and many contracts limit liability. The Law Commission has been examining how existing laws apply to AI.',
    topic: 'UK regulation',
  },
  {
    id: 's14',
    text: 'Neural networks are loosely inspired by how the human brain works.',
    answer: true,
    explanation: 'Neural networks were originally inspired by biological neurons — cells in the brain that pass signals to each other. Artificial neural networks use layers of mathematical "nodes" that activate or suppress signals, loosely mimicking this structure. However, they are vastly simpler than real brains.',
    topic: 'Training data',
  },
  {
    id: 's15',
    text: 'An AI that beats humans at chess must also be better than humans at other reasoning tasks.',
    answer: false,
    explanation: 'This is a common misconception. Chess-playing AI like Deep Blue or Stockfish are "narrow AI" — they are exceptional at chess but cannot do anything else. Beating humans at one task does not transfer to general intelligence or other reasoning abilities.',
    topic: 'AI capabilities',
  },
]

type GameState = 'playing' | 'finished'

export function TrueOrFalse() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answered, setAnswered] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [gameState, setGameState] = useState<GameState>('playing')
  const [results, setResults] = useState<Array<{ correct: boolean; statement: Statement }>>([])

  const statement = STATEMENTS[currentIndex]
  const total = STATEMENTS.length
  const isLast = currentIndex === total - 1

  function handleAnswer(userAnswer: boolean) {
    if (answered !== null) return
    const correct = userAnswer === statement.answer
    setAnswered(userAnswer)
    if (correct) setScore((s) => s + 1)
    setResults((prev) => [...prev, { correct, statement }])
  }

  function handleNext() {
    if (isLast) {
      setGameState('finished')
    } else {
      setCurrentIndex((i) => i + 1)
      setAnswered(null)
    }
  }

  function handleRestart() {
    setCurrentIndex(0)
    setAnswered(null)
    setScore(0)
    setGameState('playing')
    setResults([])
  }

  if (gameState === 'finished') {
    const pct = Math.round((score / total) * 100)
    let verdict: string
    let verdictColour: string
    if (pct >= 80) {
      verdict = 'Excellent! You really know your AI facts.'
      verdictColour = 'text-green-700 dark:text-green-400'
    } else if (pct >= 60) {
      verdict = 'Good effort! A few things to look up.'
      verdictColour = 'text-blue-700 dark:text-blue-400'
    } else {
      verdict = 'Keep exploring — there is a lot to learn about AI!'
      verdictColour = 'text-orange-600 dark:text-orange-400'
    }

    return (
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Results</h1>
          <p className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">{score} / {total}</p>
          <p className={`text-lg font-semibold ${verdictColour}`}>{verdict}</p>
        </div>

        <div className="space-y-4">
          {results.map(({ correct, statement: s }, i) => (
            <div
              key={s.id}
              className={`rounded-2xl border p-4 space-y-2 ${
                correct
                  ? 'border-green-300 bg-green-50 dark:bg-green-900/20 dark:border-green-700'
                  : 'border-red-300 bg-red-50 dark:bg-red-900/20 dark:border-red-700'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className={`mt-0.5 text-lg font-bold ${correct ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {correct ? '\u2713' : '\u2717'}
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {i + 1}. {s.text}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Answer:</span> {s.answer ? 'True' : 'False'} &mdash; {s.explanation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={handleRestart}
            className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
          >
            Play again
          </button>
          <Link
            to="/"
            className="flex-1 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  const isCorrect = answered === statement.answer
  const progressPct = Math.round(((currentIndex) / total) * 100)

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">True or False?</h1>
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            Score: {score} / {currentIndex}
          </span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Question {currentIndex + 1} of {total} &middot; {statement.topic}
        </p>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-2 bg-blue-500 rounded-full transition-all duration-500"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Statement card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 space-y-6">
        <p className="text-lg font-medium text-gray-800 dark:text-gray-100 leading-snug">
          {statement.text}
        </p>

        {/* True / False buttons */}
        <div className="grid grid-cols-2 gap-4">
          {([true, false] as boolean[]).map((val) => {
            let classes =
              'py-5 rounded-2xl text-xl font-extrabold tracking-wide transition-all border-2 '

            if (answered === null) {
              classes +=
                val
                  ? 'border-green-300 bg-green-50 dark:bg-green-900/20 dark:border-green-700 text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/40 cursor-pointer'
                  : 'border-red-300 bg-red-50 dark:bg-red-900/20 dark:border-red-700 text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/40 cursor-pointer'
            } else if (val === statement.answer) {
              classes += 'border-green-500 bg-green-100 dark:bg-green-900/40 dark:border-green-500 text-green-800 dark:text-green-200 cursor-default'
            } else if (val === answered && answered !== statement.answer) {
              classes += 'border-red-500 bg-red-100 dark:bg-red-900/40 dark:border-red-500 text-red-800 dark:text-red-200 cursor-default'
            } else {
              classes +=
                'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-default opacity-60'
            }

            return (
              <button
                key={String(val)}
                className={classes}
                onClick={() => handleAnswer(val)}
                disabled={answered !== null}
              >
                {val ? 'TRUE' : 'FALSE'}
              </button>
            )
          })}
        </div>

        {/* Feedback */}
        {answered !== null && (
          <div
            className={`rounded-xl p-4 space-y-1 ${
              isCorrect
                ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700'
                : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700'
            }`}
          >
            <p className={`font-semibold text-sm ${isCorrect ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
              {isCorrect ? 'Correct!' : `Not quite — the answer is ${statement.answer ? 'True' : 'False'}.`}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">{statement.explanation}</p>
          </div>
        )}
      </div>

      {/* Next button */}
      {answered !== null && (
        <button
          onClick={handleNext}
          className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
        >
          {isLast ? 'See my results' : 'Next question'}
        </button>
      )}

      {/* Back link */}
      <div className="text-center">
        <Link to="/" className="text-sm text-gray-500 dark:text-gray-400 hover:underline">
          Back to home
        </Link>
      </div>
    </div>
  )
}
