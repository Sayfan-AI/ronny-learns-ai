import { useState, useRef } from 'react'
import { Link } from '@tanstack/react-router'

interface SortItem {
  id: string
  label: string
  correctCategory: string
}

interface Round {
  title: string
  instruction: string
  categories: [string, string]
  categoryLabels: [string, string]
  items: SortItem[]
}

const ROUNDS: Round[] = [
  {
    title: 'Round 1 — Real AI or Sci-fi AI?',
    instruction: 'Sort each item into the correct category — is it a real AI system that exists today, or AI from science fiction?',
    categories: ['real', 'scifi'],
    categoryLabels: ['Real AI (exists today)', 'Sci-fi / Movie AI'],
    items: [
      { id: 'chatgpt', label: 'ChatGPT', correctCategory: 'real' },
      { id: 'hal9000', label: 'HAL 9000 (2001: A Space Odyssey)', correctCategory: 'scifi' },
      { id: 'alphago', label: 'AlphaGo — defeated world Go champion', correctCategory: 'real' },
      { id: 'skynet', label: 'Skynet (Terminator)', correctCategory: 'scifi' },
      { id: 'midjourney', label: 'Midjourney — creates images from text', correctCategory: 'real' },
      { id: 'samantha', label: 'Samantha (Her — 2013 film)', correctCategory: 'scifi' },
      { id: 'alphafold', label: 'AlphaFold — predicts protein shapes', correctCategory: 'real' },
      { id: 'r2d2', label: 'R2-D2 (Star Wars)', correctCategory: 'scifi' },
    ],
  },
  {
    title: 'Round 2 — Helpful or Risky?',
    instruction: 'Sort each AI use case — is it primarily helpful, or does it carry significant risks?',
    categories: ['helpful', 'risky'],
    categoryLabels: ['Primarily helpful', 'Significant risks'],
    items: [
      { id: 'cancer-detection', label: 'AI detecting cancer in medical scans', correctCategory: 'helpful' },
      { id: 'deepfake-scam', label: 'Deepfake video used to impersonate a CEO and steal money', correctCategory: 'risky' },
      { id: 'spam-filter', label: 'AI spam filter blocking phishing emails', correctCategory: 'helpful' },
      { id: 'biased-hiring', label: 'AI hiring tool that discriminates by postcode', correctCategory: 'risky' },
      { id: 'translation', label: 'AI translating medical instructions for non-English speakers', correctCategory: 'helpful' },
      { id: 'surveillance', label: 'Mass facial recognition surveillance in public spaces', correctCategory: 'risky' },
      { id: 'climate-model', label: 'AI modelling climate change to improve predictions', correctCategory: 'helpful' },
      { id: 'social-manipulation', label: 'AI generating millions of fake social media accounts to spread misinformation', correctCategory: 'risky' },
    ],
  },
  {
    title: 'Round 3 — AI Type',
    instruction: 'Is each example supervised learning (learns from labelled examples) or unsupervised learning (finds patterns on its own)?',
    categories: ['supervised', 'unsupervised'],
    categoryLabels: ['Supervised learning', 'Unsupervised learning'],
    items: [
      { id: 'email-spam', label: 'Email spam filter trained on "spam" vs "not spam" emails', correctCategory: 'supervised' },
      { id: 'customer-segments', label: 'Grouping customers by shopping behaviour — no categories given in advance', correctCategory: 'unsupervised' },
      { id: 'image-dog', label: 'Image classifier trained on millions of labelled photos of dogs', correctCategory: 'supervised' },
      { id: 'anomaly', label: 'Finding unusual network traffic patterns no one defined in advance', correctCategory: 'unsupervised' },
      { id: 'sentiment', label: 'Sentiment analysis trained on reviews labelled positive or negative', correctCategory: 'supervised' },
      { id: 'topic-cluster', label: 'Automatically grouping news articles by topic — no topics pre-defined', correctCategory: 'unsupervised' },
      { id: 'fraud-labelled', label: 'Fraud detector trained on past cases labelled "fraud" or "legitimate"', correctCategory: 'supervised' },
      { id: 'gene-cluster', label: 'Clustering gene expression data to discover unknown biological groups', correctCategory: 'unsupervised' },
    ],
  },
]

