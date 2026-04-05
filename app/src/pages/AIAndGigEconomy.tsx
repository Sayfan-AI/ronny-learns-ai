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

const LESSON_TITLE = 'AI and the gig economy'

const KEY_TAKEAWAYS = [
  'Algorithmic management means platforms like Uber and Deliveroo use AI to allocate jobs, set prices, monitor performance, and make disciplinary decisions without any human manager being involved.',
  'Surge pricing and dynamic pay are set by AI algorithms based on supply and demand in real time — workers often cannot predict their earnings, and the criteria are opaque.',
  'Automated deactivations (algorithmic sackings) have been documented across multiple platforms, where workers lose access to their account and income without explanation or human review.',
  'The 2021 UK Supreme Court ruling that Uber drivers are workers (not independent contractors) was a landmark victory — it entitles them to minimum wage, holiday pay, and pension contributions.',
  'Gig workers facing algorithmic decisions have rights to challenge them, and organisations like the IWGB and Citizens Advice can provide support.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is "algorithmic management" in the context of the gig economy?',
    options: [
      'A human manager who uses an app to communicate with workers, replacing face-to-face meetings and paper schedules',
      'The use of AI systems to allocate tasks, set pay, monitor performance, and make disciplinary decisions about workers without direct human involvement',
      'A software tool that allows gig workers to manage their own schedules, accept or decline jobs, and track their earnings in one place',
      'An HR system that processes gig worker complaints and ensures compliance with employment law across all platform types',
    ],
    correctIndex: 1,
    explanation:
      "Algorithmic management removes the human manager from day-to-day decisions about workers. On Uber, an AI decides which driver receives each ride request based on proximity, acceptance rate, and ratings. On Deliveroo, an algorithm allocates orders, sets pay rates, and monitors delivery speed. On Amazon Flex, the app tracks every package scan and flags performance issues. Workers may never interact with a human manager but face constant monitoring and evaluation by AI. Research has found this creates stress and insecurity because workers cannot predict or appeal decisions made by systems they cannot see or understand.",
    hint: 'Think about who or what is making decisions about the worker\'s tasks, pay, and performance.',
  },
  {
    question: 'How does surge pricing work on ride-hailing apps like Uber, and what is the ethical debate?',
    options: [
      'Surge pricing is a fixed premium added by Uber to all fares during evenings and weekends to compensate drivers for unsociable hours',
      'An AI algorithm monitors real-time supply (available drivers) and demand (ride requests) and raises prices automatically when demand exceeds supply — which some argue exploits passengers during emergencies',
      'Surge pricing is calculated monthly based on the previous month driver ratings and is used as a bonus for top-performing drivers in each city',
      'An AI predicts traffic conditions 24 hours in advance and applies price increases to journeys expected to take longer than average due to congestion',
    ],
    correctIndex: 1,
    explanation:
      "Surge pricing uses a real-time AI model that continuously monitors how many drivers are available versus how many users are requesting rides. When demand exceeds supply — after a concert, during a storm, or late on a Friday night — the algorithm automatically increases prices, sometimes by several times the normal fare. Proponents argue this incentivises more drivers to go online, balancing supply and demand. Critics argue it exploits people in urgent situations (stranded passengers, people fleeing danger) and is particularly harmful to lower-income users. Several cities and countries have introduced legal limits on surge pricing during declared emergencies.",
    hint: 'Think about what happens to the price when there are many more riders than drivers.',
  },
  {
    question: 'What is an "automated deactivation" and why is it controversial?',
    options: [
      'A feature that automatically ends a driver or courier shift when they have worked more than the legal maximum number of hours in a day',
      'When an AI system permanently or temporarily removes a worker from a platform based on algorithmic triggers, often without explanation or human review',
      'An automated process that deactivates a gig worker account when they fail to complete mandatory safety training by a set deadline',
      'A scheduled app update that temporarily takes workers offline to install new features and performance improvements',
    ],
    correctIndex: 1,
    explanation:
      "Automated deactivations are documented cases of workers losing access to their platform account, and therefore their income, based on algorithmic decisions — typically triggered by low ratings, complaints, or anomalies in data. Unlike being dismissed by a human employer (which requires a process, evidence, and an opportunity to respond), algorithmic deactivation can happen instantly, without explanation, and with no clear appeals process. Research by the Worker Info Exchange found that many Uber drivers were deactivated after facial recognition checks flagged a mismatch — sometimes due to poor lighting or camera quality. The lack of transparency and human oversight has been widely criticised.",
    hint: 'Think about what happens to a worker\'s account and income, and whether there is any explanation or right to appeal.',
  },
  {
    question: 'What did the 2021 UK Supreme Court ruling about Uber drivers establish?',
    options: [
      'That Uber drivers are self-employed independent contractors and are not entitled to employment rights such as minimum wage or holiday pay',
      'That Uber drivers are workers, not independent contractors, entitling them to minimum wage, holiday pay, and auto-enrolment pension contributions',
      'That Uber must pay all drivers a flat hourly rate regardless of whether they have a passenger in the car, to address the unpredictability of gig income',
      'That the algorithmic management systems used by Uber constitute unlawful discrimination and must be replaced with human managers',
    ],
    correctIndex: 1,
    explanation:
      "In February 2021, the UK Supreme Court ruled unanimously that Uber drivers are 'workers' rather than 'independent contractors'. This is significant because UK employment law recognises three categories: employees (full employment rights), workers (intermediate rights including minimum wage, holiday pay, and pension), and self-employed (no employment rights). Uber had argued drivers were self-employed. The court found that because Uber controlled the pricing, the route, and the conditions of work, drivers were in a subordinate and dependent relationship typical of workers. Following the ruling, Uber announced it would implement minimum wage guarantees for its UK drivers. The case has been influential for other gig platforms.",
    hint: 'Think about the legal category that gives workers minimum wage and holiday pay rights.',
  },
  {
    question: 'What steps can a gig worker take if they believe an algorithmic decision has been unfair?',
    options: [
      'Nothing can be done — algorithms operate automatically and companies are not required to provide any explanation for decisions made by AI systems',
      'They can request an explanation under data protection law, contact the platform complaints team, seek advice from IWGB or Citizens Advice, and if necessary pursue an Employment Tribunal claim',
      'They can only appeal by requesting a re-assessment from the same algorithm, as human managers are not permitted to override automated decisions on data protection grounds',
      'They must first collect signed statements from at least five other platform workers who experienced the same issue before any appeal can be considered',
    ],
    correctIndex: 1,
    explanation:
      "Under the UK GDPR, people have the right to not be subject to solely automated decisions that significantly affect them without human review. They can request an explanation of how the decision was made and ask for a human to review it. Gig workers can submit a Subject Access Request to understand what data the platform holds about them. The Worker Info Exchange has helped Uber drivers obtain their personal data, revealing how performance scores are calculated. The IWGB (Independent Workers Union of Great Britain) provides legal support to gig workers. Citizens Advice has guides on gig worker rights. Employment Tribunals can hear claims about unfair treatment, including algorithmic deactivation.",
    hint: 'Think about both data protection rights and employment law routes.',
  },
]

