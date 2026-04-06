import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
import { CompletedBadge } from '../components/CompletedBadge'
import { LessonNote } from '../components/LessonNote'
import { LessonRating } from '../components/LessonRating'
import { LessonFeedback } from '../components/LessonFeedback'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { NextLesson } from '../components/NextLesson'

export function GeminiCLI() {
  useMarkVisited('gemini-cli')
  useLessonVisit('gemini-cli')
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center px-4 py-8 sm:py-16">
      <div className="max-w-2xl w-full space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="text-5xl sm:text-6xl">&#x2728;</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
            Using Gemini CLI
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Gemini CLI lets you chat with Google&apos;s Gemini AI directly from your
            terminal — no browser needed. You type a question, it thinks, and
            prints the answer right back.
          </p>
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm px-4 py-2 rounded-full">
            <span>About 15 min setup</span>
          </div>
          <CompletedBadge lessonId="gemini-cli" />
        </div>

        {/* What is Gemini CLI */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x2753;</span>
            <h2 className="text-2xl font-semibold text-gray-700">What is Gemini CLI?</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Gemini is an AI assistant made by Google, similar to ChatGPT. The &ldquo;CLI&rdquo;
            part stands for <strong>Command Line Interface</strong> — it means you use it
            from a terminal instead of a website.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Why would you use a terminal instead of a website? Because it&apos;s faster for
            developers — you can pipe text into it, use it in scripts, and ask it
            about your code without leaving the terminal.
          </p>
        </div>

        {/* Step 1: Install nvm */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-indigo-700 bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center shrink-0">1</span>
            <h2 className="text-2xl font-semibold text-gray-700">Install nvm (Node Version Manager)</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Before we can install Gemini CLI, we need <strong>Node.js</strong> — a
            JavaScript runtime that many developer tools are built on. The best way to
            install Node.js on Linux is via <strong>nvm</strong>, which manages Node
            versions for you.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Open your Ubuntu terminal and run this command (it&apos;s one long line —
            copy it all):
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-4 overflow-x-auto font-mono text-sm leading-relaxed break-all whitespace-pre-wrap">
            <code>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash</code>
          </pre>
          <p className="text-gray-600 text-lg leading-relaxed">
            This downloads and runs the nvm installer. You will see a lot of text appear.
            When it finishes, run this to reload your terminal settings:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-4 overflow-x-auto font-mono text-sm">
            <code>source ~/.bashrc</code>
          </pre>
          <p className="text-gray-600 text-lg leading-relaxed">
            Verify nvm is ready:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-4 overflow-x-auto font-mono text-sm">
            <code>nvm --version</code>
          </pre>
          <pre className="bg-gray-100 text-gray-700 rounded-xl p-3 font-mono text-sm">
            <code>0.39.7</code>
          </pre>
        </div>

        {/* Step 2: Install Node.js */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-indigo-700 bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center shrink-0">2</span>
            <h2 className="text-2xl font-semibold text-gray-700">Install Node.js via nvm</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Now install the latest LTS (Long Term Support) version of Node.js. LTS means
            it&apos;s a stable, well-tested version — the right choice for beginners.
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-4 overflow-x-auto font-mono text-sm">
            <code>nvm install --lts</code>
          </pre>
          <p className="text-gray-600 text-lg leading-relaxed">
            You will see it downloading and installing. When done, verify both Node.js
            and npm (the package manager that comes with it) are working:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-4 overflow-x-auto font-mono text-sm">
            <code>node --version
npm --version</code>
          </pre>
          <pre className="bg-gray-100 text-gray-700 rounded-xl p-3 font-mono text-sm">
            <code>v22.11.0
10.9.2</code>
          </pre>
          <p className="text-gray-500 text-base">
            Your version numbers may be different — that is fine, as long as you see something.
          </p>
        </div>

        {/* Step 3: Install Gemini CLI */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-indigo-700 bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center shrink-0">3</span>
            <h2 className="text-2xl font-semibold text-gray-700">Install Gemini CLI</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Now install the Gemini CLI tool using npm (which you just installed):
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-4 overflow-x-auto font-mono text-sm">
            <code>npm install -g @google/gemini-cli</code>
          </pre>
          <p className="text-gray-600 text-lg leading-relaxed">
            The <code className="bg-gray-100 px-1 rounded font-mono text-base">-g</code> flag means &ldquo;global&rdquo; — install it so you can use it from anywhere
            in the terminal, not just in one folder.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Verify it installed:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-4 overflow-x-auto font-mono text-sm">
            <code>gemini --version</code>
          </pre>
        </div>

        {/* Step 4: Get API key */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-indigo-700 bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center shrink-0">4</span>
            <h2 className="text-2xl font-semibold text-gray-700">Get your Gemini API key</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            An <strong>API key</strong> is like a password that proves to Google you have
            permission to use Gemini. You get one for free at Google AI Studio.
          </p>
          <ol className="space-y-3 text-gray-600 text-lg list-none">
            <li className="flex gap-3">
              <span className="font-semibold text-indigo-600 shrink-0">a.</span>
              <span>Go to <strong>aistudio.google.com</strong> in your browser and sign in with your Google account.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-indigo-600 shrink-0">b.</span>
              <span>Click <strong>&ldquo;Get API key&rdquo;</strong> in the left sidebar.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-indigo-600 shrink-0">c.</span>
              <span>Click <strong>&ldquo;Create API key&rdquo;</strong>.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-indigo-600 shrink-0">d.</span>
              <span>Copy the key — it will look something like <code className="bg-gray-100 px-1 rounded font-mono text-sm">AIzaSy...</code> (a long string of letters and numbers).</span>
            </li>
          </ol>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <p className="text-orange-800 text-base">
              Keep your API key private — do not share it publicly or post it online.
              Anyone who has it can use your account.
            </p>
          </div>
        </div>

        {/* Step 5: Set API key */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-indigo-700 bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center shrink-0">5</span>
            <h2 className="text-2xl font-semibold text-gray-700">Set your API key as an environment variable</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            An <strong>environment variable</strong> is a named value your computer keeps
            available for programs. We will store the API key in one so Gemini CLI can
            find it automatically.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            In your terminal, replace <code className="bg-gray-100 px-1 rounded font-mono text-sm">YOUR_KEY_HERE</code> with your actual key:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-4 overflow-x-auto font-mono text-sm">
            <code>echo 'export GEMINI_API_KEY="YOUR_KEY_HERE"' &gt;&gt; ~/.bashrc
source ~/.bashrc</code>
          </pre>
          <p className="text-gray-600 text-lg leading-relaxed">
            The first line saves the key permanently to your terminal settings. The second
            line reloads those settings so the change takes effect right now.
          </p>
        </div>

        {/* Step 6: Usage examples */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-indigo-700 bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center shrink-0">6</span>
            <h2 className="text-2xl font-semibold text-gray-700">Try it out!</h2>
          </div>

          <div className="space-y-3">
            <p className="text-gray-600 text-lg font-medium">Ask a simple question:</p>
            <pre className="bg-gray-900 text-green-400 rounded-xl p-4 font-mono text-sm">
              <code>gemini "What is the capital of France?"</code>
            </pre>
            <pre className="bg-gray-100 text-gray-700 rounded-xl p-3 font-mono text-sm">
              <code>The capital of France is Paris.</code>
            </pre>
          </div>

          <div className="space-y-3">
            <p className="text-gray-600 text-lg font-medium">Ask it to explain something:</p>
            <pre className="bg-gray-900 text-green-400 rounded-xl p-4 font-mono text-sm">
              <code>gemini "Explain what a for loop is, in plain language for a beginner"</code>
            </pre>
            <pre className="bg-gray-100 text-gray-700 rounded-xl p-3 font-mono text-sm whitespace-pre-wrap">
              <code>A for loop is a way to tell the computer to repeat a task a certain number of times...</code>
            </pre>
          </div>

          <div className="space-y-3">
            <p className="text-gray-600 text-lg font-medium">Start an interactive chat (type &ldquo;exit&rdquo; to quit):</p>
            <pre className="bg-gray-900 text-green-400 rounded-xl p-4 font-mono text-sm">
              <code>gemini chat</code>
            </pre>
            <pre className="bg-gray-100 text-gray-700 rounded-xl p-3 font-mono text-sm">
              <code>Gemini: Hello! How can I help you today?
You: What's a good first programming language to learn?
Gemini: Python is often recommended for beginners because...</code>
            </pre>
          </div>
        </div>

        {/* Congrats */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">&#x1F389;</span>
            <h2 className="text-2xl font-semibold text-indigo-800">You have Gemini CLI working!</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            You just installed Node.js, set up an API key, and started chatting with an AI
            from your terminal. You are well on your way to working like a real developer.
          </p>
        </div>

        <LessonNote lessonId="gemini-cli" />
        <LessonFeedback lessonId="gemini-cli" />
        <LessonRating lessonId="gemini-cli" />
        <ReviewLaterButton lessonId="gemini-cli" />
        <NextLesson currentId="gemini-cli" />
      </div>
    </div>
  )
}
