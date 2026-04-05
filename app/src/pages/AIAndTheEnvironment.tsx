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

const LESSON_TITLE = 'AI and the environment'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is the main reason that training large AI models uses so much energy?',
    options: [
      'AI models are deliberately designed to waste electricity as a security measure',
      'Training requires running billions of calculations across thousands of specialised chips for days or weeks',
      'AI companies are required by law to use the most powerful hardware available',
      'The internet connection needed to download training data uses most of the energy',
    ],
    correctIndex: 1,
    explanation:
      'Training a large AI model involves processing vast amounts of data through billions of mathematical operations, running on thousands of specialised graphics processing units (GPUs) or AI chips simultaneously. This process can take weeks and draws enormous amounts of electricity.',
    hint: 'Think about the scale of computation involved — billions of calculations, thousands of chips, running for days.',
  },
  {
    question: "What is the 'AI paradox' when it comes to the environment?",
    options: [
      'AI uses no electricity when turned off, but huge amounts when switched on',
      'AI is both a significant contributor to energy use and carbon emissions, and also one of the most powerful tools available for tackling climate change',
      'AI companies claim to be green but actually use fossil fuels exclusively',
      'AI models get less accurate the greener the energy used to power them',
    ],
    correctIndex: 1,
    explanation:
      'The AI paradox is that the same technology causing environmental concern is also being used to address environmental problems. AI consumes large amounts of energy (contributing to emissions), but is also being used to optimise renewable energy grids, improve weather and climate forecasting, detect illegal deforestation, and reduce industrial waste.',
    hint: "The word 'paradox' means something that seems contradictory but is true — AI is both part of the problem and part of the solution.",
  },
  {
    question: 'Which of the following is a real-world example of AI being used to reduce energy consumption?',
    options: [
      "Google's DeepMind AI reduced the energy used to cool its data centres by about 40%",
      'AI models automatically switch off all servers at night to save electricity',
      'AI has replaced all human energy inspectors, saving their travel emissions',
      'AI-powered smart meters ban users from using appliances during peak hours',
    ],
    correctIndex: 0,
    explanation:
      "In 2016, Google reported that its DeepMind AI had reduced the energy needed to cool its data centres by around 40% by learning to predict cooling needs and adjust systems in real time. This is a concrete example of AI reducing its own industry's footprint.",
    hint: 'Think about the company that owns DeepMind — they also run large data centres that need cooling.',
  },
  {
    question: 'How does using AI compare in energy terms to a regular Google search?',
    options: [
      'They use exactly the same amount of energy',
      'A regular Google search uses significantly more energy than an AI query',
      'Generating a response from a large AI model uses roughly 10 times more energy than a standard web search',
      'AI queries use less energy because they store answers and never repeat the calculation',
    ],
    correctIndex: 2,
    explanation:
      "Research suggests that a single query to a large language model uses roughly 10 times the energy of a standard Google search — though estimates vary widely depending on the model and infrastructure. This doesn't mean you should never use AI, but it is worth knowing the difference in scale, especially as AI use grows rapidly.",
    hint: 'AI models do far more computation per query than a search index lookup.',
  },
  {
    question: 'What practical step can an ordinary user take to reduce the environmental impact of their AI use?',
    options: [
      'Avoid using any AI tools completely — the only ethical choice',
      'Use AI for tasks where it genuinely adds value, prefer efficient smaller models for simple tasks, and support providers committed to renewable energy',
      'Delete your AI accounts once a month and create new ones, which resets the carbon counter',
      'Only use AI between midnight and 6am when electricity is greener',
    ],
    correctIndex: 1,
    explanation:
      'The most practical approach is to be thoughtful: use AI where it genuinely helps you, be aware that larger models use more energy, and consider which providers are making credible commitments to clean energy. Avoiding AI entirely is not realistic for most people, but informed, deliberate use is meaningful.',
    hint: 'The answer balances practicality with responsibility — not an extreme in either direction.',
  },
]

