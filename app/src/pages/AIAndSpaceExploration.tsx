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

const LESSON_TITLE = 'AI and space exploration'

const KEY_TAKEAWAYS = [
  "Mars rovers like Curiosity and Perseverance use onboard AI to navigate rocky terrain, avoid hazards, and decide which rocks are worth analysing — because the 20-minute communication delay to Earth makes real-time human control impossible.",
  "Space telescopes generate more data than humans could ever manually review — AI sifts through millions of images to find new planets, classify galaxies, and spot transient events like supernovae within seconds of them happening.",
  "AI helps satellite operators manage constellations of hundreds or thousands of satellites, scheduling manoeuvres to avoid collisions, optimising orbits, and predicting when components might fail.",
  'SpaceX, Rocket Lab, and other launch companies use AI to control rocket landings, optimise fuel burn, and run real-time diagnostics during flight — tasks that require millisecond decisions impossible for human operators.',
  "The search for extraterrestrial intelligence (SETI) uses AI to scan radio telescope data for signals that do not match natural patterns — analysing in hours what would take human researchers years.",
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'Why do Mars rovers need onboard AI to navigate, rather than being controlled directly by humans on Earth?',
    options: [
      'AI is cheaper to build than human-operated remote control systems',
      'The approximately 20-minute communication delay between Earth and Mars makes real-time human control impossible — the rover must make decisions itself',
      'NASA regulations require all planetary vehicles to be fully autonomous by law',
      'Human operators on Earth cannot see the terrain clearly enough through the rover cameras to steer it safely',
    ],
    correctIndex: 1,
    explanation:
      "Radio signals travel at the speed of light, but Mars is so far away that a signal takes between 3 and 22 minutes to arrive — with an average of around 20 minutes. That means a command sent from Earth takes 20 minutes to arrive, and any response takes another 20 minutes to return. If a rover were heading toward a cliff, a human operator could not react in time. The rover's onboard AI must continuously assess the terrain, identify safe routes, and stop or reroute autonomously when it detects hazards.",
    hint: 'Think about what happens when the nearest human is 20 light-minutes away.',
  },
  {
    question: 'How does AI help astronomers searching for planets beyond our solar system (exoplanets)?',
    options: [
      'AI flies spacecraft to nearby star systems to photograph planets directly',
      'AI analyses telescope data to spot the tiny, regular dimming of starlight that indicates a planet passing in front of its star — a pattern buried in enormous datasets that would take humans years to review manually',
      'AI designs more powerful telescopes by testing thousands of lens configurations in simulation',
      'AI predicts where new planets will form based on patterns in the gas clouds photographed by the Hubble Space Telescope',
    ],
    correctIndex: 1,
    explanation:
      "The transit method works by detecting when a planet passes between its star and our telescope, causing a tiny, regular dip in the star's brightness. NASA's Kepler and TESS missions collected light-curve data for hundreds of thousands of stars. AI — particularly neural networks trained on confirmed exoplanet examples — can scan this data and flag candidate planets far faster and more reliably than human researchers. AI systems have already identified thousands of planet candidates from datasets that would have taken decades to manually review.",
    hint: 'Think about detecting a tiny shadow crossing a star at a huge distance.',
  },
  {
    question: "How does SpaceX use AI when landing Falcon 9 rocket boosters?",
    options: [
      "Human pilots remotely control the booster during landing using a joystick system developed by SpaceX engineers",
      "AI running onboard the rocket makes thousands of real-time adjustments to engine thrust and grid fin positions per second to guide the booster to a precise landing — faster than any human could react",
      "The rocket simply falls along a pre-calculated trajectory and lands passively without any active control during descent",
      "Ground-based supercomputers calculate the optimal landing path and transmit updated instructions to the rocket 60 times per second",
    ],
    correctIndex: 1,
    explanation:
      "Landing a rocket booster is an extraordinarily complex control problem. The rocket is travelling at hundreds of metres per second, and the landing legs must touch down within a few metres of the target on a drone ship moving at sea. The AI flight computer makes thousands of micro-adjustments per second to engine thrust, gimbal angle, and the four grid fins that steer the rocket through the atmosphere. The decisions must be made in milliseconds — the 200ms round-trip communication delay to the ground would make remote control impossible at this level of precision.",
    hint: 'Think about the speed and precision required and whether a human could react fast enough.',
  },
  {
    question: 'What role does AI play in managing satellite constellations like Starlink?',
    options: [
      'AI designs the physical satellites in factory — deciding which components to use based on cost and reliability data',
      'AI manages collision avoidance, orbit optimisation, and predictive maintenance across thousands of satellites simultaneously — a task impossible for human operators to do at this scale',
      'AI translates the signals from satellites into readable internet data for customers on the ground',
      'AI monitors weather conditions and automatically repositions satellites away from storms and solar flares',
    ],
    correctIndex: 1,
    explanation:
      "SpaceX's Starlink constellation has over 6,000 satellites in low Earth orbit — a number that is growing. Managing this many objects simultaneously requires AI. Collision avoidance alone is critical: there are hundreds of thousands of pieces of debris in orbit, and the AI must calculate trajectories, assess risk, and schedule evasive manoeuvres autonomously. AI also monitors satellite health data from thousands of onboard sensors, predicts component failures before they happen, and optimises orbits to ensure global coverage while minimising fuel consumption.",
    hint: 'Think about the sheer scale — thousands of satellites cannot be managed one at a time.',
  },
  {
    question: 'How does AI contribute to the search for extraterrestrial intelligence (SETI)?',
    options: [
      'AI designs and builds radio telescopes that are more sensitive than anything humans could engineer',
      'AI analyses vast quantities of radio telescope data to search for signals that do not match any known natural source — a pattern search that would take human researchers decades to complete manually',
      'AI monitors astronaut health on the International Space Station and alerts mission control if anyone shows signs of distress',
      'AI translates radio signals from space into human language in real time, in case an alien civilisation is broadcasting a message we can understand',
    ],
    correctIndex: 1,
    explanation:
      "Radio telescopes like those used by the SETI Institute collect enormous quantities of data — far more than any team of human researchers could analyse. AI can process this data continuously, learning what natural radio sources (pulsars, quasars, interference from Earth) look like, and flagging any signals that do not match. The Breakthrough Listen initiative uses machine learning to search for 'technosignatures' — patterns in radio or light data that suggest technological origin. In 2023, AI identified a promising candidate signal (BLC1 from Proxima Centauri) within a dataset that had previously been manually reviewed without finding it.",
    hint: 'Think about searching for something unusual in an almost infinite amount of data.',
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
            From Mars rovers that navigate alone to telescopes that discover planets automatically —
            how AI is transforming our understanding of the universe.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-space-exploration" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Why space exploration needs AI</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Space is vast, communication is slow, and the volumes of data are almost incomprehensible.
            Three factors make AI not just useful but essential for modern space exploration.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x23F1;&#xFE0F;',
                label: 'Distance and delay',
                text: 'A radio signal takes up to 22 minutes to reach Mars. To the outer planets, hours. Any spacecraft operating far from Earth must make its own decisions — there is no time to ask for human guidance.',
                color: 'indigo',
              },
              {
                icon: '&#x1F4CA;',
                label: 'Data at scale',
                text: "NASA's telescopes generate terabytes of data every day. The James Webb Space Telescope alone produces around 57 gigabytes per day. No team of human astronomers could review it all manually — AI analyses and filters it, surfacing the most interesting findings.",
                color: 'indigo',
              },
              {
                icon: '&#x26A1;',
                label: 'Speed and precision',
                text: 'Rocket landings, satellite collision avoidance, and real-time spacecraft control all require decisions in milliseconds. AI can respond thousands of times faster than any human operator.',
                color: 'indigo',
              },
            ].map(({ icon, label, text, color }) => (
              <div key={label} className={`flex gap-3 items-start bg-${color}-50 dark:bg-${color}-950 rounded-xl p-3`}>
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className={`font-semibold text-${color}-800 dark:text-${color}-200 text-sm mb-0.5`}>{label}</p>
                  <p className={`text-${color}-700 dark:text-${color}-300 text-sm leading-relaxed`}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Mars rovers — autonomous explorers</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            NASA's Curiosity and Perseverance rovers have been exploring Mars since 2012 and 2021 respectively.
            Both rely heavily on onboard AI to operate safely and efficiently.
          </p>
          <div className="space-y-2">
            {[
              "AutoNav — the rovers' autonomous navigation system — uses stereo cameras to build a 3D map of the terrain ahead, identifies safe paths, and avoids hazards like sharp rocks or steep slopes without any input from Earth.",
              "AEGIS (Autonomous Exploration for Gathering Increased Science) analyses rock images taken by the rover and autonomously decides which targets are scientifically interesting enough to photograph in higher detail or analyse with the laser.",
              'On a typical day, a mission team on Earth uploads a plan in the morning — but the rover uses AI to adapt that plan if it encounters unexpected terrain, mechanical issues, or better scientific targets along the way.',
              "Perseverance carries Ingenuity, a small helicopter that uses computer vision AI to navigate and land autonomously — the first powered, controlled flight on another planet.",
              'Future Mars missions plan to use AI for even more autonomous decision-making, including AI systems that can identify and respond to geological events like dust storms in real time.',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-teal-100 dark:border-teal-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Telescopes and planet hunting</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            There are billions of stars in the Milky Way. Searching for planets around them — and
            ultimately for signs of life — produces datasets so large that AI is the only way to
            make sense of them.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F52D;',
                label: 'Exoplanet discovery',
                text: "NASA's Kepler mission collected light-curve data from over 150,000 stars. AI neural networks trained to recognise the signature dimming pattern of a planet transit have identified thousands of exoplanet candidates — including some that human reviewers had missed in the same dataset.",
                color: 'teal',
              },
              {
                icon: '&#x1F30C;',
                label: 'Galaxy classification',
                text: 'The Sloan Digital Sky Survey has imaged over a billion galaxies. AI classifies them by shape, size, and type orders of magnitude faster than volunteer human classifiers — the Galaxy Zoo project showed that AI could match human accuracy on galaxy morphology after training on crowdsourced labels.',
                color: 'teal',
              },
              {
                icon: '&#x1F4A5;',
                label: 'Transient events',
                text: "Supernovae, gamma-ray bursts, and other transient events appear and fade within hours or days. AI systems like RAPID and ALeRCE scan incoming telescope data in real time, classifying and alerting astronomers to these events while they are still observable — often within seconds.",
                color: 'teal',
              },
            ].map(({ icon, label, text, color }) => (
              <div key={label} className={`flex gap-3 items-start bg-${color}-50 dark:bg-${color}-950 rounded-xl p-3`}>
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className={`font-semibold text-${color}-800 dark:text-${color}-200 text-sm mb-0.5`}>{label}</p>
                  <p className={`text-${color}-700 dark:text-${color}-300 text-sm leading-relaxed`}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Rocket launches and satellite management</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Commercial space companies have transformed rocket launches from rare, expensive events
            into regular operations — and AI is central to making this scale possible.
          </p>
          <div className="space-y-2">
            {[
              "SpaceX's Falcon 9 first stage lands autonomously using an AI flight computer that makes thousands of micro-adjustments per second to engine thrust, gimbal angle, and grid fins — a process too fast and precise for any human operator.",
              "SpaceX's Starlink constellation has over 6,000 satellites in low Earth orbit. AI manages collision avoidance, orbit maintenance, and health monitoring across the entire fleet — tasks that would be impossible for human operators at this scale.",
              "Rocket Lab's Electron vehicle uses AI to monitor 25,000 data points per second during flight, automatically detecting anomalies and making real-time adjustments to maximise mission success.",
              'ESA uses AI to predict when satellites will re-enter the atmosphere, helping space agencies plan deorbit manoeuvres to reduce space debris and avoid populated areas.',
              "AI helps mission planners optimise trajectories — calculating fuel-efficient routes to distant planets or asteroids that take advantage of gravitational assists from multiple bodies, a complex optimisation problem that takes AI seconds where humans would need weeks.",
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-violet-100 dark:border-violet-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The search for extraterrestrial intelligence</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            SETI — the Search for Extraterrestrial Intelligence — has been listening for signals
            from space for over 60 years. AI has transformed what was once a slow, manual process
            into something that can scan the entire observable sky continuously.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4E1;',
                label: 'Breakthrough Listen',
                text: "The most comprehensive SETI programme ever funded uses AI to analyse radio and optical telescope data for technosignatures — patterns that suggest technological rather than natural origin. AI can distinguish between interference from Earth, natural radio sources like pulsars, and genuinely anomalous signals.",
                color: 'violet',
              },
              {
                icon: '&#x2728;',
                label: 'Pattern recognition at scale',
                text: "Breakthrough Listen generates around 1 petabyte of data per year. AI systems process this continuously, looking for narrowband signals (which natural sources rarely produce) or signals that drift in frequency in ways consistent with a transmitter on a rotating planet.",
                color: 'violet',
              },
              {
                icon: '&#x1F914;',
                label: 'The honest challenge',
                text: "We have not yet found confirmed evidence of extraterrestrial intelligence. False positives are common — signals that look unusual but turn out to be interference or natural phenomena. AI makes the search much faster and more thorough, but the universe is vast and the signal, if it exists, may be very faint.",
                color: 'violet',
              },
            ].map(({ icon, label, text, color }) => (
              <div key={label} className={`flex gap-3 items-start bg-${color}-50 dark:bg-${color}-950 rounded-xl p-3`}>
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className={`font-semibold text-${color}-800 dark:text-${color}-200 text-sm mb-0.5`}>{label}</p>
                  <p className={`text-${color}-700 dark:text-${color}-300 text-sm leading-relaxed`}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">What comes next</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Space exploration in the coming decades will depend on AI in ways we are only beginning
            to develop. As missions travel further and operate more independently, AI must become
            even more capable.
          </p>
          <div className="space-y-2">
            {[
              'Crewed missions to Mars — planned by NASA and SpaceX for the 2030s — will need AI medical diagnosis systems and autonomous life support management, because a medical emergency cannot wait 20 minutes for advice from Earth.',
              'AI-designed spacecraft components — generative design algorithms already used in aerospace to optimise structural parts for strength, weight, and manufacturability simultaneously.',
              'Autonomous asteroid mining — future spacecraft may use AI to identify mineral-rich asteroids, navigate to them, and extract resources with minimal human involvement.',
              'AI climate monitoring from space — satellites using AI to track deforestation, glacier melt, sea level rise, and ocean temperature with a global view unavailable from the ground.',
              'The Vera Rubin Observatory (opening in 2025) will photograph the entire southern sky every three nights, generating 15 terabytes of data per night — AI will classify every object automatically, transforming our catalogue of the solar system within its first year of operation.',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-amber-600 dark:text-amber-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <LessonNote lessonId="ai-and-space-exploration" />
        <ReviewLaterButton lessonId="ai-and-space-exploration" />

        <Quiz lessonId="ai-and-space-exploration" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-space-exploration" />
        <LessonFeedback lessonId="ai-and-space-exploration" />

        <RelatedLessons currentId="ai-and-space-exploration" />

        <NextLesson currentId="ai-and-space-exploration" />

      </div>
    </div>
  )
}
