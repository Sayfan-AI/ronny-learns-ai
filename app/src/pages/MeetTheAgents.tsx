import { Link } from '@tanstack/react-router'

const AGENTS = [
  {
    name: 'The Orchestrator',
    icon: '🧭',
    analogy: 'Like a project manager',
    description:
      'The Orchestrator is the brain of the operation. It wakes up on a schedule — or when something happens in the project — and asks: "What needs to be done? What is blocked? What should we work on next?" It never writes code itself. Its job is to make sure the right work gets done in the right order.',
    realWorld:
      'When you see a new GitHub issue appear for this project, it is usually the Orchestrator that created it after deciding what the next step should be.',
  },
  {
    name: 'The Worker',
    icon: '🔨',
    analogy: 'Like a developer',
    description:
      'Workers are the ones who actually build things. They receive a task (a GitHub issue with a clear description), write the code, create the page, or make the change — and then commit it to GitHub. They are focused, fast, and independent. There can be many workers running at the same time on different tasks.',
    realWorld:
      'Every page you have read on this site was written by a Worker agent. The code for this very page came from a Worker.',
  },
  {
    name: 'The Human Interaction Agent',
    icon: '📣',
    analogy: 'Like a communications manager',
    description:
      'This agent is responsible for all communication with humans. When the system needs to report progress, ask for help, or flag something that needs a human decision, this agent writes the message and posts it to GitHub. It speaks in plain language — no technical jargon.',
    realWorld:
      'When Gigi received an update that "Milestone 3 is complete", that message was written and posted by the Human Interaction agent.',
  },
  {
    name: 'The Evolver',
    icon: '🌱',
    analogy: 'Like a continuous improvement consultant',
    description:
      'The Evolver looks at how the system itself is working and suggests improvements. Maybe there is a better way to structure the code, or a new tool the agents should use, or a strategy that would speed things up. It improves the builders, not just the product.',
    realWorld:
      'If you ever notice the agents getting smarter or the project improving in how it is organised, there is a good chance the Evolver had something to do with it.',
  },
  {
    name: 'The Health Monitor',
    icon: '❤️',
    analogy: 'Like a watchdog',
    description:
      'The Health Monitor watches for things going wrong. If a task has been "in progress" for too long without finishing, if the same mistake keeps happening, or if the system seems to be going in circles — this agent raises the alarm. It catches problems before they become serious.',
    realWorld:
      'If the genesis system ever posts a message saying "something seems stuck and we need your help", that is the Health Monitor at work.',
  },
]

const LOOP_STEPS = [
  {
    icon: '⏰',
    label: 'Trigger',
    desc: 'Something happens — a scheduled check, a new GitHub comment, or a completed task. This wakes the system up.',
  },
  {
    icon: '🧭',
    label: 'Orchestrator assesses',
    desc: 'The Orchestrator reads the current state: what is done, what is open, what is blocked? It decides what to do next.',
  },
  {
    icon: '🔨',
    label: 'Worker builds',
    desc: 'A Worker picks up the task, does the work, and pushes the result to GitHub.',
  },
  {
    icon: '✅',
    label: 'Pipeline checks',
    desc: 'The CI/CD pipeline automatically checks the work. If it passes, the change goes live.',
  },
  {
    icon: '📣',
    label: 'Human notified',
    desc: 'If needed, the Human Interaction agent tells Gigi (or you!) what happened.',
  },
  {
    icon: '🔁',
    label: 'Repeat',
    desc: 'The loop runs again — and again — continuously improving the project.',
  },
]

export function MeetTheAgents() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="text-blue-500 hover:underline text-sm">
            &larr; Back to home
          </Link>
          <div className="text-5xl">🤝</div>
          <h1 className="text-3xl font-bold text-gray-800">Meet the AI Agents</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            This app was not built by one AI. It was built by a <em>team</em> of AI agents, each with a specific job.
            Here is who they are — and what they do.
          </p>
        </div>

        {/* The team */}
        <div className="space-y-4">
          {AGENTS.map((agent) => (
            <div key={agent.name} className="bg-white rounded-2xl shadow-md p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{agent.icon}</span>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{agent.name}</h2>
                  <p className="text-sm text-violet-600 font-medium">{agent.analogy}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{agent.description}</p>
              <div className="bg-violet-50 rounded-xl p-3">
                <p className="text-violet-800 text-sm leading-relaxed">
                  <strong>In this project:</strong> {agent.realWorld}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* The loop */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-5">
          <h2 className="text-xl font-semibold text-gray-700">How the loop works</h2>
          <p className="text-gray-600 leading-relaxed">
            The agents do not just run once. They run in a continuous loop &mdash; triggered by events and schedules. Here is how one cycle looks:
          </p>
          <div className="space-y-3">
            {LOOP_STEPS.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-violet-100 text-violet-700 font-bold flex items-center justify-center text-xl">
                    {step.icon}
                  </div>
                  {i < LOOP_STEPS.length - 1 && (
                    <div className="w-0.5 h-6 bg-violet-200 mt-1" />
                  )}
                </div>
                <div className="pt-1.5">
                  <h3 className="font-semibold text-gray-800 text-sm">{step.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* You are part of it */}
        <div className="bg-violet-600 rounded-2xl p-6 space-y-4 text-white">
          <h2 className="text-xl font-semibold">You are now part of this team</h2>
          <p className="leading-relaxed text-violet-100">
            By reading this, you understand the system that built this app. That is more than most people will ever know. And it means you can participate &mdash; leave a comment on a GitHub issue, request a new page, or just share what you found confusing.
          </p>
          <p className="leading-relaxed text-violet-100">
            The agents are listening. The loop is always running. Your voice can shape what gets built next.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/learn/how-to-give-feedback"
              className="px-5 py-2.5 bg-white text-violet-700 font-semibold rounded-xl hover:bg-violet-50 transition-colors text-sm"
            >
              How to give feedback &rarr;
            </Link>
            <Link
              to="/explore/live-activity"
              className="px-5 py-2.5 bg-violet-500 text-white font-semibold rounded-xl hover:bg-violet-400 transition-colors text-sm"
            >
              See the agents at work &rarr;
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-2">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
          >
            &larr; Home
          </Link>
        </div>

      </div>
    </div>
  )
}
