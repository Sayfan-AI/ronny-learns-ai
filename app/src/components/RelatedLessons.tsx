import { Link } from '@tanstack/react-router'

interface LessonMeta {
  id: string
  icon: string
  title: string
  path: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
}

const ALL_LESSONS: LessonMeta[] = [
  { id: 'github-signup',        icon: '&#x1F511;', title: 'Create your GitHub account',              path: '/tutorial/github-signup',            difficulty: 'Beginner' },
  { id: 'github-basics',        icon: '&#x1F4C1;', title: 'What is GitHub for?',                     path: '/learn/github-basics',               difficulty: 'Beginner' },
  { id: 'what-is-api',          icon: '&#x1F50C;', title: 'What is an API?',                         path: '/learn/what-is-api',                 difficulty: 'Intermediate' },
  { id: 'genesis-system',       icon: '&#x2699;&#xFE0F;', title: 'What is the Genesis system?',     path: '/learn/genesis-system',              difficulty: 'Beginner' },
  { id: 'what-is-ai',           icon: '&#x1F916;', title: 'What is AI?',                             path: '/learn/what-is-ai',                  difficulty: 'Beginner' },
  { id: 'what-is-ml',           icon: '&#x1F4CA;', title: 'What is machine learning?',               path: '/learn/what-is-machine-learning',    difficulty: 'Intermediate' },
  { id: 'how-ai-training-works',icon: '&#x1F9EA;', title: 'How does AI training work?',              path: '/learn/how-ai-training-works',       difficulty: 'Intermediate' },
  { id: 'neural-network',       icon: '&#x1F9E0;', title: 'What is a neural network?',               path: '/learn/neural-network',              difficulty: 'Advanced' },
  { id: 'language-models',      icon: '&#x1F4AC;', title: 'How do language models work?',            path: '/learn/language-models',             difficulty: 'Advanced' },
  { id: 'ai-history',           icon: '&#x1F4DC;', title: 'The history of AI',                       path: '/ai-history',                        difficulty: 'Beginner' },
  { id: 'ai-everyday-life',     icon: '&#x1F30D;', title: 'AI in everyday life',                     path: '/learn/ai-everyday-life',            difficulty: 'Beginner' },
  { id: 'ai-pros-and-cons',     icon: '&#x2696;&#xFE0F;', title: 'AI: the good and the bad',        path: '/learn/ai-pros-and-cons',            difficulty: 'Beginner' },
  { id: 'prompt-engineering',   icon: '&#x270F;&#xFE0F;', title: 'What is prompt engineering?',     path: '/learn/prompt-engineering',          difficulty: 'Intermediate' },
  { id: 'ai-safety',            icon: '&#x1F6E1;&#xFE0F;', title: 'AI safety and alignment',        path: '/learn/ai-safety',                   difficulty: 'Intermediate' },
  { id: 'ai-bias',              icon: '&#x2696;&#xFE0F;', title: 'What is AI bias?',                 path: '/learn/ai-bias',                     difficulty: 'Intermediate' },
  { id: 'how-chatbots-work',    icon: '&#x1F4AC;', title: 'How do chatbots work?',                   path: '/learn/how-chatbots-work',           difficulty: 'Beginner' },
  { id: 'trusting-ai',          icon: '&#x1F50D;', title: 'Can I trust what AI says?',               path: '/learn/trusting-ai',                 difficulty: 'Intermediate' },
  { id: 'ai-and-jobs',          icon: '&#x1F4BC;', title: 'AI and jobs',                             path: '/learn/ai-and-jobs',                 difficulty: 'Beginner' },
  { id: 'ai-and-creativity',    icon: '&#x1F3A8;', title: 'AI and creativity',                       path: '/learn/ai-and-creativity',           difficulty: 'Beginner' },
  { id: 'ai-in-healthcare',     icon: '&#x1FA7A;', title: 'AI in healthcare',                        path: '/learn/ai-in-healthcare',            difficulty: 'Intermediate' },
  { id: 'ai-and-environment',   icon: '&#x1F331;', title: 'AI and the environment',                  path: '/learn/ai-and-environment',          difficulty: 'Intermediate' },
  { id: 'ai-and-privacy',       icon: '&#x1F512;', title: 'AI and privacy',                          path: '/learn/ai-and-privacy',              difficulty: 'Intermediate' },
  { id: 'ai-and-education',      icon: '&#x1F393;', title: 'AI and education',                       path: '/learn/ai-and-education',           difficulty: 'Beginner' },
  { id: 'ai-and-misinformation', icon: '&#x1F50E;', title: 'AI and misinformation',                  path: '/learn/ai-and-misinformation',       difficulty: 'Intermediate' },
  { id: 'ai-and-mental-health',  icon: '&#x1F9E0;', title: 'AI and your mental health',              path: '/learn/ai-and-mental-health',        difficulty: 'Beginner' },
  { id: 'future-of-ai',          icon: '&#x1F52D;', title: 'What does the future of AI look like?', path: '/learn/future-of-ai',                difficulty: 'Intermediate' },
  { id: 'how-this-was-built',   icon: '&#x1F528;', title: 'How this app was built',                  path: '/learn/how-this-was-built',          difficulty: 'Intermediate' },
  { id: 'meet-the-agents',      icon: '&#x1F465;', title: 'Meet the AI agents',                      path: '/agents',                            difficulty: 'Beginner' },
  { id: 'what-is-ci-cd',        icon: '&#x1F680;', title: 'How does the website update automatically?', path: '/learn/what-is-ci-cd',           difficulty: 'Advanced' },
  { id: 'version-control',      icon: '&#x1F4BE;', title: 'How does version control work?',          path: '/learn/what-is-version-control',     difficulty: 'Advanced' },
  { id: 'pull-request',         icon: '&#x1F501;', title: 'What is a pull request?',                 path: '/learn/what-is-a-pull-request',      difficulty: 'Advanced' },
]

