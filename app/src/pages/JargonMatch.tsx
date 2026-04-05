import { useState } from 'react'

type Term = {
  id: string
  term: string
  definition: string
  explanation: string
}

const TERMS: Term[] = [
  {
    id: 't1',
    term: 'Neural network',
    definition: 'A system of connected nodes loosely inspired by the human brain, used to learn patterns from data',
    explanation: 'Neural networks are made of layers of interconnected "neurons" (mathematical functions). Data flows through the layers, and the connections between neurons are adjusted during training so the network learns to produce the right outputs from given inputs.',
  },
  {
    id: 't2',
    term: 'Training data',
    definition: 'The examples an AI system learns from before it is used',
    explanation: 'Training data is the dataset used to teach an AI model. For a spam filter, it might be millions of emails labelled "spam" or "not spam". The quality and diversity of training data heavily influences how well the model performs.',
  },
  {
    id: 't3',
    term: 'Hallucination',
    definition: 'When an AI generates confident-sounding but factually incorrect or made-up information',
    explanation: 'AI language models can "hallucinate" — producing plausible-sounding but wrong or invented facts. A chatbot might confidently cite a book that does not exist, or state an incorrect date as fact. This is a known limitation of current large language models.',
  },
  {
    id: 't4',
    term: 'Large language model (LLM)',
    definition: 'An AI trained on vast amounts of text to understand and generate human language',
    explanation: 'LLMs like GPT-4, Claude, and Gemini are trained on hundreds of billions of words from the internet, books, and other sources. They learn statistical patterns in language and can generate coherent text, answer questions, write code, and more.',
  },
  {
    id: 't5',
    term: 'Bias',
    definition: 'Systematic errors or unfairness in AI outputs that disadvantage certain groups',
    explanation: 'AI bias occurs when a model produces consistently unfair or incorrect results for certain groups — often because the training data reflected existing inequalities. For example, a hiring AI trained on historical data might disadvantage women if most past hires were men.',
  },
  {
    id: 't6',
    term: 'Fine-tuning',
    definition: 'Training a pre-existing AI model on a smaller, specific dataset to make it better at a particular task',
    explanation: 'Rather than training a model from scratch (which is extremely expensive), fine-tuning takes an existing model and trains it further on a more specific dataset. For example, a general LLM might be fine-tuned on medical text to make it better at answering health questions.',
  },
  {
    id: 't7',
    term: 'Token',
    definition: 'A chunk of text — roughly a word or part of a word — that a language model processes',
    explanation: 'Language models do not process text letter by letter or word by word. They break text into "tokens" — which can be whole words, word fragments, or punctuation. GPT-4 can process up to about 128,000 tokens at once, roughly equivalent to a short novel.',
  },
  {
    id: 't8',
    term: 'Inference',
    definition: 'Using a trained AI model to generate outputs for new inputs',
    explanation: 'Training is when an AI learns from data. Inference is when you use the trained model to do something — like asking ChatGPT a question or asking an image classifier to label a photo. Inference can happen billions of times per day on AI infrastructure.',
  },
  {
    id: 't9',
    term: 'Prompt',
    definition: 'The instruction or question you give to an AI to get it to produce a response',
    explanation: 'A prompt is how you communicate with a generative AI. It can be a question ("What is photosynthesis?"), an instruction ("Write a poem about autumn"), or a combination of context, instructions, and examples. Prompt engineering is the skill of crafting effective prompts.',
  },
  {
    id: 't10',
    term: 'Overfitting',
    definition: 'When an AI learns the training data too well and performs poorly on new, unseen examples',
    explanation: 'An overfitted model has essentially memorised the training data rather than learning general patterns. It performs very well on its training set but poorly on new data. Overfitting is like a student who memorises past exam papers but cannot apply knowledge to new questions.',
  },
]

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

function makeOptions(correct: Term, allTerms: Term[]): string[] {
  const others = allTerms.filter(t => t.id !== correct.id)
  const distractors = shuffle(others).slice(0, 3).map(t => t.definition)
  return shuffle([correct.definition, ...distractors])
}

