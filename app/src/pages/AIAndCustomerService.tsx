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

const LESSON_TITLE = 'AI and customer service'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is an AI chatbot on a company website designed to do?',
    options: [
      "Replace the company's entire human workforce permanently",
      'Answer common customer queries instantly, 24/7, without needing a human agent for every interaction',
      'Collect personal data about customers to sell to third parties',
      'Translate customer messages into different languages for international teams',
    ],
    correctIndex: 1,
    explanation:
      'AI chatbots are designed to handle high volumes of routine queries — things like "where is my order?", "how do I reset my password?", or "what are your opening hours?" — without needing a human to respond each time. This lets companies offer 24/7 support and frees human agents to focus on complex problems that genuinely need judgement and empathy.',
    hint: 'Think about the most common, repetitive questions a customer service team receives every day.',
  },
  {
    question: 'What is the key difference between a traditional chatbot and an AI agent in customer service?',
    options: [
      'Traditional chatbots use AI; AI agents use pre-written scripts',
      'Traditional chatbots can only answer questions; AI agents can take actions — such as issuing a refund, rebooking a flight, or updating your account details',
      'AI agents are always more expensive and slower than traditional chatbots',
      'There is no difference — the two terms mean exactly the same thing',
    ],
    correctIndex: 1,
    explanation:
      'Traditional chatbots (even AI-powered ones) are largely read-only: they find information and give it to you. AI agents go a step further — they are connected to backend systems and can actually do things on your behalf: cancel a subscription, rebook a delivery, process a return. This is a significant shift, because it means the AI is not just answering questions but completing tasks that previously required a human.',
    hint: 'The key word is "action" — one can do things, the other can only say things.',
  },
  {
    question: 'How do companies typically decide when to hand a customer interaction from AI to a human agent?',
    options: [
      'After the customer has been waiting for at least 30 minutes',
      'When the AI detects the query is too complex, the customer expresses frustration, or the customer explicitly asks for a person',
      'Only when the AI loses its internet connection',
      'Never — most modern AI systems are designed to handle all queries without human involvement',
    ],
    correctIndex: 1,
    explanation:
      "AI customer service systems are designed with escalation logic: if the AI cannot confidently resolve a query, if it detects negative sentiment in the customer's messages, or if the customer asks for a human, the conversation is transferred. The quality of this escalation matters enormously — a frustrated customer who gets stuck in a bot loop that will not hand over is a common source of complaints.",
    hint: 'Think about what would trigger the genuine need for a real person rather than an automated system.',
  },
  {
    question: 'What happened to call centre jobs in the UK as AI customer service tools spread?',
    options: [
      'The number of call centre jobs doubled as AI created new roles managing the systems',
      'Some companies reduced headcount (BT announced plans to cut thousands of jobs partly through AI), while others redeployed staff to handle more complex cases',
      'The government banned AI in call centres to protect jobs, so nothing changed',
      'Every single call centre in the UK closed by 2022',
    ],
    correctIndex: 1,
    explanation:
      'The impact on jobs has been real but mixed. BT announced in 2023 that it planned to cut up to 55,000 jobs by 2030, with AI automation cited as a key factor. However, AI has also created new roles: AI trainers, prompt engineers, and quality assurance staff who review AI responses. The net effect varies by sector and company strategy.',
    hint: 'Look for a balanced answer that reflects what actually happened — not a simple "all good" or "all bad" outcome.',
  },
  {
    question: 'Under UK consumer law, if an AI system gives you incorrect advice that costs you money, who is responsible?',
    options: [
      'No one — AI systems are not covered by any UK law',
      'The AI itself, which can be sued in a UK court',
      'The company that deployed the AI, because businesses remain legally responsible for services they provide regardless of whether a human or AI delivered them',
      'The UK government, which must compensate consumers for all AI-related errors',
    ],
    correctIndex: 2,
    explanation:
      'Under the Consumer Rights Act 2015 and related consumer protection legislation, companies are responsible for the services they provide. If an AI chatbot gives you wrong information that leads to financial loss, the company is liable, not the AI. The ICO also requires companies to be transparent about when you are interacting with automated systems and to provide meaningful ways to escalate to a human.',
    hint: 'Responsibility for a product or service always sits with the business providing it, not the tool they use to deliver it.',
  },
]

