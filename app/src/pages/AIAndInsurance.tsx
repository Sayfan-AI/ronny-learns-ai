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

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How do insurance companies use AI to set car insurance premiums?',
    options: [
      'They set the same premium for everyone and use AI only to handle claims paperwork',
      'They feed data about you — age, location, car type, driving history, and sometimes telematics — into a predictive model that estimates the probability and cost of a claim',
      'They let an AI chatbot interview you for 30 minutes and set a premium based on your answers',
      'They use AI only to check whether your car has failed its MOT before offering you a policy',
    ],
    correctIndex: 1,
    explanation:
      'Insurance pricing is fundamentally about estimating risk. AI models are trained on millions of historical claims to identify patterns: which combinations of driver age, car model, location, and driving history are associated with more frequent or more expensive claims. The model outputs a risk score that feeds directly into the premium. More data means more accurate (and more personalised) pricing — which is why insurers now seek more data points than ever.',
    hint: 'Think about what data points an insurer would want to predict whether you are likely to make a claim.',
  },
  {
    question: 'What does a telematics (black box) device measure, and how does it affect your premium?',
    options: [
      'It monitors your car\'s mechanical health and gives you a discount if your engine is in good condition',
      'It records driving behaviour — speed, acceleration, braking, time of day, and cornering — and the AI uses this to score your actual driving skill and adjust your renewal premium accordingly',
      'It tracks your physical location at all times and shares your journey data with the government',
      'It measures your reaction time by testing how quickly you respond to dashboard alerts',
    ],
    correctIndex: 1,
    explanation:
      'Telematics devices (often called black boxes, though they now frequently work via a smartphone app) collect real-time data on how you actually drive. The AI analyses patterns: late-night driving on motorways is higher risk than daytime suburban driving; harsh braking and sharp cornering suggest aggressive driving. Young drivers who accept a telematics policy often pay lower initial premiums in exchange for monitoring — and can earn further discounts by demonstrating safe driving behaviour over the policy year.',
    hint: 'Think about what a device in the car could actually measure about how you drive.',
  },
  {
    question: 'How do some health insurers use wearable device data, and what concern does this raise?',
    options: [
      'They use it only to send you reminders to take your medication at the correct time each day',
      'They offer premium discounts to customers who share step counts, heart rate, and activity data — but this raises concerns that people who are unable to exercise regularly could end up paying more',
      'They require all customers to wear a medical-grade monitor continuously to detect pre-existing conditions',
      'They use the data solely to contact emergency services if your heart rate drops dangerously low',
    ],
    correctIndex: 1,
    explanation:
      'Schemes like Vitality (run by AIA and partnered with Discovery in South Africa and the UK) offer discounts, rewards, and lower premiums to customers who share fitness data from Apple Watch, Fitbit, or similar devices. The more steps you take and gym sessions you complete, the better your discount. Critics argue this could disadvantage people with disabilities, chronic illness, or caring responsibilities who are unable to exercise regularly — effectively pricing out those who most need health insurance.',
    hint: 'The concern is about fairness — who benefits from activity-based discounts, and who might be penalised.',
  },
  {
    question: 'What is credit-based insurance scoring, and why is it controversial?',
    options: [
      'A system where you earn loyalty points every time you renew your insurance, which can be used to pay future premiums',
      'The practice of using your credit history as one factor in setting insurance premiums, based on statistical correlations — but criticised because it can disadvantage people who are poorer through no fault of their own',
      'A score given to insurance companies themselves to rate how reliably they pay out on claims',
      'An AI tool that checks whether you have previously made fraudulent insurance claims by searching court records',
    ],
    correctIndex: 1,
    explanation:
      'Studies have found statistical correlations between lower credit scores and higher rates of insurance claims — though the causal mechanism is debated. US insurers widely use credit scores in pricing; the practice is more restricted in the UK and banned in some US states. Critics argue that credit scores are influenced by socioeconomic factors beyond an individual\'s control (medical debt, redundancy, systemic inequalities), and that using them in insurance pricing effectively makes insurance more expensive for people who are already financially struggling.',
    hint: 'Think about the relationship between financial history and insurance risk — and whether that relationship is fair.',
  },
  {
    question: 'What is the main regulatory concern about AI in insurance pricing in the UK?',
    options: [
      'That AI will put all insurance brokers out of work within five years, causing mass unemployment',
      'That AI pricing models lack transparency — insurers cannot always explain why a specific customer received a particular price, which can hide unlawful discrimination and makes it hard for customers to challenge decisions',
      'That AI systems are too slow to process claims, causing payout delays that harm vulnerable customers',
      'That AI will make insurance premiums the same for every customer, removing the benefit of shopping around',
    ],
    correctIndex: 1,
    explanation:
      'The Financial Conduct Authority (FCA) has raised concerns about algorithmic pricing opacity. If a customer is charged a higher premium because an AI model identified their postcode, age, and surname as associated with higher risk, neither the customer nor potentially the insurer\'s own staff may be able to articulate exactly why. This makes it very difficult to detect unlawful discrimination (for instance, if the model has inadvertently learned to use ethnicity as a proxy variable). The FCA\'s 2022 general insurance pricing rules tackled loyalty penalties but the opacity of AI models remains a live regulatory issue.',
    hint: 'The key concern is about whether AI decisions can be understood and challenged.',
  },
]

