import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
import { CompletedBadge } from '../components/CompletedBadge'
import { LessonNote } from '../components/LessonNote'
import { LessonRating } from '../components/LessonRating'
import { LessonFeedback } from '../components/LessonFeedback'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { NextLesson } from '../components/NextLesson'

export function Chocolatey() {
  useMarkVisited('chocolatey')
  useLessonVisit('chocolatey')
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white flex flex-col items-center px-4 py-8 sm:py-16">
      <div className="max-w-2xl w-full space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="text-5xl sm:text-6xl">&#x1F36B;</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
            Installing Chocolatey
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Chocolatey is a program that lets you install other programs from your keyboard
            — no clicking through installers. Think of it as an app store you control with
            text commands.
          </p>
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 text-sm px-4 py-2 rounded-full">
            <span>About 5 min read</span>
          </div>
          <CompletedBadge lessonId="chocolatey" />
        </div>

        {/* What is Chocolatey */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x2753;</span>
            <h2 className="text-2xl font-semibold text-gray-700">What is Chocolatey?</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Normally when you want to install a program on Windows, you go to a website,
            download an installer file, double-click it, and click &ldquo;Next&rdquo; many times.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Chocolatey lets you skip all that. You just type one line in a terminal window
            and it installs the program for you automatically.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            For example, instead of searching the internet for &ldquo;Node.js download&rdquo;, you
            just type: <code className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded font-mono text-base">choco install nodejs</code>
          </p>
        </div>

        {/* Step 1 */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-yellow-700 bg-yellow-100 w-10 h-10 rounded-full flex items-center justify-center shrink-0">1</span>
            <h2 className="text-2xl font-semibold text-gray-700">Open PowerShell as Administrator</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            PowerShell is a text window where you type commands. You need to open it
            with &ldquo;Administrator&rdquo; permissions so it has enough access to install software.
          </p>
          <ol className="space-y-3 text-gray-600 text-lg list-none">
            <li className="flex gap-3">
              <span className="font-semibold text-yellow-600 shrink-0">a.</span>
              <span>Press the <strong>Windows key</strong> on your keyboard (bottom-left, looks like four squares).</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-yellow-600 shrink-0">b.</span>
              <span>Type <strong>PowerShell</strong> in the search bar that appears.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-yellow-600 shrink-0">c.</span>
              <span>You will see &ldquo;Windows PowerShell&rdquo; in the results. <strong>Right-click</strong> on it.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-yellow-600 shrink-0">d.</span>
              <span>Click <strong>&ldquo;Run as administrator&rdquo;</strong> from the menu.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-yellow-600 shrink-0">e.</span>
              <span>If a pop-up asks &ldquo;Do you want to allow this app to make changes?&rdquo; — click <strong>Yes</strong>.</span>
            </li>
          </ol>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p className="text-yellow-800 text-base">
              You should now see a blue or dark window with a blinking cursor. That&apos;s PowerShell — you&apos;re in!
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-yellow-700 bg-yellow-100 w-10 h-10 rounded-full flex items-center justify-center shrink-0">2</span>
            <h2 className="text-2xl font-semibold text-gray-700">Allow scripts to run</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Windows blocks scripts by default for safety. We need to allow it temporarily.
            Copy and paste this command into PowerShell, then press <strong>Enter</strong>:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-4 overflow-x-auto font-mono text-sm leading-relaxed">
            <code>Set-ExecutionPolicy Bypass -Scope Process -Force</code>
          </pre>
          <p className="text-gray-600 text-lg leading-relaxed">
            Nothing visible happens — that is fine. It worked.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-yellow-700 bg-yellow-100 w-10 h-10 rounded-full flex items-center justify-center shrink-0">3</span>
            <h2 className="text-2xl font-semibold text-gray-700">Run the install command</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Copy and paste this entire line into PowerShell and press <strong>Enter</strong>:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-4 overflow-x-auto font-mono text-sm leading-relaxed break-all whitespace-pre-wrap">
            <code>[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))</code>
          </pre>
          <p className="text-gray-600 text-lg leading-relaxed">
            You will see a lot of text scroll past — this is normal. Chocolatey is
            downloading and installing itself. Wait until the cursor appears again
            (usually about 30 seconds).
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-yellow-700 bg-yellow-100 w-10 h-10 rounded-full flex items-center justify-center shrink-0">4</span>
            <h2 className="text-2xl font-semibold text-gray-700">Verify the installation</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Type this and press <strong>Enter</strong>:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-4 overflow-x-auto font-mono text-sm">
            <code>choco --version</code>
          </pre>
          <p className="text-gray-600 text-lg leading-relaxed">
            You should see a version number printed back, like:
          </p>
          <pre className="bg-gray-100 text-gray-800 rounded-xl p-4 font-mono text-sm">
            <code>2.4.1</code>
          </pre>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-green-800 text-base font-medium">
              A version number means Chocolatey is installed and working. You are ready to move on!
            </p>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">&#x26A0;</span>
            <h2 className="text-2xl font-semibold text-orange-800">Something went wrong?</h2>
          </div>
          <ul className="space-y-3 text-gray-700 text-lg list-none">
            <li className="flex gap-3">
              <span className="text-orange-500 shrink-0">&#x25CF;</span>
              <span>Make sure you opened PowerShell <strong>as Administrator</strong> (step 1d). It will not work without admin permissions.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange-500 shrink-0">&#x25CF;</span>
              <span>If you see &ldquo;Access is denied&rdquo; — close PowerShell and open it again as Administrator.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange-500 shrink-0">&#x25CF;</span>
              <span>Make sure your computer is connected to the internet.</span>
            </li>
          </ul>
        </div>

        <LessonNote lessonId="chocolatey" />
        <LessonFeedback lessonId="chocolatey" />
        <LessonRating lessonId="chocolatey" />
        <ReviewLaterButton lessonId="chocolatey" />
        <NextLesson currentId="chocolatey" />
      </div>
    </div>
  )
}
