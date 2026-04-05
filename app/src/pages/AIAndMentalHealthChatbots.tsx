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

const LESSON_TITLE = 'AI and mental health chatbots — Woebot, Wysa, Kooth, evidence, MHRA regulation, and important limits'

const KEY_TAKEAWAYS = [
  'Mental health chatbots like Woebot and Wysa use AI to deliver Cognitive Behavioural Therapy (CBT) techniques in a conversational format. Research shows they can reduce symptoms of mild-to-moderate anxiety and depression, though evidence for severe mental illness is limited.',
  'Kooth is the NHS-commissioned online mental health platform for young people in England. While not an AI chatbot in the traditional sense, it uses AI tools to support its counsellors and to identify risk in conversations.',
  'In the UK, mental health apps that make clinical claims are regulated by the MHRA as medical devices. However, many mental health chatbots avoid classification by positioning themselves as "wellness" tools rather than therapeutic interventions.',
  'There are important limitations: AI chatbots cannot diagnose mental health conditions, should never replace crisis support, and may fail to detect suicidal ideation in the same way a trained clinician would.',
  'The ethical debate around mental health chatbots centres on data privacy (sharing intimate mental health data with commercial companies), the risk of false reassurance, and whether they serve as a genuine bridge to care or a substitute for it.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is the psychological technique that most mental health chatbots like Woebot are based on?',
    options: [
      'Psychoanalysis — exploring childhood memories and unconscious thoughts through extended conversation',
      'Cognitive Behavioural Therapy (CBT) — identifying and challenging unhelpful thought patterns and behaviours',
      'Dialectical Behaviour Therapy (DBT) — which requires intensive multi-week group sessions',
      'Exposure therapy — which involves gradually confronting feared situations in real life',
    ],
    correctIndex: 1,
    explanation: 'CBT is well-suited to chatbot delivery because it is structured, skills-based, and involves specific techniques (thought records, behavioural experiments) that can be guided conversationally without long-term therapeutic relationship.',
  },
  {
    question: 'What does the evidence currently show about the effectiveness of mental health chatbots?',
    options: [
      'They are as effective as human therapists for all mental health conditions',
      'They have no significant effect on mental health outcomes — all published studies show neutral results',
      'They show promise for mild-to-moderate anxiety and depression but evidence for severe mental illness is limited',
      'They have only been studied in laboratory settings and there is no real-world evidence',
    ],
    correctIndex: 2,
    explanation: 'Multiple randomised controlled trials show that chatbots like Woebot can reduce symptoms of mild-to-moderate depression and anxiety. The evidence is less clear for people with severe mental illness, personality disorders, or psychosis.',
  },
  {
    question: 'What is the key regulatory gap that allows many mental health chatbots to avoid MHRA oversight?',
    options: [
      'MHRA regulations only apply to physical medical devices and cannot regulate software products',
      'By positioning themselves as "wellness" tools rather than clinical interventions, many apps avoid the classification threshold for medical device regulation',
      'Mental health chatbots are regulated by OFCOM rather than MHRA, and OFCOM has not yet issued guidance',
      'Apps with fewer than one million users are exempt from all UK health regulation',
    ],
    correctIndex: 1,
    explanation: 'Medical device regulation applies to products that make clinical claims about diagnosing, treating, or preventing conditions. Apps that describe themselves as wellness or self-help tools can stay below this threshold while providing de facto mental health support.',
  },
  {
    question: 'Why might a mental health chatbot fail in a crisis situation?',
    options: [
      'Mental health chatbots are programmed to immediately call 999 in any situation involving emotional distress',
      'AI systems may not reliably detect suicidal ideation expressed in indirect or cultural-specific language, and cannot take real-world action like calling emergency services',
      'Mental health chatbots have a legal obligation to disconnect users who report suicidal thoughts to prevent liability',
      'AI chatbots can successfully manage all mental health crises because they are always available',
    ],
    correctIndex: 1,
    explanation: 'A major concern with mental health chatbots is their ability to recognise and appropriately respond to crisis situations. They cannot call for help, may miss indirect expressions of distress, and may provide scripted responses that feel inadequate in genuine emergencies.',
  },
  {
    question: 'What is the main ethical concern about sharing personal mental health data with commercial chatbot companies?',
    options: [
      'Sharing data with companies is illegal under UK GDPR in all circumstances',
      'Intimate disclosures about mental health can be used for targeted advertising, sold to insurers, or exposed in data breaches — with potentially serious consequences for users',
      'Mental health chatbots are required by law to share all session data with the NHS automatically',
      'There are no significant ethical concerns as all commercial chatbots are required to anonymise data immediately',
    ],
    correctIndex: 1,
    explanation: 'Mental health data is highly sensitive. Users share intimate details about depression, trauma, and suicidal thoughts with commercial apps whose data practices and security vary significantly. This data could affect insurance, employment, and personal relationships if mishandled.',
  },
]

