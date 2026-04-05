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

const LESSON_TITLE = 'AI and shopping'

const KEY_TAKEAWAYS = [
  "Recommendation engines on Amazon, ASOS, and other retailers use AI to analyse your browsing history, past purchases, and what similar customers bought — creating a personalised shop for you that no two customers see the same way.",
  "Virtual try-on technology uses AI and augmented reality to show you how clothes, glasses, or make-up will look on your own face or body before you buy — reducing returns and helping you shop with more confidence.",
  "Dynamic pricing means prices can change by the hour based on demand, how many items are left, your location, and even how you found the product — airlines and hotels have done this for years and online retail is catching up.",
  "Cashierless stores like Amazon Fresh use computer vision AI to track what you pick up and put back, charging your account automatically when you leave — no tills, no queues.",
  "AI is now used to detect fake reviews on Amazon, Trustpilot, and Google — looking for patterns like reviews from new accounts, suspiciously similar language, and reviews posted in batches.",
]

const quizQuestions: QuizQuestion[] = [
  {
    question: "How does a recommendation engine like Amazon's decide what products to suggest to you?",
    options: [
      "It randomly selects products from your browsing category and rotates them to keep the suggestions fresh and varied",
      "It analyses your browsing history, past purchases, products you viewed but did not buy, and the behaviour of other customers with similar profiles — then predicts what you are most likely to want next",
      "It only shows you products that have paid for advertising placement in the recommendation slot — there is no personalisation involved",
      "It surveys you each month about your preferences and manually updates your profile based on your answers",
    ],
    correctIndex: 1,
    explanation:
      "Amazon's recommendation engine accounts for an estimated 35% of Amazon's total revenue. It uses collaborative filtering — finding customers whose behaviour resembles yours and showing you what they bought next — combined with your personal history. It tracks not just what you bought but what you looked at for a long time, what you added to your basket and then removed, and what you searched for. Every click teaches it more about what you want.",
    hint: "Think about what data the AI could collect from every interaction you have with the site.",
  },
  {
    question: "What does virtual try-on technology do when you are shopping for clothes or glasses online?",
    options: [
      "It posts you a free sample of the product so you can try it at home before deciding whether to pay",
      "It uses AI and augmented reality to show you a realistic image of how the product would look on your own face or body, using your phone camera",
      "It creates a computer-generated model with your exact measurements by asking you to input your height, weight, and build",
      "It connects you via video call to a personal stylist who holds up items in front of a camera for you to see",
    ],
    correctIndex: 1,
    explanation:
      "Virtual try-on uses augmented reality and computer vision to overlay products onto a live image of you. For glasses, ASOS and Specsavers use face-mapping AI to show exactly how frames would look on your face shape in real time. For make-up, apps like L'Oreal's try-on tool let you test lipstick colours live on your face. The technology significantly reduces return rates because customers buy more confidently when they can see how something will look.",
    hint: "Think about what problem it solves for online shopping that physical shops do not have.",
  },
  {
    question: "What is dynamic pricing and how does AI enable it?",
    options: [
      "Dynamic pricing is when a shop changes its prices seasonally — for example, putting prices up at Christmas and down in January — and AI automates the schedule",
      "Dynamic pricing means prices change in real time based on demand, stock levels, competitor prices, and sometimes individual customer data — AI monitors all these factors simultaneously and adjusts prices automatically",
      "Dynamic pricing is a loyalty scheme where the more you shop, the lower your personal price becomes — AI tracks your spending and applies the discount automatically",
      "Dynamic pricing is when a product's price is set by public auction and the highest bidder wins — AI manages the bidding process and notifies winners instantly",
    ],
    correctIndex: 1,
    explanation:
      "Airlines invented dynamic pricing decades ago — that is why the same seat on the same flight can cost very different amounts depending on when you book, how full the plane is, and whether it is a popular route on a busy day. AI has brought this to online retail. A retailer's AI system monitors competitor prices, checks stock levels, analyses how many people are currently viewing the item, and may factor in your browsing history. Prices can change by the hour.",
    hint: "Think about why the price of a flight goes up the closer you get to the departure date.",
  },
  {
    question: "How do cashierless stores like Amazon Fresh work?",
    options: [
      "Customers scan each item with their phone as they pick it up, then pay through the Amazon app when they are ready to leave",
      "Computer vision cameras and shelf sensors track what each customer picks up and puts back, and automatically charge their account when they leave the store",
      "Each product has an RFID chip that customers activate by tapping their bank card when they want to purchase it",
      "A dedicated personal shopper follows each customer around the store, takes notes of everything they pick up, and processes payment at the exit",
    ],
    correctIndex: 1,
    explanation:
      "Amazon Fresh stores use a dense array of overhead cameras and shelf weight sensors combined with sophisticated computer vision AI. When you enter, you scan a QR code from the Amazon app. The AI tracks you through the store and records every item you pick up. If you put something back, it is removed from your virtual basket. When you walk out through the exit gates, your Amazon account is charged automatically. There are no tills and no queuing.",
    hint: "Think about what happens between walking in and walking out.",
  },
  {
    question: "How does AI detect fake reviews on shopping platforms?",
    options: [
      "It reads every review and uses sentiment analysis to identify ones that sound too positive — any review giving five stars is automatically flagged as suspicious",
      "It looks for patterns such as reviewers who created accounts recently, clusters of similar-sounding reviews posted in a short time, reviews from the same IP address, and language that matches known fake review templates",
      "It compares every review against a database of verified purchases and removes any review where the customer cannot prove they bought the product",
      "It requires all reviewers to take a short quiz proving they understood the product before their review is published",
    ],
    correctIndex: 1,
    explanation:
      "Fake review detection AI looks for behavioural and linguistic patterns that genuine reviewers rarely exhibit. Red flags include: a reviewer who has only reviewed one seller, multiple reviews submitted from the same IP address or device, reviews posted in a burst shortly after a product launch (often when a seller pays a review farm), very similar sentence structures across different reviews, and suspiciously similar product photos. Amazon removes millions of fake reviews each year using these systems.",
    hint: "Think about what a real person reviewing a product would look like compared to a coordinated fake review campaign.",
  },
]

