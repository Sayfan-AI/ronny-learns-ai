import { Link } from '@tanstack/react-router'
import { DifficultyBadge } from './DifficultyBadge'

interface NewLesson {
  id: string
  title: string
  icon: string
  to: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
}

// Update this list each milestone when new lessons are added.
// Most recently added lesson should be first.
const RECENT_LESSONS: NewLesson[] = [
  {
    id: 'ai-and-volunteering',
    title: 'AI and volunteering',
    icon: '🙋',
    to: '/learn/ai-and-volunteering',
    difficulty: 'Intermediate',
  },
  {
    id: 'ai-and-adult-education',
    title: 'AI and adult education',
    icon: '📚',
    to: '/learn/ai-and-adult-education',
    difficulty: 'Intermediate',
  },
  {
    id: 'ai-and-charities',
    title: 'AI and charities',
    icon: '🤝',
    to: '/learn/ai-and-charities',
    difficulty: 'Intermediate',
  },
]

export function WhatsNew() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-3">
        <h2 className="text-lg font-bold text-gray-800">What's new</h2>
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
          Recently added
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {RECENT_LESSONS.map((lesson) => (
          <Link
            key={lesson.id}
            to={lesson.to}
            className="flex items-start gap-3 bg-white border border-green-200 rounded-xl p-3 hover:border-green-400 hover:shadow-sm transition-all group"
          >
            <span className="text-2xl flex-shrink-0 mt-0.5">{lesson.icon}</span>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full leading-none">
                  New
                </span>
              </div>
              <p className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-green-700 transition-colors">
                {lesson.title}
              </p>
              <div className="mt-1">
                <DifficultyBadge level={lesson.difficulty} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
