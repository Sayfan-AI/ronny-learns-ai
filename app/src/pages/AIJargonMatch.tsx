import { useState } from 'react'
import { Link } from '@tanstack/react-router'

interface Term {
  id: string
  term: string
  correct: string
  explanation: string
  options: string[]
}

const TERMS: Term[] = [
  {
    id: 't1',
    term: 'Neural network',
    correct: 'A system of interconnected nodes that learns patterns from data, loosely inspired by how neurons in the human brain connect',
    explanation: 'Neural networks are the building blocks of most modern AI. They are made of layers of mathematical "nodes" that pass signals to each other. By adjusting the strength of those connections during training, the network learns to recognise patterns — like faces in photos or the next word in a sentence.',
    options: [
      'A social network used by AI researchers to share papers',
      'A system of interconnected nodes that learns patterns from data, loosely inspired by how neurons in the human brain connect',
      'A secure internet connection used by government AI systems',
      'A diagram showing how different AI products relate to each other',
    ],
  },
  {
    id: 't2',
    term: 'Training data',
    correct: 'The large collection of examples (text, images, audio, etc.) that an AI model learns from before it is deployed',
    explanation: 'Before an AI can do anything useful, it needs to learn from examples. Training data is that set of examples — it might be millions of labelled images for a photo classifier, or billions of words from the internet for a language model. The quality and diversity of training data heavily influences how well the AI performs.',
    options: [
      'The personal data collected by AI companies about their users',
      'The large collection of examples (text, images, audio, etc.) that an AI model learns from before it is deployed',
      'Data that is used to test whether an AI system is safe',
      'Data that has been anonymised to protect privacy',
    ],
  },
  {
    id: 't3',
    term: 'Hallucination',
    correct: 'When an AI confidently states something that is factually wrong or completely made up',
    explanation: 'Large language models sometimes generate plausible-sounding but entirely false information — like inventing a court case, misquoting a real person, or making up a scientific study. This happens because the model is predicting what text should come next, not checking facts. Always verify important information from AI.',
    options: [
      'When an AI produces visual art or music',
      'When an AI system becomes overloaded and produces distorted outputs',
      'When an AI confidently states something that is factually wrong or completely made up',
      'When a user imagines that an AI has feelings',
    ],
  },
  {
    id: 't4',
    term: 'Large language model (LLM)',
    correct: 'A type of AI trained on vast amounts of text to understand and generate human language',
    explanation: 'LLMs like GPT-4, Claude, and Gemini are trained on huge amounts of text data and learn statistical patterns in language. This allows them to answer questions, write essays, summarise documents, translate languages, and much more. The "large" refers to the number of parameters — GPT-4 has hundreds of billions.',
    options: [
      'A type of AI trained on vast amounts of text to understand and generate human language',
      'A type of AI that only works with long documents',
      'An AI that has been trained in multiple languages simultaneously',
      'A database of every language spoken by humans',
    ],
  },
  {
    id: 't5',
    term: 'Bias (in AI)',
    correct: 'When an AI system produces unfair or skewed outputs because of patterns in its training data or design choices',
    explanation: 'AI bias occurs when a model learns and reproduces unfair patterns. For example, if a hiring AI was trained on historical data where men were more often promoted, it may learn to favour male candidates. Bias can reflect race, gender, disability, age, and other characteristics — and can cause serious real-world harm.',
    options: [
      'When an AI system is programmed to prefer one brand or product over another',
      'The tendency of AI to agree with the user rather than being honest',
      'When an AI system produces unfair or skewed outputs because of patterns in its training data or design choices',
      'The political opinions that an AI system has been given by its creators',
    ],
  },
  {
    id: 't6',
    term: 'Fine-tuning',
    correct: 'Taking a pre-trained AI model and training it further on a smaller, specialised dataset to adapt it for a specific task',
    explanation: 'Training a large AI model from scratch costs millions of pounds. Fine-tuning is a cheaper alternative — you take an existing model (like GPT) and train it on a smaller dataset specific to your use case (like medical records or customer service logs). This specialises the model without starting from zero.',
    options: [
      'Taking a pre-trained AI model and training it further on a smaller, specialised dataset to adapt it for a specific task',
      'Adjusting the audio quality of an AI voice assistant',
      'The process of removing bias from an AI model',
      'Fixing bugs in an AI system after deployment',
    ],
  },
  {
    id: 't7',
    term: 'Token',
    correct: 'A chunk of text (roughly a word or part of a word) that a language model processes as a single unit',
    explanation: 'Language models do not read text character by character or word by word — they use "tokens". A token is typically a word, part of a word, or a punctuation mark. For example, "unbelievable" might be split into "un", "believ", and "able". Models are limited by how many tokens they can process at once (their "context window").',
    options: [
      'A digital currency used to pay for AI services',
      'A security credential required to access an AI API',
      'A chunk of text (roughly a word or part of a word) that a language model processes as a single unit',
      'A reward given to users who complete AI training courses',
    ],
  },
  {
    id: 't8',
    term: 'Inference',
    correct: 'The process of running a trained AI model on new data to produce an output (as opposed to the training phase)',
    explanation: 'There are two phases in AI: training (where the model learns from data) and inference (where the trained model is used). Every time you ask ChatGPT a question, that\'s inference. It\'s generally much faster and cheaper than training, but for very large models, inference still requires significant computing power.',
    options: [
      'When an AI model makes assumptions about what the user is thinking',
      'The process of running a trained AI model on new data to produce an output (as opposed to the training phase)',
      'A logical reasoning technique used in expert systems',
      'The stage where AI is tested for accuracy before release',
    ],
  },
  {
    id: 't9',
    term: 'Prompt',
    correct: 'The instruction or question you give to an AI system to tell it what you want it to do',
    explanation: 'A prompt is your input to an AI — the text you type to start a conversation, ask a question, or give an instruction. "Summarise this document in three bullet points" is a prompt. Prompt engineering is the skill of crafting prompts that get better, more useful responses from AI.',
    options: [
      'A reminder sent by an AI system to encourage the user to continue learning',
      'The instruction or question you give to an AI system to tell it what you want it to do',
      'A legal notice that AI companies must display before users interact with their systems',
      'A test question used to evaluate whether an AI is safe',
    ],
  },
  {
    id: 't10',
    term: 'Overfitting',
    correct: 'When an AI model learns its training data too well — including its noise and errors — and fails to generalise to new data',
    explanation: 'Overfitting is when a model memorises its training examples rather than learning general patterns. Imagine a student who memorises every past exam paper perfectly but can\'t answer any question they haven\'t seen before. An overfitted AI might perform brilliantly on training data but fail badly on real-world inputs.',
    options: [
      'When an AI model is given too many training examples and becomes confused',
      'When an AI system uses more computing power than was planned',
      'When an AI gives excessively long or detailed answers',
      'When an AI model learns its training data too well — including its noise and errors — and fails to generalise to new data',
    ],
  },
]

