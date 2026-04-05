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

const LESSON_TITLE = 'AI and autonomous vehicles'

const KEY_TAKEAWAYS = [
  'Self-driving cars use cameras, radar, lidar, and GPS — all processed by AI in real time — to build a picture of their surroundings and make split-second decisions.',
  'There are six levels of vehicle autonomy (0 to 5). Most cars today are at level 1 or 2. Fully self-driving cars without any human oversight (level 5) do not yet exist commercially.',
  "Waymo (owned by Google's parent Alphabet) runs paid robotaxi services in parts of the US without a safety driver — a genuine level 4 achievement.",
  'Safety is the central challenge — self-driving cars must handle unpredictable human behaviour, bad weather, and unusual scenarios not in their training data.',
  'AI driver assistance (automatic braking, lane-keeping, adaptive cruise control) is already in millions of cars today and is measurably reducing accidents.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What combination of sensors do most advanced self-driving cars rely on?',
    options: [
      'GPS and mobile network data alone — the car downloads a live map of nearby traffic',
      'Cameras, radar, lidar, and GPS — each sensor fills gaps the others cannot handle',
      'Only high-definition cameras — modern AI vision is accurate enough',
      'Infrared sensors and sonar — the same technology used in submarines',
    ],
    correctIndex: 1,
    explanation:
      'No single sensor is reliable enough on its own. Cameras give rich visual detail but struggle in rain or glare. Radar works in bad weather and measures speed. Lidar builds precise 3D maps. GPS locates the car on a detailed map. By fusing all four, the car gets a robust picture — if one sensor gives a bad reading, the others compensate.',
    hint: 'Think about why a single sensor might not be enough in all weather.',
  },
  {
    question: 'At which level of autonomy does a car drive itself completely in all conditions with no human needed?',
    options: [
      'Level 2 — the car controls steering and speed, the driver just watches',
      'Level 3 — the car drives on motorways but needs the driver ready to take over',
      'Level 4 — fully self-driving in a defined area, but not everywhere',
      'Level 5 — full automation in all conditions, no steering wheel required',
    ],
    correctIndex: 3,
    explanation:
      "The SAE defines six levels. Level 0 is no automation. Levels 1 and 2 assist the driver but require constant supervision. Level 3 lets the car drive but requires the human to be ready to take over. Level 4 is fully self-driving within a defined operating area — Waymo's robotaxis. Level 5 is the full vision: any road, any weather, no human needed. No car has reached level 5 commercially.",
    hint: 'Think about which level means absolutely no human is needed, ever.',
  },
  {
    question: "What makes Waymo's robotaxi service significant?",
    options: [
      'It is the first service to achieve level 5 autonomy globally in all weather',
      'It operates paid rides in US cities with no safety driver — level 4 autonomy at commercial scale',
      'It uses entirely solar-powered vehicles and replaced all traditional taxis in San Francisco',
      'It is the cheapest taxi service in the US',
    ],
    correctIndex: 1,
    explanation:
      'Waymo runs paid rides in Phoenix and San Francisco with nobody behind the wheel. Real customers, real cities, no human driver. The service is geofenced — the car only travels routes it has been extensively tested on — and there are remote operators who can assist if needed. But the car handles all normal driving. This is level 4 autonomy at commercial scale.',
    hint: 'Think about what is missing from the front seat of a Waymo car.',
  },
  {
    question: 'Why is the "edge case" problem one of the hardest challenges for self-driving cars?',
    options: [
      'Edge cases involve driving near the edges of motorways where lane markings are often faded',
      'AI performs well on common scenarios but can fail on rare situations it has not been trained on',
      'Edge cases refer to driving in remote areas where GPS signals are weak',
      'The problem relates to sharp kerb edges that lidar sensors cannot detect',
    ],
    correctIndex: 1,
    explanation:
      'AI learns from data — it is good at situations it has seen many times and less reliable on ones it has not. A car might handle thousands of normal junctions perfectly but be confused by a wheelchair user in the road, a collapsed tree, or a police officer waving traffic against a red light. These edge cases are individually rare but collectively frequent. Humans use common sense; AI uses pattern matching — and if the pattern is new, the car may not know what to do.',
    hint: 'Think about what happens when the world presents a situation the AI has never trained on.',
  },
  {
    question: 'Which driver assistance features are already in many new cars today?',
    options: [
      'Full autonomous motorway driving and self-parking in any car park without supervision',
      'Automatic emergency braking, lane-keeping assist, adaptive cruise control, and drowsiness detection',
      'Voice-activated navigation only — other AI features require level 3 certification',
      'Nothing yet — AI driver assistance is still in testing',
    ],
    correctIndex: 1,
    explanation:
      'Autonomous driving may be years away but AI assistance is already widespread. Automatic Emergency Braking (AEB) has been estimated to cut rear-end collisions by 50%. Lane-keeping assist gently steers you back if you drift. Adaptive cruise control maintains a safe gap from the car ahead. Drowsiness detection monitors steering patterns and eye movements. These level 1 and 2 features are standard in most new cars and are measurably saving lives right now.',
    hint: 'Think about features that help drivers today, not ones that replace them entirely.',
  },
]

