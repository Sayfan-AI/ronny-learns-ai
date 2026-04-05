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
  "The DWP's Integrated Risk and Intelligence Service (IRIS) uses AI to flag benefit claims as potentially fraudulent, triggering investigations. Critics argue it produces high false-positive rates and disproportionately targets disabled claimants.",
  "Universal Credit uses automated systems to calculate payments, apply sanctions, and process fit-for-work assessments — decisions that determine whether some of the most financially vulnerable people in the UK receive support.",
  "In 2020, a Dutch court ruled that the SyRI welfare surveillance system violated human rights law. The UK government cited this case as a cautionary tale while continuing to develop its own AI tools for benefits fraud detection.",
  "Automated benefit sanction decisions have error rates that human decision-makers would not accept. The mandatory reconsideration and appeals process exists partly because so many automated decisions are wrong.",
  "Under GDPR Article 22, people have the right not to be subject to decisions made solely by automated processing that significantly affect them — but applying this right in practice against DWP systems is difficult and rarely successful.",
]

const quizQuestions: QuizQuestion[] = [
  {
    question: "What does the DWP's Integrated Risk and Intelligence Service (IRIS) do?",
    options: [
      'It processes all Universal Credit applications automatically, replacing human case workers entirely',
      'It uses AI to identify patterns in benefit claims that suggest potential fraud, flagging cases for investigation',
      'It calculates the exact amount each Universal Credit claimant should receive based on their circumstances',
      'It monitors the social media accounts of benefit claimants to detect undeclared income or employment',
    ],
    correctIndex: 1,
    explanation:
      "IRIS is a data analytics and fraud detection system used by DWP. It combines data from multiple government sources — HMRC, DVLA, NHS records, and others — and applies algorithms to identify claims that show patterns associated with fraud or error. When IRIS flags a claim, it triggers a review by a human investigator. Critics argue the system is opaque, the criteria for flagging are not publicly known, and there is evidence it disproportionately flags disabled claimants and people from certain ethnic backgrounds. DWP argues it helps direct limited investigative resources to the most likely cases of fraud.",
    hint: 'Think about detection and flagging — not direct decision-making.',
  },
  {
    question: 'What was the SyRI case in the Netherlands, and why does it matter for the UK?',
    options: [
      'SyRI was a Dutch AI system for processing asylum claims that was found to be more accurate than human decision-makers, inspiring UK adoption',
      'SyRI was a Dutch welfare surveillance AI that a court ruled violated human rights law — specifically the right to private life — because its risk profiling was opaque and discriminatory',
      'SyRI was a software company contracted by the Dutch government whose data breach exposed millions of benefit claimants, leading to stricter EU data protection rules',
      'SyRI was a Dutch experiment in replacing job centre staff with AI advisors, which was cancelled after claimants reported worse outcomes',
    ],
    correctIndex: 1,
    explanation:
      "In 2020, a Dutch court ruled that SyRI — a system that combined data from 17 government sources to give welfare recipients a fraud risk score — violated Article 8 of the European Convention on Human Rights (the right to private life). The court found that the criteria for risk scoring were too opaque to allow meaningful challenge, and that the system had a chilling effect on legitimate claimants who feared investigation. The ruling has been widely discussed in the UK as a precedent for challenges to similar systems. The UK government cited it in its own risk assessments but has continued to develop and deploy AI tools for benefits fraud detection.",
    hint: 'Think about a court ruling on AI surveillance and human rights.',
  },
  {
    question: "What does GDPR Article 22 say about automated decision-making, and how does it apply to benefits?",
    options: [
      'GDPR Article 22 requires all automated government decisions to be explained in plain English within 72 hours of the decision being made',
      'GDPR Article 22 gives people the right not to be subject to decisions based solely on automated processing that significantly affect them — but applying this to DWP systems is practically difficult',
      'GDPR Article 22 bans automated decision-making in any context involving public services, requiring all government decisions to involve a human',
      'GDPR Article 22 requires government AI systems to be publicly audited every three years and results published in the Official Gazette',
    ],
    correctIndex: 1,
    explanation:
      "Article 22 of the UK GDPR gives people the right not to be subject to decisions made solely by automated processing that produce legal effects or significantly affect them — unless they have consented, it is necessary for a contract, or it is authorised by law with appropriate safeguards. DWP argues that its systems involve human oversight at decision points, technically complying with Article 22. However, critics argue that the human review is often cursory and rubber-stamps the AI recommendation. In practice, individual claimants rarely succeed in invoking Article 22 against DWP, partly because it is difficult to know when automated processing has been used.",
    hint: "Think about the right to challenge a decision made entirely by a machine.",
  },
  {
    question: 'What can Universal Credit claimants do if they believe an automated decision about their claim is wrong?',
    options: [
      'Nothing — automated UC decisions are legally final and cannot be challenged through any formal process',
      'They must appeal directly to the High Court, bypassing the usual DWP review process, at significant personal cost',
      'They can request mandatory reconsideration (a review by a DWP officer), appeal to an independent tribunal, and make a complaint to the ICO if they believe their data rights have been violated',
      'They must first complete a government-approved AI literacy course before they are eligible to challenge any automated benefit decision',
    ],
    correctIndex: 2,
    explanation:
      "The UK benefits appeal system has several stages. First, mandatory reconsideration — a claimant can ask DWP to look at the decision again. If they are still unhappy, they can appeal to an independent Social Security and Child Support Tribunal. Critically, these appeals succeed at a very high rate (60–70% of UC appeals result in a changed decision), which suggests that a large number of initial decisions — many of which involve automated processing — are wrong. If a claimant believes their data rights have been violated (for example, if data was used in a way they were not told about), they can also complain to the Information Commissioner's Office (ICO).",
    hint: 'Think about the formal review and appeal steps available in the UK system.',
  },
  {
    question: 'What is a concern about automated benefit sanctions in the Universal Credit system?',
    options: [
      'Automated sanctions are too generous — they allow claimants to keep full benefits for longer than human decision-makers would',
      "Automated sanctions can stop a person's benefits immediately, with insufficient human review, even when the claimant's circumstances justify an exception",
      'The automation works too slowly — claimants receive their sanctions notices weeks later than they would under the old paper-based system',
      'Automated systems apply sanctions uniformly across all claimants regardless of region, ignoring regional differences in job market conditions',
    ],
    correctIndex: 1,
    explanation:
      "Universal Credit sanctions — which reduce or stop benefits when a claimant is deemed to have failed to meet job-seeking requirements — can be applied quickly by automated systems. Critics argue that the system fails to adequately account for individual circumstances: illness, caring responsibilities, transport barriers, or cognitive disabilities that make compliance with job-seeking requirements genuinely difficult. A sanction that stops a family's income while they go through a mandatory reconsideration process (which can take months) can cause severe hardship. Research by the Trussell Trust and Joseph Rowntree Foundation has linked UC sanctions to increased food bank use and rent arrears.",
    hint: "Think about immediate financial harm and insufficient human judgment.",
  },
]

