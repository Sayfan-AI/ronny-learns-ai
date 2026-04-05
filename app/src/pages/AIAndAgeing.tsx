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
import { LessonSeriesBadge } from '../components/LessonSeriesBadge'

const LESSON_TITLE = 'AI and ageing — helping older people live independently'

const KEY_TAKEAWAYS = [
  'Fall detection AI — built into smartwatches, pendants, and home sensors — can call for help automatically if an older person falls, even if they are unconscious or unable to press a button.',
  'Medication reminder systems use AI to track complex dosing schedules, remind patients to take their tablets, and alert carers or family members if doses are repeatedly missed.',
  'Companion robots and AI assistants (like Amazon Alexa or more specialised devices) help address loneliness in older adults who live alone — but cannot replace human connection.',
  'AI-powered hearing aids analyse the sound environment in real time and adjust automatically for speech clarity, background noise suppression, and directional focus.',
  'The use of AI to monitor older adults at home raises important ethical questions about consent, dignity, surveillance, and who controls the data collected.',
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'How does AI fall detection work on a smartwatch?',
    options: [
      'It asks the wearer to confirm they have fallen via a voice prompt',
      'It uses sensors to detect the sudden motion, impact, and posture change associated with a fall, then calls for help if the wearer does not respond',
      'It requires the wearer to press a button immediately after falling',
      'It only works when connected to Wi-Fi',
    ],
    correctIndex: 1,
    explanation:
      'Modern fall detection uses accelerometers and gyroscopes to detect the pattern of movement associated with a fall — a sudden drop followed by impact and then stillness. If the device detects a likely fall, it gives the wearer a short window to confirm they are OK. If there is no response (they may be unconscious), it automatically calls emergency services and a chosen contact.',
  },
  {
    question: 'What is one key benefit of AI medication reminder systems?',
    options: [
      'They can order prescriptions automatically from any pharmacy',
      'They can manage complex multi-drug schedules and alert carers if doses are consistently missed — catching problems before they become medical emergencies',
      'They can identify whether a pill is the correct medication by scanning it',
      'They replace the need for a GP for routine prescriptions',
    ],
    correctIndex: 1,
    explanation:
      'Many older adults take five or more medications with different dosing schedules. AI systems can track this complexity, remind the person at the right time, dispense the right pill from an automated container, and alert a family member or carer if doses are repeatedly missed — which can indicate cognitive decline or other problems.',
  },
  {
    question: 'What does research suggest about companion robots and loneliness in older adults?',
    options: [
      'They fully replace the need for human contact',
      'They provide no benefit whatsoever',
      'They can reduce feelings of loneliness and improve mood, but cannot replace human relationships',
      'They are only effective for people with dementia',
    ],
    correctIndex: 2,
    explanation:
      'Studies on devices like Paro (a robotic seal used in dementia care) and AI assistants suggest they can reduce reported loneliness, improve mood, and encourage more communication. However, researchers emphasise that they should supplement human contact, not replace it — and there are concerns about people becoming emotionally dependent on devices that companies could withdraw.',
  },
  {
    question: 'How do AI-powered hearing aids differ from traditional hearing aids?',
    options: [
      'They are significantly smaller',
      'They continuously analyse the sound environment and automatically adjust settings for different situations — suppressing background noise, enhancing speech, and focusing on the direction the wearer is facing',
      'They can translate speech into other languages',
      'They only work with smartphones',
    ],
    correctIndex: 1,
    explanation:
      'Traditional hearing aids simply amplify sound. Modern AI hearing aids (from companies like Oticon, Widex, and Starkey) process sound in real time, distinguishing speech from background noise, adjusting automatically when you move from a quiet room to a busy street, and sometimes learning the wearer\'s preferences over time.',
  },
  {
    question: 'What is the main ethical concern about using AI to monitor older adults at home?',
    options: [
      'It is too expensive for most families',
      'The AI might not work in older properties',
      'Continuous monitoring can undermine dignity, autonomy, and privacy — especially if the older person did not fully understand or consent to what data is being collected and who can see it',
      'It requires constant internet access',
    ],
    correctIndex: 2,
    explanation:
      'Monitoring technology installed "for someone\'s safety" can easily become surveillance that removes their privacy in their own home. Key questions include: Does the older person genuinely consent, or have they been pressured? Can they turn it off? Who can access the data — family, carers, the technology company? How long is it stored? These are live ethical and legal questions in UK care settings.',
  },
]

