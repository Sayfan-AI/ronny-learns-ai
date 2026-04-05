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

const LESSON_TITLE = 'AI and gig workers — the worker\'s perspective'

const KEY_TAKEAWAYS = [
  'Algorithmic management on platforms like Uber, Deliveroo, and Amazon Flex means an AI system — not a human manager — assigns work, sets rates, monitors performance, and can deactivate your account.',
  'Customer star ratings feed into AI scoring systems that can reduce a gig worker\'s access to work or deactivate them entirely, even when individual bad ratings are unfair or fraudulent.',
  'Facial recognition check-ins (used by Uber and Deliveroo for identity verification) have been found to have higher error rates for workers with darker skin tones, causing unfair deactivations.',
  'The 2021 UK Supreme Court ruling established that Uber drivers are workers (not self-employed contractors), giving them rights to minimum wage, holiday pay, and pension contributions — a landmark case with wider implications.',
  'Under UK GDPR Article 22, you have the right to request a human review of any automated decision that significantly affects you, including algorithmic deactivations.',
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'What is "algorithmic management" in the gig economy?',
    options: [
      'A human manager who uses spreadsheets to assign tasks',
      'An AI system that assigns work, monitors performance, sets pay rates, and makes disciplinary decisions without a human manager',
      'An app that helps workers organise their own shifts',
      'A government programme for managing the self-employed',
    ],
    correctIndex: 1,
    explanation:
      'Algorithmic management replaces the traditional human line manager with an AI system. This system decides who gets offered a delivery, how long they have to accept it, how their performance is measured, and whether their account should be suspended — often without any human reviewing the decision.',
  },
  {
    question: 'What right do UK gig workers have under UK GDPR when an algorithm makes a decision that significantly affects them?',
    options: [
      'The right to sue the platform automatically',
      'The right to request human review of the automated decision',
      'The right to see the platform\'s source code',
      'The right to override the algorithm\'s decision',
    ],
    correctIndex: 1,
    explanation:
      'UK GDPR Article 22 gives people the right not to be subject to solely automated decisions that have significant effects on them — and the right to request a human review. This means if an algorithm deactivates your gig account, you can request that a human looks at the decision.',
  },
  {
    question: 'What did the 2021 UK Supreme Court ruling about Uber drivers decide?',
    options: [
      'That Uber drivers are fully employed with all employment rights',
      'That Uber drivers are self-employed contractors with no employment rights',
      'That Uber drivers are "workers" — a middle category with rights including minimum wage and holiday pay',
      'That Uber was an illegal company in the UK',
    ],
    correctIndex: 2,
    explanation:
      'The Supreme Court ruled that Uber drivers are "workers" — a category between employee and self-employed that carries certain statutory rights: minimum wage, holiday pay, and pension auto-enrolment. This was a landmark ruling for the gig economy but still leaves gig workers with fewer rights than full employees.',
  },
  {
    question: 'What problem has been found with facial recognition check-in systems used by some gig platforms?',
    options: [
      'They are too slow to use on a smartphone',
      'They have higher error rates for workers with darker skin tones, causing unfair account lockouts',
      'They require workers to have a smartphone with a front-facing camera',
      'They can only work in good lighting',
    ],
    correctIndex: 1,
    explanation:
      'Multiple research studies have shown that commercially available facial recognition systems have substantially higher error rates for darker-skinned individuals. When platforms use these tools for regular identity checks, workers from certain ethnic backgrounds face more false rejections and account lockouts.',
  },
  {
    question: 'If an Uber driver receives a low customer rating unfairly, what might happen?',
    options: [
      'Nothing — ratings are only advisory and have no effect on the algorithm',
      'The platform contacts the customer to investigate the rating',
      'The AI scoring system may reduce the driver\'s access to rides or, if ratings fall below a threshold, deactivate their account',
      'The driver receives a bonus to compensate',
    ],
    correctIndex: 2,
    explanation:
      'Customer ratings feed directly into algorithmic scoring. Consistently low ratings — even if they resulted from a customer\'s bad day, a complaint about something outside the driver\'s control, or a fraudulent review — can trigger automated account deactivation. Workers often have limited ability to contest individual ratings.',
  },
]

