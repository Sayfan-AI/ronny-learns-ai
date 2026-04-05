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

const LESSON_TITLE = 'AI and local government'

const KEY_TAKEAWAYS = [
  'Councils are using AI cameras to automatically detect and report potholes — systems like ViAct and Gaist can analyse dashcam footage from council vehicles and flag road defects without anyone watching the footage manually.',
  'AI is helping councils process planning applications by automatically checking documents for completeness, identifying similar past decisions, and flagging applications likely to be controversial — speeding up a process that can currently take months.',
  'Predictive systems in social services aim to identify children or families at risk before a crisis point, but they have faced serious criticism for reinforcing discrimination against deprived communities and communities of colour.',
  'AI route-optimisation software is saving councils money on waste collection by calculating the most efficient lorry routes — some councils report fuel savings of 10 to 20% after switching to AI-planned routes.',
  'Anyone affected by an algorithmic council decision has the right under UK GDPR to a meaningful explanation of how that decision was made — and the right to request a human review.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How are some UK councils using AI to deal with potholes?',
    options: [
      'They use underground sensors embedded in the road surface that detect vibrations from cars and automatically submit repair orders',
      'They use AI camera systems that analyse footage from council vehicles to automatically detect and report road defects without anyone watching the footage manually',
      'They use a smartphone app that citizens use to photograph potholes, with AI analysing the severity and automatically scheduling repairs',
      'They use satellite imagery from GPS systems to detect changes in road surface texture and predict where potholes are forming before they become dangerous',
    ],
    correctIndex: 1,
    explanation:
      'Systems like Gaist and ViAct can process dashcam or forward-facing camera footage from council vehicles such as road sweepers and gritting lorries as they go about their normal routes. The AI is trained to recognise road surface defects — cracks, subsidence, potholes — and automatically log their location using GPS. This means councils can survey the condition of their entire road network continuously, without sending out dedicated inspection teams. The technology has been piloted by several UK councils including Lincolnshire and Hertfordshire, significantly increasing the number of defects identified each year.',
    hint: 'Think about cameras on vehicles that already travel the roads regularly.',
  },
  {
    question: 'How is AI being used to speed up the planning application process?',
    options: [
      'AI automatically approves straightforward applications such as small extensions or loft conversions without any human review to reduce the backlog',
      'AI checks documents for completeness, identifies similar past decisions, and flags applications likely to be controversial — helping officers prioritise and process cases faster',
      'AI designs alternative development proposals for rejected applications and automatically sends these revised plans back to the applicant for consideration',
      'AI negotiates with developers on behalf of the council to agree planning conditions, reducing the back-and-forth that typically adds months to decisions',
    ],
    correctIndex: 1,
    explanation:
      'Planning departments are chronically understaffed and face tens of thousands of applications every year. AI tools like those being piloted by several London boroughs and the Planning Advisory Service can automatically check whether all required documents have been submitted (missing documents are the most common cause of delay), search the database of past decisions for similar applications, and flag applications that have characteristics associated with local controversy or legal challenge. This does not replace planning officers — it helps them manage their caseload more effectively, focusing their expertise where it is most needed.',
    hint: 'Think about the administrative work before and during the decision-making process.',
  },
  {
    question: 'What serious concern has been raised about AI predictive systems in children\'s social services?',
    options: [
      'The systems are too expensive for most councils to afford, creating a two-tier system where wealthier areas protect children better than poorer ones',
      'The systems have been found to reinforce discrimination, flagging families in deprived communities and communities of colour at disproportionately high rates',
      'The systems share data with commercial companies, allowing advertising firms to target families identified as vulnerable with unsuitable products',
      'The systems are too slow to process referrals in genuine emergencies, meaning social workers receive alerts hours after they should have been deployed',
    ],
    correctIndex: 1,
    explanation:
      'Predictive analytics tools used in children\'s social care — such as the Harm Assessment Risk Tool (HART) previously used by Durham Constabulary and similar systems in child protection — have faced major criticism. Because these systems are trained on historical data, and historical data reflects past discriminatory practices (deprived families and Black and Asian families have historically been subject to more surveillance and intervention), the AI learns to flag these groups at higher rates. This creates a self-fulfilling prophecy: the AI predicts risk, intervention occurs, data confirms the prediction, and the model becomes more confident. The Ada Lovelace Institute and various academic researchers have documented these harms in the UK context.',
    hint: 'Think about what happens when AI learns from historical data that already reflects inequality.',
  },
  {
    question: 'How does AI route optimisation help councils with waste collection?',
    options: [
      'It uses underground sensors in bins to detect when they are full and schedules collection only when necessary, reducing unnecessary journeys',
      'It calculates the most efficient routes for collection lorries based on road conditions, traffic patterns, and bin locations — reducing fuel use and time on the road',
      'It automatically sorts recycling at the depot using computer vision, reducing the manual labour required after collection and cutting processing costs',
      'It coordinates with supermarkets to collect food waste before shops close each day, integrating retail and residential collection into a single efficient route',
    ],
    correctIndex: 1,
    explanation:
      'Waste collection is one of the most fuel-intensive activities local councils undertake. Traditional routes are often designed decades ago and do not account for traffic patterns, road closures, or seasonal variation in waste volumes. AI route optimisation software — from companies like Routemaster or Zefiro — analyses all these factors and calculates routes that minimise fuel consumption and time. Councils including Leeds and Liverpool have reported fuel savings of 10 to 20% after implementing AI-planned routes. With fuel a significant part of council budgets, these savings matter — and the reduced emissions are an environmental benefit too.',
    hint: 'Think about how more efficient routes save both money and fuel.',
  },
  {
    question: 'What right do people have if a council makes a decision about them using an algorithm?',
    options: [
      'The right to opt out of all algorithmic decision-making by contacting the council in writing and requesting only human decision-making for their case',
      'The right under UK GDPR to a meaningful explanation of how the algorithmic decision was made and the right to request a human review of that decision',
      'The right to appeal to an independent AI tribunal, separate from the council\'s standard complaints process, that specialises in algorithmic decision disputes',
      'The right to access the full source code of the algorithm so they can independently verify whether it was applied correctly to their case',
    ],
    correctIndex: 1,
    explanation:
      'Under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, individuals have the right not to be subject to a decision based solely on automated processing that significantly affects them — and if such a decision is made, they have the right to obtain human intervention and challenge the decision. Councils must be able to explain in plain language how an algorithmic system contributed to a decision. The Information Commissioner\'s Office (ICO) has published guidance specifically for public bodies on using AI in decision-making. If a council cannot explain how its algorithm works, that is a problem — and a legal one.',
    hint: 'Think about data protection rights and the right to a human review.',
  },
]

