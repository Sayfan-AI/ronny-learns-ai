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
import { DifficultyBadge } from '../components/DifficultyBadge'

const LESSON_TITLE = 'AI and manufacturing'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is predictive maintenance, and why is it valuable in manufacturing?',
    options: [
      'A scheduling system that sends engineers to check machines on a fixed calendar, regardless of whether anything is wrong',
      'An AI system that analyses sensor data from machines to detect patterns that indicate a component is about to fail — allowing repairs to be made before a breakdown occurs',
      'A type of robot that automatically replaces broken parts without any human involvement',
      'A software system that orders spare parts from suppliers when stock runs low',
    ],
    correctIndex: 1,
    explanation:
      "Predictive maintenance uses AI to analyse streams of data from sensors embedded in machines — measuring things like vibration, temperature, pressure, and electrical current. The AI learns what normal operation looks like and can spot subtle changes that are early warning signs of failure. Rolls-Royce, for example, fits aircraft engines with thousands of sensors and streams data to ground teams in real time. Their AI systems can predict when a component needs attention days or weeks before it would cause a problem, allowing airlines to schedule maintenance during planned downtime rather than suffering an unexpected grounding.",
    hint: 'Think about catching problems before they cause a breakdown.',
  },
  {
    question: 'How do AI vision systems improve quality control in factories?',
    options: [
      'They slow production lines down so human inspectors have more time to spot defects',
      'They check only the finished product at the end of the production line, ignoring earlier stages',
      'They use cameras and image recognition to inspect products at every stage of production, spotting defects like scratches, cracks, or misalignments faster and more consistently than human inspectors — often without stopping the line',
      'They replace all quality control staff with robots that physically test every product by hand',
    ],
    correctIndex: 2,
    explanation:
      "AI vision systems use cameras positioned throughout a production line, combined with image recognition software trained on thousands of images of good and defective products. The AI can inspect items moving at full production speed — something human inspectors cannot match for consistency over a long shift. BMW uses AI vision to check car bodies for tiny surface imperfections. Foxconn uses AI cameras to inspect circuit boards for soldering defects at a speed and accuracy human inspectors cannot match. These systems can also flag problems early in the production process, reducing waste.",
    hint: 'Speed and consistency are key — what can cameras do that tired humans struggle with?',
  },
  {
    question: 'What happened to supply chain AI during the COVID-19 pandemic, and what does it reveal about AI limitations?',
    options: [
      'Supply chain AI worked perfectly during the pandemic, preventing all shortages by rerouting deliveries automatically',
      'AI supply chain systems were not yet in use in 2020, so the pandemic had no impact on automated systems',
      'AI supply chain models — trained on historical demand patterns — were caught out by unprecedented disruptions like factory shutdowns and sudden demand spikes, revealing that AI struggles when events fall completely outside its training experience',
      'AI supply chain systems caused the pandemic shortages by misrouting medical supplies to the wrong destinations',
    ],
    correctIndex: 2,
    explanation:
      "The COVID-19 pandemic was a vivid demonstration of a core AI limitation: models trained on historical data assume the future will broadly resemble the past. Supply chain AI systems had learned from years of relatively stable global trade patterns. They were not prepared for simultaneous factory shutdowns, demand for certain products increasing by thousands of percent, or shipping containers stranded in wrong places as normal trade flows were disrupted. The lesson is that AI supply chain tools are powerful in normal conditions but need human judgement for genuinely novel situations.",
    hint: 'Think about what happens when the future looks nothing like the past.',
  },
  {
    question: 'Which statement best describes the impact of AI on jobs in manufacturing?',
    options: [
      'AI and automation are creating more manufacturing jobs overall, with no net reduction in employment in the sector',
      'AI is eliminating all manufacturing jobs and fully automated factories will employ no humans within 5 years',
      'AI is automating many repetitive and physically demanding tasks, which reduces some roles while creating demand for new skills like robot operation, data analysis, and AI system maintenance — but the transition is uneven and some workers face significant disruption',
      'Only robot technicians are affected — office and management roles in manufacturing are completely safe from AI',
    ],
    correctIndex: 2,
    explanation:
      "The impact of AI on manufacturing jobs is complex and uneven. Repetitive assembly line tasks, simple quality inspection, and dangerous work are being automated. The World Economic Forum estimated that automation would displace around 85 million jobs globally by 2025 — but also create 97 million new ones requiring different skills. New roles include robot and cobot technicians, data analysts, AI trainers, and process engineers. The challenge is that workers most at risk — those in lower-skilled, repetitive roles — are not automatically best positioned to transition to new technical roles. The UK has invested in reskilling programmes, but the transition is difficult for many.",
    hint: 'Think about both the jobs lost and the new kinds of roles that AI creates.',
  },
]

