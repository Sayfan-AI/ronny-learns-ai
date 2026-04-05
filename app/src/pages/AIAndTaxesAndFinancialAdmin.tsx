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

const LESSON_TITLE = 'AI and taxes and financial admin'

const KEY_TAKEAWAYS = [
  "HMRC uses AI and machine learning to detect tax fraud and evasion, analysing millions of tax returns to spot patterns that suggest something is wrong — catching errors and fraud far more efficiently than manual checking ever could.",
  'AI-powered tax return tools like TaxScouts and FreeAgent use AI to pull together your income and expenses, categorise transactions automatically, and generate a completed self-assessment return — reducing a stressful annual task to an hour or less.',
  'Expense-scanning apps like Dext (formerly Receipt Bank) use computer vision to read a photo of a receipt, extract the date, amount, and supplier, and log it automatically in your accounts — eliminating the shoebox of paper receipts.',
  'AI bookkeeping tools can categorise your bank transactions, match invoices to payments, flag unusual items, and generate financial reports automatically — work that previously required a bookkeeper to do manually each month.',
  'Using AI with your financial data carries real risks: choose reputable HMRC-recognised tools, use strong passwords and two-factor authentication, understand who owns your data, and never share login credentials for your bank or HMRC account with third parties.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: "How does HMRC use AI to detect potential tax fraud or errors in self-assessment returns?",
    options: [
      "HMRC's AI reads the text of tax returns and flags any that contain spelling mistakes or formatting errors for manual review",
      "HMRC's AI analyses patterns across millions of tax returns — comparing income, expenses, and declared profits against benchmarks for similar businesses and individuals to flag unusual discrepancies",
      "HMRC's AI accesses taxpayers' personal bank accounts in real time and automatically transfers any underpaid tax without notifying the taxpayer",
      "HMRC uses AI only to send automated reminders about filing deadlines, not to analyse the content of tax returns",
    ],
    correctIndex: 1,
    explanation:
      "HMRC's Connect system is one of the most sophisticated tax analysis tools in the world. It holds data from tax returns, PAYE records, company accounts, Land Registry, social media, and overseas financial data — and uses AI to cross-reference all of it. If your declared income does not match your lifestyle (for example, you declare low earnings but own several properties), or your business expenses are unusually high compared to similar businesses, Connect flags the return for investigation. HMRC has said that every pound invested in this kind of AI-driven compliance generates many times that in recovered tax. The system is not perfect — innocent people can be flagged — but it dramatically improves the efficiency of finding genuine fraud.",
    hint: 'Think about comparing one return against millions of similar ones.',
  },
  {
    question: 'What does an AI-powered tax return tool like TaxScouts do that makes self-assessment easier?',
    options: [
      "It fills in your tax return on your behalf using publicly available information, without you needing to provide any documents or log in to HMRC",
      "It connects to your bank accounts and accounting software, automatically pulls together your income and expenses, categorises them, and generates a completed self-assessment return for your review",
      "It negotiates directly with HMRC to reduce your tax bill, using AI to find loopholes that are specific to your circumstances",
      "It predicts what tax you will owe next year so you can make investments now that will reduce your bill before the tax year ends",
    ],
    correctIndex: 1,
    explanation:
      "Tools like TaxScouts, FreeAgent, and QuickBooks Self-Employed connect (with your permission) to your bank accounts via Open Banking and to any accounting software you use. The AI automatically categorises income and expenses — rent income, freelance invoices, allowable business costs — and builds a draft self-assessment return. You review and approve the draft before submitting. TaxScouts also connects you to a human accountant who checks the return before filing. The result is that what used to take a full weekend with a shoebox of receipts can now take an hour. These tools are recognised by HMRC and file directly using the HMRC API.",
    hint: 'Think about what connecting to your bank and accounts software allows the AI to do automatically.',
  },
  {
    question: 'How does an expense-scanning app like Dext process a paper receipt?',
    options: [
      "You post the receipt to Dext's office, where a team of data-entry staff type the details into a spreadsheet and email it back to you within 48 hours",
      "You photograph the receipt on your phone; the app's AI reads the image, extracts the date, amount, VAT, and supplier name, and logs it automatically in your accounting software",
      "The app scans your email inbox for digital receipts but cannot process paper ones — you must still enter those manually into a spreadsheet",
      "You scan the receipt using a dedicated hardware scanner that connects to the app via Bluetooth, converting the image into a QR code your accountant can read",
    ],
    correctIndex: 1,
    explanation:
      "Dext (formerly Receipt Bank), AutoEntry, and similar tools use optical character recognition (OCR) combined with AI to read receipt images. Take a photo of a receipt on your phone, and the AI identifies the supplier, the date, the total amount, the VAT amount, and the expense category. It then pushes this data automatically into your accounting software — Xero, QuickBooks, Sage — as a categorised transaction ready for your accountant to review. The AI learns from corrections over time, improving accuracy for your specific suppliers and transaction patterns. The shoebox of paper receipts that used to arrive at an accountant's office at the end of the tax year is becoming obsolete.",
    hint: 'Think about what happens when you point your phone camera at a receipt.',
  },
  {
    question: 'What does AI bookkeeping software do automatically that previously required a human bookkeeper?',
    options: [
      "It interviews business owners each month, writes up a narrative description of the business's financial performance, and posts it to the company website as a blog",
      "It categorises bank transactions, matches invoices to payments, flags unusual items for review, and generates profit and loss reports without manual data entry",
      "It files company accounts with Companies House automatically each year without the director needing to review or approve the figures",
      "It transfers money between accounts automatically to ensure the business always has the optimum amount in current versus savings accounts for maximum interest",
    ],
    correctIndex: 1,
    explanation:
      "Traditional bookkeeping involved a human manually reviewing every bank transaction, assigning it to the right account (office supplies, travel, client income), matching each payment to the invoice it settled, and chasing outstanding invoices. Modern AI bookkeeping tools — Xero, FreeAgent, Tide — do most of this automatically. Bank feeds bring transactions in directly; the AI categorises them based on the payee name, the amount, and patterns it has learned from similar businesses. It matches incoming payments to outstanding invoices and alerts you when something does not match. The bookkeeper's role shifts from data entry to reviewing what the AI has done and handling the exceptions it flags.",
    hint: 'Think about what a bookkeeper spends most of their time doing.',
  },
  {
    question: 'What is the most important step you should take to protect yourself when using AI tools for tax and financial admin?',
    options: [
      "Never use any AI financial tools at all — the only safe approach is to do all financial admin by hand using paper and pen",
      "Use only HMRC-recognised tools, enable two-factor authentication on all financial accounts, and never share your bank or HMRC login credentials directly with any third-party app",
      "Give AI tools full access to all your financial accounts, including login details and passwords, so they can gather the most complete data possible",
      "Use a different AI tool for every financial task to minimise the amount of data any single provider holds about you",
    ],
    correctIndex: 1,
    explanation:
      "The key principles for using AI financial tools safely are: first, only use tools that connect to your bank via Open Banking (a secure, regulated standard) rather than asking for your actual bank login credentials — any app that asks for your bank username and password is a red flag. Second, use HMRC-recognised software for tax purposes — HMRC publishes a list of approved software. Third, enable two-factor authentication on every financial account. Fourth, read the data policy of any tool you use: understand who owns your financial data, whether it is sold to third parties, and how to delete it if you stop using the service. Financial data in the wrong hands can enable fraud and identity theft.",
    hint: 'Think about what you should never hand over to a third-party app.',
  },
]

