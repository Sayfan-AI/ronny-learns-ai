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

const LESSON_TITLE = 'AI and welfare benefits'

const KEY_TAKEAWAYS = [
  "The DWP's Integrated Risk and Intelligence Service (IRIS) uses AI to detect fraud and error in benefit claims — cross-referencing data from HMRC, councils, and other sources — but generates significant numbers of false positives that harm innocent claimants.",
  'Universal Credit relies on algorithmic processing for eligibility assessments, automated sanctions, and fit-for-work determinations. Many claimants have no idea their case was influenced by an algorithm.',
  "The SyRI case in the Netherlands — where a court ruled that a welfare surveillance AI violated human rights — is a landmark warning for the UK about the legal limits of algorithmic welfare surveillance.",
  'Automated benefit decisions lack meaningful human oversight in many cases. Appeal rates for automated sanctions are high, and thousands of claimants go without money for basic needs while awaiting review.',
  'UC claimants have rights: mandatory reconsideration, appeal to an independent tribunal, and GDPR rights to request information about automated decisions that affect them.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: "What is the DWP's Integrated Risk and Intelligence Service (IRIS)?",
    options: [
      'A helpline where Universal Credit claimants can speak to a caseworker to challenge a decision made about their claim by a computer system',
      'An AI-powered system that cross-references benefit claimant data against HMRC, council, and other records to flag potential fraud or error for investigation',
      'A government database that stores the personal information of all Universal Credit claimants in a single secure location for fraud prevention purposes',
      'An independent watchdog that reviews the decisions made by DWP algorithms and publishes regular reports on their accuracy and fairness',
    ],
    correctIndex: 1,
    explanation:
      "IRIS is the DWP's data-matching and fraud detection system. It pulls together information from multiple sources — HMRC earnings records, local council data, Land Registry records, and more — and uses algorithms to identify claimants whose reported circumstances appear inconsistent with other data. When IRIS flags a case, it is referred for investigation. The problem is that discrepancies in data are not the same as fraud: data errors, reporting delays, and legitimate changes in circumstances can all trigger false flags.",
    hint: 'Think about a system that compares data from many sources to spot discrepancies.',
  },
  {
    question: 'What is the primary concern about algorithmic processing in Universal Credit?',
    options: [
      'That the algorithms used to calculate UC payments are too complex for claimants to understand, even though DWP publishes the full source code for independent review',
      'That automated sanctions, eligibility decisions, and fit-for-work assessments are made with limited human oversight — and errors leave vulnerable people without money for weeks',
      'That the Universal Credit algorithm is too generous, automatically awarding the maximum entitlement to all claimants regardless of their individual circumstances',
      'That Universal Credit algorithms only work correctly for claimants who submit their journal entries in English, disadvantaging non-English speakers',
    ],
    correctIndex: 1,
    explanation:
      "Universal Credit's digital infrastructure processes millions of decisions. Automated systems calculate entitlement, flag non-compliance, trigger sanctions for missed journal entries or appointments, and in some cases contribute to fit-for-work assessments. Research by organisations including the Child Poverty Action Group and the Trussell Trust has documented cases where automated errors have cut payments to zero, leaving families unable to afford food. The appeals process can take weeks, during which there is no income.",
    hint: "Think about what happens when an automated error cuts someone's benefits and they have to wait for a human review.",
  },
  {
    question: 'What was the SyRI case and why is it significant for the UK?',
    options: [
      'A Dutch court case in which an AI welfare surveillance system was ruled to violate human rights law, because it targeted disadvantaged communities and lacked transparency — a warning for similar systems in the UK',
      'A landmark UK Supreme Court ruling that confirmed the DWP has the right to use AI systems to make final benefit decisions without any requirement for human review',
      'A European Parliament inquiry into AI welfare surveillance that found all EU member states, including the UK, were using lawful and proportionate data-matching systems',
      'A Dutch government initiative to expand AI welfare surveillance, named after the SyRI algorithm, which was subsequently adopted by the UK DWP as a model for IRIS',
    ],
    correctIndex: 0,
    explanation:
      "In 2020, a Dutch court ruled that SyRI — a government algorithm that used data from multiple sources to score welfare claimants' fraud risk — violated Article 8 of the European Convention on Human Rights (right to private life). The court found that the system lacked transparency, disproportionately targeted people in deprived areas, and gave claimants no meaningful way to understand or challenge the score assigned to them. The UK is not bound by this ruling but it has influenced legal arguments made against IRIS and similar DWP tools.",
    hint: 'Think about a court case that found an AI welfare tool violated human rights because of its lack of transparency.',
  },
  {
    question: 'What right do UC claimants have under UK GDPR if an automated system has contributed to a decision about their claim?',
    options: [
      'The right to receive a financial payment from the DWP as compensation whenever an automated system makes an error that affects their Universal Credit claim',
      'The right to request a mandatory reconsideration by a human decision-maker, and ultimately to appeal to an independent tribunal — and the right to request information about any automated decision',
      'The right to opt out of having their Universal Credit claim processed by any automated system and to have every decision made manually by a human caseworker instead',
      'The right to see the full source code of the DWP algorithm that assessed their claim, so they can check for errors in the underlying software',
    ],
    correctIndex: 1,
    explanation:
      "Under UK GDPR Article 22, claimants have the right not to be subject to a decision based solely on automated processing that has a significant effect on them, and the right to request human review. Claimants can request mandatory reconsideration of any UC decision within one month, and appeal to the Social Security and Child Support Tribunal if the reconsideration is unsuccessful. Organisations like Citizens Advice, the Child Poverty Action Group, and Shelter can help.",
    hint: 'Think about the right to have a human review an automated decision, and the route to an independent appeal.',
  },
  {
    question: 'Why does automated fraud detection in benefits sometimes harm innocent people?',
    options: [
      'Because DWP fraud detection AI is deliberately programmed to be over-inclusive, flagging innocent claimants intentionally to deter fraudulent applications through a chilling effect',
      'Because data discrepancies — such as delays in HMRC reporting, council tax database errors, or legitimate changes in circumstances — can trigger fraud flags for claimants who have done nothing wrong',
      'Because the DWP does not review any fraud flags before taking action, immediately suspending payments as soon as an AI system identifies any inconsistency in a claimant\'s data',
      'Because all benefits claimants are treated as potential fraudsters by default, with the algorithm only clearing them after they prove their innocence through repeated document submissions',
    ],
    correctIndex: 1,
    explanation:
      "Data-matching systems flag discrepancies between what a claimant has reported and what appears in external databases. But external databases are not always up to date. HMRC earnings data may be reported months after wages are paid. Council tax records may not reflect recent changes. A change in circumstances — starting a job, a partner moving in or out — may not update across all government databases simultaneously. When the algorithm sees a discrepancy, it cannot tell the difference between deliberate fraud and a data lag.",
    hint: 'Think about data discrepancies that are not the same as actual fraud.',
  },
]

