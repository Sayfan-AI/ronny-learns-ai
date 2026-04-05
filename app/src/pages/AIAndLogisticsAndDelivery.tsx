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

const LESSON_TITLE = 'AI and logistics and delivery'

const KEY_TAKEAWAYS = [
  'AI route planning calculates the most efficient delivery routes in real time, accounting for traffic, road closures, and parcel priority — DPD and Amazon report significant fuel savings from AI-optimised routing.',
  'AI-powered conveyor systems and computer vision sort millions of parcels daily in sorting hubs, routing each item to the correct depot lorry automatically and far faster than human sorters could manage.',
  'Amazon uses AI to pre-position products in warehouses near where they predict people will order — meaning some parcels are on their way to your area before you have even placed your order.',
  'Drone delivery is in active trials in the UK — Amazon Prime Air has tested deliveries in parts of Cambridgeshire, and the UK Civil Aviation Authority has created a regulatory framework for beyond-visual-line-of-sight drone flights.',
  'Algorithmic management of delivery drivers — tracking speed, route compliance, delivery times, and customer ratings — has been criticised by trade unions for dehumanising work and reducing worker autonomy.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does AI route planning help delivery companies like DPD and Amazon?',
    options: [
      'It allows delivery companies to share routes with competitors in real time, reducing the number of vans on the same roads and cutting congestion in residential areas',
      'It calculates optimal delivery routes in real time, accounting for traffic conditions, road closures, parcel priority, and time windows — reducing fuel use, time on the road, and failed deliveries',
      'It monitors driver behaviour and automatically selects the most experienced driver for each route to minimise the chance of accidents and delivery errors',
      'It negotiates with traffic management systems in real time to change traffic light timings along a driver\'s route, reducing waiting time at junctions',
    ],
    correctIndex: 1,
    explanation:
      'Before AI route optimisation, delivery routes were planned manually or with basic software and were often suboptimal — drivers might cross their own paths, deliver to opposite ends of a street on different rounds, or spend excessive time waiting in traffic. AI route optimisation software analyses all the day\'s deliveries, the locations of each customer, estimated traffic conditions at the time of delivery, the capacity of each vehicle, and any time-window constraints (deliveries that must happen in the morning, click-and-collect slots, etc.) and calculates the most efficient set of routes. DPD reports fuel savings of around 10% and a significant reduction in failed delivery attempts since implementing AI routing.',
    hint: 'Think about all the factors a delivery planner would need to consider when planning dozens of routes simultaneously.',
  },
  {
    question: 'How do AI systems sort parcels in distribution centres?',
    options: [
      'Workers scan each parcel\'s barcode and the AI tells them which conveyor belt to place it on — replacing the paper manifest system but still requiring human physical sorting',
      'Computer vision cameras read barcodes and labels automatically as parcels move along conveyor belts, and AI directs each parcel to the correct loading bay or outbound lorry — with minimal human involvement',
      'AI weighs each parcel and calculates the optimal stacking order for lorries to maximise the number of parcels that fit while keeping the heaviest items at the bottom',
      'AI analyses the delivery addresses and groups parcels into postal district bundles that workers then load by hand, reducing the number of sorting decisions each worker must make',
    ],
    correctIndex: 1,
    explanation:
      'Modern parcel sorting hubs are extraordinary feats of AI-powered automation. Parcels travel on conveyor networks at high speed. Cameras read barcodes and address labels at every angle simultaneously — even if a parcel is tumbling or irregularly shaped. The AI tracking system knows exactly where every parcel is in the building at every moment and controls the diverters (paddles and gates) that direct each parcel to the correct belt for its destination. At Amazon\'s largest UK fulfilment centres, tens of thousands of parcels are sorted every hour. Ocado\'s robotic grocery fulfilment centres use a similar approach for food orders, with robot arms picking items at speeds no human picker could match.',
    hint: 'Think about how a high-speed conveyor system can route thousands of different parcels to hundreds of different destinations.',
  },
  {
    question: 'How does Amazon use AI to pre-position products in its warehouses?',
    options: [
      'Amazon shares purchasing data with manufacturers so they can pre-produce items before demand spikes — reducing the lag between ordering and delivery',
      'Amazon\'s AI analyses purchase history, browsing behaviour, seasonal trends, and local demographics to predict what people in each area will order and moves that stock to nearby warehouses in advance',
      'Amazon pre-positions stock based on supplier contracts — manufacturers guarantee delivery times and Amazon\'s AI simply manages the logistics of receiving and storing what arrives',
      'Amazon uses AI to identify the fastest delivery route to each postcode and pre-positions vans with a full day\'s predicted orders for that area before the working day begins',
    ],
    correctIndex: 1,
    explanation:
      'Amazon holds a patent for "anticipatory shipping" — a system that moves products towards a customer\'s area before they have placed an order. The AI analyses what you have searched for, what is on your wish list, your past purchase history, and aggregate data from similar customers in your postcode to predict what you are likely to order. Products are then moved to a local fulfilment centre or even loaded onto a delivery vehicle in your area. If you then order that item, it may already be on its way — enabling the next-day and same-day delivery Amazon offers. If you do not order, the stock stays in the area ready for someone else who does.',
    hint: 'Think about how Amazon can offer same-day delivery — the product must already be nearby before you order.',
  },
  {
    question: 'What is the current state of drone delivery trials in the UK?',
    options: [
      'Drone delivery is fully commercialised in the UK with hundreds of delivery drones operating daily in major cities, regulated by a mature licensing framework',
      'Amazon Prime Air has conducted delivery trials in parts of Cambridgeshire, and the UK Civil Aviation Authority has developed a framework for beyond-visual-line-of-sight drone operations',
      'All drone delivery trials in the UK have been suspended pending the outcome of a government review into the safety and privacy implications of urban drone flight',
      'Drone delivery in the UK is limited to medical supplies — medicines and blood products — and commercial package delivery by drone remains prohibited by law',
    ],
    correctIndex: 1,
    explanation:
      'Amazon Prime Air conducted delivery trials in Lockeford, California, and separately in parts of the Cambridge area in the UK. The UK Civil Aviation Authority (CAA) has been developing regulations for "beyond visual line of sight" (BVLOS) drone operations — the key requirement for practical delivery drones, since keeping a drone within the naked-eye sight of an operator is impractical for delivery at scale. In 2022 the CAA launched a sandbox programme allowing companies to trial BVLOS operations under controlled conditions. Wing (owned by Google\'s parent Alphabet) has operated drone delivery services in Australia, Finland, and the USA. Reliable autonomous navigation using AI — obstacle detection, weather assessment, airspace conflict avoidance — is the core technical challenge that keeps these services from scaling rapidly.',
    hint: 'Think about what stage of development drone delivery is actually at in the UK, rather than what has been announced.',
  },
  {
    question: 'Why has algorithmic management of delivery drivers been criticised?',
    options: [
      'The algorithms make too many errors in assigning routes, sending drivers to the wrong addresses and causing significant delays and customer complaints',
      'AI tracks driver speed, route compliance, and performance and penalises them automatically — reducing autonomy, creating constant surveillance, and making it harder for workers to exercise human judgement',
      'The algorithms discriminate against older drivers by assigning them shorter routes with fewer parcels, effectively reducing their earnings compared to younger colleagues',
      'The algorithms share driver performance data with competitor companies, giving rivals an unfair advantage in bidding for the same drivers when they change employer',
    ],
    correctIndex: 1,
    explanation:
      'This is one of the most significant labour relations debates around AI in logistics. Delivery drivers for companies like Amazon Flex, DPD, and Evri (formerly Hermes) report constant AI-driven monitoring: the app tracks their speed at every point on the route, times every delivery, monitors whether they follow the specified route, and rates their performance. Drivers who fall below thresholds can be automatically warned or deactivated — sometimes without human review of the circumstances. Trade unions including Unite have raised concerns about this "algorithmic management" as dehumanising, removing the discretion workers have always had (deciding to ring a neighbour\'s doorbell, waiting an extra minute at a door), and creating stress through constant surveillance. The Trades Union Congress (TUC) has called for the right for workers to be told when AI is being used to make decisions that affect their employment.',
    hint: 'Think about how it feels to have every aspect of your work performance monitored and judged automatically.',
  },
]

