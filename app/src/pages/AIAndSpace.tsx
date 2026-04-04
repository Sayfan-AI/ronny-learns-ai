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
    question: "Why does NASA's Perseverance rover need onboard AI to navigate Mars?",
    options: [
      'Mars has no GPS satellites, so the rover must build its own maps',
      'Radio signals take up to 24 minutes to travel between Earth and Mars, so real-time human control is impossible',
      'The Martian atmosphere interferes with wireless signals from Earth',
      'The rover moves too fast for human operators to keep up',
    ],
    correctIndex: 1,
    explanation:
      "At the distance of Mars, radio signals take between 3 and 24 minutes to arrive — depending on where the planets are in their orbits. That means a command sent from Earth could take nearly half an hour to reach the rover. Waiting for instructions on every rock and slope would make exploration impossibly slow, so Perseverance makes many decisions itself.",
  },
  {
    question: 'How did AI help discover exoplanets from telescope data?',
    options: [
      'AI photographed planets directly using enhanced camera zoom',
      'AI controlled the telescope to point at the right stars at the right time',
      'AI sifted through millions of light-curve readings to spot the tiny, regular dimming that occurs when a planet crosses in front of a star',
      'AI predicted which stars would have planets based on their chemical composition',
    ],
    correctIndex: 2,
    explanation:
      "Telescopes like Kepler and TESS measure the brightness of thousands of stars simultaneously. When a planet orbits a star, it causes a tiny, periodic dip in brightness as it passes in front. Spotting this signal — a dimming of less than 1% — buried in years of noisy data is exactly the kind of pattern-recognition task AI excels at. NASA's neural network found exoplanet candidates that human reviewers had missed.",
  },
  {
    question: 'What role did AI play in creating the first image of a black hole?',
    options: [
      'AI colourised a black-and-white photograph taken by the Hubble Space Telescope',
      'AI reconstructed the image from sparse radio telescope data collected across multiple continents, filling in gaps a single telescope could not capture',
      'AI simulated what a black hole would look like based on physics equations, not real observations',
      'AI enhanced a very blurry photograph by increasing its resolution',
    ],
    correctIndex: 1,
    explanation:
      "The Event Horizon Telescope is not a single instrument — it is a network of radio telescopes spread across the globe, coordinated to act like one Earth-sized dish. Even so, the data they collect has huge gaps. AI algorithms (building on techniques like CLEAN and newer neural approaches) filled those gaps to reconstruct a coherent image of the black hole at the centre of galaxy M87.",
  },
  {
    question: 'How does AI help protect satellites and power grids from solar flares?',
    options: [
      'AI physically shields satellites by adjusting their orbits before a flare hits',
      'AI analyses patterns in the Sun\'s magnetic field to predict solar flares up to 24 hours in advance, giving operators time to prepare',
      'AI monitors satellite power levels and automatically shuts them down during any unusual solar activity',
      'AI intercepts the radiation from solar flares before it reaches Earth',
    ],
    correctIndex: 1,
    explanation:
      "Large solar flares release bursts of radiation and charged particles that can damage satellite electronics, disrupt GPS signals, and even knock out power grids on Earth. By training on decades of solar magnetic field data, AI models can spot the warning patterns that precede major flares — giving satellite operators and grid managers precious hours to put systems into safe mode.",
  },
  {
    question: 'What is LIGO, and how does AI help it?',
    options: [
      'LIGO is a space telescope; AI controls its pointing direction',
      'LIGO is a gravitational wave detector; AI filters out noise to find the faint signals left by colliding black holes or neutron stars',
      'LIGO is a Mars lander; AI helps it avoid rocks during landing',
      'LIGO is a radio telescope; AI translates its data into images',
    ],
    correctIndex: 1,
    explanation:
      "LIGO (Laser Interferometer Gravitational-Wave Observatory) detects ripples in space-time caused by cataclysmic events like two black holes merging. The signals are extraordinarily faint — smaller than one ten-thousandth the diameter of a proton — buried in noise from passing lorries, distant earthquakes, and equipment vibrations. AI pattern-matching pulls these genuine signals out of the noise far faster than traditional methods.",
  },
]

