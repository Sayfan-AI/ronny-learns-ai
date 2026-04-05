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

const LESSON_TITLE = 'AI and personal finance'

const KEY_TAKEAWAYS = [
  'Robo-advisors like Nutmeg, Moneybox, and Wealthify use AI to build and automatically manage investment portfolios based on your goals and risk tolerance — at a fraction of the cost of a traditional financial adviser.',
  'AI budgeting apps such as Emma, Cleo, and Plum connect to your bank accounts, categorise every transaction automatically, spot spending patterns you might not notice yourself, and give personalised saving suggestions.',
  'Credit scoring algorithms analyse dozens of data points to decide whether lenders offer you a mortgage, credit card, or loan — and at what interest rate. These systems can embed bias if the training data reflects historical inequality.',
  'Every major bank uses AI to monitor transactions in real time for fraud. When a purchase looks out of character for you, the AI can decline it and alert you within seconds — protecting you before you even know something is wrong.',
  'AI tools can genuinely help you manage your money, but they should support your decisions, not replace them. Always understand what any financial product is doing with your money before you sign up.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does a robo-advisor actually do with your money?',
    options: [
      'It acts as a chatbot that answers questions about financial products but does not handle any actual investments',
      'It uses AI to build a diversified investment portfolio based on your goals and risk tolerance, then automatically rebalances it over time without you needing to make individual investment decisions',
      'It analyses the stock market in real time and picks individual shares to buy and sell on your behalf, aiming to outperform the market each day',
      'It monitors your bank account and automatically transfers surplus funds into a savings account whenever your balance exceeds a threshold you set',
    ],
    correctIndex: 1,
    explanation:
      'Robo-advisors like Nutmeg, Moneybox, Vanguard, and Wealthify ask you about your investment goals (saving for a house, retirement, etc.) and your attitude to risk. They then use AI to allocate your money across a diversified mix of assets (typically low-cost index funds tracking shares, bonds, and property around the world). The AI automatically rebalances the portfolio as markets move and as you get closer to your goal. This is fundamentally different from day trading — robo-advisors are designed for long-term investing, not speculation.',
    hint: 'Think about long-term portfolio management rather than day-to-day trading.',
  },
  {
    question: 'How do AI budgeting apps like Emma or Cleo know so much about your spending?',
    options: [
      'They access your payslips directly from HMRC with your permission, giving them an accurate picture of your income and tax situation',
      'They connect to your bank accounts and credit cards via Open Banking, automatically categorising every transaction so they can analyse your spending patterns',
      'They ask you to photograph every receipt and manually enter each purchase, which the AI then analyses to identify patterns',
      'They purchase anonymised spending data from supermarkets and retailers, then match it to your profile based on your postcode and age',
    ],
    correctIndex: 1,
    explanation:
      'Open Banking is a UK regulation that requires banks to allow you to securely share your transaction data with authorised third parties, with your explicit consent. AI budgeting apps like Emma, Cleo, Plum, and Monzo use Open Banking connections to see your transactions in real time. The AI categorises every purchase (groceries, eating out, subscriptions, transport) and builds a detailed picture of where your money goes. It can then spot that you have three forgotten streaming subscriptions, or that your food delivery spending doubled last month, and offer specific suggestions.',
    hint: 'Think about how these apps connect to your bank with your permission.',
  },
  {
    question: 'Why are AI credit scoring systems sometimes considered unfair?',
    options: [
      'Because they charge higher fees to process applications from people with lower incomes, making lending inherently more expensive for those who can least afford it',
      'Because they are trained on historical lending data that may reflect past discriminatory practices, meaning the AI can learn to disadvantage certain groups based on factors correlated with protected characteristics like race or postcode',
      'Because they are owned by private companies that are not regulated by the Financial Conduct Authority and can therefore set their own criteria without oversight',
      'Because they consider factors like social media activity and online shopping habits that have no legitimate connection to a person\'s ability to repay a debt',
    ],
    correctIndex: 1,
    explanation:
      'AI credit scoring systems are trained on past lending decisions and repayment records. If historical lending was discriminatory — for example, banks historically refused mortgages in certain postcodes regardless of applicant quality, a practice called redlining — the AI can learn these patterns and perpetuate them. Even if the AI never explicitly considers race or ethnicity, it may use proxy variables (postcode, type of employer, educational institution) that are correlated with protected characteristics. This is called proxy discrimination. In the UK, lenders must be able to explain credit decisions and comply with the Equality Act.',
    hint: 'Think about what happens when AI learns from biased historical data.',
  },
  {
    question: 'How does AI fraud detection work when you use your bank card?',
    options: [
      'The bank requires you to enter a PIN for every transaction, and the AI checks that the PIN matches what you set when you opened the account',
      'The AI analyses each transaction against your personal spending history and flags purchases that seem out of character — unusual location, atypical amount, or unfamiliar merchant — in real time',
      'The bank\'s AI monitors your physical location via your phone\'s GPS and declines transactions at locations you have not visited in the past six months',
      'AI scans all transactions for known fraudulent merchant codes and automatically blocks payments to any merchant that appears on a fraud database',
    ],
    correctIndex: 1,
    explanation:
      'When you tap your card, dozens of data points are checked against your personal spending profile in milliseconds. Your bank\'s AI has learned what normal looks like for you — where you usually shop, what times of day you spend, typical amounts, which countries you visit. If something deviates from your pattern — a transaction in a country you have never visited, or five small transactions in quick succession at different petrol stations (a card-testing pattern used by fraudsters) — the AI flags or blocks it instantly. This is why a holiday purchase is sometimes declined and why your bank sometimes asks "did you make this payment?"',
    hint: 'Think about the AI knowing your usual spending patterns.',
  },
  {
    question: 'What is the most important thing to do before using an AI financial tool to manage your money?',
    options: [
      'Check that the app has at least a four-star rating in the App Store, as this is a reliable indicator that the AI is accurate and the company is trustworthy',
      'Ensure the firm is authorised and regulated by the Financial Conduct Authority (FCA), understand what the tool does with your money and data, and never hand over decision-making entirely to an AI',
      'Confirm that the AI uses the same investment strategy as your bank, to avoid any risk of conflicting financial advice across your accounts',
      'Set the app up under a separate email address that is not linked to your main identity, so your data cannot be combined with your other online profiles',
    ],
    correctIndex: 1,
    explanation:
      'Authorisation by the Financial Conduct Authority (FCA) means a firm has met minimum standards for capital, competence, and consumer protection. You can check the FCA register at fca.org.uk. Beyond that, you should understand what the tool does — is it just showing you data, or is it actually moving your money? Who can see your financial data? What happens if the company goes bust? Robo-advisors regulated by the FCA are covered by the Financial Services Compensation Scheme (FSCS) up to £85,000 if the firm fails. AI is a useful aid for personal finance, but you remain responsible for your financial decisions.',
    hint: 'Think about regulation and staying in control of your own decisions.',
  },
]

