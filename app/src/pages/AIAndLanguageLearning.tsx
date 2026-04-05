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
import { DifficultyBadge } from '../components/DifficultyBadge'

const LESSON_TITLE = 'AI and language learning'

const KEY_TAKEAWAYS = [
  "Apps like Duolingo use AI to personalise your learning path — tracking which words you know, which grammar patterns trip you up, and scheduling revision at the exact moment you are about to forget something (spaced repetition).",
  'AI pronunciation coaches can listen to you speak and give instant, specific feedback on individual sounds — something that was previously only possible with a human teacher.',
  'Large language models like ChatGPT and Claude can now hold extended conversations in any major language, giving learners unlimited practice with a patient, always-available conversation partner.',
  'AI translation tools like DeepL have become remarkably accurate for everyday communication, raising a genuine question: do we still need to learn languages if AI can translate for us instantly?',
  'The honest answer is that AI makes language learning more accessible and effective than ever — but fluency still requires real human interaction, cultural immersion, and the kind of motivation that no app can provide.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: "What is 'spaced repetition' and why do AI language learning apps use it?",
    options: [
      'It is a technique where you study for short sessions spread throughout the day rather than one long session, which reduces mental fatigue',
      'It is an AI scheduling system that shows you vocabulary at precisely the moment you are about to forget it, based on a model of memory decay, so each review happens at the optimal time to strengthen long-term retention',
      'It is a method where words are repeated multiple times within a single lesson so they stick in short-term memory before moving on',
      'It is a system that spaces out lessons over weeks to prevent learners from burning out by studying too intensively',
    ],
    correctIndex: 1,
    explanation:
      "Spaced repetition is based on the psychological finding that memories decay over time in a predictable way (described by Ebbinghaus's forgetting curve). If you review a piece of information just before you would otherwise forget it, the memory is strengthened and you can wait longer before the next review. AI language apps track every word and grammar pattern you have encountered and model your individual forgetting rate for each item. Duolingo, Anki, and similar tools schedule reviews at the optimal moment — which means you spend less time reviewing things you already know well and more time reinforcing things you are about to forget.",
    hint: 'Think about what makes revision most efficient — when is the best moment to review something?',
  },
  {
    question: 'How does AI pronunciation coaching differ from traditional pronunciation practice?',
    options: [
      "AI pronunciation coaches analyse your accent and correct it towards a specific regional dialect, such as BBC English or American General American",
      "AI pronunciation coaches can listen to individual phonemes (sounds) in your speech, compare them to target language sounds, and give specific feedback on exactly which muscle movements to adjust — instantly and as many times as you need",
      "AI pronunciation coaches use a simple pass/fail system — if the AI's speech recognition understands you, you passed; if it does not, you need to try again",
      "AI pronunciation coaches work by playing a native speaker's recording and asking you to repeat it, then rating your similarity on a 1-10 scale",
    ],
    correctIndex: 1,
    explanation:
      "Traditional pronunciation practice either relied on a teacher who might not give detailed phonetic feedback, or on listening to recordings and hoping you were imitating correctly. AI pronunciation tools like those in Duolingo, Babbel, and specialist apps like Elsa Speak use speech recognition and phoneme analysis to give precise feedback. They can identify that your French 'u' vowel sounds too much like English 'oo', or that your Spanish rolled 'r' needs more tongue vibration — and suggest specific adjustments. You can practise hundreds of times with instant feedback, which would be impractical with a human tutor.",
    hint: 'Think about what is unique about having an AI that never gets tired of giving feedback.',
  },
  {
    question: 'What is the key limitation of using AI chatbots as conversation practice partners for language learning?',
    options: [
      'AI chatbots only support a limited number of languages — currently fewer than 30 — so learners of less common languages cannot use them',
      'AI chatbots are infinitely patient and never express frustration or confusion, which means learners miss the experience of navigating misunderstandings and repair strategies that are essential in real human conversation',
      'AI chatbots correct every grammar mistake immediately, which disrupts the flow of conversation and makes learners afraid to experiment',
      'AI chatbots cannot understand regional accents or colloquial speech, so they only reinforce formal textbook language rather than real-world communication',
    ],
    correctIndex: 1,
    explanation:
      "AI chatbots are genuinely useful language learning partners — they are always available, never impatient, and can engage in conversation at any level. However, real human conversation involves navigating genuine misunderstandings, reading social cues, managing awkwardness, and the pressure of communicating with a real person who has limited time and patience. These are skills that require human interaction to develop. AI can provide excellent practice for vocabulary, grammar, and confidence, but the final leap to fluency typically requires real conversation with native speakers in authentic contexts.",
    hint: "Think about what makes human conversation different from talking to a machine — beyond just the language itself.",
  },
  {
    question: "If AI translation tools like DeepL are now highly accurate, why is learning a language still valuable?",
    options: [
      "AI translation tools are not actually that accurate — they make frequent serious errors that would cause problems in professional or sensitive contexts, so human translators are still essential for any important communication",
      "Speaking someone's language signals respect, enables spontaneous connection, allows you to appreciate literature and humour in their original form, and provides cognitive benefits — none of which translation tools can replace",
      "AI translation tools only work for text — they cannot handle real-time spoken conversation, so language skills remain essential for face-to-face communication",
      "AI translation tools require an internet connection, so language skills remain essential in areas with poor connectivity or when technology fails",
    ],
    correctIndex: 1,
    explanation:
      "AI translation has become remarkably good for practical communication — ordering food, reading signs, understanding documents. But language is much more than information transfer. Speaking someone's language — even imperfectly — signals that you respect their culture enough to have made an effort. It enables spontaneous, unmediated connection that feels different from speaking through a device. It lets you appreciate jokes, poetry, and nuance in their original form. And decades of research show that learning languages builds cognitive flexibility, empathy, and cultural understanding. The case for language learning has shifted, but not collapsed.",
    hint: "Think about what happens in human connection beyond information transfer.",
  },
  {
    question: "How does Duolingo's AI decide which lessons to show you next?",
    options: [
      "Duolingo's AI follows a fixed curriculum designed by language experts — it shows lessons in a predetermined order regardless of individual performance",
      "Duolingo's AI analyses your response patterns, error types, and time spent on each item to build a model of your current knowledge, then prioritises content that addresses your specific gaps while reviewing items you are about to forget",
      "Duolingo's AI adjusts only the difficulty level — showing harder or easier versions of the same content — but does not change the order or type of lessons presented",
      "Duolingo's AI personalises based on declared preferences — you tell it what topics interest you, and it selects vocabulary from those areas",
    ],
    correctIndex: 1,
    explanation:
      "Duolingo uses a learning model called BirdBrain (later evolved into more sophisticated systems) that tracks your performance on every vocabulary item and grammar pattern. It models not just whether you know something, but how quickly you are likely to forget it. This informs a continuous prioritisation of what to teach next — mixing new material with spaced repetition of older content, and identifying specific patterns where you consistently make errors to target extra practice. The system also has a motivational layer that considers streak maintenance and engagement to keep you returning.",
    hint: "Think about how personalised learning is different from following the same path as every other learner.",
  },
]

