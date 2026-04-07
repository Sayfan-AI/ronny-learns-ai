import { useState } from 'react'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
import { CompletedBadge } from '../components/CompletedBadge'
import { LessonNote } from '../components/LessonNote'
import { LessonRating } from '../components/LessonRating'
import { LessonFeedback } from '../components/LessonFeedback'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { NextLesson } from '../components/NextLesson'

const MARKDOWN_EXAMPLES = [
  {
    what: 'Bold text',
    syntax: '**bold**',
    result: 'bold',
    resultBold: true,
  },
  {
    what: 'Italic text',
    syntax: '*italic*',
    result: 'italic',
    resultItalic: true,
  },
  {
    what: 'Bullet list',
    syntax: '- Item one\n- Item two',
    result: '- Item one\n- Item two',
    isList: true,
  },
  {
    what: 'Link',
    syntax: '[link text](https://github.com)',
    result: 'link text',
    isLink: true,
  },
]

const GOOD_COMMENT_EXAMPLES = [
  {
    label: 'Good',
    color: 'green',
    text: 'I tried the steps in step 3 and got an error message saying "Permission denied". I am on Windows 11. Could this be a WSL2 permissions issue?',
    why: 'Specific, includes relevant context, asks a clear question.',
  },
  {
    label: 'Good',
    color: 'green',
    text: 'Thank you for writing this lesson! The analogy in the second paragraph really helped it click for me.',
    why: 'Positive and specific feedback that helps the author know what works.',
  },
  {
    label: 'Avoid',
    color: 'red',
    text: 'This doesn\'t work.',
    why: 'Too vague. What does not work? What did you try? What error did you see?',
  },
  {
    label: 'Avoid',
    color: 'red',
    text: 'Can you fix this?',
    why: 'No context at all. Nobody knows what needs fixing or why.',
  },
]

const REACTIONS = [
  { emoji: '&#x1F44D;', name: 'thumbs up', meaning: 'I agree or support this' },
  { emoji: '&#x1F44E;', name: 'thumbs down', meaning: 'I disagree' },
  { emoji: '&#x1F604;', name: 'laugh', meaning: 'This is funny or clever' },
  { emoji: '&#x1F389;', name: 'hooray', meaning: 'Congratulations or celebration' },
  { emoji: '&#x1F615;', name: 'confused', meaning: 'This is unclear to me' },
  { emoji: '&#x2764;&#xFE0F;', name: 'heart', meaning: 'I love this' },
  { emoji: '&#x1F680;', name: 'rocket', meaning: 'This is exciting' },
  { emoji: '&#x1F440;', name: 'eyes', meaning: 'I have seen this / watching' },
]

function MarkdownRow({ what, syntax, result, resultBold, resultItalic, isList, isLink }: typeof MARKDOWN_EXAMPLES[0]) {
  return (
    <div className="grid grid-cols-3 gap-4 py-3 border-b border-gray-100 text-gray-700">
      <span className="text-gray-500">{what}</span>
      <code className="bg-gray-100 px-2 py-0.5 rounded font-mono text-sm whitespace-pre">{syntax}</code>
      <span>
        {isList ? (
          <ul className="list-disc list-inside text-sm space-y-0.5">
            <li>Item one</li>
            <li>Item two</li>
          </ul>
        ) : isLink ? (
          <span className="text-blue-600 underline">{result}</span>
        ) : resultBold ? (
          <strong>{result}</strong>
        ) : resultItalic ? (
          <em>{result}</em>
        ) : (
          result
        )}
      </span>
    </div>
  )
}

