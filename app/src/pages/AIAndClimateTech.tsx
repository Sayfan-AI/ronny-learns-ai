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

const LESSON_TITLE = 'AI and climate tech — wind and solar optimisation, smart grids, carbon capture, and Net Zero'

const KEY_TAKEAWAYS = [
  'AI is significantly improving the efficiency of renewable energy: wind farm control systems use AI to adjust turbine angles in real time, boosting energy yield by up to 20%, while solar forecasting AI predicts cloud cover to help grid operators balance supply and demand.',
  'Smart grid AI manages the complex task of balancing electricity supply and demand across a network, incorporating variable renewable sources, battery storage, and electric vehicle charging — a task that is impossible to manage manually at scale.',
  'AI is accelerating materials discovery for carbon capture and next-generation batteries, identifying promising candidates from millions of possible compounds far faster than traditional laboratory methods.',
  'The UK Net Zero Strategy relies heavily on AI-enabled efficiency gains in energy, buildings, and transport. The AI Energy Accelerator is a government programme to speed up the use of AI in the energy sector.',
  'A significant tension exists: the AI industry\'s own energy consumption is growing rapidly, driven by training large models and running data centres. Some estimates suggest AI data centres could consume as much electricity as a medium-sized country by 2030.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How do AI-controlled wind farm systems improve energy production?',
    options: [
      'They replace human maintenance workers entirely, reducing downtime through fully automated repairs',
      'They adjust turbine blade angles and speeds in real time based on local wind conditions, increasing energy yield',
      'They predict when wind speeds will be too high and shut down turbines in advance to prevent damage',
      'They coordinate with neighbouring wind farms to ensure each turbine captures a designated share of wind',
    ],
    correctIndex: 1,
    explanation: 'AI control systems adjust turbine yaw (direction) and blade pitch continuously based on real-time wind data from sensors and lidar, extracting more energy from available wind conditions.',
  },
  {
    question: 'What problem does smart grid AI solve that traditional grid management cannot?',
    options: [
      'It enables electricity to travel faster through cables, reducing transmission losses',
      'It replaces the need for electricity meters in homes and businesses',
      'It balances highly variable renewable supply with unpredictable demand in real time across a complex network',
      'It ensures electricity bills are always calculated correctly without human error',
    ],
    correctIndex: 2,
    explanation: 'Traditional grid management worked with predictable, controllable power stations. Modern grids with solar, wind, EVs, and batteries require AI to balance supply and demand across thousands of variable sources and sinks in real time.',
  },
  {
    question: 'How is AI accelerating carbon capture technology development?',
    options: [
      'AI-powered robots are installing carbon capture equipment at power stations faster than human workers could',
      'AI analyses satellite data to identify the most suitable sites for carbon capture facilities worldwide',
      'AI screens millions of potential materials for desirable properties, identifying promising candidates for new sorbents and membranes far faster than lab experiments alone',
      'AI monitors carbon capture plants and automatically shuts them down if emissions targets are being missed',
    ],
    correctIndex: 2,
    explanation: 'Materials discovery is one of the highest-value applications of AI in climate tech. What would take decades of lab work can be narrowed down in weeks using AI models trained on molecular property data.',
  },
  {
    question: 'What is the "AI energy paradox" in the context of climate change?',
    options: [
      'AI systems designed to reduce energy use are too expensive to deploy in developing countries',
      'AI is both a powerful tool for tackling climate change and itself a growing source of energy consumption and carbon emissions',
      'Renewable energy is not reliable enough to power the data centres needed to train AI models',
      'AI cannot accurately model complex climate systems because they are inherently unpredictable',
    ],
    correctIndex: 1,
    explanation: 'AI training and inference require significant computing power. The energy footprint of AI data centres is growing rapidly, creating a tension between AI\'s potential climate benefits and its own environmental costs.',
  },
  {
    question: 'What role does the UK government\'s AI Energy Accelerator play?',
    options: [
      'It builds government-owned AI data centres powered entirely by renewable energy',
      'It funds AI research at UK universities to develop new nuclear fusion reactor designs',
      'It supports projects that use AI to improve energy system efficiency and accelerate the transition to Net Zero',
      'It regulates how much energy AI companies are allowed to consume annually',
    ],
    correctIndex: 2,
    explanation: 'The AI Energy Accelerator is a DESNZ and Innovate UK programme designed to help the energy sector adopt AI faster, with a focus on grid management, renewable integration, and demand flexibility.',
  },
]

