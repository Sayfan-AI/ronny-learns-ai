import { useState } from 'react'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { LessonFeedback } from '../components/LessonFeedback'
import { ReviewLaterButton } from '../components/ReviewLaterButton'

const QUIZ_QUESTIONS = [
  {
    question: 'Which tab do you click to see issues on a GitHub repo?',
    options: ['Code', 'Issues', 'Settings', 'Actions'],
    correctIndex: 1,
    explanation:
      'The "Issues" tab is right at the top of any GitHub repository page. Click it to see all open and closed issues.',
  },
  {
    question: 'What makes a good issue title?',
    options: [
      'Something vague like "Help"',
      'A clear, specific summary like "Question: what does the Gemini CLI do?"',
      'Your full name and email address',
      'A random number',
    ],
    correctIndex: 1,
    explanation:
      'A good title tells people exactly what the issue is about at a glance. Clear and specific titles get answered faster.',
  },
]

export function YourFirstIssue() {
  useMarkVisited('your-first-issue')
  useLessonVisit('your-first-issue')

  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)

  function handleAnswer(qIdx: number, aIdx: number) {
    if (submitted) return
    setAnswers((prev) => ({ ...prev, [qIdx]: aIdx }))
  }

  const allAnswered = QUIZ_QUESTIONS.every((_, i) => answers[i] !== undefined)
  const score = QUIZ_QUESTIONS.filter((q, i) => answers[i] === q.correctIndex).length

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center px-4 py-8 sm:py-16">
      <div className="max-w-2xl w-full space-y-6 sm:space-y-8">

        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="text-5xl sm:text-6xl">&#x1F4DD;</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
            Create your first issue
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Stop reading and start doing. In this lesson you will create a real GitHub issue
            in the repository for this app.
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
            <span>About 6 min</span>
          </div>
          <CompletedBadge lessonId="your-first-issue" />
        </div>

        {/* What is a GitHub issue? */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F914;</span>
            <h2 className="text-2xl font-semibold text-gray-700">What is a GitHub issue?</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            An <strong>issue</strong> is a message you leave on a GitHub project. It can be anything:
            a bug report, a feature idea, a question, or just a note. Think of it like a sticky note
            pinned to the project where everyone can see it and reply.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            On this project, issues are how <strong>humans and AI agents talk to each other</strong>.
            When Gigi wants something changed, she opens an issue. When the AI finishes a task, it
            closes an issue. When you have a question &mdash; you can open one too.
          </p>
        </div>

        {/* Why create one? */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4AC;</span>
            <h2 className="text-2xl font-semibold text-blue-800">Why create one?</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Creating an issue is your way of joining the conversation. You do not need to write any
            code. A good question or suggestion in an issue is just as valuable as writing code.
          </p>
          <ul className="space-y-2 text-gray-700 text-lg">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold mt-0.5">&#x2022;</span>
              <span>Ask a question: &ldquo;How does the AI know what to build next?&rdquo;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold mt-0.5">&#x2022;</span>
              <span>Share feedback: &ldquo;The Gemini CLI page was confusing &mdash; can you add more examples?&rdquo;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold mt-0.5">&#x2022;</span>
              <span>Suggest a feature: &ldquo;Idea: add a quiz about AI safety&rdquo;</span>
            </li>
          </ul>
        </div>

        {/* Step-by-step walkthrough */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F9ED;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Step-by-step guide</h2>
          </div>
          <p className="text-gray-600 text-lg">Follow these steps to create your first issue:</p>
          <ol className="space-y-6">
            {[
              {
                n: 1,
                icon: '&#x1F310;',
                title: 'Go to the repository',
                body: (
                  <>
                    Open this link in your browser:{' '}
                    <a
                      href="https://github.com/ronny-simons/ronny-learns-ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline font-medium"
                    >
                      github.com/ronny-simons/ronny-learns-ai
                    </a>
                    . This is the home of the app you are reading right now.
                  </>
                ),
              },
              {
                n: 2,
                icon: '&#x1F4CB;',
                title: 'Click the "Issues" tab',
                body: 'Near the top of the page you will see a row of tabs: Code, Issues, Pull requests, Actions... Click "Issues".',
              },
              {
                n: 3,
                icon: '&#x1F7E2;',
                title: 'Click "New issue"',
                body: 'On the Issues page, look for the green "New issue" button in the top right corner. Click it.',
              },
              {
                n: 4,
                icon: '&#x270F;&#xFE0F;',
                title: 'Write a title',
                body: (
                  <>
                    The title is the short summary. Make it specific. For example:{' '}
                    <span className="bg-gray-100 px-2 py-0.5 rounded font-mono text-sm">
                      Question: what does the Gemini CLI do?
                    </span>
                  </>
                ),
              },
              {
                n: 5,
                icon: '&#x1F4DD;',
                title: 'Add a description',
                body: 'The big text box below the title is where you explain more. A few sentences is fine. No need to be perfect.',
              },
              {
                n: 6,
                icon: '&#x1F680;',
                title: 'Click "Submit new issue"',
                body: 'When you are happy with what you wrote, click the green "Submit new issue" button. Done! Your issue is live.',
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold text-lg flex items-center justify-center">
                  {step.n}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl" dangerouslySetInnerHTML={{ __html: step.icon }} />
                    <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Tips */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4A1;</span>
            <h2 className="text-2xl font-semibold text-amber-800">Tips for a good issue</h2>
          </div>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold mt-0.5">&#x2022;</span>
              <span><strong>Clear title.</strong> If someone reads only the title, they should understand what the issue is about.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold mt-0.5">&#x2022;</span>
              <span><strong>One topic per issue.</strong> If you have two ideas, open two separate issues.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold mt-0.5">&#x2022;</span>
              <span><strong>Be friendly.</strong> Real humans and AI agents will read your issue. A polite message always gets a better response.</span>
            </li>
          </ul>
        </div>

        {/* Quiz */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F9E0;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Quick check</h2>
          </div>
          <div className="space-y-8">
            {QUIZ_QUESTIONS.map((q, qIdx) => (
              <div key={qIdx} className="space-y-3">
                <p className="text-lg font-medium text-gray-800">
                  {qIdx + 1}. {q.question}
                </p>
                <div className="space-y-2">
                  {q.options.map((opt, aIdx) => {
                    const isSelected = answers[qIdx] === aIdx
                    const isCorrect = aIdx === q.correctIndex
                    let bg = 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300'
                    if (submitted) {
                      if (isCorrect) bg = 'bg-green-50 border-green-400'
                      else if (isSelected && !isCorrect) bg = 'bg-red-50 border-red-400'
                      else bg = 'bg-gray-50 border-gray-200'
                    } else if (isSelected) {
                      bg = 'bg-blue-50 border-blue-400'
                    }
                    return (
                      <button
                        key={aIdx}
                        onClick={() => handleAnswer(qIdx, aIdx)}
                        className={`w-full text-left px-4 py-3 rounded-xl border-2 text-gray-700 transition-colors ${bg}`}
                      >
                        {opt}
                        {submitted && isCorrect && (
                          <span className="ml-2 text-green-600 font-semibold">&#x2713; Correct</span>
                        )}
                        {submitted && isSelected && !isCorrect && (
                          <span className="ml-2 text-red-500 font-semibold">&#x2717; Not quite</span>
                        )}
                      </button>
                    )
                  })}
                </div>
                {submitted && (
                  <p className="text-sm text-gray-600 bg-gray-50 rounded-lg px-4 py-2">
                    {q.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>
          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              disabled={!allAnswered}
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold text-lg disabled:opacity-40 hover:bg-blue-700 transition-colors"
            >
              Check my answers
            </button>
          ) : (
            <div className="text-center space-y-2">
              <p className="text-2xl font-bold text-gray-800">
                {score}/{QUIZ_QUESTIONS.length} correct
              </p>
              {score === QUIZ_QUESTIONS.length ? (
                <p className="text-green-600 font-medium">Perfect! You are ready to create your first issue.</p>
              ) : (
                <p className="text-gray-600">Read the explanations above and you will be all set.</p>
              )}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 sm:p-8 text-center space-y-4">
          <span className="text-5xl block">&#x1F389;</span>
          <h2 className="text-2xl font-semibold text-green-800">Now try it for real!</h2>
          <p className="text-gray-700 text-lg">
            Head to the repository and create your first issue. It does not matter what it is about
            &mdash; a question, an idea, or just &ldquo;Hello, I made it!&rdquo;
          </p>
          <a
            href="https://github.com/ronny-simons/ronny-learns-ai/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-700 transition-colors text-lg"
          >
            Open a new issue &#x2192;
          </a>
        </div>

        <LessonNote lessonId="your-first-issue" />
        <LessonFeedback lessonId="your-first-issue" />
        <LessonRating lessonId="your-first-issue" />
        <ReviewLaterButton lessonId="your-first-issue" />
        <RelatedLessons currentId="your-first-issue" />
        <NextLesson currentId="your-first-issue" />
      </div>
    </div>
  )
}