export function AIAndAutonomousVehicles() {
  useMarkVisited('ai-and-autonomous-vehicles')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F697;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and autonomous vehicles
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Self-driving cars, how they work, the safety challenge, the six levels of autonomy,
            and what is already in your car today.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-autonomous-vehicles" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The promise and the reality</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            For most of the 2010s, tech companies promised fully self-driving cars were "just a few years away." It turned out to be harder than expected. Yet real progress has happened — and the technology that exists today is already saving lives.
          </p>
          <div className="space-y-2">
            {[
              'Over 1.35 million people die in road accidents globally each year — around 93% of crashes involve human error',
              'If self-driving cars replaced human drivers, the potential to reduce road deaths is enormous',
              'The first truly autonomous vehicle tests started at DARPA challenges in the US desert in the early 2000s',
              'By 2023, Waymo had completed over 7 million miles of fully driverless rides in US cities',
              'Tesla has logged over 500 million miles of Autopilot data — one of the largest AI driving datasets in existence',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-slate-600 dark:text-slate-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How a self-driving car sees the world</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            A self-driving car does not see the world like a human. It uses multiple overlapping sensors — each with different strengths — and fuses them together using AI.
          </p>
          <div className="space-y-3">
            {[
              { icon: '&#x1F4F7;', label: 'Cameras', text: 'Provide rich visual detail — lane markings, traffic lights, signs, pedestrians. But they struggle in heavy rain, fog, glare, and darkness.' },
              { icon: '&#x1F4E1;', label: 'Radar', text: 'Radio waves bounce off objects to measure distance and speed. Works well in all weather — great for detecting how fast nearby vehicles are moving.' },
              { icon: '&#x1F50D;', label: 'Lidar', text: 'Pulsed laser beams create a precise 3D map of nearby objects. Extremely accurate but expensive and can be disrupted by heavy rain or snow.' },
              { icon: '&#x1F4CD;', label: 'GPS and HD maps', text: 'High-definition maps store lane-level detail. GPS locates the car on that map to within centimetres.' },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">{label}</p>
                  <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The six levels of autonomy</h2>
          <div className="space-y-2">
            {[
              { level: 'Level 0', name: 'No automation', desc: 'A conventional car. The human controls everything.' },
              { level: 'Level 1', name: 'Driver assistance', desc: 'One automated system — cruise control or lane-keeping, but not both together.' },
              { level: 'Level 2', name: 'Partial automation', desc: 'Steers and brakes together (e.g. Tesla Autopilot). The driver must watch the road and be ready to take over instantly.' },
              { level: 'Level 3', name: 'Conditional automation', desc: 'The car drives itself in certain conditions. The driver can look away but must be ready to take over on request.' },
              { level: 'Level 4', name: 'High automation', desc: "Fully self-driving within a defined area. Waymo's robotaxis operate here. No human needed within that zone." },
              { level: 'Level 5', name: 'Full automation', desc: 'Any road, any weather, any condition. No steering wheel needed. This does not yet exist commercially.' },
            ].map(({ level, name, desc }) => (
              <div key={level} className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
                <span className="text-xs font-bold text-green-700 dark:text-green-300 bg-green-200 dark:bg-green-800 px-2 py-1 rounded-full flex-shrink-0 mt-0.5">{level}</span>
                <div>
                  <p className="font-semibold text-green-800 dark:text-green-200 text-sm">{name}</p>
                  <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Why it is harder than expected</h2>
          <div className="space-y-2">
            {[
              'Edge cases: unusual situations — fallen trees, people in fancy dress, hand signals from road workers — that the AI has not been trained on',
              'Unpredictable humans: pedestrians on phones, cyclists running red lights, drivers who cut in without signalling',
              'Bad weather: rain, snow, fog, and bright sunlight all degrade sensors',
              'Legal frameworks: governments are still writing the laws for who is liable when a self-driving car causes an accident',
              'Public trust: one well-publicised accident sets back acceptance, even if the technology is statistically safer than human driving',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-amber-600 dark:text-amber-400 font-bold mt-0.5 flex-shrink-0">&#x26A0;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-teal-100 dark:border-teal-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">What is already in most new cars</h2>
          <div className="space-y-2">
            {[
              'Automatic Emergency Braking — detects obstacles and brakes automatically if the driver does not react in time',
              'Lane-Keeping Assist — warns you if you drift out of lane and can gently steer you back',
              'Adaptive Cruise Control — maintains a safe following distance from the car ahead',
              'Driver Attention Monitoring — detects drowsiness from steering patterns and eye movement',
              'Blind Spot Monitoring — warns you when a vehicle is alongside you in your blind spot',
              'Parking Assist — steers the car into a space while you control the pedals',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-teal-600 dark:text-teal-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-teal-50 dark:bg-teal-950 rounded-xl p-4">
            <p className="text-teal-700 dark:text-teal-300 text-sm leading-relaxed">
              <span className="font-semibold">The safety numbers are real:</span> Automatic Emergency Braking alone is estimated to reduce rear-end collisions by 50%. These incremental improvements are saving thousands of lives each year — without waiting for full autonomy.
            </p>
          </div>
        </div>

        <LessonNote lessonId="ai-and-autonomous-vehicles" />
        <ReviewLaterButton lessonId="ai-and-autonomous-vehicles" />

        <Quiz lessonId="ai-and-autonomous-vehicles" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-autonomous-vehicles" />
        <LessonFeedback lessonId="ai-and-autonomous-vehicles" />

        <RelatedLessons currentId="ai-and-autonomous-vehicles" />

        <NextLesson currentId="ai-and-autonomous-vehicles" />

      </div>
    </div>
  )
}
