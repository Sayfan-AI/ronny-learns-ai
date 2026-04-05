import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { ShareButton } from '../components/ShareButton'
import { LessonFeedback } from '../components/LessonFeedback'

const LESSON_TITLE = 'AI and fitness apps'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How do AI-powered fitness wearables like Fitbit and Apple Watch improve on a basic step counter?',
    options: [
      'They are more accurate at counting steps because they use GPS rather than a motion sensor',
      'They learn your personal baseline and can detect meaningful changes in your activity, sleep, and heart patterns over time',
      'They connect directly to your GP surgery and automatically book appointments when they detect problems',
      'They use AI to coach you through workouts using a built-in speaker',
    ],
    correctIndex: 1,
    explanation:
      "The real power of AI in fitness wearables is personalisation. Rather than comparing you to a generic average, the AI learns what is normal for you — your typical resting heart rate, how many steps you usually take, how long and deeply you sleep. It can then flag meaningful deviations: a consistently elevated resting heart rate, a sudden drop in activity, or irregular sleep. Apple Watch's irregular rhythm notification, which has detected undiagnosed atrial fibrillation in thousands of people, is a real-world example of this. A basic step counter cannot do this — it just counts.",
    hint: 'Think about what makes a personal trainer more useful than just a pedometer.',
  },
  {
    question: 'What is the main risk associated with AI fitness coaching apps that adapt your training plan?',
    options: [
      'They may encourage users to over-train by constantly pushing for improvement without recognising signs of injury or burnout',
      'They are illegal in the UK without a sports science qualification',
      'They drain phone battery too quickly to be practical for long workouts',
      'They require an internet connection at all times, making them useless outdoors',
    ],
    correctIndex: 0,
    explanation:
      "AI coaching apps like Whoop, Freeletics, and Garmin Coach are designed to push you towards improvement — and they do not get tired, do not feel empathy, and cannot see that you are grimacing in pain. The gamification built into many of these apps (streaks, points, badges) can also encourage people to train through pain rather than rest. A real coach would notice these signs. The risk of over-training — ignoring fatigue, training through minor injuries until they become major ones — is a genuine concern with AI-only coaching. The apps are best used alongside listening to your own body.",
    hint: 'Think about what a good human coach does that an algorithm cannot.',
  },
  {
    question: 'How is AI used in professional sport to help clubs and coaches?',
    options: [
      'AI referees now make all offside decisions in the Premier League, replacing human linesmen',
      'AI analyses video footage and performance data to track player movements, predict injuries, and inform recruitment decisions',
      'AI manages player contracts and transfer negotiations on behalf of clubs',
      'Professional sport has largely rejected AI tools due to concerns about fairness',
    ],
    correctIndex: 1,
    explanation:
      "AI is deeply embedded in elite sport. Systems like StatsBomb and Opta track every player movement in a football match using computer vision and produce detailed performance data — distance covered, heat maps, passing patterns, pressing intensity. This data informs tactical decisions, training loads, and injury prevention. Clubs also use AI for recruitment: analysing vast amounts of video and data on players from smaller leagues to find undervalued talent (the Moneyball effect, now supercharged by AI). Hawkeye, originally a ball-tracking system, now powers the AI offside line in Premier League broadcasts — though human referees still make the official call.",
    hint: 'Think about the data-driven revolution in professional sport.',
  },
  {
    question: 'What is one genuine concern about fitness apps collecting your health and exercise data?',
    options: [
      'Fitness apps use too much storage space on your phone, slowing it down significantly',
      'Health and fitness data collected by apps may be shared with insurers, employers, or advertisers, or sold if the company is acquired',
      'Fitness trackers emit radiation that can interfere with heart pacemakers',
      'The data is so inaccurate that it creates a false sense of health security',
    ],
    correctIndex: 1,
    explanation:
      "Your fitness data is more sensitive than it might seem. It reveals your location, your daily routine, your sleep patterns, and sometimes health conditions (irregular heart rhythms, signs of stress, pregnancy). Fitness apps are often not covered by the same strict medical data protection rules as NHS records. Some apps share data with third parties for advertising. If the company is sold or goes bankrupt, your data may be transferred to new owners with different privacy policies. In the US, there have been cases of health app data being subpoenaed in legal proceedings. Reading the privacy policy before using a health app is genuinely worth doing.",
    hint: 'Think about who might want access to detailed information about your health and daily habits.',
  },
]

