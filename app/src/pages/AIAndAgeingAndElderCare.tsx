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

const LESSON_TITLE = 'AI and ageing and elder care'

const KEY_TAKEAWAYS = [
  'AI-powered fall detection uses sensors and computer vision to detect when someone has fallen and alert carers automatically — enabling older people to live alone more safely without constant supervision.',
  'Smart medication dispensers use AI to remind users when to take tablets, alert carers if a dose is missed, and in some cases automatically dispense the correct pill at the right time, reducing medication errors.',
  'Companion robots like PARO (a robotic seal) and AI voice companions provide social interaction for isolated older people — research shows they reduce anxiety in dementia patients, but they cannot replace human connection.',
  'AI hearing aids now use neural processing to distinguish speech from background noise in real time, automatically adapting to different sound environments — a step change from simple amplification.',
  'The key ethical tension in AI care technology is between safety (monitoring falls, location, behaviour) and privacy and dignity — adults in care settings have the right to know what is being monitored and to say no.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does an AI fall detection system work in a home setting?',
    options: [
      'A wearable button on a lanyard that the person must press themselves when they fall — the AI then determines the severity and decides whether to call emergency services',
      'Sensors or cameras in the home use AI to monitor normal movement patterns and detect when someone has fallen — automatically alerting designated carers or emergency services without requiring the person to do anything',
      'A smartphone app that monitors the person\'s GPS location throughout the day and alerts carers if they have not moved for more than an hour',
      'A pressure mat under the bed that detects if someone has not got up by a certain time each morning, triggering an automated welfare call',
    ],
    correctIndex: 1,
    explanation:
      'The key advantage of AI fall detection over personal alarms is that the person does not need to be able to press a button — which they often cannot do after a serious fall. Systems use several approaches: passive infrared sensors that detect movement (or the absence of expected movement), radar-based sensors that build a 3D picture of the room without needing a camera, or actual cameras with computer vision that can identify the posture of a fall. Products include Amazon Alexa\'s Emergency Assist feature, Hive\'s Motion Sensor, and specialist systems like Just Checking and Canary Care. These systems are most effective when combined with clear plans about who gets alerted and how quickly they can respond.',
    hint: 'Think about a system that works without the person having to do anything.',
  },
  {
    question: 'What benefit do AI-powered hearing aids provide compared to traditional hearing aids?',
    options: [
      'They are completely invisible inside the ear canal and connect wirelessly to a smartphone, eliminating the visible stigma of traditional behind-the-ear models',
      'They use AI to distinguish between speech and background noise in real time, automatically adjusting amplification and directionality so that voices are clearer in noisy environments like restaurants',
      'They have built-in translation capabilities that convert foreign languages into English in real time, allowing people with hearing loss to follow conversations in different languages',
      'They include a health monitoring function that tracks heart rate and oxygen levels, functioning as a combined hearing aid and medical device with no additional wearable required',
    ],
    correctIndex: 1,
    explanation:
      'Traditional hearing aids amplify all sounds — which means in a noisy restaurant, the background noise is amplified along with the conversation you are trying to follow. AI-powered hearing aids from brands like Oticon, Phonak, and Starkey process sound using neural networks that have been trained on enormous amounts of audio data. They can distinguish between speech and noise, prioritise the voices coming from in front of you, suppress ambient noise from other directions, and adapt automatically when you move from a quiet room to a noisy street. The AI also learns your preferences over time — if you consistently turn down the volume in certain environments, it learns to apply that adjustment automatically. This significantly improves speech intelligibility in the complex acoustic environments that are most challenging for people with hearing loss.',
    hint: 'Think about distinguishing speech from background noise in real time.',
  },
  {
    question: 'What ethical concern is central to AI monitoring technology in care settings?',
    options: [
      'That AI monitoring devices are too expensive for state-funded care homes to afford, meaning only privately paying residents benefit from the safety improvements they provide',
      'That AI monitoring uses a significant amount of electricity, contributing to the environmental footprint of the care sector at a time when care homes are under financial pressure',
      'That monitoring technology in care settings can erode residents\' privacy and dignity — particularly when cameras or sensors are installed without genuine informed consent or without explaining what data is collected and shared',
      'That AI monitoring creates a false sense of security, causing family members to visit less often and reducing the human contact that is essential for older people\'s wellbeing',
    ],
    correctIndex: 2,
    explanation:
      'The Care Quality Commission (CQC) has published guidance on the use of monitoring technology in care settings, emphasising that residents must give genuine informed consent before cameras or other monitoring devices are installed in their rooms. "Informed" means they genuinely understand what the technology does, who sees the data, and how long it is stored. There are particular concerns about people with dementia who may lack capacity to give meaningful consent. The use of cameras in bedrooms and bathrooms is especially sensitive — the right to privacy and dignity is a fundamental human right that does not disappear when someone moves into a care home. When technology is introduced with proper consent and genuine benefit to the resident (not just to the care provider\'s efficiency), it can be enormously positive. When it is imposed without consent, it can cause distress.',
    hint: 'Think about the right to privacy and the importance of consent.',
  },
  {
    question: 'Research on companion robots like PARO in care settings has found what?',
    options: [
      'Companion robots have been found to be ineffective — people quickly lose interest and the robots are usually abandoned within two weeks of introduction to a care setting',
      'Companion robots reduce anxiety and agitation in people with dementia, improve mood, and can reduce the need for sedative medication in some care homes — though they do not replace human interaction',
      'Companion robots are primarily used for physical assistance (helping people stand, move around, or carry objects) rather than for emotional support or companionship',
      'Companion robots have been banned in UK care homes by the CQC due to concerns that they mislead vulnerable residents into thinking they are interacting with a real animal or person',
    ],
    correctIndex: 1,
    explanation:
      'PARO is a therapeutic robot developed in Japan — it looks like a baby seal, responds to touch and sound, and has been in use in dementia care since the early 2000s. Multiple studies have found that interacting with PARO reduces cortisol levels (a stress marker), decreases agitation and aggressive behaviour, and improves mood in people with moderate to severe dementia. Several NHS trusts and UK care homes use PARO. Similar effects have been observed with robotic cats and dogs. The mechanism seems to be similar to animal-assisted therapy — the act of touching, caring for, and talking to a creature that responds positively. Researchers are careful to note that PARO is a complement to human care, not a replacement, and that the quality of human relationships in care settings remains the most important factor in resident wellbeing.',
    hint: 'Think about positive effects on anxiety and agitation.',
  },
  {
    question: 'What does "cognitive offloading" mean in the context of AI and older adults?',
    options: [
      'A medical procedure in which AI analyses brain scans of older adults to identify early signs of cognitive decline, allowing earlier intervention and treatment',
      'Using external AI tools (like reminders, GPS navigation, or voice assistants) to manage tasks that memory or concentration would otherwise handle — which can reduce mental load but may also reduce cognitive exercise',
      'A training programme using AI games and puzzles to help older adults maintain cognitive sharpness and reduce the risk of dementia',
      'The process of transferring knowledge from an older expert worker to an AI system before they retire, so their expertise is not lost when they leave the workforce',
    ],
    correctIndex: 1,
    explanation:
      'Cognitive offloading means using an external tool to remember or process something instead of doing it mentally. A classic example is using a GPS rather than memorising a route. For older adults with early cognitive decline, cognitive offloading can be profoundly helpful — medication reminders prevent dangerous missed doses, calendar AI tracks appointments, and voice assistants provide companionship and answer questions. However, there is a debate among researchers about whether heavy reliance on external aids accelerates cognitive decline by reducing "use" of mental faculties, or whether it is better to reduce the stress and errors that come from cognitive overload and focus energy on more meaningful activities. The evidence is still evolving, and the consensus is that the practical benefits outweigh the theoretical risks for most people — particularly those with existing memory difficulties.',
    hint: 'Think about using AI to do mental work that memory would otherwise handle.',
  },
]

