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

const LESSON_TITLE = 'AI and fraud and identity theft'

const KEY_TAKEAWAYS = [
  'Synthetic identity fraud uses AI to combine real and fake information into convincing fake personas — used to open bank accounts, take out loans, and commit financial fraud that can go undetected for years.',
  'Credential stuffing uses automated AI tools to try stolen passwords from one breach across thousands of other sites — reusing passwords across services makes this attack dramatically more effective.',
  'AI can generate convincing fake documents — passports, payslips, utility bills — which are used in mortgage fraud, money laundering, and identity theft. AI countermeasures are being developed by banks and government.',
  'If your identity is stolen, you can register with CIFAS (the UK fraud prevention agency), place a fraud marker on your credit file, and use Have I Been Pwned to check if your email is in a data breach.',
  'Banks and fraud detection systems also use AI to fight fraud — spotting unusual transaction patterns, flagging account takeover attempts, and blocking synthetic identity applications before accounts are opened.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is "synthetic identity fraud" and why does AI make it more dangerous?',
    options: [
      'Fraud where criminals steal an existing person\'s complete identity — name, address, National Insurance number — and AI helps them do this faster than before',
      'Fraud where criminals combine real data elements (like a real National Insurance number) with invented details to create a new, plausible-sounding identity — AI makes it easier to generate convincing synthetic personas at scale',
      'Fraud where AI impersonates bank staff on the phone to trick customers into transferring money to fraudulent accounts',
      'Fraud where AI bots automatically submit thousands of fraudulent insurance claims using slightly different details each time to avoid detection',
    ],
    correctIndex: 1,
    explanation:
      'Synthetic identity fraud does not steal a single real person\'s identity — it creates a new identity by mixing real data (often a real National Insurance or National Insurance-style number, usually belonging to a child, elderly person, or someone who does not use credit) with invented names, addresses, and dates of birth. AI makes this more dangerous because it can generate thousands of plausible synthetic profiles, build fake credit histories over months or years, and then cash out at high value. It is the fastest-growing form of financial fraud in the UK and US because the victim — the synthetic identity — does not exist to raise the alarm.',
    hint: 'Think about the word "synthetic" — not entirely real, but convincing.',
  },
  {
    question: 'What is credential stuffing, and why is password reuse the key vulnerability?',
    options: [
      'A fraud technique where criminals send realistic-looking fake emails asking people to reset their passwords, then capture the new passwords when victims click the link',
      'An automated attack where AI tools take large lists of usernames and passwords from previous data breaches and try them against many other websites — which succeeds when people reuse the same password across services',
      'A method where AI analyses the way people type their passwords and learns to replicate their typing rhythm to bypass biometric security systems',
      'A technique where criminals physically watch people type their passwords in public places, then use AI to replay those inputs on banking sites',
    ],
    correctIndex: 1,
    explanation:
      'When a website suffers a data breach, the stolen credentials — email addresses and passwords — often end up for sale on criminal forums or dark web marketplaces. Credential stuffing tools use AI to automate the process of trying these stolen username/password combinations against hundreds of other websites: banking apps, email providers, shopping sites, government portals. If you used the same password on the breached site as on your bank, the attacker now has access to your bank. The defence is straightforward: use a unique password for every service. A password manager makes this practical.',
    hint: 'Think about what happens when the same key fits multiple locks.',
  },
  {
    question: 'How is AI being used to create fake documents, and who is trying to detect them?',
    options: [
      'AI is only used to create fake digital documents — physical documents like passports cannot be faked convincingly with AI because of embedded security features',
      'AI tools can generate convincing fake passports, payslips, bank statements, and utility bills used in mortgage fraud and money laundering — banks and government bodies are developing AI document verification tools to detect them',
      'AI-generated fake documents are only a problem for cryptocurrency exchanges and dark web markets — traditional banks and lenders are not affected because they require physical document inspection',
      'AI creates fake documents but they are always detectable because they contain subtle patterns that trained human reviewers can spot by eye',
    ],
    correctIndex: 1,
    explanation:
      'Generative AI — particularly image models — has dramatically lowered the skill barrier for creating convincing fake identity documents. A fraudster who previously needed specialist software and design skills can now generate a realistic-looking payslip, utility bill, or even a passport photo page using AI tools. These fakes are used in mortgage fraud (submitting fraudulent income evidence), money laundering (creating false paper trails), and identity fraud (supporting a synthetic identity application). In response, banks, lenders, and government identity services are developing AI-powered document verification that looks for signs of AI generation — inconsistent fonts, metadata anomalies, image compression artefacts — rather than relying on human review alone.',
    hint: 'Think about AI creating fakes, and AI being used to detect the fakes.',
  },
  {
    question: 'What practical steps can you take if you suspect your identity has been used fraudulently in the UK?',
    options: [
      'Contact the police immediately and wait for them to investigate — banks and credit agencies cannot help until a crime reference number has been issued',
      'Register with CIFAS, check your credit report for accounts you did not open, use Have I Been Pwned to check for data breaches, and consider a credit freeze if fraud is confirmed',
      'Change all your passwords immediately, which will automatically alert your bank and credit reference agencies to the suspected fraud',
      'Close all your existing bank accounts and open new ones — this is the only way to prevent further fraudulent transactions once identity theft has occurred',
    ],
    correctIndex: 1,
    explanation:
      'If you suspect identity fraud, the first step is to check your credit report (free via Experian, Equifax, or TransUnion in the UK) for accounts you did not open, addresses you have not lived at, or credit searches you did not authorise. You can register with CIFAS — the UK\'s fraud prevention service — which adds a Protective Registration marker to your record, alerting lenders that extra checks should be performed before opening accounts in your name. Have I Been Pwned (haveibeenpwned.com) lets you check if your email address has appeared in known data breaches. You can also contact Action Fraud (UK\'s national fraud reporting service) to report the crime and get a crime reference number.',
    hint: 'Think about checking what accounts exist in your name, and flagging your record to prevent new ones being opened fraudulently.',
  },
  {
    question: 'How do banks use AI to fight fraud on the other side of the problem?',
    options: [
      'Banks use AI exclusively to investigate fraud after it is reported — AI cannot detect fraud in real time because transactions happen too quickly for any AI to analyse',
      'Banks use AI to monitor transaction patterns in real time, flag unusual behaviour (such as a purchase from an unfamiliar country minutes after a UK transaction), detect synthetic identity applications, and block credential stuffing attacks on login pages',
      'Banks have replaced all human fraud investigators with AI, which makes decisions about fraud refunds automatically without human review or appeal',
      'Banks only use AI for cyber fraud involving cryptocurrency — traditional payment fraud on bank accounts is still investigated entirely by human fraud teams',
    ],
    correctIndex: 1,
    explanation:
      "Banks and financial institutions are major users of AI for fraud detection — and have been for years. Machine learning models analyse every transaction in real time, comparing it against a customer's usual patterns: typical spending amounts, usual merchants, typical locations and times. An unusual transaction — a large purchase in a country the customer has never visited, a card used seconds apart in two different cities — triggers a flag. Modern systems can also analyse account opening applications for synthetic identity patterns (is this address associated with multiple recent applications? does this National Insurance number belong to someone with no credit history?). On login pages, AI analyses typing rhythm, mouse movements, and device fingerprints to detect automated credential stuffing attacks.",
    hint: 'Think about AI watching for patterns that do not fit the customer\'s usual behaviour.',
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
            How AI is used by fraudsters — and by those fighting them. Synthetic identities,
            credential stuffing, fake documents, and what you can do to protect yourself in the UK.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-fraud" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The scale of the problem</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Fraud is the most common crime in England and Wales — more common than all other crimes combined. AI is making it cheaper, faster, and more sophisticated. But AI is also the main weapon being used to fight back.
          </p>
          <div className="space-y-2">
            {[
              'Fraud accounts for around 40% of all crime in England and Wales, with losses estimated at over £7 billion per year',
              'The National Fraud Intelligence Bureau (NFIB) says AI is now involved in the majority of sophisticated fraud cases it investigates',
              'Identity fraud reports to CIFAS (the UK fraud prevention service) have risen year on year for the past decade',
              'Credential stuffing attacks — using stolen passwords to access multiple accounts — have become fully automated using AI tools available on dark web forums',
              'The same AI capabilities used to generate convincing text, images, and voices are being used to create fake documents, deepfake videos, and synthetic identities',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mt-0.5 flex-shrink-0">&#x26A0;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Synthetic identity fraud</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            This is one of the fastest-growing fraud types in the UK and US — and one that most people have never heard of. A synthetic identity is not a stolen identity. It is a made-up one.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-orange-50 dark:bg-orange-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F9E0;</span>
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-200 text-sm mb-0.5">How it works</p>
                <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">Fraudsters combine a real National Insurance number (often from a child, elderly person, or someone who does not use credit) with invented names, addresses, and dates of birth. AI helps generate thousands of plausible-sounding synthetic profiles and builds fake credit histories over months or years — until the account is ready to "bust out" by maxing out credit and disappearing.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-orange-50 dark:bg-orange-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F575;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-200 text-sm mb-0.5">Why it is hard to catch</p>
                <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">Unlike traditional identity theft, there is no real victim to raise the alarm — the synthetic identity does not exist to report fraud to their bank. Lenders may not discover the fraud for months or years, by which time the fraudster is long gone and the debt is written off as a loss.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-orange-50 dark:bg-orange-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F6E1;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-200 text-sm mb-0.5">What banks are doing</p>
                <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">Banks are using AI to analyse new account applications for synthetic identity patterns — does this National Insurance number appear in multiple applications? Does the address history make geographic sense? Is the credit history too thin to be plausible for someone of the stated age? AI can spot inconsistencies that human reviewers would miss in the volume of applications processed daily.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-yellow-100 dark:border-yellow-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Credential stuffing and account takeover</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            When a company suffers a data breach, the stolen email addresses and passwords are sold on criminal forums. Credential stuffing uses AI to try these stolen credentials automatically against thousands of other websites.
          </p>
          <div className="space-y-2">
            {[
              'Large data breaches have leaked billions of username and password combinations — these lists are widely available on criminal marketplaces',
              'AI-powered credential stuffing tools can attempt thousands of logins per second across multiple sites simultaneously',
              'If you used the same password on a breached site as on your bank, the attacker may already have access to your bank account',
              'Once inside an account, fraudsters change contact details, siphon funds, or use the account for money laundering before the real owner notices',
              'Good password hygiene — a unique password for every service, ideally managed by a password manager — defeats credential stuffing completely',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-yellow-600 dark:text-yellow-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-950 rounded-xl p-4">
            <p className="text-yellow-700 dark:text-yellow-300 text-sm leading-relaxed">
              <span className="font-semibold">Check if you have been breached:</span> Visit haveibeenpwned.com and enter your email address. It will tell you if your email has appeared in any known data breaches — and which ones. If you appear in a breach, change the password for that service immediately and any other service where you used the same password.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI-generated fake documents</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Generative AI has lowered the skill barrier for creating convincing fake documents. Payslips, bank statements, utility bills, and even passport photo pages can now be produced by anyone with access to the right tools.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'Mortgage and rental fraud',
                detail: 'Fraudsters submit AI-generated payslips and bank statements showing income they do not have to obtain mortgages or sign rental agreements. Lenders and letting agents who rely on PDF documents without independent verification are particularly vulnerable.',
              },
              {
                label: 'Money laundering paper trails',
                detail: 'Organised crime uses AI-generated invoices, contracts, and receipts to create false paper trails explaining the origin of criminal proceeds — making dirty money appear to come from legitimate business activity.',
              },
              {
                label: 'Identity verification bypass',
                detail: 'Online identity verification systems that ask users to submit a photo of their ID can be defeated using AI-generated document images or deepfake videos of someone holding a fake document to camera.',
              },
            ].map(({ label, detail }) => (
              <div key={label} className="bg-purple-50 dark:bg-purple-950 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm">{label}</p>
                <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">What to do if your identity is stolen</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            If you discover that someone has been using your identity fraudulently in the UK, there are practical steps you can take.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CB;',
                label: 'Check your credit report',
                text: 'Get your free credit report from Experian, Equifax, or TransUnion. Look for accounts you did not open, addresses you have not lived at, or credit searches you did not authorise. Any of these may indicate identity fraud.',
                color: 'emerald',
              },
              {
                icon: '&#x1F6E1;&#xFE0F;',
                label: 'Register with CIFAS',
                text: 'CIFAS is the UK\'s fraud prevention service. Registering for Protective Registration puts a flag on your record that alerts lenders to perform extra checks before opening new accounts in your name. This makes it much harder for fraudsters to use your identity.',
                color: 'emerald',
              },
              {
                icon: '&#x1F4DE;',
                label: 'Report to Action Fraud',
                text: 'Action Fraud is the UK\'s national fraud reporting service. Report the fraud at actionfraud.police.uk or by calling 0300 123 2040. They will give you a crime reference number, which you will need when dealing with banks and credit agencies.',
                color: 'emerald',
              },
              {
                icon: '&#x1F4F1;',
                label: 'Contact your bank immediately',
                text: 'Tell your bank what has happened. They can add fraud markers to your accounts, review recent transactions, and help you dispute any fraudulent activity. Banks have dedicated fraud teams who deal with identity fraud regularly.',
                color: 'emerald',
              },
            ].map(({ icon, label, text, color }) => (
              <div key={label} className={"flex gap-3 items-start bg-" + color + "-50 dark:bg-" + color + "-950 rounded-xl p-3"}>
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className={"font-semibold text-" + color + "-800 dark:text-" + color + "-200 text-sm mb-0.5"}>{label}</p>
                  <p className={"text-" + color + "-700 dark:text-" + color + "-300 text-sm leading-relaxed"}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How banks use AI to fight fraud</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The same AI capabilities that fraudsters are exploiting are being deployed by banks, credit card companies, and fraud prevention services to fight back — often in real time.
          </p>
          <div className="space-y-2">
            {[
              'Transaction monitoring AI analyses every payment in real time, comparing it to your normal patterns — a purchase in a country you have never visited triggers an immediate alert',
              'Login page AI analyses typing rhythm, mouse movement patterns, and device fingerprints to distinguish real users from automated credential stuffing bots',
              'Application fraud AI reviews new account applications for synthetic identity signals — inconsistencies in address histories, implausible credit histories, suspicious National Insurance number patterns',
              'Voice biometrics AI can detect when a caller to a bank\'s fraud line is not who they claim to be, by analysing voice patterns against the registered customer',
              'Network analysis AI maps connections between accounts to identify fraud rings — multiple synthetic identities that share addresses, phone numbers, or device IDs',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
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
