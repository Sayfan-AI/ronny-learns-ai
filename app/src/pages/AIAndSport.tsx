import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { ReviewLaterButton } from '../components/ReviewLaterButton'

const quizQuestions: QuizQuestion[] = [
  {
    question: "What does an 'expected goals' (xG) model in football calculate?",
    options: [
      'How many goals a team will definitely score in a match',
      'The probability that a shot will result in a goal, based on its location, angle, and game context',
      'How tired the players are and how likely they are to make mistakes',
      'The number of shots on target a team should have based on possession',
    ],
    correctIndex: 1,
    explanation:
      "Expected goals (xG) is a statistical measure that rates the quality of a shot on a scale from 0 to 1. A penalty might have an xG of 0.79 (79% chance of scoring), while a difficult long-range effort might have an xG of 0.03. Teams and analysts use xG to judge performance beyond the final score.",
  },
  {
    question: 'How did Hawk-Eye technology change officiating in cricket and tennis?',
    options: [
      'It replaced all human umpires with automated decisions',
      'It uses cameras and AI to track the ball path and predict whether it would have hit the stumps or gone out, enabling player challenges to bad calls',
      'It measures the speed of serves and deliveries to help players train',
      'It detects when players break the rules by analysing their body position',
    ],
    correctIndex: 1,
    explanation:
      "Hawk-Eye uses multiple cameras to reconstruct the exact 3D trajectory of a ball in real time. In tennis, players can challenge a line call and Hawk-Eye determines whether the ball was in or out. In cricket, it models whether a delivery would have gone on to hit the stumps for LBW decisions. It has been used professionally since 2001.",
  },
  {
    question: 'How do Premier League clubs use AI for injury prevention?',
    options: [
      'AI gives players real-time instructions during matches to avoid dangerous tackles',
      'AI analyses player workload data, GPS movement, and biomarkers to flag athletes at elevated injury risk before an injury happens',
      'AI predicts which players on the opposing team are likely to cause injuries',
      'AI replaces the team physiotherapist for initial injury assessments',
    ],
    correctIndex: 1,
    explanation:
      'Clubs track GPS vests that measure distance covered, sprint intensity, and change-of-direction loads during every training session and match. AI models trained on thousands of player seasons learn which workload patterns precede injuries. Liverpool FC, for example, reported a significant drop in soft-tissue injuries after adopting these systems.',
  },
  {
    question: 'What is one privacy concern with AI in elite sport?',
    options: [
      'AI cameras might film matches without permission from the opposing team',
      'Biometric data collected from athletes — heart rate, sleep, GPS movement — is sensitive personal data, and there are questions about who owns it and how it is used',
      'AI statistics are sometimes shared with the media without the player knowing',
      'AI coaching apps might reveal tactical secrets to rival clubs',
    ],
    correctIndex: 1,
    explanation:
      "Modern athletic monitoring collects highly personal health data around the clock. Contracts between clubs and technology providers do not always make clear whether athletes own their biometric data, whether it can be sold to third parties, or how it might affect contract renewals and insurance. This is an active area of debate in sports law.",
  },
]

