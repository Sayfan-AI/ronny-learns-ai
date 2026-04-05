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

const quizQuestions: QuizQuestion[] = [
  {
    question: "What does HMRC's Making Tax Digital programme require small businesses to do?",
    options: [
      'Submit all tax returns using paper forms rather than online systems',
      'Keep digital records and submit VAT returns using compatible software, with income tax self-assessment to follow',
      'Use a government-approved AI accountant for all financial decisions',
      'Pay all business taxes through a new mobile app available only in England',
    ],
    correctIndex: 1,
    explanation:
      "Making Tax Digital (MTD) is HMRC's programme to move tax administration online. Businesses above the VAT threshold must already keep digital records and submit VAT returns using compatible software. MTD for income tax self-assessment is being phased in, meaning sole traders and landlords will need to submit quarterly updates digitally. AI bookkeeping tools like Xero and QuickBooks are designed to integrate directly with MTD requirements, automatically categorising transactions and preparing VAT returns.",
    hint: 'Think about digital record-keeping and VAT returns.',
  },
  {
    question: 'How does an AI inventory management system help a small business avoid running out of stock?',
    options: [
      "It automatically orders stock from any supplier worldwide without the owner's knowledge or approval",
      'It analyses historical sales patterns, seasonal trends, and current stock levels to predict when items will run out and flag reorder points before a stockout occurs',
      'It physically counts stock on shelves every night using a robot and emails the results each morning',
      'It contacts customers directly to warn them when a product might be unavailable in future',
    ],
    correctIndex: 1,
    explanation:
      'AI inventory tools analyse past sales data to identify patterns. The AI uses these patterns plus current stock levels to predict when each item will run out and suggests reorder points. Some systems integrate directly with suppliers to flag when it is time to order, though the business owner typically authorises the actual purchase. This helps small businesses avoid both stockouts and overordering.',
    hint: 'Think about predicting future demand based on past sales patterns.',
  },
  {
    question: 'What is a key advantage AI social media scheduling tools offer small business owners?',
    options: [
      'They guarantee that every post will go viral and reach at least one million people',
      'They suggest optimal posting times based on when the business audience is most active, and can auto-generate captions to save time',
      'They replace the need for the business to have any social media presence at all',
      'They permanently delete negative comments and reviews without anyone noticing',
    ],
    correctIndex: 1,
    explanation:
      "Tools like Buffer AI and Hootsuite analyse a business's follower data to identify when their specific audience is most active online. They suggest the best times to post for maximum reach. They can also draft caption suggestions based on the content of an image or a brief description. For a small business owner wearing many hats, this can save hours each week while maintaining a consistent social media presence.",
    hint: 'The key benefit is saving time and finding the best moment to reach your audience.',
  },
  {
    question: 'What is an important data privacy consideration when a small business uses an AI chatbot on its website?',
    options: [
      'The chatbot must be switched off every night to prevent it from collecting data while the business is closed',
      'Conversations with the chatbot may contain personal data from customers, which must be handled in line with UK GDPR including having a privacy policy that explains how the data is used and stored',
      'All chatbot conversations must be read by a human employee before the AI is allowed to respond',
      'Small businesses are exempt from GDPR if their annual revenue is below 100,000 pounds',
    ],
    correctIndex: 1,
    explanation:
      "When customers chat with a business chatbot, they often share personal information. Under UK GDPR, this data must be processed lawfully and transparently. The business needs a privacy policy explaining what is collected, how it is used, and how long it is kept. If the chatbot is provided by a third party, the business must check that provider's data processing terms too. The ICO (Information Commissioner's Office) provides free guidance for small businesses on UK GDPR compliance.",
    hint: 'Customer chat data is personal data. Think about what UK GDPR requires.',
  },
  {
    question: 'How are AI tools changing the competitive landscape between small businesses and large chains on the UK high street?',
    options: [
      'AI tools are so expensive that only large chains can afford them, making it impossible for small businesses to compete',
      'AI tools like AI bookkeeping, chatbots, and scheduling software are increasingly affordable, giving small businesses capabilities that previously required large teams, though large chains also benefit from AI at scale',
      'The UK government has banned large chains from using AI tools to give small businesses a fair advantage',
      'AI has no effect on the high street because customers always prefer to deal with humans',
    ],
    correctIndex: 1,
    explanation:
      'The cost of AI-powered business tools has fallen dramatically. Xero starts at around 15 pounds per month, basic chatbot tools are free or low-cost, and AI scheduling tools have free tiers. This means a sole trader or small shop can now automate tasks that previously required an accounts department or marketing agency. However, large chains also invest heavily in AI at a scale small businesses cannot match. The greatest levelling effect comes from AI handling administrative burden, freeing owners to focus on the personal service and community relationships that chains cannot replicate.',
    hint: 'Think about both the affordability of AI tools AND what large chains are doing.',
  },
]