export function AIAndWelfareBenefits() {
  useMarkVisited('ai-and-welfare-benefits')

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4B0;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and welfare benefits
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            DWP fraud detection, Universal Credit algorithms, the SyRI case,
            automated sanctions, and what claimants can do to challenge AI decisions.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-welfare-benefits" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Why AI is used in the benefits system</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The UK welfare system is vast. Universal Credit alone supports over 5 million households. Processing this volume of claims, checking eligibility, detecting fraud, and administering payments requires enormous administrative capacity.
          </p>
          <div className="space-y-2">
            {[
              'The DWP is one of the largest users of data analytics in UK government, processing hundreds of millions of transactions each year',
              'Universal Credit was designed as a digital-first system — claimants manage their claims through an online journal, and algorithmic systems process much of what they report',
              "Benefit fraud and error costs the UK around £8 billion per year — a figure the government uses to justify investment in AI fraud detection",
              'Algorithmic tools are used for eligibility assessment, payment calculation, fraud flagging, sanctions decisions, and fit-for-work assessments',
              'Many claimants do not know that automated systems have influenced decisions about their claims',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">DWP IRIS — fraud detection AI</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The Integrated Risk and Intelligence Service (IRIS) is the DWP's flagship data-matching and fraud detection platform.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F50D;',
                label: 'Data sources IRIS uses',
                text: 'HMRC earnings and employment records, local council housing and council tax data, Land Registry property ownership data, DVLA records, and information from the NHS, banks, and other government departments. IRIS cross-references all of this against what claimants have reported.',
                color: 'indigo',
              },
              {
                icon: '&#x26A0;',
                label: 'What happens when IRIS flags a claim',
                text: "A flagged claim is referred for investigation. The claimant may be asked to provide additional evidence, have their payments suspended pending review, or receive a letter alleging overpayment. The claimant is often not told that an algorithm — rather than a human caseworker — initiated the investigation.",
                color: 'indigo',
              },
              {
                icon: '&#x274C;',
                label: 'The false positive problem',
                text: "IRIS cannot distinguish between fraud and data discrepancies caused by reporting delays, database errors, or legitimate changes in circumstances. Research estimates that large numbers of flagged claims involve no actual wrongdoing — but the investigation process itself is stressful and disruptive.",
                color: 'indigo',
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

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Universal Credit algorithmic decisions</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Universal Credit was built as a digital system and algorithmic processing is baked into its architecture.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'Automated payment calculations',
                detail: "UC payments are calculated algorithmically based on earnings reported through PAYE, claimant journal entries, and other data. When earnings data conflicts or is late arriving, the algorithm may calculate an incorrect award without any human checking the figures.",
              },
              {
                label: 'Automated sanctions',
                detail: "If a claimant misses a journal entry, fails to meet a job search requirement, or does not attend a Jobcentre appointment, an automated system can initiate a sanction — cutting payments for weeks or months — before a human caseworker has reviewed whether there was a good reason.",
              },
              {
                label: 'Fit-for-work assessments',
                detail: "The Work Capability Assessment, which determines whether a claimant is fit for work or entitled to additional support, uses structured forms processed algorithmically. Critics argue the scoring system fails to capture the complexity of mental illness or fluctuating disabilities.",
              },
            ].map(({ label, detail }) => (
              <div key={label} className="bg-amber-50 dark:bg-amber-950 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm">{label}</p>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The SyRI case — a landmark warning</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            In 2020, a Dutch court struck down SyRI — a government welfare surveillance algorithm — ruling it violated human rights. The case is a reference point for challenges to similar tools in the UK.
          </p>
          <div className="space-y-2">
            {[
              "SyRI was a Dutch government algorithm that combined data from dozens of sources to generate a 'risk score' for welfare claimants, predicting likelihood of fraud",
              "The algorithm was deployed primarily in deprived urban areas — targeting communities that were already disadvantaged",
              "The court found SyRI violated Article 8 of the European Convention on Human Rights because it lacked transparency and gave claimants no meaningful way to challenge their score",
              'The UN Special Rapporteur on Extreme Poverty described SyRI as emblematic of how AI welfare surveillance threatens the rights of the poorest people',
              'UK civil society organisations including Liberty and the Child Poverty Action Group have cited the SyRI ruling in legal arguments against DWP data analytics programmes',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mt-0.5 flex-shrink-0">&#x26A0;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Your rights as a UC claimant</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            If you believe an automated system has contributed to a wrong decision about your benefits, you have rights.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4DD;',
                label: 'Request mandatory reconsideration',
                text: 'You can ask the DWP to reconsider any UC decision within one month of receiving it. If the reconsideration fails, you can appeal to an independent tribunal.',
                color: 'green',
              },
              {
                icon: '&#x2696;&#xFE0F;',
                label: 'Appeal to an independent tribunal',
                text: 'The Social Security and Child Support Tribunal is independent of the DWP. It can overturn DWP decisions. The success rate for claimants who appeal is significant.',
                color: 'green',
              },
              {
                icon: '&#x1F4DC;',
                label: 'Exercise your GDPR rights',
                text: 'Under UK GDPR Article 22, you have the right to request information about any automated decision that has significantly affected you, and to request human review. You can submit a Subject Access Request to the DWP.',
                color: 'green',
              },
              {
                icon: '&#x1F4DE;',
                label: 'Get help from a specialist organisation',
                text: 'Citizens Advice, the Child Poverty Action Group (CPAG), Shelter, and local welfare rights organisations can help you challenge decisions and navigate the appeals system.',
                color: 'green',
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

        <LessonNote lessonId="ai-and-welfare-benefits" />
        <ReviewLaterButton lessonId="ai-and-welfare-benefits" />

        <Quiz lessonId="ai-and-welfare-benefits" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-welfare-benefits" />
        <LessonFeedback lessonId="ai-and-welfare-benefits" />

        <RelatedLessons currentId="ai-and-welfare-benefits" />

        <NextLesson currentId="ai-and-welfare-benefits" />

      </div>
    </div>
  )
}
