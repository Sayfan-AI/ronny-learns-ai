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

const LESSON_TITLE = 'AI and immigration'

const KEY_TAKEAWAYS = [
  'The UK Home Office uses AI tools to help triage visa applications — sorting cases by risk and completeness — but a human caseworker still makes the final decision on each application.',
  'AI-powered eGates at UK airports use facial recognition to match your face to your passport photo, making border crossing faster. The system has an error rate that disproportionately affects people with darker skin tones, which remains a known limitation.',
  'AI tools have been used to help assess the credibility of asylum claims — including analysing accents to verify a stated country of origin. Campaigners argue these tools can be unreliable and introduce bias.',
  'Documented cases of algorithmic bias in immigration AI have led to legal challenges. Under UK GDPR, individuals have the right to request a human review of any significant decision made partly by an automated system.',
  'The tension between efficiency (AI processing thousands of cases quickly) and fairness (AI that may embed historic biases) is one of the most contested debates in public-sector AI today.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What role does AI currently play in UK visa application processing?',
    options: [
      'AI makes the final decision on all visa applications automatically, with no human involvement unless an appeal is lodged',
      'AI helps triage and prioritise applications — flagging incomplete files or inconsistencies — while a human caseworker makes the final decision',
      'AI translates documents from foreign languages but plays no role in assessing the application itself',
      'AI only handles the online application form — once submitted, the process is entirely manual',
    ],
    correctIndex: 1,
    explanation:
      'The UK Home Office has used AI tools to help caseworkers manage the volume of applications. These tools sort cases, flag potential issues (such as missing documents or inconsistent information), and help prioritise workloads. However, the official position is that a human caseworker reviews each case and makes the final decision. Critics argue that in practice, caseworkers may heavily rely on AI recommendations without fully scrutinising them — a phenomenon sometimes called "automation bias".',
    hint: 'Think about AI as a sorting assistant rather than a decision-maker.',
  },
  {
    question: 'How do eGates at UK airports use AI?',
    options: [
      'They scan your luggage using X-ray AI to detect prohibited items, while a separate human checks your passport manually',
      'They use facial recognition AI to compare your live face to the photo in your passport or on file, granting or flagging entry automatically',
      'They read the chip in your passport and cross-reference it with flight booking data, using no visual AI whatsoever',
      'They analyse your travel history using AI to predict the likelihood of overstaying, and flag high-risk travellers for interview',
    ],
    correctIndex: 1,
    explanation:
      'eGates use cameras and facial recognition algorithms to verify that the person presenting a passport is the same person in the passport photo. Your face is scanned, compared to the stored image, and if the match score exceeds a threshold, you are admitted. The process takes a few seconds. Studies have shown that these systems perform less accurately for people with darker skin tones, older travellers, and women — reflecting biases in the training data. The UK Home Office has acknowledged this and says it is working to improve accuracy across all demographic groups.',
    hint: 'Think about the camera matching your face to a document photo.',
  },
  {
    question: 'What is "language analysis" in the context of asylum claims, and why is it controversial?',
    options: [
      'AI translation software that converts asylum seekers\' statements from their native language to English — controversial because translations can contain errors',
      'An AI tool that analyses a person\'s accent and speech patterns to try to verify which country or region they come from — controversial because accents are not reliable identifiers of nationality',
      'A sentiment analysis tool that assesses whether an asylum seeker\'s account sounds emotionally genuine — controversial because trauma affects how people tell their stories',
      'A document forgery detector that analyses the language style of written asylum applications to identify copy-pasted or AI-generated text',
    ],
    correctIndex: 1,
    explanation:
      'Language analysis tools — sometimes called Language Analysis for the Determination of Origin (LADO) — claim to identify where someone grew up based on their accent and vocabulary. They have been used in asylum processes to test whether a claimant\'s stated country of origin matches their speech. Critics, including linguists and refugee charities, argue that accents are shaped by many factors beyond birthplace — migration within a country, education, diaspora communities, and time spent in other countries. Using such tools as a primary credibility test is therefore considered unreliable and potentially harmful.',
    hint: 'Think about what accents can and cannot tell you about where someone is from.',
  },
  {
    question: 'What right do people have under UK GDPR if an AI system has made or contributed to a significant decision about them?',
    options: [
      'The right to see the source code of the AI system and challenge its design in court',
      'The right to request that a human reviews the decision, and to receive an explanation of how the automated system reached its conclusion',
      'The right to have the AI decision automatically overturned and replaced with a fresh human assessment',
      'No specific rights — immigration decisions are exempt from data protection law on national security grounds',
    ],
    correctIndex: 1,
    explanation:
      'Under UK GDPR Article 22, individuals have the right not to be subject to a decision based solely on automated processing that has a significant effect on them. They can request human review and receive an explanation. In practice, the Home Office argues its AI tools only assist humans rather than make final decisions — but campaigners note that when caseworkers routinely follow AI recommendations without challenge, the distinction becomes less meaningful. The right to an explanation is particularly important: it means the organisation must be able to articulate why an AI flagged a case, not just point to "the computer said so".',
    hint: 'Think about the right to have a human look again.',
  },
  {
    question: 'What is "algorithmic bias" in immigration AI, and where has it been documented?',
    options: [
      'When AI deliberately favours applicants from countries that have trade agreements with the UK, as programmed by policymakers',
      'When an AI system produces systematically less accurate or less favourable outcomes for certain groups — such as applicants from particular countries — as a result of patterns in its training data or design',
      'When immigration officers override AI recommendations more often for some nationalities than others, introducing human bias into an otherwise neutral system',
      'When AI systems for different visa categories (work, study, family) use inconsistent criteria, creating unfair differences between applicant types',
    ],
    correctIndex: 1,
    explanation:
      'Algorithmic bias occurs when an AI system treats people differently in ways that track protected characteristics — nationality, ethnicity, gender, age — usually because the training data reflects historic discrimination. In immigration, the Public Law Project and other groups have documented cases where automated tools used by the Home Office appeared to flag or deprioritise applications from certain nationalities at higher rates. One visa streaming tool was withdrawn in 2020 after it was found to use nationality as an input in a way that risked indirect racial discrimination. This led to significant debate about transparency, accountability, and the use of AI in high-stakes public decisions.',
    hint: 'Think about AI inheriting historic patterns of unfairness from its training data.',
  },
]