export function AIAndAgeingAndElderCare() {
  useMarkVisited('ai-and-ageing-and-elder-care')

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F9D3;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and ageing and elder care
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Fall detection, medication reminders, companion robots, AI hearing aids,
            and the ethics of monitoring older people.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-ageing-and-elder-care" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Ageing and independence</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The UK has an ageing population. By 2050, one in four people in the UK will be over 65. AI and smart technology are increasingly being used to help older people live independently for longer — and to support those who need care.
          </p>
          <div className="space-y-2">
            {[
              'Over 11 million people in the UK are aged 65 or over — a figure projected to reach 17 million by 2050',
              'Falls are the leading cause of injury-related deaths in older people; 1 in 3 adults over 65 falls at least once a year',
              'Loneliness affects over a million older people in the UK seriously — Age UK calls it "a health crisis as dangerous as smoking 15 cigarettes a day"',
              'Dementia affects around 900,000 people in the UK; AI tools are being developed both to slow its progress and to help people manage its symptoms',
              'The NHS spends over £1 billion a year treating falls in older people — technology that prevents falls could have enormous health and economic benefits',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-rose-600 dark:text-rose-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Fall detection and smart home safety</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Traditional personal alarms require the person to press a button — which is impossible if they are unconscious or unable to reach the device. AI-powered fall detection solves this.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-orange-50 dark:bg-orange-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F6;</span>
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-200 text-sm mb-0.5">Passive sensors</p>
                <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">Motion sensors placed around the home learn normal patterns of movement — when someone gets up, goes to the kitchen, uses the bathroom. Unusual patterns (no movement by 10am when the person is usually active, or movement followed by no movement in an unusual location) trigger an alert to carers.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-orange-50 dark:bg-orange-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F7;</span>
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-200 text-sm mb-0.5">Computer vision</p>
                <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">Some systems use privacy-preserving cameras (which show only a stick figure, not a recognisable person) with computer vision AI that can identify a fall posture. This avoids the privacy concerns of traditional cameras while providing visual confirmation of events.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Medication management and smart dispensers</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Medication errors are a significant risk for older people managing multiple prescriptions. AI-powered dispensers and reminder systems reduce this risk considerably.
          </p>
          <div className="space-y-2">
            {[
              'Smart pill dispensers (like Pivotell and Dosette Box Pro) sort tablets into daily doses and emit alarms at the right time',
              'If a dose is not collected, the system can send an alert to a family carer or GP via a connected app',
              'Some dispensers automatically order refills from the pharmacy when stock runs low',
              'AI reminder systems integrated with Alexa or Google can announce medication times verbally throughout the day',
              'NHS research shows medication errors contribute to around 12,000 deaths per year in the UK — smart dispensers address a genuine patient safety problem',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Companion robots and loneliness</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Loneliness and social isolation have measurable effects on physical health — equivalent in risk to smoking 15 cigarettes a day. AI companions cannot replace human connection, but they can provide comfort.
          </p>
          <div className="bg-purple-50 dark:bg-purple-950 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm">PARO and therapeutic robots</p>
            <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">
              PARO, the robotic baby seal, has been used in dementia care across Japan, Denmark, and increasingly the UK and US. Multiple clinical studies show it reduces anxiety, agitation, and the need for sedative medication in people with dementia. Its calming effect appears to work through the same mechanisms as animal-assisted therapy — touch, responsiveness, and caring for something that responds. Several NHS trusts use PARO. At around £4,000 per unit, it is expensive, but costs less than the medication it can replace.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Ethics of monitoring</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The same technology that keeps people safe can also compromise their privacy and dignity. Getting the balance right requires genuine consent, not just compliance.
          </p>
          <div className="space-y-2">
            {[
              'CQC guidance requires that monitoring in care settings must be based on genuine informed consent from the resident',
              'People with dementia may lack capacity to give consent — in these cases, the decision must be made in their best interest with family involvement',
              'Camera monitoring in bedrooms and bathrooms requires especially careful justification and documentation',
              'Data from monitoring systems must be kept secure and only shared with those with a genuine need to know',
              'Residents always retain the right to refuse monitoring technology — this refusal must be respected and cannot affect the quality of care they receive',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-ageing-and-elder-care" />

        <Quiz questions={quizQuestions} lessonId="ai-and-ageing-and-elder-care" />

        <LessonNote lessonId="ai-and-ageing-and-elder-care" />
        <LessonRating lessonId="ai-and-ageing-and-elder-care" />
        <LessonFeedback lessonId="ai-and-ageing-and-elder-care" />

        <RelatedLessons currentId="ai-and-ageing-and-elder-care" />
        <NextLesson currentId="ai-and-ageing-and-elder-care" />
      </div>
    </div>
  )
}
