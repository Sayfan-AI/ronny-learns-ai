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
import { DifficultyBadge } from '../components/DifficultyBadge'

const LESSON_TITLE = 'AI and volunteering'

const KEY_TAKEAWAYS = [
  'AI-powered matching platforms like Do-it.org help connect volunteers to opportunities based on their skills, location, and availability — improving retention on both sides.',
  'Charities and emergency services use AI to coordinate spontaneous volunteers during crises, matching offers of help with urgent needs in real time.',
  'Predicting volunteer demand — such as a surge at a food bank before Christmas — helps organisations plan ahead rather than scrambling when need spikes.',
  'The ethical risks include algorithmic bias in matching (some volunteers or causes may be systematically under-represented) and data privacy for people in vulnerable situations.',
  'As a volunteer, you have the right to ask how your personal data is used and whether AI influences which opportunities you are shown or how you are assessed.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How do AI volunteer matching platforms improve on traditional job boards for volunteers?',
    options: [
      'They replace human volunteer coordinators entirely with automated systems, cutting charity staffing costs significantly',
      "They surface opportunities most likely to match a volunteer's skills, location, and availability — reducing frustration and increasing the chance of a lasting commitment",
      'They require volunteers to pass an AI-assessed competency test before being matched with any role',
      'They prioritise volunteers who have completed the most hours in the past, regardless of skills or availability',
    ],
    correctIndex: 1,
    explanation:
      "Traditional volunteer listings present every role to every volunteer — meaning someone with legal expertise scrolls past dozens of manual labour opportunities, and vice versa. AI matching platforms analyse what a volunteer tells the platform (skills, postcode, days available, interests) and surface the roles most likely to resonate. Platforms like Do-it.org use this approach to improve both satisfaction — volunteers find roles they enjoy — and retention — they are more likely to come back. The key insight is that a well-matched volunteer is not just happier; they also do more for the charity over time.",
    hint: 'Think about what makes a job application frustrating compared to a personalised recommendation.',
  },
  {
    question: 'What role does AI play in emergency and disaster volunteering?',
    options: [
      'AI replaces volunteer coordinators during emergencies, making all decisions about resource allocation automatically without human oversight',
      'AI helps coordinate spontaneous volunteers by matching offers of help — vehicles, skills, accommodation — with urgent requests in real time during a crisis',
      'AI is not used in emergency volunteering because crises are too unpredictable for algorithmic tools to handle effectively',
      'AI only helps with post-disaster reporting and has no role in the coordination of live emergency responses',
    ],
    correctIndex: 1,
    explanation:
      "When a flood, earthquake, or other disaster occurs, thousands of well-meaning people often show up to help — but without coordination, this can actually make things worse (roads blocked, resources duplicated, skilled people underused). AI-assisted coordination platforms — used by organisations including the Red Cross, St John Ambulance, and local resilience forums — help match what is available (a lorry driver, a spare room, a nurse) with what is needed (evacuation transport, temporary shelter, first aid) in real time. During UK flooding events, voluntary coordination hubs have used these tools to turn a chaotic wave of goodwill into effective, targeted support.",
    hint: 'Think about what happens when hundreds of volunteers arrive at the same place at the same time without a plan.',
  },
  {
    question: 'What is demand prediction in volunteering, and why does it matter?',
    options: [
      'Demand prediction forecasts how many volunteers a charity will lose to burnout in the coming year, allowing recruitment to be planned accordingly',
      'Demand prediction uses historical data to forecast when volunteer need will spike — such as food banks before Christmas — so organisations can recruit and train in advance',
      'Demand prediction is a legal requirement for charities with more than 50 volunteers under the Charities Act 2022',
      'Demand prediction analyses social media to identify which types of volunteering are trending, helping charities compete for volunteers',
    ],
    correctIndex: 1,
    explanation:
      "Charities often face a mismatch: need peaks at predictable times (food banks before Christmas and Easter, hospices during winter, disaster relief after floods) but volunteer recruitment and training takes time. AI demand prediction tools analyse historical patterns — how many referrals did this food bank receive in November last year? How did volunteer hours change during the pandemic? — and forecast when and where volunteer capacity will be needed. This allows charities to recruit and train people weeks or months before the need arrives, rather than posting urgent appeals on Christmas Eve. Organisations using predictive staffing report fewer gaps in coverage and better volunteer experience.",
    hint: 'Think about what a charity would want to know months before a predictable busy period.',
  },
  {
    question: 'What is the most important ethical concern about AI-assisted volunteer matching?',
    options: [
      'AI matching is always perfectly fair because algorithms cannot hold personal prejudices the way humans sometimes do',
      'AI systems trained on historical matching data may replicate past biases — for example, consistently recommending skilled or highly educated volunteers to prestigious roles while directing others elsewhere',
      'The only ethical concern is data security — as long as volunteer data is kept safe, AI matching raises no other ethical issues',
      'AI matching systems are illegal under UK employment law because they treat volunteering as a form of work subject to discrimination law',
    ],
    correctIndex: 1,
    explanation:
      "If an AI matching system is trained on historical data that reflects past patterns — perhaps skilled professionals were historically matched with high-profile roles, while people with lower qualifications were matched only with manual tasks — the AI will learn and perpetuate those patterns. This matters because it can reinforce social inequalities rather than helping charities access diverse, underused talent. It also affects beneficiaries: if AI influences which communities are prioritised for volunteer support, biased training data can mean already-underserved groups receive less help. Good practice includes auditing matching outcomes for bias, involving diverse voices in system design, and always keeping a human coordinator in the loop for complex or sensitive placements.",
    hint: 'Think about what happens when a system learns from historical data that itself reflects unfair patterns.',
  },
]

