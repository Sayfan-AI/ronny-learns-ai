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
import { DifficultyBadge } from '../components/DifficultyBadge'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is "collaborative filtering" in the context of product recommendations?',
    options: [
      'When staff in a store collaborate to recommend products to a customer face-to-face',
      'A technique where the AI recommends products based on what similar customers liked — "people who bought X also bought Y"',
      'When multiple AI systems work together to filter out spam and fake reviews',
      'A method of filtering products by price, colour, and size using dropdown menus',
    ],
    correctIndex: 1,
    explanation:
      'Collaborative filtering looks for patterns across millions of customers. If customers who bought a particular book also tended to buy a particular brand of coffee, the system will recommend that coffee to new customers who buy the same book — even though there is no obvious connection. Amazon credits its recommendation engine with around 35% of all purchases.',
    hint: 'Think about what "collaborative" means — it involves many people\'s behaviour, not just yours.',
  },
  {
    question: 'How does dynamic pricing work in retail?',
    options: [
      'Prices are set once a year and then remain fixed until the next annual review',
      'Shop assistants manually change price labels throughout the day based on how busy the store is',
      'AI algorithms adjust prices in real time based on demand, competitor prices, stock levels, and other signals',
      'Prices only change when a customer complains — the AI monitors reviews and lowers prices accordingly',
    ],
    correctIndex: 2,
    explanation:
      'Dynamic pricing uses AI to change prices automatically — sometimes every few minutes. An airline seat might cost £80 on a quiet Tuesday and £400 on the same route the following Friday. Amazon reportedly changes product prices millions of times per day. The AI weighs up supply, demand, time remaining, and competitor prices to maximise revenue.',
    hint: 'The key word is "dynamic" — prices move in response to changing conditions.',
  },
  {
    question: 'What makes Amazon Go stores different from a traditional supermarket?',
    options: [
      'Customers scan products themselves using a mobile app rather than waiting at a staffed till',
      'Computer vision cameras and sensors track what customers pick up, so they can simply walk out and be charged automatically — no checkout needed',
      'Robots fetch items from shelves and bring them to customers at a central collection point',
      'The store operates entirely by subscription — customers pay a monthly fee for unlimited shopping',
    ],
    correctIndex: 1,
    explanation:
      'Amazon Go stores use hundreds of ceiling-mounted cameras combined with weight sensors on shelves. Computer vision AI tracks each customer from entry to exit, identifies which items they pick up or put back, and charges their account automatically when they leave. The technology took years to develop and is expensive to deploy.',
    hint: 'The clue is in the name — you just "go".',
  },
  {
    question: 'How does AI help with supply chain management in retail?',
    options: [
      'AI replaces all warehouse workers with robots who can sort and pack orders faster',
      'AI predicts how much of each product will be needed, optimises delivery routes, and detects disruptions early — reducing waste and stockouts',
      'AI negotiates prices directly with suppliers without any human involvement',
      'AI monitors social media to find out which products are trending and orders more of those automatically',
    ],
    correctIndex: 1,
    explanation:
      'AI supply chain tools forecast demand using historical sales, weather forecasts, local events, and trends. They optimise delivery routes to reduce fuel use and delivery time. They monitor for disruptions — a factory closure, a port strike — and suggest alternatives before shelves run empty. Walmart uses AI to manage inventory across thousands of stores.',
    hint: 'Supply chains involve getting products to the right place at the right time — AI helps predict and plan for that.',
  },
  {
    question: 'Which of the following is a genuine concern about AI in retail?',
    options: [
      'AI recommendations are so accurate that customers always buy exactly what they need and never make impulse purchases',
      'Dynamic pricing can disadvantage customers who cannot easily compare prices, and surge pricing may feel exploitative',
      'AI has made retail so efficient that no shops ever run out of stock any more',
      'Because AI handles all pricing decisions, retailers are no longer allowed to offer discounts or sales',
    ],
    correctIndex: 1,
    explanation:
      'Dynamic pricing raises real fairness concerns. Older customers, people without smartphones, and those in areas with less competition may consistently pay more. Some researchers have found that surge pricing during high-demand events can feel exploitative. There are also concerns about personalised pricing based on what an individual customer can afford.',
    hint: 'Think about who might be disadvantaged when prices change constantly and not everyone can easily check alternatives.',
  },
]

