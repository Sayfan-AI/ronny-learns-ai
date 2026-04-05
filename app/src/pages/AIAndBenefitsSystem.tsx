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

const LESSON_TITLE = 'AI and the benefits system'

const KEY_TAKEAWAYS = [
  'The Department for Work and Pensions (DWP) uses AI and data-matching to process Universal Credit claims, verify identities, and flag potential fraud — affecting over 5 million claimants in the UK.',
  'AI fraud detection compares data across HMRC, councils, and other databases to identify discrepancies in claimants\' reported income or circumstances — but the system also generates significant numbers of false positives that harm innocent people.',
  'Algorithmic decision-making tools assist or replace caseworkers in eligibility decisions. Documented errors have left vulnerable people without money for basic needs for weeks at a time.',
  'Under UK GDPR and the Equality Act, you have the right to request a human review of any significant automated decision, to know what data was used, and to appeal decisions you believe are wrong.',
  'If you are affected by an incorrect benefits decision, Citizens Advice, Turn2us, and Shelter can provide free help. You also have the right to make a mandatory reconsideration and then appeal to an independent tribunal.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What type of AI tool does the DWP primarily use to detect potential benefits fraud?',
    options: [
      'A chatbot that interviews claimants online and uses sentiment analysis to identify when answers seem inconsistent or evasive',
      'Data-matching AI that cross-references Universal Credit claims against HMRC tax records, council tax data, and other government databases to find discrepancies',
      'Facial recognition software that checks applicants\' photos against a national identity database to detect multiple accounts being registered to the same person',
      'A predictive algorithm that scores each claimant on their likelihood of committing fraud based on their age, location, and employment history',
    ],
    correctIndex: 1,
    explanation:
      'The DWP\'s main AI tool for fraud detection is data-matching — comparing what claimants report against what other parts of government already know. If you report earning nothing but HMRC records show you received wages, the system flags a discrepancy. The DWP also uses the Public Sector Fraud Authority\'s AI tools to match across council tax records, DVLA data, and other databases. This approach has genuine success catching organised fraud, but also generates false positives — legitimate claimants whose data simply does not match (perhaps because of employer errors in pay records, delays in database updates, or the system misidentifying two people with similar details). The consequences of a false positive — payments suspended pending investigation — can be severe for people living month to month.',
    hint: 'Think about comparing information across different government databases.',
  },
  {
    question: 'What does the term "managed migration" refer to in the context of Universal Credit?',
    options: [
      'The process of helping people who have recently arrived in the UK to register for benefits and navigate the claims system in their first language',
      'The DWP\'s process of moving people from older "legacy" benefits (like Employment and Support Allowance and Tax Credits) to Universal Credit using automated letters and deadlines',
      'A voluntary scheme where claimants can choose to have their Universal Credit payments managed by a local authority rather than paid directly to them',
      'The AI system that automatically migrates claimants between payment groups as their circumstances change (for example, when they find work or have a child)',
    ],
    correctIndex: 1,
    explanation:
      "Managed migration is the government's programme to move all remaining claimants on legacy benefits (Housing Benefit, Working Tax Credit, Child Tax Credit, Income Support, and Employment and Support Allowance) onto Universal Credit. Claimants receive a 'migration notice' letter giving them three months to apply. If they do not apply in time, their legacy benefits stop automatically. Charities including Turn2us and Citizens Advice have documented cases where letters were not received, were sent to wrong addresses, or where vulnerable claimants (including people with learning disabilities) did not understand what was required of them and had all their benefits stopped as a result.",
    hint: 'Think about moving people from old benefit types to a new system.',
  },
  {
    question: 'Under UK GDPR and current law, what right does a benefits claimant have if they believe an AI-assisted decision is wrong?',
    options: [
      'The right to receive a full printout of the AI algorithm\'s source code so they can verify it themselves, but no right to have the decision reviewed by a person',
      'The right to request a mandatory reconsideration (human review) of any significant automated decision, to know what data was used, and ultimately to appeal to an independent tribunal',
      'The right to instruct a lawyer to challenge the decision in the High Court, but only after exhausting DWP\'s internal complaints process, which typically takes 18 to 24 months',
      'No specific right to challenge the decision — claimants must accept automated decisions but can re-apply after six months if their circumstances change',
    ],
    correctIndex: 1,
    explanation:
      "UK GDPR Article 22 gives people the right not to be subject to a decision based solely on automated processing that significantly affects them — including benefits decisions. The DWP must provide a meaningful human review when requested. In practice, the first step is a 'mandatory reconsideration' — you ask the DWP to look at the decision again. If that does not resolve it, you can appeal to the Social Security and Child Support Tribunal, which is free and independent of the DWP. Charities report that a very high proportion of appeals succeed when claimants are properly supported, which suggests initial decisions are frequently wrong. Citizens Advice and welfare rights services provide free help with reconsiderations and appeals.",
    hint: 'Think about the right to have a human review an automated decision.',
  },
  {
    question: 'Why have some digital rights campaigners raised concerns about the DWP\'s fraud detection AI?',
    options: [
      'Because the AI has been found to be significantly slower than human caseworkers at processing fraud investigations, leading to backlogs and delays in legitimate payments',
      'Because the system flags and suspends payments for any claimant who cannot explain a data discrepancy within 24 hours, with no allowance for people who are ill or without internet access',
      'Because data-matching generates false positives that can result in payments being suspended for innocent people, and the criteria used by the AI are not fully transparent',
      'Because the system only checks for fraud by individual claimants and does not detect fraudulent employers who manipulate payroll records to avoid triggering tax credit reductions',
    ],
    correctIndex: 2,
    explanation:
      "Several concerns have been raised by organisations including Privacy International and the Child Poverty Action Group. The core issue is transparency: the DWP has not fully disclosed the criteria its fraud detection AI uses to flag accounts, making it difficult to challenge decisions that may be based on flawed logic or biased data. There are also concerns about 'proxy discrimination' — if the AI uses postcode, housing type, or employment history as indicators of fraud risk, it may disproportionately flag people in deprived areas not because they are more fraudulent but because those characteristics correlate with the system's learned patterns. The NAO (National Audit Office) has also noted that the DWP's estimates of how much fraud the AI actually prevents versus how many false positives it generates are not publicly audited.",
    hint: 'Think about the impact of incorrect automated decisions on innocent people.',
  },
  {
    question: 'What is the "five-week wait" and how does AI interact with it?',
    options: [
      'A waiting period after an AI interview during which the system verifies identity using biometric data before a first payment can be authorised',
      'The minimum time Universal Credit claimants must wait before receiving their first payment — during which AI fraud checks run and identity is verified, leaving some claimants in hardship before any money arrives',
      'A DWP policy requiring five separate AI-assisted assessments of medical conditions before a claimant with a disability can be placed in the limited capability for work group',
      'The average processing time for a mandatory reconsideration, which uses AI to score the likelihood that a claimant\'s appeal will succeed before deciding whether to allocate a human caseworker',
    ],
    correctIndex: 1,
    explanation:
      "When someone first applies for Universal Credit, there is a built-in five-week wait before the first payment arrives — one month\'s assessment period plus up to a week for processing. During this time, AI systems run identity verification, cross-reference data, and may flag accounts for manual review. If an account is flagged, the wait can extend significantly. Charities including the Trussell Trust and Joseph Rowntree Foundation have documented a direct link between the five-week wait and increased demand at food banks — people cannot afford food, bills, or rent while waiting for their first payment. Advance payments are available (they are a loan, to be repaid from future UC payments), but not all claimants are told about them or feel able to take on more debt.",
    hint: 'Think about the gap between applying and receiving the first payment.',
  },
]