export function AIAndLocalGovernment() {
  useMarkVisited('ai-and-local-government')

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3DB;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and local government
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How UK councils are using AI to fix potholes, speed up planning applications, manage waste routes,
            and predict social care risks — and the serious questions about accountability this raises.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-local-government" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Why local councils are turning to AI</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            UK councils are under enormous pressure. Budgets have been cut, demand for services has risen, and the range of things councils are expected to do — from housing to highways to children's services — has not shrunk. AI is one of the tools councils are using to try to do more with less.
          </p>
          <div className="space-y-2">
            {[
              'UK local government has faced cumulative funding reductions of over 40% in real terms since 2010',
              'Councils collectively manage over 300,000 km of roads — constantly inspecting all of them manually is impossible',
              'Planning applications have an average decision time of 8 weeks for minor cases, but complex applications can take years',
              'Children\'s social services in England dealt with over 730,000 referrals in 2022 to 2023, with councils struggling to cope with the volume',
              'Waste collection accounts for a significant portion of many councils\' operational budgets — any efficiency improvement has real impact',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Potholes — when AI drives the roads so humans don't have to</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The humble pothole costs UK drivers an estimated £1.7 billion a year in vehicle damage — and councils spend hundreds of millions on repairs. AI is helping find them faster.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-orange-50 dark:bg-orange-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F9;</span>
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-200 text-sm mb-0.5">Camera-based detection</p>
                <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">Council vehicles — road sweepers, gritting lorries, inspection vans — are fitted with forward-facing cameras. As they travel their normal routes, the cameras record continuously. AI analyses the footage in real time or later, identifying road surface defects, logging their GPS location, and generating repair reports automatically. Councils like Lincolnshire and Hertfordshire have used Gaist to survey their entire road network this way.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-orange-50 dark:bg-orange-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CA;</span>
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-200 text-sm mb-0.5">Prioritisation</p>
                <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">Not all potholes are equally dangerous. AI systems can classify defects by severity, depth, and location (a pothole on a busy A-road is more urgent than one on a quiet cul-de-sac) and generate prioritised repair schedules — ensuring the most dangerous defects are fixed first.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Predictive social services — powerful and problematic</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The most ethically complex use of AI in local government is predicting which families or children are at risk of harm — before anything has happened.
          </p>
          <div className="bg-red-50 dark:bg-red-950 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-red-800 dark:text-red-200 text-sm">Why this is controversial</p>
            <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
              Predictive systems are trained on historical data about families who were previously referred to social services. But that historical data reflects historical biases — families in poverty, families from certain ethnic backgrounds, and families in social housing were all historically more likely to face scrutiny, not necessarily because they were more at risk, but because they were more visible to authorities. AI trained on this data learns to flag the same groups, potentially at the expense of those it was meant to help.
            </p>
          </div>
          <div className="space-y-2">
            {[
              'The Ada Lovelace Institute and multiple academic studies have documented concerns about discrimination in predictive social care tools in the UK',
              'In 2020, the Dutch government was ordered by a court to shut down a fraud prediction system (SyRI) that disproportionately targeted low-income and immigrant communities — a warning for the UK',
              'Proponents argue these tools help resource-stretched social workers identify which referrals to prioritise — but critics say human judgement should not be replaced by a score',
              'The Information Commissioner\'s Office has called for transparency: councils using these tools must be able to explain the decisions they make',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Your rights when a council uses an algorithm</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            If a council uses an AI system to help make a decision about you — about housing, benefits, planning, or social care — you have rights.
          </p>
          <div className="space-y-2">
            {[
              'Under UK GDPR, you have the right to a meaningful explanation of how an algorithmic decision was made — in plain language',
              'You have the right to request a human review of any significant decision made wholly or substantially by an algorithm',
              'You can make a Subject Access Request (SAR) to find out what data the council holds about you and how it was used',
              'You can complain to the Information Commissioner\'s Office (ICO) if you believe your data rights have been violated',
              'The Local Government Ombudsman can investigate complaints about council services including complaints about algorithmic decision-making',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-local-government" />
        <LessonNote lessonId="ai-and-local-government" />

        <Quiz questions={quizQuestions} lessonId="ai-and-local-government" />

        <LessonRating lessonId="ai-and-local-government" />
        <LessonFeedback lessonId="ai-and-local-government" />

        <RelatedLessons currentId="ai-and-local-government" />

        <NextLesson currentId="ai-and-local-government" />
      </div>
    </div>
  )
}
