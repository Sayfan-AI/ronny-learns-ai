import { useState } from 'react'

type Milestone = {
  id: string
  label: string
  year: number
  explanation: string
}

const MILESTONES: Milestone[] = [
  {
    id: 'm1',
    label: 'Alan Turing publishes "Computing Machinery and Intelligence", proposing the Turing Test',
    year: 1950,
    explanation: '1950 — Alan Turing\'s paper asked "Can machines think?" and proposed a test: could a machine fool a human into thinking they were talking to another human? The Turing Test remains a touchstone for discussions about AI today.',
  },
  {
    id: 'm2',
    label: 'The Dartmouth Conference coins the term "artificial intelligence"',
    year: 1956,
    explanation: '1956 — John McCarthy, Marvin Minsky, and colleagues held a summer workshop at Dartmouth College. McCarthy coined the phrase "artificial intelligence" here — the birth of AI as a formal academic discipline.',
  },
  {
    id: 'm3',
    label: 'Deep Blue defeats world chess champion Garry Kasparov',
    year: 1997,
    explanation: "1997 — IBM's Deep Blue became the first computer to beat a reigning world chess champion in a formal match. It was a landmark moment that sparked widespread debate about machine intelligence.",
  },
  {
    id: 'm4',
    label: 'ImageNet challenge launches, sparking the deep learning revolution',
    year: 2010,
    explanation: '2010 — The ImageNet Large Scale Visual Recognition Challenge began. In 2012, a deep learning model called AlexNet dramatically outperformed all other approaches, triggering the deep learning era we are still in today.',
  },
  {
    id: 'm5',
    label: 'AlphaGo defeats world Go champion Lee Sedol',
    year: 2016,
    explanation: "2016 — Google DeepMind's AlphaGo defeated Lee Sedol, one of the world's best Go players. Unlike chess, Go has more possible positions than atoms in the universe — AlphaGo's victory was considered a decade ahead of expectations.",
  },
  {
    id: 'm6',
    label: 'GPT-2 released by OpenAI — so capable OpenAI initially withheld it',
    year: 2019,
    explanation: "2019 — OpenAI's GPT-2 could generate convincingly human-like text. OpenAI controversially staged its release, initially withholding the full model over concerns it would be misused to generate misinformation at scale.",
  },
  {
    id: 'm7',
    label: 'GPT-3 launched — 175 billion parameters, a step-change in language AI',
    year: 2020,
    explanation: '2020 — GPT-3 showed that scaling language models produced qualitatively better results. With 175 billion parameters, it could write code, essays, poetry, and hold conversations with impressive fluency, inspiring a wave of AI applications.',
  },
  {
    id: 'm8',
    label: 'AlphaFold 2 solves the protein folding problem — a breakthrough for biology',
    year: 2021,
    explanation: "2021 — Google DeepMind's AlphaFold 2 accurately predicted the 3D structure of virtually every known protein — a problem that had stumped biologists for 50 years. It accelerated drug discovery and won its creators the Nobel Prize in Chemistry in 2024.",
  },
  {
    id: 'm9',
    label: 'ChatGPT launches and reaches 100 million users in two months',
    year: 2022,
    explanation: '2022 — OpenAI released ChatGPT in November. It became the fastest-growing consumer application in history, reaching 100 million users in just two months. It brought AI into everyday life in a way nothing had before.',
  },
  {
    id: 'm10',
    label: 'GPT-4 released — multimodal AI that can understand both text and images',
    year: 2023,
    explanation: '2023 — GPT-4 introduced multimodal capability: understanding both text and images. It passed bar exams, medical licensing tests, and scored in the top percentiles on standardised academic tests, marking another step-change in AI capability.',
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

function getScore(order: string[], correct: Milestone[]): number {
  let score = 0
  order.forEach((id, i) => {
    if (id === correct[i].id) score++
  })
  return score
}

export function AITimeline() {
  const [items, setItems] = useState<Milestone[]>(() => shuffle([...MILESTONES]))
  const [submitted, setSubmitted] = useState(false)
  const [draggedId, setDraggedId] = useState<string | null>(null)
  const [dragOverId, setDragOverId] = useState<string | null>(null)

  const correctOrder = [...MILESTONES].sort((a, b) => a.year - b.year)

  function handleDragStart(id: string) {
    setDraggedId(id)
  }

  function handleDragOver(e: React.DragEvent, id: string) {
    e.preventDefault()
    setDragOverId(id)
  }

  function handleDrop(e: React.DragEvent, targetId: string) {
    e.preventDefault()
    if (!draggedId || draggedId === targetId) {
      setDraggedId(null)
      setDragOverId(null)
      return
    }
    setItems((prev) => {
      const fromIndex = prev.findIndex((m) => m.id === draggedId)
      const toIndex = prev.findIndex((m) => m.id === targetId)
      const next = [...prev]
      const [moved] = next.splice(fromIndex, 1)
      next.splice(toIndex, 0, moved)
      return next
    })
    setDraggedId(null)
    setDragOverId(null)
  }

  function handleDragEnd() {
    setDraggedId(null)
    setDragOverId(null)
  }

  function moveUp(index: number) {
    if (index === 0) return
    setItems((prev) => {
      const next = [...prev]
      ;[next[index - 1], next[index]] = [next[index], next[index - 1]]
      return next
    })
  }

  function moveDown(index: number) {
    if (index === items.length - 1) return
    setItems((prev) => {
      const next = [...prev]
      ;[next[index], next[index + 1]] = [next[index + 1], next[index]]
      return next
    })
  }

  function handleSubmit() {
    setSubmitted(true)
  }

  function handleRestart() {
    setItems(shuffle([...MILESTONES]))
    setSubmitted(false)
  }

  const score = submitted ? getScore(items.map((m) => m.id), correctOrder) : 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-6">

        <div className="text-center space-y-2">
          <div className="text-5xl">&#x23F3;</div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">AI Timeline</h1>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            Place these 10 real AI milestones in the correct chronological order — earliest at the top, most recent at the bottom.
          </p>
          {!submitted && (
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              Drag to reorder, or use the up/down arrows.
            </p>
          )}
        </div>

        {submitted && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-cyan-100 dark:border-cyan-900 p-5 text-center space-y-2">
            <p className="text-xl font-bold text-gray-800 dark:text-gray-100">
              You got <span className="text-cyan-600 dark:text-cyan-400">{score} / {MILESTONES.length}</span> in the correct position
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {score === MILESTONES.length
                ? 'Perfect score — you know your AI history!'
                : score >= 7
                ? 'Great effort! Check the correct years below.'
                : 'Nice try — read the explanations to fill in the gaps.'}
            </p>
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-5 py-2 rounded-xl transition-colors text-sm mt-1"
            >
              &#x1F504; Try again
            </button>
          </div>
        )}

        <div className="space-y-2">
          {items.map((milestone, index) => {
            const correctIndex = correctOrder.findIndex((m) => m.id === milestone.id)
            const isCorrect = submitted && index === correctIndex
            const isWrong = submitted && index !== correctIndex
            const isDragging = draggedId === milestone.id
            const isDragTarget = dragOverId === milestone.id

            let cardColor = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
            if (isCorrect) cardColor = 'bg-green-50 dark:bg-green-950 border-green-300 dark:border-green-700'
            if (isWrong) cardColor = 'bg-red-50 dark:bg-red-950 border-red-300 dark:border-red-700'
            if (isDragTarget) cardColor = 'bg-cyan-50 dark:bg-cyan-950 border-cyan-300 dark:border-cyan-700 ring-2 ring-cyan-400'

            return (
              <div key={milestone.id} className="space-y-1">
                <div
                  draggable={!submitted}
                  onDragStart={() => handleDragStart(milestone.id)}
                  onDragOver={(e) => handleDragOver(e, milestone.id)}
                  onDrop={(e) => handleDrop(e, milestone.id)}
                  onDragEnd={handleDragEnd}
                  className={`border-2 rounded-xl p-3 transition-all ${cardColor} ${isDragging ? 'opacity-50' : ''} ${!submitted ? 'cursor-grab active:cursor-grabbing' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex flex-col gap-0.5 flex-shrink-0">
                      {!submitted && (
                        <>
                          <button
                            onClick={() => moveUp(index)}
                            disabled={index === 0}
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 disabled:opacity-20 text-xs leading-none p-0.5"
                            aria-label="Move up"
                          >
                            &#x25B2;
                          </button>
                          <button
                            onClick={() => moveDown(index)}
                            disabled={index === items.length - 1}
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 disabled:opacity-20 text-xs leading-none p-0.5"
                            aria-label="Move down"
                          >
                            &#x25BC;
                          </button>
                        </>
                      )}
                      {submitted && (
                        <span className="text-lg">
                          {isCorrect ? '&#x2705;' : '&#x274C;'}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2">
                        <span className="flex-shrink-0 text-cyan-600 dark:text-cyan-400 font-bold text-sm mt-0.5">{index + 1}.</span>
                        <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">{milestone.label}</p>
                      </div>
                      {submitted && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-5 leading-relaxed">{milestone.explanation}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {!submitted && (
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Check my order
            </button>
          </div>
        )}

        {submitted && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-cyan-100 dark:border-cyan-900 p-5 space-y-3">
            <h2 className="font-bold text-gray-800 dark:text-gray-100">The correct order</h2>
            <div className="space-y-1">
              {correctOrder.map((m, i) => (
                <div key={m.id} className="flex gap-2 items-start text-sm">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold flex-shrink-0">{i + 1}.</span>
                  <p className="text-gray-600 dark:text-gray-300">{m.year} — {m.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <a href="#/" className="text-cyan-600 dark:text-cyan-400 text-sm hover:underline">
            Back to home
          </a>
        </div>

      </div>
    </div>
  )
}
