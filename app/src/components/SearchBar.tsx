import { useState, useRef, useEffect } from 'react'
import { Link } from '@tanstack/react-router'

interface SearchItem {
  type: 'lesson' | 'glossary'
  title: string
  description: string
  to: string
}

const SEARCH_INDEX: SearchItem[] = [
  // Lessons
  { type: 'lesson', title: 'Create your GitHub account', description: 'Step-by-step guide to signing up for GitHub.', to: '/tutorial/github-signup' },
  { type: 'lesson', title: 'What is GitHub for?', description: 'Repos, commits, issues, and pull requests explained simply.', to: '/learn/github-basics' },
  { type: 'lesson', title: 'What is AI?', description: 'Artificial intelligence explained without jargon.', to: '/learn/what-is-ai' },
  { type: 'lesson', title: 'What is machine learning?', description: 'How computers learn from examples instead of rules.', to: '/learn/what-is-machine-learning' },
  { type: 'lesson', title: 'How does AI training work?', description: 'What actually happens when an AI model is trained.', to: '/learn/how-ai-training-works' },
  { type: 'lesson', title: 'What is a neural network?', description: 'Layers, neurons, and how deep learning works.', to: '/learn/neural-network' },
  { type: 'lesson', title: 'How do language models work?', description: 'Tokens, context, and how Claude generates text.', to: '/learn/language-models' },
  { type: 'lesson', title: 'What is an API?', description: 'How two pieces of software talk to each other.', to: '/learn/what-is-api' },
  { type: 'lesson', title: 'What is the Genesis system?', description: 'The AI-powered dev loop that built this app.', to: '/learn/genesis-system' },
  { type: 'lesson', title: 'How this app was built', description: 'An AI system built this entire website, autonomously.', to: '/learn/how-this-was-built' },
  { type: 'lesson', title: 'How does the website update automatically?', description: 'CI/CD explained in plain language.', to: '/learn/what-is-ci-cd' },
  { type: 'lesson', title: 'Version control', description: 'How developers track changes without losing work.', to: '/learn/what-is-version-control' },
  { type: 'lesson', title: 'What is a pull request?', description: 'How code changes are proposed and reviewed.', to: '/learn/what-is-a-pull-request' },
  { type: 'lesson', title: 'Meet the AI agents', description: 'The specialist AI agents that run this project.', to: '/agents' },
  { type: 'lesson', title: 'AI history timeline', description: 'Key moments in AI from the 1950s to today.', to: '/ai-history' },
  { type: 'lesson', title: 'AI in everyday life', description: 'Where you already encounter AI without realising it.', to: '/learn/ai-everyday-life' },
  { type: 'lesson', title: 'AI pros and cons', description: 'Benefits and risks of AI, explained honestly.', to: '/learn/ai-pros-and-cons' },
  { type: 'lesson', title: 'Glossary', description: 'Plain-English definitions for every AI term.', to: '/glossary' },
  { type: 'lesson', title: 'Learning recap', description: 'A visual overview of everything you have learned.', to: '/learning-recap' },
  { type: 'lesson', title: 'Ask a question', description: 'Get a plain-language answer to any question about AI.', to: '/ask' },
  { type: 'lesson', title: 'My progress', description: 'See which modules you have visited and how far you have come.', to: '/my-progress' },
  // Glossary entries
  { type: 'glossary', title: 'Agent', description: 'A computer program that can take actions on its own to achieve a goal.', to: '/glossary' },
  { type: 'glossary', title: 'Algorithm', description: 'A step-by-step set of instructions that a computer follows to solve a problem.', to: '/glossary' },
  { type: 'glossary', title: 'API', description: 'A way for two pieces of software to talk to each other.', to: '/learn/what-is-api' },
  { type: 'glossary', title: 'Artificial Intelligence', description: 'Computer systems that can do things that normally require human intelligence.', to: '/learn/what-is-ai' },
  { type: 'glossary', title: 'Bias', description: 'When an AI system produces unfair or skewed results due to its training data.', to: '/glossary' },
  { type: 'glossary', title: 'CI/CD', description: 'An automated system that tests and publishes software every time a change is made.', to: '/learn/what-is-ci-cd' },
  { type: 'glossary', title: 'Context window', description: 'The amount of text a language model can see at once.', to: '/learn/language-models' },
  { type: 'glossary', title: 'Deep learning', description: 'A type of machine learning that uses neural networks with many layers.', to: '/learn/neural-network' },
  { type: 'glossary', title: 'Generative AI', description: 'AI that can create new content such as text, images, music, or video.', to: '/glossary' },
  { type: 'glossary', title: 'Hallucination', description: 'When a language model confidently states something that is factually wrong.', to: '/learn/language-models' },
  { type: 'glossary', title: 'Inference', description: 'Using a trained AI model to produce a result.', to: '/glossary' },
  { type: 'glossary', title: 'Language model', description: 'An AI trained to predict the next word in a sequence.', to: '/learn/language-models' },
  { type: 'glossary', title: 'Machine learning', description: 'A way of building AI where the computer learns from examples rather than rules.', to: '/learn/what-is-machine-learning' },
  { type: 'glossary', title: 'Model', description: 'The result of training an AI on data.', to: '/glossary' },
  { type: 'glossary', title: 'Neural network', description: 'A system of connected mathematical units arranged in layers, loosely inspired by the brain.', to: '/learn/neural-network' },
  { type: 'glossary', title: 'Parameter', description: 'A number inside a neural network that is adjusted during training.', to: '/glossary' },
  { type: 'glossary', title: 'Prompt', description: 'The text you send to an AI model as input.', to: '/glossary' },
  { type: 'glossary', title: 'Token', description: 'The basic unit a language model works with, roughly a word or part of a word.', to: '/learn/language-models' },
  { type: 'glossary', title: 'Training data', description: 'The examples an AI model learns from.', to: '/glossary' },
  { type: 'glossary', title: 'Turing test', description: 'A test to determine whether a machine can exhibit intelligent behaviour.', to: '/ai-history' },
  { type: 'glossary', title: 'Version control', description: 'A system for tracking changes to files over time.', to: '/learn/what-is-version-control' },
  { type: 'glossary', title: 'Weight', description: 'A number inside a neural network that determines how important a particular input is.', to: '/learn/neural-network' },
]

