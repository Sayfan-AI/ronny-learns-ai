import { useState } from 'react'
import { Link } from '@tanstack/react-router'

interface Milestone {
  id: string
  title: string
  year: number
  description: string
}

const MILESTONES: Milestone[] = [
  {
    id: 'm1',
    title: 'Alan Turing proposes the Turing Test',
    year: 1950,
    description: 'In his paper "Computing Machinery and Intelligence", Turing asks "Can machines think?" and proposes what he calls the Imitation Game — a test for machine intelligence that is still discussed today.',
  },
  {
    id: 'm2',
    title: 'The term "artificial intelligence" is coined',
    year: 1956,
    description: 'John McCarthy coined the term "artificial intelligence" at the Dartmouth Conference, which is widely considered the founding event of AI as a field of research.',
  },
  {
    id: 'm3',
    title: 'Deep Blue beats Garry Kasparov at chess',
    year: 1997,
    description: 'IBM\'s Deep Blue defeated world chess champion Garry Kasparov in a six-game match — the first time a computer beat a reigning world chess champion under standard tournament conditions.',
  },
  {
    id: 'm4',
    title: 'Apple launches Siri',
    year: 2011,
    description: 'Siri, Apple\'s voice assistant, launched on the iPhone 4S. It was the first mainstream voice assistant, bringing AI into everyday consumer use and sparking a wave of competitors.',
  },
  {
    id: 'm5',
    title: 'AlphaGo beats Lee Sedol at Go',
    year: 2016,
    description: 'DeepMind\'s AlphaGo defeated world champion Lee Sedol at the ancient board game Go — a landmark moment because Go was thought to be too complex for computers to master for decades.',
  },
  {
    id: 'm6',
    title: 'GPT-3 is released by OpenAI',
    year: 2020,
    description: 'GPT-3, with 175 billion parameters, demonstrated that very large language models could write convincingly, answer questions, and complete code. It sparked widespread interest in large language models.',
  },
  {
    id: 'm7',
    title: 'AlphaFold solves protein structure prediction',
    year: 2021,
    description: 'DeepMind\'s AlphaFold 2 solved one of biology\'s hardest problems — predicting the 3D shape of proteins from their amino acid sequence. It has since predicted structures for nearly all known proteins, transforming drug discovery.',
  },
  {
    id: 'm8',
    title: 'DALL-E 2 and Stable Diffusion launch',
    year: 2022,
    description: 'AI image generation went mainstream in 2022. DALL-E 2 from OpenAI and Stable Diffusion (open source) let anyone create photorealistic images from text prompts, sparking debates about copyright and creativity.',
  },
  {
    id: 'm9',
    title: 'ChatGPT reaches 100 million users',
    year: 2023,
    description: 'ChatGPT, launched in November 2022, reached 100 million users in just two months — the fastest consumer product to do so. It brought large language models into mainstream public awareness.',
  },
  {
    id: 'm10',
    title: 'The EU AI Act becomes law',
    year: 2024,
    description: 'The EU AI Act — the world\'s first comprehensive AI law — was adopted in 2024. It classifies AI systems by risk level and places strict requirements on high-risk AI used in areas like healthcare, hiring, and critical infrastructure.',
  },
]

// Scrambled order for the game
const SCRAMBLED_ORDER = [6, 0, 9, 2, 7, 4, 1, 8, 3, 5]

type GameState = 'arranging' | 'submitted'

