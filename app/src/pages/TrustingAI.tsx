import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { NextLesson } from '../components/NextLesson'
import { CompletedBadge } from '../components/CompletedBadge'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is an AI "hallucination"?',
    options: [
      'When AI generates images that look dreamlike',
      'When AI confidently states something that is false',
      'When AI refuses to answer a question',
      'When AI gives a very long, detailed response',
    ],
    correctIndex: 1,
    explanation:
      'An AI hallucination is when the AI states something incorrect with full confidence — as if it were a fact. The AI has no built-in alarm that goes off when it is wrong. It just generates the most plausible-sounding text, even if that text is made up.',
  },
  {
    question: 'What should you do if an AI gives you medical advice?',
    options: [
      'Trust it completely — AI has read millions of medical papers',
      'Ignore it — AI knows nothing about medicine',
      'Treat it as a starting point, then check with a doctor or trusted medical source',
      'Only trust it if the answer is longer than one paragraph',
    ],
    correctIndex: 2,
    explanation:
      'AI can be a useful starting point for health questions — it may help you understand a term or suggest what to research. But it can also be confidently wrong on medical topics. Always verify medical, legal, and financial information with qualified professionals or trusted sources.',
  },
  {
    question: 'Why might AI not know about very recent events?',
    options: [
      'AI is programmed to avoid discussing current events',
      'AI training data has a cutoff date — it has not seen anything published after that date',
      'Recent events are too complex for AI to understand',
      'AI companies deliberately remove news to avoid controversy',
    ],
    correctIndex: 1,
    explanation:
      'AI models are trained on data up to a certain date. After that, they have no way of knowing what happened. If you ask about something that occurred after the training cutoff, the AI may either admit it does not know (good) or confidently make something up (hallucination).',
  },
  {
    question: 'True or false: AI is always right because it has read billions of documents.',
    options: [
      'True — more data means more accuracy',
      'False — reading more does not prevent confident mistakes',
    ],
    correctIndex: 1,
    explanation:
      'Reading a lot of text helps AI learn patterns in language, but it does not guarantee accuracy. AI can memorise and repeat incorrect information that appeared in its training data, and it can also generate new text that sounds plausible but is simply wrong.',
  },
]

