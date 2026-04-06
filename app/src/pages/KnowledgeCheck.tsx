import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'

interface KCQuestion {
  id: string
  topic: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  lessonPath: string
  lessonTitle: string
}

const KC_QUESTIONS: KCQuestion[] = [
  {
    id: 'q1',
    topic: 'What is AI?',
    question: 'What does AI (artificial intelligence) actually mean in plain terms?',
    options: [
      'A robot that looks and thinks exactly like a human',
      'Computer systems that can perform tasks that would normally require human intelligence — like recognising images, translating languages, or answering questions',
      'Any computer program that runs automatically without human input',
      'A type of very fast calculator used by scientists',
    ],
    correctIndex: 1,
    explanation: 'AI refers to computer systems designed to perform tasks that typically require human intelligence. Today\'s AI is "narrow" — very good at specific tasks — rather than general human-like intelligence.',
    lessonPath: '/learn/what-is-ai',
    lessonTitle: 'What is AI?',
  },
  {
    id: 'q2',
    topic: 'Machine learning',
    question: 'How does a machine learning model get better at a task?',
    options: [
      'A programmer manually writes new rules each time the model makes a mistake',
      'The model is replaced with a newer version each week',
      'The model finds patterns in large amounts of data and adjusts itself automatically to improve its accuracy',
      'The model copies answers from the internet in real-time',
    ],
    correctIndex: 2,
    explanation: 'Machine learning works by showing a model many examples and letting it find patterns automatically. Unlike traditional programming, you do not write the rules — the model learns them from data.',
    lessonPath: '/learn/what-is-machine-learning',
    lessonTitle: 'What is machine learning?',
  },
  {
    id: 'q3',
    topic: 'Neural networks',
    question: 'What is a neural network loosely inspired by?',
    options: [
      'The internet, with its network of connected computers',
      'The structure of neurons and connections in a biological brain',
      'A telephone switchboard connecting many different callers',
      'The way trees branch out from a single trunk',
    ],
    correctIndex: 1,
    explanation: 'Neural networks are loosely inspired by how biological brains work — layers of connected nodes pass signals, and the strength of connections adjusts during learning. They are very simplified models, but the biological inspiration is where the name comes from.',
    lessonPath: '/learn/neural-network',
    lessonTitle: 'What is a neural network?',
  },
  {
    id: 'q4',
    topic: 'Chatbots',
    question: 'When a chatbot like Claude or ChatGPT answers a question, what is it fundamentally doing?',
    options: [
      'Looking up the answer in a database of pre-written responses',
      'Connecting to the internet to research your question in real-time',
      'Predicting the most useful sequence of words to continue from your message, based on patterns learned from enormous amounts of text',
      'Copying answers from its training documents word-for-word',
    ],
    correctIndex: 2,
    explanation: 'Language models generate responses by predicting the most useful next tokens based on patterns learned during training. They do not look up answers — they generate them. This is why they can be fluent but sometimes wrong.',
    lessonPath: '/learn/how-chatbots-work',
    lessonTitle: 'How do chatbots work?',
  },
  {
    id: 'q5',
    topic: 'AI bias',
    question: 'Where does AI bias most commonly come from?',
    options: [
      'AI systems are deliberately programmed to be unfair by their creators',
      'Biases present in the training data — if historical data reflects unfair patterns, the AI learns and perpetuates those patterns',
      'AI randomly generates biased outputs that have no connection to the data',
      'AI bias only occurs when the AI system is hacked',
    ],
    correctIndex: 1,
    explanation: 'AI learns from historical data — and history is full of bias. If hiring data shows fewer women in senior roles (due to past discrimination), an AI trained on it may learn to rank women lower. The AI is not malicious; it is reflecting patterns in data that reflected an unfair world.',
    lessonPath: '/learn/ai-bias',
    lessonTitle: 'What is AI bias?',
  },
  {
    id: 'q6',
    topic: 'Prompt engineering',
    question: 'What is "prompt engineering"?',
    options: [
      'Writing the code that makes an AI model run on a computer',
      'Building physical prompts or input devices for AI hardware',
      'The skill of crafting clear, specific instructions for AI systems to get better, more useful responses',
      'An engineering qualification required to work with AI',
    ],
    correctIndex: 2,
    explanation: 'Prompt engineering is the practice of writing effective instructions for AI. Because AI responds to the wording and context of your request, how you phrase things significantly affects the quality of the response you get.',
    lessonPath: '/learn/prompt-engineering',
    lessonTitle: 'What is prompt engineering?',
  },
  {
    id: 'q7',
    topic: 'Future of AI',
    question: 'What do most mainstream AI researchers currently believe about Artificial General Intelligence (AGI) — AI that can do anything a human can do?',
    options: [
      'AGI already exists and is being kept secret by governments',
      'AGI is impossible and will never be built',
      'AGI is likely at least several decades away, with significant technical challenges remaining unsolved, though experts disagree on the timeline',
      'AGI will definitely arrive before 2030 based on current progress',
    ],
    correctIndex: 2,
    explanation: 'AGI remains a research goal, not an existing reality. Most mainstream researchers think it is decades away, if achievable at all. Today\'s AI — including systems like Claude — is very capable but narrow. It does not truly understand, reason, or generalise the way a human does across all domains.',
    lessonPath: '/learn/future-of-ai',
    lessonTitle: 'What does the future of AI look like?',
  },
]

