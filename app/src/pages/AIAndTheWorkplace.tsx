import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { LessonFeedback } from '../components/LessonFeedback'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { ShareButton } from '../components/ShareButton'
import { KeyTakeaways } from '../components/KeyTakeaways'

const LESSON_TITLE = 'AI and the workplace'

const KEY_TAKEAWAYS = [
  'AI writing assistants (like Microsoft Copilot, Notion AI, and Grammarly AI) help people draft emails, reports, and presentations faster — but the human still needs to check facts, tone, and accuracy.',
  'AI meeting tools can transcribe spoken conversations in real time, generate summaries, and list action items automatically — saving hours of note-taking every week.',
  'AI scheduling tools analyse calendars, preferences, and time zones to suggest meeting slots and protect focused work time — used by tools like Reclaim.ai and Motion.',
  'The productivity gains from AI at work are real, but so are the concerns: some roles are being reduced, and workers in lower-paid, routine jobs face the greatest displacement risk.',
  'Using AI responsibly at work means checking its output, protecting confidential information (never paste sensitive data into a public AI tool), and being transparent with colleagues about when AI helped you.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is the most important thing to do after using an AI writing assistant to draft a work email or report?',
    options: [
      'Send it immediately — AI output is usually more accurate than human writing and rarely needs checking',
      'Read it carefully and check it for accuracy, tone, and any errors before sending, since AI can confidently produce wrong or inappropriate content',
      'Add a disclaimer at the bottom noting that the email was written by AI, as this is now required by UK law',
      "Run it through a second AI tool to check the first AI's work, then send it without further review",
    ],
    correctIndex: 1,
    explanation:
      'AI writing assistants can produce fluent, convincing text that is factually wrong, subtly off in tone, or missing key context. The human remains responsible for the content of anything they send. Checking the output carefully — for accuracy, appropriateness, and completeness — is essential before using AI-generated text in a professional context.',
    hint: 'Think about what AI gets wrong even when it sounds confident.',
  },
  {
    question: 'Which of the following best describes what AI meeting transcription tools like Otter.ai or Microsoft Teams Copilot do?',
    options: [
      'They record video of all meeting participants and use facial recognition to identify who said what, creating a searchable video library',
      'They listen to spoken conversation during a meeting, convert speech to text in real time, and can automatically generate a summary with key decisions and action items',
      'They analyse the mood and emotional state of each speaker during the meeting and produce a wellbeing report for HR afterwards',
      "They automatically block out time in attendees' calendars for follow-up tasks based on what was discussed, without any human review needed",
    ],
    correctIndex: 1,
    explanation:
      'AI meeting tools like Otter.ai, Teams Copilot, and Fireflies.ai use speech recognition to turn spoken words into text in real time. They can then use a language model to summarise what was discussed, highlight key decisions, and list action items — saving people from having to take detailed notes. The quality varies, and AI can mishear words or misattribute who said what, so human review is still important.',
    hint: 'Think about what these tools do with spoken audio during a meeting.',
  },
  {
    question: 'Why do experts worry about the impact of AI on lower-paid, routine office jobs more than on senior or creative roles?',
    options: [
      'Lower-paid workers are less likely to be able to afford to retrain, so they are disproportionately affected even if the technology affects all roles equally',
      'Routine, repetitive tasks — like data entry, basic report generation, and standard email responses — are exactly what AI is best at automating, while creative, strategic, and interpersonal work is harder to automate',
      'Senior workers have union protections that prevent companies from replacing them with AI, whereas lower-paid workers do not have equivalent legal rights',
      'AI tools are deliberately designed by large technology companies to protect higher-earning professionals and replace lower-paid workers, as this maximises profit',
    ],
    correctIndex: 1,
    explanation:
      'AI is generally better at tasks that are structured, predictable, and rule-based — things like processing forms, generating standard reports, answering common customer queries, or sorting data. These tasks are disproportionately found in lower-paid administrative roles. Senior roles tend to involve more judgment, stakeholder management, strategic thinking, and creativity — areas where AI is weaker. This creates an uneven risk of displacement across the income spectrum.',
    hint: 'Think about which types of tasks AI is best at automating.',
  },
  {
    question: 'What is the key risk of pasting confidential work documents or client data into a public AI chatbot like the free version of ChatGPT?',
    options: [
      "The AI will refuse to process the document and report the user to the Information Commissioner's Office automatically",
      'The AI will insert errors into the document deliberately to test whether the user is paying attention to its output',
      'The confidential information may be used to train future AI models or be accessible to the company running the AI service, creating data privacy and confidentiality risks',
      "The user's employer will be automatically notified that confidential data has been shared outside the organisation's network",
    ],
    correctIndex: 2,
    explanation:
      "Most public AI services process the text you send them on their servers, and depending on their terms of service, that data may be used to improve future models. This means that confidential client details, internal business strategies, personal data, or commercially sensitive information could potentially leave your control. Many organisations have policies prohibiting the use of public AI tools with confidential data. Enterprise versions of these tools (like Microsoft 365 Copilot) are designed with stronger data protection, but it is still important to read the terms carefully.",
    hint: 'Think about where the data goes when you send it to an AI service.',
  },
  {
    question: 'What do AI scheduling tools like Reclaim.ai or Motion do that traditional calendar apps cannot?',
    options: [
      'They book meeting rooms, order catering, and send invitations to external attendees on your behalf without any human input',
      'They analyse your existing commitments, work patterns, and priorities to automatically suggest optimal meeting times, protect blocks for focused work, and reschedule tasks when conflicts arise',
      'They use AI to read your emails and automatically decline meeting invitations that conflict with your stated priorities, notifying the sender on your behalf',
      "They track how productively you use your time and send weekly reports to your manager comparing your output with colleagues' performance data",
    ],
    correctIndex: 1,
    explanation:
      'AI scheduling tools go beyond traditional calendar apps by understanding context. They can analyse when you do your best focused work, protect that time automatically, find meeting slots that work for multiple people across time zones, and dynamically reschedule tasks when something urgent comes up. Tools like Reclaim.ai and Motion treat your calendar as a dynamic system rather than a static grid, helping reduce the cognitive load of scheduling while protecting time for deep work.',
    hint: 'Think about what these tools do that a basic calendar app cannot.',
  },
]