export function AIAndAgeing() {
  useMarkVisited('ai-and-ageing')

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <LessonSeriesBadge lessonId="ai-and-ageing" />

      <h1 className="text-3xl font-bold text-gray-900 mb-2">{LESSON_TITLE}</h1>
      <p className="text-gray-500 text-sm mb-6">7 min read</p>

      <CompletedBadge lessonId="ai-and-ageing" />
      <ShareButton lessonTitle={LESSON_TITLE} />

      <KeyTakeaways points={KEY_TAKEAWAYS} />

      <div className="prose prose-gray max-w-none mt-8">

        <h2>AI and an ageing population</h2>
        <p>
          The UK has an ageing population. By 2050, around one in four people in the UK will be over 65. This creates enormous pressure on health and social care systems — and a significant opportunity for technology to help older people live independently, safely, and with dignity for longer.
        </p>
        <p>
          AI is increasingly woven into products and services aimed at older adults, from smartwatches that detect falls to robots designed to reduce loneliness. This lesson looks at what is actually available, what the evidence says about what works, and the ethical questions this technology raises.
        </p>

        <h2>Fall detection</h2>
        <p>
          Falls are the leading cause of injury-related death in adults over 65 in the UK, and one of the most common reasons older people are admitted to hospital. Many falls happen when the person is alone — and the outcome can depend critically on how quickly help arrives.
        </p>
        <p>
          Traditional personal alarm systems (pendants or wristbands) rely on the person pressing a button after they fall. This fails if they are unconscious, confused, or simply unable to reach the button. AI fall detection removes this dependency.
        </p>
        <p>
          The Apple Watch's fall detection feature uses accelerometers and gyroscopes to recognise the distinctive movement pattern of a fall — sudden acceleration followed by impact and then stillness. If the wearer does not respond to a prompt within 60 seconds, it automatically calls emergency services and sends an alert to chosen contacts. Similar features are built into many Android smartwatches.
        </p>
        <p>
          Dedicated fall detection products for the home — from companies like Sensara, TalkingMats, and Canary Care — use room sensors (not cameras) to track movement patterns and detect anomalies. If someone falls in the bathroom or lies motionless for an extended period, the system alerts a designated carer or family member.
        </p>
        <p>
          Age UK has been involved in trialling several of these technologies, and the NHS is exploring their use as part of its strategy to reduce fall-related hospital admissions.
        </p>

        <h2>Medication management</h2>
        <p>
          Polypharmacy — taking five or more medications — is common among older adults with multiple conditions. Managing different drugs with different dosing times, food interactions, and refill schedules is cognitively demanding. Missing doses or taking the wrong dose at the wrong time can have serious health consequences.
        </p>
        <p>
          AI medication management systems address this in several ways. Smart pill dispensers (like the Pivotell or Hero dispensers) store multiple medications in separate compartments, dispense the correct pills at the correct times, and alert the person (and their carer) if a dose is missed. Connected systems can report compliance data to a GP or pharmacist.
        </p>
        <p>
          Voice assistant reminders (via Alexa or Google Home) offer a simpler version: "Mum, it's 8am — time for your blood pressure tablet." The NHS has piloted these approaches in some areas to support patients being discharged from hospital after medication-related admissions.
        </p>

        <h2>Companion robots and AI assistants</h2>
        <p>
          Loneliness is a significant health problem for older adults in the UK — the Campaign to End Loneliness estimates that around 1.4 million older people are often lonely. Research has linked chronic loneliness to a higher risk of dementia, heart disease, and early death.
        </p>
        <p>
          AI companions range from voice assistants like Amazon Echo to purpose-built companion robots. The most studied of these is Paro, a robotic seal designed in Japan that responds to touch and sound. Research in care settings has found it reduces agitation in people with dementia, increases social interaction, and reduces the need for some medication.
        </p>
        <p>
          More conversational AI companions — chatbots designed to have open-ended conversations — are being developed specifically for older adults. Products like ElliQ (a robot designed for older adults by Israeli company Intuition Robotics) can proactively start conversations, suggest activities, and connect the user to video calls with family members.
        </p>
        <p>
          The evidence is broadly positive for mood and engagement, but researchers and ethicists raise important cautions. What happens when the company withdraws the product or service — and the older person has become emotionally dependent on it? Is it ethical to let someone form a relationship with what is essentially a programme that has no feelings?
        </p>

        <LessonNote lessonId="ai-and-ageing" />

        <h2>AI-powered hearing aids</h2>
        <p>
          Hearing loss affects around 40% of people over 50 in the UK and rises significantly with age. Traditional hearing aids simply amplify sound — which makes both speech and background noise louder, often making it harder rather than easier to follow conversations in noisy environments.
        </p>
        <p>
          AI hearing aids process sound continuously using machine learning. They can distinguish between speech and background noise, suppress the rumble of a restaurant kitchen while enhancing the voices at your table, and switch settings automatically as you move from a quiet room to a busy street. Some models learn the wearer's preferences over time.
        </p>
        <p>
          In the UK, NHS hearing aids have historically been functional but basic. Private AI hearing aids (from brands like Oticon, Widex, Phonak, and Starkey) are significantly more capable but expensive — typically £1,500–£3,500 per pair. There is an ongoing debate about NHS hearing aid technology and whether more advanced AI models should be available through the health service.
        </p>

        <h2>Ethics: who is monitoring whom?</h2>
        <p>
          Technology that keeps older people safer at home is genuinely valuable. But it sits alongside important questions about dignity, autonomy, and consent.
        </p>
        <p>
          Consider a family that installs a movement sensor system in their elderly parent's home "so we know they're OK." The parent may feel safer. But they may also feel watched — unable to have a bad day, stay in bed late, or make unusual choices without triggering a worried phone call. Their home is no longer private, even from family.
        </p>
        <p>
          Genuine consent is essential. "We've set this up for your safety" is not consent — it is a fait accompli. Older adults should understand what data is collected, who can access it, and how to disable the system if they choose. The Care Quality Commission (CQC) has issued guidance on monitoring in care homes, emphasising that residents must consent to being monitored and retain the right to refuse.
        </p>
        <p>
          UK GDPR applies to data collected about older adults by technology companies. Family members and carers acting in a personal capacity generally fall outside data protection law, but commercial providers do not. If a technology company collects data about an older person's daily patterns, they must have a lawful basis for doing so.
        </p>

      </div>

      <div className="mt-10">
        <Quiz questions={QUIZ_QUESTIONS} lessonId="ai-and-ageing" />
      </div>

      <LessonRating lessonId="ai-and-ageing" />
      <LessonFeedback lessonId="ai-and-ageing" />
      <ReviewLaterButton lessonId="ai-and-ageing" />
      <RelatedLessons currentId="ai-and-ageing" />
      <NextLesson currentId="ai-and-ageing" />
    </div>
  )
}