const EXPLANATIONS: Record<string, string> = {
  // Round 1
  chatgpt: 'ChatGPT is a real AI chatbot made by OpenAI, launched in November 2022.',
  hal9000: 'HAL 9000 is the fictional AI from the 1968 film 2001: A Space Odyssey.',
  alphago: 'AlphaGo (DeepMind) defeated world Go champion Lee Sedol in 2016 — a landmark in AI.',
  skynet: 'Skynet is the fictional AI in the Terminator film series — it does not exist.',
  midjourney: 'Midjourney is a real AI image generator that creates art from text descriptions.',
  samantha: 'Samantha is the AI in the 2013 film Her — a fictional operating system that develops feelings.',
  alphafold: 'AlphaFold (DeepMind) solved a 50-year-old biology challenge by predicting protein structures.',
  r2d2: 'R2-D2 is the fictional robot from Star Wars — though robotics inspired by films are now real.',
  // Round 2
  'cancer-detection': 'AI cancer detection tools have matched or outperformed radiologists in some studies, potentially saving lives.',
  'deepfake-scam': 'Deepfake fraud is a growing crime — a UK firm lost £20 million after a CFO was impersonated by AI audio.',
  'spam-filter': 'AI spam filters now catch over 99.9% of spam, protecting billions of inboxes daily.',
  'biased-hiring': 'Amazon scrapped an AI hiring tool in 2018 after it was found to penalise CVs mentioning women\'s colleges.',
  translation: 'AI translation has helped doctors communicate with patients in hundreds of languages during emergencies.',
  surveillance: 'Mass facial recognition has been used to track protesters and ethnic minorities, raising serious civil liberties concerns.',
  'climate-model': 'AI climate models are helping scientists predict extreme weather events with greater accuracy.',
  'social-manipulation': 'Generative AI has dramatically lowered the cost of producing disinformation at scale.',
  // Round 3
  'email-spam': 'Spam filters learn from labelled data: human-categorised examples of spam and legitimate emails.',
  'customer-segments': 'Clustering customers without predefined groups is classic unsupervised learning.',
  'image-dog': 'Image classifiers are trained on millions of images manually labelled with what they contain.',
  anomaly: 'Anomaly detection often uses unsupervised learning because you cannot label what you do not know to look for.',
  sentiment: 'Sentiment analysis is trained on reviews that humans have labelled as positive or negative.',
  'topic-cluster': 'Topic modelling (e.g. LDA) groups text without any predefined categories — unsupervised.',
  'fraud-labelled': 'Fraud detection is typically supervised: historical cases are labelled so the model learns what fraud looks like.',
  'gene-cluster': 'Genomics researchers use unsupervised clustering to discover unknown biological groups in data.',
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function SortItOut() {
  const [roundIndex, setRoundIndex] = useState(0)
  const [shuffledItems, setShuffledItems] = useState<SortItem[]>(() => shuffle(ROUNDS[0].items))
  const [placed, setPlaced] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [scores, setScores] = useState<number[]>([])
  const [finished, setFinished] = useState(false)
  const [dragging, setDragging] = useState<string | null>(null)
  const dragOverCategory = useRef<string | null>(null)

  const round = ROUNDS[roundIndex]
  const totalItems = round.items.length

  const itemsInCategory = (cat: string) =>
    shuffledItems.filter(i => placed[i.id] === cat)

  const unplaced = shuffledItems.filter(i => !placed[i.id])

  function handleDragStart(itemId: string) {
    setDragging(itemId)
  }

  function handleDragOver(e: React.DragEvent, cat: string) {
    e.preventDefault()
    dragOverCategory.current = cat
  }

  function handleDrop(cat: string) {
    if (dragging) {
      setPlaced(prev => ({ ...prev, [dragging]: cat }))
      setDragging(null)
    }
    dragOverCategory.current = null
  }

  function handleTap(itemId: string, cat: string) {
    setPlaced(prev => {
      if (prev[itemId] === cat) {
        const next = { ...prev }
        delete next[itemId]
        return next
      }
      return { ...prev, [itemId]: cat }
    })
  }

  function handleSubmit() {
    const correct = round.items.filter(i => placed[i.id] === i.correctCategory).length
    setScores(prev => [...prev, correct])
    setSubmitted(true)
  }

  function handleNext() {
    if (roundIndex < ROUNDS.length - 1) {
      const next = roundIndex + 1
      setRoundIndex(next)
      setShuffledItems(shuffle(ROUNDS[next].items))
      setPlaced({})
      setSubmitted(false)
    } else {
      setFinished(true)
    }
  }

  function handleRestart() {
    setRoundIndex(0)
    setShuffledItems(shuffle(ROUNDS[0].items))
    setPlaced({})
    setSubmitted(false)
    setScores([])
    setFinished(false)
  }

  const totalScore = scores.reduce((a, b) => a + b, 0)
  const maxScore = ROUNDS.reduce((a, r) => a + r.items.length, 0)
  const pct = Math.round((totalScore / maxScore) * 100)

  if (finished) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
        <div className="max-w-2xl w-full space-y-8 text-center">
          <div className="text-6xl">&#x1F3C6;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">You finished!</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            You scored <span className="font-bold text-indigo-600">{totalScore} out of {maxScore}</span> ({pct}%)
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-indigo-100 dark:border-indigo-900 space-y-3">
            {ROUNDS.map((r, i) => (
              <div key={r.title} className="flex justify-between items-center text-sm">
                <span className="text-gray-700 dark:text-gray-300">{r.title}</span>
                <span className={`font-bold ${scores[i] === r.items.length ? 'text-green-600' : scores[i] >= r.items.length / 2 ? 'text-amber-600' : 'text-red-600'}`}>
                  {scores[i]}/{r.items.length}
                </span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {pct === 100
              ? 'Perfect score! You really know your AI.'
              : pct >= 75
              ? 'Great work — you have a solid understanding of AI concepts.'
              : pct >= 50
              ? 'Good effort! Revisit a few of the lessons below to firm up your knowledge.'
              : "Keep going — the more lessons you read, the clearer these concepts will become."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleRestart}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              &#x21BA; Play again
            </button>
            <Link
              to="/"
              className="bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors"
            >
              Back to lessons
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-6">

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="text-5xl">&#x1F500;</div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Sort it out</h1>
          <p className="text-gray-600 dark:text-gray-300">Drag each item into the correct category. 3 rounds — can you get them all right?</p>
          <div className="flex justify-center gap-2">
            {ROUNDS.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i < roundIndex ? 'bg-green-500' : i === roundIndex ? 'bg-indigo-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Round title */}
        <div className="bg-indigo-600 text-white rounded-2xl p-4 text-center">
          <p className="text-xs uppercase tracking-wide font-semibold opacity-80 mb-1">
            Round {roundIndex + 1} of {ROUNDS.length}
          </p>
          <h2 className="text-xl font-bold">{round.title}</h2>
          <p className="text-indigo-100 text-sm mt-1">{round.instruction}</p>
        </div>

        {/* Unplaced items */}
        {!submitted && unplaced.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 space-y-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Items to sort — drag to a category below</p>
            <div className="flex flex-wrap gap-2">
              {unplaced.map(item => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={() => handleDragStart(item.id)}
                  className="bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-700 text-indigo-800 dark:text-indigo-200 text-sm px-3 py-2 rounded-xl cursor-grab active:cursor-grabbing select-none hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Drop zones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {round.categories.map((cat, ci) => {
            const catItems = itemsInCategory(cat)
            return (
              <div
                key={cat}
                onDragOver={e => handleDragOver(e, cat)}
                onDrop={() => handleDrop(cat)}
                className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 p-4 space-y-3 min-h-[140px] transition-colors"
              >
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300 text-center">
                  {ci === 0 ? '&#x1F535;' : '&#x1F7E0;'} {round.categoryLabels[ci]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {catItems.map(item => {
                    const isCorrect = item.correctCategory === cat
                    return (
                      <div
                        key={item.id}
                        draggable={!submitted}
                        onDragStart={() => !submitted && handleDragStart(item.id)}
                        onClick={() => !submitted && handleTap(item.id, cat)}
                        className={`text-sm px-3 py-2 rounded-xl select-none transition-colors ${
                          submitted
                            ? isCorrect
                              ? 'bg-green-100 dark:bg-green-900 border border-green-400 text-green-800 dark:text-green-200'
                              : 'bg-red-100 dark:bg-red-900 border border-red-400 text-red-800 dark:text-red-200'
                            : 'bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-700 text-indigo-800 dark:text-indigo-200 cursor-grab hover:bg-indigo-100'
                        }`}
                        title={submitted ? EXPLANATIONS[item.id] : 'Click to return to unsorted, or drag to another category'}
                      >
                        {submitted && (isCorrect ? '✓ ' : '✗ ')}{item.label}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Feedback after submit */}
        {submitted && (
          <div className="space-y-3">
            {/* Score for this round */}
            <div className={`rounded-2xl p-4 text-center ${
              scores[scores.length - 1] === totalItems
                ? 'bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800'
                : 'bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800'
            }`}>
              <p className="text-lg font-bold text-gray-800 dark:text-gray-100">
                {scores[scores.length - 1]} / {totalItems} correct
                {scores[scores.length - 1] === totalItems ? ' — perfect!' : ''}
              </p>
            </div>

            {/* Explanations for wrong answers */}
            {round.items.filter(i => placed[i.id] !== i.correctCategory).length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-red-100 dark:border-red-900 p-4 space-y-3">
                <p className="text-sm font-semibold text-red-700 dark:text-red-300">What you got wrong</p>
                {round.items.filter(i => placed[i.id] !== i.correctCategory).map(item => (
                  <div key={item.id} className="text-sm space-y-1">
                    <p className="font-medium text-gray-800 dark:text-gray-200">{item.label}</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Correct category: <span className="font-semibold">{round.categoryLabels[round.categories.indexOf(item.correctCategory)]}</span>
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{EXPLANATIONS[item.id]}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={Object.keys(placed).length < round.items.length}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors"
            >
              {Object.keys(placed).length < round.items.length
                ? `Place all items first (${Object.keys(placed).length}/${round.items.length})`
                : 'Check my answers'}
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              {roundIndex < ROUNDS.length - 1 ? 'Next round \u2192' : 'See final score \u2192'}
            </button>
          )}
          <button
            onClick={handleRestart}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            &#x21BA; Restart
          </button>
        </div>

        <div className="text-center">
          <Link to="/" className="text-indigo-600 dark:text-indigo-400 text-sm hover:underline">
            &#x2190; Back to lessons
          </Link>
        </div>
      </div>
    </div>
  )
}