export function AIAndBenefitsSystem() {
  useMarkVisited('ai-and-benefits-system')

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4CB;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and the benefits system
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI processes Universal Credit claims, detects fraud, and makes decisions
            that affect millions — and your rights when the algorithm gets it wrong.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-benefits-system" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-teal-100 dark:border-teal-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI in the welfare state</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Every month, the Department for Work and Pensions pays out around £100 billion in benefits to millions of people across the UK. Managing a system of this scale requires automation — and AI is at the heart of it.
          </p>
          <div className="space-y-2">
            {[
              'Over 5.5 million people in the UK claim Universal Credit (UC), the main working-age benefit',
              'The DWP processes millions of changes to UC claims each month — hours worked, childcare costs, medical conditions — mostly through automated systems',
              'The DWP\'s counter-fraud team uses AI to compare claims data against HMRC, DVLA, council tax, and other records',
              'Between 2020 and 2023, the government increased spending on fraud detection AI following a spike in fraudulent claims during COVID-19',
              'Welfare rights charities report that errors in AI-assisted decisions leave some of the UK\'s most vulnerable people without money for weeks at a time',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-teal-600 dark:text-teal-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How AI processes your claim</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            When you apply for Universal Credit, AI is involved at multiple stages of your claim — from initial verification to ongoing payment calculations.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F464;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Identity verification</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Applicants must verify their identity online using Verify or the DWP's own digital identity system. AI compares documents (passport, driving licence) and cross-checks them against government databases. People without suitable ID face significant barriers to making a claim.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4B0;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Automated payment calculation</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">UC payments are calculated automatically each month using real-time earnings data from HMRC. If your employer reports higher earnings one month, your UC drops accordingly. If there is an error in your employer's payroll, your UC can drop incorrectly — and you then have to prove the error to get it corrected.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F50D;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Data-matching for fraud</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">AI continuously matches your claim data against other government databases. A discrepancy — such as your claim showing you are single but council tax records showing two adults at your address — can trigger a fraud investigation that suspends your payments while the DWP investigates.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">When the algorithm gets it wrong</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The consequences of AI errors in the benefits system are severe — unlike a wrongly targeted ad, an incorrect benefits decision can mean someone cannot eat or pay rent.
          </p>
          <div className="bg-red-50 dark:bg-red-950 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-red-800 dark:text-red-200 text-sm">Documented problems</p>
            <div className="space-y-1">
              {[
                'Employer payroll errors have caused UC to drop incorrectly when two employers\' pay periods fell in the same month',
                'Data-matching false positives have triggered fraud investigations for claimants with common names matching other DWP records',
                'Claimants with disabilities have had medical evidence processed by AI and been placed in the wrong support group',
                'During COVID-19, the rushed rollout of new AI fraud checks generated thousands of false positive flags, delaying payments for legitimate claimants',
              ].map((item) => (
                <div key={item} className="flex gap-2 items-start">
                  <span className="text-red-500 font-bold mt-0.5 flex-shrink-0">&#x26A0;</span>
                  <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Your rights and how to appeal</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            You have significant legal rights when it comes to automated decisions that affect your benefits.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x2696;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Mandatory reconsideration</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">If you disagree with a UC decision, you must first request a mandatory reconsideration — asking the DWP to look at it again with a human caseworker. You have one month to do this. Write everything down and keep copies of all correspondence.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F3DB;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Independent tribunal appeal</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">If the reconsideration does not resolve the issue, you can appeal to the Social Security and Child Support Tribunal — an independent body completely separate from the DWP. The appeal is free. Research consistently shows that claimants who appeal with support from a welfare rights adviser win their cases at a much higher rate than those who appeal alone.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4DE;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Where to get free help</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Citizens Advice provides free welfare benefits advice. Turn2us helps identify benefits you may be entitled to. Shelter can help if a benefits decision is affecting your housing. Your local council may also have a welfare rights service. You do not have to face the system alone.</p>
              </div>
            </div>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-benefits-system" />

        <Quiz questions={quizQuestions} lessonId="ai-and-benefits-system" />

        <LessonNote lessonId="ai-and-benefits-system" />
        <LessonRating lessonId="ai-and-benefits-system" />
        <LessonFeedback lessonId="ai-and-benefits-system" />

        <RelatedLessons currentId="ai-and-benefits-system" />
        <NextLesson currentId="ai-and-benefits-system" />
      </div>
    </div>
  )
}
