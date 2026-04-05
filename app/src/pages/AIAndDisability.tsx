import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { ShareButton } from '../components/ShareButton'
import { LessonFeedback } from '../components/LessonFeedback'
import { DifficultyBadge } from '../components/DifficultyBadge'

const LESSON_TITLE = 'AI and disability'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does Be My Eyes use AI to help people with visual impairments?',
    options: [
      'It sends a trained guide dog to the user when they need help navigating outdoors',
      'It connects users to a network of human volunteers and also offers an AI assistant that can describe images, read text, and answer questions using computer vision',
      'It surgically enhances vision using AI-guided laser treatment available through the NHS',
      'It translates all text into Braille in real time using a connected device',
    ],
    correctIndex: 1,
    explanation:
      "Be My Eyes started as an app connecting blind and partially sighted people to sighted volunteers who could see through the phone camera and help with tasks — reading a label, checking if clothes match, navigating a new space. It later added an AI assistant (powered by GPT-4 Vision) that can describe images, read printed text, identify products, and answer questions about what the camera sees — available instantly, 24/7, without waiting for a volunteer. This combination of human and AI assistance represents a genuinely transformative accessibility tool.",
    hint: 'Think about what a sighted person can do for you over a video call — now imagine that available instantly at any time.',
  },
  {
    question: 'What is one significant limitation of current AI automatic captioning tools?',
    options: [
      'They only work in American English and cannot caption other languages',
      'They require a paid subscription and are not available on public platforms like YouTube',
      'They can struggle with accents, technical vocabulary, background noise, and multiple overlapping speakers — producing errors that can change the meaning of what was said',
      'They produce captions with a delay of several minutes, making them useless for live events',
    ],
    correctIndex: 2,
    explanation:
      "AI automatic captioning has improved dramatically — Google's Live Caption, Microsoft's Azure Speech, and YouTube's auto-captions are genuinely useful tools. However, they still make meaningful errors, particularly with strong regional accents, non-standard pronunciation, technical or medical vocabulary, multiple speakers talking over each other, and background noise. For a deaf person, a captioning error that changes 'the patient is stable' to 'the patient is unable' is not a minor inconvenience — it is a failure of accessibility. This is why human captioners (subtitlers) are still preferred for high-stakes situations, and why the disability community pushes for accuracy standards rather than just availability.",
    hint: 'Think about what makes speech recognition difficult for humans, let alone machines.',
  },
  {
    question: 'How are AI-powered AAC (Augmentative and Alternative Communication) apps helping people with speech difficulties?',
    options: [
      'They teach users to speak by playing recordings of correct pronunciation until the user can mimic them',
      'They predict words and phrases the user wants to say based on context and past usage, making communication faster and less effortful',
      'They surgically implant a microphone that converts thoughts directly into spoken words',
      'They allow users to communicate exclusively in sign language with any hearing person',
    ],
    correctIndex: 1,
    explanation:
      "AAC (Augmentative and Alternative Communication) tools help people who cannot speak or who have very limited speech — due to cerebral palsy, motor neurone disease, autism, stroke, or other conditions — communicate using symbols, text, or synthesised speech. The AI improvement is in prediction: the app learns which words and phrases this particular user communicates most often, in which contexts, and predicts what they want to say with fewer taps. This can transform communication speed from a few words per minute to something approaching normal conversation pace. Stephen Hawking used a version of this technology throughout his career. Modern systems can also learn from a user's eye gaze, head movement, or even minimal muscle signals.",
    hint: 'Think about what autocomplete does on your phone keyboard — now applied to full speech communication.',
  },
  {
    question: 'Why is community involvement in AI accessibility design particularly important?',
    options: [
      'Disabled people are legally required to test all accessibility technology before it is released in the UK',
      'AI tools designed without disabled people often solve the wrong problem, add unnecessary complexity, or create new barriers — disabled users bring essential knowledge of their own needs',
      'Involving disabled people reduces the cost of development by replacing expensive engineering work',
      'It is not especially important — AI tools are generally effective regardless of who designs them',
    ],
    correctIndex: 1,
    explanation:
      "The disability community has a phrase: 'Nothing about us without us.' AI tools designed by non-disabled people for disabled users frequently fail in practice — they may solve a problem that is not the real barrier, be too complicated to use with the motor control or cognitive load available, or make assumptions about what disabled people want or need. Blind users of screen readers, for example, have detailed knowledge of keyboard navigation patterns that sighted developers rarely understand. Autistic users know which kinds of AI interaction are overwhelming and which are helpful. Involving disabled people as co-designers — not just as testers at the end — produces better tools and avoids the waste of building something nobody can use.",
    hint: "Consider who has the most direct knowledge of what an assistive technology needs to do.",
  },
]