export function AIAndFitnessApps() {
  useMarkVisited('ai-and-fitness-apps')

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3C3;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and fitness apps
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Smart wearables, AI personal trainers, and sport analytics —
            how AI is changing the way we move, train, and compete.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-fitness-apps" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI in fitness wearables</h2>
          <p className="text-gray-600 leading-relaxed">
            Fitness trackers have been around for years — but early ones just counted steps.
            Today's AI-powered wearables do something much more sophisticated: they learn
            what is normal for <em>you</em>.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Devices like <strong>Fitbit</strong>, <strong>Apple Watch</strong>, and
            {' '}<strong>Garmin</strong> track dozens of signals — heart rate, sleep stages,
            blood oxygen (SpO2), skin temperature, respiratory rate — and the AI builds a
            personal baseline over days and weeks. Once it knows your normal, it can alert
            you when something changes meaningfully.
          </p>
          <div className="bg-green-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-green-800 text-sm">Real-world examples</p>
            <ul className="text-green-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>Apple Watch's irregular rhythm notification has detected undiagnosed atrial fibrillation in thousands of people who had no symptoms</li>
              <li>Garmin's Body Battery score estimates your energy reserves based on sleep quality, heart rate variability, and stress</li>
              <li>Fitbit's Stress Management Score uses heart rate variability to flag elevated stress levels</li>
              <li>Several devices detect changes in skin temperature that may indicate early illness or, in women, predict ovulation</li>
            </ul>
          </div>
          <p className="text-gray-600 leading-relaxed">
            These are genuinely useful tools — but they are not medical devices in the regulatory
            sense. They can raise a flag worth discussing with a doctor; they cannot diagnose
            conditions.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI personal trainers and coaching apps</h2>
          <p className="text-gray-600 leading-relaxed">
            A personal trainer costs money, needs to be scheduled, and can only see you a few
            hours a week. AI coaching apps are always available, adapt to your performance
            in real time, and cost a fraction of the price.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4F1;',
                label: 'Adaptive training plans',
                text: 'Apps like Freeletics and Nike Run Club use AI to adjust your training plan week by week based on how you performed. If you struggled with a session, it dials back the next one. If you excelled, it pushes harder.',
              },
              {
                icon: '&#x1F4CA;',
                label: 'Recovery monitoring',
                text: 'Whoop is built entirely around recovery — it analyses your sleep, heart rate variability, and recent training load to give you a daily readiness score and recommend how hard to push that day.',
              },
              {
                icon: '&#x1F3CB;&#xFE0F;',
                label: 'Form coaching with computer vision',
                text: 'Apps like Kemtai and some Peloton features use your phone camera and computer vision to analyse your exercise form in real time — flagging if your squat depth is wrong or your back is rounding.',
              },
              {
                icon: '&#x1F3C3;',
                label: 'Running coaches',
                text: "Garmin Coach and Strava's AI features create personalised running plans for goal races, adjusting based on your actual training data and GPS run history.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-blue-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-blue-800 text-sm mb-0.5">{label}</p>
                  <p className="text-blue-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-orange-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-orange-800 text-sm">The gamification risk</p>
            <p className="text-orange-700 text-sm leading-relaxed">
              Many fitness apps use streaks, badges, and points to keep you engaged. This can
              motivate — but it can also push you to train through pain or illness to protect
              a streak. A human coach would tell you to rest. The algorithm may not.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI in professional sport</h2>
          <p className="text-gray-600 leading-relaxed">
            At the elite level, AI has transformed how teams prepare, play, and recruit.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x26BD;',
                label: 'Performance analysis',
                text: "Systems like StatsBomb and Opta track every player's position 25 times per second during a match using computer vision. Coaches receive detailed data on pressing intensity, passing networks, and space created — information impossible to gather manually.",
              },
              {
                icon: '&#x1F3AF;',
                label: 'Injury prediction',
                text: 'AI analyses training load, match minutes, muscle fatigue data, and historical injury patterns to flag players at elevated risk of injury — helping managers rotate squads intelligently.',
              },
              {
                icon: '&#x1F50D;',
                label: 'Recruitment (the Moneyball effect)',
                text: 'AI can analyse thousands of hours of video footage and statistics on players from lower leagues worldwide, identifying undervalued talent that human scouts would never find. Brentford FC built their rise to the Premier League partly on data-driven recruitment.',
              },
              {
                icon: '&#x1F3F9;',
                label: 'Tracking technology',
                text: "Hawkeye — originally the cricket ball-tracker — now powers goal-line technology and the AI offside line shown in Premier League broadcasts, using player tracking cameras and 3D body modelling.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-purple-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-purple-800 text-sm mb-0.5">{label}</p>
                  <p className="text-purple-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Smart equipment — treadmills, Peloton, and smart mirrors</h2>
          <p className="text-gray-600 leading-relaxed">
            AI has entered the home gym too. <strong>Peloton</strong> uses AI to personalise class
            recommendations, suggest resistance targets, and track your output over time to chart
            improvement. Its Lanebreak feature turns cycling into a game.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Smart mirrors — like those from Mirror (now part of Lululemon) — combine a camera,
            display, and AI to project a personal trainer into your living room who can see your
            form and give feedback. Running shoes from brands like Under Armour have embedded
            sensors that track cadence, ground contact time, and stride length, feeding data into
            coaching apps.
          </p>
          <div className="bg-teal-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-teal-800 text-sm">What the research says</p>
            <p className="text-teal-700 text-sm leading-relaxed">
              Studies generally show that wearable fitness technology increases physical activity
              in the short term — people move more when they are tracking movement. The long-term
              picture is more mixed: many people stop wearing devices after a few months. The
              technology works best when paired with clear goals and social accountability.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Privacy: who owns your health data?</h2>
          <p className="text-gray-600 leading-relaxed">
            Your fitness data is more sensitive than it may seem. It reveals your daily location,
            routine, sleep patterns, and signs of health conditions. Unlike NHS records, most
            fitness apps are not covered by strict medical data protection rules.
          </p>
          <div className="bg-red-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-red-800 text-sm">Things worth knowing</p>
            <ul className="text-red-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>Some apps share data with advertisers or sell anonymised data to research companies</li>
              <li>If a company is acquired or goes bankrupt, your data may transfer to new owners with different policies</li>
              <li>In some countries, health app data has been subpoenaed in legal cases</li>
              <li>Life and health insurers are interested in fitness data — some already offer premium discounts for sharing it</li>
              <li>Reading the privacy policy before signing up is genuinely worth the effort</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 space-y-3">
          <p className="font-semibold text-green-800">Key takeaways</p>
          <ul className="text-green-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
            <li>AI wearables learn your personal baseline and flag meaningful changes — a genuine improvement over simple step counting</li>
            <li>AI coaching apps adapt training plans to your real performance data, making personalised coaching more accessible</li>
            <li>In professional sport, AI is transforming performance analysis, injury prevention, and recruitment</li>
            <li>Fitness data is sensitive — it is worth understanding what apps collect and how they use it before sharing</li>
          </ul>
        </div>

        <ReviewLaterButton lessonId="ai-and-fitness-apps" />
        <LessonNote lessonId="ai-and-fitness-apps" lessonTitle={LESSON_TITLE} />

        <Quiz questions={quizQuestions} lessonId="ai-and-fitness-apps" lessonTitle={LESSON_TITLE} />

        <LessonFeedback lessonId="ai-and-fitness-apps" />
        <LessonRating lessonId="ai-and-fitness-apps" />
        <RelatedLessons currentId="ai-and-fitness-apps" />
        <NextLesson currentId="ai-and-fitness-apps" />
      </div>
    </div>
  )
}
