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

const LESSON_TITLE = 'AI and smart cities'

const KEY_TAKEAWAYS = [
  'Smart cities use AI-powered sensors and data networks to make urban life more efficient — from traffic lights that adapt in real time to bins that signal when they need emptying.',
  'AI is reshaping building design through generative design tools that explore thousands of structural options and energy-efficiency models that reduce heating and cooling costs.',
  'Urban planning increasingly uses AI to forecast housing demand, model the impact of new developments, and optimise zoning — but decisions remain in the hands of human planners.',
  'Surveillance is the most controversial dimension: facial recognition cameras in public spaces offer security benefits but raise serious civil liberties concerns, particularly around bias and consent.',
  'Residents have a voice: public consultations, freedom of information requests, and data protection rights all give ordinary people a say in how city data is collected and used.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What makes a city "smart" in the technical sense?',
    options: [
      'A city where all residents use smartphones and electric vehicles',
      'A city that has replaced all human workers with robots and automated systems',
      'A city that uses connected sensors, data networks, and AI to monitor and manage urban infrastructure in real time',
      'A city that has achieved net-zero carbon emissions using renewable energy',
    ],
    correctIndex: 2,
    explanation:
      "A smart city uses a combination of connected sensors (IoT devices), high-speed data networks, and AI to collect and analyse information about how the city is functioning — then uses that data to make decisions, often in real time. This might mean traffic lights that adjust based on live congestion data, street lighting that dims when no one is nearby, or flood sensors that alert emergency services before water levels become dangerous. The 'smart' label is about the city becoming responsive and data-driven, not about any single technology. Critically, the technology is a means to an end: the goal is to make cities more efficient, safer, and more sustainable for the people who live in them.",
    hint: 'Think about what data + AI would actually change about how a city operates.',
  },
  {
    question: 'What is "generative design" in the context of architecture?',
    options: [
      'A style of architecture inspired by natural forms like trees and shells, popular in the 1960s',
      'AI software that explores thousands of possible building designs based on constraints set by the architect, then presents the best options',
      'A method of 3D printing building components layer by layer using concrete and steel',
      'A planning process where local residents generate ideas for new public spaces through community workshops',
    ],
    correctIndex: 1,
    explanation:
      'Generative design is an AI-assisted design process where the architect or engineer specifies a set of constraints — the building must fit within this footprint, use no more than this much steel, achieve this energy rating, accommodate this number of people — and then AI software explores thousands or even millions of possible designs that meet those constraints. The architect reviews the best options and refines them. Tools like Autodesk Forma use this approach. The result is often designs that a human would not have reached through traditional drafting, sometimes with unusual structural shapes that turn out to be more efficient. The AI is a powerful creative assistant, but the architect still makes the final calls.',
    hint: 'Think about what it means for software to "generate" design options.',
  },
  {
    question: 'Why is facial recognition in public spaces particularly controversial in a smart city context?',
    options: [
      'Facial recognition cameras are prohibitively expensive and cities cannot afford to maintain them',
      'The cameras require people to stop and face them directly, which disrupts normal pedestrian movement',
      'Facial recognition systems have higher error rates for darker-skinned faces and women, raising bias concerns, and enable mass surveillance of citizens without their consent',
      'Facial recognition only works indoors and is ineffective on city streets due to weather and lighting',
    ],
    correctIndex: 2,
    explanation:
      "Multiple studies — including MIT Media Lab research by Joy Buolamwini — have found that facial recognition systems perform significantly worse on darker-skinned faces and women compared with lighter-skinned men. In real-world policing, this has led to wrongful arrests of innocent people. Beyond accuracy, there is a fundamental civil liberties question: should citizens be identifiable by name every time they walk through a public space? In the UK, the Metropolitan Police has used live facial recognition cameras at public events, triggering legal challenges. The EU's AI Act categorises real-time biometric identification in public spaces as 'high risk'. China's deployment of city-wide facial recognition systems in cities like Shenzhen is often cited as a cautionary example of where this technology can lead.",
    hint: 'Think about both technical accuracy and who has the right to know where you go.',
  },
  {
    question: 'What can an ordinary resident do if they are concerned about how their city collects and uses data?',
    options: [
      'Very little — smart city data systems are classified infrastructure and residents have no legal right to information about them',
      'They can attend public consultations, submit freedom of information requests to local councils, exercise data subject access rights under UK GDPR, and vote for councillors who share their concerns',
      'They can opt out of all smart city data collection by registering with their local council',
      'They should move to a rural area, as smart city technology only operates within city boundaries',
    ],
    correctIndex: 1,
    explanation:
      "Residents have more power than they might think. In the UK, local councils must hold public consultations before installing major new infrastructure including surveillance cameras — attending these meetings and making views known is a direct form of democratic participation. Freedom of information (FOI) requests allow anyone to ask a public body what data it collects, how it is stored, and who has access — councils are legally required to respond. Under UK GDPR, individuals also have a 'right of access' to personal data that an organisation holds about them. And at the ballot box, local elections determine who sits on the council that makes these decisions. Smart city technology is not beyond democratic oversight — it just requires residents to engage with the process.",
    hint: 'Think about the democratic and legal tools already available in the UK.',
  },
]

