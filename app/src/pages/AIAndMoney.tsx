import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { ShareButton } from '../components/ShareButton'

const quizQuestions: QuizQuestion[] = [
  {
    question: "How does a bank's fraud detection AI decide whether to flag a transaction?",
    options: [
      'A human reviews every transaction manually',
      'It compares the transaction to your typical spending patterns and flags anything unusual',
      'It checks whether the merchant is on a banned list',
      'It only flags transactions over a certain amount',
    ],
    correctIndex: 1,
    explanation:
      "AI fraud detection learns your normal spending behaviour — the types of merchants you visit, your usual amounts, where you shop geographically, what time of day you typically buy things — and alerts you or blocks transactions that deviate significantly from your pattern.",
  },
  {
    question: 'What is a robo-advisor?',
    options: [
      'A robot that physically manages your bank account',
      'An AI-powered service that automatically builds and manages an investment portfolio based on your goals and risk tolerance',
      'A chatbot that answers questions about your bank balance',
      'An AI that predicts which stocks will go up in value',
    ],
    correctIndex: 1,
    explanation:
      'Robo-advisors like Betterment and Wealthfront use algorithms to build diversified investment portfolios based on your goals, time horizon, and risk appetite. They automatically rebalance your portfolio and are typically much cheaper than human financial advisers.',
  },
  {
    question: 'What is a concern about AI being used in credit scoring?',
    options: [
      'AI credit scores are always lower than traditional scores',
      'AI models may perpetuate historical discrimination by learning from biased past lending decisions',
      'AI cannot process enough data to make accurate credit decisions',
      'Credit scoring AI only works for large loans',
    ],
    correctIndex: 1,
    explanation:
      'If historical lending data reflects past discrimination — for example, certain neighbourhoods or demographics being denied loans unfairly — an AI trained on that data may learn to repeat those patterns. This is a serious concern because the model may appear objective while actually encoding bias.',
  },
  {
    question: 'What is "algorithmic trading" in financial markets?',
    options: [
      'Trading using physical trading floor algorithms',
      'Using AI and computer programs to buy and sell financial instruments at very high speeds based on market data',
      'A government programme for regulating stock markets',
      'A type of savings account that adjusts interest rates automatically',
    ],
    correctIndex: 1,
    explanation:
      'Algorithmic (or "algo") trading uses AI and automated systems to execute trades in milliseconds based on market signals. It now accounts for a significant share of trading on major stock exchanges. It can create market instability — including "flash crashes" — when many systems react to the same signals simultaneously.',
  },
  {
    question: 'If an AI system denies your loan application and you believe it was unfair, what right do you have in the EU?',
    options: [
      'No rights — AI decisions cannot be challenged',
      'The right to receive an explanation of the decision and to request human review',
      "The right to see the AI's full source code",
      'The right to compensation from the AI company',
    ],
    correctIndex: 1,
    explanation:
      "Under the EU's General Data Protection Regulation (GDPR), individuals have the right to not be subject to solely automated decisions that significantly affect them, the right to receive an explanation for those decisions, and the right to request human review. The EU AI Act extends these protections further for high-risk AI systems.",
  },
]

