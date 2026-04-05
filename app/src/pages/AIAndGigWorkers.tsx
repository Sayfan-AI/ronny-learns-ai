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

const LESSON_TITLE = 'AI and gig workers'

const KEY_TAKEAWAYS = [
  'Algorithmic management means the AI decides who gets work, assigns jobs, monitors performance, and can deactivate accounts — often with no human reviewing these decisions, making it very hard for workers to challenge them.',
  'Uber, Deliveroo, and Amazon Flex all use AI scoring systems that combine customer ratings, acceptance rates, and completion rates to determine how much work a driver or courier receives.',
  'In 2021, the UK Supreme Court ruled that Uber drivers are workers (not self-employed) — entitled to minimum wage, holiday pay, and workers\' rights. This was a landmark ruling that changed how platforms must treat their UK workforce.',
  'Under UK GDPR, gig workers have the right to request an explanation of algorithmic decisions that significantly affect them — such as account deactivation or a sudden drop in work allocation.',
  'Facial recognition identity checks used by some platforms have been shown to have higher error rates for darker-skinned faces, leading to wrongful deactivations — disproportionately affecting Black and Asian gig workers.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is "algorithmic management" in the context of gig work platforms?',
    options: [
      'A software system that helps gig workers manage their own schedules by suggesting the best times to work based on demand forecasts',
      'The use of AI systems to assign work, monitor performance, set prices, and deactivate accounts — replacing traditional human management decisions',
      'A legal framework that defines how platforms must manage their algorithms to comply with UK employment law',
      'An approach where workers and platforms jointly manage the algorithm, with worker representatives having a vote on how the AI is configured',
    ],
    correctIndex: 1,
    explanation:
      "On platforms like Uber, Deliveroo, and Amazon Flex, traditional management functions — scheduling, supervision, performance review, discipline — are performed by algorithms rather than humans. The AI decides which driver gets offered a ride, monitors how quickly couriers pick up orders, calculates performance scores from dozens of signals, and can automatically suspend or deactivate an account if scores fall below a threshold. A worker who is deactivated often has no human manager to appeal to — they face an AI decision with limited transparency about why it was made or how to challenge it. This is algorithmic management: management by software at scale, without the interpersonal relationship that traditionally allowed workers to explain their circumstances.",
    hint: 'Think about who (or what) makes the decisions about your work on a platform like Uber.',
  },
  {
    question: 'How do gig platform rating systems affect the work workers receive?',
    options: [
      'Customer ratings are purely advisory and do not affect how much work a driver or courier receives — they only appear on the worker\'s public profile',
      'AI combines customer ratings with acceptance rates, completion rates, and other signals into a performance score — workers with lower scores receive less work or face deactivation',
      'All drivers and couriers receive exactly the same work allocation regardless of ratings, as platforms must treat workers equally under UK equality law',
      'Rating systems only affect pay — a higher-rated driver earns more per trip, but all drivers receive the same number of trip offers',
    ],
    correctIndex: 1,
    explanation:
      "Gig platform rating systems are much more consequential than they appear. On Uber, a driver's star rating (averaged from customer reviews) must stay above a certain threshold — typically around 4.6 to 4.7 stars — or the driver faces deactivation. But ratings feed into a broader algorithmic scoring system alongside: acceptance rate (how often you accept offered rides), cancellation rate, and completion rate. These scores collectively determine how much work the AI offers you, where you appear in the dispatch queue, and whether you qualify for bonuses. A couple of unfair 1-star reviews — from a passenger having a bad day, or a delivery that went wrong through no fault of the worker — can have outsized effects on someone's livelihood. Many workers describe feeling constantly monitored and unable to maintain their score without working excessive hours.",
    hint: 'Think about how a star rating connects to your financial security on the platform.',
  },
  {
    question: 'What did the UK Supreme Court rule in the 2021 Uber v Aslam case?',
    options: [
      'Uber drivers are self-employed contractors with no employment rights — confirming Uber\'s original classification of their workforce',
      'Uber drivers are workers (not self-employed), entitled to minimum wage, holiday pay, and other employment protections under UK law',
      'Uber must give drivers the right to vote on algorithm changes that affect their earnings and working conditions',
      'Algorithmic management is illegal in the UK and Uber must replace its dispatch system with a human management team',
    ],
    correctIndex: 1,
    explanation:
      "In February 2021, the UK Supreme Court unanimously ruled that Uber drivers are 'workers' — a legal category between self-employed and full employees that grants important protections. The court found that Uber sets the terms of the work (prices, service standards, the contract with passengers), controls the information available (drivers cannot see the destination before accepting), and can terminate the relationship (deactivate the account). This meant drivers were not genuinely independent and were entitled to: the National Living Wage for time spent waiting for and completing rides, paid holiday entitlement of 5.6 weeks per year, and protection under the Working Time Regulations. The ruling was a landmark for gig economy workers and prompted similar challenges in other sectors.",
    hint: 'Think about employment status — self-employed, worker, or employee — and what rights each brings.',
  },
  {
    question: 'What right do gig workers have under UK GDPR regarding algorithmic decisions?',
    options: [
      'The right to have all algorithmic decisions affecting them reviewed by a senior Uber or Deliveroo manager within 48 hours of being made',
      'The right to request a meaningful explanation of significant automated decisions affecting them, and to contest decisions made purely by automated means',
      'The right to access the full source code of the algorithm that manages their account, so they can understand exactly how their score is calculated',
      'There are no specific UK GDPR rights for gig workers — data protection law only covers consumer data, not employment relationships',
    ],
    correctIndex: 1,
    explanation:
      "Article 22 of UK GDPR gives individuals the right not to be subject to a decision based solely on automated processing if that decision significantly affects them. This includes the right to request human review and to obtain a meaningful explanation of the logic involved. For gig workers, this covers decisions like account deactivation, suspension, or significant changes to work allocation. In practice, exercising this right is difficult — platforms often describe algorithmic decisions in vague terms that do not provide genuine insight. The Information Commissioner's Office (ICO) has published guidance emphasising that companies must be able to explain their automated decisions in plain language. Workers who believe they have been wrongly deactivated can raise a formal subject access request (SAR) and a request for human review.",
    hint: 'Think about the right to understand and challenge decisions that an AI makes about you.',
  },
  {
    question: 'How has facial recognition identity verification on gig platforms created unfair outcomes for some workers?',
    options: [
      'The technology works perfectly for all skin tones and ethnicities — any unfair outcomes are due to fraudulent use of the platform, not the technology itself',
      'AI facial recognition systems have higher error rates for darker-skinned faces, leading to wrongful identity verification failures and account deactivations affecting Black and Asian workers disproportionately',
      'Facial recognition has been banned from all UK gig economy platforms following ICO enforcement action in 2022',
      'Platforms use facial recognition only to match workers to their profile photo at sign-up and do not use it for ongoing identity verification',
    ],
    correctIndex: 1,
    explanation:
      "Several gig platforms use real-time ID verification checks where workers are asked to take a selfie that the AI compares to their profile photo — to confirm the registered driver is the one currently working. Multiple academic studies and the US National Institute of Standards and Technology (NIST) have found that commercial facial recognition systems have significantly higher error rates for people with darker skin tones, particularly darker-skinned women. On gig platforms, a failed identity check triggers account suspension. This means Black and Asian workers are failing these checks at higher rates than white workers, through no fault of their own — losing income while the wrongful deactivation is resolved. In 2021, Uber was investigated in the UK after reports of disproportionate impact on drivers from minority ethnic backgrounds.",
    hint: 'Think about who is most affected when AI makes consistent errors in identity verification.',
  },
]