export function AIAndSmartCities() {
  useMarkVisited('ai-and-smart-cities')

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3D9;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and smart cities
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Urban planning, smart traffic, energy-efficient buildings, and the surveillance city debate
            — how AI is reshaping the places we live.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 8 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-smart-cities" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-cyan-100 dark:border-cyan-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">What is a smart city?</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            A smart city is an urban area that uses <strong>connected sensors, data networks, and AI</strong> to
            collect information about how the city is functioning — then uses that information to make better
            decisions, often in real time. The goal is to make cities more efficient, safer, and more sustainable
            for the people who live and work in them.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The technology is not one thing — it is a layer of intelligence placed on top of existing urban
            infrastructure. Traffic lights that adjust based on live congestion data, street lighting that dims
            when a road is empty, flood sensors that alert emergency services before water levels become
            dangerous, bins that signal when they need emptying — these are all smart city applications, each
            quietly making city management a little more responsive.
          </p>
          <div className="bg-cyan-50 dark:bg-cyan-950 rounded-xl p-4">
            <p className="text-cyan-800 dark:text-cyan-200 text-sm leading-relaxed">
              <strong>The UK smart city landscape:</strong> Manchester, Bristol, Milton Keynes, and London
              are among the UK's most active smart city programmes. The UK Government's
              Office for AI has invested in city data platforms since 2019. Amsterdam, Barcelona, and
              Singapore are among the global leaders — each taking a different approach to governance
              and resident participation.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI and traffic management</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Traffic is one of the most visible and impactful applications of smart city AI. Traditional
            traffic lights run on fixed timers — green for 60 seconds, red for 45, regardless of whether
            a hundred cars are waiting or the road is empty. AI-powered traffic management changes this
            fundamentally.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F6A6;',
                label: 'Adaptive traffic signals',
                text: "Sensors and cameras at each junction feed real-time data — how many vehicles are queuing, how fast they're moving — into an AI system that adjusts signal timings dynamically. Siemens and Cubic have deployed these systems across UK cities. Milton Keynes's urban traffic control system has reduced average journey times by around 10%.",
                color: 'green',
              },
              {
                icon: '&#x1F68C;',
                label: 'AI and public transport',
                text: 'Transport for London uses AI to predict bus arrival times, manage signal priority for buses running late, and model passenger flows across the Underground. In Singapore, bus frequencies are adjusted in real time based on passenger demand data from Oyster-style tap-in cards.',
                color: 'green',
              },
              {
                icon: '&#x1F699;',
                label: 'Autonomous vehicles in cities',
                text: 'Several UK cities are trialling autonomous shuttle pods — Navya and EasyMile vehicles have run on closed routes in Greenwich and Coventry. Fully autonomous public roads remain years away, but AI is already making human-driven vehicles safer through collision avoidance and lane-keeping technology.',
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
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI in building design</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Architecture and construction are being transformed by AI tools that help designers create
            more efficient, sustainable, and structurally innovative buildings.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            <strong>Generative design</strong> is the most striking development. An architect specifies
            constraints — the building must fit within this footprint, use no more than this amount of
            steel, achieve this energy rating, accommodate this many people — and AI software explores
            thousands of possible designs that meet those constraints. The architect reviews the best
            options and refines them. The results are sometimes structurally unconventional, but often
            more efficient than anything a human would have reached through traditional drafting.
          </p>
          <div className="bg-blue-50 dark:bg-blue-950 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm">Building Information Modelling (BIM)</p>
            <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
              BIM is a digital representation of a building that exists before a single brick is laid.
              AI-enhanced BIM tools can simulate how the building will perform in different weather conditions,
              identify where structural loads are concentrated, flag clashes between plumbing and electrical
              systems, and estimate energy use across the building's lifetime. The UK Government has required
              BIM on all government construction projects above £1 million since 2016.
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Energy modelling is perhaps the most consequential application. Buildings account for around
            40% of global energy use. AI tools can simulate heating, cooling, and lighting across thousands
            of design variations to find the configuration that minimises energy use while keeping occupants
            comfortable. This is how Passivhaus and net-zero buildings are designed.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI and urban planning</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Urban planning — deciding where housing, transport links, parks, and commercial space should
            go — has traditionally relied on surveys, population projections, and the judgment of
            experienced planners. AI is now augmenting this process in several ways.
          </p>
          <div className="space-y-2">
            {[
              {
                icon: '&#x1F3D8;&#xFE0F;',
                label: 'Housing demand forecasting',
                text: 'AI models that combine population growth data, migration patterns, economic indicators, and planning application histories can forecast where housing demand will be highest — helping councils decide where to zone for new development.',
              },
              {
                icon: '&#x1F30D;',
                label: 'Development impact modelling',
                text: 'Before a major development is approved, planners need to understand its impact: traffic, flood risk, shadows cast on neighbouring buildings, strain on school places and GP surgeries. AI tools can model these impacts faster and more comprehensively than traditional methods.',
              },
              {
                icon: '&#x1F4CB;',
                label: 'Automated planning applications',
                text: 'Some local councils are piloting AI systems that check planning applications for compliance with regulations automatically — flagging obvious violations instantly and freeing human planners to focus on complex or contentious cases. Southwark Council in London has trialled one such system.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start">
                <span className="text-2xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100 text-sm mb-0.5">{label}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-orange-50 dark:bg-orange-950 rounded-xl p-4">
            <p className="text-orange-800 dark:text-orange-200 text-sm leading-relaxed">
              <strong>Important caveat:</strong> AI tools in planning are decision-support systems, not
              decision-makers. Planning decisions involve value judgements — what kind of city do we want
              to live in? — that require democratic accountability and human judgment. AI can help planners
              understand the consequences of different choices, but the choices themselves remain with
              elected representatives and the communities they serve.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The surveillance city debate</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The most controversial dimension of smart cities is surveillance. When you install
            AI-powered sensors across an urban area, you inevitably collect information about how
            people move, gather, and behave in public spaces. Done carefully, this data can make
            cities safer and more responsive. Done poorly, it can erode civil liberties.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4F7;',
                label: 'Facial recognition on the street',
                text: "The Metropolitan Police has deployed live facial recognition (LFR) cameras at events and in high footfall areas like Oxford Street and Waterloo station. The system scans faces in real time against a watchlist of wanted individuals. Critics — including Liberty and Big Brother Watch — argue this constitutes mass surveillance of innocent people who have given no consent. Studies by NIST and MIT Media Lab have found LFR systems have significantly higher error rates for darker-skinned faces and women.",
                color: 'red',
              },
              {
                icon: '&#x1F1E8;&#x1F1F3;',
                label: "China's social credit system — a cautionary example",
                text: "China has deployed city-wide camera networks in cities like Shenzhen, integrating facial recognition with behavioural scoring. Citizens can be flagged for jaywalking, sharing 'misinformation', or failing to pay debts — with consequences including travel bans and exclusion from certain schools. Most AI ethics researchers cite this as an example of surveillance technology used to suppress dissent rather than to serve citizens.",
                color: 'red',
              },
              {
                icon: '&#x2696;&#xFE0F;',
                label: 'The legal position in the UK',
                text: "The UK Court of Appeal ruled in 2020 (in the Bridges case against South Wales Police) that the use of facial recognition in public without adequate safeguards was unlawful under human rights law. The EU's AI Act, which the UK may align with post-Brexit, categorises real-time biometric identification in public spaces as 'high risk', requiring strict oversight and human control.",
                color: 'red',
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

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Smart cities around the world</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Different cities have taken very different approaches to smart city development, reflecting
            their values and governance models.
          </p>
          <div className="space-y-2">
            {[
              {
                city: 'Amsterdam',
                flag: '&#x1F1F3;&#x1F1F1;',
                text: 'Known for citizen participation — residents are involved in designing smart city experiments. Amsterdam has a public smart city data platform where anyone can see what sensors are deployed and what data they collect. It has also set clear no-go zones: no facial recognition in public spaces.',
              },
              {
                city: 'Singapore',
                flag: '&#x1F1F8;&#x1F1EC;',
                text: "Often cited as the world's most complete smart city — sensors monitor almost every aspect of urban life, from dengue fever hotspots to food waste. The government has also invested in Smart Nation citizen services. Critics note that Singapore's authoritarian governance makes the trade-offs between efficiency and civil liberties different from democratic cities.",
              },
              {
                city: 'Songdo, South Korea',
                flag: '&#x1F1F0;&#x1F1F7;',
                text: "Built from scratch as a 'city of the future', Songdo has pneumatic waste collection, sensors in every road, and a city operating centre monitoring everything in real time. The experiment has been instructive: a technologically perfect city does not automatically attract residents — by 2020, Songdo was only 70% occupied despite vast investment.",
              },
              {
                city: 'London',
                flag: '&#x1F1EC;&#x1F1E7;',
                text: "Transport for London's data platform is one of the world's most open — the Oyster and contactless payment data underpins apps used by millions. TfL has been cautious about facial recognition. The Smart London Board coordinates city-wide initiatives but governance remains fragmented across 32 boroughs.",
              },
            ].map(({ city, flag, text }) => (
              <div key={city} className="flex gap-3 items-start">
                <span className="text-2xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: flag }} />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100 text-sm mb-0.5">{city}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-teal-100 dark:border-teal-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">What can residents do?</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Smart city technology is not beyond democratic oversight — residents have more power than
            they might think.
          </p>
          <div className="space-y-2">
            {[
              'Attend public consultations — councils must consult before installing major new infrastructure including surveillance cameras.',
              'Submit freedom of information (FOI) requests — any UK resident can ask a public body what data it collects, how it is stored, and who has access.',
              'Exercise your data rights under UK GDPR — you can request access to personal data an organisation holds about you.',
              'Vote in local elections — councillors make the decisions about what technology gets deployed in your neighbourhood.',
              "Support civil liberties organisations — groups like Liberty, Big Brother Watch, and Privacy International actively scrutinise smart city deployments and have brought successful legal challenges.",
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-teal-600 dark:text-teal-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-smart-cities" />

        <Quiz lessonId="ai-and-smart-cities" questions={quizQuestions} />

        <LessonNote lessonId="ai-and-smart-cities" />

        <LessonRating lessonId="ai-and-smart-cities" />

        <LessonFeedback lessonId="ai-and-smart-cities" />

        <RelatedLessons currentId="ai-and-smart-cities" />

        <NextLesson currentId="ai-and-smart-cities" />

        <CompletedBadge lessonId="ai-and-smart-cities" />

      </div>
    </div>
  )
}
