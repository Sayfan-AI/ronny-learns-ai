import { useState, useCallback } from 'react'
import { Link } from '@tanstack/react-router'

interface Quote {
  id: string
  text: string
  speaker: string
  options: string[]
  explanation: string
}

const QUOTES: Quote[] = [
  {
    id: 'q1',
    text: 'A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.',
    speaker: 'Alan Turing',
    options: ['Alan Turing', 'Stephen Hawking', 'Bill Gates', 'Elon Musk'],
    explanation: 'Alan Turing — mathematician and computing pioneer — proposed this idea in his 1950 paper "Computing Machinery and Intelligence". The test became known as the Turing Test and remains one of the most discussed concepts in AI, even though many researchers now consider it a flawed measure of intelligence.',
  },
  {
    id: 'q2',
    text: 'The development of full artificial intelligence could spell the end of the human race.',
    speaker: 'Stephen Hawking',
    options: ['Stephen Hawking', 'Nick Bostrom', 'Elon Musk', 'Alan Turing'],
    explanation: "Stephen Hawking — the theoretical physicist — made this warning in a 2014 BBC interview. Hawking argued that once AI surpasses human intelligence, it could redesign itself at an ever-increasing rate, while humans, limited by slow biological evolution, could not compete. His concern was about the long-term risk of superintelligence rather than today's AI systems.",
  },
  {
    id: 'q3',
    text: 'With artificial intelligence, we are summoning the demon.',
    speaker: 'Elon Musk',
    options: ['Elon Musk', 'Sam Altman', 'Nick Bostrom', 'Yuval Noah Harari'],
    explanation: 'Elon Musk — entrepreneur and founder of Tesla, SpaceX, and xAI — made this remark at a 2014 MIT event. He has been one of the most prominent voices warning about AI existential risk, while simultaneously founding AI companies. His co-founding of OpenAI and later founding of xAI (which made Grok) reflects the tension between his warnings and his actions.',
  },
  {
    id: 'q4',
    text: 'I think we are heading into a period where AI is going to be enormously, profoundly beneficial to humanity. I want to be clear about that.',
    speaker: 'Sam Altman',
    options: ['Sam Altman', 'Demis Hassabis', 'Sundar Pichai', 'Jensen Huang'],
    explanation: "Sam Altman is the CEO of OpenAI, the company behind ChatGPT and GPT-4. He has expressed both optimism about AI's potential benefits and concern about its risks — calling for government regulation of advanced AI and supporting international agreements on AI safety. His position reflects the complex duality of many people who work at the frontier of AI development.",
  },
  {
    id: 'q5',
    text: 'Machines take me by surprise with great frequency.',
    speaker: 'Alan Turing',
    options: ['Alan Turing', 'John McCarthy', 'Marvin Minsky', 'Claude Shannon'],
    explanation: "Alan Turing wrote this in 1950, arguing against the objection that machines cannot surprise us. He observed that he himself was frequently surprised by what machines did, and used this to argue that the assumption of complete predictability was unfounded. It remains a remarkably prescient observation given how surprising modern large language models often are.",
  },
  {
    id: 'q6',
    text: 'The question of whether machines can think is about as relevant as the question of whether submarines can swim.',
    speaker: 'Edsger Dijkstra',
    options: ['Edsger Dijkstra', 'Alan Turing', 'John McCarthy', 'Donald Knuth'],
    explanation: "Edsger Dijkstra — a pioneering Dutch computer scientist known for Dijkstra's algorithm and contributions to structured programming — made this remark to highlight that the question conflates what machines do with what words like 'think' mean for humans. It is one of the most quoted observations about the philosophical difficulty of defining machine intelligence.",
  },
  {
    id: 'q7',
    text: 'Artificial intelligence is the science of making machines do things that would require intelligence if done by men.',
    speaker: 'Marvin Minsky',
    options: ['Marvin Minsky', 'John McCarthy', 'Claude Shannon', 'Herbert Simon'],
    explanation: "Marvin Minsky was a co-founder of MIT's Artificial Intelligence Laboratory and one of the pioneers of AI research. His definition — which is one of several classic definitions — captures the field's ambition to mechanise human-level cognitive tasks. McCarthy, who coined the term 'artificial intelligence', defined it slightly differently as 'the science and engineering of making intelligent machines'.",
  },
  {
    id: 'q8',
    text: 'We are currently at a pivotal moment in AI development. The technology has crossed a threshold where it can genuinely help with some of the hardest problems humanity faces.',
    speaker: 'Demis Hassabis',
    options: ['Demis Hassabis', 'Sam Altman', 'Yann LeCun', 'Geoffrey Hinton'],
    explanation: "Demis Hassabis is the CEO and co-founder of Google DeepMind. He has spoken extensively about using AI for scientific discovery — DeepMind's AlphaFold solved the protein folding problem that had stumped biologists for 50 years. Hassabis believes AI could compress decades of scientific progress into years, accelerating breakthroughs in medicine, climate, and other fields.",
  },
  {
    id: 'q9',
    text: 'The danger of AI is not that it will rebel against us, but that it will do exactly what we ask — and we might not ask for the right things.',
    speaker: 'Joy Buolamwini',
    options: ['Joy Buolamwini', 'Kate Crawford', 'Timnit Gebru', 'Meredith Broussard'],
    explanation: "Joy Buolamwini is a researcher and activist who founded the Algorithmic Justice League. Her research on facial recognition bias — showing that commercial systems misidentified darker-skinned faces at far higher rates than lighter-skinned ones — sparked major policy debates. Her concern is not sci-fi robot rebellion, but the real-world harms of systems optimised for the wrong objectives.",
  },
  {
    id: 'q10',
    text: 'AI is neither magic nor sentient. It is statistics. Very, very large amounts of statistics.',
    speaker: 'Yann LeCun',
    options: ['Yann LeCun', 'Geoffrey Hinton', 'Yoshua Bengio', 'Andrew Ng'],
    explanation: "Yann LeCun is the Chief AI Scientist at Meta and a Turing Award winner (alongside Geoffrey Hinton and Yoshua Bengio) for his foundational work on deep learning. He is known for pushing back against what he considers hype and anthropomorphisation of AI systems — arguing that current large language models, while impressive, lack genuine understanding and are far from human-level general intelligence.",
  },
]

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