export function LeaveAComment() {
  useMarkVisited('leave-a-comment')
  useLessonVisit('leave-a-comment')

  const [showMarkdown, setShowMarkdown] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center px-4 py-8 sm:py-16">
      <div className="max-w-2xl w-full space-y-6 sm:space-y-8">

        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="text-5xl sm:text-6xl">&#x1F4AC;</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
            Leave a comment
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Comments are how the GitHub community discusses, asks questions, and gives
            feedback. Learn how to leave a helpful comment on an issue or pull request.
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
            <span>About 5 min</span>
          </div>
          <CompletedBadge lessonId="leave-a-comment" />
        </div>

        {/* How to find and comment on an issue */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">&#x1F50D;</span>
            <h2 className="text-2xl font-semibold text-blue-800">Finding an issue to comment on</h2>
          </div>
          <ol className="space-y-3 text-gray-700 text-lg leading-relaxed list-none">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
              <span>Go to the <a href="https://github.com/Sayfan-AI/ronny-learns-ai/issues" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Issues page</a> for this project.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
              <span>Click on the title of any open issue to open it.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
              <span>Scroll to the bottom of the issue page. You will see a big text box with the placeholder &ldquo;Leave a comment&rdquo;.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
              <span>Type your comment and click the green &ldquo;Comment&rdquo; button.</span>
            </li>
          </ol>
        </div>

        {/* Markdown basics */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <button
            className="w-full flex items-center justify-between"
            onClick={() => setShowMarkdown(v => !v)}
            aria-expanded={showMarkdown}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">&#x270F;&#xFE0F;</span>
              <h2 className="text-2xl font-semibold text-gray-700 text-left">Markdown basics</h2>
            </div>
            <span className={`text-gray-400 text-xl transition-transform ${showMarkdown ? 'rotate-180' : ''}`}>&#x25BC;</span>
          </button>
          {showMarkdown && (
            <div className="space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                GitHub comments support <strong>Markdown</strong> &mdash; a simple way to format text
                without any special software. You write plain characters like asterisks and hyphens,
                and GitHub turns them into formatted text.
              </p>
              <div className="overflow-x-auto">
                <div className="grid grid-cols-3 gap-4 pb-2 border-b-2 border-gray-200">
                  <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">What you want</span>
                  <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">What you type</span>
                  <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">What you see</span>
                </div>
                {MARKDOWN_EXAMPLES.map(ex => (
                  <MarkdownRow key={ex.what} {...ex} />
                ))}
              </div>
              <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <span className="text-2xl flex-shrink-0">&#x1F4A1;</span>
                <p className="text-amber-800 text-base leading-relaxed">
                  You can also click the icons above the comment box to format text without typing Markdown directly. GitHub shows a preview tab so you can see what it will look like before posting.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Good vs bad comments */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">&#x1F4A1;</span>
            <h2 className="text-2xl font-semibold text-gray-700">What makes a good comment?</h2>
          </div>
          <div className="space-y-4">
            {GOOD_COMMENT_EXAMPLES.map((ex, i) => (
              <div
                key={i}
                className={`rounded-xl border-l-4 p-4 ${ex.color === 'green' ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50'}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${ex.color === 'green' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                    {ex.label}
                  </span>
                </div>
                <p className="text-gray-800 text-base italic mb-2">&ldquo;{ex.text}&rdquo;</p>
                <p className="text-gray-600 text-sm">{ex.why}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reactions */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">&#x1F604;</span>
            <h2 className="text-2xl font-semibold text-gray-700">GitHub reaction emojis</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Instead of always writing a comment, you can click the smiley face icon on any
            comment or issue to add a quick reaction. Here is what each one means:
          </p>
          <div className="grid grid-cols-2 gap-3">
            {REACTIONS.map(r => (
              <div key={r.name} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                <span className="text-2xl" dangerouslySetInnerHTML={{ __html: r.emoji }} />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{r.name}</p>
                  <p className="text-gray-500 text-xs">{r.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-blue-600 text-white rounded-2xl p-6 sm:p-8 text-center space-y-4">
          <div className="text-4xl">&#x1F4AC;</div>
          <h2 className="text-2xl font-bold">Try it now</h2>
          <p className="text-blue-100 text-lg">
            Find an open issue in this project and leave a comment. It can be as simple as
            &ldquo;I read this lesson and it was helpful!&rdquo; or a question you have.
          </p>
          <a
            href="https://github.com/Sayfan-AI/ronny-learns-ai/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Browse issues &#x2197;
          </a>
        </div>

        <LessonNote lessonId="leave-a-comment" />
        <LessonFeedback lessonId="leave-a-comment" />
        <LessonRating lessonId="leave-a-comment" />
        <ReviewLaterButton lessonId="leave-a-comment" />
        <NextLesson currentId="leave-a-comment" />
      </div>
    </div>
  )
}
