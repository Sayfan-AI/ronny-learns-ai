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
  'AI is being used to review contracts, research case law, predict the likely outcome of litigation, and flag risk in legal documents — tasks that once took lawyers hundreds of hours and cost clients thousands of pounds.',
  'Predictive sentencing tools like COMPAS in the United States assign defendants a "risk score" that is used in sentencing and parole decisions — critics argue this bakes racial bias into the justice system and removes judicial discretion.',
  'AI-powered legal research tools like Harvey, Clio, and CoCounsel (Thomson Reuters) can search millions of court judgments in seconds and summarise relevant precedents — making legal research dramatically faster and potentially cheaper.',
  'Access to justice is a serious problem in the UK: over 60% of people who need legal help cannot afford a solicitor. AI chatbots and free legal tools could help — but only if they are accurate and safe enough to rely on.',
  'The UK legal sector is cautiously adopting AI, but courts have not yet accepted AI-generated legal arguments as a substitute for qualified lawyers — and regulators are watching closely to ensure AI does not undermine the fairness of justice.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is one of the most common uses of AI in commercial legal work today?',
    options: [
      'AI judges that automatically decide the outcome of small claims court cases without any human involvement',
      'AI contract review tools that scan large volumes of legal documents for risk clauses, inconsistencies, and missing provisions far faster than a human lawyer',
      'AI systems that automatically issue legal proceedings on behalf of clients when they have a strong case, without needing a solicitor to sign off',
      'AI translation tools that convert court judgments from English into every language spoken in England and Wales simultaneously',
    ],
    correctIndex: 1,
    explanation:
      'Contract review is one of the most established uses of AI in law. Large deals — mergers, acquisitions, commercial leases, employment contracts — involve hundreds or thousands of documents. AI tools like Kira Systems, Luminance, and Diligence Engine can read every document and flag specific clause types (indemnity clauses, change-of-control provisions, data protection obligations) in a fraction of the time it would take a team of junior lawyers to do manually. This dramatically reduces the cost of due diligence for clients and frees up lawyers to focus on judgment calls rather than document-reading. Law firms that adopted these tools early have a significant competitive advantage.',
    hint: 'Think about the type of legal work that involves reading huge volumes of text quickly.',
  },
  {
    question: 'What is COMPAS and why has it been controversial in the United States?',
    options: [
      'A GPS navigation app used by police forces to direct officers to the scene of crimes more quickly, reducing response times',
      'A risk assessment algorithm used in sentencing and parole decisions that assigns defendants a score predicting likelihood of reoffending — critics argue it is racially biased and removes judicial discretion',
      'An AI system that automatically processes guilty pleas and standard offences to clear court backlogs, without requiring a judge to review each case',
      'A computer program that generates standardised sentencing guidelines so that all judges apply the law consistently, regardless of who is in the dock',
    ],
    correctIndex: 1,
    explanation:
      'COMPAS (Correctional Offender Management Profiling for Alternative Sanctions) assigns defendants a score from 1 to 10 predicting their likelihood of reoffending. Judges in some US states consider this score when deciding sentences and parole. A 2016 ProPublica investigation found that COMPAS incorrectly flagged Black defendants as higher risk at nearly twice the rate of white defendants, and vice versa for lower risk. The algorithm\'s creators said it was equally accurate across racial groups in a technical sense — but the error modes were not equal. This case has become the central example in the debate about algorithmic bias in criminal justice. The UK is watching closely as it considers similar tools.',
    hint: 'Think about a tool that predicts future behaviour and is used to determine sentences.',
  },
  {
    question: 'How are AI legal research tools like Harvey and CoCounsel changing legal work?',
    options: [
      'They replace solicitors entirely for most consumer legal matters, providing binding legal advice and filing documents with courts autonomously',
      'They can search millions of court judgments, statutory instruments, and legal texts in seconds and produce summarised briefings of relevant precedents — work that previously took junior lawyers many hours',
      'They automatically check whether a client has a strong enough case before allowing them to proceed, filtering out weak claims to reduce court backlogs',
      'They translate legal jargon into plain English for members of the public, but cannot perform any legal analysis or research beyond simplifying existing documents',
    ],
    correctIndex: 1,
    explanation:
      'Legal research has traditionally been one of the most time-consuming — and therefore expensive — parts of legal work. Finding relevant case law, checking whether precedents have been overturned, and summarising arguments from hundreds of judgments can take a junior lawyer days. AI tools trained on legal databases (Harvey AI uses GPT-4, CoCounsel uses OpenAI models trained on Westlaw data) can do this in seconds. A lawyer can ask "find cases where a court found a duty of care existed between an employer and a remote worker" and get a synthesised summary of relevant cases immediately. This does not replace lawyers — judgment, strategy, and client relationships still require human expertise — but it radically changes how junior legal work is done.',
    hint: 'Think about what takes junior lawyers the most time in preparing a case.',
  },
  {
    question: 'What is the "access to justice" problem and how might AI help — or hinder — it?',
    options: [
      'Access to justice refers to the speed of court proceedings; AI could slow this down by generating more paperwork and appeals',
      'Access to justice refers to the fact that legal advice is expensive and most people cannot afford a solicitor; AI tools could make basic legal information free and accessible, but there are risks if advice is inaccurate',
      'Access to justice is a problem exclusively affecting businesses, not individuals — AI tools are being developed to help corporations navigate international law more efficiently',
      'Access to justice refers to courtrooms being physically inaccessible to disabled people; AI is being used to provide remote hearings via video call as an alternative',
    ],
    correctIndex: 1,
    explanation:
      "Over 60% of people in the UK who face a legal problem receive no professional legal help — because they cannot afford a solicitor (legal aid has been cut significantly since 2013), do not know where to find help, or find the legal system too intimidating. AI-powered legal chatbots — like DoNotPay (a US app) or Citizens Advice's online tools — can help people understand their rights, draft letters, and navigate processes like small claims court or employment tribunals without paying a lawyer. The promise is significant. The risk is also significant: if AI gives wrong legal advice, a person could lose their home, their job, or their freedom. Getting the accuracy and safety of these tools right is not a minor technical problem — it is a matter of justice.",
    hint: 'Think about who can and cannot afford a lawyer and what the implications are.',
  },
  {
    question: 'How is the UK legal sector currently approaching AI adoption in courts and legal practice?',
    options: [
      'The UK has fully embraced AI judges for civil cases under £100,000, allowing cases to be decided by algorithm without a human judge to speed up the court system',
      'The UK is cautiously exploring AI tools for legal research and document review, but courts have not accepted AI-generated arguments as a substitute for qualified lawyers, and regulators are monitoring for risks to fairness',
      'The UK has banned AI from all legal contexts until a national regulatory framework is in place, meaning no AI tools are legally permitted in law firms',
      'The UK requires all legal AI tools to be open-source so that both parties in a dispute can inspect the algorithm before it is used in their case',
    ],
    correctIndex: 1,
    explanation:
      "The UK legal sector is adopting AI tools relatively quickly in commercial law firms — contract review, legal research, and document management — but the courts themselves are more cautious. The Solicitors Regulation Authority (SRA) has published guidance warning that solicitors remain personally responsible for any advice they give, even if AI assisted in producing it. Courts have seen cases where lawyers submitted AI-generated arguments containing fabricated case citations (hallucinations), leading to embarrassing retractions. The judiciary is watching closely. The UK government's AI strategy emphasises a light-touch, sector-by-sector approach rather than blanket AI regulation — meaning legal AI is largely self-regulated at the moment, with professional bodies setting the rules.",
    hint: 'Think about who is responsible when AI gives wrong legal advice.',
  },
]

