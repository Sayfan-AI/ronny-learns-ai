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
    question: 'How does AI help electricity grid operators balance supply and demand in real time?',
    options: [
      'It switches off homes automatically when demand is too high, without any notice to customers',
      'It forecasts demand and renewable generation minutes to hours ahead, allowing operators to dispatch the right mix of power sources and avoid blackouts',
      'It replaces all human operators at the grid control centre with robots',
      'It connects every home\'s appliances directly to the grid operator, who controls them remotely',
    ],
    correctIndex: 1,
    explanation:
      'Grid operators need to match supply and demand continuously. AI forecasting models predict demand (factoring in weather, time of day, day of week, and major events) and forecast renewable output hours ahead. This lets National Grid and similar operators prepare by scheduling gas peaking plants, drawing on battery reserves, or requesting demand reduction — all before a crisis develops.',
    hint: 'Think about prediction rather than control — the AI forecasts what is about to happen.',
  },
  {
    question: 'What did DeepMind\'s AI system achieve when applied to Google\'s data centre cooling?',
    options: [
      'It reduced cooling energy use by around 40%, saving significant electricity and carbon emissions',
      'It doubled the computing power of the data centres without using any extra energy',
      'It replaced all the cooling engineers with AI robots, eliminating the human workforce',
      'It moved Google\'s servers to colder countries where air conditioning is not needed',
    ],
    correctIndex: 0,
    explanation:
      'In 2016, DeepMind applied a deep reinforcement learning system to Google\'s data centre cooling. The AI learned the complex relationships between hundreds of sensors and identified non-obvious settings that human engineers had not discovered. It reduced cooling energy use by approximately 40%, which translated into a 15% reduction in overall data centre energy consumption.',
    hint: 'The key result was a large reduction in energy used for cooling.',
  },
  {
    question: 'How does a smart electricity tariff like Octopus Energy\'s Agile tariff use AI to save customers money?',
    options: [
      'It guarantees customers the cheapest rate in the country regardless of how much electricity they use',
      'It charges prices that follow the wholesale electricity market in near-real time, so customers can shift flexible loads to cheap periods',
      'It uses AI to negotiate directly with energy suppliers on behalf of each customer every hour',
      'It gives customers free electricity at night by using spare capacity from nuclear power stations',
    ],
    correctIndex: 1,
    explanation:
      'Octopus Energy\'s Agile tariff passes wholesale electricity prices through to customers in 30-minute slots. When there is lots of wind or solar on the grid, wholesale prices drop — sometimes to zero or even negative. Customers or smart devices can shift flexible usage like EV charging, dishwashers, and washing machines to these cheap windows.',
    hint: 'The key idea is shifting when you use electricity to match cheap periods.',
  },
  {
    question: 'What is "vehicle-to-grid" (V2G) technology, and how does AI play a role?',
    options: [
      'A system where electric vehicles automatically drive themselves to the nearest charging station when the battery is low',
      'Technology that allows electric vehicles to discharge stored energy back to the home or grid when needed, with AI optimising when to charge, discharge, and how much to keep in reserve',
      'A government scheme that pays EV owners to let grid engineers remotely disable their cars during peak times',
      'An app that tells drivers the cheapest route based on current traffic and energy prices',
    ],
    correctIndex: 1,
    explanation:
      'V2G uses a bidirectional charger to allow an EV\'s battery to supply power back to the home or grid. AI optimises this cycle: it forecasts the driver\'s journey schedule, ensures enough charge remains for upcoming trips, predicts grid price signals, and maximises the financial return from selling excess energy back.',
    hint: 'V2G means the car\'s battery can send electricity back, not just receive it.',
  },
  {
    question: 'What is the main criticism of AI\'s environmental impact in the context of energy?',
    options: [
      'AI systems make too many mistakes and waste energy by having to reprocess the same data repeatedly',
      'Training and running large AI models requires enormous amounts of electricity, much of which still comes from fossil fuels — so AI\'s energy appetite may offset the efficiency gains it enables elsewhere',
      'AI prevents the construction of new renewable energy projects by blocking planning applications automatically',
      'AI systems produce large amounts of electronic waste because the chips wear out after just one year',
    ],
    correctIndex: 1,
    explanation:
      'Training a large language model is estimated to consume as much electricity as hundreds of homes use in a year. Running AI at scale across millions of users every day adds further demand. Much of this electricity still comes from fossil fuels. Critics argue that while AI can optimise energy systems, its own growing electricity demand risks undermining climate goals.',
    hint: 'The concern is about the electricity AI consumes to train and run its own systems.',
  },
]

