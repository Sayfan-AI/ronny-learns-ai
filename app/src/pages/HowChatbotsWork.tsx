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
    question: 'What is the main difference between a rule-based chatbot and an AI chatbot?',
    options: [
      'Rule-based chatbots are faster, AI chatbots are slower',
      'Rule-based chatbots follow fixed scripts and menus; AI chatbots understand natural language and generate responses',
      'AI chatbots can only answer yes/no questions',
      'Rule-based chatbots require an internet connection; AI chatbots do not',
    ],
    correctIndex: 1,
    explanation:
      'Rule-based chatbots work through decision trees — if you say X, it replies with Y. They break if you go off-script. AI chatbots like Claude understand natural language and generate novel responses, so they can handle a far wider range of questions.',
  },
  {
    question: 'What is a "context window" in a chatbot conversation?',
    options: [
      'The physical window on your computer screen where the chat appears',
      'The maximum number of characters in a single message',
      'All the messages in the current conversation that the AI can see and use to form its reply',
      'A setting that controls how quickly the AI types its response',
    ],
    correctIndex: 2,
    explanation:
      'A context window is the full conversation the AI holds in memory when generating a reply. Everything you have said, and everything the AI has replied, stays in the context window — which is why the AI can refer back to earlier parts of your conversation. The window has a size limit, so very long conversations may eventually drop older messages.',
  },
  {
    question: 'Why do AI chatbots sometimes state incorrect facts confidently?',
    options: [
      'They are deliberately programmed to make things up',
      'They generate text that sounds plausible based on patterns learned during training — but plausible is not always accurate',
      'Their internet connection is slow, so they guess',
      'They only work correctly in English',
    ],
    correctIndex: 1,
    explanation:
      "This is called 'hallucination'. AI chatbots predict what text should come next based on patterns in their training data — they don't have a database of facts they look things up in. This means they can generate confident-sounding sentences that are simply wrong. For important facts, always verify from a reliable source.",
  },
  {
    question: 'What does "stateless" mean when talking about some chatbot APIs?',
    options: [
      'The chatbot works without being connected to a server',
      'Each API call is independent — the AI does not automatically remember previous conversations',
      'The chatbot cannot process text with punctuation',
      'A chatbot that only responds with a single word',
    ],
    correctIndex: 1,
    explanation:
      'Many AI APIs are stateless by default — each call to the API is treated as a fresh conversation unless you explicitly send the full conversation history along with each request. Apps that feel continuous (like Claude.ai) send the whole conversation history with every message behind the scenes.',
  },
]

