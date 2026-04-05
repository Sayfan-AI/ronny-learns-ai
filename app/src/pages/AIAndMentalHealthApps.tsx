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

const LESSON_TITLE = 'AI and mental health apps'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does CBT stand for, and why is it relevant to AI mental health apps?',
    options: [
      'Computer-Based Training — the AI learns from your responses to improve itself',
      'Cognitive Behavioural Therapy — many mental health apps are designed around CBT techniques, teaching users to recognise and change unhelpful thought patterns',
      'Chatbot Behaviour Technology — the underlying software that powers mental health chatbots',
      'Clinical Brain Testing — a medical procedure used before prescribing AI mental health tools',
    ],
    correctIndex: 1,
    explanation:
      'Cognitive Behavioural Therapy (CBT) is a well-researched form of talking therapy that helps people recognise unhelpful thought patterns and develop more balanced ways of thinking. Because CBT follows clear, structured techniques, it can be translated into guided app experiences. Apps like Woebot use CBT-inspired exercises such as mood tracking, thought challenging, and behavioural activation. This does not make the app a therapist, but the techniques themselves are evidence-based.',
    hint: 'CBT is one of the most studied and widely used forms of talking therapy.',
  },
  {
    question: 'Which of the following is something an AI mental health app is genuinely able to do?',
    options: [
      'Diagnose you with a mental health condition like depression or anxiety',
      'Replace a trained therapist for people with serious mental illness',
      'Provide daily check-ins, guided breathing exercises, and CBT-based mood tracking exercises as a low-level support tool',
      'Access your medical records to provide personalised clinical advice',
    ],
    correctIndex: 2,
    explanation:
      'AI mental health apps work best as a supplement — not a replacement — for professional care. They can offer daily mood check-ins, guided breathing and relaxation exercises, CBT-based journalling prompts, and techniques for managing low-level anxiety or stress. They cannot diagnose conditions, prescribe medication, provide clinical assessment, or manage serious mental illness. They are useful for mild to moderate day-to-day wellbeing support.',
    hint: 'Think of these apps as a helpful daily habit tool, not a medical service.',
  },
  {
    question: 'If you or someone you know is in a mental health crisis and needs urgent support, what is the correct action?',
    options: [
      'Open a mental health app and explain the situation to the chatbot',
      'Post about it on social media to get community support',
      'Contact a real human — call Samaritans on 116 123 (free, 24/7), text SHOUT to 85258, call 999 if in immediate danger, or go to A&E',
      'Wait for the crisis to pass, as AI apps are not designed for emergencies',
    ],
    correctIndex: 2,
    explanation:
      'AI mental health apps are not equipped to handle crises. In a mental health emergency — if someone is in immediate danger, experiencing suicidal thoughts, or in acute distress — you need a real human. In the UK: Samaritans (116 123, free, 24/7), Shout Crisis Text Line (text SHOUT to 85258), your GP, NHS 111, A&E, or 999. Apps can be valuable for everyday wellbeing, but they must never be the first port of call in a crisis.',
    hint: 'In any emergency — physical or mental — real humans are essential.',
  },
  {
    question: 'What is the main privacy concern with AI mental health apps?',
    options: [
      'The apps might accidentally read your text messages',
      'Your mental health data — thoughts, moods, personal disclosures — may be stored, shared with third parties, or used for purposes you did not consent to',
      'The apps drain your phone battery while collecting data',
      'Using a mental health app means your employer will automatically be notified',
    ],
    correctIndex: 1,
    explanation:
      "Mental health data is among the most sensitive personal information there is. Many commercial mental health apps share data with advertisers, analytics firms, or third-party partners. Some have been found to share data with Facebook and other platforms. Before using any app, check its privacy policy: Who owns your data? Is it shared with insurers or employers? Can you delete it? Under UK GDPR, you have the right to access and delete your personal data held by any organisation.",
    hint: 'Mental health data is some of the most sensitive personal data — treat it accordingly.',
  },
  {
    question: 'Which of the following best describes the role AI mental health apps should play in the UK mental health system?',
    options: [
      'They should fully replace NHS talking therapies to reduce waiting times',
      'They are a useful supplementary tool for mild to moderate wellbeing support, particularly for people on NHS waiting lists, but they are not a substitute for clinical care',
      'They are only suitable for people who have no mental health concerns',
      'They should only be used under direct supervision of a psychiatrist',
    ],
    correctIndex: 1,
    explanation:
      "NHS waiting lists for talking therapies can be months long. For people waiting, or for those who want everyday support between appointments, well-designed mental health apps can provide useful tools. But they are not a clinical service — they cannot replace an assessment, a course of NHS therapy, or medication. The NHS endorses some apps (NHS Apps Library), but emphasises they are supplementary. The most responsible use is as a wellbeing complement, not a medical replacement.",
    hint: 'Think of the app as a bridge or a complement — not a destination.',
  },
]

