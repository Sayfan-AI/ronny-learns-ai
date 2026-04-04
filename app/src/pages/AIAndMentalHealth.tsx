import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { NextLesson } from '../components/NextLesson'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is one genuine benefit of AI mental health apps compared to traditional therapy?',
    options: [
      'AI therapists have deeper emotional understanding than human therapists',
      'They are available 24 hours a day, have no waiting list, and carry no social stigma',
      'AI apps can diagnose mental health conditions more accurately than doctors',
      'They are always free and require no data sharing',
    ],
    correctIndex: 1,
    explanation:
      'Access and availability are real advantages. Human therapy has barriers — cost, waiting lists, availability in rural areas, and the stigma some people feel about seeking help. An AI chatbot is available at 3am when you cannot sleep, costs little or nothing, and requires no appointment. These are meaningful benefits, even if AI apps have real limitations.',
  },
  {
    question: 'What is a significant risk of relying heavily on AI companions for emotional support?',
    options: [
      'AI companions are too expensive for most people',
      'They can create unhealthy dependency, replacing human relationships rather than supplementing them, which can worsen isolation over time',
      'AI companions require too much technical skill to use',
      'They always share your conversations with employers',
    ],
    correctIndex: 1,
    explanation:
      'Several researchers and therapists have raised concerns about AI companions creating dependency — particularly for lonely people who find it easier to talk to an AI than to maintain difficult human relationships. An AI will never judge you, be unavailable, or have its own needs — which can make it more comfortable than real relationships, but also less healthy in the long run.',
  },
  {
    question: 'Which situation is most clearly one where you should seek a human professional rather than an AI app?',
    options: [
      'You feel mildly stressed about an upcoming exam',
      'You want to try some relaxation techniques before bed',
      'You are having thoughts of harming yourself or others',
      'You would like to journal your feelings in a structured way',
    ],
    correctIndex: 2,
    explanation:
      'Crisis situations — thoughts of self-harm, suicidal ideation, or thoughts of harming others — require immediate human professional support. AI apps are not equipped for crisis intervention. Every reputable mental health app includes disclaimers about this, and most include links to crisis helplines. If you or someone you know is in crisis, contact a crisis line or emergency services.',
  },
  {
    question: 'What technique do many AI mental health chatbots use as the basis for their responses?',
    options: [
      'Psychoanalysis — exploring childhood experiences and unconscious patterns',
      'Cognitive Behavioural Therapy (CBT) scripts — structured techniques for identifying and challenging unhelpful thought patterns',
      'Medication recommendations based on your symptoms',
      'Physical exercise programmes proven to improve mood',
    ],
    correctIndex: 1,
    explanation:
      'CBT is one of the most evidence-based therapies for conditions like anxiety and depression, and it translates relatively well into structured digital interactions. Apps like Woebot and Wysa guide users through CBT-style exercises: identifying negative thought patterns, examining the evidence for and against them, and practising reframing. This is different from the more relational aspects of therapy that AI struggles to replicate.',
  },
  {
    question: 'What is a healthy approach to using AI tools for mental wellbeing?',
    options: [
      'Replace all therapy with AI apps to save money',
      'Never use AI tools — only rely on human professionals',
      'Use AI apps as one tool among many: alongside human connection, professional support when needed, and other wellbeing practices',
      'Use AI apps only when your mental health is already very good',
    ],
    correctIndex: 2,
    explanation:
      'The healthiest approach treats AI wellbeing tools as one resource among many — useful for daily check-ins, practising techniques, or having a low-stakes place to process thoughts, but not as a replacement for human connection or professional care. Think of it like a fitness app: helpful for building habits, but not a substitute for actually being active in the world with other people.',
  },
]