export function AIAndLogisticsAndDelivery() {
  useMarkVisited('ai-and-logistics-and-delivery')

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4E6;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and logistics and delivery
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How Amazon, Royal Mail, DPD, and Ocado use AI to plan routes, sort parcels, predict orders,
            trial drone delivery, and manage drivers — and what this means for workers.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-logistics-and-delivery" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The logistics revolution</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Online shopping has transformed expectations: next-day delivery is now standard and same-day is increasingly available. Behind this lies an enormous AI infrastructure that most customers never see.
          </p>
          <div className="space-y-2">
            {[
              'UK consumers spent over £120 billion online in 2023, with over 4 billion parcel deliveries made each year',
              'Royal Mail, Amazon, DPD, Evri, and Hermes collectively employ hundreds of thousands of delivery workers in the UK',
              'Ocado — Britain\'s online-only supermarket — operates entirely automated robotic fulfilment centres where AI manages every aspect of picking, packing, and dispatch',
              'AI route optimisation alone can reduce fuel consumption by 10 to 20% — a significant saving given the cost of fuel and the size of delivery fleets',
              'The logistics sector is one of the fastest-adopting of AI technologies, driven by the intense competition on delivery speed and cost',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Autonomous warehouses — Ocado's robot revolution</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Ocado's Customer Fulfilment Centres are the most automated grocery warehouses in the world — a glimpse of what logistics may look like for every major retailer within a decade.
          </p>
          <div className="bg-blue-50 dark:bg-blue-950 rounded-xl p-4">
            <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
              Ocado's grid-based system has thousands of robots moving across a grid above a vast underground storage system. Each robot carries a crate to a picking station where a human or robotic arm selects the correct item. AI coordinates all robot movements in real time — preventing collisions, optimising routes across the grid, and prioritising orders by dispatch time. The system can process 65,000 orders per week and picks a 50-item grocery shop in under 5 minutes. Ocado licenses this technology to supermarkets around the world including Kroger in the USA and Groupe Casino in France.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Algorithmic management and the gig economy</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI does not just plan the logistics — in many companies it also manages the workforce. This is one of the most contested areas of AI in the modern economy.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x26A0;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">The concern</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">Delivery drivers report apps that track every aspect of their performance — speed at each road, time taken at each door, route deviation — and generate automatic warnings. Some report being deactivated (losing their job) by an algorithm without any human review. The TUC has called for "the right to switch off the algorithm" and mandatory human oversight of AI employment decisions.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F44D;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">The counterargument</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Logistics companies argue that AI management allows them to offer more flexible working patterns (drivers can choose their own hours within the app), ensures consistent service quality that protects jobs overall, and that the monitoring is no different in principle from the performance management that exists in any job. The debate about where AI management crosses a line into surveillance and dehumanisation continues.</p>
              </div>
            </div>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-logistics-and-delivery" />
        <LessonNote lessonId="ai-and-logistics-and-delivery" />

        <Quiz questions={quizQuestions} lessonId="ai-and-logistics-and-delivery" />

        <LessonRating lessonId="ai-and-logistics-and-delivery" />
        <LessonFeedback lessonId="ai-and-logistics-and-delivery" />

        <RelatedLessons currentId="ai-and-logistics-and-delivery" />

        <NextLesson currentId="ai-and-logistics-and-delivery" />
      </div>
    </div>
  )
}
