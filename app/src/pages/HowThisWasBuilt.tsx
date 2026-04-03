import { Link } from '@tanstack/react-router'

export function HowThisWasBuilt() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3D7;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            How this app was built
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The app you are reading right now was not written by a human programmer.
            It was built by an AI system — automatically. Here is the full story.
          </p>
        </div>

        {/* The meta-lesson callout */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 space-y-2">
          <p className="text-indigo-800 font-semibold text-lg">
            You are reading a page that was written by the same AI that is the subject of the page.
          </p>
          <p className="text-indigo-700 leading-relaxed">
            That is not a trick — it is exactly what makes this project interesting.
            AI can now help build real software, including the tools used to teach people about AI.
          </p>
        </div>

        {/* The story arc */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4D6;</span>
            <h2 className="text-2xl font-semibold text-gray-700">The story, step by step</h2>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">Gigi described a goal</h3>
                <p className="text-gray-600 leading-relaxed">
                  It started with a simple idea: build a friendly website to help Ronny
                  (that is you!) learn about GitHub, AI, and how this project works.
                  Gigi wrote that goal down and handed it to the AI system.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">The AI planned the milestones</h3>
                <p className="text-gray-600 leading-relaxed">
                  An AI agent called the Orchestrator broke the goal down into milestones.
                  Milestone 1: build a working website with a GitHub sign-up guide.
                  Milestone 2: add educational pages. Milestone 3: add quizzes.
                  And so on. Each milestone was tracked as a GitHub issue.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">Worker agents wrote the code</h3>
                <p className="text-gray-600 leading-relaxed">
                  For each task, the Orchestrator dispatched a Worker agent. The Worker
                  read the task description (from a GitHub Issue), wrote the code, verified
                  it built correctly, and committed it to GitHub. No human typed a single
                  line of code.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">GitHub deployed the app automatically</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every time the AI committed new code, an automated process (called a
                  GitHub Action) detected the change, built the app, and published it to
                  the web. The time from AI typing code to you being able to read it:
                  a few minutes.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1">
                5
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">You are reading it right now</h3>
                <p className="text-gray-600 leading-relaxed">
                  The app you are using — including this very page — is the result of
                  hundreds of small AI-made changes, coordinated through GitHub Issues,
                  with Gigi checking in and giving direction along the way.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What a commit is */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4BE;</span>
            <h2 className="text-2xl font-semibold text-gray-700">What are all those commits?</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            If you look at the GitHub repository for this app, you will see hundreds of
            commits — each one a small change the AI made. Think of them like the pages
            of a detailed diary. Every time the AI added a button, fixed a typo, or built
            a new page, it saved its work as a commit with a short description.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            That history is permanent. You can scroll back through every single change
            ever made to this project and see exactly what the AI did and when.
          </p>
          <a
            href="https://github.com/Sayfan-AI/ronny-learns-ai/commits/main"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
          >
            Browse every commit on GitHub &rarr;
          </a>
        </div>

        {/* The role of GitHub */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F517;</span>
            <h2 className="text-2xl font-semibold text-gray-700">GitHub: where humans and AI coordinate</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            The genius of this system is that everything happens in one place: GitHub.
            The AI reads its tasks from GitHub Issues. It saves its work via GitHub commits.
            It asks Gigi for help by opening a GitHub Issue. Gigi responds in comments.
            The app is deployed through GitHub Actions.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            GitHub was designed for teams of humans. Genesis hijacked it for a team of
            AI agents — and it works beautifully because the protocol (Issues, PRs, commits)
            is the same whether the participant is human or AI.
          </p>
        </div>

        {/* Why this is exciting */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x2728;</span>
            <h2 className="text-2xl font-semibold text-indigo-800">Why this is exciting for you</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            You do not need to be a programmer to create something like this. Gigi is not
            a programmer either — she is someone who knows how to communicate clearly with
            AI, set good goals, and review the results.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            The skills that matter in an AI-assisted world are things like: asking good
            questions, giving clear descriptions of what you want, knowing when something
            looks right or wrong, and understanding enough to have a good conversation
            with the tool. All of those are things you are learning right now.
          </p>
          <p className="text-gray-700 text-lg font-semibold leading-relaxed">
            You are already doing it.
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
          <a
            href="https://github.com/Sayfan-AI/ronny-learns-ai/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors"
          >
            See it live on GitHub &rarr;
          </a>
        </div>

      </div>
    </div>
  )
}
