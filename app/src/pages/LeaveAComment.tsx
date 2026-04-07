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

const MARKDOWN_EXAMPLES = [
  { syntax: '**bold text**', rendered: 'bold text', label: 'Bold' },
  { syntax: '*italic text*', rendered: 'italic text', label: 'Italic' },
  { syntax: '- bullet point', rendered: 'bullet point', label: 'Bullet list' },
  { syntax: '[link text](https://...)', rendered: 'link text', label: 'Link' },
  { syntax: '`code snippet`', rendered: 'code snippet', label: 'Code' },
]

const QUIZ_QUESTIONS = [
  {
    question: 'Where do you find the comment box on a GitHub issue?',
    options: [
      'At the top of the page',
      'In the Settings tab',
      'At the bottom of the issue, below all existing comments',
      'You have to email the repo owner',
    ],
    correctIndex: 2,
    explanation:
      'Scroll to the bottom of any issue page and you will find the comment box. Type your message and click "Comment".',
  },
  {
    question: 'What does **bold text** look like in Markdown?',
    options: ['_bold text_', '**bold text**', '##bold text##', '//bold text//'],
    correctIndex: 1,
    explanation:
      'Wrap text with two asterisks on each side: **like this**. GitHub will automatically show it as bold when you submit.',
  },
]

