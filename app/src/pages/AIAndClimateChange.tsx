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
    question: 'How does AI improve climate forecasting compared to traditional methods?',
    options: [
      'AI replaces all physical measurements with guesswork',
      'AI can process far more data far faster, spotting patterns in ocean temperatures, atmospheric readings, and satellite imagery that older models miss',
      'AI predicts climate using only historical weather records, ignoring current data',
      'AI only improves short-term weather forecasts, not long-term climate projections',
    ],
    correctIndex: 1,
    explanation:
      'Traditional climate models are limited by computing power and the volume of data they can process. AI can analyse satellite imagery, ocean buoy readings, weather station data, and atmospheric sensors simultaneously — finding subtle patterns that improve both short-term forecasts and long-range climate projections.',
  },
  {
    question: 'What is one way AI helps make renewable energy more reliable?',
    options: [
      'AI stores electricity directly inside solar panels',
      'AI predicts when the sun will shine and wind will blow so grid operators can balance supply and demand in advance',
      'AI converts solar energy into a form that works on cloudy days',
      'AI replaces wind turbines with more efficient mechanical alternatives',
    ],
    correctIndex: 1,
    explanation:
      'Wind and solar energy are intermittent — they only generate when the sun shines or wind blows. AI forecasts production hours or days ahead, allowing grid operators to schedule backup power, charge batteries, or reduce other generation to keep supply and demand perfectly balanced.',
  },
  {
    question: 'How did AI help produce the first global map of tree cover loss?',
    options: [
      'AI sent drones to every forest on Earth to count trees manually',
      'AI analysed thousands of satellite images to detect changes in forest cover that would take humans decades to review',
      'AI used weather forecasts to predict where deforestation would happen next',
      'AI counted trees by listening for changes in forest sounds via microphone networks',
    ],
    correctIndex: 1,
    explanation:
      "Google's work with Global Forest Watch used AI to process over 600,000 Landsat satellite images — a task that would have taken a human team around 15 years. The resulting maps revealed the true scale of deforestation happening year by year, informing international policy decisions.",
  },
]

