import { Link } from '@tanstack/react-router'

export function HowToGiveFeedback() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="text-blue-500 hover:underline text-sm">
            &larr; Back to home
          </Link>
          <div className="text-5xl">&#128172;</div>
          <h1 className="text-3xl font-bold text-gray-800">How to Give Feedback</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            You are not just a reader of this project &mdash; you can talk to the AI system building it. Here is how.
          </p>
        </div>

        {/* Why feedback matters */}
        <div className="bg-green-100 border border-green-300 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-semibold text-green-800">Your voice shapes this project</h2>
          <p className="text-green-900 leading-relaxed">
            The genesis system reads messages left in GitHub issues. That means if you leave a comment on an issue, the AI will read it and can act on it &mdash; adding new pages, fixing something confusing, or answering a question.
          </p>
          <p className="text-green-900 leading-relaxed">
            This is not a one-way website. It is a two-way conversation between you and the AI team building it.
          </p>
        </div>

        {/* What is a GitHub issue */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">What is a GitHub issue?</h2>
          <p className="text-gray-600 leading-relaxed">
            A <strong>GitHub issue</strong> is like a message or a ticket in a shared inbox. Both humans and AI agents read and respond to issues.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Issues are used for everything: reporting a bug, requesting a new feature, asking a question, or just leaving a note. When Gigi has feedback for the AI, she writes a GitHub issue. When the AI completes a task, it closes the issue.
          </p>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-gray-500 text-sm leading-relaxed">
              Think of it like a to-do list that both humans and AI can read, write on, and check things off. Everything is visible, nothing gets lost.
            </p>
          </div>
        </div>

        {/* How to find issues */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Step 1: Find the issues page</h2>
          <p className="text-gray-600 leading-relaxed">
            The issues page for this project is on GitHub. You can find it here:
          </p>
          <a
            href="https://github.com/Sayfan-AI/ronny-learns-ai/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-50 border border-blue-200 rounded-xl p-4 hover:bg-blue-100 transition-colors"
          >
            <p className="text-blue-700 font-medium">github.com/Sayfan-AI/ronny-learns-ai/issues</p>
            <p className="text-blue-600 text-sm mt-1">Click to open the issues page in a new tab &rarr;</p>
          </a>
          <p className="text-gray-600 leading-relaxed">
            You will see a list of open and closed issues. Each one is a task, question, or message in the system.
          </p>
        </div>

        {/* How to comment */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Step 2: Open an issue and leave a comment</h2>
          <p className="text-gray-600 leading-relaxed">
            To leave feedback, follow these steps:
          </p>
          <div className="space-y-4">
            {[
              { step: 'Go to the issues page (link above)', detail: 'You will see a list of tasks. Click on any one that interests you, or one that is relevant to your feedback.' },
              { step: 'Scroll to the bottom of the issue', detail: 'Below the description and any existing comments, there is a text box where you can write your message.' },
              { step: 'Write your feedback', detail: 'Say whatever you want. See some examples below for inspiration. There is no wrong answer.' },
              { step: 'Click "Comment"', detail: 'That is it. Your message is now part of the project history. The genesis system will read it on its next cycle (usually within a day).' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-500 text-white font-bold flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{item.step}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p className="text-yellow-800 text-sm leading-relaxed">
              <strong>Note:</strong> You need a GitHub account to leave comments. If you do not have one yet, the &ldquo;Start Here&rdquo; tutorial on the home page will walk you through creating one in about 5 minutes.
            </p>
          </div>
        </div>

        {/* Examples of good feedback */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Examples of great feedback</h2>
          <p className="text-gray-600 leading-relaxed">
            Not sure what to say? Here are some examples of useful feedback:
          </p>
          <div className="space-y-3">
            {[
              { type: 'Request a new topic', example: '"I would love a page explaining what a database is."' },
              { type: 'Report something confusing', example: '"The quiz on the AI page is too hard for a beginner. Can you make the questions simpler?"' },
              { type: 'Share a thought', example: '"I did not realise the whole website was built by AI. That is mind-blowing."' },
              { type: 'Ask a question', example: '"When the AI makes a mistake, who fixes it? Does Gigi have to check everything?"' },
              { type: 'Suggest an improvement', example: '"The home page could have a short video introduction."' },
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-4 space-y-1">
                <p className="text-xs font-semibold text-green-600 uppercase tracking-wide">{item.type}</p>
                <p className="text-gray-700 italic text-sm">{item.example}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gigi vs Ronny */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Gigi&apos;s role vs Ronny&apos;s role</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="bg-purple-50 rounded-xl p-4 space-y-2">
              <h3 className="font-semibold text-purple-800">Gigi (the guide)</h3>
              <p className="text-purple-700 text-sm leading-relaxed">
                Gigi set up this whole project. She describes the overall direction, approves big changes, and acts as the main human contact for the genesis system. She can override anything the AI does.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 space-y-2">
              <h3 className="font-semibold text-green-800">Ronny (that is you!)</h3>
              <p className="text-green-700 text-sm leading-relaxed">
                You are the learner this project was built for. Your feedback about what is confusing, what is interesting, or what you want to learn next directly shapes what the AI builds.
              </p>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Both voices matter. But your perspective as a complete beginner is especially valuable &mdash; you will catch things that experts miss.
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
          <Link
            to="/explore/live-activity"
            className="px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors"
          >
            See Live Activity &rarr;
          </Link>
        </div>

      </div>
    </div>
  )
}
