import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { NextLesson } from '../components/NextLesson'
import { RelatedLessons } from '../components/RelatedLessons'

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

const PR_LIFECYCLE_STEPS = [
  {
    icon: '&#x1F33F;',
    title: 'A branch is created',
    detail:
      'The developer (or agent) creates a separate copy of the codebase called a "branch". This is a safe place to make changes without affecting the live site.',
  },
  {
    icon: '&#x270F;&#xFE0F;',
    title: 'Changes are made and committed',
    detail:
      'Code is written, files are edited. Each set of changes is saved as a "commit" — a snapshot with a short description of what changed.',
  },
  {
    icon: '&#x1F4E4;',
    title: 'A pull request is opened',
    detail:
      'The developer opens a pull request on GitHub. It describes what changed, why, and how to test it. This is the start of the review process.',
  },
  {
    icon: '&#x1F916;',
    title: 'Automated checks run',
    detail:
      'Robots (CI/CD) automatically build the app and run tests. If anything fails, the PR shows a red cross and the merge is blocked until the problem is fixed.',
  },
  {
    icon: '&#x1F4AC;',
    title: 'A reviewer leaves feedback',
    detail:
      'A human or another agent reads the changes and can leave comments, request fixes, or approve. This is where mistakes get caught before anyone sees them.',
  },
  {
    icon: '&#x2705;',
    title: 'The PR is approved',
    detail:
      'Once everything looks good and the checks pass, a reviewer clicks "Approve". The PR is now ready to merge.',
  },
  {
    icon: '&#x1F500;',
    title: 'Merged into main — change is live!',
    detail:
      'The changes are merged into the main branch. The CI/CD pipeline picks this up and deploys the new version. The live website updates within minutes.',
  },
]

const SCENARIO_QUESTIONS = [
  {
    scenario: 'A reviewer leaves a comment saying your code has a typo in a button label. What do you do?',
    options: [
      'Fix the typo, make a new commit, and push — the PR updates automatically',
      'Close the PR and open a brand new one',
      'Ignore the comment — it is only a typo',
    ],
    correctIndex: 0,
    explanation:
      'You can push more commits to the same branch and the PR will update automatically. No need to close and reopen it. Small fixes like typos are normal and expected.',
  },
  {
    scenario: 'The automated checks fail with a build error. The PR has a red cross. What happens next?',
    options: [
      'The PR gets merged anyway — the reviewer can fix it later',
      'The merge is blocked. The developer must fix the error and push again before the PR can merge.',
      'GitHub automatically reverts the changes',
    ],
    correctIndex: 1,
    explanation:
      'Failing checks block the merge. This is intentional — it prevents broken code from reaching the live site. The developer needs to find and fix the error first.',
  },
  {
    scenario: 'The PR is approved and all checks pass. What is the next step?',
    options: [
      'Delete the repository',
      'Open a new issue describing what you just built',
      'Merge the PR — the changes become part of main and deploy automatically',
    ],
    correctIndex: 2,
    explanation:
      'Once approved and checks pass, you click "Merge pull request". The changes flow into main, and the CI/CD pipeline deploys them to the live site.',
  },
]

