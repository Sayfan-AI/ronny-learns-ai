import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'Training a large AI model like GPT-4 uses roughly how much electricity?',
    options: [
      'About the same as charging a smartphone for a week',
      'About the same as powering a single home for a month',
      'Enough to power hundreds of homes for a year — a huge amount of energy',
      'Less energy than running a laptop for a day',
    ],
    correctIndex: 2,
    explanation:
      'Training a large AI model is extremely energy-intensive. Estimates for models like GPT-4 suggest training consumed electricity equivalent to powering hundreds of average homes for a year. This is why the AI industry is actively working on more efficient training methods.',
  },
  {
    question: 'Why do AI data centres use large amounts of water?',
    options: [
      'Water is used as a conductor to improve processor speed',
      'Cooling systems use water to prevent servers from overheating',
      'Water powers the electricity generators',
      'AI models are stored on water-cooled hard drives only',
    ],
    correctIndex: 1,
    explanation:
      'Data centres generate enormous amounts of heat from running thousands of processors continuously. Water-based cooling systems are used to keep this equipment at safe operating temperatures. A large data centre can use millions of litres of water every day.',
  },
  {
    question: 'What does "Green AI" refer to?',
    options: [
      'AI systems that are painted green for environmental awareness',
      'AI that only runs on solar power exclusively',
      'Efforts to make AI more energy-efficient and reduce its environmental footprint',
      'AI used to make green-coloured products',
    ],
    correctIndex: 2,
    explanation:
      'Green AI is a research area focused on making AI systems more computationally and energy-efficient — using less power to do the same work, building smaller models where possible, and running AI on renewable energy. It is about reducing the environmental cost of AI.',
  },
  {
    question: 'Compared to a Google search, how much energy does a typical ChatGPT query use?',
    options: [
      'Less energy than a Google search',
      'Roughly the same',
      'Roughly 10 times more energy than a Google search',
      'Exactly 100 times more',
    ],
    correctIndex: 2,
    explanation:
      'Estimates suggest a single query to a large language model like ChatGPT uses roughly 10 times more energy than a traditional Google search. This is because AI models require far more computation than a search index lookup. The gap is narrowing as models become more efficient.',
  },
]

