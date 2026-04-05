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

const LESSON_TITLE = 'AI and translation'

const KEY_TAKEAWAYS = [
  'Modern AI translation (like DeepL and Google Translate) uses neural networks trained on billions of translated sentences — producing results far better than the word-by-word systems of the early 2000s.',
  'DeepL is widely considered more accurate and natural-sounding than Google Translate for European languages, particularly for nuance, tone, and idioms.',
  'Real-time AI interpreting — translating speech as it is spoken — is now available in consumer devices, earbuds, and video calling apps, removing many language barriers in everyday situations.',
  'AI handles grammar and common phrases well but still struggles with cultural references, humour, highly technical jargon, and dialects — human professional translators remain essential for important documents.',
  'For everyday use — understanding a foreign menu, reading an email, or following a conversation in another language — AI translation is now good enough to be genuinely useful for most people.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What was the main problem with early computer translation systems like the first version of Google Translate?',
    options: [
      'They were too slow — translating a single sentence took several minutes of processing time',
      'They translated word by word without understanding grammar, context, or sentence structure — producing unnatural, often nonsensical results',
      'They could only handle a handful of languages and refused to process text longer than a paragraph',
      'They required a constant internet connection and could not work offline at all',
    ],
    correctIndex: 1,
    explanation:
      'Early translation systems used rule-based approaches and simple word substitution. "I went to the bank" might become "I went to the riverside" in another language because the word has multiple meanings and the computer picked the wrong one. Without understanding that "bank" in context means a financial institution, not a riverbank, the translation fails. Modern neural machine translation reads whole sentences and paragraphs before translating — understanding context, grammar rules across the whole sentence, and idiomatic meaning.',
    hint: 'Think about what "translating word by word" misses.',
  },
  {
    question: 'Why do many professional translators and language learners consider DeepL better than Google Translate for European languages?',
    options: [
      'DeepL translates faster — processing a document in under one second compared to Google Translate\'s several minutes',
      'DeepL produces more natural-sounding, contextually appropriate translations — especially for tone, nuance, and idioms',
      'DeepL supports more languages — over 500 compared to Google Translate\'s 100',
      'DeepL is completely free with no word limits, while Google Translate charges for long documents',
    ],
    correctIndex: 1,
    explanation:
      'DeepL was built by a German company and trained specifically to prioritise fluency and naturalness — not just accuracy. Its translations often sound like they were written by a native speaker rather than a computer. For European languages (French, German, Spanish, Italian, Polish, and others), it consistently outperforms Google Translate in independent tests and is the preferred tool of many professional translators who use it as a first draft. Google Translate supports more languages overall, but DeepL wins on quality for its supported range.',
    hint: 'Think about how the translation sounds, not just whether the words are technically correct.',
  },
  {
    question: 'How does real-time AI interpreting work in consumer devices like smart earbuds?',
    options: [
      'The earbud connects to a human interpreter working remotely who listens and translates live via a microphone',
      'The device captures spoken words, sends them to an AI model that translates them, and plays the translation back through the earpiece within a second or two',
      'The earbud uses ultrasonic lip-reading technology to capture speech without a microphone, protecting privacy',
      'The device pre-downloads every possible conversation topic as an audio file and matches spoken words to the nearest pre-recorded translation',
    ],
    correctIndex: 1,
    explanation:
      "Devices like Google's Pixel Buds and apps like Google Translate's conversation mode work by: capturing speech via a microphone, sending it to a cloud-based AI model (or increasingly processing it on-device), running it through an automatic speech recognition model to create text, translating that text, and then converting the translation back to speech to play in your ear. The whole process takes one to two seconds. It is not perfectly accurate — especially with accents, background noise, or technical vocabulary — but it is good enough for basic conversations, travel, and service interactions.",
    hint: 'Think about the steps from speaking to hearing the translation.',
  },
  {
    question: 'In which situation does AI translation still struggle and a human translator remains important?',
    options: [
      'Translating simple tourist phrases like "where is the station?" or "one coffee please" — AI makes too many mistakes with basic vocabulary',
      'Translating legal contracts, medical documents, culturally specific humour, or content where a mistranslation could have serious consequences',
      'Translating between widely spoken European languages like French and Spanish — these language pairs are still too complex for AI',
      'Translating emails — AI cannot handle informal writing styles or different email formats across cultures',
    ],
    correctIndex: 1,
    explanation:
      "AI translation is now very good for general communication. Where it still falls short: legal documents (where a mistranslated clause could invalidate a contract), medical information (where a wrong word could harm a patient), literary translation (where style, rhythm, and cultural resonance matter), humour (jokes are deeply cultural and rarely translate literally), and highly specialised technical fields. A translated user manual for industrial machinery needs human expert review. A translated text message to a hotel asking for a late checkout? AI is fine.",
    hint: 'Think about the cost of getting the translation wrong.',
  },
  {
    question: 'What is one genuine everyday use case where AI translation is now good enough for most people?',
    options: [
      'Translating a novel for publication — AI can now produce literary translations indistinguishable from human work',
      'Translating foreign menus, travel signs, product labels, and casual messages — basic communication while travelling or shopping',
      'Simultaneous UN conference interpreting between heads of state — the accuracy is now reliable enough for diplomatic use',
      'Translating patent applications — AI handles technical and legal language in all major languages without errors',
    ],
    correctIndex: 1,
    explanation:
      "Google Translate's camera feature — point your phone at a sign and see the translation overlaid on the image in real time — is one of the most used features on mobile phones globally. Understanding a restaurant menu in Italy, reading safety instructions on a product bought online from another country, or following a foreign news article are all cases where AI translation is genuinely useful and accurate enough for the purpose. It has lowered the barrier to international travel and cross-border shopping enormously.",
    hint: 'Think about the kind of translation most people actually need in their daily lives.',
  },
]

