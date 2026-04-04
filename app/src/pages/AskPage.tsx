import { Link } from '@tanstack/react-router'
import { useState, useRef } from 'react'
import { recordQuestionAsked } from '../hooks/useBadges'

interface QA {
  keywords: string[]
  question: string
  answer: string
  followUps?: string[]
}

const QA_BANK: QA[] = [
  {
    keywords: ['what is ai', 'what is artificial intelligence', 'ai is', 'how does ai work', 'explain ai'],
    question: 'What is AI?',
    answer:
      'AI stands for Artificial Intelligence. It means computer programs that can do tasks that usually require human-like thinking — such as understanding language, recognising pictures, or making decisions.\n\nAI does this by **learning from huge amounts of examples** (called training data) rather than following rigid step-by-step rules.\n\nClaude, the AI that helps build this website, is a language model: it was trained on billions of sentences and learned to predict what a helpful response looks like.',
    followUps: ['What is machine learning?', 'What is a neural network?', 'How was Claude trained?'],
  },
  {
    keywords: ['what is github', 'github is', 'explain github', 'why github', 'what does github do'],
    question: 'What is GitHub?',
    answer:
      'GitHub is a website where developers (and AI agents!) store, share, and track changes to code. Think of it as **Google Drive for code**, with a very powerful version history.\n\nEvery change is recorded as a "commit" — you can see who changed what and go back to any earlier version.\n\nGitHub also has:\n- **Issues** — a to-do list for the project\n- **Pull requests** — proposals for new changes\n- **Workflows** — automated tasks that run on every change\n\nThe people who built this site use GitHub for all of it.',
    followUps: ['What is a commit?', 'What is a pull request?', 'What is a branch?'],
  },
  {
    keywords: ['what is an api', 'api is', 'explain api', 'how does an api work', 'apis'],
    question: 'What is an API?',
    answer:
      'API stands for **Application Programming Interface**. It is a way for two different programs to talk to each other.\n\nThink of a restaurant:\n- You (the customer) are one program\n- The kitchen is another program\n- The waiter is the API\n\nYou tell the waiter what you want, the waiter tells the kitchen, the kitchen makes the food, and the waiter brings it back. You never go into the kitchen directly.\n\nIn this app, when the Live Activity page fetches GitHub issues, it uses the GitHub API — it sends a request and GitHub sends back the data.',
    followUps: ['What is GitHub?', 'How does the website update automatically?', 'What is the Genesis system?'],
  },
  {
    keywords: ['genesis', 'genesis system', 'what is genesis', 'explain genesis', 'how does genesis work'],
    question: 'What is the Genesis system?',
    answer:
      'Genesis is a system that uses **AI agents to build software automatically**.\n\nInstead of a human sitting at a computer writing every line of code, a team of AI agents handles it:\n- One agent **plans the work**\n- Another **writes the code**\n- Another **reviews quality**\n- Another **handles communication**\n\nThey coordinate through GitHub — creating issues, opening pull requests, and responding to feedback. This entire website was built by Genesis agents with very little human input.',
    followUps: ['Who made this website?', 'How does the website update automatically?', 'What is a pull request?'],
  },
  {
    keywords: ['how does this website update', 'update itself', 'how does it deploy', 'automatic update', 'ci cd', 'pipeline'],
    question: 'How does this website update automatically?',
    answer:
      'This website uses something called a **CI/CD pipeline**.\n\n- **CI** stands for Continuous Integration\n- **CD** stands for Continuous Deployment\n\nHere is what happens:\n1. An AI agent finishes a new feature\n2. It merges the code into the main branch on GitHub\n3. An automated workflow kicks off automatically\n4. It builds the app and runs some checks\n5. If everything looks good, it **publishes the new version to the live website** — all within minutes, with no one pressing "publish".',
    followUps: ['What is GitHub?', 'What is a pull request?', 'What is the Genesis system?'],
  },
  {
    keywords: ['who made this', 'who built this', 'who created this', 'who wrote this'],
    question: 'Who made this website?',
    answer:
      'This website was built almost entirely by **AI agents** — specifically by the Genesis system created by **Gigi (Yosi Sayfan)**.\n\nThe agents:\n- Planned the features\n- Wrote the code\n- Ran the tests\n- Deployed each update\n\nGigi oversees the system and can give feedback through GitHub issues.\n\nRonny (that is you!) is learning about the system by using the very thing the system built.',
    followUps: ['What is the Genesis system?', 'How does the website update automatically?', 'What is AI?'],
  },
  {
    keywords: ['what is a commit', 'commits', 'explain commit', 'how do commits work'],
    question: 'What is a commit?',
    answer:
      'A commit is a **saved snapshot of a project** at a specific moment.\n\nEvery time a developer (or an AI agent) saves a set of changes, they create a commit with a short message describing what changed — like "Added the feedback page" or "Fixed the quiz timer".\n\nCommits are stored permanently, so you can always go back to any earlier version of the project.\n\n**Think of commits as checkpoints in a video game** — you can always reload from any earlier save.',
    followUps: ['What is a branch?', 'What is a pull request?', 'What is GitHub?'],
  },
  {
    keywords: ['what is a pull request', 'pull request', 'pr is', 'explain pull request'],
    question: 'What is a pull request?',
    answer:
      'A pull request (often called a **PR**) is a proposal to merge changes from one branch into another.\n\nWhen an AI agent finishes working on a new feature, it opens a pull request on GitHub that says "here are my changes — please review and merge them".\n\nAutomated checks run to make sure nothing is broken, and if all passes, the changes are **merged into the main codebase**. Then the CI/CD pipeline deploys the update to the live website.',
    followUps: ['What is a branch?', 'What is a commit?', 'How does the website update automatically?'],
  },
  {
    keywords: ['what is a branch', 'branches', 'explain branch', 'branching'],
    question: 'What is a branch?',
    answer:
      'A branch is a **separate copy of a project** where you can make changes without affecting the original.\n\nImagine making a copy of a document to try a completely different introduction — you can experiment freely, and only replace the original if you are happy with the result.\n\nIn this project, every new feature is developed on its own branch. Once finished and reviewed, it gets **merged back into the "main" branch** — which is what you see on the live website.',
    followUps: ['What is a commit?', 'What is a pull request?', 'What is GitHub?'],
  },
  {
    keywords: ['what is a neural network', 'neural network', 'neurons', 'how do neural networks work'],
    question: 'What is a neural network?',
    answer:
      'A neural network is a computer system loosely inspired by the human brain.\n\nIt is made up of **layers of simple units called neurons**. Each neuron:\n- Receives numbers as inputs\n- Multiplies each by a "weight" (importance score)\n- Adds them up and passes a result to the next layer\n\nThe network learns by adjusting these weights based on millions of examples — getting a little better each time it makes a mistake.\n\n**Modern AI (including Claude) is built on neural networks.**',
    followUps: ['What is machine learning?', 'How do language models work?', 'What is AI?'],
  },
  {
    keywords: ['what is machine learning', 'machine learning', 'ml is', 'how does machine learning work'],
    question: 'What is machine learning?',
    answer:
      'Machine learning is a way of **teaching computers by example** instead of writing explicit rules.\n\nTraditional programming: you write rules.\nMachine learning: you provide examples and the program figures out the rules itself.\n\nFor instance, instead of programming every rule for "what is spam email", you show the program thousands of spam emails and thousands of normal emails — and it learns to tell them apart.\n\nThis is how most modern AI works, including image recognition, voice assistants, and language models.',
    followUps: ['What is a neural network?', 'How do language models work?', 'What is AI?'],
  },
  {
    keywords: ['how was claude trained', 'how did claude learn', 'claude training', 'rlhf', 'constitutional ai'],
    question: 'How was Claude trained?',
    answer:
      'Claude was trained by Anthropic in several stages:\n\n1. **Pre-training** — Claude read billions of pages of text and learned to predict the next word. This gave it general knowledge and language ability.\n\n2. **RLHF (Reinforcement Learning from Human Feedback)** — human raters compared pairs of Claude responses and said which was better. Claude was trained to produce the kinds of answers humans rated highly.\n\n3. **Constitutional AI** — Anthropic gave Claude a set of principles and had it critique and revise its own responses against those principles. This makes Claude helpful without being harmful.',
    followUps: ['What is machine learning?', 'How do language models work?', 'What is AI?'],
  },
]

