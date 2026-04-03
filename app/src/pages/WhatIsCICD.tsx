import { Link } from '@tanstack/react-router'
import { useMarkVisited } from '../hooks/useMarkVisited'

export function WhatIsCICD() {
  useMarkVisited('what-is-ci-cd')
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3ED;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            What is a CI/CD pipeline?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            When a developer saves code, how does it become a live website? There is a whole automated process for that.
          </p>
        </div>

        {/* Section 1: The problem */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F914;</span>
            <h2 className="text-2xl font-semibold text-gray-700">The problem it solves</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Imagine you have ten developers all adding code to a project. Every time someone
            makes a change, someone would need to:
          </p>
          <ul className="list-none space-y-2 text-gray-600 text-lg">
            <li className="flex gap-2"><span>1.</span><span>Check that the new code doesn&apos;t break anything</span></li>
            <li className="flex gap-2"><span>2.</span><span>Build the app (turn code into a runnable website)</span></li>
            <li className="flex gap-2"><span>3.</span><span>Upload the new version to the web server</span></li>
          </ul>
          <p className="text-gray-600 text-lg leading-relaxed">
            Doing this by hand every time would be exhausting and error-prone. That is exactly what a
            <strong> CI/CD pipeline</strong> automates.
          </p>
        </div>

        {/* Section 2: The factory analogy */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F6E4;&#xFE0F;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Think of it like a factory assembly line</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            A car factory does not build one car at a time by hand — it has a production line where each
            station does its job automatically. The same idea applies here:
          </p>
          <div className="space-y-4">
            {[
              { icon: '&#x2705;', label: 'Check quality', desc: 'Automated tests run to make sure nothing is broken. If they fail, the pipeline stops — no broken code ships.' },
              { icon: '&#x1F528;', label: 'Build', desc: 'The code is compiled and packaged into the files that make up the website — just like assembling parts into a finished product.' },
              { icon: '&#x1F680;', label: 'Deploy', desc: 'The finished product is automatically uploaded to the web server and goes live. No one had to press a button.' },
            ].map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-3xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: step.icon }} />
                <div>
                  <p className="font-semibold text-gray-800 text-lg">{step.label}</p>
                  <p className="text-gray-600 text-base leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: What CI and CD mean */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4D6;</span>
            <h2 className="text-2xl font-semibold text-gray-700">What the letters actually mean</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-indigo-300 pl-4">
              <p className="font-semibold text-gray-800 text-lg">CI — Continuous Integration</p>
              <p className="text-gray-600 leading-relaxed">
                &ldquo;Integration&rdquo; means bringing pieces together. &ldquo;Continuous&rdquo; means doing it constantly.
                Every time code is saved, it is automatically tested and merged with the rest of the project.
                Problems get caught early, not weeks later.
              </p>
            </div>
            <div className="border-l-4 border-indigo-300 pl-4">
              <p className="font-semibold text-gray-800 text-lg">CD — Continuous Deployment</p>
              <p className="text-gray-600 leading-relaxed">
                Once the code passes tests, it is automatically &ldquo;deployed&rdquo; — published to the live website.
                No waiting, no manual steps. The moment code is merged and passes checks, it goes live.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: How it works in this project */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4BB;</span>
            <h2 className="text-2xl font-semibold text-indigo-800">How it works in this project</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            This very app uses a CI/CD pipeline. Here is what happens every time the AI or Gigi saves code:
          </p>
          <ol className="list-none space-y-2 text-gray-700 text-lg">
            <li className="flex gap-2"><span>1.</span><span>Code is saved to GitHub (a commit is made)</span></li>
            <li className="flex gap-2"><span>2.</span><span>GitHub Actions (the pipeline tool) detects the change and starts running</span></li>
            <li className="flex gap-2"><span>3.</span><span>The app is built (TypeScript is compiled, CSS is processed)</span></li>
            <li className="flex gap-2"><span>4.</span><span>The built files are uploaded to GitHub Pages (a free web hosting service)</span></li>
            <li className="flex gap-2"><span>5.</span><span>The live website at <code className="bg-white px-1 rounded text-sm">sayfan-ai.github.io/ronny-learns-ai</code> is updated</span></li>
          </ol>
          <p className="text-gray-700 text-lg leading-relaxed">
            This entire process takes a few minutes and happens automatically every time anyone pushes code.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-2">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
          >
            &larr; Home
          </Link>
          <Link
            to="/learn/genesis-system"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors"
          >
            The Genesis System &rarr;
          </Link>
        </div>

      </div>
    </div>
  )
}