export function AIAndTaxesAndFinancialAdmin() {
  useMarkVisited('ai-and-taxes-and-financial-admin')

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4CA;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and taxes and financial admin
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How HMRC uses AI to detect fraud, why tax return tools are getting smarter,
            how expense scanning works, and how to stay safe with AI and your finances.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-taxes-and-financial-admin" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Why financial admin is ripe for AI</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Tax and financial admin is exactly the kind of task AI is well-suited to: large volumes of structured data, repetitive categorisation, pattern recognition, and rules that can be encoded. For most people, it is also one of the most dreaded annual tasks.
          </p>
          <div className="space-y-2">
            {[
              'Over 12 million people in the UK file a self-assessment tax return each year — and many find it one of the most stressful admin tasks they face',
              'HMRC estimates the tax gap (tax owed but not paid) at around £36 billion a year in the UK — AI is one of its main tools for closing this gap',
              'Small businesses lose an estimated 120 hours a year to financial admin — bookkeeping, invoicing, expense tracking, and payroll',
              'The Making Tax Digital programme requires most businesses to use software to keep tax records and file returns — AI tools are central to this shift',
              'Open Banking regulations (since 2018) allow apps to securely access your bank transaction data with your permission, enabling AI to automate much of the work',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-amber-600 dark:text-amber-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">HMRC and AI — detecting fraud at scale</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            HMRC is one of the most advanced users of AI in UK government. Its Connect system is a machine-learning platform that analyses data from an enormous range of sources to identify tax fraud and error.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F50D;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">What Connect analyses</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">Connect holds billions of pieces of data: PAYE records, self-assessment returns, company accounts, VAT returns, Land Registry records, bank account data from overseas tax authorities, Companies House filings, and more. It cross-references all of these — if your declared income does not match your property ownership or lifestyle indicators, it flags the discrepancy.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4B9;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">Benchmarking by industry</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">Connect uses AI to benchmark businesses against others in the same industry. If the average plumbing business declares material costs at 20% of revenue, but yours declares 45%, Connect will flag this as an outlier worth investigating. This does not mean you are cheating — there may be a legitimate reason — but it prompts HMRC to look more closely.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x2705;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">What this means for honest taxpayers</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">If your tax affairs are straightforward and you file accurately, HMRC's AI is largely invisible to you. The system prioritises investigating cases where discrepancies are largest and most suspicious. Keeping good records and using HMRC-recognised software means your returns are consistent with your underlying data — which is exactly what Connect wants to see.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI tax return tools — self-assessment without the stress</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Self-assessment used to mean gathering a year's worth of documents, translating them into HMRC's form, and hoping you had not missed anything. AI tools have changed this substantially.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F9FE;',
                label: 'TaxScouts',
                text: "TaxScouts connects to your bank via Open Banking and uses AI to identify and categorise your self-employment income and allowable expenses. It produces a draft return, assigns a human accountant to check it, and files it directly via HMRC's API. Cost: around £149 for a straightforward return.",
              },
              {
                icon: '&#x1F4BB;',
                label: 'FreeAgent',
                text: 'FreeAgent is accounting software for freelancers and small businesses. Its AI automatically categorises bank transactions, matches invoices to payments, calculates your tax liability in real time (so you always know what you owe), and generates a self-assessment return. Free with most NatWest and Royal Bank of Scotland business accounts.',
              },
              {
                icon: '&#x1F4F1;',
                label: 'HMRC app and Making Tax Digital',
                text: "HMRC's own app allows you to view your tax account, see what you owe, make payments, and check your National Insurance record. Making Tax Digital (MTD) will eventually require all businesses to use software to keep records and file quarterly updates — the aim is to reduce errors through automation.",
              },
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

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Expense scanning — goodbye to the shoebox of receipts</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Expense scanning apps use computer vision AI to extract data from paper and digital receipts automatically, eliminating the most tedious part of bookkeeping.
          </p>
          <div className="space-y-2">
            {[
              'Take a photo of any receipt on your phone — the app reads the supplier name, date, total amount, and VAT automatically',
              'The data is pushed directly into your accounting software (Xero, QuickBooks, Sage) as a categorised transaction, ready for review',
              'The AI learns from any corrections you make, improving accuracy for your regular suppliers over time',
              'Digital receipts from email can also be forwarded to the app, which extracts the same data from the email content',
              'HMRC accepts digital records kept in this way — you do not need to retain the original paper receipt if the digital record is stored correctly',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-orange-50 dark:bg-orange-950 rounded-xl p-4">
            <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">
              <span className="font-semibold">Main tools:</span> Dext (formerly Receipt Bank), AutoEntry, Hubdoc, and Expensify are the most widely used expense scanning tools in the UK. Most integrate with Xero and QuickBooks. Dext is used by over 500,000 businesses and their accountants.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Staying safe with AI and your financial data</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Financial data is among the most sensitive and valuable data you hold. Using AI tools safely requires a few clear principles.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F512;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Never share your bank login credentials</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Legitimate tools connect to your bank via Open Banking — a regulated, read-only connection you authorise through your bank's own interface. They never need your bank username and password. Any app that asks for these is either dangerous or irresponsible.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CB;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Use HMRC-recognised software</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">HMRC publishes a list of software it recognises for Making Tax Digital and self-assessment. Choosing from this list means the software can file directly with HMRC and has been tested for compliance. Search for "HMRC recognised software" on gov.uk.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F510;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Two-factor authentication everywhere</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Enable two-factor authentication on your HMRC Government Gateway account, your bank, and any financial software you use. This ensures that even if your password is stolen, your accounts cannot be accessed without your phone.</p>
              </div>
            </div>
          </div>
        </div>

        <LessonNote lessonId="ai-and-taxes-and-financial-admin" />
        <ReviewLaterButton lessonId="ai-and-taxes-and-financial-admin" />

        <Quiz lessonId="ai-and-taxes-and-financial-admin" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-taxes-and-financial-admin" />
        <LessonFeedback lessonId="ai-and-taxes-and-financial-admin" />

        <RelatedLessons currentId="ai-and-taxes-and-financial-admin" />

        <NextLesson currentId="ai-and-taxes-and-financial-admin" />

      </div>
    </div>
  )
}
