import { Link } from '@tanstack/react-router'
import { useState } from 'react'

type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'

interface LessonMeta {
  id: string
  icon: string
  title: string
  path: string
  difficulty: Difficulty
  readingTime?: string
}

interface Stage {
  name: string
  description: string
  color: string
  lessons: LessonMeta[]
}

const STAGES: Stage[] = [
  {
    name: 'Getting started',
    description: 'The basics of GitHub and what this project is all about.',
    color: 'blue',
    lessons: [
      { id: 'github-signup',    icon: '&#x1F511;', title: 'Create your GitHub account',          path: '/tutorial/github-signup',          difficulty: 'Beginner',     readingTime: '5 min' },
      { id: 'github-basics',    icon: '&#x1F4C1;', title: 'What is GitHub for?',                 path: '/learn/github-basics',             difficulty: 'Beginner',     readingTime: '4 min' },
      { id: 'what-is-api',      icon: '&#x1F50C;', title: 'What is an API?',                     path: '/learn/what-is-api',               difficulty: 'Intermediate', readingTime: '4 min' },
      { id: 'genesis-system',   icon: '&#x2699;&#xFE0F;', title: 'What is the Genesis system?', path: '/learn/genesis-system',            difficulty: 'Beginner',     readingTime: '4 min' },
    ],
  },
  {
    name: 'How AI works',
    description: 'The technology behind artificial intelligence, explained simply.',
    color: 'purple',
    lessons: [
      { id: 'what-is-ai',           icon: '&#x1F916;', title: 'What is AI?',                           path: '/learn/what-is-ai',               difficulty: 'Beginner',     readingTime: '5 min' },
      { id: 'what-is-ml',           icon: '&#x1F4CA;', title: 'What is machine learning?',             path: '/learn/what-is-machine-learning',  difficulty: 'Intermediate', readingTime: '6 min' },
      { id: 'how-ai-training-works',icon: '&#x1F9EA;', title: 'How does AI training work?',            path: '/learn/how-ai-training-works',     difficulty: 'Intermediate', readingTime: '7 min' },
      { id: 'neural-network',       icon: '&#x1F9E0;', title: 'What is a neural network?',             path: '/learn/neural-network',            difficulty: 'Advanced',     readingTime: '6 min' },
      { id: 'language-models',      icon: '&#x1F4AC;', title: 'How do language models work?',          path: '/learn/language-models',           difficulty: 'Advanced',     readingTime: '7 min' },
      { id: 'how-chatbots-work',    icon: '&#x1F4AC;', title: 'How do chatbots work?',                 path: '/learn/how-chatbots-work',         difficulty: 'Beginner',     readingTime: '6 min' },
      { id: 'ai-history',           icon: '&#x1F4DC;', title: 'The history of AI',                     path: '/ai-history',                      difficulty: 'Beginner',     readingTime: '5 min' },
    ],
  },
  {
    name: 'AI in the real world',
    description: 'Where AI shows up in everyday life and specific industries.',
    color: 'emerald',
    lessons: [
      { id: 'ai-everyday-life',    icon: '&#x1F30D;', title: 'AI in everyday life',                    path: '/learn/ai-everyday-life',          difficulty: 'Beginner',     readingTime: '5 min' },
      { id: 'ai-in-healthcare',    icon: '&#x1FA7A;', title: 'AI in healthcare',                       path: '/learn/ai-in-healthcare',          difficulty: 'Intermediate', readingTime: '6 min' },
      { id: 'ai-and-creativity',   icon: '&#x1F3A8;', title: 'AI and creativity — art, music, writing', path: '/learn/ai-and-creativity',        difficulty: 'Beginner',     readingTime: '6 min' },
      { id: 'ai-in-your-apps',     icon: '&#x1F4F1;', title: 'AI in the apps you already use',         path: '/learn/ai-in-your-apps',                difficulty: 'Beginner',     readingTime: '5 min' },
      { id: 'ai-for-accessibility',icon: '&#x267F;',  title: 'AI for accessibility',                   path: '/learn/ai-for-accessibility',           difficulty: 'Beginner',     readingTime: '5 min' },
      { id: 'ai-and-scientific-research', icon: '&#x1F52C;', title: 'AI and scientific research',      path: '/learn/ai-and-scientific-research',      difficulty: 'Intermediate', readingTime: '6 min' },
      { id: 'ai-productivity-tools', icon: '&#x26A1;', title: 'AI and your productivity',              path: '/learn/ai-productivity-tools',           difficulty: 'Beginner',     readingTime: '5 min' },
      { id: 'ai-and-food',          icon: '&#x1F33F;', title: 'AI and food',                            path: '/learn/ai-and-food',                     difficulty: 'Beginner',     readingTime: '5 min' },
      { id: 'ai-and-sport',         icon: '&#x26BD;',  title: 'AI and sport',                           path: '/learn/ai-and-sport',                    difficulty: 'Intermediate', readingTime: '6 min' },
      { id: 'ai-and-transport',     icon: '&#x1F697;', title: 'AI and transport',                       path: '/learn/ai-and-transport',                difficulty: 'Beginner',     readingTime: '5 min' },
      { id: 'ai-and-art',           icon: '&#x1F58C;&#xFE0F;', title: 'AI and art',                   path: '/learn/ai-and-art',                      difficulty: 'Intermediate', readingTime: '6 min' },
      { id: 'ai-and-agriculture',   icon: '&#x1F33E;', title: 'AI and agriculture',                path: '/learn/ai-and-agriculture',              difficulty: 'Beginner',     readingTime: '5 min' },
      { id: 'ai-and-retail',        icon: '&#x1F6CD;&#xFE0F;', title: 'AI and retail',            path: '/learn/ai-and-retail',                   difficulty: 'Beginner',     readingTime: '5 min' },
      { id: 'ai-and-travel',        icon: '&#x2708;&#xFE0F;', title: 'AI and travel',             path: '/learn/ai-and-travel',                   difficulty: 'Beginner',     readingTime: '5 min' },
      { id: 'ai-and-housing',       icon: '&#x1F3E0;', title: 'AI and housing',               path: '/learn/ai-and-housing',                  difficulty: 'Intermediate', readingTime: '6 min' },
      { id: 'ai-and-energy',        icon: '&#x26A1;', title: 'AI and energy',                 path: '/learn/ai-and-energy',                   difficulty: 'Beginner',     readingTime: '5 min' },
      { id: 'ai-and-elderly-care',  icon: '&#x1F9D3;', title: 'AI and elderly care',          path: '/learn/ai-and-elderly-care',             difficulty: 'Intermediate', readingTime: '6 min' },
    ],
  },
  {
    name: 'AI and society',
    description: 'The broader impact of AI on people, society, and the future.',
    color: 'amber',
    lessons: [
      { id: 'ai-and-jobs',          icon: '&#x1F4BC;', title: 'AI and jobs — what is really changing?', path: '/learn/ai-and-jobs',              difficulty: 'Beginner',     readingTime: '6 min' },
      { id: 'ai-and-privacy',       icon: '&#x1F512;', title: 'AI and privacy — who sees your data?',   path: '/learn/ai-and-privacy',           difficulty: 'Intermediate', readingTime: '6 min' },
      { id: 'ai-and-environment',   icon: '&#x1F331;', title: 'AI and the environment',                 path: '/learn/ai-and-environment',        difficulty: 'Intermediate', readingTime: '6 min' },
      { id: 'ai-and-education',     icon: '&#x1F393;', title: 'AI and education',                       path: '/learn/ai-and-education',          difficulty: 'Beginner',     readingTime: '6 min' },
      { id: 'ai-and-social-media',  icon: '&#x1F4F2;', title: 'AI and social media',                    path: '/learn/ai-and-social-media',       difficulty: 'Beginner',     readingTime: '6 min' },
      { id: 'ai-and-mental-health', icon: '&#x1F9E0;', title: 'AI and your mental health',              path: '/learn/ai-and-mental-health',      difficulty: 'Beginner',     readingTime: '6 min' },
      { id: 'ai-and-misinformation',icon: '&#x1F50E;', title: 'AI and misinformation',                  path: '/learn/ai-and-misinformation',     difficulty: 'Intermediate', readingTime: '6 min' },
      { id: 'ai-laws-and-rights',   icon: '&#x2696;&#xFE0F;', title: 'AI, laws, and your rights',      path: '/learn/ai-laws-and-rights',        difficulty: 'Intermediate', readingTime: '7 min' },
      { id: 'ai-and-copyright',     icon: '&#x2696;&#xFE0F;', title: 'AI and the law',                  path: '/learn/ai-and-copyright',          difficulty: 'Intermediate', readingTime: '6 min' },
      { id: 'how-to-use-ai-safely', icon: '&#x1F6E1;&#xFE0F;', title: 'How to use AI safely',           path: '/learn/how-to-use-ai-safely',      difficulty: 'Beginner',     readingTime: '5 min' },
      { id: 'future-of-ai',         icon: '&#x1F52D;', title: 'What does the future of AI look like?',  path: '/learn/future-of-ai',              difficulty: 'Intermediate', readingTime: '7 min' },
      { id: 'ai-and-money',         icon: '&#x1F4B0;', title: 'AI and money',                           path: '/learn/ai-and-money',              difficulty: 'Intermediate', readingTime: '6 min' },
      { id: 'ai-and-democracy',     icon: '&#x1F3DB;&#xFE0F;', title: 'AI and democracy',               path: '/learn/ai-and-democracy',          difficulty: 'Intermediate', readingTime: '7 min' },
      { id: 'ai-and-language',      icon: '&#x1F5E3;&#xFE0F;', title: 'AI and language',                path: '/learn/ai-and-language',           difficulty: 'Beginner',     readingTime: '5 min' },
      { id: 'ai-and-mental-wellbeing-at-work', icon: '&#x1F9D8;', title: 'AI and mental wellbeing at work', path: '/learn/ai-and-mental-wellbeing-at-work', difficulty: 'Intermediate', readingTime: '6 min' },
      { id: 'ai-and-children',      icon: '&#x1F9D2;', title: 'AI and children',                    path: '/learn/ai-and-children',                 difficulty: 'Intermediate', readingTime: '6 min' },
    ],
  },
  {
    name: 'Deep dives',
    description: 'Going further: critical thinking, ethics, software, and this project.',
    color: 'violet',
    lessons: [
      { id: 'ai-pros-and-cons',   icon: '&#x2696;&#xFE0F;', title: 'AI: the good and the bad',         path: '/learn/ai-pros-and-cons',          difficulty: 'Beginner',     readingTime: '6 min' },
      { id: 'ai-bias',            icon: '&#x2696;&#xFE0F;', title: 'What is AI bias?',                  path: '/learn/ai-bias',                   difficulty: 'Intermediate', readingTime: '6 min' },
      { id: 'ai-safety',          icon: '&#x1F6E1;&#xFE0F;', title: 'AI safety and alignment',         path: '/learn/ai-safety',                 difficulty: 'Intermediate', readingTime: '6 min' },
      { id: 'trusting-ai',        icon: '&#x1F50D;', title: 'Can I trust what AI says?',               path: '/learn/trusting-ai',               difficulty: 'Intermediate', readingTime: '5 min' },
      { id: 'prompt-engineering', icon: '&#x270F;&#xFE0F;', title: 'What is prompt engineering?',      path: '/learn/prompt-engineering',        difficulty: 'Intermediate', readingTime: '6 min' },
      { id: 'how-this-was-built', icon: '&#x1F528;', title: 'How this app was built',                  path: '/learn/how-this-was-built',        difficulty: 'Intermediate', readingTime: '5 min' },
      { id: 'meet-the-agents',    icon: '&#x1F465;', title: 'Meet the AI agents',                      path: '/agents',                          difficulty: 'Beginner' },
      { id: 'what-is-ci-cd',      icon: '&#x1F680;', title: 'How does the website update automatically?', path: '/learn/what-is-ci-cd',         difficulty: 'Advanced',     readingTime: '4 min' },
      { id: 'version-control',    icon: '&#x1F4BE;', title: 'How does version control work?',          path: '/learn/what-is-version-control',   difficulty: 'Advanced',     readingTime: '4 min' },
      { id: 'pull-request',       icon: '&#x1F501;', title: 'What is a pull request?',                 path: '/learn/what-is-a-pull-request',    difficulty: 'Advanced',     readingTime: '4 min' },
    ],
  },
]