function findAnswer(query: string): QA | null {
  const q = query.toLowerCase().trim()
  if (!q) return null

  for (const entry of QA_BANK) {
    for (const kw of entry.keywords) {
      if (q.includes(kw) || kw.includes(q.replace(/[^a-z0-9 ]/g, ''))) {
        return entry
      }
    }
  }

  // Keyword matching fallback
  const words = q.split(/\s+/)
  const topics: Record<string, string[]> = {
    ai: ['ai', 'artificial', 'intelligence', 'claude', 'llm', 'model'],
    github: ['github', 'repo', 'repository', 'issue', 'issues'],
    api: ['api', 'interface', 'request', 'response', 'waiter'],
    genesis: ['genesis', 'agent', 'agents', 'orchestrator'],
    update: ['update', 'deploy', 'deployment', 'pipeline', 'ci', 'cd'],
    who: ['who', 'made', 'built', 'created', 'wrote'],
    commit: ['commit', 'snapshot', 'save', 'history'],
    pr: ['pull', 'pr', 'merge', 'proposal'],
    branch: ['branch', 'branches', 'copy', 'feature'],
    neural: ['neural', 'neuron', 'network', 'deep', 'learning'],
    ml: ['machine', 'learning', 'train', 'training', 'model'],
  }

  const scores: Record<string, number> = {}
  for (const word of words) {
    for (const [topic, kws] of Object.entries(topics)) {
      if (kws.some(k => word.includes(k) || k.includes(word))) {
        scores[topic] = (scores[topic] || 0) + 1
      }
    }
  }

  const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]
  if (!best || best[1] === 0) return null

  const topicMap: Record<string, string> = {
    ai: 'what is ai',
    github: 'what is github',
    api: 'what is an api',
    genesis: 'genesis system',
    update: 'how does this website update',
    who: 'who made this',
    commit: 'what is a commit',
    pr: 'what is a pull request',
    branch: 'what is a branch',
    neural: 'what is a neural network',
    ml: 'what is machine learning',
  }

  const matchKw = topicMap[best[0]]
  return QA_BANK.find(e => e.keywords.includes(matchKw)) ?? null
}

