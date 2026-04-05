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
  'Gig economy platforms like Uber, Deliveroo, and TaskRabbit use AI to allocate jobs, set prices, track performance, and make disciplinary decisions — replacing the traditional human manager with an algorithm.',
  'Surge pricing uses AI to calculate fares in real time based on demand and available drivers — prices can multiply several times over during busy periods, making earnings unpredictable for workers.',
  'Automated deactivations — being algorithmically "fired" without explanation — are a documented reality for drivers and couriers. Legal battles have established the right to explanation and appeal in some countries.',
  'Facial recognition clock-ins are used by Uber and others to verify driver identity before each shift, raising significant privacy concerns about how biometric data is stored and used.',
  'The 2021 UK Supreme Court ruling that Uber drivers are workers, not independent contractors, was a landmark moment for gig economy rights — guaranteeing minimum wage, holiday pay, and pension contributions.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does "algorithmic management" mean in the gig economy?',
    options: [
      'A system where workers vote using an app to decide which jobs get listed on the platform each day',
      'AI software that allocates jobs, monitors performance, sets pay rates, and enforces rules without a human manager making those individual decisions',
      'A scheduling tool that helps couriers plan their own routes and working hours based on their personal preferences',
      'A government-run algorithm that regulates the number of gig workers on each platform to prevent oversupply',
    ],
    correctIndex: 1,
    explanation:
      'In traditional employment, a manager decides who gets which shifts, monitors how well people are doing, sets performance targets, and handles discipline. On gig platforms, all of those decisions are made by AI. The algorithm determines which delivery appears on your screen, times your arrival, rates your performance, and can issue warnings or deactivations — all without a human being involved in any individual decision. For the worker, the effect is similar to having a manager, but one who never explains their reasoning and cannot be reasoned with.',
    hint: 'Think about who or what makes the day-to-day decisions about work — assigning jobs, monitoring performance, enforcing rules.',
  },
  {
    question: 'How does surge pricing work on platforms like Uber?',
    options: [
      'Drivers vote to raise prices when they feel demand is high enough to justify it, and the platform adds a fixed platform fee on top',
      'AI calculates real-time supply and demand — when many people want rides but few drivers are available, the price multiplies automatically to attract more drivers',
      'Prices are set once a week by the platform pricing team based on the previous week\'s demand data',
      'The surge is triggered manually by local operations managers who monitor the app and push a button when they see queues forming',
    ],
    correctIndex: 1,
    explanation:
      'Surge pricing uses AI to continuously monitor two things: how many people are requesting rides, and how many drivers are currently available. When demand significantly exceeds supply — say, after a concert ends or during a storm — the algorithm multiplies the base fare to incentivise off-duty drivers to turn on the app. This can make fares two, three, or even eight times higher in extreme cases. Economists argue it efficiently clears the market; critics argue it exploits passengers in urgent situations and makes driver earnings unpredictable.',
    hint: 'Think about supply and demand being monitored in real time, with prices adjusting automatically.',
  },
  {
    question: 'What is an "automated deactivation" in the context of gig work?',
    options: [
      'When a driver\'s car fails its annual MOT and they are temporarily removed from the platform until it passes',
      'When the algorithm removes a worker\'s access to the platform — effectively dismissing them — based on performance metrics, without a human reviewing the individual case',
      'When a driver voluntarily pauses their account during a holiday and the app automatically deactivates their profile',
      'When the platform temporarily suspends all workers in a city because of a technical outage or regulatory investigation',
    ],
    correctIndex: 1,
    explanation:
      'Multiple legal cases in the UK, US, and Europe have documented drivers and couriers being removed from platforms without warning, often after their acceptance rate dropped below a threshold, a customer complaint triggered an automated flag, or their rating fell. Because there is no human manager involved, workers cannot appeal to a person — they submit a form and wait. Some have been wrongly deactivated due to errors. Courts in the UK have found that gig workers have the right to understand why decisions were made about them, under data protection law — but enforcing this right remains difficult in practice.',
    hint: 'Think about what it means to be dismissed — but by an algorithm rather than a human manager.',
  },
  {
    question: 'What did the UK Supreme Court rule about Uber drivers in February 2021?',
    options: [
      'That Uber drivers are self-employed independent contractors with full responsibility for their own tax, insurance, and equipment costs',
      'That Uber drivers are workers — a category between employed and self-employed — entitled to minimum wage, holiday pay, and pension contributions',
      'That Uber drivers are full employees with the same rights as a permanent staff member, including unfair dismissal protection from day one',
      'That Uber drivers are classified differently depending on how many hours per week they work, with those working under 20 hours counted as self-employed',
    ],
    correctIndex: 1,
    explanation:
      'In a unanimous ruling, the Supreme Court upheld earlier Employment Tribunal decisions that Uber drivers should be classified as "workers" — a category in UK employment law that sits between self-employed (no statutory rights) and employee (full rights). Workers are entitled to the national living wage for every hour logged in and waiting for rides, 28 days of paid holiday per year, and automatic enrolment in a workplace pension. Uber had argued drivers were independent contractors running their own businesses, but the Court found that Uber sets the terms, rates, and conditions — leaving drivers little meaningful control. The ruling affected tens of thousands of Uber drivers in the UK.',
    hint: 'Think about the middle category between self-employed and fully employed, and what rights it brings.',
  },
  {
    question: 'Why are facial recognition identity checks used by some gig platforms like Uber?',
    options: [
      'To build a database of driver faces that can be shared with police forces to assist with criminal investigations',
      'To verify that the person using the driver account is the registered account holder before each shift begins, preventing account sharing',
      'To analyse driver facial expressions for signs of fatigue and automatically end their shift if they show signs of sleepiness',
      'To comply with GDPR requirements that all workers on digital platforms must have their identity biometrically verified every year',
    ],
    correctIndex: 1,
    explanation:
      'Uber introduced facial identity checks that prompt drivers to take a selfie before or during their shift, then compare it to the photo on their registered account to confirm it is really them. The stated reason is safety: preventing people from letting others use their account, which could put passengers at risk. However, civil liberties groups have raised concerns about algorithmic facial recognition errors — particularly the higher error rates documented for darker skin tones — and about platforms holding biometric data. Some drivers were wrongly locked out of their accounts. UK data protection law requires that storing biometric data must meet a high bar under GDPR.',
    hint: 'Think about account security — making sure the right person is driving the car.',
  },
]