export function LeaveAComment() {
  useMarkVisited('leave-a-comment')
  useLessonVisit('leave-a-comment')

  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)

  function handleAnswer(qIdx: number, aIdx: number) {
    if (submitted) return
    setAnswers((prev) => ({ ...prev, [qIdx]: aIdx }))
  }

  const allAnswered = QUIZ_QUESTIONS.every((_, i) => answers[i] !== undefined)
  const score = QUIZ_QUESTIONS.filter((q, i) => answers[i] === q.correctIndex).length

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center px-4 py-8 sm:py-16">
      <div className="max-w-2xl w-full space-y-6 sm:space-y-8">

        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="text-5xl sm:text-6xl">&#x1F4AC;</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
            Leave a comment
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Comments are how you join the conversation on GitHub. In this lesson you will learn
            to find an issue and leave a helpful, friendly comment.
          </p>
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm px-4 py-2 rounded-full">
            <span>About 5 min</span>
          </div>
          <CompletedBadge lessonId="leave-a-comment" />
        </div>

        {/* Why comments matter */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F917;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Why comments matter</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Comments let you participate in a project without writing any code. You can:
          </p>
          <ul className="space-y-2 text-gray-700 text-lg">
            <li className="flex items-start gap-2">
              <span className="text-purple-500 font-bold mt-0.5">&#x2022;</span>
              <span>Ask a follow-up question on an issue someone else opened</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 font-bold mt-0.5">&#x2022;</span>
              <span>Say &ldquo;I have the same problem&rdquo; so the team knows it affects more people</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 font-bold mt-0.5">&#x2022;</span>
              <span>Say thank you when something gets fixed</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 font-bold mt-0.5">&#x2022;</span>
              <span>Add more context: &ldquo;I noticed this happens only on mobile&rdquo;</span>
            </li>
          </ul>
        </div>

        {/* Finding an issue */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F50E;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Finding an issue to comment on</h2>
          </div>
          <ol className="space-y-5">
            {[
              {
                n: 1,
                title: 'Go to the issues list',
                body: (
                  <>
                    Visit{' '}
                    <a
                      href="https://github.com/ronny-simons/ronny-learns-ai/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 underline font-medium"
                    >
                      github.com/ronny-simons/ronny-learns-ai/issues
                    </a>
                    . You will see a list of open issues.
                  </>
                ),
              },
              {
                n: 2,
                title: 'Pick one that interests you',
                body: 'Click on any issue to open it. Read the title and description. Does it make sense? Is there something you want to add?',
              },
              {
                n: 3,
                title: 'Scroll to the bottom',
                body: 'At the bottom of the issue page, below all existing comments, you will find a text box. That is where you write your comment.',
              },
              {
                n: 4,
                title: 'Write your comment and click "Comment"',
                body: 'Type what you want to say, then click the green "Comment" button. It is that simple!',
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold text-lg flex items-center justify-center">
                  {step.n}
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Writing a good comment */}
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x270D;&#xFE0F;</span>
            <h2 className="text-2xl font-semibold text-purple-800">Writing a good comment</h2>
          </div>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start gap-2">
              <span className="text-purple-500 font-bold mt-0.5">&#x2022;</span>
              <span><strong>Be specific.</strong> Instead of &ldquo;this is confusing&rdquo; try &ldquo;the step 3 screenshot doesn&apos;t match what I see on my screen.&rdquo;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 font-bold mt-0.5">&#x2022;</span>
              <span><strong>Be kind.</strong> Everyone on GitHub is a real person. Write how you would want someone to write to you.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 font-bold mt-0.5">&#x2022;</span>
              <span><strong>Use Markdown to format</strong> if your comment has lists or code. (See the cheat sheet below.)</span>
            </li>
          </ul>
        </div>

        {/* Markdown cheat sheet */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4D6;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Markdown basics cheat sheet</h2>
          </div>
          <p className="text-gray-600 text-lg">
            GitHub comments support <strong>Markdown</strong> &mdash; a simple way to format text
            using special characters. Here are the ones you will use most:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-2 border border-gray-200 font-semibold text-gray-700">What you type</th>
                  <th className="text-left px-4 py-2 border border-gray-200 font-semibold text-gray-700">What it looks like</th>
                  <th className="text-left px-4 py-2 border border-gray-200 font-semibold text-gray-700">Effect</th>
                </tr>
              </thead>
              <tbody>
                {MARKDOWN_EXAMPLES.map((ex) => (
                  <tr key={ex.label} className="even:bg-gray-50">
                    <td className="px-4 py-2 border border-gray-200 font-mono text-purple-700 text-xs">{ex.syntax}</td>
                    <td className="px-4 py-2 border border-gray-200 text-gray-700">
                      {ex.label === 'Bold' && <strong>{ex.rendered}</strong>}
                      {ex.label === 'Italic' && <em>{ex.rendered}</em>}
                      {ex.label === 'Bullet list' && <span>&#x2022; {ex.rendered}</span>}
                      {ex.label === 'Link' && <span className="text-purple-600 underline">{ex.rendered}</span>}
                      {ex.label === 'Code' && <code className="bg-gray-100 px-1 rounded text-xs">{ex.rendered}</code>}
                    </td>
                    <td className="px-4 py-2 border border-gray-200 text-gray-500 text-xs">{ex.label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reactions */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F44D;</span>
            <h2 className="text-2xl font-semibold text-amber-800">GitHub reactions</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            You do not always need to write a full comment. GitHub lets you react to any comment
            with an emoji. Hover over a comment and click the smiley face icon to add a reaction.
          </p>
          <div className="flex flex-wrap gap-3 text-2xl">
            {['&#x1F44D;', '&#x1F44E;', '&#x2764;&#xFE0F;', '&#x1F389;', '&#x1F604;', '&#x1F615;', '&#x1F680;', '&#x1F440;'].map((emoji, i) => (
              <span key={i} dangerouslySetInnerHTML={{ __html: emoji }} />
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            A thumbs up (&#x1F44D;) is a great way to say &ldquo;I agree&rdquo; or &ldquo;this helped me&rdquo; without writing anything.
          </p>
        </div>

        {/* Try it! */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 sm:p-8 text-center space-y-4">
          <span className="text-5xl block">&#x1F4AC;</span>
          <h2 className="text-2xl font-semibold text-green-800">Try it!</h2>
          <p className="text-gray-700 text-lg">
            Find an open issue in this repo and leave a real comment. Even just &ldquo;Hi, I am Ronny and I am learning GitHub!&rdquo;
            counts as a great first comment.
          </p>
          <a
            href="https://github.com/ronny-simons/ronny-learns-ai/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-700 transition-colors text-lg"
          >
            Browse open issues &#x2192;
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
                    let bg = 'bg-gray-50 border-gray-200 hover:bg-purple-50 hover:border-purple-300'
                    if (submitted) {
                      if (isCorrect) bg = 'bg-green-50 border-green-400'
                      else if (isSelected && !isCorrect) bg = 'bg-red-50 border-red-400'
                      else bg = 'bg-gray-50 border-gray-200'
                    } else if (isSelected) {
                      bg = 'bg-purple-50 border-purple-400'
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
              className="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold text-lg disabled:opacity-40 hover:bg-purple-700 transition-colors"
            >
              Check my answers
            </button>
          ) : (
            <div className="text-center space-y-2">
              <p className="text-2xl font-bold text-gray-800">
                {score}/{QUIZ_QUESTIONS.length} correct
              </p>
              {score === QUIZ_QUESTIONS.length ? (
                <p className="text-green-600 font-medium">You are ready to start commenting!</p>
              ) : (
                <p className="text-gray-600">Read the explanations above and try again.</p>
              )}
            </div>
          )}
        </div>

        <LessonNote lessonId="leave-a-comment" />
        <LessonFeedback lessonId="leave-a-comment" />
        <LessonRating lessonId="leave-a-comment" />
        <ReviewLaterButton lessonId="leave-a-comment" />
        <RelatedLessons currentId="leave-a-comment" />
        <NextLesson currentId="leave-a-comment" />
      </div>
    </div>
  )
}