export function AIAndLanguageLearning() {
  useMarkVisited('ai-and-language-learning')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F5E3;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and language learning
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI has transformed the way people learn languages — from Duolingo's spaced repetition
            to AI pronunciation coaches, conversation practice bots, and instant translation, and
            whether fluency still matters in the age of AI.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <DifficultyBadge level="Beginner" />
          </div>
          <CompletedBadge lessonId="ai-and-language-learning" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Why language learning has always been hard</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Language learning takes hundreds or thousands of hours for most adults. The traditional barriers were consistent access to a teacher, affordable materials, and opportunities to practise with native speakers. AI is dismantling all three.
          </p>
          <div className="space-y-2">
            {[
              'The US Foreign Service Institute estimates it takes a native English speaker 600-750 hours to reach professional working proficiency in French or Spanish, and 2,200 hours for Japanese or Arabic',
              'Regular practice is more important than intensive bursts — but maintaining a daily habit was difficult before smartphones and apps made learning portable',
              'Pronunciation practice traditionally required a teacher, since you cannot hear your own errors the way a listener can',
              'Conversation practice required access to native speakers — expensive through formal lessons, difficult through travel, and for less common languages, very limited',
              'AI changes all four of these constraints simultaneously — making learning cheaper, more consistent, more personalised, and available in any language at any time',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Spaced repetition and adaptive learning</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The most important AI contribution to language learning may not be the most glamorous — it is smarter scheduling of what you practise and when.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F9E0;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">The forgetting curve</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Memory researcher Hermann Ebbinghaus discovered in the 1880s that memories decay in a predictable curve — you forget most new information within days unless you review it. The optimal revision strategy is to review material just before you would forget it, which strengthens the memory and lets you wait longer before the next review. Doing this manually for hundreds of vocabulary items was impractical — AI does it automatically.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F426;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Duolingo's learning model</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Duolingo tracks your performance on every word and grammar pattern, models how quickly you are likely to forget each one individually, and schedules reviews at the optimal time. It also identifies your specific error patterns — perhaps you consistently confuse masculine and feminine nouns in French, or mix up ser and estar in Spanish — and targets extra practice at those weak points. This personalisation is something a textbook or classroom cannot match.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F3AF;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Anki and flashcard tools</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Anki is a free, open-source flashcard tool with a powerful spaced repetition algorithm used by medical students, language learners, and anyone with large amounts of material to memorise. It has a huge community of users who share pre-built decks for hundreds of languages and subjects. Unlike Duolingo, it requires more self-discipline — you create or import your own cards — but many serious language learners swear by it.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI pronunciation coaches</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Pronunciation was one of the hardest things to practise without a teacher — you cannot always hear your own errors. AI changes this.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F399;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Elsa Speak</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Elsa (English Language Speech Assistant) uses speech recognition trained specifically on non-native English speakers to identify pronunciation errors at the phoneme level. It can tell you not just that your pronunciation was unclear, but that your specific issue is the 'th' sound, or that your vowel in 'ship' sounds like 'sheep'. This granular feedback, delivered instantly and at scale, was previously only possible with a specialist phonetics teacher.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F50A;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Pronunciation in Duolingo and Babbel</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Most major language apps now include pronunciation practice with AI feedback. You speak a word or sentence, and the AI assesses how close your pronunciation is to a native speaker model. The quality varies significantly between apps — some simply check if speech recognition understood you, while others provide phoneme-level analysis. For languages with sounds very different from English (like tones in Mandarin, or rolled Rs in Spanish), AI feedback is genuinely helpful.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-violet-100 dark:border-violet-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI conversation practice</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Access to native speakers for conversation practice was one of the biggest barriers to language learning. Large language models have changed this completely.
          </p>
          <div className="space-y-2">
            {[
              'ChatGPT, Claude, and similar LLMs can hold fluent conversations in over 50 languages, switching seamlessly and maintaining context across long exchanges',
              'You can ask an AI to role-play scenarios — ordering food in Paris, negotiating a deal in Tokyo, interviewing for a job in Madrid — with no embarrassment or pressure',
              'AI conversation partners are infinitely patient — they will never sigh, check their watch, or lose interest, making them excellent for beginners who need a lot of repetition',
              'You can ask the AI to correct every mistake, only major mistakes, or no mistakes — tailoring the experience to your current goal (fluency or accuracy)',
              "Apps like Pimsleur and Rosetta Stone have integrated AI conversation features, while newer apps like Speak are built entirely around AI conversation practice",
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-violet-600 dark:text-violet-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-4">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              <strong>The key limitation:</strong> AI conversation is infinitely patient, but real human conversation involves navigating misunderstandings, reading social cues, managing awkward silences, and the pressure of communicating with a real person. These skills ultimately require human interaction to develop fully.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI translation — does fluency still matter?</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI translation has improved dramatically. Tools like DeepL, Google Translate, and built-in phone translation can now handle everyday communication reliably. So does learning a language still matter?
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-rose-50 dark:bg-rose-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F5FA;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-rose-800 dark:text-rose-200 text-sm mb-0.5">What AI translation does well</p>
                <p className="text-rose-700 dark:text-rose-300 text-sm leading-relaxed">Reading menus, signs, and documents. Understanding written content in other languages. Communicating basic information in person using a phone. Translating business documents and emails for understanding (not publishing). For functional communication in a foreign country, AI translation is now genuinely good enough for most purposes.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-rose-50 dark:bg-rose-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F91D;</span>
              <div>
                <p className="font-semibold text-rose-800 dark:text-rose-200 text-sm mb-0.5">What language learning still offers</p>
                <p className="text-rose-700 dark:text-rose-300 text-sm leading-relaxed">Speaking someone's language — even imperfectly — signals respect and creates genuine human connection that communicating through a device cannot replicate. Fluency allows you to experience literature, humour, and cultural nuance in their original form. Research shows that language learning builds cognitive flexibility and cultural empathy. And in spontaneous real-world conversation, reaching for a phone breaks the flow of human interaction in ways that matter.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-rose-50 dark:bg-rose-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4AC;</span>
              <div>
                <p className="font-semibold text-rose-800 dark:text-rose-200 text-sm mb-0.5">The changing case for language learning</p>
                <p className="text-rose-700 dark:text-rose-300 text-sm leading-relaxed">The practical case — learning a language to get by abroad — has weakened with AI translation. The human connection case — learning a language to genuinely connect with other cultures and people — remains as strong as ever. The question is shifting from "can you communicate?" to "do you want to genuinely connect?"</p>
              </div>
            </div>
          </div>
        </div>

        <LessonNote lessonId="ai-and-language-learning" />
        <ReviewLaterButton lessonId="ai-and-language-learning" />

        <Quiz lessonId="ai-and-language-learning" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-language-learning" />
        <LessonFeedback lessonId="ai-and-language-learning" />

        <RelatedLessons currentId="ai-and-language-learning" />

        <NextLesson currentId="ai-and-language-learning" />

      </div>
    </div>
  )
}
