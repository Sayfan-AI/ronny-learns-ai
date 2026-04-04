import { Link } from '@tanstack/react-router'
import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does API stand for?',
    options: [
      'Automated Program Installer',
      'Application Programming Interface',
      'Advanced Page Integration',
      'Automatic Protocol Interface',
    ],
    correctIndex: 1,
    explanation:
      'API stands for Application Programming Interface — a messenger that lets two programs talk to each other.',
  },
  {
    question: 'Which analogy best describes what an API does?',
    options: [
      'A librarian who stores books for you',
      'A waiter who takes your order to the kitchen and brings your food back',
      'A chef who cooks your meal',
      'A cashier who collects payment',
    ],
    correctIndex: 1,
    explanation:
      "An API works like a waiter — you (the app) ask for something, the waiter (API) takes it to the kitchen (another service), and brings back the result. You never go to the kitchen yourself.",
  },
  {
    question: 'What does an API allow programs to do?',
    options: [
      'Share a single password between apps',
      'Run faster on older computers',
      'Talk to each other and share data or features',
      'Store files offline without internet',
    ],
    correctIndex: 2,
    explanation:
      "APIs are the invisible pipes that connect programs. They let one app use features built by another — like using Google Maps inside Airbnb.",
  },
  {
    question: 'Why do developers use APIs instead of building everything themselves?',
    options: [
      'Because APIs are always free',
      'To use features that others have already built without rebuilding them from scratch',
      'Because APIs work faster than local code',
      'To avoid writing any code at all',
    ],
    correctIndex: 1,
    explanation:
      "APIs let you stand on others' shoulders. Instead of building a weather service, mapping system, or login system from scratch, you just ask the expert service via their API.",
  },
]

export function WhatIsAnAPI() {
  useMarkVisited('what-is-api')
  useLessonVisit('what-is-api')
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="text-blue-500 hover:underline text-sm">
            &larr; Back to home
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">What is an API?</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            APIs are how programs talk to each other. Here is what that actually means in plain language.
          </p>
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm px-4 py-2 rounded-full">
            <span>About 4 min read</span>
          </div>
          <CompletedBadge lessonId="what-is-api" />
        </div>

        {/* The waiter analogy */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">The best analogy: a waiter at a restaurant</h2>
          <p className="text-gray-600 leading-relaxed">
            Imagine you are sitting at a restaurant. You want food from the kitchen, but you do not go back to the kitchen yourself — that would be chaos. Instead, you tell the <strong>waiter</strong> what you want. The waiter goes to the kitchen, gets your order, and brings it back to you.
          </p>
          <p className="text-gray-600 leading-relaxed">
            An <strong>API</strong> (Application Programming Interface) works the same way. It is a messenger that sits between two programs. One program asks for something, the API passes the request along, and then brings the answer back.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <p className="text-blue-800 text-sm font-semibold">In the restaurant analogy:</p>
            <ul className="space-y-1 text-blue-700 text-sm">
              <li>You = the app or program asking for something</li>
              <li>The waiter = the API</li>
              <li>The kitchen = the service providing the data or result</li>
            </ul>
          </div>
        </div>

        {/* Real world examples */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Examples you already know</h2>
          <p className="text-gray-600 leading-relaxed">
            APIs are everywhere. Here are some you have probably used:
          </p>
          <div className="space-y-4">
            {[
              {
                title: 'Weather apps',
                body: 'When you open a weather app and it shows you the forecast, the app is not checking the weather itself. It sends a request via an API to a weather service, which sends back the current temperature and forecast. The app just displays it.',
              },
              {
                title: 'Google Maps in other apps',
                body: "When you use an app like Airbnb or Uber and see a map, that map comes from Google Maps via an API. The Airbnb app asks Google's API for a map of a location, and Google sends one back.",
              },
              {
                title: 'Logging in with Google',
                body: 'When a website lets you click "Sign in with Google", it uses Google\'s API to check your identity. Your password stays with Google — the website just asks Google "is this person who they say they are?" and Google answers yes or no.',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm flex-shrink-0 mt-1">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How Gigi uses APIs */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">How Gigi uses APIs to build this project</h2>
          <p className="text-gray-600 leading-relaxed">
            This entire project is held together by APIs:
          </p>
          <div className="space-y-4">
            {[
              {
                label: 'Claude AI API',
                desc: "Claude (the AI) is not installed on Gigi's computer. It lives on Anthropic's servers. When genesis needs Claude to do something — write code, plan a task, draft a message — it sends a request via the Anthropic API. Claude reads it, generates a response, and sends it back.",
              },
              {
                label: 'GitHub API',
                desc: 'Everything you can do on the GitHub website — open an issue, close a pull request, read comments — can also be done by a program via the GitHub API. Genesis uses this to read issues, post comments, and check the status of the project without any human clicking buttons.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-4 space-y-1">
                <h3 className="font-semibold text-gray-800">{item.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>The big picture:</strong> APIs let programs use each other's superpowers. Gigi's system is not magic — it is a combination of different services (GitHub, Claude, Cloudflare) connected to each other through APIs, each doing the part it is best at.
            </p>
          </div>
        </div>

        {/* Why it matters */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Why this matters for you</h2>
          <p className="text-gray-600 leading-relaxed">
            You do not need to know <em>how</em> to use an API. But knowing that they exist helps you understand why modern software feels so connected.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When genesis does something on GitHub, it is using an API. When it asks Claude to write code, it is using an API. When the app gets deployed to the web, that uses an API too. APIs are the invisible pipes that make it all work together.
          </p>
        </div>

        {/* Quiz */}
        <Quiz questions={quizQuestions} title="Quiz: What is an API?" lessonId="what-is-api" lessonTitle="What is an API?" />

        {/* Next lesson */}
        <LessonNote lessonId="what-is-api" />

        <RelatedLessons currentId="what-is-api" />

        <NextLesson currentId="what-is-api" />

      </div>
    </div>
  )
}
