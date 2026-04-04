import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'Which of these tasks is AI best at?',
    options: [
      'Making complex ethical decisions about people',
      'Building genuine relationships and trust with clients',
      'Processing large amounts of repetitive data quickly',
      'Physical skilled work that requires adapting to the unexpected',
    ],
    correctIndex: 2,
    explanation:
      'AI excels at processing large amounts of repetitive data — sorting, categorising, finding patterns, flagging anomalies. It is much weaker at tasks that require genuine human judgment, empathy, adaptability, or physical dexterity in unpredictable environments.',
  },
  {
    question: 'True or false: AI will definitely replace all knowledge workers within 10 years.',
    options: [
      'True — AI is advancing too fast to stop',
      'False — most evidence suggests AI will change how people work, not simply eliminate jobs',
    ],
    correctIndex: 1,
    explanation:
      'Predictions of total job replacement have been made about every major technology wave — from the printing press to computers. The reality has consistently been that technology changes the mix of tasks in jobs and creates new roles, rather than simply eliminating all existing work.',
  },
  {
    question: 'What is one new type of job that AI has created?',
    options: [
      'Coal miner',
      'AI trainer — someone who teaches AI systems to improve by reviewing and correcting their outputs',
      'Switchboard operator',
      'Film projectionist',
    ],
    correctIndex: 1,
    explanation:
      'AI has created new roles that did not exist before: AI trainers, prompt engineers, AI ethicists, model safety testers, and data reviewers. These jobs involve human judgment and expertise that AI itself cannot provide.',
  },
  {
    question: 'How do many radiologists use AI today?',
    options: [
      'AI has replaced radiologists entirely in most hospitals',
      'AI writes the radiology report and the radiologist signs it without looking',
      'AI acts as a second opinion — flagging potential issues for the radiologist to review',
      'Radiologists refuse to use AI on principle',
    ],
    correctIndex: 2,
    explanation:
      'In many hospitals, AI tools scan medical images and highlight areas that may be worth closer attention. The radiologist then applies their expertise to the flagged areas. This makes the radiologist more thorough and efficient — it does not replace them.',
  },
]

