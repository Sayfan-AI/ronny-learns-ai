import { Link } from '@tanstack/react-router'
import { useMarkVisited } from '../hooks/useMarkVisited'

const lessons = [
  {
    path: '/lessons/chocolatey',
    icon: '&#x1F36B;',
    title: 'Installing Chocolatey',
    description: 'Set up a command-line package manager so you can install tools without clicking through installers.',
    time: '5 min',
  },
  {
    path: '/lessons/wsl2',
    icon: '&#x1F427;',
    title: 'Setting Up WSL2',
    description: 'Install Linux inside Windows. This gives you a proper developer environment for everything ahead.',
    time: '10 min',
  },
  {
    path: '/lessons/shell-basics',
    icon: '&#x1F5A5;',
    title: 'Basic Shell Commands',
    description: 'Learn the 8 most essential terminal commands. Navigate, create, copy, move, and read files.',
    time: '8 min',
  },
  {
    path: '/lessons/gemini-cli',
    icon: '&#x2728;',
    title: 'Gemini CLI',
    description: 'Install Node.js, get a Gemini API key, and start chatting with AI from your terminal.',
    time: '15 min',
  },
]

export function TerminalAndTools() {
  useMarkVisited('terminal-and-tools')
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col items-center px-4 py-8 sm:py-16">
      <div className="max-w-2xl w-full space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="text-5xl sm:text-6xl">&#x1F6E0;</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
            Terminal &amp; Tools
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Everything you need to set up a real developer environment on your Windows
            computer — from scratch, step by step.
          </p>
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 text-sm px-4 py-2 rounded-full">
            <span>4 lessons &middot; about 40 min total</span>
          </div>
        </div>

        {/* Module description */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-8 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">What you will learn</h2>
          <ul className="space-y-2 text-gray-600 text-lg list-none">
            <li className="flex gap-3">
              <span className="text-slate-400 shrink-0">&#x25CF;</span>
              <span>How to install software from the terminal using Chocolatey</span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-400 shrink-0">&#x25CF;</span>
              <span>What WSL2 is and how to get Linux running on your Windows PC</span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-400 shrink-0">&#x25CF;</span>
              <span>The 8 essential terminal commands every developer uses daily</span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-400 shrink-0">&#x25CF;</span>
              <span>How to install Node.js and talk to an AI (Gemini) from the terminal</span>
            </li>
          </ul>
        </div>

        {/* Lesson cards */}
        <div className="space-y-4">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson.path}
              to={lesson.path}
              className="block bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl shrink-0" dangerouslySetInnerHTML={{ __html: lesson.icon }} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                      Lesson {index + 1}
                    </span>
                    <span className="text-xs text-slate-400">&middot; {lesson.time}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{lesson.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed">{lesson.description}</p>
                </div>
                <span className="text-gray-300 text-2xl shrink-0">&#x203A;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
