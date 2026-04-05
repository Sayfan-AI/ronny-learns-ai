import { useState } from 'react'

type Milestone = {
  id: string
  title: string
  year: number
  description: string
}

const MILESTONES: Milestone[] = [
  { id: 'm1', title: 'Alan Turing proposes the Turing Test', year: 1950, description: 'Turing\'s paper "Computing Machinery and Intelligence" introduced the imitation game as a test of machine intelligence, launching the philosophical debate about AI consciousness.' },
  { id: 'm2', title: 'The term "Artificial Intelligence" is coined', year: 1956, description: 'John McCarthy coined the term "artificial intelligence" at the Dartmouth Conference, which brought together the founding fathers of the field.' },
  { id: 'm3', title: 'IBM Deep Blue defeats Garry Kasparov at chess', year: 1997, description: 'Deep Blue became the first computer to defeat a reigning world chess champion in a match, using brute-force search and hand-coded chess knowledge.' },
  { id: 'm4', title: 'Google Brain trains a neural network to recognise cats', year: 2012, description: 'A Google Brain team used 16,000 CPU cores to train a neural network that could identify cats in YouTube videos without being told what a cat looks like — unsupervised learning at scale.' },
  { id: 'm5', title: 'AlphaGo defeats Lee Sedol at Go', year: 2016, description: 'DeepMind\'s AlphaGo beat world champion Lee Sedol 4-1, mastering a game considered too complex for AI. Move 37 in Game 2 was described by experts as a move no human would make.' },
  { id: 'm6', title: 'GPT-3 is released by OpenAI', year: 2020, description: 'OpenAI\'s GPT-3, with 175 billion parameters, showed that scaling language models produced surprisingly capable text generation — writing code, essays, and creative fiction.' },
  { id: 'm7', title: 'AlphaFold solves the protein folding problem', year: 2021, description: 'DeepMind\'s AlphaFold accurately predicted the 3D structure of nearly every known protein, solving a 50-year-old biology challenge with implications for drug discovery.' },
  { id: 'm8', title: 'DALL-E 2 and Midjourney bring AI image generation to the public', year: 2022, description: 'Text-to-image AI tools became available to millions of users, sparking debate about AI art, copyright, and the future of creative work.' },
  { id: 'm9', title: 'ChatGPT launches and reaches 100 million users in 2 months', year: 2022, description: 'OpenAI\'s ChatGPT became the fastest-growing consumer application in history, bringing conversational AI to mainstream awareness worldwide.' },
  { id: 'm10', title: 'GPT-4 is released, followed by Claude, Gemini, and Llama', year: 2023, description: '2023 saw a proliferation of capable large language models from multiple organisations — OpenAI, Anthropic, Google, and Meta — accelerating the AI arms race.' },
]

const SHUFFLED_MILESTONES = [...MILESTONES].sort(() => Math.random() - 0.5)

export function AITimeline() {
  const [ordering, setOrdering] = useState<string[]>(SHUFFLED_MILESTONES.map(m => m.id))
  const [submitted, setSubmitted] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const getById = (id: string) => MILESTONES.find(m => m.id === id)!

  function handleItemClick(id: string) {
    if (submitted) return
    if (!selectedId) {
      setSelectedId(id)
    } else if (selectedId === id) {
      setSelectedId(null)
    } else {
      // Swap the two selected items
      setOrdering(prev => {
        const a = prev.indexOf(selectedId)
        const b = prev.indexOf(id)
        const next = [...prev]
        next[a] = id
        next[b] = selectedId
        return next
      })
      setSelectedId(null)
    }
  }

  function getScore() {
    let correct = 0
    for (let i = 0; i < ordering.length; i++) {
      const milestone = getById(ordering[i])
      const correctMilestone = [...MILESTONES].sort((a, b) => a.year - b.year)[i]
      if (milestone.id === correctMilestone.id) correct++
    }
    return correct
  }

  const correctOrder = [...MILESTONES].sort((a, b) => a.year - b.year)
  const score = submitted ? getScore() : 0

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
        <div className="max-w-lg w-full space-y-6">
          <div className="text-center space-y-2">
            <div className="text-5xl">&#x23F3;</div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">AI Timeline</h1>
            <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{score} / {MILESTONES.length} in the right place</p>
          </div>

          <div className="space-y-3">
            {correctOrder.map((milestone, i) => {
              const yourChoice = getById(ordering[i])
              const wasCorrect = yourChoice.id === milestone.id
              return (
                <div key={milestone.id} className={`rounded-xl p-4 ${wasCorrect ? 'bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800'}`}>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-sm text-gray-500 dark:text-gray-400 flex-shrink-0 mt-0.5">#{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-800 dark:text-gray-100 text-sm">{milestone.year} — {milestone.title}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">{milestone.description}</p>
                      {!wasCorrect && (
                        <p className="text-red-600 dark:text-red-400 text-xs mt-1">You placed: {yourChoice.title} ({yourChoice.year})</p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <button
            onClick={() => { setOrdering(SHUFFLED_MILESTONES.map(m => m.id)); setSubmitted(false); setSelectedId(null) }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-lg w-full space-y-6">

        <div className="text-center space-y-2">
          <div className="text-5xl">&#x23F3;</div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">AI Timeline</h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Arrange these AI milestones in chronological order — earliest to latest.
            Tap two items to swap them.
          </p>
          {selectedId && <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">Selected: "{getById(selectedId).title}" — tap another to swap</p>}
        </div>

        <div className="space-y-2">
          {ordering.map((id, i) => {
            const milestone = getById(id)
            const isSelected = selectedId === id
            return (
              <button
                key={id}
                onClick={() => handleItemClick(id)}
                className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                    : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-400 dark:text-gray-500 flex-shrink-0 w-4">#{i + 1}</span>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{milestone.title}</p>
                </div>
              </button>
            )
          })}
        </div>

        <button
          onClick={() => setSubmitted(true)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors"
        >
          Check my order
        </button>
      </div>
    </div>
  )
}
