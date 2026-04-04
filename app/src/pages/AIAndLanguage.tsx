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
    question: 'How does modern AI translation (like Google Translate) learn to translate?',
    options: [
      'Linguists manually write translation rules for every language pair',
      'It learns patterns from billions of examples of human-translated text',
      'It translates word-by-word using a dictionary',
      'It uses a universal language as an intermediate step',
    ],
    correctIndex: 1,
    explanation:
      'Modern neural machine translation learns from enormous datasets of text that has been translated by humans — books, websites, EU documents, news articles. By seeing millions of examples, the model learns patterns of meaning, grammar, and context, rather than following manually written rules.',
  },
  {
    question: 'What is "speech-to-text" technology?',
    options: [
      'A programme that converts written text into a speech for a politician',
      'AI that converts spoken words into written text',
      'Technology that reads text aloud in a human voice',
      'A translation service for sign language',
    ],
    correctIndex: 1,
    explanation:
      'Speech-to-text (also called automatic speech recognition or ASR) converts spoken audio into written text. It powers voice assistants like Siri and Alexa, captions on video calls, and dictation software. Modern systems use deep learning and are trained on thousands of hours of labelled audio recordings.',
  },
  {
    question: 'What is a significant limitation of current AI translation?',
    options: [
      'It can only translate between major European languages',
      'It is too slow for real-time conversation',
      'It can struggle with nuance, cultural context, humour, and low-resource languages',
      'It requires an internet connection to translate even short phrases',
    ],
    correctIndex: 2,
    explanation:
      'AI translation works well for common language pairs and straightforward text. It often stumbles on idioms, wordplay, cultural references, and tone — things that require deep contextual understanding. It also performs poorly on "low-resource" languages (languages with little training data available), leaving millions of speakers underserved.',
  },
  {
    question: 'How is AI helping to preserve endangered languages?',
    options: [
      'By banning people from speaking other languages',
      'By creating grammar apps, recording and transcribing speakers, and building translation tools for languages with few remaining speakers',
      'By translating all endangered language text into English for safekeeping',
      'AI cannot help with endangered languages because there is not enough training data',
    ],
    correctIndex: 1,
    explanation:
      "Projects around the world use AI to record fluent speakers of endangered languages, automatically transcribe what they say, create learning apps, and build the first digital dictionaries and translation tools for these languages. While limited data is a challenge, AI dramatically reduces the cost of these preservation efforts.",
  },
  {
    question: 'How does text-to-speech (TTS) technology help people with disabilities?',
    options: [
      'It only helps people who cannot type',
      'It enables people with visual impairments to hear written content read aloud, and helps people with speech disabilities to communicate using synthesised voices',
      'It is primarily used to create audiobooks commercially',
      'It helps people who speak very quietly to be heard in meetings',
    ],
    correctIndex: 1,
    explanation:
      'Text-to-speech converts written text into natural-sounding spoken audio. For people with visual impairments, it makes websites, documents, and apps accessible. For people with conditions like ALS or other motor neurone diseases who lose the ability to speak, personalised TTS systems can synthesise their own voice from recordings, allowing them to continue communicating.',
  },
]

