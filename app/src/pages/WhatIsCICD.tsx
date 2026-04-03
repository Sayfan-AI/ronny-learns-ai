import { Link } from '@tanstack/react-router'
import { useMarkVisited } from '../hooks/useMarkVisited'

export function WhatIsCICD() {
  useMarkVisited('what-is-ci-cd')
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl">🏭</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            How does the website update automatically?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Every time Gigi or the AI makes a change, the website updates on its own — no one clicks &ldquo;publish&rdquo;.
            Here is how that works.
          </p>
        </div>

        {/* Section 1: The problem it solves */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">😤</span>
            <h2 className="text-2xl font-semibold text-gray-700">The old way — before automation</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Imagine if every time the AI wrote new code, someone had to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-lg">
            <li>Manually check it did not break anything</li>
            <li>Manually run the build process</li>
            <li>Manually upload the new version to the web</li>
          </ul>
          <p className="text-gray-600 text-lg leading-relaxed">
            That would mean someone sitting at a computer pressing buttons every single time a tiny change was made.
            With an AI system making dozens of changes per day, that is not realistic.
          </p>
        </div>

        {/* Section 2: The factory analogy */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🏭</span>
            <h2 className="text-2xl font-semibold text-gray-700">Think of it like a factory assembly line</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            A modern factory does not have a person inspecting every single product by hand and then driving it to the shop.
            It has an <strong>automated assembly line</strong>:
          </p>
          <ul className="list-none space-y-3 text-gray-600 text-lg">
            <li className="flex gap-3">
              <span>1️⃣</span>
              <span>A new product comes off the line</span>
            </li>
            <li className="flex gap-3">
              <span>2️⃣</span>
              <span>Sensors automatically check for defects</span>
            </li>
            <li className="flex gap-3">
              <span>3️⃣</span>
              <span>If it passes, it is packaged and shipped automatically</span>
            </li>
            <li className="flex gap-3">
              <span>4️⃣</span>
              <span>If it fails the check, the line stops and alerts a human</span>
            </li>
          </ul>
          <p className="text-gray-600 text-lg leading-relaxed">
            Software CI/CD works the same way. Every code change goes through an automated assembly line — tested and published without anyone pressing buttons.
          </p>
        </div>

        {/* Section 3: What CI/CD stands for */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">📖</span>
            <h2 className="text-2xl font-semibold text-gray-700">What CI/CD actually stands for</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>CI</strong> stands for <strong>Continuous Integration</strong>. It means every change is automatically tested right away — not once a week, but instantly, every single time.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>CD</strong> stands for <strong>Continuous Deployment</strong>. If the tests pass, the change is automatically published to the live website. No human needed.
          </p>
          <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-4">
            <p className="text-cyan-800 text-base">
              <strong>Plain English version:</strong> Every time code is saved, it is automatically checked for problems, and if it is fine, the website is updated. Done.
            </p>
          </div>
        </div>

        {/* Section 4: How it works in this project */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">⚡</span>
            <h2 className="text-2xl font-semibold text-gray-700">How it works in this project</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            When the AI finishes a task and saves its work to GitHub, here is what happens next — automatically, in about 2 minutes:
          </p>
          <div className="space-y-3">
            {[
              {
                step: '1',
                title: 'GitHub spots the change',
                desc: 'The moment new code is pushed to GitHub, it triggers an automated workflow called a GitHub Action.',
              },
              {
                step: '2',
                title: 'The code is checked',
                desc: 'The workflow checks that the code has no obvious errors (lint check) and builds it into a working website.',
              },
              {
                step: '3',
                title: 'It is published',
                desc: 'If everything looks good, the updated website is automatically deployed to GitHub Pages — the live website you are reading right now.',
              },
              {
                step: '4',
                title: 'You see the update',
                desc: 'A few minutes later, anyone visiting the site sees the new version. No one had to press "publish" or "deploy".',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-cyan-600 text-white font-bold flex items-center justify-center text-base flex-shrink-0 mt-0.5">
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-lg">{item.title}</p>
                  <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Why it matters */}
        <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">💡</span>
            <h2 className="text-2xl font-semibold text-cyan-800">Why this matters to you</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            The AI can work quickly and publish many changes per day because the whole pipeline is automated.
            There is no bottleneck of someone having to manually review and publish each one.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            If you refresh this page tomorrow, it might look slightly different — because the AI added something new overnight, the CI/CD pipeline checked it, and published it automatically while everyone was asleep.
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
        </div>
      </div>
    </div>
  )
}