export function AIAndClimateTech() {
  const lessonId = 'ai-and-climate-tech'
  useMarkVisited(lessonId)

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-3">
          <div className="text-5xl mb-2">&#x26A1;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">AI and climate tech</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI is optimising wind and solar energy, managing smart grids, accelerating carbon capture research — and the energy paradox it creates.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <span className="inline-block bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-semibold px-3 py-1 rounded-full">Intermediate</span>
            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">7 min read</span>
          </div>
        </div>

        <CompletedBadge lessonId={lessonId} />

        <div className="flex justify-end gap-2">
          <ReviewLaterButton lessonId={lessonId} />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">AI as a climate tool</h2>
          <p>
            Climate change is arguably the most complex systems problem humanity has ever faced. Managing an electricity grid with millions of solar panels, thousands of wind turbines, and tens of millions of electric vehicles requires handling more variables simultaneously than any human team could track. AI is increasingly central to making this work.
          </p>
          <p>
            This lesson covers four key areas: optimising renewable energy generation, managing smart electricity grids, accelerating climate solutions research, and the uncomfortable tension between AI's potential climate benefits and its own energy footprint.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Smarter wind and solar</h2>
          <p>
            Wind turbines are sophisticated machines with hundreds of sensors. AI control systems process this data in real time — adjusting blade angle, rotor speed, and turbine direction (yaw) to extract maximum energy from the wind at any given moment. Google's DeepMind demonstrated that applying AI to a wind farm portfolio increased energy value by approximately 20%, primarily by scheduling output to match high-demand periods.
          </p>
          <p>
            Solar forecasting AI predicts cloud cover, atmospheric conditions, and panel output minutes to hours ahead. Grid operators use these forecasts to decide when to call on backup generation or battery storage, avoiding the wasteful "curtailment" that happens when solar produces more than the grid can use in that moment.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Smart grid management</h2>
          <p>
            The electricity grid was designed around large, predictable power stations. The transition to renewables has made it vastly more complex: supply is variable (the wind doesn't always blow), demand is changing (millions of EVs charging at night), and new actors — home batteries, heat pumps, industrial flexibility — are constantly entering the system.
          </p>
          <p>
            AI manages this complexity in several ways: predicting demand at the national and regional level, scheduling when to charge or discharge grid-scale batteries, identifying faults before they cause outages, and — increasingly — coordinating "virtual power plants" that aggregate thousands of domestic batteries and EV chargers into a controllable resource.
          </p>
          <p>
            National Grid Electricity System Operator (ESO) in the UK uses machine learning for demand forecasting and is actively expanding AI applications across grid operations. The goal is a grid that can accommodate 100% renewable generation while keeping the lights on.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Accelerating climate solutions research</h2>
          <p>
            Materials science is foundational to climate technology: better batteries for EVs and grid storage, more effective carbon capture sorbents, cheaper electrolysers for green hydrogen. The traditional process of discovering new materials — synthesise a candidate, test its properties, iterate — takes years per compound.
          </p>
          <p>
            AI dramatically accelerates this by learning from databases of known compounds and predicting the properties of new ones before they are made. Google DeepMind's GNoME model identified millions of new stable crystal structures in 2023 — the equivalent of centuries of laboratory work. Microsoft's AI4Science initiative is applying similar approaches to carbon capture chemistry.
          </p>
          <p>
            AI is also improving climate models themselves — running ensemble forecasts faster, identifying patterns in extreme weather data, and downscaling global models to regional resolution for better local planning.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">The AI energy paradox</h2>
          <p>
            AI's potential contribution to Net Zero is significant. But the AI industry itself has a rapidly growing energy footprint. Training a large language model can require as much electricity as thousands of homes use in a year. The proliferation of AI assistants, image generators, and AI-enabled search means inference (running models) is consuming ever-larger amounts of energy.
          </p>
          <p>
            Some estimates project that AI data centres could consume 1–3% of global electricity by 2030 — comparable to aviation. Whether this energy consumption is net-positive for the climate depends on whether the efficiency gains AI enables in energy, transport, and buildings outweigh the energy AI itself consumes — and whether data centres are powered by clean energy.
          </p>
          <p>
            This tension is increasingly acknowledged by AI companies, many of whom have announced net-zero commitments for their data centres. The UK government's AI Opportunities Action Plan includes commitments to ensure new AI infrastructure is powered by clean energy.
          </p>
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <LessonNote lessonId={lessonId} />

        <Quiz lessonId={lessonId} questions={quizQuestions} />

        <LessonRating lessonId={lessonId} />
        <LessonFeedback lessonId={lessonId} />

        <RelatedLessons currentId={lessonId} />
        <NextLesson currentId={lessonId} />
      </div>
    </div>
  )
}
