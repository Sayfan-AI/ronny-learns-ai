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

const LESSON_TITLE = 'AI and social care'

const KEY_TAKEAWAYS = [
  'Social care covers support for elderly, disabled, and vulnerable people in their daily lives — not medical treatment, but help with washing, dressing, meals, and companionship. The UK faces a growing care gap as the population ages, and AI is being trialled as part of the response.',
  'AI companion robots like PARO (a therapeutic seal) and apps like ElliQ are designed to reduce loneliness in elderly people — with measurable positive effects on mood and engagement, though they cannot replace human connection.',
  'Passive monitoring systems use AI to track movement patterns in the home — detecting falls, unusual inactivity, or changes in routine that might signal a health problem, without requiring the person to press a button or wear a device.',
  'The ethics of automated care are complex: questions of consent, dignity, the meaning of care, and the risk that robots become an excuse to reduce human contact rather than supplement it all need careful consideration.',
  'Care workers are not simply being replaced by AI — the technology is mainly being deployed to give them better information, reduce paperwork, and extend their capacity. But the workforce deserves good training and consultation about how these tools are used.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is the difference between social care and healthcare in the UK?',
    options: [
      'Healthcare is funded by the NHS and is free at the point of use; social care is provided by local councils and is means-tested, meaning many people have to pay for it themselves',
      'Healthcare covers all physical conditions including mental health; social care covers only elderly people in care homes and has nothing to do with younger disabled people',
      'Healthcare is provided in hospitals only; social care is everything that happens in the community, including GP surgeries and community nursing',
      'There is no real distinction — both are fully funded by the NHS and delivered under the same legal framework',
    ],
    correctIndex: 0,
    explanation:
      'This is a crucial distinction that surprises many people. NHS healthcare is free to all at the point of use. Social care — help with washing, dressing, eating, getting out of bed, companionship, care home places — is provided by local councils and is means-tested. People with assets over approximately £23,250 (in England) must pay for their own care. Many people discover this only when a family member needs care and the costs become apparent. The gap between the two systems is a major political issue in the UK.',
    hint: 'Think about who pays for care homes versus who pays for hospital treatment.',
  },
  {
    question: 'What evidence exists for the benefits of AI companion robots for elderly people?',
    options: [
      'Large randomised controlled trials have conclusively proven that AI companions reduce dementia progression by 30% in care home residents',
      'Studies of robots like PARO in care homes show measurable reductions in self-reported loneliness and anxiety, and reduced need for sedative medication — but researchers emphasise these supplements human contact rather than replace it',
      'The evidence is entirely anecdotal — no peer-reviewed research has been conducted on AI companion robots in care settings',
      'AI companions are only effective for people with severe dementia; for people with mild cognitive impairment or no diagnosis, they report feeling patronised by robotic companions',
    ],
    correctIndex: 1,
    explanation:
      'PARO — a therapeutic robot seal developed in Japan — has been the subject of considerable research. Studies in care homes in the UK, Japan, and the US have found that regular interaction with PARO reduces self-reported loneliness and agitation in elderly residents, and some studies show reduced prescribing of sedative medication. The effects are genuine but modest, and researchers consistently emphasise that the goal is to supplement human care — particularly in the hours when staff are not directly available — rather than replace human relationships.',
    hint: 'Think about whether the research is conclusive or more nuanced.',
  },
  {
    question: 'How does passive AI monitoring in the home work, and why is it considered less intrusive than a camera?',
    options: [
      'Passive monitoring uses microphones to listen for sounds of distress, which is considered less intrusive than cameras because sound recordings are automatically deleted after 24 hours',
      'Passive monitoring uses sensors that detect movement, door openings, and appliance use to build a pattern of normal daily activity — AI then flags when something changes, such as unusual stillness or a missed meal, without recording images of the person',
      'Passive monitoring uses GPS tracking embedded in a wristband to map the person\'s location throughout the day, which is less intrusive than cameras because the data is anonymised',
      'Passive monitoring is actually considered more intrusive than cameras — the term "passive" refers to the fact that the person does not have to actively press a button, not that it is less invasive',
    ],
    correctIndex: 1,
    explanation:
      'Passive monitoring systems like those made by OC-Remind or Howz use a network of small sensors placed around the home — on doors, in the kitchen, near the bathroom — to build a picture of normal daily patterns. If the kettle has not been switched on by 10am when it is always on by 8am, or if there has been no movement for an unusually long time, the AI alerts a family member or carer. There are no cameras and no images. The privacy trade-off is considered more acceptable by many people, and importantly, it does not require the person to press a button — which matters when a fall or disorientation means they cannot.',
    hint: 'Think about what "passive" means in terms of what the system records.',
  },
  {
    question: 'What is the main ethical concern about using AI and robots in social care?',
    options: [
      'The main concern is that AI companions will cause elderly people to become confused about whether they are talking to a human or a machine, leading to psychological harm',
      'The main concern is that AI and robots will be used to justify reducing human care staff, cutting costs at the expense of quality and dignity, rather than genuinely supplementing human contact',
      'The main concern is that care robots collect sensitive health data which could be sold to insurance companies and used to increase premiums for elderly people',
      'The main concern is that AI systems make decisions about medication and treatment that should be made by qualified nurses and doctors',
    ],
    correctIndex: 1,
    explanation:
      'While there are multiple ethical concerns about AI in social care, the most fundamental is about substitution rather than supplementation. The fear is that local councils and care providers, under severe financial pressure, will use AI and robotic tools as justification for employing fewer care workers, reducing visit times, or cutting support budgets — arguing that technology fills the gap. Critics argue that human care is not just functional (performing tasks) but relational (emotional connection, dignity, being truly seen by another person), and that reducing human contact has profound negative consequences that a robot cannot compensate for.',
    hint: 'Think about the financial pressures that councils face and what might motivate technology adoption.',
  },
  {
    question: 'How is AI being used to support care workers themselves, rather than replace them?',
    options: [
      'AI is replacing care workers in low-skilled tasks like medication administration and personal care, allowing human staff to focus exclusively on emotional support and complex decision-making',
      'AI tools help care workers by reducing paperwork through voice-to-text documentation, flagging clients who may be deteriorating based on monitoring data, and helping coordinate complex care schedules across large numbers of clients',
      'AI is mainly being used to monitor care workers themselves — tracking whether they complete visits on time, how long they spend with each client, and whether they are following care plans correctly',
      'AI tools for care workers are still entirely theoretical — no real-world deployments exist in UK social care settings',
    ],
    correctIndex: 1,
    explanation:
      'Care workers spend a significant portion of their working day on paperwork — documenting visits, recording observations, updating care plans, and reporting to coordinators. AI voice-to-text tools allow them to dictate notes naturally during or after a visit, saving time that can be redirected to actual care. AI scheduling tools can optimise routes and match care workers to clients based on skills, location, and relationship history. And monitoring data can alert care coordinators to clients who may need a welfare check or GP referral. These tools are valuable but require careful implementation so that workers feel supported rather than surveilled.',
    hint: 'Think about the administrative burden that care workers carry alongside their direct care duties.',
  },
]