export function HowChatbotsWork() {
  useMarkVisited('how-chatbots-work')
  useLessonVisit('how-chatbots-work')
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4AC;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            How do chatbots work?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            You have probably used a chatbot. But what is actually happening when you type a message
            and it types back? Here is the plain-language explanation.
          </p>
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 text-sm px-4 py-2 rounded-full">
            <span>About 6 min read</span>
          </div>
          <CompletedBadge lessonId="how-chatbots-work" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-cyan-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What is a chatbot?</h2>
          <p className="text-gray-600 leading-relaxed">
            A <strong>chatbot</strong> is a program that you communicate with by typing (or speaking),
            and that replies in natural language &mdash; like a conversation.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Chatbots have been around since the 1960s. ELIZA, one of the first, was built at MIT in 1966.
            But the chatbots of today &mdash; like Claude, ChatGPT, or Gemini &mdash; are fundamentally
            different from those early versions.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-cyan-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Two very different kinds</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-4 space-y-2">
              <p className="font-bold text-gray-800">Rule-based chatbots (the old kind)</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                These work like a decision tree. "If the user says X, reply with Y. If they say Z, reply with W."
                You have probably encountered them as customer service bots with menus like:
                "Press 1 for billing, press 2 for technical support."
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                They can only handle what they were explicitly programmed for. Type something unexpected
                and they are lost.
              </p>
            </div>
            <div className="bg-cyan-50 rounded-xl p-4 space-y-2">
              <p className="font-bold text-cyan-800">AI chatbots (the modern kind)</p>
              <p className="text-cyan-700 text-sm leading-relaxed">
                These use large language models (LLMs) &mdash; like the ones you learned about in the language
                models lesson. They understand natural language and generate new responses, rather than picking
                from a pre-written menu. You can ask almost anything, rephrase it in your own words, and the
                chatbot can follow along.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-cyan-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What happens when you send a message</h2>
          <p className="text-gray-600 leading-relaxed">
            When you type a message to Claude or a similar AI chatbot, here is what happens in sequence:
          </p>
          <div className="space-y-3">
            {[
              {
                step: '1',
                title: 'Your message is packaged with the conversation history',
                text: 'The app does not just send your latest message. It sends the entire conversation so far — everything you and the AI have said — so the AI can understand the context.',
              },
              {
                step: '2',
                title: 'The request goes to a server running the language model',
                text: 'The AI model itself runs on powerful computers in a data centre — not on your phone or laptop. Your message travels over the internet to reach it.',
              },
              {
                step: '3',
                title: 'The model reads the full context and generates a reply',
                text: 'The model processes every token (word or word-piece) in the conversation, then generates the response one token at a time — predicting what should come next based on everything it has seen.',
              },
              {
                step: '4',
                title: 'The reply is streamed back to you',
                text: 'You often see the reply appearing word by word — that is because it is streaming back as it is generated, rather than waiting for the full reply to be finished before sending it.',
              },
            ].map(({ step, title, text }) => (
              <div key={step} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-700 font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  {step}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-cyan-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The context window</h2>
          <p className="text-gray-600 leading-relaxed">
            One of the most important things to understand about AI chatbots is the <strong>context window</strong>.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The context window is everything the AI can "see" at once: the full conversation history,
            any instructions the app gave it, and your latest message. The AI uses all of this to generate
            its next reply.
          </p>
          <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-4 space-y-2">
            <p className="text-cyan-800 font-semibold">What this means in practice</p>
            <ul className="space-y-1 text-cyan-700 text-sm">
              <li className="flex gap-2"><span>&#x2022;</span><span>The AI can refer back to things you said earlier in the conversation</span></li>
              <li className="flex gap-2"><span>&#x2022;</span><span>If the conversation gets very long, the oldest messages may be dropped from the context to make room</span></li>
              <li className="flex gap-2"><span>&#x2022;</span><span>Starting a new conversation gives the AI a blank slate — it will not remember previous sessions</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-cyan-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What chatbots are good at &mdash; and where to be careful</h2>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-green-50 rounded-xl p-4">
              <p className="font-semibold text-green-800 mb-2">Good at</p>
              <ul className="space-y-1 text-green-700 text-sm">
                {[
                  'Explaining things in plain language',
                  'Summarising long documents',
                  'Brainstorming ideas and drafting text',
                  'Answering general knowledge questions',
                  'Helping you think through a problem step by step',
                  'Translating between languages',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2"><span>&#x2713;</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-4">
              <p className="font-semibold text-amber-800 mb-2">Be careful with</p>
              <ul className="space-y-1 text-amber-700 text-sm">
                {[
                  'Specific facts, numbers, and dates — always verify important claims',
                  'Very recent events (the AI\'s knowledge has a cutoff date)',
                  'Medical, legal, or financial advice — use a qualified professional',
                  'Anything where being wrong would have serious consequences',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2"><span>&#x26A0;&#xFE0F;</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-bold text-blue-800">Why do chatbots sometimes get things wrong?</h2>
          <p className="text-blue-700 leading-relaxed">
            AI chatbots generate text that sounds plausible based on patterns in their training data.
            They do not look things up in a database of verified facts &mdash; they predict what words
            should come next.
          </p>
          <p className="text-blue-700 leading-relaxed">
            This is called <strong>hallucination</strong>: the AI produces confident-sounding text that is
            factually incorrect. It is not lying &mdash; it genuinely does not know it is wrong.
            This is why verifying important information from an AI is always a good habit.
          </p>
        </div>

        <Quiz
          lessonId="how-chatbots-work"
          lessonTitle="How do chatbots work?"
          questions={quizQuestions}
        />

        <LessonNote lessonId="how-chatbots-work" />

        {/* Rating */}
        <LessonRating lessonId="how-chatbots-work" />

        <RelatedLessons currentId="how-chatbots-work" />

        <NextLesson currentId="how-chatbots-work" />

      </div>
    </div>
  )
}
