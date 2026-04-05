import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useMarkVisited } from '../hooks/useMarkVisited'

interface Round {
  id: string
  quote: string
  correctAnswer: string
  options: string[]
  context: string
}

const ROUNDS: Round[] = [
  {
    id: 'r1',
    quote: '"We can only see a short distance ahead, but we can see plenty there that needs to be done."',
    correctAnswer: 'Alan Turing',
    options: ['Alan Turing', 'Marvin Minsky', 'John McCarthy', 'Claude Shannon'],
    context: 'Alan Turing wrote this in his 1950 paper "Computing Machinery and Intelligence" — the same paper that proposed what became known as the Turing Test. Turing is widely regarded as the father of theoretical computer science and artificial intelligence.',
  },
  {
    id: 'r2',
    quote: '"The development of full artificial intelligence could spell the end of the human race."',
    correctAnswer: 'Stephen Hawking',
    options: ['Elon Musk', 'Nick Bostrom', 'Stephen Hawking', 'Bill Gates'],
    context: 'Stephen Hawking said this in a 2014 BBC interview. The theoretical physicist warned that AI could outpace human evolution and eventually supersede humanity. He advocated for research into making AI beneficial and avoiding an arms race.',
  },
  {
    id: 'r3',
    quote: '"AI is probably the most important thing humanity has ever worked on. I think of it as something more profound than electricity or fire."',
    correctAnswer: 'Sundar Pichai',
    options: ['Sam Altman', 'Sundar Pichai', 'Jensen Huang', 'Jeff Bezos'],
    context: "Sundar Pichai, CEO of Google and Alphabet, made this statement in 2020. It reflects Google's strategic bet on AI as fundamental to the company's future across search, cloud computing, healthcare, and autonomous vehicles.",
  },
  {
    id: 'r4',
    quote: '"The question is not whether intelligent machines can have any emotions, but whether machines can be intelligent without any emotions."',
    correctAnswer: 'Marvin Minsky',
    options: ['Alan Turing', 'Marvin Minsky', 'Yann LeCun', 'Geoffrey Hinton'],
    context: "Marvin Minsky, one of the founders of AI as an academic discipline at MIT, argued throughout his career that emotion was not separate from intelligence but central to it. His book 'The Emotion Machine' (2006) explored this idea in depth.",
  },
  {
    id: 'r5',
    quote: '"We\'re making something that is either the most amazing thing that has ever happened, or the most catastrophic."',
    correctAnswer: 'Sam Altman',
    options: ['Elon Musk', 'Sam Altman', 'Dario Amodei', 'Demis Hassabis'],
    context: 'Sam Altman, CEO of OpenAI, has repeatedly described AI development in these existential terms while continuing to develop it. His position — that AI could be transformative for good or catastrophically harmful — is sometimes called the "e/acc vs safety" tension within the AI industry.',
  },
  {
    id: 'r6',
    quote: '"Machines take me by surprise with great frequency."',
    correctAnswer: 'Alan Turing',
    options: ['Alan Turing', 'John von Neumann', 'Norbert Wiener', 'Claude Shannon'],
    context: "Alan Turing wrote this in 'Computing Machinery and Intelligence' (1950), arguing against the view that machines cannot think because they only do what they are programmed to do. He suggested that a machine's outputs can surprise even its creator.",
  },
  {
    id: 'r7',
    quote: '"I\'m increasingly inclined to think that there should be some regulatory oversight, maybe at the national and international level, just to make sure that we don\'t do something very foolish."',
    correctAnswer: 'Elon Musk',
    options: ['Sam Altman', 'Bill Gates', 'Elon Musk', 'Tim Cook'],
    context: 'Elon Musk said this in 2014 at the MIT Aeronautics and Astronautics department\'s centennial symposium, calling AI "our biggest existential threat". Musk later co-founded OpenAI (then left its board) and subsequently founded xAI, his own AI company.',
  },
  {
    id: 'r8',
    quote: '"The question of whether a computer can think is no more interesting than the question of whether a submarine can swim."',
    correctAnswer: 'Edsger Dijkstra',
    options: ['Alan Turing', 'Edsger Dijkstra', 'John McCarthy', 'Marvin Minsky'],
    context: 'Edsger Dijkstra, the Dutch computer scientist famous for shortest path algorithms and structured programming, was sceptical of AI claims. He argued that debating whether computers "think" was a category error — like asking if submarines "swim".',
  },
  {
    id: 'r9',
    quote: '"I don\'t want to be too precise, but I\'d say we might have AGI within the next three to five years."',
    correctAnswer: 'Sam Altman',
    options: ['Demis Hassabis', 'Sam Altman', 'Yann LeCun', 'Ilya Sutskever'],
    context: 'Sam Altman of OpenAI has made increasingly aggressive AGI timeline predictions. His estimates have prompted significant pushback from AI researchers who argue that defining AGI is itself contested and that timelines of this kind are not supported by current evidence.',
  },
  {
    id: 'r10',
    quote: '"There is no reason and no way that a human mind can keep up with an artificial intelligence machine by 2035."',
    correctAnswer: 'Gray Scott',
    options: ['Ray Kurzweil', 'Nick Bostrom', 'Gray Scott', 'Max Tegmark'],
    context: 'Gray Scott is a futurist and researcher who has spoken widely about AI and technology trends. This quote reflects a strand of futurist thinking about the pace of AI development, though many AI researchers consider such precise timeline predictions to be speculative.',
  },
]