export function AIAndMentalHealthApps() {
  useMarkVisited('ai-and-mental-health-apps')

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4AC;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and mental health apps
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Therapy chatbots, crisis support, privacy questions, and
            knowing when you need to talk to a real person.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-mental-health-apps" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
          <p className="font-semibold text-red-800 mb-2">&#x26A0;&#xFE0F; Before you read on</p>
          <p className="text-red-700 text-sm leading-relaxed">
            If you or someone you know is in crisis right now, please contact a real person:
            <strong> Samaritans: 116 123</strong> (free, 24/7) |
            <strong> Text SHOUT to 85258</strong> |
            <strong> 999</strong> if in immediate danger.
            AI apps are not for emergencies.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What are AI mental health apps?</h2>
          <p className="text-gray-600 leading-relaxed">
            A new category of apps has emerged that uses AI to provide mental health support between
            therapy appointments — or for people who are not currently in therapy. The most well-known include:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F916;',
                label: 'Woebot',
                text: 'Built by a team of Stanford psychologists, Woebot is a chatbot that uses Cognitive Behavioural Therapy (CBT) techniques. It checks in with you daily, helps you track your mood, and guides you through exercises designed to challenge unhelpful thought patterns.',
              },
              {
                icon: '&#x1F9D8;',
                label: 'Wysa',
                text: 'An AI chatbot designed for stress, anxiety, and low mood. It uses techniques from CBT, Dialectical Behaviour Therapy (DBT), and mindfulness. It is used by the NHS in some regions as a waiting list support tool.',
              },
              {
                icon: '&#x1F49C;',
                label: 'Replika',
                text: 'An AI companion app — not a therapist — designed for people who want a non-judgemental conversation partner. Users report it helping with loneliness and social anxiety practice. Unlike Woebot or Wysa, it is not built around clinical techniques.',
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
          <h2 className="text-2xl font-bold text-gray-800">How CBT chatbots work</h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Cognitive Behavioural Therapy (CBT)</strong> is one of the most studied forms
            of talking therapy. It is based on the idea that our thoughts, feelings, and behaviours
            are connected — and that by changing unhelpful thinking patterns, we can improve how we feel.
          </p>
          <p className="text-gray-600 leading-relaxed">
            CBT follows structured, evidence-based techniques that can be broken into steps — which makes
            it possible to encode them into a chatbot experience. A CBT chatbot might:
          </p>
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-blue-800 text-sm">Common CBT techniques used in apps</p>
            <ul className="text-blue-700 text-sm leading-relaxed space-y-1.5 list-disc list-inside">
              <li><strong>Mood tracking:</strong> regularly logging how you feel to spot patterns over time</li>
              <li><strong>Thought records:</strong> writing down a distressing thought and examining whether it is accurate or proportionate</li>
              <li><strong>Behavioural activation:</strong> scheduling small positive activities when motivation is low</li>
              <li><strong>Breathing exercises:</strong> guided relaxation and grounding techniques</li>
              <li><strong>Gratitude journalling:</strong> noting positive things each day to counteract negative bias</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Important:</strong> these are the same techniques a human therapist uses, but the
              app is not a therapist. It cannot assess severity, notice non-verbal cues, make clinical
              judgements, or adjust the approach based on a deep understanding of your history.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What AI mental health apps can do</h2>
          <div className="space-y-2">
            {[
              'Provide daily mood check-ins and trend tracking',
              'Guide you through breathing and grounding exercises for anxiety',
              'Offer structured CBT exercises for mild to moderate low mood',
              'Give you a non-judgemental space to express how you are feeling',
              'Be available at 3am when nothing else is open',
              'Help bridge the gap while waiting for NHS therapy',
              'Support people who find it easier to type than to speak',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">&#x2713;</span>
                <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What AI mental health apps cannot do</h2>
          <div className="space-y-2">
            {[
              'Diagnose you with any mental health condition',
              'Prescribe or advise on medication',
              'Conduct a clinical risk assessment',
              'Provide the therapeutic relationship that makes human therapy effective',
              'Safely manage serious mental illness, psychosis, or eating disorders',
              'Replace a psychiatrist, psychologist, or counsellor',
              'Handle a mental health crisis',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-red-500 font-bold flex-shrink-0 mt-0.5">&#x2717;</span>
                <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Privacy — who sees your mental health data?</h2>
          <p className="text-gray-600 leading-relaxed">
            Mental health data is among the most sensitive personal information there is. Before
            using any app, it is worth understanding what happens to your data.
          </p>
          <div className="bg-orange-50 rounded-xl p-4 space-y-3">
            <p className="font-semibold text-orange-800 text-sm">What to check before downloading a mental health app</p>
            <ul className="text-orange-700 text-sm leading-relaxed space-y-2 list-disc list-inside">
              <li>Does the app share data with advertisers or analytics companies?</li>
              <li>Can your data be passed to insurers or employers? (Some apps in the US have done this.)</li>
              <li>Is the data stored on UK/EU servers and subject to UK GDPR?</li>
              <li>Can you delete your account and all your data?</li>
              <li>Is the company transparent about how AI is used with your conversations?</li>
            </ul>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Under UK GDPR, you have the right to access the personal data an organisation holds about
            you and to request its deletion. Mental health apps must comply with this law if they operate
            in the UK.
          </p>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Practical tip:</strong> NHS-endorsed apps (listed on the NHS Apps Library) must
              meet information governance standards. If privacy is a concern, starting with an NHS-listed
              app is a safer choice than a commercial product with unclear data practices.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI mental health apps in the UK context</h2>
          <p className="text-gray-600 leading-relaxed">
            NHS waiting lists for talking therapies can stretch for months. AI mental health apps are
            increasingly seen as a way to provide support during that wait — a bridge, not a destination.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F3E5;',
                label: 'NHS Apps Library',
                text: 'The NHS evaluates and lists digital health tools that meet safety and information governance standards. Apps on this list have been through a review process. Look for the NHS Apps Library before choosing a tool.',
              },
              {
                icon: '&#x1F4DE;',
                label: 'Samaritans — 116 123',
                text: 'Free to call, 24 hours a day, 7 days a week. A trained volunteer will listen without judgement. Not just for people who are suicidal — for anyone who is struggling and needs to talk.',
              },
              {
                icon: '&#x1F4AC;',
                label: 'Shout — Text SHOUT to 85258',
                text: 'A free, confidential crisis text service. Text-based support from trained volunteers, available 24/7. Particularly useful if calling feels too difficult.',
              },
              {
                icon: '&#x1FA7A;',
                label: 'NHS Talking Therapies (IAPT)',
                text: 'You can refer yourself to NHS Talking Therapies without seeing a GP. These are real therapists providing CBT and other evidence-based therapies. Waiting times vary but this is clinical care, not an app.',
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

        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5">
          <p className="font-semibold text-teal-800 mb-2">Key takeaway</p>
          <p className="text-teal-700 text-sm leading-relaxed">
            AI mental health apps can be a genuinely useful part of looking after your wellbeing —
            as a daily habit, a bridge while you wait for therapy, or a low-barrier way to learn
            coping techniques. But they are a supplement, not a substitute. Treat your mental health
            data with care, know where the real help is when you need it, and do not rely on any app
            in a crisis.
          </p>
        </div>

        <ReviewLaterButton lessonId="ai-and-mental-health-apps" />
        <LessonNote lessonId="ai-and-mental-health-apps" lessonTitle={LESSON_TITLE} />

        <Quiz questions={quizQuestions} lessonId="ai-and-mental-health-apps" lessonTitle={LESSON_TITLE} />

        <LessonFeedback lessonId="ai-and-mental-health-apps" />
        <LessonRating lessonId="ai-and-mental-health-apps" />
        <RelatedLessons currentId="ai-and-mental-health-apps" />
        <NextLesson currentId="ai-and-mental-health-apps" />
      </div>
    </div>
  )
}
