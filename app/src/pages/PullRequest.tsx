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
    question: 'What is a pull request?',
    options: [
      'A request to delete old code',
      'A proposal to merge changes from one branch into another',
      'A way to download the project',
      'A message to ask for help',
    ],
    correctIndex: 1,
    explanation:
      'A pull request says "I have made some changes on my branch — please review them and merge them into main if you agree." It is a proposal, not an automatic action.',
  },
  {
    question: 'Why is the review step in a pull request useful?',
    options: [
      'It makes the website load faster',
      'It lets someone catch mistakes before they go live',
      'It automatically fixes all bugs',
      'It removes the need for branches',
    ],
    correctIndex: 1,
    explanation:
      'The review step is a quality check. A second pair of eyes (human or automated test) can catch bugs, typos, or problems before they reach the live site.',
  },
  {
    question: 'In this project, who reviews pull requests?',
    options: [
      'Ronny reviews every pull request manually',
      'Nobody — all code goes straight to main',
      'Automated checks (CI/CD) and sometimes Gigi',
      'Only external contributors',
    ],
    correctIndex: 2,
    explanation:
      'Automated checks run first — they build the app and run tests. If those pass, Gigi (or the orchestrator agent) can approve the merge. This keeps quality high without slowing things down.',
  },
  {
    question: 'What happens after a pull request is merged?',
    options: [
      'Nothing — it just closes the PR',
      'The branch is deleted and all changes are lost',
      'The changes appear on the main branch and the CI/CD pipeline deploys them',
      'A new repository is created',
    ],
    correctIndex: 2,
    explanation:
      'Once merged, the changes become part of main. The CI/CD pipeline then automatically builds and deploys the new version — so the live website updates within minutes.',
  },
]

export function PullRequest() {
  useEffect(() => {
    markVisited('pull-request')
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-8">

        {/* Header */}
        <div className="space-y-3">
          <Link to="/" className="text-blue-500 hover:underline text-sm">
            &larr; Back to home
          </Link>
          <div className="bg-violet-100 border border-violet-200 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-4xl">&#x1F4CB;</span>
              <div>
                <p className="text-xs font-semibold text-violet-700 uppercase tracking-wide">Lesson</p>
                <h1 className="text-3xl font-bold text-gray-800 leading-tight">
                  What is a pull request?
                </h1>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              A pull request is how changes get reviewed and approved before they go live. It is one of
              the most important collaboration tools in software development.
            </p>
            <p className="text-violet-700 text-sm font-medium">About 4 min read</p>
          </div>
        </div>

        {/* Section 1: The idea */}
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The idea behind a pull request</h2>
          <p className="text-gray-600 leading-relaxed">
            Imagine you have been working on a revised version of a document. You are happy with your
            changes and want to add them to the shared original. But before you do, you send it to a
            colleague and say: "I made these changes — have a look and let me know if it is OK."
          </p>
          <p className="text-gray-600 leading-relaxed">
            That is a pull request. In GitHub, a developer (or an AI agent) works on a branch, then
            opens a pull request to propose merging that branch into main. It is a request for someone
            to review the changes before they go live.
          </p>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
            <p className="text-violet-800 font-medium">
              The name "pull request" comes from the technical action: you are asking the main branch
              to "pull in" your changes. Some platforms call it a "merge request" — same idea.
            </p>
          </div>
        </div>

        {/* Section 2: What's in a PR */}
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What does a pull request contain?</h2>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4DD;',
                title: 'A description',
                desc: 'What changed, why, and how to test it. In this project the AI agents write these descriptions automatically.',
              },
              {
                icon: '&#x1F50D;',
                title: 'A diff',
                desc: 'A side-by-side view showing exactly what lines were added, changed, or removed. Green = added, red = removed.',
              },
              {
                icon: '&#x2705;',
                title: 'Automated checks',
                desc: 'The CI/CD pipeline runs tests and builds the app. If anything fails, the PR shows a red cross — and the merge is blocked.',
              },
              {
                icon: '&#x1F4AC;',
                title: 'Review comments',
                desc: 'Reviewers can leave comments on specific lines of code, request changes, or approve the PR.',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <span className="text-2xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: item.icon }} />
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: PR in this project */}
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How pull requests work in this project</h2>
          <p className="text-gray-600 leading-relaxed">
            In this project, the AI agents do most of the work — and they use pull requests to do it
            safely. Here is the flow:
          </p>
          <ol className="space-y-3">
            {[
              'The orchestrator agent creates a GitHub issue describing a new feature',
              'A worker agent picks up the issue and creates a branch',
              'The worker builds the feature on the branch and commits the code',
              'The worker opens a pull request on GitHub',
              'Automated checks run — they build the app and check for errors',
              'If checks pass, the PR is merged into main',
              'The live website updates automatically within minutes',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-violet-100 text-violet-700 font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-gray-600 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
            <p className="text-violet-800 font-medium">
              You can see real pull requests from this project on{' '}
              <a
                href="https://github.com/Sayfan-AI/ronny-learns-ai/pulls?state=closed"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-violet-900"
              >
                GitHub &rarr;
              </a>
              . Every feature you have read about in this app arrived through a pull request.
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl p-6 text-white space-y-3">
          <h2 className="text-xl font-bold">Why pull requests matter</h2>
          <ul className="space-y-2">
            {[
              'They make it safe to try new things — on a branch, not the live site',
              'They create a record of every change and why it was made',
              'They give automated checks a chance to catch problems before users see them',
              'They enable collaboration — multiple people (or agents) can work in parallel',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-violet-300 font-bold flex-shrink-0 mt-0.5">&#x2713;</span>
                <span className="text-violet-100">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quiz */}
        <Quiz questions={questions} title="Test your knowledge: pull requests" />

        {/* Navigation */}
        <div className="flex justify-between items-center pt-2">
          <Link
            to="/learn/what-is-version-control"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
          >
            &larr; Version control
          </Link>
          <Link
            to="/my-progress"
            className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-colors"
          >
            My progress &rarr;
          </Link>
        </div>

      </div>
    </div>
  )
}
