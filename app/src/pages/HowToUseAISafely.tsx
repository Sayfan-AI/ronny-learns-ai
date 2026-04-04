import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { ReviewLaterButton } from '../components/ReviewLaterButton'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'An AI chatbot tells you a specific medication dosage. What should you do?',
    options: [
      'Follow the advice — AI has access to all medical knowledge',
      'Ignore it completely — AI is never useful for health questions',
      'Use it as a starting point, but verify with a pharmacist, doctor, or official medical source before acting',
      'Ask the AI the same question again to confirm the answer',
    ],
    correctIndex: 2,
    explanation:
      'AI tools can provide useful health information, but they can also hallucinate (confidently state false things) and are not a replacement for professional medical advice. Always verify medical, legal, and financial information with a qualified human professional or official source.',
  },
  {
    question: 'What is an AI "hallucination"?',
    options: [
      'When an AI creates visual images from text',
      'When an AI confidently states something that is false or made up',
      'When an AI becomes confused and stops responding',
      'When an AI generates content that is too creative',
    ],
    correctIndex: 1,
    explanation:
      'Hallucination is the term for when an AI generates confident-sounding but factually incorrect information. This can include inventing fake statistics, non-existent people, or fabricated sources. It happens because AI models predict likely text rather than retrieve verified facts.',
  },
  {
    question: 'Which of the following is a red flag when evaluating an AI-generated answer?',
    options: [
      'The answer is longer than you expected',
      'The answer includes specific statistics, quotes, or citations that you cannot verify anywhere else',
      'The answer explains something in simple language',
      'The answer acknowledges uncertainty or says it is not sure',
    ],
    correctIndex: 1,
    explanation:
      'Specific details like statistics, names, quotes, and citations are exactly what AI tools tend to hallucinate. A specific-sounding claim that you cannot find confirmed anywhere else is a strong signal to double-check. Counterintuitively, an AI admitting uncertainty is a good sign — it means the model is better calibrated.',
  },
  {
    question: 'What information should you avoid sharing with a public AI chatbot?',
    options: [
      'Questions about history or science',
      'Creative writing prompts',
      'Your name, address, passwords, national insurance number, or private financial details',
      'Requests for recipe ideas',
    ],
    correctIndex: 2,
    explanation:
      'Public AI tools (like ChatGPT, Claude.ai, or Gemini) may use conversations to improve their models, depending on privacy settings. Never share sensitive personal data, passwords, or confidential work information unless you have verified the privacy settings and data handling policies.',
  },
  {
    question: 'Why does giving AI more context in your prompt usually produce better results?',
    options: [
      'AI charges less for longer prompts',
      'AI models work by predicting the most likely continuation of text — more specific context helps the model aim at a more precise target',
      'Longer prompts are always processed more carefully',
      'It does not — shorter prompts always work better',
    ],
    correctIndex: 1,
    explanation:
      'AI language models predict the next most likely word given everything that came before. A vague prompt leaves the model guessing what you want. A prompt with clear context, the role you want the AI to play, and specific requirements gives the model much more to work with — leading to more useful, focused responses.',
  },
]

