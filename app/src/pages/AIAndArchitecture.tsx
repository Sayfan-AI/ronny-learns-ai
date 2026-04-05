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

const LESSON_TITLE = 'AI and architecture'

const KEY_TAKEAWAYS = [
  'Generative design tools like Autodesk Forma let architects explore thousands of building layouts in seconds — tasks that would once take weeks of manual drafting.',
  'AI is being used in UK local authorities to help analyse planning applications — flagging issues and inconsistencies, though human planners still make all final decisions.',
  'Computer vision cameras on construction sites can automatically detect when workers are not wearing required safety equipment, helping prevent accidents.',
  'Smart building management systems use AI to cut energy use by learning when and where heating, cooling, and lighting are actually needed.',
  'The big question is not whether AI will replace architects, but how it changes the role — shifting focus from technical drafting toward creative judgment, client relationships, and ethical responsibility.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is generative design in architecture?',
    options: [
      'A process where an AI fully designs a building from scratch with no human input, then sends it directly to construction without review',
      'A software approach where an architect sets goals and constraints, and the AI explores thousands of possible design solutions to find the best options',
      'A legal requirement under the UK Building Safety Act 2022 that all new buildings must be digitally modelled before planning permission is granted',
      'A method of generating 3D printed building materials on site using AI-controlled robots',
    ],
    correctIndex: 1,
    explanation:
      'Generative design flips the traditional design process. Instead of an architect manually drawing one or two options, they define what they need — a certain number of rooms, specific sunlight requirements, a maximum budget, sustainability targets — and the AI generates hundreds or thousands of possible layouts that meet those constraints. Tools like Autodesk Forma are used by firms including Snohetta and Zaha Hadid Architects. The architect then applies human judgment to select and refine the most promising options. It is a collaboration between human creativity and computational power, not a replacement of one by the other.',
    hint: 'Think about who sets the goals and who explores the options.',
  },
  {
    question: 'How is AI being used in the UK planning system?',
    options: [
      'AI automatically approves or rejects planning applications based on local planning policy, with no involvement from human planning officers',
      'AI tools help planning officers process large volumes of applications by flagging potential policy conflicts and extracting key information, while humans make all final decisions',
      'AI is banned from UK planning decisions under the Human Rights Act, as planning decisions affect peoples homes and must always be made by elected officials',
      'AI is only used by housebuilders to game the planning system, not by local authorities themselves',
    ],
    correctIndex: 1,
    explanation:
      'UK local planning authorities receive thousands of applications a year, and planning officers are often stretched thin. AI tools are being piloted in several councils to help officers work through applications more efficiently. The AI might flag that a proposed building exceeds the maximum height in a conservation area, or that a heritage impact assessment is missing, saving an officer time on the mechanical parts of their work. Crucially, the AI does not decide — it assists. All planning decisions in England and Wales remain the legal responsibility of the local planning authority, and many major decisions go before elected planning committees.',
    hint: 'Think about the difference between a tool that helps and a tool that decides.',
  },
  {
    question: 'What does computer vision do on a construction site?',
    options: [
      'It controls construction machinery autonomously, allowing sites to operate without human workers on site at all',
      'It monitors CCTV footage in real time to automatically detect safety breaches — such as workers not wearing hard hats — and send immediate alerts',
      'It creates a 3D virtual model of the completed building before construction begins, allowing clients to walk through it in virtual reality',
      'It is used exclusively for quality control of finished materials in the factory, not on live construction sites',
    ],
    correctIndex: 1,
    explanation:
      "Construction is one of the most dangerous industries in the UK — the Health and Safety Executive reports around 40 fatal injuries to construction workers every year, plus tens of thousands of non-fatal injuries. AI-powered site safety systems analyse live CCTV footage to detect common safety violations: a worker without a hard hat, someone in a restricted zone, a forklift approaching pedestrians. When the system detects a breach, it sends an instant alert to the site safety manager. It does not replace safety officers, but it gives them a much wider field of view.",
    hint: 'Think about what a camera can see that a human supervisor might miss.',
  },
  {
    question: 'How do smart building management systems use AI?',
    options: [
      'They use AI to control who is allowed to enter a building, replacing traditional security guards with fully automated facial recognition access control',
      'They learn patterns of occupancy and weather to optimise heating, cooling, and lighting in real time — reducing energy waste without making people uncomfortable',
      'They use AI to automatically negotiate energy contracts with suppliers on behalf of the building owner, switching providers when prices are lower',
      'Smart building AI is only relevant to very large commercial buildings and has no application in homes or small offices',
    ],
    correctIndex: 1,
    explanation:
      "Heating, ventilation, and air conditioning (HVAC) typically accounts for 40 to 60 per cent of a commercial building's energy use. Traditional systems run on fixed timers. Smart systems learn which floors are busy on Monday mornings, how long it takes to heat a space after the weekend, and how outside temperature affects internal comfort. Google used DeepMind to reduce cooling energy in its data centres by 40%. The same principles applied to offices and public buildings through products from Siemens, Honeywell, and UK start-ups like Infogrid can deliver significant energy and cost savings.",
    hint: 'Think about the difference between a timer and a system that learns.',
  },
]

