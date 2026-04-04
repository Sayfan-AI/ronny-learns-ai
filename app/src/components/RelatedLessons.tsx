import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

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
  { id: 'ai-in-your-apps',       icon: '&#x1F4F1;', title: 'AI in the apps you already use',         path: '/learn/ai-in-your-apps',             difficulty: 'Beginner' },
  { id: 'ai-laws-and-rights',    icon: '&#x2696;&#xFE0F;', title: 'AI, laws, and your rights',       path: '/learn/ai-laws-and-rights',          difficulty: 'Intermediate' },
  { id: 'ai-and-social-media',   icon: '&#x1F4F2;', title: 'AI and social media',                    path: '/learn/ai-and-social-media',              difficulty: 'Beginner' },
  { id: 'ai-for-accessibility',  icon: '&#x267F;',  title: 'AI for accessibility',                   path: '/learn/ai-for-accessibility',             difficulty: 'Beginner' },
  { id: 'ai-and-scientific-research', icon: '&#x1F52C;', title: 'AI and scientific research',        path: '/learn/ai-and-scientific-research',        difficulty: 'Intermediate' },
  { id: 'ai-productivity-tools', icon: '&#x26A1;',  title: 'AI and your productivity',               path: '/learn/ai-productivity-tools',            difficulty: 'Beginner' },
  { id: 'how-this-was-built',   icon: '&#x1F528;', title: 'How this app was built',                  path: '/learn/how-this-was-built',               difficulty: 'Intermediate' },
  { id: 'meet-the-agents',      icon: '&#x1F465;', title: 'Meet the AI agents',                      path: '/agents',                            difficulty: 'Beginner' },
  { id: 'what-is-ci-cd',        icon: '&#x1F680;', title: 'How does the website update automatically?', path: '/learn/what-is-ci-cd',           difficulty: 'Advanced' },
  { id: 'version-control',      icon: '&#x1F4BE;', title: 'How does version control work?',          path: '/learn/what-is-version-control',     difficulty: 'Advanced' },
  { id: 'pull-request',         icon: '&#x1F501;', title: 'What is a pull request?',                 path: '/learn/what-is-a-pull-request',      difficulty: 'Advanced' },
  { id: 'ai-and-money',         icon: '&#x1F4B0;', title: 'AI and money',                            path: '/learn/ai-and-money',                difficulty: 'Intermediate' },
  { id: 'ai-and-democracy',     icon: '&#x1F3DB;&#xFE0F;', title: 'AI and democracy',               path: '/learn/ai-and-democracy',            difficulty: 'Intermediate' },
  { id: 'ai-and-language',      icon: '&#x1F5E3;&#xFE0F;', title: 'AI and language',                path: '/learn/ai-and-language',             difficulty: 'Beginner' },
  { id: 'ai-and-food',          icon: '&#x1F33F;', title: 'AI and food',                              path: '/learn/ai-and-food',                 difficulty: 'Beginner' },
  { id: 'ai-and-sport',         icon: '&#x26BD;',  title: 'AI and sport',                             path: '/learn/ai-and-sport',                difficulty: 'Intermediate' },
  { id: 'ai-and-transport',     icon: '&#x1F697;', title: 'AI and transport',                         path: '/learn/ai-and-transport',            difficulty: 'Beginner' },
  { id: 'ai-and-art',           icon: '&#x1F58C;&#xFE0F;', title: 'AI and art',                     path: '/learn/ai-and-art',                  difficulty: 'Intermediate' },
  { id: 'ai-and-cybersecurity', icon: '&#x1F512;', title: 'AI and cybersecurity',               path: '/learn/ai-and-cybersecurity',         difficulty: 'Beginner' },
  { id: 'ai-and-space',         icon: '&#x1F680;', title: 'AI and space',                        path: '/learn/ai-and-space',                 difficulty: 'Intermediate' },
  { id: 'ai-and-climate-change',icon: '&#x1F30D;', title: 'AI and climate change',               path: '/learn/ai-and-climate-change',        difficulty: 'Intermediate' },
  { id: 'ai-and-music',         icon: '&#x1F3B5;', title: 'AI and music',                        path: '/learn/ai-and-music',                 difficulty: 'Beginner' },
  { id: 'ai-and-robotics',      icon: '&#x1F916;', title: 'AI and robotics',                     path: '/learn/ai-and-robotics',              difficulty: 'Beginner' },
  { id: 'ai-and-gaming',        icon: '&#x1F3AE;', title: 'AI and gaming',                       path: '/learn/ai-and-gaming',                difficulty: 'Beginner' },
  { id: 'ai-and-journalism',    icon: '&#x1F4F0;', title: 'AI and journalism',                   path: '/learn/ai-and-journalism',            difficulty: 'Intermediate' },
  { id: 'ai-and-fashion',       icon: '&#x1F457;', title: 'AI and fashion',                      path: '/learn/ai-and-fashion',               difficulty: 'Beginner' },
  { id: 'ai-and-agriculture',   icon: '&#x1F33E;', title: 'AI and agriculture',                  path: '/learn/ai-and-agriculture',           difficulty: 'Beginner' },
  { id: 'ai-and-mental-wellbeing-at-work', icon: '&#x1F9D8;', title: 'AI and mental wellbeing at work', path: '/learn/ai-and-mental-wellbeing-at-work', difficulty: 'Intermediate' },
  { id: 'ai-and-retail',        icon: '&#x1F6CD;&#xFE0F;', title: 'AI and retail',              path: '/learn/ai-and-retail',                difficulty: 'Beginner' },
  { id: 'ai-and-children',      icon: '&#x1F9D2;', title: 'AI and children',                    path: '/learn/ai-and-children',              difficulty: 'Intermediate' },
  { id: 'ai-and-travel',        icon: '&#x2708;&#xFE0F;', title: 'AI and travel',              path: '/learn/ai-and-travel',                difficulty: 'Beginner' },
  { id: 'ai-and-housing',       icon: '&#x1F3E0;', title: 'AI and housing',                     path: '/learn/ai-and-housing',               difficulty: 'Intermediate' },
  { id: 'ai-and-energy',        icon: '&#x26A1;', title: 'AI and energy',                        path: '/learn/ai-and-energy',                difficulty: 'Beginner' },
  { id: 'ai-and-elderly-care',  icon: '&#x1F9D3;', title: 'AI and elderly care',                path: '/learn/ai-and-elderly-care',          difficulty: 'Intermediate' },
  { id: 'ai-and-insurance',     icon: '&#x1F6E1;&#xFE0F;', title: 'AI and insurance',           path: '/learn/ai-and-insurance',             difficulty: 'Beginner' },
  { id: 'ai-and-policing',      icon: '&#x2696;&#xFE0F;', title: 'AI and policing',             path: '/learn/ai-and-policing',              difficulty: 'Intermediate' },
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
  'ai-in-your-apps':        ['what-is-ai', 'what-is-ml', 'how-chatbots-work'],
  'ai-laws-and-rights':     ['ai-and-privacy', 'ai-bias', 'trusting-ai'],
  'ai-and-social-media':         ['ai-and-misinformation', 'ai-and-mental-health', 'trusting-ai'],
  'ai-for-accessibility':        ['ai-in-healthcare', 'ai-in-your-apps', 'future-of-ai'],
  'ai-and-scientific-research':  ['ai-in-healthcare', 'ai-and-environment', 'future-of-ai'],
  'ai-productivity-tools':       ['ai-in-your-apps', 'prompt-engineering', 'ai-and-jobs'],
  'how-this-was-built':    ['genesis-system', 'meet-the-agents', 'what-is-ci-cd'],
  'meet-the-agents':       ['genesis-system', 'how-this-was-built', 'what-is-ci-cd'],
  'what-is-ci-cd':         ['version-control', 'pull-request', 'how-this-was-built'],
  'version-control':       ['pull-request', 'github-basics', 'what-is-ci-cd'],
  'pull-request':          ['version-control', 'github-basics', 'what-is-ci-cd'],
  'ai-and-money':          ['ai-bias', 'ai-and-privacy', 'trusting-ai'],
  'ai-and-democracy':      ['ai-and-misinformation', 'ai-bias', 'ai-and-privacy'],
  'ai-and-language':       ['ai-for-accessibility', 'ai-in-your-apps', 'how-chatbots-work'],
  'ai-and-food':           ['ai-and-environment', 'ai-and-jobs', 'ai-productivity-tools'],
  'ai-and-sport':          ['ai-and-creativity', 'ai-in-healthcare', 'ai-and-food'],
  'ai-and-transport':      ['ai-everyday-life', 'ai-and-environment', 'future-of-ai'],
  'ai-and-art':            ['ai-and-creativity', 'ai-and-jobs', 'ai-and-copyright'],
  'ai-and-cybersecurity':  ['ai-and-privacy', 'trusting-ai', 'ai-and-misinformation'],
  'ai-and-space':          ['ai-and-scientific-research', 'ai-and-environment', 'future-of-ai'],
  'ai-and-climate-change': ['ai-and-environment', 'ai-and-scientific-research', 'future-of-ai'],
  'ai-and-music':          ['ai-and-creativity', 'ai-and-art', 'ai-in-your-apps'],
  'ai-and-robotics':       ['ai-and-jobs', 'ai-and-transport', 'ai-in-healthcare'],
  'ai-and-gaming':         ['ai-and-creativity', 'ai-and-jobs', 'ai-and-misinformation'],
  'ai-and-journalism':     ['ai-and-misinformation', 'trusting-ai', 'ai-and-social-media'],
  'ai-and-fashion':        ['ai-and-creativity', 'ai-and-jobs', 'ai-and-environment'],
  'ai-and-agriculture':    ['ai-and-environment', 'ai-and-food', 'ai-and-scientific-research'],
  'ai-and-mental-wellbeing-at-work': ['ai-and-mental-health', 'ai-and-jobs', 'ai-and-privacy'],
  'ai-and-retail':         ['ai-and-jobs', 'ai-and-privacy', 'ai-everyday-life'],
  'ai-and-children':       ['ai-and-education', 'ai-and-privacy', 'ai-and-mental-health'],
  'ai-and-travel':         ['ai-and-transport', 'ai-and-privacy', 'ai-everyday-life'],
  'ai-and-housing':        ['ai-and-privacy', 'ai-and-jobs', 'ai-and-money'],
  'ai-and-energy':         ['ai-and-environment', 'ai-and-climate-change', 'ai-and-transport'],
  'ai-and-elderly-care':   ['ai-in-healthcare', 'ai-and-privacy', 'ai-and-mental-health'],
  'ai-and-insurance':      ['ai-and-privacy', 'ai-bias', 'ai-laws-and-rights'],
  'ai-and-policing':       ['ai-bias', 'ai-and-misinformation', 'ai-laws-and-rights'],
  'ai-and-copyright':      ['ai-and-laws-and-rights', 'ai-bias', 'ai-and-privacy'],
}

const DIFFICULTY_COLOURS: Record<string, string> = {
  Beginner:     'bg-green-100 text-green-700',
  Intermediate: 'bg-amber-100 text-amber-700',
  Advanced:     'bg-red-100 text-red-700',
}

interface RelatedLessonsProps {
  currentId: string
}

function loadCompleted(): Set<string> {
  try {
    const raw = localStorage.getItem('ronny-quiz-completed')
    const ids: string[] = raw ? JSON.parse(raw) : []
    return new Set(ids)
  } catch {
    return new Set()
  }
}

export function RelatedLessons({ currentId }: RelatedLessonsProps) {
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    setCompletedIds(loadCompleted())
  }, [])

  const relatedIds = RELATED[currentId] ?? []
  const lessons = relatedIds
    .map(id => ALL_LESSONS.find(l => l.id === id))
    .filter((l): l is LessonMeta => l !== undefined)
    // Uncompleted lessons appear first
    .sort((a, b) => {
      const aDone = completedIds.has(a.id) ? 1 : 0
      const bDone = completedIds.has(b.id) ? 1 : 0
      return aDone - bDone
    })

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