export function AIAndTheWorkplace() {
  useMarkVisited('ai-and-the-workplace')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">💼</span>
            <div>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">AI in the real world</p>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{LESSON_TITLE}</h1>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            AI is quietly transforming how we work — from drafting emails to running meetings to managing our calendars.
            Here is what is changing, what it means for jobs, and how to use it responsibly.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <CompletedBadge lessonId="ai-and-the-workplace" />
            <ReviewLaterButton lessonId="ai-and-the-workplace" />
            <ShareButton lessonTitle={LESSON_TITLE} />
          </div>
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        {/* Content */}
        <div className="prose prose-gray dark:prose-invert max-w-none mb-10 space-y-6">

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-3">AI writing assistants — your first draft, not your final word</h2>
            <p className="text-gray-700 dark:text-gray-300">
              One of the most widely used AI tools in offices today is the writing assistant. Microsoft Copilot (built into Word, Outlook, and Teams),
              Notion AI, Grammarly AI, and similar tools can help you draft an email, summarise a long document, improve your writing style, or generate
              a first version of a report from a few bullet points.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              These tools work by understanding the context you give them and generating text that fits. If you tell Copilot &quot;write a polite email
              declining this meeting request because I have a deadline on Friday&quot;, it will produce a reasonable draft in seconds.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              But there is an important catch: <strong>AI writing assistants can confidently produce text that is wrong, off-tone, or missing
              critical context.</strong> A tool does not know your relationship with the recipient, the office politics involved, or whether the
              figures it cites are accurate. The human always needs to read, check, and take responsibility for anything sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-3">AI for meetings — from transcription to summaries</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Meetings are one of the biggest time costs in office work. AI is now helping to make them more productive — and easier to act on
              afterwards.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Tools like <strong>Otter.ai</strong>, <strong>Microsoft Teams Copilot</strong>, and <strong>Fireflies.ai</strong> can listen to a
              meeting in real time, convert speech to text as people speak, and — once the meeting ends — automatically generate a written summary
              with key decisions and action items clearly listed.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              This saves the person who used to frantically type notes throughout the meeting. It also means people who miss a meeting can catch up
              quickly. And if you want to search for something specific that was said three weeks ago, you can search the transcript.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The technology is not perfect: AI can mishear words (especially names and technical terms), occasionally misattribute who said what,
              and sometimes misunderstand irony or context. Human review of summaries before sharing them is still important.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-3">AI scheduling — your calendar as a living system</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Traditional calendar apps show you what you have booked. AI scheduling tools go much further — they actively manage your time.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Tools like <strong>Reclaim.ai</strong> and <strong>Motion</strong> learn when you do your best focused work (perhaps you concentrate
              best in the mornings), protect blocks of time for important tasks, and automatically find meeting slots that work for everyone involved —
              including across different time zones.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              If an urgent task comes in on Tuesday, the AI can automatically reschedule other work to make room. If your calendar fills up with
              back-to-back meetings, it can flag that you have no time left for the work those meetings are supposed to produce.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              For people juggling complex, fragmented workdays, this kind of intelligent scheduling can significantly reduce mental load.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-3">AI for email — sorting, drafting, and responding</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Email overload is one of the most common complaints in modern workplaces. AI is starting to help here too.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Inbox sorting tools use AI to identify which emails need urgent attention, which are low priority, and which can be safely archived
              or unsubscribed from. Some tools (like Google Smart Reply) suggest short reply options so you can respond with a single tap.
              More advanced tools can draft full replies based on the context of the email thread.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              As with all AI writing, the output needs checking. A tool cannot know that the person emailing you is a key client you need to handle
              carefully, or that the casual tone it suggested would be inappropriate in your organisation&apos;s culture.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-3">What about jobs — the bigger picture</h2>
            <p className="text-gray-700 dark:text-gray-300">
              AI is genuinely changing the nature of many jobs. For some people, it is making them more productive — they can produce better work
              in less time, take on more interesting tasks, and spend less time on repetitive admin.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              But there is also displacement. Jobs that consist largely of routine, structured tasks — data entry, basic report writing, standard
              customer email responses — are the most vulnerable, because these are exactly the tasks AI handles well.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Research consistently finds that lower-paid workers in administrative and clerical roles face a greater risk than higher-paid
              professionals whose work involves more judgment, relationship-building, creativity, and strategic thinking. This creates a real risk
              that AI accelerates inequality if it is not managed carefully through retraining programmes, safety nets, and thoughtful workforce planning.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              It is also worth noting that predictions of mass job displacement have been made before (with computers, with the internet) and the
              reality was more nuanced: new kinds of work emerged. But the pace of change with AI is faster, and the adjustment period is shorter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-3">Using AI at work responsibly</h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you use AI tools at work — or plan to — there are some important principles to follow:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Never paste confidential information into a public AI tool.</strong> The free versions of ChatGPT, Claude, and similar tools
                process data on external servers. Sensitive client data, internal financial figures, or personal employee information could leave your
                control. Use enterprise versions that offer data protection guarantees, or check your organisation&apos;s policy first.
              </li>
              <li>
                <strong>Always check AI output before using it.</strong> You are responsible for everything you send or submit — AI simply provides
                a draft. Fact-check, proofread, and adjust for tone and context.
              </li>
              <li>
                <strong>Be transparent when it matters.</strong> If a client or colleague would reasonably expect to know that a document was drafted
                with AI assistance, it is good practice to say so. Norms around this are still evolving.
              </li>
              <li>
                <strong>Learn what your organisation allows.</strong> Many employers are developing AI use policies. Familiarise yourself with what
                tools are approved and what data handling rules apply.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-8 mb-3">The bottom line</h2>
            <p className="text-gray-700 dark:text-gray-300">
              AI is already changing how millions of people work every day. For most people, the most useful framing is not &quot;will AI replace me?&quot; but
              &quot;how can I work alongside AI more effectively?&quot; — while staying clear-eyed about the output quality, the data risks, and the broader
              impact on colleagues and society.
            </p>
          </section>
        </div>

        <LessonNote lessonId="ai-and-the-workplace" />

        <Quiz lessonId="ai-and-the-workplace" questions={quizQuestions} lessonTitle={LESSON_TITLE} />

        <LessonRating lessonId="ai-and-the-workplace" />
        <LessonFeedback lessonId="ai-and-the-workplace" />

        <RelatedLessons currentId="ai-and-the-workplace" />

        <NextLesson currentId="ai-and-the-workplace" />
      </div>
    </div>
  )
}
