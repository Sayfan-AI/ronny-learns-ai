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

const LESSON_TITLE = 'AI and space exploration'

const KEY_TAKEAWAYS = [
  'NASA\'s Perseverance rover uses AI to navigate the Martian terrain autonomously — selecting its own route, avoiding hazards, and choosing which rocks to investigate without waiting for instructions from Earth (signals take up to 24 minutes each way).',
  'AI analyses light curves from the Kepler and TESS space telescopes to detect exoplanets — finding tiny dips in starlight caused by a planet passing in front of its star that human reviewers would miss.',
  'Satellite constellations like Starlink (with over 6,000 satellites) rely on AI to manage orbital paths and perform automatic collision avoidance manoeuvres — human operators could never manage this complexity.',
  'AI tracks over 27,000 pieces of space debris and predicts collision risks for the ISS and active satellites — the ISS performs an average of three debris avoidance manoeuvres per year.',
  'The UK Space Agency, Scotland\'s Sutherland spaceport, and the Goonhilly Earth Station in Cornwall are all part of a growing UK space sector in which AI plays a central role.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'Why does the Perseverance rover need AI to navigate Mars autonomously?',
    options: [
      'Mars has no GPS network, so the rover cannot use satellite navigation and must use AI to build its own map from scratch',
      'Radio signals between Earth and Mars take up to 24 minutes each way, making real-time human control impossible — the rover must make its own navigation decisions',
      'The Martian atmosphere causes radio interference so severe that communication with Earth is only possible for a few hours each day',
      'NASA uses AI to reduce mission costs — human operators are too expensive to employ full-time for a multi-year mission',
    ],
    correctIndex: 1,
    explanation:
      'The distance between Earth and Mars varies as both planets orbit the Sun, but at its greatest the one-way travel time for a radio signal is around 24 minutes. This means there is a delay of up to 48 minutes between sending a command and receiving a response. For a rover navigating rocky, uneven terrain, this delay makes real-time human piloting completely impractical — the rover would crash long before a human could intervene. Perseverance uses a navigation AI called AutoNav that processes stereoscopic camera images, creates a 3D map of its surroundings, and autonomously plans a safe path around obstacles. The rover can travel several hundred metres in a single day without waiting for human instructions for each step.',
    hint: 'Think about what happens when you need to react quickly but communication takes a very long time.',
  },
  {
    question: 'How does AI help discover exoplanets (planets outside our solar system)?',
    options: [
      'AI controls radio telescopes that listen for signals from alien civilisations on planets that AI has identified as potentially habitable',
      'AI analyses light curves from space telescopes, detecting tiny regular dips in starlight that indicate a planet passing in front of its star',
      'AI enhances photographs taken by space telescopes to resolve enough detail to directly see planets orbiting distant stars',
      'AI calculates gravitational effects that planets have on nearby stars, using tiny wobbles in star positions to infer the presence of orbiting planets',
    ],
    correctIndex: 1,
    explanation:
      'The transit method is the most productive technique for finding exoplanets. When a planet orbits between its star and our telescopes, it blocks a tiny fraction of the star\'s light — typically a drop of less than 1%. Telescopes like Kepler and TESS capture the brightness of hundreds of thousands of stars simultaneously over months and years, generating enormous datasets of light curves (graphs of brightness over time). AI trained on confirmed exoplanet transits can scan these datasets and identify the characteristic patterns of a planet transit — patterns that human reviewers would take months to find manually and would inevitably miss. Google\'s AI collaboration with NASA found two previously undetected exoplanets in the Kepler data — planets the human analysis had missed.',
    hint: 'Think about how a planet passing in front of a star would affect the light we receive from that star.',
  },
  {
    question: 'How does AI manage satellite constellations like Starlink?',
    options: [
      'AI designs the satellites before launch, optimising their solar panel angles and antenna positions for maximum efficiency in their planned orbits',
      'AI manages the orbital paths of thousands of satellites simultaneously, performing automatic collision avoidance manoeuvres that would be impossible for human operators to handle manually',
      'AI monitors satellite signal quality from the ground and automatically reroutes internet traffic when a satellite experiences interference or technical problems',
      'AI controls the manufacturing process for new satellites, enabling SpaceX to produce them faster and cheaper than any other space company',
    ],
    correctIndex: 1,
    explanation:
      'As of 2025, Starlink has over 6,000 satellites in low Earth orbit — and SpaceX plans to eventually have tens of thousands. Each satellite must maintain its orbital position while avoiding collisions with other Starlink satellites, satellites from other operators, and space debris. The mathematics of predicting and avoiding collisions across thousands of objects simultaneously is simply beyond human operators. Starlink\'s AI systems monitor all satellite positions continuously, predict future trajectories, detect potential conjunctions (close approaches), and automatically fire thrusters to adjust orbits before a collision becomes possible. Each Starlink satellite performs hundreds of these autonomous manoeuvres per year.',
    hint: 'Think about what a human operator could manage versus what is needed for thousands of satellites.',
  },
  {
    question: 'What does AI do to protect the International Space Station from space debris?',
    options: [
      'AI controls a debris-removal spacecraft that launches automatically when a collision risk is detected and pushes large debris fragments into a safe disposal orbit',
      'AI tracks debris objects and calculates predicted collision risks, giving NASA and ESA time to plan and execute debris avoidance manoeuvres for the ISS',
      'AI-controlled shields on the ISS automatically deploy when debris is detected approaching at high speed, protecting vulnerable sections of the station',
      'AI operates a ground-based laser system that vaporises small debris fragments before they can reach the ISS altitude',
    ],
    correctIndex: 1,
    explanation:
      'There are over 27,000 tracked pieces of debris in Earth\'s orbit — ranging from defunct satellites to fragments of rocket bodies to nuts and bolts from previous collisions. At orbital speeds (around 28,000 km/h), even a small fragment can cause catastrophic damage. The US Space Surveillance Network tracks these objects using radar and optical telescopes, and AI analyses the data to calculate conjunction warnings — predictions of when a tracked debris object will pass close to the ISS. If the probability of collision exceeds a threshold, flight controllers plan a Debris Avoidance Manoeuvre (DAM) — using the engines of a docked spacecraft to boost the ISS to a slightly higher or lower orbit. The ISS performs an average of three such manoeuvres per year.',
    hint: 'Think about how you predict and respond to a potential collision before it happens.',
  },
  {
    question: 'What is the UK\'s role in the space industry and how does AI feature in it?',
    options: [
      'The UK does not have its own space programme — it relies entirely on the European Space Agency and NASA for all space activity',
      'The UK Space Agency, Scotland\'s Sutherland spaceport, and the Goonhilly Earth Station in Cornwall are all part of a growing UK space sector where AI is central to operations and mission design',
      'The UK leads global space exploration through its ownership of the world\'s most advanced space telescope, the Goonhilly Array, which uses AI to scan for extraterrestrial intelligence',
      'The UK primarily participates in space through manufacturing satellites for other countries, with AI used in the production process to reduce manufacturing costs',
    ],
    correctIndex: 1,
    explanation:
      'The UK has a growing and ambitious space sector. The UK Space Agency coordinates national space policy and funds research and development. Goonhilly Earth Station in Cornwall — the UK\'s major deep space communications facility — uses AI for signal processing and data management for missions including Artemis lunar programmes. Scotland is home to more small satellite manufacturers than any other country outside the USA, and the Sutherland spaceport in the Scottish Highlands aims to be the first UK launch site for commercial rockets into orbit. UK companies including SSTL (Surrey Satellite Technology Ltd) and Astroscale (UK operations) are developing AI-powered services including debris removal and on-orbit servicing. The UK space sector employs over 47,000 people and generates around £17 billion for the economy each year.',
    hint: 'Think about what space infrastructure already exists in the UK and what the government is building.',
  },
]