export function AIAndSmallBusinesses() {
  useMarkVisited('ai-and-small-businesses')

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F6CD;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and small businesses
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Automated bookkeeping, AI chatbots, smart stock management, and social media tools &mdash;
            how AI is changing life on the UK high street and what it means for small business owners.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-small-businesses" />
          <ShareButton lessonTitle="AI and small businesses" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI bookkeeping &mdash; your virtual accountant</h2>
          <p className="text-gray-600 leading-relaxed">
            One of the biggest time drains for any small business owner is financial admin &mdash;
            sorting receipts, categorising expenses, and preparing VAT returns. AI bookkeeping tools
            are designed to do most of this automatically.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CA;',
                label: 'Automatic transaction categorisation',
                text: "Tools like Xero AI and QuickBooks analyse every bank transaction and automatically assign it to the correct category. The AI learns from any corrections you make, improving over time. For most small businesses, 80 to 90 percent of transactions are categorised correctly without any manual input.",
              },
              {
                icon: '&#x1F9FE;',
                label: 'Receipt scanning',
                text: "Point your phone camera at a receipt and the app uses AI to extract the supplier name, date, amount, and VAT automatically. The receipt image is stored digitally, satisfying HMRC's Making Tax Digital requirements.",
              },
              {
                icon: '&#x1F4B0;',
                label: 'VAT return preparation',
                text: "AI bookkeeping tools integrate with HMRC's Making Tax Digital gateway. Once transactions are categorised, the software calculates your VAT return and submits it directly to HMRC. What used to take an afternoon can now happen in minutes.",
              },
              {
                icon: '&#x26A0;&#xFE0F;',
                label: 'Anomaly detection',
                text: 'The AI monitors your accounts for unusual patterns such as a supplier charging twice, an unexpected direct debit, or cash flow heading in a worrying direction. It flags these for your attention before they become serious problems.',
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
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI customer service chatbots</h2>
          <p className="text-gray-600 leading-relaxed">
            Customers expect quick answers &mdash; even at 11pm on a Sunday. AI chatbots let small businesses
            provide instant responses without hiring staff to work evenings and weekends.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '&#x1F4AC;', title: 'Website chat widgets', text: "A chatbot on your website can answer common questions about opening times, delivery info, returns policy, and product availability, instantly, any time of day. Tools like Tidio and Intercom have free or low-cost tiers suitable for small businesses, with no coding required." },
              { icon: '&#x1F4F1;', title: 'WhatsApp Business bots', text: "WhatsApp Business lets you set up automated replies and a basic catalogue. More advanced setups use AI to handle multi-turn conversations about specific products, quotes, or order tracking, without you being at your phone." },
              { icon: '&#x1F91D;', title: 'When to use a human', text: "Good AI chatbots know their limits. They handle routine questions automatically and seamlessly pass complex or sensitive queries to you or your team. The AI handles high-volume simple questions; you focus on customers who need a real conversation." },
              { icon: '&#x1F4CB;', title: 'GDPR considerations', text: "Chatbot conversations contain personal data. You need a privacy policy explaining what is collected, a way for customers to request data deletion, and a data processing agreement with your chatbot provider. The ICO website has free guidance for small businesses." },
            ].map(({ icon, title, text }) => (
              <div key={title} className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl" dangerouslySetInnerHTML={{ __html: icon }} />
                  <p className="font-semibold text-gray-800 text-sm">{title}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Inventory management and demand forecasting</h2>
          <p className="text-gray-600 leading-relaxed">
            Running out of your best-selling product loses you sales and frustrates customers.
            Ordering too much ties up cash and leads to waste. AI inventory tools help you find the balance.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4E6;',
                label: 'Demand forecasting',
                text: 'AI analyses your historical sales data alongside seasonal patterns, local events, and even weather forecasts to predict how much of each product you will need and when. A florist might be warned weeks in advance to order extra stock for Mothering Sunday; a cafe flagged that school holidays will double footfall.',
              },
              {
                icon: '&#x1F514;',
                label: 'Automatic reorder alerts',
                text: 'Rather than manually checking stock levels, AI tools monitor inventory in real time and alert you when stock drops below the reorder point. Some can generate the purchase order automatically for you to approve with one click.',
              },
              {
                icon: '&#x1F4C9;',
                label: 'Slow-moving product alerts',
                text: "The AI spots products that are not selling as expected and flags them before they tie up shelf space and cash. It can suggest whether to run a promotion, reduce the reorder quantity, or discontinue the line.",
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
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI social media scheduling</h2>
          <p className="text-gray-600 leading-relaxed">
            Posting consistently on social media is essential for visibility &mdash; but also time-consuming.
            AI scheduling tools help small businesses maintain a regular presence without spending hours each week on their phone.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x23F0;',
                label: 'Optimal posting times',
                text: 'Tools like Buffer AI and Hootsuite analyse your follower activity to identify when your specific audience is most active. Posting at 7am might work brilliantly for a gym; 8pm might be better for a restaurant. The AI learns what works for your audience and your content type.',
              },
              {
                icon: '&#x270F;&#xFE0F;',
                label: 'AI caption generation',
                text: 'Describe the photo or topic briefly and the AI drafts caption options for you to choose from and edit. It can match your brand voice. This is not about replacing your personality; it is about having a starting point when the blank page is daunting.',
              },
              {
                icon: '&#x1F4C5;',
                label: 'Content calendar management',
                text: 'Schedule a week or month of posts in one sitting. The AI can suggest content ideas based on your industry, including local events, product features, seasonal promotions, and behind-the-scenes content, and flag gaps in your schedule before they happen.',
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
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI and the UK high street &mdash; levelling the playing field?</h2>
          <p className="text-gray-600 leading-relaxed">
            The UK has around 5.5 million small businesses, many of them independent shops, cafes,
            tradespeople, and service businesses. AI tools are changing what is possible for a one-person operation.
          </p>
          <div className="bg-amber-50 rounded-xl p-4 space-y-2 mb-3">
            <p className="font-semibold text-amber-800 text-sm">Where AI levels the playing field</p>
            <ul className="text-amber-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>Automated bookkeeping gives sole traders professional financial admin without hiring an accounts team</li>
              <li>AI chatbots provide 24/7 customer service that was previously only affordable for large companies</li>
              <li>Demand forecasting tools previously cost thousands of pounds and are now available for around 20 pounds per month</li>
              <li>AI marketing tools help small businesses compete on social media without a marketing department</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-blue-800 text-sm">The honest picture</p>
            <ul className="text-blue-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>Large chains also invest heavily in AI at a scale no small business can match</li>
              <li>AI tools require time to set up, learn, and maintain, which is a real cost for busy owners</li>
              <li>The biggest advantage small businesses have is personal relationships and community trust, which AI cannot replicate</li>
              <li>The best strategy is to use AI to handle admin and routine tasks, freeing your time for the human connections that keep customers coming back</li>
            </ul>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-small-businesses" />
        <LessonNote lessonId="ai-and-small-businesses" />

        <Quiz questions={quizQuestions} lessonId="ai-and-small-businesses" lessonTitle="AI and small businesses" />

        <LessonFeedback lessonId="ai-and-small-businesses" />
        <LessonRating lessonId="ai-and-small-businesses" />
        <RelatedLessons currentId="ai-and-small-businesses" />
        <NextLesson currentId="ai-and-small-businesses" />
      </div>
    </div>
  )
}
