import { Link } from '@tanstack/react-router'

export function WhatIsCICD() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3ED;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            How does the website update automatically?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Every time the AI makes a change to this app, the update appears on the website
            within minutes — without anyone clicking "publish." Here is how that works.
          </p>
        </div>

        {/* The problem it solves */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F914;</span>
            <h2 className="text-2xl font-semibold text-gray-700">The problem without automation</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Imagine if every time an AI agent added a new page to this app, someone had to
            manually: check the code for mistakes, compile everything into a website, upload
            it to the hosting server, and verify it was working. That would be exhausting —
            and very easy to get wrong.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Before automation tools existed, this was exactly how software worked. Developers
            called it "release day" — a stressful process of manually pushing changes live.
          </p>
        </div>

        {/* The factory analogy */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F699;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Think of a car factory</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Modern car factories have assembly lines. Each car moves through a series of stations:
            parts are added, welds are checked, paint is applied, quality is tested. If something
            fails a check, the line stops and the problem is fixed before the car moves on.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            CI/CD is the software equivalent of that assembly line. Every time a developer
            (or AI agent) saves new code, an automated pipeline kicks in, runs checks, and
            — if everything passes — ships the finished product to users.
          </p>
          <div className="bg-cyan-50 rounded-xl p-4 space-y-2">
            <p className="text-cyan-800 text-sm font-semibold">In our project:</p>
            <ul className="space-y-1 text-cyan-700 text-sm">
              <li>&#x2022; New code = a new car part arriving at the factory</li>
              <li>&#x2022; Automated checks = quality control stations</li>
              <li>&#x2022; Deployment = the finished car leaving the factory</li>
              <li>&#x2022; You loading the website = driving the car</li>
            </ul>
          </div>
        </div>

        {/* What CI/CD stands for */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4CB;</span>
            <h2 className="text-2xl font-semibold text-gray-700">What the acronym actually means</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            The technical name is <strong>CI/CD</strong> — Continuous Integration and Continuous Deployment.
            Do not worry about memorising that. Here is what it means in practice:
          </p>
          <div className="space-y-4">
            <div className="border border-gray-100 rounded-xl p-5 space-y-2">
              <h3 className="font-semibold text-gray-800 text-lg">Continuous Integration (CI)</h3>
              <p className="text-gray-600 leading-relaxed">
                Every time someone saves new code, it is automatically merged with the rest
                of the project and tested. This catches mistakes early — before they become
                a bigger problem. &ldquo;Integration&rdquo; means joining your piece with everyone else&rsquo;s.
                &ldquo;Continuous&rdquo; means it happens every single time, not just once a week.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-5 space-y-2">
              <h3 className="font-semibold text-gray-800 text-lg">Continuous Deployment (CD)</h3>
              <p className="text-gray-600 leading-relaxed">
                Once the checks pass, the new version of the app is automatically pushed
                live for users to see. &ldquo;Deployment&rdquo; means publishing. &ldquo;Continuous&rdquo; means
                it happens automatically on every good change, not just on big release days.
              </p>
            </div>
          </div>
        </div>

        {/* How it works in this project */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x26A1;</span>
            <h2 className="text-2xl font-semibold text-gray-700">How it works in this project</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            This is what happens every time an AI agent finishes a task:
          </p>
          <div className="space-y-4">
            {[
              {
                step: 'AI writes code and commits it',
                desc: 'The agent finishes the task and saves its work to GitHub. This is called a commit.',
              },
              {
                step: 'GitHub Actions detects the change',
                desc: 'A tool called GitHub Actions watches for new commits. The moment one arrives, it starts the pipeline automatically.',
              },
              {
                step: 'The app is built',
                desc: 'The pipeline takes all the code files and compiles them into the website — just like baking ingredients into a finished cake.',
              },
              {
                step: 'Checks run',
                desc: 'The pipeline verifies the build succeeded and the code has no obvious errors. If something fails, the pipeline stops and the old version stays live.',
              },
              {
                step: 'The website is updated',
                desc: 'If everything passes, the new version of the app is published. You can refresh the page and see the change — often within a few minutes of the AI writing it.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-cyan-600 text-white font-bold flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <span className="font-semibold text-gray-800">{item.step}: </span>
                  <span className="text-gray-600">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why it matters for Ronny */}
        <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4A1;</span>
            <h2 className="text-2xl font-semibold text-cyan-800">Why this matters for you</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every page you have read in this app arrived through that pipeline. When you
            see a new module appear in the learning path, it was not Gigi manually uploading
            it — it was the AI committing code, the pipeline running checks, and the update
            going live automatically.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            CI/CD is what makes it possible for a small team (or even a solo person) to
            release software quickly and safely. It removes the scary, manual parts of
            publishing and replaces them with a reliable, repeatable process.
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
            to="/learn/how-this-was-built"
            className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition-colors"
          >
            How this app was built &rarr;
          </Link>
        </div>

      </div>
    </div>
  )
}