export function AIAndImmigration() {
  useMarkVisited('ai-and-immigration')

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F6C2;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and immigration
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Visa processing AI, biometric border checks, asylum decision tools, and the ongoing
            debate about algorithmic bias in one of the most high-stakes areas of government AI.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-immigration" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Why AI and immigration is a big deal</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Immigration decisions can determine where someone lives, whether families stay together, and whether people fleeing persecution find safety. Getting these decisions wrong — or making them unfairly — has profound human consequences.
          </p>
          <div className="space-y-2">
            {[
              'The UK Home Office processes over 3 million visa and immigration applications each year — an enormous administrative challenge',
              'The backlog of asylum cases in the UK has reached hundreds of thousands, putting pressure on decision-making speed',
              'AI is attractive to governments as a way to process more applications faster — but speed and fairness can be in tension',
              'Several countries, including Denmark and Australia, have faced legal challenges over algorithmic immigration decisions',
              'The UK\'s visa streaming tool, which used nationality as a factor, was withdrawn in 2020 after concerns about indirect racial discrimination',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-violet-100 dark:border-violet-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI in visa processing</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Processing millions of applications requires sorting, prioritising, and checking for inconsistencies. AI is used at several points in this pipeline.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-violet-50 dark:bg-violet-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CB;</span>
              <div>
                <p className="font-semibold text-violet-800 dark:text-violet-200 text-sm mb-0.5">Document checking and triage</p>
                <p className="text-violet-700 dark:text-violet-300 text-sm leading-relaxed">AI tools scan application documents to check completeness, flag inconsistencies (such as dates that do not match), and assess the risk level of each case. High-risk or complex cases are directed to experienced caseworkers; simpler applications can be processed more quickly.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-violet-50 dark:bg-violet-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x26A0;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-violet-800 dark:text-violet-200 text-sm mb-0.5">The automation bias problem</p>
                <p className="text-violet-700 dark:text-violet-300 text-sm leading-relaxed">When AI flags a case as low-risk or high-risk, human caseworkers may follow that recommendation without independently reviewing it — even if they technically have the power to override it. This is called "automation bias" and means the AI's errors get amplified in practice, even when official policy requires human oversight.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-violet-50 dark:bg-violet-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CA;</span>
              <div>
                <p className="font-semibold text-violet-800 dark:text-violet-200 text-sm mb-0.5">Nationality-based streaming — and why it was withdrawn</p>
                <p className="text-violet-700 dark:text-violet-300 text-sm leading-relaxed">The Home Office used a tool that placed visa applications into different processing streams partly based on nationality. In 2020, the Public Law Project found this risked indirect racial discrimination — treating applicants from certain countries as higher risk simply because of where they were from, not their individual circumstances. The tool was withdrawn following the campaign.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">E-Borders and biometric checks</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            At UK airports and international train stations, AI-powered biometric systems check travellers. You may have already used one.
          </p>
          <div className="space-y-2">
            {[
              'eGates at UK airports use facial recognition: a camera captures your face, software compares it to the photo in your passport chip, and the gate opens if the match score is high enough',
              'The system processes most travellers in a few seconds, reducing queue times significantly compared to manual passport checks',
              'The UK Home Office has acknowledged that facial recognition accuracy is lower for people with darker skin tones — a known issue across most commercial facial recognition systems',
              'Your biometric data is not permanently retained from a routine airport eGate check, but watchlist checks run against law enforcement databases do happen in real time',
              'The UK\'s Advance Passenger Information system requires airlines to share passenger data before departure, allowing risk assessments before the plane lands',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-950 rounded-xl p-4">
            <p className="text-indigo-700 dark:text-indigo-300 text-sm leading-relaxed">
              <span className="font-semibold">Already experienced it?</span> If you have walked through an eGate at Heathrow, Gatwick, or St Pancras, you have had your face compared to your passport photo by an AI system. For most people, it works seamlessly. When it fails — and you are directed to a manual desk — it is usually because the match score was too low, not because any suspicion attached to you.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI in asylum decisions</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Asylum claims are among the most sensitive immigration cases — involving people who say their lives are at risk if returned home. AI is being used here too, with significant controversy.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F5E3;&#xFE0F;',
                label: 'Language analysis for origin verification',
                text: 'Tools that claim to identify a person\'s country of origin from their accent and speech patterns have been used in asylum processes. Linguists widely criticise these tools — people\'s accents reflect complex histories of migration and community, not just birthplace.',
                color: 'amber',
              },
              {
                icon: '&#x1F4C4;',
                label: 'Credibility assessment tools',
                text: 'Some countries use AI tools that score the consistency of an asylum seeker\'s account. Critics point out that trauma affects how people remember and tell their stories — inconsistency is common among genuine refugees and is not a reliable indicator of dishonesty.',
                color: 'amber',
              },
              {
                icon: '&#x1F30D;',
                label: 'Country of origin information',
                text: 'AI is also used more positively — to help caseworkers quickly access up-to-date information about conditions in countries where asylum seekers claim to face persecution. This is a lower-stakes use that can improve decision quality.',
                color: 'amber',
              },
            ].map(({ icon, label, text, color }) => (
              <div key={label} className={`flex gap-3 items-start bg-${color}-50 dark:bg-${color}-950 rounded-xl p-3`}>
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className={`font-semibold text-${color}-800 dark:text-${color}-200 text-sm mb-0.5`}>{label}</p>
                  <p className={`text-${color}-700 dark:text-${color}-300 text-sm leading-relaxed`}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Your rights when AI is involved</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            If you believe an AI system has contributed to an unfair immigration decision, you have specific rights under UK law.
          </p>
          <div className="space-y-2">
            {[
              'Under UK GDPR Article 22, you have the right to request a human review of any significant decision made solely or substantially by automated processing',
              'You have the right to an explanation — the organisation must be able to tell you in plain terms how the automated system contributed to the decision',
              'Subject Access Requests (SARs) allow you to ask for all the data held about you, which can reveal what information an AI system used',
              'Immigration solicitors and charities such as the Joint Council for the Welfare of Immigrants (JCWI) can help you understand and exercise these rights',
              'Judicial review remains available where there is evidence of an unlawful automated decision or a breach of the right to a fair process',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-950 rounded-xl p-4">
            <p className="text-emerald-700 dark:text-emerald-300 text-sm leading-relaxed">
              <span className="font-semibold">The practical reality:</span> Exercising these rights is often difficult. Immigration processes move quickly, legal representation is hard to access, and the Home Office has not always been transparent about exactly how AI tools are used. Campaigning organisations argue that greater statutory transparency requirements are needed before AI can be used responsibly in immigration decisions.
            </p>
          </div>
        </div>

        <LessonNote lessonId="ai-and-immigration" />
        <ReviewLaterButton lessonId="ai-and-immigration" />

        <Quiz lessonId="ai-and-immigration" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-immigration" />
        <LessonFeedback lessonId="ai-and-immigration" />

        <RelatedLessons currentId="ai-and-immigration" />

        <NextLesson currentId="ai-and-immigration" />

      </div>
    </div>
  )
}
