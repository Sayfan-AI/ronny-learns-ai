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

        <p className="text-gray-400 text-sm">
          Don&apos;t worry &mdash; we&apos;ll explain everything along the way.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Learn more section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700">Want to learn more?</h2>
          <p className="text-gray-600 text-lg">
            Explore these short guides at your own pace:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              to="/learn/github-basics"
              className="block bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="text-3xl mb-2">📁</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">What is GitHub for?</h3>
              <p className="text-gray-500 text-sm">Repos, commits, issues, and pull requests &mdash; explained simply.</p>
            </Link>
            <Link
              to="/learn/what-is-ai"
              className="block bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">What is AI?</h3>
              <p className="text-gray-500 text-sm">How AI language models work and how Gigi uses one to build this app.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
