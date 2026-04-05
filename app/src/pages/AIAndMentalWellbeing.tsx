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
import { DifficultyBadge } from '../components/DifficultyBadge'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does the AI coaching app BetterUp do?',
    options: [
      'It monitors employees\' screens and keystrokes to report productivity to managers',
      'It provides personalised coaching sessions and mental wellbeing support through a combination of AI matching and human coaches',
      'It replaces human therapists entirely with AI chatbot conversations',
      'It tracks employees\' sleep patterns via a smartwatch and sends alerts when rest is poor',
    ],
    correctIndex: 1,
    explanation:
      'BetterUp is a professional coaching platform that uses AI to match employees with human coaches, track progress over time, and surface patterns across teams. It is not a replacement for therapy — it focuses on professional development, resilience, and wellbeing at work. Companies like Microsoft, Airbnb, and Chevron use it to offer coaching at scale to employees who would otherwise never have access to a professional coach.',
    hint: 'BetterUp combines AI matching with real human coaches.',
  },
  {
    question: 'What is the main ethical concern about AI tools that monitor employee communication patterns for signs of burnout?',
    options: [
      'The tools are too expensive for most companies to afford',
      'Monitoring employee behaviour without clear consent invades privacy and can create a culture of surveillance that increases rather than reduces stress',
      'The tools cannot accurately detect burnout because it is too complex for AI to understand',
      'The tools only work for employees who use email rather than chat applications',
    ],
    correctIndex: 1,
    explanation:
      'Some workplace AI tools analyse email response times, meeting patterns, communication frequency, and even sentiment in messages to flag employees who might be burning out. Even when the intention is supportive, employees may not know this monitoring is happening — and the knowledge that your messages are being analysed can itself cause anxiety. GDPR and similar laws require employers to be transparent about data collection. Critics argue the better approach is to create workplaces that reduce burnout rather than monitor for it.',
    hint: 'Think about what it feels like to know your work messages are being read by an algorithm.',
  },
  {
    question: 'What is Wysa?',
    options: [
      'A surveillance tool that tracks employee location in the office',
      'An AI mental health chatbot that offers evidence-based exercises and a space for employees to express how they are feeling — anonymously',
      'A platform that replaces one-to-one manager conversations with AI-generated performance reviews',
      'A scheduling app that uses AI to prevent meetings being booked late in the day',
    ],
    correctIndex: 1,
    explanation:
      'Wysa is an AI chatbot designed to support mental wellbeing. It uses techniques from cognitive behavioural therapy (CBT) and mindfulness to help users manage stress, anxiety, and low mood. It is used both by individuals and by employers as a workplace wellbeing tool. Crucially, it operates anonymously — the employer does not see individual conversations, only aggregate data. This anonymity is what encourages employees to actually use it.',
    hint: 'Wysa is a chatbot — and the key feature is that employees use it privately.',
  },
  {
    question: 'Under GDPR (the EU data protection law), what must employers do before using AI tools to monitor employee behaviour?',
    options: [
      'Nothing — GDPR does not apply to data collected within a workplace',
      'Get approval from the government before any monitoring begins',
      'Be transparent with employees about what data is collected, why, and how it is used — and in some cases obtain explicit consent',
      'Only use tools made by companies based in the EU',
    ],
    correctIndex: 2,
    explanation:
      'GDPR applies to any personal data collected about employees, including behavioural data from workplace tools. Employers must have a lawful basis for processing data, inform employees clearly about what is being collected and why, and ensure data is not kept longer than necessary. Simply burying monitoring in a lengthy employment contract does not meet the GDPR standard of transparency. Employees also have rights to access their data and in some cases to object to its processing.',
    hint: 'GDPR is about transparency and giving people control over their own data.',
  },
  {
    question: 'What is one practical way an employee can protect their wellbeing in an AI-augmented workplace?',
    options: [
      'Refuse to use any workplace software that involves AI',
      'Check what data your employer\'s tools collect about you, use provided wellbeing resources proactively, and set clear boundaries between work and personal time',
      'Avoid using any messaging or email tools so that there is no data to collect',
      'Request that all AI tools be removed from the workplace through a formal complaint',
    ],
    correctIndex: 1,
    explanation:
      'The most effective response is to be informed and proactive. Most large employers must publish a privacy notice explaining what employee data they collect. Reading this notice, understanding what wellbeing tools are available (and using them before reaching crisis point), setting firm boundaries around availability outside working hours, and having open conversations with managers about workload are all practical steps that do not require refusing technology entirely. Knowing your rights under data protection law is also useful.',
    hint: 'Being informed and proactive is more effective than refusing to engage.',
  },
]