export function AIAndMentalHealth() {
  useMarkVisited('ai-and-mental-health')
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F9E0;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and your mental health
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Chatbots, therapy apps, and digital wellbeing &mdash; the real benefits and risks
            of AI in mental health, and how to use it wisely.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-mental-health" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI mental health apps: what they are</h2>
          <p className="text-gray-600 leading-relaxed">
            A new category of apps has emerged that uses AI to support mental health and emotional
            wellbeing. These range from simple mood trackers to conversational chatbots that guide
            you through therapy-style exercises.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'Woebot',
                text: 'One of the earliest AI mental health chatbots, developed with input from Stanford researchers. It uses Cognitive Behavioural Therapy (CBT) techniques to guide users through identifying unhelpful thought patterns. Used by millions of people worldwide.',
              },
              {
                label: 'Wysa',
                text: 'An AI chatbot that offers anonymous conversations, CBT exercises, and mindfulness techniques. It has been used in workplaces and healthcare settings, with an option to connect to a human therapist if needed.',
              },
              {
                label: 'Replika',
                text: 'An AI companion app positioned as a "friend" rather than a therapist. Users have reported it helping with loneliness and social anxiety practice. It has also attracted controversy around dependency and the nature of parasocial AI relationships.',
              },
              {
                label: 'Headspace and Calm',
                text: 'These are primarily meditation and mindfulness apps, but both use AI to personalise content recommendations based on your goals and progress. Backed by substantial clinical research on the benefits of mindfulness for stress and anxiety.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-violet-50 border border-violet-100 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-violet-800 text-sm">{label}</p>
                <p className="text-violet-700 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Real benefits worth knowing about</h2>
          <p className="text-gray-600 leading-relaxed">
            AI mental health tools have genuine advantages that traditional services cannot always
            provide &mdash; particularly around access.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F55B;',
                label: 'Available any time',
                text: 'Mental health struggles do not follow business hours. An AI app is available at 3am when you cannot sleep, or in the moments just after a difficult event, before you would be able to reach a human therapist.',
              },
              {
                icon: '&#x1F4B0;',
                label: 'Lower cost barrier',
                text: 'Private therapy can cost £60-£150 per session in the UK, more in many countries. NHS waiting lists can stretch to months or years. AI apps can provide some form of support to people who otherwise have none.',
              },
              {
                icon: '&#x1F6E1;&#xFE0F;',
                label: 'No stigma',
                text: 'Many people find it easier to open up to an AI than to a human, at least initially. There is no fear of being judged, no social awkwardness, and no worry about how the other person is reacting. This can lower the barrier to seeking help.',
              },
              {
                icon: '&#x1F4CA;',
                label: 'Daily practice support',
                text: 'Some mental health techniques — like CBT thought diaries or mindfulness — benefit from daily practice. An app is well-suited to supporting this kind of habit-building between therapy sessions.',
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
          <h2 className="text-2xl font-bold text-gray-800">The risks you should understand</h2>
          <p className="text-gray-600 leading-relaxed">
            AI mental health tools are not therapy. They have real limitations and risks that are
            important to understand before using them.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'Not a replacement for professional care',
                text: 'AI apps cannot diagnose mental health conditions, prescribe medication, or provide the depth of relational care that skilled human therapy offers. For moderate to severe mental health conditions, professional support is essential.',
              },
              {
                label: 'Dependency risk',
                text: 'Some users, particularly those who are lonely, can develop unhealthy attachment to AI companions. An AI that is always available, never judges you, and always responds positively can become a substitute for human relationships — which are harder but ultimately more nourishing.',
              },
              {
                label: 'Privacy of sensitive data',
                text: 'Mental health conversations are some of the most sensitive data that exists. Before using any app, read the privacy policy: who sees your data, can it be sold or used for advertising, could it be accessed by insurers or employers? Not all apps have the same protections.',
              },
              {
                label: 'No crisis support',
                text: 'AI apps are not equipped to handle crises — thoughts of self-harm, suicidal ideation, or acute mental health emergencies. Reputable apps include crisis line information, but cannot provide the immediate human intervention that a crisis requires.',
              },
              {
                label: 'Variable evidence base',
                text: 'Some apps have genuine clinical research behind them. Others have very little. "Wellness" is a large and loosely regulated industry. Look for apps that cite peer-reviewed research and have transparent information about their methods.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-amber-50 border border-amber-100 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-amber-800 text-sm">{label}</p>
                <p className="text-amber-700 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">When to seek real help</h2>
          <p className="text-gray-600 leading-relaxed">
            AI apps are appropriate for mild stress, general wellbeing, and building healthy habits.
            In these situations, reach out to a human professional instead:
          </p>
          <div className="space-y-3">
            {[
              'You are having thoughts of harming yourself or ending your life',
              'Your symptoms are significantly affecting your ability to work, study, or maintain relationships',
              'You have been feeling low, anxious, or struggling for more than two weeks',
              'You are using alcohol or other substances to cope with how you feel',
              'Something traumatic has happened and you are struggling to process it',
              'You feel like an app is not enough and you want to talk to a person',
            ].map((point) => (
              <div key={point} className="flex gap-3 items-start">
                <span className="text-violet-500 font-bold flex-shrink-0">&#x2022;</span>
                <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-blue-800 text-sm font-semibold mb-1">Crisis resources (UK)</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              Samaritans: 116 123 (free, 24/7) &bull; Crisis text line: text SHOUT to 85258 &bull;
              For emergencies: 999 or A&amp;E
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Healthy digital habits around AI and wellbeing</h2>
          <p className="text-gray-600 leading-relaxed">
            If you choose to use AI wellbeing tools, here are some principles for using them in a
            way that supports rather than undermines your mental health:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x231B;',
                label: 'Set time limits',
                text: 'Like social media, time spent with AI companions should be intentional. If you notice you are spending hours each day talking to an AI instead of doing other things, that is worth reflecting on.',
              },
              {
                icon: '&#x1F91D;',
                label: 'Keep investing in human relationships',
                text: 'AI is easy. Human relationships are harder — but they provide things AI cannot: genuine mutual care, shared history, challenge, and growth. Do not let AI replace the effort of real connection.',
              },
              {
                icon: '&#x1F4D3;',
                label: 'Use apps as a starting point, not an end point',
                text: 'Apps are good for daily practice and building awareness. If you identify a pattern through an app, that insight is most valuable when you then discuss it with a real person — a therapist, a trusted friend, or a family member.',
              },
              {
                icon: '&#x1F50D;',
                label: 'Check the privacy policy',
                text: 'Know who can see your data before you share your most vulnerable thoughts. This is not paranoia — it is basic digital hygiene.',
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

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-bold text-blue-800">The bottom line</h2>
          <p className="text-blue-700 leading-relaxed">
            AI mental health tools can be genuinely helpful &mdash; particularly for people who
            would otherwise have no support at all. They are most valuable when used thoughtfully,
            as one tool among many, alongside human connection and professional care when needed.
          </p>
          <p className="text-blue-700 leading-relaxed">
            The technology is not a therapist. But used wisely, it can be a useful stepping stone,
            a daily practice aid, or a first step toward seeking the help that matters most.
          </p>
        </div>

        <Quiz
          lessonId="ai-and-mental-health"
          lessonTitle="AI and your mental health"
          questions={quizQuestions}
        />

        <RelatedLessons currentId="ai-and-mental-health" />

        <NextLesson currentId="ai-and-mental-health" />

      </div>
    </div>
  )
}
