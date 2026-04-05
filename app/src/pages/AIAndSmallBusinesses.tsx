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

const LESSON_TITLE = 'AI and small businesses — bookkeeping, chatbots, inventory, and the high street'

const KEY_TAKEAWAYS = [
  'AI bookkeeping tools like FreeAgent, Xero, and QuickBooks now automatically categorise transactions, generate invoices, and flag unusual spending — saving small business owners several hours a week.',
  'Customer service chatbots are no longer only for large companies. Tools like Tidio, Freshchat, and WhatsApp Business automation let a sole trader offer 24-hour responses to common queries.',
  'AI-driven inventory systems predict when stock will run out based on sales patterns, seasonal trends, and even local weather — helping independent shops avoid both stockouts and waste.',
  'Social media AI tools can generate product descriptions, post captions, and ad copy from a photograph or a few bullet points — lowering the barrier for small businesses to compete online.',
  'The biggest risk for small businesses is over-relying on AI output without checking it. An AI that confidently writes the wrong price, wrong opening hours, or inaccurate product information can damage customer trust rapidly.',
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'What do AI bookkeeping tools like Xero and FreeAgent do automatically?',
    options: [
      'They file your tax return with HMRC without any human review',
      'They categorise bank transactions, generate invoices, and flag unusual spending patterns',
      'They replace your accountant entirely and give regulated financial advice',
      'They transfer money between business accounts on your behalf',
    ],
    correctIndex: 1,
    explanation:
      'AI bookkeeping tools handle the time-consuming data-entry and categorisation work, but a qualified accountant is still needed for tax advice, year-end accounts, and complex financial decisions. The AI is a time-saver, not a replacement for professional advice.',
  },
  {
    question: 'How do AI inventory systems help independent shops?',
    options: [
      'They order stock from suppliers automatically without the owner approving it',
      'They predict when stock will run low based on sales patterns, seasons, and trends — allowing timely reordering',
      'They set prices dynamically, undercutting competitors by the minute',
      'They detect shoplifting using facial recognition cameras',
    ],
    correctIndex: 1,
    explanation:
      'AI inventory tools analyse historical sales data combined with external factors like seasonality and local events to forecast demand. The shop owner retains control over ordering — the AI gives them a better-informed recommendation, not an automatic purchase.',
  },
  {
    question: 'What is the main risk of using AI to write product descriptions and social media posts for your business?',
    options: [
      'The content will always be too short',
      'AI-generated content is always flagged and penalised by search engines',
      'The AI may confidently produce inaccurate information — wrong prices, features, or details — that could mislead customers',
      'Social media platforms ban AI-written posts',
    ],
    correctIndex: 2,
    explanation:
      'AI writing tools are very good at producing fluent, persuasive text — but they can get facts wrong. A small business owner who publishes AI-generated content without checking it risks posting incorrect prices, wrong product specifications, or descriptions that do not match what they actually sell.',
  },
  {
    question: 'What can a WhatsApp Business chatbot do for a small trader?',
    options: [
      'Make and receive phone calls on behalf of the business',
      'Process contactless payments through WhatsApp',
      'Automatically answer common customer questions at any hour of the day',
      'Negotiate contracts with suppliers using AI',
    ],
    correctIndex: 2,
    explanation:
      'WhatsApp Business automation and simple chatbots let a sole trader set up automatic replies to the questions they receive most often. This means customers get an instant response even when the owner is busy or closed — improving customer experience without hiring staff.',
  },
  {
    question: 'Why might a high street shop be cautious about AI-powered dynamic pricing?',
    options: [
      'Dynamic pricing is illegal in the UK for physical shops',
      'Prices changing frequently can confuse or frustrate customers who expect consistent pricing, potentially damaging trust',
      'Dynamic pricing only works for online retailers and has no effect in physical stores',
      'AI cannot currently process the speed needed for high street pricing decisions',
    ],
    correctIndex: 1,
    explanation:
      'While dynamic pricing can increase revenue, it can also alienate loyal customers who expect stable prices. High street shops depend heavily on community trust and regular custom, so aggressive AI pricing strategies carry a different kind of risk than they do for anonymous online platforms.',
  },
]

