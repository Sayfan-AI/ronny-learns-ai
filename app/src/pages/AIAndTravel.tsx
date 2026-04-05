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
    question: 'How do tools like Google Flights predict whether flight prices will rise or fall?',
    options: [
      'They call each airline directly and ask whether they plan to increase prices',
      'They analyse billions of historical pricing data points to identify patterns — such as prices typically rising closer to departure on popular routes',
      'They use a fixed formula: prices always rise by 10% per week as departure approaches',
      'They predict prices based solely on the current weather forecast at the destination',
    ],
    correctIndex: 1,
    explanation:
      'Google Flights\' price prediction uses machine learning trained on billions of historical flight prices. The model identifies patterns — for example, that prices on certain routes tend to spike 14 days before departure, or that Friday evening flights are usually more expensive than Tuesday morning ones. The algorithm produces a confidence-weighted prediction like "prices are likely to rise" along with a suggested action (buy now or wait).',
    hint: 'Think about patterns in historical data — not fixed rules or direct communication with airlines.',
  },
  {
    question: 'What is "biometric boarding" and how does AI make it work?',
    options: [
      'Passengers board in order of how much luggage they have, with AI calculating the most efficient loading sequence',
      'AI facial recognition matches a traveller\'s face to their passport photo or stored biometric data, allowing them to board without showing a paper boarding pass',
      'Passengers scan a unique fingerprint pattern that was set up when they originally purchased their ticket',
      'AI reads the biometric chip in a passenger\'s passport wirelessly as they walk past a gate sensor',
    ],
    correctIndex: 1,
    explanation:
      'Biometric boarding uses computer vision AI to match a live photo of the passenger\'s face against their passport photo (stored when checking in) or a central biometric database. Delta, American Airlines, and major UK airports have all trialled or deployed this. The AI must handle variations in lighting, ageing, glasses, and different angles. At Heathrow, the system processes passengers faster than manual document checks while also flagging mismatches for human review.',
    hint: 'Biometric refers to physical characteristics — in this case, your face.',
  },
  {
    question: 'How do platforms like Booking.com and Airbnb personalise their property recommendations?',
    options: [
      'They show the same popular properties to all users, then adjust based on price range only',
      'They use collaborative filtering and behaviour analysis — recommending properties based on what similar users booked, your search history, and contextual signals like your travel dates',
      'They randomly select properties from the available inventory and show a different random selection each visit',
      'They only personalise based on your stated preferences (like "I prefer hotels over apartments") set in your profile',
    ],
    correctIndex: 1,
    explanation:
      'Travel platforms use collaborative filtering (users with similar search and booking patterns to you tended to choose X), content-based filtering (you stayed in boutique hotels before, so here are more boutique hotels), and contextual signals (you\'re travelling in December, so they weight ski resorts). Airbnb has published research on its ranking algorithm, which also factors in host acceptance rates, price competitiveness, and review quality.',
    hint: 'Think about collaborative filtering — the same approach used by Netflix and Amazon.',
  },
  {
    question: 'What is an Automated Valuation Model (AVM) in the context of housing?',
    options: [
      'A robot that physically visits properties and estimates their condition',
      'An AI system that estimates a property\'s market value using comparable sales, location data, and property characteristics — without a human surveyor visiting',
      'A government database that sets official property values for tax purposes',
      'An automated bidding system that places offers on properties on behalf of buyers',
    ],
    correctIndex: 1,
    explanation:
      'AVMs use machine learning to estimate property values. They are trained on historical sales data and feed in features like floor area, number of bedrooms, location, proximity to schools and transport, and comparable recent sales nearby. Zillow\'s Zestimate and Rightmove\'s property estimates are famous examples. AVMs can update valuations daily as new sales data arrives. They are generally accurate for standard properties in data-rich areas but less reliable for unusual properties or thin markets.',
    hint: 'AVM = automated estimation without a physical visit — using data and machine learning.',
  },
  {
    question: 'What privacy concern surrounds smart home devices like Alexa and Google Home?',
    options: [
      'These devices can secretly control other smart appliances in the home without the owner\'s knowledge',
      'The devices are always listening for their wake word, which means audio is being processed continuously — and voice recordings are often stored and sometimes reviewed by humans',
      'Smart home devices share your home\'s Wi-Fi password with third-party companies',
      'The AI in these devices builds a 3D map of your home and shares it with advertisers',
    ],
    correctIndex: 1,
    explanation:
      'Smart speakers process audio locally to detect their wake word, but once triggered (and sometimes by accident), the audio is sent to the cloud for processing. Amazon, Google, and Apple have all acknowledged that human reviewers listen to a sample of recordings to improve the AI — though they offer opt-out options. Researchers have also shown that these devices can be accidentally activated by words that sound similar to their wake words, potentially capturing private conversations.',
    hint: 'The concern is about audio recording — what happens to the voice data that\'s captured.',
  },
]

