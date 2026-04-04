import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { NextLesson } from '../components/NextLesson'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is "AI bias" and why does it happen?',
    options: [
      'AI deliberately favours certain people because programmers told it to',
      'AI systems learn patterns from historical data, which may reflect existing societal inequalities',
      'AI is always biased because machines cannot be fair',
      'Bias only affects AI in science — not in everyday apps',
    ],
    correctIndex: 1,
    explanation:
      'AI learns from data. If the training data reflects historical discrimination or imbalances (e.g. hiring records that favoured one group), the AI can learn and repeat those patterns — even without anyone intending it.',
  },
  {
    question: 'How is AI helping doctors and medical researchers?',
    options: [
      'AI is replacing doctors entirely in most hospitals',
      'AI cannot be used in medicine because it makes too many mistakes',
      'AI helps spot diseases in scans, speeds up drug discovery, and analyses patient data to support diagnoses',
      'AI only helps with paperwork, not with actual medical decisions',
    ],
    correctIndex: 2,
    explanation:
      'AI tools can detect cancer in medical images with accuracy comparable to trained specialists. AI has also accelerated drug discovery — for example, DeepMind solved a 50-year protein-folding problem that is central to understanding diseases.',
  },
  {
    question: 'Which of these is a genuine concern about AI and employment?',
    options: [
      'AI will immediately make all jobs disappear overnight',
      'AI has no effect on employment at all',
      'Some repetitive or routine jobs may be automated, requiring workers to adapt and learn new skills',
      'Only jobs involving computers are at risk from AI',
    ],
    correctIndex: 2,
    explanation:
      'AI is likely to automate some tasks rather than eliminate entire jobs overnight. Roles involving routine, predictable tasks are more at risk. Most economists expect a shift: some jobs will shrink, new ones will emerge, and many will simply change.',
  },
]

export function AIProsAndCons() {
  useMarkVisited('ai-pros-and-cons')
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="text-6xl">&#x2696;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI: the good and the bad
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            AI is one of the most powerful technologies ever created. Like any powerful tool,
            it can do tremendous good &mdash; and it comes with real risks worth understanding.
          </p>
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm px-4 py-2 rounded-full">
            <span>About 6 min read</span>
          </div>
          <CompletedBadge lessonId="ai-pros-and-cons" />
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x2705;</span>
            <h2 className="text-2xl font-semibold text-green-700">The benefits</h2>
          </div>

          <div className="space-y-5">
            <div className="bg-green-50 rounded-xl p-5">
              <p className="font-semibold text-green-800 text-lg mb-2">Medicine and health</p>
              <p className="text-gray-600 text-base leading-relaxed">
                AI can detect cancers in medical scans as accurately as experienced doctors.
                It has helped discover new antibiotics and cut drug discovery timelines from
                years to months. DeepMind's AlphaFold solved a 50-year protein-folding
                problem that is key to understanding diseases.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-5">
              <p className="font-semibold text-green-800 text-lg mb-2">Accessibility</p>
              <p className="text-gray-600 text-base leading-relaxed">
                AI powers real-time captions for the deaf and hard of hearing, screen readers
                for people with visual impairments, and translation tools that let people
                communicate across language barriers. These tools were either impossible or
                extremely expensive before AI.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-5">
              <p className="font-semibold text-green-800 text-lg mb-2">Science and climate</p>
              <p className="text-gray-600 text-base leading-relaxed">
                AI weather models now predict storms more accurately and further in advance.
                AI is helping design better solar panels, optimise energy grids, and find
                new materials for batteries &mdash; all critical for addressing climate change.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-5">
              <p className="font-semibold text-green-800 text-lg mb-2">Productivity</p>
              <p className="text-gray-600 text-base leading-relaxed">
                AI tools help people write, code, research, and create faster. A task that
                once took an hour can take minutes. For small businesses and individuals,
                this levels the playing field with larger organisations.
              </p>
            </div>
          </div>
        </div>

        {/* Risks */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x26A0;&#xFE0F;</span>
            <h2 className="text-2xl font-semibold text-red-700">The risks</h2>
          </div>

          <div className="space-y-5">
            <div className="bg-red-50 rounded-xl p-5">
              <p className="font-semibold text-red-800 text-lg mb-2">Job automation</p>
              <p className="text-gray-600 text-base leading-relaxed">
                AI can do many repetitive tasks faster and cheaper than humans. Some jobs
                &mdash; in data entry, basic customer service, or routine analysis &mdash;
                are already being automated. The question is not whether change will happen,
                but how fast, and whether workers can adapt.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-5">
              <p className="font-semibold text-red-800 text-lg mb-2">Bias and unfairness</p>
              <p className="text-gray-600 text-base leading-relaxed">
                AI learns from data. If that data reflects historical inequalities &mdash; in
                hiring, lending, policing, or healthcare &mdash; the AI can learn to repeat those
                inequalities. Facial recognition systems, for example, have been shown to
                work much less accurately on darker-skinned faces.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-5">
              <p className="font-semibold text-red-800 text-lg mb-2">Privacy</p>
              <p className="text-gray-600 text-base leading-relaxed">
                AI makes mass surveillance much cheaper and easier. Cameras combined with
                facial recognition can track people in public spaces. Apps that seem free
                often collect personal data to train AI models or target advertising.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-5">
              <p className="font-semibold text-red-800 text-lg mb-2">Misinformation and deepfakes</p>
              <p className="text-gray-600 text-base leading-relaxed">
                AI can generate realistic fake images, videos, and text. This makes it
                easier to create misinformation and harder to know what is real. A video
                of a public figure saying something they never said can now be made in
                minutes.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-5">
              <p className="font-semibold text-red-800 text-lg mb-2">Hallucinations</p>
              <p className="text-gray-600 text-base leading-relaxed">
                AI language models sometimes confidently state things that are completely
                wrong &mdash; this is called "hallucinating". They do not know what they do not
                know. Always double-check important facts from an AI with a reliable source.
              </p>
            </div>
          </div>
        </div>

        {/* Key message */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4CC;</span>
            <h2 className="text-2xl font-semibold text-amber-800">The bottom line</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            AI is not inherently good or bad &mdash; it is a tool, and like all tools, what matters
            is how it is built, who controls it, and how it is used. The best thing you can do
            is understand it: then you can benefit from the good, recognise the risks, and
            ask good questions about the AI systems that affect your life.
          </p>
        </div>

        <Quiz questions={quizQuestions} title="Quiz: AI pros and cons" lessonId="ai-pros-and-cons" lessonTitle="AI pros and cons" />

        {/* Next lesson */}
        <RelatedLessons currentId="ai-pros-and-cons" />

        <NextLesson currentId="ai-pros-and-cons" />

      </div>
    </div>
  )
}
