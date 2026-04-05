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

const LESSON_TITLE = 'AI and small businesses'

const KEY_TAKEAWAYS = [
  'AI bookkeeping tools like Xero and QuickBooks automatically categorise transactions, reconcile bank accounts, and prepare VAT returns — saving small business owners hours every month and reducing the chance of costly errors.',
  'Customer chatbots handle common enquiries around the clock, allowing small businesses to offer the same 24/7 service as large companies without hiring extra staff.',
  'AI inventory management predicts what stock will sell, automatically generates reorder alerts, and reduces the cost of holding too much or too little stock.',
  'Social media AI tools help small businesses write posts, suggest posting times, and analyse which content gets the most engagement.',
  'The high street debate: AI is helping some independents compete, but raises concerns about whether smaller businesses can access the same tools as large chains.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How do AI bookkeeping tools like Xero and QuickBooks help small businesses?',
    options: [
      'They replace accountants entirely and file company tax returns directly with HMRC on the business owner\'s behalf',
      'They automatically categorise transactions, reconcile bank accounts, flag unusual spending, and help prepare VAT returns',
      'They analyse competitor pricing and automatically adjust the business\'s prices to stay competitive in real time',
      'They manage employee payroll and automatically calculate National Insurance and pension contributions',
    ],
    correctIndex: 1,
    explanation:
      'AI bookkeeping tools like Xero, QuickBooks, and FreeAgent connect directly to your business bank account and automatically match transactions to the correct categories — rent, stock, travel, advertising. The AI learns your patterns over time. Bank reconciliation happens automatically. VAT returns can be submitted directly to HMRC. HMRC\'s Making Tax Digital programme is pushing all VAT-registered businesses to use compatible software — AI bookkeeping tools are built to comply with this requirement.',
    hint: 'Think about what takes the most time in managing business finances.',
  },
  {
    question: 'What is the main advantage of a customer chatbot for a small business?',
    options: [
      'It replaces the need for any human customer service staff, completely eliminating that cost from the business',
      'It allows the business to handle common customer questions at any time of day or night without needing staff to be available',
      'It automatically upgrades customers to premium products by offering personalised discounts during the chat',
      'It connects the business to a network of other local businesses and refers customers between them automatically',
    ],
    correctIndex: 1,
    explanation:
      'A small independent shop cannot afford to have someone answering enquiries at midnight. A chatbot can handle the most common questions — opening hours, delivery areas, returns policy — instantly, 24/7, only passing genuinely complex queries to a human. Modern AI chatbots learn from past conversations and get better at answering unusual questions over time.',
    hint: 'Think about what small businesses struggle to do that big companies find easy.',
  },
  {
    question: 'How does AI help small retailers manage their stock levels?',
    options: [
      'It physically counts items on shelves using robots and reorders automatically from the supplier when stock drops below a threshold',
      'It analyses past sales data, seasonal trends, and sometimes external factors to predict what will sell and when to reorder',
      'It scans competitor websites and automatically matches their prices to ensure the business always offers the lowest price',
      'It manages deliveries from suppliers by coordinating with courier companies and booking the cheapest delivery slots',
    ],
    correctIndex: 1,
    explanation:
      'Cash flow is one of the biggest challenges for small retailers. Having too much stock ties up money and risks products going out of date. Too little stock means turning away customers. AI inventory tools like Brightpearl or Vend analyse historical sales data — accounting for seasonal patterns, day-of-week effects, and special events — to predict what you will need and when. They generate automatic reorder alerts or even place supplier orders directly.',
    hint: 'Think about the two opposite problems with having the wrong amount of stock.',
  },
  {
    question: 'What do AI social media tools help small businesses do?',
    options: [
      'They automatically follow and unfollow accounts to grow the business\'s social media presence through reciprocal following strategies',
      'They help create content, suggest the best times to post, and analyse which posts perform best — making it easier to compete online',
      'They pay for targeted advertising automatically using the business\'s marketing budget and track which ads lead directly to sales',
      'They monitor what competitors post and automatically create reply posts that redirect their customers to the small business instead',
    ],
    correctIndex: 1,
    explanation:
      'Tools like Buffer, Hootsuite, and Canva\'s AI features help small business owners plan and create social media content without needing design skills or a marketing background. AI can suggest captions, resize images for different platforms, recommend hashtags, and tell you that your audience is most active on Wednesday evenings. It also shows which posts got the most engagement so you can create more of what works.',
    hint: 'Think about what a big company\'s marketing team does that a one-person business cannot.',
  },
  {
    question: 'What concern is raised about AI on the high street?',
    options: [
      'AI is making products more expensive because it requires expensive hardware that shops pass on to customers',
      'AI may help large chains become more efficient while smaller independents who cannot afford the same tools fall further behind',
      'AI is causing product shortages because AI-managed supply chains prioritise online deliveries over physical shops',
      'AI chatbots are making customers less loyal because they receive the same automated responses from every shop',
    ],
    correctIndex: 1,
    explanation:
      'The concern is often described as a two-speed high street. Large retailers like Tesco, Marks and Spencer, and Next have dedicated teams implementing sophisticated AI. They can afford the development costs and have the data volumes to make AI work well. An independent shop may struggle to access the same tools or lack the time and skills to set them up. UK organisations like the Federation of Small Businesses have called for more support to help small businesses adopt AI responsibly.',
    hint: 'Think about which businesses can most easily afford and implement AI tools.',
  },
]

