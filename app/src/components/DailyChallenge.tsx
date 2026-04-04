import { useState, useMemo } from 'react'
import { Link } from '@tanstack/react-router'

interface ChallengeQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  lessonId: string
  lessonTitle: string
  lessonPath: string
}

// A bank of questions drawn from across all lesson quizzes
const QUESTION_BANK: ChallengeQuestion[] = [
  {
    question: 'What does AI stand for?',
    options: ['Automated Intelligence', 'Artificial Intelligence', 'Applied Interface', 'Autonomous Interaction'],
    correctIndex: 1,
    explanation: 'AI stands for Artificial Intelligence — the ability of a computer system to perform tasks that would normally require human intelligence, like understanding language, recognising images, or making decisions.',
    lessonId: 'what-is-ai', lessonTitle: 'What is AI?', lessonPath: '/learn/what-is-ai',
  },
  {
    question: 'What does "machine learning" mean?',
    options: [
      'Programming a computer with a fixed set of rules to follow',
      'A computer learning from examples rather than being explicitly programmed',
      'Teaching a robot to move using physical training sessions',
      'Connecting multiple computers together to share processing power',
    ],
    correctIndex: 1,
    explanation: 'Machine learning is a way of building AI systems where the computer learns patterns from large amounts of data — examples — rather than being given explicit rules for every situation.',
    lessonId: 'what-is-ml', lessonTitle: 'What is machine learning?', lessonPath: '/learn/what-is-machine-learning',
  },
  {
    question: 'What is a "hallucination" in AI?',
    options: [
      'When an AI system crashes and shows visual errors on screen',
      'When an AI confidently states something that is false or made up',
      'When an AI takes too long to respond and the user gets confused',
      'When an AI refuses to answer a question for safety reasons',
    ],
    correctIndex: 1,
    explanation: 'AI hallucination is when a language model confidently produces information that sounds plausible but is factually wrong or completely made up. It happens because the model generates text based on patterns, not by looking up verified facts.',
    lessonId: 'trusting-ai', lessonTitle: 'Can I trust what AI says?', lessonPath: '/learn/trusting-ai',
  },
  {
    question: 'What is AI bias?',
    options: [
      'When an AI system always takes the most popular option',
      'When an AI system produces unfair outcomes because of skewed or unrepresentative training data',
      'When an AI system runs more slowly than expected',
      'When an AI system prefers one programming language over another',
    ],
    correctIndex: 1,
    explanation: 'AI bias occurs when a system produces systematically unfair results, usually because the data it was trained on reflects existing inequalities or lacks diversity. For example, a facial recognition system trained mainly on lighter-skinned faces will perform worse on darker-skinned faces.',
    lessonId: 'ai-bias', lessonTitle: 'What is AI bias?', lessonPath: '/learn/ai-bias',
  },
  {
    question: 'What is "prompt engineering"?',
    options: [
      'Building the hardware that runs AI systems',
      'Writing clear, specific instructions to get better results from an AI',
      'Testing AI systems for safety vulnerabilities',
      'Translating code from one programming language to another',
    ],
    correctIndex: 1,
    explanation: 'Prompt engineering is the practice of crafting your questions and instructions to an AI model carefully to get more useful, accurate, and relevant responses. Small changes in wording can significantly affect the quality of AI output.',
    lessonId: 'prompt-engineering', lessonTitle: 'What is prompt engineering?', lessonPath: '/learn/prompt-engineering',
  },
  {
    question: 'Which company created Claude?',
    options: ['OpenAI', 'Google DeepMind', 'Anthropic', 'Microsoft'],
    correctIndex: 2,
    explanation: 'Claude is made by Anthropic, an AI safety company founded in 2021. Anthropic focuses on making AI systems that are safe, beneficial, and understandable. Claude is designed with safety as a core priority.',
    lessonId: 'what-is-ai', lessonTitle: 'What is AI?', lessonPath: '/learn/what-is-ai',
  },
  {
    question: 'What was AlphaFold and why was it significant?',
    options: [
      'A robot that folds laundry, showing AI can handle domestic tasks',
      'An AI that predicted the 3D structure of nearly every known protein, a major breakthrough for medicine and biology',
      'A game-playing AI that beat world champions at origami design',
      'A weather prediction system that improved hurricane forecasting',
    ],
    correctIndex: 1,
    explanation: "AlphaFold, created by Google DeepMind, solved a 50-year-old challenge in biology: predicting how a protein folds into its 3D shape from its amino acid sequence. It has predicted the structures of over 200 million proteins, potentially accelerating drug discovery by years.",
    lessonId: 'ai-and-scientific-research', lessonTitle: 'AI and scientific research', lessonPath: '/learn/ai-and-scientific-research',
  },
  {
    question: 'What does a "neural network" try to imitate?',
    options: [
      'The structure of the internet, with interconnected servers',
      'The way the human brain works, with neurons and connections',
      'The layout of a computer chip, with logic gates and circuits',
      'The organisation of a large company, with managers and workers',
    ],
    correctIndex: 1,
    explanation: 'Neural networks are loosely inspired by the human brain. They consist of layers of artificial "neurons" — mathematical functions — connected together. Data flows through the network, and the connections (weights) are adjusted during training until the network produces correct outputs.',
    lessonId: 'neural-network', lessonTitle: 'What is a neural network?', lessonPath: '/learn/neural-network',
  },
  {
    question: 'What is the "EU AI Act"?',
    options: [
      'A law banning all AI from being used in Europe',
      'A regulation that classifies AI systems by risk level and sets rules for high-risk uses like hiring, credit scoring, and healthcare',
      'A trade agreement that lets EU countries share AI research freely',
      'A law requiring all AI to be built using open-source software',
    ],
    correctIndex: 1,
    explanation: "The EU AI Act (passed in 2024) is the world's first comprehensive AI law. It categorises AI systems by risk: minimal risk (most AI), limited risk (chatbots must disclose they're AI), high risk (AI used in hiring, loans, policing — strict rules apply), and unacceptable risk (certain uses banned entirely, like social scoring).",
    lessonId: 'ai-laws-and-rights', lessonTitle: 'AI, laws, and your rights', lessonPath: '/learn/ai-laws-and-rights',
  },
  {
    question: 'What is a "deepfake"?',
    options: [
      'A very realistic-looking painting created by an AI art generator',
      'AI-generated video or audio that convincingly shows a real person saying or doing something they never actually did',
      'A type of AI that dives deep into the internet to find hidden information',
      'A fake social media profile run by a bot',
    ],
    correctIndex: 1,
    explanation: 'Deepfakes use generative AI to create convincing video or audio of real people. They can make it look and sound like a person said or did something they never did. Deepfakes are used in entertainment but also for misinformation and fraud.',
    lessonId: 'ai-and-misinformation', lessonTitle: 'AI and misinformation', lessonPath: '/learn/ai-and-misinformation',
  },
  {
    question: 'What is a "cobot"?',
    options: [
      'A robot that works in a coffee shop — named after a combination of coffee and robot',
      'A collaborative robot designed to work safely alongside humans, rather than behind safety cages',
      'A robot controlled remotely by a human operator at all times',
      'A robot that can only perform one specific task, like welding',
    ],
    correctIndex: 1,
    explanation: "Cobots (collaborative robots) are designed to share a workspace with humans. Unlike traditional industrial robots that work behind safety cages, cobots move more slowly, have force sensors that detect unexpected contact and stop immediately, and can be easily re-programmed. They're used in small businesses that couldn't afford full robot automation.",
    lessonId: 'ai-and-robotics', lessonTitle: 'AI and robotics', lessonPath: '/learn/ai-and-robotics',
  },
  {
    question: 'How does Spotify decide which songs to recommend to you?',
    options: [
      'It randomly selects songs from artists you have listened to before',
      'It uses human music editors who listen to your playlists and suggest similar songs',
      'It uses collaborative filtering — comparing your listening history to millions of similar users — and audio analysis of the songs themselves',
      'It uses the time of day and your location to guess what mood you are in',
    ],
    correctIndex: 2,
    explanation: 'Spotify uses a combination of collaborative filtering (finding users with similar tastes to you and recommending what they liked), natural language processing (analysing what music writers say about songs), and audio analysis (comparing tempo, key, and instrumentation). Discover Weekly is generated entirely by these AI systems.',
    lessonId: 'ai-in-your-apps', lessonTitle: 'AI in the apps you already use', lessonPath: '/learn/ai-in-your-apps',
  },
  {
    question: 'What does "AI alignment" mean?',
    options: [
      'Making sure all the text in an AI response is correctly formatted',
      'Ensuring AI systems actually do what their developers and users intend, rather than pursuing unintended goals',
      'Arranging different AI systems to work together in the correct order',
      'Checking that AI training data is labelled accurately',
    ],
    correctIndex: 1,
    explanation: "AI alignment is the challenge of making sure AI systems do what we actually want. As AI becomes more powerful, an AI optimising for the wrong thing — even a subtly wrong thing — could cause serious harm. Anthropic's Constitutional AI and RLHF (reinforcement learning from human feedback) are approaches to making Claude more aligned with human values.",
    lessonId: 'ai-safety', lessonTitle: 'AI safety and alignment', lessonPath: '/learn/ai-safety',
  },
  {
    question: 'What is a "token" in the context of language models like Claude?',
    options: [
      'A special password you need to access the AI',
      'A unit of text (roughly a word or part of a word) that the AI processes — language models read and generate text as streams of tokens',
      'A credit you buy to pay for each AI response',
      'A timestamp that records when each word was generated',
    ],
    correctIndex: 1,
    explanation: 'Language models like Claude work with tokens, not individual characters or words. A token is roughly 3-4 characters or about three-quarters of a word in English. The model reads the input as a sequence of tokens and generates the response one token at a time, predicting which token is most likely to come next.',
    lessonId: 'language-models', lessonTitle: 'How do language models like Claude work?', lessonPath: '/learn/language-models',
  },
  {
    question: 'What is a "smart traffic light" powered by AI?',
    options: [
      'A traffic light that changes colour based on what colour cars are most common at that time of day',
      'A traffic light connected to GPS satellites so it always knows exactly how many cars are on the road',
      'A traffic light that uses cameras and AI to measure traffic flow in real time and adjust its timing to reduce congestion — rather than following a fixed timed programme',
      'A traffic light that turns green for emergency vehicles by detecting their sirens',
    ],
    correctIndex: 2,
    explanation: "Traditional traffic lights follow fixed timed cycles regardless of actual traffic. Smart traffic lights use cameras and AI to count vehicles, estimate queue lengths, and dynamically adjust green-light durations. Google's Project Green Light (now deployed in cities globally) has reduced stops at intersections by up to 30%, cutting fuel consumption and emissions.",
    lessonId: 'ai-and-transport', lessonTitle: 'AI and transport', lessonPath: '/learn/ai-and-transport',
  },
  {
    question: 'What is "GDPR" and what does it have to do with AI?',
    options: [
      'A programming language used to build AI systems in Europe',
      'A European law that gives people rights over their personal data — including the right to know when AI makes decisions about them and to challenge those decisions',
      'A standard that certifies AI systems as safe to use in the European Union',
      'A trade agreement that allows European AI companies to sell software globally',
    ],
    correctIndex: 1,
    explanation: "GDPR (General Data Protection Regulation) is a European law covering personal data. It applies to AI in several ways: AI systems that make automated decisions about people (loan approvals, job screening) must be explainable, people can request human review of automated decisions, and companies must have a legal basis to use personal data for AI training.",
    lessonId: 'ai-and-privacy', lessonTitle: 'AI and privacy', lessonPath: '/learn/ai-and-privacy',
  },
  {
    question: 'What is "procedural generation" in video games?',
    options: [
      'The process of writing the storyline for a video game step by step',
      'Using algorithms or AI to generate game content — levels, terrain, items — automatically rather than designing everything by hand',
      'The order in which a game developer releases updates and patches',
      'A system that records how a player moves through a game level',
    ],
    correctIndex: 1,
    explanation: "Procedural generation uses algorithms to create content automatically. Minecraft generates its infinite worlds procedurally — every biome, cave, and mountain is created by an algorithm seeded with a random value, not designed by hand. No Man's Sky used the same technique to generate over 18 quintillion unique planets. AI is making procedural generation smarter, producing more varied and coherent results.",
    lessonId: 'ai-and-gaming', lessonTitle: 'AI and gaming', lessonPath: '/learn/ai-and-gaming',
  },
  {
    question: 'What was the Turing Test?',
    options: [
      'A test that measures how fast a computer can solve mathematical problems',
      'A test proposed by Alan Turing: if a human cannot tell whether they are talking to a machine or a person, the machine can be considered intelligent',
      'A series of programming challenges used to train early AI systems',
      'A test that determines whether a robot can physically perform tasks that humans do',
    ],
    correctIndex: 1,
    explanation: "Alan Turing proposed the 'imitation game' in 1950: if a human evaluator cannot reliably tell whether they're talking to a machine or a human via text, the machine passes the test. It was a landmark idea that shaped AI research for decades, though researchers now debate whether passing the Turing Test is truly equivalent to intelligence.",
    lessonId: 'ai-history', lessonTitle: 'The history of AI', lessonPath: '/ai-history',
  },
  {
    question: 'How does AI help farmers use fewer pesticides?',
    options: [
      'AI tells farmers which days are best for spraying based on the weather forecast',
      'AI uses computer vision on drones or cameras to identify exactly which plants are affected by pests, so chemicals are applied only where needed rather than sprayed across entire fields',
      'AI automatically orders more pesticide before stocks run low to ensure continuous coverage',
      'AI calculates the minimum amount of pesticide that is legally required by agricultural regulations',
    ],
    correctIndex: 1,
    explanation: "John Deere's See & Spray system uses computer vision cameras on tractors that can identify individual weeds among crops. Rather than spraying the entire field, it targets only the weeds — reducing herbicide use by up to 77%. Similar systems detect disease or pest infestations early, allowing targeted treatment rather than blanket application.",
    lessonId: 'ai-and-food', lessonTitle: 'AI and food', lessonPath: '/learn/ai-and-food',
  },
  {
    question: 'What is "virtual try-on" in fashion?',
    options: [
      'A system that lets customers video-call a personal stylist for advice',
      'AI that uses your body measurements and a photo to show how clothes would look on you without physically trying them on',
      'A 3D scanner in changing rooms that suggests what size to buy',
      'An AI chatbot that recommends outfits based on your previous purchases',
    ],
    correctIndex: 1,
    explanation: 'Virtual try-on uses AI to detect body landmarks from a photo and overlay clothing onto your image — so you can see how a garment would look on your body shape without visiting a shop. Zalando and Amazon both offer this to reduce returns, which are a major cost and environmental problem in online fashion.',
    lessonId: 'ai-and-fashion', lessonTitle: 'AI and fashion', lessonPath: '/learn/ai-and-fashion',
  },
]