export function AIAndLanguage() {
  useMarkVisited('ai-and-language')
  useLessonVisit('ai-and-language')
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F5E3;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and language
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI learned to translate between languages, understand your voice,
            and help break down barriers for people around the world.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-language" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Language: the hardest problem for computers</h2>
          <p className="text-gray-600 leading-relaxed">
            Language seems effortless to humans. You understood every word in that previous sentence
            without thinking about grammar, context, or meaning. For computers, language was
            extraordinarily difficult for decades.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Early translation programmes used thousands of hand-written rules: &ldquo;if the Spanish
            word is X, the English word is Y.&rdquo; They were brittle, slow to build, and produced
            famously awkward results. The breakthrough came when researchers stopped writing rules
            and started training AI on enormous amounts of human-translated text.
          </p>
          <div className="bg-violet-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-violet-800 text-sm">Did you know?</p>
            <p className="text-violet-700 text-sm leading-relaxed">
              Google Translate was launched in 2006 using statistical methods. In 2016, it
              switched to neural machine translation &mdash; and quality improved overnight by more
              than the previous decade of incremental progress combined.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How AI translation works</h2>
          <p className="text-gray-600 leading-relaxed">
            Modern AI translation uses a type of model called a transformer (the same architecture
            behind ChatGPT). It has read billions of sentences in many languages and learned
            the statistical patterns that link them.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4DA;',
                label: 'Training on human translations',
                text: 'The model learns from texts that humans have already translated: EU parliamentary proceedings (available in 24 languages), books, websites, scientific papers. It learns that concepts, not just words, correspond across languages.',
              },
              {
                icon: '&#x1F4AC;',
                label: 'Understanding context',
                text: 'Instead of translating word by word, the model reads the whole sentence (and nearby sentences) before producing the translation. This is why it handles ambiguous words better: "bank" near "river" translates differently to "bank" near "money".',
              },
              {
                icon: '&#x26A0;&#xFE0F;',
                label: 'Where it still struggles',
                text: 'Idioms, wordplay, cultural humour, and highly specialised technical language remain challenging. The more training data exists for a language pair, the better the translation. Languages with less data available perform noticeably worse.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Speech: AI that listens and speaks</h2>
          <p className="text-gray-600 leading-relaxed">
            Language is not just text. AI now handles spoken language in two directions: listening
            (speech-to-text) and speaking (text-to-speech).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-blue-800 text-sm">Speech-to-text (listening)</p>
              <p className="text-blue-700 text-sm leading-relaxed">
                Converts spoken audio into written text. Powers voice assistants, live captions,
                dictation software, and accessibility tools. Modern systems like Whisper (OpenAI)
                are trained on hundreds of thousands of hours of audio and work in dozens of languages.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-purple-800 text-sm">Text-to-speech (speaking)</p>
              <p className="text-purple-700 text-sm leading-relaxed">
                Converts written text into natural-sounding spoken audio. Early TTS systems sounded
                robotic; modern AI voices are often indistinguishable from humans. They can mimic
                specific voices, accents, and emotional tones.
              </p>
            </div>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-amber-800 text-sm">Did you know?</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              The late physicist Stephen Hawking used a speech synthesiser for decades. Modern
              AI voice cloning can create a personalised voice from just a few minutes of
              recordings &mdash; helping people with ALS and other conditions to speak in their own
              voice even after losing the ability to physically speak.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI and language preservation</h2>
          <p className="text-gray-600 leading-relaxed">
            About 3,000 of the world&apos;s 7,000 languages are endangered &mdash; meaning they are spoken
            by ageing communities with few young speakers. AI offers new tools for preservation
            and revitalisation.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'Recording and transcription',
                text: 'AI can automatically transcribe recordings of fluent speakers, making it far cheaper to document a language before its last native speakers pass away. What once required months of manual transcription can now be done in hours.',
              },
              {
                label: 'Building learning tools',
                text: "Projects like Endangered Languages Project and Mozilla's Common Voice collect recordings in minority languages to train speech recognition models, enabling the first-ever voice assistants in these languages.",
              },
              {
                label: 'Translation for low-resource languages',
                text: 'Meta AI and others have built models that handle hundreds of languages including many with very limited online text. This is technically harder (less training data) but increasingly possible through transfer learning from better-resourced languages.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-gray-800 text-sm">{label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="bg-violet-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-violet-800 text-sm">Did you know?</p>
            <p className="text-violet-700 text-sm leading-relaxed">
              Te Hiku Media, a Maori organisation in New Zealand, built a speech recognition
              model for the Maori language &mdash; one of the first indigenous language AI systems in
              the world. Crucially, they chose to keep the model under community control rather
              than giving it to a tech company, establishing a model for indigenous data sovereignty.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI as an accessibility tool</h2>
          <p className="text-gray-600 leading-relaxed">
            Language AI has transformed accessibility for people who are deaf, hard of hearing,
            blind, or have speech or motor disabilities.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F9CF;',
                label: 'Live captions',
                text: 'AI-powered live captions are now standard in video call platforms (Zoom, Teams, Google Meet). Deaf and hard-of-hearing users can follow conversations in real time. The technology also helps non-native speakers who process written text better than spoken audio.',
              },
              {
                icon: '&#x1F4F1;',
                label: 'Screen readers',
                text: 'AI improves screen readers by understanding image content (describing what is in a photo), summarising long documents, and navigating complex web pages that older screen readers struggled with.',
              },
              {
                icon: '&#x270F;&#xFE0F;',
                label: 'Augmentative communication',
                text: 'People with conditions like cerebral palsy, locked-in syndrome, or severe autism often use communication devices. AI makes these devices faster and smarter — predicting what the user wants to say from partial input and generating natural-sounding output.',
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

        <Quiz lessonId="ai-and-language" questions={quizQuestions} />
        <LessonRating lessonId="ai-and-language" />
        <ReviewLaterButton lessonId="ai-and-language" />
        <LessonNote lessonId="ai-and-language" />
        <RelatedLessons currentId="ai-and-language" />
        <NextLesson currentId="ai-and-language" />
      </div>
    </div>
  )
}