export function AIAndLegalSystem() {
  useMarkVisited('ai-and-legal-system')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x2696;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and the legal system
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            AI in courts, contract review, legal research, predictive sentencing tools,
            access to justice, and UK legal AI.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-legal-system" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Why law is ripe for AI</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Law is fundamentally a text-based profession. Lawyers read cases, draft documents, search for precedents, and construct arguments from words. AI language models are exceptionally good at text — which is why law is one of the sectors most significantly affected by the AI revolution.
          </p>
          <div className="space-y-2">
            {[
              'A major commercial deal can involve thousands of contracts — each needing careful review for risk, inconsistency, and missing terms',
              'There are over 10 million published legal judgments in England and Wales alone, going back hundreds of years',
              'The average UK solicitor charges £200–£400 per hour; a complex case easily costs tens of thousands of pounds',
              'Legal aid funding in England and Wales has been cut by over £1 billion since 2013, leaving millions unable to afford representation',
              'The Law Society estimates AI tools could automate up to 67% of tasks currently performed by UK paralegals and junior solicitors',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-slate-600 dark:text-slate-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI in legal practice — what it actually does</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI tools are already embedded in many law firms, though most clients are unaware of it.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4C4;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Contract review and due diligence</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Tools like Luminance and Kira Systems read thousands of legal documents and flag specific clause types — indemnity provisions, data protection obligations, change-of-control clauses. A task that once took a team of junior lawyers weeks can now be done in hours. This is where law firms have adopted AI fastest, because the cost savings are enormous.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F50D;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Legal research</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Harvey AI and CoCounsel (Thomson Reuters) allow lawyers to ask natural language questions — "find cases where a court found misrepresentation in a software contract" — and receive a synthesised summary of relevant precedents within seconds. Hallucination is a serious risk: AI has fabricated plausible-sounding but non-existent case citations in real court filings, leading to sanctions against lawyers in the US.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CA;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Litigation prediction</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Premonition and Lex Machina analyse years of court data to predict how likely a particular judge is to rule in favour of a certain type of claim. Some firms use this data when deciding whether to settle or go to trial. Critics argue this gives wealthy clients (who can afford these tools) an unfair advantage in understanding judicial tendencies.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Predictive sentencing — the most controversial use</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            In the United States, AI tools are used to predict the likelihood that a defendant will reoffend — and those predictions influence sentences and parole decisions. The UK is watching this debate closely.
          </p>
          <div className="space-y-3">
            {[
              { icon: '&#x2696;&#xFE0F;', title: 'How it works', text: 'Tools like COMPAS score defendants on factors like criminal history, age, education, and family background to produce a "risk score" from 1 to 10. Judges are given this score before sentencing. High-scoring defendants may receive longer sentences or be denied parole.' },
              { icon: '&#x26A0;&#xFE0F;', title: 'The bias problem', text: "A ProPublica investigation in 2016 found COMPAS scored Black defendants as higher risk at nearly twice the rate of white defendants who went on not to reoffend. The algorithm was making racially unequal errors — even if its overall accuracy was similar across groups. The question of what 'fair' means for an algorithm turns out to be philosophically and mathematically complex." },
              { icon: '&#x2753;', title: 'The discretion problem', text: "If a judge knows a defendant's risk score, can they really ignore it? Critics argue that even when judges are told scores are advisory, they anchor on them. The algorithm's output subtly replaces judicial judgment — but the algorithm cannot be cross-examined, does not know the defendant personally, and cannot respond to mitigating circumstances." },
              { icon: '&#x1F1EC;&#x1F1E7;', title: 'The UK position', text: 'The UK has not adopted predictive sentencing tools in the way the US has. However, police forces use algorithmic tools for predicting where crime will occur (PredPol) and some parole decisions use structured assessment tools. Civil liberties groups like Liberty are monitoring these closely.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: item.icon }} />
                <div>
                  <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">{item.title}</p>
                  <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Access to justice — AI as a leveller?</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            One of the most hopeful applications of AI in law is making legal help available to people who cannot afford a solicitor.
          </p>
          <div className="space-y-2">
            {[
              "DoNotPay, a US app, has helped hundreds of thousands of people fight parking tickets, cancel subscriptions, and claim compensation for delayed flights — tasks that are legitimate but felt too small or too complex to bother a solicitor about",
              "Citizens Advice in the UK uses AI-assisted tools to help people understand their housing rights, employment rights, and benefit entitlements without needing a face-to-face appointment",
              "The AI lawyer is not a replacement for a real solicitor in complex matters — but for understanding your rights in a standard situation, it can be transformative",
              "The risk: if an AI tool gives wrong advice and someone acts on it — losing their home, their job, or their case — who is responsible? The company? The platform? The user who chose to rely on free AI advice?",
              "UK regulators are developing a framework for 'lawtech' — legal technology tools — that aims to ensure AI legal tools are safe without stifling innovation",
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5 flex-shrink-0">&#x2192;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <Quiz lessonId="ai-and-legal-system" questions={quizQuestions} />

        <ReviewLaterButton lessonId="ai-and-legal-system" />
        <LessonNote lessonId="ai-and-legal-system" />
        <LessonRating lessonId="ai-and-legal-system" />
        <LessonFeedback lessonId="ai-and-legal-system" />
        <RelatedLessons currentId="ai-and-legal-system" />
        <NextLesson currentId="ai-and-legal-system" />
      </div>
    </div>
  )
}