export function AIAndMentalWellbeing() {
  useMarkVisited('ai-and-mental-wellbeing-at-work')

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F9D8;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and mental wellbeing at work
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            From coaching apps that support your resilience to tools that monitor your
            messages for signs of stress &mdash; how AI is reshaping workplace wellbeing,
            and what you should know about it.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-mental-wellbeing-at-work" />
          <ShareButton lessonTitle="AI and mental wellbeing at work" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI coaching apps: support at scale</h2>
          <p className="text-gray-600 leading-relaxed">
            Professional coaching &mdash; working with someone to build resilience, improve
            decision-making, and manage stress &mdash; used to be reserved for senior executives
            at large companies. AI is making coaching accessible to far more people.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CB;',
                label: 'BetterUp',
                text: 'BetterUp is a coaching platform used by companies including Microsoft, Airbnb, and Chevron. It uses AI to match employees with human coaches based on their goals and communication style, tracks progress over time, and provides insights to HR teams (at an aggregate level, not individually). Employees get access to a professional coach they would never have had otherwise. Studies have found BetterUp participants report lower stress and higher performance.',
              },
              {
                icon: '&#x1F4AC;',
                label: 'Wysa',
                text: "Wysa is an AI mental health chatbot that uses techniques from cognitive behavioural therapy and mindfulness to help users manage anxiety, stress, and low mood. Crucially, it is anonymous — the employer sees only aggregate wellbeing trends, never individual conversations. This is what makes employees willing to use it honestly. Wysa is used in over 65 countries and by companies including Aetna and several NHS trusts.",
              },
              {
                icon: '&#x1F4F1;',
                label: 'The limits of AI coaching',
                text: "AI coaching tools are not therapy and are not appropriate for serious mental health conditions. They work best as an early intervention — catching stress before it becomes crisis. The risk is that employers use them to avoid addressing the structural causes of stress (excessive workload, poor management, lack of job security) rather than fixing those root causes.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Workplace surveillance: when monitoring becomes intrusion</h2>
          <p className="text-gray-600 leading-relaxed">
            Since the shift to remote and hybrid working, many employers have adopted AI-powered
            tools to monitor employee activity. Some are transparent and well-intentioned;
            others cross ethical and legal lines.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="font-semibold text-gray-800 text-sm mb-2">What some employers monitor</p>
              <ul className="text-gray-600 text-sm space-y-1 leading-relaxed">
                <li>Keystroke and mouse activity levels</li>
                <li>Screenshots taken at random intervals</li>
                <li>Email and chat message frequency and timing</li>
                <li>Meeting attendance and camera-on rates</li>
                <li>Browser activity and application usage</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-xl p-4">
              <p className="font-semibold text-red-800 text-sm mb-2">The concerns</p>
              <ul className="text-red-700 text-sm space-y-1 leading-relaxed">
                <li>Creates a culture of distrust and anxiety</li>
                <li>Often not disclosed clearly to employees</li>
                <li>Measures activity, not output or quality</li>
                <li>Disproportionate impact on neurodivergent employees</li>
                <li>May breach GDPR and employment law</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 mt-2">
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>The research finding: </strong>
              Studies consistently show that heavy monitoring increases employee stress and
              reduces trust &mdash; making the wellbeing problem worse, not better. The intention
              to support employees and the practice of surveilling them are often in direct conflict.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI burnout detection: support or surveillance?</h2>
          <p className="text-gray-600 leading-relaxed">
            Some companies use AI to analyse communication patterns &mdash; email response times,
            meeting load, message sentiment &mdash; to identify employees who may be at risk of
            burnout before they reach crisis point. The intention is supportive. The execution
            raises serious questions.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F7E2;',
                label: 'The potential benefit',
                text: 'Early detection could allow managers to intervene with a workload adjustment or conversation weeks before an employee would have raised the issue themselves. Burned-out employees often do not ask for help until they are already in crisis. An AI flag might prompt a proactive check-in.',
              },
              {
                icon: '&#x1F534;',
                label: 'The consent problem',
                text: "In most implementations, employees don't know their communication patterns are being analysed for mental health signals. Even with good intentions, this is a form of health surveillance. GDPR classifies mental health data as 'special category' data requiring explicit consent and strong protections.",
              },
              {
                icon: '&#x1F7E1;',
                label: 'The chilling effect',
                text: 'Knowing that messages are analysed for sentiment may cause employees to self-censor — presenting as artificially positive — which undermines the psychological safety that is actually the foundation of good mental health at work.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Your rights and practical steps</h2>
          <p className="text-gray-600 leading-relaxed">
            Whether you are an employee or a manager, understanding what AI is doing in your
            workplace &mdash; and what rights you have &mdash; helps you navigate this landscape.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4DC;',
                label: 'Read your employer\u2019s privacy notice',
                text: 'Under GDPR, employers must tell you what data they collect about you and why. This is usually in your employment contract or a separate privacy notice. Reading it takes 10 minutes and tells you a great deal about what monitoring is in place.',
              },
              {
                icon: '&#x2705;',
                label: 'Use wellbeing resources proactively',
                text: 'If your employer offers a coaching app, counselling service, or Employee Assistance Programme, use it before you reach a crisis point. These tools work better as prevention than cure, and they are typically confidential.',
              },
              {
                icon: '&#x1F551;',
                label: 'Set boundaries around availability',
                text: 'AI tools that track response times can inadvertently reward constant availability. Being explicit with your manager about your working hours and sticking to them is both better for your wellbeing and a signal to your organisation about what a sustainable work culture looks like.',
              },
              {
                icon: '&#x1F5E3;&#xFE0F;',
                label: 'Have the conversation',
                text: 'No AI tool replaces a direct conversation about workload or stress. If you feel overwhelmed, raising it with your manager is more effective \u2014 and legally more protected \u2014 than hoping an algorithm will notice.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-mental-wellbeing-at-work" />
        <LessonNote lessonId="ai-and-mental-wellbeing-at-work" />

        <Quiz questions={quizQuestions} lessonId="ai-and-mental-wellbeing-at-work" lessonTitle="AI and mental wellbeing at work" />

        <LessonFeedback lessonId="ai-and-mental-wellbeing-at-work" />
        <LessonRating lessonId="ai-and-mental-wellbeing-at-work" />
        <RelatedLessons currentId="ai-and-mental-wellbeing-at-work" />
        <NextLesson currentId="ai-and-mental-wellbeing-at-work" />
      </div>
    </div>
  )
}
