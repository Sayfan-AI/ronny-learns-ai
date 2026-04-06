import { useState, useCallback } from 'react'
import { Link } from '@tanstack/react-router'

const BOOKMARKS_KEY = 'ronny-bookmarks'

// All lessons with their titles, paths, and difficulty
const ALL_LESSONS: Array<{ id: string; icon: string; title: string; to: string; difficulty: 'Beginner' | 'Intermediate' | 'Advanced'; readingTime: string }> = [
  { id: 'github-signup',    icon: '&#x1F511;', title: 'Create your GitHub account',        to: '/tutorial/github-signup',               difficulty: 'Beginner',     readingTime: '5 min' },
  { id: 'github-basics',    icon: '&#x1F4C1;', title: 'What is GitHub for?',               to: '/learn/github-basics',                  difficulty: 'Beginner',     readingTime: '4 min' },
  { id: 'what-is-api',      icon: '&#x1F517;', title: 'What is an API?',                   to: '/learn/what-is-api',                    difficulty: 'Intermediate', readingTime: '4 min' },
  { id: 'what-is-ai',            icon: '&#x1F916;', title: 'What is AI?',                              to: '/learn/what-is-ai',                     difficulty: 'Beginner',     readingTime: '5 min' },
  { id: 'what-is-ml',            icon: '&#x1F4CA;', title: 'What is machine learning?',               to: '/learn/what-is-machine-learning',       difficulty: 'Intermediate', readingTime: '6 min' },
  { id: 'how-ai-training-works', icon: '&#x1F3CB;', title: 'How does AI training work?',              to: '/learn/how-ai-training-works',          difficulty: 'Intermediate', readingTime: '7 min' },
  { id: 'neural-network',        icon: '&#x1F9E0;', title: 'What is a neural network?',               to: '/learn/neural-network',                 difficulty: 'Advanced',     readingTime: '6 min' },
  { id: 'language-models',       icon: '&#x1F4AC;', title: 'How do language models work?',            to: '/learn/language-models',                difficulty: 'Advanced',     readingTime: '7 min' },
  { id: 'how-chatbots-work',     icon: '&#x1F4AC;', title: 'How do chatbots work?',                   to: '/learn/how-chatbots-work',              difficulty: 'Beginner',     readingTime: '6 min' },
  { id: 'ai-history',            icon: '&#x1F4DC;', title: 'The history of AI',                       to: '/ai-history',                           difficulty: 'Beginner',     readingTime: '5 min' },
  { id: 'ai-everyday-life',      icon: '&#x1F30D;', title: 'AI in everyday life',                     to: '/learn/ai-everyday-life',               difficulty: 'Beginner',     readingTime: '5 min' },
  { id: 'ai-pros-and-cons',      icon: '&#x2696;&#xFE0F;', title: 'AI: the good and the bad',        to: '/learn/ai-pros-and-cons',               difficulty: 'Beginner',     readingTime: '6 min' },
  { id: 'ai-bias',               icon: '&#x2696;&#xFE0F;', title: 'What is AI bias?',                 to: '/learn/ai-bias',                        difficulty: 'Intermediate', readingTime: '6 min' },
  { id: 'ai-safety',             icon: '&#x1F6E1;&#xFE0F;', title: 'AI safety and alignment',        to: '/learn/ai-safety',                      difficulty: 'Intermediate', readingTime: '6 min' },
  { id: 'prompt-engineering',    icon: '&#x270F;&#xFE0F;', title: 'What is prompt engineering?',     to: '/learn/prompt-engineering',             difficulty: 'Intermediate', readingTime: '5 min' },
  { id: 'trusting-ai',           icon: '&#x1F50D;', title: 'Can I trust what AI says?',               to: '/learn/trusting-ai',                    difficulty: 'Intermediate', readingTime: '5 min' },
  { id: 'ai-in-healthcare',      icon: '&#x1FA7A;', title: 'AI in healthcare',                        to: '/learn/ai-in-healthcare',               difficulty: 'Intermediate', readingTime: '6 min' },
  { id: 'future-of-ai',          icon: '&#x1F52D;', title: 'What does the future of AI look like?',  to: '/learn/future-of-ai',                   difficulty: 'Intermediate', readingTime: '6 min' },
  { id: 'ai-in-your-apps',       icon: '&#x1F4F1;', title: 'AI in the apps you already use',          to: '/learn/ai-in-your-apps',                difficulty: 'Beginner',     readingTime: '5 min' },
  { id: 'ai-laws-and-rights',    icon: '&#x2696;&#xFE0F;', title: 'AI, laws, and your rights',       to: '/learn/ai-laws-and-rights',             difficulty: 'Intermediate', readingTime: '5 min' },
  { id: 'ai-for-accessibility',  icon: '&#x267F;',  title: 'AI for accessibility',                   to: '/learn/ai-for-accessibility',           difficulty: 'Beginner',     readingTime: '5 min' },
  { id: 'ai-productivity-tools', icon: '&#x26A1;',  title: 'AI and your productivity',               to: '/learn/ai-productivity-tools',          difficulty: 'Beginner',     readingTime: '5 min' },
  { id: 'how-to-use-ai-safely',  icon: '&#x1F6E1;&#xFE0F;', title: 'How to use AI safely',           to: '/learn/how-to-use-ai-safely',           difficulty: 'Beginner',     readingTime: '5 min' },
  { id: 'genesis-system',        icon: '&#x2699;&#xFE0F;', title: 'What is the Genesis system?',     to: '/learn/genesis-system',                 difficulty: 'Beginner',     readingTime: '5 min' },
  { id: 'how-this-was-built',    icon: '&#x1F528;', title: 'How this app was built',                  to: '/learn/how-this-was-built',             difficulty: 'Intermediate', readingTime: '5 min' },
  { id: 'what-is-ci-cd',         icon: '&#x1F680;', title: 'How does the website update?',            to: '/learn/what-is-ci-cd',                  difficulty: 'Advanced',     readingTime: '6 min' },
  { id: 'version-control',       icon: '&#x1F4BE;', title: 'How does version control work?',          to: '/learn/what-is-version-control',        difficulty: 'Advanced',     readingTime: '5 min' },
  { id: 'pull-request',          icon: '&#x1F501;', title: 'What is a pull request?',                 to: '/learn/what-is-a-pull-request',         difficulty: 'Advanced',     readingTime: '5 min' },
  { id: 'meet-the-agents',       icon: '&#x1F465;', title: 'Meet the AI agents',                      to: '/agents',                               difficulty: 'Beginner',     readingTime: '5 min' },
]

