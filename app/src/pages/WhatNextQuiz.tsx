import { useState } from 'react'
import { Link } from '@tanstack/react-router'

interface Question {
  question: string
  options: string[]
}

interface Recommendation {
  title: string
  to: string
  reason: string
}

const questions: Question[] = [
  {
    question: 'What brings you to this app?',
    options: [
      'I want to understand how AI affects my job',
      'I am curious about AI in daily life',
      'I want to help my children understand AI',
      'I work in a public sector role',
      'I am worried about AI safety and rights',
    ],
  },
  {
    question: 'Which area do you care most about?',
    options: [
      'Health and care',
      'Money and finance',
      'Technology and apps',
      'Society and politics',
      'Work and careers',
    ],
  },
  {
    question: 'How would you describe your experience with AI so far?',
    options: [
      'Complete beginner — I have never really thought about it',
      'I use some apps like ChatGPT or Siri but do not know much about how they work',
      'I follow AI news and feel reasonably informed',
      'I work with AI tools in my job',
    ],
  },
  {
    question: 'Are you concerned about any of these?',
    options: [
      'Job losses because of AI',
      'Privacy and personal data',
      'Misinformation and deepfakes',
      'AI bias and discrimination',
      'AI\'s impact on the environment',
    ],
  },
  {
    question: 'What type of content do you prefer?',
    options: [
      'Real-world UK examples I can relate to',
      'Science and technology explained simply',
      'Ethical debates and big questions',
      'Practical how-to guides',
    ],
  },
]

function getRecommendations(answers: number[]): Recommendation[] {
  const [q0, q1, q2, q3] = answers

  const all: Recommendation[] = [
    // Job-related
    {
      title: 'AI and jobs',
      to: '/learn/ai-and-jobs',
      reason: 'Since you are thinking about how AI affects employment, this lesson explains which jobs are most at risk and how to adapt.',
    },
    {
      title: 'AI and the workplace',
      to: '/learn/ai-and-the-workplace',
      reason: 'This lesson covers how AI is changing everyday office work — from writing assistants to meeting summaries.',
    },
    // Health
    {
      title: 'AI in healthcare',
      to: '/learn/ai-in-healthcare',
      reason: 'This lesson explains how AI is being used in diagnosis, drug discovery, and NHS waiting lists.',
    },
    {
      title: 'AI and the NHS',
      to: '/learn/ai-and-the-nhs',
      reason: 'A focused look at how the NHS is using AI — and what it means for patients and staff.',
    },
    // Money
    {
      title: 'AI and personal finance',
      to: '/learn/ai-and-personal-finance',
      reason: 'This lesson covers robo-advisors, budgeting apps, and how AI is changing the way we manage money.',
    },
    {
      title: 'AI and banking',
      to: '/learn/ai-and-banking',
      reason: 'Covers fraud detection, open banking AI, and how banks use algorithms to make decisions about you.',
    },
    // Tech/apps
    {
      title: 'What is AI?',
      to: '/learn/what-is-ai',
      reason: 'The perfect starting point — a friendly explanation of what AI actually is and how it works.',
    },
    {
      title: 'AI in your apps',
      to: '/learn/ai-in-your-apps',
      reason: 'Explores the AI already built into the apps you use every day — from maps to music streaming.',
    },
    // Society
    {
      title: 'AI and policing',
      to: '/learn/ai-and-policing',
      reason: 'Covers facial recognition, predictive policing, and the debate about AI in law enforcement.',
    },
    {
      title: 'AI and elections',
      to: '/learn/ai-and-elections',
      reason: 'How AI is being used in political campaigns — and the risks it poses to democracy.',
    },
    // Privacy
    {
      title: 'AI and privacy',
      to: '/learn/ai-and-privacy',
      reason: 'Explains how AI systems collect and use personal data, and what your rights are.',
    },
    {
      title: 'AI laws and rights',
      to: '/learn/ai-laws-and-rights',
      reason: 'A guide to your rights when AI makes decisions that affect you — including how to challenge them.',
    },
    // Children
    {
      title: 'AI and children',
      to: '/learn/ai-and-children',
      reason: 'Covers how AI affects children online — from social media algorithms to AI tutors and age verification.',
    },
    {
      title: 'AI and education',
      to: '/learn/ai-and-education',
      reason: 'How AI is changing schools and learning — including ChatGPT in classrooms and AI tutoring tools.',
    },
    // Misinformation
    {
      title: 'AI and misinformation',
      to: '/learn/ai-and-misinformation',
      reason: 'How AI is being used to create and spread false information — and how to spot it.',
    },
    {
      title: 'Trusting AI',
      to: '/learn/trusting-ai',
      reason: 'A thoughtful exploration of when to trust AI outputs and when to question them.',
    },
    // Environment
    {
      title: 'AI and the environment',
      to: '/learn/ai-and-the-environment',
      reason: 'Covers the energy cost of AI and how it is being used to tackle environmental problems.',
    },
    {
      title: 'AI and climate change',
      to: '/learn/ai-and-climate-change',
      reason: 'How AI is being used to model climate, optimise energy use, and support the green transition.',
    },
    // Public sector
    {
      title: 'AI and local government',
      to: '/learn/ai-and-local-government',
      reason: 'Covers pothole detection, planning AI, social services prediction, and your rights as a citizen.',
    },
    {
      title: 'AI and smart cities',
      to: '/learn/ai-and-smart-cities',
      reason: 'How AI is being used to manage transport, energy, and public services in urban areas.',
    },
    // Beginners
    {
      title: 'How does AI training work?',
      to: '/learn/how-ai-training-works',
      reason: 'A clear, jargon-free explanation of how AI systems learn from data.',
    },
    // Bias
    {
      title: 'AI bias',
      to: '/learn/ai-bias',
      reason: 'Explains how AI systems can be unfair, why this happens, and what is being done about it.',
    },
  ]

  const selected: Recommendation[] = []

  // Q0: What brings you here
  if (q0 === 0) selected.push(all[0], all[1]) // jobs
  else if (q0 === 1) selected.push(all[6], all[7]) // daily life
  else if (q0 === 2) selected.push(all[12], all[13]) // children
  else if (q0 === 3) selected.push(all[18], all[19]) // public sector
  else if (q0 === 4) selected.push(all[10], all[11]) // rights

  // Q1: Which area
  if (q1 === 0 && !selected.find(r => r.to === '/learn/ai-in-healthcare')) selected.push(all[2])
  else if (q1 === 1 && !selected.find(r => r.to === '/learn/ai-and-personal-finance')) selected.push(all[4])
  else if (q1 === 2 && !selected.find(r => r.to === '/learn/what-is-ai')) selected.push(all[6])
  else if (q1 === 3 && !selected.find(r => r.to === '/learn/ai-and-policing')) selected.push(all[8])
  else if (q1 === 4 && !selected.find(r => r.to === '/learn/ai-and-jobs')) selected.push(all[0])

  // Q2: Experience level
  if (q2 === 0 && selected.length < 3) {
    const beginner = all[20] // How does AI training work
    if (!selected.find(r => r.to === beginner.to)) selected.push(beginner)
  }

  // Q3: Concerns
  if (q3 === 2) { // misinformation
    const m = all[14]
    if (!selected.find(r => r.to === m.to)) selected.push(m)
  } else if (q3 === 3) { // bias
    const b = all[21]
    if (!selected.find(r => r.to === b.to)) selected.push(b)
  } else if (q3 === 4) { // environment
    const e = all[16]
    if (!selected.find(r => r.to === e.to)) selected.push(e)
  }

  // Ensure we always have exactly 3 recommendations
  const defaults = [all[6], all[0], all[2]]
  let i = 0
  while (selected.length < 3 && i < defaults.length) {
    if (!selected.find(r => r.to === defaults[i].to)) {
      selected.push(defaults[i])
    }
    i++
  }

  return selected.slice(0, 3)
}

