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

const LESSON_TITLE = 'AI and taxes'

const KEY_TAKEAWAYS = [
  'HMRC uses AI to detect tax fraud by analysing patterns across millions of tax returns — flagging suspicious inconsistencies that no human inspector could spot at scale.',
  'AI-powered tax tools like QuickBooks, FreeAgent, and TaxScouts can automatically categorise your expenses, prepare your self-assessment, and identify allowable deductions you might have missed.',
  'Expense scanning apps use AI to read receipts from a photo and automatically categorise business expenses — saving hours of manual data entry for sole traders and the self-employed.',
  'Tax advice from AI tools should always be verified with a human accountant for significant decisions — tax law is complex, changes frequently, and AI tools can make errors that carry financial and legal consequences.',
  'HMRC\'s Making Tax Digital programme is moving all business tax reporting online by 2026 — AI tools that connect directly to HMRC\'s systems will become essential for self-employed people and small businesses.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does HMRC use AI to detect tax fraud?',
    options: [
      'HMRC uses AI to automatically arrest suspected tax fraudsters without the need for a human investigation',
      'HMRC\'s AI systems analyse patterns across millions of tax returns, financial records, and third-party data to flag inconsistencies and anomalies that suggest fraud or error — cases then investigated by human inspectors',
      'HMRC uses AI only to send automated penalty notices for late returns — all fraud detection is done by human tax inspectors',
      'HMRC\'s AI reads your social media posts to check whether your lifestyle appears consistent with your declared income',
    ],
    correctIndex: 1,
    explanation: 'HMRC processes over 12 million self-assessment tax returns each year, plus millions of PAYE records, VAT returns, and business filings. No human team could analyse all of these for suspicious patterns. HMRC\'s Connect system uses AI to identify anomalies — for example, someone claiming very low income while making large property purchases, or a business whose declared turnover is inconsistent with its utility bills and staff costs. It cross-references tax data with DVLA records, Land Registry data, bank reports, and Companies House. Flagged cases are then investigated by human tax inspectors. HMRC recovered over £36 billion in additional tax through compliance work in 2022/23.',
    hint: 'Think about how many tax returns HMRC receives and whether it would be possible for humans alone to check all of them for fraud.',
  },
  {
    question: 'How do AI expense scanning apps help self-employed people?',
    options: [
      'AI expense apps automatically pay your bills by connecting to your bank account and transferring money to HMRC on your behalf',
      'You photograph a receipt and AI reads the text, identifies the supplier and amount, categorises the expense (travel, equipment, meals), and adds it to your accounts — automating hours of manual data entry',
      'AI expense apps report all your business expenses to HMRC in real time, so you never need to file a tax return',
      'AI expense apps only work with receipts from major retailers — handwritten receipts or small suppliers cannot be processed',
    ],
    correctIndex: 1,
    explanation: 'For sole traders, freelancers, and the self-employed, tracking and categorising business expenses is one of the most tedious parts of running a business. Apps like Dext (formerly Receipt Bank), Expensify, and QuickBooks use optical character recognition (OCR) plus AI to extract the relevant information from a photo of a receipt or invoice: supplier name, date, amount, VAT amount. The AI then categorises the expense — travel, office supplies, software, meals — based on the supplier and context, and adds it to your accounting records. At the end of the year, these categorised expenses feed directly into your self-assessment. The time savings can be significant for businesses with many small expenses.',
    hint: 'Think about the step-by-step process of dealing with a receipt and how AI could automate each step.',
  },
  {
    question: 'What is Making Tax Digital and how does AI fit in?',
    options: [
      'Making Tax Digital is a new type of AI that HMRC has developed to complete tax returns on behalf of all UK taxpayers automatically',
      'Making Tax Digital is HMRC\'s programme to move all business tax reporting online, requiring digital records and regular electronic submissions — creating a market for AI accounting tools that connect directly to HMRC\'s systems',
      'Making Tax Digital is a legal requirement for all taxpayers to use AI tools to prepare their returns — paper returns are banned from 2024',
      'Making Tax Digital refers to HMRC\'s plan to digitise its own internal records — it does not affect how businesses or individuals file their returns',
    ],
    correctIndex: 1,
    explanation: 'HMRC\'s Making Tax Digital (MTD) programme requires businesses and self-employed people to keep digital records and submit returns electronically using approved software. VAT-registered businesses with turnover above £90,000 already use MTD for VAT. From April 2026, self-employed people and landlords with income above £50,000 must use MTD for Income Tax. This creates a huge market for AI accounting tools — software like QuickBooks, FreeAgent, and Xero that can connect to HMRC\'s systems, automatically reconcile your bank transactions, prepare quarterly updates, and file your annual return. For many people, these tools effectively automate most of their tax administration.',
    hint: 'Think about what happens when tax reporting must be done digitally and how software can automate much of the process.',
  },
  {
    question: 'Why should you be cautious about using AI tools for significant tax decisions?',
    options: [
      'AI tax tools are illegal in the UK — only qualified accountants are allowed to give tax advice',
      'Tax law is complex and changes frequently; AI tools can make errors, miss jurisdiction-specific rules, or give outdated advice — for significant decisions, a qualified accountant should review the AI\'s output',
      'AI tools charge hidden fees that are added to your tax bill by HMRC when they detect the return was prepared by software',
      'AI tax tools are only available in the United States and do not understand UK tax law at all',
    ],
    correctIndex: 1,
    explanation: 'AI tax tools are genuinely useful for routine tasks — categorising expenses, calculating basic allowances, preparing straightforward self-assessments. But tax law is genuinely complex: the rules change in every Budget, there are hundreds of specific reliefs and exemptions with detailed eligibility criteria, and HMRC\'s interpretation of the rules can differ from common sense. An AI tool might miss that you qualify for the Marriage Allowance, incorrectly categorise a home office expense, or give outdated advice about a rule that changed last April. For small amounts with clear rules, AI tools are fine. For anything complex — selling a property, pension contributions, business tax, inheritance tax — a qualified accountant who is legally accountable for their advice is worth the cost.',
    hint: 'Think about what the consequences of an error in your tax return might be, and whether you want AI alone to be responsible for avoiding them.',
  },
  {
    question: 'What is HMRC\'s Connect system and what data sources does it use?',
    options: [
      'Connect is an HMRC app that connects directly to your bank account and automatically calculates your tax bill based on your spending',
      'Connect is HMRC\'s AI system that cross-references tax returns with data from the DVLA, Land Registry, Companies House, banks, and other sources to identify inconsistencies that suggest fraud or underpayment',
      'Connect is a service that allows taxpayers to connect directly with an HMRC human advisor to discuss their tax return',
      'Connect is the software that HMRC uses internally to process paper tax returns and convert them to digital format',
    ],
    correctIndex: 1,
    explanation: 'HMRC\'s Connect system is one of the most powerful tax analysis tools in the world. It holds data from over 30 different sources and has over a billion data points. It cross-references an individual\'s or business\'s tax return against: DVLA vehicle registration data (expensive cars suggest higher income), Land Registry property purchase records, Companies House director information, reports from banks and financial institutions, overseas tax authority information (via international exchange agreements), social media and public online information, and eBay/Airbnb income data. The AI identifies cases where the declared income does not seem consistent with the person\'s assets and lifestyle — these are then investigated by human compliance officers.',
    hint: 'Think about how many different data sources could reveal whether someone\'s declared income matches their actual financial life.',
  },
]

