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

const LESSON_TITLE = 'AI and addiction and recovery'

const KEY_TAKEAWAYS = [
  'AI screening tools can identify signs of alcohol and drug dependency in routine NHS appointments — asking questions and flagging risk scores before a person has even sought help for addiction.',
  'Recovery chatbots like Woebot provide 24/7 emotional support and cognitive behavioural therapy exercises for people in recovery — filling the gap between face-to-face support sessions.',
  'AI can personalise treatment plans based on a person\'s history, the substance involved, and what has worked for them before — moving away from one-size-fits-all approaches.',
  'Relapse prediction models analyse patterns in phone usage, sleep, and activity to detect early warning signs that someone may be at risk — giving clinicians a chance to intervene early.',
  'Privacy concerns are significant: data about addiction and recovery is highly sensitive, and the people most likely to need these tools are also those most vulnerable to misuse of their data.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How do AI screening tools help identify addiction problems in NHS settings?',
    options: [
      'They monitor patients\' online activity and social media posts and alert GPs when they detect language associated with substance use',
      'They ask structured questions during routine appointments and analyse responses to flag people who may be at risk of or affected by addiction — before they have sought help',
      'They analyse blood test results using AI to detect chemical markers of alcohol or drug use, providing objective evidence without requiring the patient to disclose anything',
      'They cross-reference NHS prescribing data with pharmacy records to identify patients who may be misusing prescribed medications like opioids or benzodiazepines',
    ],
    correctIndex: 1,
    explanation:
      'Tools like AUDIT (Alcohol Use Disorders Identification Test) have been adapted into digital, AI-enhanced versions used in GP surgeries and A&E departments. A patient answering questions about their health — sometimes without realising the questions are specifically about alcohol or drug use — generates a risk score. If the score is high, the system flags it for the GP or practice nurse to follow up. The advantage is that many people with addiction problems never identify themselves as needing help, so proactive screening can reach people who would otherwise be missed. NHS Scotland has been particularly active in rolling out digital AUDIT tools as part of its alcohol brief interventions programme.',
    hint: 'Think about identifying risk before someone actively seeks help for addiction.',
  },
  {
    question: 'What do AI recovery chatbots like Woebot provide to people in recovery?',
    options: [
      'They automatically arrange appointments with NHS addiction services and send appointment reminders to ensure people attend their scheduled sessions',
      'They provide 24/7 emotional support, cognitive behavioural therapy exercises, and mood tracking — available between face-to-face appointments or when services are closed',
      'They prescribe medication adjustments for people on medication-assisted treatment, acting as a digital prescriber under supervision from a remote pharmacist',
      'They connect people in recovery anonymously with others at the same stage of their journey, facilitating peer support through an encrypted group chat platform',
    ],
    correctIndex: 1,
    explanation:
      'Recovery is not just about treatment — it is about maintaining motivation and managing cravings and difficult emotions over months and years. NHS addiction services typically offer appointments once a week or once a fortnight. The gap between sessions — particularly in evenings, weekends, and at 3am when cravings often peak — is when relapse most often occurs. Chatbots like Woebot, which uses conversational AI combined with cognitive behavioural therapy (CBT) techniques, can be available at any time. They ask how you are feeling, suggest coping strategies, help users identify thought patterns that lead to cravings, and provide a non-judgemental space to talk. They are not a replacement for human care, but a complement to it.',
    hint: 'Think about what happens between appointments and at times when human support is unavailable.',
  },
  {
    question: 'How does AI help personalise addiction treatment?',
    options: [
      'It recommends the cheapest available treatment option based on what the NHS has capacity for in the patient\'s local area at that time',
      'It analyses a person\'s history, the substance involved, previous treatment outcomes, and personal circumstances to suggest the most effective treatment approach for that individual',
      'It selects a standard treatment package from a menu of approved NHS options based on the person\'s age, gender, and the duration of their addiction',
      'It uses personality profiling questionnaires to match patients with a specific therapist whose communication style is predicted to be most compatible with the patient\'s personality',
    ],
    correctIndex: 1,
    explanation:
      'Addiction treatment has traditionally been delivered in a relatively standardised way: detox, then a structured programme of therapy and group support. But research shows that what works for one person may not work for another. Someone addicted to alcohol who has had multiple previous treatment attempts, has experienced childhood trauma, and has social isolation as a trigger needs a different approach from someone in a first treatment episode with strong family support. AI systems that can analyse all these factors — previous treatment records, social circumstances, psychological assessments, comorbid conditions — can suggest more tailored treatment pathways. This is already being explored in pilot programmes through Change Grow Live and other UK addiction treatment providers.',
    hint: 'Think about moving away from one-size-fits-all treatment towards approaches tailored to the individual.',
  },
  {
    question: 'What does relapse prediction AI monitor to detect early warning signs?',
    options: [
      'It monitors social media activity for posts that contain language associated with substance use or emotional distress, alerting a keyworker when concerning content is detected',
      'It analyses patterns in phone usage, sleep, location, and activity levels — detecting changes that historically correlate with increased relapse risk',
      'It tracks attendance at NHS appointments and 12-step meetings, generating an alert if someone misses two consecutive scheduled support sessions',
      'It monitors financial transactions to detect purchases at off-licences or pharmacies that might indicate a return to substance use',
    ],
    correctIndex: 1,
    explanation:
      'Research has found that changes in behaviour — particularly sleep disruption, reduced physical activity, increased social isolation, and changes in smartphone usage patterns — often precede relapse by several days. AI systems using smartphone sensor data (accelerometer, GPS, call logs) can detect these changes and generate alerts for clinicians or keyworkers to proactively reach out. Studies from the University of Michigan and elsewhere have shown that these passive sensing approaches can predict relapse risk with reasonable accuracy. The technology has been trialled in some NHS-linked recovery programmes, though it is not yet widespread in the UK.',
    hint: 'Think about the behavioural patterns that often change before a person relapses.',
  },
  {
    question: 'What privacy concern is particularly significant for AI in addiction and recovery?',
    options: [
      'AI tools are often developed by commercial companies that may sell anonymised user data to pharmaceutical companies seeking to understand addiction patterns for drug development',
      'Data about addiction and recovery is among the most sensitive health information — its misuse could affect employment, insurance, relationships, and custody proceedings for vulnerable people',
      'AI systems used in addiction treatment often have poor security and are frequently targeted by hackers seeking personal health data to sell on the dark web',
      'Recovery chatbots are required by law to report admissions of illegal drug use to the police, which discourages people from being honest about their struggles',
    ],
    correctIndex: 1,
    explanation:
      'Addiction is heavily stigmatised. A person whose employer, insurer, or family court discovers that they have been in treatment for alcohol or drug dependence may face very serious consequences: job loss, increased insurance premiums, problems in custody battles over children. This means that data about addiction and recovery must be handled with exceptional care. Under UK GDPR and the Health and Social Care Act, health data has the highest level of protection. But AI tools in this space — particularly apps and chatbots — may be operated by commercial companies rather than NHS providers, with different data protection standards. People using these tools should check carefully how their data is stored, who can access it, and whether it is shared with any third parties.',
    hint: 'Think about what could go wrong if highly sensitive health data about addiction were misused.',
  },
]

