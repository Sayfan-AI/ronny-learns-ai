import { useState } from 'react'
import { Link } from '@tanstack/react-router'

interface Question {
  id: string
  text: string
  options: { label: string; value: string }[]
}

const QUESTIONS: Question[] = [
  {
    id: 'reason',
    text: 'What brings you here?',
    options: [
      { label: 'I want to understand how AI affects my job', value: 'job' },
      { label: "I'm curious about AI in daily life", value: 'daily' },
      { label: 'I want to help my children understand AI', value: 'children' },
      { label: 'I work in a public sector or healthcare role', value: 'public' },
      { label: "I'm worried about AI safety and rights", value: 'rights' },
    ],
  },
  {
    id: 'area',
    text: 'Which area do you care most about?',
    options: [
      { label: 'Health and care', value: 'health' },
      { label: 'Money and finance', value: 'money' },
      { label: 'Technology and apps', value: 'tech' },
      { label: 'Society and politics', value: 'society' },
      { label: 'Work and careers', value: 'work' },
    ],
  },
  {
    id: 'experience',
    text: 'How would you describe your experience with AI so far?',
    options: [
      { label: 'Complete beginner — I barely know what AI is', value: 'beginner' },
      { label: 'I use some apps that probably use AI', value: 'casual' },
      { label: 'I follow AI news and understand the basics', value: 'informed' },
      { label: 'I work with AI tools regularly', value: 'experienced' },
    ],
  },
  {
    id: 'concern',
    text: 'Are you concerned about any of these?',
    options: [
      { label: 'Job losses from automation', value: 'jobs' },
      { label: 'Privacy and surveillance', value: 'privacy' },
      { label: 'Misinformation and deepfakes', value: 'misinfo' },
      { label: 'AI bias and unfair decisions', value: 'bias' },
      { label: 'Climate and energy impact', value: 'climate' },
    ],
  },
  {
    id: 'style',
    text: 'What type of content do you prefer?',
    options: [
      { label: 'Real-world UK examples', value: 'uk' },
      { label: 'Science and how things work', value: 'science' },
      { label: 'Ethical debates and rights', value: 'ethics' },
      { label: 'Practical how-to guides', value: 'practical' },
    ],
  },
]

interface Recommendation {
  title: string
  to: string
  reason: string
}

