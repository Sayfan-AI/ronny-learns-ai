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

const LESSON_TITLE = 'AI and immigration — Home Office streaming algorithm, border AI, asylum processing, and rights to challenge'

const KEY_TAKEAWAYS = [
  'The UK Home Office uses an automated streaming algorithm to tier visa applications — a judicial review found it was unlawfully discriminatory against applicants from certain nationalities before it was withdrawn in 2020.',
  'AI-powered e-gates at UK airports use facial recognition to verify travel documents — faster than manual passport control, but with documented higher error rates for certain demographic groups.',
  'AI tools are used to assist decision-makers in asylum claim processing, including document verification and credibility assessment, raising concerns about algorithmic bias in life-affecting decisions.',
  'The immigration exemption in the UK Data Protection Act 2018 limits some GDPR rights for immigration-related personal data — one of the broadest exemptions in UK data protection law.',
  'People subject to automated immigration decisions have limited but real rights: they can request information about AI systems used, challenge decisions through administrative review, and seek judicial review of unlawful automated processes.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What was the UK Home Office visa streaming algorithm and why was it withdrawn?',
    options: [
      'A system for routing paper visa applications to the correct office — it was withdrawn because Home Office staff preferred digital processing',
      'An automated system that sorted visa applications into fast-track and scrutiny streams based on applicant profiles — a judicial review found it was unlawfully discriminatory based on nationality before it was withdrawn in 2020',
      'A tool used by border officers to check visa validity at airports — it was withdrawn after technical failures caused significant queuing at Heathrow',
      'A machine learning model that predicted which visa applicants would overstay — it was withdrawn after the government decided visa overstaying was no longer a priority',
    ],
    correctIndex: 1,
    explanation:
      'The Home Office streaming algorithm automatically sorted visa applications into "streams" — essentially fast-tracking some and flagging others for enhanced scrutiny. A judicial review brought by the Joint Council for the Welfare of Immigrants found that the system had unlawfully discriminated based on nationality, in effect treating nationals from certain countries (predominantly non-white majority countries) as higher risk by default. The algorithm was withdrawn in August 2020. The case raised fundamental questions about whether automated systems in immigration should be presumptively lawful or require positive justification.',
    hint: 'Think about an automated system that sorted applicants before a human looked at their case.',
  },
  {
    question: 'How does facial recognition work at UK border e-gates and what are its limitations?',
    options: [
      'E-gates compare your face to a photo stored in a central government database of all UK citizens — they cannot process foreign nationals at all',
      'E-gates use facial recognition to compare your live face to the photo chip in your passport — accurate for most users, but with documented higher error rates for people with darker skin tones, older women, and children',
      'E-gates scan your retina rather than your face — iris patterns are unique and the technology has perfect accuracy across all demographics',
      'The facial recognition in e-gates is purely decorative — the actual verification is done by an officer watching a video feed from behind the gate who checks each passenger manually',
    ],
    correctIndex: 1,
    explanation:
      "UK e-gates compare the passenger's live facial image against the biometric photo stored in the passport chip. For most users they work well and are faster than manual passport control. Academic studies and government audits have found higher failure rates for certain groups — particularly people with darker skin tones (where lighting and contrast affects accuracy), older women (whose facial features may have changed significantly from a passport photo taken years earlier), and children. People who are declined by an e-gate are redirected to a manual passport check — the consequences of a false rejection are inconvenience rather than harm, but the differential accuracy raises equity concerns.",
    hint: 'Think about what the e-gate is actually comparing and why that comparison might be harder for some groups.',
  },
  {
    question: 'What is the immigration exemption in the UK Data Protection Act 2018 and why is it controversial?',
    options: [
      'An exemption that protects the privacy of immigration officers — they cannot be identified in any data requests related to visa refusals',
      'A provision that allows the Home Office to withhold personal data from individuals if disclosure would prejudice the maintenance of effective immigration control — critics say it is used too broadly to block legitimate data access requests',
      'A legal framework that requires the Home Office to share all personal data with border agencies of other countries automatically without requiring consent',
      'An exemption that prevents AI systems from being used in immigration decisions entirely, as a safeguard against algorithmic discrimination',
    ],
    correctIndex: 1,
    explanation:
      "The immigration exemption in Section 40 and Schedule 2 of the UK Data Protection Act 2018 allows personal data to be processed — and data subject rights to be restricted — to the extent required for the maintenance of effective immigration control. Critics argue this exemption is exceptionally broad and has been used to block subject access requests from people trying to understand why their visa was refused or why they appear on a watchlist. The UK Supreme Court in 2021 found parts of the exemption to be incompatible with EU retained law (before the UK introduced its own immigration exemption post-Brexit). The exemption remains contentious among immigration lawyers and civil liberties groups.",
    hint: 'Think about a legal provision that restricts rights normally available under data protection law.',
  },
  {
    question: 'How is AI used in UK asylum claim processing?',
    options: [
      'AI makes the final decision on every asylum claim in the UK — human caseworkers are only involved in the most complex 5% of cases',
      'AI tools assist with document verification and country of origin information retrieval, but final decisions on asylum claims must be made by trained human caseworkers',
      'AI is not used at all in asylum processing — the Home Office has a blanket ban on AI in refugee determination to comply with UNHCR guidance',
      'AI assesses the credibility of asylum seekers by analysing voice stress patterns during interviews, with the results used as primary evidence in the decision',
    ],
    correctIndex: 1,
    explanation:
      'In the UK, asylum decisions are made by Home Office caseworkers rather than automated systems. However, AI tools assist the process: document verification tools check the authenticity of passports and identity documents; country of origin information databases are AI-assisted; and language analysis tools are sometimes used to assess whether a claimant\'s dialect is consistent with their claimed nationality. Critics have raised concerns about the reliability of linguistic analysis for credibility assessment, given the complexity of dialects and the prevalence of multilingualism in countries of origin. The UNHCR has raised concerns about automated tools being used in any part of the asylum process given the stakes involved.',
    hint: 'Think about what role AI plays in assisting rather than replacing human decision-makers.',
  },
  {
    question: 'What can someone do if they believe an automated system played an unlawful role in an immigration decision affecting them?',
    options: [
      'Nothing — immigration decisions are entirely at the government\'s discretion and there is no legal mechanism to challenge the use of AI in immigration',
      'They can request information about AI systems used, seek administrative review of the decision, and — if the process was unlawful — apply for judicial review of the decision',
      'They must leave the UK immediately and apply for a new visa from their home country, as UK courts do not have jurisdiction over immigration AI systems',
      'They can only challenge the decision if they can prove the AI system was hacked — errors or bias in an AI system are not grounds for legal challenge',
    ],
    correctIndex: 1,
    explanation:
      'People subject to immigration decisions have several potential routes of challenge. They can submit a Subject Access Request to the Home Office to obtain information about their data and the systems used. They can request administrative review of visa refusals. If there is evidence that an AI system operated unlawfully — for example, by discriminating on the basis of race or nationality without justification — judicial review is available. The JWCI visa streaming case demonstrated that judicial review can succeed even against automated immigration processes. Legal aid for immigration cases has been significantly cut in England and Wales, making access to legal challenges harder, but specialist immigration law organisations do exist.',
    hint: 'Think about the range of administrative and legal options available when any government decision is challenged.',
  },
]

