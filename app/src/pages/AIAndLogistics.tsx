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

const LESSON_TITLE = 'AI and logistics'

const KEY_TAKEAWAYS = [
  "Amazon's warehouses use fleets of robots (Kiva/Amazon Robotics) guided by AI to move shelving units to human packers — reducing the time to pick an item from over an hour to minutes.",
  'Route optimisation AI (used by DHL, UPS, FedEx, and most delivery companies) calculates the most efficient delivery sequence in real time, accounting for traffic, weather, and time windows — saving millions of litres of fuel per year.',
  'Delivery drones and autonomous delivery robots are being trialled in several countries — AI handles the navigation and obstacle avoidance in real time.',
  'AI demand forecasting helps warehouses stock the right amount of each product, reducing storage costs and ensuring popular items are available where they are needed.',
  'Every parcel tracking update, every "your delivery is 3 stops away" notification, and most of the invisible logistics behind online shopping are powered by AI systems.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: "What do Amazon's warehouse robots (Kiva systems) actually do?",
    options: [
      'They pick individual products off shelves, pack them into boxes, and address parcels completely without human involvement',
      'They carry entire shelving units to stationary human workers, eliminating the need for workers to walk around the warehouse',
      'They drive delivery vans autonomously between Amazon warehouses and local sorting centres',
      'They inspect every incoming package for damage using computer vision before it enters the warehouse',
    ],
    correctIndex: 1,
    explanation:
      "Amazon's Kiva robots (now Amazon Robotics) are orange, squat mobile platforms that drive under large shelving units, lift them, and carry the entire shelf to a picking station where a human worker stands. Instead of a human walking several kilometres a day to find products, the products come to the human. This reduces the average picking time from 90 minutes per order to about 15 minutes. The robots navigate using barcodes on the warehouse floor and AI path planning to avoid collisions. Amazon has deployed over 750,000 of these robots across its warehouses worldwide.",
    hint: "Think about what moves in the warehouse — the workers or the shelves.",
  },
  {
    question: 'How does route optimisation AI save delivery companies money?',
    options: [
      'It negotiates better fuel prices automatically with petrol stations along the delivery route',
      'It calculates the most efficient sequence and routes for all deliveries in real time, reducing distance driven and fuel consumed',
      'It predicts when delivery vans will break down and schedules preventive maintenance to avoid costly repairs',
      'It replaces all human delivery drivers with AI systems that do not require wages or breaks',
    ],
    correctIndex: 1,
    explanation:
      "UPS's ORION (On-Road Integrated Optimization and Navigation) system calculates optimised delivery routes for its drivers, reportedly saving UPS over 100 million miles of driving and 10 million gallons of fuel per year. The system accounts for traffic, delivery time windows (some customers are only home at certain times), the weight distribution of the van, and even a preference for right turns over left turns (in countries that drive on the right) because right turns reduce time sitting in traffic waiting to cross oncoming lanes. Every second and every metre saved multiplied across millions of deliveries adds up to enormous savings.",
    hint: 'Think about what happens when you multiply a small saving by millions of deliveries.',
  },
  {
    question: 'What is the main challenge that still prevents widespread use of delivery drones for home deliveries?',
    options: [
      'Battery technology — current drones can only fly for 2 minutes before needing a recharge',
      'A combination of regulatory rules, airspace management, safety in dense urban areas, and the difficulty of delivering to flats and houses without gardens',
      'Public opposition — surveys show 95% of consumers would refuse a drone delivery',
      'The cost — delivery drones cost over £50,000 each, making them economically unviable for any parcel company',
    ],
    correctIndex: 1,
    explanation:
      "Drone delivery technology works. Alphabet's Wing and Amazon Prime Air have both completed successful deliveries. The challenges are practical and regulatory. Airspace rules require drones to stay within visual line of sight in most countries (which limits range). Flying safely over and around people in dense cities is hard. Many UK homes are flats with no accessible outdoor landing space. Bad weather grounds drones. And regulators need frameworks to manage thousands of drones sharing airspace with aircraft. Rural areas with gardens and clear airspace are seeing early commercial drone delivery — Reykjavik in Iceland, for example, has had Aha drone deliveries since 2017.",
    hint: 'Think about the practical realities of flying a package to a flat on the 12th floor of a city block.',
  },
  {
    question: 'How does AI demand forecasting help a warehouse run efficiently?',
    options: [
      'It automatically reorders stock from suppliers as soon as a product is sold, maintaining exactly one unit of each item at all times',
      'It predicts how much of each product will be needed, when, and where — allowing the right stock to be in the right place before demand peaks',
      'It analyses customer complaints to identify faulty products and removes them from sale before they reach consumers',
      'It monitors the temperature and humidity in the warehouse to predict when perishable goods will spoil',
    ],
    correctIndex: 1,
    explanation:
      "AI demand forecasting analyses historical sales data, seasonal patterns, upcoming events (Black Friday, Christmas, a predicted hot week in summer meaning ice cream and garden furniture spike), local trends, and economic signals to predict what will sell, how much, and when. This allows a warehouse to stock up on a product before demand arrives — rather than running out and disappointing customers, or overstocking slow-moving items and wasting shelf space. Amazon pre-moves popular products to regional fulfilment centres before major events, so when the order is placed, the parcel is already geographically close to the customer.",
    hint: 'Think about having the right product in the right place before the customer even orders it.',
  },
  {
    question: 'What AI technology powers the "your driver is 3 stops away" delivery notification?',
    options: [
      'The driver manually sends a text message when they are close to your address',
      'GPS tracking combined with AI that models the time each delivery takes and estimates the remaining stops in sequence',
      'A satellite system that measures the precise distance between the delivery van and your address at all times',
      'The delivery company calls each recipient in sequence to warn them when they are next',
    ],
    correctIndex: 1,
    explanation:
      "Modern delivery tracking systems use GPS to monitor van location in real time, AI to model how long each stop takes (accounting for the type of property, whether a signature is required, and historical delivery times for that area), and route optimisation to know the planned delivery sequence. By combining these, the system can estimate with reasonable accuracy when your delivery is likely to arrive and update that estimate dynamically as conditions change. The '3 stops away' message is an AI estimate, not a human one — and it gets more accurate the closer the van gets.",
    hint: 'Think about combining GPS position with a model of how long each delivery takes.',
  },
]