const ALL_LESSONS = STAGES.flatMap(s => s.lessons)

function parseMinutes(readingTime?: string): number {
  if (!readingTime) return 0
  const match = readingTime.match(/(\d+)/)
  return match ? parseInt(match[1], 10) : 0
}

const TOTAL_MINUTES = ALL_LESSONS.reduce((sum, l) => sum + parseMinutes(l.readingTime), 0)

const DIFFICULTY_STYLES: Record<Difficulty, string> = {
  Beginner:     'bg-green-100 text-green-700',
  Intermediate: 'bg-amber-100 text-amber-700',
  Advanced:     'bg-red-100 text-red-700',
}

const STAGE_COLOURS: Record<string, { bg: string; border: string; heading: string; progress: string; stageBadge: string }> = {
  blue:    { bg: 'bg-blue-50',    border: 'border-blue-200',   heading: 'text-blue-800',   progress: 'bg-blue-500',   stageBadge: 'bg-blue-100 text-blue-700' },
  purple:  { bg: 'bg-purple-50',  border: 'border-purple-200', heading: 'text-purple-800', progress: 'bg-purple-500', stageBadge: 'bg-purple-100 text-purple-700' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', heading: 'text-emerald-800', progress: 'bg-emerald-500', stageBadge: 'bg-emerald-100 text-emerald-700' },
  amber:   { bg: 'bg-amber-50',   border: 'border-amber-200',  heading: 'text-amber-800',  progress: 'bg-amber-500',  stageBadge: 'bg-amber-100 text-amber-700' },
  violet:  { bg: 'bg-violet-50',  border: 'border-violet-200', heading: 'text-violet-800', progress: 'bg-violet-500', stageBadge: 'bg-violet-100 text-violet-700' },
}

const QUIZ_KEY = 'ronny-quiz-completed'

function loadCompleted(): Set<string> {
  try {
    const raw = localStorage.getItem(QUIZ_KEY)
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

function getFirstUncompleted(completed: Set<string>): LessonMeta | null {
  for (const lesson of ALL_LESSONS) {
    if (!completed.has(lesson.id)) return lesson
  }
  return null
}

export function LearningPath() {
  const [completed] = useState<Set<string>>(loadCompleted)
  const totalLessons = ALL_LESSONS.length
  const completedCount = ALL_LESSONS.filter(l => completed.has(l.id)).length
  const firstUncompleted = getFirstUncompleted(completed)
  const completedMinutes = ALL_LESSONS
    .filter(l => completed.has(l.id))
    .reduce((sum, l) => sum + parseMinutes(l.readingTime), 0)
  const remainingMinutes = TOTAL_MINUTES - completedMinutes

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F5FA;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Your learning path
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            All {totalLessons} lessons, organised into stages. Work through them in order or
            jump to whatever interests you most.
          </p>
        </div>

        {/* Overall progress */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">Overall progress</span>
            <span className="text-sm text-gray-500 font-medium">
              {completedCount} of {totalLessons} lessons completed
            </span>
          </div>
          <div
            className="w-full bg-gray-100 rounded-full h-3"
            role="progressbar"
            aria-valuenow={completedCount}
            aria-valuemin={0}
            aria-valuemax={totalLessons}
            aria-label={`${completedCount} of ${totalLessons} lessons completed`}
          >
            <div
              className="bg-blue-500 h-3 rounded-full transition-all duration-500"
              style={{ width: completedCount > 0 ? `${(completedCount / totalLessons) * 100}%` : '2px' }}
            />
          </div>

          {firstUncompleted ? (
            <Link
              to={firstUncompleted.path as '/'}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
            >
              <span>Continue where you left off</span>
              <span>&rarr;</span>
            </Link>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
              <p className="text-emerald-700 font-semibold">You have completed all lessons. Amazing work!</p>
              <Link to="/certificate" className="text-sm font-semibold text-amber-600 hover:text-amber-800 underline">
                Get your certificate &rarr;
              </Link>
            </div>
          )}
        </div>

        {/* Time summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-extrabold text-emerald-600">
                {completedMinutes >= 60
                  ? `${(completedMinutes / 60).toFixed(1)}h`
                  : `${completedMinutes}m`}
              </p>
              <p className="text-xs text-gray-500 mt-0.5 leading-tight">learning completed</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-blue-600">
                {remainingMinutes >= 60
                  ? `${(remainingMinutes / 60).toFixed(1)}h`
                  : `${remainingMinutes}m`}
              </p>
              <p className="text-xs text-gray-500 mt-0.5 leading-tight">remaining</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-gray-700">
                {TOTAL_MINUTES >= 60
                  ? `${(TOTAL_MINUTES / 60).toFixed(1)}h`
                  : `${TOTAL_MINUTES}m`}
              </p>
              <p className="text-xs text-gray-500 mt-0.5 leading-tight">total content</p>
            </div>
          </div>
        </div>

        {/* Stages */}
        {STAGES.map((stage, stageIdx) => {
          const stageCompleted = stage.lessons.filter(l => completed.has(l.id)).length
          const colours = STAGE_COLOURS[stage.color]
          const stagePercent = stage.lessons.length > 0
            ? Math.round((stageCompleted / stage.lessons.length) * 100)
            : 0

          return (
            <div key={stage.name} className={`rounded-2xl border ${colours.border} overflow-hidden`}>
              {/* Stage header */}
              <div className={`${colours.bg} px-6 py-4 space-y-2`}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${colours.stageBadge}`}>
                        Stage {stageIdx + 1}
                      </span>
                    </div>
                    <h2 className={`text-xl font-bold ${colours.heading}`}>{stage.name}</h2>
                    <p className="text-gray-600 text-sm mt-0.5">{stage.description}</p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="text-sm font-semibold text-gray-700">{stageCompleted}/{stage.lessons.length}</p>
                    <p className="text-xs text-gray-500">completed</p>
                  </div>
                </div>
                {/* Stage progress bar */}
                <div className="w-full bg-white bg-opacity-60 rounded-full h-2">
                  <div
                    className={`${colours.progress} h-2 rounded-full transition-all duration-500`}
                    style={{ width: stagePercent > 0 ? `${stagePercent}%` : '2px' }}
                  />
                </div>
              </div>

              {/* Lessons */}
              <div className="bg-white divide-y divide-gray-50">
                {stage.lessons.map((lesson) => {
                  const isDone = completed.has(lesson.id)
                  return (
                    <Link
                      key={lesson.id}
                      to={lesson.path as '/'}
                      className="flex items-center gap-3 px-6 py-4 hover:bg-gray-50 transition-colors group"
                    >
                      {/* Completion indicator */}
                      <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold border-2 transition-colors ${
                        isDone
                          ? 'bg-emerald-500 border-emerald-500 text-white'
                          : 'border-gray-300 bg-white text-gray-300'
                      }`}>
                        {isDone ? '&#x2713;' : ''}
                        {!isDone && <span dangerouslySetInnerHTML={{ __html: '' }} />}
                        {isDone && <span>&#x2713;</span>}
                      </div>

                      {/* Icon */}
                      <span
                        className="text-2xl flex-shrink-0"
                        dangerouslySetInnerHTML={{ __html: lesson.icon }}
                      />

                      {/* Title and metadata */}
                      <div className="flex-1 min-w-0">
                        <p className={`font-semibold text-sm leading-tight transition-colors ${
                          isDone ? 'text-gray-500' : 'text-gray-800 group-hover:text-blue-700'
                        }`}>
                          {lesson.title}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${DIFFICULTY_STYLES[lesson.difficulty]}`}>
                            {lesson.difficulty}
                          </span>
                          {lesson.readingTime && (
                            <span className="text-xs text-gray-400">{lesson.readingTime} read</span>
                          )}
                          {isDone && (
                            <span className="text-xs text-emerald-600 font-semibold">Completed</span>
                          )}
                        </div>
                      </div>

                      <span className="text-gray-400 text-base flex-shrink-0 group-hover:translate-x-1 transition-transform">
                        &rarr;
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}

        {/* Footer CTA */}
        <div className="text-center space-y-3 py-4">
          <p className="text-gray-500 text-sm">
            Track your progress on the{' '}
            <Link to="/my-progress" className="text-blue-600 hover:underline font-medium">
              My Progress
            </Link>{' '}
            page.
          </p>
        </div>

      </div>
    </div>
  )
}
