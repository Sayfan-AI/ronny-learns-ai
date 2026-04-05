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
  'The UK Home Office uses AI to triage visa applications — sorting high-volume applications by risk and completeness so caseworkers focus on the cases that most need human attention.',
  'Biometric border technology (eGates, facial recognition cameras, fingerprint databases) uses AI to match identities in seconds — the same technology that lets you check yourself through airport security without a border officer.',
  'AI tools have been used to assess the credibility of asylum claims and analyse language to infer nationality — raising serious concerns about accuracy, bias, and the consequences of being wrong.',
  'Documented research (Public Law Project, Amnesty International) has found algorithmic bias in immigration AI — systems that have treated applicants from certain countries or demographics less favourably without transparent justification.',
  'Under UK GDPR and immigration law, individuals have rights to request human review of automated decisions — but exercising those rights is difficult and rarely communicated clearly.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does the UK Home Office primarily use AI in visa processing?',
    options: [
      'AI makes the final decision on all visa applications, with no human caseworkers involved',
      'AI triages applications by risk and completeness, prioritising which cases go to human caseworkers first',
      'AI translates all application documents automatically and checks signatures for forgery',
      'AI monitors visa holders in the UK to ensure they comply with the conditions of their stay',
    ],
    correctIndex: 1,
    explanation:
      "The Home Office processes millions of visa applications each year — student visas, work visas, family reunion visas, visitor visas. AI is used primarily as a triage and risk-scoring system: it analyses completeness of the application, flags inconsistencies between documents, cross-references against databases, and assigns a risk score that determines whether a caseworker reviews it quickly (low risk, straightforward) or more carefully (high risk or complex). The Home Office has been reluctant to publish details of exactly how these systems work, which has itself been the subject of legal challenge.",
    hint: 'Think about sorting and prioritising rather than deciding.',
  },
  {
    question: 'What are eGates at UK airports and how do they use AI?',
    options: [
      'They are electronic turnstiles that count passengers and send numbers to the airline',
      'They use facial recognition AI to compare the passenger\'s face with their passport chip, verifying identity without a border officer',
      'They scan luggage automatically using AI to detect prohibited items',
      'They are AI-controlled gates that open only for passengers whose flights are on time',
    ],
    correctIndex: 1,
    explanation:
      "eGates (found at UK airports and international rail terminals) take a live photograph of your face and compare it to the facial image stored on the chip in your passport or travel document. AI facial recognition matches the two and, if confident, opens the gate — taking about 10 seconds. A border officer monitors the gates and can intervene. The system works well for straightforward cases but has higher error rates for some demographics, particularly darker-skinned individuals, and can fail on people whose appearance has changed significantly since their passport photo. Where eGates fail, the traveller is directed to a staffed desk.",
    hint: 'Think about matching the face in front of the camera to the face on the travel document.',
  },
  {
    question: 'What is the concern about using AI to analyse language in asylum claims?',
    options: [
      'AI translation is inaccurate for some languages, causing misunderstandings in claim documents',
      'AI language analysis to determine nationality can be unreliable and has wrongly denied claims by placing applicants in countries they fled',
      'AI is used to read asylum seekers\' private messages without consent, violating privacy',
      'AI language analysis cannot process written documents and can only analyse spoken speech',
    ],
    correctIndex: 1,
    explanation:
      "Language analysis tools claim to determine an applicant's region or country of origin from their speech or writing patterns — the idea being to detect fraudulent claims about nationality. The problem is these tools have limited accuracy, especially for people who grew up across borders, in diaspora communities, or who speak regional dialects. A genuine refugee from one country might speak the dominant language of their persecutor's country. Several European countries have used language analysis to reject asylum claims, and researchers and legal organisations have documented cases where people who genuinely needed protection were disbelieved based on language AI that was simply wrong.",
    hint: 'Think about what can go wrong when an algorithm tries to determine where someone is really from.',
  },
  {
    question: 'What has research found about algorithmic bias in immigration AI systems?',
    options: [
      'Research has found no evidence of bias — AI systems are more consistent than human decision-makers',
      'Research has found that applicants from certain nationalities and demographics receive worse outcomes from AI-assisted processes, often without transparent explanation',
      'Research has found that AI benefits applicants from developing countries because it removes subjective human prejudice',
      'Research is not permitted in this area as immigration data is classified',
    ],
    correctIndex: 1,
    explanation:
      'The Public Law Project (a UK legal charity), Amnesty International, and academic researchers have documented cases where AI and algorithmic systems in immigration have produced biased outcomes. These include risk-scoring systems that rated applicants from certain nationalities as higher risk without clear justification, interview scheduling systems that appeared to favour certain groups, and predictive tools that reinforced historical patterns of refusal. The opacity of these systems — the Home Office has resisted disclosing the criteria — makes independent audit extremely difficult. The EU AI Act now classifies migration AI as high-risk, requiring transparency and human oversight.',
    hint: 'Think about what happens when a system learns from historical decisions that themselves reflected human bias.',
  },
  {
    question: 'What rights does a person have if an AI system makes a negative immigration decision about them?',
    options: [
      'None — immigration decisions are specifically exempt from all data protection and human rights law',
      'Under UK GDPR they have the right to request human review of automated decisions and to challenge the decision with reasons',
      'They can only appeal to the AI system itself, which reviews its own decisions',
      'They must accept the AI decision as final; appeals are not possible for automated immigration decisions',
    ],
    correctIndex: 1,
    explanation:
      "Under UK GDPR, individuals have the right not to be subject to solely automated decisions that have legal or similarly significant effects on them — including visa refusals. They have the right to request human review and to be given a meaningful explanation of how the decision was reached. In practice, these rights are difficult to exercise: Home Office refusal notices often do not make clear when AI was involved, the criteria used are not publicly disclosed, and legal aid for immigration cases has been severely restricted. The Immigration Law Practitioners' Association and other organisations have raised repeated concerns about the gap between rights in theory and rights in practice.",
    hint: 'Think about the right to ask a human to look at your case again.',
  },
]

