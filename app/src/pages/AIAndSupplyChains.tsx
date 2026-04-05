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

const LESSON_TITLE = 'AI and supply chains'

const KEY_TAKEAWAYS = [
  'A supply chain is the entire journey a product makes from raw material to your hands — involving farms, factories, ships, lorries, and shops. AI now manages much of this invisible infrastructure.',
  'Demand forecasting AI predicts what products customers will want and when — enabling supermarkets and manufacturers to stock the right amounts, reduce waste, and avoid costly shortfalls.',
  'Amazon runs some of the most automated warehouses in the world: robots retrieve shelves and bring them to human pickers, AI plans every route, and machine vision inspects items for defects at speed.',
  'Route optimisation algorithms like UPS\'s ORION system save hundreds of millions of miles of driving per year by calculating the most efficient delivery sequence — considering traffic, time windows, and fuel.',
  'The COVID-19 pandemic exposed the fragility of AI-optimised, just-in-time supply chains: when demand spiked unexpectedly, systems designed for efficiency rather than resilience broke down dramatically.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does a demand forecasting AI do in a supply chain?',
    options: [
      'It controls the speed of conveyor belts in warehouses to ensure products move through at a consistent rate without bottlenecks',
      'It predicts how much of each product customers will want to buy, and when — helping businesses stock the right amounts and avoid waste or shortfalls',
      'It monitors the physical condition of products during shipping and alerts logistics teams when items have been damaged in transit',
      'It automatically negotiates prices with suppliers based on current market conditions and the business\'s historical purchasing patterns',
    ],
    correctIndex: 1,
    explanation:
      "Demand forecasting AI analyses historical sales data, seasonal patterns, local events, weather, and even social media trends to predict what products will be needed where and when. A supermarket's AI might predict that more barbecue charcoal will be sold in a particular store next weekend because the weather forecast is good and a local festival is happening nearby — and order stock accordingly. Getting this right reduces both waste (overstock that has to be discarded) and lost sales (empty shelves). Tesco, Sainsbury's, and other major retailers invest heavily in demand forecasting AI.",
    hint: 'Think about predicting the future to plan the present.',
  },
  {
    question: 'How do Amazon fulfilment centres use AI and robotics?',
    options: [
      'Fully autonomous robots handle all tasks from receiving goods to handing parcels to delivery drivers, with no human workers involved at any stage',
      'AI robots retrieve entire shelving units and bring them to human pickers, who select the right items — combining robot efficiency with human dexterity for tasks machines still struggle with',
      'Amazon uses AI only for delivery route planning; warehouse operations rely entirely on human workers without any robotic assistance',
      'AI systems in Amazon warehouses focus exclusively on quality control, scanning every item for defects while humans handle all movement and picking tasks',
    ],
    correctIndex: 1,
    explanation:
      "Amazon's fulfilment centres use a system where AI-controlled robots (originally made by Kiva Systems, now Amazon Robotics) retrieve entire shelving units and drive them to human pickers, who select the correct items. The AI plans every robot's route through the warehouse to avoid collisions and minimise travel time. Human workers are still needed for the picking step — deciding which specific item to take from a shelf is a manipulation task that robots still struggle with in unstructured environments. However, Amazon continues to develop robotic picking systems and has deployed AI vision systems for quality inspection.",
    hint: 'Think about which parts robots do well and which parts humans still handle.',
  },
  {
    question: 'What is the UPS ORION system?',
    options: [
      'A satellite navigation system used by UPS drivers to find addresses in rural areas where standard maps are inaccurate',
      'An AI-powered route optimisation system that calculates the most efficient delivery sequence for each driver — saving hundreds of millions of miles of driving per year',
      'A warehouse management system that tracks every parcel in the UPS network from collection to delivery in real time',
      'A customer-facing AI chatbot that UPS uses to answer questions about delivery times and parcel tracking',
    ],
    correctIndex: 1,
    explanation:
      "ORION (On-Road Integrated Optimization and Navigation) is UPS's AI route optimisation system. Each UPS driver makes dozens of deliveries per day, and the order in which they make them dramatically affects fuel use, time, and cost. ORION calculates the optimal sequence considering traffic, delivery time windows, the right turns versus left turns trade-off (right turns avoid waiting at junctions — this alone saves millions of miles), and package size. UPS reports that ORION saves around 100 million miles of driving per year across its fleet — equivalent to significant fuel savings and a major reduction in carbon emissions.",
    hint: 'Think about the most efficient way to deliver dozens of parcels.',
  },
  {
    question: 'What did the COVID-19 pandemic reveal about AI-optimised supply chains?',
    options: [
      'That AI supply chain systems are so robust they handled the pandemic disruption better than traditional supply chains with no significant problems',
      'That supply chains optimised for efficiency and minimal inventory are fragile when demand changes suddenly — the pandemic exposed how little buffer existed for unexpected shocks',
      'That AI systems in supply chains actively worsened the pandemic by preventing businesses from adapting their operations in response to new health guidance',
      'That the main vulnerability of AI supply chains is cybersecurity — the pandemic triggered a wave of hacking attacks on logistics systems that caused most of the shortages',
    ],
    correctIndex: 1,
    explanation:
      "The COVID-19 pandemic exposed a fundamental tension in AI-optimised supply chains: systems optimised for efficiency are often fragile in crises. 'Just-in-time' inventory management — keeping only enough stock on hand to meet predicted demand, with goods arriving just as they are needed — is efficient when demand is predictable but catastrophic when it is not. When toilet paper, flour, pasta, and medical equipment demand spiked suddenly in March 2020, supply chains designed to minimise buffer stock simply could not cope. AI systems trained on historical patterns had no data for a global pandemic. The resulting shortages led many businesses and governments to rethink the balance between efficiency and resilience.",
    hint: 'Think about the difference between a system optimised for normal times and one that can cope with surprises.',
  },
]

