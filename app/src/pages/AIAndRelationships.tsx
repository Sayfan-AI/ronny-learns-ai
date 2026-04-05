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

const LESSON_TITLE = 'AI and relationships'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How do dating apps like Hinge and Tinder use AI?',
    options: [
      'They randomly show profiles so everyone gets an equal chance of being seen',
      'They use AI algorithms to decide which profiles to show you, based on your past swipes and behaviour',
      'A team of human matchmakers reviews every profile and decides who to show you',
      'They only use AI to block fake profiles — all matching is done manually',
    ],
    correctIndex: 1,
    explanation:
      'Dating apps use AI recommendation systems that analyse your past behaviour — who you swiped right on, who you messaged, how long you spent looking at a profile — to predict who you are likely to be interested in. This is similar to how Netflix recommends films or Spotify suggests songs.',
    hint: 'Dating apps work like other recommendation systems — they learn from what you do.',
  },
  {
    question: 'What is an AI companion app like Replika designed to do?',
    options: [
      'Help you find a romantic partner by analysing your personality and matching you with real people',
      'Provide a conversational AI character you can talk to, build a relationship with, and share your feelings with',
      'Monitor your real-world relationships and warn you if they are unhealthy',
      'Replace dating apps by automatically sending messages to potential partners on your behalf',
    ],
    correctIndex: 1,
    explanation:
      "AI companion apps like Replika are designed to provide a supportive conversational partner — an AI character you can talk to, vent to, or roleplay with. They are not matchmaking services. Users interact with the AI directly, not with other humans. Some people use them for emotional support, practising social skills, or simply to feel heard.",
    hint: 'Companion apps are about talking to the AI itself, not finding a human partner.',
  },
  {
    question: 'What is a key emotional risk of relying heavily on AI companion apps?',
    options: [
      'The AI might share your private conversations with advertisers',
      'You could become emotionally dependent on a relationship that is always available, never judges you, and never challenges you — which can make real human relationships feel harder by comparison',
      'The AI will eventually demand money from you in exchange for continued support',
      'AI companions have been proven to cause memory loss in long-term users',
    ],
    correctIndex: 1,
    explanation:
      "Researchers and therapists have raised concerns about emotional dependency. AI companions are always available, infinitely patient, and never argue or leave. While this can be comforting, it can also set unrealistic expectations for human relationships, which are messier and more demanding. Some users report withdrawing from real-world relationships in favour of AI ones.",
    hint: 'Think about what happens when something is always perfect and never challenges you.',
  },
  {
    question: 'Which of the following is a real concern about AI on dating apps?',
    options: [
      'Dating apps use AI to automatically delete profiles they think are too attractive',
      'AI-generated profile photos and AI-written opening messages are being used to create fake or misleading dating profiles',
      'Dating apps use AI to charge you more money the more desperate your messages sound',
      'AI has made it impossible for anyone over 40 to get matches on dating apps',
    ],
    correctIndex: 1,
    explanation:
      'AI image generators can create convincing fake profile photos, and AI chatbots can write messages that sound like genuine human interest. This has made catfishing — pretending to be someone you are not — easier and more convincing. Some people use AI to run dozens of fake profiles simultaneously, a practice sometimes called romance scamming at scale.',
    hint: 'AI tools make it easier to create convincing content — including content that deceives.',
  },
  {
    question: 'If someone uses AI to write their entire dating profile and all their messages, what is the main ethical concern?',
    options: [
      'It is illegal to use AI for personal communications in most countries',
      'It means the other person is building a connection with an AI, not the real person — which raises questions about honesty and consent',
      'AI-written messages are always detected by dating app algorithms and result in account bans',
      'There is no ethical concern — using any tool to communicate better is always acceptable',
    ],
    correctIndex: 1,
    explanation:
      "Using AI to write your profile or messages means the other person may fall for a version of you that does not really exist. They are consenting to get to know you, but they are actually getting to know an AI's idealised version of you. This matters because authentic connection depends on people presenting themselves honestly.",
    hint: 'Think about what informed consent means in a relationship context.',
  },
]