export function AIAndMentalHealthChatbots() {
  const lessonId = 'ai-and-mental-health-chatbots'
  useMarkVisited(lessonId)

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-3">
          <div className="text-5xl mb-2">&#x1F4AC;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">AI and mental health chatbots</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            How Woebot, Wysa, and Kooth work, what the evidence shows, how they are regulated — and when they are not enough.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <span className="inline-block bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 text-xs font-semibold px-3 py-1 rounded-full">Intermediate</span>
            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">7 min read</span>
          </div>
        </div>

        <CompletedBadge lessonId={lessonId} />

        <div className="flex justify-end gap-2">
          <ReviewLaterButton lessonId={lessonId} />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">AI in the mental health gap</h2>
          <p>
            The UK has a significant mental health treatment gap: NHS waiting times for therapy often run to months or years, and 75% of people with mental health conditions receive no treatment at all. AI mental health chatbots have emerged partly as a response to this gap — offering immediate, always-available, low-cost support.
          </p>
          <p>
            But "chatbot" covers a wide spectrum — from well-researched therapeutic tools to wellness apps with thin evidence but sophisticated marketing. This lesson covers what is actually out there, what the evidence says, and what the important limits are.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Woebot and Wysa: CBT in a chatbot</h2>
          <p>
            <strong>Woebot</strong> (US-based, widely used in the UK) and <strong>Wysa</strong> (UK/India) are the best-researched AI mental health chatbots. Both deliver <strong>Cognitive Behavioural Therapy (CBT)</strong> techniques: thought records, behavioural activation exercises, and psychoeducation — all through conversation.
          </p>
          <p>
            Randomised controlled trials for both have shown statistically significant reductions in self-reported depression and anxiety symptoms compared to control groups. A 2021 Stanford study found Woebot reduced depression symptoms significantly over a two-week period. A 2022 NHS-commissioned evaluation of Wysa found positive outcomes for young people with mild-to-moderate anxiety.
          </p>
          <p>
            These results are genuine and meaningful — but they are for mild-to-moderate symptoms in otherwise well-functioning people. The evidence for severe depression, bipolar disorder, schizophrenia, or complex trauma is much weaker.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Kooth and NHS-commissioned digital support</h2>
          <p>
            <strong>Kooth</strong> is not a pure AI chatbot — it is an online mental health platform commissioned by NHS regions across England, primarily for young people (10–25). It combines text-based counselling with human counsellors, peer support communities, and self-help tools.
          </p>
          <p>
            AI is used behind the scenes: helping counsellors identify risk signals in conversations, flagging sessions that may require escalation, and analysing usage patterns to improve the service. For young people on NHS waiting lists, Kooth provides a meaningful support option while they wait.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Regulation: the wellness loophole</h2>
          <p>
            In the UK, software that makes clinical claims — diagnosing, treating, or preventing conditions — is a medical device regulated by the <strong>MHRA</strong>. However, many mental health apps describe themselves as "wellness," "wellbeing," or "mental fitness" tools to stay below this threshold.
          </p>
          <p>
            This means they may avoid the rigorous clinical evaluation required of medical devices, while still functioning as de facto therapy tools for vulnerable users. NICE has a Digital Health Technology evaluation programme that assesses mental health apps against evidence standards, but it is not mandatory.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Critical limits: crisis, data, and false reassurance</h2>
          <p>
            <strong>Crisis situations:</strong> Mental health chatbots cannot call for help. If a user expresses suicidal ideation in a way the AI does not recognise — indirectly, poetically, in a language the model handles less well — the system may respond with a scripted wellness message rather than a crisis escalation. UK chatbots are required to display crisis line information, but this is a far lower bar than trained clinical recognition.
          </p>
          <p>
            <strong>Data privacy:</strong> Users share deeply intimate information about depression, trauma, and suicidal thoughts with commercial apps. Their privacy policies vary, data security varies, and this information is fundamentally different in sensitivity from a step counter's data.
          </p>
          <p>
            <strong>False reassurance:</strong> Using a chatbot can feel like "doing something" about mental health. The risk is that it delays seeking proper professional help, or that deteriorating mental health goes unnoticed because the chatbot provides scripted validation without genuine clinical assessment.
          </p>
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <LessonNote lessonId={lessonId} />

        <Quiz lessonId={lessonId} questions={quizQuestions} />

        <LessonRating lessonId={lessonId} />
        <LessonFeedback lessonId={lessonId} />

        <RelatedLessons currentId={lessonId} />
        <NextLesson currentId={lessonId} />
      </div>
    </div>
  )
}