export function AIAndRetail() {
  useMarkVisited('ai-and-retail')

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F6CD;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and retail
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How recommendation engines nudge your purchases, why prices change by the minute,
            and what cashierless stores reveal about the future of shopping.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <DifficultyBadge level="Beginner" />
          </div>
          <CompletedBadge lessonId="ai-and-retail" />
          <ShareButton lessonTitle="AI and retail" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Recommendation engines: how AI decides what to show you</h2>
          <p className="text-gray-600 leading-relaxed">
            Every time you browse Amazon, Netflix, or Spotify, an AI is working behind the scenes
            to predict what you want next. These systems are called recommendation engines, and they
            are one of the most commercially powerful applications of AI ever built.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-blue-800 text-sm">How collaborative filtering works</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              The most common approach is called collaborative filtering. The system does not need
              to know anything about a product&rsquo;s contents or qualities. Instead, it looks for
              patterns across millions of customers: &ldquo;people who bought X also bought Y.&rdquo;
              If thousands of customers who bought a particular cookbook also bought a particular
              set of kitchen knives, the system will recommend those knives to anyone who buys
              the same cookbook &mdash; even if you have never searched for knives.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            Amazon has said its recommendation engine accounts for around 35% of all its sales.
            Netflix has estimated that personalised recommendations save it over $1 billion per year
            in customer retention. These numbers explain why every major retailer invests heavily
            in the technology.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F6D2;',
                label: 'Content-based filtering',
                text: 'Recommendations based on the features of items you have liked before — if you bought three science fiction novels, the system recommends more science fiction. This works well for niche tastes but can create a "filter bubble" where you only ever see more of the same.',
              },
              {
                icon: '&#x1F9E0;',
                label: 'Hybrid models',
                text: 'Modern systems combine both approaches. Spotify\'s recommendation engine uses collaborative filtering (what similar listeners enjoy), audio analysis (the actual sound of the music), and natural language processing (what music journalists write about tracks).',
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

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Dynamic pricing: why prices change by the minute</h2>
          <p className="text-gray-600 leading-relaxed">
            When you book a flight, the price you see depends on when you search, how many seats
            remain, what competitors are charging, and dozens of other signals. This is dynamic pricing
            &mdash; and AI makes it possible at a speed and scale no human team could match.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '&#x2708;&#xFE0F;', title: 'Airlines', text: 'Ticket prices can change hundreds of times per day. Algorithms balance filling every seat against maximising yield (charging as much as possible for the last few seats).' },
              { icon: '&#x1F4E6;', title: 'Amazon', text: 'Amazon reportedly changes millions of prices every day. Third-party sellers\' AI systems also adjust prices automatically, sometimes creating bizarre spirals when two algorithms undercut each other.' },
              { icon: '&#x1F3E8;', title: 'Hotels', text: 'Room prices can quadruple during a local event. Yield management AI has been used in hospitality for decades and is now spreading to every part of retail.' },
              { icon: '&#x1F6D2;', title: 'Supermarkets', text: 'Digital shelf labels in some supermarkets can be updated remotely, enabling dynamic pricing in physical stores for the first time — though this remains controversial.' },
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
          <div className="bg-amber-50 rounded-xl p-4 mt-2">
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>The fairness question: </strong>
              Dynamic pricing benefits customers who know how to play the system &mdash; searching
              at the right time, comparing across sites. But customers who cannot easily compare
              prices may consistently pay more. Some researchers argue this is a form of price
              discrimination.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Cashierless stores: just walk out</h2>
          <p className="text-gray-600 leading-relaxed">
            In 2018, Amazon opened its first Amazon Go store in Seattle. Customers scan a QR code
            to enter, pick up what they want, and walk out &mdash; no checkout, no waiting, no
            queuing. The bill is automatically charged to their Amazon account.
          </p>
          <div className="bg-slate-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-gray-800 text-sm">How it works</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Hundreds of cameras mounted on the ceiling track every customer from entry to exit.
              Weight sensors on shelves detect when an item is picked up or replaced. Computer vision
              AI &mdash; the same family of technology that powers facial recognition and autonomous
              vehicles &mdash; identifies which customer picked up which item. The virtual cart
              updates in real time and the account is charged when the customer leaves.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            The technology works but is extraordinarily expensive to install and maintain.
            Amazon has scaled back its Go ambitions after the initial excitement. Other retailers
            including Tesco (with its GetGo stores) have trialled similar systems with mixed results.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI in supply chains: predicting what will sell</h2>
          <p className="text-gray-600 leading-relaxed">
            Behind every product on a shelf is a complex chain of suppliers, warehouses, lorries,
            and distribution centres. AI is increasingly managing much of this complexity.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CA;',
                label: 'Demand forecasting',
                text: 'AI analyses years of sales data combined with external signals — weather forecasts, local events, school holidays, social media trends — to predict how much of each product will be needed, at each store, on each day. Accurate forecasting reduces both waste (ordering too much) and stockouts (ordering too little).',
              },
              {
                icon: '&#x1F69A;',
                label: 'Route optimisation',
                text: 'Logistics AI plans delivery routes in real time, accounting for traffic, road closures, and driver rest requirements. DHL and UPS have both reported significant savings from AI-optimised routing.',
              },
              {
                icon: '&#x26A0;&#xFE0F;',
                label: 'Disruption detection',
                text: 'AI monitors news, weather, and logistics data globally to spot potential disruptions — a factory closure, a port strike, a flood — and suggests alternative suppliers or routes before shelves run empty.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Jobs in retail: what is changing</h2>
          <p className="text-gray-600 leading-relaxed">
            Retail employs millions of people in the UK alone &mdash; in shops, warehouses, delivery,
            and customer service. AI and automation are changing many of these roles.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F916;',
                label: 'Warehouse automation',
                text: "Amazon's fulfilment centres use thousands of robots to move shelving units to human pickers. The robots handle the physical movement; humans handle the picking. Amazon employs more people than before its robots arrived — but the nature of the work has changed significantly.",
              },
              {
                icon: '&#x1F4AC;',
                label: 'Customer service chatbots',
                text: "AI chatbots now handle a large proportion of retail customer enquiries — tracking orders, processing returns, answering FAQs. This reduces the need for large customer service teams but also frustrates customers when queries fall outside the bot's capabilities.",
              },
              {
                icon: '&#x1F4A1;',
                label: 'New roles',
                text: 'AI creates new jobs too: data analysts, AI trainers, machine learning engineers, and specialists who audit algorithms for bias. These roles tend to be higher-skilled and better-paid — but the transition is not automatic or painless for displaced workers.',
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

        <ReviewLaterButton lessonId="ai-and-retail" />
        <LessonNote lessonId="ai-and-retail" />

        <Quiz questions={quizQuestions} lessonId="ai-and-retail" lessonTitle="AI and retail" />

        <LessonFeedback lessonId="ai-and-retail" />
        <LessonRating lessonId="ai-and-retail" />
        <RelatedLessons currentId="ai-and-retail" />
        <NextLesson currentId="ai-and-retail" />
      </div>
    </div>
  )
}