export function HowToUseAISafely() {
  useMarkVisited('how-to-use-ai-safely')
  useLessonVisit('how-to-use-ai-safely')
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F6E1;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            How to use AI safely
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Practical tips for everyday use &mdash; how to verify AI answers, protect
            your information, spot mistakes, and get better results.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="how-to-use-ai-safely" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI is a brilliant helper &mdash; but not always right</h2>
          <p className="text-gray-600 leading-relaxed">
            AI tools like ChatGPT, Claude, and Gemini can write, explain, summarise, translate,
            brainstorm, and answer questions at impressive speed. But they have a critical flaw:
            they can confidently say things that are completely wrong.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This is called <strong>hallucination</strong>. An AI does not look things up like a
            search engine &mdash; it generates text by predicting what words are most likely to
            come next. That means it can produce a very convincing-sounding answer that has
            no basis in fact.
          </p>
          <div className="bg-green-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-green-800 text-sm">Did you know?</p>
            <p className="text-green-700 text-sm leading-relaxed">
              In 2023, a US lawyer submitted a legal brief written with ChatGPT that cited
              six court cases as precedents. The cases did not exist &mdash; ChatGPT had
              invented them, complete with realistic-sounding case names, dates, and judges.
              The lawyer was sanctioned by the court.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">When to trust &mdash; and when to check</h2>
          <p className="text-gray-600 leading-relaxed">
            Not all AI answers carry the same risk. Here is a practical framework for
            deciding when extra checking is worthwhile.
          </p>
          <div className="space-y-3">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-green-800 text-sm">Low stakes &mdash; usually fine to use directly</p>
              <p className="text-green-700 text-sm leading-relaxed">
                Writing help (drafting an email, improving your grammar), brainstorming ideas,
                summarising something you already know, generating creative content, or
                explaining a concept you can cross-check easily.
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-yellow-800 text-sm">Medium stakes &mdash; verify before acting</p>
              <p className="text-yellow-700 text-sm leading-relaxed">
                Statistics and data, historical dates and events, technical instructions,
                information about companies or products. Always check a second source.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-red-800 text-sm">High stakes &mdash; always consult a professional</p>
              <p className="text-red-700 text-sm leading-relaxed">
                Medical advice (diagnoses, dosages, symptoms), legal questions (contracts,
                rights, court procedures), financial decisions (investments, tax, benefits),
                or anything where being wrong could cost you money, health, or legal trouble.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How to spot a hallucination</h2>
          <p className="text-gray-600 leading-relaxed">
            Hallucinations are tricky because AI states them with the same confident tone
            as correct information. Here are warning signs to watch out for.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CA;',
                label: 'Suspiciously specific numbers',
                text: 'Statistics with exact percentages or figures that you cannot find confirmed anywhere else. AI generates plausible-sounding numbers rather than retrieving verified data.',
              },
              {
                icon: '&#x1F4D6;',
                label: 'Citations and sources',
                text: 'Book titles, academic papers, article links, or court cases that seem obscure. Always verify a source exists before citing it yourself. AI-invented sources often have realistic-sounding but non-existent titles and authors.',
              },
              {
                icon: '&#x1F9D1;',
                label: 'Quotes attributed to real people',
                text: 'AI can invent quotes and attribute them to real, named individuals. Always find the original source for any quote you plan to repeat.',
              },
              {
                icon: '&#x1F4C5;',
                label: 'Recent events',
                text: 'Most AI models have a knowledge cutoff — they do not know about events after a certain date. Questions about current news, recent changes in the law, or the latest technology should always be verified with a current source.',
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
          <h2 className="text-2xl font-bold text-gray-800">Protecting your personal information</h2>
          <p className="text-gray-600 leading-relaxed">
            When you chat with a public AI tool, your conversations may be stored and used
            to improve the model (depending on the service and your settings). Treat
            AI conversations like a public forum for sensitive matters.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'Never share',
                items: [
                  'Passwords or security codes',
                  'National insurance or passport numbers',
                  'Full bank account or card details',
                  'Private information about other people without their consent',
                  'Confidential work documents or trade secrets',
                ],
              },
            ].map(({ label, items }) => (
              <div key={label} className="bg-red-50 rounded-xl p-4 space-y-2">
                <p className="font-semibold text-red-800 text-sm">{label}</p>
                <ul className="space-y-1">
                  {items.map(item => (
                    <li key={item} className="text-red-700 text-sm flex items-start gap-2">
                      <span className="mt-0.5">&#x2022;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            Most AI tools let you turn off conversation history or use incognito/temporary
            sessions. Check the privacy settings of any AI tool you use regularly.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-blue-800 text-sm">Did you know?</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              Claude.ai, ChatGPT, and most other major AI chat tools all offer ways to
              disable the use of your conversations for training. Look for settings labelled
              &ldquo;data controls&rdquo;, &ldquo;privacy&rdquo;, or &ldquo;conversation history&rdquo;.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Getting better results: prompt tips</h2>
          <p className="text-gray-600 leading-relaxed">
            The quality of what you get from an AI depends a lot on how you ask. Here are
            simple techniques that make a real difference.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F3AF;',
                label: 'Be specific about what you want',
                text: 'Instead of "explain machine learning", try "explain machine learning in 3 sentences, as if you\'re talking to someone who has never studied computers". The more specific your request, the more targeted the response.',
              },
              {
                icon: '&#x1F9D1;&#x200D;&#x1F4BC;',
                label: 'Give the AI a role',
                text: 'Starting with "You are a friendly doctor explaining to a patient..." or "Act as an experienced teacher helping a beginner..." sets a context that shapes the entire response.',
              },
              {
                icon: '&#x1F4CB;',
                label: 'Give examples',
                text: 'If you want content in a particular style, show the AI an example. "Write a product description in the same style as this example: [paste example]" works much better than describing the style in abstract.',
              },
              {
                icon: '&#x2757;',
                label: 'Ask the AI to flag uncertainty',
                text: 'Add "If you are not sure about any of this, please say so" to your prompt. Well-designed AI models will flag areas of uncertainty if asked — though they do not always do so unprompted.',
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

        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-bold text-green-800">The key thing to remember</h2>
          <p className="text-green-700 leading-relaxed">
            AI tools are genuinely useful &mdash; for writing, thinking, learning, and getting
            things done faster. Used thoughtfully, they are among the most powerful tools
            available to ordinary people.
          </p>
          <p className="text-green-700 leading-relaxed">
            The key word is <em>thoughtfully</em>. Verify important claims. Keep personal
            information private. Use professional experts for high-stakes decisions. And
            remember: you are always the one responsible for what you do with the AI&apos;s output.
          </p>
        </div>

        <Quiz
          lessonId="how-to-use-ai-safely"
          lessonTitle="How to use AI safely"
          questions={quizQuestions}
        />

        <LessonNote lessonId="how-to-use-ai-safely" />

        <LessonRating lessonId="how-to-use-ai-safely" />
        <ReviewLaterButton lessonId="how-to-use-ai-safely" />

        <RelatedLessons currentId="how-to-use-ai-safely" />

        <NextLesson currentId="how-to-use-ai-safely" />

      </div>
    </div>
  )
}