export function AIAndWelfareBenefits() {
  useMarkVisited('ai-and-welfare-benefits')

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3DB;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and welfare benefits
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI is being used inside the UK benefits system — and the serious questions
            it raises about fairness, accountability, and people's rights.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 8 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-welfare-benefits" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI in the welfare state — context</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The Department for Work and Pensions (DWP) is one of the largest government departments
            in the world, processing millions of claims every year. AI offers the prospect of faster,
            more efficient processing — but also raises serious questions about fairness.
          </p>
          <div className="space-y-2">
            {[
              'DWP processes around 20 million benefit claims, paying out around £220 billion in benefits each year',
              'Benefit fraud and error is estimated at around £8.3 billion annually — a significant amount, but small relative to the total spend',
              'Universal Credit was designed from the outset to be a digital-first, data-driven system — integrating data from HMRC, local councils, and other government agencies',
              'The DWP estimates that algorithmic fraud detection has identified hundreds of millions of pounds in potentially fraudulent claims — though many of these are false positives',
              'Over 60% of UC decisions that are appealed to independent tribunals are overturned — suggesting significant rates of error in initial decisions',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">IRIS — AI fraud detection</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The Integrated Risk and Intelligence Service is the DWP's main AI fraud detection
            platform, but its inner workings are largely opaque.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F50D;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">How it works</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">IRIS combines data from multiple sources — HMRC earnings records, DVLA vehicle ownership data, electoral roll records, bank account data shared under open banking rules — and applies machine learning models to identify claims that match patterns associated with fraud. Flagged cases are passed to human fraud investigators.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x26A0;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">Concerns</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">Civil society organisations including Big Brother Watch and Privacy International have raised concerns about: the opacity of the risk scoring criteria; evidence that disabled claimants are disproportionately flagged; the use of bank transaction monitoring; and the potential for proxy discrimination (where factors like postcode or bank branch correlate with ethnicity).</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Universal Credit — automated decisions</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            UC uses automation throughout its processes — from calculating payments to applying
            sanctions for non-compliance with job-seeking requirements.
          </p>
          <div className="space-y-2">
            {[
              "Payment calculations are mostly automated — HMRC real-time earnings data is used to adjust UC payments monthly, without a human reviewing each case",
              "Automated sanctions — benefit reductions — can be applied when a claimant is deemed to have failed to meet job-seeking requirements, sometimes without adequate consideration of their circumstances",
              "The fit-for-work assessment uses algorithmic tools to process evidence, though a human decision-maker is supposed to make the final call on whether a claimant is fit for work",
              "Debt repayments (repaying advances, overpayments) are deducted automatically from UC payments — sometimes leaving people below the minimum income threshold",
              "The appeals data tells the story: most DWP decisions that are challenged are overturned, suggesting the automated systems make a significant number of incorrect decisions",
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-amber-600 dark:text-amber-400 font-bold mt-0.5 flex-shrink-0">&#x26A0;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The SyRI case — a European precedent</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            In 2020, a Dutch court struck down a welfare surveillance system on human rights grounds
            — a landmark ruling with implications for the UK.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F1F3;&#x1F1F1;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">What was SyRI?</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">SyRI (System Risk Indication) was a Dutch government AI system that combined data from 17 government sources to give welfare recipients a risk score. High-risk postcodes — which correlated with ethnicity and poverty — were targeted for investigation. Residents were not told they were being profiled or given any way to challenge the scores.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x2696;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">The court's ruling</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">The Hague District Court ruled that SyRI violated Article 8 of the European Convention on Human Rights (the right to private life). The criteria were too opaque for meaningful challenge, the system targeted poorer neighbourhoods (disproportionately affecting minorities), and there was no effective remedy. The system was shut down.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Your rights as a claimant</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            If you or someone you know is affected by a DWP decision you believe is wrong, there are
            formal steps you can take.
          </p>
          <div className="space-y-2">
            {[
              "Request mandatory reconsideration — ask DWP to look at the decision again. This is required before you can appeal to a tribunal.",
              "Appeal to an independent Social Security and Child Support Tribunal — over 60% of UC appeals succeed, so it is worth doing.",
              "Make a Subject Access Request (SAR) under UK GDPR to see what data DWP holds about you and how it has been used in your case.",
              "If you believe your data rights have been violated (data used in ways you were not informed about), complain to the ICO.",
              "Invoke Article 22 UK GDPR — the right not to be subject to decisions made solely by automated processing. In practice, DWP argues human oversight is involved, but raising the issue formally may help your case.",
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-950 rounded-xl p-4">
            <p className="text-emerald-700 dark:text-emerald-300 text-sm leading-relaxed">
              <span className="font-semibold">Useful organisations:</span> Citizens Advice, Shelter, Turn2us, and the Child Poverty Action Group (CPAG) can help people navigate benefit challenges. The Public Law Project publishes guidance on challenging government AI decisions.
            </p>
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
