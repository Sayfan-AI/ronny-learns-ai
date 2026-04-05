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
import { KeyTakeaways } from '../components/KeyTakeaways'

const LESSON_TITLE = 'AI and personal assistants'

const KEY_TAKEAWAYS = [
  'Siri, Alexa, Google Assistant, and Cortana are AI-powered voice assistants built into your phone, smart speaker, or computer — they use speech recognition and natural language processing to understand questions and carry out tasks.',
  'These assistants are always listening for their "wake word" (Hey Siri, Alexa, OK Google) — which means a small microphone in your device is active around the clock, raising genuine privacy questions about what gets recorded and where the audio goes.',
  'Voice assistants struggle with ambiguous questions, regional accents, and tasks that require genuine reasoning — they are much better at simple commands like setting timers, playing music, or checking the weather than at complex problem-solving.',
  "Since 2022, a new generation of conversational AI assistants — ChatGPT, Claude, Gemini — can handle far more complex questions than Alexa or Siri, but they run in apps or browsers rather than always listening in your home.",
  'Amazon, Google, and Apple have all faced criticism for storing voice recordings and, in some cases, having human employees listen to them to improve accuracy — a practice that most users are unaware of.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What technology does a voice assistant like Siri or Alexa use to understand what you say?',
    options: [
      'A library of pre-recorded responses that the assistant plays back when it detects a keyword match in your sentence',
      'Speech recognition to convert your words into text, followed by natural language processing to understand the meaning and intent of what you said',
      'A live human operator who listens to every request, types it into a computer, and selects the most appropriate response from a menu',
      'Bluetooth connectivity to your smartphone, which analyses the audio and sends instructions back to the speaker wirelessly',
    ],
    correctIndex: 1,
    explanation:
      'When you speak to Alexa or Siri, the device first uses speech recognition (also called automatic speech recognition or ASR) to convert the sound waves of your voice into written text. Then a natural language processing (NLP) model analyses that text to figure out what you actually want — distinguishing between "play Let It Be" (play a specific song) and "let it be" (do nothing). The assistant then looks up information, controls smart devices, or performs the requested action. Modern voice assistants process most of this in the cloud — your voice is sent to servers, analysed, and a response is sent back, often in under a second.',
    hint: 'Think about the two separate steps: hearing the words, then understanding their meaning.',
  },
  {
    question: 'Why do privacy experts raise concerns about always-on voice assistants in the home?',
    options: [
      'Because voice assistants are connected to the internet, which means hackers could theoretically access your home network through the device',
      'Because the device microphone is continuously active listening for the wake word, and audio snippets — including private conversations — can be accidentally triggered and sent to company servers',
      'Because voice assistants log every command you give and sell this data directly to advertisers without any legal requirement to inform you',
      'Because the speakers in smart devices emit low-frequency sounds that can be detected by other smart devices in your home, creating a surveillance network',
    ],
    correctIndex: 1,
    explanation:
      "The core privacy concern is straightforward: for a device to respond when you say 'Hey Siri', it must always be listening. This means the microphone is never truly off. Although companies claim the device only sends audio to servers after the wake word is detected, research has shown that false triggers are common — conversations that sound vaguely like the wake word can cause recordings to be sent accidentally. Amazon, Apple, and Google have all acknowledged that human contractors have listened to some voice recordings to improve accuracy. Apple introduced an opt-out after this became public; Amazon added controls too. But many users remain unaware that any of this was happening.",
    hint: 'Think about what has to be true for a device to respond the moment you say its wake word.',
  },
  {
    question: 'What can voice assistants like Alexa and Siri do well, and where do they typically fall short?',
    options: [
      'They are excellent at complex research and multi-step reasoning, but struggle with simple commands like setting timers because they require precise wording',
      'They handle simple commands well — setting timers, playing music, checking weather — but struggle with ambiguous questions, nuanced requests, and tasks that require genuine reasoning or up-to-date information',
      'They are equally capable at all tasks as long as you have a fast internet connection, because all processing is done in the cloud on powerful servers',
      'They perform better on complex tasks than simple ones, because their AI models were trained primarily on academic and professional language rather than everyday conversation',
    ],
    correctIndex: 1,
    explanation:
      "Voice assistants are at their best for well-defined, structured tasks: 'Set a timer for 10 minutes', 'Play jazz on Spotify', 'What's the weather in Manchester tomorrow?', 'Turn off the living room lights'. These map cleanly to specific actions. They struggle when requests are vague, multi-part, or require integrating information from multiple sources. Ask Siri 'Should I bring an umbrella to the party on Saturday?' and it may not even understand that you want it to cross-reference the weather forecast with your calendar. The newer generation of conversational AI — ChatGPT, Claude — handle this kind of nuanced question far better, but they are accessed via a keyboard interface rather than voice in the home.",
    hint: 'Think about simple vs. complex tasks and where each type fits.',
  },
  {
    question: 'How does a newer conversational AI assistant like ChatGPT differ from a traditional voice assistant like Alexa?',
    options: [
      'ChatGPT is voice-activated and responds to wake words just like Alexa, but uses more recent training data to give more accurate answers',
      'ChatGPT can engage in extended reasoning, write text, explain complex topics, and hold context across a long conversation, whereas Alexa is optimised for short, specific commands and device control',
      'Alexa is connected to the internet and can access live data, while ChatGPT works entirely offline using information stored on your device',
      'The only practical difference is that ChatGPT is available on more devices, including smart fridges and televisions, while Alexa only works on Amazon hardware',
    ],
    correctIndex: 1,
    explanation:
      "Traditional voice assistants like Alexa, Siri, and Google Assistant are optimised for quick, discrete commands and device integration — they are great at controlling your smart home, playing music, and fetching simple facts. They have limited ability to hold a long conversation, reason through a problem, or produce extended written output. Conversational AI like ChatGPT or Claude, on the other hand, can write essays, explain complex topics step by step, help you debug code, summarise a long document, or discuss a nuanced topic in depth. The trade-off is that ChatGPT does not control your lights, does not always have today's weather, and cannot set a timer with a single spoken sentence. Both are types of AI assistant — but built for very different interactions.",
    hint: 'Think about the depth and type of task each is designed for.',
  },
  {
    question: 'What is a "smart speaker" and how does it differ from a smartphone assistant?',
    options: [
      'A smart speaker is a loudspeaker connected to Bluetooth that plays audio from your phone — the intelligence is in the phone, not the speaker',
      'A smart speaker is a dedicated always-on home device with a built-in AI assistant, designed for hands-free use in the home without needing to pick up a phone',
      'A smart speaker is a premium soundbar for home cinema systems that uses AI to adjust audio quality based on the acoustics of the room',
      'A smart speaker and a smartphone assistant are identical in capability — the only difference is that one has speakers and one does not',
    ],
    correctIndex: 1,
    explanation:
      "A smart speaker — Amazon Echo (Alexa), Google Nest (Google Assistant), Apple HomePod (Siri) — is a dedicated home device. Its primary purpose is hands-free voice interaction: you shout across the room without looking at a screen or touching a button. It is always on, always listening for the wake word, and integrated into the home ecosystem — controlling lights, thermostats, doorbells, and other smart devices. A smartphone assistant (also Siri, Google Assistant) serves a similar AI function but is accessed from your pocket, often with a button press or when the screen is on. The smartphone assistant is with you everywhere; the smart speaker stays in one room. Both use broadly similar AI, but the use cases differ.",
    hint: 'Think about where the device lives and how you interact with it.',
  },
]

