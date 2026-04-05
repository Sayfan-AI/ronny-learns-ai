import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useMarkVisited } from '../hooks/useMarkVisited'

interface Round {
  id: string
  clues: string[]
  answer: string
  category: string
  explanation: string
  options: string[]
}

const ROUNDS: Round[] = [
  {
    id: 'r1',
    clues: [
      'I was created in 1997 by IBM.',
      'I beat the reigning world chess champion in a six-game match.',
      'My victory was controversial — my opponent claimed I must have received human assistance.',
    ],
    answer: 'Deep Blue',
    category: 'Game-playing AI',
    explanation: 'Deep Blue defeated Garry Kasparov in May 1997, becoming the first computer to beat a reigning world chess champion under standard tournament conditions.',
    options: ['AlphaGo', 'Deep Blue', 'Watson', 'Stockfish'],
  },
  {
    id: 'r2',
    clues: [
      'I was built by Google DeepMind.',
      'I defeated the world\'s number one player at a game with more possible moves than atoms in the observable universe.',
      'I trained by playing millions of games against myself.',
    ],
    answer: 'AlphaGo',
    category: 'Game-playing AI',
    explanation: 'AlphaGo defeated world Go champion Lee Sedol 4-1 in March 2016, a decade earlier than most experts predicted. Its successor AlphaGo Zero learned entirely through self-play with no human game data.',
    options: ['Deep Blue', 'AlphaGo', 'MuZero', 'Stockfish'],
  },
  {
    id: 'r3',
    clues: [
      'I live in a smart speaker.',
      'I was launched by Amazon in 2014.',
      'I can control your smart home, tell you the weather, and order things from an online shop.',
    ],
    answer: 'Alexa',
    category: 'Voice assistant',
    explanation: 'Amazon\'s Alexa launched in November 2014 alongside the Echo smart speaker, pioneering the voice-activated home assistant category.',
    options: ['Siri', 'Cortana', 'Alexa', 'Google Assistant'],
  },
  {
    id: 'r4',
    clues: [
      'I was created by DeepMind in 2020.',
      'I solved a 50-year-old biology problem.',
      'I can predict the 3D shape of almost any protein from its amino acid sequence.',
    ],
    answer: 'AlphaFold',
    category: 'Scientific AI',
    explanation: 'AlphaFold2 solved the protein folding problem — predicting a protein\'s 3D structure from its sequence — with near-experimental accuracy. The team received the Nobel Prize in Chemistry in 2024.',
    options: ['AlphaGo', 'AlphaFold', 'GNoME', 'Codex'],
  },
  {
    id: 'r5',
    clues: [
      'I won Jeopardy! against two human champions in 2011.',
      'I was built by IBM.',
      'I could process 200 million pages of content per second.',
    ],
    answer: 'Watson',
    category: 'Question-answering AI',
    explanation: 'IBM Watson beat Jeopardy! champions Ken Jennings and Brad Rutter in February 2011, demonstrating natural language understanding at scale.',
    options: ['Deep Blue', 'BERT', 'Watson', 'GPT-3'],
  },
  {
    id: 'r6',
    clues: [
      'I am an AI assistant made by Anthropic.',
      'I was first released in 2023.',
      'I am designed to be helpful, harmless, and honest.',
    ],
    answer: 'Claude',
    category: 'Language model',
    explanation: 'Claude is Anthropic\'s AI assistant, trained with a focus on safety and helpfulness. The name comes from Claude Shannon, father of information theory.',
    options: ['GPT-4', 'Gemini', 'Claude', 'Llama'],
  },
  {
    id: 'r7',
    clues: [
      'I am used by NASA and other space agencies.',
      'I have driven over 45 km on another planet.',
      'I operate with a 20-minute communication delay from Earth.',
    ],
    answer: 'Mars rover AI',
    category: 'Robotics AI',
    explanation: 'Mars rovers like Curiosity and Perseverance use autonomous navigation AI to plan short drives and avoid obstacles without real-time human control, due to the communication delay with Earth.',
    options: ['Waymo', 'Mars rover AI', 'Boston Dynamics', 'Spot'],
  },
  {
    id: 'r8',
    clues: [
      'I recommend what you should watch next.',
      'Over 80% of what you watch on my platform comes from my suggestions.',
      'My recommendations are estimated to save my parent company over $1 billion per year.',
    ],
    answer: 'Netflix recommendation AI',
    category: 'Recommendation systems',
    explanation: 'Netflix\'s recommendation algorithm drives over 80% of what subscribers watch. The company estimates it saves over $1 billion annually in customer retention by keeping people engaged.',
    options: ['YouTube algorithm', 'Spotify Discover Weekly', 'Netflix recommendation AI', 'Amazon recommendations'],
  },
  {
    id: 'r9',
    clues: [
      'I was trained by OpenAI.',
      'I reached 100 million users in just 2 months — faster than any consumer app ever.',
      'I was launched in November 2022.',
    ],
    answer: 'ChatGPT',
    category: 'Language model',
    explanation: 'ChatGPT launched on 30 November 2022 and reached 100 million users in approximately 2 months, a record that had previously been held by TikTok (9 months) and Instagram (2.5 years).',
    options: ['GPT-3', 'ChatGPT', 'Bard', 'Claude'],
  },
  {
    id: 'r10',
    clues: [
      'I was the first chatbot, created in 1966 at MIT.',
      'I could hold conversations by pattern-matching text.',
      'My most famous version pretended to be a psychotherapist.',
    ],
    answer: 'ELIZA',
    category: 'Historical AI',
    explanation: 'ELIZA was created by Joseph Weizenbaum at MIT in 1966. Its DOCTOR script mimicked a Rogerian psychotherapist by reflecting questions back at users. Weizenbaum was disturbed that people formed emotional attachments to it.',
    options: ['Siri', 'ALICE', 'ELIZA', 'Cortana'],
  },
]

