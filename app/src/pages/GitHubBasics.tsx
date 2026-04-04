import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { NextLesson } from '../components/NextLesson'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is GitHub?',
    options: [
      'A messaging app for developers',
      'A website for storing and sharing code',
      'A type of programming language',
      'An email service for teams',
    ],
    correctIndex: 1,
    explanation:
      "GitHub is a website where developers store code, track changes, and collaborate on projects. It's like a shared folder — but very smart.",
  },
  {
    question: 'What is a repository (repo)?',
    options: [
      'A type of commit message',
      'A private chat between team members',
      'A project folder that stores all files and remembers every change',
      'A way to deploy an app to the web',
    ],
    correctIndex: 2,
    explanation:
      'A repository is like a project folder that remembers every change ever made. This very app lives in a repo on GitHub.',
  },
  {
    question: 'What does a "commit" mean on GitHub?',
    options: [
      'Deleting a file permanently',
      'Sending a message to a teammate',
      'Saving a snapshot of your changes with a description',
      'Publishing the app to the internet',
    ],
    correctIndex: 2,
    explanation:
      'A commit is like a save point in a video game. It captures your changes and includes a short message explaining what changed.',
  },
  {
    question: 'Why do developers use pull requests?',
    options: [
      'To download files from the internet',
      'To propose changes so others can review them before they go live',
      'To delete old commits',
      'To send emails to the team',
    ],
    correctIndex: 1,
    explanation:
      "Pull requests let someone propose a change and have teammates check it before it's added to the project — avoiding accidental mistakes.",
  },
]

export function GitHubBasics() {
  useMarkVisited('github-basics')
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center px-4 py-8 sm:py-16">
      <div className="max-w-2xl w-full space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="text-5xl sm:text-6xl">&#x1F4C1;</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
            What is GitHub actually for?
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            You have a GitHub account now. But what do people actually use it for?
            Let&apos;s break it down — no jargon, promise.
          </p>
        </div>

        {/* Section 1: Repositories */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4E6;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Repositories (repos)</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            A <strong>repository</strong> (or &ldquo;repo&rdquo; for short) is like a project folder —
            but a very smart one. It stores all the files for a project and remembers
            every change ever made to them.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            This very app you&apos;re reading right now lives in a repo on GitHub. Gigi and
            the AI both work inside it.
          </p>
        </div>

        {/* Section 2: Commits */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4BE;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Commits — save points</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every time someone makes a change to the code, they create a <strong>commit</strong>.
            Think of it like a save point in a video game. You can always go back
            to any previous save point if something goes wrong.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Each commit has a short message explaining what changed, like:
            &ldquo;Add GitHub basics page&rdquo; or &ldquo;Fix spelling mistake.&rdquo;
          </p>
        </div>

        {/* Section 3: Issues */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x2705;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Issues — the to-do list</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Issues</strong> are like sticky notes or a shared to-do list. Anyone on a
            project can create an issue to say &ldquo;this is broken&rdquo; or &ldquo;we should add this
            feature.&rdquo;
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            The AI that builds this app creates issues automatically — planning what to
            build next, reporting what&apos;s done, and asking Gigi for help when it gets stuck.
          </p>
        </div>

        {/* Section 4: Pull Requests */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F500;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Pull requests — proposing changes</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            A <strong>pull request</strong> (or &ldquo;PR&rdquo;) is how someone proposes a change.
            Instead of directly editing the shared folder, they make their edits separately
            and then say: &ldquo;I&apos;d like to add this — can someone check it first?&rdquo;
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Other team members can then review and approve before the change goes live.
            It&apos;s how teams avoid accidentally breaking things.
          </p>
        </div>

        {/* Section 5: Why it matters */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F517;</span>
            <h2 className="text-2xl font-semibold text-green-800">Why does this matter to you?</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Gigi and the AI use all of these tools to build this app for you. When you
            see a new page appear or something gets fixed — that happened because:
          </p>
          <ul className="list-none space-y-2 text-gray-700 text-lg">
            <li>1. An <strong>issue</strong> was created describing the task</li>
            <li>2. The AI wrote code and created a <strong>commit</strong></li>
            <li>3. The change was merged via a <strong>pull request</strong></li>
            <li>4. The updated app was published from the <strong>repo</strong></li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed">
            Now you know the full picture!
          </p>
        </div>

        {/* Quiz */}
        <Quiz questions={quizQuestions} title="Quiz: What is GitHub for?" lessonId="github-basics" lessonTitle="What is GitHub for?" />

        {/* Next lesson */}
        <NextLesson currentId="github-basics" />
      </div>
    </div>
  )
}