export function AIAndManufacturing() {
  useMarkVisited('ai-and-manufacturing')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3ED;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and manufacturing
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI is transforming factories — predicting breakdowns before they happen,
            spotting defects at speed, and reshaping what jobs look like on the factory floor.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-manufacturing" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The fourth industrial revolution</h2>
          <p className="text-gray-600 leading-relaxed">
            Manufacturing has transformed several times in history — from hand tools to steam power,
            from steam to electricity, from electricity to computers and automation. We are now in what
            many call the <strong>fourth industrial revolution</strong>, or Industry 4.0: the
            integration of AI, sensors, robotics, and data across every part of the factory.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A modern factory is not just a building with machines — it is a data-generating system.
            Thousands of sensors track temperature, pressure, vibration, speed, and energy use every
            second. AI makes sense of all that data in real time, doing things that were simply
            impossible for human operators to manage manually.
          </p>
          <div className="bg-slate-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-slate-800 text-sm">Where AI is active in manufacturing today</p>
            <ul className="text-slate-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>Predicting when machines are about to fail, before they break down</li>
              <li>Inspecting products for defects faster and more consistently than human eyes</li>
              <li>Optimising production schedules to reduce waste and energy use</li>
              <li>Managing supply chains and inventory levels automatically</li>
              <li>Guiding robotic arms to handle complex assembly tasks</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Predictive maintenance: fixing things before they break</h2>
          <p className="text-gray-600 leading-relaxed">
            One of the most valuable applications of AI in manufacturing is <strong>predictive maintenance</strong>
            — using sensor data and machine learning to predict when a piece of equipment is about to
            fail, so it can be repaired before it causes a breakdown.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Traditionally, maintenance worked in one of two ways: either you fixed things after they
            broke (reactive maintenance, which is expensive and disruptive), or you replaced components
            on a fixed schedule whether or not they needed it (planned maintenance, which wastes money
            on parts that still had plenty of life left).
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x2708;&#xFE0F;',
                label: 'Rolls-Royce: engines that report their own health',
                text: 'Rolls-Royce fits aircraft engines with thousands of sensors that stream data to ground teams in real time. AI models monitor every flight, comparing data to baseline patterns. If an engine shows signs of developing a problem — a slight increase in vibration frequency, for example — the AI flags it. Airlines can then schedule maintenance at the next planned downtime, rather than discovering the problem mid-flight.',
              },
              {
                icon: '&#x1F527;',
                label: 'The business case',
                text: 'An unplanned production line shutdown costs far more than a planned repair. In heavy industry, a single unexpected machine failure can cost hundreds of thousands of pounds in lost production. Predictive maintenance typically reduces unplanned downtime by 30 to 50% and cuts maintenance costs by 10 to 25%, according to McKinsey.',
              },
              {
                icon: '&#x1F4F6;',
                label: 'How it works',
                text: 'The AI is trained on historical sensor readings — including data from machines that have failed — so it learns the patterns that precede breakdowns. Over time, it also adapts to individual machines, because two nominally identical machines in the same factory may behave slightly differently due to wear and local conditions.',
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
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI quality control: cameras that never blink</h2>
          <p className="text-gray-600 leading-relaxed">
            Quality control — checking that products meet the required standard before they leave the
            factory — has traditionally relied on human inspectors. Humans are good at this, but also
            inconsistent: a tired inspector at the end of a long shift will miss things that a fresh
            inspector catches. AI vision systems do not get tired.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F697;',
                label: 'BMW: catching surface defects humans miss',
                text: 'BMW uses AI-powered cameras at multiple stages of car body production to inspect paintwork for tiny imperfections — scratches, bubbles, or uneven coverage — that might be invisible to a tired human eye. The system inspects at full production speed, something a human cannot do consistently.',
              },
              {
                icon: '&#x1F4BB;',
                label: 'Foxconn: circuit board inspection',
                text: 'Foxconn, which manufactures electronics for companies including Apple, uses AI vision to inspect circuit boards for soldering defects. The AI can detect issues like cold solder joints or missing components that would cause the finished product to fail — catching them before additional components are added, which reduces waste.',
              },
              {
                icon: '&#x1F35E;',
                label: 'Food manufacturing: consistency at scale',
                text: 'In food production, AI vision systems check that baked goods are the right shape and colour, that packaging is correctly sealed, and that fill levels are accurate. This kind of consistent, high-speed inspection was simply not possible before AI.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-green-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-green-800 text-sm mb-0.5">{label}</p>
                  <p className="text-green-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Supply chains: the pandemic lesson</h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Supply chain management</strong> — deciding when to order materials, how much
            stock to hold, and which suppliers to use — has been transformed by AI. Systems can
            analyse demand patterns, weather forecasts, shipping lead times, and supplier reliability
            to optimise inventory levels and reduce costs.
          </p>
          <p className="text-gray-600 leading-relaxed">
            But the COVID-19 pandemic revealed a fundamental limitation of AI systems trained on
            historical data. When the pandemic hit in 2020:
          </p>
          <ul className="text-gray-600 leading-relaxed space-y-1 list-disc list-inside text-sm">
            <li>Factories shut simultaneously across multiple countries</li>
            <li>Demand for some products (hand sanitiser, medical PPE) increased by thousands of percent overnight</li>
            <li>Normal shipping routes and timelines became unpredictable</li>
            <li>Consumer behaviour changed in ways that had no historical precedent</li>
          </ul>
          <div className="bg-amber-50 rounded-xl p-4">
            <p className="font-semibold text-amber-800 text-sm mb-1">The lesson for AI</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              AI supply chain tools are powerful in stable, normal conditions — but they learn from the
              past. When something truly unprecedented happens, human judgement and flexibility are
              irreplaceable. The best supply chain systems combine AI efficiency with human oversight
              and contingency planning for scenarios the AI has never seen.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Jobs: what AI takes and what it creates</h2>
          <p className="text-gray-600 leading-relaxed">
            AI and robotics are automating many manufacturing tasks — particularly repetitive, physically
            demanding, or dangerous work. This is changing employment in manufacturing significantly.
          </p>
          <div className="space-y-3">
            {[
              {
                number: '1',
                label: 'Jobs at most risk',
                text: 'Repetitive assembly line roles, basic quality inspection, manual data entry for stock and production tracking, and operating standard machinery are the tasks most likely to be automated. Workers in these roles face the most disruption.',
              },
              {
                number: '2',
                label: 'New roles AI creates',
                text: 'Robot and cobot (collaborative robot) technicians; AI system trainers who label data for vision systems; data analysts who interpret production data; process engineers who redesign factory workflows around new technology.',
              },
              {
                number: '3',
                label: 'Reskilling in the UK',
                text: "Manufacturers including Jaguar Land Rover and Siemens have invested in reskilling programmes. The government's National Retraining Scheme has also supported manufacturing workers transitioning to more technical roles. But the transition is difficult — especially for workers in their 50s who have spent decades in roles that are disappearing.",
              },
              {
                number: '4',
                label: 'The overall picture',
                text: 'The World Economic Forum estimated that by 2025, automation would displace around 85 million jobs globally — but create 97 million new ones. The net number may be positive, but the transition is painful for those whose jobs are disrupted.',
              },
            ].map(({ number, label, text }) => (
              <div key={number} className="flex gap-3 items-start">
                <span className="bg-purple-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                  {number}
                </span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
          <p className="font-semibold text-slate-800 mb-2">Key takeaway</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            AI is making factories safer, more efficient, and more consistent — catching problems
            before they happen, inspecting products at superhuman speed, and squeezing waste out of
            supply chains. But the COVID-19 pandemic showed that AI is not a substitute for human
            judgement when the world changes in unprecedented ways. And while AI creates new types of
            work, the transition is uneven — not everyone can easily move from a job AI has taken to
            one AI has created.
          </p>
        </div>

        <ReviewLaterButton lessonId="ai-and-manufacturing" />
        <LessonNote lessonId="ai-and-manufacturing" lessonTitle={LESSON_TITLE} />

        <Quiz questions={quizQuestions} lessonId="ai-and-manufacturing" lessonTitle={LESSON_TITLE} />

        <LessonFeedback lessonId="ai-and-manufacturing" />
        <LessonRating lessonId="ai-and-manufacturing" />
        <RelatedLessons currentId="ai-and-manufacturing" />
        <NextLesson currentId="ai-and-manufacturing" />
      </div>
    </div>
  )
}
