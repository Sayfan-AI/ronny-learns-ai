import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { ShareButton } from '../components/ShareButton'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is the main difference between Tesla Autopilot and Waymo?',
    options: [
      'Tesla cars can drive on motorways; Waymo cars can only drive in cities',
      'Tesla Autopilot is a driver assistance system requiring a human ready to take control; Waymo operates without a human driver in some areas',
      'Waymo uses cameras and Tesla uses radar, so they work differently in bad weather',
      'Tesla is fully autonomous and Waymo still requires a driver at all times',
    ],
    correctIndex: 1,
    explanation:
      "Tesla Autopilot and similar systems are Level 2 driver assistance — they handle steering and speed on suitable roads but require the driver to stay alert and ready to take over. Waymo's robotaxi service operates at Level 4 in specific mapped areas with no human driver needed.",
  },
  {
    question: 'How do smart traffic lights use AI to reduce congestion?',
    options: [
      'They turn green for emergency vehicles only',
      'They follow a fixed timer programmed by traffic engineers',
      'They analyse real-time traffic flow from cameras and sensors, adjusting green-light timing to move the most vehicles through',
      'They communicate directly with drivers via their car stereos',
    ],
    correctIndex: 2,
    explanation:
      'Traditional traffic lights follow preset timing cycles regardless of actual traffic levels. AI-powered lights — like those trialled in Pittsburgh and Birmingham — use cameras and sensors to measure queue lengths in real time, then dynamically adjust green phases to keep traffic flowing.',
  },
  {
    question: 'How does Google Maps predict your journey time so accurately?',
    options: [
      'It uses historical data only, averaged over many years',
      'It combines real-time GPS data from millions of phones, historical patterns, and live incident reports to estimate travel time',
      'It asks local councils for traffic counts every morning',
      'It uses satellite images taken every 10 minutes',
    ],
    correctIndex: 1,
    explanation:
      "Google Maps learns from anonymised, aggregated GPS signals sent by phones running the app. It combines this real-time flow data with years of historical traffic patterns and live incident reports (accidents, road works, events) to produce ETAs that update dynamically as conditions change.",
  },
  {
    question: 'What is one major challenge that still prevents self-driving cars from being used everywhere?',
    options: [
      'Self-driving cars cannot travel faster than 30 mph',
      'They require special roads with embedded sensors',
      'Edge cases — rare or unusual situations like heavy snow or unexpected pedestrian behaviour — that AI handles poorly',
      'Self-driving technology only works in countries that drive on the right',
    ],
    correctIndex: 2,
    explanation:
      "Self-driving systems perform well in well-mapped, predictable environments. The challenge is 'edge cases' — a person in a wheelchair crossing an unmarked road, heavy snow covering lane markings, or construction diverting traffic unexpectedly. These rare situations are disproportionately difficult for AI to handle safely.",
  },
]