export function AIAndSpaceExploration() {
  useMarkVisited('ai-and-space-exploration')

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F680;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and space exploration
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            From Mars rovers that navigate autonomously to AI that discovers new planets — how artificial
            intelligence is transforming what we can explore beyond Earth, and what the UK is doing in space.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-space-exploration" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Why AI and space are a natural fit</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Space exploration generates more data than humans can analyse, involves distances and time delays that make real-time human control impossible, and requires managing complexity far beyond any human team. AI is not just useful in space — it is essential.
          </p>
          <div className="space-y-2">
            {[
              'The James Webb Space Telescope generates around 57 gigabytes of data every day — AI is needed to process and prioritise it',
              'Mars is between 55 and 401 million km from Earth depending on orbital position — communication delays make real-time control impossible',
              'There are over 27,000 tracked objects in Earth\'s orbit, with millions more untracked — AI is the only practical way to manage this',
              'The Kepler space telescope catalogued over 530,000 stars — human review of all the data would take centuries',
              'AI is increasingly being used to design spacecraft components, plan missions, and simulate outcomes — accelerating the pace of space exploration',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Mars rovers — AI on another planet</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Perseverance is the most AI-capable Mars rover ever built. It operates millions of kilometres from Earth with no possibility of real-time control.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F916;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">AutoNav — autonomous navigation</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Perseverance uses stereoscopic cameras to build a 3D model of its immediate surroundings. AutoNav processes this model and plans a path to its target, automatically avoiding hazards — boulders, slopes, loose soil. It can drive faster than previous rovers because it does not need to stop and wait for Earth approval at every metre.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1FA99;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">AEGIS — autonomous rock selection</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">AEGIS (Autonomous Exploration for Gathering Increased Science) allows the rover to independently select which rocks to zap with its laser for chemical analysis. Scientists define the characteristics of interest — rock type, texture, colour — and AEGIS identifies the best targets in the rover's field of view without waiting for human instruction. This means far more science can be done in the same mission time.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Ingenuity — AI-controlled flight on another world</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Perseverance arrived on Mars with a companion: Ingenuity, a small helicopter that made history as the first powered flight on another planet.
          </p>
          <div className="bg-purple-50 dark:bg-purple-950 rounded-xl p-4">
            <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">
              Ingenuity cannot be piloted from Earth in real time — the delay is too long. Instead, each flight is pre-planned and uploaded to the helicopter, which then flies autonomously using onboard AI to maintain stability in the thin Martian atmosphere (about 1% as dense as Earth's). Ingenuity completed over 70 flights before ending its mission in early 2024, proving that AI-controlled aerial reconnaissance on other planets is possible — a capability that will be crucial for future Mars missions.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The UK in space</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The UK has a significant and growing presence in the space sector — and AI is central to it.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F1EC;&#x1F1E7;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Goonhilly Earth Station, Cornwall</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Goonhilly is the UK's major deep space communications facility. Its giant dish antennas communicate with spacecraft throughout the solar system. It is playing a growing role in NASA's Artemis lunar programme, using AI for signal processing to communicate with spacecraft at extreme distances.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F3F4;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Sutherland Spaceport, Scotland</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Scotland's Sutherland spaceport aims to be the UK's first operational orbital launch site. Scotland already manufactures more small satellites than any country outside the USA. AI is used throughout the design, testing, and operation of these satellites.</p>
              </div>
            </div>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-space-exploration" />
        <LessonNote lessonId="ai-and-space-exploration" />

        <Quiz questions={quizQuestions} lessonId="ai-and-space-exploration" />

        <LessonRating lessonId="ai-and-space-exploration" />
        <LessonFeedback lessonId="ai-and-space-exploration" />

        <RelatedLessons currentId="ai-and-space-exploration" />

        <NextLesson currentId="ai-and-space-exploration" />
      </div>
    </div>
  )
}
