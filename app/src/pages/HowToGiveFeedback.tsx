import { Link } from '@tanstack/react-router'

export function HowToGiveFeedback() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl">💬</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            How to give feedback
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            You can actually talk to the AI team building this app — through GitHub.
            Here&apos;s how to do it, step by step.
          </p>
        </div>

        {/* Section 1: Why GitHub */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">📁</span>
            <h2 className="text-2xl font-semibold text-gray-700">Why GitHub?</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            GitHub is where the AI team keeps all its work. When you open a GitHub issue,
            the AI agents see it and can respond — just like sending a message to a team
            that happens to check its inbox automatically.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            You don&apos;t need to know how to write code. You just need to know how to open
            an issue, which is basically like writing a short note.
          </p>
        </div>

        {/* Section 2: Before you start */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">✅</span>
            <h2 className="text-2xl font-semibold text-gray-700">Before you start</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            You&apos;ll need a GitHub account and to be added to the project by Gigi.
            Once you are, you can open issues, leave comments, and the AI team will
            see everything.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            If you don&apos;t have an account yet, the tutorial on the home page walks you
            through creating one. It only takes a few minutes.
          </p>
        </div>

        {/* Section 3: Opening an issue */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">📝</span>
            <h2 className="text-2xl font-semibold text-gray-700">How to open an issue</h2>
          </div>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-teal-200 text-teal-800 rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">1</span>
              <div>
                <p className="text-gray-700 text-lg font-medium">Go to the project on GitHub</p>
                <p className="text-gray-600 text-base">Gigi will give you the link. It looks something like: <span className="font-mono text-sm bg-gray-100 px-1.5 py-0.5 rounded">github.com/username/ronny-learns-ai</span></p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-200 text-teal-800 rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">2</span>
              <div>
                <p className="text-gray-700 text-lg font-medium">Click on the &ldquo;Issues&rdquo; tab</p>
                <p className="text-gray-600 text-base">You&apos;ll see a list of open issues — tasks, notes, and questions the AI team has been working on.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-200 text-teal-800 rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">3</span>
              <div>
                <p className="text-gray-700 text-lg font-medium">Click the green &ldquo;New issue&rdquo; button</p>
                <p className="text-gray-600 text-base">It&apos;s in the top-right corner of the Issues page.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-200 text-teal-800 rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">4</span>
              <div>
                <p className="text-gray-700 text-lg font-medium">Give it a short title and write your message</p>
                <p className="text-gray-600 text-base">For example: &ldquo;Feedback: the AI explanation was really clear!&rdquo; or &ldquo;Suggestion: can we add more examples?&rdquo;</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-teal-200 text-teal-800 rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">5</span>
              <div>
                <p className="text-gray-700 text-lg font-medium">Click &ldquo;Submit new issue&rdquo;</p>
                <p className="text-gray-600 text-base">That&apos;s it. The AI team will see it on their next check.</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Section 4: What to write */}
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">💡</span>
            <h2 className="text-2xl font-semibold text-teal-800">What kinds of things can you say?</h2>
          </div>
          <div className="space-y-3 text-gray-700 text-lg">
            <div className="flex items-start gap-2">
              <span className="text-teal-600 font-bold">✓</span>
              <p>Something was confusing: &ldquo;I didn&apos;t understand the part about commits — can it be explained differently?&rdquo;</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-teal-600 font-bold">✓</span>
              <p>A suggestion: &ldquo;It would be great to have a short summary at the end of each page.&rdquo;</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-teal-600 font-bold">✓</span>
              <p>A question: &ldquo;What happens if I make a mistake during the GitHub signup?&rdquo;</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-teal-600 font-bold">✓</span>
              <p>Positive feedback: &ldquo;The quiz on the AI page was really fun and helpful!&rdquo;</p>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            There are no wrong things to say. Every piece of feedback helps the AI team
            make this better for you.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4">
          <Link
            to="/"
            className="inline-block text-blue-600 hover:text-blue-800 text-lg font-medium underline"
          >
            &larr; Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