export function AIAndSupplyChains() {
  useMarkVisited('ai-and-supply-chains')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F69A;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and supply chains
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI keeps goods moving — demand forecasting, warehouse robots, route optimisation,
            last-mile delivery, and what the pandemic taught us about the limits of efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-supply-chains" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">What is a supply chain?</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            A supply chain is the entire journey a product makes from raw material to your hands. Take a plain white cotton T-shirt:
          </p>
          <div className="space-y-2">
            {[
              'Cotton grown in India or the USA, picked by machine',
              'Shipped to a spinning mill in Bangladesh or Turkey, spun into thread',
              'Woven into fabric, dyed, cut, and sewn into a T-shirt — often in a different factory',
              'Packed into boxes and shipped by sea to a distribution centre in the UK',
              'Driven by lorry to a regional warehouse, then to a local store or delivered to your door',
            ].map((step, i) => (
              <div key={step} className="flex gap-3 items-start">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold text-xs px-2 py-1 rounded-full flex-shrink-0 mt-0.5">{i + 1}</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-4">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Each step involves suppliers, contracts, transport, warehousing, and timing. Getting it right requires coordinating thousands of moving parts simultaneously. AI now manages much of this invisible infrastructure.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Demand forecasting — predicting what you will buy before you know it yourself</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Ordering too much stock ties up money and leads to waste when products expire or go out of fashion. Ordering too little means empty shelves and lost sales. Demand forecasting AI tries to thread this needle.
          </p>
          <div className="space-y-2">
            {[
              'Analyses years of historical sales data to identify patterns — which products sell more in summer, which spike before bank holidays',
              'Incorporates real-time data: current weather forecasts, local events, news stories, social media trends',
              'Adjusts for local factors: a store near a football stadium will need more beer on match days; one near a school will sell more back-to-school supplies in September',
              'Learns from errors — when a forecast was wrong and why, so future predictions improve',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 dark:bg-blue-950 rounded-xl p-4">
            <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
              <strong>Real example:</strong> Tesco uses AI demand forecasting to reduce food waste across its stores. By predicting more accurately how much fresh produce will be needed, it orders less, throws away less, and saves money. The AI can predict that a particular store will sell 47 loaves of seeded bread on a Thursday — not 50, not 40.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Amazon warehouse robots — humans and machines together</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Amazon's fulfilment centres are some of the most automated in the world — and some of the most closely studied for what they reveal about human-machine collaboration.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-orange-50 dark:bg-orange-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F916;</span>
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-200 text-sm mb-0.5">The Kiva robots</p>
                <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">Instead of human workers walking miles per shift to retrieve items from shelves, AI-controlled robots drive entire shelving pods to a human picker's station. The worker stays in one place; the shelves come to them. The AI coordinates hundreds of robots simultaneously, planning routes that avoid collisions and minimise travel time.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-orange-50 dark:bg-orange-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4E6;</span>
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-200 text-sm mb-0.5">Machine vision quality control</p>
                <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">AI cameras inspect items as they move through the warehouse, detecting dents, tears, incorrect labels, and missing components faster and more consistently than human inspectors. Items that fail are flagged automatically.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-orange-50 dark:bg-orange-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F91D;</span>
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-200 text-sm mb-0.5">Why humans are still essential</p>
                <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">The picking step — reaching into a mixed shelf and selecting the right item — remains difficult for robots. Human hands and eyes are extraordinarily versatile. Amazon continues to employ tens of thousands of human pickers while developing robotic picking systems that can handle an increasing range of item types.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Route optimisation — finding the perfect delivery sequence</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            A delivery driver with 120 stops could make those stops in an almost infinite number of orders. Finding the most efficient sequence is a mathematical problem so complex that even computers cannot find the perfect solution — but AI finds very good ones.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            UPS's ORION (On-Road Integrated Optimization and Navigation) system calculates each driver's route considering traffic, delivery time windows, and famously the preference for right turns over left turns — avoiding waiting at junctions saves millions of miles annually. UPS reports ORION saves around 100 million miles of driving per year.
          </p>
          <div className="bg-green-50 dark:bg-green-950 rounded-xl p-4">
            <p className="text-green-800 dark:text-green-200 text-sm leading-relaxed">
              <strong>Last-mile delivery:</strong> The final step — getting a parcel from a depot to your door — is the most expensive and carbon-intensive part of delivery. AI is being applied to last-mile optimisation through drone delivery (Amazon Prime Air, Wing), delivery robots (Starship Technologies on UK university campuses), and dynamic rerouting when traffic changes mid-route.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-cyan-100 dark:border-cyan-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Real-time inventory and port logistics</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Modern supply chains involve enormous amounts of data flowing in real time — from RFID tags on individual products to GPS trackers on shipping containers to satellite imagery of ports.
          </p>
          <div className="space-y-2">
            {[
              'Smart warehouses track every item\'s exact location in real time using RFID and barcode scanning, so staff can find any product instantly',
              'AI systems monitor shipping containers as they cross oceans — predicting arrival times accounting for weather and routing changes',
              'Port logistics AI schedules which ships dock when, which cranes handle which containers, and which lorries are at which gates — coordinating thousands of simultaneous movements',
              'Predictive maintenance AI monitors warehouse equipment — forklifts, conveyor belts, refrigeration units — and flags when components are likely to fail before they actually do',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-cyan-600 dark:text-cyan-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Lessons from the pandemic — when efficiency becomes fragility</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The COVID-19 pandemic stress-tested AI supply chain systems in ways no algorithm had anticipated.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Supermarket shelves emptied of pasta, flour, and toilet paper. Medical equipment was stranded at ports. Semiconductor shortages grounded car production lines. The problem was not that AI had failed — it was that AI systems had been optimised for efficiency in normal conditions, not resilience in a crisis.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x26A0;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">Just-in-time is fragile</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">Just-in-time inventory management — keeping minimal buffer stock and ordering only when needed — is highly efficient when demand is predictable. When demand spikes suddenly, the buffer that would absorb the shock simply does not exist.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CA;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">AI trained on history cannot predict the unprecedented</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">Demand forecasting AI learns from historical data. No historical data captured a global pandemic. The algorithms confidently predicted normal demand while the world changed completely beneath them.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4A1;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">The lesson for AI supply chains</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">After the pandemic, many companies began building in more resilience: diversifying suppliers across multiple countries, holding slightly more buffer stock, and training AI systems to detect and respond to unusual demand signals faster. Efficiency and resilience need to be balanced — not just optimised.</p>
              </div>
            </div>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-supply-chains" />

        <Quiz lessonId="ai-and-supply-chains" questions={quizQuestions} />

        <LessonNote lessonId="ai-and-supply-chains" />

        <LessonRating lessonId="ai-and-supply-chains" />

        <LessonFeedback lessonId="ai-and-supply-chains" />

        <RelatedLessons currentId="ai-and-supply-chains" />

        <NextLesson currentId="ai-and-supply-chains" />

        <CompletedBadge lessonId="ai-and-supply-chains" />

      </div>
    </div>
  )
}
