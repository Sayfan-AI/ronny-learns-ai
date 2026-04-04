import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { NextLesson } from '../components/NextLesson'
import { RelatedLessons } from '../components/RelatedLessons'

interface Step {
  title: string
  description: string
  details: string[]
  tip?: string
}

const steps: Step[] = [
  {
    title: 'What is GitHub?',
    description:
      'GitHub is a website where people store and share code. Think of it like Google Drive, but designed especially for software projects. Gigi and the AI use GitHub to keep track of all the work they do on this project.',
    details: [
      'You do not need to write any code to use GitHub.',
      'Your account is free.',
      'Once you have an account, Gigi can invite you to see the project.',
    ],
  },
  {
    title: 'Go to github.com',
    description:
      'Open a web browser on your phone or computer and type github.com into the address bar at the top. Then press Enter.',
    details: [
      'The address bar is at the very top of your browser window.',
      'You should see a page with a black background and the text "Build and ship software on a single, collaborative platform."',
    ],
    tip: 'If you see a different website, make sure you typed github.com correctly — with a dot in the middle.',
  },
  {
    title: 'Click "Sign up"',
    description:
      'On the GitHub home page, find the green "Sign up" button. It is usually in the top-right corner of the page. Click it.',
    details: [
      'On a phone, you might need to scroll up or tap a menu icon first.',
      'The button is green and says "Sign up" in white letters.',
    ],
    tip: 'If you do not see a "Sign up" button, look for a menu icon (three horizontal lines) at the top right and tap it.',
  },
  {
    title: 'Enter your email address',
    description:
      'GitHub will ask for your email address. Type in the email address you want to use. This should be an address you can access — GitHub will send you a confirmation message.',
    details: [
      'Use an email you check regularly.',
      'If you do not have an email, you can create a free one at gmail.com first.',
      'After typing your email, click "Continue".',
    ],
    tip: 'Double-check that you typed your email correctly before clicking Continue.',
  },
  {
    title: 'Create a password',
    description:
      'Next, GitHub will ask you to create a password. Choose something you will remember, but that is hard for others to guess.',
    details: [
      'A good password has at least 8 characters.',
      'Try mixing letters, numbers, and symbols (like ! or @).',
      'Write your password down somewhere safe if you are worried about forgetting it.',
      'Click "Continue" when done.',
    ],
    tip: 'Do not use the same password you use for other important accounts.',
  },
  {
    title: 'Choose a username',
    description:
      'A username is the name people will see when you are on GitHub. It is like a nickname for the website. Choose something short and easy to remember.',
    details: [
      'Your username can only contain letters, numbers, and hyphens (-).',
      'You cannot use spaces.',
      'Example: ronny-learns or ronny2024',
      'Click "Continue" when you have chosen one.',
    ],
    tip: 'Your username will be part of your GitHub web address, like: github.com/your-username',
  },
  {
    title: 'Answer the email preferences question',
    description:
      'GitHub will ask if you want to receive product updates and announcements by email. This is optional — you can choose "y" for yes or "n" for no.',
    details: [
      'This just controls whether GitHub sends you news and tips.',
      'It does not affect your account.',
      'You can change this later in your settings.',
    ],
  },
  {
    title: 'Verify you are human',
    description:
      'GitHub will show you a short puzzle to prove you are a real person and not a robot. Follow the instructions on screen — it might ask you to click something, rotate an image, or solve a simple puzzle.',
    details: [
      'This usually takes less than 30 seconds.',
      'If the puzzle is too hard, click "Try another challenge" to get a different one.',
      'Click "Create account" once the puzzle is complete.',
    ],
    tip: 'If the puzzle does not load, try refreshing the page or using a different browser.',
  },
  {
    title: 'Verify your email address',
    description:
      'GitHub will send a message to your email with a special code. Check your email inbox, find the message from GitHub, and type the code into the box on the GitHub page.',
    details: [
      'Open a new browser tab and go to your email (like gmail.com or outlook.com).',
      'Look for a message from GitHub with the subject "Please verify your email address" or similar.',
      'Copy the 6-digit code and paste it into the GitHub page.',
    ],
    tip: 'If you do not see the email after a couple of minutes, check your spam or junk folder.',
  },
  {
    title: 'You are done! Tell Gigi your username.',
    description:
      'Congratulations! You now have a GitHub account. The last step is to let Gigi know your username so he can invite you to the project.',
    details: [
      'Your username is the one you chose in Step 6.',
      'You can also find it by clicking on your profile picture (top right corner of GitHub) — your username will appear at the top.',
      'Send your username to Gigi by whatever way you normally contact him (message, WhatsApp, email, etc.).',
    ],
    tip: 'Once Gigi adds you to the project, you will receive an invitation email from GitHub. Click "Accept invitation" in that email.',
  },
]

export function GitHubSignupTutorial() {
  useMarkVisited('github-signup')
  const [currentStep, setCurrentStep] = useState(0)
  const step = steps[currentStep]
  const totalSteps = steps.length
  const isLast = currentStep === totalSteps - 1

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-6">

        {/* Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="text-blue-500 hover:underline text-sm">
            &larr; Back to home
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Create Your GitHub Account</h1>
          <p className="text-gray-500">Follow these steps one at a time. Take your time &mdash; there is no rush.</p>
        </div>

        {/* Progress bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Step {currentStep + 1} of {totalSteps}</span>
            <span>{Math.round(((currentStep + 1) / totalSteps) * 100)}% complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Step card */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4 sm:space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-lg flex-shrink-0">
              {currentStep + 1}
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{step.title}</h2>
          </div>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{step.description}</p>

          {step.details.length > 0 && (
            <ul className="space-y-2">
              {step.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-400 mt-1 flex-shrink-0">&#10003;</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}

          {step.tip && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
              <span className="text-amber-500 text-xl flex-shrink-0">&#128161;</span>
              <p className="text-amber-800 text-sm leading-relaxed"><strong>Stuck?</strong> {step.tip}</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-3">
          <button
            onClick={() => setCurrentStep(s => Math.max(0, s - 1))}
            disabled={currentStep === 0}
            className="px-4 sm:px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-medium disabled:opacity-40 hover:bg-gray-50 transition-colors min-h-[48px]"
          >
            &larr; Previous
          </button>

          {!isLast ? (
            <button
              onClick={() => setCurrentStep(s => Math.min(totalSteps - 1, s + 1))}
              className="px-6 sm:px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors min-h-[48px]"
            >
              Next step &rarr;
            </button>
          ) : (
            <div className="flex flex-col items-end gap-1 text-right">
              <span className="text-green-600 font-semibold text-base sm:text-lg">You made it! &#127881;</span>
              <span className="text-gray-500 text-xs sm:text-sm">Don&apos;t forget to message Gigi your username.</span>
            </div>
          )}
        </div>

        {/* Step dots */}
        <div className="flex justify-center gap-2 flex-wrap">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentStep(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === currentStep ? 'bg-blue-600' : i < currentStep ? 'bg-blue-300' : 'bg-gray-300'
              }`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>

        {/* Next lesson */}
        <RelatedLessons currentId="github-signup" />

        <NextLesson currentId="github-signup" />

      </div>
    </div>
  )
}
