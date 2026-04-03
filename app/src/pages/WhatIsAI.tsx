export function WhatIsAI() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl">🤖</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            What is AI?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            You&apos;ve probably heard the word &ldquo;AI&rdquo; a lot lately. Let&apos;s demystify it.
            It&apos;s not magic — and it&apos;s not as scary as it sounds.
          </p>
        </div>

        {/* Section 1: What is AI */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🧠</span>
            <h2 className="text-2xl font-semibold text-gray-700">At the most basic level</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            AI stands for <strong>Artificial Intelligence</strong>. At its core, an AI is a
            program that has learned patterns from enormous amounts of examples.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Think about the autocomplete on your phone. When you type &ldquo;Happy birth&rdquo;,
            your phone suggests &ldquo;day!&rdquo; — because it has seen that pattern thousands of times.
            AI language models do the same thing, just at a vastly larger scale.
          </p>
        </div>

        {/* Section 2: How language models work */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">📚</span>
            <h2 className="text-2xl font-semibold text-gray-700">How AI like Claude works</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            The AI that helps build this app is called <strong>Claude</strong> (made by Anthropic).
            It was trained by reading an enormous amount of text — books, articles, websites,
            code — and learning the patterns of how language works.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            When you ask it a question, it doesn&apos;t &ldquo;look it up&rdquo; like a search engine.
            Instead, it predicts what the most helpful and accurate response would be, based
            on all those patterns it learned.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            A good way to think of it: it&apos;s like a very well-read assistant who has absorbed
            a huge library and can write fluently on almost any topic.
          </p>
        </div>

        {/* Section 3: What AI can and can't do */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">⚖️</span>
            <h2 className="text-2xl font-semibold text-gray-700">What AI is good at — and not so good at</h2>
          </div>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-green-700 text-lg mb-2">Good at:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-lg">
                <li>Writing text — emails, explanations, stories</li>
                <li>Writing and reviewing code</li>
                <li>Explaining complex topics in simple terms</li>
                <li>Following clear step-by-step instructions</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-red-700 text-lg mb-2">Not so good at:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-lg">
                <li>Remembering things between conversations</li>
                <li>Knowing what happened very recently (news, events)</li>
                <li>Making judgment calls that require real-world experience</li>
                <li>Being 100% accurate — it can make confident-sounding mistakes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4: How Gigi uses AI */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🛠️</span>
            <h2 className="text-2xl font-semibold text-gray-700">How Gigi uses AI to build this for you</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Gigi didn&apos;t write every line of code in this app by hand. Instead, she gives the AI
            clear goals and instructions — and the AI writes the code, opens tasks on GitHub,
            builds the app, and publishes it.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            It&apos;s a bit like being an architect who gives detailed blueprints to a very fast
            and capable builder. The architect (Gigi) decides <em>what</em> to build. The builder
            (the AI) figures out <em>how</em> to build it.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            When something goes wrong or the AI gets stuck, it flags it for Gigi. They
            work together — the AI handles the repetitive technical work, and Gigi provides
            direction and judgment.
          </p>
        </div>

        {/* Section 5: Key message */}
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">💡</span>
            <h2 className="text-2xl font-semibold text-purple-800">The key thing to remember</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>AI is a tool, not magic.</strong> It doesn&apos;t think or feel — it generates
            responses based on patterns. Like any tool, it&apos;s powerful when used well and
            limited when used poorly.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            The person holding the tool — in this case, Gigi — is still the one responsible
            for the direction, the quality check, and the final decisions. AI makes her faster,
            not unnecessary.
          </p>
        </div>

        {/* Back link */}
        <div className="text-center">
          <a
            href="#/"
            className="inline-block text-blue-600 hover:text-blue-800 text-lg font-medium underline"
          >
            &larr; Back to home
          </a>
        </div>
      </div>
    </div>
  )
}