export function WhoSaidItQuiz() {
  useMarkVisited('who-said-it')
  const [round, setRound] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [scores, setScores] = useState<Record<string, boolean>>({})
  const [done, setDone] = useState(false)

  const current = ROUNDS[round]
  const isAnswered = selected !== null
  const isCorrect = selected === current.correctAnswer
  const totalScore = Object.values(scores).filter(Boolean).length

  function handleGuess(option: string) {
    if (isAnswered) return
    setSelected(option)
    setScores(prev => ({ ...prev, [current.id]: option === current.correctAnswer }))
  }

  function handleNext() {
    if (round + 1 >= ROUNDS.length) {
      setDone(true)
    } else {
      setRound(r => r + 1)
      setSelected(null)
    }
  }

  function handleRestart() {
    setRound(0)
    setSelected(null)
    setScores({})
    setDone(false)
  }

  if (done) {
    const pct = Math.round((totalScore / ROUNDS.length) * 100)
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
        <div className="max-w-2xl w-full space-y-8">
          <div className="text-center space-y-3">
            <div className="text-5xl mb-2">&#x1F3C6;</div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">All done!</h1>
            <p className="text-2xl font-bold text-purple-600">{totalScore} / {ROUNDS.length} correct</p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {pct >= 80 ? 'Excellent — you know who said what in AI.' : pct >= 50 ? 'Good effort! A few tricky ones.' : 'Keep reading — the quotes will start to click.'}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-5 space-y-3">
            <h2 className="font-bold text-gray-800 dark:text-gray-100">Round breakdown</h2>
            {ROUNDS.map((r) => (
              <div key={r.id} className="flex justify-between items-center text-sm">
                <span className="text-gray-600 dark:text-gray-300 truncate flex-1 mr-2">"{r.quote.substring(0, 50)}..."</span>
                <span className={`font-bold flex-shrink-0 ${scores[r.id] ? 'text-emerald-600' : 'text-red-500'}`}>
                  {scores[r.id] ? '&#x2713; ' : '&#x2715; '}{r.correctAnswer}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-3 justify-center">
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-purple-500 text-white rounded-xl font-semibold hover:bg-purple-600 transition-colors"
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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-6">

        <div className="text-center space-y-2">
          <div className="text-4xl mb-1">&#x1F4AC;</div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Who said it?</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Famous quotes about AI — can you identify who said each one?</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Round {round + 1} of {ROUNDS.length}</span>
          <span className="text-sm font-bold text-purple-600">Score: {totalScore}</span>
        </div>

        <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-purple-500 transition-all" style={{ width: `${(round / ROUNDS.length) * 100}%` }} />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6">
          <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed italic text-center">
            {current.quote}
          </p>
        </div>

        {!isAnswered ? (
          <div className="grid grid-cols-1 gap-3">
            {current.options.map(opt => (
              <button
                key={opt}
                onClick={() => handleGuess(opt)}
                className="py-3 px-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-purple-50 hover:border-purple-300 dark:hover:bg-purple-900/20 dark:hover:border-purple-600 transition-colors text-left"
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
                {isCorrect ? `Correct! That was ${current.correctAnswer}.` : `Not quite — this was said by ${current.correctAnswer}.`}
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{current.context}</p>
            <button
              onClick={handleNext}
              className="w-full py-3 bg-purple-500 text-white rounded-xl font-semibold hover:bg-purple-600 transition-colors text-sm"
            >
              {round + 1 >= ROUNDS.length ? 'See final score' : 'Next quote'}
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
