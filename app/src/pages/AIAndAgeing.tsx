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

const LESSON_TITLE = 'AI and ageing'

const KEY_TAKEAWAYS = [
  'AI fall detection systems in wearables (like Apple Watch) and floor sensors can detect a fall and automatically alert emergency services or a carer within seconds — giving older people confidence to live independently.',
  'Smart pill dispensers use AI to alert carers if medication is not taken, track compliance over time, and some can integrate with GP systems to flag patterns that might indicate declining health.',
  'Companion AI like PARO (a therapeutic robot seal) and conversational AI assistants (ElliQ) have been shown in studies to reduce loneliness and depression in older people — though questions about authenticity of AI companionship remain.',
  'Modern AI-powered hearing aids use machine learning to learn your listening preferences and filter background noise in real time — adapting automatically to whether you are in a restaurant, outdoors, or on the phone.',
  'AI monitoring of elderly people raises profound ethical questions about consent, dignity, and data ownership — especially for people with dementia who cannot meaningfully agree to surveillance of their daily life.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does AI fall detection in wearables like Apple Watch work?',
    options: [
      'The watch uses GPS to detect when the wearer has moved from one location to another quickly, which it interprets as a fall',
      'The watch uses accelerometers and gyroscopes to detect the sudden deceleration and impact patterns characteristic of a fall, then checks for movement to confirm and alerts emergency services',
      'The watch takes a photograph every 30 seconds and uses computer vision to identify whether the person is standing, sitting, or lying on the floor',
      'The watch monitors the wearer\'s heart rate — a sudden spike followed by inactivity is interpreted as a fall event',
    ],
    correctIndex: 1,
    explanation:
      'Apple Watch and similar wearables use a combination of accelerometers (measuring acceleration in three axes) and gyroscopes (measuring rotation) to build a continuous model of body movement. A fall has a characteristic signature: a period of normal movement, followed by sudden freefall, then a sharp impact. If this pattern is detected, the watch checks whether the wearer is moving afterwards — if not, it assumes they may have been injured, shows an alert, and if they do not dismiss it within about a minute, automatically calls emergency services and shares their location. It also alerts emergency contacts. The system has real false positive and negative rates — vigorous exercise can occasionally trigger it, and some falls are not detected — but it has saved lives in cases where older people have fallen when alone at home.',
    hint: 'Think about what a fall feels like physically — a sudden change in motion and a hard stop.',
  },
  {
    question: 'What does a smart pill dispenser do, and why is medication adherence important for older people?',
    options: [
      'Smart dispensers automatically order prescription refills from the pharmacy when stock is running low, saving older people from making phone calls',
      'They dispense the correct pills at the correct time, lock to prevent overdosing, alert carers if a dose is missed, and track compliance over time',
      'They are connected devices that allow GPs to remotely change a patient\'s prescription without the patient needing to visit the surgery',
      'They replace all medications with liquid supplements that can be taken once a day, simplifying a complex multiple-pill regime into one easy dose',
    ],
    correctIndex: 1,
    explanation:
      'Non-adherence to medication — taking the wrong dose, taking it at the wrong time, or forgetting altogether — is estimated to cause around 33-69% of medication-related hospital admissions among older people in the UK. Complex regimes with multiple drugs taken at different times are especially prone to errors. Smart pill dispensers (like those from Pivotell and Hero) dispense only the correct pills at the correct time, use alarms and lights to prompt the user, lock to prevent double-dosing, and send alerts to designated family members or carers if a dose is missed after a set time window. Some systems integrate with GP and pharmacy systems to automatically reorder prescriptions and track compliance data that can be shared with the healthcare team to spot patterns of declining health.',
    hint: 'Think about the consequences of an older person with multiple conditions missing a critical medication.',
  },
  {
    question: 'What is PARO, and what benefit has research shown from AI companion robots?',
    options: [
      'PARO is an AI personal assistant robot for older people that can make phone calls, send emails, and book GP appointments by voice command',
      'PARO is a therapeutic robot shaped like a baby seal that responds to touch and voice — studies have shown it reduces loneliness, anxiety, and agitation in people with dementia',
      'PARO is an acronym for a UK government programme that places AI monitoring devices in care homes to ensure staff are meeting quality standards',
      'PARO is a rehabilitation robot that assists physiotherapists in helping elderly patients recover from surgery by guiding them through exercise routines',
    ],
    correctIndex: 1,
    explanation:
      'PARO (Personal Assistive RObot) is a therapeutic robot developed in Japan that is shaped like a baby harp seal. It has sensors for touch, sound, light, and temperature, and responds with sounds and movements when stroked or spoken to. It looks appealing and non-threatening. Multiple clinical studies, including trials in UK care homes, have found that regular interaction with PARO reduces agitation, anxiety, and depression in people with dementia, and that it reduces the need for sedative medications. It provides a form of social stimulation for people who can no longer meaningfully hold conversations. Critics raise valid concerns: is interacting with a robot that simulates emotional responses authentic, and could it replace genuine human contact rather than supplement it? These are real ethical tensions without easy answers.',
    hint: 'Think about what benefit an animal companion provides for wellbeing — and whether a robot can provide the same.',
  },
  {
    question: 'How do modern AI-powered hearing aids differ from older hearing aids?',
    options: [
      'They are smaller and less visible, but the underlying audio processing technology is the same as traditional hearing aids from 20 years ago',
      'They use machine learning to distinguish speech from background noise, adapt to different sound environments, and learn the individual user\'s preferences over time',
      'They replace the need for ear moulds by using spatial audio technology that beams sound directly to the ear without any device being worn',
      'They are connected directly to a GP\'s system and automatically adjust the hearing aid settings based on the audiologist\'s remote assessment every month',
    ],
    correctIndex: 1,
    explanation:
      "Traditional hearing aids amplified all sounds, including background noise — making a busy restaurant overwhelming. Modern AI-powered hearing aids from manufacturers like Starkey, Phonak, and Signia use machine learning to classify the acoustic environment in real time (restaurant, outdoors, office, telephone call) and automatically adjust amplification, directionality, and noise filtering accordingly. They learn from the user's adjustments — if you consistently turn down the volume in a particular environment, the AI remembers and applies that preference automatically next time. Some models also offer features like fall detection, language translation, and fitness tracking. The NHS provides free hearing aids to those who qualify; AI-enhanced models are increasingly available through private audiologists, though they are significantly more expensive.",
    hint: 'Think about the difference between simply making everything louder versus intelligently separating speech from noise.',
  },
  {
    question: 'What ethical concern is most significant when using AI monitoring technology for older people with dementia?',
    options: [
      'The cost of AI monitoring devices is too high for most families to afford, meaning the technology only benefits wealthy older people',
      'People with dementia often cannot meaningfully consent to being continuously monitored — raising profound questions about dignity, autonomy, and who decides',
      'AI monitoring devices frequently malfunction in care home environments, providing false reassurance that someone is safe when they are not',
      'The main concern is data security — care home staff having access to monitoring data could breach patient confidentiality',
    ],
    correctIndex: 1,
    explanation:
      "Consent is the central ethical challenge. For a mentally competent person, AI monitoring — floor sensors, wearables, room cameras — can be offered and accepted or refused. For a person with moderate to severe dementia, meaningful consent may not be possible. Decisions are then made by family members, carers, or the local authority under the Mental Capacity Act, which requires decisions to be in the person's best interests. But 'best interests' involves balancing safety (fewer falls, faster emergency response) against dignity and autonomy (being watched constantly, having intimate activities monitored). Care Quality Commission guidance recognises this tension. Age UK and other advocacy organisations emphasise that AI monitoring should supplement — not replace — human care relationships, and that the least intrusive technology appropriate for the actual risk should be used.",
    hint: 'Think about who gets to decide that someone will be monitored when that person cannot meaningfully decide for themselves.',
  },
]