export function AIAndVolunteering() {
  useMarkVisited('ai-and-volunteering')

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F91A;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and volunteering
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI is transforming the way charities match helpers, predict need, coordinate
            emergency response — and the ethical questions it raises for volunteers.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-volunteering" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Volunteering in the UK</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The UK has one of the strongest volunteering cultures in the world. Around 20 million
            people volunteer formally at least once a year, contributing an estimated 1.9 billion
            hours of unpaid work. From hospices to food banks, from sports clubs to disaster relief,
            volunteers are the backbone of enormous swathes of civic life.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            But the traditional systems for matching people to opportunities — paper forms, phone
            calls, local notice boards, and spreadsheets — have not kept pace with the scale of
            modern volunteering or the expectations of people used to apps that instantly connect
            them with what they need. AI is beginning to change that.
          </p>
          <div className="bg-emerald-50 dark:bg-emerald-950 rounded-xl p-4">
            <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
              <strong>By the numbers:</strong> The National Council for Voluntary Organisations
              (NCVO) estimates that effective volunteer matching — placing the right person in the
              right role — can increase volunteer retention by up to 40%. Poor matching is the
              single biggest reason volunteers disengage in their first three months.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI-powered volunteer matching</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The most visible use of AI in volunteering is matching — connecting people with
            opportunities that fit their skills, availability, and interests. Platforms like
            <strong> Do-it.org</strong> (the UK's largest volunteering database) and
            <strong> Volunteering Matters</strong> now use machine learning to surface relevant
            opportunities rather than presenting every listing to every user.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F3AF;',
                label: 'Skills matching',
                text: "AI analyses a volunteer's stated skills and experience alongside role requirements. A retired nurse might be surfaced opportunities requiring health knowledge; a web developer might see digital roles for charities that need technical help but cannot afford to hire it.",
                color: 'blue',
              },
              {
                icon: '&#x1F4CD;',
                label: 'Location and availability',
                text: 'Matching algorithms factor in postcode, transport links, and stated availability. Someone who can only volunteer on Tuesday evenings in a specific area will only see realistic opportunities — not a list of roles that would require a two-hour commute.',
                color: 'blue',
              },
              {
                icon: '&#x2764;&#xFE0F;',
                label: 'Interest and values alignment',
                text: "Beyond practicalities, AI can learn from a volunteer's browsing behaviour and saved opportunities — noticing patterns like a preference for outdoor roles, or a consistent interest in animal welfare — and weight future recommendations accordingly.",
                color: 'blue',
              },
            ].map(({ icon, label, text, color }) => (
              <div key={label} className={`flex gap-3 items-start bg-${color}-50 dark:bg-${color}-950 rounded-xl p-3`}>
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className={`font-semibold text-${color}-800 dark:text-${color}-200 text-sm mb-0.5`}>{label}</p>
                  <p className={`text-${color}-700 dark:text-${color}-300 text-sm leading-relaxed`}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Predicting volunteer demand</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            One of the most practical applications of AI in volunteering is demand forecasting —
            using historical data to predict when and where volunteer capacity will be needed,
            so organisations can recruit and train people in advance.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Food banks see predictable spikes before Christmas, Easter, and when benefit payment
            schedules change. Hospices need more volunteer support during winter. Disaster relief
            organisations need to scale rapidly after a flood or storm. Without forecasting,
            charities react to crises rather than preparing for them.
          </p>
          <div className="bg-orange-50 dark:bg-orange-950 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-orange-800 dark:text-orange-200 text-sm">Real example: The Trussell Trust</p>
            <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">
              The Trussell Trust — which runs over 1,300 food bank outlets across the UK — has
              used data modelling to forecast demand at individual outlets, allowing regional
              coordinators to recruit volunteers and source food stock ahead of peak periods
              rather than issuing emergency appeals when shelves are already empty.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI in emergency and crisis volunteering</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Perhaps the most dramatic use of AI in volunteering is in emergency response — where
            AI-assisted coordination platforms help turn a chaotic wave of public goodwill into
            structured, effective action.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            When a major flood, fire, or other disaster strikes, thousands of people want to help —
            but without coordination, this surge can be counterproductive. Roads get blocked by
            well-meaning volunteers. Resources are duplicated in some areas and absent in others.
            Skilled people are used for manual tasks while manual workers sit idle.
          </p>
          <div className="space-y-2">
            {[
              'Red Cross and St John Ambulance both use digital coordination tools for large-scale incidents — matching trained first-aiders, drivers, and logistics support to operational needs.',
              'During the 2020-2021 UK flooding, voluntary sector coordination hubs used AI-assisted platforms to match boat owners, lorry drivers, and accommodation providers with evacuation needs.',
              'NHS Volunteer Responders — launched during COVID-19 — used an AI-enhanced platform to match 750,000 registered volunteers with patient needs within 48 hours of launch.',
              'The Voluntary and Community Sector Emergency Network (VCSEN) now provides AI-assisted coordination resources to local authorities for civil contingency planning.',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Ethics and fairness in volunteer AI</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI in volunteering raises important ethical questions — ones that the sector is still
            working through.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x2696;&#xFE0F;',
                label: 'Algorithmic bias in matching',
                text: 'If a matching system is trained on historical data, it may replicate past patterns — for example, consistently directing highly qualified volunteers to prestigious roles while channelling others toward manual tasks. This can reinforce social inequalities rather than democratising access to meaningful volunteering.',
                color: 'purple',
              },
              {
                icon: '&#x1F512;',
                label: 'Data privacy for volunteers',
                text: "Volunteering platforms hold information about people's skills, health conditions, criminal record disclosures (required for work with children or vulnerable adults), and availability. Volunteers have UK GDPR rights over this data, including the right to access, correct, and delete it.",
                color: 'purple',
              },
              {
                icon: '&#x1F9D1;&#x200D;&#x1F4BC;',
                label: 'Beneficiary fairness',
                text: 'If AI influences which communities receive volunteer support — for instance, by routing volunteers to areas deemed more accessible or more likely to generate positive feedback — this can systematically disadvantage the communities that need support most.',
                color: 'purple',
              },
            ].map(({ icon, label, text, color }) => (
              <div key={label} className={`flex gap-3 items-start bg-${color}-50 dark:bg-${color}-950 rounded-xl p-3`}>
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className={`font-semibold text-${color}-800 dark:text-${color}-200 text-sm mb-0.5`}>{label}</p>
                  <p className={`text-${color}-700 dark:text-${color}-300 text-sm leading-relaxed`}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">What you can do as a volunteer</h2>
          <div className="space-y-2">
            {[
              'Ask volunteering platforms how your personal data is used and who it is shared with — you have the right to a Subject Access Request under UK GDPR.',
              'Ask whether AI or algorithms influence which opportunities you are shown, and whether there is a way to give feedback if matches feel consistently off.',
              'If you are asked to complete an AI-assessed application (e.g. a video interview analysed by AI), ask the charity about the process and your right to human review of the outcome.',
              'Check whether platforms you use have a published data or AI policy — reputable organisations should be transparent about their tools.',
              'If you feel a matching decision is unfair, raise it with the volunteer coordinator — human oversight should always be available for complex placements.',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-amber-600 dark:text-amber-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-volunteering" />

        <Quiz lessonId="ai-and-volunteering" questions={quizQuestions} />

        <LessonNote lessonId="ai-and-volunteering" />

        <LessonRating lessonId="ai-and-volunteering" />

        <LessonFeedback lessonId="ai-and-volunteering" />

        <RelatedLessons currentId="ai-and-volunteering" />

        <NextLesson currentId="ai-and-volunteering" />

        <CompletedBadge lessonId="ai-and-volunteering" />

      </div>
    </div>
  )
}
