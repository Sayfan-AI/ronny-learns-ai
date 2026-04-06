import { Link } from '@tanstack/react-router'
import { useState } from 'react'

interface CollectionLesson {
  id: string
  title: string
  to: string
  icon: string
}

interface Collection {
  id: string
  title: string
  description: string
  icon: string
  color: string
  borderColor: string
  bgColor: string
  lessons: CollectionLesson[]
}

const COLLECTIONS: Collection[] = [
  {
    id: 'starter-pack',
    title: 'AI starter pack',
    description: '5 lessons for complete beginners — the perfect place to start your AI journey.',
    icon: '&#x1F680;',
    color: 'text-blue-700',
    borderColor: 'border-blue-200',
    bgColor: 'bg-blue-50',
    lessons: [
      { id: 'what-is-ai',        title: 'What is AI?',                    to: '/learn/what-is-ai',            icon: '&#x1F916;' },
      { id: 'what-is-ml',        title: 'What is machine learning?',      to: '/learn/what-is-machine-learning', icon: '&#x1F4CA;' },
      { id: 'ai-everyday-life',  title: 'AI in everyday life',            to: '/learn/ai-everyday-life',      icon: '&#x1F30D;' },
      { id: 'how-chatbots-work', title: 'How do chatbots work?',          to: '/learn/how-chatbots-work',     icon: '&#x1F4AC;' },
      { id: 'trusting-ai',       title: 'Can I trust what AI says?',      to: '/learn/trusting-ai',           icon: '&#x1F50D;' },
    ],
  },
  {
    id: 'advanced-ai',
    title: 'Advanced AI',
    description: 'Deeper technical understanding — for those ready to go further under the hood.',
    icon: '&#x1F9EA;',
    color: 'text-indigo-700',
    borderColor: 'border-indigo-200',
    bgColor: 'bg-indigo-50',
    lessons: [
      { id: 'neural-network',       title: 'What is a neural network?',   to: '/learn/neural-network',        icon: '&#x1F9E0;' },
      { id: 'how-ai-training-works', title: 'How does AI training work?', to: '/learn/how-ai-training-works', icon: '&#x1F9EA;' },
      { id: 'language-models',      title: 'How do language models work?', to: '/learn/language-models',      icon: '&#x1F4AC;' },
      { id: 'ai-safety',            title: 'AI safety and alignment',     to: '/learn/ai-safety',             icon: '&#x1F6E1;&#xFE0F;' },
      { id: 'prompt-engineering',   title: 'What is prompt engineering?', to: '/learn/prompt-engineering',    icon: '&#x270F;&#xFE0F;' },
    ],
  },
]

function loadVisitedIds(): Set<string> {
  try {
    const raw = localStorage.getItem('ronny-visited-modules')
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

export function Collections() {
  const [visited] = useState<Set<string>>(loadVisitedIds)

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4DA;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Lesson collections
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Themed reading lists that guide you through related lessons in a logical order.
            Pick a collection and work through it at your own pace.
          </p>
          <Link to="/" className="text-blue-500 hover:underline text-sm block">
            &larr; Back to home
          </Link>
        </div>

        {COLLECTIONS.map(collection => {
          const completedLessons = collection.lessons.filter(l => visited.has(l.id)).length
          const total = collection.lessons.length
          const pct = Math.round((completedLessons / total) * 100)
          const firstIncomplete = collection.lessons.find(l => !visited.has(l.id))
          const allDone = completedLessons === total

          return (
            <div key={collection.id} className={`bg-white rounded-2xl shadow-sm border ${collection.borderColor} overflow-hidden`}>
              {/* Collection header */}
              <div className={`${collection.bgColor} px-6 py-5 space-y-3`}>
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: collection.icon }} />
                  <div className="flex-1 min-w-0">
                    <h2 className={`text-xl font-bold ${collection.color} leading-tight`}>{collection.title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mt-1">{collection.description}</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className={collection.color + ' font-medium'}>
                      {allDone ? 'Complete!' : `${completedLessons} of ${total} lessons done`}
                    </span>
                    <span className={collection.color + ' font-bold'}>{pct}%</span>
                  </div>
                  <div className="w-full bg-white bg-opacity-60 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-700 ${allDone ? 'bg-emerald-500' : 'bg-current'}`}
                      style={{ width: `${pct}%`, color: 'inherit' }}
                    />
                  </div>
                </div>

                {/* CTA button */}
                {firstIncomplete ? (
                  <Link
                    to={firstIncomplete.to}
                    className="inline-flex items-center gap-2 bg-white border border-current text-sm font-semibold px-4 py-2 rounded-xl transition-colors hover:bg-opacity-80"
                    style={{ color: 'inherit' }}
                  >
                    {completedLessons === 0 ? 'Start collection' : 'Continue'} &rarr;
                  </Link>
                ) : (
                  <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-xl">
                    &#x2713; Collection complete
                  </div>
                )}
              </div>

              {/* Lesson list */}
              <div className="divide-y divide-gray-50">
                {collection.lessons.map((lesson, i) => {
                  const done = visited.has(lesson.id)
                  return (
                    <Link
                      key={lesson.id}
                      to={lesson.to}
                      className={`flex items-center gap-4 px-6 py-3 transition-colors ${
                        done ? 'hover:bg-emerald-50' : 'hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-sm font-bold text-gray-300 w-5 flex-shrink-0 text-center">{i + 1}</span>
                      <span className="text-xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: lesson.icon }} />
                      <span className={`flex-1 font-medium text-sm leading-tight ${done ? 'text-emerald-800' : 'text-gray-700'}`}>
                        {lesson.title}
                      </span>
                      {done ? (
                        <span className="text-emerald-500 font-bold text-xl flex-shrink-0">&#x2713;</span>
                      ) : (
                        <span className="text-gray-200 text-xl flex-shrink-0">&#x25CB;</span>
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}
