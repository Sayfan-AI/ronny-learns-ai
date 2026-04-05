import { useState } from 'react'

type Quote = {
  id: string
  quote: string
  author: string
  year: string
  context: string
  options: string[]
}

const QUOTES: Quote[] = [
  {
    id: 'q1',
    quote: `"I think it's fair to say that personal computers have become the most empowering tool we've ever created. They're tools of communication, they're tools of creativity, and they can be shaped by their user."`,
    author: 'Bill Gates',
    year: '2004',
    context: 'Bill Gates, co-founder of Microsoft, said this while discussing the role of personal computers. He has since become a prominent voice on AI, warning about both its promise (for healthcare, climate) and risk.',
    options: ['Alan Turing', 'Bill Gates', 'Elon Musk', 'Steve Jobs'],
  },
  {
    id: 'q2',
    quote: '"The development of full artificial intelligence could spell the end of the human race… It would take off on its own, and re-design itself at an ever increasing rate."',
    author: 'Stephen Hawking',
    year: '2014',
    context: 'Stephen Hawking said this in a BBC interview in 2014, expressing concern about superintelligent AI. He was one of the first major public figures to prominently warn about existential AI risk.',
    options: ['Nick Bostrom', 'Stephen Hawking', 'Elon Musk', 'Yoshua Bengio'],
  },
  {
    id: 'q3',
    quote: '"We need to be super careful with AI. It is potentially more dangerous than nukes."',
    author: 'Elon Musk',
    year: '2014',
    context: 'Elon Musk has consistently warned about AI risk, while simultaneously co-founding OpenAI and later founding xAI. His public warnings about AI are among the most widely quoted.',
    options: ['Sam Altman', 'Elon Musk', 'Stephen Hawking', 'Geoffrey Hinton'],
  },
  {
    id: 'q4',
    quote: '"Artificial intelligence is one of the most profound things we\'re working on as humanity. It\'s more profound than fire or electricity."',
    author: 'Sundar Pichai',
    year: '2018',
    context: "Sundar Pichai, CEO of Google (now Alphabet), said this at the World Economic Forum, arguing that AI is a fundamental technological shift rather than just another product category.",
    options: ['Jeff Bezos', 'Sundar Pichai', 'Sam Altman', 'Demis Hassabis'],
  },
  {
    id: 'q5',
    quote: '"I visualize a time when we will be to robots what dogs are to humans, and I\'m rooting for the machines."',
    author: 'Claude Shannon',
    year: '1987',
    context: "Claude Shannon, the founder of information theory, made this remark humorously in 1987. His foundational work on information and communication underpins all of digital computing and AI.",
    options: ['Alan Turing', 'Claude Shannon', 'Marvin Minsky', 'John McCarthy'],
  },
  {
    id: 'q6',
    quote: '"The question of whether machines can think is about as relevant as the question of whether submarines can swim."',
    author: 'Edsger Dijkstra',
    year: '1984',
    context: "Edsger Dijkstra, the computer scientist famous for Dijkstra's algorithm, made this remark to challenge the framing of AI debates. The point: just because machines don't think the way humans do doesn't mean they can't do remarkable things.",
    options: ['Alan Turing', 'Marvin Minsky', 'Edsger Dijkstra', 'John von Neumann'],
  },
  {
    id: 'q7',
    quote: '"Algorithms are not objective. They are opinions embedded in code."',
    author: 'Cathy O\'Neil',
    year: '2016',
    context: "Cathy O'Neil, data scientist and author of 'Weapons of Math Destruction', coined this phrase to challenge the popular idea that algorithmic systems are inherently neutral. Her book was one of the first mainstream warnings about AI bias.",
    options: ['Joy Buolamwini', "Cathy O'Neil", 'Kate Crawford', 'Timnit Gebru'],
  },
  {
    id: 'q8',
    quote: '"I\'ve come to believe that we should not call them "AI" at all. We should call them "systems that consume data and produce probabilistic outputs", because that\'s what they are."',
    author: 'Gary Marcus',
    year: '2022',
    context: "Gary Marcus, AI researcher and cognitive scientist, has been a prominent critic of hype around large language models, arguing that they do not achieve genuine understanding or reasoning — only pattern matching.",
    options: ['Yann LeCun', 'Gary Marcus', 'Geoffrey Hinton', 'Andrew Ng'],
  },
  {
    id: 'q9',
    quote: '"I look at AlphaFold and I see one of the most beautiful things I\'ve ever seen. But I also wonder what it will mean to be a biologist in 20 years."',
    author: 'Jennifer Doudna',
    year: '2022',
    context: "Jennifer Doudna, co-developer of CRISPR gene editing and a Nobel Prize winner, expressed both wonder and concern about AI's impact on biology — specifically after AlphaFold solved the protein folding problem.",
    options: ['Frances Arnold', 'Jennifer Doudna', 'Katalin Karikó', 'Elizabeth Blackburn'],
  },
  {
    id: 'q10',
    quote: '"Race and bias are not technical problems. They are political problems that have been outsourced to tech companies."',
    author: 'Joy Buolamwini',
    year: '2019',
    context: "Joy Buolamwini, computer scientist and founder of the Algorithmic Justice League, said this while discussing her landmark research on facial recognition bias. Her work showed that commercial facial recognition systems were significantly less accurate for darker-skinned women.",
    options: ['Timnit Gebru', 'Joy Buolamwini', "Cathy O'Neil", 'Kate Crawford'],
  },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function WhoSaidItQuiz() {
  const [quotes] = useState<Quote[]>(() => shuffle([...QUOTES]))
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [scores, setScores] = useState<boolean[]>([])
  const [finished, setFinished] = useState(false)

  const quote = quotes[current]
  const isAnswered = selected !== null
  const totalCorrect = scores.filter(Boolean).length

  function handleSelect(option: string) {
    if (isAnswered) return
    setSelected(option)
    setScores((prev) => [...prev, option === quote.author])
  }

  function handleNext() {
    if (current < quotes.length - 1) {
      setCurrent((c) => c + 1)
      setSelected(null)
    } else {
      setFinished(true)
    }
  }

  function handleRestart() {
    setCurrent(0)
    setSelected(null)
    setScores([])
    setFinished(false)
  }

  if (finished) {
    const pct = Math.round((totalCorrect / quotes.length) * 100)
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
        <div className="max-w-lg w-full space-y-6 text-center">
          <div className="text-7xl">&#x1F4AC;</div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Who said it? Complete!</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            You got <span className="font-bold text-amber-600 dark:text-amber-400">{totalCorrect} / {quotes.length}</span> correct ({pct}%)
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {pct >= 80
              ? 'Excellent — you know your AI thinkers!'
              : pct >= 50
              ? 'Good effort! There are some fascinating people in the AI world.'
              : 'Nice try — the context snippets are a great way to get to know these voices.'}
          </p>
          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            &#x1F504; Play again
          </button>
          <div>
            <a href="#/" className="text-amber-600 dark:text-amber-400 text-sm hover:underline">
              Back to home
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-lg w-full space-y-6">

        <div className="text-center space-y-2">
          <div className="text-5xl">&#x1F4AC;</div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Who said it?</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Round {current + 1} of {quotes.length} — who made this quote about AI?
          </p>
          <div className="flex justify-center gap-1.5 pt-1">
            {quotes.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-5 rounded-full transition-all ${
                  i < scores.length
                    ? scores[i] ? 'bg-amber-500' : 'bg-red-400'
                    : i === current
                    ? 'bg-amber-300'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6">
          <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wide mb-3">The quote</p>
          <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed italic">{quote.quote}</p>
          <p className="text-gray-400 dark:text-gray-500 text-xs mt-2">{quote.year}</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {quote.options.map((option) => {
            let color = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950'
            if (isAnswered) {
              if (option === quote.author) color = 'bg-green-100 dark:bg-green-900 border-green-400 dark:border-green-600 text-green-800 dark:text-green-200'
              else if (selected === option) color = 'bg-red-100 dark:bg-red-900 border-red-400 dark:border-red-600 text-red-800 dark:text-red-200'
              else color = 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500'
            }
            return (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                disabled={isAnswered}
                className={`border-2 rounded-xl p-3 text-sm font-medium text-center transition-all ${color} ${!isAnswered ? 'cursor-pointer' : 'cursor-default'}`}
              >
                {option}
              </button>
            )
          })}
        </div>

        {isAnswered && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-4 space-y-2">
            <p className="font-semibold text-gray-700 dark:text-gray-200 text-sm">
              {scores[scores.length - 1] ? `✓ Correct — ${quote.author}!` : `✗ That was ${quote.author}`}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{quote.context}</p>
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2 rounded-xl transition-colors text-sm mt-1"
            >
              {current < quotes.length - 1 ? 'Next quote →' : 'See results 🏆'}
            </button>
          </div>
        )}

        <div className="text-center">
          <a href="#/" className="text-amber-600 dark:text-amber-400 text-sm hover:underline">
            Back to home
          </a>
        </div>

      </div>
    </div>
  )
}