export function AIAndSport() {
  useMarkVisited('ai-and-sport')

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x26BD;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and sport
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI is changing the way athletes train, referees decide, and
            fans experience the game &mdash; and what it means for privacy.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-sport" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Performance analytics: knowing the numbers</h2>
          <p className="text-gray-600 leading-relaxed">
            Elite football clubs now fit players with GPS vests during every training session and
            match. These vests track distance covered, sprint speed, acceleration, and change-of-direction
            count, all updated multiple times per second. AI processes this into dashboards that
            coaches use to manage player load.
          </p>
          <p className="text-gray-600 leading-relaxed">
            On top of GPS data, companies like StatsBomb and Opta capture the position of every
            player and the ball throughout a match &mdash; sometimes using computer-vision cameras
            rather than manual tagging. This generates data on pressures, defensive shapes, passing
            networks, and much more.
          </p>
          <div className="bg-sky-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-sky-800 text-sm">What is expected goals (xG)?</p>
            <p className="text-sky-700 text-sm leading-relaxed">
              Expected goals is an AI-derived metric that assigns each shot a probability of
              resulting in a goal &mdash; based on where it was taken from, the angle, the game
              situation, and thousands of previous shots in similar positions. A penalty might
              have an xG of 0.79; a difficult long-range effort might score 0.03. Clubs use xG
              to judge whether their performance deserved their result, even if the scoreline
              went against them.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Computer vision in officiating</h2>
          <p className="text-gray-600 leading-relaxed">
            AI has changed some of the most controversial moments in sport &mdash; the close calls
            that used to come down to a human eye.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F3BE;',
                label: 'Hawk-Eye (tennis and cricket)',
                text: "Introduced in professional tennis in 2006 and cricket in 2001, Hawk-Eye uses ten or more cameras to reconstruct the exact 3D trajectory of the ball. In tennis, players challenge line calls; Hawk-Eye determines in or out. In cricket, it models whether a delivery would have hit the stumps for LBW decisions. It is now trusted enough that human umpire decisions are overturned on its verdict.",
              },
              {
                icon: '&#x26BD;',
                label: 'Semi-automated offside (FIFA 2022)',
                text: "At the 2022 FIFA World Cup, AI tracked 29 data points on each player's body at 50 frames per second. It could determine offside positions within seconds, replacing the previously subjective and sometimes lengthy VAR (Video Assistant Referee) reviews.",
              },
              {
                icon: '&#x1F3AF;',
                label: 'Goal-line technology',
                text: "Goal-line technology uses multiple cameras and AI to track the ball at very high frame rates. It tells the referee via a wristwatch within a second whether the ball fully crossed the line. Used in the Premier League since 2013, it has resolved many disputed goals definitively.",
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

        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Injury prevention</h2>
          <p className="text-gray-600 leading-relaxed">
            One of the most valuable applications of AI in sport is predicting and preventing injuries
            before they happen. This matters enormously: a single injury to a key player can cost a
            club millions in lost performance and transfer fees.
          </p>
          <p className="text-gray-600 leading-relaxed">
            AI models are trained on thousands of player seasons worth of data &mdash; GPS loads,
            sleep quality, heart rate variability, wellness questionnaire responses, and match
            minutes. The model learns which combinations of factors have historically preceded
            soft-tissue injuries.
          </p>
          <div className="bg-sky-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-sky-800 text-sm">Liverpool FC case study</p>
            <p className="text-sky-700 text-sm leading-relaxed">
              Liverpool FC introduced data-driven load management during their 2019&ndash;2020 Premier
              League title-winning season. The club reported a significant reduction in soft-tissue
              injuries. While training methods and luck also play a role, the AI-assisted approach
              to managing player workloads is now standard at the top level.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Wearable tech companies like Catapult and Whoop provide platforms that coaches use to
            review daily readiness scores and adjust training intensity accordingly. When a player&apos;s
            data shows warning signs, they may train at reduced intensity or rest &mdash; even if they
            feel fine.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Personalised coaching and fan experience</h2>
          <p className="text-gray-600 leading-relaxed">
            AI coaching apps give amateur athletes access to training insights once reserved for
            elite professionals. Apps analyse your running data, sleep, and recovery metrics to
            generate personalised training plans that adjust based on how you respond.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For fans, AI is changing how broadcasts feel. Amazon&apos;s Thursday Night Football uses
            AI-assisted graphics and data overlays. Some leagues are experimenting with
            personalised highlight reels generated automatically based on which players or plays
            a viewer tends to engage with.
          </p>
          <div className="bg-amber-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-amber-800 text-sm">The human coach question</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              AI can identify patterns in data, but it cannot read a dressing room, motivate a
              struggling player, or make a tactical substitution based on body language. Most
              elite coaches treat AI tools as information to inform decisions, not make them.
              The human coach is still the decision-maker.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Privacy and ethics</h2>
          <p className="text-gray-600 leading-relaxed">
            Monitoring athletes continuously generates intimate health data: heart rate, sleep quality,
            location, fatigue levels. Questions about who owns this data &mdash; the club, the technology
            provider, or the athlete &mdash; are increasingly important.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed">
            <li>Can a club use biometric data to justify not renewing a contract?</li>
            <li>Can insurance companies access athlete health data?</li>
            <li>Do players have meaningful choice about whether to be monitored?</li>
            <li>What happens to the data when an athlete leaves the club?</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Players&apos; unions in football and American sports are now negotiating data rights
            clauses in collective bargaining agreements. It is likely that explicit consent and
            data ownership rules will become standard in elite sport contracts.
          </p>
        </div>

        <ReviewLaterButton lessonId="ai-and-sport" />
        <LessonNote lessonId="ai-and-sport" />

        <Quiz questions={quizQuestions} lessonId="ai-and-sport" />

        <LessonRating lessonId="ai-and-sport" />
        <RelatedLessons currentId="ai-and-sport" />
        <NextLesson currentId="ai-and-sport" />
      </div>
    </div>
  )
}
