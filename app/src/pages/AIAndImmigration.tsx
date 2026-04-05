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
  'The UK Home Office uses AI to triage visa applications, flag inconsistencies, and prioritise case queues — but these tools have come under scrutiny for potential algorithmic bias, particularly against applicants from certain countries.',
  'E-Borders and biometric checks at UK airports use facial recognition through eGates to match passport photos to live faces. These systems are fast but not infallible — error rates are higher for some demographic groups.',
  'AI is used in asylum determination to verify country of origin, analyse language patterns in testimony, and assess the credibility of claims — raising serious concerns about fairness and the right to human review.',
  'Research by the Public Law Project and others has identified cases where AI-assisted immigration decisions have disadvantaged applicants based on nationality — a form of systemic discrimination baked into the training data.',
  'Under UK GDPR and the Equality Act, you have the right to request a human review of any significant decision made partly by automated means. Knowing this right exists is the first step to exercising it.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does the UK Home Office primarily use AI in visa processing?',
    options: [
      'AI automatically approves or rejects every visa application without any human involvement, based on a scoring algorithm trained on historical decisions',
      'AI triages applications by flagging inconsistencies, prioritising case queues, and identifying applications that need closer scrutiny — humans make the final decisions',
      'AI translates all visa applications from foreign languages into English and checks that every document has been correctly formatted before a caseworker reads them',
      'AI conducts video interviews with applicants, assessing their truthfulness through facial expression analysis and voice stress detection',
    ],
    correctIndex: 1,
    explanation:
      'The Home Office uses AI as a decision-support tool rather than a fully automated decision-maker for visa applications. AI systems triage incoming applications — sorting them by complexity, flagging missing documents, identifying patterns that may indicate fraud or inconsistency, and prioritising urgent cases. A human caseworker still reviews the application and makes the final decision. However, when AI flags an application as suspicious, caseworkers may give it less favourable consideration, effectively giving the AI significant influence even without formal decision-making power.',
    hint: 'Think about AI as a sorting and flagging tool that supports, rather than replaces, human caseworkers.',
  },
  {
    question: 'What are eGates at UK airports and what role does AI play in them?',
    options: [
      'Electronic ticketing gates that use AI to predict which passengers are most likely to miss their flights so airlines can overbook more efficiently',
      'Automated passport control gates that use facial recognition AI to compare a live scan of your face against the biometric photo stored in your passport chip',
      'Security scanners that use AI to detect prohibited items in hand luggage more accurately than human operators looking at X-ray images',
      'Smart boarding gates that use AI to match your boarding pass barcode against the airline\'s reservation system and flag duplicate bookings',
    ],
    correctIndex: 1,
    explanation:
      'eGates — the automated passport control gates increasingly common at UK airports — work by reading the biometric chip in your passport, which contains a high-resolution digital photograph. A camera at the gate captures a live image of your face. AI facial recognition software compares the two images and determines whether they are likely to be the same person. If the match score exceeds a threshold, the gate opens. Studies have found higher rejection rates for people with darker skin tones, older women, and people who have aged significantly since their passport photo was taken.',
    hint: 'Think about matching your live face to the photo stored on your passport chip.',
  },
  {
    question: 'What is the main concern about AI being used to assess asylum claims?',
    options: [
      'AI systems process asylum claims too slowly, creating backlogs that leave applicants waiting years for a decision even when their case is straightforward',
      'AI tools used to verify country of origin or assess credibility of testimony may contain biases from training data, and applicants often cannot challenge or understand AI-assisted decisions',
      'AI automatically grants asylum to any applicant who can produce a valid passport from a designated high-risk country, regardless of individual circumstances',
      'AI systems used in asylum processing are too expensive for the Home Office to operate at scale, so they are only used for a small fraction of cases',
    ],
    correctIndex: 1,
    explanation:
      "Asylum determination is one of the most consequential decisions a state can make. AI tools are used at various points: language analysis software may assess whether an applicant's dialect is consistent with their claimed region of origin; document verification AI checks supporting evidence; risk scoring systems may flag credibility concerns. The problems are significant: an asylum seeker may be from a region where multiple dialects are spoken; training data may reflect historical biases in who was granted or refused asylum; and the tools are often opaque — applicants and their lawyers cannot inspect the algorithm.",
    hint: 'Think about whether automated credibility assessments can be challenged, and whether the training data is free of bias.',
  },
  {
    question: 'What did the Public Law Project find about algorithmic bias in UK immigration?',
    options: [
      'That AI visa processing systems were faster and fairer than human caseworkers across all nationalities, with no statistically significant difference in outcomes by country of origin',
      'That a streaming tool used by the Home Office to triage visa applications categorised applicants partly by nationality in a way that amounted to unlawful discrimination',
      'That all AI tools currently used in UK immigration had been independently audited and certified as bias-free before deployment',
      'That AI systems used in immigration had a small but acceptable error rate comparable to the error rate of human caseworkers reviewing the same applications',
    ],
    correctIndex: 1,
    explanation:
      "In 2020, the Public Law Project published research exposing a Home Office visa streaming tool that used an applicant's nationality as a direct input when deciding how closely to scrutinise their application. Applicants from certain countries were streamed to a more intensive review track purely on the basis of nationality, before any individual assessment. This constitutes indirect discrimination under the Equality Act. Following legal challenge and media attention, the Home Office suspended and subsequently altered the tool.",
    hint: 'Think about nationality being used as a sorting criterion before individual applications are assessed.',
  },
  {
    question: 'What right do you have under UK law if an AI system has contributed to a significant decision about your immigration status?',
    options: [
      'The right to see the full source code of the AI system so you can check for errors in the algorithm that produced the recommendation about your case',
      'The right to request that a human reviews the decision, rather than having it stand as a purely automated outcome — this is protected under UK GDPR',
      'The right to an automatic appeal before an independent tribunal, with the cost of legal representation covered by the Home Office if you cannot afford a lawyer',
      'The right to request that your case be reassigned to a different AI system in case the original system has developed a systematic error affecting cases like yours',
    ],
    correctIndex: 1,
    explanation:
      "Article 22 of the UK GDPR gives individuals the right not to be subject to a decision based solely on automated processing that produces a legal or similarly significant effect on them. You have the right to request human review, to express your point of view, and to contest the decision. Organisations that can help include the Migrants' Rights Network, UNHCR UK, and the Joint Council for the Welfare of Immigrants (JCWI).",
    hint: 'Think about the right to have a human being review what an algorithm recommended about your case.',
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
            Visa processing AI, biometric border checks, asylum decision tools,
            and the serious questions about algorithmic bias and your right to a fair hearing.
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
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Why AI is used in immigration</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The UK Home Office processes millions of visa and immigration applications each year. The volume is enormous, the documents are complex, and the decisions carry life-changing consequences. Governments worldwide have turned to AI to help manage the workload — but with significant controversy about whether the resulting decisions are fair.
          </p>
          <div className="space-y-2">
            {[
              'The UK processes around 3 million visa applications per year, ranging from tourist visas to indefinite leave to remain',
              'AI tools are used to sort applications, verify documents, flag inconsistencies, and score risk — all before a human caseworker formally reviews the file',
              'Biometric eGates at UK airports now handle millions of border crossings per year, using facial recognition to match travellers to their passport photos',
              'Language analysis AI is used in some asylum cases to help verify whether an applicant\'s dialect is consistent with their stated country of origin',
              'Civil society organisations, lawyers, and academics have raised serious concerns about bias, opacity, and lack of accountability in these systems',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Visa processing AI — how it works</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            When you apply for a UK visa, your application does not go straight to a human caseworker. It passes through several automated stages first.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-indigo-50 dark:bg-indigo-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CB;</span>
              <div>
                <p className="font-semibold text-indigo-800 dark:text-indigo-200 text-sm mb-0.5">Document verification</p>
                <p className="text-indigo-700 dark:text-indigo-300 text-sm leading-relaxed">AI checks that required documents have been submitted, reads passport data, verifies that financial statements meet the threshold, and flags applications that appear to have incomplete or inconsistent supporting evidence.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-indigo-50 dark:bg-indigo-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F6A8;</span>
              <div>
                <p className="font-semibold text-indigo-800 dark:text-indigo-200 text-sm mb-0.5">Risk flagging</p>
                <p className="text-indigo-700 dark:text-indigo-300 text-sm leading-relaxed">Algorithms compare applications against risk indicators — patterns associated with visa overstays, fraudulent documents, or security concerns from historical data. Applications that score above a threshold are routed to more intensive review.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-indigo-50 dark:bg-indigo-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CA;</span>
              <div>
                <p className="font-semibold text-indigo-800 dark:text-indigo-200 text-sm mb-0.5">Queue prioritisation</p>
                <p className="text-indigo-700 dark:text-indigo-300 text-sm leading-relaxed">AI sorts applications by complexity and urgency so caseworkers see the simplest, most straightforward cases first — speeding processing times for applicants whose paperwork is in order and concentrating scrutiny on complex or flagged cases.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-cyan-100 dark:border-cyan-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">E-Borders and biometric checks</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The UK border is increasingly digital. When you enter or leave the country, multiple AI systems are involved.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F6AA;',
                label: 'eGates — facial recognition at border control',
                text: 'Automated passport control gates read the biometric chip in your passport and use facial recognition to match the stored photo to your live appearance. For most travellers this is fast and accurate. Error rates are higher for people with darker skin tones, older women, and people who have aged significantly since their passport photo was taken.',
                color: 'cyan',
              },
              {
                icon: '&#x1F4F1;',
                label: 'Advance Passenger Information',
                text: 'Airlines must submit passenger data to the Home Office before flights depart for the UK. AI cross-references this against watchlists, no-fly orders, and visa records in real time. If a match is found, border officers are alerted before the plane lands.',
                color: 'cyan',
              },
              {
                icon: '&#x1F9EC;',
                label: 'Fingerprint databases',
                text: 'Biometric residency permits issued to migrants include fingerprint data stored in a central database. Border AI can cross-reference fingerprints taken at the border against this database and against the fingerprints of people with deportation orders or criminal convictions.',
                color: 'cyan',
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
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI in asylum determination</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Asylum decisions — whether someone faces persecution if returned to their home country — are among the most consequential any government makes. AI is being used at several points in the process, raising profound questions about fairness.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'Language and dialect analysis',
                detail: "AI software analyses speech patterns and vocabulary in a claimant's testimony to assess whether their dialect is consistent with their claimed region of origin. Critics note that many regions have mixed dialects, that people may have moved internally before fleeing, and that the training data for such tools is often limited.",
              },
              {
                label: 'Document authentication',
                detail: 'AI analyses identity documents and supporting evidence for signs of forgery or inconsistency. This can be helpful but also problematic: people fleeing persecution often cannot access official documents, and the quality of genuine documents varies enormously by country.',
              },
              {
                label: 'Country of origin information tools',
                detail: "AI systems synthesise large volumes of country reports, news, and human rights documentation to help caseworkers understand conditions in a claimant's home country. When working well, this reduces caseworker research burden. When biased or incomplete, it can produce systematically wrong assessments.",
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
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Algorithmic bias — when the system is unfair by design</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            In 2020, the Public Law Project exposed a Home Office visa streaming tool that sorted applications partly by nationality — before any individual assessment had taken place. Applicants from countries that the algorithm associated with higher risk were automatically routed to more intensive scrutiny, purely on the basis of where they were from.
          </p>
          <div className="space-y-2">
            {[
              'This constituted indirect discrimination under the Equality Act 2010 — treating people less favourably based on a protected characteristic (national origin)',
              'The tool was affecting thousands of applications simultaneously, scaling discrimination in a way no individual caseworker could do',
              'Following legal challenge and media coverage, the Home Office suspended the tool',
              'The episode highlighted a wider problem: AI systems trained on historical immigration data will learn — and reproduce — whatever biases existed in past decisions',
              'Without independent audit requirements, discriminatory AI tools in government can operate for years before being exposed',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mt-0.5 flex-shrink-0">&#x26A0;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Your rights — how to challenge an AI-assisted decision</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            If an AI system has contributed to a decision about your immigration status, you have legal rights. Knowing about them is the first step.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4DC;',
                label: 'Right to human review (UK GDPR Article 22)',
                text: 'You have the right not to be subject to a decision based solely on automated processing that has a significant legal effect on you. You can request that a human reviews the decision, express your point of view, and contest the outcome.',
                color: 'green',
              },
              {
                icon: '&#x1F4CB;',
                label: 'Right to an explanation',
                text: 'You can request a meaningful explanation of how a decision affecting you was made, including what role any automated system played. In practice this right is difficult to exercise without legal support.',
                color: 'green',
              },
              {
                icon: '&#x2696;&#xFE0F;',
                label: 'Right to appeal',
                text: 'Most immigration decisions carry a right of appeal to the First-tier Tribunal (Immigration and Asylum Chamber). If you believe AI bias affected your decision, this is an argument your solicitor can make in appeal proceedings.',
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
          <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
            Organisations that can help include the Migrants' Rights Network, UNHCR UK, the Immigration Law Practitioners' Association (ILPA), and the Joint Council for the Welfare of Immigrants (JCWI).
          </p>
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
