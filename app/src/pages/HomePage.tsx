import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useProfile } from '../hooks/useProfile'
import { SearchBar } from '../components/SearchBar'
import { useStreak } from '../hooks/useStreak'

const AI_FACTS = [
  'The first chatbot, ELIZA, was created in 1966 at MIT — it could hold simple conversations by matching patterns in text.',
  'Google Translate processes over 100 billion words every single day.',
  'AlphaFold, an AI by DeepMind, solved a 50-year-old biology problem by predicting the shapes of nearly all known proteins.',
  'The word "robot" comes from the Czech word "robota", meaning forced labour or drudgery.',
  'GPT-4 was trained on roughly 1 trillion words of text — more than any human could read in thousands of lifetimes.',
  'Chess computers first beat a reigning world champion in 1997. The game of Go fell 19 years later, in 2016.',
  'Siri was originally built as a standalone app before Apple acquired the company in 2010 for a reported $200 million.',
  'The term "Artificial Intelligence" was coined in 1956 at a summer workshop at Dartmouth College, USA.',
  'A modern smartphone has more computing power than the computers used to send astronauts to the Moon in 1969.',
  'Netflix estimates its recommendation algorithm saves the company over $1 billion per year by keeping subscribers engaged.',
  'AI can now detect certain cancers from medical scans as accurately as experienced doctors — sometimes more accurately.',
  'The first industrial robot, Unimate, started working on a General Motors assembly line in 1961.',
  'Claude processes your message and generates a full response in a matter of seconds — yet the underlying maths involves billions of calculations.',
  'Spam filters powered by machine learning now catch over 99.9% of spam before it reaches your inbox.',
  'OpenAI\'s ChatGPT reached 100 million users in just 2 months — faster than any consumer app in history.',
  'An AI called DALL-E can generate a photorealistic image from a text description in seconds — a task that would take a human artist hours.',
  'The largest AI models today have more "parameters" (internal numbers) than there are synapses in a human brain.',
  'Waymo\'s self-driving cars have driven over 20 million autonomous miles on public roads.',
  'AI is used to discover new antibiotics — it found a new one called Halicin in 2020 that works against drug-resistant bacteria.',
  'YouTube\'s recommendation algorithm drives over 70% of the total watch time on the platform.',
  'Alan Turing, who proposed the Turing Test in 1950, is widely regarded as the father of theoretical computer science and AI.',
  'Voice recognition accuracy has gone from around 80% in 2010 to over 99% today, thanks to deep learning.',
  'An AI system called Libratus won $1.8 million from professional poker players in a 20-day tournament in 2017.',
  'The human brain has roughly 86 billion neurons — a large AI model has a comparable number of parameters, but works very differently.',
  'Anthropic, the company that built Claude, was founded in 2021 by former members of OpenAI.',
  'AI can compose music, write poetry, and generate art — but it has no feelings about any of it.',
  'The first commercially successful AI product was a spam filter — long before chatbots or image generators.',
  'DeepMind\'s AlphaCode AI can write competitive programming solutions at the level of a typical human software engineer.',
  'Amazon\'s Alexa was launched in 2014 alongside the Echo speaker — it was one of the first AI assistants to live in a dedicated home device.',
  'AI weather models can now predict the weather 10 days ahead as accurately as traditional forecasts did just 5 days ahead a decade ago.',
]

function getTodaysFact(): string {
  const dayIndex = Math.floor(Date.now() / 86400000) % AI_FACTS.length
  return AI_FACTS[dayIndex]
}

type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'

interface Module {
  id: string
  title: string
  description: string
  readingTime?: string
  icon: string
  to: string
  color: string
  difficulty?: Difficulty
}

interface ModuleGroup {
  heading: string
  modules: Module[]
}