export function AIAndGigEconomy() {
  useMarkVisited('ai-and-gig-economy')

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F6F5;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and the gig economy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Algorithmic management, surge pricing, automated deactivations, and the
            fight for worker rights in the age of the app.
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
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">What is the gig economy and why does AI run it?</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The gig economy refers to work arranged through digital platforms on a task-by-task basis — driving for Uber, delivering for Deliveroo, completing jobs on TaskRabbit or Fiverr. Millions of people in the UK work this way, either as their main income or alongside other jobs.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            These platforms rely on AI for a simple reason: they operate at a scale that would require enormous numbers of human managers if done traditionally. Uber has millions of drivers and passengers globally. Manually matching riders to drivers, setting prices, monitoring performance, and handling disputes would be impossible without automation. AI makes the economics work.
          </p>
          <div className="space-y-2">
            {[
              'Around 4.4 million people in the UK worked in the gig economy in 2022, according to the Trades Union Congress (TUC)',
              'Deliveroo operates in over 200 UK cities and towns, coordinating tens of thousands of couriers using AI routing and dispatch',
              "Uber's pricing algorithm updates every few minutes, processing millions of data points to calculate fares across every city it operates in",
              'TaskRabbit uses AI to match clients with nearby workers based on skills, ratings, availability, and past job success rates',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How algorithms manage gig workers</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Traditional employment involves a manager who knows the people on their team, explains decisions, and can be approached when something goes wrong. In the gig economy, the manager is an algorithm. Here is what that looks like in practice.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CA;',
                label: 'Job allocation',
                text: "The algorithm decides which job offer appears on a worker's screen. Factors include proximity, past ratings, acceptance rate, and platform demand patterns. Two drivers in the same street may receive completely different offers depending on how their scores compare.",
                color: 'blue',
              },
              {
                icon: '&#x2B50;',
                label: 'Performance monitoring',
                text: 'Every delivery time, every acceptance, every cancellation, and every customer rating feeds into a score. The algorithm tracks these continuously. Workers are typically not shown the full formula, making it hard to know exactly what is harming their score.',
                color: 'blue',
              },
              {
                icon: '&#x26A0;&#xFE0F;',
                label: 'Automated warnings and deactivations',
                text: "When a worker's metrics fall below a threshold — too many cancellations, too low a rating, a flagged customer complaint — the algorithm issues warnings or removes access entirely. No human manager reviews the individual circumstances before this happens.",
                color: 'blue',
              },
              {
                icon: '&#x1F4B0;',
                label: 'Pay calculation',
                text: 'Hourly pay in the gig economy is rarely guaranteed. For drivers, income depends on surge pricing, distance, the number of rides, and bonuses the platform may or may not offer. The algorithm controls all of this, often in ways workers find difficult to predict.',
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

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Surge pricing — smart economics or exploitation?</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Surge pricing adjusts the cost of a ride or delivery based on supply and demand calculated in real time. It is one of the most visible — and controversial — uses of AI in the gig economy.
          </p>
          <div className="space-y-3">
            <div className="bg-amber-50 dark:bg-amber-950 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm">The case for surge pricing</p>
              <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">When demand is high and supply is low, higher prices bring more drivers onto the road — benefiting passengers who genuinely need a ride by making one available at all. Without surge pricing, after a major event, passengers might wait an hour for a ride that never comes. The algorithm solves a real coordination problem.</p>
            </div>
            <div className="bg-red-50 dark:bg-red-950 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-red-800 dark:text-red-200 text-sm">The case against surge pricing</p>
              <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">Prices can spike dramatically — 5x or more — at exactly the moment when people are most vulnerable: stuck in rain, trying to get home late at night, or leaving a hospital. The algorithm has no capacity for human judgement about whether the person paying can afford it. Workers also find income unpredictable.</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Worker rights — what the law says</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The legal status of gig workers has been contested across the world. In the UK, major court cases have established important protections.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x2696;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">The 2021 Uber Supreme Court ruling</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">The UK Supreme Court ruled unanimously that Uber drivers are "workers" — entitled to the national living wage for all time logged in, 28 days of paid holiday, and pension auto-enrolment. Uber had classified them as independent contractors, but the Court found Uber set the terms and prices, leaving drivers little real control over their work.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CE;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Right to explanation under data protection law</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Under UK GDPR, workers have the right to request information about automated decisions that significantly affect them. This means if an algorithm deactivates you, you can ask the platform to explain the decision. In practice, getting meaningful answers remains difficult — but the legal right exists.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F91D;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Where to get help</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">The Independent Workers' Union of Great Britain (IWGB) specialises in gig worker rights and has brought landmark cases. Citizens Advice can help you understand your rights. If you have been wrongly deactivated, you can bring an Employment Tribunal claim — many platforms have settled when faced with legal action.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-violet-100 dark:border-violet-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Facial recognition and biometric checks</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Some platforms require drivers to take a selfie before they can go online. The system compares the selfie to the photo on the registered account using facial recognition AI.
          </p>
          <div className="space-y-2">
            {[
              'The stated purpose is safety: preventing account sharing, where a driver lets someone else use their credentials to pick up passengers',
              'Independent research has documented that facial recognition systems have higher error rates for darker skin tones — raising concerns about discriminatory outcomes',
              'Biometric data is "special category" data under UK GDPR, which means platforms must meet a higher standard of justification for collecting and storing it',
              'Some UK drivers were wrongly locked out of their accounts due to the AI failing to match their face, temporarily losing income while the issue was resolved',
              'Privacy campaigners argue that continuous biometric verification of self-employed workers goes significantly beyond what is proportionate',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-violet-600 dark:text-violet-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <LessonNote lessonId="ai-and-gig-economy" />
        <ReviewLaterButton lessonId="ai-and-gig-economy" />

        <Quiz lessonId="ai-and-gig-economy" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-gig-economy" />
        <LessonFeedback lessonId="ai-and-gig-economy" />

        <RelatedLessons currentId="ai-and-gig-economy" />

        <NextLesson currentId="ai-and-gig-economy" />

      </div>
    </div>
  )
}
