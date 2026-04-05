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

const LESSON_TITLE = 'AI and addiction and recovery — screening tools, chatbot support, and ethical questions'

const KEY_TAKEAWAYS = [
  'AI screening tools used by GPs can identify people at risk of alcohol or drug dependence from patterns in health records, enabling earlier intervention before problems become severe.',
  'Chatbot-based recovery support (like Woebot and Sober Grid) provides 24/7 availability and anonymity that some people prefer over face-to-face services — especially when stigma prevents them seeking help.',
  'AI can personalise treatment plans by identifying which approaches have worked best for similar patients, helping clinicians tailor support to the individual.',
  'Predictive relapse models — identifying people in recovery who are at heightened risk of relapse — allow proactive outreach, but raise serious questions about surveillance, privacy, and the ethics of monitoring people in recovery.',
  'NHS addiction services are underfunded and waiting lists are long; AI cannot solve the resource shortage, but some tools are helping services do more with limited capacity.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How do AI screening tools in GP practices work to identify addiction risk?',
    options: [
      'GPs use AI to read patients\' social media to detect signs of alcohol or drug use',
      'AI analyses patterns in health records — prescription history, A&E attendances, chronic conditions linked to substance use — to identify patients who may benefit from a conversation about alcohol or drug use',
      'GPs send all patients\' blood test results to a central AI that identifies substance use from biomarkers',
      'AI screening requires patients to complete a detailed questionnaire that is then analysed by an algorithm',
    ],
    correctIndex: 1,
    explanation:
      "AI tools can identify patterns in electronic health records associated with alcohol or drug dependence — frequent A&E attendances, liver enzyme results, certain prescription patterns, or conditions disproportionately linked to substance use. When patterns match, the system flags the patient for follow-up. Tools like this are being piloted in some NHS trusts to support early intervention without waiting for a patient to self-present.",
  },
  {
    question: 'What advantages do AI chatbots offer for addiction recovery support compared to traditional services?',
    options: [
      'Chatbots can prescribe medication and monitor withdrawal symptoms, reducing the need for medical supervision',
      '24/7 availability, anonymity, and no waiting list — allowing people to seek support at a moment of vulnerability or craving without the stigma of attending a physical service',
      'Chatbots are more effective than human counsellors for treating addiction because they have no emotional reactions',
      'AI chatbots automatically alert emergency services if a user is at risk, providing better safety than human counsellors',
    ],
    correctIndex: 1,
    explanation:
      'Apps like Woebot (AI-based CBT support) and Sober Grid (peer network with AI coaching) are available at any hour, including at 3am when cravings strike and no human counsellor is available. The anonymity they offer matters enormously — stigma prevents many people from seeking in-person help. These tools are not replacements for human treatment, but they can bridge gaps and support people between appointments.',
  },
  {
    question: 'What does a predictive relapse model do?',
    options: [
      'It predicts which substances a person is most likely to use based on their demographic profile and previous history',
      'It analyses data from a person in recovery — check-ins, patterns of engagement, language in therapy notes — to identify heightened relapse risk, enabling proactive outreach before a relapse occurs',
      'It automatically books emergency appointments when someone in recovery does not attend their scheduled check-in',
      'It predicts how long a person\'s recovery will last based on their treatment history',
    ],
    correctIndex: 1,
    explanation:
      "Relapse risk models are being developed by NHS trusts and addiction charities. They analyse engagement data, changes in behaviour patterns, and sometimes wearable device data (like heart rate and sleep) to identify when someone in recovery may be at heightened risk. The goal is proactive support — reaching out before a relapse rather than after. The ethical concerns are significant: continuous monitoring, data security, and the risk of stigmatising or over-surveilling people.",
  },
  {
    question: 'What is the main ethical concern about using AI to monitor people in addiction recovery?',
    options: [
      'AI monitoring is too expensive for most NHS trusts to afford',
      'Continuous monitoring collects sensitive personal data about people in vulnerable circumstances, raising concerns about consent, data security, surveillance, and whether monitoring undermines autonomy and trust in recovery relationships',
      'AI monitoring replaces the therapeutic relationship with a machine, which is unethical because recovery requires human connection',
      'The main concern is that AI will be used to report relapses to employers or the justice system',
    ],
    correctIndex: 1,
    explanation:
      "Collecting continuous data about a person's movements, behaviour, sleep, and communications in the name of recovery support raises profound questions. Who has access to the data? Can it be used in legal proceedings? Does constant monitoring undermine the sense of autonomy and self-determination that is central to sustainable recovery? Organisations like Release and the alcohol charity Turning Point have called for clear ethical frameworks before these systems are widely deployed.",
  },
  {
    question: 'What is the current state of NHS addiction services in England?',
    options: [
      'NHS addiction services are well-funded and have no waiting lists — the main challenge is that people do not know the services exist',
      'NHS addiction services are significantly underfunded, with long waiting lists and high rates of people who never access treatment — AI tools are being explored partly to help services manage increasing demand with limited capacity',
      'The NHS does not provide addiction treatment — this is provided entirely by charities and private providers',
      'NHS addiction services focus only on alcohol; drug treatment is provided by the criminal justice system',
    ],
    correctIndex: 1,
    explanation:
      "A 2022 independent review by Dame Carol Black found that addiction treatment in England was underfunded by at least £500 million per year, with only a fraction of people needing treatment actually receiving it. The NHS Long Term Plan included commitments to expand access, but waiting lists remain long. AI tools are being explored to improve identification of need and efficiency of services, but they cannot substitute for adequate resourcing.",
  },
]

