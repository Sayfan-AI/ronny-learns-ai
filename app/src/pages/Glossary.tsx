import { useState, useEffect, useCallback } from 'react'
import { useMarkVisited } from '../hooks/useMarkVisited'

interface GlossaryEntry {
  term: string
  definition: string
  lessonPath?: string
  lessonLabel?: string
}

const ENTRIES: GlossaryEntry[] = [
  {
    term: 'Agent',
    definition: 'A computer program that can take actions on its own to achieve a goal. In this project, AI agents write code, manage tasks, and communicate updates automatically.',
    lessonPath: '/learn/genesis-system',
    lessonLabel: 'Genesis system',
  },
  {
    term: 'Algorithm',
    definition: 'A step-by-step set of instructions that a computer follows to solve a problem or complete a task. All software is built from algorithms.',
  },
  {
    term: 'API (Application Programming Interface)',
    definition: 'A way for two pieces of software to talk to each other. Think of it like a waiter: you tell the waiter (API) what you want, and it fetches it from the kitchen (the other system) and brings it back.',
    lessonPath: '/learn/what-is-api',
    lessonLabel: 'What is an API?',
  },
  {
    term: 'Artificial Intelligence (AI)',
    definition: 'Computer systems that can do things that normally require human intelligence — like understanding language, recognising images, or making decisions.',
    lessonPath: '/learn/what-is-ai',
    lessonLabel: 'What is AI?',
  },
  {
    term: 'Bias (AI)',
    definition: 'When an AI system produces unfair or skewed results because its training data reflected existing inequalities or was not representative of all groups.',
  },
  {
    term: 'CI/CD (Continuous Integration / Continuous Deployment)',
    definition: 'An automated system that tests and publishes software every time a change is made, so updates reach users quickly and reliably.',
    lessonPath: '/learn/what-is-ci-cd',
    lessonLabel: 'What is CI/CD?',
  },
  {
    term: 'Context window',
    definition: 'The amount of text a language model can "see" at once. Everything outside the context window is invisible to the model during that conversation.',
    lessonPath: '/learn/language-models',
    lessonLabel: 'Language models',
  },
  {
    term: 'Deep learning',
    definition: 'A type of machine learning that uses neural networks with many layers. Deep learning is responsible for most of the dramatic AI advances of the last decade.',
    lessonPath: '/learn/neural-network',
    lessonLabel: 'Neural networks',
  },
  {
    term: 'Generative AI',
    definition: 'AI that can create new content — text, images, music, code, or video — rather than simply classifying or analysing existing content.',
  },
  {
    term: 'GitHub',
    definition: 'A website where developers store code, track changes, and collaborate. Every change is logged so nothing is ever accidentally lost.',
    lessonPath: '/learn/github-basics',
    lessonLabel: 'GitHub basics',
  },
  {
    term: 'Hallucination',
    definition: 'When a language model confidently states something that is factually wrong. Models do not know what they do not know, so they sometimes make things up.',
    lessonPath: '/learn/language-models',
    lessonLabel: 'Language models',
  },
  {
    term: 'Inference',
    definition: 'Using a trained AI model to produce a result. When you ask Claude a question and it replies, that is inference — the model applying what it learned during training.',
  },
  {
    term: 'Language model',
    definition: 'An AI trained to predict the next word in a sequence. Given enough training, language models become capable of writing, reasoning, and conversation.',
    lessonPath: '/learn/language-models',
    lessonLabel: 'Language models',
  },
  {
    term: 'Machine learning',
    definition: 'A way of building AI systems where the computer learns patterns from examples rather than being given explicit rules. More data generally means a better model.',
    lessonPath: '/learn/what-is-machine-learning',
    lessonLabel: 'Machine learning',
  },
  {
    term: 'Model',
    definition: 'The result of training an AI on data — a mathematical structure that can make predictions or generate content. "Model" and "AI" are often used interchangeably in practice.',
  },
  {
    term: 'Natural Language Processing (NLP)',
    definition: 'The branch of AI focused on understanding and generating human language. It powers chatbots, translation, voice assistants, and spam filters.',
  },
  {
    term: 'Neural network',
    definition: 'A system of connected mathematical units (neurons) arranged in layers. Each unit receives inputs, processes them, and passes a result to the next layer. Very loosely inspired by the human brain.',
    lessonPath: '/learn/neural-network',
    lessonLabel: 'Neural networks',
  },
  {
    term: 'Overfitting',
    definition: 'When a model learns the training data too precisely and fails to generalise. Like a student who memorises answers to past exam questions but cannot handle new ones.',
  },
  {
    term: 'Parameter',
    definition: 'A number inside a neural network that is adjusted during training. Large language models can have billions or trillions of parameters. More parameters generally means more capability — but also more computing power needed.',
  },
  {
    term: 'Prompt',
    definition: 'The text you send to an AI model as input. How you phrase a prompt strongly affects the quality and style of the response you get back.',
  },
  {
    term: 'Reinforcement learning',
    definition: 'A type of machine learning where an AI learns by trial and error, receiving rewards for good actions and penalties for bad ones. Used to train game-playing AIs and robots.',
    lessonPath: '/learn/what-is-machine-learning',
    lessonLabel: 'Machine learning',
  },
  {
    term: 'Supervised learning',
    definition: 'Training a model on labelled examples where the correct answer is already known. Like a practice test with an answer key. Most practical machine learning is supervised.',
    lessonPath: '/learn/what-is-machine-learning',
    lessonLabel: 'Machine learning',
  },
  {
    term: 'Token',
    definition: 'The basic unit a language model works with — roughly a word or part of a word. "Fantastic" might become two tokens: "fan" and "tastic". Models read and write in tokens, not letters or words.',
    lessonPath: '/learn/language-models',
    lessonLabel: 'Language models',
  },
  {
    term: 'Training data',
    definition: 'The examples an AI model learns from. The quality, diversity, and size of training data strongly determines what the model can do and what biases it might have.',
  },
  {
    term: 'Turing test',
    definition: 'A test proposed by Alan Turing in 1950: if a human cannot tell whether they are talking to a machine or another human, the machine can be said to be "intelligent".',
    lessonPath: '/ai-history',
    lessonLabel: 'AI history',
  },
  {
    term: 'Unsupervised learning',
    definition: 'Training a model on data without labels. The model finds structure or patterns on its own. Used for clustering customers, detecting anomalies, and compressing data.',
    lessonPath: '/learn/what-is-machine-learning',
    lessonLabel: 'Machine learning',
  },
  {
    term: 'Version control',
    definition: 'A system for tracking changes to files over time, so you can see who changed what, when, and why — and go back to any previous version.',
    lessonPath: '/learn/what-is-version-control',
    lessonLabel: 'Version control',
  },
  {
    term: 'Weight',
    definition: 'A number inside a neural network that determines how important a particular input is. Training is the process of finding the right weights through millions of adjustments.',
    lessonPath: '/learn/neural-network',
    lessonLabel: 'Neural networks',
  },
]

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function FlashcardMode({ onExit }: { onExit: () => void }) {
  const [deck] = useState<GlossaryEntry[]>(() => shuffleArray(ENTRIES))
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)

  const current = deck[index]

  const handleReveal = useCallback(() => setRevealed(true), [])

  const handlePrev = useCallback(() => {
    setIndex(i => Math.max(0, i - 1))
    setRevealed(false)
  }, [])

  const handleNext = useCallback(() => {
    setIndex(i => Math.min(deck.length - 1, i + 1))
    setRevealed(false)
  }, [deck.length])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        if (!revealed) {
          handleReveal()
        } else {
          handleNext()
        }
      } else if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === 'Escape') {
        onExit()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [revealed, handleReveal, handleNext, handlePrev, onExit])

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">&#x1F9E0; Flashcard mode</h1>
          <button
            onClick={onExit}
            className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold transition-colors"
          >
            &#x2715; Exit flashcards
          </button>
        </div>

        <p className="text-gray-500 text-sm text-center">
          Term {index + 1} of {deck.length}
        </p>

        {/* Progress bar */}
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div
            className="bg-violet-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((index + 1) / deck.length) * 100}%` }}
          />
        </div>

        {/* Card */}
        <div
          className="bg-white rounded-2xl shadow-md border border-violet-100 p-8 min-h-[260px] flex flex-col items-center justify-center text-center space-y-6 cursor-pointer select-none"
          onClick={!revealed ? handleReveal : undefined}
          role="button"
          tabIndex={0}
          aria-label={revealed ? `Definition: ${current.definition}` : `Term: ${current.term}. Click to reveal definition.`}
          onKeyDown={e => { if (e.key === 'Enter' && !revealed) handleReveal() }}
        >
          <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest">
            {revealed ? 'Definition' : 'Term'}
          </p>
          {!revealed ? (
            <h2 className="text-3xl font-bold text-gray-800">{current.term}</h2>
          ) : (
            <>
              <h2 className="text-xl font-bold text-violet-700">{current.term}</h2>
              <p className="text-gray-700 text-base leading-relaxed">{current.definition}</p>
              {current.lessonPath && (
                <a
                  href={`#${current.lessonPath}`}
                  className="text-sm text-violet-600 hover:text-violet-800 underline"
                  onClick={e => e.stopPropagation()}
                >
                  {current.lessonLabel} &rarr;
                </a>
              )}
            </>
          )}
          {!revealed && (
            <p className="text-gray-400 text-sm">Tap to reveal definition</p>
          )}
        </div>

        {/* Controls */}
        {!revealed ? (
          <div className="flex justify-center">
            <button
              onClick={handleReveal}
              className="px-8 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-colors min-h-[44px]"
            >
              Reveal definition
            </button>
          </div>
        ) : (
          <div className="flex justify-between gap-4">
            <button
              onClick={handlePrev}
              disabled={index === 0}
              className="flex-1 px-4 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed text-gray-700 font-semibold text-sm transition-colors min-h-[44px]"
            >
              &larr; Previous
            </button>
            <button
              onClick={handleNext}
              disabled={index === deck.length - 1}
              className="flex-1 px-4 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold text-sm transition-colors min-h-[44px]"
            >
              Next &rarr;
            </button>
          </div>
        )}

        <p className="text-center text-gray-400 text-xs">
          Keyboard: Space or &rarr; to advance &middot; &larr; for previous &middot; Esc to exit
        </p>
      </div>
    </div>
  )
}

