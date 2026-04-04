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
import { ShareButton } from '../components/ShareButton'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is automatic alt text generation?',
    options: [
      'A tool that turns written text into speech',
      'AI that analyses an image and writes a description of what is in it, so screen readers can describe the image to blind users',
      'A tool that automatically translates text between languages',
      'A feature that makes text larger on a screen',
    ],
    correctIndex: 1,
    explanation:
      'When a blind person uses a screen reader, it reads out the text on a page — but images have no text to read unless someone has written a description (called alt text). AI can now analyse images and generate those descriptions automatically, making images accessible even when the person who posted them did not write a description.',
  },
  {
    question: 'Which of these is a real example of AI helping people with physical disabilities?',
    options: [
      'AI that makes websites load faster',
      'AI voice control and dictation that lets people who cannot use a keyboard or mouse operate computers using only their voice',
      'AI that automatically corrects spelling mistakes',
      'AI that makes screens brighter in sunlight',
    ],
    correctIndex: 1,
    explanation:
      'For people with conditions like ALS, spinal cord injuries, or severe arthritis, using a keyboard or mouse may be impossible or very painful. AI-powered voice control (like Voice Control on iOS, or Dragon NaturallySpeaking) lets people operate their entire computer using speech — browsing the web, writing documents, sending emails, all by voice.',
  },
  {
    question: 'How do real-time AI captions help people who are deaf or hard of hearing?',
    options: [
      'They translate speech into a different language',
      'They convert sign language into spoken words',
      'They transcribe spoken words into text on screen in real time, so people can follow conversations, meetings, and videos without needing to hear the audio',
      'They make videos play slower so people can lip-read more easily',
    ],
    correctIndex: 2,
    explanation:
      'Real-time captions (available in tools like Google Meet, Microsoft Teams, and Google\'s Live Caption feature on Android) use AI speech recognition to transcribe what is being said almost as quickly as it is spoken. This allows people who are deaf or hard of hearing to follow conversations and videos that would otherwise be inaccessible.',
  },
  {
    question: 'What is the idea behind "universal design" in accessibility?',
    options: [
      'Designing products specifically and exclusively for disabled users',
      'Making accessibility features optional add-ons that users must enable',
      'Designing products so they work well for the widest possible range of people — features that help disabled users often benefit everyone',
      'Only large companies need to make their products accessible',
    ],
    correctIndex: 2,
    explanation:
      'Universal design means creating things that work for everyone by default, not just as a special accommodation. Captions help deaf viewers, but they also help people in noisy environments, people learning a language, or anyone who missed what was said. Kerb cuts (the ramps at pavements) were designed for wheelchair users but are also used by cyclists, delivery workers, and parents with pushchairs.',
  },
  {
    question: 'What is one current limitation of AI accessibility tools?',
    options: [
      'AI accessibility tools are only available in English',
      'AI-generated descriptions, captions, and translations are not always accurate, and errors can range from minor inconveniences to serious misunderstandings',
      'AI accessibility tools require a very expensive smartphone',
      'AI accessibility tools only work when connected to the internet',
    ],
    correctIndex: 1,
    explanation:
      'AI accessibility tools are impressive but imperfect. Captions occasionally mishear words, alt text can misidentify objects, and sign language translation remains challenging for AI. For many situations this is fine, but for critical contexts — a medical appointment, a legal proceeding, an emergency — errors in AI accessibility tools can have real consequences.',
  },
]