export function AIAndPersonalAssistants() {
  useMarkVisited('ai-and-personal-assistants')

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F399;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and personal assistants
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Siri, Alexa, Google Assistant, and Cortana — how they work, privacy concerns,
            and what they can and cannot do.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-personal-assistants" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-violet-100 dark:border-violet-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The assistants in your life</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Millions of people talk to AI every day without thinking of it as AI. The voice that sets your alarm, tells you the weather, and plays your music is an AI system — and has been for over a decade.
          </p>
          <div className="space-y-2">
            {[
              'Siri launched in 2011 — the first mainstream AI voice assistant on a consumer device',
              'Amazon Echo and Alexa launched in 2014, bringing always-on voice AI into living rooms for the first time',
              'There are now over 500 million smart speakers in homes around the world',
              'Google Assistant is available on over 1 billion devices, including Android phones and Google Nest speakers',
              'Over a quarter of UK adults now own a smart speaker — the highest rate in Europe',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-violet-600 dark:text-violet-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How they work — under the hood</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            When you say "Hey Alexa, what time is my dentist appointment?", several AI processes happen in a fraction of a second.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F3A4;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Step 1 — Wake word detection</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">A small, always-running model on the device listens for the specific pattern of sounds that match "Hey Alexa" or "OK Google". This runs locally on the device without sending anything to the internet. When it detects the wake word, it starts recording and sends the audio to company servers.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4DD;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Step 2 — Speech to text</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Your spoken words are converted to text by a speech recognition model. These models are trained on millions of hours of speech in many accents and languages — though they still struggle with strong regional accents, background noise, or unusual words.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F9E9;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Step 3 — Understanding intent</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">A natural language processing model figures out what you are asking for. "What time is my dentist appointment?" needs to be understood as a calendar query — not a question about dentistry in general. The system identifies the intent (check calendar), the entities (dentist appointment), and any constraints (time).</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x2705;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Step 4 — Action and response</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">The assistant checks your connected services (Google Calendar, Outlook, Apple Calendar), finds the relevant event, and generates a spoken response. The text is converted back to speech using a text-to-speech model — modern versions sound natural enough that most people cannot tell they are listening to a synthetic voice.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Privacy — the always-listening problem</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The convenience of voice assistants comes with a privacy trade-off that is worth understanding clearly.
          </p>
          <div className="space-y-3">
            {[
              { icon: '&#x1F50A;', title: 'Always listening', text: 'For "Hey Siri" or "Alexa" to work instantly, the device microphone must always be active. Most companies say audio only leaves the device after the wake word — but research has shown false triggers are common. Conversations that sound vaguely like the wake word can accidentally trigger a recording.' },
              { icon: '&#x1F464;', title: 'Human reviewers', text: 'Amazon, Apple, and Google have all confirmed that human contractors listen to a small percentage of recorded commands to improve accuracy. Apple faced public backlash in 2019 after contractors reported hearing sensitive medical and personal conversations. Apple now offers an opt-out; the practice continues by default at some companies.' },
              { icon: '&#x1F4BE;', title: 'What gets stored', text: "Amazon keeps your Alexa voice history indefinitely by default — you can delete it manually, or set it to auto-delete after 3 or 18 months. Google Assistant stores voice activity in your Google account unless you turn this off. Apple says Siri recordings are not linked to your Apple ID and are deleted after six months." },
              { icon: '&#x2699;&#xFE0F;', title: 'What you can do', text: 'Check your voice history settings on each platform. Amazon: Alexa Privacy settings in the app. Google: myactivity.google.com. Apple: Siri and Search settings. You can delete recordings, turn off history storage, or opt out of human review on most platforms — but you have to actively choose to do so.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: item.icon }} />
                <div>
                  <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">{item.title}</p>
                  <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Old assistants vs. new AI — what changed?</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Since ChatGPT launched in late 2022, there is now a clear distinction between old-style voice assistants and the new generation of conversational AI.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-100 dark:bg-green-900">
                  <th className="text-left p-2 text-green-800 dark:text-green-200 font-semibold rounded-tl-lg">Feature</th>
                  <th className="text-left p-2 text-green-800 dark:text-green-200 font-semibold">Alexa / Siri</th>
                  <th className="text-left p-2 text-green-800 dark:text-green-200 font-semibold rounded-tr-lg">ChatGPT / Claude</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Main interface', 'Voice in your home or phone', 'Text in a browser or app'],
                  ['Controls smart devices', 'Yes', 'No'],
                  ['Always listening', 'Yes', 'No — you open the app'],
                  ['Complex reasoning', 'Limited', 'Strong'],
                  ['Writes or explains things', 'Basic', 'Advanced'],
                  ['Up-to-date information', 'Live via web search', 'Varies — some have search'],
                  ['Privacy approach', 'Recordings stored on servers', 'Conversation history, can delete'],
                ].map(([feature, old, newAI]) => (
                  <tr key={feature} className="border-b border-green-100 dark:border-green-800">
                    <td className="p-2 font-medium text-gray-700 dark:text-gray-300">{feature}</td>
                    <td className="p-2 text-gray-600 dark:text-gray-400">{old}</td>
                    <td className="p-2 text-gray-600 dark:text-gray-400">{newAI}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Quiz lessonId="ai-and-personal-assistants" questions={quizQuestions} />

        <ReviewLaterButton lessonId="ai-and-personal-assistants" />
        <LessonNote lessonId="ai-and-personal-assistants" />
        <LessonRating lessonId="ai-and-personal-assistants" />
        <LessonFeedback lessonId="ai-and-personal-assistants" />
        <RelatedLessons currentId="ai-and-personal-assistants" />
        <NextLesson currentId="ai-and-personal-assistants" />
      </div>
    </div>
  )
}