const MODULE_GROUPS: ModuleGroup[] = [
  {
    heading: 'Getting started',
    modules: [
      {
        id: 'github-signup',
        title: 'Create your GitHub account',
        description: 'Step-by-step guide to signing up for GitHub — your key to the whole project.',
        readingTime: '5 min',
        icon: '🔑',
        to: '/tutorial/github-signup',
        color: 'blue',
        difficulty: 'Beginner',
      },
      {
        id: 'github-basics',
        title: 'What is GitHub for?',
        description: 'Repos, commits, issues, and pull requests — explained simply, no coding needed.',
        readingTime: '4 min',
        icon: '📁',
        to: '/learn/github-basics',
        color: 'green',
        difficulty: 'Beginner',
      },
      {
        id: 'what-is-api',
        title: 'What is an API?',
        description: 'How programs talk to each other — in plain English, with real-world examples.',
        readingTime: '4 min',
        icon: '🔗',
        to: '/learn/what-is-api',
        color: 'teal',
        difficulty: 'Intermediate',
      },
    ],
  },
  {
    heading: 'Understanding AI',
    modules: [
      {
        id: 'what-is-ai',
        title: 'What is AI?',
        description: 'Artificial intelligence explained without jargon — plus what Claude can and cannot do.',
        readingTime: '5 min',
        icon: '🤖',
        to: '/learn/what-is-ai',
        color: 'purple',
        difficulty: 'Beginner',
      },
      {
        id: 'what-is-ml',
        title: 'What is machine learning?',
        description: 'How computers learn from examples instead of rules — with everyday analogies and real-world uses.',
        readingTime: '6 min',
        icon: '📊',
        to: '/learn/what-is-machine-learning',
        color: 'emerald',
        difficulty: 'Intermediate',
      },
      {
        id: 'how-ai-training-works',
        title: 'How does AI training work?',
        description: 'Datasets, weights, loss functions, and RLHF — all explained in plain language, no maths required.',
        readingTime: '7 min',
        icon: '🧪',
        to: '/learn/how-ai-training-works',
        color: 'violet',
        difficulty: 'Intermediate',
      },
      {
        id: 'neural-network',
        title: 'What is a neural network?',
        description: 'The brain-inspired technology behind modern AI — neurons, weights, layers, and why cats need millions of photos.',
        readingTime: '6 min',
        icon: '🧠',
        to: '/learn/neural-network',
        color: 'pink',
        difficulty: 'Advanced',
      },
      {
        id: 'language-models',
        title: 'How do language models like Claude work?',
        description: 'Tokens, context windows, predicting the next word, and how RLHF makes Claude safe and helpful.',
        readingTime: '7 min',
        icon: '💬',
        to: '/learn/language-models',
        color: 'indigo',
        difficulty: 'Advanced',
      },
      {
        id: 'how-chatbots-work',
        title: 'How do chatbots work?',
        description: 'Rule-based vs. AI chatbots, context windows, hallucination, and when to trust your chatbot.',
        readingTime: '6 min',
        icon: '💬',
        to: '/learn/how-chatbots-work',
        color: 'cyan',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-history',
        title: 'The history of AI',
        description: 'From the Turing Test in 1950 to ChatGPT in 2022 — the key milestones that shaped artificial intelligence.',
        readingTime: '5 min',
        icon: '⏳',
        to: '/ai-history',
        color: 'amber',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-everyday-life',
        title: 'AI in everyday life',
        description: 'Search engines, recommendations, voice assistants, spam filters — AI is already all around you.',
        readingTime: '5 min',
        icon: '🌍',
        to: '/learn/ai-everyday-life',
        color: 'sky',
        difficulty: 'Beginner',
      },
    ],
  },
  {
    heading: 'AI and society',
    modules: [
      {
        id: 'ai-pros-and-cons',
        title: 'AI: the good and the bad',
        description: 'A balanced, honest look at what AI can do for us — and the real risks worth understanding.',
        readingTime: '6 min',
        icon: '⚖️',
        to: '/learn/ai-pros-and-cons',
        color: 'orange',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-bias',
        title: 'What is AI bias?',
        description: 'How AI systems pick up unfair patterns from training data — and real-world examples that show why it matters.',
        readingTime: '6 min',
        icon: '⚖️',
        to: '/learn/ai-bias',
        color: 'orange',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-safety',
        title: 'AI safety and alignment',
        description: 'Why making AI do what we actually want matters, and what Anthropic does to keep Claude safe.',
        readingTime: '6 min',
        icon: '🛡️',
        to: '/learn/ai-safety',
        color: 'teal',
        difficulty: 'Intermediate',
      },
      {
        id: 'prompt-engineering',
        title: 'What is prompt engineering?',
        description: 'How to write better prompts to get clearer, more useful answers from AI — with before and after examples.',
        readingTime: '6 min',
        icon: '✏️',
        to: '/learn/prompt-engineering',
        color: 'violet',
        difficulty: 'Intermediate',
      },
      {
        id: 'trusting-ai',
        title: 'Can I trust what AI says?',
        description: 'Hallucinations, out-of-date info, bias — how to use AI wisely and know when to verify.',
        readingTime: '5 min',
        icon: '🔍',
        to: '/learn/trusting-ai',
        color: 'amber',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-jobs',
        title: 'AI and jobs — what is really changing?',
        description: 'A grounded look at what AI automates, what it assists, what it cannot replace, and what new roles it creates.',
        readingTime: '6 min',
        icon: '💼',
        to: '/learn/ai-and-jobs',
        color: 'emerald',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-creativity',
        title: 'AI and creativity — art, music, and writing',
        description: 'How AI tools help with creative work, and why human creativity still matters more than ever.',
        readingTime: '6 min',
        icon: '🎨',
        to: '/learn/ai-and-creativity',
        color: 'purple',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-in-healthcare',
        title: 'AI in healthcare',
        description: 'How AI is helping doctors diagnose diseases, discover drugs, and personalise treatment.',
        readingTime: '6 min',
        icon: '🩺',
        to: '/learn/ai-in-healthcare',
        color: 'teal',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-environment',
        title: 'AI and the environment',
        description: 'The energy and water AI uses, its carbon footprint, and what the industry is doing to go greener.',
        readingTime: '6 min',
        icon: '🌱',
        to: '/learn/ai-and-environment',
        color: 'green',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-privacy',
        title: 'AI and privacy — who sees your data?',
        description: 'How AI apps collect and use personal data, your rights, and practical tips to stay safe.',
        readingTime: '6 min',
        icon: '🔒',
        to: '/learn/ai-and-privacy',
        color: 'violet',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-education',
        title: 'AI and education — how AI is changing how we learn',
        description: 'Personalised tutoring, teacher tools, academic integrity, and what AI cannot replace.',
        readingTime: '6 min',
        icon: '🎓',
        to: '/learn/ai-and-education',
        color: 'sky',
        difficulty: 'Beginner',
      },
    ],
  },
  {
    heading: 'How software is built',
    modules: [
      {
        id: 'genesis-system',
        title: 'What is the Genesis system?',
        description: 'The AI team that builds this app — see how agents coordinate through GitHub.',
        readingTime: '4 min',
        icon: '⚙️',
        to: '/learn/genesis-system',
        color: 'orange',
        difficulty: 'Beginner',
      },
      {
        id: 'how-this-was-built',
        title: 'How this app was built',
        description: 'The full story — how AI planned, coded, and deployed what you are reading.',
        readingTime: '5 min',
        icon: '🏗️',
        to: '/learn/how-this-was-built',
        color: 'indigo',
        difficulty: 'Intermediate',
      },
      {
        id: 'what-is-ci-cd',
        title: 'How does the website update automatically?',
        description: 'CI/CD explained — how every code change goes live without anyone pressing publish.',
        readingTime: '4 min',
        icon: '🏭',
        to: '/learn/what-is-ci-cd',
        color: 'cyan',
        difficulty: 'Advanced',
      },
      {
        id: 'version-control',
        title: 'How does version control work?',
        description: 'Commits, branches, and merges — using everyday analogies like Google Docs history.',
        readingTime: '4 min',
        icon: '💾',
        to: '/learn/what-is-version-control',
        color: 'sky',
        difficulty: 'Advanced',
      },
      {
        id: 'pull-request',
        title: 'What is a pull request?',
        description: 'How code changes get reviewed and approved before going live — with real examples.',
        readingTime: '4 min',
        icon: '📋',
        to: '/learn/what-is-a-pull-request',
        color: 'violet',
        difficulty: 'Advanced',
      },
      {
        id: 'meet-the-agents',
        title: 'Meet the AI agents',
        description: 'The five agents behind this project — their roles, their loop, and how they coordinate.',
        icon: '👥',
        to: '/agents',
        color: 'violet',
        difficulty: 'Beginner',
      },
    ],
  },
]

