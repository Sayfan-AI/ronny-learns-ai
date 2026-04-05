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
import { DifficultyBadge } from '../components/DifficultyBadge'

const LESSON_TITLE = 'AI and fraud and identity theft'

const KEY_TAKEAWAYS = [
  'Synthetic identity fraud is one of the fastest-growing types of financial crime — criminals use AI to combine real and fabricated personal data to create convincing fake identities that can pass automated checks.',
  'Account takeover fraud uses AI-powered credential stuffing — automated tools that try stolen username and password combinations across thousands of sites simultaneously until they find one that works.',
  'AI-generated fake documents (passports, utility bills, payslips) are increasingly sophisticated and can fool automated verification systems designed to detect forgeries.',
  'CIFAS (the UK\'s fraud prevention service) operates a database that flags individuals who have been victims of identity fraud, helping lenders and other organisations spot suspicious applications.',
  'If you believe you are a victim of identity fraud, act immediately: contact Action Fraud (0300 123 2040), contact your bank, and register with CIFAS\'s Protective Registration service.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is synthetic identity fraud?',
    options: [
      'A type of fraud where criminals use a completely fabricated name and address with no connection to any real person',
      'Fraud where criminals combine a real person\'s National Insurance number or date of birth with fabricated details (invented name, address, phone number) to create a new identity that can pass automated verification checks',
      'A fraud technique where criminals pretend to be from synthetic fabric companies to trick elderly people into purchasing expensive clothes',
      'Fraud committed by AI systems acting autonomously without any human criminal involvement',
    ],
    correctIndex: 1,
    explanation: 'Synthetic identity fraud is particularly dangerous because it does not directly steal an existing person\'s identity in a way they would immediately notice. A criminal might take a real National Insurance number (which they buy from data breaches or the dark web) and combine it with a made-up name, address, and phone number. They then spend months or years building a credit history with this synthetic identity — making small repayments, obtaining credit cards, building a convincing financial profile. Eventually they "bust out" — maxing all the credit and disappearing. The real NI number holder may not discover the issue until they apply for credit themselves and find their record is damaged.',
    hint: 'Think about what "synthetic" means — something that combines real and artificial elements.',
  },
  {
    question: 'What is credential stuffing, and how does AI enable it?',
    options: [
      'Credential stuffing is when fraudsters fill in application forms with fake employment credentials — AI generates convincing fabricated CVs',
      'Credential stuffing uses AI-powered automated tools to try stolen username and password combinations (from previous data breaches) across thousands of websites simultaneously, exploiting the fact that many people reuse the same passwords',
      'Credential stuffing is a social engineering technique where criminals call you pretending to be from your bank and ask you to confirm your login details',
      'Credential stuffing involves stuffing malware into downloadable software credentials files so that they infect computers when opened',
    ],
    correctIndex: 1,
    explanation: 'When companies suffer data breaches (and there have been thousands involving billions of credentials), the stolen usernames and passwords are sold on dark web marketplaces. Credential stuffing is the automated process of trying these stolen combinations across many different websites. If someone used the same password for their email and their online banking, a credential stuffer who got the email password in one breach can then access their bank account. AI makes this vastly more scalable — bots can try millions of combinations per second across thousands of sites simultaneously. Tools like CAPTCHA and multi-factor authentication are specifically designed to slow or stop credential stuffing attacks.',
    hint: 'Think about why using the same password on multiple sites makes you vulnerable when any one of those sites is breached.',
  },
  {
    question: 'How are AI-generated fake documents used in fraud?',
    options: [
      'AI-generated fake documents are only used in fiction and film production — they cannot actually fool real verification systems',
      'AI tools can generate photorealistic fake passports, utility bills, payslips, and bank statements that can pass automated document verification systems, enabling fraudsters to open bank accounts, apply for loans, and conduct identity fraud',
      'Fake document generation is only possible for physical documents — digital documents cannot be convincingly forged using AI',
      'AI-generated fake documents are immediately identified by all UK banks because they are required by law to use human document examiners for all applications',
    ],
    correctIndex: 1,
    explanation: 'The combination of generative AI (for creating realistic images) and widely available document templates has made creating convincing fake documents dramatically easier. Tools that require minimal skill can produce photorealistic fake utility bills, bank statements, payslips, and even passports. Many online lenders, letting agents, and services that verify identity through document uploads use automated systems rather than human reviewers. These automated systems look for specific features (watermarks, formatting, fonts) — features that AI-generated fakes increasingly replicate. The UK Finance trade body has noted a significant increase in sophisticated document fraud, driven partly by AI tools.',
    hint: 'Think about what automated document verification actually checks and whether AI-generated documents could replicate those features.',
  },
  {
    question: 'What is CIFAS and how does it help protect you from identity fraud?',
    options: [
      'CIFAS is a government agency that arrests people who commit fraud — it is part of the police',
      'CIFAS is the UK\'s national fraud prevention service — it operates a database shared by banks and other organisations to flag accounts linked to fraud, and offers Protective Registration which warns lenders to take extra care when applications are made in your name',
      'CIFAS is a credit reference agency like Experian or Equifax — it provides credit scores that lenders use when deciding whether to approve applications',
      'CIFAS is a free legal service that helps victims of identity fraud take fraudsters to court',
    ],
    correctIndex: 1,
    explanation: 'CIFAS (originally the Credit Industry Fraud Avoidance System) is a not-for-profit organisation that operates a database used by banks, insurers, and other financial organisations to share information about fraud. When a CIFAS member suspects fraud on an account, they file a CIFAS marker. Other members can then see this marker when someone applies using those details, and know to take extra care. For victims of identity fraud, CIFAS offers Protective Registration (a small annual fee) — this places a flag against your name and address that tells lenders "the real person at this address has been a victim of identity fraud, please take extra verification steps before approving any applications in this name." This helps prevent further fraudulent applications in your name.',
    hint: 'Think about how sharing fraud information between financial organisations could help each of them spot fraudulent applications.',
  },
  {
    question: 'What should you do if you discover you are a victim of identity fraud?',
    options: [
      'Wait and see if the fraudster stops — most identity fraudsters give up after a few months if they find the victim is difficult to exploit',
      'Report to Action Fraud (0300 123 2040) and the police; contact your bank immediately; check your credit report for unexplained accounts; register with CIFAS Protective Registration; and contact all organisations where fraudulent accounts have been opened',
      'Only contact your bank — they will handle everything else on your behalf including reporting to the police and correcting your credit file',
      'Change your email password — identity fraud is almost always committed through email account access and changing your password will immediately stop all fraud in your name',
    ],
    correctIndex: 1,
    explanation: 'Discovering identity fraud requires quick, systematic action across multiple fronts. Report the crime to Action Fraud (the national fraud reporting centre) and request a crime reference number — you will need this. Contact your bank immediately to alert them and secure your accounts. Check your credit reports from all three UK credit reference agencies (Experian, Equifax, TransUnion) for accounts you do not recognise. Register with CIFAS Protective Registration to prevent future fraudulent applications. Contact each organisation where fraudulent accounts have been opened — most have fraud teams specifically for this purpose. Consider placing a "notice of correction" on your credit file explaining the situation. Recovery can take months but acting quickly limits the damage.',
    hint: 'Think about all the different channels through which identity fraud can be committed and why each one needs to be addressed.',
  },
]

