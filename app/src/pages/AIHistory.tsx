import { useMarkVisited } from '../hooks/useMarkVisited'
import { NextLesson } from '../components/NextLesson'
import { RelatedLessons } from '../components/RelatedLessons'

interface TimelineEvent {
  year: string
  headline: string
  explanation: string
  icon: string
}

const EVENTS: TimelineEvent[] = [
  {
    year: '1950',
    headline: 'Alan Turing proposes the "Turing Test"',
    explanation:
      'British mathematician Alan Turing asked: "Can machines think?" He proposed a test — if a human cannot tell whether they are talking to a person or a machine, the machine has passed. It became the founding question of AI.',
    icon: '&#x1F914;',
  },
  {
    year: '1956',
    headline: '"Artificial Intelligence" is coined at Dartmouth',
    explanation:
      'A summer workshop at Dartmouth College, USA, brought together scientists to study how machines could simulate intelligence. The term "Artificial Intelligence" was used for the first time, and the field was officially born.',
    icon: '&#x1F393;',
  },
  {
    year: '1997',
    headline: 'Deep Blue beats world chess champion Garry Kasparov',
    explanation:
      'IBM\'s computer Deep Blue defeated Garry Kasparov — the best chess player in the world — in a six-game match. It was a landmark moment showing that computers could outperform humans at complex strategic games.',
    icon: '&#x265F;&#xFE0F;',
  },
  {
    year: '2011',
    headline: 'IBM\'s Watson wins Jeopardy!',
    explanation:
      'Watson, IBM\'s question-answering computer, competed on the American quiz show Jeopardy! and beat the two greatest human champions. Unlike chess, Jeopardy! requires understanding natural language, wordplay, and broad general knowledge.',
    icon: '&#x1F3AE;',
  },
  {
    year: '2012',
    headline: 'Deep learning conquers image recognition',
    explanation:
      'A neural network called AlexNet won the ImageNet competition by a huge margin — halving the error rate of the previous best system. This proved that deep neural networks trained on large datasets were the future of AI. The modern AI boom effectively started here.',
    icon: '&#x1F4F8;',
  },
  {
    year: '2016',
    headline: 'AlphaGo beats the world\'s best Go player',
    explanation:
      'Go is an ancient board game considered far more complex than chess — the number of possible positions is greater than the atoms in the universe. Google DeepMind\'s AlphaGo defeated Lee Sedol, the world champion, 4–1. AI had mastered a game experts thought would take decades more to crack.',
    icon: '&#x26AB;',
  },
  {
    year: '2017',
    headline: 'The Transformer architecture is invented',
    explanation:
      'Google researchers published a paper called "Attention Is All You Need", introducing the Transformer — a new way of building neural networks that is far better at understanding language. Every modern language model (GPT, Claude, Gemini) is built on this architecture.',
    icon: '&#x1F4DC;',
  },
  {
    year: '2022',
    headline: 'ChatGPT launches and changes everything',
    explanation:
      'OpenAI released ChatGPT to the public in November 2022. It reached 100 million users in just two months — faster than any app in history. Suddenly, AI was not just for researchers; anyone could have a conversation with it. The AI era went mainstream.',
    icon: '&#x1F4AC;',
  },
  {
    year: '2024',
    headline: 'Claude, GPT-4, and Gemini become everyday tools',
    explanation:
      'By 2024, advanced AI assistants from Anthropic (Claude), OpenAI (GPT-4), and Google (Gemini) are used by hundreds of millions of people for writing, coding, research, and creative work. AI is no longer a novelty — it is part of everyday professional and personal life.',
    icon: '&#x1F30D;',
  },
]

export function AIHistory() {
  useMarkVisited('ai-history')
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="text-6xl">&#x23F3;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            The history of AI
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            From a thought experiment in 1950 to the AI assistants of today &mdash;
            here are the moments that shaped artificial intelligence.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-200" aria-hidden="true" />

          <div className="space-y-8">
            {EVENTS.map((event, idx) => (
              <div key={idx} className="relative flex gap-6">
                {/* Circle on the line */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-amber-100 border-2 border-amber-300 flex items-center justify-center shadow-sm">
                  <span className="text-2xl" dangerouslySetInnerHTML={{ __html: event.icon }} />
                </div>

                {/* Content card */}
                <div className="flex-1 bg-white rounded-2xl shadow-md p-6 space-y-2 border border-gray-100">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-sm font-bold bg-amber-600 text-white px-3 py-1 rounded-full">
                      {event.year}
                    </span>
                    <h2 className="text-lg font-semibold text-gray-800 leading-tight">
                      {event.headline}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {event.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4CC;</span>
            <h2 className="text-2xl font-semibold text-amber-800">Where we are now</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            AI went from a philosophical question in 1950 to a tool used by hundreds of millions
            of people in 2024. The key breakthroughs &mdash; neural networks, deep learning, and
            the Transformer architecture &mdash; compounded on each other to produce the AI systems
            we use today.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            And the pace is only accelerating. What felt like science fiction a decade ago is now
            a Tuesday afternoon.
          </p>
        </div>

        {/* Next lesson */}
        <RelatedLessons currentId="ai-history" />

        <NextLesson currentId="ai-history" />
      </div>
    </div>
  )
}
