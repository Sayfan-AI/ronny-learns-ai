import { useState, useCallback } from 'react'
import { Link } from '@tanstack/react-router'

interface SortItem {
  id: string
  label: string
  correctCategory: string
}

interface Round {
  title: string
  instruction: string
  categories: { id: string; label: string; description: string }[]
  items: SortItem[]
}

const ROUNDS: Round[] = [
  {
    title: 'Round 1: Types of AI',
    instruction: 'Sort these AI systems into the correct type.',
    categories: [
      { id: 'language', label: 'Language AI', description: 'Processes and generates text or speech' },
      { id: 'vision', label: 'Vision AI', description: 'Analyses or generates images and video' },
      { id: 'decision', label: 'Decision AI', description: 'Makes predictions or recommendations from data' },
    ],
    items: [
      { id: '1', label: 'ChatGPT writing an essay', correctCategory: 'language' },
      { id: '2', label: 'Midjourney creating an image', correctCategory: 'vision' },
      { id: '3', label: 'Netflix recommending a film', correctCategory: 'decision' },
      { id: '4', label: 'Google Translate', correctCategory: 'language' },
      { id: '5', label: 'Facial recognition at passport control', correctCategory: 'vision' },
      { id: '6', label: 'A credit score algorithm', correctCategory: 'decision' },
    ],
  },
  {
    title: 'Round 2: AI benefits and risks',
    instruction: 'Sort these statements into benefits or risks of AI.',
    categories: [
      { id: 'benefit', label: 'Benefit', description: 'Something AI does that helps people' },
      { id: 'risk', label: 'Risk', description: 'A concern or potential harm from AI' },
    ],
    items: [
      { id: '1', label: 'AI can detect cancer in scans earlier than human radiologists', correctCategory: 'benefit' },
      { id: '2', label: 'AI can generate convincing fake news articles at scale', correctCategory: 'risk' },
      { id: '3', label: 'AI translates languages in real time, helping people communicate', correctCategory: 'benefit' },
      { id: '4', label: 'AI can amplify bias from historical data, discriminating against protected groups', correctCategory: 'risk' },
      { id: '5', label: 'AI can assist people with disabilities to communicate and navigate the world', correctCategory: 'benefit' },
      { id: '6', label: 'AI systems can be used for mass surveillance', correctCategory: 'risk' },
    ],
  },
  {
    title: 'Round 3: AI in UK life',
    instruction: 'Sort each example into the right area of UK life where AI is being used.',
    categories: [
      { id: 'health', label: 'Health', description: 'NHS and healthcare' },
      { id: 'law', label: 'Law and justice', description: 'Courts, policing, criminal justice' },
      { id: 'work', label: 'Work and business', description: 'Jobs, employment, companies' },
    ],
    items: [
      { id: '1', label: 'OASys risk assessment for probation', correctCategory: 'law' },
      { id: '2', label: 'AI reading retinal scans at Moorfields Eye Hospital', correctCategory: 'health' },
      { id: '3', label: 'CVs screened by AI before a human sees them', correctCategory: 'work' },
      { id: '4', label: 'Facial recognition cameras on a London street', correctCategory: 'law' },
      { id: '5', label: 'AI detecting early signs of sepsis in ICU patients', correctCategory: 'health' },
      { id: '6', label: 'AI chatbot handling customer complaints for a UK bank', correctCategory: 'work' },
    ],
  },
]

