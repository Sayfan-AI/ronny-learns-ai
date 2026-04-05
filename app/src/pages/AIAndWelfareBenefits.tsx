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

const LESSON_TITLE = 'AI and welfare benefits — DWP fraud detection, Universal Credit algorithms, SyRI case, and claimant rights'

const KEY_TAKEAWAYS = [
  'The DWP uses automated systems to detect potential fraud and error in benefit claims — the Integrated Risk and Intelligence Service (IRIS) analyses claimant data at scale and flags cases for investigation.',
  'Automated processes in Universal Credit handle large volumes of decisions — including benefit cap calculations and some sanction referrals — with limited human review of individual cases.',
  'The SyRI case in the Netherlands (2020) is the world\'s most significant ruling on AI welfare surveillance: a court ruled that a government risk-scoring system for welfare fraud violated the European Convention on Human Rights.',
  'UK benefit claimants have the right to mandatory reconsideration and appeal of individual decisions — but automated processes can make it hard to understand what evidence was relied upon.',
  'Civil society organisations have raised concerns that automated welfare systems disproportionately affect disabled claimants, people with complex needs, and those who struggle with digital processes.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is the DWP\'s Integrated Risk and Intelligence Service (IRIS) and how does it work?',
    options: [
      'A human team of investigators who interview benefit claimants suspected of fraud — IRIS stands for Interview and Review Integrated Service',
      'An automated data analytics system that analyses claimant information from multiple sources to identify patterns associated with fraud or error, flagging cases for human investigation',
      'A private company contracted by the DWP to conduct random audits of benefit claims, with no automated component',
      'A system that automatically stops benefit payments when fraud is suspected — decisions are entirely automated with no human involvement at any stage',
    ],
    correctIndex: 1,
    explanation:
      "IRIS is the DWP's automated fraud and error detection capability. It uses machine learning to analyse large volumes of claimant data — including data matched with HMRC, local authorities, and other government departments — to identify claims that show patterns associated with fraud or error. When IRIS flags a claim, it is passed to a human compliance officer for investigation. The system doesn't make final decisions, but it determines which claimants receive enhanced scrutiny. Critics have raised concerns about false positives, about what data is used, and about whether the profiling criteria are discriminatory.",
    hint: 'Think about a system that processes data to find potential problems, rather than making final decisions.',
  },
  {
    question: 'What was the SyRI case and why does it matter for the UK?',
    options: [
      'A UK case where the DWP was sued for using AI to delay benefit payments — the court ordered the DWP to process claims faster',
      'A Dutch case where a court ruled that a government AI welfare surveillance system violated the European Convention on Human Rights — it is the world\'s first successful legal challenge to AI welfare profiling',
      'A European Commission investigation into benefit fraud detection AI across all EU member states — it resulted in a requirement for human oversight in all automated decisions',
      'A Scottish case where AI was used to assess disability benefit claims — the court found the AI system was accurate and its use was therefore lawful',
    ],
    correctIndex: 1,
    explanation:
      'The SyRI (System Risk Indication) case was decided by a Dutch court in February 2020. SyRI was a government system that combined data from 17 different sources (tax records, benefits data, employment records, housing data) to produce a risk score for welfare fraud. The court found that the system violated Article 8 of the ECHR (right to private life) because its workings were not sufficiently transparent — claimants could not know what data was used or why they were flagged. Although a Dutch case, it is highly relevant to UK welfare AI because the UK is a signatory to the ECHR and many UK systems raise similar transparency concerns.',
    hint: 'Think about a court ruling that an AI profiling system failed because people could not know how it worked.',
  },
  {
    question: 'What rights does a Universal Credit claimant have if they think an automated decision about their claim is wrong?',
    options: [
      'None — Universal Credit decisions are made by algorithm and there is no right to challenge them under current law',
      'They can request a mandatory reconsideration of the decision, which must be conducted by a human DWP decision-maker, and if still unhappy can appeal to an independent tribunal',
      'They can only challenge a Universal Credit decision if they can prove the algorithm made a mathematical error — general disagreement with the outcome is not grounds for challenge',
      'They can appeal directly to a court but must pay a fee of several hundred pounds, which is then refunded if they win',
    ],
    correctIndex: 1,
    explanation:
      'Universal Credit claimants have statutory rights to challenge decisions. The first step is mandatory reconsideration — a request that the DWP look at the decision again, which must be carried out by a different decision-maker. If the mandatory reconsideration upholds the original decision, the claimant can appeal to the Social Entitlement Chamber (First-tier Tribunal), which is independent of the DWP. Appeals are free of charge. Citizens Advice and welfare rights organisations can provide free support with both mandatory reconsiderations and tribunal appeals. In practice, significant numbers of appeals succeed, which raises questions about the accuracy of original automated or semi-automated decisions.',
    hint: 'Think about the formal two-step process: first internal review, then external appeal.',
  },
  {
    question: 'How might automated benefit systems disproportionately affect disabled claimants?',
    options: [
      'They cannot — automated systems treat all claimants identically, which eliminates the possibility of disadvantaging any particular group',
      'Automated processes typically require digital interaction and consistent data patterns — claimants with cognitive impairments, fluctuating conditions, or complex needs may struggle more with digital portals and may have inconsistent data profiles that trigger higher risk scores',
      'Disabled claimants are actually advantaged by automated systems because the algorithms give extra points to claimants with a medical diagnosis',
      'The only disadvantage disabled claimants face is slower processing — automated systems take longer with disability claims because they contain more complex evidence',
    ],
    correctIndex: 1,
    explanation:
      "Automated benefit systems can disadvantage disabled claimants in several ways. Digital-first Universal Credit requires regular online journal entries and evidence uploads — people with cognitive impairments, visual impairments, or limited digital skills may struggle. Fraud detection algorithms may flag unusual data patterns that reflect disability-related life circumstances rather than fraud: irregular employment patterns (common with fluctuating conditions), multiple address changes (common with people who move between care settings), or gaps in evidence submission. The charity Scope and the Disability Benefits Consortium have documented cases where automated processes generated incorrect decisions for disabled claimants at disproportionate rates.",
    hint: 'Think about what assumptions an algorithm might make about "normal" behaviour that disabled people might not match.',
  },
  {
    question: 'What can a benefit claimant do if they want to understand what data was used in an automated decision about their claim?',
    options: [
      'Nothing — DWP is exempt from all data protection legislation and claimants have no right to see what data was used in their case',
      'They can submit a Subject Access Request to the DWP to see what personal data is held about them and how it has been used — the DWP must respond within one month',
      'They must hire a solicitor and apply to the High Court for disclosure of the data — this is the only legal route available to claimants',
      'They can only access this information through their Member of Parliament — direct requests to the DWP are not permitted',
    ],
    correctIndex: 1,
    explanation:
      'Under the UK GDPR and Data Protection Act 2018, anyone has the right to submit a Subject Access Request (SAR) to any organisation holding their personal data, including the DWP. The DWP must respond within one month (or three months for complex cases) and provide a copy of all personal data held, including information about automated processing. This is free. Claimants can use a SAR to understand what data DWP holds about them and how it was used. If the DWP fails to respond adequately, a complaint can be made to the Information Commissioner\'s Office. Civil society organisations like the Big Brother Watch provide guidance on making SARs to government departments.',
    hint: 'Think about the standard data protection right that everyone has to see their own data.',
  },
]

