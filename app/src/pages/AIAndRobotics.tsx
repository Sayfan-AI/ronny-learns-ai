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
    question: 'When did the first industrial robot start working on a factory assembly line?',
    options: [
      'In 1945, right after World War II, helping to rebuild factories',
      'In 1961, when Unimate began working on a General Motors assembly line in New Jersey',
      'In 1980, after the invention of the microchip made robots affordable',
      'In 1995, when car manufacturers first adopted automation',
    ],
    correctIndex: 1,
    explanation:
      'Unimate, built by George Devol and Joseph Engelberger, became the first industrial robot to work on a production line in 1961 at a General Motors plant in New Jersey. It performed tasks like welding car bodies and moving heavy metal parts — jobs that were hot, dangerous, and repetitive for human workers.',
  },
  {
    question: 'How do modern robots "see" and interact with the world around them?',
    options: [
      'They follow pre-programmed paths and cannot respond to changes in their environment',
      'They use AI vision (cameras and image recognition) combined with motor control to perceive objects and adjust their movements in real time',
      'They rely entirely on GPS signals to navigate and locate objects',
      'They send photos to a human operator who tells them what to do next',
    ],
    correctIndex: 1,
    explanation:
      "Modern robots combine computer vision (cameras and AI image recognition) with motor control systems (actuators, grippers, sensors). The AI identifies objects, estimates distances, and determines the best grip — then sends precise instructions to the robot's physical components. This is why robots like Amazon's warehouse bots can pick thousands of different products without being pre-programmed for each one.",
  },
  {
    question: 'What is a "cobot" and how is it different from a traditional industrial robot?',
    options: [
      'A cobot is a robot that works in coffee shops — named after a combination of coffee and robot',
      'A cobot is a collaborative robot designed to work safely alongside humans, rather than being isolated behind safety cages',
      'A cobot is a robot controlled remotely by a human operator at all times',
      'A cobot is a robot that can only perform one specific task, like welding',
    ],
    correctIndex: 1,
    explanation:
      "Traditional industrial robots are fast, powerful, and dangerous — they work behind safety cages, away from people. Cobots (collaborative robots) are designed to share a workspace with humans. They move more slowly, have force sensors that detect when they touch a person (and immediately stop), and can be easily re-programmed for new tasks. They're increasingly used in small businesses that can't afford full robot automation.",
  },
  {
    question: 'What is the main concern about AI-powered robots taking over jobs?',
    options: [
      'Robots break down too often to be economically viable replacements for human workers',
      'While robots do automate repetitive tasks, the concern is whether the new jobs created by robotics will be accessible to the workers whose jobs are displaced',
      'Robots only work in car factories, so the impact is limited to that one industry',
      'Robot maintenance is so expensive that companies always end up hiring more staff overall',
    ],
    correctIndex: 1,
    explanation:
      "Automation does displace workers from repetitive roles — Amazon's warehouse robots have significantly reduced the number of people needed per order fulfilled. The debate is whether the new roles created (robot maintenance, AI oversight, new industries) are enough to replace those lost, and whether displaced workers have the skills and access to move into them. History shows automation creates new industries, but the transition period can be very painful for affected workers.",
  },
]