export function AIAndTravel() {
  useMarkVisited('ai-and-travel')

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x2708;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and travel
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Smart airports, personalised holidays, facial recognition at the gate,
            and the AI that predicts whether flight prices will rise or fall.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-travel" />
          <ShareButton lessonTitle="AI and travel" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Flight prices: should I buy now or wait?</h2>
          <p className="text-gray-600 leading-relaxed">
            Anyone who has ever agonised over when to buy a flight will be glad to know that AI
            is working on this problem. Google Flights, Kayak, and other platforms now offer
            AI-powered price predictions.
          </p>
          <div className="bg-sky-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-sky-800 text-sm">How price prediction works</p>
            <p className="text-sky-700 text-sm leading-relaxed">
              The AI is trained on billions of historical flight prices across thousands of routes.
              It learns patterns &mdash; prices on popular leisure routes spike during school holidays,
              business routes are cheaper at weekends, prices often jump sharply 10&ndash;14 days
              before departure on full flights. Given a specific route, dates, and the current price,
              the model estimates the probability that the price will rise, fall, or stay the same
              over the coming days and produces a recommendation.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            These predictions are not perfect &mdash; airline pricing is partly driven by
            unpredictable events like weather disruptions, sudden promotions, or competitor actions.
            But on well-travelled routes with lots of historical data, AI prediction is significantly
            more useful than guessing.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Personalised holidays: AI as travel agent</h2>
          <p className="text-gray-600 leading-relaxed">
            Booking.com, Airbnb, and TripAdvisor all use recommendation AI to personalise what
            you see when you search. The algorithms do far more than filter by price and dates.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F3E8;',
                label: 'Collaborative filtering',
                text: 'The AI looks at what travellers with similar search and booking histories to yours tended to choose. If people like you often book boutique hotels in city centres and then leave positive reviews mentioning "character" and "location", the algorithm learns to surface those kinds of properties for you.',
              },
              {
                icon: '&#x1F4CA;',
                label: 'Contextual signals',
                text: 'Your search context matters too. Booking a stay in December near a ski resort? The AI weights ski-friendly properties higher. Searching for a weekend trip close to home? It emphasises properties with late checkout options and easy transport.',
              },
              {
                icon: '&#x1F916;',
                label: 'AI-generated itineraries',
                text: 'Tools like TripAdvisor\'s AI Planner and Kayak\'s AI chatbot can now generate a complete day-by-day itinerary for a trip — combining flights, hotels, restaurants, and activities — in seconds. These are built on large language models trained on millions of travel reviews and booking patterns.',
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
          <h2 className="text-2xl font-bold text-gray-800">Airports: where AI meets security</h2>
          <p className="text-gray-600 leading-relaxed">
            Modern airports are becoming some of the most AI-intensive public spaces in the world.
            The pressure to process more passengers faster while maintaining security has driven
            significant investment in AI.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '&#x1F9BE;', title: 'Facial recognition', text: 'Computer vision AI matches passengers\' faces to passport photos for check-in, security, and boarding. Heathrow, Gatwick, and most major US airports now use biometric boarding on some routes. Processing is faster than manual checks.' },
              { icon: '&#x1F4E6;', title: 'CT baggage scanners', text: 'New CT scanners use AI to analyse 3D images of luggage and automatically flag prohibited items. Unlike older X-ray machines, these allow passengers to leave liquids in bags — the AI can identify them accurately.' },
              { icon: '&#x1F6C2;', title: 'Crowd management', text: 'AI models predict passenger flow through terminals using historical data, flight schedules, and real-time sensors. Airports use this to staff security lanes, open gates, and prevent bottlenecks before they happen.' },
              { icon: '&#x26A0;&#xFE0F;', title: 'The privacy debate', text: 'Biometric data at airports is sensitive. In the UK, use is regulated, and passengers can usually opt out. Civil liberties groups argue that widespread facial recognition normalises surveillance and creates risks for misidentification.' },
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

        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Smart hotels and the future of travel</h2>
          <p className="text-gray-600 leading-relaxed">
            AI is changing what happens once you arrive at your destination.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F3E8;',
                label: 'Smart hotel rooms',
                text: 'Some hotels now use AI to personalise room settings — adjusting temperature, lighting, and TV recommendations based on guest profiles. Marriott\'s AI chatbot handles service requests. Robot concierges (like Hilton\'s Connie, powered by IBM Watson) provide information and directions in hotel lobbies.',
              },
              {
                icon: '&#x1F69C;',
                label: 'Autonomous airport vehicles',
                text: 'AI-powered autonomous vehicles are being trialled for airside baggage transport and passenger buggies at airports including Heathrow and Singapore\'s Changi. Autonomous check-in kiosks powered by computer vision and natural language processing reduce queuing.',
              },
              {
                icon: '&#x1F4AC;',
                label: 'Language barriers',
                text: 'AI translation — through apps like Google Translate or earpiece translation devices — is making international travel more accessible for people who do not speak the local language. Real-time speech translation is still imperfect but has improved dramatically in the last five years.',
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

        <ReviewLaterButton lessonId="ai-and-travel" />
        <LessonNote lessonId="ai-and-travel" />

        <Quiz questions={quizQuestions} lessonId="ai-and-travel" lessonTitle="AI and travel" />

        <LessonFeedback lessonId="ai-and-travel" />
        <LessonRating lessonId="ai-and-travel" />
        <RelatedLessons currentId="ai-and-travel" />
        <NextLesson currentId="ai-and-travel" />
      </div>
    </div>
  )
}