export function AIAndSmallBusinesses() {
  useMarkVisited('ai-and-small-businesses')

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F6CD;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and small businesses
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            From AI bookkeeping to customer chatbots and stock management — how AI is helping independent
            shops and small businesses compete, and the questions it raises for the high street.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-small-businesses" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The independent business challenge</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Running a small business in the UK has always meant doing a lot with very little. Most small business owners handle sales, admin, social media, customer service, stock management, and accounts — often all in one day. AI is beginning to take some of that burden away.
          </p>
          <div className="space-y-2">
            {[
              'There are 5.5 million small businesses in the UK, accounting for 99% of all businesses and employing 16 million people',
              'The average small business owner spends over 5 hours a week on administrative tasks like bookkeeping, invoicing, and chasing payments',
              'One in three UK small businesses say they cannot afford to hire specialist staff for marketing, IT, or customer service',
              "HMRC's Making Tax Digital programme is requiring all businesses to use compatible software — pushing AI adoption whether owners want it or not",
              'Independent retailers on the high street are under pressure from large chains and online shopping — AI offers tools that were previously only available to big companies',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI bookkeeping — the end of the shoebox of receipts</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            For many small business owners, bookkeeping means a pile of receipts, a spreadsheet, and a quarterly panic before the accountant visit. AI bookkeeping tools are changing this completely.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CA;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Xero and QuickBooks</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">These cloud-based tools connect to your business bank account and automatically pull in every transaction. The AI categorises each one — rent, stock purchases, utilities, advertising — learning from how you categorise things manually the first time. Bank reconciliation happens automatically. VAT returns can be submitted directly to HMRC from inside the software.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F8;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Receipt scanning</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Apps like Dext let you photograph a paper receipt on your phone. The AI reads the amount, date, supplier name, and VAT, and automatically creates the bookkeeping entry. No more storing paper receipts, no more data entry.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F3DB;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Making Tax Digital</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">HMRC is requiring all VAT-registered businesses to keep digital records and submit VAT returns using compatible software. From April 2026, this extends to income tax for self-employed people earning over £50,000. AI bookkeeping tools are all built to comply with these requirements.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI inventory management — the right stock at the right time</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Running out of your best-selling product loses sales. Buying too much of something that does not sell wastes cash. AI makes it much easier to get the balance right.
          </p>
          <div className="space-y-2">
            {[
              'Brightpearl and Vend are popular inventory management tools used by independent UK retailers',
              'AI analyses past sales data and identifies patterns: which products sell best on which days, how seasons affect demand, how a local event changes buying behaviour',
              'The system tells you when to reorder each product and how much to order — before you run out — and can connect directly to suppliers to raise purchase orders automatically',
              'For food businesses, AI can track products approaching their use-by date and suggest promotions to sell them before they are wasted',
              'Tight cash flow is the biggest threat to small businesses — AI stock management means less cash tied up in slow-moving products',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-pink-100 dark:border-pink-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The high street debate — levelling up or falling further behind?</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI could help independent businesses compete with large chains, but there are real concerns that it may widen the gap rather than narrow it.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F44D;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">The optimistic view</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Affordable cloud-based AI tools mean that a sole trader today has access to bookkeeping, marketing, and customer service capabilities that even large companies did not have 20 years ago. The Federation of Small Businesses has found that small businesses adopting digital tools grow faster and are more resilient.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x26A0;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">The concern</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">Large retailers are deploying AI at a scale and sophistication that small independents simply cannot match. The risk is a two-speed high street where independents fall further behind despite their best efforts. UK organisations like the Federation of Small Businesses have called for more government support to help small businesses adopt AI responsibly.</p>
              </div>
            </div>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-small-businesses" />
        <LessonNote lessonId="ai-and-small-businesses" />

        <Quiz questions={quizQuestions} lessonId="ai-and-small-businesses" />

        <LessonRating lessonId="ai-and-small-businesses" />
        <LessonFeedback lessonId="ai-and-small-businesses" />

        <RelatedLessons currentId="ai-and-small-businesses" />

        <NextLesson currentId="ai-and-small-businesses" />
      </div>
    </div>
  )
}