export function AIAndTransport() {
  useMarkVisited('ai-and-transport')

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F697;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and transport
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Self-driving cars, smart traffic lights, AI journey planners, and the future
            of getting from A to B.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-transport" />
          <ShareButton lessonTitle="ai-and-transport" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Self-driving cars &mdash; where are we really?</h2>
          <p className="text-gray-600 leading-relaxed">
            You have probably heard about self-driving cars for years. The reality is more
            nuanced than the headlines suggest. Engineers use a scale from <strong>Level 0</strong>{' '}
            (no automation) to <strong>Level 5</strong> (fully autonomous in any conditions).
            Almost every car on the road today sits between Level 1 and Level 2.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F699;',
                label: 'Level 1 — Driver assistance',
                text: 'Single features like adaptive cruise control (the car adjusts speed automatically) or lane-keeping nudges. The driver is fully in control.',
              },
              {
                icon: '&#x1F698;',
                label: 'Level 2 — Partial automation',
                text: 'The car can steer, accelerate, and brake on suitable roads. Tesla Autopilot and GM Super Cruise work at this level. A human must stay alert and ready to take over at any moment.',
              },
              {
                icon: '&#x1F697;',
                label: 'Level 4 — High automation',
                text: "Waymo's robotaxi service in San Francisco and Phoenix operates here. No human driver is needed in specific mapped areas.",
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
          <div className="bg-sky-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-sky-800 text-sm">How does the AI see?</p>
            <p className="text-sky-700 text-sm leading-relaxed">
              Self-driving systems combine cameras (to read signs and lane markings), radar
              (to detect other vehicles in bad weather), and lidar (laser pulses that build
              a 3D map of surroundings). AI processes all three simultaneously &mdash; identifying
              pedestrians, cyclists, other cars, and obstacles in real time.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Smarter traffic lights</h2>
          <p className="text-gray-600 leading-relaxed">
            Traditional traffic lights follow fixed timing cycles regardless of whether there
            are 50 cars waiting or just two. AI changes that.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Smart traffic management systems place cameras and sensors at junctions to count
            vehicles and measure queue lengths in real time. AI adjusts green-light phases
            dynamically &mdash; extending them when a long queue builds up, shortening them when
            a road is clear.
          </p>
          <div className="bg-emerald-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-emerald-800 text-sm">Real example: Pittsburgh, USA</p>
            <p className="text-emerald-700 text-sm leading-relaxed">
              Carnegie Mellon University&apos;s Surtrac system was deployed at 50 intersections in
              Pittsburgh. It reduced average travel time by 25%, idling time by 40%, and vehicle
              emissions at those junctions by 20% &mdash; without changing the roads at all.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI journey planning</h2>
          <p className="text-gray-600 leading-relaxed">
            Every time you check Google Maps or Waze, AI is at work. These apps collect
            anonymised GPS data from millions of phones and use machine learning to build
            a live picture of road speed across the entire network.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CD;',
                label: 'Real-time routing',
                text: 'If an accident causes a jam, the app spots the slowdown within seconds (because GPS speeds on that road drop) and reroutes you before you even reach it.',
              },
              {
                icon: '&#x1F4C5;',
                label: 'ETA prediction',
                text: "The app learns that your commute on a Monday at 8 am is 15 minutes slower than on a Tuesday. It combines historical patterns with live data to give an ETA accurate to within a few minutes.",
              },
              {
                icon: '&#x1F68C;',
                label: 'Public transport integration',
                text: 'Apps like Citymapper combine bus and train schedules with real-time delay data, walking speeds, and live vehicle locations to plan multi-leg journeys.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Predictive maintenance on trains and planes</h2>
          <p className="text-gray-600 leading-relaxed">
            Trains and planes generate enormous amounts of sensor data &mdash; vibration, temperature,
            pressure, fuel consumption. Machine learning models analyse these streams to spot
            patterns that precede failures, alerting maintenance teams before a breakdown happens.
          </p>
          <div className="bg-amber-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-amber-800 text-sm">Real example: Network Rail, UK</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              Network Rail uses AI to analyse data from sensors fitted to tracks and trains,
              identifying stretches of track likely to crack or buckle before they actually do.
              This is estimated to prevent thousands of delays per year by scheduling repairs
              during planned maintenance windows instead of emergency callouts.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What is still hard</h2>
          <p className="text-gray-600 leading-relaxed">
            Despite rapid progress, fully autonomous driving faces real obstacles:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed">
            <li><strong>Edge cases</strong> &mdash; rare situations (a child running into the road, construction rerouting traffic) that AI handles poorly because it has seen few examples</li>
            <li><strong>Bad weather</strong> &mdash; heavy rain, snow, and fog reduce sensor reliability</li>
            <li><strong>Mapping dependency</strong> &mdash; many systems rely on detailed pre-built maps; an unmapped road is a problem</li>
            <li><strong>Legal liability</strong> &mdash; who is responsible when an autonomous vehicle causes an accident? Regulation is still catching up</li>
            <li><strong>Job displacement</strong> &mdash; if autonomous lorries and taxis become mainstream, millions of professional drivers could be affected</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The big picture</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-sky-50 border border-sky-100 rounded-xl p-4">
              <p className="font-semibold text-sky-800 text-sm mb-2">Where AI is helping</p>
              <ul className="text-sky-700 text-sm space-y-1 leading-relaxed">
                <li>Reducing accidents caused by human error</li>
                <li>Cutting congestion with smarter traffic signals</li>
                <li>More accurate, real-time journey planning</li>
                <li>Preventing transport breakdowns before they happen</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-semibold text-orange-800 text-sm mb-2">Where caution is needed</p>
              <ul className="text-orange-700 text-sm space-y-1 leading-relaxed">
                <li>Liability when autonomous vehicles cause harm</li>
                <li>Job displacement for professional drivers</li>
                <li>Privacy concerns from constant location tracking</li>
                <li>Over-reliance on systems that can fail</li>
              </ul>
            </div>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-transport" />
        <LessonNote lessonId="ai-and-transport" />

        <Quiz questions={quizQuestions} lessonId="ai-and-transport" lessonTitle="AI and transport" />

        <LessonRating lessonId="ai-and-transport" />
        <RelatedLessons currentId="ai-and-transport" />
        <NextLesson currentId="ai-and-transport" />
      </div>
    </div>
  )
}