export function AIAndGigWorkers() {
  useMarkVisited('ai-and-gig-workers')

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F6F5;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and gig workers
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Algorithmic management, Uber and Deliveroo driver scoring, the 2021 Supreme Court ruling,
            facial recognition failures, and what UK law says about your rights.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-gig-workers" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Algorithmic management — managed by software</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Traditional employment has a manager — someone you can speak to, explain your circumstances to,
            and appeal decisions to. On gig platforms, that manager is an AI.
          </p>
          <div className="space-y-3">
            {[
              { icon: '&#x1F697;', name: 'Uber', detail: 'The app decides which driver to assign based on proximity, rating, and acceptance history. It sets the fare, monitors the journey, and scores the driver after each trip. A driver who falls below a rating threshold receives a warning and ultimately faces deactivation — all algorithmically.' },
              { icon: '&#x1F6B2;', name: 'Deliveroo', detail: 'Couriers are scored on delivery speed, acceptance rate, and customer ratings. Higher-scoring couriers get priority access to more orders and better areas. The algorithm decides who to contact first when an order needs fulfilling.' },
              { icon: '&#x1F4E6;', name: 'Amazon Flex', detail: 'Drivers bid for delivery blocks via an app. The algorithm decides who gets offered blocks based on their completion rate, quality scores, and "on-time arrival" rates. Workers with lower scores see fewer block opportunities — making it impossible to earn a living wage even if they want to work more.' },
            ].map(({ icon, name, detail }) => (
              <div key={name} className="flex gap-3 items-start bg-amber-50 dark:bg-amber-950/30 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm mb-0.5">{name}</p>
                  <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The rating trap — when customers hold your livelihood</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Customer star ratings feel trivial when you give them. For the worker receiving them,
            they can mean the difference between making a living or losing their account.
          </p>
          <div className="space-y-2">
            {[
              'Uber requires drivers to maintain typically 4.6+ stars (out of 5) or risk losing their account — two unfair 1-star ratings per week can threaten this threshold',
              'Deliveroo and Uber Eats couriers face similar score requirements, but have limited ability to explain if a low rating came from a restaurant delay or an inaccurate GPS address',
              'Many platforms do not show workers which specific trips or deliveries led to low ratings — making it impossible to identify or dispute unfair reviews',
              'Workers with more unusual-sounding names or in certain postcodes report anecdotally receiving lower ratings due to customer bias — the algorithm has no mechanism to detect or correct for this',
              'Research by the Worker Info Exchange found that Uber drivers in London had no meaningful way to understand why their score had changed, or to request human review of their performance assessment',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5 flex-shrink-0">&#x26A0;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The law — what gig workers are entitled to in the UK</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            A series of legal rulings and regulations have strengthened the position of gig workers in the UK.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x2696;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Uber v Aslam (Supreme Court, 2021)</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">The UK Supreme Court ruled unanimously that Uber drivers are "workers" — a category between employee and self-employed. This entitles them to: National Living Wage (for time spent online waiting for trips, not just during trips), 5.6 weeks paid holiday per year, and protection from unlawful deduction of wages. Uber now pays drivers accordingly in the UK.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F6E1;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">UK GDPR rights for gig workers</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Under UK GDPR Article 22, workers have the right to: (1) not be subject to a decision made purely by automated means that significantly affects them, (2) request human review of such a decision, and (3) obtain a meaningful explanation of the reasoning. For gig workers, this covers account deactivation and significant scoring changes. File a Subject Access Request (SAR) to exercise these rights.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4DE;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Where to get help</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">The Independent Workers Union of Great Britain (IWGB) represents gig economy workers and has brought legal cases against Uber, Deliveroo, and others. The Worker Info Exchange (workerinfoexchange.org) helps gig workers use data protection law to get information from platforms about their algorithmic scoring. ACAS provides free advice on employment rights.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The future — will AI replace gig work itself?</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The same companies whose workers are fighting for rights are also investing heavily in automating the work itself.
          </p>
          <div className="space-y-2">
            {[
              'Uber is investing billions in autonomous vehicles — the long-term plan is self-driving taxis with no driver to pay at all',
              'Amazon uses robots in its warehouses and is trialling autonomous delivery vehicles and drones for the final-mile delivery that Flex drivers currently do',
              'Deliveroo has trialled Starship autonomous pavement robots for deliveries in London and Cambridge',
              'In sectors where margins are thin and routes are predictable, full automation within the next 10-15 years is technically plausible',
              'However, complex urban environments, irregular addresses, customer interaction needs, and regulatory hurdles mean full replacement is not imminent for most gig roles',
              'The likely near-term outcome is a hybrid: AI manages more of the work, handles simpler tasks autonomously, and human gig workers handle the complex or irregular situations',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mt-0.5 flex-shrink-0">&#x2022;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <LessonNote lessonId="ai-and-gig-workers" />

        <Quiz lessonId="ai-and-gig-workers" questions={quizQuestions} />

        <RelatedLessons currentId="ai-and-gig-workers" />

        <LessonRating lessonId="ai-and-gig-workers" />
        <LessonFeedback lessonId="ai-and-gig-workers" />
        <ReviewLaterButton lessonId="ai-and-gig-workers" />
        <NextLesson currentId="ai-and-gig-workers" />
      </div>
    </div>
  )
}