export function AIAndEnergy() {
  useMarkVisited('ai-and-energy')

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x26A1;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and energy
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Smart grids, renewable power forecasting, your home energy bill,
            and why the AI boom is creating its own energy challenge.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-energy" />
          <ShareButton lessonTitle="AI and energy" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-yellow-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Keeping the lights on: AI and the electricity grid</h2>
          <p className="text-gray-600 leading-relaxed">
            Every second of every day, electricity supply and demand must be
            perfectly balanced. Too much supply or too little and the grid frequency drifts &mdash;
            which can damage equipment or trigger blackouts. As the UK and other countries add more
            renewables, the grid becomes harder to balance. AI forecasting is transforming how operators
            keep up.
          </p>
          <div className="bg-yellow-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-yellow-800 text-sm">Why AI matters for grids</p>
            <p className="text-yellow-700 text-sm leading-relaxed">
              Solar and wind power are intermittent &mdash; the sun doesn&apos;t always shine and
              the wind doesn&apos;t always blow. AI forecasting models can predict solar output
              (using satellite cloud data) and wind output (using weather models) up to 48 hours
              ahead, giving operators time to arrange backup power or reduce demand before a
              shortfall arrives.
            </p>
          </div>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CA;',
                label: 'Demand forecasting',
                text: 'National Grid uses machine learning to predict electricity demand by the half hour, factoring in temperature, day of week, bank holidays, and even major TV events (a half-time kettle surge during a World Cup final can add gigawatts of demand in minutes). AI models are significantly more accurate than older statistical methods.',
              },
              {
                icon: '&#x1F50B;',
                label: 'Battery storage dispatch',
                text: 'Large battery storage systems (like the Hornsdale Power Reserve in Australia, built by Tesla) use AI to decide when to charge from the grid and when to discharge — optimising both grid stability and financial returns from energy markets.',
              },
              {
                icon: '&#x1F9E0;',
                label: "DeepMind and Google's data centres",
                text: "DeepMind's reinforcement learning system, applied to Google's data centre cooling, cut cooling energy use by around 40%. The AI found non-obvious settings that human engineers hadn't discovered by exploring the enormous space of possible combinations.",
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
          <h2 className="text-2xl font-bold text-gray-800">Your home energy bill: smart tariffs and smart meters</h2>
          <p className="text-gray-600 leading-relaxed">
            AI is reaching domestic energy customers through smart meters, smart tariffs,
            and home energy management systems.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '&#x1F4B7;', title: 'Agile tariffs', text: "Octopus Energy's Agile tariff passes through wholesale electricity prices in 30-minute slots. When there's surplus wind or solar, prices can drop to zero — or even go negative (they pay you). Smart devices and EV chargers can automatically shift to these cheap windows." },
              { icon: '&#x1F4F1;', title: 'Smart meter AI', text: 'Smart meters generate granular data about when and how much electricity you use. Energy suppliers use AI to analyse these patterns, identify inefficiencies, and offer personalised tips — like noting that your storage heater is running at peak-rate times.' },
              { icon: '&#x1F3E0;', title: 'Home energy management', text: 'Systems like Nest and Hive use AI to learn your household\'s patterns and automatically schedule heating to minimise cost while keeping you comfortable. They factor in weather forecasts and your schedule.' },
              { icon: '&#x1F697;', title: 'EV smart charging', text: 'Apps like Ohme and smart chargers from Tesla automatically charge your car during cheap overnight periods, monitoring the grid and your departure time to ensure you\'re always ready to drive without paying premium rates.' },
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

        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Vehicle-to-grid: your car as a battery</h2>
          <p className="text-gray-600 leading-relaxed">
            One of the most promising ideas in the energy transition is using electric vehicle
            batteries as distributed storage. An average EV has a battery of 50&ndash;100 kWh &mdash;
            far larger than a typical home battery unit. Vehicle-to-grid (V2G) technology
            lets that stored energy flow back to your home or the grid when needed.
          </p>
          <div className="bg-emerald-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-emerald-800 text-sm">How V2G works with AI</p>
            <p className="text-emerald-700 text-sm leading-relaxed">
              The AI in a V2G system tracks the driver&apos;s journey schedule, incoming grid price
              signals, and the household&apos;s own energy demand. It decides when to charge the car,
              when to use the car&apos;s battery to power the house, and always ensures enough charge
              remains for planned journeys. Trials by Nissan, Volkswagen, and Octopus Energy in the UK
              have shown V2G customers can earn money by exporting to the grid during periods of high demand.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The awkward truth: AI uses a lot of energy</h2>
          <p className="text-gray-600 leading-relaxed">
            While AI is helping optimise energy systems, the AI industry itself has a significant
            and growing energy appetite &mdash; generating serious debate.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4A1;',
                label: 'Training costs',
                text: 'Training a large AI model like GPT-4 is estimated to consume hundreds of megawatt-hours of electricity — equivalent to what many UK homes use over years. Training happens once but is enormously intensive.',
              },
              {
                icon: '&#x1F500;',
                label: 'Inference at scale',
                text: 'Every time millions of users ask ChatGPT or Claude a question, data centre servers process the request. Summed across billions of daily queries, the ongoing cost of running AI is substantial and growing rapidly.',
              },
              {
                icon: '&#x1F30D;',
                label: 'Industry commitments',
                text: 'Google, Microsoft, and Amazon have committed to matching their data centre electricity use with renewable energy contracts. But critics note that buying renewable certificates is different from using renewable power in real time — the grid that actually powers the servers still includes fossil fuels.',
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

        <ReviewLaterButton lessonId="ai-and-energy" />
        <LessonNote lessonId="ai-and-energy" />

        <Quiz questions={quizQuestions} lessonId="ai-and-energy" lessonTitle="AI and energy" />

        <LessonRating lessonId="ai-and-energy" />
        <RelatedLessons currentId="ai-and-energy" />
        <NextLesson currentId="ai-and-energy" />
      </div>
    </div>
  )
}