export function AIAndWelfareBenefits() {
  useMarkVisited('ai-and-welfare-benefits')

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4B0;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and welfare benefits
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            DWP fraud detection, Universal Credit algorithms, the landmark SyRI
            case, and what benefit claimants can do to challenge automated
            decisions.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm px-4 py-2 rounded-full">
              <span>About 8 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-welfare-benefits" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-yellow-100 dark:border-yellow-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">DWP automated fraud detection</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The DWP pays out over £200 billion in benefits each year and uses automated tools to detect fraud and error at scale.
          </p>
          <div className="space-y-3">
            {[
              { icon: '&#x1F4CA;', label: 'IRIS — the risk intelligence system', text: 'The Integrated Risk and Intelligence Service analyses claimant data from multiple government sources to flag cases showing patterns associated with fraud. IRIS does not make final decisions — it determines which cases receive enhanced human scrutiny.' },
              { icon: '&#x1F4BB;', label: 'Data matching', text: 'DWP matches its claimant data against HMRC tax records, local authority records, and financial data. Discrepancies trigger automated flags. This catches genuine fraud but can also flag legitimate claimants whose circumstances are complex or unusual.' },
              { icon: '&#x1F916;', label: 'Real-time earnings data', text: 'Universal Credit uses real-time PAYE data from HMRC to automatically adjust monthly payments based on earnings. This is mostly beneficial (payments update quickly) but has caused overpayment recovery issues when data errors occur.' },
              { icon: '&#x26A0;&#xFE0F;', label: 'The false positive problem', text: "Any system that flags millions of claims for scrutiny will generate false positives — legitimate claimants who are incorrectly identified as higher risk. The DWP has not published data on its false positive rate, which critics argue makes it impossible to assess whether the system is proportionate." },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-yellow-50 dark:bg-yellow-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-yellow-800 dark:text-yellow-200 text-sm mb-0.5">{label}</p>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The SyRI case — a landmark ruling</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            In February 2020, a Dutch court delivered the world's most significant ruling on AI welfare surveillance.
          </p>
          <div className="bg-red-50 dark:bg-red-950 rounded-xl p-4 space-y-3">
            <p className="font-bold text-red-800 dark:text-red-200 text-sm">What was SyRI?</p>
            <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
              The System Risk Indication (SyRI) was a Dutch government tool that combined data from 17 sources — tax records, employment data, benefits history, housing data, debt records, education data — to create a risk score for each individual. High-scoring individuals were placed on a watchlist for fraud investigation.
            </p>
            <p className="font-bold text-red-800 dark:text-red-200 text-sm">The court's ruling</p>
            <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
              The Hague District Court ruled that SyRI violated Article 8 of the European Convention on Human Rights (right to private life). The system was too opaque — individuals could not know what data was used or why they were flagged. The profiling was deployed only in lower-income postcodes, creating geographic discrimination. The court found the surveillance was disproportionate to the stated aim of detecting fraud.
            </p>
            <p className="font-bold text-red-800 dark:text-red-200 text-sm">Why it matters for the UK</p>
            <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
              The UK remains a signatory to the ECHR. UK welfare AI systems that share SyRI's characteristics — opaque profiling of lower-income populations, combination of multiple data sources, limited transparency about how scores are produced — face the same legal risks. The ruling is cited in UK civil society challenges to DWP automated systems.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Your rights as a benefit claimant</h2>
          <div className="space-y-3">
            {[
              { icon: '&#x1F4DD;', label: 'Mandatory reconsideration', text: 'Any benefit decision can be challenged through mandatory reconsideration — a fresh look by a different DWP decision-maker. This must be requested within one month of the decision. It is free and you do not need a lawyer.' },
              { icon: '&#x2696;&#xFE0F;', label: 'Appeal to an independent tribunal', text: 'If mandatory reconsideration upholds the decision, you can appeal to the Social Entitlement Chamber (First-tier Tribunal). This is independent of the DWP and free. Large numbers of appeals succeed — the DWP\'s own statistics show over 60% of PIP appeals are decided in the claimant\'s favour.' },
              { icon: '&#x1F4E8;', label: 'Subject Access Request', text: 'Submit a SAR to the DWP to see all personal data held about you, including data from automated systems. This can reveal what information was used in your case.' },
              { icon: '&#x1F91D;', label: 'Get help', text: 'Citizens Advice, welfare rights organisations, and local councils often provide free welfare rights advisers who can help with mandatory reconsiderations and appeals. Turn2Us and the Benefits and Work website also have free guidance.' },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">{label}</p>
                  <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <LessonNote lessonId="ai-and-welfare-benefits" />

        <Quiz questions={quizQuestions} lessonId="ai-and-welfare-benefits" />

        <ReviewLaterButton lessonId="ai-and-welfare-benefits" />

        <LessonRating lessonId="ai-and-welfare-benefits" />

        <LessonFeedback lessonId="ai-and-welfare-benefits" />

        <RelatedLessons currentId="ai-and-welfare-benefits" />

        <NextLesson currentId="ai-and-welfare-benefits" />

      </div>
    </div>
  )
}