export function AIAndTranslation() {
  useMarkVisited('ai-and-translation')

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F5E3;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and translation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How machine translation went from laughably bad to genuinely useful — DeepL vs Google Translate,
            real-time interpreting, subtitles, and where AI still needs help.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-translation" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-cyan-100 dark:border-cyan-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">From laughably bad to genuinely useful</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            For decades, computer translation was a joke. Early systems translated word by word, producing garbled nonsense that often changed the meaning entirely. Then neural networks arrived.
          </p>
          <div className="space-y-2">
            {[
              'Old rule-based systems: "The spirit is willing but the flesh is weak" famously became "The vodka is good but the meat has gone off" when translated to Russian and back',
              'In 2016, Google switched from its statistical model to a neural network — accuracy improved dramatically overnight',
              'Google Translate now supports over 130 languages and processes over 100 billion words every day',
              'DeepL, launched in 2017, quickly became the favourite of professional translators for European languages',
              'AI translation has made travel, online shopping, and international communication vastly more accessible',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-cyan-600 dark:text-cyan-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">DeepL vs Google Translate</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Both use neural machine translation but have different strengths.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F1E9;&#x1F1EA;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">DeepL — quality first</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Built by a German company and trained to prioritise fluency and naturalness over literal accuracy. Its translations often sound like they were written by a native speaker. Preferred by professional translators for European languages as a high-quality first draft. Supports fewer languages than Google but consistently wins quality comparisons in its range.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F30D;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Google Translate — breadth and accessibility</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Supports over 130 languages including many with fewer speakers — Zulu, Welsh, Maltese, Hawaiian. Has a camera feature that overlays translations on images in real time. Integrated into Android, Chrome, and Google products everywhere. The most widely used translation tool on the planet.</p>
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950 rounded-xl p-4">
              <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
                <span className="font-semibold">Which to use?</span> For everyday translation — menus, messages, emails, travel — either works well. For important documents in European languages, DeepL often produces better results. For languages outside European families, Google Translate is often the only option.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Real-time interpreting and live subtitles</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Translating text is one thing. Translating speech live as it happens is harder — and AI is getting very good at it.
          </p>
          <div className="space-y-3">
            {[
              { icon: '&#x1F3A7;', label: 'Smart earbuds', text: "Google Pixel Buds and similar devices can translate a conversation in near real time — you speak, the AI translates, the translation plays in the other person's ear within a couple of seconds." },
              { icon: '&#x1F4F1;', label: "Google Translate conversation mode", text: 'Hold up your phone between two people speaking different languages. The app listens, translates, and plays the translation aloud — a two-way live interpreter in your pocket.' },
              { icon: '&#x1F4FA;', label: 'Auto-generated subtitles', text: 'YouTube, Netflix, and most video platforms use AI to generate subtitles and translate them into other languages. Quality is now good enough for most content, though heavily accented or fast speech still causes errors.' },
              { icon: '&#x1F4BB;', label: 'Video call translation', text: 'Microsoft Teams and Zoom now offer live translated captions during calls — type in English, someone else reads in French. Still developing but already useful for multilingual business calls.' },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-purple-50 dark:bg-purple-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-0.5">{label}</p>
                  <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Where AI still struggles</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI translation is impressive but not perfect. Understanding the gaps helps you use it wisely.
          </p>
          <div className="space-y-2">
            {[
              'Humour and wordplay — jokes are deeply cultural. A pun in English rarely works in French because it relies on English phonetics or idioms.',
              'Legal and medical documents — a mistranslated clause in a contract or dosage instruction in a medical leaflet can have serious consequences.',
              'Dialects and regional variants — AI is trained mainly on standard written forms of languages. Heavy regional dialects, slang, and spoken informality are harder.',
              'Low-resource languages — languages with few written texts online have less training data, leading to lower quality.',
              'Cultural nuance — words carry cultural meaning that does not translate directly. "Schadenfreude" (German: pleasure at others misfortune) has no equivalent in English.',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-amber-600 dark:text-amber-400 font-bold mt-0.5 flex-shrink-0">&#x26A0;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Practical tips for using AI translation</h2>
          <div className="space-y-2">
            {[
              'Use it freely for travel, menus, product labels, and casual messages — it is accurate enough for these everyday needs',
              'For important documents (legal, medical, official), always have a professional human translator review the AI output',
              'If something reads oddly, try rephrasing the source text more simply — AI works better with clear, unambiguous language',
              "For European languages, try DeepL alongside Google Translate and compare — DeepL often produces more natural-sounding results",
              'Use Google Translate\'s camera feature to translate signs, menus, and labels in real time — one of the most useful travel tools available',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <LessonNote lessonId="ai-and-translation" />
        <ReviewLaterButton lessonId="ai-and-translation" />

        <Quiz lessonId="ai-and-translation" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-translation" />
        <LessonFeedback lessonId="ai-and-translation" />

        <RelatedLessons currentId="ai-and-translation" />

        <NextLesson currentId="ai-and-translation" />

      </div>
    </div>
  )
}
