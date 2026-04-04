import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does a recommendation algorithm do?',
    options: [
      'It randomly picks videos or films for you to watch',
      'It analyses what you have watched and liked before to suggest things you will probably enjoy',
      'It asks your friends what they think you should watch',
      'It shows the most expensive films first',
    ],
    correctIndex: 1,
    explanation:
      'Recommendation algorithms learn your preferences from your past behaviour — what you watched, skipped, liked, or rated — and use that to predict what you will enjoy next.',
  },
  {
    question: 'When Google Maps suggests the fastest route, what is happening behind the scenes?',
    options: [
      'A human traffic expert is typing the directions in real time',
      'The app simply picks the shortest road regardless of conditions',
      'An AI model analyses live traffic data, historical patterns, and millions of past journeys to estimate journey times',
      'The app flips a coin between two routes',
    ],
    correctIndex: 2,
    explanation:
      'Navigation apps use machine learning trained on millions of real journeys. They combine live traffic feeds with learned patterns to predict how long each route will actually take right now.',
  },
  {
    question: 'Which of these everyday tools uses AI to understand your voice?',
    options: [
      'A door bell',
      'A wired telephone',
      'A light switch',
      'A voice assistant like Siri or Alexa',
    ],
    correctIndex: 3,
    explanation:
      'Voice assistants use a form of AI called automatic speech recognition (ASR) combined with natural language understanding to convert your spoken words into text and then figure out what you mean.',
  },
]

export function AIEverydayLife() {
  useMarkVisited('ai-everyday-life')
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F30D;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI in everyday life
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            You probably interact with AI dozens of times every day &mdash; without even noticing.
            Here is where it is hiding.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F50D;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Search engines</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            When you type something into Google, an AI decides which results you see first.
            It considers hundreds of factors &mdash; how authoritative a website is, whether
            the page actually answers your question, how other people have responded to it &mdash;
            and ranks billions of pages in a fraction of a second.
          </p>
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-4">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>Behind the scenes:</strong> Google's search ranking uses neural networks
              trained on the behaviour of billions of searches. If people click a result and
              immediately come back, the AI learns that page was not helpful.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F3AC;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Recommendations</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Netflix, YouTube, Spotify, and Amazon all use recommendation AI. They look at
            what you have watched, listened to, or bought &mdash; and what people similar to
            you have enjoyed &mdash; to suggest things you are likely to love.
          </p>
          <ul className="space-y-3 text-gray-600 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">&#x1F4FA;</span>
              <span><strong>Netflix</strong> &mdash; over 80% of what people watch comes from its recommendation engine.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">&#x25B6;&#xFE0F;</span>
              <span><strong>YouTube</strong> &mdash; the recommendation algorithm drives more than 70% of total watch time on the platform.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">&#x1F3B5;</span>
              <span><strong>Spotify</strong> &mdash; Discover Weekly and Daily Mixes are generated by AI that has learned your listening habits.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F5E3;&#xFE0F;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Voice assistants</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            "Hey Siri, set a timer for five minutes." In the time it takes you to say
            that sentence, an AI has:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 text-lg">
            <li>Converted your speech into text (speech recognition)</li>
            <li>Figured out what you meant (natural language understanding)</li>
            <li>Decided what action to take (intent classification)</li>
            <li>Responded in a natural-sounding voice (text-to-speech synthesis)</li>
          </ol>
          <p className="text-gray-600 text-lg leading-relaxed">
            Siri, Alexa, and Google Assistant all use layers of machine learning trained on
            millions of real spoken sentences.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4E7;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Spam filters</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Your email inbox would be unusable without AI. Modern spam filters catch over
            99.9% of junk before it reaches you &mdash; by learning the patterns of spam:
            suspicious senders, certain phrases, unusual links, formatting tricks.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every email you mark as spam teaches the system. You are training an AI without
            realising it.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F5FA;&#xFE0F;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Maps and navigation</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Google Maps and Waze know that the motorway is slow right now even before you
            arrive. They use real-time GPS data from millions of phones, combined with
            machine learning trained on years of traffic patterns, to predict journey times
            and find the fastest route.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4F1;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Even more AI you use every day</h2>
          </div>
          <ul className="space-y-3 text-gray-600 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">&#x1F510;</span>
              <span><strong>Face unlock</strong> &mdash; your phone recognises your face using a neural network trained on facial geometry.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">&#x2328;&#xFE0F;</span>
              <span><strong>Autocorrect and predictive text</strong> &mdash; your keyboard predicts what you are about to type using a small language model.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">&#x1F4F8;</span>
              <span><strong>Photo apps</strong> &mdash; portrait mode, night mode, and "enhance" all use AI to improve your photos.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">&#x1F4B3;</span>
              <span><strong>Fraud detection</strong> &mdash; your bank uses AI to spot unusual transactions the moment they happen.</span>
            </li>
          </ul>
        </div>

        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4CC;</span>
            <h2 className="text-2xl font-semibold text-sky-800">The big idea</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            AI is not a distant technology of the future &mdash; it is woven into the fabric
            of the products and services you already use every single day. Most of the time
            you never see it, because it is working exactly as intended.
          </p>
        </div>

        <Quiz questions={quizQuestions} title="Quiz: AI in everyday life" lessonId="ai-everyday-life" lessonTitle="AI in everyday life" />

        <div className="text-center">
          <a
            href="#/"
            className="inline-block text-blue-600 hover:text-blue-800 text-lg font-medium underline"
          >
            &larr; Back to home
          </a>
        </div>
      </div>
    </div>
  )
}