function getTodayKey(): string {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}

function getDailyQuestions(dateKey: string): ChallengeQuestion[] {
  // Deterministic selection based on date — consistent for all users on same day
  // Use sum of char codes as seed
  let seed = 0
  for (let i = 0; i < dateKey.length; i++) seed += dateKey.charCodeAt(i)

  const indices: number[] = []
  const pool = [...Array(QUESTION_BANK.length).keys()]

  // Simple deterministic shuffle using seed
  const shuffled = pool.slice()
  for (let i = shuffled.length - 1; i > 0; i--) {
    seed = (seed * 1664525 + 1013904223) & 0x7fffffff
    const j = seed % (i + 1)
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  for (let i = 0; i < 3; i++) indices.push(shuffled[i])
  return indices.map(idx => QUESTION_BANK[idx])
}

interface ChallengeState {
  completed: boolean
  score: number
  total: number
}

function loadState(dateKey: string): ChallengeState | null {
  try {
    const raw = localStorage.getItem(`daily-challenge-${dateKey}`)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function saveState(dateKey: string, state: ChallengeState): void {
  try {
    localStorage.setItem(`daily-challenge-${dateKey}`, JSON.stringify(state))
  } catch {
    // ignore
  }
}

export function DailyChallenge() {
  const dateKey = getTodayKey()
  const questions = useMemo(() => getDailyQuestions(dateKey), [dateKey])

  const [expanded, setExpanded] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>([null, null, null])
  const [done, setDone] = useState(false)
  const [savedState, setSavedState] = useState<ChallengeState | null>(() => loadState(dateKey))

  // Already completed today
  if (savedState?.completed) {
    return (
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">&#x2705;</span>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-emerald-800 text-sm">Daily challenge complete!</p>
            <p className="text-emerald-700 text-sm mt-0.5">
              You scored <span className="font-semibold">{savedState.score}/{savedState.total}</span> today. Come back tomorrow for a new challenge.
            </p>
          </div>
          <span className="flex-shrink-0 bg-emerald-700 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            {savedState.score}/{savedState.total}
          </span>
        </div>
      </div>
    )
  }

  if (done) {
    const score = answers.filter((a, i) => a === questions[i].correctIndex).length
    return (
      <div className="bg-white border border-emerald-200 rounded-2xl p-6 space-y-4">
        <div className="text-center space-y-2">
          <div className="text-4xl">{score === 3 ? '&#x1F389;' : score >= 2 ? '&#x1F44D;' : '&#x1F4AA;'}</div>
          <p className="font-bold text-gray-800 text-lg">
            {score === 3 ? 'Perfect score!' : score >= 2 ? 'Well done!' : 'Good effort!'}
          </p>
          <p className="text-gray-600 text-sm">You scored {score} out of 3 on today&rsquo;s challenge.</p>
        </div>
        <div className="space-y-3">
          {questions.map((q, i) => {
            const correct = answers[i] === q.correctIndex
            return (
              <div key={i} className={`rounded-xl p-3 text-sm ${correct ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="flex items-start gap-2">
                  <span>{correct ? '&#x2705;' : '&#x274C;'}</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-xs mb-1">{q.question}</p>
                    <p className={`text-xs leading-relaxed ${correct ? 'text-green-700' : 'text-red-700'}`}>{q.explanation}</p>
                    <Link to={q.lessonPath} className="text-xs text-blue-600 hover:underline mt-1 inline-block">
                      Read: {q.lessonTitle} &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  if (!expanded) {
    return (
      <div className="bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-200 rounded-2xl p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">&#x26A1;</span>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-violet-800 text-sm">Daily challenge</p>
            <p className="text-violet-700 text-sm mt-0.5">3 questions &mdash; takes about 2 minutes. A fresh set every day.</p>
          </div>
          <button
            onClick={() => setExpanded(true)}
            className="flex-shrink-0 bg-violet-700 hover:bg-violet-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
          >
            Start
          </button>
        </div>
      </div>
    )
  }

  const q = questions[currentQ]
  const isAnswered = selected !== null

  function handleSelect(idx: number) {
    if (selected !== null) return
    setSelected(idx)
    const newAnswers = [...answers]
    newAnswers[currentQ] = idx
    setAnswers(newAnswers)
  }

  function handleNext() {
    if (currentQ < 2) {
      setCurrentQ(currentQ + 1)
      setSelected(null)
    } else {
      const finalAnswers = [...answers]
      finalAnswers[currentQ] = selected
      setAnswers(finalAnswers)
      const state: ChallengeState = { completed: true, score: finalAnswers.filter((a, i) => a === questions[i].correctIndex).length, total: 3 }
      saveState(dateKey, state)
      setSavedState(state)
      setDone(true)
    }
  }

  return (
    <div className="bg-white border border-violet-200 rounded-2xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-bold text-violet-800 text-sm">&#x26A1; Daily challenge</p>
        <p className="text-xs text-gray-400">Question {currentQ + 1} of 3</p>
      </div>

      <p className="font-semibold text-gray-800 leading-snug">{q.question}</p>

      <div className="space-y-2">
        {q.options.map((opt, idx) => {
          let bg = 'bg-gray-50 border-gray-200 hover:bg-violet-50 hover:border-violet-300'
          if (isAnswered) {
            if (idx === q.correctIndex) bg = 'bg-green-50 border-green-400'
            else if (idx === selected) bg = 'bg-red-50 border-red-400'
            else bg = 'bg-gray-50 border-gray-200 opacity-60'
          }
          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={isAnswered}
              className={`w-full text-left text-sm px-4 py-3 rounded-xl border transition-all ${bg}`}
            >
              {opt}
            </button>
          )
        })}
      </div>

      {isAnswered && (
        <div className={`rounded-xl p-3 text-sm ${selected === q.correctIndex ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          <p className="font-semibold mb-1">{selected === q.correctIndex ? 'Correct!' : 'Not quite.'}</p>
          <p className="leading-relaxed text-xs">{q.explanation}</p>
        </div>
      )}

      {isAnswered && (
        <button
          onClick={handleNext}
          className="w-full bg-violet-700 hover:bg-violet-800 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
        >
          {currentQ < 2 ? 'Next question' : 'See results'}
        </button>
      )}
    </div>
  )
}
