import { Link } from '@tanstack/react-router'

const actions = [
  {
    step: 1,
    emoji: '&#x1F4DD;',
    title: 'Create your GitHub account',
    description:
      'If you have not done this yet, start here. It is free and takes about 5 minutes. We will walk you through every step.',
    linkTo: '/tutorial/github-signup',
    linkLabel: 'Go to the sign-up tutorial',
    done: false,
  },
  {
    step: 2,
    emoji: '&#x1F91D;',
    title: 'Join the project repository',
    description:
      'Ask Gigi to invite you to the ronny-learns-ai project on GitHub. Once she adds you, you will get an email with a link to accept. After accepting, you will be able to see everything — all the tasks, all the code, all the AI\'s work.',
    linkTo: null,
    linkLabel: null,
    done: false,
  },
  {
    step: 3,
    emoji: '&#x1F4AC;',
    title: 'Leave a comment on a real GitHub issue',
    description:
      'Once you are in, find any open issue and leave a comment — even just "Hello!" or "I am following along." This is your first real interaction with the AI system. The AI will see it.',
    linkTo: 'https://github.com/Sayfan-AI/ronny-learns-ai/issues',
    linkLabel: 'See the open issues on GitHub',
    external: true,
    done: false,
  },
  {
    step: 4,
    emoji: '&#x2728;',
    title: 'Request something new',
    description:
      'Open a new issue on GitHub and describe something you would like to see added to this app. The AI agents will read it, plan it, and build it — for you. That is what this whole system is for.',
    linkTo: 'https://github.com/Sayfan-AI/ronny-learns-ai/issues/new',
    linkLabel: 'Open a new issue on GitHub',
    external: true,
    done: false,
  },
]

export function NextSteps() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center space-y-3">
          <Link to="/" className="text-blue-500 hover:underline text-sm">
            &larr; Back to home
          </Link>
          <div className="text-5xl">&#x1F680;</div>
          <h1 className="text-3xl font-bold text-gray-800">You made it — here is what is next</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            You have learned about AI, GitHub, APIs, and the Genesis system. Now it is time to go from
            learning to doing. Here is your personal invitation to get involved.
          </p>
        </div>

        {/* Personal message */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-semibold text-emerald-800">You are not just a reader — you are part of this</h2>
          <p className="text-gray-700 leading-relaxed">
            This app was built by AI agents, guided by Gigi, specifically for you. Every page you have read,
            every quiz you have taken — it was all designed to help you understand the system that built it.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The next step is to stop watching and start participating. You can do that right now.
          </p>
        </div>

        {/* Action steps */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Your next four steps</h2>

          {actions.map((action) => (
            <div key={action.step} className="bg-white rounded-2xl shadow-md p-6 space-y-3">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-lg flex-shrink-0">
                  {action.step}
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl" dangerouslySetInnerHTML={{ __html: action.emoji }} />
                    <h3 className="font-semibold text-gray-800 text-lg leading-snug">{action.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{action.description}</p>
                  {action.linkTo && !action.external && (
                    <Link
                      to={action.linkTo}
                      className="inline-block text-emerald-700 hover:text-emerald-900 font-medium underline text-base"
                    >
                      {action.linkLabel} &rarr;
                    </Link>
                  )}
                  {action.linkTo && action.external && (
                    <a
                      href={action.linkTo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-emerald-700 hover:text-emerald-900 font-medium underline text-base"
                    >
                      {action.linkLabel} &rarr;
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note for Gigi */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 space-y-2">
          <p className="text-amber-800 text-sm font-semibold">Note for Gigi</p>
          <p className="text-amber-700 text-sm leading-relaxed">
            To invite Ronny to the GitHub repository (Step 2), follow the guide on this app.
            It walks through the exact steps to add a collaborator on GitHub.
          </p>
          <Link
            to="/invite-ronny"
            className="inline-block text-amber-800 hover:text-amber-900 font-medium underline text-sm"
          >
            See the invitation guide &rarr;
          </Link>
        </div>

        {/* Closing message */}
        <div className="text-center space-y-4 py-4">
          <p className="text-gray-500 text-lg leading-relaxed">
            This is just the beginning. The system is running, Gigi is watching, and the AI is ready.
            All it needs now is you.
          </p>
          <Link
            to="/"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold px-8 py-4 rounded-2xl shadow-md transition-colors duration-200"
          >
            Back to your learning journey
          </Link>
        </div>

      </div>
    </div>
  )
}