export function AIAndRobotics() {
  useMarkVisited('ai-and-robotics')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F916;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and robotics
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            From the first factory robot in 1961 to Boston Dynamics&rsquo; backflipping Atlas
            &mdash; how robots see, move, and are changing the world of work.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-robotics" />
          <ShareButton lessonTitle="AI and robotics" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The robot that started it all</h2>
          <p className="text-gray-600 leading-relaxed">
            In 1961, a 1,800 kg machine called Unimate began its shift on a General Motors
            assembly line in New Jersey. Its job: pick up freshly cast car parts from a die
            casting machine and weld them to car bodies. The work was hot, repetitive, and
            dangerous. Unimate never complained, never tired, and never called in sick.
          </p>
          <div className="bg-slate-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-slate-800 text-sm">What made Unimate revolutionary</p>
            <p className="text-slate-700 text-sm leading-relaxed">
              Before Unimate, &ldquo;automation&rdquo; meant fixed machines that could only do
              one thing in one way. Unimate was the first reprogrammable industrial robot
              &mdash; you could change what it did by loading a new programme. That idea
              &mdash; a machine you can teach different tasks &mdash; is still the foundation
              of robotics today.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How robots see and move</h2>
          <p className="text-gray-600 leading-relaxed">
            A robot needs two things to be useful: it needs to understand its environment
            (perception), and it needs to act on that understanding (motor control). AI has
            transformed both.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4F7;',
                label: 'Computer vision',
                text: "Cameras feed images into AI models that identify objects, estimate their position and orientation in 3D space, and track movement. Amazon's warehouse robots can identify thousands of different products — even if they're in an unfamiliar position or partly hidden.",
              },
              {
                icon: '&#x1F9BE;',
                label: 'Motor control and grippers',
                text: 'Once the AI knows what to pick up and where it is, it calculates how to position the arm and how tightly to grip. Modern grippers use force sensors — they can tell the difference between gripping a steel component and a ripe tomato, and adjust pressure accordingly.',
              },
              {
                icon: '&#x1F50D;',
                label: 'LIDAR and 3D sensing',
                text: 'Autonomous robots (like those that navigate warehouse floors) often use LIDAR — laser pulses that bounce off surfaces and return to build a 3D map of the space. Combined with AI pathfinding, the robot can navigate around people and obstacles in real time.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Boston Dynamics and the humanoid frontier</h2>
          <p className="text-gray-600 leading-relaxed">
            Boston Dynamics became famous for videos of robots running, jumping, and doing
            backflips &mdash; feats that seemed impossible for machines. But why does it matter?
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F415;',
                label: 'Spot — the robot dog',
                text: "Spot is a four-legged robot used in environments where wheels don't work: construction sites, oil rigs, nuclear plants. It can open doors, climb stairs, navigate rough terrain, and carry sensors into places too dangerous for people. Shell, Ford, and the US Army all use versions of Spot.",
              },
              {
                icon: '&#x1F9B8;',
                label: 'Atlas — the humanoid robot',
                text: "Atlas can run, jump, pick up boxes, and do gymnastic routines. It's primarily a research platform — Boston Dynamics uses it to push the limits of what's mechanically possible. The videos are spectacular, but Atlas is not yet a commercial product.",
              },
              {
                icon: '&#x1F3ED;',
                label: 'Why humanoid shape matters',
                text: "Most of the world is designed for humans — stairs, door handles, tools, vehicles. A robot shaped like a human can, in theory, use the same infrastructure without modification. That's why companies like Tesla and Figure AI are investing heavily in humanoid robots for factory work.",
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

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Robots in your home</h2>
          <p className="text-gray-600 leading-relaxed">
            You may already live with a robot. Domestic robots have quietly become mainstream.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F9F9;',
                label: 'Robot vacuum cleaners',
                text: "iRobot's Roomba (launched 2002) is the world's best-selling consumer robot. Modern versions use AI to map your home, identify rooms, avoid obstacles, and return to their charging dock — all without human guidance. Over 40 million Roombas have been sold.",
              },
              {
                icon: '&#x1F9D3;',
                label: 'Care robots for elderly people',
                text: "Japan, facing a severe shortage of care workers, is deploying robots in care homes. PARO, a therapeutic robot seal, reduces anxiety in dementia patients through interaction. Robots like Pepper assist with reminders, companionship, and monitoring vital signs — not replacing human carers, but supplementing them.",
              },
              {
                icon: '&#x1F4E6;',
                label: 'Delivery robots',
                text: "Starship Technologies runs fleets of small pavement robots delivering food and parcels in UK university towns and US cities. They navigate pavements, cross roads, and deliver to your door — recognising when traffic is safe and ringing your doorbell when they arrive.",
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

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Cobots: robots that work with you</h2>
          <p className="text-gray-600 leading-relaxed">
            Traditional industrial robots are fast and powerful &mdash; and that makes them
            dangerous. They work in caged-off areas, entirely separate from people.
            Cobots (collaborative robots) are different.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-blue-800 text-sm">What makes cobots safe</p>
            <ul className="text-blue-700 text-sm space-y-1 leading-relaxed list-disc list-inside">
              <li>They move at slower, human-safe speeds</li>
              <li>Force sensors detect when they touch something unexpected and immediately stop</li>
              <li>They can be easily re-programmed by non-experts &mdash; sometimes just by physically moving their arm through the desired motion</li>
              <li>They&rsquo;re small enough to share a workbench with a human colleague</li>
            </ul>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Cobots from companies like Universal Robots and ABB are now used in small
            businesses &mdash; bakeries, dental labs, electronics assembly &mdash; that could
            never afford traditional robot automation.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The jobs question</h2>
          <p className="text-gray-600 leading-relaxed">
            Robotics automation has always displaced workers from certain roles &mdash; and it
            continues to do so. The question is not whether this happens, but what follows.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
              <p className="font-semibold text-slate-800 text-sm mb-2">What robots are doing</p>
              <ul className="text-slate-700 text-sm space-y-1 leading-relaxed">
                <li>Replacing repetitive physical tasks: assembly, packing, picking</li>
                <li>Taking on dangerous jobs: welding, mining, nuclear inspection</li>
                <li>Performing tasks at superhuman scale: warehouses, ports</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-semibold text-orange-800 text-sm mb-2">New roles being created</p>
              <ul className="text-orange-700 text-sm space-y-1 leading-relaxed">
                <li>Robot technicians and maintenance engineers</li>
                <li>AI trainers and robot safety testers</li>
                <li>Roles in industries the robots make possible</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            History suggests automation ultimately creates more jobs than it destroys &mdash;
            but that is cold comfort if you are the one displaced. Transition support, retraining
            programmes, and social safety nets matter as much as the technology itself.
          </p>
        </div>

        <ReviewLaterButton lessonId="ai-and-robotics" />
        <LessonNote lessonId="ai-and-robotics" />

        <Quiz questions={quizQuestions} lessonId="ai-and-robotics" lessonTitle="AI and robotics" />

        <LessonFeedback lessonId="ai-and-robotics" />
        <LessonRating lessonId="ai-and-robotics" />
        <RelatedLessons currentId="ai-and-robotics" />
        <NextLesson currentId="ai-and-robotics" />
      </div>
    </div>
  )
}
