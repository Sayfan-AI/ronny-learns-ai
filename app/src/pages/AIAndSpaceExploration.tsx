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
  'Mars rovers like Perseverance use onboard AI to navigate terrain autonomously — a radio signal takes 20 minutes each way between Earth and Mars, making real-time remote control impossible.',
  'Satellites use AI to identify and prioritise what to photograph from orbit, and to detect changes on the ground — deforestation, flooding, illegal fishing, military activity — in near real time.',
  'Telescopes like the James Webb Space Telescope generate more data than humans could ever manually review. AI analyses telescope images to find exoplanets, classify galaxies, and detect unusual phenomena.',
  "AI played a central role in the first photograph of a black hole (M87*, 2019) — combining data from eight radio telescopes worldwide to create an image of something smaller than a pixel in the raw data.",
  'The search for extraterrestrial intelligence (SETI) uses AI to sift through enormous amounts of radio telescope data looking for patterns that might indicate artificial signals.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'Why do Mars rovers need onboard AI to navigate, rather than being steered remotely from Earth?',
    options: [
      'NASA banned remote control of rovers after a previous rover crashed due to a controller error',
      'Radio signals take up to 20 minutes to travel between Earth and Mars — so real-time steering is impossible and the rover must make its own decisions',
      'The rover\'s wheels are too large to respond quickly to remote commands, so pre-programmed AI works better',
      'Martian dust storms block radio signals completely, so the rover must be fully autonomous at all times',
    ],
    correctIndex: 1,
    explanation:
      "The distance between Earth and Mars varies between 56 million and 401 million kilometres as the planets orbit the Sun. At the average distance, a radio signal takes about 13 minutes one way — so if you sent a 'turn left' command, you'd wait 26 minutes for any response. By then the rover could have driven into a crater. Perseverance uses AI for 'AutoNav' — it takes stereo images of the terrain ahead, builds a 3D model, identifies safe paths, and drives itself, alerting Earth when it reaches the next waypoint. Humans set the destination; the rover figures out how to get there.",
    hint: 'Think about what happens if there is a 26-minute round-trip delay on every steering command.',
  },
  {
    question: 'How do satellites use AI to monitor the Earth?',
    options: [
      'Satellites use AI to take selfies and automatically post them to space agency social media accounts',
      'AI analyses satellite images to detect changes — deforestation, flooding, illegal fishing, crop disease — that would take humans weeks to spot manually',
      'Satellites use AI to communicate directly with each other, routing internet data without involving ground stations',
      'AI controls satellite orientation so they always face the sun to maximise solar panel power generation',
    ],
    correctIndex: 1,
    explanation:
      "Hundreds of commercial and government satellites now image most of the Earth\'s surface every day. The volume of imagery produced is far beyond what any human team could review. AI models trained on satellite images can detect a forest being illegally cleared overnight, identify suspicious vessels in protected fishing zones, map flood extent in real time during a disaster, monitor crop health across an entire country, and detect when buildings are being constructed in conflict zones. Planet Labs operates over 200 satellites producing 3 million images per day — all processed by AI.",
    hint: 'Think about what you could do with images of the entire Earth taken every day.',
  },
  {
    question: 'How did AI contribute to the first photograph of a black hole?',
    options: [
      'AI colourised an otherwise black-and-white image to make it more visually striking for public release',
      'AI algorithms combined data from eight radio telescopes around the world to reconstruct an image that no single telescope could have produced',
      'AI generated a computer-rendered artistic impression of what scientists calculated a black hole should look like based on physics equations',
      'AI enhanced a single blurry telescope image to increase its resolution 1,000 times',
    ],
    correctIndex: 1,
    explanation:
      "The black hole M87* is 6.5 billion times the mass of our Sun, but at 55 million light years away it appears incredibly small — too small to image with any single telescope. The Event Horizon Telescope project linked eight radio telescopes across the globe, effectively creating a telescope the size of the Earth. This produced an enormous dataset with many gaps (because the telescopes are not evenly distributed globally). An AI algorithm developed by computer scientist Katie Bouman filled in the gaps, using machine learning to reconstruct the most likely complete image from the incomplete data. Without AI, no photograph would have been possible.",
    hint: 'Think about combining data from multiple telescopes to create something none could do alone.',
  },
  {
    question: 'What is SETI and how does AI help with it?',
    options: [
      'SETI is a satellite tracking network — AI helps it predict when satellites will re-enter the atmosphere',
      'SETI searches for signs of extraterrestrial intelligence by scanning radio telescope data — AI sifts through enormous datasets looking for unusual patterns that might indicate artificial signals',
      'SETI is a program to send AI-generated messages into space in the hope of contacting alien civilisations',
      'SETI is a European Space Agency training programme — AI generates simulations for astronaut candidates',
    ],
    correctIndex: 1,
    explanation:
      "SETI (Search for Extraterrestrial Intelligence) has been scanning the sky with radio telescopes since the 1960s, listening for signals that might be artificial rather than natural. The data volumes are astronomical — radio telescopes produce terabytes per day. Human analysts cannot review it all. AI models are trained to distinguish natural astrophysical signals (pulsars, quasars) from unusual patterns that warrant human follow-up. The Breakthrough Listen project uses machine learning to flag candidate signals. No confirmed extraterrestrial signal has ever been found, but AI has dramatically expanded humanity's ability to search.",
    hint: 'Think about looking for a very specific needle in an enormous haystack of data.',
  },
  {
    question: 'What did AI discover when analysing data from the Kepler space telescope?',
    options: [
      'Evidence of water on Mars, later confirmed by ground-based telescopes',
      'Two new exoplanets that human analysts had overlooked in data already collected by the telescope',
      'A previously unknown moon orbiting Jupiter, too small to be detected by earlier instruments',
      'Proof that the expanding universe is accelerating faster than current physics predicted',
    ],
    correctIndex: 1,
    explanation:
      "In 2017, a Google AI team trained a neural network on data from Kepler — a space telescope that stared at 150,000 stars looking for the tiny dips in brightness that indicate a planet passing in front of its star. Human analysts had already reviewed the data and found thousands of planets. The AI found two more — Kepler-90i and Kepler-80g — that the human analysts had missed because the signals were very weak. It demonstrated that AI can find patterns in scientific datasets that trained human experts overlook, and suggested there may be many more discoveries hiding in already-collected data.",
    hint: 'Think about AI going back to data already reviewed by humans and finding something new.',
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
            Mars rovers that drive themselves, satellites that watch the Earth in real time,
            telescopes that discover new worlds — how AI is expanding humanity's reach into the universe.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-space-exploration" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Why space and AI are a natural fit</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Space exploration generates vast amounts of data — more than any human team could ever analyse manually. Missions operate in environments where real-time human control is impossible. AI is ideally suited to both challenges.
          </p>
          <div className="space-y-2">
            {[
              'The James Webb Space Telescope generates about 57 gigabytes of compressed data per day — every day, indefinitely',
              'A radio signal takes up to 22 minutes one way to reach Mars — making real-time remote control impossible',
              'Earth observation satellites collectively produce petabytes of imagery every year',
              'AI is finding scientific discoveries hidden in data already collected but too large for humans to review fully',
              'From the first photograph of a black hole to new exoplanet discoveries, AI is directly producing scientific breakthroughs',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Mars rovers — driving themselves on another planet</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Perseverance (landed 2021) and Curiosity (landed 2012) are the most advanced AI-navigated vehicles ever operated beyond Earth.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F6F8;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">AutoNav — autonomous navigation</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">Perseverance takes stereo images of the terrain, builds a 3D map, identifies safe paths, and drives itself — avoiding rocks and hazards automatically. Operators on Earth set the destination; the rover works out the route.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F9EA;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">Autonomous science decisions</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">AEGIS (Autonomous Exploration for Gathering Increased Science) lets the rover choose which rocks to photograph and analyse based on scientific priorities — without waiting for human approval for every action.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F681;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">Ingenuity helicopter</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">A small drone that flew alongside Perseverance. With no GPS and a 20-minute communication delay, it navigated entirely autonomously using onboard AI — the first powered flight on another planet.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Watching the Earth from space</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI-powered satellite analysis is providing new ways to monitor our planet — from disaster response to environmental monitoring to security.
          </p>
          <div className="space-y-2">
            {[
              'Planet Labs\' 200+ satellites image most of Earth daily — AI flags changes in deforestation, agriculture, and construction overnight',
              'AI detects illegal fishing vessels by analysing satellite AIS (ship tracking) data for vessels that switch off their transponders',
              'Flood mapping using radar satellites — AI produces flood extent maps within hours of a disaster, guiding emergency response',
              'Climate scientists use AI to analyse decades of satellite data to detect long-term changes in ice caps, sea levels, and vegetation',
              'AI monitors conflict zones, counting military vehicles and identifying infrastructure damage from orbit',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The first photograph of a black hole</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            In 2019, the Event Horizon Telescope collaboration released the first ever photograph of a black hole — and AI was essential to creating it.
          </p>
          <div className="bg-purple-50 dark:bg-purple-950 rounded-xl p-4">
            <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">
              Black hole M87* is 6.5 billion times the mass of our Sun. At 55 million light years away, it appears far too small for any single telescope. The solution: link eight radio telescopes across the world into one Earth-sized virtual telescope. The resulting dataset was enormous — but incomplete, because the telescopes are not evenly distributed. Computer scientist Katie Bouman developed an AI algorithm (CHIRP) that reconstructed the most probable complete image from the incomplete data. Without AI, no photograph would have been possible.
            </p>
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