export function AIAndShopping() {
  useMarkVisited('ai-and-shopping')

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F6CD;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and shopping
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            From personalised recommendations to virtual try-on, dynamic pricing, and
            cashierless stores — how AI is reshaping the way we buy things.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-shopping" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-pink-100 dark:border-pink-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Shopping has been transformed</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Twenty years ago, shopping meant going to a shop. Ten years ago, it meant browsing a website.
            Today AI has made online shopping deeply personal — and it is continuing to change fast.
          </p>
          <div className="space-y-2">
            {[
              "UK consumers spend over £100 billion online each year — more per person than almost any other country in the world",
              "Amazon's recommendation engine is estimated to drive 35% of all its sales — more than search or advertising",
              "Return rates for online clothing are around 30-40% — virtual try-on technology is significantly reducing this",
              "The average price of a product on Amazon changes 2.5 million times a day — dynamic pricing AI never sleeps",
              "Fake reviews cost consumers an estimated £1 billion a year in poor purchasing decisions — AI is now the main tool fighting them",
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-pink-600 dark:text-pink-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Recommendation engines — your personal shop window</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Every time you shop online, AI is studying you — and building a version of the shop
            that is uniquely yours.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-purple-50 dark:bg-purple-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F6D2;</span>
              <div>
                <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-0.5">Collaborative filtering</p>
                <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">The AI finds customers whose shopping history resembles yours, then recommends what they bought next. &quot;Customers who bought this also bought...&quot; is powered by this technique. It works extraordinarily well because the AI has hundreds of millions of customer journeys to learn from.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-purple-50 dark:bg-purple-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F1;</span>
              <div>
                <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-0.5">Browsing signals</p>
                <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">AI tracks more than purchases — it notices which products you lingered on, what you searched for without buying, items you added to your basket and then removed, and products you viewed multiple times on different days. All of this signals intent, even without a purchase.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-purple-50 dark:bg-purple-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F441;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-0.5">Your consumer rights</p>
                <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">Recommendation algorithms can create &quot;filter bubbles&quot; — showing you only what you already know and like. UK data protection law (GDPR) gives you the right to ask companies what data they hold about you and to have it deleted. You can also opt out of personalised advertising on most platforms.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-teal-100 dark:border-teal-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Virtual try-on — the fitting room on your phone</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            One of the biggest frustrations with online shopping has always been not being able to
            try things on. AI and augmented reality are changing this.
          </p>
          <div className="space-y-2">
            {[
              "ASOS has a virtual catwalk feature that shows clothes on a model with a similar body shape to yours",
              "Specsavers and EyeBuyDirect let you try glasses frames live on your face using your phone's front camera",
              "L'Oreal, Charlotte Tilbury, and other make-up brands let you try lipstick, eyeshadow, and foundation shades on your real face in real time",
              "IKEA Place lets you point your phone at a room and see exactly how a piece of furniture would look in your home at the correct scale",
              "Nike Fit uses your phone camera to measure your foot precisely and recommend the right shoe size — reducing returns caused by poor fit",
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-teal-600 dark:text-teal-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Dynamic pricing — why prices change</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            You may have noticed that prices online are not fixed. Dynamic pricing AI monitors
            dozens of factors simultaneously and adjusts prices constantly.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-orange-50 dark:bg-orange-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4C8;</span>
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-200 text-sm mb-0.5">What changes the price</p>
                <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">Demand (lots of people viewing the item right now), stock levels (only 3 left), competitor prices, time of day, season, and sometimes your browsing history — if you have looked at an item multiple times without buying, some retailers may increase the price slightly, believing you are committed.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-orange-50 dark:bg-orange-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4B8;</span>
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-200 text-sm mb-0.5">How to shop smarter</p>
                <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">Use price tracking tools like CamelCamelCamel (Amazon), Google Shopping&apos;s price history, or browser extensions like Honey to see whether today&apos;s price is actually good value. Browsing in a private (incognito) window may prevent some personalised pricing. Being patient often pays — prices fluctuate significantly.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Cashierless stores and smart checkout</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The future of in-store shopping may involve no tills at all.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-indigo-50 dark:bg-indigo-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F7;</span>
              <div>
                <p className="font-semibold text-indigo-800 dark:text-indigo-200 text-sm mb-0.5">Amazon Fresh — just walk out</p>
                <p className="text-indigo-700 dark:text-indigo-300 text-sm leading-relaxed">Amazon Fresh stores in London use overhead cameras and shelf sensors to track exactly what each customer picks up. When you walk out, your Amazon account is charged automatically. No scanning, no queuing, no tills. The technology is called &quot;Just Walk Out&quot; and is being licensed to other retailers.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-indigo-50 dark:bg-indigo-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F3EA;</span>
              <div>
                <p className="font-semibold text-indigo-800 dark:text-indigo-200 text-sm mb-0.5">Sainsbury&apos;s SmartShop and self-scan</p>
                <p className="text-indigo-700 dark:text-indigo-300 text-sm leading-relaxed">Sainsbury&apos;s SmartShop lets you scan items on your phone as you put them in your bag. AI monitors for unusual patterns and flags potential theft. It speeds up checkout significantly and gives you a running total as you shop.</p>
              </div>
            </div>
          </div>
        </div>

        <Quiz questions={quizQuestions} lessonId="ai-and-shopping" />

        <LessonNote lessonId="ai-and-shopping" />
        <ReviewLaterButton lessonId="ai-and-shopping" />
        <LessonRating lessonId="ai-and-shopping" />
        <LessonFeedback lessonId="ai-and-shopping" />
        <RelatedLessons currentId="ai-and-shopping" />
        <NextLesson currentId="ai-and-shopping" />
      </div>
    </div>
  )
}