/** Render text with **bold** and newlines */
function MarkdownText({ text }: { text: string }) {
  const lines = text.split('\n')
  return (
    <div className="space-y-2">
      {lines.map((line, i) => {
        if (line === '') return <div key={i} className="h-1" />
        // Parse **bold**
        const parts = line.split(/\*\*(.+?)\*\*/g)
        const rendered = parts.map((part, j) =>
          j % 2 === 1 ? <strong key={j}>{part}</strong> : <span key={j}>{part}</span>
        )
        // Detect list items
        if (line.startsWith('- ')) {
          const content = line.slice(2)
          const contentParts = content.split(/\*\*(.+?)\*\*/g)
          const contentRendered = contentParts.map((part, j) =>
            j % 2 === 1 ? <strong key={j}>{part}</strong> : <span key={j}>{part}</span>
          )
          return (
            <div key={i} className="flex gap-2">
              <span className="text-purple-400 flex-shrink-0">•</span>
              <span>{contentRendered}</span>
            </div>
          )
        }
        // Detect numbered list items
        const numMatch = line.match(/^(\d+)\. (.+)$/)
        if (numMatch) {
          const numContent = numMatch[2]
          const numParts = numContent.split(/\*\*(.+?)\*\*/g)
          const numRendered = numParts.map((part, j) =>
            j % 2 === 1 ? <strong key={j}>{part}</strong> : <span key={j}>{part}</span>
          )
          return (
            <div key={i} className="flex gap-2">
              <span className="text-purple-500 font-bold flex-shrink-0 min-w-[1.5rem]">{numMatch[1]}.</span>
              <span>{numRendered}</span>
            </div>
          )
        }
        return <p key={i}>{rendered}</p>
      })}
    </div>
  )
}

const MAX_HISTORY = 3