export function AIAndJobs() {
  useMarkVisited('ai-and-jobs')
  useLessonVisit('ai-and-jobs')
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4BC;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and jobs &mdash; what is really changing?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Headlines about AI and jobs can feel alarming. Here is a more grounded,
            balanced look at what is actually happening.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-jobs" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">We have been here before</h2>
          <p className="text-gray-600 leading-relaxed">
            Every major technological shift in history has raised fears about jobs. The printing press,
            the steam engine, electricity, computers, the internet &mdash; each one prompted predictions
            that huge numbers of workers would become redundant.
          </p>
          <p className="text-gray-600 leading-relaxed">
            In each case, the reality was more nuanced: some jobs disappeared, many changed, and new jobs
            appeared that no one had imagined before. There is no guarantee AI will follow exactly the
            same pattern &mdash; but history suggests the full picture is always more complex than the headlines.
          </p>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="text-emerald-800 font-semibold text-sm">Not a prediction, just a framework</p>
            <p className="text-emerald-700 text-sm leading-relaxed mt-1">
              No one knows exactly how AI will affect employment over the next 10&ndash;20 years.
              What we can do is understand the patterns already visible today.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What AI is good at automating</h2>
          <p className="text-gray-600 leading-relaxed">
            AI is particularly effective at tasks that involve processing large amounts of information
            in predictable ways:
          </p>
          <div className="space-y-3">
            {[
              { label: 'Sorting and categorising', text: 'Reading thousands of emails and routing them to the right team. Classifying customer support tickets. Flagging spam. Screening job applications for basic criteria.' },
              { label: 'Pattern recognition', text: 'Spotting unusual transactions that might be fraud. Identifying whether a medical image shows a specific feature. Recognising objects in photos or videos.' },
              { label: 'Generating first drafts', text: 'Writing a standard email reply, producing a summary of a long report, translating a document. AI can produce a workable first version quickly — a human then reviews and refines it.' },
              { label: 'Answering common questions', text: 'Customer service chatbots handling "where is my order?" or "how do I reset my password?" — freeing human agents for complex cases that need empathy and judgment.' },
            ].map(({ label, text }) => (
              <div key={label} className="bg-emerald-50 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-emerald-800 text-sm">{label}</p>
                <p className="text-emerald-700 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What AI cannot replace</h2>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F91D;',
                title: 'Genuine human relationships',
                text: 'A patient who has just received a difficult diagnosis needs a doctor who listens and cares, not just one who processes information. A client hiring a lawyer or financial adviser is partly buying trust in a person. AI can assist, but it cannot be that person.',
              },
              {
                icon: '&#x1F3A8;',
                title: 'Creativity grounded in lived experience',
                text: 'AI can generate text, images, and music at scale. What it cannot do is draw on a lifetime of human experience, emotion, and cultural meaning. The most resonant creative work comes from people with something genuine to say.',
              },
              {
                icon: '&#x2696;&#xFE0F;',
                title: 'Ethical judgment in complex situations',
                text: 'Deciding how to treat a difficult employee situation, navigating a sensitive negotiation, making a judgment call when the rules do not quite fit — these require human wisdom, context-reading, and accountability.',
              },
              {
                icon: '&#x1F528;',
                title: 'Physical skilled work in unpredictable environments',
                text: 'A plumber dealing with an unusual pipe configuration, an electrician solving a problem in an old building, a nurse managing a patient who is distressed — these require hands, adaptability, and on-the-spot judgment that robots still struggle with.',
              },
            ].map(({ icon, title, text }) => (
              <div key={title} className="flex gap-3 items-start">
                <span className="text-2xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-gray-800 mb-1">{title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Jobs that are changing, not disappearing</h2>
          <p className="text-gray-600 leading-relaxed">
            In many fields, AI is changing <em>what people spend their time on</em> rather than
            eliminating their roles entirely:
          </p>
          <div className="space-y-3">
            {[
              { role: 'Radiologists', change: 'AI scans images and flags areas of concern. Radiologists now spend more time on complex cases and less time on routine screening — and catch more problems with the AI as a second opinion.' },
              { role: 'Customer support teams', change: 'Chatbots handle the most common queries. Human agents now mostly deal with complex, emotional, or unusual situations — which are harder and more meaningful to solve.' },
              { role: 'Lawyers and paralegals', change: 'AI can review thousands of documents in hours instead of weeks. Lawyers spend more time on strategy, negotiation, and advocacy, and less on document review.' },
              { role: 'Writers and marketers', change: 'AI generates first drafts and variations quickly. Humans edit, direct, and bring the creative judgment that makes the difference between acceptable content and genuinely good content.' },
            ].map(({ role, change }) => (
              <div key={role} className="flex gap-3 items-start">
                <span className="text-emerald-500 flex-shrink-0 font-bold mt-0.5">&#x2192;</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{change}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">New jobs AI has created</h2>
          <p className="text-gray-600 leading-relaxed">
            Just as the internet created jobs that did not exist before (web designer, social media manager,
            SEO specialist, app developer), AI is creating new roles:
          </p>
          <div className="space-y-2">
            {[
              { job: 'AI trainer', desc: 'Reviews AI outputs, corrects mistakes, and provides feedback that helps improve the model.' },
              { job: 'Prompt engineer', desc: 'Designs the instructions and context given to AI systems to get the most useful results.' },
              { job: 'AI ethicist', desc: 'Assesses whether AI systems are being used fairly and safely, and advises on policy.' },
              { job: 'Model safety tester', desc: 'Tries to find ways an AI model can be misused or caused to behave badly, so those issues can be fixed before deployment.' },
              { job: 'Data reviewer', desc: 'Checks whether the data used to train AI systems is accurate, representative, and fairly labelled.' },
            ].map(({ job, desc }) => (
              <div key={job} className="bg-blue-50 rounded-xl p-3 flex gap-3">
                <span className="text-blue-500 font-bold text-sm flex-shrink-0 mt-0.5">&#x2022;</span>
                <div>
                  <span className="font-semibold text-blue-800 text-sm">{job}: </span>
                  <span className="text-blue-700 text-sm">{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-bold text-blue-800">What this means for you</h2>
          <p className="text-blue-700 leading-relaxed">
            The most practical response to AI in the workplace is not to fear it or ignore it &mdash;
            it is to learn how to work with it. People who understand what AI can and cannot do, and
            who can use it as a tool, are likely to find it makes them more capable, not less relevant.
          </p>
          <p className="text-blue-700 leading-relaxed">
            The skills that remain most valuable are the ones AI struggles with: judgment, creativity,
            relationships, and adaptability. Investing in those &mdash; and learning to use AI as a
            powerful assistant &mdash; is the most durable strategy.
          </p>
        </div>

        <Quiz
          lessonId="ai-and-jobs"
          lessonTitle="AI and jobs — what is really changing?"
          questions={quizQuestions}
        />

        <LessonNote lessonId="ai-and-jobs" />

        <RelatedLessons currentId="ai-and-jobs" />

        <NextLesson currentId="ai-and-jobs" />

      </div>
    </div>
  )
}
