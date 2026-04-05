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
  "The DWP uses AI-powered data matching across HMRC, council, and banking records to flag suspected Universal Credit fraud — but the system generates significant numbers of false positives that can leave innocent claimants without money.",
  "In 2020 a Dutch court ruled that the government's SyRI risk-scoring system for welfare fraud violated human rights. UK advocacy groups have drawn parallels with DWP's own data-matching tools.",
  "Automated sanctions decisions — where UC payments are stopped by algorithm — have been found to disproportionately affect disabled claimants, carers, and people with complex needs.",
  "Under UK GDPR Article 22 and the Equality Act 2010, claimants have the right to request human review of automated benefit decisions and to challenge outcomes they believe are discriminatory.",
  "If you receive an automated DWP decision you believe is wrong, you can request mandatory reconsideration within one month. If unsuccessful, you can appeal to an independent tribunal.",
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is the DWP\'s Integrated Risk and Intelligence Service (IRIS)?',
    options: [
      'A helpline that Universal Credit claimants can call to report suspected fraud by other claimants',
      'An AI-powered data-matching system that cross-references benefit claims with tax, banking, and council data to identify suspected fraud or errors',
      'A service that automatically calculates how much Universal Credit each claimant should receive based on their household circumstances',
      'A database maintained by the police that flags claimants with criminal records for additional scrutiny',
    ],
    correctIndex: 1,
    explanation:
      "IRIS matches data from multiple government and private sources — HMRC employment records, landlord checks, bank account activity — against benefit claims to identify discrepancies. When a match is flagged as suspicious, a case may be opened. Critics argue the system has a high false positive rate, particularly affecting people with complex living arrangements, irregular income, or self-employment — groups that are harder for simple data matching to interpret accurately.",
    hint: 'Think cross-referencing — comparing your claim against other databases to check for inconsistencies.',
  },
  {
    question: 'What did the Dutch SyRI case establish?',
    options: [
      'That AI fraud detection in welfare systems is always accurate enough to make fully automated decisions without human review',
      'That governments can freely share all citizen data across agencies without needing to notify individuals',
      'That an AI risk-scoring system used to identify welfare fraud suspects violated human rights — specifically the right to private life — because the algorithm was opaque and non-challengeable',
      'That the use of AI in welfare decisions is only acceptable when the AI\'s decisions are reviewed by a doctor before being enacted',
    ],
    correctIndex: 2,
    explanation:
      "In 2020, a Dutch court ruled that SyRI — a system that assigned risk scores to citizens based on data from multiple government databases to identify potential welfare fraud — breached Article 8 of the European Convention on Human Rights (the right to private and family life). The court found the algorithm was too opaque, could not be meaningfully challenged by individuals, and was discriminatory in its targeting of lower-income neighbourhoods. UK legal campaigners at the Public Law Project have argued DWP's similar tools raise the same concerns.",
    hint: "The key issue was transparency and the ability to challenge — if you can't see how a decision was made, you can't effectively appeal it.",
  },
  {
    question: 'Which groups are most likely to be incorrectly flagged by automated benefit fraud detection?',
    options: [
      'People who receive exactly the same amount of benefit each month with no changes to their circumstances',
      'People with complex circumstances — irregular income, multiple jobs, shared housing, caring responsibilities — whose situations are harder for simple data-matching to interpret correctly',
      'People who have never claimed any form of benefit before, because they have no track record in the system',
      'People who live in rural areas, because rural data is less reliable than urban data',
    ],
    correctIndex: 1,
    explanation:
      "Automated fraud detection performs best with simple, consistent cases and struggles with complexity. A self-employed person whose income varies month-to-month, a carer who provides unpaid care across multiple households, or someone in insecure housing who moves frequently all present patterns that may appear suspicious to an algorithm even when everything is entirely legitimate. Research by Liberty and the Joseph Rowntree Foundation has found automated welfare decisions disproportionately affect disabled people, single parents, and people in precarious work.",
    hint: 'Algorithms struggle with complexity and deviation from the expected pattern — even when there is an innocent explanation.',
  },
  {
    question: 'What is "mandatory reconsideration" in the context of Universal Credit?',
    options: [
      'A legal requirement for the DWP to use AI to double-check every decision it makes',
      'The process by which claimants must report any change in their circumstances to UC online within 14 days',
      'A formal process where you ask the DWP to review a UC decision you believe is wrong — the first step before appealing to an independent tribunal',
      'An automatic review that happens every year when your UC claim is renewed',
    ],
    correctIndex: 2,
    explanation:
      "Mandatory reconsideration (MR) is the formal process for challenging a Universal Credit decision. You must request it within one month of the decision. A different DWP decision-maker reviews the case. If the MR upholds the original decision, you can then appeal to the independent Social Security and Child Support Tribunal. Success rates at tribunal are significantly higher than at MR stage — over 60% of UC appeals at tribunal succeed. Getting welfare rights advice from organisations like Citizens Advice or your local law centre before appealing can significantly improve outcomes.",
    hint: 'Mandatory reconsideration is the first formal step — a request for someone else at the DWP to look at the decision again.',
  },
  {
    question: 'Under UK law, what right do UC claimants have regarding automated decisions that significantly affect them?',
    options: [
      'No specific rights — the DWP can make fully automated decisions about benefits without any requirement to explain them',
      'The right to request that all future UC decisions about them are made by a human, not an algorithm',
      'Under UK GDPR Article 22, the right not to be subject to a decision based solely on automated processing, and to request human review and an explanation of the decision',
      'The right to see the source code of any algorithm used to assess their claim',
    ],
    correctIndex: 2,
    explanation:
      "UK GDPR Article 22 gives individuals the right not to be subject to a decision based solely on automated processing when that decision significantly affects them — such as stopping benefit payments. In practice, the DWP argues its decisions involve human elements, but campaigners dispute how meaningful that human oversight actually is. The right to an explanation under GDPR means you can ask what data was used and how the decision was reached. You can also make a Subject Access Request to see all data the DWP holds about you.",
    hint: 'Article 22 of UK GDPR is the key legal protection — it covers decisions made solely by automated systems that significantly affect you.',
  },
]