export function AIAndCustomerService() {
  useMarkVisited('ai-and-customer-service')

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4AC;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and customer service
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Chatbots, automated support, AI agents that can take real action &mdash;
            and what this means for the people whose jobs used to involve answering your calls.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-customer-service" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">From hold music to chatbots</h2>
          <p className="text-gray-600 leading-relaxed">
            Think about the last time you needed help from a company. Before you could speak to a human,
            you were probably met with a website chatbot, a phone menu that said &ldquo;say or press 1&rdquo;,
            or an automated email response. Customer service has used automation for decades &mdash; but AI
            has transformed what that automation can actually do.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Early chatbots were simple rule-based systems: if the customer typed &ldquo;refund&rdquo;, show them
            the returns page. Modern AI chatbots understand natural language, handle complex questions, and
            maintain context across a whole conversation. The best ones are genuinely hard to tell apart from
            a human &mdash; at least for routine queries.
          </p>
          <div className="bg-sky-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-sky-800 text-sm">Where AI customer service appears today</p>
            <ul className="text-sky-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>Live chat widgets on websites (retail, banking, telecoms, utilities)</li>
              <li>IVR phone menus that understand spoken language, not just button presses</li>
              <li>Email auto-responders that draft &mdash; and sometimes send &mdash; replies</li>
              <li>Social media bots that monitor mentions and reply automatically</li>
              <li>Help desk ticket triage: AI reads incoming requests and routes them to the right team</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Chatbots vs AI agents: a crucial difference</h2>
          <p className="text-gray-600 leading-relaxed">
            Not all AI in customer service is the same. There is an important distinction between
            AI that can <strong>answer questions</strong> and AI that can <strong>take actions</strong>.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4AC;',
                label: 'Traditional AI chatbots',
                text: 'These find information and give it to you. "Your order arrives Friday" or "Your balance is £47." They are read-only — they look things up and present them, but cannot change anything.',
              },
              {
                icon: '&#x1F916;',
                label: 'AI agents',
                text: 'These connect to backend systems and do things: issue a refund, rebook a delivery, cancel a subscription, update your address. Companies like Klarna, Amazon, and many airlines now deploy AI agents that can complete transactions end-to-end without human involvement.',
              },
              {
                icon: '&#x26A0;&#xFE0F;',
                label: 'The stakes rise with agents',
                text: 'When an AI can take actions on your account, mistakes have real consequences. An agent that accidentally cancels the wrong order or applies a discount to the wrong account causes genuine harm. This is why human oversight and clear escalation paths remain important.',
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
          <h2 className="text-2xl font-bold text-gray-800">When AI hands over to a human</h2>
          <p className="text-gray-600 leading-relaxed">
            Good AI customer service systems know their limits. They are designed to hand off to a human
            agent when the situation calls for it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '&#x1F914;', title: 'Query too complex', text: "If the AI cannot confidently match the customer's question to a known answer, or the situation requires judgement about policy exceptions, it escalates." },
              { icon: '&#x1F621;', title: 'Frustration detected', text: "AI systems analyse sentiment. Repeated use of words like 'unacceptable', 'furious', or excessive punctuation often triggers escalation to a human agent." },
              { icon: '&#x1F64B;', title: 'Customer requests a person', text: "Under UK consumer protection principles, customers should always be able to reach a human. A well-designed system honours 'I want to speak to someone' immediately." },
              { icon: '&#x1F4CB;', title: 'Sensitive topics', text: "Complaints involving bereavement, serious financial difficulty, or safeguarding concerns are typically routed to specially trained human agents, not AI." },
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
          <div className="bg-amber-50 rounded-xl p-4">
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>The frustration trap:</strong> a common complaint is being stuck in a loop &mdash; the AI
              cannot help, but it will not hand over to a human either. Ofcom and the FCA have both identified
              this as a growing consumer concern, and regulators are pushing for mandatory human escalation pathways.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The impact on jobs in the UK</h2>
          <p className="text-gray-600 leading-relaxed">
            The UK has a large customer service workforce &mdash; an estimated 800,000 people work in
            call centres, and millions more in broader customer-facing roles. AI automation is changing that.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4DE;',
                label: 'BT Group',
                text: 'Announced in 2023 plans to cut up to 55,000 jobs by 2030, with AI cited as a key driver. BT said AI would handle a significant share of customer queries previously handled by human agents.',
              },
              {
                icon: '&#x1F3E6;',
                label: 'Banking sector',
                text: 'Lloyds, NatWest, and HSBC have all reduced branch and telephone customer service staffing. AI triage and chatbots handle millions of banking queries that would previously have required a call.',
              },
              {
                icon: '&#x1F4BC;',
                label: 'New roles created',
                text: 'AI has also created jobs: AI trainers who review chatbot responses, prompt engineers who improve AI instructions, and quality assurance specialists who monitor AI interactions for errors or bias.',
              },
              {
                icon: '&#x1F4CA;',
                label: 'The net picture',
                text: 'Most economists expect AI to displace more customer service roles than it creates in the short term, particularly for routine interactions. Roles requiring empathy, complex problem-solving, and relationship management are more resilient.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Your rights as a consumer</h2>
          <p className="text-gray-600 leading-relaxed">
            When you interact with AI customer service, your legal rights do not disappear.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x2696;&#xFE0F;',
                label: 'Consumer Rights Act 2015',
                text: "Companies are legally responsible for services they provide, whether delivered by a human or AI. If an AI chatbot gives you wrong information that costs you money, the company is liable.",
              },
              {
                icon: '&#x1F512;',
                label: 'ICO guidance on automated decisions',
                text: "The Information Commissioner's Office requires companies to be transparent about when you are interacting with an AI. You have the right to know, and in many cases the right to request a human review.",
              },
              {
                icon: '&#x1F4DD;',
                label: 'Keep records',
                text: "Screenshot chatbot conversations. If you later need to make a complaint or claim, having a record of what the AI told you is essential evidence.",
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
          <div className="bg-emerald-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-emerald-800 text-sm">Tips for getting the best outcome</p>
            <ul className="text-emerald-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>Say &ldquo;I want to speak to a human agent&rdquo; clearly &mdash; most systems will comply</li>
              <li>Screenshot any information the chatbot gives you before closing the window</li>
              <li>If you receive wrong AI-generated information, use it as evidence in your complaint</li>
              <li>Escalate to an ombudsman (Financial Ombudsman, Energy Ombudsman, etc.) if needed</li>
            </ul>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-customer-service" />
        <LessonNote lessonId="ai-and-customer-service" lessonTitle={LESSON_TITLE} />

        <Quiz questions={quizQuestions} lessonId="ai-and-customer-service" lessonTitle={LESSON_TITLE} />

        <LessonFeedback lessonId="ai-and-customer-service" />
        <LessonRating lessonId="ai-and-customer-service" />
        <RelatedLessons currentId="ai-and-customer-service" />
        <NextLesson currentId="ai-and-customer-service" />
      </div>
    </div>
  )
}