export function AIAndImmigration() {
  useMarkVisited('ai-and-immigration')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F6C2;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and immigration
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Visa processing AI, biometric border checks, asylum decision tools, algorithmic bias,
            and your rights when an algorithm affects your case.
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

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI at the border — what is already happening</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Artificial intelligence is now embedded in UK immigration processes — from the moment you approach a border gate to the decisions made in Home Office case queues. Much of this happens without the people affected knowing.
          </p>
          <div className="space-y-2">
            {[
              'Around 3 million visa applications are processed in the UK each year — AI helps manage this volume',
              'eGates use facial recognition AI at all major UK airports and international rail terminals',
              'AI risk-scoring affects which visa applications receive closer scrutiny',
              'Language analysis AI has been used to try to determine applicants\' countries of origin',
              'The Home Office has faced repeated legal challenges over the transparency of its algorithmic systems',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-slate-600 dark:text-slate-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">eGates and biometric borders</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Automated border control uses AI to verify identity — making the process faster but raising important questions about accuracy and accountability.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F6C2;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">How eGates work</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">You scan your passport, a camera takes your photo, and AI compares your face to the image stored in the passport chip. If confident, the gate opens. The whole process takes around 10 seconds. A human officer monitors the gates and handles failures.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x26A0;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">The accuracy problem</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Facial recognition accuracy varies by demographic — multiple studies show higher error rates for darker-skinned individuals and women. When eGates fail, people are directed to staffed desks. But the experience can be stressful, and the reasons for failure are not explained.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Algorithmic bias in immigration</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            When AI systems are trained on historical data, they can learn and reproduce the biases in that data. In immigration, the stakes are very high.
          </p>
          <div className="space-y-2">
            {[
              'AI risk-scoring systems that rate some nationalities as higher risk without transparent criteria',
              'Language analysis tools used to assess credibility of asylum claims have been found to be unreliable',
              'Interview scheduling algorithms that appeared to disadvantage applicants from certain countries',
              'The Home Office has resisted disclosing how its algorithmic tools work, making independent audit impossible',
              'The Public Law Project has documented multiple cases of unexplained algorithmic disadvantage in immigration decisions',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-amber-600 dark:text-amber-400 font-bold mt-0.5 flex-shrink-0">&#x26A0;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Your rights</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            UK law provides some protections — though exercising them in practice can be difficult.
          </p>
          <div className="space-y-2">
            {[
              'Under UK GDPR, you have the right to request human review of decisions made solely by automated systems',
              'You have the right to ask for an explanation of how a significant decision was reached',
              'If you believe an immigration decision was discriminatory, you can raise this with the Equality and Human Rights Commission',
              'Immigration legal charities (ILPA, Bail for Immigration Detainees, Refugee Action) can advise on challenging automated decisions',
              'The EU AI Act classifies immigration AI as high-risk, requiring transparency; the UK is developing its own framework',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
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