export function AIAndWelfareBenefits() {
  useMarkVisited('ai-and-welfare-benefits')

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3DB;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and welfare benefits
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI is being used inside the UK benefits system to detect fraud and make decisions
            that affect some of the most vulnerable people in society &mdash; and what your rights are.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-welfare-benefits" />
          <ShareButton lessonTitle="AI and welfare benefits" />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How AI is used in the UK benefits system</h2>
          <p className="text-gray-600 leading-relaxed">
            The Department for Work and Pensions (DWP) manages benefits for millions of people.
            Administering Universal Credit alone costs billions of pounds a year and requires
            processing enormous volumes of claims. AI and automated data-matching tools have
            become central to how the DWP detects fraud and manages the system.
          </p>
          <div className="bg-orange-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-orange-800 text-sm">The scale of the system</p>
            <p className="text-orange-700 text-sm leading-relaxed">
              Over 6 million people receive Universal Credit in the UK. The DWP estimates that
              fraud and error cost around &pound;8.3 billion in 2022/23. To tackle this, it operates
              the Integrated Risk and Intelligence Service (IRIS) &mdash; a data-matching platform
              that compares claim data against HMRC records, bank accounts, landlord information,
              and other government databases to flag discrepancies.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The problems: false positives and opaque decisions</h2>
          <p className="text-gray-600 leading-relaxed">
            Automated fraud detection is faster than manual checking — but it also generates
            significant numbers of false positives: innocent claimants incorrectly flagged as
            suspicious.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x26A0;&#xFE0F;',
                label: 'False positives at scale',
                text: "When the DWP's data-matching system flags a case, payments can be paused or claims closed while investigation takes place. For people living on very tight budgets — often with no savings — even a week without UC can mean not being able to pay rent or buy food. The DWP acknowledges its systems generate cases that turn out to be incorrect, but does not routinely publish false positive rates.",
              },
              {
                icon: '&#x1F9E9;',
                label: 'Complexity and error',
                text: 'Automated systems perform poorly on complex cases. Self-employed people whose income varies month-to-month, people in shared housing arrangements, carers providing support across multiple households, and people moving between zero-hours jobs present patterns that simple data-matching can misread as suspicious.',
              },
              {
                icon: '&#x1F510;',
                label: 'Opaque algorithms',
                text: 'Claimants are rarely told which algorithm flagged their case or why. The DWP has resisted releasing full details of its risk-scoring models, citing fraud prevention concerns. This opacity makes it very difficult for individuals to understand or challenge why they have been targeted.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The SyRI case: a warning from the Netherlands</h2>
          <p className="text-gray-600 leading-relaxed">
            The most significant legal ruling on AI welfare surveillance came from the Netherlands,
            not the UK &mdash; but its implications are global.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F1F3;&#x1F1F1;',
                label: 'What was SyRI?',
                text: 'SyRI (Systeem Risico Indicatie) was a Dutch government AI system that assigned risk scores to citizens by combining data from multiple government databases — including tax records, housing data, employment history, and social services records — to identify people likely to commit welfare fraud.',
              },
              {
                icon: '&#x2696;&#xFE0F;',
                label: 'What the court found',
                text: "In February 2020, a court in The Hague ruled that SyRI violated Article 8 of the European Convention on Human Rights (the right to private and family life). The court found the system was not sufficiently transparent, could not be meaningfully challenged by individuals, and was predominantly deployed in low-income, high-migration neighbourhoods — a form of systemic discrimination.",
              },
              {
                icon: '&#x1F1EC;&#x1F1E7;',
                label: 'UK parallels',
                text: "Campaigners at the Public Law Project and Liberty have argued that DWP's data-matching and risk-scoring tools raise the same concerns as SyRI. A 2022 report by the Centre for AI and Digital Policy found the DWP's automated systems failed to meet the standards set by the SyRI judgment. To date, no UK court has ruled on these systems directly.",
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

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Your rights: what you can do</h2>
          <p className="text-gray-600 leading-relaxed">
            If you receive an automated DWP decision that you believe is wrong, you have
            legal rights and a clear process to challenge it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '&#x1F4CB;', title: 'Mandatory reconsideration', text: 'If a UC decision stops or reduces your payments, you can request mandatory reconsideration within one month. Ask a different DWP decision-maker to review the case. Get this in writing.' },
              { icon: '&#x2696;&#xFE0F;', title: 'Independent tribunal', text: 'If mandatory reconsideration fails, you can appeal to the Social Security and Child Support Tribunal. Over 60% of UC appeals succeed at tribunal. Get welfare rights advice first.' },
              { icon: '&#x1F4DC;', title: 'Subject Access Request', text: 'Under UK GDPR, you can request all data the DWP holds about you — including what data was used in any automated risk assessment. The DWP must respond within one month.' },
              { icon: '&#x1F64B;', title: 'Get help', text: 'Citizens Advice, your local law centre, and welfare rights charities like Turn2Us can help you navigate the system. Represented appellants are far more likely to succeed.' },
            ].map(({ icon, title, text }) => (
              <div key={title} className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl" dangerouslySetInnerHTML={{ __html: icon }} />
                  <p className="font-semibold text-gray-800 text-sm">{title}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-welfare-benefits" />
        <LessonNote lessonId="ai-and-welfare-benefits" />

        <Quiz questions={quizQuestions} lessonId="ai-and-welfare-benefits" lessonTitle={LESSON_TITLE} />

        <LessonFeedback lessonId="ai-and-welfare-benefits" />
        <LessonRating lessonId="ai-and-welfare-benefits" />
        <RelatedLessons currentId="ai-and-welfare-benefits" />
        <NextLesson currentId="ai-and-welfare-benefits" />
      </div>
    </div>
  )
}
