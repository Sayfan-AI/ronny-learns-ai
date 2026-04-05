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
import { LessonSeriesBadge } from '../components/LessonSeriesBadge'

const LESSON_TITLE = 'AI and fraud and identity theft'

const KEY_TAKEAWAYS = [
  'Synthetic identity fraud — where criminals combine real and fake information to create entirely new identities — is now the fastest growing type of fraud in the UK, and AI tools are used both to create and to detect these fake identities.',
  'Credential stuffing attacks use AI to automatically test stolen username and password combinations across hundreds of websites — if you reuse passwords, one breach can compromise many accounts.',
  'AI is being used to generate convincing fake documents — passports, payslips, bank statements — that can pass basic visual checks, making identity verification harder for organisations.',
  'CIFAS, the UK\'s national fraud prevention service, maintains a database of confirmed fraudsters. A CIFAS fraud marker on your record (even incorrectly placed) can make it very hard to open bank accounts or get credit.',
  'If your identity is stolen, you should contact Action Fraud (0300 123 2040), the organisations affected, and check your credit file. You can also apply for a CIFAS protective registration to flag your file as high-risk.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is synthetic identity fraud and why is it hard to detect?',
    options: [
      'Fraud where a criminal steals a real person\'s complete identity and uses it to open accounts or make purchases — it is hard to detect because the victim often does not realise for months',
      'Fraud where a criminal combines real information (like a genuine National Insurance number) with fake information (invented name, address, date of birth) to create a new fictional identity that does not match any real person',
      'Fraud where AI generates entirely made-up identities with no connection to any real data — these synthetic people are inserted into government databases to claim benefits and tax refunds',
      'Fraud where a criminal uses AI to create a deepfake video of a real person that passes biometric verification checks, allowing them to take over existing accounts',
    ],
    correctIndex: 1,
    explanation:
      "Synthetic identity fraud is particularly insidious because there is no single victim. A criminal might take a real NI number belonging to a child or someone with a thin credit file, combine it with an invented name and address, and use this hybrid identity to apply for credit, build up a credit profile over months or years, and then 'bust out' — maxing out all available credit before disappearing. Because no single real person is being impersonated, there is no victim noticing suspicious activity on their account. AI makes this easier: it can generate plausible personal data that passes automated verification checks, vary applications slightly to avoid pattern detection, and automate the patient work of building up a credit profile. UK Finance estimates synthetic identity fraud costs UK lenders hundreds of millions of pounds annually.",
    hint: 'The key word is synthetic — meaning artificially created, not simply stolen.',
  },
  {
    question: 'How does a credential stuffing attack work?',
    options: [
      'A criminal physically steals an employee\'s access badge and uses it to enter a company\'s server room, then downloads the password database onto a USB drive',
      'A criminal buys stolen lists of username and password combinations from previous data breaches and uses automated AI tools to rapidly test those credentials across many websites to find accounts where they still work',
      'A criminal sends targeted phishing emails that appear to come from a trusted service and tricks users into re-entering their credentials on a fake website',
      'A criminal uses keylogger malware to record keystrokes on a victim\'s computer, capturing passwords as they are typed and sending them to the attacker',
    ],
    correctIndex: 1,
    explanation:
      "Data breaches happen constantly — LinkedIn, Adobe, Yahoo, and hundreds of other services have had billions of credentials stolen. Criminals buy these lists on dark web markets. The problem is that many people reuse the same password across multiple services. Credential stuffing exploits this: AI-powered bots automatically test stolen email/password pairs against target websites — checking, for example, whether the password leaked from a 2016 LinkedIn breach still works on someone's Amazon, PayPal, or banking account. Modern credential stuffing tools are sophisticated: they rotate IP addresses to avoid detection, simulate human browsing behaviour, solve basic CAPTCHAs, and can test thousands of combinations per second. If even 0.5% of a list of a million credentials succeeds, that is 5,000 compromised accounts. Using a unique password for every service — best managed with a password manager — is the primary defence.",
    hint: 'Think about what happens when you use the same password everywhere.',
  },
  {
    question: 'How does AI help criminals create convincing fraudulent documents?',
    options: [
      'AI operates physical printing equipment that can perfectly replicate the security features of genuine documents including holograms, watermarks, and UV-reactive ink',
      'AI uses generative image models to create realistic-looking digital images of passports, payslips, and bank statements that are designed to pass automated optical character recognition and visual plausibility checks',
      'AI hacks into government and bank databases to directly modify official records, inserting fake employment histories and account balances without creating any physical documents',
      'AI learns the exact template of genuine documents from a single scan and can then produce unlimited near-perfect physical copies using standard office equipment',
    ],
    correctIndex: 1,
    explanation:
      "Generative AI — particularly image generation models and document editing tools — has significantly lowered the bar for creating fraudulent documents. Creating a fake payslip used to require graphic design skills; now, AI tools can generate a convincing-looking payslip from a text prompt in minutes, including realistic logos, formatting, and figures. The same applies to bank statements, tenancy agreements, and utility bills — documents routinely requested during identity verification processes. Some AI document fraud tools are specifically trained to produce images that will pass OCR (optical character recognition) verification — where a system reads text from an image — while looking visually plausible to human reviewers. Mortgage lenders, lettings agents, and financial services firms are increasingly deploying AI-based document authentication tools that look for inconsistencies in metadata, font rendering, and pixel patterns that indicate artificial generation.",
    hint: 'Think about what generative AI can produce as digital images.',
  },
  {
    question: 'What is a CIFAS fraud marker and what effect can it have on you?',
    options: [
      'CIFAS markers are positive reputation scores awarded by banks when a customer has never had a fraudulent claim against them — a high score gives access to better interest rates',
      'A CIFAS fraud marker is a record placed on an individual\'s file when confirmed fraud has been linked to their details. Even if placed incorrectly, it can prevent you opening bank accounts, getting credit, or passing employment checks',
      'CIFAS markers are secret government classifications used only by intelligence services — ordinary people cannot see them and they have no effect on everyday financial services',
      'A CIFAS marker automatically freezes all of a person\'s bank accounts until a fraud investigation is completed, ensuring no further money can be taken by fraudsters',
    ],
    correctIndex: 1,
    explanation:
      "CIFAS (the UK's national fraud prevention service) operates a database that member organisations — banks, insurers, lenders, telecoms companies — can check when assessing new applications. If a confirmed fraudster used your address, identity, or account details, a fraud marker may be placed on your file. This is intended to protect organisations from further fraud, but it can have severe consequences for innocent people whose details were used without their knowledge. When you apply for a bank account, credit card, mortgage, or even some jobs, the organisation checks CIFAS. A marker can result in automatic rejection without explanation (the organisation is not required to tell you why). The most common experience is being unable to open a bank account — a fundamental necessity in modern life. CIFAS has a complaint and correction process, but resolving incorrect markers can take months and requires significant persistence.",
    hint: "Think about what happens when someone else's fraud is associated with your details.",
  },
  {
    question: 'If you discover your identity has been stolen, what are the first steps to take in the UK?',
    options: [
      'The most important first step is to change all your passwords and delete all your social media accounts to prevent the fraudster accessing more information about you',
      'Report to Action Fraud, contact all affected organisations directly, check your credit files with the three main credit reference agencies, and consider applying for a CIFAS protective registration',
      'You should immediately contact the police and file a crime report, then wait for them to investigate before taking any personal action so you do not compromise the investigation',
      'The only effective response is to change your National Insurance number, which you can request from HMRC and which will create a new financial identity unconnected to the stolen one',
    ],
    correctIndex: 1,
    explanation:
      "Identity theft recovery requires action on several fronts simultaneously. Action Fraud (the national reporting centre, 0300 123 2040) records your report and can provide a crime reference number that is useful when disputing fraudulent accounts. Contacting each affected organisation directly — bank, lender, phone company — triggers their fraud teams, who can close fraudulent accounts, reverse charges, and flag your details as compromised. Checking your credit file with Experian, Equifax, and TransUnion (all offer free access) shows what accounts have been opened in your name and allows you to dispute incorrect entries. A CIFAS protective registration proactively flags your file as potentially at risk — any future applications in your name will trigger enhanced checks, making it harder for a fraudster to quickly open new accounts. You cannot change your NI number except in exceptional circumstances — but you can register with HMRC to note that your NI number may have been compromised.",
    hint: 'Think about all the different organisations and systems that might have been affected.',
  },
]