const LESSON_MAP = new Map(ALL_LESSONS.map(l => [l.id, l]))

const DIFFICULTY_COLOURS: Record<string, string> = {
  Beginner:     'bg-green-100 text-green-700',
  Intermediate: 'bg-amber-100 text-amber-700',
  Advanced:     'bg-red-100 text-red-700',
}

function loadBookmarks(): string[] {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveBookmarks(ids: string[]) {
  try {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(ids))
  } catch {
    // ignore
  }
}

export function Bookmarks() {
  const [bookmarkIds, setBookmarkIds] = useState<string[]>(() => loadBookmarks())

  const handleRemove = useCallback((id: string) => {
    const updated = bookmarkIds.filter(b => b !== id)
    setBookmarkIds(updated)
    saveBookmarks(updated)
  }, [bookmarkIds])

  const entries = bookmarkIds
    .map(id => LESSON_MAP.get(id))
    .filter(Boolean) as typeof ALL_LESSONS

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-6">

        <div className="text-center space-y-3">
          <div className="text-5xl">&#x1F516;</div>
          <h1 className="text-3xl font-bold text-gray-800">Your bookmarks</h1>
          <p className="text-gray-500 leading-relaxed">
            Lessons you have saved to come back to.
          </p>
          <Link
            to="/my-progress"
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 underline underline-offset-2"
          >
            &#x2190; Back to My Progress
          </Link>
        </div>

        {entries.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8 text-center space-y-3">
            <div className="text-4xl">&#x1F4DA;</div>
            <p className="text-gray-600 font-medium">No bookmarks yet.</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tap the bookmark icon on any lesson to save it for later. All your saved lessons will appear here.
            </p>
            <Link
              to="/"
              className="inline-block mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
            >
              Browse lessons
            </Link>
          </div>
        ) : (
          <>
            <p className="text-gray-400 text-sm text-center">
              {entries.length} saved lesson{entries.length !== 1 ? 's' : ''}
            </p>
            <div className="space-y-3">
              {entries.map(entry => (
                <div
                  key={entry.id}
                  className="bg-white rounded-2xl shadow-sm border border-blue-100 p-4 flex items-center gap-4"
                >
                  <span className="text-2xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: entry.icon }} />
                  <div className="flex-1 min-w-0">
                    <Link
                      to={entry.to}
                      className="font-semibold text-gray-800 hover:text-blue-700 leading-tight block truncate"
                    >
                      {entry.title}
                    </Link>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${DIFFICULTY_COLOURS[entry.difficulty]}`}>
                        {entry.difficulty}
                      </span>
                      <span className="text-xs text-gray-400">{entry.readingTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Link
                      to={entry.to}
                      className="text-xs text-blue-600 hover:text-blue-700 underline underline-offset-2 whitespace-nowrap"
                    >
                      Go &#x2192;
                    </Link>
                    <button
                      onClick={() => handleRemove(entry.id)}
                      className="text-xs font-medium px-2.5 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors"
                      title="Remove bookmark"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