export function AIAndMoney() {
  useMarkVisited('ai-and-money')
  useLessonVisit('ai-and-money')
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4B0;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and money
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How banks use AI to protect you from fraud, what robo-advisors are,
            and what to know when algorithms make decisions about your finances.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-money" />
          <ShareButton lessonTitle="ai-and-money" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI is already in your bank account</h2>
          <p className="text-gray-600 leading-relaxed">
            The next time your bank sends you a fraud alert &mdash; &ldquo;Was this you? We noticed an
            unusual transaction&rdquo; &mdash; you have experienced AI in financial services. Banks have
            been using machine learning for fraud detection for over two decades. It is one of
            the oldest and most successful applications of AI in industry.
          </p>
          <p className="text-gray-600 leading-relaxed">
            But fraud detection is just the beginning. AI now influences who gets a loan, what
            interest rate you pay, how your pension is invested, and even which insurance premiums
            you are quoted. Understanding how these systems work helps you make better decisions
            and know your rights when they go wrong.
          </p>
          <div className="bg-emerald-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-emerald-800 text-sm">Did you know?</p>
            <p className="text-emerald-700 text-sm leading-relaxed">
              Visa alone processes over 65,000 transactions per second. No human team could
              review them all for fraud in real time. AI models can evaluate each transaction
              in milliseconds, blocking suspicious ones before the payment even completes.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How fraud detection AI works</h2>
          <p className="text-gray-600 leading-relaxed">
            When you use your card, the bank&apos;s AI analyses dozens of signals simultaneously
            and produces a fraud risk score within milliseconds.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CD;',
                label: 'Location patterns',
                text: 'If you always shop in London and a transaction suddenly appears in Sao Paulo — especially if another transaction from your card appeared in London an hour earlier — the AI flags it as likely fraud.',
              },
              {
                icon: '&#x1F4C8;',
                label: 'Spending patterns',
                text: 'The model learns your typical purchase categories, amounts, and times of day. A small coffee on a weekday morning looks normal. Several hundred pounds in electronics at 3am does not.',
              },
              {
                icon: '&#x1F5C3;&#xFE0F;',
                label: 'Merchant patterns',
                text: 'Certain types of merchants and certain countries have historically higher fraud rates. These patterns feed into the model alongside your personal history.',
              },
              {
                icon: '&#x1F465;',
                label: 'Network signals',
                text: 'When a merchant is compromised, many cards issued at that merchant get used fraudulently in quick succession. AI can detect these patterns across millions of customers at once.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            False positives &mdash; when legitimate transactions are blocked &mdash; are the main downside.
            Banks tune their models to balance catching fraud against inconveniencing genuine
            customers. If your card is ever blocked unexpectedly, it is usually this balance
            being calibrated.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Robo-advisors: AI managing your investments</h2>
          <p className="text-gray-600 leading-relaxed">
            A robo-advisor is an automated investment service that uses algorithms to build and
            manage a portfolio on your behalf. They became popular in the 2010s as a low-cost
            alternative to human financial advisers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-blue-800 text-sm">How they work</p>
              <p className="text-blue-700 text-sm leading-relaxed">
                You answer questions about your goals, timeline, and how much risk you can tolerate.
                The algorithm allocates your money across a diversified mix of index funds and
                automatically rebalances it as markets move or your life changes.
              </p>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-green-800 text-sm">The main advantage</p>
              <p className="text-green-700 text-sm leading-relaxed">
                Human financial advisers typically charge around 1% of your assets per year.
                Robo-advisors charge 0.25% or less. Over decades, that difference in fees
                compounding can mean thousands in additional returns.
              </p>
            </div>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-amber-800 text-sm">Did you know?</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              Betterment, one of the first robo-advisors, launched in 2010. By 2024, it managed
              over $45 billion for more than 800,000 customers &mdash; all without a single human
              investment manager making individual portfolio decisions.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Robo-advisors are excellent for long-term savings and retirement planning. They
            struggle with complex situations &mdash; like inheritance planning, business assets, or
            tax optimisation across multiple countries &mdash; where a human adviser still adds value.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI credit scoring: opportunity and risk</h2>
          <p className="text-gray-600 leading-relaxed">
            Traditional credit scoring used a small number of variables: payment history, debt
            level, credit age. AI-powered credit models can analyse hundreds or thousands of
            data points &mdash; and this creates both opportunity and serious fairness concerns.
          </p>
          <div className="space-y-3">
            <div className="bg-green-50 border border-green-100 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-green-800 text-sm">The promise</p>
              <p className="text-green-700 text-sm leading-relaxed">
                Many people are &ldquo;credit invisible&rdquo; &mdash; they have no credit history because they
                are young, recently arrived in a country, or have always paid cash. AI models that
                use alternative data (like rental payment history, utility bills, or spending
                patterns) could help these people access credit they deserve.
              </p>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-red-800 text-sm">The risk</p>
              <p className="text-red-700 text-sm leading-relaxed">
                If historical lending data reflects past discrimination &mdash; certain postcodes, ethnicities,
                or demographics being denied loans unfairly &mdash; an AI trained on that data may learn
                to perpetuate those patterns. The model looks objective because it is just &ldquo;learning
                from data&rdquo;, but the data itself encoded human bias.
              </p>
            </div>
          </div>
          <div className="bg-emerald-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-emerald-800 text-sm">Did you know?</p>
            <p className="text-emerald-700 text-sm leading-relaxed">
              In 2019, the Apple Card was accused of offering lower credit limits to women than
              men &mdash; even when they had stronger financial profiles than their husbands. Goldman
              Sachs was investigated. The algorithm was not intentionally sexist; it likely
              learned from historical data where women had lower limits, and replicated the pattern.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Your rights when algorithms decide</h2>
          <p className="text-gray-600 leading-relaxed">
            When an AI system makes a decision about your finances, you have rights &mdash; even
            if you do not always know it.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'Right to explanation',
                text: 'In the EU and UK, if a solely automated decision significantly affects you (loan rejection, insurance refusal), you have the right to a meaningful explanation of why that decision was made. Vague answers like "the algorithm decided" are not sufficient.',
              },
              {
                label: 'Right to human review',
                text: 'You can request that a human, not an algorithm, review the decision. This is a legal right under GDPR for automated decisions that significantly affect you.',
              },
              {
                label: 'Right to challenge',
                text: 'If you believe a financial AI decision was wrong or discriminatory, you can complain to your national financial regulator. In the UK, that is the Financial Conduct Authority (FCA). Regulators are increasingly scrutinising algorithmic decision-making.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-gray-800 text-sm">{label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <Quiz lessonId="ai-and-money" questions={quizQuestions} />
        <LessonRating lessonId="ai-and-money" />
        <ReviewLaterButton lessonId="ai-and-money" />
        <LessonNote lessonId="ai-and-money" />
        <RelatedLessons currentId="ai-and-money" />
        <NextLesson currentId="ai-and-money" />
      </div>
    </div>
  )
}
