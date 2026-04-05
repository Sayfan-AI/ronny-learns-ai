import { useState, useCallback } from 'react'
import { Link } from '@tanstack/react-router'
import { loadAllNotes } from '../components/LessonNote'

// All lessons with their titles and paths — used to resolve note IDs to lesson info
const ALL_LESSONS: Array<{ id: string; icon: string; title: string; to: string }> = [
  { id: 'github-signup',    icon: '&#x1F511;', title: 'Create your GitHub account',        to: '/tutorial/github-signup' },
  { id: 'github-basics',    icon: '&#x1F4C1;', title: 'What is GitHub for?',               to: '/learn/github-basics' },
  { id: 'what-is-api',      icon: '&#x1F517;', title: 'What is an API?',                   to: '/learn/what-is-api' },
  { id: 'what-is-ai',            icon: '&#x1F916;', title: 'What is AI?',                              to: '/learn/what-is-ai' },
  { id: 'what-is-ml',            icon: '&#x1F4CA;', title: 'What is machine learning?',               to: '/learn/what-is-machine-learning' },
  { id: 'how-ai-training-works', icon: '&#x1F3CB;', title: 'How does AI training work?',             to: '/learn/how-ai-training-works' },
  { id: 'neural-network',        icon: '&#x1F9E0;', title: 'What is a neural network?',               to: '/learn/neural-network' },
  { id: 'language-models',       icon: '&#x1F4AC;', title: 'How do language models work?',            to: '/learn/language-models' },
  { id: 'how-chatbots-work',     icon: '&#x1F4AC;', title: 'How do chatbots work?',                   to: '/learn/how-chatbots-work' },
  { id: 'ai-history',            icon: '&#x1F4DC;', title: 'AI history timeline',                     to: '/ai-history' },
  { id: 'ai-everyday-life',      icon: '&#x1F30D;', title: 'AI in everyday life',                     to: '/learn/ai-everyday-life' },
  { id: 'ai-in-your-apps',       icon: '&#x1F4F1;', title: 'AI in the apps you already use',          to: '/learn/ai-in-your-apps' },
  { id: 'ai-and-creativity',          icon: '&#x1F3A8;', title: 'AI and creativity',                       to: '/learn/ai-and-creativity' },
  { id: 'ai-in-healthcare',           icon: '&#x1FA7A;', title: 'AI in healthcare',                        to: '/learn/ai-in-healthcare' },
  { id: 'ai-for-accessibility',       icon: '&#x267F;', title: 'AI for accessibility',                    to: '/learn/ai-for-accessibility' },
  { id: 'ai-and-scientific-research', icon: '&#x1F52C;', title: 'AI and scientific research',             to: '/learn/ai-and-scientific-research' },
  { id: 'ai-productivity-tools',      icon: '&#x26A1;', title: 'AI and your productivity',               to: '/learn/ai-productivity-tools' },
  { id: 'ai-and-food',                icon: '&#x1F33F;', title: 'AI and food',                              to: '/learn/ai-and-food' },
  { id: 'ai-and-sport',               icon: '&#x26BD;', title: 'AI and sport',                             to: '/learn/ai-and-sport' },
  { id: 'ai-and-transport',           icon: '&#x1F697;', title: 'AI and transport',                         to: '/learn/ai-and-transport' },
  { id: 'ai-and-art',                 icon: '&#x1F3A8;', title: 'AI and art',                               to: '/learn/ai-and-art' },
  { id: 'ai-and-cybersecurity',       icon: '&#x1F512;', title: 'AI and cybersecurity',                     to: '/learn/ai-and-cybersecurity' },
  { id: 'ai-and-space',               icon: '&#x1F680;', title: 'AI and space',                             to: '/learn/ai-and-space' },
  { id: 'ai-and-climate-change',      icon: '&#x1F30D;', title: 'AI and climate change',                    to: '/learn/ai-and-climate-change' },
  { id: 'ai-and-robotics',            icon: '&#x1F916;', title: 'AI and robotics',                            to: '/learn/ai-and-robotics' },
  { id: 'ai-and-fashion',             icon: '&#x1F457;', title: 'AI and fashion',                              to: '/learn/ai-and-fashion' },
  { id: 'ai-and-agriculture',         icon: '&#x1F33E;', title: 'AI and agriculture',                          to: '/learn/ai-and-agriculture' },
  { id: 'ai-and-retail',              icon: '&#x1F6CD;', title: 'AI and retail',                                to: '/learn/ai-and-retail' },
  { id: 'ai-and-travel',              icon: '&#x2708;&#xFE0F;', title: 'AI and travel',                         to: '/learn/ai-and-travel' },
  { id: 'ai-and-housing',             icon: '&#x1F3E0;', title: 'AI and housing',                               to: '/learn/ai-and-housing' },
  { id: 'ai-and-energy',              icon: '&#x26A1;', title: 'AI and energy',                                to: '/learn/ai-and-energy' },
  { id: 'ai-and-elderly-care',        icon: '&#x1F9D3;', title: 'AI and elderly care',                          to: '/learn/ai-and-elderly-care' },
  { id: 'ai-and-insurance',           icon: '&#x1F6E1;&#xFE0F;', title: 'AI and insurance',                      to: '/learn/ai-and-insurance' },
  { id: 'ai-and-policing',            icon: '&#x2696;&#xFE0F;', title: 'AI and policing',                         to: '/learn/ai-and-policing' },
  { id: 'ai-and-the-nhs',             icon: '&#x1F3E5;', title: 'AI and the NHS',                               to: '/learn/ai-and-the-nhs' },
  { id: 'ai-and-hiring',              icon: '&#x1F4BC;', title: 'AI and hiring',                                to: '/learn/ai-and-hiring' },
  { id: 'ai-and-customer-service',    icon: '&#x1F4AC;', title: 'AI and customer service',                      to: '/learn/ai-and-customer-service' },
  { id: 'ai-and-weather',             icon: '&#x26C5;', title: 'AI and the weather',                            to: '/learn/ai-and-weather' },
  { id: 'ai-pros-and-cons',      icon: '&#x2696;&#xFE0F;', title: 'AI: the good and the bad',               to: '/learn/ai-pros-and-cons' },
  { id: 'ai-bias',               icon: '&#x2696;&#xFE0F;', title: 'What is AI bias?',                        to: '/learn/ai-bias' },
  { id: 'ai-safety',             icon: '&#x1F6E1;&#xFE0F;', title: 'AI safety and alignment',                to: '/learn/ai-safety' },
  { id: 'prompt-engineering',    icon: '&#x270F;&#xFE0F;', title: 'What is prompt engineering?',            to: '/learn/prompt-engineering' },
  { id: 'trusting-ai',           icon: '&#x1F50D;', title: 'Can I trust what AI says?',              to: '/learn/trusting-ai' },
  { id: 'ai-and-jobs',           icon: '&#x1F4BC;', title: 'AI and jobs',                             to: '/learn/ai-and-jobs' },
  { id: 'ai-and-environment',    icon: '&#x1F331;', title: 'AI and the environment',                  to: '/learn/ai-and-environment' },
  { id: 'ai-and-privacy',        icon: '&#x1F512;', title: 'AI and privacy',                          to: '/learn/ai-and-privacy' },
  { id: 'ai-and-education',      icon: '&#x1F393;', title: 'AI and education',                        to: '/learn/ai-and-education' },
  { id: 'ai-and-social-media',   icon: '&#x1F4F2;', title: 'AI and social media',                    to: '/learn/ai-and-social-media' },
  { id: 'ai-and-misinformation', icon: '&#x1F50E;', title: 'AI and misinformation',                  to: '/learn/ai-and-misinformation' },
  { id: 'ai-and-mental-health',  icon: '&#x1F9E0;', title: 'AI and your mental health',              to: '/learn/ai-and-mental-health' },
  { id: 'future-of-ai',          icon: '&#x1F52D;', title: 'What does the future of AI look like?', to: '/learn/future-of-ai' },
  { id: 'ai-laws-and-rights',    icon: '&#x2696;&#xFE0F;', title: 'AI, laws, and your rights',             to: '/learn/ai-laws-and-rights' },
  { id: 'ai-and-copyright',      icon: '&#x2696;&#xFE0F;', title: 'AI and the law',                         to: '/learn/ai-and-copyright' },
  { id: 'how-to-use-ai-safely',  icon: '&#x1F6E1;&#xFE0F;', title: 'How to use AI safely',                  to: '/learn/how-to-use-ai-safely' },
  { id: 'ai-and-money',          icon: '&#x1F4B0;', title: 'AI and money',                            to: '/learn/ai-and-money' },
  { id: 'ai-and-democracy',      icon: '&#x1F3DB;&#xFE0F;', title: 'AI and democracy',                       to: '/learn/ai-and-democracy' },
  { id: 'ai-and-language',       icon: '&#x1F5E3;&#xFE0F;', title: 'AI and language',                        to: '/learn/ai-and-language' },
  { id: 'ai-and-music',          icon: '&#x1F3B5;', title: 'AI and music',                            to: '/learn/ai-and-music' },
  { id: 'ai-and-gaming',         icon: '&#x1F3AE;', title: 'AI and gaming',                           to: '/learn/ai-and-gaming' },
  { id: 'ai-and-journalism',     icon: '&#x1F4F0;', title: 'AI and journalism',                       to: '/learn/ai-and-journalism' },
  { id: 'ai-and-mental-wellbeing-at-work', icon: '&#x1F9D8;', title: 'AI and mental wellbeing at work', to: '/learn/ai-and-mental-wellbeing-at-work' },
  { id: 'ai-and-children',       icon: '&#x1F9D2;', title: 'AI and children',                            to: '/learn/ai-and-children' },
  { id: 'genesis-system',        icon: '&#x2699;&#xFE0F;', title: 'What is the Genesis system?',          to: '/learn/genesis-system' },
  { id: 'how-this-was-built',    icon: '&#x1F3D7;&#xFE0F;', title: 'How this app was built',             to: '/learn/how-this-was-built' },
  { id: 'what-is-ci-cd',         icon: '&#x1F3ED;', title: 'How does the website update?',            to: '/learn/what-is-ci-cd' },
  { id: 'version-control',       icon: '&#x1F4BE;', title: 'How does version control work?',           to: '/learn/what-is-version-control' },
  { id: 'pull-request',          icon: '&#x1F4CB;', title: 'What is a pull request?',                  to: '/learn/what-is-a-pull-request' },
  { id: 'meet-the-agents',       icon: '&#x1F465;', title: 'Meet the AI agents',                       to: '/agents' },
  { id: 'ai-and-photography',          icon: '&#x1F4F7;', title: 'AI and photography',                         to: '/learn/ai-and-photography' },
  { id: 'ai-and-mental-health-apps',   icon: '&#x1F4AC;', title: 'AI and mental health apps',                  to: '/learn/ai-and-mental-health-apps' },
]