export function AIAndSocialCare() {
  useMarkVisited('ai-and-social-care')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F91D;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and social care
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI is entering one of the most human parts of life — care for elderly and disabled people —
            and the profound questions it raises about dignity, loneliness, and what we owe each other.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 8 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-social-care" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">What is social care — and why is it in crisis?</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Social care is not the same as healthcare. The NHS treats illness and injury. Social care is the support that people need to live their daily lives — help with washing, dressing, cooking, getting out of bed, taking medication, and having company. It covers elderly people, disabled people of all ages, and people with mental health conditions or learning disabilities.
          </p>
          <div className="space-y-2">
            {[
              'In the UK, social care is mainly funded by local councils through means-testing — people with significant assets often have to pay for care themselves, sometimes selling their homes to fund care home places',
              'The UK has approximately 1.5 million paid social care workers — and the sector faces chronic staff shortages, high turnover, and some of the lowest wages in the country',
              'By 2040, the number of people aged 85 and over in the UK is projected to double — creating a care gap that cannot be filled by workforce growth alone at current levels',
              'Most care is actually provided unpaid by family members — there are an estimated 5 million unpaid carers in the UK, many of whom have reduced or given up paid work to provide care',
              'AI is being trialled partly because there are simply not enough paid carers, and partly because technology can provide support in the hours between visits when no one is present',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI companions and care robots</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Loneliness is one of the most serious health risks in old age — comparable in its health impact to smoking 15 cigarettes a day. AI companions aim to address this, though they raise their own questions.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-rose-50 dark:bg-rose-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F9F8;</span>
              <div>
                <p className="font-semibold text-rose-800 dark:text-rose-200 text-sm mb-0.5">PARO — the therapeutic robot</p>
                <p className="text-rose-700 dark:text-rose-300 text-sm leading-relaxed">PARO is a soft robotic baby harp seal, developed in Japan, that responds to touch, sound, and light. Used in care homes for people with dementia, it makes sounds when stroked, reacts to being spoken to, and moves its head and flippers. Studies show it reduces agitation and self-reported loneliness in care home residents, and has reduced the need for sedative medication in some settings. It costs around £4,000 per unit and is used in NHS and private care settings in the UK.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-rose-50 dark:bg-rose-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F1;</span>
              <div>
                <p className="font-semibold text-rose-800 dark:text-rose-200 text-sm mb-0.5">ElliQ — an AI companion device</p>
                <p className="text-rose-700 dark:text-rose-300 text-sm leading-relaxed">ElliQ is a tabletop AI companion designed for elderly people living alone. It proactively initiates conversation, suggests activities, reminds users about medication, and facilitates video calls with family. Unlike a tablet or smart speaker, it has an expressive screen and head that moves, making interaction feel more social. Trials in the US show users report feeling less lonely and more engaged with daily life.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-rose-50 dark:bg-rose-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F916;</span>
              <div>
                <p className="font-semibold text-rose-800 dark:text-rose-200 text-sm mb-0.5">Physical care robots</p>
                <p className="text-rose-700 dark:text-rose-300 text-sm leading-relaxed">More physically capable care robots — able to assist with getting out of bed, personal hygiene, or moving around — exist in research settings and limited commercial deployment, mainly in Japan. They face significant challenges: they are expensive, technically complex, and the physical intimacy of personal care raises profound dignity questions. Most experts expect human care workers to remain central to personal care for many years.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Monitoring and fall detection</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Falls are one of the leading causes of serious injury and hospital admission in elderly people. Lying on the floor unable to summon help can be fatal. AI monitoring technology aims to detect problems before they become emergencies — or get help faster when they do.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-indigo-50 dark:bg-indigo-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F6;</span>
              <div>
                <p className="font-semibold text-indigo-800 dark:text-indigo-200 text-sm mb-0.5">Passive home monitoring</p>
                <p className="text-indigo-700 dark:text-indigo-300 text-sm leading-relaxed">Small sensors placed around the home — on doors, appliances, beds, chairs — build a picture of normal daily patterns. The AI learns that the kettle is on by 8am, that the person visits the bathroom twice before 10am, and that they usually settle into a chair by 7pm. When the pattern changes significantly, carers or family are automatically alerted — without needing cameras or the person to press a button.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-indigo-50 dark:bg-indigo-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x231B;</span>
              <div>
                <p className="font-semibold text-indigo-800 dark:text-indigo-200 text-sm mb-0.5">Wearable fall detection</p>
                <p className="text-indigo-700 dark:text-indigo-300 text-sm leading-relaxed">Smartwatches and wearable sensors can detect the distinctive motion signature of a fall and automatically call for help. Apple Watch has this feature built in. Dedicated medical-grade devices are more sensitive and can also detect if the person has been motionless on the floor for longer than expected — triggering an alert even if the person cannot press a button.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-indigo-50 dark:bg-indigo-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F3E5;</span>
              <div>
                <p className="font-semibold text-indigo-800 dark:text-indigo-200 text-sm mb-0.5">Predictive health monitoring</p>
                <p className="text-indigo-700 dark:text-indigo-300 text-sm leading-relaxed">AI can analyse patterns in monitoring data to spot early signs of deterioration — a gradual slowing of daily activity, changes in sleep patterns, reduced appetite — before a health crisis occurs. This predictive capability could allow proactive GP referrals or care plan adjustments before a crisis requiring hospital admission.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The ethics of automated care</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            No other area of AI use raises more fundamental questions about human values than social care. The people most affected — elderly, disabled, or vulnerable individuals — are also often those least able to advocate for themselves.
          </p>
          <div className="space-y-2">
            {[
              'Consent and capacity: elderly people with dementia may not be able to meaningfully consent to monitoring. Who decides — family members, care homes, local authorities? And what happens when their wishes conflict with safety?',
              'Dignity and identity: being cared for by a machine raises deep questions about human dignity. Many people find it dehumanising; others find it less embarrassing than depending on another person for intimate help',
              'The substitution risk: the biggest fear is that AI becomes an excuse to reduce human contact — councils cutting care visits because technology fills the gap, rather than technology supplementing adequate human care',
              'Data ownership: who owns the intimate data collected in a care setting? Can it be shared with insurers, pharmaceutical companies, or local authorities? The commercial incentives to monetise health data are significant',
              'Worker relationships: care workers often form meaningful relationships with the people they care for over months and years. Rapid staff turnover and time pressure already erode this — AI should not be deployed in ways that further commodify care',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-amber-600 dark:text-amber-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-4">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              <strong>A useful question to ask:</strong> Is a piece of AI technology being deployed because it genuinely improves quality of care, or primarily to reduce costs? The answer matters enormously for the people on the receiving end.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">What this means for care workers</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Care workers are predominantly women, many from overseas or minority ethnic backgrounds, doing physically and emotionally demanding work for low pay. How AI is deployed in social care will affect them significantly.
          </p>
          <div className="space-y-2">
            {[
              'AI documentation tools (voice-to-text for care notes) can reduce administrative burden — care workers currently spend a significant portion of their time on paperwork that could be automated',
              'Optimised scheduling and routing software can reduce wasted travel time between visits, allowing more time with service users and less exhausting commuting',
              'Data from monitoring systems can help care workers prioritise — arriving better informed about how someone has been since the last visit, rather than starting each visit from scratch',
              'There are real concerns about AI being used to monitor care workers themselves — tracking whether visits last long enough, whether tasks are being completed — in ways that feel surveillance-heavy rather than supportive',
              'Good deployment of AI in social care requires involving care workers in the design and implementation — they understand the work better than anyone and their insights make the technology better',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-900 p-6 space-y-3">
          <ReviewLaterButton lessonId="ai-and-social-care" />
          <LessonNote lessonId="ai-and-social-care" />
        </div>

        <Quiz questions={quizQuestions} lessonId="ai-and-social-care" />

        <LessonRating lessonId="ai-and-social-care" />
        <LessonFeedback lessonId="ai-and-social-care" />

        <RelatedLessons currentId="ai-and-social-care" />

        <NextLesson currentId="ai-and-social-care" />

      </div>
    </div>
  )
}
