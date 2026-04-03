import { useState } from 'react'
import { Link } from '@tanstack/react-router'

const questions = [
  {
    question: 'What starts an agent running?',
    options: [
      'Gigi manually presses a button',
      'A trigger — like a timer or a GitHub event',
      'Ronny visits this website',
      'The code writes itself',
    ],
    correct: 1,
    explanation: 'Agents are triggered automatically — either on a schedule (every 10 minutes) or when something happens on GitHub, like an issue being labeled or closed.',
  },
  {
    question: 'What does the orchestrator agent do?',
    options: [
      'It writes all the code for new features',
      'It manages communication with Gigi',
      'It decides what needs to be done and sends workers to do it',
      'It deploys the website',
    ],
    correct: 2,
    explanation: 'The orchestrator is the project manager. It looks at open issues, decides what to work on, and dispatches worker agents to execute tasks.',
  },
  {
    question: 'How does code written by an agent end up on the website?',
    options: [
      'It gets emailed to Gigi for review',
      'It is saved directly to the website server',
      'The agent commits the code to GitHub, which triggers an automatic deployment',
      'A human developer copies it over manually',
    ],
    correct: 2,
    explanation: 'When an agent commits code to GitHub, an automated workflow (GitHub Actions) detects the change, builds the app, and deploys it to the website — no human needed.',
  },
]