export function AskPage() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState<QA | null | 'not-found'>(null)
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState<string[]>([])
  const resultRef = useRef<HTMLDivElement>(null)

  function handleAsk(e: React.FormEvent) {
    e.preventDefault()
    if (!query.trim()) return
    askQuestion(query)
  }

  function askQuestion(q: string) {
    setQuery(q)
    setLoading(true)
    setResult(null)
    recordQuestionAsked()

    // Simulate a brief thinking delay for UX
    setTimeout(() => {
      const found = findAnswer(q)
      setResult(found ?? 'not-found')
      setLoading(false)
      setHistory(prev => {
        const next = [q, ...prev.filter(h => h !== q)].slice(0, MAX_HISTORY)
        return next
      })
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
    }, 800)
  }

  const suggestions = [
    'What is AI?',
    'What is GitHub?',
    'What is an API?',
    'What is the Genesis system?',
    'How does this website update?',
    'Who made this?',
    'What is a neural network?',
    'What is machine learning?',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white px-4 py-10">
      <div className="max-w-lg mx-auto space-y-8">

        {/* Header */}
        <div className="space-y-3">
          <Link to="/" className="text-blue-500 hover:underline text-sm">
            &larr; Back to home
          </Link>
          <div className="text-center space-y-3">
            <div className="text-5xl">&#x1F914;</div>
            <h1 className="text-3xl font-bold text-gray-800">Ask a question</h1>
            <p className="text-gray-600 leading-relaxed">
              Curious about something? Type your question and get a plain-language answer.
            </p>
          </div>
        </div>

        {/* Ask form */}
        <form onSubmit={handleAsk} className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <label htmlFor="ask-input" className="block text-sm font-semibold text-gray-700">
            What would you like to know?
          </label>
          <input
            id="ask-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. What is GitHub?"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-shadow text-lg"
            autoComplete="off"
          />
          <button
            type="submit"
            disabled={!query.trim() || loading}
            className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors text-lg"
          >
            {loading ? 'Thinking...' : 'Ask \u2192'}
          </button>
        </form>

        {/* Suggestions */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Try asking</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => askQuestion(s)}
                disabled={loading}
                className="px-3 py-1.5 rounded-full border border-purple-200 text-purple-700 text-sm hover:bg-purple-50 transition-colors disabled:opacity-50"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Recent questions */}
        {history.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Recent questions</p>
            <div className="space-y-1">
              {history.map((h) => (
                <button
                  key={h}
                  onClick={() => askQuestion(h)}
                  disabled={loading}
                  className="w-full text-left px-3 py-2 rounded-lg border border-gray-100 text-gray-600 text-sm hover:bg-gray-50 transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  <span className="text-gray-400">&#x1F550;</span>
                  {h}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Loading state */}
        {loading && (
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4">
            <span className="text-2xl">&#x1F916;</span>
            <div>
              <p className="font-semibold text-gray-700">Claude is thinking</p>
              <p className="text-gray-500 text-sm animate-pulse">&#x2022; &#x2022; &#x2022;</p>
            </div>
          </div>
        )}

        {/* Answer */}
        {!loading && result !== null && (
          <div ref={resultRef}>
            {result === 'not-found' ? (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 space-y-3">
                <p className="text-2xl">&#x1F914;</p>
                <p className="font-semibold text-amber-800">Great question — we do not have an answer for that yet.</p>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Try asking one of the suggested questions above, or leave your question as feedback
                  and the AI agents will see it.
                </p>
                <Link
                  to="/feedback"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
                >
                  Leave feedback &rarr;
                </Link>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">&#x1F4A1;</span>
                  <h2 className="text-xl font-bold text-gray-800">{result.question}</h2>
                </div>
                <div className="text-gray-600 leading-relaxed text-base">
                  <MarkdownText text={result.answer} />
                </div>

                {/* Follow-up suggestions */}
                {result.followUps && result.followUps.length > 0 && (
                  <div className="border-t border-gray-100 pt-4 space-y-2">
                    <p className="text-sm font-semibold text-gray-500">You might also want to ask:</p>
                    <div className="flex flex-wrap gap-2">
                      {result.followUps.map((fu) => (
                        <button
                          key={fu}
                          onClick={() => askQuestion(fu)}
                          className="px-3 py-1.5 rounded-full border border-blue-200 text-blue-700 text-sm hover:bg-blue-50 transition-colors"
                        >
                          {fu}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="border-t border-gray-100 pt-4 flex gap-3">
                  <button
                    onClick={() => { setQuery(''); setResult(null) }}
                    className="px-4 py-2 rounded-xl border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    Ask another question
                  </button>
                  <Link
                    to="/feedback"
                    className="px-4 py-2 rounded-xl border border-purple-200 text-purple-700 text-sm font-medium hover:bg-purple-50 transition-colors"
                  >
                    Leave feedback
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  )
}