// Flat list of all modules for progress counting
const MODULES: Module[] = MODULE_GROUPS.flatMap(g => g.modules)

const COLOR_MAP: Record<string, { border: string; badge: string; button: string }> = {
  blue:   { border: 'hover:border-blue-300',   badge: 'bg-blue-100 text-blue-700',   button: 'bg-blue-600 hover:bg-blue-700 text-white' },
  green:  { border: 'hover:border-green-300',  badge: 'bg-green-100 text-green-700', button: 'bg-green-600 hover:bg-green-700 text-white' },
  purple: { border: 'hover:border-purple-300', badge: 'bg-purple-100 text-purple-700', button: 'bg-purple-600 hover:bg-purple-700 text-white' },
  teal:   { border: 'hover:border-teal-300',   badge: 'bg-teal-100 text-teal-700',   button: 'bg-teal-600 hover:bg-teal-700 text-white' },
  orange: { border: 'hover:border-orange-300', badge: 'bg-orange-100 text-orange-700', button: 'bg-orange-600 hover:bg-orange-700 text-white' },
  violet: { border: 'hover:border-violet-300', badge: 'bg-violet-100 text-violet-700', button: 'bg-violet-600 hover:bg-violet-700 text-white' },
  indigo: { border: 'hover:border-indigo-300', badge: 'bg-indigo-100 text-indigo-700', button: 'bg-indigo-600 hover:bg-indigo-700 text-white' },
  cyan:   { border: 'hover:border-cyan-300',   badge: 'bg-cyan-100 text-cyan-700',     button: 'bg-cyan-600 hover:bg-cyan-700 text-white' },
  sky:     { border: 'hover:border-sky-300',     badge: 'bg-sky-100 text-sky-700',       button: 'bg-sky-600 hover:bg-sky-700 text-white' },
  emerald: { border: 'hover:border-emerald-300', badge: 'bg-emerald-100 text-emerald-700', button: 'bg-emerald-600 hover:bg-emerald-700 text-white' },
  pink:    { border: 'hover:border-pink-300',    badge: 'bg-pink-100 text-pink-700',       button: 'bg-pink-600 hover:bg-pink-700 text-white' },
  amber:   { border: 'hover:border-amber-300',   badge: 'bg-amber-100 text-amber-700',     button: 'bg-amber-600 hover:bg-amber-700 text-white' },
}