export function AIAndInsurance() {
  useMarkVisited('ai-and-insurance')

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F6E1;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and insurance
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI sets your premiums, what black box devices really track,
            and the fairness questions that regulators are grappling with.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-insurance" />
          <ShareButton lessonTitle="AI and insurance" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How AI prices your insurance policy</h2>
          <p className="text-gray-600 leading-relaxed">
            Insurance is fundamentally about estimating risk &mdash; how likely are you to make a claim,
            and how much will it cost? For most of the industry&apos;s history, actuaries used relatively
            simple statistical models and a small number of variables to set premiums. AI has transformed
            this, allowing insurers to process hundreds of variables simultaneously and find patterns
            that humans would never spot.
          </p>
          <div className="bg-teal-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-teal-800 text-sm">What data goes into an AI pricing model?</p>
            <ul className="text-teal-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>Your age, occupation, and postcode</li>
              <li>Your car&apos;s make, model, age, and engine size</li>
              <li>Your claims history and any convictions</li>
              <li>How many other policies are active at the same address</li>
              <li>The time of day you obtained the quote (yes, really)</li>
              <li>Your credit score (in some markets)</li>
              <li>Telematics data, if you have opted in</li>
            </ul>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            The AI model is trained on millions of historical policies and claims. It learns which
            combinations of these variables are associated with higher or lower claim rates and costs.
            The result is a personalised risk score that feeds directly into your premium.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Black boxes and telematics</h2>
          <p className="text-gray-600 leading-relaxed">
            Telematics policies &mdash; often called &ldquo;black box&rdquo; insurance &mdash; take AI
            pricing to the next level by monitoring how you actually drive rather than relying on
            proxy variables.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4F1;',
                label: 'What telematics measures',
                text: 'Speed (and how often you exceed limits), acceleration and braking patterns (harsh = higher risk), time of day (11pm on a Saturday is statistically riskier than 9am on a Tuesday), cornering behaviour, and mileage. Modern policies use a smartphone app rather than a physical device.',
              },
              {
                icon: '&#x1F4CA;',
                label: 'How the AI scores your driving',
                text: 'The insurer\'s AI analyses your trip data over weeks and months, building a driving profile. Safe, smooth daytime driving earns a high score and lower renewal premium. Frequent late-night motorway driving and sharp braking pushes the score down.',
              },
              {
                icon: '&#x1F9D1;',
                label: 'Who benefits',
                text: 'Young drivers (17-25) pay the highest standard premiums due to statistical risk. Telematics lets them demonstrate actual safe behaviour and potentially pay significantly less. Older drivers who rarely use their car also benefit from pay-as-you-go mileage-based policies.',
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
          <h2 className="text-2xl font-bold text-gray-800">Health data and wearables</h2>
          <p className="text-gray-600 leading-relaxed">
            Health insurers are increasingly interested in real-time health data from wearable devices.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '&#x231A;', title: 'Activity-based discounts', text: "Vitality (used by AIA and others) offers discounts and rewards — gym membership, Apple Watch, cinema tickets — to customers who share fitness data and meet activity targets. The AI tracks steps, workouts, and health metrics and adjusts your premium at renewal." },
              { icon: '&#x2764;', title: 'Remote health monitoring', text: "Some US health insurers allow customers to share data from heart rate monitors, glucose sensors, and sleep trackers in exchange for lower premiums or added cover. The AI looks for patterns associated with lower long-term health risk." },
              { icon: '&#x26A0;&#xFE0F;', title: 'The fairness concern', text: "Activity-based pricing advantages people who are able to exercise regularly. People with disabilities, chronic illness, caring responsibilities, or physically demanding jobs may be unable to hit step-count targets — and could end up paying more for less." },
              { icon: '&#x1F512;', title: 'Data privacy', text: "Health data is among the most sensitive personal data that exists. GDPR in the UK and EU imposes strict rules on processing health data, requiring explicit consent. Consumers should carefully read what data sharing means for their privacy before opting in." },
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

        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI in claims: faster payouts and fraud detection</h2>
          <p className="text-gray-600 leading-relaxed">
            AI is also transforming what happens after you make a claim.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4F8;',
                label: 'Automated damage assessment',
                text: 'Apps like those from Tractable use computer vision to assess car damage from photos submitted on your smartphone. The AI estimates repair costs and can authorise straightforward claims in minutes rather than days, without a human assessor visiting.',
              },
              {
                icon: '&#x1F575;',
                label: 'Fraud detection',
                text: "Insurance fraud costs the UK industry an estimated £1.2 billion a year. AI analyses claims for suspicious patterns — identical details appearing in multiple claims, staging indicators in accident reports, social media activity that contradicts an injury claim — and flags cases for human investigation.",
              },
              {
                icon: '&#x2696;&#xFE0F;',
                label: 'The opacity problem',
                text: "When an AI model denies your claim or sets your premium at an unusually high level, it may be very difficult to find out why. The FCA has pushed for more transparency in algorithmic decisions, but fully interpretable AI models remain a challenge for the industry.",
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

        <ReviewLaterButton lessonId="ai-and-insurance" />
        <LessonNote lessonId="ai-and-insurance" />

        <Quiz questions={quizQuestions} lessonId="ai-and-insurance" lessonTitle="AI and insurance" />

        <LessonFeedback lessonId="ai-and-insurance" />
        <LessonRating lessonId="ai-and-insurance" />
        <RelatedLessons currentId="ai-and-insurance" />
        <NextLesson currentId="ai-and-insurance" />
      </div>
    </div>
  )
}
