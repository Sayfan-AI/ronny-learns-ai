import { Link } from '@tanstack/react-router'

/**
 * Canonical lesson order. The id must match the useMarkVisited id
 * used in each lesson page, and the path must match the route.
 */
export const LESSON_ORDER: Array<{ id: string; icon: string; title: string; path: string }> = [
  { id: 'github-signup',      icon: '&#x1F511;', title: 'Create your GitHub account',      path: '/tutorial/github-signup' },
  { id: 'github-basics',      icon: '&#x1F4C1;', title: 'What is GitHub for?',             path: '/learn/github-basics' },
  { id: 'what-is-api',        icon: '&#x1F50C;', title: 'What is an API?',                 path: '/learn/what-is-api' },
  { id: 'genesis-system',     icon: '&#x2699;&#xFE0F;', title: 'What is the Genesis system?', path: '/learn/genesis-system' },
  { id: 'what-is-ai',         icon: '&#x1F916;', title: 'What is AI?',                     path: '/learn/what-is-ai' },
  { id: 'what-is-ml',         icon: '&#x1F4CA;', title: 'What is machine learning?',       path: '/learn/what-is-machine-learning' },
  { id: 'how-ai-training-works', icon: '&#x1F3CB;&#xFE0F;', title: 'How does AI training work?', path: '/learn/how-ai-training-works' },
  { id: 'neural-network',     icon: '&#x1F9E0;', title: 'What is a neural network?',       path: '/learn/neural-network' },
  { id: 'language-models',    icon: '&#x1F4AC;', title: 'How do language models work?',    path: '/learn/language-models' },
  { id: 'ai-history',         icon: '&#x1F4DC;', title: 'AI history timeline',             path: '/ai-history' },
  { id: 'ai-everyday-life',   icon: '&#x1F30D;', title: 'AI in everyday life',             path: '/learn/ai-everyday-life' },
  { id: 'ai-pros-and-cons',   icon: '&#x2696;&#xFE0F;', title: 'AI: the good and the bad', path: '/learn/ai-pros-and-cons' },
  { id: 'prompt-engineering', icon: '&#x270F;&#xFE0F;', title: 'What is prompt engineering?', path: '/learn/prompt-engineering' },
  { id: 'ai-safety',          icon: '&#x1F6E1;&#xFE0F;', title: 'AI safety and alignment', path: '/learn/ai-safety' },
  { id: 'ai-bias',            icon: '&#x2696;&#xFE0F;', title: 'What is AI bias?',          path: '/learn/ai-bias' },
  { id: 'how-chatbots-work',  icon: '&#x1F4AC;', title: 'How do chatbots work?',           path: '/learn/how-chatbots-work' },
  { id: 'trusting-ai',        icon: '&#x1F50D;', title: 'Can I trust what AI says?',       path: '/learn/trusting-ai' },
  { id: 'ai-and-jobs',        icon: '&#x1F4BC;', title: 'AI and jobs — what is really changing?', path: '/learn/ai-and-jobs' },
  { id: 'ai-and-creativity',  icon: '&#x1F3A8;', title: 'AI and creativity',                path: '/learn/ai-and-creativity' },
  { id: 'ai-in-healthcare',   icon: '&#x1FA7A;', title: 'AI in healthcare',                 path: '/learn/ai-in-healthcare' },
  { id: 'ai-and-environment', icon: '&#x1F331;', title: 'AI and the environment',           path: '/learn/ai-and-environment' },
  { id: 'ai-and-privacy',     icon: '&#x1F512;', title: 'AI and privacy',                   path: '/learn/ai-and-privacy' },
  { id: 'ai-and-education',   icon: '&#x1F393;', title: 'AI and education',                 path: '/learn/ai-and-education' },
  { id: 'how-this-was-built', icon: '&#x1F528;', title: 'How this app was built',          path: '/learn/how-this-was-built' },
  { id: 'meet-the-agents',    icon: '&#x1F4BC;', title: 'Meet the agents',                 path: '/agents' },
  { id: 'what-is-ci-cd',      icon: '&#x1F680;', title: 'What is CI/CD?',                  path: '/learn/what-is-ci-cd' },
  { id: 'version-control',    icon: '&#x1F4BE;', title: 'Version control',                 path: '/learn/what-is-version-control' },
  { id: 'pull-request',       icon: '&#x1F501;', title: 'What is a pull request?',         path: '/learn/what-is-a-pull-request' },
]

interface NextLessonProps {
  currentId: string
}

/**
 * Shows the next lesson in the canonical order.
 * Place this at the bottom of every lesson page.
 */
export function NextLesson({ currentId }: NextLessonProps) {
  const idx = LESSON_ORDER.findIndex(l => l.id === currentId)
  if (idx === -1) return null

  const next = LESSON_ORDER[idx + 1]

  if (!next) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
        <div className="text-3xl">&#x1F393;</div>
        <p className="font-bold text-emerald-800 text-lg">You have reached the end of the learning path!</p>
        <p className="text-emerald-700 text-sm leading-relaxed">
          That is all the lessons for now. Head to <strong>My Progress</strong> to see your badges and certificate.
        </p>
        <Link
          to="/my-progress"
          className="inline-block mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
        >
          See my progress &rarr;
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 space-y-3">
      <p className="text-sm font-semibold text-blue-500 uppercase tracking-wide">Up next</p>
      <Link
        to={next.path as '/'}
        className="flex items-center gap-4 group"
      >
        <span
          className="text-3xl flex-shrink-0"
          dangerouslySetInnerHTML={{ __html: next.icon }}
        />
        <div className="flex-1 min-w-0">
          <p className="font-bold text-blue-800 group-hover:underline text-lg leading-tight">
            {next.title}
          </p>
        </div>
        <span className="text-blue-400 text-xl flex-shrink-0 group-hover:translate-x-1 transition-transform">
          &rarr;
        </span>
      </Link>
    </div>
  )
}