export function AIAndSmallBusinesses() {
  useMarkVisited('ai-and-small-businesses')

  return (
    <main className="max-w-2xl mx-auto px-4 py-8 space-y-8">
      <div className="space-y-3">
        <LessonSeriesBadge lessonId="ai-and-small-businesses" />
        <CompletedBadge lessonId="ai-and-small-businesses" />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
          AI and small businesses
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Running a small business has always meant doing everything yourself — accounts, marketing, stock control, and customer service. AI tools are starting to take some of that weight off. This lesson looks at what is actually useful, what the risks are, and what it means for the high street.
        </p>
        <div className="flex flex-wrap gap-2">
          <ShareButton lessonTitle={LESSON_TITLE} />
          <ReviewLaterButton lessonId="ai-and-small-businesses" />
        </div>
      </div>

      <KeyTakeaways points={KEY_TAKEAWAYS} />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">AI bookkeeping — the admin that runs itself</h2>
        <p className="text-gray-700 dark:text-gray-300">
          For many small business owners, bookkeeping is the job they dread. Logging receipts, categorising expenses, chasing invoices — it eats evenings and weekends. AI-powered tools like Xero, FreeAgent, and QuickBooks now do most of this automatically.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          When you connect the software to your business bank account, it reads each transaction and suggests a category: fuel, stock, utilities, marketing. Over time it learns your spending patterns. It can also generate and send invoices, send automatic payment reminders to customers who are overdue, and flag spending that looks unusual.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          For a sole trader or a business with a handful of employees, this can save several hours every week. But it is important to understand what AI bookkeeping tools do not do: they do not give regulated financial advice, they cannot replace a qualified accountant for your year-end accounts or tax return, and they make mistakes that you still need to check.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Customer chatbots — 24-hour service without hiring staff</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Not long ago, an automated customer service chatbot was something only large retailers could afford. Now tools like Tidio, Freshchat, and WhatsApp Business automation put this within reach of a sole trader.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          You set up answers to the questions customers ask most often — opening hours, prices, delivery times, return policies — and the chatbot handles those automatically, at any hour. When a question is too complex, it either collects the customer's details so you can follow up, or passes the conversation to you directly.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          The limitation is that these tools are only as good as the answers you programme into them. A chatbot that gives outdated opening hours or wrong prices because the owner has not updated it in six months will frustrate customers more than no chatbot at all.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Inventory AI — knowing what you need before you run out</h2>
        <p className="text-gray-700 dark:text-gray-300">
          For shops and cafes, getting stock levels right is a constant juggle. Too little and you disappoint customers; too much and you have waste, tied-up cash, or outdated stock.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          AI inventory tools analyse your sales history and then factor in variables like the time of year, local events, and even the weather forecast to predict what you will need next week. A cafe might learn from the AI that it sells three times as many hot drinks during school half-term, or that a music festival in the park increases footfall on Friday afternoons.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Some tools go further and automatically create purchase orders when stock falls below a set threshold. The business owner still approves the order — the AI is making a recommendation, not an autonomous decision — but the time spent guessing is dramatically reduced.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">AI marketing — competing online without a marketing team</h2>
        <p className="text-gray-700 dark:text-gray-300">
          A generation ago, a small independent shop competed on location and word of mouth. Now it also needs Instagram posts, Google Business listings, email newsletters, and product descriptions for an online shop. AI writing tools like ChatGPT, Claude, and Canva's AI features can generate product descriptions, social media captions, and promotional emails from a photograph or a few bullet points.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          The golden rule is: always check the output. AI writing tools can produce confident, fluent text that contains factual errors — a wrong price, a feature the product does not have, or a claim that is simply made up. Publishing unchecked AI content about your own business is a real reputational risk.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Used carefully — as a starting point rather than a finished product — AI marketing tools can save a small business owner hours each week.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The high street question</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Small businesses on the high street are already under pressure from online giants that have been using sophisticated AI for years. The AI tools now available to small businesses are genuinely useful — but they close only a fraction of that gap.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          What AI cannot replicate — at least not yet — is the reason many people choose an independent business in the first place: a human relationship, a sense of trust, and the knowledge that the person serving you cares about whether you come back.
        </p>
      </section>

      <LessonNote lessonId="ai-and-small-businesses" />

      <Quiz questions={QUIZ_QUESTIONS} lessonId="ai-and-small-businesses" />

      <LessonRating lessonId="ai-and-small-businesses" />
      <LessonFeedback lessonId="ai-and-small-businesses" />
      <RelatedLessons currentId="ai-and-small-businesses" />
      <NextLesson currentId="ai-and-small-businesses" />
    </main>
  )
}