export function AIAndSpace() {
  useMarkVisited('ai-and-space')

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F680;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and space
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI steers Mars rovers, discovers new planets, photographs black holes,
            and protects us from solar storms.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-space" />
          <ShareButton lessonTitle="AI and space" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Driving a rover on Mars</h2>
          <p className="text-gray-600 leading-relaxed">
            NASA&apos;s Perseverance rover landed on Mars in February 2021. It moves slowly &mdash; a
            few hundred metres per day at most &mdash; through rocky, uneven terrain. But the
            biggest challenge is not the terrain. It is the distance.
          </p>
          <div className="bg-indigo-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-indigo-800 text-sm">The light-speed delay problem</p>
            <p className="text-indigo-700 text-sm leading-relaxed">
              Mars is so far away that radio signals (which travel at the speed of light)
              take between 3 and 24 minutes to arrive, depending on where Earth and Mars
              are in their orbits. If Perseverance is about to drive into a ditch, sending
              a &ldquo;stop!&rdquo; command from Earth could take nearly half an hour to arrive &mdash;
              far too late. The rover has to think for itself.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Perseverance uses a system called AutoNav. It takes pictures of the ground ahead,
            builds a 3D map, identifies safe paths, and drives accordingly &mdash; all without
            waiting for instructions. Mission controllers plan routes and set daily goals, but
            the rover navigates each metre autonomously.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4F7;',
                label: 'Stereo cameras',
                text: 'Two cameras set apart like eyes create a 3D view of the terrain, letting the rover judge distances and spot obstacles.',
              },
              {
                icon: '&#x1F5FA;&#xFE0F;',
                label: 'Hazard maps',
                text: 'The AI builds a map of rocks, slopes, and soft sand, marking unsafe zones before choosing a path.',
              },
              {
                icon: '&#x2705;',
                label: 'Safe-to-drive checks',
                text: 'Before moving, the rover verifies its planned path is clear. If a new obstacle appears mid-drive, it stops and recalculates.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Finding planets around other stars</h2>
          <p className="text-gray-600 leading-relaxed">
            We cannot directly photograph most exoplanets &mdash; they are too small and too
            far away. Instead, astronomers look for the tiny dimming of a star&apos;s light when
            a planet passes in front of it (called a transit).
          </p>
          <p className="text-gray-600 leading-relaxed">
            NASA&apos;s Kepler and TESS telescopes measured the brightness of hundreds of thousands
            of stars, generating years of data with billions of data points. Searching all of
            it for the subtle, repeating dip of a transit is a needle-in-a-haystack problem
            perfectly suited to AI.
          </p>
          <div className="bg-purple-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-purple-800 text-sm">Result: planets humans missed</p>
            <p className="text-purple-700 text-sm leading-relaxed">
              In 2017, Google trained a neural network on confirmed Kepler transits and let it
              re-examine data that human reviewers had already classified. It found two new
              exoplanets that the humans had overlooked &mdash; including one in a system that
              was already thought to be fully catalogued.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Photographing a black hole</h2>
          <p className="text-gray-600 leading-relaxed">
            In 2019 the world saw the first photograph of a black hole: a glowing orange ring
            surrounding a dark centre, the supermassive black hole at the heart of galaxy M87,
            55 million light-years away. AI was essential to creating it.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The Event Horizon Telescope is not a single instrument. It is a global network of
            radio telescopes &mdash; from Hawaii to the South Pole &mdash; coordinated to behave
            like one enormous Earth-sized dish. Even so, enormous gaps exist between the
            telescopes. AI algorithms filled those gaps, reconstructing a coherent image from
            incomplete data.
          </p>
          <div className="bg-amber-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-amber-800 text-sm">Why this matters</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              The black hole&apos;s appearance matched Einstein&apos;s predictions from 1915 almost
              exactly. AI did not just help take a pretty picture &mdash; it confirmed a century-old
              prediction about the fundamental nature of gravity and spacetime.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Predicting solar flares</h2>
          <p className="text-gray-600 leading-relaxed">
            The Sun regularly releases bursts of energy called solar flares and coronal mass
            ejections (CMEs). Large ones can damage satellite electronics, knock out GPS
            signals, and even overwhelm power grids on Earth.
          </p>
          <p className="text-gray-600 leading-relaxed">
            AI trained on decades of solar observation data can now predict major flares
            up to 24 hours in advance by spotting patterns in the Sun&apos;s magnetic field.
            That warning window is enough time for satellite operators to put spacecraft
            into safe mode and for grid managers to take protective action.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F6F0;&#xFE0F;',
                label: 'Satellites',
                text: 'Operators can switch electronics to safe mode, reducing exposure to harmful radiation.',
              },
              {
                icon: '&#x26A1;',
                label: 'Power grids',
                text: 'Grid managers can pre-emptively reduce current flows in vulnerable transmission lines, preventing the cascade failures that caused the 1989 Quebec blackout.',
              },
              {
                icon: '&#x1F9ED;',
                label: 'GPS and navigation',
                text: 'Airlines can reroute polar flights away from the strongest radiation bursts, protecting both electronics and crew.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Listening for ripples in space</h2>
          <p className="text-gray-600 leading-relaxed">
            When two black holes or neutron stars collide, they send ripples through space
            itself &mdash; gravitational waves. LIGO (Laser Interferometer Gravitational-Wave
            Observatory) detects these waves using lasers that can measure a change in
            length one ten-thousandth the diameter of a proton.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The signals are buried in noise from passing vehicles, ocean waves, and tiny
            vibrations in the equipment. AI pattern-recognition extracts genuine gravitational
            wave signals far faster than traditional analysis, enabling real-time alerts that
            allow telescopes around the world to pivot and observe the source.
          </p>
          <div className="bg-indigo-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-indigo-800 text-sm">A new window on the universe</p>
            <p className="text-indigo-700 text-sm leading-relaxed">
              Before gravitational wave detection, we could only observe the universe through
              light. Now we can &ldquo;hear&rdquo; cosmic events. AI is helping us tune in &mdash; finding
              signals that confirm or challenge our most fundamental theories about physics.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The big picture</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
              <p className="font-semibold text-indigo-800 text-sm mb-2">What AI has unlocked</p>
              <ul className="text-indigo-700 text-sm space-y-1 leading-relaxed">
                <li>Autonomous navigation on other planets</li>
                <li>Discovery of exoplanets humans missed</li>
                <li>The first image of a black hole</li>
                <li>Advance warning of dangerous solar events</li>
                <li>Real-time detection of gravitational waves</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
              <p className="font-semibold text-amber-800 text-sm mb-2">Where human judgement still leads</p>
              <ul className="text-amber-700 text-sm space-y-1 leading-relaxed">
                <li>Deciding which discoveries to pursue</li>
                <li>Interpreting results in scientific context</li>
                <li>Designing the missions and instruments</li>
                <li>Ethical decisions about how we use space</li>
              </ul>
            </div>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-space" />
        <LessonNote lessonId="ai-and-space" />

        <Quiz questions={quizQuestions} lessonId="ai-and-space" lessonTitle="AI and space" />

        <LessonRating lessonId="ai-and-space" />
        <RelatedLessons currentId="ai-and-space" />
        <NextLesson currentId="ai-and-space" />
      </div>
    </div>
  )
}