export function GuessTheAIGame() {
  useMarkVisited('guess-the-ai')
  const [round, setRound] = useState(0)
  const [cluesRevealed, setCluesRevealed] = useState(1)
  const [selected, setSelected] = useState<string | null>(null)
  const [scores, setScores] = useState<Record<string, number>>({})
  const [done, setDone] = useState(false)

  const current = ROUNDS[round]
  const isAnswered = selected !== null
  const isCorrect = selected === current.answer
  const totalScore = Object.values(scores).reduce((sum, s) => sum + s, 0)
  const maxScore = ROUNDS.length * 3

  function handleRevealClue() {
    if (cluesRevealed < current.clues.length) {
      setCluesRevealed(c => c + 1)
    }
  }

  function handleGuess(option: string) {
    if (isAnswered) return
    setSelected(option)
    const pointsEarned = option === current.answer ? (4 - cluesRevealed) : 0
    setScores(prev => ({ ...prev, [current.id]: pointsEarned }))
  }

  function handleNext() {
    if (round + 1 >= ROUNDS.length) {
      setDone(true)
    } else {
      setRound(r => r + 1)
      setCluesRevealed(1)
      setSelected(null)
    }
  }

  function handleRestart() {
    setRound(0)
    setCluesRevealed(1)
    setSelected(null)
    setScores({})
    setDone(false)
  }

  if (done) {
    const pct = Math.round((totalScore / maxScore) * 100)
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
        <div className="max-w-2xl w-full space-y-8">
          <div className="text-center space-y-3">
            <div className="text-5xl mb-2">&#x1F3C6;</div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">Game over!</h1>
            <p className="text-2xl font-bold text-amber-600">{totalScore} / {maxScore} points</p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {pct >= 80 ? 'Excellent! You know your AI history.' : pct >= 50 ? 'Good effort! A few slipped through.' : 'Keep exploring — there is more to discover!'}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-5 space-y-3">
            <h2 className="font-bold text-gray-800 dark:text-gray-100">Round breakdown</h2>
            {ROUNDS.map((r, i) => (
              <div key={r.id} className="flex justify-between items-center text-sm">
                <span className="text-gray-600 dark:text-gray-300">{i + 1}. {r.answer}</span>
                <span className={`font-bold ${(scores[r.id] ?? 0) > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                  {scores[r.id] ?? 0} pts
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-3 justify-center">
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-amber-500 text-white rounded-xl font-semibold hover:bg-amber-600 transition-colors"
            >
              Play again
            </button>
            <Link to="/" className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-6">

        <div className="text-center space-y-2">
          <div className="text-4xl mb-1">&#x1F9E9;</div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Guess the AI!</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Read the clues and identify the AI system. Fewer clues = more points.</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Round {round + 1} of {ROUNDS.length}</span>
          <span className="text-sm font-bold text-amber-600">Score: {totalScore}</span>
        </div>

        <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-amber-500 transition-all" style={{ width: `${((round) / ROUNDS.length) * 100}%` }} />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5 space-y-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-amber-600 bg-amber-50 dark:bg-amber-900/30 px-2.5 py-1 rounded-full">{current.category}</span>
            <span className="text-xs text-gray-400">Clue {cluesRevealed} of {current.clues.length}</span>
          </div>

          <div className="space-y-2">
            {current.clues.slice(0, cluesRevealed).map((clue, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-amber-500 font-bold text-sm flex-shrink-0 mt-0.5">#{i + 1}</span>
                <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">{clue}</p>
              </div>
            ))}
          </div>

          {!isAnswered && cluesRevealed < current.clues.length && (
            <button
              onClick={handleRevealClue}
              className="w-full mt-2 py-2 text-sm text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors font-medium"
            >
              Reveal next clue (costs 1 point)
            </button>
          )}
        </div>

        {!isAnswered ? (
          <div className="grid grid-cols-2 gap-3">
            {current.options.map(opt => (
              <button
                key={opt}
                onClick={() => handleGuess(opt)}
                className="py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-amber-50 hover:border-amber-300 dark:hover:bg-amber-900/20 dark:hover:border-amber-600 transition-colors"
              >
                {opt}
              </button>
            ))}
          </div>
        ) : (
          <div className={`rounded-2xl p-5 space-y-3 ${isCorrect ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700' : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700'}`}>
            <div className="flex items-center gap-2">
              <span className="text-xl">{isCorrect ? '&#x2705;' : '&#x274C;'}</span>
              <p className={`font-bold ${isCorrect ? 'text-emerald-700 dark:text-emerald-300' : 'text-red-700 dark:text-red-300'}`}>
                {isCorrect ? `Correct! +${scores[current.id]} points` : `Not quite — the answer was ${current.answer}`}
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{current.explanation}</p>
            <button
              onClick={handleNext}
              className="w-full py-3 bg-amber-500 text-white rounded-xl font-semibold hover:bg-amber-600 transition-colors text-sm"
            >
              {round + 1 >= ROUNDS.length ? 'See final score' : 'Next round'}
            </button>
          </div>
        )}

        <div className="text-center pt-2">
          <Link to="/" className="text-indigo-600 dark:text-indigo-400 text-sm hover:underline">
            &larr; Back to home
          </Link>
        </div>

      </div>
    </div>
  )
}
