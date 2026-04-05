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
import { LessonSeriesBadge } from '../components/LessonSeriesBadge'

const LESSON_TITLE = 'AI and addiction and recovery — AI screening tools, chatbot recovery support, relapse prediction, and NHS treatment AI'

const KEY_TAKEAWAYS = [
  'AI screening tools can identify signs of alcohol or drug misuse from GP consultations, pharmacy interactions, and even language patterns in electronic health records — enabling earlier intervention before addiction becomes severe.',
  'Recovery chatbots like Woebot and SilverCloud are being used alongside NHS treatment to provide 24-hour support, CBT-based exercises, and daily check-ins during the gaps between therapy sessions.',
  'Relapse prediction models use data like sleep patterns, social activity, and location history (with consent) to alert support workers when someone may be at elevated risk — enabling proactive outreach.',
  'AI tools for addiction must be designed with the specific vulnerabilities of people in recovery in mind. A chatbot that is too persistent, too cheerful, or that fails in a moment of crisis can cause harm as well as provide help.',
  'The NHS Long Term Plan includes commitments to digital mental health and addiction support — but digital tools must be offered alongside, not instead of, human clinical relationships for people with serious addiction.',
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'How can AI screening tools help identify addiction problems earlier?',
    options: [
      'By testing blood samples automatically in GP surgeries',
      'By analysing patterns in GP consultations, pharmacy records, and health data to flag people who may benefit from addiction support before a crisis occurs',
      'By monitoring social media for mentions of alcohol or drugs',
      'By requiring everyone over 18 to complete an annual addiction questionnaire online',
    ],
    correctIndex: 1,
    explanation:
      'AI screening tools look for patterns that correlate with unrecognised alcohol or drug problems — such as frequent GP visits for certain conditions, patterns in prescription requests, or language in clinical notes. By flagging these patterns early, they enable GPs to have a supportive conversation before the addiction becomes severe or requires emergency treatment.',
  },
  {
    question: 'What is the main benefit of a recovery chatbot like Woebot for someone in addiction recovery?',
    options: [
      'It can prescribe medication adjustments based on how the person is feeling',
      'It provides 24-hour availability for CBT-based check-ins and support during the gaps between clinical appointments',
      'It contacts emergency services automatically if someone relapses',
      'It replaces the need for any human clinical support',
    ],
    correctIndex: 1,
    explanation:
      'Recovery from addiction often involves periods of high vulnerability between therapy sessions — evenings, weekends, or moments of acute stress. Recovery chatbots provide immediate, non-judgemental support at these times: a check-in, a CBT exercise, or simply someone to talk to. They are not a replacement for clinical treatment but can extend its reach into the times when humans are not available.',
  },
  {
    question: 'How does relapse prediction AI work in addiction recovery support?',
    options: [
      'It reads a person\'s mind using brain scanning technology',
      'It uses patterns from wearable devices, phone usage, and location data (with consent) to detect behavioural changes that historically precede relapse',
      'It predicts relapse by analysing a person\'s genetic profile',
      'It automatically reduces medication dosages to prevent dependency',
    ],
    correctIndex: 1,
    explanation:
      'With consent, people in recovery can share data from wearables, smartphones, and apps. AI models trained on recovery data can detect changes — disrupted sleep, reduced social contact, changed location patterns — that are associated with increased relapse risk. The model alerts a support worker who can then reach out proactively rather than waiting for a crisis to occur.',
  },
  {
    question: 'What is a key ethical concern about using AI chatbots with people in addiction recovery?',
    options: [
      'Chatbots are too expensive for the NHS to afford',
      'People in addiction recovery cannot use smartphones',
      'A chatbot that fails to respond appropriately in a moment of genuine crisis — or that feels intrusive or dismissive — can cause harm, and the specific vulnerabilities of people in recovery must be central to the design',
      'Chatbots always recommend the wrong medications for withdrawal',
    ],
    correctIndex: 2,
    explanation:
      'People in active recovery are often at significant psychological risk. A chatbot designed for general wellbeing may not be appropriate for someone managing severe addiction — it may be too cheerful, too persistent, or fail to recognise and escalate a genuine crisis. Responsible design of AI tools for this population requires deep expertise in addiction medicine and close involvement of people with lived experience of recovery.',
  },
  {
    question: 'What does the NHS Long Term Plan say about digital addiction support?',
    options: [
      'It commits to replacing all addiction counsellors with AI chatbots by 2030',
      'It includes commitments to digital mental health and addiction support, but these must complement rather than replace human clinical relationships for people with serious addiction',
      'It prohibits the use of AI in addiction treatment on patient safety grounds',
      'It requires every person in addiction recovery to use a government-approved app',
    ],
    correctIndex: 1,
    explanation:
      'The NHS Long Term Plan commits to expanding digital mental health support, including for addiction. But the plan is explicit that digital tools are intended to extend reach and fill gaps — not to replace the human therapeutic relationships that are central to effective addiction treatment. For people with complex or severe addiction, a human clinician remains essential.',
  },
]

