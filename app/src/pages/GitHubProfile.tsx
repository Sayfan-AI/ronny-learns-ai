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
    question: 'Where do you go to edit your GitHub profile bio?',
    options: [
      'The Issues tab of any repository',
      'Settings > Public profile',
      'The Pull Requests tab',
      'The Explore page',
    ],
    correctIndex: 1,
    explanation:
      'Click your profile picture (top right of any GitHub page) then choose "Settings". From there, scroll to the "Public profile" section to edit your bio, avatar, and more.',
  },
  {
    question: 'What is the purpose of pinned repositories?',
    options: [
      'To delete repos you no longer need',
      'To make repos private',
      'To feature your best or most relevant projects on your profile page',
      'To notify your followers of new commits',
    ],
    correctIndex: 2,
    explanation:
      'Pinned repositories appear right at the top of your profile page. They let you highlight the work you are most proud of or want visitors to see first.',
  },
]

export function GitHubProfile() {
  useMarkVisited('github-profile')
  useLessonVisit('github-profile')

  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)

  function handleAnswer(qIdx: number, aIdx: number) {
    if (submitted) return
    setAnswers((prev) => ({ ...prev, [qIdx]: aIdx }))
  }

  const allAnswered = QUIZ_QUESTIONS.every((_, i) => answers[i] !== undefined)
  const score = QUIZ_QUESTIONS.filter((q, i) => answers[i] === q.correctIndex).length

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center px-4 py-8 sm:py-16">
      <div className="max-w-2xl w-full space-y-6 sm:space-y-8">

        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="text-5xl sm:text-6xl">&#x1F194;</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
            Polish your GitHub profile
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Your GitHub profile is your public face in the developer world. Let&apos;s make
            it look great &mdash; step by step.
          </p>
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm px-4 py-2 rounded-full">
            <span>About 5 min</span>
          </div>
          <CompletedBadge lessonId="github-profile" />
        </div>

        {/* Why it matters */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F31F;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Why your profile matters</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            When you leave a comment on an issue or contribute to a project, people can click
            your username to see your profile. A complete profile tells them:
          </p>
          <ul className="space-y-2 text-gray-700 text-lg">
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold mt-0.5">&#x2022;</span>
              <span>Who you are and what you are learning</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold mt-0.5">&#x2022;</span>
              <span>What projects you have worked on</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold mt-0.5">&#x2022;</span>
              <span>That you are genuinely engaged &mdash; not just an empty account</span>
            </li>
          </ul>
          <p className="text-gray-600 text-lg leading-relaxed">
            You do not need to be an expert. Even &ldquo;Learning to code with AI&rdquo; is a great bio.
          </p>
        </div>

        {/* Step 1: Avatar */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F5BC;&#xFE0F;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Step 1: Set your avatar</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Your avatar is the picture that shows up next to your name everywhere on GitHub.
            By default it is a colourful pattern (called an &ldquo;identicon&rdquo;), but you can upload
            a real photo or any image you like.
          </p>
          <ol className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">1.</span>
              <span>Click your profile picture in the <strong>top right corner</strong> of any GitHub page.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">2.</span>
              <span>Choose <strong>&ldquo;Settings&rdquo;</strong> from the dropdown menu.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">3.</span>
              <span>On the Settings page, click <strong>&ldquo;Edit&rdquo;</strong> next to your current avatar.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">4.</span>
              <span>Upload a photo from your computer or pick a different option. Click <strong>&ldquo;Set new profile picture&rdquo;</strong>.</span>
            </li>
          </ol>
        </div>

        {/* Step 2: Bio */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x270F;&#xFE0F;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Step 2: Write your bio</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Your bio is a short description of yourself. It appears right below your name on
            your profile page. Keep it to 1&ndash;2 sentences.
          </p>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 space-y-2">
            <p className="text-sm font-semibold text-indigo-700">Example bios:</p>
            <p className="text-gray-700 italic">&ldquo;Learning to code with AI. Student of the genesis system.&rdquo;</p>
            <p className="text-gray-700 italic">&ldquo;Complete beginner exploring GitHub, AI, and the command line.&rdquo;</p>
            <p className="text-gray-700 italic">&ldquo;Here to learn and ask questions!&rdquo;</p>
          </div>
          <p className="text-gray-600 text-lg">
            To save your bio: scroll down the Settings page and click <strong>&ldquo;Update profile&rdquo;</strong>.
          </p>
        </div>

        {/* Step 3: Pinned repos */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4CC;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Step 3: Pin your best repos</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Pinned repos are like a highlight reel on your profile page. You can pin up to
            6 repositories. If you have contributed to <code className="bg-gray-100 px-1 rounded text-sm">ronny-learns-ai</code>,
            that would be a great one to pin!
          </p>
          <ol className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">1.</span>
              <span>Go to your GitHub profile page: <code className="bg-gray-100 px-1 rounded text-sm">github.com/YOUR-USERNAME</code></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">2.</span>
              <span>Click <strong>&ldquo;Customize your pins&rdquo;</strong> (visible when you are logged in).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">3.</span>
              <span>Tick the checkboxes next to the repos you want to feature. Click <strong>&ldquo;Save pins&rdquo;</strong>.</span>
            </li>
          </ol>
        </div>

        {/* Other tips */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4A1;</span>
            <h2 className="text-2xl font-semibold text-indigo-800">Other useful profile fields</h2>
          </div>
          <p className="text-gray-700 text-lg">
            All of these are optional. Add what you are comfortable sharing:
          </p>
          <ul className="space-y-2 text-gray-700 text-lg">
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold mt-0.5">&#x2022;</span>
              <span><strong>Location</strong> &mdash; helps people know what timezone you are in</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold mt-0.5">&#x2022;</span>
              <span><strong>Website</strong> &mdash; link to a personal site, portfolio, or LinkedIn</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold mt-0.5">&#x2022;</span>
              <span><strong>Pronouns</strong> &mdash; GitHub supports adding your preferred pronouns</span>
            </li>
          </ul>
        </div>

        {/* Share */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 sm:p-8 text-center space-y-4">
          <span className="text-5xl block">&#x1F389;</span>
          <h2 className="text-2xl font-semibold text-green-800">Share your profile!</h2>
          <p className="text-gray-700 text-lg">
            Once your profile is looking good, share your link in an issue on this repo.
            We would love to see it.
          </p>
          <a
            href="https://github.com/ronny-simons/ronny-learns-ai/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-700 transition-colors text-lg"
          >
            Share your profile link &#x2192;
          </a>
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
                    let bg = 'bg-gray-50 border-gray-200 hover:bg-indigo-50 hover:border-indigo-300'
                    if (submitted) {
                      if (isCorrect) bg = 'bg-green-50 border-green-400'
                      else if (isSelected && !isCorrect) bg = 'bg-red-50 border-red-400'
                      else bg = 'bg-gray-50 border-gray-200'
                    } else if (isSelected) {
                      bg = 'bg-indigo-50 border-indigo-400'
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
              className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-lg disabled:opacity-40 hover:bg-indigo-700 transition-colors"
            >
              Check my answers
            </button>
          ) : (
            <div className="text-center space-y-2">
              <p className="text-2xl font-bold text-gray-800">
                {score}/{QUIZ_QUESTIONS.length} correct
              </p>
              {score === QUIZ_QUESTIONS.length ? (
                <p className="text-green-600 font-medium">You are ready to polish your profile!</p>
              ) : (
                <p className="text-gray-600">Read the explanations above and try again.</p>
              )}
            </div>
          )}
        </div>

        <LessonNote lessonId="github-profile" />
        <LessonFeedback lessonId="github-profile" />
        <LessonRating lessonId="github-profile" />
        <ReviewLaterButton lessonId="github-profile" />
        <RelatedLessons currentId="github-profile" />
        <NextLesson currentId="github-profile" />
      </div>
    </div>
  )
}
