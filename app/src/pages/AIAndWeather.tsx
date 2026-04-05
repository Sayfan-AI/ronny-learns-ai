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
import { DifficultyBadge } from '../components/DifficultyBadge'

const LESSON_TITLE = 'AI and the weather'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is the traditional method of weather forecasting called, and what does it use?',
    options: [
      'AI forecasting — it uses neural networks trained on satellite imagery',
      'Numerical weather prediction (NWP) — it uses physics equations and supercomputers to simulate the atmosphere based on current conditions',
      'Statistical forecasting — it simply looks up what the weather was on the same date in previous years',
      'Barometric forecasting — it uses air pressure readings from a network of barometers',
    ],
    correctIndex: 1,
    explanation:
      'Numerical weather prediction (NWP) has been the backbone of weather forecasting since the 1950s. It divides the atmosphere into a three-dimensional grid and applies physics equations (governing heat, pressure, wind, moisture) to predict how each grid cell will evolve over time. This requires enormous computing power — the European Centre for Medium-Range Weather Forecasts (ECMWF) operates one of the most powerful supercomputers in the world purely for NWP.',
    hint: 'Think about the word "numerical" — it involves solving mathematical equations, not just pattern matching.',
  },
  {
    question: "What did Google DeepMind's GraphCast model achieve in 2023?",
    options: [
      'It accurately predicted the precise location of every thunderstorm in Europe for an entire year',
      'It outperformed the ECMWF\'s established numerical weather prediction system on the majority of key forecast metrics, producing 10-day forecasts in under a minute',
      'It replaced all human meteorologists at the UK Met Office with fully automated AI systems',
      'It predicted the exact date and intensity of every hurricane in the 2023 Atlantic season with perfect accuracy',
    ],
    correctIndex: 1,
    explanation:
      "GraphCast, published by Google DeepMind in November 2023, demonstrated that an AI model trained on 40 years of historical weather data could outperform ECMWF's high-resolution forecast (HRES) on 90% of 1,380 test targets — and do it in under a minute on a single computer, compared with hours on a supercomputer for traditional NWP. It doesn't replace physics-based models but shows AI can learn patterns that those models miss.",
    hint: 'Think about a comparison against the world-leading traditional forecasting system.',
  },
  {
    question: 'How does the UK Met Office currently use AI in weather forecasting?',
    options: [
      'The Met Office has fully replaced all its traditional models with AI and no longer uses supercomputers',
      'The Met Office uses AI to complement traditional models — for example through its IMPROVER project which uses deep learning to enhance the resolution and accuracy of existing forecasts',
      'The Met Office uses AI only for public-facing weather apps, not for actual forecasting',
      'The Met Office is legally prevented from using AI due to government regulations on public sector technology',
    ],
    correctIndex: 1,
    explanation:
      "The Met Office has been actively integrating AI through its Informatics Lab and the IMPROVER (Integrated Model Post-processing Improvements using Verification and Ensemble Resampling) project. IMPROVER uses deep learning to post-process the output of traditional models, improving their spatial resolution and accuracy. The Met Office position is that AI and physics-based models are complementary — AI learns patterns, but physics models provide the underlying structure.",
    hint: 'Look for the answer that reflects a collaborative approach rather than a total replacement.',
  },
  {
    question: 'Why might AI weather models struggle with future climate conditions?',
    options: [
      'AI models require internet access to function and could be taken offline by hackers',
      'AI models are trained on historical weather data — if climate change produces conditions that have never occurred before, the AI may not have learned how to handle them',
      'AI models only work in countries with advanced satellite networks, so developing nations will never benefit',
      'AI models are too slow to process real-time weather data compared with traditional supercomputers',
    ],
    correctIndex: 1,
    explanation:
      "This is one of the most important caveats about AI weather forecasting. Models like GraphCast are trained on decades of historical data — they have learned the patterns of the climate as it was. As climate change pushes temperatures, storm intensities, and weather patterns beyond historical ranges, AI models may encounter conditions they were not trained on and perform less reliably. Physics-based models, by contrast, apply fundamental equations that hold regardless of whether conditions are historically unprecedented.",
    hint: 'Think about the fundamental limitation of learning from the past when the future looks different.',
  },
  {
    question: 'Which of the following is a practical application of AI weather forecasting for renewable energy?',
    options: [
      'AI is used to physically move wind turbines to face the strongest winds automatically',
      'AI provides hyperlocal wind and solar irradiance forecasts that help energy grid operators predict how much power wind farms and solar panels will generate, improving grid balancing',
      'AI forecasts are used to decide when to switch off all renewable energy and use gas instead',
      'AI weather models are only used for consumer smartphone apps and have no industrial applications',
    ],
    correctIndex: 1,
    explanation:
      'Accurate short-term forecasts of wind speed and solar irradiance are critically important for managing electricity grids. If a grid operator knows that wind output will drop by 30% in six hours, they can schedule backup generation in advance — avoiding blackouts and reducing the need for expensive last-minute power purchases. Companies like The Weather Company (IBM) and Climacell provide AI-powered hyperlocal forecasts specifically for renewable energy operators.',
    hint: 'Think about how knowing what the weather will do in the next few hours helps an energy company plan ahead.',
  },
]

