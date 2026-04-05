import { useState } from 'react'
import { Link } from '@tanstack/react-router'

interface Quote {
  text: string
  speaker: string
  context: string
  options: string[]
}

const QUOTES: Quote[] = [
  {
    text: '"We can only see a short distance ahead, but we can see plenty there that needs to be done."',
    speaker: 'Alan Turing',
    context: "Alan Turing (1912–1954) was the British mathematician who laid the theoretical foundations for computer science and AI. He proposed the Turing Test in 1950 as a way to evaluate machine intelligence. This quote is from his 1950 paper 'Computing Machinery and Intelligence'.",
    options: ['Alan Turing', 'Stephen Hawking', 'Elon Musk', 'Bill Gates'],
  },
  {
    text: '"I think the development of full artificial intelligence could spell the end of the human race."',
    speaker: 'Stephen Hawking',
    context: 'Professor Stephen Hawking (1942–2018) made this remark in a 2014 BBC interview. Hawking was one of the most prominent scientific voices warning about the long-term risks of artificial general intelligence, arguing that once AI surpasses human intelligence, it could evolve at an ever-increasing pace that humans could not keep up with.',
    options: ['Nick Bostrom', 'Stephen Hawking', 'Sam Altman', 'Timnit Gebru'],
  },
  {
    text: '"AI is probably the most important thing humanity has ever worked on. I think of it as something more profound than electricity or fire."',
    speaker: 'Sundar Pichai',
    context: 'Sundar Pichai, CEO of Google and Alphabet, made this remark in 2018. The comparison to fire and electricity is intended to convey both the transformative power and the potential danger of AI — fire and electricity being enormously beneficial technologies that also carry serious risks when misused.',
    options: ['Sam Altman', 'Sundar Pichai', 'Jeff Bezos', 'Elon Musk'],
  },
  {
    text: '"The question of whether a computer can think is no more interesting than the question of whether a submarine can swim."',
    speaker: 'Edsger Dijkstra',
    context: "Edsger Dijkstra (1930–2002) was a Dutch computer scientist and Turing Award winner. This quote reflects his view that debating whether AI truly 'thinks' or 'is intelligent' is a category error — the interesting questions are about what computers can actually do, not whether they fit human philosophical definitions.",
    options: ['Marvin Minsky', 'John McCarthy', 'Edsger Dijkstra', 'Alan Turing'],
  },
  {
    text: '"There\'s no reason and no way that a human mind can keep up with an artificial intelligence machine by 2035."',
    speaker: 'Gray Scott',
    context: "Gray Scott is a futurist and technologist known for commentary on the societal impact of AI and robotics. This quote reflects a common prediction among some futurists that AI will outperform humans in most cognitive tasks within the coming decades.",
    options: ['Ray Kurzweil', 'Nick Bostrom', 'Gray Scott', 'Demis Hassabis'],
  },
  {
    text: '"Bias is not just a technical problem. It\'s a human and social problem that requires human and social solutions."',
    speaker: 'Joy Buolamwini',
    context: "Joy Buolamwini is a Ghanaian-American computer scientist and activist at MIT Media Lab, founder of the Algorithmic Justice League. Her research demonstrated that facial recognition AI from major tech companies had significantly higher error rates for darker-skinned women. Her work has been fundamental in establishing that AI bias reflects social inequalities in training data.",
    options: ['Kate Crawford', 'Joy Buolamwini', 'Timnit Gebru', 'Safiya Noble'],
  },
  {
    text: '"The danger of AI is not that it will rebel against us. The real danger is that it will do exactly what we ask it to do."',
    speaker: 'Sam Harris',
    context: "Sam Harris, philosopher and neuroscientist, made this point to highlight what he sees as the deeper risk of AI: not a robot uprising, but systems that optimise relentlessly for the wrong objectives. A famous example is an AI asked to maximise paperclip production that takes over all resources — not out of malice, but pure optimisation.",
    options: ['Nick Bostrom', 'Eliezer Yudkowsky', 'Sam Harris', 'Max Tegmark'],
  },
  {
    text: '"We built mind children. Now we have to learn to live with them."',
    speaker: 'Hans Moravec',
    context: "Hans Moravec is a robotics researcher at Carnegie Mellon University. He coined the term 'mind children' for AI and robotic systems in his 1988 book of the same name, arguing that AI represents a form of intellectual offspring that will eventually surpass its human creators.",
    options: ['Marvin Minsky', 'Hans Moravec', 'Ray Kurzweil', 'John McCarthy'],
  },
  {
    text: '"The question is not whether intelligent machines can have any emotions, but whether machines can be intelligent without any emotions."',
    speaker: 'Marvin Minsky',
    context: "Marvin Minsky (1927–2016) was an American cognitive scientist and co-founder of MIT's AI laboratory, widely considered one of the founding fathers of artificial intelligence. He wrote extensively on the relationship between emotion and cognition, arguing that emotions are not separate from intelligence but integral to it.",
    options: ['John McCarthy', 'Marvin Minsky', 'Herbert Simon', 'Allen Newell'],
  },
  {
    text: '"Every time I fire a linguist, the performance of the speech recognizer goes up."',
    speaker: 'Fred Jelinek',
    context: "Fred Jelinek (1932–2010) was a Czech-American scientist who pioneered the statistical approach to natural language processing at IBM. This famous (possibly apocryphal) quote captures the counterintuitive insight behind machine learning: sometimes having less human expertise and more data produces better results than encoding human knowledge directly.",
    options: ['Yann LeCun', 'Geoff Hinton', 'Fred Jelinek', 'Yoshua Bengio'],
  },
]