export function AIAndDisability() {
  useMarkVisited('ai-and-disability')

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x267F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and disability
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI is opening up new possibilities for people with visual, hearing,
            mobility, and cognitive differences — and what questions still need answering.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-disability" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI and visual impairment</h2>
          <p className="text-gray-600 leading-relaxed">
            For blind and partially sighted people, AI has created tools that were genuinely
            impossible a decade ago — tools that describe the visual world in words.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F441;&#xFE0F;',
                label: 'Be My Eyes',
                text: "An app that connects blind users with sighted volunteers — and now also an AI assistant that can describe images, read text on packaging, identify products, and answer questions about what the phone camera sees. Available 24/7 with no waiting.",
              },
              {
                icon: '&#x1F4F1;',
                label: 'Microsoft Seeing AI',
                text: "A free app that narrates the world around you — reading short text instantly, scanning documents, describing people's appearance, recognising products by barcode, and even describing scenes and the emotions on faces.",
              },
              {
                icon: '&#x1F4F7;',
                label: 'AI image descriptions in iOS and Android',
                text: "Apple's VoiceOver and Google's TalkBack now use AI to generate descriptions of images that have no alt text — helping screen reader users understand photos shared on social media or in messages.",
              },
              {
                icon: '&#x1F6AA;',
                label: 'Door Detection (Apple)',
                text: "iPhone's LiDAR sensor combined with AI can detect doors up to three metres away, tell the user whether the door is open or closed, and read signs and symbols on the door — a navigation aid for unfamiliar buildings.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-blue-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-blue-800 text-sm mb-0.5">{label}</p>
                  <p className="text-blue-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI and hearing loss</h2>
          <p className="text-gray-600 leading-relaxed">
            Deaf and hard of hearing people have been among the most significant beneficiaries
            of AI speech recognition — though the technology still has important limitations.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4DD;',
                label: 'Live captioning',
                text: "Google's Live Caption on Android and Chrome, Apple's Live Captions on iPhone and Mac, and Microsoft's Azure live captioning all convert spoken audio to text in real time — free, built into devices, no setup required.",
              },
              {
                icon: '&#x1F4BB;',
                label: 'Meeting and video captions',
                text: "Google Meet, Microsoft Teams, and Zoom all offer AI-generated live captions. YouTube's auto-captions cover billions of videos. These tools have transformed access to video content that would previously have required expensive human captioners.",
              },
              {
                icon: '&#x1F91F;',
                label: 'Sign language recognition research',
                text: "Researchers are developing AI that can recognise sign language from video — potentially enabling real-time sign-to-text translation. This technology is still in development and not yet reliable enough for everyday use, but progress has been rapid.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-green-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-green-800 text-sm mb-0.5">{label}</p>
                  <p className="text-green-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-yellow-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-yellow-800 text-sm">The accuracy gap</p>
            <p className="text-yellow-700 text-sm leading-relaxed">
              AI captioning still struggles with strong accents, technical vocabulary, background
              noise, and multiple speakers. For a deaf person, a captioning error that changes
              the meaning of a sentence is not a minor inconvenience — it is a failure of access.
              Human captioners remain preferred for high-stakes situations.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI and mobility challenges</h2>
          <p className="text-gray-600 leading-relaxed">
            For people with limited mobility, AI is enabling new forms of independence — from
            smarter prosthetics to voice-controlled environments.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F9B5;',
                label: 'AI-powered prosthetic limbs',
                text: "Companies like Ossur make bionic knees that use AI to learn the user's gait and predict when they are about to take a step, adjusting resistance in real time. This makes movement more natural and reduces fall risk — something rigid mechanical prosthetics cannot do.",
              },
              {
                icon: '&#x1FA8F;',
                label: 'Intelligent wheelchairs',
                text: "AI-enabled wheelchairs can detect and avoid obstacles, navigate narrow spaces, and in some cases be controlled by eye gaze or very small muscle signals — enabling people with conditions like motor neurone disease to navigate independently.",
              },
              {
                icon: '&#x1F3E0;',
                label: 'Smart home control',
                text: "Voice assistants (Alexa, Google Assistant, Siri) have transformed home independence for people with mobility impairments. AI can now control thermostats, lights, TVs, door locks, and even cookers — reducing reliance on carers for everyday tasks.",
              },
              {
                icon: '&#x1F9B3;',
                label: 'Exoskeletons',
                text: "AI-controlled exoskeletons — wearable robotic frames — are helping some people with spinal injuries stand and walk in rehabilitation settings. Ekso Bionics and ReWalk are two companies working in this space.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-purple-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-purple-800 text-sm mb-0.5">{label}</p>
                  <p className="text-purple-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI and cognitive differences</h2>
          <p className="text-gray-600 leading-relaxed">
            AI is also helping people with dyslexia, autism, cognitive impairments, dementia,
            and conditions that affect communication — through tools that reduce the effort
            required to read, write, and interact.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F5E3;&#xFE0F;',
                label: 'AAC (Augmentative and Alternative Communication)',
                text: "Apps like Proloquo2Go use AI prediction to help people with limited speech communicate faster. The app learns which words and phrases this particular user needs most often and predicts what they want to say, reducing the number of taps required. Stephen Hawking used an early version of this technology.",
              },
              {
                icon: '&#x1F4DA;',
                label: 'Reading assistants',
                text: "Speechify and similar apps use text-to-speech to read any text aloud at adjustable speeds — helpful for people with dyslexia, visual fatigue, or reading difficulties. AI can also summarise documents, rephrase complex text in simpler language, and highlight key points.",
              },
              {
                icon: '&#x1F9E9;',
                label: 'Autism support tools',
                text: "Some AI apps help autistic people interpret social situations — describing facial expressions, tone of voice, and social cues that may be difficult to read intuitively. Others provide structured routines and reminders to reduce anxiety from unpredictability.",
              },
              {
                icon: '&#x1F9E0;',
                label: 'Dementia support',
                text: "AI-powered reminder systems, smart home routines, and companion devices (like simple robot companions) are being used in dementia care to help with daily tasks, reduce confusion, and provide gentle prompts — supporting independence for longer.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-teal-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-teal-800 text-sm mb-0.5">{label}</p>
                  <p className="text-teal-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Access, equity, and the digital divide</h2>
          <p className="text-gray-600 leading-relaxed">
            AI accessibility tools are genuinely transformative — but they come with important caveats
            about who can access them.
          </p>
          <div className="bg-orange-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-orange-800 text-sm">Questions that still need answering</p>
            <ul className="text-orange-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>AI prosthetics and exoskeletons cost tens of thousands of pounds — far beyond what most people can access privately, and not consistently funded by the NHS</li>
              <li>Many AI tools assume a smartphone and reliable internet — not universal in lower-income households or for older users</li>
              <li>Tools built primarily for English speakers perform worse for speakers of other languages</li>
              <li>The disability community's phrase is "nothing about us without us" — AI tools designed without disabled people as co-designers often solve the wrong problem</li>
              <li>Dependency on AI tools also raises questions: what happens when the app is discontinued, the server goes down, or the subscription price rises?</li>
            </ul>
          </div>
          <p className="text-gray-600 leading-relaxed">
            The UK government's AI Accessibility Action Plan commits to improving AI-powered
            accessibility tools across public services — but implementation is ongoing.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 space-y-3">
          <p className="font-semibold text-blue-800">Key takeaways</p>
          <ul className="text-blue-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
            <li>AI is enabling transformative new accessibility tools — from real-time captioning and visual description to AI-powered prosthetics and AAC communication aids</li>
            <li>Current tools still have significant limitations: captioning errors, language bias, high cost, and internet dependency</li>
            <li>The best AI accessibility tools are co-designed with disabled people — who have essential knowledge of their own needs</li>
            <li>Access to these tools is unequal — tackling the digital divide is as important as developing the technology itself</li>
          </ul>
        </div>

        <ReviewLaterButton lessonId="ai-and-disability" />
        <LessonNote lessonId="ai-and-disability" lessonTitle={LESSON_TITLE} />

        <Quiz questions={quizQuestions} lessonId="ai-and-disability" lessonTitle={LESSON_TITLE} />

        <LessonFeedback lessonId="ai-and-disability" />
        <LessonRating lessonId="ai-and-disability" />
        <RelatedLessons currentId="ai-and-disability" />
        <NextLesson currentId="ai-and-disability" />
      </div>
    </div>
  )
}
