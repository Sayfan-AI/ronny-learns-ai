import { Link } from '@tanstack/react-router'

const steps = [
  {
    number: 1,
    title: 'Go to the repository settings',
    description:
      'Open the ronny-learns-ai repository on GitHub. At the top of the page, click the "Settings" tab. (If you do not see it, make sure you are signed in as the repo owner.)',
    tip: 'The URL will look like: github.com/Sayfan-AI/ronny-learns-ai/settings',
  },
  {
    number: 2,
    title: 'Open the Collaborators section',
    description:
      'In the left sidebar, under the "Access" heading, click "Collaborators". GitHub may ask you to confirm your password.',
    tip: null,
  },
  {
    number: 3,
    title: 'Click "Add people"',
    description:
      'You will see a green button that says "Add people". Click it. A search box will appear.',
    tip: null,
  },
  {
    number: 4,
    title: 'Search for Ronny by username or email',
    description:
      'Type in the GitHub username or email address that Ronny used when creating their account. GitHub will show matching accounts — select the correct one.',
    tip: "Make sure Ronny has already created their GitHub account before doing this step. If they have not, send them to the GitHub sign-up tutorial on this app first.",
  },
  {
    number: 5,
    title: 'Choose a role: select "Read"',
    description:
      'GitHub will ask what level of access to grant. Choose "Read" to start. This lets Ronny view everything in the repo — issues, code, comments — without being able to accidentally change anything.',
    tip: 'You can always upgrade their access later if needed.',
  },
  {
    number: 6,
    title: 'Click "Add collaborator"',
    description:
      'GitHub will send Ronny an invitation email. They need to accept it before they get access.',
    tip: null,
  },
]

export function InviteRonny() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center space-y-3">
          <Link to="/" className="text-blue-500 hover:underline text-sm">
            &larr; Back to home
          </Link>
          <div className="text-5xl">&#x1F4E9;</div>
          <h1 className="text-3xl font-bold text-gray-800">How to invite Ronny to GitHub</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            This guide is for Gigi. Once Ronny has a GitHub account, follow these steps to give them access to the project.
          </p>
        </div>

        {/* Why this matters */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 space-y-2">
          <h2 className="text-xl font-semibold text-indigo-800">Why invite Ronny?</h2>
          <p className="text-gray-700 leading-relaxed">
            Once Ronny is added as a collaborator, they can see all the GitHub issues, read the comments that the AI agents leave, and watch the project evolve in real time. It makes the whole experience feel real — not just a website, but a live project they are part of.
          </p>
        </div>

        {/* Prerequisites */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-3">
          <h2 className="text-xl font-semibold text-gray-700">Before you start</h2>
          <ul className="space-y-2 text-gray-600 text-base">
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-0.5">&#x2713;</span>
              <span>Ronny has created a GitHub account. (Use the <Link to="/tutorial/github-signup" className="text-blue-500 hover:underline">sign-up tutorial</Link> if needed.)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-0.5">&#x2713;</span>
              <span>You know Ronny's GitHub username or the email they signed up with.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold mt-0.5">&#x2713;</span>
              <span>You are signed in to GitHub as the repo owner (Gigi).</span>
            </li>
          </ul>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Step-by-step instructions</h2>
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl shadow-md p-6 space-y-3">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-lg flex-shrink-0">
                  {step.number}
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800 text-lg leading-snug">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  {step.tip && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2 text-amber-800 text-sm leading-relaxed">
                      <strong>Tip: </strong>{step.tip}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What happens next */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-3">
          <h2 className="text-xl font-semibold text-gray-700">What happens after Ronny accepts?</h2>
          <ul className="space-y-3 text-gray-600 text-base">
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 text-lg mt-0.5">&#x1F4CB;</span>
              <span>Ronny can see all the <strong>issues</strong> — the AI's task list and progress updates.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 text-lg mt-0.5">&#x1F4AC;</span>
              <span>They can <strong>leave comments</strong> on issues — their first real interaction with the AI system.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 text-lg mt-0.5">&#x1F4BE;</span>
              <span>They can browse the <strong>code and commits</strong> to see exactly what the AI built.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 text-lg mt-0.5">&#x1F440;</span>
              <span>They can <strong>watch the repo</strong> to get email notifications when new things happen.</span>
            </li>
          </ul>
          <p className="text-gray-500 text-sm">
            Note: With "Read" access, Ronny cannot push code or change settings. They are a viewer and commenter — which is the perfect starting point.
          </p>
        </div>

        {/* Find the project */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-semibold text-indigo-800">How Ronny finds the project</h2>
          <p className="text-gray-700 leading-relaxed">
            After accepting the invite, Ronny can go directly to:
          </p>
          <a
            href="https://github.com/Sayfan-AI/ronny-learns-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-sm bg-white border border-indigo-200 rounded-lg px-4 py-2 text-indigo-700 hover:bg-indigo-50 transition-colors"
          >
            github.com/Sayfan-AI/ronny-learns-ai
          </a>
          <p className="text-gray-700 leading-relaxed">
            Or they can go to GitHub, click their profile icon, choose "Your repositories", and look for ronny-learns-ai under "Repositories you contribute to."
          </p>
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