export function Glossary() {
  useMarkVisited('glossary')
  const [search, setSearch] = useState('')
  const [flashcardMode, setFlashcardMode] = useState(false)

  const filtered = ENTRIES.filter(
    e =>
      e.term.toLowerCase().includes(search.toLowerCase()) ||
      e.definition.toLowerCase().includes(search.toLowerCase())
  )

  if (flashcardMode) {
    return <FlashcardMode onExit={() => setFlashcardMode(false)} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4D6;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI glossary
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Plain-language definitions for every term used across the lessons.
            Search for any word below.
          </p>
          <button
            onClick={() => setFlashcardMode(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm transition-colors min-h-[44px]"
          >
            <span>&#x1F9E0;</span> Flashcard mode
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">&#x1F50D;</span>
          <input
            type="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search terms and definitions..."
            aria-label="Search glossary terms and definitions"
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-300 shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-violet-400 bg-white"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl"
              aria-label="Clear search"
            >
              &times;
            </button>
          )}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500 text-lg">
            No terms match &ldquo;{search}&rdquo;. Try a different word.
          </div>
        )}

        {/* Entries */}
        <div className="space-y-4">
          {filtered.map(entry => (
            <div key={entry.term} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-2">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h2 className="text-xl font-bold text-gray-800">{entry.term}</h2>
                {entry.lessonPath && (
                  <a
                    href={`#${entry.lessonPath}`}
                    className="text-sm text-violet-600 hover:text-violet-800 underline flex-shrink-0"
                  >
                    {entry.lessonLabel} &rarr;
                  </a>
                )}
              </div>
              <p className="text-gray-600 text-base leading-relaxed">{entry.definition}</p>
            </div>
          ))}
        </div>

        <div className="text-center text-gray-500 text-sm pt-4">
          {filtered.length} of {ENTRIES.length} terms shown
        </div>

        <div className="text-center">
          <a
            href="#/"
            className="inline-block text-blue-600 hover:text-blue-800 text-lg font-medium underline"
          >
            &larr; Back to home
          </a>
        </div>
      </div>
    </div>
  )
}