export function AIAndAddictionAndRecovery() {
  useMarkVisited('ai-and-addiction-and-recovery')

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F91D;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            {LESSON_TITLE}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI is being used in addiction treatment and recovery &mdash; and the important
            ethical questions about surveillance, privacy, and what recovery actually means.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-addiction-and-recovery" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI screening in GP practices</h2>
          <p className="text-gray-600 leading-relaxed">
            Most people with alcohol or drug dependency never access specialist treatment.
            Many first encounter the healthcare system through their GP, A&amp;E, or for
            conditions related to their substance use but without disclosing it.
          </p>
          <p className="text-gray-600 leading-relaxed">
            AI screening tools analyse patterns in electronic health records &mdash; frequent A&amp;E
            visits, liver function test results outside normal ranges, certain prescription
            patterns, or conditions disproportionately associated with heavy alcohol use
            &mdash; to identify patients who might benefit from a conversation about their
            drinking or drug use.
          </p>
          <div className="bg-indigo-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-indigo-800 text-sm">Early intervention matters</p>
            <p className="text-indigo-700 text-sm leading-relaxed">
              Catching problematic substance use early &mdash; before dependence develops &mdash;
              is far more effective and less costly than treating established addiction.
              A brief conversation at a GP appointment, prompted by an AI flag, can be
              enough to motivate someone to change before the problem escalates.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Chatbot support for recovery</h2>
          <p className="text-gray-600 leading-relaxed">
            Recovery from addiction is not linear. Cravings, stress, and triggers can
            strike at any time &mdash; including at 2am, when no human support worker is
            available. AI chatbots and apps offer something traditional services cannot:
            availability at any moment.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4AC;',
                label: 'Woebot',
                text: 'An AI-powered app that uses cognitive behavioural therapy (CBT) techniques to help people manage difficult emotions, including those that can trigger substance use. Multiple clinical trials have found it effective for depression and anxiety, which frequently co-occur with addiction.',
              },
              {
                icon: '&#x1F91D;',
                label: 'Sober Grid',
                text: 'A social network and AI coaching app for people in recovery. The AI component monitors engagement patterns and can send personalised check-ins. Human peers in the community provide direct support.',
              },
              {
                icon: '&#x1F3E5;',
                label: 'NHS Digital Tools',
                text: 'Some NHS trusts offer apps like Turning Point\'s online support hub and SMART Recovery online groups as part of treatment pathways — allowing people to maintain connection to support between clinical appointments.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Personalising treatment plans</h2>
          <p className="text-gray-600 leading-relaxed">
            Addiction treatment is not one-size-fits-all. The same approach that helps
            one person may not work for another. AI can help match people to treatments
            that have worked well for similar patients in the past.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Treatment outcome databases &mdash; held by NHS trusts and organisations like
            Change Grow Live &mdash; record which interventions worked for which types of
            patient. AI systems trained on these datasets can suggest personalised
            treatment pathways, flag contraindications, and alert clinicians when
            a patient is not responding to a treatment as expected.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Ethical concerns: monitoring in recovery</h2>
          <p className="text-gray-600 leading-relaxed">
            The concept of predicting relapse sounds helpful in theory. In practice,
            it raises serious ethical questions.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed">
            <li><strong>Consent:</strong> Do people in recovery understand what data is being collected and how it is used? Can they meaningfully opt out?</li>
            <li><strong>Data security:</strong> Information about addiction is among the most sensitive personal data that exists. Who can access it? Can it be shared with employers, insurers, or the criminal justice system?</li>
            <li><strong>Autonomy:</strong> Recovery involves rebuilding a sense of self-determination. Continuous monitoring by an algorithm can undermine that, turning recovery into a surveilled process rather than a self-chosen one.</li>
            <li><strong>False positives:</strong> Being flagged as high-risk for relapse when you are not can be distressing and damage trust in services.</li>
            <li><strong>Equity:</strong> AI trained on historical data may reflect historic inequalities in who received treatment. It may work less well for people from underrepresented groups.</li>
          </ul>
          <div className="bg-red-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-red-800 text-sm">Getting help</p>
            <p className="text-red-700 text-sm leading-relaxed">
              If you or someone you know needs help with alcohol or drug use, free support
              is available through: <strong>We Are With You</strong> (wearewithyou.org.uk),
              <strong> Alcoholics Anonymous</strong> (alcoholics-anonymous.org.uk),
              <strong> Narcotics Anonymous</strong> (ukna.org), or by calling the
              <strong> NHS Drug Helpline</strong> on 0300 123 6600.
            </p>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-addiction-and-recovery" />
        <LessonNote lessonId="ai-and-addiction-and-recovery" />

        <Quiz questions={quizQuestions} lessonId="ai-and-addiction-and-recovery" />

        <LessonFeedback lessonId="ai-and-addiction-and-recovery" />
        <LessonRating lessonId="ai-and-addiction-and-recovery" />
        <RelatedLessons currentId="ai-and-addiction-and-recovery" />
        <NextLesson currentId="ai-and-addiction-and-recovery" />
      </div>
    </div>
  )
}
