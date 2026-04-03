import { Link } from '@tanstack/react-router'

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="text-6xl">👋</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Hi Ronny! Welcome to your AI learning journey.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            This is a step-by-step guide to help you learn about GitHub and AI &mdash; no experience needed.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Intro card */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-left space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700">Where do we start?</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The first step is creating a <strong>GitHub account</strong>. Think of GitHub as a shared notebook
            where Gigi and the AI can store all the code for this project &mdash; and soon, where you can
            see exactly what&apos;s happening too.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            It&apos;s free, takes about 5 minutes, and we&apos;ll walk you through every single step.
          </p>
        </div>

        {/* CTA */}
        <Link
          to="/tutorial/github-signup"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold px-10 py-5 rounded-2xl shadow-lg transition-colors duration-200"
        >
          Start Here: Create Your GitHub Account &rarr;
        </Link>

        {/* Learn more section */}
        <div className="border-t border-gray-200" />

        <div className="space-y-4 text-left">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">Learn the basics</h2>
          <p className="text-gray-500 text-center">Curious about how all this works? Start here.</p>

          <div className="grid gap-4">
            <Link
              to="/learn/github-basics"
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-green-200 transition-all duration-200 flex items-center gap-4"
            >
              <span className="text-4xl">📁</span>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">What is GitHub for?</h3>
                <p className="text-gray-500">Repos, commits, issues, and pull requests — explained simply.</p>
              </div>
            </Link>

            <Link
              to="/learn/what-is-ai"
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-purple-200 transition-all duration-200 flex items-center gap-4"
            >
              <span className="text-4xl">🤖</span>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">What is AI?</h3>
                <p className="text-gray-500">Artificial intelligence explained without jargon — what it can and can't do.</p>
              </div>
            </Link>

            <Link
              to="/learn/genesis-system"
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-orange-200 transition-all duration-200 flex items-center gap-4"
            >
              <span className="text-4xl">⚙️</span>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">What is the Genesis system?</h3>
                <p className="text-gray-500">The AI team that builds this app — how it works and how to watch it in real time.</p>
              </div>
            </Link>
          </div>
        </div>

        <p className="text-gray-400 text-sm">
          Don&apos;t worry &mdash; we&apos;ll explain everything along the way.
        </p>
      </div>
    </div>
  )
}
