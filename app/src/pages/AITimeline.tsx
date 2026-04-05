import { useState, useCallback } from 'react'

interface Milestone {
  id: string
  year: number
  title: string
  description: string
  icon: string
}

const MILESTONES: Milestone[] = [
  {
    id: 'turing',
    year: 1950,
    title: 'The Turing Test proposed',
    description: 'Alan Turing published "Computing Machinery and Intelligence", introducing the idea of a test for machine intelligence.',
    icon: '&#x1F9E0;',
  },
  {
    id: 'checkers',
    year: 1959,
    title: 'First self-learning program',
    description: "Arthur Samuel created a checkers-playing program that could improve its own performance by playing against itself — one of the first examples of machine learning.",
    icon: '&#x265F;',
  },
  {
    id: 'expert-systems',
    year: 1980,
    title: 'Expert systems boom',
    description: 'Expert systems like XCON became widely adopted in industry, encoding human expertise in rules. This was the first commercial AI success story.',
    icon: '&#x1F4BC;',
  },
  {
    id: 'deep-blue',
    year: 1997,
    title: 'Deep Blue beats world chess champion',
    description: "IBM's Deep Blue defeated Garry Kasparov in a six-game match — the first time a computer beat a reigning world chess champion under tournament conditions.",
    icon: '&#x265A;',
  },
  {
    id: 'imagenet',
    year: 2009,
    title: 'ImageNet launched',
    description: 'Fei-Fei Li launched the ImageNet dataset — 14 million labelled images that would become the fuel for the deep learning revolution in computer vision.',
    icon: '&#x1F5BC;&#xFE0F;',
  },
  {
    id: 'siri',
    year: 2011,
    title: 'Siri arrives on iPhone',
    description: 'Apple launched Siri with the iPhone 4S, bringing conversational AI voice assistants to the mainstream for the first time.',
    icon: '&#x1F4F1;',
  },
  {
    id: 'alphago',
    year: 2016,
    title: 'AlphaGo beats Lee Sedol',
    description: "DeepMind's AlphaGo defeated world Go champion Lee Sedol 4-1, shocking experts who thought Go was decades away from being solved by AI.",
    icon: '&#x26AB;',
  },
  {
    id: 'gpt3',
    year: 2020,
    title: 'GPT-3 released',
    description: "OpenAI released GPT-3, a 175 billion parameter language model that could write coherent essays, code, and poetry — demonstrating the power of scale in AI.",
    icon: '&#x1F4DD;',
  },
  {
    id: 'dalle',
    year: 2021,
    title: 'DALL-E launches',
    description: 'OpenAI released DALL-E, an AI system that could generate images from text descriptions, igniting the generative AI art revolution.',
    icon: '&#x1F3A8;',
  },
  {
    id: 'chatgpt',
    year: 2022,
    title: 'ChatGPT launches',
    description: 'OpenAI released ChatGPT in November 2022. It reached 100 million users in two months — the fastest-growing consumer application in history.',
    icon: '&#x1F916;',
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

type Phase = 'playing' | 'revealed'

export function AITimeline() {
  const [items, setItems] = useState<Milestone[]>(() => shuffle(MILESTONES))
  const [dragging, setDragging] = useState<string | null>(null)
  const [phase, setPhase] = useState<Phase>('playing')
  const [score, setScore] = useState(0)

  const handleDragStart = useCallback((id: string) => {
    setDragging(id)
  }, [])

  const handleDragOver = useCallback(
    (e: React.DragEvent, targetId: string) => {
      e.preventDefault()
      if (!dragging || dragging === targetId) return
      setItems(prev => {
        const from = prev.findIndex(m => m.id === dragging)
        const to = prev.findIndex(m => m.id === targetId)
        if (from === -1 || to === -1) return prev
        const next = [...prev]
        const [moved] = next.splice(from, 1)
        next.splice(to, 0, moved)
        return next
      })
    },
    [dragging],
  )

  const handleDragEnd = useCallback(() => {
    setDragging(null)
  }, [])

  const handleSubmit = useCallback(() => {
    const correct = items.filter((m, i) => {
      const sorted = [...MILESTONES].sort((a, b) => a.year - b.year)
      return m.id === sorted[i].id
    }).length
    setScore(correct)
    setPhase('revealed')
  }, [items])

  const handleReset = useCallback(() => {
    setItems(shuffle(MILESTONES))
    setPhase('playing')
    setScore(0)
  }, [])

  const sortedCorrect = [...MILESTONES].sort((a, b) => a.year - b.year)

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x23F3;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI Timeline
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Drag the milestones into the correct chronological order &mdash; earliest first.
          </p>
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm px-4 py-2 rounded-full">
            <span>{MILESTONES.length} milestones to order</span>
          </div>
        </div>

        {phase === 'playing' && (
          <>
            <div className="bg-indigo-50 rounded-2xl p-4 text-center">
              <p className="text-indigo-700 text-sm font-medium">
                Drag each card up or down to place it in the order you think it happened.
                Earliest event at the top, most recent at the bottom.
              </p>
            </div>

            <div className="space-y-2">
              {items.map((milestone, index) => (
                <div
                  key={milestone.id}
                  draggable
                  onDragStart={() => handleDragStart(milestone.id)}
                  onDragOver={e => handleDragOver(e, milestone.id)}
                  onDragEnd={handleDragEnd}
                  className={`bg-white rounded-xl border-2 p-4 flex items-center gap-4 cursor-grab active:cursor-grabbing transition-all select-none ${
                    dragging === milestone.id
                      ? 'border-indigo-400 shadow-lg opacity-70 scale-[1.02]'
                      : 'border-gray-200 hover:border-indigo-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm flex items-center justify-center">
                    {index + 1}
                  </div>
                  <span className="text-2xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: milestone.icon }} />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 text-sm leading-tight">{milestone.title}</p>
                  </div>
                  <span className="text-gray-400 text-lg flex-shrink-0">&#x2630;</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl text-lg hover:bg-indigo-700 active:scale-95 transition-all"
            >
              Submit my order
            </button>
          </>
        )}

        {phase === 'revealed' && (
          <>
            <div className={`rounded-2xl p-6 text-center space-y-2 ${score >= 8 ? 'bg-green-50 border-2 border-green-200' : score >= 5 ? 'bg-amber-50 border-2 border-amber-200' : 'bg-red-50 border-2 border-red-200'}`}>
              <div className="text-5xl font-bold text-gray-800">{score} / {MILESTONES.length}</div>
              <p className="text-gray-600 font-medium">
                {score >= 8
                  ? 'Excellent! You know your AI history.'
                  : score >= 5
                  ? 'Good effort! Check the correct order below.'
                  : 'Keep learning — the correct order is shown below.'}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-4 space-y-2">
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">The correct order</h2>
              {sortedCorrect.map((milestone, index) => {
                const userIndex = items.findIndex(m => m.id === milestone.id)
                const correct = userIndex === index
                return (
                  <div
                    key={milestone.id}
                    className={`rounded-xl p-4 border-2 ${correct ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full font-bold text-sm flex items-center justify-center ${correct ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                        {index + 1}
                      </div>
                      <span className="text-2xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: milestone.icon }} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-bold text-gray-800 text-sm">{milestone.title}</p>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${correct ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                            {milestone.year}
                          </span>
                          {!correct && (
                            <span className="text-xs text-gray-500">(you placed it #{userIndex + 1})</span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mt-1">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <button
              onClick={handleReset}
              className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl text-lg hover:bg-indigo-700 active:scale-95 transition-all"
            >
              Play again
            </button>
          </>
        )}
      </div>
    </div>
  )
}