export function WhatNextQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [finished, setFinished] = useState(false)

  function handleSelect(idx: number) {
    const newAnswers = [...answers, idx]
    setAnswers(newAnswers)
    if (currentQuestion + 1 >= questions.length) {
      setFinished(true)
    } else {
      setCurrentQuestion(q => q + 1)
    }
  }

  function handleRestart() {
    setCurrentQuestion(0)
    setAnswers([])
    setFinished(false)
  }

  if (finished) {
    const recommendations = getRecommendations(answers)
    return (
      <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
        <div className="max-w-2xl w-full space-y-8">
          <div className="text-center space-y-3">
            <div className="text-6xl">&#x1F9ED;</div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Your personalised lessons</h1>
            <p className="text-gray-600 dark:text-gray-300">Based on your answers, here are three lessons that are a great fit for you.</p>
          </div>

          <div className="space-y-4">
            {recommendations.map((rec, i) => (
              <Link
                key={i}
                to={rec.to}
                className="block bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-violet-100 dark:border-violet-900 p-5 space-y-2 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">
                    {i === 0 ? '&#x1F947;' : i === 1 ? '&#x1F948;' : '&#x1F949;'}
                  </span>
                  <div className="space-y-1">
                    <p className="font-semibold text-gray-800 dark:text-gray-100">{rec.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{rec.reason}</p>
                    <p className="text-sm text-violet-600 dark:text-violet-400 font-medium">Start this lesson &rarr;</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleRestart}
              className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl py-3 font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Try again
            </button>
            <Link
              to="/"
              className="flex-1 bg-violet-600 text-white rounded-xl py-3 font-semibold hover:bg-violet-700 transition-colors text-center"
            >
              Browse all lessons
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const q = questions[currentQuestion]

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-6">

        <div className="text-center space-y-2">
          <div className="text-5xl">&#x1F9ED;</div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">What should I learn next?</h1>
          <p className="text-gray-600 dark:text-gray-300">Answer 5 quick questions and we will suggest the best lessons for you.</p>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round((currentQuestion / questions.length) * 100)}% done</span>
        </div>

        <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-violet-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-violet-100 dark:border-violet-900 p-6 space-y-5">
          <p className="text-gray-800 dark:text-gray-100 font-semibold text-lg leading-snug">{q.question}</p>

          <div className="space-y-3">
            {q.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className="w-full text-left rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 hover:bg-violet-50 dark:hover:bg-violet-900 hover:border-violet-300 dark:hover:border-violet-600 text-gray-800 dark:text-gray-100 p-4 text-sm leading-snug transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link to="/" className="text-sm text-gray-500 dark:text-gray-400 hover:underline">
            Skip — browse all lessons instead
          </Link>
        </div>
      </div>
    </div>
  )
}
