import { useState } from 'react'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
import { CompletedBadge } from '../components/CompletedBadge'
import { LessonNote } from '../components/LessonNote'
import { LessonRating } from '../components/LessonRating'
import { LessonFeedback } from '../components/LessonFeedback'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { NextLesson } from '../components/NextLesson'

const STEPS = [
  {
    number: 1,
    title: 'Go to the Issues tab',
    description:
      'Open this link in a new tab to go to the Issues page for this project:',
    link: 'https://github.com/Sayfan-AI/ronny-learns-ai/issues',
    linkText: 'View all issues',
    tip: 'An "issue" is just a tracked conversation. It can be a bug report, a feature idea, a question, or anything the team needs to discuss.',
  },
  {
    number: 2,
    title: 'Click "New issue"',
    description:
      'Look for the green "New issue" button in the top-right corner of the Issues page. Click it.',
    tip: 'You need to be signed in to GitHub to create an issue. If you see a sign-in prompt instead of the button, log in first.',
  },
  {
    number: 3,
    title: 'Write a title',
    description:
      'The title is a one-line summary of what the issue is about. Keep it short but specific. Bad: "Something is wrong". Good: "The home page button is missing a label".',
    tip: 'A good title helps others understand the issue at a glance without reading the full description.',
  },
  {
    number: 4,
    title: 'Write a description',
    description:
      'The big text box below the title is the description. Explain the issue in more detail here. You can write in plain sentences. GitHub supports Markdown which lets you add bold text, bullet lists, and code blocks, but plain text works just fine too.',
    tip: 'For a bug report, try to include: what you expected to happen, what actually happened, and any steps to reproduce it.',
  },
  {
    number: 5,
    title: 'Add labels (optional)',
    description:
      'On the right side of the page you will see a "Labels" section. Click it to add labels like "bug", "enhancement", or "question". Labels help organise issues so the team can filter and prioritise them.',
    tip: 'Labels are optional but very helpful. Even just adding "question" or "bug" goes a long way.',
  },
  {
    number: 6,
    title: 'Submit the issue',
    description:
      'When you are happy with your title and description, click the green "Submit new issue" button at the bottom. That is it! Your issue is now live and the team can see it.',
    tip: 'You can always edit or close an issue after creating it, so do not worry about making it perfect.',
  },
]

function StepCard({ step, isActive, onToggle }: { step: typeof STEPS[0]; isActive: boolean; onToggle: () => void }) {
  return (
    <div className={`rounded-2xl border-2 transition-all ${isActive ? 'border-green-400 shadow-lg' : 'border-gray-200'} bg-white`}>
      <button
        className="w-full text-left px-4 sm:px-8 py-4 sm:py-6 flex items-center gap-4"
        onClick={onToggle}
        aria-expanded={isActive}
      >
        <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${isActive ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
          {step.number}
        </span>
        <span className="text-lg sm:text-xl font-semibold text-gray-800">{step.title}</span>
        <span className={`ml-auto text-gray-400 text-xl transition-transform ${isActive ? 'rotate-180' : ''}`}>&#x25BC;</span>
      </button>
      {isActive && (
        <div className="px-4 sm:px-8 pb-6 space-y-4">
          <p className="text-gray-700 text-lg leading-relaxed">{step.description}</p>
          {step.link && (
            <a
              href={step.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-xl transition-colors"
            >
              {step.linkText} &#x2197;
            </a>
          )}
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <span className="text-2xl flex-shrink-0">&#x1F4A1;</span>
            <p className="text-amber-800 text-base leading-relaxed">{step.tip}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export function YourFirstIssue() {
  useMarkVisited('your-first-issue')
  useLessonVisit('your-first-issue')

  const [activeStep, setActiveStep] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center px-4 py-8 sm:py-16">
      <div className="max-w-2xl w-full space-y-6 sm:space-y-8">

        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="text-5xl sm:text-6xl">&#x1F4DD;</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
            Your first issue
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            An issue is how GitHub tracks tasks, ideas, and bugs. In this lesson you
            will create a real issue in this project&apos;s repository, step by step.
          </p>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full">
            <span>About 5 min</span>
          </div>
          <CompletedBadge lessonId="your-first-issue" />
        </div>

        {/* What is an issue */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">&#x1F4CB;</span>
            <h2 className="text-2xl font-semibold text-green-800">What is an issue?</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Think of GitHub issues like sticky notes on a shared board. Anyone on the
            team, or even the public, can post a note saying &ldquo;I found a problem&rdquo;,
            &ldquo;I have an idea&rdquo;, or &ldquo;Can someone explain this?&rdquo;. The team can reply,
            discuss, and eventually mark it as resolved (closed).
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every task in this project, including the one that created this very
            lesson, started as a GitHub issue.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-800">Follow these steps</h2>
          <p className="text-gray-500 text-base">Click each step to expand it.</p>
          {STEPS.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              isActive={activeStep === index}
              onToggle={() => setActiveStep(activeStep === index ? null : index)}
            />
          ))}
        </div>

        {/* What makes a good issue */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">&#x2705;</span>
            <h2 className="text-2xl font-semibold text-gray-700">What makes a good issue?</h2>
          </div>
          <div className="space-y-3 text-gray-700 text-lg leading-relaxed">
            <div className="flex items-start gap-3">
              <span className="text-green-500 font-bold flex-shrink-0 mt-1">&#x2713;</span>
              <p><strong>Clear title</strong> &mdash; one sentence that summarises the problem or idea</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 font-bold flex-shrink-0 mt-1">&#x2713;</span>
              <p><strong>Enough context</strong> &mdash; what happened, what you expected, any relevant details</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 font-bold flex-shrink-0 mt-1">&#x2713;</span>
              <p><strong>Polite and specific</strong> &mdash; this is a shared workspace, treat it like a professional conversation</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold flex-shrink-0 mt-1">&#x2717;</span>
              <p><strong>Not too vague</strong> &mdash; &ldquo;It does not work&rdquo; tells the team nothing</p>
            </div>
          </div>
        </div>

        {/* Labels explainer */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">&#x1F3F7;&#xFE0F;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Labels and assignments</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Labels</strong> are colour-coded tags that categorise issues. Common labels include:
          </p>
          <div className="flex flex-wrap gap-2">
            {['bug', 'enhancement', 'question', 'help wanted', 'good first issue'].map(label => (
              <span key={label} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">{label}</span>
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Assignees</strong> are the people responsible for working on the issue. You can assign
            yourself or leave it blank if you are not sure who will handle it.
          </p>
        </div>

        {/* Call to action */}
        <div className="bg-green-600 text-white rounded-2xl p-6 sm:p-8 text-center space-y-4">
          <div className="text-4xl">&#x1F680;</div>
          <h2 className="text-2xl font-bold">Ready? Create your first issue!</h2>
          <p className="text-green-100 text-lg">
            Go to the Issues page and try creating a real issue in this project.
            It does not have to be perfect. Even a simple &ldquo;Hello, I am Ronny and I just completed the first issue lesson!&rdquo; counts.
          </p>
          <a
            href="https://github.com/Sayfan-AI/ronny-learns-ai/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors"
          >
            Create an issue now &#x2197;
          </a>
        </div>

        <LessonNote lessonId="your-first-issue" />
        <LessonFeedback lessonId="your-first-issue" />
        <LessonRating lessonId="your-first-issue" />
        <ReviewLaterButton lessonId="your-first-issue" />
        <NextLesson currentId="your-first-issue" />
      </div>
    </div>
  )
}