export function WhoSaidItQuiz() {
  const [quotes] = useState(() => shuffle(QUOTES).slice(0, 10))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [answers, setAnswers] = useState<Array<{ correct: boolean }>>([])

  const current = quotes[currentIndex]
  const total = quotes.length

  const handleSelect = useCallback((option: string) => {
    if (selected !== null) return
    const correct = option === current.speaker
    if (correct) setScore(s => s + 1)
    setSelected(option)
    setAnswers(prev => [...prev, { correct }])
  }, [selected, current])

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= total) {
      setGameOver(true)
    } else {
      setCurrentIndex(i => i + 1)
      setSelected(null)
    }
  }, [currentIndex, total])

  const handlePlayAgain = useCallback(() => {
    setCurrentIndex(0)
    setSelected(null)
    setScore(0)
    setGameOver(false)
    setAnswers([])
  }, [])

  function getScoreMessage(s: number, t: number): string {
    const pct = s / t
    if (pct >= 0.9) return 'Outstanding! You really know your AI thinkers and their views.'
    if (pct >= 0.7) return 'Impressive! You have a solid grasp of who thinks what about AI.'
    if (pct >= 0.5) return 'Good effort — the explanations should help you learn who said what.'
    return 'Tricky stuff! Each explanation reveals something interesting about these thinkers.'
  }

  if (gameOver) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
        <div className="max-w-xl w-full space-y-6">
          <div className="text-center space-y-3">
            <div className="text-6xl">&#x1F4AC;</div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Quiz complete!</h1>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-violet-100 dark:border-violet-900 p-8 text-center space-y-4">
            <p className="text-6xl font-bold text-violet-600 dark:text-violet-400">
              {score} / {total}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {getScoreMessage(score, total)}
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {answers.map((a, i) => (
              <div
                key={i}
                className={`w-7 h-7 rounded-full text-xs flex items-center justify-center font-bold ${
                  a.correct
                    ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                    : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                }`}
              >
                {a.correct ? '\u2713' : '\u2717'}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={handlePlayAgain}
              className="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
            >
              Play again
            </button>
            <Link
              to="/"
              className="w-full text-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-6 py-3 rounded-full text-sm transition-colors"
            >
              Back to lessons
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-xl w-full space-y-6">

        <div className="text-center space-y-2">
          <Link to="/" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Back to home</Link>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Who said it?
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            10 famous AI quotes — can you match them to the right person?
          </p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-violet-500 h-2 rounded-full transition-all"
              style={{ width: `${(currentIndex / total) * 100}%` }}
            />
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">
            {currentIndex + 1} / {total}
          </span>
          <span className="text-sm font-semibold text-violet-600 dark:text-violet-400 flex-shrink-0">
            {score} pts
          </span>
        </div>

        {/* Quote card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-violet-100 dark:border-violet-900 p-6 space-y-5">
          <div className="text-center">
            <span className="inline-block bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-300 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Quote {currentIndex + 1}
            </span>
            <p className="text-lg text-gray-800 dark:text-gray-100 leading-relaxed font-medium italic">
              "{current.text}"
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {current.options.map((option) => {
              let cls = 'w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors border-2 '
              if (selected === null) {
                cls += 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-violet-50 dark:hover:bg-violet-900 hover:border-violet-300 dark:hover:border-violet-600'
              } else if (option === current.speaker) {
                cls += 'bg-green-100 dark:bg-green-900 border-green-400 dark:border-green-600 text-green-800 dark:text-green-200'
              } else if (option === selected) {
                cls += 'bg-red-100 dark:bg-red-900 border-red-400 dark:border-red-600 text-red-800 dark:text-red-200'
              } else {
                cls += 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-400 dark:text-gray-500'
              }
              return (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={cls}
                  disabled={selected !== null}
                >
                  {option}
                  {selected !== null && option === current.speaker && (
                    <span className="ml-1">\u2713</span>
                  )}
                </button>
              )
            })}
          </div>

          {selected !== null && (
            <div className="space-y-3">
              <div className={`rounded-xl p-4 text-sm leading-relaxed ${
                selected === current.speaker
                  ? 'bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800'
                  : 'bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
              }`}>
                <p className="font-semibold mb-1">
                  {selected === current.speaker
                    ? `Correct! This was said by ${current.speaker}.`
                    : `Not quite. This was said by ${current.speaker}.`}
                </p>
                <p className="text-xs leading-relaxed opacity-90">{current.explanation}</p>
              </div>
              <button
                onClick={handleNext}
                className="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
              >
                {currentIndex + 1 < total ? 'Next quote' : 'See results'}
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