export function PullRequest() {
  useEffect(() => {
    markVisited('pull-request')
  }, [])

  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [scenarioAnswers, setScenarioAnswers] = useState<Record<number, number>>({})
  const [scenarioSubmitted, setScenarioSubmitted] = useState(false)

  function handleScenarioAnswer(qIdx: number, aIdx: number) {
    if (scenarioSubmitted) return
    setScenarioAnswers((prev) => ({ ...prev, [qIdx]: aIdx }))
  }

  const allScenarioAnswered = SCENARIO_QUESTIONS.every((_, i) => scenarioAnswers[i] !== undefined)
  const scenarioScore = SCENARIO_QUESTIONS.filter((q, i) => scenarioAnswers[i] === q.correctIndex).length

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
            <p className="text-violet-700 text-sm font-medium">About 8 min read</p>
          </div>
        </div>

        {/* Section 1: The idea */}
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The idea behind a pull request</h2>
          <p className="text-gray-600 leading-relaxed">
            Imagine you have been working on a revised version of a document. You are happy with your
            changes and want to add them to the shared original. But before you do, you send it to a
            colleague and say: &ldquo;I made these changes &mdash; have a look and let me know if it is OK.&rdquo;
          </p>
          <p className="text-gray-600 leading-relaxed">
            That is a pull request. In GitHub, a developer (or an AI agent) works on a branch, then
            opens a pull request to propose merging that branch into main. It is a request for someone
            to review the changes before they go live.
          </p>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
            <p className="text-violet-800 font-medium">
              The name &ldquo;pull request&rdquo; comes from the technical action: you are asking the main branch
              to &ldquo;pull in&rdquo; your changes. Some platforms call it a &ldquo;merge request&rdquo; &mdash; same idea.
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

        {/* NEW: Interactive PR lifecycle */}
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">
            &#x1F500; The PR lifecycle &mdash; step by step
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Click each step to learn what happens at that stage. This is the journey every change
            in this app takes, from idea to live website.
          </p>
          <div className="space-y-3">
            {PR_LIFECYCLE_STEPS.map((step, i) => {
              const isOpen = activeStep === i
              return (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setActiveStep(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 px-4 py-3 text-left hover:bg-violet-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-100 text-violet-700 font-bold text-sm flex items-center justify-center">
                      {i + 1}
                    </div>
                    <span className="text-xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: step.icon }} />
                    <span className="flex-1 font-semibold text-gray-800">{step.title}</span>
                    <span className="text-gray-400 text-sm">{isOpen ? '&#x25B2;' : '&#x25BC;'}</span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 bg-violet-50 border-t border-violet-100">
                      <p className="text-gray-700 leading-relaxed">{step.detail}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* NEW: Real PR example */}
        <div className="bg-violet-50 border border-violet-200 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">&#x1F517;</span>
            <h2 className="text-2xl font-bold text-violet-800">A real pull request from this project</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Every page of this app arrived through a pull request. Here is a real example:
          </p>
          <div className="bg-white border border-violet-200 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-0.5 rounded-full">Merged</span>
              <span className="font-semibold text-gray-800">Add Terminal &amp; Tools module (Milestone 2)</span>
            </div>
            <p className="text-sm text-gray-600">
              This PR added the entire &ldquo;Terminal &amp; Tools&rdquo; section &mdash; Chocolatey, WSL2,
              shell basics, and the Gemini CLI lesson. It was written by an AI agent, reviewed by
              automated checks, and merged by Gigi.
            </p>
            <a
              href="https://github.com/Sayfan-AI/ronny-learns-ai/pulls?q=is%3Apr+is%3Aclosed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-violet-600 underline text-sm font-medium hover:text-violet-800"
            >
              Browse all closed pull requests on GitHub &#x2192;
            </a>
          </div>
          <p className="text-gray-600 text-sm">
            Look at the &ldquo;Files changed&rdquo; tab on any PR to see exactly what was added or changed &mdash;
            green lines are additions, red lines are removals.
          </p>
        </div>

        {/* Section 3: PR in this project */}
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How pull requests work in this project</h2>
          <p className="text-gray-600 leading-relaxed">
            In this project, the AI agents do most of the work &mdash; and they use pull requests to do it
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
                GitHub &#x2192;
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

        {/* NEW: Scenario quiz */}
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">&#x1F914; What would you do?</h2>
          <p className="text-gray-600">
            Read each situation and pick the best response. These are real scenarios that happen
            on pull requests every day.
          </p>
          <div className="space-y-8">
            {SCENARIO_QUESTIONS.map((q, qIdx) => (
              <div key={qIdx} className="space-y-3">
                <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
                  <p className="text-violet-800 font-medium leading-relaxed">
                    Scenario {qIdx + 1}: {q.scenario}
                  </p>
                </div>
                <div className="space-y-2">
                  {q.options.map((opt, aIdx) => {
                    const isSelected = scenarioAnswers[qIdx] === aIdx
                    const isCorrect = aIdx === q.correctIndex
                    let bg = 'bg-gray-50 border-gray-200 hover:bg-violet-50 hover:border-violet-300'
                    if (scenarioSubmitted) {
                      if (isCorrect) bg = 'bg-green-50 border-green-400'
                      else if (isSelected && !isCorrect) bg = 'bg-red-50 border-red-400'
                      else bg = 'bg-gray-50 border-gray-200'
                    } else if (isSelected) {
                      bg = 'bg-violet-50 border-violet-400'
                    }
                    return (
                      <button
                        key={aIdx}
                        onClick={() => handleScenarioAnswer(qIdx, aIdx)}
                        className={`w-full text-left px-4 py-3 rounded-xl border-2 text-gray-700 transition-colors ${bg}`}
                      >
                        {String.fromCharCode(65 + aIdx)}. {opt}
                        {scenarioSubmitted && isCorrect && (
                          <span className="ml-2 text-green-600 font-semibold">&#x2713; Best answer</span>
                        )}
                        {scenarioSubmitted && isSelected && !isCorrect && (
                          <span className="ml-2 text-red-500 font-semibold">&#x2717; Not quite</span>
                        )}
                      </button>
                    )
                  })}
                </div>
                {scenarioSubmitted && (
                  <p className="text-sm text-gray-600 bg-gray-50 rounded-lg px-4 py-2">
                    {q.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>
          {!scenarioSubmitted ? (
            <button
              onClick={() => setScenarioSubmitted(true)}
              disabled={!allScenarioAnswered}
              className="w-full py-3 rounded-xl bg-violet-600 text-white font-semibold text-lg disabled:opacity-40 hover:bg-violet-700 transition-colors"
            >
              Check my answers
            </button>
          ) : (
            <div className="text-center space-y-2">
              <p className="text-2xl font-bold text-gray-800">
                {scenarioScore}/{SCENARIO_QUESTIONS.length} correct
              </p>
              {scenarioScore === SCENARIO_QUESTIONS.length ? (
                <p className="text-green-600 font-medium">You understand pull requests!</p>
              ) : (
                <p className="text-gray-600">Read the explanations and you will get there.</p>
              )}
            </div>
          )}
        </div>

        {/* Original Quiz */}
        <Quiz questions={questions} title="Test your knowledge: pull requests" lessonId="pull-request" lessonTitle="What is a pull request?" />

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

        <RelatedLessons currentId="pull-request" />
        <NextLesson currentId="pull-request" />
      </div>
    </div>
  )
}