export function AIAndLogistics() {
  useMarkVisited('ai-and-logistics')

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F69A;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and logistics
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Warehouse robots, route optimisation, delivery drones, and demand forecasting —
            how AI powers the invisible machine behind every online order.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-logistics" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-yellow-100 dark:border-yellow-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The invisible machine behind online shopping</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            When you order something online and it arrives the next day, an enormous amount of AI-powered coordination happened invisibly between your click and your doorbell ringing.
          </p>
          <div className="space-y-2">
            {[
              'The item was already in the warehouse nearest to you because AI predicted you — or someone like you — would order it',
              'A robot carried the shelf with your item to a human packer, who boxed it in minutes',
              'A sorting system routed your parcel to the right vehicle using computer vision and barcodes',
              'A delivery driver received a route optimised by AI for maximum efficiency',
              'You got a notification timed by AI predicting when your parcel would arrive based on the driver\'s progress',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-yellow-600 dark:text-yellow-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Warehouse robots</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Modern fulfilment warehouses look nothing like the vast, manually navigated buildings of the past.
          </p>
          <div className="space-y-3">
            {[
              { icon: '&#x1F7E0;', label: "Amazon Robotics (formerly Kiva)", text: "Over 750,000 orange robots carry entire shelving units to human pickers. A warehouse worker used to walk 15+ km a day. Now the products come to them. Picking time dropped from 90 minutes to 15 minutes per order." },
              { icon: '&#x1F916;', label: "Goods-to-person systems", text: "Used by Ocado (UK grocery), AutoStore (used by Marks & Spencer and Booths), and others. Products stored in dense grid systems, retrieved by overhead robots and brought to packing stations." },
              { icon: '&#x1F4E6;', label: "Robotic pickers and packers", text: "Computer vision and robotic arms are increasingly able to pick individual items — though handling varied shapes and fragile objects is still challenging. Amazon's Sparrow robot picks individual products from bins." },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-orange-50 dark:bg-orange-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-orange-800 dark:text-orange-200 text-sm mb-0.5">{label}</p>
                  <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Delivery drones and autonomous robots</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The last mile of delivery — getting a parcel from a local depot to your door — is the most expensive and inefficient part. AI-powered alternatives are being developed.
          </p>
          <div className="space-y-2">
            {[
              "Alphabet's Wing drones deliver food and pharmacy items in parts of Australia and the US — navigating AI routes around obstacles and landing precisely",
              "Amazon Prime Air has delivered packages in the UK (Lockeford, California) using fully autonomous drones",
              "Starship Technologies' six-wheeled delivery robots operate on pavements in parts of the UK, US, and Estonia — carrying groceries up to 4 miles autonomously",
              "DPD and other carriers are trialling delivery robots in pedestrianised city centres",
              "These systems all use AI for navigation, obstacle detection, and route planning in real environments with pedestrians, cyclists, and unpredictable conditions",
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <LessonNote lessonId="ai-and-logistics" />
        <ReviewLaterButton lessonId="ai-and-logistics" />

        <Quiz lessonId="ai-and-logistics" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-logistics" />
        <LessonFeedback lessonId="ai-and-logistics" />

        <RelatedLessons currentId="ai-and-logistics" />

        <NextLesson currentId="ai-and-logistics" />

      </div>
    </div>
  )
}
