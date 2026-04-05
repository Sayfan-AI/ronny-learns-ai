import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { LessonFeedback } from '../components/LessonFeedback'
import { ReviewLaterButton } from '../components/ReviewLaterButton'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does AI stand for?',
    options: [
      'Automated Instructions',
      'Artificial Intelligence',
      'Advanced Internet',
      'Automatic Input',
    ],
    correctIndex: 1,
    explanation:
      'AI stands for Artificial Intelligence — software that has learned patterns from huge amounts of examples.',
    hint: 'Think about what makes a computer seem "intelligent" — it\'s not natural like human intelligence.',
  },
  {
    question: 'How does an AI language model like Claude learn?',
    options: [
      'A team of experts programs every possible answer by hand',
      'It searches the internet in real time to find answers',
      'It learns patterns from enormous amounts of text',
      'It copies answers from a giant book',
    ],
    correctIndex: 2,
    explanation:
      'AI language models are trained on huge amounts of text. They learn patterns — like a very well-read assistant who has absorbed a whole library.',
    hint: 'It\'s similar to how a person learns language — by reading and absorbing a huge amount of it.',
  },
  {
    question: 'What is Claude?',
    options: [
      'A search engine made by Google',
      'An AI made by Anthropic that helps build this app',
      'A programming language',
      'A GitHub tool',
    ],
    correctIndex: 1,
    explanation:
      "Claude is an AI assistant made by a company called Anthropic. It's the AI that helps Gigi build this project.",
    hint: 'This app was built using Claude — who made it?',
  },
  {
    question: 'Is AI magic?',
    options: [
      'Yes — nobody really understands how it works',
      'No — it is a program that generates responses based on learned patterns',
      'Yes — it can do anything a human can do',
      'No — it is just a very fast search engine',
    ],
    correctIndex: 1,
    explanation:
      "AI is not magic. It's a program that predicts helpful responses based on patterns it learned from text. Powerful, but not mysterious.",
    hint: 'Scientists and engineers built AI — they understand how it works.',
  },
]

export function WhatIsAI() {
  useMarkVisited('what-is-ai')
  useLessonVisit('what-is-ai')
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center px-4 py-8 sm:py-16">
      <div className="max-w-2xl w-full space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="text-5xl sm:text-6xl">&#x1F916;</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
            What is AI?
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            You&apos;ve probably heard the word &ldquo;AI&rdquo; a lot lately. Let&apos;s demystify it.
            It&apos;s not magic — and it&apos;s not as scary as it sounds.
          </p>
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm px-4 py-2 rounded-full">
            <span>About 5 min read</span>
          </div>
          <CompletedBadge lessonId="what-is-ai" />
        </div>

        {/* Section 1: What is AI */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl">&#x1F9E0;</span>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">At the most basic level</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            AI stands for <strong>Artificial Intelligence</strong>. At its core, an AI is a
            program that has learned patterns from enormous amounts of examples.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Think about the autocomplete on your phone. When you type &ldquo;Happy birth&rdquo;,
            your phone suggests &ldquo;day!&rdquo; — because it has seen that pattern thousands of times.
            AI language models do the same thing, just at a vastly larger scale.
          </p>
        </div>

        {/* Section 2: How language models work */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4DA;</span>
            <h2 className="text-2xl font-semibold text-gray-700">How AI like Claude works</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            The AI that helps build this app is called <strong>Claude</strong> (made by Anthropic).
            It was trained by reading an enormous amount of text — books, articles, websites,
            code — and learning the patterns of how language works.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            When you ask it a question, it doesn&apos;t &ldquo;look it up&rdquo; like a search engine.
            Instead, it predicts what the most helpful and accurate response would be, based
            on all those patterns it learned.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            A good way to think of it: it&apos;s like a very well-read assistant who has absorbed
            a huge library and can write fluently on almost any topic.
          </p>
        </div>

        {/* Section 3: What AI can and can't do */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x2696;&#xFE0F;</span>
            <h2 className="text-2xl font-semibold text-gray-700">What AI is good at — and not so good at</h2>
          </div>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-green-700 text-lg mb-2">Good at:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-lg">
                <li>Writing text — emails, explanations, stories</li>
                <li>Writing and reviewing code</li>
                <li>Explaining complex topics in simple terms</li>
                <li>Following clear step-by-step instructions</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-red-700 text-lg mb-2">Not so good at:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-lg">
                <li>Remembering things between conversations</li>
                <li>Knowing what happened very recently (news, events)</li>
                <li>Making judgment calls that require real-world experience</li>
                <li>Being 100% accurate — it can make confident-sounding mistakes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4: How Gigi uses AI */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F6E0;&#xFE0F;</span>
            <h2 className="text-2xl font-semibold text-gray-700">How Gigi uses AI to build this for you</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Gigi didn&apos;t write every line of code in this app by hand. Instead, she gives the AI
            clear goals and instructions — and the AI writes the code, opens tasks on GitHub,
            builds the app, and publishes it.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            It&apos;s a bit like being an architect who gives detailed blueprints to a very fast
            and capable builder. The architect (Gigi) decides <em>what</em> to build. The builder
            (the AI) figures out <em>how</em> to build it.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            When something goes wrong or the AI gets stuck, it flags it for Gigi. They
            work together — the AI handles the repetitive technical work, and Gigi provides
            direction and judgment.
          </p>
        </div>

        {/* Section 5: Key message */}
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4A1;</span>
            <h2 className="text-2xl font-semibold text-purple-800">The key thing to remember</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>AI is a tool, not magic.</strong> It doesn&apos;t think or feel — it generates
            responses based on patterns. Like any tool, it&apos;s powerful when used well and
            limited when used poorly.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            The person holding the tool — in this case, Gigi — is still the one responsible
            for the direction, the quality check, and the final decisions. AI makes her faster,
            not unnecessary.
          </p>
        </div>

        {/* Quiz */}
        <Quiz questions={quizQuestions} title="Quiz: What is AI?" lessonId="what-is-ai" lessonTitle="What is AI?" />

        {/* Next lesson */}
        <LessonNote lessonId="what-is-ai" />

        {/* Rating */}
        <LessonFeedback lessonId="what-is-ai" />
        <LessonRating lessonId="what-is-ai" />
        <ReviewLaterButton lessonId="what-is-ai" />

        <RelatedLessons currentId="what-is-ai" />

        <NextLesson currentId="what-is-ai" />
      </div>
    </div>
  )
}