export function AIAndAgeing() {
  useMarkVisited('ai-and-ageing')

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F9D3;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and ageing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Fall detection, medication reminders, companion robots, smart hearing aids,
            and the ethics of using AI to support older people.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-ageing" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-violet-100 dark:border-violet-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Fall detection — independence with a safety net</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Falls are the leading cause of injury-related hospital admissions among people over 65 in the UK.
            AI is changing how quickly help arrives.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-violet-50 dark:bg-violet-950/30 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x231A;</span>
              <div>
                <p className="font-semibold text-violet-800 dark:text-violet-200 text-sm mb-0.5">Wearable detection (Apple Watch, Samsung, Garmin)</p>
                <p className="text-violet-700 dark:text-violet-300 text-sm leading-relaxed">Accelerometers and gyroscopes detect the signature of a fall — freefall followed by sudden impact. If the wearer does not respond within about a minute, the watch calls emergency services and sends a location alert to emergency contacts. Available on consumer smartwatches at accessible prices.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-violet-50 dark:bg-violet-950/30 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F3E0;</span>
              <div>
                <p className="font-semibold text-violet-800 dark:text-violet-200 text-sm mb-0.5">Passive floor sensors</p>
                <p className="text-violet-700 dark:text-violet-300 text-sm leading-relaxed">Radar or vibration sensors mounted on walls or ceilings detect falls without requiring the person to wear anything. Systems like those from Vayyar and TLC are unobtrusive and work even if the person is in the bathroom — where many serious falls occur. The sensor does not see or record video, protecting privacy.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-violet-50 dark:bg-violet-950/30 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F1;</span>
              <div>
                <p className="font-semibold text-violet-800 dark:text-violet-200 text-sm mb-0.5">Lifeline and pendant alarms</p>
                <p className="text-violet-700 dark:text-violet-300 text-sm leading-relaxed">Traditional Lifeline-style pendant alarms have been updated with automatic fall detection — no longer requiring the person to press a button. Some connect via 4G so they work anywhere, not just at home. Age UK and many local councils offer these as part of social care support for older people living independently.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Medication management — the right pill at the right time</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Many older people take multiple medications at different times of day. AI-powered dispensers
            reduce errors and keep families informed.
          </p>
          <div className="space-y-2">
            {[
              'Pivotell, Hero, and similar dispensers load a week\'s worth of pills into compartments; the device unlocks only the correct compartment at the correct time',
              'An alarm and flashing light prompt the person to take their medication; if the compartment is not opened within a set window, an alert goes to the carer or family',
              'Some devices integrate with pharmacy and GP systems — when a compartment runs low, an automatic refill is ordered, and the GP can see the compliance record',
              'AI tracking can identify patterns — missed doses consistently on certain days or times may indicate a changing health or wellbeing situation worth investigating',
              'NHS England has been piloting smart dispensers in schemes to help people with early dementia stay in their own homes longer',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-pink-100 dark:border-pink-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Companion AI — addressing loneliness</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Chronic loneliness affects around 1.4 million older people in England. AI companions
            are being used as one part of the response — with both promising results and real concerns.
          </p>
          <div className="space-y-3">
            {[
              { icon: '&#x1F9F8;', name: 'PARO', detail: 'A robot shaped like a baby seal, approved as a medical device in several countries. Clinical studies in UK care homes showed reduced anxiety, agitation, and depression in people with dementia, and reduced need for sedative medication. Costs several thousand pounds per unit, but is shared between residents.' },
              { icon: '&#x1F5E3;&#xFE0F;', name: 'ElliQ', detail: 'A conversational AI device designed specifically for older people living alone. It proactively starts conversations, suggests activities, connects to family via video calls, and provides health reminders. Unlike Amazon Echo, it is designed to be warm and social rather than transactional.' },
              { icon: '&#x1F4AC;', name: 'ChatGPT and general AI assistants', detail: 'Many older people are using general AI chatbots for conversation and mental stimulation. Some report finding it genuinely helpful for reducing isolation, particularly those with mobility issues who cannot easily get out.' },
            ].map(({ icon, name, detail }) => (
              <div key={name} className="flex gap-3 items-start bg-pink-50 dark:bg-pink-950/30 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-pink-800 dark:text-pink-200 text-sm mb-0.5">{name}</p>
                  <p className="text-pink-700 dark:text-pink-300 text-sm leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-pink-50 dark:bg-pink-950 rounded-xl p-4">
            <p className="text-pink-700 dark:text-pink-300 text-sm leading-relaxed">
              <span className="font-semibold">The ethical debate:</span> should AI interaction be seen as an authentic substitute for human connection? Critics argue that using robots to address loneliness allows society to invest less in human care relationships. Supporters argue that for people who have very limited social contact, some form of positive interaction — even with a robot — is better than none.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Ethics of AI monitoring — safety versus dignity</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            When AI monitors older people's daily lives, important questions arise about consent,
            dignity, and who is making decisions on whose behalf.
          </p>
          <div className="space-y-2">
            {[
              'Consent: a person with dementia may not be able to meaningfully agree to continuous monitoring — decisions must be made by others in their "best interests" under the Mental Capacity Act',
              'Dignity: being watched while using the bathroom, getting dressed, or having an intimate moment removes privacy that most people consider fundamental',
              'Least restrictive principle: the Care Quality Commission guidance requires using the least intrusive technology that meets the actual need — a movement sensor may be appropriate where a camera is not',
              'Data ownership: who owns the data collected from monitoring — the person being monitored, the care provider, the device manufacturer? What happens to it?',
              'Replacing human care: there is a risk that cheaper AI monitoring is used to justify reducing the human contact that is itself therapeutic and essential',
              'Discrimination: AI that monitors care home staff behaviour can create adversarial dynamics and may flag care tasks that look unusual to an algorithm but are perfectly appropriate',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5 flex-shrink-0">&#x26A0;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <LessonNote lessonId="ai-and-ageing" />

        <Quiz lessonId="ai-and-ageing" questions={quizQuestions} />

        <RelatedLessons currentId="ai-and-ageing" />

        <LessonRating lessonId="ai-and-ageing" />
        <LessonFeedback lessonId="ai-and-ageing" />
        <ReviewLaterButton lessonId="ai-and-ageing" />
        <NextLesson currentId="ai-and-ageing" />
      </div>
    </div>
  )
}
