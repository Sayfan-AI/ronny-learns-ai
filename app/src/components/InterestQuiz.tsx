import { useState } from 'react'
import { Link } from '@tanstack/react-router'

const STORAGE_KEY = 'ronny-interest-quiz-done'

type TopicOption = 'everyday' | 'work' | 'health' | 'technology' | 'society'
type ComfortOption = 'beginner' | 'getting-there' | 'comfortable' | 'confident'
type GoalOption = 'general' | 'practical' | 'career' | 'curious'

interface Recommendation {
  id: string
  title: string
  icon: string
  to: string
}

function getRecommendations(
  topic: TopicOption,
  comfort: ComfortOption,
  goal: GoalOption,
): Recommendation[] {
  // Map combinations to recommended lessons
  if (topic === 'health') {
    return [
      { id: 'ai-in-healthcare', title: 'AI in healthcare', icon: '&#x1FA7A;', to: '/learn/ai-in-healthcare' },
    ]
  }
  if (topic === 'work' || goal === 'career') {
    return [
      { id: 'ai-productivity-tools', title: 'AI productivity tools', icon: '&#x26A1;', to: '/learn/ai-productivity-tools' },
    ]
  }
  if (topic === 'society') {
    return [
      { id: 'ai-bias', title: 'AI bias', icon: '&#x2696;&#xFE0F;', to: '/learn/ai-bias' },
    ]
  }
  if (topic === 'technology' && (comfort === 'comfortable' || comfort === 'confident')) {
    return [
      { id: 'how-ai-training-works', title: 'How AI training works', icon: '&#x1F916;', to: '/learn/how-ai-training-works' },
      { id: 'language-models', title: 'Language models', icon: '&#x1F4AC;', to: '/learn/language-models' },
      { id: 'ai-safety', title: 'AI safety', icon: '&#x1F6E1;&#xFE0F;', to: '/learn/ai-safety' },
    ]
  }
  if (goal === 'practical') {
    return [
      { id: 'how-to-use-ai-safely', title: 'How to use AI safely', icon: '&#x1F512;', to: '/learn/how-to-use-ai-safely' },
      { id: 'ai-productivity-tools', title: 'AI productivity tools', icon: '&#x26A1;', to: '/learn/ai-productivity-tools' },
    ]
  }
  // Default: everyday life / general / beginner
  return [
    { id: 'what-is-ai', title: 'What is AI?', icon: '&#x1F916;', to: '/learn/what-is-ai' },
    { id: 'ai-everyday-life', title: 'AI in everyday life', icon: '&#x1F3E0;', to: '/learn/ai-everyday-life' },
  ]
}

export function InterestQuiz() {
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0)
  const [topic, setTopic] = useState<TopicOption | null>(null)
  const [comfort, setComfort] = useState<ComfortOption | null>(null)
  const [goal, setGoal] = useState<GoalOption | null>(null)

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, 'done')
    // Force re-render by reloading — simpler than lifting state
    window.location.reload()
  }

  function handleTopic(t: TopicOption) {
    setTopic(t)
    setStep(1)
  }

  function handleComfort(c: ComfortOption) {
    setComfort(c)
    setStep(2)
  }

  function handleGoal(g: GoalOption) {
    setGoal(g)
    setStep(3)
    localStorage.setItem(STORAGE_KEY, 'done')
  }

  const recommendations =
    step === 3 && topic && comfort && goal
      ? getRecommendations(topic, comfort, goal)
      : []

  return (
    <div className="bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-950 dark:to-violet-950 rounded-2xl border border-blue-200 dark:border-blue-800 p-6 space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">
            {step === 0 && 'What would you like to learn about?'}
            {step === 1 && 'How comfortable are you with technology?'}
            {step === 2 && 'What do you most want from this?'}
            {step === 3 && 'Here are some lessons to start with'}
          </h2>
          {step < 3 && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              Question {(step as number) + 1} of 3 — we'll suggest lessons that fit you best
            </p>
          )}
        </div>
        {step < 3 && (
          <button
            onClick={dismiss}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-sm flex-shrink-0 underline underline-offset-2"
            aria-label="Skip interest quiz"
          >
            Skip
          </button>
        )}
      </div>

      {step === 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {(
            [
              { value: 'everyday', label: 'Everyday life', icon: '&#x1F3E0;' },
              { value: 'work', label: 'Work and money', icon: '&#x1F4BC;' },
              { value: 'health', label: 'Health and wellbeing', icon: '&#x1FA7A;' },
              { value: 'technology', label: 'Technology and the future', icon: '&#x1F916;' },
              { value: 'society', label: 'Society and rights', icon: '&#x2696;&#xFE0F;' },
            ] as { value: TopicOption; label: string; icon: string }[]
          ).map(({ value, label, icon }) => (
            <button
              key={value}
              onClick={() => handleTopic(value)}
              className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors text-left"
            >
              <span className="text-2xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: icon }} />
              <span className="font-medium text-gray-800 dark:text-gray-100 text-sm">{label}</span>
            </button>
          ))}
        </div>
      )}

      {step === 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {(
            [
              { value: 'beginner', label: 'Complete beginner', icon: '&#x1F331;' },
              { value: 'getting-there', label: 'Getting there', icon: '&#x1F4AA;' },
              { value: 'comfortable', label: 'Pretty comfortable', icon: '&#x1F44D;' },
              { value: 'confident', label: 'Very confident', icon: '&#x1F680;' },
            ] as { value: ComfortOption; label: string; icon: string }[]
          ).map(({ value, label, icon }) => (
            <button
              key={value}
              onClick={() => handleComfort(value)}
              className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors text-left"
            >
              <span className="text-2xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: icon }} />
              <span className="font-medium text-gray-800 dark:text-gray-100 text-sm">{label}</span>
            </button>
          ))}
        </div>
      )}

      {step === 2 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {(
            [
              { value: 'general', label: 'General knowledge', icon: '&#x1F4D6;' },
              { value: 'practical', label: 'Practical tips', icon: '&#x1F527;' },
              { value: 'career', label: 'Career and work', icon: '&#x1F4C8;' },
              { value: 'curious', label: 'Just curious', icon: '&#x2728;' },
            ] as { value: GoalOption; label: string; icon: string }[]
          ).map(({ value, label, icon }) => (
            <button
              key={value}
              onClick={() => handleGoal(value)}
              className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors text-left"
            >
              <span className="text-2xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: icon }} />
              <span className="font-medium text-gray-800 dark:text-gray-100 text-sm">{label}</span>
            </button>
          ))}
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Based on your answers, these lessons are a great place to start. You can always explore
            the full list below.
          </p>
          <div className="space-y-2">
            {recommendations.map((rec) => (
              <Link
                key={rec.id}
                to={rec.to}
                className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
              >
                <span className="text-2xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: rec.icon }} />
                <span className="font-medium text-gray-800 dark:text-gray-100 text-sm flex-1">{rec.title}</span>
                <span className="text-blue-400 dark:text-blue-300 text-base flex-shrink-0">&rarr;</span>
              </Link>
            ))}
          </div>
          <button
            onClick={dismiss}
            className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 underline underline-offset-2"
          >
            Dismiss this panel
          </button>
        </div>
      )}
    </div>
  )
}