export function AIAndGigWorkers() {
  useMarkVisited('ai-and-gig-workers')

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <LessonSeriesBadge lessonId="ai-and-gig-workers" />

      <h1 className="text-3xl font-bold text-gray-900 mb-2">{LESSON_TITLE}</h1>
      <p className="text-gray-500 text-sm mb-6">8 min read</p>

      <CompletedBadge lessonId="ai-and-gig-workers" />
      <ShareButton lessonTitle={LESSON_TITLE} />

      <KeyTakeaways points={KEY_TAKEAWAYS} />

      <div className="prose prose-gray max-w-none mt-8">

        <h2>When your manager is an algorithm</h2>
        <p>
          Millions of people in the UK earn money through gig platforms — driving for Uber, delivering for Deliveroo, assembling orders for Amazon Flex, doing tasks for TaskRabbit. What most of these workers share is that they have never met their manager. Their manager is an algorithm.
        </p>
        <p>
          This lesson focuses on what that means in practice: how the algorithm assigns work, measures performance, and holds power over your income — and what rights you have when it gets something wrong.
        </p>

        <h2>How algorithmic management works</h2>
        <p>
          Traditional employment means a human manager assigns tasks, gives feedback, and makes decisions about performance and discipline. Algorithmic management replaces most of this with automated systems.
        </p>
        <p>
          On Uber, the algorithm decides which drivers to offer each ride. It considers your location, your acceptance rate (how often you accept offered rides), your current rating, and how recently you completed a trip. On Deliveroo, a similar system assigns deliveries, sets the expected completion time, and monitors whether you meet it.
        </p>
        <p>
          These systems operate at a scale no human manager could match — making thousands of decisions per second across a city. But they also lack human judgment. The algorithm cannot know that you rejected a ride because you noticed a red flag about the passenger. It cannot know that a delivery was late because of an accident on your route. It just records that you did not meet its expectations.
        </p>

        <h2>Ratings, scoring, and the feedback loop</h2>
        <p>
          Customer ratings are central to gig platform scoring. After most completed trips or deliveries, customers are asked to rate their experience — usually out of five stars. These ratings feed into the algorithm's assessment of your performance.
        </p>
        <p>
          The problem is that individual ratings can be unfair. A customer might give a low rating because they were unhappy about the restaurant's food (nothing to do with the courier), or because the traffic made their journey slower than they expected (nothing to do with the driver), or simply because they were having a bad day. Individual unfair ratings are expected in any service industry. The concern with algorithmic management is that these ratings aggregate into a score that automatically reduces your access to work or triggers deactivation — with no human review.
        </p>
        <p>
          Uber, for example, has historically deactivated drivers whose average rating falls below a threshold (around 4.5 stars in many markets). In some cities, a driver can be deactivated after fewer than 200 trips — meaning a handful of unfair one-star ratings in a row can end someone's livelihood overnight.
        </p>

        <h2>Automated deactivation</h2>
        <p>
          Account deactivation — being locked out of the platform — is the gig economy equivalent of dismissal. For many gig workers, it means an immediate loss of income with no notice period and no redundancy payment.
        </p>
        <p>
          Deactivations can be triggered automatically by the algorithm for reasons including low ratings, a high cancellation rate, suspected violations of the platform's terms, or failed identity verification checks. Workers often receive little or no explanation of why they were deactivated, and the appeals process can be slow, opaque, and difficult to navigate.
        </p>
        <p>
          Research by the Worker Info Exchange, a UK charity, found significant numbers of gig workers who had been deactivated for reasons they could not understand, with limited access to the data the algorithm had used in its decision.
        </p>

        <LessonNote lessonId="ai-and-gig-workers" />

        <h2>Facial recognition and bias</h2>
        <p>
          Uber and Deliveroo use facial recognition technology for periodic identity verification — asking drivers and couriers to take a selfie that is matched against their profile photo. This is intended to prevent account sharing (one person registering but letting another do the work under their account).
        </p>
        <p>
          However, multiple studies have found that facial recognition systems perform significantly worse on darker skin tones. The landmark 2018 "Gender Shades" study by Joy Buolamwini found error rates up to 34% higher for darker-skinned women compared to lighter-skinned men. This bias has real consequences: workers from ethnic minority backgrounds face higher rates of failed verification checks and subsequent account lockouts.
        </p>
        <p>
          The App Drivers and Couriers Union (ADCU) in the UK has raised this issue directly with Uber and with the Information Commissioner's Office (ICO). The ICO has noted that facial recognition used in employment contexts must meet high standards under UK equality and data protection law.
        </p>

        <h2>Your rights as a gig worker</h2>
        <p>
          The 2021 UK Supreme Court ruling in the case of Uber BV v Aslam was a watershed moment. The court ruled unanimously that Uber drivers are "workers" — not self-employed contractors as Uber had argued. This gave them the right to:
        </p>
        <ul>
          <li>The National Living Wage for time spent "working" (which the court found included time when drivers had the app on and were waiting for a job)</li>
          <li>Holiday pay (28 days per year pro-rata)</li>
          <li>Auto-enrolment in a workplace pension</li>
        </ul>
        <p>
          This ruling does not apply to all gig workers automatically — each platform and arrangement must be considered individually — but it established an important precedent that platform workers are not simply customers of a technological service.
        </p>
        <p>
          Under UK GDPR Article 22, you also have the right not to be subject to a decision based solely on automated processing that significantly affects you. This means you can request that a human reviews an algorithmic deactivation or rating decision. Platforms are required to tell you when a decision has been made this way and must provide you with a meaningful way to challenge it.
        </p>

        <h2>What if the algorithm takes the work entirely?</h2>
        <p>
          Autonomous delivery vehicles, drones, and self-driving taxis all threaten the gig work that millions of people currently rely on. These technologies are developing faster in some sectors than others — drone delivery is already operational in parts of the US, and some UK courier companies are trialling it.
        </p>
        <p>
          The question of what happens to gig workers if and when automation displaces them is a live policy debate. Unlike traditional employees, gig workers do not have redundancy rights (unless they are classified as workers or employees, as Uber drivers now are). The transition will require policy responses — retraining programmes, income support, and potentially new legal categories — that UK governments have not yet fully developed.
        </p>

      </div>

      <div className="mt-10">
        <Quiz questions={QUIZ_QUESTIONS} lessonId="ai-and-gig-workers" />
      </div>

      <LessonRating lessonId="ai-and-gig-workers" />
      <LessonFeedback lessonId="ai-and-gig-workers" />
      <ReviewLaterButton lessonId="ai-and-gig-workers" />
      <RelatedLessons currentId="ai-and-gig-workers" />
      <NextLesson currentId="ai-and-gig-workers" />
    </div>
  )
}