export function AIAndPersonalFinance() {
  useMarkVisited('ai-and-personal-finance')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4B0;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and personal finance
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI is changing the way we save, invest, borrow, and protect our money —
            from robo-advisors and budgeting apps to credit scoring and real-time fraud detection.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-personal-finance" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI is already in your wallet</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Whether you realise it or not, AI is already deeply embedded in your financial life. Every time your bank declines a suspicious transaction, every time a budgeting app categorises a purchase, every time a lender makes a credit decision about you — AI is involved.
          </p>
          <div className="space-y-2">
            {[
              'UK banks block millions of fraudulent transactions every year using AI — most before you ever see them on your statement',
              'More than 40% of new UK ISA accounts opened in 2024 were through digital investment platforms using robo-advisory technology',
              'Open Banking, introduced in 2018, allows authorised apps to read your transaction data with your permission — enabling a new generation of AI money tools',
              'Credit decisions for mortgages, loans, and credit cards are now almost entirely made by algorithms trained on millions of past applications',
              'Understanding these systems helps you make better use of them and know your rights when they affect you',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Robo-advisors — investing without a financial adviser</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Traditional financial advice has always been expensive and out of reach for many people. A robo-advisor makes long-term investing accessible to almost anyone.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CB;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">How they work</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">You answer questions about your goals (saving for a house, building a pension), your timeline (5 years, 20 years), and how much volatility you can stomach. The AI builds a portfolio of diversified index funds and automatically rebalances it as markets move.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4B7;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Why they are popular</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">A traditional IFA (Independent Financial Adviser) typically charges 1-2% of your portfolio per year plus upfront fees. Platforms like Nutmeg, Vanguard, and Moneybox typically charge 0.25-0.75% — making the difference in returns meaningful over decades.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x26A0;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">What they cannot do</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Robo-advisors are best for straightforward situations. If you have complex tax affairs, a business to sell, a large inheritance, or need advice about pension drawdown, a human IFA with full regulated advice is worth the cost. Robo-advisors also cannot guarantee returns — you can lose money investing.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-teal-100 dark:border-teal-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI budgeting apps — understanding where your money goes</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Apps like Emma, Cleo, and Plum connect to your bank accounts via Open Banking and use AI to give you a clear picture of your spending — and help you do better.
          </p>
          <div className="space-y-2">
            {[
              'Automatic categorisation: every transaction is sorted into categories (groceries, eating out, transport, subscriptions) without you having to do anything',
              'Pattern detection: the AI spots that you spend twice as much on food delivery on Thursdays, or that your energy bills have crept up 30% over six months',
              'Subscription tracking: many people have forgotten subscriptions they no longer use. AI spots these and asks if you want to cancel',
              'Savings nudges: Plum and similar apps use AI to calculate a safe amount to move to savings based on your spending patterns and upcoming bills — doing this automatically if you choose',
              'Spending predictions: AI forecasts your likely spend for the rest of the month based on your patterns, warning you if you are on track to overspend',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-teal-600 dark:text-teal-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Credit scoring — how algorithms decide on your applications</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Whether you are applying for a mortgage, a credit card, or a phone contract, an AI algorithm is assessing your application.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-amber-50 dark:bg-amber-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CA;</span>
              <div>
                <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm mb-0.5">What the AI considers</p>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">Your credit history (have you repaid debts on time?), how much credit you already have, whether you are on the electoral roll, your income relative to your requested loan, how long you have had bank accounts, and many more factors. The AI weighs hundreds of data points simultaneously.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-amber-50 dark:bg-amber-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x2696;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm mb-0.5">The fairness problem</p>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">Credit scoring AI is trained on historical lending data. If that history reflects discrimination — for example, some groups were historically denied credit regardless of their actual risk — the AI can perpetuate those patterns through proxy variables like postcode. Campaigners and regulators are increasingly scrutinising these systems.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-amber-50 dark:bg-amber-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4DC;</span>
              <div>
                <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm mb-0.5">Your rights</p>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">Under UK law you have the right to know if you were declined credit due to an automated decision, to request human review of that decision, and to see your credit file for free. Check your file at Experian, Equifax, or TransUnion annually — errors do occur and they affect your score.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Fraud detection — AI protecting your money in milliseconds</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Real-time fraud detection is one of the clearest examples of AI delivering everyday benefit at scale. Every card payment you make is assessed in under a second.
          </p>
          <div className="space-y-2">
            {[
              'Your bank builds a behavioural profile: where you typically shop, what times you spend, typical transaction sizes, which countries appear on your statements',
              'When a transaction deviates from your profile — unusual location, atypical amount, unfamiliar merchant type — the AI flags it for review or declines it instantly',
              'Card testing fraud (criminals making tiny test purchases to check a stolen card is active) is detected by the pattern of rapid small transactions',
              'Account takeover attempts are detected by unusual login behaviour — new device, unusual location, typing patterns that differ from yours',
              'In 2023, UK banks prevented over 1.4 billion pounds of fraud — the majority stopped by AI before it reached customers',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 dark:bg-red-950 rounded-xl p-4">
            <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
              <span className="font-semibold">The false positive problem:</span> The same AI that blocks fraud occasionally declines a legitimate purchase — your holiday card, a large unusual purchase. If this happens, calling your bank to confirm the transaction resolves it quickly. The inconvenience is the price of protection.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Using AI financial tools wisely</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI can genuinely improve your financial decisions — but only if you use it with clear eyes. A few principles help.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F50D;',
                label: 'Check for FCA authorisation',
                text: 'Any firm handling your money or giving financial advice in the UK must be authorised by the Financial Conduct Authority. Check the FCA register at fca.org.uk before signing up to anything.',
                color: 'slate',
              },
              {
                icon: '&#x1F4AC;',
                label: 'Understand what the tool actually does',
                text: 'Is it giving you information or actually moving your money? Can it invest on your behalf? What happens to your data? Read the key information document for any investment product.',
                color: 'slate',
              },
              {
                icon: '&#x1F9E0;',
                label: 'Stay in control',
                text: 'AI tools should help you make better decisions — not make decisions for you. The more money involved, the more important it is to understand what is happening and why.',
                color: 'slate',
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

        <LessonNote lessonId="ai-and-personal-finance" />
        <ReviewLaterButton lessonId="ai-and-personal-finance" />

        <Quiz lessonId="ai-and-personal-finance" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-personal-finance" />
        <LessonFeedback lessonId="ai-and-personal-finance" />

        <RelatedLessons currentId="ai-and-personal-finance" />

        <NextLesson currentId="ai-and-personal-finance" />

      </div>
    </div>
  )
}