function getRecommendations(answers: Record<string, string>): Recommendation[] {
  const recs: Recommendation[] = []

  const reason = answers.reason
  const area = answers.area
  const concern = answers.concern

  // Health focus
  if (area === 'health' || reason === 'public') {
    recs.push({
      title: 'AI and the NHS',
      to: '/learn/ai-and-the-nhs',
      reason: 'Since you care about health, this lesson on how AI is transforming NHS diagnosis, waiting lists, and care is a great place to start.',
    })
  }

  // Work/job focus
  if (reason === 'job' || area === 'work' || concern === 'jobs') {
    recs.push({
      title: 'AI and the workplace',
      to: '/learn/ai-and-the-workplace',
      reason: 'Since you are thinking about AI and your career, this lesson covers what AI means for jobs, hiring, and working life.',
    })
  }

  // Money/finance
  if (area === 'money') {
    recs.push({
      title: 'AI and personal finance',
      to: '/learn/ai-and-personal-finance',
      reason: 'Since money and finance is your focus, this lesson covers AI in banking, budgeting apps, and financial advice.',
    })
  }

  // Children/education
  if (reason === 'children') {
    recs.push({
      title: 'AI and critical thinking',
      to: '/learn/ai-and-critical-thinking',
      reason: 'Since you want to help young people understand AI, this lesson on ChatGPT in schools and critical thinking is essential reading.',
    })
    recs.push({
      title: 'AI and children',
      to: '/learn/ai-and-children',
      reason: 'This lesson covers how AI affects children — in education, social media, and safety.',
    })
  }

  // Privacy/rights concern
  if (concern === 'privacy' || reason === 'rights') {
    recs.push({
      title: 'AI and the law',
      to: '/learn/ai-and-the-law',
      reason: 'Since privacy and rights concern you, this lesson explains your legal rights in an AI-powered world.',
    })
  }

  // Misinformation
  if (concern === 'misinfo') {
    recs.push({
      title: 'AI and elections',
      to: '/learn/ai-and-elections',
      reason: 'Since you are concerned about misinformation, this lesson on AI deepfakes and election influence is highly relevant.',
    })
  }

  // Bias
  if (concern === 'bias') {
    recs.push({
      title: 'AI and prisons and criminal justice',
      to: '/learn/ai-and-prisons-and-criminal-justice',
      reason: 'Since AI bias concerns you, this lesson on algorithmic risk assessments in the criminal justice system is a powerful real-world example.',
    })
    recs.push({
      title: 'AI and hiring',
      to: '/learn/ai-and-hiring',
      reason: 'AI bias in hiring affects millions — this lesson explains how automated recruitment tools work and how to challenge unfair decisions.',
    })
  }

  // Climate
  if (concern === 'climate') {
    recs.push({
      title: 'AI and climate change',
      to: '/learn/ai-and-climate-change',
      reason: 'Since climate matters to you, this lesson covers both how AI can help tackle climate change and its own growing energy footprint.',
    })
  }

  // Technology/beginner
  if (answers.experience === 'beginner' || area === 'tech') {
    recs.push({
      title: 'What is AI?',
      to: '/learn/what-is-ai',
      reason: 'This is the perfect starting point — a clear, plain-language explanation of what AI actually is and how it works.',
    })
  }

  // Society
  if (area === 'society') {
    recs.push({
      title: 'AI and democracy',
      to: '/learn/ai-and-democracy',
      reason: 'Since society and politics interest you, this lesson on how AI is reshaping democratic debate is essential.',
    })
  }

  // Deduplicate and return top 3
  const seen = new Set<string>()
  const unique: Recommendation[] = []
  for (const rec of recs) {
    if (!seen.has(rec.to) && unique.length < 3) {
      seen.add(rec.to)
      unique.push(rec)
    }
  }

  // If we have fewer than 3, add defaults
  const defaults: Recommendation[] = [
    { title: 'What is AI?', to: '/learn/what-is-ai', reason: 'The best place to start — a clear explanation of what AI is and how it affects everyday life.' },
    { title: 'AI in everyday life', to: '/learn/ai-everyday-life', reason: 'Discover how AI is already part of your daily routines without you realising it.' },
    { title: 'AI and the NHS', to: '/learn/ai-and-the-nhs', reason: 'One of the most impactful places AI is being used right now — in healthcare and medical diagnosis.' },
  ]
  for (const d of defaults) {
    if (unique.length >= 3) break
    if (!seen.has(d.to)) {
      seen.add(d.to)
      unique.push(d)
    }
  }

  return unique.slice(0, 3)
}

export function WhatNextQuiz() {
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [done, setDone] = useState(false)

  function handleAnswer(value: string) {
    const newAnswers = { ...answers, [QUESTIONS[currentQ].id]: value }
    setAnswers(newAnswers)
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      setDone(true)
    }
  }

  const recommendations = done ? getRecommendations(answers) : []

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">What should I learn next?</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">Answer 5 quick questions to get personalised lesson recommendations.</p>

      {!done ? (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">Question {currentQ + 1} of {QUESTIONS.length}</span>
              <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
                <div
                  className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQ + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{QUESTIONS[currentQ].text}</h2>
          </div>

          <div className="space-y-3">
            {QUESTIONS[currentQ].options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleAnswer(opt.value)}
                className="w-full text-left px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 text-gray-800 dark:text-gray-200 text-sm font-medium transition-colors"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-2xl p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">Your personalised recommendations</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Based on your answers, here are the three lessons that will be most useful for you right now.</p>
          </div>

          <div className="space-y-4">
            {recommendations.map((rec, i) => (
              <div key={rec.to} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{rec.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{rec.reason}</p>
                  <Link
                    to={rec.to}
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Start this lesson &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            <button
              onClick={() => { setCurrentQ(0); setAnswers({}); setDone(false) }}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Start again
            </button>
            <Link
              to="/"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Back to home
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