export function AITimeline() {
  const [orderedIds, setOrderedIds] = useState<string[]>(
    SCRAMBLED_ORDER.map(i => MILESTONES[i].id)
  )
  const [gameState, setGameState] = useState<GameState>('arranging')
  const [dragFrom, setDragFrom] = useState<number | null>(null)

  const correctOrder = [...MILESTONES].sort((a, b) => a.year - b.year).map(m => m.id)

  function handleDragStart(index: number) {
    setDragFrom(index)
  }

  function handleDrop(index: number) {
    if (dragFrom === null || dragFrom === index) return
    const newOrder = [...orderedIds]
    const [removed] = newOrder.splice(dragFrom, 1)
    newOrder.splice(index, 0, removed)
    setOrderedIds(newOrder)
    setDragFrom(null)
  }

  function moveUp(index: number) {
    if (index === 0) return
    const newOrder = [...orderedIds]
    ;[newOrder[index - 1], newOrder[index]] = [newOrder[index], newOrder[index - 1]]
    setOrderedIds(newOrder)
  }

  function moveDown(index: number) {
    if (index === orderedIds.length - 1) return
    const newOrder = [...orderedIds]
    ;[newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]]
    setOrderedIds(newOrder)
  }

  function handleSubmit() {
    setGameState('submitted')
  }

  function handleRestart() {
    setOrderedIds(SCRAMBLED_ORDER.map(i => MILESTONES[i].id))
    setGameState('arranging')
  }

  const milestoneMap = Object.fromEntries(MILESTONES.map(m => [m.id, m]))

  if (gameState === 'submitted') {
    let score = 0
    for (let i = 0; i < orderedIds.length; i++) {
      if (orderedIds[i] === correctOrder[i]) score++
    }

    let verdict: string
    let verdictColour: string
    if (score >= 8) {
      verdict = 'Excellent! You really know your AI history.'
      verdictColour = 'text-green-700 dark:text-green-400'
    } else if (score >= 5) {
      verdict = 'Good effort! A few dates to brush up on.'
      verdictColour = 'text-blue-700 dark:text-blue-400'
    } else {
      verdict = 'Keep exploring — there is a lot of AI history to discover!'
      verdictColour = 'text-orange-600 dark:text-orange-400'
    }

    return (
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Results</h1>
          <p className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">{score} / {MILESTONES.length}</p>
          <p className={`text-lg font-semibold ${verdictColour}`}>{verdict}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Milestones in the correct position</p>
        </div>

        <div className="space-y-3">
          {correctOrder.map((id, i) => {
            const m = milestoneMap[id]
            const playerPick = orderedIds[i]
            const correct = playerPick === id
            return (
              <div
                key={id}
                className={`rounded-2xl border p-4 space-y-1 ${
                  correct
                    ? 'border-green-300 bg-green-50 dark:bg-green-900/20 dark:border-green-700'
                    : 'border-red-300 bg-red-50 dark:bg-red-900/20 dark:border-red-700'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`mt-0.5 text-lg font-bold flex-shrink-0 ${correct ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {correct ? '\u2713' : '\u2717'}
                  </span>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      #{i + 1} &mdash; <span className="text-blue-600 dark:text-blue-400">{m.year}</span> &mdash; {m.title}
                    </p>
                    {!correct && (
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        You placed: {milestoneMap[playerPick].year} — {milestoneMap[playerPick].title}
                      </p>
                    )}
                    <p className="text-xs text-gray-600 dark:text-gray-400">{m.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={handleRestart}
            className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
          >
            Try again
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

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Timeline</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Put these 10 real AI milestones in the correct chronological order — earliest first. Use the up/down arrows to reorder them.
        </p>
      </div>

      <div className="space-y-2">
        {orderedIds.map((id, index) => {
          const m = milestoneMap[id]
          return (
            <div
              key={id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(index)}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex items-center gap-3 cursor-grab active:cursor-grabbing shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-gray-400 dark:text-gray-500 font-bold text-sm w-6 flex-shrink-0">{index + 1}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-snug">{m.title}</p>
              </div>
              <div className="flex flex-col gap-1 flex-shrink-0">
                <button
                  onClick={() => moveUp(index)}
                  disabled={index === 0}
                  className="w-7 h-7 flex items-center justify-center rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-gray-600 dark:text-gray-400 text-xs font-bold"
                  aria-label="Move up"
                >
                  &#x25B2;
                </button>
                <button
                  onClick={() => moveDown(index)}
                  disabled={index === orderedIds.length - 1}
                  className="w-7 h-7 flex items-center justify-center rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-gray-600 dark:text-gray-400 text-xs font-bold"
                  aria-label="Move down"
                >
                  &#x25BC;
                </button>
              </div>
            </div>
          )
        })}
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
      >
        Submit my order
      </button>

      <div className="text-center">
        <Link to="/" className="text-sm text-gray-500 dark:text-gray-400 hover:underline">
          Back to home
        </Link>
      </div>
    </div>
  )
}