const KC_RESULT_KEY = 'ronny-knowledge-check-result'

interface KCResult {
  score: number
  total: number
  date: string
}

function loadPreviousResult(): KCResult | null {
  try {
    const raw = localStorage.getItem(KC_RESULT_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function saveResult(score: number, total: number) {
  try {
    const prev = loadPreviousResult()
    // Only save if it is a new best (or first attempt)
    if (!prev || score >= prev.score) {
      localStorage.setItem(KC_RESULT_KEY, JSON.stringify({
        score,
        total,
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
      }))
    }
  } catch {
    // ignore
  }
}

function scoreMessage(score: number, total: number): string {
  const pct = score / total
  if (pct === 1) return 'Perfect score! You have really taken this in.'
  if (pct >= 0.8) return 'Excellent — you know your AI well!'
  if (pct >= 0.6) return 'Good work. A couple of topics to revisit.'
  if (pct >= 0.4) return 'A solid start. The lessons below will help fill the gaps.'
  return 'Keep going — every wrong answer shows exactly what to learn next.'
}

export function KnowledgeCheck() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(KC_QUESTIONS.length).fill(null))
  const [submitted, setSubmitted] = useState(false)
  const [done, setDone] = useState(false)
  const previousResult = loadPreviousResult()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [current, done])

  const q = KC_QUESTIONS[current]

  function handleSelect(idx: number) {
    if (submitted) return
    setSelected(idx)
  }

  function handleNext() {
    const updated = [...answers]
    updated[current] = selected
    setAnswers(updated)
    if (current < KC_QUESTIONS.length - 1) {
      setCurrent(current + 1)
      setSelected(answers[current + 1])
      setSubmitted(false)
    } else {
      const score = updated.filter((a, i) => a === KC_QUESTIONS[i].correctIndex).length
      saveResult(score, KC_QUESTIONS.length)
      setDone(true)
    }
  }

  function handleCheck() {
    if (selected === null) return
    setSubmitted(true)
  }

  function handleRetake() {
    setAnswers(Array(KC_QUESTIONS.length).fill(null))
    setCurrent(0)
    setSelected(null)
    setSubmitted(false)
    setDone(false)
  }

  if (done) {
    const finalAnswers = answers
    const score = finalAnswers.filter((a, i) => a === KC_QUESTIONS[i].correctIndex).length
    const wrong = KC_QUESTIONS.filter((_, i) => finalAnswers[i] !== KC_QUESTIONS[i].correctIndex)

    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center px-4 py-16">
        <div className="max-w-2xl w-full space-y-8">
          <div className="text-center space-y-4">
            <div className="text-6xl">{score === KC_QUESTIONS.length ? '&#x1F3C6;' : '&#x1F4CA;'}</div>
            <h1 className="text-3xl font-bold text-gray-800">Your result</h1>
            <div className="text-6xl font-bold text-indigo-600">{score} / {KC_QUESTIONS.length}</div>
            <p className="text-lg text-gray-600">{scoreMessage(score, KC_QUESTIONS.length)}</p>
            {previousResult && previousResult.score > score && (
              <p className="text-sm text-gray-500">Your previous best: {previousResult.score} / {previousResult.total} on {previousResult.date}</p>
            )}
          </div>

          {wrong.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-4">
              <h2 className="text-xl font-bold text-gray-800">Lessons to revisit</h2>
              <p className="text-gray-600 text-sm">You got {wrong.length} question{wrong.length > 1 ? 's' : ''} wrong. These lessons cover those topics:</p>
              <div className="space-y-2">
                {wrong.map(wq => (
                  <Link
                    key={wq.id}
                    to={wq.lessonPath}
                    className="flex items-center justify-between bg-indigo-50 hover:bg-indigo-100 border border-indigo-100 rounded-xl p-4 transition-colors group"
                  >
                    <div>
                      <p className="font-semibold text-indigo-800 text-sm">{wq.lessonTitle}</p>
                      <p className="text-indigo-600 text-xs mt-0.5">{wq.topic}</p>
                    </div>
                    <span className="text-indigo-400 group-hover:text-indigo-600">&#x2192;</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {wrong.length === 0 && (
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center">
              <p className="text-green-800 font-semibold">You got every question right. Outstanding!</p>
              <p className="text-green-700 text-sm mt-1">You have covered all the core topics in this course.</p>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-3">
            <h2 className="text-lg font-bold text-gray-800">All answers</h2>
            {KC_QUESTIONS.map((kq, i) => {
              const isCorrect = finalAnswers[i] === kq.correctIndex
              return (
                <div key={kq.id} className={`rounded-xl p-4 text-sm space-y-1 ${isCorrect ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'}`}>
                  <div className="flex items-start gap-2">
                    <span className={isCorrect ? 'text-green-600' : 'text-red-500'}>
                      {isCorrect ? '&#x2713;' : '&#x2717;'}
                    </span>
                    <p className={`font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>{kq.question}</p>
                  </div>
                  {!isCorrect && (
                    <p className="text-gray-600 text-xs pl-5">Correct answer: <span className="font-medium">{kq.options[kq.correctIndex]}</span></p>
                  )}
                  <p className={`text-xs pl-5 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>{kq.explanation}</p>
                </div>
              )
            })}
          </div>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={handleRetake}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Try again
            </button>
            <Link
              to="/my-progress"
              className="flex-1 text-center bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              My progress
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-2">
          <div className="text-5xl">&#x1F9E0;</div>
          <h1 className="text-3xl font-bold text-gray-800">How much have you learned?</h1>
          <p className="text-gray-600">7 questions across the whole course &mdash; one per topic</p>
          {previousResult && (
            <p className="text-sm text-indigo-600 font-medium">
              Your best: {previousResult.score} / {previousResult.total} &mdash; {previousResult.date}
            </p>
          )}
        </div>

        {/* Progress bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Question {current + 1} of {KC_QUESTIONS.length}</span>
            <span>{KC_QUESTIONS.length - current - 1} remaining</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-2 bg-indigo-500 rounded-full transition-all duration-500"
              style={{ width: `${((current) / KC_QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-5">
          <div>
            <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">{q.topic}</span>
            <h2 className="text-xl font-bold text-gray-800 mt-1 leading-snug">{q.question}</h2>
          </div>

          <div className="space-y-3">
            {q.options.map((opt, idx) => {
              let cls = 'w-full text-left rounded-xl border p-4 text-sm transition-colors cursor-pointer '
              if (submitted) {
                if (idx === q.correctIndex) {
                  cls += 'bg-green-50 border-green-300 text-green-800 font-medium'
                } else if (idx === selected) {
                  cls += 'bg-red-50 border-red-300 text-red-800'
                } else {
                  cls += 'bg-gray-50 border-gray-200 text-gray-500'
                }
              } else if (idx === selected) {
                cls += 'bg-indigo-50 border-indigo-400 text-indigo-800'
              } else {
                cls += 'bg-white border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50'
              }
              return (
                <button key={idx} className={cls} onClick={() => handleSelect(idx)}>
                  {opt}
                </button>
              )
            })}
          </div>

          {submitted && (
            <div className={`rounded-xl p-4 text-sm ${selected === q.correctIndex ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              <p className="font-semibold mb-1">{selected === q.correctIndex ? 'Correct!' : 'Not quite.'}</p>
              <p>{q.explanation}</p>
            </div>
          )}

          <div className="flex gap-3">
            {!submitted ? (
              <button
                onClick={handleCheck}
                disabled={selected === null}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Check answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                {current < KC_QUESTIONS.length - 1 ? 'Next question' : 'See my results'}
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