// Map each lesson id to 2-3 related lesson ids
const RELATED: Record<string, string[]> = {
  'github-signup':         ['github-basics', 'genesis-system', 'how-this-was-built'],
  'github-basics':         ['github-signup', 'version-control', 'pull-request'],
  'what-is-api':           ['genesis-system', 'what-is-ai', 'github-basics'],
  'genesis-system':        ['how-this-was-built', 'meet-the-agents', 'what-is-ai'],
  'what-is-ai':            ['what-is-ml', 'how-chatbots-work', 'ai-history'],
  'what-is-ml':            ['how-ai-training-works', 'neural-network', 'what-is-ai'],
  'how-ai-training-works': ['neural-network', 'what-is-ml', 'ai-bias'],
  'neural-network':        ['language-models', 'how-ai-training-works', 'what-is-ml'],
  'language-models':       ['neural-network', 'how-chatbots-work', 'prompt-engineering'],
  'ai-history':            ['what-is-ai', 'ai-everyday-life', 'ai-pros-and-cons'],
  'ai-everyday-life':      ['ai-pros-and-cons', 'ai-and-jobs', 'what-is-ai'],
  'ai-pros-and-cons':      ['ai-bias', 'ai-safety', 'trusting-ai'],
  'prompt-engineering':    ['trusting-ai', 'language-models', 'how-chatbots-work'],
  'ai-safety':             ['ai-bias', 'trusting-ai', 'ai-pros-and-cons'],
  'ai-bias':               ['ai-safety', 'ai-pros-and-cons', 'how-ai-training-works'],
  'how-chatbots-work':     ['language-models', 'trusting-ai', 'prompt-engineering'],
  'trusting-ai':           ['ai-bias', 'prompt-engineering', 'ai-safety'],
  'ai-and-jobs':           ['ai-and-creativity', 'ai-pros-and-cons', 'ai-everyday-life'],
  'ai-and-creativity':     ['ai-and-jobs', 'ai-and-education', 'ai-pros-and-cons'],
  'ai-in-healthcare':      ['ai-bias', 'ai-pros-and-cons', 'ai-and-environment'],
  'ai-and-environment':    ['ai-in-healthcare', 'ai-pros-and-cons', 'ai-and-jobs'],
  'ai-and-privacy':        ['trusting-ai', 'ai-bias', 'ai-and-education'],
  'ai-and-education':      ['ai-and-creativity', 'ai-and-privacy', 'prompt-engineering'],
  'ai-and-misinformation': ['trusting-ai', 'ai-bias', 'ai-and-privacy'],
  'ai-and-mental-health':  ['trusting-ai', 'ai-and-privacy', 'ai-and-education'],
  'future-of-ai':          ['ai-safety', 'ai-and-jobs', 'ai-and-environment'],
  'how-this-was-built':    ['genesis-system', 'meet-the-agents', 'what-is-ci-cd'],
  'meet-the-agents':       ['genesis-system', 'how-this-was-built', 'what-is-ci-cd'],
  'what-is-ci-cd':         ['version-control', 'pull-request', 'how-this-was-built'],
  'version-control':       ['pull-request', 'github-basics', 'what-is-ci-cd'],
  'pull-request':          ['version-control', 'github-basics', 'what-is-ci-cd'],
}

const DIFFICULTY_COLOURS: Record<string, string> = {
  Beginner:     'bg-green-100 text-green-700',
  Intermediate: 'bg-amber-100 text-amber-700',
  Advanced:     'bg-red-100 text-red-700',
}

interface RelatedLessonsProps {
  currentId: string
}

export function RelatedLessons({ currentId }: RelatedLessonsProps) {
  const relatedIds = RELATED[currentId] ?? []
  const lessons = relatedIds
    .map(id => ALL_LESSONS.find(l => l.id === id))
    .filter((l): l is LessonMeta => l !== undefined)

  if (lessons.length === 0) return null

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-bold text-gray-700">You might also enjoy</h2>
      <div className="grid gap-3">
        {lessons.map(lesson => (
          <Link
            key={lesson.id}
            to={lesson.path as '/'}
            className="flex items-center gap-3 bg-white border border-gray-200 hover:border-blue-300 rounded-xl p-4 group transition-colors"
          >
            <span
              className="text-2xl flex-shrink-0"
              dangerouslySetInnerHTML={{ __html: lesson.icon }}
            />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-800 group-hover:text-blue-700 text-sm leading-tight transition-colors">
                {lesson.title}
              </p>
              <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full font-medium ${DIFFICULTY_COLOURS[lesson.difficulty]}`}>
                {lesson.difficulty}
              </span>
            </div>
            <span className="text-gray-400 text-lg flex-shrink-0 group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
