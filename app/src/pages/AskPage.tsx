import { Link } from '@tanstack/react-router'
import { useState, useRef } from 'react'

interface QA {
  keywords: string[]
  question: string
  answer: string
}

const QA_BANK: QA[] = [
  {
    keywords: ['what is ai', 'what is artificial intelligence', 'ai is', 'how does ai work', 'explain ai'],
    question: 'What is AI?',
    answer:
      'AI stands for Artificial Intelligence. It means computer programs that can do tasks that usually require human-like thinking — such as understanding language, recognising pictures, or making decisions. AI does this by learning from huge amounts of examples (called training data) rather than following rigid step-by-step rules. Claude, the AI that helps build this website, is a language model: it was trained on billions of sentences and learned to predict what a helpful response looks like.',
  },
  {
    keywords: ['what is github', 'github is', 'explain github', 'why github', 'what does github do'],
    question: 'What is GitHub?',
    answer:
      'GitHub is a website where developers (and AI agents!) store, share, and track changes to code. Think of it as Google Drive for code, with a very powerful version history. Every change is recorded as a "commit" — you can see who changed what and go back to any earlier version. GitHub also has "issues" (a to-do list), "pull requests" (proposals for changes), and automated workflows. The people who built this site use GitHub for all of it.',
  },
  {
    keywords: ['what is an api', 'api is', 'explain api', 'how does an api work', 'apis'],
    question: 'What is an API?',
    answer:
      'API stands for Application Programming Interface. It is a way for two different programs to talk to each other. Think of a restaurant: you (the customer) are one program, the kitchen is another, and the waiter is the API. You tell the waiter what you want, the waiter tells the kitchen, the kitchen makes the food, and the waiter brings it back to you. You never go into the kitchen directly. In this app, when the Live Activity page fetches the list of GitHub issues, it uses the GitHub API — it sends a request and GitHub sends back the data.',
  },
  {
    keywords: ['genesis', 'genesis system', 'what is genesis', 'explain genesis', 'how does genesis work'],
    question: 'What is the Genesis system?',
    answer:
      'Genesis is a system that uses AI agents to build software automatically. Instead of a human sitting at a computer writing every line of code, a team of AI agents handles it: one agent plans the work, another writes the code, another reviews quality, and another handles communication. They coordinate through GitHub — creating issues, opening pull requests, and responding to feedback. This entire website was built by Genesis agents with very little human input.',
  },
  {
    keywords: ['how does this website update', 'update itself', 'how does it deploy', 'automatic update', 'ci cd', 'pipeline'],
    question: 'How does this website update automatically?',
    answer:
      'This website uses something called a CI/CD pipeline. "CI" stands for Continuous Integration and "CD" stands for Continuous Deployment. Here is what happens: whenever an AI agent finishes a new feature and merges it into the main branch on GitHub, an automated workflow kicks off. It builds the app, runs some checks, and if everything looks good, it publishes the new version to the live website — all within minutes, with no one pressing "publish".',
  },
  {
    keywords: ['who made this', 'who built this', 'who created this', 'who wrote this'],
    question: 'Who made this website?',
    answer:
      'This website was built almost entirely by AI agents — specifically by the Genesis system created by Gigi (Yosi Sayfan). The agents planned the features, wrote the code, ran the tests, and deployed each update. Gigi oversees the system and can give feedback through GitHub issues. Ronny (that is you!) is learning about the system by using the very thing the system built.',
  },
  {
    keywords: ['what is a commit', 'commits', 'explain commit', 'how do commits work'],
    question: 'What is a commit?',
    answer:
      'A commit is a saved snapshot of a project at a specific moment. Every time a developer (or an AI agent) saves a set of changes, they create a commit with a short message describing what changed — like "Added the feedback page" or "Fixed the quiz timer". Commits are stored permanently, so you can always go back to any earlier version of the project. Think of commits as checkpoints in a video game.',
  },
  {
    keywords: ['what is a pull request', 'pull request', 'pr is', 'explain pull request'],
    question: 'What is a pull request?',
    answer:
      'A pull request (often called a PR) is a proposal to merge changes from one branch into another. When an AI agent finishes working on a new feature, it opens a pull request on GitHub that says "here are my changes — please review and merge them". Automated checks run to make sure nothing is broken, and if all passes, the changes are merged into the main codebase. Then the CI/CD pipeline deploys the update to the live website.',
  },
  {
    keywords: ['what is a branch', 'branches', 'explain branch', 'branching'],
    question: 'What is a branch?',
    answer:
      'A branch is a separate copy of a project where you can make changes without affecting the original. Imagine making a copy of a document to try a completely different introduction — you can experiment freely, and only replace the original if you are happy with the result. In this project, every new feature is developed on its own branch. Once finished and reviewed, it gets merged back into the "main" branch — which is what you see on the live website.',
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
  }

  const matchKw = topicMap[best[0]]
  return QA_BANK.find(e => e.keywords.includes(matchKw)) ?? null
}

export function AskPage() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState<QA | null | 'not-found'>(null)
  const resultRef = useRef<HTMLDivElement>(null)

  function handleAsk(e: React.FormEvent) {
    e.preventDefault()
    const found = findAnswer(query)
    setResult(found ?? 'not-found')
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
  }

  const suggestions = [
    'What is AI?',
    'What is GitHub?',
    'What is an API?',
    'What is the Genesis system?',
    'How does this website update?',
    'Who made this?',
    'What is a commit?',
    'What is a pull request?',
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
            disabled={!query.trim()}
            className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors text-lg"
          >
            Ask &rarr;
          </button>
        </form>

        {/* Suggestions */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Try asking</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => { setQuery(s); setResult(null) }}
                className="px-3 py-1.5 rounded-full border border-purple-200 text-purple-700 text-sm hover:bg-purple-50 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Answer */}
        {result !== null && (
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
                <p className="text-gray-600 leading-relaxed">{result.answer}</p>
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