export function AIAndAddictionAndRecovery() {
  useMarkVisited('ai-and-addiction-and-recovery')

  return (
    <main className="max-w-2xl mx-auto px-4 py-8 space-y-8">
      <div className="space-y-3">
        <LessonSeriesBadge lessonId="ai-and-addiction-and-recovery" />
        <CompletedBadge lessonId="ai-and-addiction-and-recovery" />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
          AI and addiction and recovery
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Addiction affects millions of people in the UK. NHS addiction services are under enormous pressure. AI tools are being developed to help with earlier identification, continuous recovery support, and predicting when someone may be at risk of relapse. This lesson explains how they work and what the important limits are.
        </p>
        <div className="flex flex-wrap gap-2">
          <ShareButton lessonTitle={LESSON_TITLE} />
          <ReviewLaterButton lessonId="ai-and-addiction-and-recovery" />
        </div>
      </div>

      <KeyTakeaways points={KEY_TAKEAWAYS} />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Early identification — catching problems sooner</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Most people with alcohol or drug problems do not seek help until their addiction has become severe. By then, treatment is more complex, outcomes are harder, and the personal and social costs have already accumulated — lost jobs, damaged relationships, health consequences.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          AI screening tools aim to identify people who may benefit from early support before they reach that point. GPs, pharmacies, and A&amp;E departments routinely collect data that can contain early warning signals: patterns of prescriptions, frequency of certain health presentations, clinical notes. AI can analyse these patterns and flag individuals for a supportive conversation.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          This is not surveillance — it requires clinical judgement to act on any flag, and the conversation with a GP or pharmacist is an offer of support, not a diagnosis. But it means that a person whose alcohol use is becoming problematic might be gently asked about it during a routine appointment, rather than only being identified when they present to A&amp;E with liver disease.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recovery chatbots — support between sessions</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Recovery from addiction is not a linear process. The period between therapy sessions — evenings, weekends, moments of acute stress or craving — is often when people are most vulnerable. NHS addiction services cannot provide round-the-clock human support to the volume of people who need it.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Tools like Woebot and SilverCloud, which have been piloted within NHS services, provide cognitive behavioural therapy exercises, daily mood check-ins, and a conversational interface that people can use at any hour. The AI is not a therapist — it delivers structured exercises and supportive responses based on established CBT principles — but it is available at 3am when a craving strikes, or on a Sunday when the clinical team is not working.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          The evidence base is developing. Studies suggest that regular use of structured digital CBT tools can reduce symptom severity for mild to moderate alcohol use disorders. The tools are less studied for severe addiction or poly-drug use, where the clinical picture is more complex and the stakes of a crisis are higher.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Relapse prediction — acting before the crisis</h2>
        <p className="text-gray-700 dark:text-gray-300">
          One of the most promising — and most ethically complex — applications of AI in addiction recovery is relapse prediction. Research has shown that behavioural changes often precede relapse: disrupted sleep, withdrawal from social contact, changes in daily routine, increased time in certain locations.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          With explicit consent, people in recovery can share data from fitness trackers, smartphones, and dedicated apps. AI models trained on this data can detect when someone's pattern is changing in ways that have historically preceded relapse — and alert a support worker to reach out proactively.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          This turns support from a reactive service (responding to a crisis that has already happened) into a proactive one. A phone call from a support worker saying "we noticed you haven't been sleeping well this week, how are you doing?" can make a real difference.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          The ethical concerns are significant, however. This requires sharing intimate, continuous data about your life and location. The model may produce false positives — flagging someone as at risk when they are fine, which can feel intrusive or patronising. And the stigma of addiction means that people may be reluctant to share data if they fear it could be used against them in other contexts. Robust consent processes and strict data governance are essential.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Designing for vulnerability</h2>
        <p className="text-gray-700 dark:text-gray-300">
          AI tools designed for the general population are not automatically appropriate for people in addiction recovery. The design choices that matter for a wellbeing app — notification frequency, tone, the way the app responds to distress signals, what happens when someone disengages — can have very different consequences for someone managing severe addiction.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          A chatbot that is too persistent when someone tries to disengage, that responds with generic cheerfulness to expressions of severe distress, or that fails to escalate to emergency services when someone is in crisis, can cause harm as well as provide help.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Best practice in this space involves deep engagement with people in recovery at every stage of design, rigorous clinical oversight, clear protocols for escalation to human support, and ongoing monitoring of outcomes — not just engagement metrics.
        </p>
      </section>

      <LessonNote lessonId="ai-and-addiction-and-recovery" />

      <Quiz questions={QUIZ_QUESTIONS} lessonId="ai-and-addiction-and-recovery" />

      <LessonRating lessonId="ai-and-addiction-and-recovery" />
      <LessonFeedback lessonId="ai-and-addiction-and-recovery" />
      <RelatedLessons currentId="ai-and-addiction-and-recovery" />
      <NextLesson currentId="ai-and-addiction-and-recovery" />
    </main>
  )
}