export function AIAndTaxes() {
  useMarkVisited('ai-and-taxes')

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4B0;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and taxes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            HMRC fraud detection, AI tax tools, expense scanning, and Making Tax Digital —
            how artificial intelligence is transforming tax administration in the UK.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <DifficultyBadge difficulty="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-taxes" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">HMRC and AI fraud detection</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            HMRC uses AI to do what no human team could — analyse millions of returns simultaneously for signs of fraud, avoidance, and error.
          </p>
          <div className="space-y-2">
            {[
              'HMRC\'s Connect system holds over a billion data points from more than 30 different data sources',
              'It cross-references your declared income against your car registrations, property purchases, and bank reports',
              'International data-sharing agreements mean HMRC knows about overseas bank accounts and income sources',
              'The AI flags anomalies for human inspectors to investigate — the computer spots patterns, humans make the final call',
              'HMRC recovered over £36 billion in additional tax through compliance work in 2022/23',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI tools for your tax return</h2>
          <div className="space-y-3">
            {[
              { icon: '&#x1F4F8;', label: 'Expense scanning', text: 'Photograph a receipt — AI reads the amount, supplier, and date, categorises the expense, and adds it to your accounts. Apps: Dext, Expensify, QuickBooks.' },
              { icon: '&#x1F4CA;', label: 'Self-assessment preparation', text: 'Tools like TaxScouts and GoSimpleTax guide you through your return, flag missing information, and identify allowances you might have missed.' },
              { icon: '&#x1F4B3;', label: 'Bank transaction categorisation', text: 'Connect your business bank account to software like FreeAgent and AI automatically categorises income and expenses for your accounts.' },
              { icon: '&#x1F4C5;', label: 'Making Tax Digital compliance', text: 'From 2026, AI accounting software will be essential for self-employed people and landlords above the income threshold.' },
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
          <div className="bg-amber-50 dark:bg-amber-950 rounded-xl p-4">
            <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
              <span className="font-semibold">Important reminder:</span> AI tools are helpful for routine tax tasks, but for anything complex — selling a property, inheritance, pension planning — get advice from a qualified accountant who is legally responsible for their guidance.
            </p>
          </div>
        </div>

        <LessonNote lessonId="ai-and-taxes" />
        <ReviewLaterButton lessonId="ai-and-taxes" />

        <Quiz lessonId="ai-and-taxes" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-taxes" />
        <LessonFeedback lessonId="ai-and-taxes" />

        <RelatedLessons currentId="ai-and-taxes" />

        <NextLesson currentId="ai-and-taxes" />

      </div>
    </div>
  )
}