export function AIAndWeather() {
  useMarkVisited('ai-and-weather')

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x26C5;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and the weather
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI models are beating decades-old supercomputer systems at forecasting,
            and what that means for flood warnings, renewable energy, and our changing climate.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <DifficultyBadge level="Beginner" />
          </div>
          <CompletedBadge lessonId="ai-and-weather" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How weather forecasting has worked for 70 years</h2>
          <p className="text-gray-600 leading-relaxed">
            Your phone confidently tells you it will rain at 3:47 pm. How does it know?
          </p>
          <p className="text-gray-600 leading-relaxed">
            The answer, until recently, was a technique called <strong>numerical weather prediction</strong> (NWP).
            Scientists divide the atmosphere into a vast three-dimensional grid &mdash; imagine a huge layer cake
            of boxes stacked from the ground to the stratosphere. Into each box goes current measurements of
            temperature, pressure, humidity, and wind. Then a supercomputer applies physics equations &mdash;
            the same laws that govern how air moves and heat transfers &mdash; to predict how each box will
            change in the next few minutes. Repeat this millions of times, and you get a forecast.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-blue-800 text-sm">The challenge: chaos</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              The problem is that the atmosphere is chaotic. A tiny error in the starting conditions &mdash; a
              slightly wrong temperature reading from one weather station &mdash; compounds over time and can
              produce a wildly different forecast after a few days. This is the &ldquo;butterfly effect&rdquo;: in
              theory, a butterfly flapping its wings in Brazil could influence whether it storms in London a
              month later.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The AI revolution in forecasting</h2>
          <p className="text-gray-600 leading-relaxed">
            AI takes a completely different approach. Instead of simulating the physics, it learns
            patterns from decades of historical weather data.
          </p>
          <p className="text-gray-600 leading-relaxed">
            In November 2023, Google DeepMind published <strong>GraphCast</strong> &mdash; an AI model trained
            on 40 years of global weather records. The results were startling: GraphCast outperformed the
            European Centre for Medium-Range Weather Forecasts (ECMWF) &mdash; the world&apos;s gold standard for
            numerical prediction &mdash; on 90% of forecast targets. And it produced a 10-day global forecast
            in under a minute on a single laptop, versus hours on a supercomputer.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F310;',
                label: 'GraphCast (Google DeepMind, 2023)',
                text: 'Trained on ERA5, a 40-year reanalysis dataset from ECMWF. Outperformed HRES (the leading physics-based model) on most metrics. Produced 10-day global forecasts in under 60 seconds.',
              },
              {
                icon: '&#x1F30A;',
                label: 'Aurora (Microsoft, 2024)',
                text: 'Microsoft\'s model, trained on over one million hours of diverse weather and climate data. Achieved state-of-the-art performance on air quality forecasts, ocean wave prediction, and tropical cyclone tracking.',
              },
              {
                icon: '&#x1F4A8;',
                label: 'Pangu-Weather (Huawei, 2023)',
                text: 'Huawei\'s model showed that AI could match or beat NWP at predicting the tracks of tropical cyclones — one of the most challenging forecasting problems, with enormous implications for disaster preparedness.',
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
          <h2 className="text-2xl font-bold text-gray-800">The UK Met Office and AI</h2>
          <p className="text-gray-600 leading-relaxed">
            The UK&apos;s Met Office is one of the world&apos;s most respected weather forecasting organisations.
            Rather than abandoning its traditional models, the Met Office is using AI to enhance them.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F52C;',
                label: 'IMPROVER project',
                text: 'The Met Office\'s IMPROVER system uses deep learning to post-process the output of traditional physics-based models, sharpening their spatial resolution and improving accuracy — like upscaling a blurry photo to a cleaner version.',
              },
              {
                icon: '&#x1F9EA;',
                label: 'Informatics Lab',
                text: "The Met Office Informatics Lab has been experimenting with machine learning for years — applying it to cloud detection in satellite imagery, improving rainfall forecasts, and making model outputs faster to interpret.",
              },
              {
                icon: '&#x1F91D;',
                label: 'Complementary, not competitive',
                text: "The Met Office position is that AI and physics-based models are partners, not rivals. AI learns patterns humans would miss; physics models ensure the forecast obeys the laws of the atmosphere.",
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

        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Real-world applications</h2>
          <p className="text-gray-600 leading-relaxed">
            Better forecasting has life-and-death consequences.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '&#x1F30A;', title: 'Flood warnings', text: "AI models can predict where and when rivers will overflow with greater lead time. The Environment Agency uses AI-enhanced forecasting to issue earlier warnings, giving communities more time to prepare." },
              { icon: '&#x1F300;', title: 'Storm track prediction', text: "Knowing where a hurricane will make landfall hours or days earlier can save thousands of lives. AI models have demonstrated improved skill at tracking tropical cyclones compared with traditional methods." },
              { icon: '&#x1F33E;', title: 'Farming', text: "Hyperlocal, hourly forecasts help farmers decide when to plant, irrigate, or harvest. A single accurate frost warning can protect a season's crop. Companies like The Weather Company provide AI-powered farm-level forecasts." },
              { icon: '&#x26A1;', title: 'Renewable energy', text: "Grid operators need accurate short-term wind and solar forecasts to balance supply and demand. AI forecasting helps them schedule backup power in advance, reducing costs and the risk of blackouts." },
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

        <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The limits: what AI cannot yet do</h2>
          <p className="text-gray-600 leading-relaxed">
            AI weather models are impressive, but they come with important caveats.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F321;&#xFE0F;',
                label: 'Trained on the past, blind to the future',
                text: 'AI models learn patterns from historical data. As climate change pushes temperatures and weather patterns beyond anything in the historical record, AI may encounter conditions it has never seen — and its predictions could become unreliable. Physics-based models apply equations that hold regardless of precedent.',
              },
              {
                icon: '&#x1F4CA;',
                label: 'Uncertainty quantification',
                text: "Traditional NWP systems produce ensemble forecasts — running the model hundreds of times with slightly different starting conditions to estimate how confident the forecast is. This uncertainty information is valuable for risk management. Early AI models were less good at this, though it is an active research area.",
              },
              {
                icon: '&#x1F4BB;',
                label: 'Interpretability',
                text: "When a physics-based model says it will rain, meteorologists can trace exactly why — which air masses, which fronts, which pressure gradients. When an AI model makes a forecast, it can be much harder to understand why. This matters for trust, and for identifying when the AI is going wrong.",
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

        <ReviewLaterButton lessonId="ai-and-weather" />
        <LessonNote lessonId="ai-and-weather" lessonTitle={LESSON_TITLE} />

        <Quiz questions={quizQuestions} lessonId="ai-and-weather" lessonTitle={LESSON_TITLE} />

        <LessonFeedback lessonId="ai-and-weather" />
        <LessonRating lessonId="ai-and-weather" />
        <RelatedLessons currentId="ai-and-weather" />
        <NextLesson currentId="ai-and-weather" />
      </div>
    </div>
  )
}