export function AIAndRelationships() {
  useMarkVisited('ai-and-relationships')

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F495;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and relationships
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Dating apps, AI companions, fake profiles, and the bigger question:
            what does human connection mean when AI is in the mix?
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-relationships" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How dating apps use AI</h2>
          <p className="text-gray-600 leading-relaxed">
            When you swipe on a dating app, you are not just saying yes or no to a person. You are
            feeding data into an AI recommendation system. Every swipe, every message you send,
            every profile you linger on &mdash; all of it is analysed to predict who you might like next.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Apps like Hinge, Tinder, and Bumble use machine learning in several ways:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '&#x1F9E0;', title: 'Compatibility scoring', text: 'The algorithm tries to match people who are similar in the ways that lead to conversations and dates, not just appearance. Hinge explicitly says its AI is designed to help you find someone you will actually meet in person.' },
              { icon: '&#x1F4CA;', title: 'Engagement optimisation', text: 'Showing you profiles you are likely to swipe right on keeps you engaged — which keeps you on the app. There is a tension between finding you a match quickly and keeping you using the app for longer.' },
              { icon: '&#x1F512;', title: 'Fake account detection', text: 'AI is used to detect spam, bots, and catfishing accounts by spotting patterns like sending identical messages to many people, using stock photos, or creating many accounts from the same device.' },
              { icon: '&#x1F4F8;', title: 'Photo verification', text: "Some apps use AI to verify that your profile photos are actually you — for example, Tinder's photo verification asks you to pose like a selfie on screen so the AI can compare your face to your profile pictures." },
            ].map(({ icon, title, text }) => (
              <div key={title} className="bg-pink-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl" dangerouslySetInnerHTML={{ __html: icon }} />
                  <p className="font-semibold text-gray-800 text-sm">{title}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI companion apps</h2>
          <p className="text-gray-600 leading-relaxed">
            Beyond dating apps, a growing number of people are forming relationships with AI characters
            themselves. These are AI companion apps &mdash; software designed to give you someone to talk to.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F916;',
                label: 'Replika',
                text: 'Launched in 2017, Replika lets you create an AI character — give it a name, a personality, even a relationship status (friend, partner, mentor). Millions of people use it to chat, share their day, or work through loneliness. The company says many users find it helps with social anxiety.',
              },
              {
                icon: '&#x1F4AC;',
                label: 'Character.AI',
                text: "Lets users create or chat with thousands of AI characters — celebrities, fictional characters, or entirely invented people. Unlike Replika's single companion model, Character.AI is more like a stage full of different characters to interact with.",
              },
              {
                icon: '&#x1F9D1;',
                label: 'Who uses them?',
                text: 'Users range widely: teenagers practising social skills, adults dealing with loneliness or grief, people with social anxiety who find AI less intimidating than human interaction, and people who simply enjoy creative roleplay.',
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
          <h2 className="text-2xl font-bold text-gray-800">The emotional risks</h2>
          <p className="text-gray-600 leading-relaxed">
            AI companions are always available. They are infinitely patient. They never argue, never
            have a bad day, never leave. For many people, this is genuinely comforting. But therapists
            and researchers have identified real risks.
          </p>
          <div className="bg-amber-50 rounded-xl p-4 space-y-3">
            <p className="font-semibold text-amber-800 text-sm">What the research suggests</p>
            <ul className="text-amber-700 text-sm leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Dependency:</strong> some users find it difficult to step away from their AI companion, reporting feelings of loss or anxiety when the service changes or goes offline</li>
              <li><strong>Unrealistic expectations:</strong> a relationship with a perfectly agreeable AI can make real human relationships &mdash; which involve conflict, compromise, and imperfection &mdash; feel more frustrating</li>
              <li><strong>Social withdrawal:</strong> for people already isolated, AI companionship may reduce the motivation to form real-world connections</li>
              <li><strong>Commercial interests:</strong> companies profit from users returning daily; the business model rewards dependency, not wellbeing</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>The counterpoint:</strong> many users say AI companions help them through difficult
              periods, practise social skills, or simply feel less alone during genuinely lonely times.
              As with most technology, the impact depends on how and why you use it.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Fake profiles and AI-assisted catfishing</h2>
          <p className="text-gray-600 leading-relaxed">
            AI has made deception on dating platforms easier and more convincing.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F5BC;&#xFE0F;',
                label: 'AI-generated photos',
                text: 'Image generation tools can create photorealistic faces of people who do not exist. These images are being used to create fake dating profiles that pass at a glance. Reverse image search — once useful for spotting fake profiles — does not work on AI-generated faces because they have never appeared elsewhere online.',
              },
              {
                icon: '&#x270F;&#xFE0F;',
                label: 'AI-written messages',
                text: 'Romance scammers, who attempt to build emotional connections in order to extract money, are using AI chatbots to run multiple conversations simultaneously. This means one person can fake a relationship with dozens of victims at once, with AI handling the initial conversation.',
              },
              {
                icon: '&#x26A0;&#xFE0F;',
                label: 'What to watch out for',
                text: 'Profiles that seem unusually perfect, people who refuse video calls, stories that escalate quickly to requests for money or gift cards, and very polished, formal-sounding messages can all be signs of AI-assisted fraud.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Authenticity and the bigger question</h2>
          <p className="text-gray-600 leading-relaxed">
            Some people use AI to help write their dating profiles or craft first messages. This raises
            a question worth thinking about: if the version of you that someone falls for was written by AI,
            who are they really interested in?
          </p>
          <p className="text-gray-600 leading-relaxed">
            This is not a new problem &mdash; people have always put their best foot forward on a date. But
            AI makes it possible to present a version of yourself that is polished far beyond what you
            could naturally produce. The question of where helpful assistance ends and deception begins
            is genuinely unclear.
          </p>
          <div className="bg-blue-50 rounded-xl p-4">
            <p className="font-semibold text-blue-800 text-sm mb-2">Things to consider</p>
            <ul className="text-blue-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>Using AI to check grammar or get ideas is very different from using it to write everything</li>
              <li>The person you are talking to has consented to get to know you &mdash; not an AI&rsquo;s version of you</li>
              <li>Authentic connection is built on knowing the real person &mdash; which eventually has to happen anyway</li>
              <li>Disclosing that you used AI assistance is one way to be transparent without abandoning the tool entirely</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>The bottom line:</strong> AI is already deeply embedded in modern romantic life &mdash;
              from the algorithm that decides who you see to the companions some people turn to instead of
              human connection. Being aware of how these systems work, and honest about how you use them,
              puts you in a better position to navigate relationships in an AI-shaped world.
            </p>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-relationships" />
        <LessonNote lessonId="ai-and-relationships" lessonTitle={LESSON_TITLE} />

        <Quiz questions={quizQuestions} lessonId="ai-and-relationships" lessonTitle={LESSON_TITLE} />

        <LessonFeedback lessonId="ai-and-relationships" />
        <LessonRating lessonId="ai-and-relationships" />
        <RelatedLessons currentId="ai-and-relationships" />
        <NextLesson currentId="ai-and-relationships" />
      </div>
    </div>
  )
}