export function SortItOut() {
  const [round, setRound] = useState(0)
  const [sorted, setSorted] = useState<Record<string, string>>({}) // itemId -> categoryId
  const [checked, setChecked] = useState(false)
  const [finished, setFinished] = useState(false)
  const [totalScore, setTotalScore] = useState(0)
  const [dragging, setDragging] = useState<string | null>(null)

  const currentRound = ROUNDS[round]

  const unsortedItems = currentRound.items.filter(item => !sorted[item.id])
  const correctCount = checked ? currentRound.items.filter(item => sorted[item.id] === item.correctCategory).length : 0

  function handleDragStart(itemId: string) {
    setDragging(itemId)
  }

  function handleDrop(categoryId: string) {
    if (!dragging) return
    setSorted(prev => ({ ...prev, [dragging]: categoryId }))
    setDragging(null)
  }

  function handleRemoveFromCategory(itemId: string) {
    if (checked) return
    setSorted(prev => {
      const next = { ...prev }
      delete next[itemId]
      return next
    })
  }

  function handleCheck() {
    setChecked(true)
    const correct = currentRound.items.filter(item => sorted[item.id] === item.correctCategory).length
    setTotalScore(s => s + correct)
  }

  function handleNext() {
    if (round + 1 >= ROUNDS.length) {
      setFinished(true)
    } else {
      setRound(r => r + 1)
      setSorted({})
      setChecked(false)
    }
  }

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
  }, [])

  function handleRestart() {
    setRound(0)
    setSorted({})
    setChecked(false)
    setFinished(false)
    setTotalScore(0)
  }

  const totalPossible = ROUNDS.reduce((sum, r) => sum + r.items.length, 0)

  if (finished) {
    const pct = Math.round((totalScore / totalPossible) * 100)
    const grade = pct >= 90 ? 'Sorting expert!' : pct >= 70 ? 'Well sorted!' : pct >= 50 ? 'Getting there!' : 'Keep practising!'
    return (
      <div className="min-h-screen bg-gradient-to-b from-fuchsia-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
        <div className="max-w-xl w-full">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 text-center space-y-4">
            <p className="text-5xl">&#x1F4E6;</p>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{grade}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              You sorted <span className="font-bold text-fuchsia-600 dark:text-fuchsia-400">{totalScore} out of {totalPossible}</span> items correctly ({pct}%)
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button onClick={handleRestart} className="px-5 py-2.5 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold rounded-xl transition-colors">Play again</button>
              <Link to="/" className="px-5 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-xl transition-colors text-center">Back to home</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-fuchsia-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-6">

        <div className="text-center space-y-2">
          <p className="text-4xl">&#x1F4E6;</p>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Sort it out</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Round {round + 1} of {ROUNDS.length}</p>
          <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-fuchsia-500 rounded-full transition-all duration-300" style={{ width: `${(round / ROUNDS.length) * 100}%` }} />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5 space-y-2">
          <p className="font-bold text-gray-800 dark:text-gray-100">{currentRound.title}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{currentRound.instruction}</p>
        </div>

        {/* Items to sort */}
        {unsortedItems.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5 space-y-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Drag these into the boxes below</p>
            <div className="flex flex-wrap gap-2">
              {unsortedItems.map(item => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={() => handleDragStart(item.id)}
                  className="px-3 py-2 bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-800 dark:text-fuchsia-300 rounded-lg text-sm font-medium cursor-grab active:cursor-grabbing select-none border border-fuchsia-200 dark:border-fuchsia-800"
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentRound.categories.map(cat => {
            const itemsInCat = currentRound.items.filter(item => sorted[item.id] === cat.id)
            return (
              <div
                key={cat.id}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(cat.id)}
                className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-600 p-4 min-h-[120px] space-y-2"
              >
                <p className="font-semibold text-sm text-gray-700 dark:text-gray-300">{cat.label}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">{cat.description}</p>
                <div className="space-y-1.5 pt-1">
                  {itemsInCat.map(item => {
                    const isCorrect = checked && item.correctCategory === cat.id
                    const isWrong = checked && item.correctCategory !== cat.id
                    return (
                      <div
                        key={item.id}
                        onClick={() => handleRemoveFromCategory(item.id)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium cursor-pointer select-none border transition-colors ${
                          isCorrect ? 'bg-emerald-100 dark:bg-emerald-900/30 border-emerald-300 text-emerald-800 dark:text-emerald-300' :
                          isWrong ? 'bg-rose-100 dark:bg-rose-900/30 border-rose-300 text-rose-800 dark:text-rose-300' :
                          'bg-fuchsia-50 dark:bg-fuchsia-900/20 border-fuchsia-200 dark:border-fuchsia-800 text-fuchsia-800 dark:text-fuchsia-300 hover:bg-fuchsia-100'
                        }`}
                      >
                        {item.label}
                        {isWrong && checked && (
                          <span className="ml-1 text-xs opacity-70">
                            (should be: {currentRound.categories.find(c => c.id === item.correctCategory)?.label})
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {!checked && unsortedItems.length === 0 && (
          <div className="text-center">
            <button onClick={handleCheck} className="px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold rounded-xl transition-colors">
              Check my answers
            </button>
          </div>
        )}

        {checked && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-5 space-y-3">
            <p className="font-semibold text-gray-800 dark:text-gray-100">
              {correctCount === currentRound.items.length ? 'Perfect round!' : `${correctCount} out of ${currentRound.items.length} correct`}
            </p>
            <button onClick={handleNext} className="w-full py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold rounded-xl transition-colors">
              {round + 1 >= ROUNDS.length ? 'See final results' : 'Next round'}
            </button>
          </div>
        )}

        <div className="text-center">
          <Link to="/" className="text-fuchsia-600 dark:text-fuchsia-400 text-sm hover:underline">&larr; Back to home</Link>
        </div>

      </div>
    </div>
  )
}