const VISITED_KEY = 'ronny-visited-modules'
const QUIZ_KEY = 'ronny-quiz-completed'
const BOOKMARKS_KEY = 'ronny-bookmarks'
const SCORES_KEY = 'ronny-quiz-scores'
const COMPLETION_ORDER_KEY = 'ronny-completion-order'

function loadVisited(): Set<string> {
  try {
    const raw = localStorage.getItem(VISITED_KEY)
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

function loadQuizCompleted(): Set<string> {
  try {
    const raw = localStorage.getItem(QUIZ_KEY)
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

function loadBookmarks(): Set<string> {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY)
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

function saveBookmarks(bookmarks: Set<string>) {
  try {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify([...bookmarks]))
  } catch {
    // ignore
  }
}

function loadScores(): Record<string, { score: number; total: number }> {
  try {
    const raw = localStorage.getItem(SCORES_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

/** Returns up to N most recently completed lesson IDs in reverse-completion order */
function loadRecentlyCompleted(quizCompleted: Set<string>, max: number): string[] {
  try {
    const raw = localStorage.getItem(COMPLETION_ORDER_KEY)
    const ordered: string[] = raw ? JSON.parse(raw) : []
    // Return only IDs still in quizCompleted, most-recent first, up to max
    const recent: string[] = []
    for (let i = ordered.length - 1; i >= 0 && recent.length < max; i--) {
      if (quizCompleted.has(ordered[i])) recent.push(ordered[i])
    }
    return recent
  } catch {
    return []
  }
}

// Lesson-eligible modules for "Lesson of the day" (educational lessons only, not utility pages)
const LESSON_POOL = MODULES.filter(m =>
  !['meet-the-agents'].includes(m.id) && m.readingTime !== undefined
)

function getLessonOfTheDay(quizCompleted: Set<string>): Module | null {
  if (LESSON_POOL.length === 0) return null
  const dayIndex = Math.floor(Date.now() / 86400000)
  // Find the first uncompleted lesson starting from today's index
  for (let offset = 0; offset < LESSON_POOL.length; offset++) {
    const candidate = LESSON_POOL[(dayIndex + offset) % LESSON_POOL.length]
    if (!quizCompleted.has(candidate.id)) return candidate
  }
  return null // all completed
}

const DIFFICULTY_STYLES: Record<Difficulty, string> = {
  Beginner:     'bg-green-100 text-green-700',
  Intermediate: 'bg-amber-100 text-amber-700',
  Advanced:     'bg-red-100 text-red-700',
}

export function HomePage() {
  const [visited, setVisited] = useState<Set<string>>(loadVisited)
  const [bookmarks, setBookmarks] = useState<Set<string>>(loadBookmarks)
  const { profile } = useProfile()
  const { streak, bestStreak } = useStreak()

  const quizCompleted = loadQuizCompleted()
  const quizCompletedCount = MODULES.filter(m => quizCompleted.has(m.id)).length
  const lessonOfTheDay = getLessonOfTheDay(quizCompleted)
  const displayName = profile?.name || 'Ronny'
  const avatar = profile?.avatar || '👋'
  const todaysFact = getTodaysFact()
  const scores = loadScores()

  const recentlyCompletedIds = loadRecentlyCompleted(quizCompleted, 3)
  const recentlyCompletedModules = recentlyCompletedIds
    .map(id => MODULES.find(m => m.id === id))
    .filter((m): m is Module => m !== undefined)

  const bookmarkedModules = MODULES.filter(m => bookmarks.has(m.id))

  function toggleBookmark(id: string) {
    const next = new Set(bookmarks)
    if (next.has(id)) {
      next.delete(id)
    } else {
      next.add(id)
    }
    setBookmarks(next)
    saveBookmarks(next)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center px-4 py-8 sm:py-16">
      <div className="max-w-2xl w-full space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="text-5xl sm:text-6xl" aria-hidden="true">{avatar}</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Hi {displayName}! Welcome to your AI learning journey.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Follow the steps below to learn about GitHub and AI — no experience needed.
          </p>
          {!profile && (
            <Link
              to="/profile"
              className="inline-block text-sm text-blue-500 hover:text-blue-700 underline"
            >
              Personalise this app with your name &rarr;
            </Link>
          )}
        </div>

        {/* Search */}
        <SearchBar />

        {/* Today's AI Fact */}
        <div className="bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-200 rounded-2xl p-4 flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">&#x1F4A1;</span>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-violet-600 uppercase tracking-wide mb-1">Today&apos;s AI fact</p>
            <p className="text-gray-700 text-sm leading-relaxed">{todaysFact}</p>
          </div>
        </div>

        {/* Quiz completion progress bar — always shown */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">Your learning progress</span>
            <span className="text-sm text-gray-500">{quizCompletedCount} of {MODULES.length} lessons completed</span>
          </div>
          <div
            className="w-full bg-gray-100 rounded-full h-3"
            role="progressbar"
            aria-valuenow={quizCompletedCount}
            aria-valuemin={0}
            aria-valuemax={MODULES.length}
            aria-label={`${quizCompletedCount} of ${MODULES.length} lessons completed`}
          >
            <div
              className="bg-blue-500 h-3 rounded-full transition-all duration-500"
              style={{ width: quizCompletedCount > 0 ? `${(quizCompletedCount / MODULES.length) * 100}%` : '2px' }}
            />
          </div>
          {quizCompletedCount === 0 ? (
            <p className="text-sm text-gray-400">Start with a lesson below and complete its quiz to track your progress!</p>
          ) : quizCompletedCount === MODULES.length ? (
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
              <p className="text-green-700 font-medium">
                You have completed all the lessons. Amazing work!
              </p>
              <Link
                to="/certificate"
                className="text-sm font-semibold text-amber-600 hover:text-amber-800 underline flex-shrink-0"
              >
                Get your certificate &rarr;
              </Link>
            </div>
          ) : (
            <Link to="/my-progress" className="text-sm text-blue-500 hover:underline">
              View detailed progress &rarr;
            </Link>
          )}
        </div>

        {/* Learning streak */}
        {streak > 0 && (
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex items-center gap-4">
            <span className="text-3xl flex-shrink-0">&#x1F525;</span>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-orange-800 text-base leading-tight">
                {streak} day{streak !== 1 ? 's' : ''} in a row!
              </p>
              <p className="text-orange-600 text-sm mt-0.5">
                Keep it up &mdash; you are on a learning streak.
                {bestStreak > streak && (
                  <span className="ml-1 text-orange-500">Best: {bestStreak} days.</span>
                )}
                {bestStreak === streak && streak > 1 && (
                  <span className="ml-1 text-orange-500">That is your best yet!</span>
                )}
              </p>
            </div>
          </div>
        )}

        {/* Lesson of the day */}
        {lessonOfTheDay ? (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 sm:p-5 space-y-3">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Lesson of the day</p>
            <Link
              to={lessonOfTheDay.to as '/'}
              onClick={() => {
                const next = new Set(visited)
                next.add(lessonOfTheDay.id)
                setVisited(next)
                localStorage.setItem(VISITED_KEY, JSON.stringify([...next]))
              }}
              className="flex items-center gap-4 group"
            >
              <span className="text-3xl flex-shrink-0">{lessonOfTheDay.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-blue-800 group-hover:underline text-base leading-tight">{lessonOfTheDay.title}</p>
                <p className="text-blue-600 text-sm mt-0.5 leading-relaxed">{lessonOfTheDay.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  {lessonOfTheDay.readingTime && (
                    <span className="text-blue-400 text-xs">{lessonOfTheDay.readingTime} read</span>
                  )}
                  {lessonOfTheDay.difficulty && (
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${DIFFICULTY_STYLES[lessonOfTheDay.difficulty]}`}>
                      {lessonOfTheDay.difficulty}
                    </span>
                  )}
                </div>
              </div>
              <span className="text-blue-400 text-xl flex-shrink-0 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        ) : (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center space-y-1">
            <p className="text-emerald-800 font-semibold">You have completed all the lessons!</p>
            <p className="text-emerald-600 text-sm">Head to My Progress to see your achievements and certificate.</p>
          </div>
        )}

        {/* Recently completed */}
        {recentlyCompletedModules.length > 0 && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 sm:p-5 space-y-3">
            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Recently completed</p>
            <div className="space-y-2">
              {recentlyCompletedModules.map(mod => {
                const modScore = scores[mod.id]
                return (
                  <Link
                    key={mod.id}
                    to={mod.to as '/'}
                    className="flex items-center gap-3 group"
                  >
                    <span className="text-2xl flex-shrink-0">{mod.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-emerald-800 text-sm group-hover:underline leading-tight">{mod.title}</p>
                      {modScore && (
                        <p className="text-xs text-emerald-600 mt-0.5">
                          Quiz score: {modScore.score}/{modScore.total} ({Math.round((modScore.score / modScore.total) * 100)}%)
                        </p>
                      )}
                    </div>
                    <span className="text-emerald-400 text-base flex-shrink-0 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* Bookmarked lessons */}
        {bookmarkedModules.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 space-y-3">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide">Saved for later</p>
            <div className="space-y-2">
              {bookmarkedModules.map(mod => (
                <div key={mod.id} className="flex items-center gap-3 group">
                  <Link
                    to={mod.to as '/'}
                    className="flex items-center gap-3 flex-1 min-w-0"
                  >
                    <span className="text-2xl flex-shrink-0">{mod.icon}</span>
                    <p className="font-semibold text-amber-800 text-sm group-hover:underline leading-tight flex-1 min-w-0">{mod.title}</p>
                  </Link>
                  <button
                    onClick={() => toggleBookmark(mod.id)}
                    className="text-amber-500 hover:text-amber-700 transition-colors flex-shrink-0 text-lg"
                    aria-label={`Remove bookmark for ${mod.title}`}
                    title="Remove bookmark"
                  >
                    &#x2605;
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* For Gigi section */}
        <div className="bg-pink-50 border border-pink-200 rounded-2xl p-4 sm:p-6 space-y-3">
          <p className="text-sm font-semibold text-pink-700 uppercase tracking-wide">For Gigi</p>
          <p className="text-gray-700 leading-relaxed">
            This site is a step-by-step guide for Ronny. Share the link and they can work through it
            at their own pace. Once Ronny has a GitHub account, you can invite them to the project
            so they can follow along in real time.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/invite-ronny"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              How to invite Ronny to GitHub &rarr;
            </Link>
            <a
              href="https://github.com/Sayfan-AI/ronny-learns-ai/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-pink-300 text-pink-700 hover:bg-pink-100 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Give feedback on GitHub &rarr;
            </a>
          </div>
        </div>

        {/* Learning path — grouped by theme */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">Your learning path</h2>
            <p className="text-gray-500 text-sm">Grouped by topic — start anywhere, or work through in order.</p>
          </div>

          {MODULE_GROUPS.map((group) => (
            <section key={group.heading} className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-200" />
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2 whitespace-nowrap">
                  {group.heading}
                </h3>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              <div className="space-y-2">
                {group.modules.map((mod) => {
                  const done = visited.has(mod.id)
                  const isBookmarked = bookmarks.has(mod.id)
                  const modScore = scores[mod.id]
                  const colors = COLOR_MAP[mod.color] ?? COLOR_MAP['blue']
                  return (
                    <div
                      key={mod.id}
                      className={`bg-white rounded-xl shadow-sm border-2 transition-all duration-200 flex items-center gap-3 sm:gap-4 ${
                        done ? 'border-green-300' : `border-gray-100 ${colors.border}`
                      }`}
                    >
                      <Link
                        to={mod.to}
                        onClick={() => {
                          const next = new Set(visited)
                          next.add(mod.id)
                          setVisited(next)
                          localStorage.setItem(VISITED_KEY, JSON.stringify([...next]))
                        }}
                        className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0 p-4 sm:p-5"
                      >
                        {/* Done indicator */}
                        <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                          done ? 'bg-green-500 text-white' : colors.badge
                        }`}>
                          {done ? '✓' : mod.icon}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-800 text-sm sm:text-base leading-tight">{mod.title}</h4>
                          <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{mod.description}</p>
                          <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                            {mod.readingTime && (
                              <span className="text-gray-400 text-xs">{mod.readingTime} read</span>
                            )}
                            {mod.difficulty && (
                              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${DIFFICULTY_STYLES[mod.difficulty]}`}>
                                {mod.difficulty}
                              </span>
                            )}
                            {modScore && (
                              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                                modScore.score / modScore.total >= 0.8
                                  ? 'bg-green-100 text-green-700'
                                  : modScore.score / modScore.total >= 0.5
                                  ? 'bg-amber-100 text-amber-700'
                                  : 'bg-red-100 text-red-700'
                              }`}>
                                {Math.round((modScore.score / modScore.total) * 100)}%
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Arrow */}
                        <span className="text-gray-400 text-lg sm:text-xl flex-shrink-0">&rarr;</span>
                      </Link>

                      {/* Bookmark toggle */}
                      <button
                        onClick={() => toggleBookmark(mod.id)}
                        className={`pr-4 flex-shrink-0 text-xl transition-colors ${
                          isBookmarked ? 'text-amber-400 hover:text-amber-600' : 'text-gray-200 hover:text-amber-300'
                        }`}
                        aria-label={isBookmarked ? `Remove bookmark for ${mod.title}` : `Bookmark ${mod.title}`}
                        title={isBookmarked ? 'Remove bookmark' : 'Save for later'}
                      >
                        {isBookmarked ? '★' : '☆'}
                      </button>
                    </div>
                  )
                })}
              </div>
            </section>
          ))}
        </div>

        <p className="text-gray-400 text-sm text-center">
          Most lessons include a short quiz at the end to check what you learned.
        </p>

        {/* Participate section */}
        <div className="border-t border-gray-200 pt-6 space-y-3">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">Get involved</h2>
          <div className="space-y-3">
            <Link
              to="/ask"
              className="bg-purple-50 border border-purple-200 rounded-xl p-5 hover:bg-purple-100 hover:border-purple-300 transition-all flex items-center gap-4"
            >
              <span className="text-3xl flex-shrink-0">&#x1F914;</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-purple-800 text-base">Ask a question</h3>
                <p className="text-purple-600 text-sm">Get a plain-language answer to any question about AI, GitHub, or this project.</p>
              </div>
              <span className="text-purple-400 text-xl flex-shrink-0">&rarr;</span>
            </Link>

            <Link
              to="/feedback"
              className="bg-blue-50 border border-blue-200 rounded-xl p-5 hover:bg-blue-100 hover:border-blue-300 transition-all flex items-center gap-4"
            >
              <span className="text-3xl flex-shrink-0">&#x1F4AC;</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-blue-800 text-base">Share your thoughts</h3>
                <p className="text-blue-600 text-sm">Leave feedback or ask something — no GitHub account needed.</p>
              </div>
              <span className="text-blue-400 text-xl flex-shrink-0">&rarr;</span>
            </Link>

            <Link
              to="/my-progress"
              className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 hover:bg-emerald-100 hover:border-emerald-300 transition-all flex items-center gap-4"
            >
              <span className="text-3xl flex-shrink-0">&#x1F4AA;</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-emerald-800 text-base">My progress</h3>
                <p className="text-emerald-600 text-sm">See which modules you have visited and how far you have come.</p>
              </div>
              <span className="text-emerald-400 text-xl flex-shrink-0">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Tools section */}
        <div className="border-t border-gray-200 pt-6 space-y-3">
          <h2 className="text-xl font-semibold text-gray-700 text-center">Useful tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              to="/glossary"
              className="bg-violet-50 border border-violet-200 rounded-xl p-4 hover:bg-violet-100 transition-colors flex items-center gap-3"
            >
              <span className="text-2xl flex-shrink-0">&#x1F4D6;</span>
              <div>
                <p className="font-semibold text-violet-800 text-sm">Glossary</p>
                <p className="text-violet-600 text-xs">Plain-English definitions for every AI term.</p>
              </div>
            </Link>
            <Link
              to="/learning-recap"
              className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 hover:bg-indigo-100 transition-colors flex items-center gap-3"
            >
              <span className="text-2xl flex-shrink-0">&#x1F393;</span>
              <div>
                <p className="font-semibold text-indigo-800 text-sm">Learning recap</p>
                <p className="text-indigo-600 text-xs">A visual overview of everything you have learned.</p>
              </div>
            </Link>
            <Link
              to="/quiz-review"
              className="bg-amber-50 border border-amber-200 rounded-xl p-4 hover:bg-amber-100 transition-colors flex items-center gap-3"
            >
              <span className="text-2xl flex-shrink-0">&#x1F4DD;</span>
              <div>
                <p className="font-semibold text-amber-800 text-sm">Quiz review</p>
                <p className="text-amber-600 text-xs">Retry questions you got wrong to lock in your learning.</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Next steps CTA */}
        <div className="border-t border-gray-200 pt-6">
          <Link
            to="/learn/next-steps"
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-md p-4 sm:p-6 flex items-center gap-3 sm:gap-4 transition-colors duration-200"
          >
            <span className="text-3xl sm:text-4xl flex-shrink-0">&#x1F680;</span>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white text-lg sm:text-xl leading-tight">Ready to get involved?</h3>
              <p className="text-emerald-100 text-sm mt-1">After you have gone through the modules, here is how to go from learning to doing.</p>
            </div>
            <span className="text-white text-xl flex-shrink-0">&rarr;</span>
          </Link>
        </div>

        {/* Explore section */}
        <div className="border-t border-gray-200 pt-6 space-y-4">
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-semibold text-gray-700">Explore the real thing</h2>
            <p className="text-gray-500 text-sm">See the AI at work — hands on.</p>
          </div>

          <div className="space-y-3">
            <Link
              to="/explore/live-activity"
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-indigo-200 transition-all duration-200 flex items-center gap-4"
            >
              <span className="text-3xl flex-shrink-0">📋</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800 text-base">Live Activity</h3>
                <p className="text-gray-500 text-sm">See the real GitHub issues from this project — fetched live right now.</p>
              </div>
              <span className="text-gray-400 text-xl flex-shrink-0">&rarr;</span>
            </Link>

            <Link
              to="/explore/how-agents-work"
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-violet-200 transition-all duration-200 flex items-center gap-4"
            >
              <span className="text-3xl flex-shrink-0">🔄</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800 text-base">How the agents work</h3>
                <p className="text-gray-500 text-sm">The genesis dev loop from trigger to deployed website — with a quiz.</p>
              </div>
              <span className="text-gray-400 text-xl flex-shrink-0">&rarr;</span>
            </Link>

            <Link
              to="/explore/your-journey"
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-emerald-200 transition-all duration-200 flex items-center gap-4"
            >
              <span className="text-3xl flex-shrink-0">🎉</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800 text-base">Your learning journey</h3>
                <p className="text-gray-500 text-sm">A summary of everything you have learned and links to explore the real project.</p>
              </div>
              <span className="text-gray-400 text-xl flex-shrink-0">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* For Gigi bottom */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-6 space-y-3">
          <h2 className="text-lg font-semibold text-amber-800">For Gigi</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            This site was built by the Genesis AI system to help Ronny learn about AI, GitHub, and this project.
            It updates automatically as new lessons are added.
          </p>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>To invite Ronny to GitHub:</strong>{' '}
              <Link to="/invite-ronny" className="text-blue-600 hover:underline">
                see the step-by-step invite guide
              </Link>{' '}
              or go directly to{' '}
              <a
                href="https://github.com/Sayfan-AI/ronny-learns-ai/settings/access"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                repository settings
              </a>{' '}
              and add Ronny as a collaborator.
            </p>
            <p>
              <strong>To give feedback or request changes:</strong> open an issue in the{' '}
              <a
                href="https://github.com/Sayfan-AI/ronny-learns-ai/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub repository
              </a>.
              The AI agents monitor issues and will act on your requests automatically.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