export function AIAndEnvironment() {
  useMarkVisited('ai-and-environment')
  useLessonVisit('ai-and-environment')
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F331;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and the environment
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The energy and water AI uses, the carbon footprint of your AI queries,
            and what the industry is doing to go greener.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-environment" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Why AI has an environmental cost</h2>
          <p className="text-gray-600 leading-relaxed">
            Every time you send a message to an AI chatbot, run an image generator, or use a
            recommendation algorithm, computers somewhere in the world are doing enormous amounts
            of calculation. Those computers need electricity to run and cooling systems to stop them
            overheating.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For a single query, the environmental cost is tiny. But AI is used billions of times per
            day across the world &mdash; and training the large models that power these tools requires
            vast amounts of energy in concentrated bursts.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-green-800 font-semibold text-sm">The key distinction</p>
            <p className="text-green-700 text-sm leading-relaxed mt-1">
              There are two separate environmental costs: <strong>training</strong> (building the model
              from scratch, done once, very intensive) and <strong>inference</strong> (running the model
              to answer your question, done billions of times, lower per-query but adds up).
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The energy cost of training AI</h2>
          <p className="text-gray-600 leading-relaxed">
            Training a large AI model means running thousands of specialised computer chips
            non-stop for weeks or months, adjusting billions of internal settings until the
            model learns to do its job well. This process uses a remarkable amount of electricity.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x26A1;',
                label: 'GPT-3 training',
                text: 'OpenAI\'s GPT-3 model was estimated to have used around 1,287 megawatt-hours of electricity during training — roughly equivalent to the annual electricity consumption of 120 average UK homes.',
              },
              {
                icon: '&#x1F4CA;',
                label: 'Carbon emissions',
                text: 'Depending on where the data centre is located and whether it runs on renewable energy, training a large model can emit hundreds of tonnes of CO2 — comparable to the lifetime emissions of several petrol-powered cars.',
              },
              {
                icon: '&#x1F504;',
                label: 'Getting more efficient',
                text: 'Newer models are trained more efficiently than older ones. Researchers have shown that AI training efficiency has improved dramatically — the same capability now costs a fraction of the energy it did a few years ago.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Water: the hidden cost</h2>
          <p className="text-gray-600 leading-relaxed">
            Electricity is not the only resource AI data centres consume. They also use enormous
            amounts of water to cool their equipment.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Servers generate heat. Without cooling, they would quickly overheat and fail. Large
            data centres pump water through cooling systems to carry that heat away. The water is
            then evaporated or discharged, and fresh water is drawn in.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-2">
            <p className="text-blue-800 font-semibold text-sm">In concrete terms</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              Microsoft estimated that training GPT-4 consumed around 700,000 litres of fresh water.
              Google reported that its data centres globally used about 5.6 billion gallons of water
              in 2022. In regions already facing water scarcity, this is a meaningful concern.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Your everyday AI queries add up</h2>
          <p className="text-gray-600 leading-relaxed">
            Once a model is trained, it is used for inference &mdash; answering your questions.
            Individual queries are much less energy-intensive than training, but the sheer scale
            of usage means inference is also significant.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'AI vs. search',
                text: 'A typical query to ChatGPT uses roughly 10 times more energy than a traditional Google search. As AI is built into more products, this difference matters at global scale.',
              },
              {
                label: 'Image generation',
                text: 'Generating a single AI image uses significantly more energy than a text query, because it requires running the model many times over in a process called diffusion.',
              },
              {
                label: 'Video AI',
                text: 'AI tools that generate or process video are especially energy-intensive. Video involves far more data than text or images, and the computation scales accordingly.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-gray-800 text-sm">{label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What is being done: Green AI</h2>
          <p className="text-gray-600 leading-relaxed">
            The AI industry is aware of these concerns and is working on multiple fronts to reduce
            its environmental impact &mdash; partly from ethical motivation, partly because energy is
            one of the biggest costs in running AI at scale.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x2600;&#xFE0F;',
                label: 'Renewable energy pledges',
                text: 'Google, Microsoft, and Amazon have all made commitments to run their data centres on 100% renewable energy. Google already matches its energy use with renewable energy purchases. The challenge is ensuring renewables are available when and where the power is needed.',
              },
              {
                icon: '&#x1F9EE;',
                label: 'More efficient models',
                text: 'Researchers are developing smaller models that perform nearly as well as large ones — using a fraction of the energy. Techniques like model distillation, quantisation, and sparse architectures all help. The same AI capability is getting cheaper and greener every year.',
              },
              {
                icon: '&#x1F4CD;',
                label: 'Smarter data centre location',
                text: 'Some companies are building data centres in cool climates (reducing cooling costs) or near renewable energy sources like hydroelectric dams. Iceland, with its geothermal energy and cold climate, has become a popular location.',
              },
              {
                icon: '&#x1F4CF;',
                label: 'Reporting and transparency',
                text: 'Researchers are pushing for AI companies to report the energy and water used to train and run their models — similar to how companies report carbon emissions. This is still voluntary, but growing pressure is making it more common.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What you can do</h2>
          <p className="text-gray-600 leading-relaxed">
            Individual actions have a small impact compared to industry-wide changes, but they
            still matter &mdash; and developing habits of mindful AI use is worthwhile.
          </p>
          <div className="space-y-3">
            {[
              'Use AI for tasks where it genuinely helps, rather than reflexively for everything.',
              'Prefer text queries over image or video generation when either would work.',
              'Choose AI products from companies with credible renewable energy commitments.',
              'Support policies and researchers working on AI efficiency and transparency.',
            ].map((tip) => (
              <div key={tip} className="flex gap-3 items-start">
                <span className="text-green-500 font-bold flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-bold text-blue-800">The bottom line</h2>
          <p className="text-blue-700 leading-relaxed">
            AI has a real environmental footprint &mdash; in electricity, water, and carbon. Training
            large models is especially intensive, though the industry is getting more efficient.
          </p>
          <p className="text-blue-700 leading-relaxed">
            The good news is that AI can also help solve environmental problems: optimising energy
            grids, improving weather forecasting, accelerating materials research for clean energy.
            The net environmental impact of AI will depend on how we build and use it.
          </p>
        </div>

        <Quiz
          lessonId="ai-and-environment"
          lessonTitle="AI and the environment"
          questions={quizQuestions}
        />

        <LessonNote lessonId="ai-and-environment" />

        {/* Rating */}
        <LessonRating lessonId="ai-and-environment" />

        <RelatedLessons currentId="ai-and-environment" />

        <NextLesson currentId="ai-and-environment" />

      </div>
    </div>
  )
}