export function AIAndArchitecture() {
  useMarkVisited('ai-and-architecture')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3DB;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and architecture
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI is reshaping building design, planning, construction safety, and the way our
            buildings are managed — and what it means for the people who design and use them.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-architecture" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How AI is changing building design</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Architecture has always been a creative discipline — but it has also always involved
            enormous amounts of repetitive, technical work. Drawing sections, checking structural
            calculations, testing whether a building will overheat in summer or lose heat in winter.
            AI is transforming that technical layer, freeing architects to focus on the parts of
            their work that require genuine human judgment.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The most talked-about development is <strong>generative design</strong> — software that
            can explore thousands of possible building layouts in the time it would take a human
            to sketch a handful. Tools like <strong>Autodesk Forma</strong> (formerly Spacemaker),
            <strong> Hypar</strong>, and <strong>TestFit</strong> allow architects to define
            what they need — sunlight levels, number of units, sustainability targets, cost limits
            — and let the AI generate options that meet those constraints.
          </p>
          <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Real example</p>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Snohetta, the Norwegian architecture firm, uses Autodesk Forma to analyse
              wind, sunlight, and noise early in the design process. What once required specialist
              consultants and weeks of modelling can now be done interactively during a design
              meeting. Zaha Hadid Architects uses similar tools to test the structural and
              environmental performance of its characteristically complex geometric forms.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI and the planning system</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Every new building in the UK requires planning permission — a process managed by local
            planning authorities that are often under-resourced. England alone receives around
            half a million planning applications a year. AI is beginning to help planning officers
            cope with the volume.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CB;',
                label: 'Application processing',
                text: 'AI tools can scan planning applications for missing documents, flag potential conflicts with local planning policy, and extract key information into a summary — saving officers time on the mechanical parts of their work.',
                color: 'blue',
              },
              {
                icon: '&#x1F3D8;&#xFE0F;',
                label: 'Heritage and impact assessment',
                text: 'AI can cross-reference proposals against listed building registers, conservation area maps, and flood risk data — helping officers quickly identify which applications need specialist heritage or environmental scrutiny.',
                color: 'blue',
              },
              {
                icon: '&#x1F4CA;',
                label: 'Trend analysis',
                text: 'Some councils use AI to analyse patterns in planning decisions — identifying which types of applications are consistently delayed, or where community objection rates are high — to improve policy and process.',
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
          <div className="bg-yellow-50 dark:bg-yellow-950 rounded-xl p-4">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm leading-relaxed">
              <strong>Important:</strong> In England and Wales, planning decisions are legally the
              responsibility of the local planning authority. AI assists — it does not decide.
              Major applications go before elected planning committees, and applicants retain the
              right to appeal any decision.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI and construction site safety</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Construction is one of the UK's most dangerous industries. The Health and Safety
            Executive reports around 40 fatal injuries to workers each year, with tens of thousands
            of non-fatal injuries. Many happen because of momentary lapses that no single supervisor
            can monitor across an entire site.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI-powered computer vision systems — cameras analysing live video footage — are being
            deployed across major UK construction projects to help. They watch for the things site
            safety managers cannot see everywhere at once.
          </p>
          <div className="space-y-2">
            {[
              'PPE detection: automatically flagging when a worker enters a zone without a hard hat, high-visibility jacket, or steel-capped boots — and alerting the safety manager in real time.',
              'Zone monitoring: detecting when workers enter restricted areas (near heavy machinery, at the edge of an excavation) and triggering an immediate alert.',
              'Near-miss logging: recording incidents that do not cause injury but indicate risk — a near-miss today often predicts an accident tomorrow.',
              'Vehicle and pedestrian separation: alerting operators when forklifts or dumper trucks approach areas where pedestrians are working.',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-orange-50 dark:bg-orange-950 rounded-xl p-4">
            <p className="text-orange-800 dark:text-orange-200 text-sm leading-relaxed">
              Companies like <strong>Smartvid.io</strong>, <strong>ViAct</strong>, and
              <strong> Activeye</strong> offer these systems. Major UK contractors including
              Laing O'Rourke and Balfour Beatty have piloted AI site safety tools on large
              infrastructure projects.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Smart buildings and energy management</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Once a building is complete, AI continues to play a role — managing the systems that
            keep it comfortable, safe, and efficient. Heating, ventilation, and air conditioning
            (HVAC) typically accounts for 40 to 60 per cent of a commercial building's energy use.
            Traditional systems run on fixed timers. Smart systems learn.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F321;&#xFE0F;',
                label: 'Occupancy-based heating and cooling',
                text: 'AI learns which parts of a building are busy at which times — and pre-heats or pre-cools accordingly, rather than running at full power all day for an office that is only occupied for a few hours.',
                color: 'green',
              },
              {
                icon: '&#x26A1;',
                label: 'Predictive energy shifting',
                text: 'AI can shift energy-intensive tasks (pre-cooling a building, charging EV fleet vehicles) to times when electricity is cheaper or the grid is running on more renewable energy — automatically responding to smart tariff pricing signals.',
                color: 'green',
              },
              {
                icon: '&#x1F4A1;',
                label: 'Lighting and daylight management',
                text: 'Occupancy sensors allow AI to dim or switch off lighting in unoccupied areas, and adjust artificial light levels based on how much natural light is available — cutting lighting energy use by up to 50%.',
                color: 'green',
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
          <div className="bg-green-50 dark:bg-green-950 rounded-xl p-4">
            <p className="text-green-800 dark:text-green-200 text-sm leading-relaxed">
              <strong>Real example:</strong> Google used DeepMind's AI to manage the cooling
              systems in its data centres — achieving a 40% reduction in cooling energy use.
              The same principles are being applied to hospitals, universities, and commercial
              offices through products from Siemens, Honeywell, and UK start-ups like Infogrid.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Predictive maintenance for buildings</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Buildings deteriorate over time — roofs leak, structural elements fatigue, pipes
            corrode. Traditionally, maintenance is either reactive (fix it when it breaks) or
            scheduled (inspect every six months regardless of condition). AI enables a third
            approach: predictive maintenance — fixing things just before they fail.
          </p>
          <div className="space-y-2">
            {[
              'Sensors embedded in concrete, steel, or cladding systems continuously monitor strain, vibration, temperature, and moisture — sending data to AI systems that detect anomalies indicating early-stage deterioration.',
              'Bridge monitoring: AI-powered structural health monitoring is used on Crossrail (Elizabeth line) infrastructure and on major road bridges managed by National Highways.',
              'Building envelope monitoring: AI systems track heat loss through walls, identifying insulation failures — particularly important for social housing stock under retrofit programmes.',
              'Lift and escalator maintenance: major manufacturers including Otis and Schindler use AI to predict lift failures before they occur, reducing breakdown callouts by analysing motor performance data continuously.',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-purple-600 dark:text-purple-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The future and the questions</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI is not about to replace architects — but it is changing what architecture means
            as a profession, and raising important questions that society needs to address.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4BC;',
                label: 'What happens to architectural roles?',
                text: 'Much of what junior architects currently do — technical drawing, calculations, code compliance checks — is becoming automated. The profession is shifting toward skills AI cannot replicate: client relationships, ethical judgment, understanding of community needs, and creative synthesis.',
                color: 'rose',
              },
              {
                icon: '&#x00A9;&#xFE0F;',
                label: 'Who owns AI-generated designs?',
                text: "If an AI generates a building design based on an architect's inputs, who owns the copyright? UK copyright law requires a human author — so designs generated purely by AI may not be protectable. This is an active legal debate with significant commercial implications.",
                color: 'rose',
              },
              {
                icon: '&#x2696;&#xFE0F;',
                label: 'Accessibility and equity',
                text: 'Generative design tools are expensive and require specialist skills. If AI-powered design becomes the norm, smaller firms and community architecture practices may be left behind — concentrating the benefits of the technology among already-large firms.',
                color: 'rose',
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
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">What you can do</h2>
          <div className="space-y-2">
            {[
              'If you are having a building project done, ask your architect or contractor whether they use AI tools — and what data those tools collect or share.',
              "Planning decisions are public. You can check your local council's planning portal to see applications in your area, and comment on proposals that affect you.",
              'If you live in or work in a smart building, ask the building manager what data is collected by the building management system — you may have rights under UK GDPR.',
              'The Royal Institute of British Architects (RIBA) publishes guidance on AI and digital tools for architects — useful background if you are curious about the professional debate.',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-amber-600 dark:text-amber-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-architecture" />

        <Quiz lessonId="ai-and-architecture" questions={quizQuestions} />

        <LessonNote lessonId="ai-and-architecture" />

        <LessonRating lessonId="ai-and-architecture" />

        <LessonFeedback lessonId="ai-and-architecture" />

        <RelatedLessons currentId="ai-and-architecture" />

        <NextLesson currentId="ai-and-architecture" />

        <CompletedBadge lessonId="ai-and-architecture" />

      </div>
    </div>
  )
}