export function JargonMatch() {
  const [termOrder] = useState(() => shuffle(TERMS))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [gameComplete, setGameComplete] = useState(false)
  const [options] = useState(() => termOrder.map(t => makeOptions(t, TERMS)))

  const term = termOrder[currentIndex]
  const currentOptions = options[currentIndex]

  function handleSelect(def: string) {
    if (showExplanation) return
    setSelected(def)
    const isCorrect = def === term.definition
    if (isCorrect) setScore(s => s + 1)
    setShowExplanation(true)
  }

  function handleNext() {
    if (currentIndex < termOrder.length - 1) {
      setCurrentIndex(i => i + 1)
      setSelected(null)
      setShowExplanation(false)
    } else {
      setGameComplete(true)
    }
  }

  if (gameComplete) {
    const pct = Math.round((score / TERMS.length) * 100)
    return (
      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
        <div className="max-w-md w-full space-y-6 text-center">
          <div className="text-6xl">&#x1F4D6;</div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">AI Jargon Match — done!</h1>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-3">
            <p className="text-4xl font-bold text-teal-600 dark:text-teal-400">{score} / {TERMS.length}</p>
            <p className="text-gray-600 dark:text-gray-300">{pct}% correct</p>
            {pct === 100 && <p className="text-green-600 dark:text-green-400 font-semibold">Perfect! You know your AI jargon.</p>}
            {pct >= 70 && pct < 100 && <p className="text-blue-600 dark:text-blue-400 font-semibold">Great work — you have a solid AI vocabulary.</p>}
            {pct < 70 && <p className="text-orange-600 dark:text-orange-400 font-semibold">Keep learning — check the Glossary to strengthen your vocabulary.</p>}
          </div>
          <button
            onClick={() => { setCurrentIndex(0); setScore(0); setSelected(null); setShowExplanation(false); setGameComplete(false) }}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-xl transition-colors"
          >
            Play again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-md w-full space-y-6">

        <div className="text-center space-y-2">
          <div className="text-5xl">&#x1F4D6;</div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">AI Jargon Match</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Term {currentIndex + 1} of {TERMS.length}</p>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-teal-500 h-2 rounded-full transition-all" style={{ width: `${(currentIndex / TERMS.length) * 100}%` }} />
          </div>
          {currentIndex > 0 && (
            <p className="text-sm font-medium text-teal-600 dark:text-teal-400">Score: {score} / {currentIndex}</p>
          )}
        </div>

        {/* Term card */}
        <div className="bg-teal-600 dark:bg-teal-800 rounded-2xl p-6 text-center">
          <p className="text-xs font-semibold text-teal-100 uppercase tracking-wide mb-2">What does this mean?</p>
          <p className="text-2xl font-bold text-white">{term.term}</p>
        </div>

        {/* Options */}
        <div className="space-y-2">
          {currentOptions.map((def, i) => {
            const isCorrect = def === term.definition
            const isSelected = selected === def
            let cls = 'w-full text-left px-4 py-3 rounded-xl border-2 text-sm transition-all '
            if (!showExplanation) {
              cls += 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-teal-400'
            } else if (isCorrect) {
              cls += 'border-green-500 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 font-semibold'
            } else if (isSelected) {
              cls += 'border-red-400 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300'
            } else {
              cls += 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-500 opacity-60'
            }
            return (
              <button key={i} onClick={() => handleSelect(def)} className={cls} disabled={showExplanation}>
                {def}
              </button>
            )
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={`rounded-xl p-4 text-sm leading-relaxed ${selected === term.definition ? 'bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200'}`}>
            <p className="font-semibold mb-1">{selected === term.definition ? 'Correct!' : `Not quite — the answer is: "${term.definition}"`}</p>
            <p>{term.explanation}</p>
          </div>
        )}

        {showExplanation && (
          <button onClick={handleNext} className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-xl transition-colors">
            {currentIndex < TERMS.length - 1 ? 'Next term' : 'See my score'}
          </button>
        )}
      </div>
    </div>
  )
}
