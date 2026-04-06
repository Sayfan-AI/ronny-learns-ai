import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
import { CompletedBadge } from '../components/CompletedBadge'
import { LessonNote } from '../components/LessonNote'
import { LessonRating } from '../components/LessonRating'
import { LessonFeedback } from '../components/LessonFeedback'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { NextLesson } from '../components/NextLesson'

export function WSL2Setup() {
  useMarkVisited('wsl2-setup')
  useLessonVisit('wsl2-setup')
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center px-4 py-8 sm:py-16">
      <div className="max-w-2xl w-full space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="text-5xl sm:text-6xl">&#x1F427;</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
            Setting Up WSL2 (Linux on Windows)
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            WSL2 lets you run Linux — a different kind of operating system — right inside
            your Windows computer. Most developer tools work best on Linux, so this gives
            you the best of both worlds.
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
            <span>About 10 min setup</span>
          </div>
          <CompletedBadge lessonId="wsl2-setup" />
        </div>

        {/* What is WSL2 */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x2753;</span>
            <h2 className="text-2xl font-semibold text-gray-700">What is WSL2?</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            WSL stands for <strong>Windows Subsystem for Linux</strong>. Version 2 (WSL2) is
            the one you want — it runs a real Linux system inside a special window on
            your Windows computer.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Think of it like having a small Linux computer living inside your Windows
            computer. You can use it any time by opening a terminal window, and close it
            when you&apos;re done.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Developers love it because many tools — including the ones you&apos;ll learn
            in this course — are designed to run on Linux.
          </p>
        </div>

        {/* Before you start */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">&#x1F4CB;</span>
            <h2 className="text-2xl font-semibold text-blue-800">Before you start</h2>
          </div>
          <ul className="space-y-3 text-gray-700 text-lg list-none">
            <li className="flex gap-3">
              <span className="text-blue-500 shrink-0">&#x25CF;</span>
              <span>You need <strong>Windows 10 (version 2004 or later) or Windows 11</strong>. Not sure which version you have? Press Windows key + R, type <code className="bg-white px-1 rounded font-mono text-base">winver</code>, and press Enter — it shows your version.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 shrink-0">&#x25CF;</span>
              <span><strong>Virtualization</strong> must be enabled in your computer&apos;s settings. On most modern computers it is already on. If you get an error during install about virtualization, look up &ldquo;enable virtualization [your computer brand]&rdquo; — it&apos;s usually a one-time setting in your computer&apos;s startup screen.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 shrink-0">&#x25CF;</span>
              <span>Your computer should be <strong>plugged in</strong> during this setup — it can take a few minutes.</span>
            </li>
          </ul>
        </div>

        {/* Step 1: Windows Update */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-blue-700 bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center shrink-0">1</span>
            <h2 className="text-2xl font-semibold text-gray-700">Run Windows Update first</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            WSL2 works best when Windows is fully up to date. Before installing, check
            for updates:
          </p>
          <ol className="space-y-3 text-gray-600 text-lg list-none">
            <li className="flex gap-3">
              <span className="font-semibold text-blue-600 shrink-0">a.</span>
              <span>Press the <strong>Windows key</strong>, type <strong>Windows Update</strong>, and press Enter.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-blue-600 shrink-0">b.</span>
              <span>Click <strong>&ldquo;Check for updates&rdquo;</strong>.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-blue-600 shrink-0">c.</span>
              <span>Install any updates that are waiting. Restart your computer if prompted.</span>
            </li>
          </ol>
        </div>

        {/* Step 2: Install WSL */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-blue-700 bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center shrink-0">2</span>
            <h2 className="text-2xl font-semibold text-gray-700">Install WSL2</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Open PowerShell as Administrator (press Windows key, type PowerShell,
            right-click it, choose &ldquo;Run as administrator&rdquo;).
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Then type this command and press <strong>Enter</strong>:
          </p>
          <pre className="bg-gray-900 text-green-400 rounded-xl p-4 overflow-x-auto font-mono text-sm">
            <code>wsl --install</code>
          </pre>
          <p className="text-gray-600 text-lg leading-relaxed">
            This one command does everything: it enables WSL2 and installs Ubuntu
            (a popular version of Linux) automatically.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            You will see text appear as it works. When it&apos;s done, it will ask you to
            <strong> restart your computer</strong>. Go ahead and restart.
          </p>
        </div>

        {/* Step 3: First boot */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-blue-700 bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center shrink-0">3</span>
            <h2 className="text-2xl font-semibold text-gray-700">Set up Ubuntu for the first time</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            After restarting, a terminal window may open automatically to finish Ubuntu&apos;s
            setup. If it doesn&apos;t, press the Windows key, type <strong>Ubuntu</strong>, and click it.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            It will ask you to create a username and password for your Linux account:
          </p>
          <ol className="space-y-3 text-gray-600 text-lg list-none">
            <li className="flex gap-3">
              <span className="font-semibold text-blue-600 shrink-0">a.</span>
              <span>Type a username (something simple, all lowercase, no spaces — e.g. <code className="bg-gray-100 px-1 rounded font-mono">ronny</code>). Press Enter.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-blue-600 shrink-0">b.</span>
              <span>Type a password. <strong>Note:</strong> when you type a password here, nothing appears on screen — no stars, no dots. This is normal for security. Type it and press Enter.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-blue-600 shrink-0">c.</span>
              <span>Type the same password again to confirm, then press Enter.</span>
            </li>
          </ol>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-blue-800 text-base">
              Write down your Linux username and password somewhere safe — you will need them later.
            </p>
          </div>
        </div>

        {/* Step 4: Opening WSL in future */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-blue-700 bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center shrink-0">4</span>
            <h2 className="text-2xl font-semibold text-gray-700">How to open WSL2 in the future</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Any time you want to use your Linux terminal:
          </p>
          <ul className="space-y-3 text-gray-600 text-lg list-none">
            <li className="flex gap-3">
              <span className="text-blue-500 shrink-0">&#x25CF;</span>
              <span>Press the Windows key, type <strong>Ubuntu</strong>, and click it — a terminal window opens.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 shrink-0">&#x25CF;</span>
              <span>Or open Windows Terminal (if installed) and choose &ldquo;Ubuntu&rdquo; from the dropdown at the top.</span>
            </li>
          </ul>
          <p className="text-gray-600 text-lg leading-relaxed">
            You&apos;ll see a prompt that looks something like <code className="bg-gray-100 px-1 rounded font-mono text-base">ronny@DESKTOP:~$</code> — that means
            you&apos;re in Linux, ready to type commands.
          </p>
        </div>

        {/* Success */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">&#x2705;</span>
            <h2 className="text-2xl font-semibold text-green-800">You&apos;re set up!</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            You now have a full Linux environment on your Windows computer. This is where
            you will run the shell commands in the next lesson — and where you will install
            tools like Node.js and the Gemini CLI later on.
          </p>
        </div>

        <LessonNote lessonId="wsl2-setup" />
        <LessonFeedback lessonId="wsl2-setup" />
        <LessonRating lessonId="wsl2-setup" />
        <ReviewLaterButton lessonId="wsl2-setup" />
        <NextLesson currentId="wsl2-setup" />
      </div>
    </div>
  )
}