export function AIAndAddictionAndRecovery() {
  useMarkVisited('ai-and-addiction-and-recovery')

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F90D;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and addiction and recovery
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI is helping the NHS screen for addiction earlier, support people in recovery between
            appointments, personalise treatment, and predict relapse — with important questions about privacy and trust.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-addiction-and-recovery" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The scale of addiction in the UK</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Addiction is one of the UK's most significant public health challenges — affecting not just individuals but families, workplaces, and the NHS itself.
          </p>
          <div className="space-y-2">
            {[
              'Around 602,000 people in England were in contact with drug and alcohol services in 2022 to 2023 — and many more have unmet need',
              'Alcohol misuse costs the NHS approximately £3.5 billion per year, and the wider economy around £21 billion',
              'Drug-related deaths in Scotland are among the highest in Europe — driving significant investment in AI-assisted treatment approaches',
              'The average waiting time for treatment can be weeks or months, during which time people may relapse or disengage from services entirely',
              'AI tools offer the possibility of earlier identification, faster support, and more personalised care — all critical given the pressure on services',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-purple-600 dark:text-purple-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI screening — finding people who haven't asked for help</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Many people with addiction problems never identify themselves as needing help. AI-enhanced screening tools aim to find them before a crisis.
          </p>
          <div className="bg-blue-50 dark:bg-blue-950 rounded-xl p-4">
            <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-1">Alcohol Brief Interventions in Scotland</p>
            <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
              Scotland's AUDIT-C screening programme — used in GP surgeries, A&E departments, and even pharmacies — asks a short series of questions about alcohol consumption. AI analyses the responses and generates a risk score. For people scoring above a threshold, the clinician delivers a brief motivational intervention — a 5 to 10 minute conversation about the risks and what support is available. Evidence shows these brief interventions significantly reduce alcohol consumption even in people who are not yet dependent.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Recovery chatbots — support when you need it most</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Cravings do not respect office hours. Recovery chatbots provide support at 2am on a Sunday when nothing else is available.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F916;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Woebot</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Woebot uses conversational AI combined with cognitive behavioural therapy techniques. It asks how you are feeling, helps you identify thought patterns that lead to cravings, suggests coping strategies, and provides a non-judgemental space to talk. Studies have found it can reduce symptoms of anxiety and depression — common triggers for relapse — in people using it consistently.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F1;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Sober Grid and similar apps</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Apps like Sober Grid combine peer support — connecting people in recovery with others — with AI that monitors mood and engagement and surfaces additional support when someone appears to be struggling. The combination of AI monitoring with human peer support has shown promising results in keeping people engaged in recovery.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Privacy — the critical concern</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Addiction is heavily stigmatised. The misuse of health data about addiction can have life-changing consequences.
          </p>
          <div className="space-y-2">
            {[
              'Data about addiction and recovery is special category health data under UK GDPR — it has the highest legal protections',
              'People using commercial recovery apps (as opposed to NHS services) should check carefully how their data is stored and whether it is shared with third parties',
              'Misuse of this data could affect employment, insurance, relationships, and custody proceedings — the stakes are extremely high',
              'Anyone using AI-assisted addiction services has the right to access their data, correct errors, and request deletion under UK GDPR',
              'If you are concerned about how your data is handled, you can contact the Information Commissioner\'s Office (ICO) which regulates data protection in the UK',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mt-0.5 flex-shrink-0">&#x26A0;&#xFE0F;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-addiction-and-recovery" />
        <LessonNote lessonId="ai-and-addiction-and-recovery" />

        <Quiz questions={quizQuestions} lessonId="ai-and-addiction-and-recovery" />

        <LessonRating lessonId="ai-and-addiction-and-recovery" />
        <LessonFeedback lessonId="ai-and-addiction-and-recovery" />

        <RelatedLessons currentId="ai-and-addiction-and-recovery" />

        <NextLesson currentId="ai-and-addiction-and-recovery" />
      </div>
    </div>
  )
}
