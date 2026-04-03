import { Link } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'

const VISITED_KEY = 'ronny-visited-modules'

function markVisited(id: string) {
  try {
    const raw = localStorage.getItem(VISITED_KEY)
    const set: Set<string> = new Set(raw ? JSON.parse(raw) : [])
    set.add(id)
    localStorage.setItem(VISITED_KEY, JSON.stringify([...set]))
  } catch {
    // ignore
  }
}

const questions: QuizQuestion[] = [
  {
    question: 'What is a "commit" in version control?',
    options: [
      'Deleting old files to save space',
      'A saved snapshot of your work at a specific moment',
      'A message sent to another developer',
      'A type of programming language',
    ],
    correctIndex: 1,
    explanation:
      'A commit is like pressing "Save" in a document editor — except it also keeps a record of every previous save. You can always go back.',
  },
  {
    question: 'Why would you create a "branch"?',
    options: [
      'To permanently remove part of the project',
      'To make a copy to try something new without breaking the original',
      'To speed up the website',
      'To share the project publicly',
    ],
    correctIndex: 1,
    explanation:
      'A branch is a safe copy where you can experiment. The original (usually called "main") stays untouched until you decide to merge your changes back.',
  },
  {
    question: 'What does "merging" mean?',
    options: [
      'Deleting a branch',
      'Starting a new project from scratch',
      'Combining changes from one branch into another',
      'Locking a file so nobody else can edit it',
    ],
    correctIndex: 2,
    explanation:
      'Merging combines the work done on a branch back into the main codebase. It is like finishing a revised draft of a document and copying the changes into the original.',
  },
  {
    question: 'Which everyday tool is most similar to version control?',
    options: [
      'A calculator',
      'Google Docs version history',
      'A spreadsheet',
      'A printer',
    ],
    correctIndex: 1,
    explanation:
      'Google Docs version history lets you see every change made to a document and go back to any earlier version — exactly what version control does for code.',
  },
]

export function VersionControl() {
  useEffect(() => {
    markVisited('version-control')
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-8">

        {/* Header */}
        <div className="space-y-3">
          <Link to="/" className="text-blue-500 hover:underline text-sm">
            &larr; Back to home
          </Link>
          <div className="bg-sky-100 border border-sky-200 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-4xl">&#x1F4BE;</span>
              <div>
                <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide">Lesson</p>
                <h1 className="text-3xl font-bold text-gray-800 leading-tight">
                  How does version control work?
                </h1>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Every time a developer saves a change to code, the history is kept forever. Learn what a
              commit, a branch, and a merge are — using everyday examples.
            </p>
            <p className="text-sky-700 text-sm font-medium">About 4 min read</p>
          </div>
        </div>

        {/* Section 1: The problem */}
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The problem version control solves</h2>
          <p className="text-gray-600 leading-relaxed">
            Imagine you are writing an important document. You make a change. Then another. Then you
            realise the original version was actually better — but you already saved over it. Gone.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Software developers face this problem constantly, except with hundreds of files and dozens
            of people working at the same time. Version control was invented to solve exactly this.
          </p>
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-4">
            <p className="text-sky-800 font-medium">
              Think of it like this: Google Docs keeps a history of every change ever made to a
              document. You can see who changed what, when, and go back to any earlier version.
              Version control does the same thing for code — across an entire project.
            </p>
          </div>
        </div>

        {/* Section 2: Commits */}
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What is a commit?</h2>
          <p className="text-gray-600 leading-relaxed">
            A <strong>commit</strong> is a saved snapshot of the project at a specific moment. Every
            commit includes:
          </p>
          <ul className="space-y-2 text-gray-600">
            {[
              'All the files as they exist at that moment',
              'A message describing what changed ("Added the quiz page")',
              'Who made the change and when',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-sky-500 font-bold flex-shrink-0 mt-0.5">&#x2713;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Think of commits as checkpoints in a video game. You can always go back to a previous
            checkpoint if something goes wrong. Unlike pressing "Save" in a document, you never lose
            earlier versions — they are all still there.
          </p>
        </div>

        {/* Section 3: Branches */}
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What is a branch?</h2>
          <p className="text-gray-600 leading-relaxed">
            A <strong>branch</strong> is a separate copy of the project where you can make changes
            without affecting the original. Imagine you are editing a document and you want to try a
            completely different introduction — but you are not sure it is better. You make a copy,
            try the new version on the copy, and only replace the original if you like it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 space-y-2">
              <p className="font-semibold text-green-800">main branch</p>
              <p className="text-green-700 text-sm">The "official" version. This is what visitors see on the live website.</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-2">
              <p className="font-semibold text-blue-800">feature branch</p>
              <p className="text-blue-700 text-sm">A working copy where someone (or an AI agent) is trying something new.</p>
            </div>
          </div>
        </div>

        {/* Section 4: Merge */}
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What is a merge?</h2>
          <p className="text-gray-600 leading-relaxed">
            When the work on a branch is ready, it gets <strong>merged</strong> back into the main
            branch. Merging combines the changes from the branch with whatever is in main.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-amber-800 font-medium">
              When a merge completes in this project, GitHub Actions automatically runs — building
              the app, running tests, and deploying the new version to the live website. That is the
              CI/CD pipeline you learned about earlier.
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-br from-sky-600 to-blue-700 rounded-2xl p-6 text-white space-y-3">
          <h2 className="text-xl font-bold">The three big ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon: '&#x1F4BE;', title: 'Commit', desc: 'Save a snapshot with a message' },
              { icon: '&#x1F333;', title: 'Branch', desc: 'Work on a safe copy' },
              { icon: '&#x1F500;', title: 'Merge', desc: 'Combine the copy back in' },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-4 text-center space-y-1">
                <p className="text-2xl" dangerouslySetInnerHTML={{ __html: item.icon }} />
                <p className="font-bold">{item.title}</p>
                <p className="text-sky-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quiz */}
        <Quiz questions={questions} title="Test your knowledge: version control" />

        {/* Navigation */}
        <div className="flex justify-between items-center pt-2">
          <Link
            to="/learn/what-is-ci-cd"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
          >
            &larr; How the website updates
          </Link>
          <Link
            to="/learn/what-is-a-pull-request"
            className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold transition-colors"
          >
            What is a pull request? &rarr;
          </Link>
        </div>

      </div>
    </div>
  )
}