export function AIAndClimateChange() {
  useMarkVisited('ai-and-climate-change')

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F30D;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and climate change
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI is helping scientists forecast our future, power clean energy, and track
            deforestation from space &mdash; and what individuals can do.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-climate-change" />
          <ShareButton lessonTitle="AI and climate change" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Why climate needs AI</h2>
          <p className="text-gray-600 leading-relaxed">
            Climate science deals with staggering amounts of data &mdash; millions of weather
            stations, ocean buoys, satellites, and atmospheric sensors generating readings every
            second. No human team can process it all fast enough to be useful.
          </p>
          <p className="text-gray-600 leading-relaxed">
            AI excels at exactly this: finding patterns in huge, messy datasets. That makes
            it one of the most powerful tools we have for understanding and responding to
            climate change.
          </p>
          <div className="bg-emerald-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-emerald-800 text-sm">Scale of the challenge</p>
            <p className="text-emerald-700 text-sm leading-relaxed">
              The IPCC&rsquo;s climate models use some of the world&rsquo;s most powerful supercomputers.
              Even so, AI is now being layered on top to improve precision and speed &mdash;
              cutting the time needed for certain simulations from weeks to hours.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Better weather and climate forecasts</h2>
          <p className="text-gray-600 leading-relaxed">
            Traditional weather models solve complex physics equations across a grid of the
            atmosphere &mdash; accurate but slow. AI models learn patterns directly from decades
            of historical data and can produce forecasts in seconds.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F32A;&#xFE0F;',
                label: 'GraphCast — Google DeepMind',
                text: 'In 2023 Google DeepMind released GraphCast, an AI model that produces 10-day global weather forecasts in under a minute. It outperformed traditional models on 90% of tested variables, including extreme weather events.',
              },
              {
                icon: '&#x1F30A;',
                label: 'Ocean temperature modelling',
                text: 'AI models track sea surface temperatures across the entire Pacific in near real time, improving El Nino forecasts by months — giving farmers, governments, and relief agencies more time to prepare.',
              },
              {
                icon: '&#x26A1;',
                label: 'Extreme weather early warnings',
                text: 'AI can identify the atmospheric signatures of extreme events — heatwaves, floods, wildfires — earlier than traditional forecasting, giving people more time to act.',
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
          <h2 className="text-2xl font-bold text-gray-800">Smarter clean energy grids</h2>
          <p className="text-gray-600 leading-relaxed">
            Renewable energy has one big weakness: intermittency. The sun does not always shine;
            the wind does not always blow. Electricity grids must balance supply and demand in
            real time, or the system fails.
          </p>
          <p className="text-gray-600 leading-relaxed">
            AI is making renewable energy far more practical by predicting both supply and
            demand &mdash; sometimes hours or days in advance.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x2600;&#xFE0F;',
                label: 'Solar output forecasting',
                text: 'AI predicts how much solar power a farm will generate over the next 48 hours, based on cloud cover forecasts, satellite imagery, and historical output data. Grid operators use this to schedule backup power.',
              },
              {
                icon: '&#x1F4A8;',
                label: 'Wind farm optimisation',
                text: "Google's DeepMind AI increased the value of wind energy by around 20% by predicting output 36 hours ahead and pre-committing that power to the grid — making wind farms far more commercially viable.",
              },
              {
                icon: '&#x1F50B;',
                label: 'Battery storage decisions',
                text: 'AI decides when to charge and discharge grid-scale batteries: charging when solar production peaks and electricity is cheap, discharging during evening demand peaks when it is most valuable.',
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
          <h2 className="text-2xl font-bold text-gray-800">Tracking deforestation from space</h2>
          <p className="text-gray-600 leading-relaxed">
            Forests absorb roughly 2.6 billion tonnes of CO2 per year. Losing them
            accelerates climate change. Monitoring every forest on Earth used to be
            impossible &mdash; until AI met satellite imagery.
          </p>
          <div className="bg-green-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-green-800 text-sm">Global Forest Watch</p>
            <p className="text-green-700 text-sm leading-relaxed">
              Working with Google, the World Resources Institute used AI to analyse over 600,000
              Landsat satellite images to produce the first near-real-time global map of tree
              cover loss. A task that would have taken human analysts roughly 15 years was
              completed in months. Governments and NGOs now use these maps to target
              conservation efforts.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Similar AI systems track methane leaks from pipelines and oil fields using
            satellite sensors &mdash; methane is a greenhouse gas 80 times more potent than
            CO2 over 20 years. Finding and fixing leaks is one of the fastest ways to
            slow near-term warming.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI-driven materials discovery</h2>
          <p className="text-gray-600 leading-relaxed">
            Carbon capture &mdash; pulling CO2 directly out of the air or out of industrial
            exhaust &mdash; could play a major role in limiting warming. But current materials
            are expensive and energy-hungry.
          </p>
          <p className="text-gray-600 leading-relaxed">
            AI is speeding up the search for better materials dramatically:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F9EA;',
                label: 'Better carbon-capture materials',
                text: "Microsoft's AI model screened 32 million candidate solid materials in 80 hours — a task that would take decades of laboratory work. It identified 18 promising new materials for capturing CO2.",
              },
              {
                icon: '&#x1F50B;',
                label: 'Next-generation batteries',
                text: 'AI is helping discover new battery chemistries that could store renewable energy more cheaply and with less reliance on scarce materials like cobalt — critical for scaling up electric vehicles and grid storage.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What individuals can do</h2>
          <p className="text-gray-600 leading-relaxed">
            AI is not only a tool for scientists and governments. Several AI-powered tools
            are designed for everyday use:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CA;',
                label: 'Personal carbon footprint tools',
                text: 'Apps like Klima and Pawprint use AI to estimate your carbon footprint from bank transactions, flight records, and energy bills — and suggest the highest-impact changes you can make.',
              },
              {
                icon: '&#x1F3E0;',
                label: 'Smart home energy management',
                text: 'AI-powered thermostats (like Nest) learn your schedule and optimise heating and cooling automatically, reducing household energy use by 10-15% on average.',
              },
              {
                icon: '&#x1F6CD;&#xFE0F;',
                label: 'Sustainable shopping guidance',
                text: 'AI tools can compare the environmental impact of products, surfacing lower-carbon alternatives at the point of purchase.',
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
          <h2 className="text-2xl font-bold text-gray-800">The honest picture</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
              <p className="font-semibold text-emerald-800 text-sm mb-2">Where AI is helping</p>
              <ul className="text-emerald-700 text-sm space-y-1 leading-relaxed">
                <li>More accurate, faster climate models</li>
                <li>Making renewable energy grids reliable</li>
                <li>Detecting deforestation in near real time</li>
                <li>Accelerating materials science for clean tech</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
              <p className="font-semibold text-amber-800 text-sm mb-2">The catch</p>
              <ul className="text-amber-700 text-sm space-y-1 leading-relaxed">
                <li>Training large AI models uses significant energy</li>
                <li>Data centres require cooling with fresh water</li>
                <li>AI tools are a complement to policy — not a substitute</li>
                <li>Benefits depend on clean electricity powering AI infrastructure</li>
              </ul>
            </div>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-climate-change" />
        <LessonNote lessonId="ai-and-climate-change" />

        <Quiz questions={quizQuestions} lessonId="ai-and-climate-change" lessonTitle="AI and climate change" />

        <LessonRating lessonId="ai-and-climate-change" />
        <RelatedLessons currentId="ai-and-climate-change" />
        <NextLesson currentId="ai-and-climate-change" />
      </div>
    </div>
  )
}