export function AIForAccessibility() {
  useMarkVisited('ai-for-accessibility')
  useLessonVisit('ai-for-accessibility')
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x267F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI for accessibility
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI is helping people with disabilities use technology more fully &mdash;
            and making the world a more accessible place for everyone.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-for-accessibility" />
          <ShareButton lessonTitle="ai-for-accessibility" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What is accessibility?</h2>
          <p className="text-gray-600 leading-relaxed">
            Accessibility means making things usable by people with a wide range of abilities and
            disabilities. This includes people who are blind or have low vision, people who are
            deaf or hard of hearing, people with physical disabilities that affect how they use
            devices, people with cognitive or memory conditions, and many others.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For most of the history of technology, accessibility features were an afterthought
            &mdash; expensive add-ons that reached only a fraction of the people who needed them.
            AI is changing this. Several of the most impactful accessibility advances in recent
            years have been made possible by machine learning, and many of these tools are now
            free and built directly into everyday devices.
          </p>
          <div className="bg-teal-50 rounded-xl p-4">
            <p className="text-teal-800 text-sm leading-relaxed">
              About 1.3 billion people worldwide live with some form of disability. AI accessibility
              tools have the potential to meaningfully improve daily life for a significant portion
              of humanity.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Seeing: AI for blind and low-vision users</h2>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4F7;',
                label: 'Automatic image descriptions (alt text)',
                text: 'When a blind person uses a screen reader — software that reads out what is on screen — it can only describe images if someone wrote a description for them. AI can now analyse any image and generate a description automatically. Facebook, Instagram, and Twitter all use AI to generate alt text for photos. It is not perfect, but it means millions of images that would otherwise be silent are now described.',
              },
              {
                icon: '&#x1F50D;',
                label: 'AI magnifiers and scene description',
                text: 'Apps like Seeing AI (Microsoft) and Be My AI (powered by Claude) let blind users point their phone camera at anything — a document, a product label, a scene — and get an AI-generated verbal description. This can describe what is in a room, read a handwritten note, identify currency, or describe a person\'s expression.',
              },
              {
                icon: '&#x1F4D6;',
                label: 'Reading text from images',
                text: 'Optical character recognition (OCR) combined with AI has become remarkably accurate. Scanned documents, photos of signs, menus, or product packaging can all have their text extracted and read aloud. This removes a huge barrier for blind users who previously needed sighted assistance for many everyday tasks.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Hearing: AI for deaf and hard-of-hearing users</h2>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4AC;',
                label: 'Real-time captions',
                text: 'Google\'s Live Caption (built into Android and Chrome) and Microsoft\'s Live Captions transcribe speech to text in real time on your device. Video calls, videos, podcasts, or any audio playing on your device can be automatically captioned — without sending audio to the internet. This is available for free to anyone with a recent Android phone or Windows PC.',
              },
              {
                icon: '&#x1F399;&#xFE0F;',
                label: 'Meeting transcription',
                text: 'Tools like Otter.ai, Microsoft Teams captions, and Google Meet captions use AI speech recognition to create written transcripts of meetings and conversations as they happen. Deaf and hard-of-hearing participants can follow along in real time and search the transcript later.',
              },
              {
                icon: '&#x1F91F;',
                label: 'Sign language translation (in progress)',
                text: 'AI-powered sign language translation — converting sign language video into text, or generating sign language avatars from text — is an active research area. Progress is real but the technology is not yet reliable enough for general use. Sign language is a fully distinct language (not a signed version of English) and understanding it in video requires recognising subtle handshapes, movements, and facial expressions simultaneously.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Movement: AI for people with physical disabilities</h2>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F399;&#xFE0F;',
                label: 'Voice control and dictation',
                text: 'For people who cannot use a keyboard or mouse — due to conditions like ALS, spinal cord injury, cerebral palsy, or severe arthritis — AI voice control lets them operate their entire computer by speaking. Apple\'s Voice Control, Dragon NaturallySpeaking, and Google\'s Voice Access are all AI-powered and allow users to navigate, click, type, and control apps entirely by voice.',
              },
              {
                icon: '&#x1F9E0;',
                label: 'Eye tracking and gaze control',
                text: 'AI-enhanced eye-tracking technology can turn where a person looks into mouse movements and clicks. Combined with on-screen keyboards, this allows people with severe motor impairments to use a computer using only their eyes. Tobii Dynavox and similar devices use AI to make gaze control faster and more accurate than was possible with earlier hardware-only approaches.',
              },
              {
                icon: '&#x1F4BB;',
                label: 'Switch access and predictive input',
                text: 'Many people with limited movement use a single switch to operate devices — a button they can press with a hand, foot, chin, or even breath. AI improves switch access by making predictive text and word completion smarter, dramatically reducing the number of inputs required to type a message.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Cognition and memory: AI for neurodiverse users</h2>
          <div className="space-y-3">
            {[
              {
                label: 'Reading and comprehension aids',
                text: 'AI tools can simplify complex text into plainer language, highlight key points, or read text aloud with a human-sounding voice. This helps people with dyslexia, ADHD, or cognitive disabilities access written content more easily.',
              },
              {
                label: 'Facial recognition for memory conditions',
                text: 'Apps using AI can identify people in a camera feed and display their name on screen — helpful for people with prosopagnosia (face blindness) or memory conditions that make recognising familiar faces difficult.',
              },
              {
                label: 'Social cues and emotion recognition',
                text: 'Some apps for people on the autism spectrum use AI to analyse facial expressions and provide real-time cues about the emotional state of people they are talking to. This is a nuanced area — the technology is imperfect and emotions are complex — but it can help people who find reading social cues challenging.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-gray-800 text-sm">{label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Why this matters for everyone &mdash; universal design</h2>
          <p className="text-gray-600 leading-relaxed">
            A useful idea in accessibility is <strong>universal design</strong>: making things that
            work well for the widest possible range of people, not just as accommodations for
            specific disabilities. Features designed for disabled users routinely turn out to be
            useful for everyone.
          </p>
          <div className="space-y-2">
            {[
              'Captions were created for deaf viewers. Now they are used in noisy environments, by people learning languages, and by anyone who misses a word.',
              'Voice control was created for people who cannot type. Now it is used by drivers, cooks, and anyone with their hands full.',
              'Kerb cuts (the ramps at pavements) were designed for wheelchair users. Cyclists, delivery workers, and parents with pushchairs all benefit.',
              'Dark mode was initially an accessibility feature for people with light sensitivity. Now it is a mainstream design option.',
            ].map((text, i) => (
              <div key={i} className="flex gap-2 items-start">
                <span className="text-teal-500 flex-shrink-0 mt-0.5">&#x2713;</span>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Current limitations</h2>
          <p className="text-gray-600 leading-relaxed">
            AI accessibility tools are impressive but not perfect. It is important to be honest
            about their limitations.
          </p>
          <div className="space-y-3">
            {[
              { label: 'Accuracy is not guaranteed', text: 'Captions mishear words, alt text misidentifies objects, and sign language translation remains technically challenging. For casual use this is usually fine; for critical contexts (medical appointments, legal proceedings, emergencies) errors can have real consequences.' },
              { label: 'English-first bias', text: 'Most AI accessibility tools work best in English. Support for other languages, accents, and dialects can be significantly worse — which means accessibility benefits are not equally distributed worldwide.' },
              { label: 'Not a substitute for human support', text: 'AI accessibility tools can extend independence and reduce reliance on sighted/hearing assistance for many tasks. But they do not replace the need for accessible design in physical spaces, sign language interpreters in critical settings, or human support for complex situations.' },
            ].map(({ label, text }) => (
              <div key={label} className="bg-amber-50 border border-amber-100 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-amber-800 text-sm">{label}</p>
                <p className="text-amber-700 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-bold text-teal-800">The big picture</h2>
          <p className="text-teal-700 leading-relaxed">
            AI accessibility tools represent some of the most straightforwardly beneficial
            applications of artificial intelligence. Real-time captions, image descriptions,
            voice control, and reading aids are quietly improving daily life for hundreds of
            millions of people.
          </p>
          <p className="text-teal-700 leading-relaxed">
            When we design and build AI thoughtfully &mdash; with accessibility as a first-class
            concern rather than an afterthought &mdash; technology becomes more useful for
            everyone. That is a standard worth holding the whole industry to.
          </p>
        </div>

        <Quiz
          lessonId="ai-for-accessibility"
          lessonTitle="AI for accessibility"
          questions={quizQuestions}
        />

        <LessonNote lessonId="ai-for-accessibility" />

        {/* Rating */}
        <LessonRating lessonId="ai-for-accessibility" />
        <ReviewLaterButton lessonId="ai-for-accessibility" />

        <RelatedLessons currentId="ai-for-accessibility" />

        <NextLesson currentId="ai-for-accessibility" />

      </div>
    </div>
  )
}