export function AIAndTheEnvironment() {
  useMarkVisited('ai-and-the-environment')

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F331;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and the environment
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The carbon cost of AI, the water used to keep servers cool,
            and the paradox that the technology contributing to the problem
            may also be one of our best tools for solving it.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-the-environment" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How much energy does AI actually use?</h2>
          <p className="text-gray-600 leading-relaxed">
            When you type a message to an AI, it looks instant. Behind the scenes, your words travel to a data
            centre where thousands of specialised chips perform billions of calculations to generate a reply.
            This happens in seconds, but it is not free.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A single query to a large language model uses roughly <strong>ten times</strong> the energy of a
            standard Google search. That sounds alarming, but to put it in proportion: one AI query uses about
            the same energy as leaving a light bulb on for a minute. The problem is scale &mdash; billions of
            queries every day add up quickly.
          </p>
          <div className="bg-green-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-green-800 text-sm">The big energy costs in AI</p>
            <ul className="text-green-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li><strong>Training:</strong> building a large AI model from scratch can use as much electricity as hundreds of homes use in a year</li>
              <li><strong>Running (inference):</strong> every query to every user, multiplied by billions of users, every day</li>
              <li><strong>Cooling:</strong> data centres generate enormous heat; cooling them uses both electricity and vast quantities of water</li>
              <li><strong>Manufacturing:</strong> building the specialised AI chips requires energy-intensive processes and rare materials</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Water, not just electricity</h2>
          <p className="text-gray-600 leading-relaxed">
            Energy use gets most of the attention, but water use is also significant. Data centres use water for
            cooling &mdash; either directly in cooling towers or indirectly through the water used by power stations
            to generate the electricity they consume.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4A7;',
                label: 'Microsoft',
                text: "Microsoft reported that its global water consumption rose 34% in a single year (2021 to 2022), which the company partly attributed to AI development. A small conversation with an AI chatbot can use the equivalent of a bottle of water.",
              },
              {
                icon: '&#x1F30E;',
                label: 'Why location matters',
                text: 'Data centres in water-scarce regions (like parts of the US southwest) are particularly concerning. A data centre that uses water for cooling in a drought-prone area has a very different environmental impact from one near a river in a wet climate.',
              },
              {
                icon: '&#x1F9CA;',
                label: 'What companies are doing',
                text: 'Some data centres use air cooling or heat recycling instead of water. Others are being built in cooler climates — Iceland and Norway are popular locations partly because cold air reduces cooling costs and the electricity comes from geothermal and hydropower.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The AI paradox</h2>
          <p className="text-gray-600 leading-relaxed">
            Here is the uncomfortable truth: AI contributes to the very problems it is being asked to help solve.
            Data centres run on electricity, much of which still comes from fossil fuels. Training a cutting-edge
            AI model can produce hundreds of tonnes of CO&#x2082; &mdash; comparable to several transatlantic flights.
          </p>
          <p className="text-gray-600 leading-relaxed">
            At the same time, AI is one of the most promising tools we have for addressing climate change:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '&#x26A1;', title: 'Smart energy grids', text: 'AI optimises when and where electricity flows, reducing waste and helping integrate unpredictable renewable sources like wind and solar.' },
              { icon: '&#x1F4CA;', title: 'Climate forecasting', text: "AI models like Google DeepMind's GraphCast produce weather and climate forecasts faster and more accurately than traditional supercomputers, helping governments plan for extreme weather." },
              { icon: '&#x1F333;', title: 'Deforestation detection', text: 'Satellite imagery analysed by AI can detect illegal logging within hours, enabling faster intervention. Global Forest Watch uses AI to monitor forests in near real time.' },
              { icon: '&#x1F3ED;', title: 'Industrial efficiency', text: 'AI is being used to reduce energy use in steel mills, cement plants, and shipping routes — sectors responsible for a large share of global emissions.' },
            ].map(({ icon, title, text }) => (
              <div key={title} className="bg-amber-50 rounded-xl p-4">
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
          <h2 className="text-2xl font-bold text-gray-800">What the big tech companies are doing</h2>
          <p className="text-gray-600 leading-relaxed">
            The major AI companies have all made environmental commitments &mdash; though how meaningful those
            commitments are is subject to debate.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4BB;',
                label: 'Microsoft',
                text: "Pledged to be carbon-negative by 2030 and to remove all the carbon it has ever emitted by 2050. It also committed to being 'water positive' — returning more water to local environments than it uses. Progress has been mixed, with emissions rising alongside AI investment.",
              },
              {
                icon: '&#x1F50D;',
                label: 'Google',
                text: "Aims to run on 24/7 carbon-free energy by 2030 — meaning every hour of every day matched by clean energy from the same grid. DeepMind's AI also reduced Google data centre cooling energy by around 40% in real-world tests.",
              },
              {
                icon: '&#x1F916;',
                label: 'Anthropic (Claude)',
                text: 'Anthropic has committed to measuring and reducing the carbon footprint of its AI operations. The company invests in AI safety research, part of which includes making AI systems more efficient — smaller, faster models that achieve the same results with less computation.',
              },
              {
                icon: '&#x26A0;&#xFE0F;',
                label: 'The sceptic view',
                text: "Environmental groups point out that many of these commitments rely on purchasing renewable energy certificates rather than directly powering data centres with clean energy. The real test is whether emissions fall in absolute terms as AI use grows rapidly.",
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

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What can you do?</h2>
          <p className="text-gray-600 leading-relaxed">
            You are not responsible for solving the AI industry&rsquo;s environmental challenges &mdash; but
            being an informed user matters.
          </p>
          <div className="bg-teal-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-teal-800 text-sm">Practical tips</p>
            <ul className="text-teal-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>Use AI where it genuinely helps &mdash; not for every minor task that does not need it</li>
              <li>For simple questions, a standard search engine uses far less energy</li>
              <li>Smaller AI models (like on-device AI in your phone) are often much more efficient than cloud-based giants</li>
              <li>Look for AI providers that publish credible environmental data and use renewable energy</li>
              <li>Support policies that require data centres to report energy and water use transparently</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>The bottom line:</strong> AI&rsquo;s environmental footprint is real and growing. But so is
              its potential to help solve the climate crisis. How society manages this tension &mdash; through
              regulation, innovation, and informed consumer choices &mdash; will shape whether AI becomes part
              of the solution or deepens the problem.
            </p>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-the-environment" />
        <LessonNote lessonId="ai-and-the-environment" lessonTitle={LESSON_TITLE} />

        <Quiz questions={quizQuestions} lessonId="ai-and-the-environment" lessonTitle={LESSON_TITLE} />

        <LessonFeedback lessonId="ai-and-the-environment" />
        <LessonRating lessonId="ai-and-the-environment" />
        <RelatedLessons currentId="ai-and-the-environment" />
        <NextLesson currentId="ai-and-the-environment" />
      </div>
    </div>
  )
}