export function AIAndFraudAndIdentityTheft() {
  useMarkVisited('ai-and-fraud-and-identity-theft')

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F575;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and fraud and identity theft
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI is being used by criminals to steal identities and commit fraud — and how
            AI is also being used to detect and stop them.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-fraud-and-identity-theft" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <LessonSeriesBadge lessonId="ai-and-fraud-and-identity-theft" />

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Fraud in the UK — the scale of the problem</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Fraud is now the most common crime in England and Wales. AI has made it cheaper, faster, and more scalable for criminals to commit it — and harder for victims to prove they did not consent.
          </p>
          <div className="space-y-2">
            {[
              'Fraud accounts for over 40% of all crime in England and Wales — more than all other crime types combined',
              'UK Finance estimates fraud cost the UK over £1.2 billion in 2023 — and this is only what is reported and recorded',
              'Identity fraud is at a record high — CIFAS recorded over 270,000 identity fraud cases in the UK in a recent year',
              'AI-generated fake documents, voices, and faces are making it harder to verify whether someone is who they claim to be',
              'Most fraud victims feel embarrassed and blame themselves — but sophisticated AI-powered fraud can fool even careful, aware people',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mt-0.5 flex-shrink-0">&#x26A0;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How AI enables fraud</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI gives fraudsters capabilities that previously required significant skill, effort, or expense.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4C4;',
                label: 'Fake documents',
                text: 'Generative AI tools can produce realistic fake payslips, bank statements, and utility bills from a simple text prompt. These are used to pass identity verification checks for mortgages, rentals, credit applications, and benefit claims.',
                color: 'orange',
              },
              {
                icon: '&#x1F916;',
                label: 'AI-powered phishing',
                text: 'Large language models produce grammatically perfect, highly personalised phishing emails that reference your real name, employer, and recent activity — making them far harder to spot than the typo-filled messages of old.',
                color: 'orange',
              },
              {
                icon: '&#x1F5C2;&#xFE0F;',
                label: 'Credential stuffing at scale',
                text: "AI bots automatically test millions of stolen username/password combinations against websites — exploiting the fact that many people reuse passwords. A single leaked password can compromise dozens of the victim's accounts.",
                color: 'orange',
              },
              {
                icon: '&#x1F9D1;',
                label: 'Synthetic identities',
                text: 'AI combines real and fake personal data to create fictional identities that can pass automated verification systems, build credit histories, and then vanish with borrowed money — leaving lenders to absorb the loss.',
                color: 'orange',
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

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How AI fights fraud</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The same technology being used to commit fraud is also the most powerful tool for detecting and preventing it.
          </p>
          <div className="space-y-2">
            {[
              'Banks use AI to analyse every card transaction in real time, comparing it against your normal spending patterns and flagging anything anomalous within milliseconds',
              'HMRC uses AI to detect tax fraud by identifying inconsistencies in submitted returns, unusual patterns in VAT reclaims, and connections between related entities',
              'AI document verification tools check metadata, font rendering, compression artefacts, and pixel patterns to identify AI-generated or edited images',
              'Behavioural biometrics AI analyses how you type, move your mouse, and hold your phone — subtle patterns that are hard to fake even if a criminal has your password',
              'Phone network AI detects SIM swapping attacks (where criminals take over your phone number to receive 2FA codes) by analysing unusual patterns in SIM activity',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Protecting yourself</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            You cannot make yourself immune to AI-powered fraud, but these steps significantly reduce your risk.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-purple-50 dark:bg-purple-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F511;</span>
              <div>
                <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-0.5">Use a password manager</p>
                <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">A password manager (Bitwarden is free and open source; 1Password and Dashlane are paid) generates and stores a unique password for every site. This makes credential stuffing attacks completely ineffective — even if one site is breached, no other accounts are at risk.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-purple-50 dark:bg-purple-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F1;</span>
              <div>
                <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-0.5">Enable strong two-factor authentication</p>
                <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">Use an authenticator app (Google Authenticator, Authy) rather than SMS-based 2FA where possible — SMS can be intercepted via SIM swapping. Enable 2FA on email, banking, and any site that holds sensitive data or payment methods.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-purple-50 dark:bg-purple-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CA;</span>
              <div>
                <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-0.5">Check your credit file regularly</p>
                <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">All three UK credit reference agencies (Experian, Equifax, TransUnion) offer free access to your credit file. Checking it every few months lets you spot any accounts opened in your name that you did not authorise — an early warning sign of identity theft.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-purple-50 dark:bg-purple-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F6E1;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-0.5">CIFAS protective registration</p>
                <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">If you know your details have been compromised — or if you want extra protection — you can pay CIFAS for a protective registration (around £20 for two years). This flags your file so that any application in your name triggers enhanced identity verification checks, making it significantly harder for a fraudster to open accounts in your name.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">If your identity is stolen — what to do</h2>
          <div className="space-y-2">
            {[
              'Report to Action Fraud online (actionfraud.police.uk) or by phone (0300 123 2040) — you will receive a crime reference number',
              'Contact each affected organisation directly — bank, lender, phone company — and ask them to flag the accounts as fraudulently opened',
              'Check your credit file with Experian, Equifax, and TransUnion — dispute any fraudulent entries in writing',
              'Contact CIFAS if your details appear in their database incorrectly — use their complaints process to request removal of any markers',
              "Register with HMRC's Identify Validation service if you think your NI number has been misused",
              'Consider using a credit alert service that notifies you immediately when any new application is made in your name',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-950 rounded-xl p-4">
            <p className="text-emerald-700 dark:text-emerald-300 text-sm leading-relaxed">
              <span className="font-semibold">You are not to blame.</span> Identity fraud and AI-powered scams can fool anyone. Banks and organisations have a legal obligation to protect customer data. If you have suffered financial loss due to fraud, you may be entitled to a refund under the UK Authorised Push Payment (APP) fraud reimbursement rules — contact your bank immediately.
            </p>
          </div>
        </div>

        <LessonNote lessonId="ai-and-fraud-and-identity-theft" />
        <ReviewLaterButton lessonId="ai-and-fraud-and-identity-theft" />

        <Quiz lessonId="ai-and-fraud-and-identity-theft" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-fraud-and-identity-theft" />
        <LessonFeedback lessonId="ai-and-fraud-and-identity-theft" />

        <RelatedLessons currentId="ai-and-fraud-and-identity-theft" />

        <NextLesson currentId="ai-and-fraud-and-identity-theft" />

      </div>
    </div>
  )
}
