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

const LESSON_TITLE = 'AI and the legal system'

const KEY_TAKEAWAYS = [
  'AI is used in large law firms to review contracts and conduct legal research — tasks that once took teams of junior lawyers weeks can now be done in hours.',
  'Predictive tools that estimate the risk of reoffending are used in sentencing and bail decisions in the US. These tools have been shown to be racially biased, giving higher risk scores to Black defendants than white defendants with similar histories.',
  'Free AI-powered legal tools — like chatbots that explain your rights or help draft letters — are improving access to justice for people who cannot afford a solicitor.',
  'AI is being used in UK courts to process paperwork, manage cases, and detect fraud — but AI has not replaced judges and there are no plans for it to do so.',
  'The Solicitors Regulation Authority and the Bar Council have both published guidance on AI use by lawyers, emphasising that professional responsibility cannot be delegated to a machine.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What do AI contract review tools like Luminance and Kira primarily do?',
    options: [
      'They replace solicitors entirely — companies upload contracts and receive legally binding advice without any human involvement',
      'They read through contracts very quickly, identifying specific clauses, flagging unusual terms, and summarising key obligations — tasks that would take junior lawyers many hours',
      'They automatically negotiate the terms of contracts by communicating with the other party\'s AI system until both sides agree',
      'They only check contracts for grammatical errors and formatting inconsistencies — legal analysis still has to be done entirely by human lawyers',
    ],
    correctIndex: 1,
    explanation:
      "Contract review AI is trained on millions of contracts and learns to recognise the standard structure and language of different contract types. When you upload a new contract, it can scan hundreds of pages in seconds, finding and categorising clauses — indemnity clauses, limitation of liability, termination conditions, intellectual property provisions — and flagging anything unusual or missing. This is particularly valuable in M&A (mergers and acquisitions) due diligence, where dozens of contracts must be reviewed under time pressure. Luminance is used by major UK law firms including Slaughter and May. The human lawyer still makes the judgements; the AI handles the reading and organising.",
    hint: 'Think about reading large volumes of text quickly and identifying important clauses.',
  },
  {
    question: 'What did research into the COMPAS risk assessment tool used in the US find?',
    options: [
      'COMPAS was found to be highly accurate and unbiased — significantly reducing reoffending rates in jurisdictions where it was used in sentencing',
      'COMPAS was found to give higher risk scores to Black defendants than white defendants with similar criminal histories, demonstrating racial bias in algorithmic sentencing',
      'COMPAS was found to predict reoffending with perfect accuracy, leading to calls for its adoption in all 50 US states',
      'COMPAS was found to be too slow for practical court use — the analysis took days, making it unsuitable for decisions that needed to be made quickly',
    ],
    correctIndex: 1,
    explanation:
      "A 2016 ProPublica investigation analysed COMPAS (Correctional Offender Management Profiling for Alternative Sanctions) and found significant racial bias. Black defendants were almost twice as likely to be incorrectly labelled 'high risk' as white defendants. White defendants who went on to reoffend were more often labelled 'low risk'. COMPAS was trained on historical criminal justice data — data that reflects decades of racially unequal policing and prosecution. The AI learned and replicated those inequalities. The company behind COMPAS disputed the methodology, and the debate about how to measure algorithmic fairness continues. This case is now one of the most studied examples of AI bias in high-stakes decision-making.",
    hint: 'Think about what bias was found and who was affected.',
  },
  {
    question: 'How are free AI tools improving access to justice for ordinary people?',
    options: [
      'Free AI tools can appear in court on behalf of clients, presenting arguments to judges without the client needing to pay for a barrister',
      'Free AI chatbots and tools can explain legal rights in plain language, help people understand their options, and assist with drafting letters to landlords, employers, or benefits agencies',
      'Free AI tools can force the other party in a legal dispute to negotiate by automatically filing claims in small claims court on the user\'s behalf',
      'Free AI tools can access the court system and file legal proceedings, removing the need for any paid legal professional in straightforward cases',
    ],
    correctIndex: 1,
    explanation:
      "Many people face legal problems — unfair dismissal, landlord disputes, benefits refusals — but cannot afford a solicitor. Organisations like Citizens Advice have developed AI chatbots that ask a series of questions and provide clear, plain-English explanations of what your rights are in the specific situation you describe. DoNotPay, a US service, became famous for using AI to challenge parking tickets and later expanded to other consumer disputes. In the UK, tools like Rocket Lawyer and various charity-sector chatbots help people understand their options and draft formal letters. This does not replace professional legal advice for complex cases, but it massively helps the large number of people who need basic guidance and cannot afford to pay for it.",
    hint: 'Think about what ordinary people need help with and cannot currently afford.',
  },
  {
    question: 'What position have UK legal regulators taken on lawyers using AI tools?',
    options: [
      'The Solicitors Regulation Authority has banned all use of AI tools in legal work, citing risks to client confidentiality and professional standards',
      'UK legal regulators permit AI use but emphasise that lawyers retain full professional responsibility — they cannot simply rely on AI output without applying their own judgement',
      'UK legal regulators require all law firms to use AI for routine tasks but prohibit it in court proceedings and client-facing communications',
      'UK legal regulators have said nothing about AI — they are waiting for government legislation before issuing any guidance',
    ],
    correctIndex: 1,
    explanation:
      "The Solicitors Regulation Authority (SRA) and the Bar Council have both published guidance on AI. Their position is broadly permissive but clear on professional responsibility: lawyers are permitted to use AI tools to assist with their work, but they cannot delegate professional judgement to a machine. If a lawyer submits an AI-generated document to a court without checking it properly, they are still professionally responsible for any errors — including the notorious case of US lawyers who submitted AI-generated citations to a court, only to discover the cases cited did not exist. The SRA emphasises client confidentiality: lawyers must not input sensitive client data into AI tools whose data handling practices they have not reviewed.",
    hint: 'Think about what professional responsibility means in the context of AI.',
  },
]