export function AIAndFraud() {
  useMarkVisited('ai-and-fraud')

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F575;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and fraud and identity theft
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Synthetic identity fraud, account takeover, AI-generated fake documents, CIFAS,
            and what to do if you are a victim.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-fraud" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How AI enables modern fraud</h2>
          <div className="space-y-3">
            {[
              { icon: '&#x1F194;', label: 'Synthetic identities', text: 'Real NI numbers combined with fabricated details create convincing fake identities that pass automated checks and can accumulate credit history over months before "busting out".' },
              { icon: '&#x1F512;', label: 'Credential stuffing', text: 'AI-powered bots try millions of stolen username/password combinations across thousands of sites per second — exploiting password reuse.' },
              { icon: '&#x1F4C4;', label: 'AI-generated documents', text: 'Photorealistic fake passports, utility bills, and payslips generated by AI can fool automated verification systems.' },
              { icon: '&#x1F399;&#xFE0F;', label: 'Voice cloning fraud', text: 'AI clones the voice of a family member or executive to make urgent requests for money transfers or account access.' },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">{label}</p>
                  <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">If you are a victim of identity fraud</h2>
          <div className="space-y-2">
            {[
              'Report to Action Fraud: 0300 123 2040 or actionfraud.police.uk — get a crime reference number',
              'Contact your bank immediately to alert the fraud team and secure your accounts',
              'Check your credit file at all three agencies: Experian, Equifax, and TransUnion — look for accounts you do not recognise',
              'Register with CIFAS Protective Registration to flag your name for extra verification on future applications',
              'Contact each organisation where fraudulent accounts have been opened and request their fraud dispute process',
              'Place a notice of correction on your credit file explaining the fraud situation',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <LessonNote lessonId="ai-and-fraud" />
        <ReviewLaterButton lessonId="ai-and-fraud" />

        <Quiz lessonId="ai-and-fraud" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-fraud" />
        <LessonFeedback lessonId="ai-and-fraud" />

        <RelatedLessons currentId="ai-and-fraud" />

        <NextLesson currentId="ai-and-fraud" />

      </div>
    </div>
  )
}