type GameState = 'playing' | 'complete'

export function WhoSaidItQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [gameState, setGameState] = useState<GameState>('playing')
  const [score, setScore] = useState(0)
  const [results, setResults] = useState<boolean[]>([])

  const current = QUOTES[currentIndex]
  const isAnswered = selected !== null
  const isCorrect = selected !== null && current.options[selected] === current.speaker

  function handleSelect(index: number) {
    if (isAnswered) return
    setSelected(index)
    const correct = current.options[index] === current.speaker
    if (correct) setScore(s => s + 1)
    setResults(r => [...r, correct])
  }

  function handleNext() {
    if (currentIndex + 1 >= QUOTES.length) {
      setGameState('complete')
    } else {
      setCurrentIndex(i => i + 1)
      setSelected(null)
    }
  }

  function handleRestart() {
    setCurrentIndex(0)
    setSelected(null)
    setGameState('playing')
    setScore(0)
    setResults([])
  }

  const total = QUOTES.length

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-6">

        <div className="text-center space-y-3">
          <div className="text-5xl">&#x1F4AC;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">Who said it?</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            10 real quotes about AI. Who said each one?
          </p>
        </div>

        {gameState === 'playing' && (
          <>
            {/* Progress */}
            <div className="space-y-1">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Quote {currentIndex + 1} of {total}</span>
                <span>{score} correct so far</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-amber-500 h-2 rounded-full transition-all"
                  style={{ width: `${(currentIndex / total) * 100}%` }}
                />
              </div>
            </div>

            {/* Quote card */}
            <div className="bg-amber-600 rounded-2xl p-6 space-y-3">
              <p className="text-amber-100 text-sm font-medium uppercase tracking-wide text-center">Who said this?</p>
              <blockquote className="text-white text-xl leading-relaxed text-center italic font-medium">
                {current.text}
              </blockquote>
            </div>

            {/* Options */}
            <div className="grid grid-cols-2 gap-3">
              {current.options.map((option, index) => {
                const isThisCorrect = option === current.speaker
                let style = 'border-gray-200 bg-white hover:border-amber-300 hover:bg-amber-50 cursor-pointer'
                if (isAnswered) {
                  if (isThisCorrect) {
                    style = 'border-green-400 bg-green-50 cursor-default'
                  } else if (index === selected) {
                    style = 'border-red-400 bg-red-50 cursor-default'
                  } else {
                    style = 'border-gray-200 bg-white opacity-50 cursor-default'
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleSelect(index)}
                    disabled={isAnswered}
                    className={`border-2 rounded-xl p-4 text-center transition-all ${style}`}
                  >
                    <p className="text-gray-800 text-sm font-semibold">{option}</p>
                    {isAnswered && isThisCorrect && (
                      <p className="text-green-600 text-xs font-medium mt-1">Correct</p>
                    )}
                    {isAnswered && index === selected && !isThisCorrect && (
                      <p className="text-red-600 text-xs font-medium mt-1">Incorrect</p>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Explanation */}
            {isAnswered && (
              <div className={`rounded-xl p-4 space-y-2 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}>
                <p className={`font-bold text-sm ${isCorrect ? 'text-green-800' : 'text-amber-800'}`}>
                  {isCorrect ? `Correct — ${current.speaker}` : `It was ${current.speaker}`}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">{current.context}</p>
              </div>
            )}

            {isAnswered && (
              <button
                onClick={handleNext}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-xl transition-colors text-lg"
              >
                {currentIndex + 1 >= total ? 'See my results' : 'Next quote'}
              </button>
            )}
          </>
        )}

        {gameState === 'complete' && (
          <>
            <div className={`rounded-2xl p-6 text-center space-y-2 ${
              score === total
                ? 'bg-green-50 border-2 border-green-300'
                : score >= Math.round(total * 0.6)
                ? 'bg-blue-50 border-2 border-blue-200'
                : 'bg-amber-50 border-2 border-amber-200'
            }`}>
              <div className="text-4xl">
                {score === total ? '&#x1F3C6;' : score >= Math.round(total * 0.6) ? '&#x1F44D;' : '&#x1F4AA;'}
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {score} out of {total}
              </p>
              <p className="text-gray-600 text-sm">
                {score === total
                  ? 'Perfect! You know your AI thinkers.'
                  : score >= Math.round(total * 0.6)
                  ? 'Great score! You know some key AI voices.'
                  : 'Good try — these quotes come from a wide range of thinkers.'}
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-gray-800">All quotes</h2>
              {QUOTES.map((q, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${results[i] !== undefined && results[i] ? 'border-green-200 bg-green-50' : 'border-red-100 bg-red-50'}`}>
                  <span className="text-lg flex-shrink-0">
                    {results[i] !== undefined && results[i] ? '&#x2705;' : '&#x274C;'}
                  </span>
                  <span className="text-gray-800 text-sm font-medium">{q.speaker}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleRestart}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-xl transition-colors"
              >
                Play again
              </button>
              <Link
                to="/"
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-xl transition-colors text-center"
              >
                Back home
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