export function AIAndTheLegalSystem() {
  useMarkVisited('ai-and-the-legal-system')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x2696;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and the legal system
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Contract review, legal research, access to justice, and the serious question of
            what happens when algorithms help decide who goes to prison.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-the-legal-system" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Law and technology — a complex relationship</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The law is fundamentally about language — contracts, statutes, case precedents, arguments. AI that is very good at processing language was always going to find a role here. But the stakes in legal decisions are very high, which makes the introduction of AI both potentially valuable and potentially dangerous.
          </p>
          <div className="space-y-2">
            {[
              'The UK legal services market is worth over £40 billion — legal work is expensive, which creates strong commercial pressure to find AI efficiencies',
              'A complex commercial contract can run to hundreds of pages — manual review by a junior lawyer takes days; AI can do it in minutes',
              'In England and Wales there is a significant "access to justice" gap — millions of people face legal problems every year but cannot afford legal advice',
              'The US has gone furthest in using AI in criminal justice — risk assessment tools are used in bail and sentencing decisions in many states',
              'UK courts are in the middle of a large digitisation programme (HMCTS reform) that includes AI-assisted case management',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-slate-600 dark:text-slate-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI in law firms — reading the fine print</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Large law firms have embraced AI tools for tasks that require reading and organising huge volumes of text at speed.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4C4;',
                label: 'Contract review',
                text: "Tools like Luminance (UK-built, used by major City law firms) and Kira (used globally) scan contracts for specific clause types, flag unusual terms, and produce summaries in seconds. A due diligence review that once took a team of ten junior lawyers a week can now be done in hours.",
                color: 'blue',
              },
              {
                icon: '&#x1F50E;',
                label: 'Legal research',
                text: "Westlaw and LexisNexis — the main legal database providers — have integrated AI that summarises case law, finds relevant precedents, and answers legal questions. Instead of spending hours reading cases, a lawyer can get a summary of how courts have ruled on a specific issue.",
                color: 'blue',
              },
              {
                icon: '&#x1F4DD;',
                label: 'Document drafting',
                text: "AI tools can draft first versions of standard legal documents — non-disclosure agreements, employment contracts, wills — from templates. The lawyer reviews and adapts the draft rather than starting from scratch. This reduces the cost of routine legal work.",
                color: 'blue',
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

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Predictive tools in criminal justice — a cautionary story</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            In the United States, AI tools that predict the likelihood of reoffending have been used to inform bail and sentencing decisions. The results have been deeply troubling.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x26A0;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">What COMPAS does</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
                  COMPAS (Correctional Offender Management Profiling for Alternative Sanctions) takes information about a defendant&rsquo;s background and history and produces a &ldquo;risk score&rdquo; indicating the likelihood of reoffending. Judges in some US states use this score when deciding on bail or sentence length.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CA;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">What the research found</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
                  A 2016 investigation by ProPublica found that COMPAS was nearly twice as likely to incorrectly label Black defendants as high risk compared to white defendants with similar histories. The AI had learned from historical criminal justice data — data that reflected decades of racially unequal policing — and replicated those inequalities in its predictions.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-amber-50 dark:bg-amber-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F1EC;&#x1F1E7;</span>
              <div>
                <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm mb-0.5">The UK position</p>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
                  England and Wales have used risk assessment tools (such as OASys) in probation for years, but these tools inform professional judgement rather than replace it. There are no current plans to use automated sentencing AI. The Judicial College has warned that AI must never be used to determine guilt or set sentences without human decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI and access to justice</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            One genuinely positive application of AI in law is making legal information and support available to people who cannot afford professional legal fees.
          </p>
          <div className="space-y-2">
            {[
              'Citizens Advice has developed AI-powered guidance that helps people understand their rights in plain English across housing, employment, benefits, and family law',
              'Rocket Lawyer and similar services use AI to help non-lawyers draft standard legal documents — wills, tenancy agreements, cease and desist letters — at low cost',
              'The Legal Aid Agency has been exploring AI tools to help identify people who qualify for legal aid but do not realise it',
              'AI can help litigants-in-person (people representing themselves in court) understand court procedures and draft their own submissions',
              'Law clinics at UK universities increasingly use AI tools to handle the volume of cases and extend the number of people they can help',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The cautionary tale of AI-hallucinated court cases</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            In 2023, two US lawyers submitted a court filing that cited real-seeming case law — cases with official-sounding names and references. The cases did not exist. They had been fabricated by ChatGPT.
          </p>
          <div className="bg-amber-50 dark:bg-amber-950 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm">What happened</p>
            <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
              The lawyers had asked ChatGPT to find supporting case law. The AI &ldquo;hallucinated&rdquo; — confidently produced plausible-sounding but entirely fictional case references. Neither lawyer verified the cases before submitting them to court. The judge was not impressed. The lawyers faced sanctions and public embarrassment.
            </p>
            <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm mt-2">The lesson</p>
            <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
              AI tools in law — as everywhere — require professional oversight. The UK regulators are clear: if you submit AI-generated content, you are professionally responsible for its accuracy. Always verify AI output against primary sources, especially in legal contexts where the consequences of error are serious.
            </p>
          </div>
        </div>

        <LessonNote lessonId="ai-and-the-legal-system" lessonTitle={LESSON_TITLE} />

        <Quiz questions={quizQuestions} lessonId="ai-and-the-legal-system" />

        <ReviewLaterButton lessonId="ai-and-the-legal-system" />
        <LessonRating lessonId="ai-and-the-legal-system" />
        <LessonFeedback lessonId="ai-and-the-legal-system" />

        <RelatedLessons currentId="ai-and-the-legal-system" />

        <NextLesson currentId="ai-and-the-legal-system" />
      </div>
    </div>
  )
}