type GameState = 'playing' | 'finished'

export function AIJargonMatch() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [chosen, setChosen] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [gameState, setGameState] = useState<GameState>('playing')
  const [results, setResults] = useState<Array<{ correct: boolean; term: Term; chosen: string }>>([])

  const term = TERMS[currentIndex]
  const total = TERMS.length
  const isLast = currentIndex === total - 1

  function handleChoice(option: string) {
    if (chosen !== null) return
    const correct = option === term.correct
    setChosen(option)
    if (correct) setScore((s) => s + 1)
    setResults((prev) => [...prev, { correct, term, chosen: option }])
  }

  function handleNext() {
    if (isLast) {
      setGameState('finished')
    } else {
      setCurrentIndex((i) => i + 1)
      setChosen(null)
    }
  }

  function handleRestart() {
    setCurrentIndex(0)
    setChosen(null)
    setScore(0)
    setGameState('playing')
    setResults([])
  }

  if (gameState === 'finished') {
    const pct = Math.round((score / total) * 100)
    let verdict: string
    let verdictColour: string
    if (pct >= 80) {
      verdict = 'Impressive! You know your AI jargon.'
      verdictColour = 'text-green-700 dark:text-green-400'
    } else if (pct >= 60) {
      verdict = 'Good effort! A few terms to look up.'
      verdictColour = 'text-blue-700 dark:text-blue-400'
    } else {
      verdict = 'Keep exploring — AI terminology will become familiar!'
      verdictColour = 'text-orange-600 dark:text-orange-400'
    }

    return (
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Results</h1>
          <p className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">{score} / {total}</p>
          <p className={`text-lg font-semibold ${verdictColour}`}>{verdict}</p>
        </div>

        <div className="space-y-4">
          {results.map(({ correct, term: t, chosen: c }, i) => (
            <div
              key={t.id}
              className={`rounded-2xl border p-4 space-y-2 ${
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
                  <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{i + 1}. {t.term}</p>
                  {!correct && (
                    <p className="text-xs text-red-600 dark:text-red-400">You chose: {c}</p>
                  )}
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Correct answer:</span> {t.correct}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{t.explanation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={handleRestart}
            className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
          >
            Play again
          </button>
          <Link
            to="/glossary"
            className="flex-1 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Browse the glossary
          </Link>
        </div>
      </div>
    )
  }

  const progressPct = Math.round((currentIndex / total) * 100)
  const isCorrect = chosen === term.correct

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 space-y-6">
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Jargon Match</h1>
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            Score: {score} / {currentIndex}
          </span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Term {currentIndex + 1} of {total}
        </p>
      </div>

      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-2 bg-blue-500 rounded-full transition-all duration-500"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 space-y-5">
        <div className="space-y-1">
          <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">What does this term mean?</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{term.term}</p>
        </div>

        <div className="space-y-3">
          {term.options.map((option) => {
            let classes = 'w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-colors leading-snug '

            if (chosen === null) {
              classes += 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-700 cursor-pointer'
            } else if (option === term.correct) {
              classes += 'border-green-500 bg-green-50 dark:bg-green-900/30 dark:border-green-600 text-green-800 dark:text-green-200 cursor-default'
            } else if (option === chosen) {
              classes += 'border-red-500 bg-red-50 dark:bg-red-900/30 dark:border-red-600 text-red-800 dark:text-red-200 cursor-default'
            } else {
              classes += 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-default opacity-60'
            }

            return (
              <button
                key={option}
                className={classes}
                onClick={() => handleChoice(option)}
                disabled={chosen !== null}
              >
                {option}
              </button>
            )
          })}
        </div>

        {chosen !== null && (
          <div
            className={`rounded-xl p-4 space-y-1 ${
              isCorrect
                ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700'
                : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700'
            }`}
          >
            <p className={`font-semibold text-sm ${isCorrect ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
              {isCorrect ? 'Correct!' : 'Not quite.'}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">{term.explanation}</p>
          </div>
        )}
      </div>

      {chosen !== null && (
        <button
          onClick={handleNext}
          className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
        >
          {isLast ? 'See my results' : 'Next term'}
        </button>
      )}

      <div className="text-center">
        <Link to="/" className="text-sm text-gray-500 dark:text-gray-400 hover:underline">
          Back to home
        </Link>
      </div>
    </div>
  )
}