export function TrustingAI() {
  useMarkVisited('trusting-ai')
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F50D;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Can I trust what AI says?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            AI can be remarkably helpful &mdash; but it can also be confidently wrong.
            Here is how to tell the difference.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="trusting-ai" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-yellow-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The short answer</h2>
          <p className="text-gray-600 leading-relaxed">
            AI can be a genuinely useful tool &mdash; like a very well-read friend who has absorbed an
            enormous amount of information. But that friend can sometimes misremember things, confuse
            similar topics, or state something wrong with total confidence.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The key is knowing <em>when</em> to trust it and <em>when</em> to verify.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p className="text-yellow-800 font-semibold text-sm">Useful rule of thumb</p>
            <p className="text-yellow-700 text-sm leading-relaxed mt-1">
              The lower the stakes, the safer it is to trust AI directly. The higher the stakes
              (medical, legal, financial, important decisions), the more you should verify.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-yellow-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What is an AI hallucination?</h2>
          <p className="text-gray-600 leading-relaxed">
            AI researchers use the word <strong>hallucination</strong> to describe something specific:
            when an AI states something false, but does so with full confidence. It does not hedge.
            It does not say &ldquo;I&rsquo;m not sure.&rdquo; It just produces text that sounds completely
            authoritative &mdash; and happens to be wrong.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This happens because AI generates text by predicting what word or phrase is most likely to
            come next, given everything before it. It does not have a fact-checking step. It does not
            know what it does and does not know. It just produces the most plausible-sounding continuation.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-2">
            <p className="text-red-800 font-semibold text-sm">Real examples of hallucinations</p>
            <ul className="text-red-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>Inventing a book, paper, or news article that does not exist &mdash; complete with a fake title, author, and publication date</li>
              <li>Describing a famous person&rsquo;s biography with incorrect dates or events</li>
              <li>Stating a law or regulation that does not exist, or getting legal details wrong</li>
              <li>Making up technical details about a software library or product</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-yellow-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Three things to watch out for</h2>
          <div className="space-y-4">
            {[
              {
                icon: '&#x1F4C5;',
                title: 'Out-of-date information',
                text: 'AI models are trained on data up to a certain date and do not automatically learn about events after that. If you ask about something recent — a new law, a product launch, an election result — the AI may not know, or may guess. Always check recent facts with a current source.',
              },
              {
                icon: '&#x1F4AC;',
                title: 'Confident mistakes',
                text: 'Unlike a search engine, which shows you sources to judge yourself, AI delivers a single confident answer. If that answer is wrong, there is no obvious clue. It reads just like a correct answer. This is why high-stakes questions always deserve a second source.',
              },
              {
                icon: '&#x2696;&#xFE0F;',
                title: 'Bias in the response',
                text: 'AI learned from text written by people with various perspectives, cultural backgrounds, and blind spots. That means AI responses can reflect those biases — particularly on topics involving politics, history, and social issues. A good practice is to ask the same question a different way, or specifically ask "what are the counter-arguments to this?"',
              },
            ].map(({ icon, title, text }) => (
              <div key={title} className="flex gap-3 items-start">
                <span className="text-2xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-gray-800 mb-1">{title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-yellow-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">When is AI generally reliable?</h2>
          <div className="space-y-3">
            {[
              { label: 'Explaining concepts', text: 'AI is excellent at explaining ideas in plain language — how a process works, what a term means, how to understand something. These answers are rarely dangerously wrong.' },
              { label: 'Summarising and organising', text: 'Give AI a long document and ask it to summarise or extract key points. It is good at this, and you can check the summary against the original.' },
              { label: 'Drafting and editing', text: 'Writing a first draft, improving the tone of an email, suggesting simpler phrasing — AI is a genuinely useful writing partner, and you can judge the output yourself.' },
              { label: 'Brainstorming', text: 'Asking for ideas, options, or approaches. AI generates lots of possibilities fast, and you choose which ones to explore further.' },
            ].map(({ label, text }) => (
              <div key={label} className="bg-green-50 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-green-800 text-sm">{label}</p>
                <p className="text-green-700 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-yellow-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Practical tips for verifying AI</h2>
          <div className="space-y-3">
            {[
              { tip: 'Ask for sources', detail: 'Ask the AI to tell you where to verify its answer. Then actually look it up. Note that AI can sometimes invent fake sources, so search for the source independently rather than trusting a link it provides.' },
              { tip: 'Test with something you already know', detail: 'Ask about a topic you know well and see if the AI gets it right. This calibrates how much to trust it in unfamiliar areas.' },
              { tip: 'Ask the same question differently', detail: 'Rephrase your question and see if you get a consistent answer. Inconsistency is a signal that the AI is uncertain, even if it did not say so.' },
              { tip: 'Use AI as a starting point, not an endpoint', detail: 'Think of AI as a way to get oriented on a topic quickly — not as the final word. Use it to identify what to research further, not to replace that research.' },
            ].map(({ tip, detail }) => (
              <div key={tip} className="flex gap-3 items-start">
                <span className="text-blue-500 flex-shrink-0 font-bold mt-0.5">&#x2192;</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{tip}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-bold text-blue-800">The bottom line</h2>
          <p className="text-blue-700 leading-relaxed">
            AI is a powerful tool &mdash; and like any powerful tool, it works best when you understand
            its limits. Knowing that AI can hallucinate, that its information can be out of date, and that
            it can reflect bias makes you a more informed and effective user.
          </p>
          <p className="text-blue-700 leading-relaxed">
            The best approach: use it freely for low-stakes tasks, and verify carefully for anything that matters.
          </p>
        </div>

        <Quiz
          lessonId="trusting-ai"
          lessonTitle="Can I trust what AI says?"
          questions={quizQuestions}
        />

        <NextLesson currentId="trusting-ai" />

      </div>
    </div>
  )
}