const LESSON_MAP = new Map(ALL_LESSONS.map(l => [l.id, l]))

interface NoteEntry {
  id: string
  icon: string
  title: string
  to: string
  note: string
}

function loadNoteEntries(): NoteEntry[] {
  const allNotes = loadAllNotes()
  const entries: NoteEntry[] = []
  for (const [id, note] of Object.entries(allNotes)) {
    if (!note.trim()) continue
    const lesson = LESSON_MAP.get(id)
    if (lesson) {
      entries.push({ id, icon: lesson.icon, title: lesson.title, to: lesson.to, note })
    }
  }
  return entries
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // ignore clipboard errors
    }
  }, [text])

  return (
    <button
      onClick={handleCopy}
      className="flex-shrink-0 text-xs font-medium px-3 py-1.5 rounded-lg border border-yellow-300 bg-yellow-50 text-yellow-700 hover:bg-yellow-100 transition-colors"
    >
      {copied ? '&#x2713; Copied!' : '&#x1F4CB; Copy'}
    </button>
  )
}

export function MyNotes() {
  const noteEntries = loadNoteEntries()

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-6">

        <div className="text-center space-y-3">
          <div className="text-5xl">&#x1F4DD;</div>
          <h1 className="text-3xl font-bold text-gray-800">My Notes</h1>
          <p className="text-gray-500 leading-relaxed">
            All the notes you have written across your lessons, in one place.
          </p>
          <Link
            to="/my-progress"
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 underline underline-offset-2"
          >
            &#x2190; Back to My Progress
          </Link>
        </div>

        {noteEntries.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-yellow-100 p-8 text-center space-y-3">
            <div className="text-4xl">&#x1F4C3;</div>
            <p className="text-gray-600 font-medium">You have not written any notes yet.</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Visit any lesson and tap &ldquo;Add a note&rdquo; to jot something down. Your notes will all appear here.
            </p>
            <Link
              to="/"
              className="inline-block mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
            >
              Browse lessons
            </Link>
          </div>
        ) : (
          <>
            <p className="text-gray-400 text-sm text-center">
              {noteEntries.length} lesson{noteEntries.length !== 1 ? 's' : ''} with notes
            </p>
            <div className="space-y-4">
              {noteEntries.map(entry => (
                <div
                  key={entry.id}
                  className="bg-white rounded-2xl shadow-sm border border-yellow-100 p-5 space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: entry.icon }} />
                      <Link
                        to={entry.to}
                        className="font-semibold text-yellow-800 hover:text-yellow-900 leading-tight truncate"
                      >
                        {entry.title}
                      </Link>
                    </div>
                    <Link
                      to={entry.to}
                      className="flex-shrink-0 text-xs text-yellow-600 hover:text-yellow-700 underline underline-offset-2 whitespace-nowrap"
                    >
                      Go to lesson &#x2192;
                    </Link>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap bg-yellow-50 rounded-xl p-3 border border-yellow-100">
                    {entry.note}
                  </p>
                  <div className="flex justify-end">
                    <CopyButton text={`${entry.title}\n\n${entry.note}`} />
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