export function AIAndImmigration() {
  useMarkVisited('ai-and-immigration')

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F6C2;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and immigration
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            The Home Office streaming algorithm, facial recognition at borders,
            AI in asylum processing, and your rights to challenge automated
            immigration decisions.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 text-sm px-4 py-2 rounded-full">
              <span>About 8 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-immigration" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-teal-100 dark:border-teal-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The streaming algorithm case</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Between 2015 and 2020, the Home Office used an automated streaming algorithm to pre-sort visa applications before human caseworkers reviewed them. The case became a landmark in AI accountability.
          </p>
          <div className="space-y-3">
            {[
              { icon: '&#x1F4CA;', label: 'How it worked', text: 'The algorithm automatically placed visa applications into one of three streams: green (straightforward, fast-tracked), amber (standard scrutiny), or red (enhanced scrutiny). The streaming decision was made automatically before a human caseworker saw the application.' },
              { icon: '&#x2696;&#xFE0F;', label: 'The legal challenge', text: 'The Joint Council for the Welfare of Immigrants (JCWI) brought a judicial review. Analysis showed that nationalities from predominantly non-white majority countries were disproportionately routed to the higher scrutiny streams. The court found the algorithm was not sufficiently transparent or accountable.' },
              { icon: '&#x1F6AB;', label: 'The outcome', text: 'The Home Office withdrew the streaming algorithm in August 2020 rather than defend it in court. The case established important precedent: AI systems used in immigration decision-making must be lawful, non-discriminatory, and transparent.' },
              { icon: '&#x1F4CB;', label: 'The lesson', text: 'The case showed that systems presented as neutral tools for efficiency can encode and amplify historical discrimination. Automating human decisions does not remove bias — it can entrench it at scale.' },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-teal-50 dark:bg-teal-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-teal-800 dark:text-teal-200 text-sm mb-0.5">{label}</p>
                  <p className="text-teal-700 dark:text-teal-300 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI at UK borders</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI is used across UK borders — from e-gates at airports to document verification systems.
          </p>
          <div className="space-y-3">
            {[
              { icon: '&#x1F6AA;', label: 'E-gate facial recognition', text: 'Automated e-gates at UK airports use facial recognition to match the passenger to their passport photo chip. Processing time is typically 5-10 seconds versus 1-2 minutes for a manual check. Higher error rates for some demographics mean not everyone has the same experience.' },
              { icon: '&#x1F4C4;', label: 'Document verification AI', text: 'AI tools check the authenticity of passports, visas, and supporting documents — identifying forged documents and inconsistencies faster than manual inspection. Border Force and UKVI use these tools routinely.' },
              { icon: '&#x1F50D;', label: 'Advance passenger information', text: 'AI analyses flight passenger data in advance of arrival to flag individuals of interest for enhanced checks at the border. This data is shared with partner agencies.' },
              { icon: '&#x26A0;&#xFE0F;', label: 'The demographic disparity concern', text: 'Research consistently finds that facial recognition systems have higher error rates for people with darker skin tones, older women, and children. At borders this means some passengers are more likely to be incorrectly stopped or directed to manual processing — an unequal experience of the border.' },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">{label}</p>
                  <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI in asylum processing</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Asylum decisions are among the most consequential the state makes — they can determine whether someone is returned to a country where they face persecution. AI tools are used to assist, but not replace, human caseworkers.
          </p>
          <div className="space-y-2">
            {[
              'Document authentication AI checks the genuineness of passports, identity cards, and supporting evidence submitted with asylum claims',
              'Country of origin information systems use AI to help caseworkers quickly find relevant, up-to-date reports about conditions in countries of origin',
              'Language analysis tools are sometimes used to assess whether a claimant\'s dialect is consistent with their claimed nationality — a practice the UNHCR has concerns about',
              'The UNHCR\'s guidelines state that AI should not make — or appear to make — the final determination on refugee status',
              'Decision support tools that score credibility or risk can embed the biases of their training data, and training data in immigration contexts often reflects historical enforcement patterns',
            ].map(item => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5 flex-shrink-0">&#x2022;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Your rights and how to challenge AI immigration decisions</h2>
          <div className="space-y-3">
            {[
              { icon: '&#x1F4E8;', label: 'Subject Access Request', text: 'You can request all personal data the Home Office holds about you, including information about automated processing systems. This can reveal what data was used in a decision about you.' },
              { icon: '&#x1F4DD;', label: 'Administrative review', text: 'Most visa refusals can be challenged through an administrative review — a fresh look at the case by a different caseworker. If an automated system played a role, this review should assess whether it operated correctly.' },
              { icon: '&#x2696;&#xFE0F;', label: 'Judicial review', text: 'If an automated immigration process was unlawful — for example, discriminatory or insufficiently transparent — judicial review is available. The JCWI visa streaming case shows this can succeed.' },
              { icon: '&#x26A0;&#xFE0F;', label: 'The immigration exemption', text: 'Note that the UK Data Protection Act 2018 contains a broad immigration exemption that can limit standard GDPR rights. Immigration lawyers can advise on what rights apply in specific circumstances.' },
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

        <LessonNote lessonId="ai-and-immigration" />

        <Quiz questions={quizQuestions} lessonId="ai-and-immigration" />

        <ReviewLaterButton lessonId="ai-and-immigration" />

        <LessonRating lessonId="ai-and-immigration" />

        <LessonFeedback lessonId="ai-and-immigration" />

        <RelatedLessons currentId="ai-and-immigration" />

        <NextLesson currentId="ai-and-immigration" />

      </div>
    </div>
  )
}