export function HowAgentsWork() {
  const [answers, setAnswers] = useState<(number | null)[]>(questions.map(() => null))
  const [submitted, setSubmitted] = useState(false)

  function selectAnswer(qi: number, ai: number) {
    if (submitted) return
    setAnswers((prev) => prev.map((v, i) => (i === qi ? ai : v)))
  }

  const score = answers.filter((a, i) => a === questions[i].correct).length

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="text-blue-500 hover:underline text-sm">
            &larr; Back to home
          </Link>
          <div className="text-5xl pt-2">🤖</div>
          <h1 className="text-3xl font-bold text-gray-800">How the agents work</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Behind every page you have read is a loop of AI agents working quietly in the background.
            Here is how that loop actually works.
          </p>
        </div>

        {/* The loop overview */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">The genesis dev loop</h2>
          <p className="text-gray-600 leading-relaxed">
            The whole system runs in a continuous loop. It starts with a <strong>trigger</strong>,
            and ends with a change on this website — then it starts again.
          </p>

          {/* Visual loop diagram */}
          <div className="space-y-2 pt-2">
            {[
              { icon: '⏰', label: 'Trigger', desc: 'Every 10 minutes (or when a GitHub event fires), the loop starts.' },
              { icon: '🗺️', label: 'Orchestrator runs', desc: 'The orchestrator reads all open issues, picks what to work on next, and decides which agent to send.' },
              { icon: '👷', label: 'Worker executes', desc: 'A worker agent gets detailed instructions. It writes code, creates files, runs checks, and commits the result to GitHub.' },
              { icon: '✅', label: 'Issue closed', desc: 'When the task is done, the worker closes the issue. This triggers a new event — starting the loop again.' },
              { icon: '🌐', label: 'App updates', desc: 'An automated deployment workflow detects the new commit and rebuilds the website. Your browser sees the new version.' },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-xl">
                    {step.icon}
                  </div>
                  {i < 4 && <div className="w-0.5 h-4 bg-violet-200 mt-1" />}
                </div>
                <div className="pb-2">
                  <p className="font-semibold text-gray-800">{step.label}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Triggers explained */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-3">
          <h2 className="text-xl font-semibold text-gray-700">What is a trigger?</h2>
          <p className="text-gray-600 leading-relaxed">
            A <strong>trigger</strong> is what wakes up an agent. Without a trigger, agents are sleeping —
            they do nothing. With a trigger, they spring into action.
          </p>
          <div className="space-y-3 pt-1">
            <div className="flex gap-3 items-start">
              <span className="text-2xl">⏰</span>
              <div>
                <p className="font-semibold text-gray-700">Scheduled (cron)</p>
                <p className="text-gray-500 text-sm">Like an alarm clock. The orchestrator runs every 10 minutes to check if there is anything to do.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-2xl">📣</span>
              <div>
                <p className="font-semibold text-gray-700">GitHub events</p>
                <p className="text-gray-500 text-sm">When something happens on GitHub — an issue is opened, a label is added, a PR is merged — it can immediately trigger an agent to respond.</p>
              </div>
            </div>
          </div>
        </div>

        {/* The agents */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Who does what?</h2>
          <div className="space-y-3">
            {[
              { icon: '🗺️', name: 'Orchestrator', desc: 'The project manager. Reads all open issues, prioritizes them, and dispatches workers. This runs at the start of every loop.' },
              { icon: '👷', name: 'Workers', desc: 'The builders. Each worker gets a specific task (like "build this page") with clear instructions and done criteria.' },
              { icon: '💬', name: 'Human Interaction', desc: "The communicator. When the system needs Gigi's help (a permission, a decision), this agent opens a GitHub issue to ask." },
              { icon: '🔍', name: 'Health Monitor', desc: 'The watchdog. Checks if the system is stuck in a loop or not making progress, and escalates if needed.' },
              { icon: '🔧', name: 'Evolver', desc: 'The improver. Suggests improvements to the agents themselves and the tools they use.' },
            ].map((agent, i) => (
              <div key={i} className="flex gap-3 items-start border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                <span className="text-2xl flex-shrink-0">{agent.icon}</span>
                <div>
                  <p className="font-semibold text-gray-800">{agent.name}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{agent.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* See it live */}
        <div className="bg-violet-50 border border-violet-200 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold text-violet-800">See it in real life</h2>
          <p className="text-gray-700 leading-relaxed">
            Everything described above happened to build this very page. You can see it all on GitHub.
          </p>
          <div className="space-y-2">
            <a
              href="https://github.com/Sayfan-AI/ronny-learns-ai/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-violet-700 hover:text-violet-900 font-medium"
            >
              <span>📋</span> Browse all the issues &rarr;
            </a>
            <a
              href="https://github.com/Sayfan-AI/ronny-learns-ai/actions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-violet-700 hover:text-violet-900 font-medium"
            >
              <span>⚡</span> Watch the CI/CD runs (agent executions) &rarr;
            </a>
            <a
              href="https://github.com/Sayfan-AI/ronny-learns-ai/commits/main"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-violet-700 hover:text-violet-900 font-medium"
            >
              <span>💾</span> See all commits (code the agents wrote) &rarr;
            </a>
          </div>
        </div>

        {/* Quiz */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
          <h2 className="text-xl font-semibold text-gray-700">Quick check — do you have it?</h2>
          <p className="text-gray-500 text-sm">3 questions. Pick the best answer for each.</p>

          {questions.map((q, qi) => (
            <div key={qi} className="space-y-3">
              <p className="font-medium text-gray-800">{qi + 1}. {q.question}</p>
              <div className="space-y-2">
                {q.options.map((option, ai) => {
                  const selected = answers[qi] === ai
                  const isCorrect = ai === q.correct
                  let classes = 'w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-colors '
                  if (!submitted) {
                    classes += selected
                      ? 'bg-indigo-50 border-indigo-400 text-indigo-800'
                      : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50'
                  } else if (isCorrect) {
                    classes += 'bg-green-50 border-green-400 text-green-800'
                  } else if (selected && !isCorrect) {
                    classes += 'bg-red-50 border-red-300 text-red-700'
                  } else {
                    classes += 'bg-gray-50 border-gray-200 text-gray-500'
                  }
                  return (
                    <button key={ai} className={classes} onClick={() => selectAnswer(qi, ai)}>
                      {option}
                    </button>
                  )
                })}
              </div>
              {submitted && (
                <p className="text-sm text-gray-600 bg-gray-50 rounded-lg px-4 py-2 border border-gray-100">
                  {q.explanation}
                </p>
              )}
            </div>
          ))}

          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              disabled={answers.includes(null)}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold transition-colors"
            >
              {answers.includes(null) ? 'Answer all questions to submit' : 'Submit answers'}
            </button>
          ) : (
            <div className={`text-center p-4 rounded-xl font-semibold text-lg ${
              score === questions.length
                ? 'bg-green-50 text-green-700 border border-green-200'
                : score >= 2
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'bg-amber-50 text-amber-700 border border-amber-200'
            }`}>
              {score === questions.length
                ? `Perfect! ${score}/${questions.length} — you understand the genesis loop!`
                : score >= 2
                  ? `Good job! ${score}/${questions.length} — almost there. Review the explanations above.`
                  : `${score}/${questions.length} — read through the page again and try to find the answers.`}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-2">
          <Link
            to="/explore/live-activity"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
          >
            &larr; Live Activity
          </Link>
          <Link
            to="/explore/your-journey"
            className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-colors"
          >
            Your journey summary &rarr;
          </Link>
        </div>

      </div>
    </div>
  )
}
