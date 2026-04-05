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
  'Self-driving cars use cameras, lidar (laser sensors), radar, and GPS together to build a real-time 3D picture of everything around them — other vehicles, pedestrians, road markings, and obstacles — dozens of times per second.',
  'There are six levels of vehicle autonomy (SAE levels 0 to 5). Most cars on UK roads today are at level 2, where the car can steer and accelerate but the driver must stay alert. True full self-driving (level 5) does not yet exist commercially.',
  "The most advanced self-driving vehicles in public use are robotaxis from Waymo, which operate in parts of the USA collecting fares with no safety driver in the front seat.",
  'Autonomous vehicles can still struggle in heavy rain, snow, unusual road layouts, and situations a human handles intuitively. Making them reliable in every possible scenario is the hardest remaining challenge.',
  'The UK has been progressive on autonomous vehicle law — the Automated Vehicles Act 2024 created a framework that shifts legal responsibility to the manufacturer when the car is driving itself.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'Which combination of sensors do self-driving cars typically rely on to perceive their surroundings?',
    options: [
      'GPS and satellite imagery updated every few minutes, combined with a detailed pre-loaded map of every road',
      'Cameras, lidar (laser-based distance sensors), radar, and GPS working together to build a real-time 3D picture',
      'Only high-resolution cameras, since modern image recognition AI is accurate enough to replace all other sensors',
      'Microphones and vibration sensors that detect the sound of nearby vehicles to determine their position',
    ],
    correctIndex: 1,
    explanation:
      'Self-driving cars use several complementary sensor types because each has strengths the others lack. Cameras provide rich visual detail and can read road signs and traffic lights. Lidar fires thousands of laser pulses per second to measure precise distances, creating a 3D point cloud. Radar works well in rain and fog and measures the speed of other vehicles accurately. GPS provides position on a map. The AI fuses all this data together in real time to understand the scene and make driving decisions.',
    hint: 'Think about why you might need more than one way to sense the world.',
  },
  {
    question: 'What does SAE Level 2 autonomy mean for a driver?',
    options: [
      'The car drives itself completely on motorways — the driver can read or watch a film without monitoring the road',
      'The car can control both steering and speed simultaneously, but the driver must stay alert and ready to take over at any moment',
      'The car handles all driving in urban areas up to 30 mph but requires the driver to take control on faster roads',
      'The car is fully autonomous and legally responsible for all decisions — the driver has no obligation to pay attention',
    ],
    correctIndex: 1,
    explanation:
      "SAE Level 2 is 'partial automation'. The car can simultaneously control steering and speed — for example, keeping within a motorway lane while maintaining a safe gap to the car ahead. But it is not self-driving: the driver must remain in the seat, keep their hands available, watch the road, and take control immediately if needed. Most current driver assistance features (Tesla Autopilot in standard mode, lane-keeping systems in new cars) are Level 2. The jump to Level 3 — where the driver can genuinely look away for a period — requires much more rigorous testing and legal frameworks.",
    hint: 'Think about who is still responsible for the driving at Level 2.',
  },
  {
    question: 'Which company operates fully driverless robotaxis that members of the public can book and ride without any human safety driver?',
    options: [
      'Tesla, through its Full Self-Driving subscription, which allows owners to summon their car without being in it',
      'Waymo, which runs a commercial driverless taxi service in parts of the United States with no safety driver in the vehicle',
      'Uber, which launched a fully autonomous ride-hailing service in major European cities in 2023',
      'BMW, through a partnership with the German government to run autonomous taxis on selected autobahn routes',
    ],
    correctIndex: 1,
    explanation:
      "Waymo (owned by Alphabet, Google's parent company) has been operating fully driverless public robotaxi services in Phoenix and San Francisco. Members of the public can book rides through the Waymo One app and travel in a car with no human in the front seat. Tesla's Full Self-Driving still requires driver supervision in most countries. No European commercial driverless taxi service of this kind exists at scale yet, though pilots are underway in several countries.",
    hint: 'This company is part of the same group as Google.',
  },
  {
    question: 'What is one of the most significant remaining technical challenges for self-driving vehicles?',
    options: [
      'Generating enough electricity — current batteries cannot power both the AI systems and the motor at highway speeds',
      'Performing reliably in all conditions, including heavy rain, snow, unusual junctions, and unpredictable situations a human handles intuitively',
      'Communicating with traffic lights — no standardised wireless protocol yet allows a car to read traffic signal data directly',
      'Processing speed — current chips are too slow to analyse camera feeds in real time, so systems operate on a delay',
    ],
    correctIndex: 1,
    explanation:
      "The core challenge is 'edge cases' — rare or unusual situations that come up unpredictably on real roads. A human driver can often reason through a new situation using common sense. AI trained on data can fail in scenarios it has not encountered before: heavy snow obscuring road markings, a person directing traffic by hand, a ball rolling into the road. Making a system that handles every possible situation safely is the fundamental unsolved problem. Waymo's safety record is impressive in its operating areas, but perfecting autonomous driving for all conditions everywhere is very hard.",
    hint: "Think about what confuses a system that learned from data but hasn't seen every possible scenario.",
  },
  {
    question: "What did the UK's Automated Vehicles Act 2024 establish?",
    options: [
      'A complete ban on self-driving vehicles on public roads until international safety standards are agreed',
      'A legal framework that shifts responsibility to the manufacturer when an automated system is driving, and allows certain automated features on motorways',
      'A requirement for all autonomous vehicles to be tested only on closed tracks before any public road use',
      'A government-run programme to deploy Level 5 fully autonomous taxis in London by 2027',
    ],
    correctIndex: 1,
    explanation:
      "The Automated Vehicles Act 2024 was a significant step. It clarified who is legally responsible when an automated driving system is in control — the answer is the manufacturer or developer, not the driver. This is crucial for public trust and insurance. The Act also updated the Highway Code to allow automated lane-keeping systems on motorways at low speeds. The UK has tried to be commercially attractive for autonomous vehicle development — clearer regulation than many European countries, while maintaining genuine safety requirements.",
    hint: 'Think about what changes when the car, not the driver, is legally in control.',
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
            Self-driving cars, robotaxis, and the six levels of autonomy explained — how AI
            perceives the road, who is doing it today, and what is coming next.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-autonomous-vehicles" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The dream of the self-driving car</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The idea of a car that drives itself has been in science fiction for decades. In the 2010s, it felt imminent. In practice, it has turned out to be one of the hardest AI problems ever attempted — but real progress is being made.
          </p>
          <div className="space-y-2">
            {[
              'Around 1.35 million people die in road accidents worldwide every year — the vast majority caused by human error',
              "Waymo has driven over 20 million miles autonomously on public roads and operates commercial driverless taxis today",
              'The UK\'s Automated Vehicles Act 2024 is one of the world\'s most advanced legal frameworks for self-driving cars',
              'Autonomous lorries on motorways are expected to arrive commercially before fully self-driving urban cars — motorways are simpler environments',
              'The global autonomous vehicle market is projected to be worth over £500 billion by 2035',
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
            A self-driving car does not see the road the way you do. It builds a detailed 3D model of its surroundings using multiple sensor types simultaneously — each filling in the gaps the others leave.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F7;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Cameras</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Multiple cameras mounted around the vehicle provide rich visual data — reading road signs, identifying traffic lights, distinguishing pedestrians from cyclists. AI processes these feeds using computer vision trained on hundreds of millions of labelled images. Tesla's approach relies heavily on cameras, arguing the AI can learn to drive from vision alone the way humans do.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F9ED;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Lidar (Light Detection and Ranging)</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Lidar fires thousands of laser pulses per second in all directions and measures how long each takes to bounce back. This creates a detailed 3D point cloud of everything within range — precise to a few centimetres. You can see the exact shape of a pedestrian, the position of a kerb, or a plastic bag blowing across the road. Lidar works in darkness and provides depth information cameras cannot match.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4E1;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Radar and GPS</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Radar measures the speed and distance of other vehicles even in rain, fog, and snow that can blind cameras. GPS provides the car's position on a map. Modern self-driving systems use high-definition maps showing lane markings, speed limits, and road geometry in far more detail than consumer sat-nav, helping the AI know exactly where it is even when sensor readings are ambiguous.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The six levels of autonomy explained</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The SAE defined six levels of vehicle automation. Most people misunderstand what level their car is at — and the differences matter enormously for safety.
          </p>
          <div className="space-y-2">
            {[
              { level: 'L0', label: 'No automation', desc: 'You do everything. The car may warn you (collision alerts) but does not act.' },
              { level: 'L1', label: 'Driver assistance', desc: 'One automated function at a time — either steering or speed, but not both simultaneously.' },
              { level: 'L2', label: 'Partial automation', desc: 'Steering and speed can both be automated simultaneously. Driver must stay alert and ready to take over immediately. Most new cars today.' },
              { level: 'L3', label: 'Conditional automation', desc: "The car drives itself in specific conditions and the driver can look away briefly — but must be ready to take over when asked. Just becoming commercially available." },
              { level: 'L4', label: 'High automation', desc: "Fully self-driving in defined areas or conditions. No human needed within those zones. Waymo's robotaxis operate at this level." },
              { level: 'L5', label: 'Full automation', desc: 'Drives itself everywhere, in any condition, with no steering wheel needed. Does not commercially exist anywhere yet.' },
            ].map(({ level, label, desc }) => (
              <div key={level} className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
                <span className="text-xs font-bold text-green-800 dark:text-green-200 bg-green-200 dark:bg-green-800 rounded-full px-2 py-1 flex-shrink-0 mt-0.5 whitespace-nowrap">{level}</span>
                <div>
                  <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">{label}</p>
                  <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Who is doing what today</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Several companies are at different stages of deploying autonomous vehicles commercially.
          </p>
          <div className="space-y-3">
            {[
              { name: 'Waymo', desc: "Operating fully driverless robotaxis in Phoenix and San Francisco. Members of the public can book rides with no human in the front seat. Waymo's safety data suggests its vehicles have a lower serious collision rate than human drivers in comparable conditions." },
              { name: 'Tesla', desc: "Tesla's Autopilot is Level 2 — the driver must supervise. Its Full Self-Driving (FSD) package is more capable but legally still requires driver supervision in most countries. Tesla's approach of learning from millions of customer vehicles gives it an enormous dataset advantage." },
              { name: 'Cruise (GM)', desc: "Operated driverless robotaxis in San Francisco before a serious incident in 2023 led to its permit being suspended. Cruise is rebuilding its safety processes — a reminder that real-world deployment involves genuine risk and public trust is easily lost." },
              { name: 'Autonomous lorries', desc: "Companies like Kodiak Robotics and Gatik are testing autonomous heavy goods vehicles on motorways and fixed delivery routes. Motorways have fewer unpredictable elements than city streets, making this an earlier commercial target." },
            ].map(({ name, desc }) => (
              <div key={name} className="flex gap-3 items-start bg-purple-50 dark:bg-purple-950 rounded-xl p-3">
                <div>
                  <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-0.5">{name}</p>
                  <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Safety and honest expectations</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Autonomous vehicles are sometimes held to an impossibly high standard — any incident makes headlines, while 1.35 million annual human-caused road deaths barely register.
          </p>
          <div className="space-y-2">
            {[
              "Waymo's public data suggests its vehicles have a lower rate of serious injury collisions per mile than human drivers in the same areas — a significant achievement",
              'Current systems can struggle in heavy snow, flooded roads, temporary construction signage, or a police officer directing traffic by hand',
              'Most Tesla Autopilot incidents have involved drivers misusing it — treating Level 2 as if it were fully autonomous',
              'The Automated Vehicles Act 2024 shifts legal responsibility to the manufacturer when the automated system is driving — a crucial step for public trust',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-amber-600 dark:text-amber-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 dark:bg-amber-950 rounded-xl p-4">
            <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
              <span className="font-semibold">The realistic timeline:</span> Full Level 5 autonomy everywhere is likely decades away. But geographically-constrained autonomy — robotaxis in mapped cities, autonomous motorway driving, delivery robots — is happening now and will expand significantly through the late 2020s.
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
