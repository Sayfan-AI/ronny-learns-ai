export function WhatIsAPI() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl">🔌</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            What is an API?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            You don&apos;t need to be a programmer to understand APIs.
            Let&apos;s break it down with a simple, everyday example.
          </p>
        </div>

        {/* Section 1: Simple definition */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">💬</span>
            <h2 className="text-2xl font-semibold text-gray-700">In plain words</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>API</strong> stands for <strong>Application Programming Interface</strong>.
            That sounds complicated, but the idea is simple:
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            An API is a way for two computer programs to talk to each other &mdash; to ask for
            something and receive an answer.
          </p>
        </div>

        {/* Section 2: The restaurant analogy */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🍽️</span>
            <h2 className="text-2xl font-semibold text-gray-700">Think of a restaurant</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Imagine you&apos;re sitting at a restaurant table. You don&apos;t go into the kitchen
            yourself &mdash; instead, a <strong>waiter</strong> takes your order, brings it to the kitchen,
            and returns with your food.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            An API is exactly like that waiter:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-lg">
            <li><strong>You</strong> = one program that needs something</li>
            <li><strong>The waiter</strong> = the API (the messenger in between)</li>
            <li><strong>The kitchen</strong> = another program that has what you need</li>
          </ul>
          <p className="text-gray-600 text-lg leading-relaxed">
            You don&apos;t need to know what happens in the kitchen. You just tell the waiter
            what you want, and you get it back.
          </p>
        </div>

        {/* Section 3: Real-world examples */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🌍</span>
            <h2 className="text-2xl font-semibold text-gray-700">Real examples you already use</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-800 text-lg">Weather apps</p>
              <p className="text-gray-600 leading-relaxed">
                When you check the weather on your phone, your weather app uses an API to
                ask a weather service &ldquo;What&apos;s the temperature in Tokyo right now?&rdquo;
                The service sends back the answer, and the app shows it to you.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-800 text-lg">Google Maps in other apps</p>
              <p className="text-gray-600 leading-relaxed">
                When you book a ride or order delivery and see a map inside the app,
                that app is using Google Maps&apos; API &mdash; asking Google Maps to show directions
                without building their own map from scratch.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-800 text-lg">&ldquo;Sign in with Google&rdquo;</p>
              <p className="text-gray-600 leading-relaxed">
                When a website lets you log in using your Google account, it&apos;s using
                Google&apos;s API to verify who you are &mdash; so the website doesn&apos;t have to store
                your password itself.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: How Gigi uses APIs */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🛠️</span>
            <h2 className="text-2xl font-semibold text-gray-700">How Gigi uses APIs to build this for you</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            This entire project is built using APIs. Here are two you&apos;ve already encountered:
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-purple-400 pl-4">
              <p className="font-semibold text-gray-800 text-lg">The Claude AI API</p>
              <p className="text-gray-600 leading-relaxed">
                Claude &mdash; the AI that writes the code and content for this app &mdash; is accessed
                through an API. Gigi sends instructions (like &ldquo;build a page about APIs&rdquo;),
                and Claude sends back the result through the API.
              </p>
            </div>
            <div className="border-l-4 border-gray-400 pl-4">
              <p className="font-semibold text-gray-800 text-lg">The GitHub API</p>
              <p className="text-gray-600 leading-relaxed">
                GitHub &mdash; where all the code is stored &mdash; also has an API. When the AI opens
                a task, checks progress, or publishes a new version of the app, it does all
                of that by talking to GitHub through its API.
              </p>
            </div>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            APIs are what allow all the different pieces &mdash; the AI, GitHub, and this website &mdash;
            to work together automatically, without anyone clicking buttons manually.
          </p>
        </div>

        {/* Section 5: Key takeaway */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">💡</span>
            <h2 className="text-2xl font-semibold text-blue-800">The key thing to remember</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            An API is just a <strong>messenger between programs</strong>. One program asks,
            another program answers &mdash; and they do it in a structured, reliable way.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            You don&apos;t need to understand the technical details to appreciate what&apos;s happening.
            Every time this app updates itself or responds to Gigi&apos;s instructions,
            APIs are the invisible waiters making it all happen.
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