function matches(item: SearchItem, query: string): boolean {
  const q = query.toLowerCase()
  return (
    item.title.toLowerCase().includes(q) ||
    item.description.toLowerCase().includes(q)
  )
}

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const results = query.trim().length >= 2
    ? SEARCH_INDEX.filter(item => matches(item, query.trim())).slice(0, 8)
    : []

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
    setOpen(true)
  }

  function handleClear() {
    setQuery('')
    setOpen(false)
  }

  const lessons = results.filter(r => r.type === 'lesson')
  const glossaryItems = results.filter(r => r.type === 'glossary')
  const showResults = open && query.trim().length >= 2

  return (
    <div ref={containerRef} className="relative w-full">
      <label htmlFor="site-search" className="sr-only">Search lessons and glossary</label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" aria-hidden="true">
          &#x1F50D;
        </span>
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={handleChange}
          onFocus={() => setOpen(true)}
          placeholder="Search lessons and glossary terms..."
          autoComplete="off"
          className="w-full pl-11 pr-10 py-3 rounded-2xl border border-gray-300 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          aria-label="Search lessons and glossary terms"
          aria-expanded={showResults}
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl"
            aria-label="Clear search"
          >
            &times;
          </button>
        )}
      </div>

      {showResults && (
        <div
          id="search-results"
          role="listbox"
          aria-label="Search results"
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg border border-gray-200 z-50 overflow-hidden"
        >
          {results.length === 0 ? (
            <div className="px-5 py-4 text-gray-500 text-sm">
              No lessons or terms match that word — try something else.
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {lessons.length > 0 && (
                <div>
                  <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide bg-gray-50">
                    Lessons
                  </p>
                  {lessons.map(item => (
                    <Link
                      key={item.to + item.title}
                      to={item.to}
                      role="option"
                      aria-selected={false}
                      onClick={() => { setQuery(''); setOpen(false) }}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors"
                    >
                      <span className="text-xl flex-shrink-0">&#x1F4DA;</span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-gray-800 truncate">{item.title}</p>
                        <p className="text-xs text-gray-500 truncate">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              {glossaryItems.length > 0 && (
                <div>
                  <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide bg-gray-50">
                    Glossary
                  </p>
                  {glossaryItems.map(item => (
                    <Link
                      key={item.title}
                      to={item.to}
                      role="option"
                      aria-selected={false}
                      onClick={() => { setQuery(''); setOpen(false) }}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-violet-50 transition-colors"
                    >
                      <span className="text-xl flex-shrink-0">&#x1F4D6;</span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-gray-800 truncate">{item.title}</p>
                        <p className="text-xs text-gray-500 truncate">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
