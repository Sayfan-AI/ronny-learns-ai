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
import { DifficultyBadge } from '../components/DifficultyBadge'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How do AI-powered fall detection systems in smartwatches typically work?',
    options: [
      'They use GPS to detect when a person has moved to a location associated with a hospital or ambulance',
      'They analyse accelerometer and gyroscope data to recognise the sharp downward movement and sudden stop pattern of a fall, then check for movement after it',
      'They scan the wearer\'s vital signs every hour and send alerts to a doctor if heart rate drops suddenly',
      'They take a photo every ten seconds and use facial recognition to check whether the wearer looks distressed',
    ],
    correctIndex: 1,
    explanation:
      'Smartwatches contain accelerometers (measuring acceleration in three axes) and gyroscopes (measuring rotation). A fall produces a distinctive pattern: rapid downward acceleration followed by a sharp impact and then relative stillness (the person is on the ground). AI models are trained on thousands of real and simulated falls to recognise this pattern and distinguish it from everyday movements like sitting down quickly or dropping the watch. If no response is given within a short window, an automatic SOS call is placed.',
    hint: 'Think about what physical motion data a fall produces versus normal movement.',
  },
  {
    question: 'What is a companion robot like PARO or ElliQ designed to do?',
    options: [
      'Perform physical tasks like cleaning, cooking, and carrying shopping for older adults',
      'Provide social interaction, emotional comfort, and conversation to reduce loneliness and social isolation',
      'Monitor medical conditions and administer medications at the correct dose and time',
      'Replace human carers in care homes by doing all personal care tasks autonomously',
    ],
    correctIndex: 1,
    explanation:
      'PARO is a therapeutic robot seal developed in Japan that responds to touch, voice, and light. Studies have shown it reduces stress and loneliness among dementia patients in care homes. ElliQ is a tabletop AI companion designed for older adults living alone — it proactively starts conversations, suggests activities, reminds users of appointments, and connects them to family. Neither robot replaces human care; they specifically address social and emotional needs that carers have limited time to meet.',
    hint: 'These robots are specifically designed for emotional and social support, not physical tasks.',
  },
  {
    question: 'How can AI tools help people living with dementia and their families?',
    options: [
      'AI can cure dementia by identifying the exact gene responsible and designing a personalised drug treatment',
      'AI can recognise family members\' faces from photos to help with introductions, set structured daily routines, and use location tracking to reduce the risk of getting lost',
      'AI replaces human memories by storing all of a person\'s past experiences and playing them back on demand',
      'AI monitors brain activity 24 hours a day and alerts doctors whenever cognitive decline accelerates',
    ],
    correctIndex: 1,
    explanation:
      'Several AI applications target dementia support specifically. Some apps use a family photo database and facial recognition to identify who is visiting and provide a name prompt to the person with dementia. AI-powered reminder systems set consistent daily routines — morning medication, mealtimes, activities — which research shows can reduce confusion and anxiety. GPS and AI location tools allow families to set safe zones and receive alerts if a person wanders outside them, addressing one of the most distressing risks for dementia carers.',
    hint: 'Think about practical day-to-day support: recognising people, routines, and safety.',
  },
  {
    question: 'What privacy concern is most commonly raised about AI monitoring in elderly care?',
    options: [
      'Older people might accidentally discover embarrassing information about younger relatives while using monitoring devices',
      'Continuous monitoring through cameras, sensors, and wearables collects intimate data about a person\'s body and daily life, raising questions about consent, dignity, and who has access to that data',
      'AI monitoring is so accurate that care home staff use it as an excuse not to visit residents at all',
      'The sensors interfere with pacemakers and hearing aids, causing medical complications',
    ],
    correctIndex: 1,
    explanation:
      'The data generated by AI monitoring systems — movement patterns, sleep quality, toilet visits, physiological readings, conversations with companion robots — is deeply personal. Key concerns include: Does the older person fully understand and consent to what is being collected? Who else can see the data (family, insurance companies, government)? Does constant monitoring undermine the person\'s sense of dignity and autonomy? Age UK and dementia charities have called for clear consent frameworks and for older people themselves to have meaningful control over their monitoring preferences.',
    hint: 'The concern centres on intimate personal data, consent, and dignity.',
  },
  {
    question: 'What is a smart pill dispenser and how does AI improve medication adherence in elderly care?',
    options: [
      'A robot that physically swallows tablets on behalf of the patient and then digests them before the patient feels any effect',
      'A device that dispenses the correct medication at the right time, alerts carers if a dose is missed, and can use AI to flag patterns that suggest cognitive decline or worsening health',
      'A smartphone app that orders repeat prescriptions automatically without any human involvement',
      'A system that injects medications automatically via a needle in the patient\'s arm at scheduled intervals',
    ],
    correctIndex: 1,
    explanation:
      'Devices like Pivotell automate medication dispensing: the pharmacist pre-loads the correct pills for each time slot, and the device sounds an alarm at the right time, dispenses the pills, and locks away the rest. If a dose is missed, a carer or family member receives an alert. More advanced AI systems track dispensing patterns over time — if someone who has been taking their medication reliably starts missing doses, the AI can flag this as a possible sign of cognitive decline or a change in health status, prompting a welfare check.',
    hint: 'Think about correct timing, alerts for missed doses, and pattern detection over time.',
  },
]