export function AIAndGigEconomy() {
  useMarkVisited('ai-and-gig-economy')

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F6F4;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and the gig economy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Algorithmic management, surge pricing, automated deactivations, facial
            recognition clock-ins, and the legal battle for gig worker rights.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-gig-economy" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The gig economy in the UK</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The gig economy refers to work arranged through digital platforms — Uber, Deliveroo, TaskRabbit, Amazon Flex, Fiverr, Upwork. Workers are typically classified as self-employed and work flexible hours for multiple clients. AI is central to how these platforms operate.
          </p>
          <div className="space-y-2">
            {[
              'Around 4.4 million people in the UK worked in the gig economy at least once a week in 2022 — about 14% of working adults',
              'Food delivery platforms like Deliveroo and Uber Eats experienced 300-400% growth during the COVID-19 pandemic',
              'The majority of gig workers report using platforms as a supplement to other income — but for around 30%, it is their main source of earnings',
              'Gig workers tend to earn less per hour than traditional employees in comparable roles and have no sick pay, holiday pay, or pension without legal action',
              'Platform companies have argued their workers are independent contractors — a classification that avoids the cost of employment rights',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Algorithmic management — work without a human boss</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Traditional employment involves a human manager setting tasks, monitoring performance, and making decisions. In the gig economy, all of these functions are handled by AI.
          </p>
          <div className="space-y-3">
            {[
              { icon: '&#x1F697;', label: 'Job allocation', text: 'Algorithms decide in real time which driver or courier receives each job request, weighing proximity, acceptance rate, ratings, and time since last job. Workers have no say in which jobs they receive.' },
              { icon: '&#x1F4CA;', label: 'Performance monitoring', text: 'Every delivery speed, every rating, every cancellation is logged and fed into performance scores. Workers are often evaluated against benchmarks they cannot see, and automated warnings or restrictions are applied when scores fall below thresholds.' },
              { icon: '&#x26A0;&#xFE0F;', label: 'Disciplinary decisions', text: 'Automated systems flag unusual patterns — too many cancellations, inconsistent GPS data, complaints from customers — and can trigger warnings, earnings restrictions, or account deactivations without any human reviewing the specific case.' },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">{label}</p>
                  <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-yellow-100 dark:border-yellow-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Surge pricing — variable pay set by an algorithm</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Gig workers often cannot predict their earnings because platform AI sets pay rates dynamically based on real-time supply and demand.
          </p>
          <div className="space-y-2">
            {[
              'Uber surge pricing can multiply base fares by 5x or more when demand spikes after events or during storms',
              'Deliveroo uses "zone fee" pricing that adjusts courier pay based on how many couriers are available in an area at any given moment',
              'Workers who rely on high-demand periods for their income find these windows unpredictable and hard to plan around',
              'Platforms argue surge pricing increases earnings for workers during busy periods and incentivises more workers to go online',
              'Critics argue it exploits vulnerable passengers during emergencies and creates extreme income unpredictability for workers',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-yellow-600 dark:text-yellow-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Automated deactivations — the algorithmic sacking</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Losing access to a platform means losing your income. When it happens without explanation or human review, it is one of the most criticised aspects of algorithmic management.
          </p>
          <div className="space-y-3">
            {[
              { label: 'How it happens', detail: 'Automated systems trigger deactivation when performance scores fall below thresholds, when a customer complaint is logged, or when fraud detection flags a pattern. The worker is notified by app notification — often with no explanation of which rule was triggered or what evidence was used.' },
              { label: 'Facial recognition deactivations', detail: 'Uber requires drivers in the UK to pass periodic facial recognition identity checks through the app. The Worker Info Exchange found that many drivers were deactivated when the AI check failed — sometimes due to poor lighting, a new beard, or a camera quality issue. Black drivers reported higher false positive rates.' },
              { label: 'The right to a reason', detail: "Under UK GDPR, people have the right to request human review of automated decisions that significantly affect them. The Worker Info Exchange has helped workers obtain Subject Access Requests from Uber to understand how their data was used — in some cases revealing deactivations based on flawed or incomplete data." },
            ].map(({ label, detail }) => (
              <div key={label} className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5">&#x1F6AB;</span>
                <div>
                  <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">{label}</p>
                  <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Worker rights — what the law says</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The legal landscape for gig workers has shifted significantly. The 2021 Supreme Court ruling on Uber was a landmark moment.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x2696;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">The Supreme Court ruling (2021)</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">In February 2021, the UK Supreme Court ruled unanimously that Uber drivers are "workers" not independent contractors. This entitles them to minimum wage, holiday pay, and auto-enrolment pension contributions. Following the ruling, Uber implemented minimum wage guarantees for UK drivers and began paying them holiday pay.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F91D;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Where to get help</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">The IWGB (Independent Workers Union of Great Britain) organises and provides legal support to gig workers. Citizens Advice has guides on gig worker rights. The Worker Info Exchange helps workers obtain their personal data from platforms and understand how algorithms affect them. Employment Tribunals can hear claims about algorithmic deactivation and unfair treatment.</p>
              </div>
            </div>
          </div>
        </div>

        <LessonNote lessonId="ai-and-gig-economy" />

        <Quiz questions={quizQuestions} lessonId="ai-and-gig-economy" />

        <ReviewLaterButton lessonId="ai-and-gig-economy" />

        <LessonRating lessonId="ai-and-gig-economy" />

        <LessonFeedback lessonId="ai-and-gig-economy" />

        <RelatedLessons currentId="ai-and-gig-economy" />

        <NextLesson currentId="ai-and-gig-economy" />

      </div>
    </div>
  )
}
