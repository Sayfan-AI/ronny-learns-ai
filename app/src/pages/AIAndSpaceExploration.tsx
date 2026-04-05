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
  'Mars rovers like Perseverance use AI to navigate rough terrain and select which rocks to study — because the 20-minute communication delay to Earth means they cannot wait for human instructions for every decision. The rover must think for itself.',
  'AI manages satellite constellations and avoids collisions in orbit — with tens of thousands of objects now circling Earth, human operators could not track them all without machine learning assistance.',
  'Telescope data is so vast that humans cannot read it all. AI has discovered thousands of new exoplanets, detected gravitational wave signals, and identified galaxy structures in data that sat unexamined for years.',
  'SpaceX uses AI and machine learning to land its Falcon 9 rocket boosters upright after launch — a feat considered impossible before 2015 — enabling rockets to be reused and dramatically reducing launch costs.',
  'SETI (the Search for Extraterrestrial Intelligence) now uses AI to scan radio telescope data for unusual signals that do not match known natural or human-made patterns, allowing far more data to be analysed than any team of astronomers could manage.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: "Why do Mars rovers like Perseverance need to make some decisions autonomously using AI, rather than waiting for instructions from Earth?",
    options: [
      "Because NASA does not have enough staff to monitor the rover continuously, so AI acts as a substitute controller during staff breaks",
      "Because signals between Earth and Mars take up to 20 minutes to arrive in each direction, making real-time remote control impossible for moment-to-moment navigation",
      "Because the Martian atmosphere blocks radio signals for most of each day, so the rover must operate independently during communication blackout periods",
      "Because international law requires all spacecraft operating beyond the Moon to be fully autonomous without human intervention",
    ],
    correctIndex: 1,
    explanation:
      "The distance between Earth and Mars means that radio signals — even travelling at the speed of light — take between 3 and 22 minutes to arrive, depending on where the two planets are in their orbits. A round trip for a command and response therefore takes between 6 and 44 minutes. If a rover had to wait for human approval before steering around every rock, it would barely move. AI allows the rover to plan short drives, avoid hazards, and select targets of interest (like unusual rocks) independently, with humans reviewing what it did and setting longer-term goals.",
    hint: "Think about how quickly signals travel and what the distance to Mars means for communication.",
  },
  {
    question: "What is the main challenge that AI helps solve when managing satellites in Earth orbit?",
    options: [
      "AI helps design prettier satellite shapes that reduce atmospheric drag and save fuel over the lifetime of the mission",
      "AI handles the paperwork for satellite launch licences from national space agencies, speeding up the bureaucratic process",
      "With tens of thousands of objects in orbit — working satellites, dead satellites, and debris — AI tracks their positions and predicts potential collisions so operators can take avoiding action",
      "AI reduces the cost of building satellites by designing components that can be 3D-printed in orbit from materials found on the International Space Station",
    ],
    correctIndex: 2,
    explanation:
      "There are now more than 10,000 active satellites in Earth orbit, plus hundreds of thousands of pieces of debris. Every object is moving at roughly 28,000 kilometres per hour. A collision between even small pieces can generate thousands of new debris fragments — each of which can destroy another satellite, creating a chain reaction known as Kessler Syndrome. AI systems track all these objects, predict their future positions, identify close approaches, and alert operators when a collision risk is high enough to warrant a manoeuvre. Human operators could not process this volume of tracking data manually.",
    hint: "Think about how many objects are in orbit and what happens if they collide.",
  },
  {
    question: "How has AI changed the discovery of exoplanets (planets orbiting other stars)?",
    options: [
      "AI has replaced telescopes entirely — modern exoplanet discovery uses AI simulations rather than actual observations of space",
      "AI analyses the vast streams of telescope data to detect the tiny, regular dips in starlight that indicate a planet passing in front of its star — finding candidates that human astronomers would have missed in datasets too large to read manually",
      "AI predicts which stars are likely to have planets based on their chemical composition, allowing telescopes to focus only on promising candidates and avoid wasting observation time",
      "AI communicates directly with ground-based telescopes in other countries to coordinate when each one should look at which star, maximising global observing efficiency",
    ],
    correctIndex: 1,
    explanation:
      "The Kepler space telescope alone collected data on 150,000 stars over four years — far more than any team of astronomers could manually inspect. The transit method of finding exoplanets involves detecting tiny, regular dips in a star's brightness as a planet passes in front of it — some dips are less than 0.01% of the star's total light. Google Brain trained a neural network on confirmed planet detections and then ran it across the entire Kepler dataset, finding previously missed exoplanets in data that had been sitting in archives for years. NASA's TESS mission uses similar AI approaches.",
    hint: "Think about the volume of data involved and what humans would miss.",
  },
  {
    question: "How does SpaceX use AI to land its Falcon 9 rocket boosters?",
    options: [
      "SpaceX uses AI to remotely control the rocket from the ground, with an operator using an AI-enhanced joystick to guide the booster in real time from the launch control centre",
      "SpaceX uses AI to pre-calculate the exact landing burn parameters before launch, which are then uploaded to the rocket and executed without any in-flight adjustment",
      "SpaceX uses machine learning systems that have been trained through thousands of simulated and real landings to control the rocket's engines and grid fins in real time, adjusting the landing trajectory as conditions change",
      "SpaceX uses AI only to decide the landing site location — the actual guidance and engine control during descent is handled by conventional autopilot software without machine learning",
    ],
    correctIndex: 2,
    explanation:
      "Landing a returning rocket booster is an extraordinarily difficult control problem — the rocket is falling at high speed, is nearly empty of fuel (making it very light and unstable), and must slow from hundreds of kilometres per hour to almost zero precisely over a landing pad. The conditions (wind, fuel levels, booster weight, trajectory) vary every flight. SpaceX trained reinforcement learning systems using data from test flights and simulations. The AI controls thousands of small adjustments to engine throttle and the grid fins (the metal flaps that steer the rocket) hundreds of times per second during descent — far faster than any human pilot could react.",
    hint: "Think about how fast decisions need to be made during a rocket landing.",
  },
  {
    question: "What role does AI play in the search for extraterrestrial intelligence (SETI)?",
    options: [
      "AI sends messages into space on behalf of SETI researchers, automatically translating human languages into mathematical sequences that any intelligent species could understand",
      "AI controls the pointing of radio telescopes around the world, coordinating them into a single global listening array to maximise sensitivity to faint signals",
      "AI scans massive volumes of radio telescope data for unusual signal patterns that do not match known natural or human-made sources — flagging anomalies for further investigation by astronomers",
      "AI simulates the civilisations most likely to produce detectable signals, which SETI uses to decide which regions of the sky to prioritise for observation",
    ],
    correctIndex: 2,
    explanation:
      "Radio telescopes generate enormous amounts of data — a single large telescope can produce petabytes per year. For most of SETI's history, the main bottleneck was analysis: humans could only listen to one small patch of sky at a time and had to listen repeatedly to rule out interference. Machine learning systems can now process data from multiple telescope feeds simultaneously, recognise and filter out the thousands of types of known human-made interference (aircraft, satellites, mobile phones), and flag signals that are genuinely unusual. This does not mean AI has found aliens — it means it makes the search far more comprehensive and efficient than it was before.",
    hint: "Think about the volume of radio data that needs to be processed and what AI does well.",
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
            From Mars rovers making their own decisions to AI searching for alien signals —
            how artificial intelligence is helping us explore the universe.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <DifficultyBadge level="Beginner" />
          </div>
          <CompletedBadge lessonId="ai-and-space-exploration" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Why space exploration needs AI</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Space is enormous, communication is slow, and the data produced by our telescopes and probes is beyond what any team of humans can process. AI solves all three problems.
          </p>
          <div className="space-y-2">
            {[
              'The James Webb Space Telescope produces roughly 57 gigabytes of data per day — equivalent to thousands of novels — all of which needs to be analysed for discoveries',
              'Mars is so far away that a signal from Earth takes between 3 and 22 minutes to arrive, making real-time human control of rovers impossible',
              'There are over 10,000 active satellites and hundreds of thousands of pieces of debris in Earth orbit — tracking them all manually would be impossible',
              'The Milky Way contains an estimated 100 to 400 billion stars — AI is the only way to search a meaningful fraction of them for signs of planets or life',
              'SpaceX has launched over 200 successful Falcon 9 missions with booster landings — a precision feat made possible by AI control systems',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Mars rovers — AI on another planet</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The Perseverance rover, which landed on Mars in February 2021, carries AI systems that represent some of the most impressive real-world deployments of autonomous technology ever built.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F697;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">Autonomous navigation</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">Perseverance uses a system called AutoNav to plan and drive short routes autonomously. It builds a 3D map of the terrain ahead using stereo cameras, identifies safe paths around rocks and craters, and drives without waiting for instructions from Earth. Operators on Earth review each day's drive and set the next destination, but the rover handles the details of getting there.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1FAA8;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">Rock sample selection — AEGIS</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">Curiosity rover (Perseverance's predecessor) uses a system called AEGIS to identify interesting rock targets autonomously. Scientists define what they are looking for — certain textures, colours, or geological features — and AEGIS scans the rover's camera images to find matching targets and point the laser instrument at them. This allows science to happen even during communication gaps.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F681;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">Ingenuity helicopter</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">The small helicopter that flew alongside Perseverance is entirely autonomous during flight — the communication delay means a human pilot is impossible. Ingenuity uses onboard AI to maintain stable flight in the thin Martian atmosphere (about 1% of Earth's air pressure), navigate using a camera pointing at the ground, and land safely. It completed over 70 flights — far more than originally planned.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Satellites and space traffic — keeping orbit safe</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Earth orbit is getting crowded. The rapid expansion of satellite constellations (including SpaceX's Starlink with over 6,000 satellites) has made AI-powered collision avoidance essential.
          </p>
          <div className="space-y-2">
            {[
              'The US Space Surveillance Network tracks over 40,000 objects larger than 10 cm in orbit — AI processes this tracking data and predicts close approaches',
              'When two objects are predicted to pass dangerously close, satellite operators receive automated warnings with time to manoeuvre',
              'SpaceX\'s Starlink satellites have autonomous collision avoidance AI built in — the satellites move themselves without human instruction when a collision risk is flagged',
              'A collision at orbital speeds (28,000 km/h) between two objects can generate thousands of new debris fragments — each capable of destroying another satellite',
              'The European Space Agency\'s Space Debris Office uses machine learning to improve tracking accuracy and prioritise which conjunction events require action',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-violet-100 dark:border-violet-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Telescope data — AI finding what humans cannot</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Modern telescopes generate more data than all the world's astronomers could read in their lifetimes. AI analyses it for them.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-violet-50 dark:bg-violet-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1FA90;</span>
              <div>
                <p className="font-semibold text-violet-800 dark:text-violet-200 text-sm mb-0.5">Exoplanet discovery</p>
                <p className="text-violet-700 dark:text-violet-300 text-sm leading-relaxed">NASA's Kepler telescope stared at 150,000 stars for four years, looking for tiny dips in brightness caused by a planet passing in front. Google Brain trained a neural network on confirmed planet detections and ran it across the entire Kepler archive — finding new exoplanets in data that had already been processed and set aside. As of 2025, over 5,700 exoplanets have been confirmed, with AI playing a major role in recent discoveries.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-violet-50 dark:bg-violet-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F30A;</span>
              <div>
                <p className="font-semibold text-violet-800 dark:text-violet-200 text-sm mb-0.5">Gravitational waves</p>
                <p className="text-violet-700 dark:text-violet-300 text-sm leading-relaxed">The LIGO gravitational wave detectors are so sensitive they can measure distortions in space-time smaller than one-thousandth the diameter of a proton. They are also extremely sensitive to noise — lorries driving past, ocean waves, earthquakes. AI systems trained on thousands of confirmed detections and noise patterns separate real gravitational wave signals from instrumental noise, enabling discoveries that would otherwise be missed.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-violet-50 dark:bg-violet-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F52D;</span>
              <div>
                <p className="font-semibold text-violet-800 dark:text-violet-200 text-sm mb-0.5">Galaxy classification and cosmology</p>
                <p className="text-violet-700 dark:text-violet-300 text-sm leading-relaxed">The Sloan Digital Sky Survey mapped over 1 million galaxies. Classifying their shapes (spiral, elliptical, irregular) was initially done by volunteers through the Galaxy Zoo citizen science project — then AI learned from those volunteers and can now classify galaxies at a rate millions of times faster than human observers, freeing astronomers to focus on interpreting the results.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Rocket landing — a feat of AI control</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Before 2015, landing a rocket booster upright after launch was considered science fiction. SpaceX achieved it through a combination of engineering innovation and AI-based control systems.
          </p>
          <div className="space-y-2">
            {[
              'A returning Falcon 9 booster falls at several hundred kilometres per hour before its engines fire to slow it down — all while balancing on a column of thrust',
              'The booster must adjust for wind, variations in fuel load, small differences in engine performance, and the target being a ship moving in the ocean',
              'Grid fins (large metal flaps on the sides of the rocket) are controlled by AI hundreds of times per second to steer the descent',
              'SpaceX trained its landing control system using reinforcement learning — the AI learned from both simulation and real landing attempts',
              'Reusing boosters has reduced the cost of a Falcon 9 launch significantly — AI-enabled reusability is a key reason SpaceX can offer cheaper launch prices than competitors',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-cyan-100 dark:border-cyan-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">SETI — searching for alien signals with AI</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The Search for Extraterrestrial Intelligence (SETI) has been listening to the skies for unusual radio signals since the 1960s. AI has transformed how much of that data can actually be analysed.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-cyan-50 dark:bg-cyan-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4E1;</span>
              <div>
                <p className="font-semibold text-cyan-800 dark:text-cyan-200 text-sm mb-0.5">Filtering noise from signal</p>
                <p className="text-cyan-700 dark:text-cyan-300 text-sm leading-relaxed">Radio telescopes pick up signals from satellites, aircraft, mobile phones, and other human-made sources alongside anything from space. AI trained on millions of known interference patterns can recognise and filter these out automatically, leaving only signals that require further investigation. This vastly increases the percentage of telescope time spent looking at genuinely unknown signals.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-cyan-50 dark:bg-cyan-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x2728;</span>
              <div>
                <p className="font-semibold text-cyan-800 dark:text-cyan-200 text-sm mb-0.5">Breakthrough Listen</p>
                <p className="text-cyan-700 dark:text-cyan-300 text-sm leading-relaxed">The Breakthrough Listen project — the largest scientific search for extraterrestrial intelligence in history — uses machine learning to process data from major radio telescopes. It has scanned more than one million stars and hundreds of galaxies. In 2020, AI analysis of archival data from the Parkes telescope in Australia identified a candidate signal (later explained as satellite interference) — but the process demonstrated that AI could find things human analysts had missed in existing data.</p>
              </div>
            </div>
          </div>
          <div className="bg-cyan-50 dark:bg-cyan-950 rounded-xl p-4">
            <p className="text-cyan-700 dark:text-cyan-300 text-sm leading-relaxed">
              <span className="font-semibold">Has AI found aliens?</span> No — not yet. Every unusual signal found so far has eventually been explained by natural phenomena or human-made interference. But AI has made the search orders of magnitude more thorough, and scientists agree we have only listened to a tiny fraction of the sky so far.
            </p>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-space-exploration" />
        <LessonNote lessonId="ai-and-space-exploration" />

        <Quiz lessonId="ai-and-space-exploration" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-space-exploration" />
        <LessonFeedback lessonId="ai-and-space-exploration" />

        <RelatedLessons currentId="ai-and-space-exploration" />

        <NextLesson currentId="ai-and-space-exploration" />

      </div>
    </div>
  )
}