export function AIAndElderlyCare() {
  useMarkVisited('ai-and-elderly-care')

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F9D3;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and elderly care
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Companion robots, fall detection, medication reminders, and AI tools
            for dementia &mdash; plus the important questions about dignity and privacy.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-elderly-care" />
          <ShareButton lessonTitle="AI and elderly care" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Living independently for longer</h2>
          <p className="text-gray-600 leading-relaxed">
            Most older people strongly prefer to live in their own homes for as long as possible.
            AI and sensor technology are making that more achievable &mdash; while giving families
            and carers greater peace of mind.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x231A;',
                label: 'Fall detection (Apple Watch, Samsung)',
                text: "Smartwatches use accelerometers and gyroscopes to detect the distinctive motion pattern of a fall. If no response is given within about 30 seconds, the watch automatically calls the emergency services and sends a location alert to nominated contacts. Apple's Fall Detection has already been credited with saving lives in the UK.",
              },
              {
                icon: '&#x1F6CF;',
                label: 'Bed and chair sensors',
                text: 'Pressure-sensitive mats and radar-based bed sensors can detect if someone has not got up by their usual time, or if they have left bed and not returned after an unusual period. AI analyses daily movement patterns and alerts carers to deviations that might indicate a fall, illness, or a change in wellbeing.',
              },
              {
                icon: '&#x1F48A;',
                label: 'Smart pill dispensers',
                text: 'Devices like Pivotell automate medication dispensing: the pharmacist pre-loads the correct pills for each time slot. If a dose is missed, a carer receives an alert. AI systems track dispensing patterns over time and can flag a sudden drop in medication adherence as a possible sign of cognitive change.',
              },
              {
                icon: '&#x2764;',
                label: 'Remote cardiac monitoring',
                text: 'Wearable ECG patches and smartwatch heart sensors transmit readings to clinical monitoring centres. AI analyses the stream of data continuously and flags irregular rhythms — such as atrial fibrillation — for a clinician to review, enabling early intervention without requiring the person to visit a hospital.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Companion robots and fighting loneliness</h2>
          <p className="text-gray-600 leading-relaxed">
            Loneliness among older adults is a significant health issue &mdash; linked to increased
            risk of dementia, depression, and even early death. AI companions address a specific gap:
            they are available at any hour and are endlessly patient.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '&#x1F9F8;', title: 'PARO', text: 'A therapeutic robot seal developed in Japan, now used in care homes worldwide. It responds to touch and voice, makes seal-like sounds, and learns to respond to its name. Studies show it reduces stress and loneliness in dementia patients and can lower the need for sedative medication.' },
              { icon: '&#x1F4AC;', title: 'ElliQ', text: 'A tabletop AI companion designed for older adults living alone. It proactively starts conversations, suggests activities, sends family messages, and provides medication reminders. Unlike a smartwatch, it is specifically designed for social engagement rather than health monitoring.' },
              { icon: '&#x1F399;', title: 'Voice assistants', text: 'Amazon Echo and Google Home are widely used by older adults for reminders, weather, calls, and music. Studies show they can reduce loneliness for people who live alone, though concerns exist about always-on microphones and data privacy.' },
              { icon: '&#x1F916;', title: 'Humanoid care robots', text: 'Japan, facing acute care worker shortages, has invested in humanoid robots that assist with tasks like helping someone stand up, carrying objects, and guiding people in care homes. These are not companions but tools to reduce physical strain on human carers.' },
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
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI tools for dementia support</h2>
          <p className="text-gray-600 leading-relaxed">
            Around 900,000 people in the UK live with dementia. AI is providing practical tools
            for people with the condition and the family members and carers who support them.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F9D1;',
                label: 'Facial recognition for family',
                text: "Some apps let families upload photos of relatives, friends, and carers. When someone visits, the app can display the person's name and relationship on a tablet screen, providing a gentle prompt without embarrassing the person with dementia.",
              },
              {
                icon: '&#x1F5FA;',
                label: 'Location tracking',
                text: "GPS-enabled pendants and watches allow families to set 'safe zones' around the home. If the person wanders outside the zone, an alert goes to a carer's phone. AI analyses movement patterns over time and can identify changes in wandering behaviour that might signal a change in the condition.",
              },
              {
                icon: '&#x1F4C5;',
                label: 'Structured daily routines',
                text: 'AI reminder systems set consistent daily schedules — morning wash, medication, meals, activities, bedtime. Research shows consistent routines can reduce anxiety and confusion in dementia. AI personalises the schedule and adjusts reminders based on what is working.',
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
          <h2 className="text-2xl font-bold text-gray-800">Privacy, dignity, and the human carer's role</h2>
          <p className="text-gray-600 leading-relaxed">
            AI monitoring in elderly care raises genuine ethical questions that deserve careful thought.
          </p>
          <div className="bg-amber-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-amber-800 text-sm">Key concerns</p>
            <ul className="text-amber-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li><strong>Consent:</strong> Does the older person fully understand and agree to what is being monitored? People with dementia may lack capacity to consent.</li>
              <li><strong>Dignity:</strong> Continuous monitoring of toilet visits, sleep, and movement can feel intrusive. The data must be handled with respect.</li>
              <li><strong>Data access:</strong> Who can see the data — family, care home staff, insurers? Clear rules are needed.</li>
              <li><strong>Replacing human contact:</strong> There is a risk that AI monitoring is used as a reason to reduce human visits and social contact, which would be harmful.</li>
            </ul>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            Age UK and leading dementia charities emphasise that AI tools should <em>support</em> human
            care, not replace it. The warmth, judgement, and relationship that a good carer provides
            cannot be replicated by any robot or sensor. The best outcomes come when technology
            handles the monitoring and safety tasks, freeing human carers to spend their time on
            the personal connection that matters most.
          </p>
        </div>

        <ReviewLaterButton lessonId="ai-and-elderly-care" />
        <LessonNote lessonId="ai-and-elderly-care" />

        <Quiz questions={quizQuestions} lessonId="ai-and-elderly-care" lessonTitle="AI and elderly care" />

        <LessonFeedback lessonId="ai-and-elderly-care" />
        <LessonRating lessonId="ai-and-elderly-care" />
        <RelatedLessons currentId="ai-and-elderly-care" />
        <NextLesson currentId="ai-and-elderly-care" />
      </div>
    </div>
  )
}
