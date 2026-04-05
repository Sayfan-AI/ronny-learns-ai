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
    question: 'How do councils use AI to detect potholes more efficiently than traditional methods?',
    options: [
      'Councils send robots underground to measure road thickness and predict where potholes will form next',
      'AI analyses images from cameras mounted on council vehicles or reported via apps to automatically detect, log, and prioritise potholes by severity, covering far more roads than manual inspection teams',
      'Satellites photograph every UK road daily and AI flags any changes in the tarmac surface visible from space',
      'Residents complete a monthly survey on their street conditions and AI compiles the results into a maintenance schedule',
    ],
    correctIndex: 1,
    explanation:
      'Several UK councils use AI road monitoring systems. Cameras mounted on refuse lorries, street-cleaning vehicles, or dedicated survey cars capture continuous footage of road surfaces. AI analyses this footage to detect potholes, cracks, and deteriorating road markings, automatically logging location and severity. This can cover an entire borough in weeks rather than the months it would take manual inspection teams. The AI prioritises repairs by severity and location, helping councils allocate limited road maintenance budgets more effectively.',
    hint: 'Think about cameras on vehicles and automatic image analysis.',
  },
  {
    question: 'What is algorithmic accountability in the context of local government AI?',
    options: [
      'A system where AI automatically fires council workers who make mistakes',
      'The requirement that when AI systems make or inform decisions affecting residents, councils must be able to explain how those decisions were reached, allow challenges, and have human oversight',
      'A law requiring all council algorithms to be written in a programming language that non-technical residents can read',
      'An accounting system that tracks how much councils spend on AI contracts',
    ],
    correctIndex: 1,
    explanation:
      "Algorithmic accountability means that public bodies using AI to make decisions affecting people's lives must be transparent and open to challenge. If an AI system recommends that someone's housing benefit be reduced, the council must be able to explain what factors led to that recommendation, allow the resident to contest it, and have a human review the decision. The UK's Public Sector Equality Duty and the Equality Act 2010 apply to algorithmic decisions, meaning councils must assess whether their AI systems discriminate against protected groups.",
    hint: 'Think about transparency, explanation, and the ability to challenge AI decisions.',
  },
  {
    question: 'How is AI being used to help social services identify vulnerable families earlier?',
    options: [
      'AI monitors all social media accounts of council residents and flags any posts mentioning family difficulties',
      'AI analyses data from multiple council systems such as housing, benefits, and school attendance to identify patterns associated with families that may need early support, allowing social workers to make contact before a crisis develops',
      'AI interviews children at school each week and generates reports on family wellbeing',
      'Councils use AI to automatically remove children from families identified as high-risk without any human involvement',
    ],
    correctIndex: 1,
    explanation:
      "Early intervention AI tools aim to identify vulnerable families before problems escalate. They typically analyse anonymised data from systems councils already hold: housing arrears, benefit claims, school attendance records, GP referrals, and previous social care contacts. Patterns in this combined data can flag families who may benefit from early support. Critically, the AI does not make decisions, it identifies cases for a social worker to assess. The approach is controversial: supporters argue it enables earlier help; critics raise concerns about privacy, bias, and the risk of stigmatising families based on data profiles.",
    hint: 'The key is combining data from multiple systems to identify patterns, with human workers making the actual decisions.',
  },
  {
    question: 'What is the purpose of AI-powered planning permission tools in local councils?',
    options: [
      'To automatically approve or reject all planning applications without any human involvement, saving councils money',
      'To help planning officers process large volumes of applications more quickly by automatically checking applications against planning rules, flagging issues, and summarising relevant history for the officer to consider',
      'To design buildings on behalf of applicants and submit planning permission requests automatically',
      'To prevent residents from appealing planning decisions by making the process too complicated to navigate',
    ],
    correctIndex: 1,
    explanation:
      'Planning departments in UK councils typically receive thousands of applications per year, ranging from simple loft conversions to complex commercial developments. AI tools can automatically check whether an application includes all required documents, flag potential conflicts with local planning policies, retrieve relevant planning history for the site, and generate a summary for the planning officer. This reduces the administrative burden on officers, speeds up straightforward applications, and frees up expert time to focus on complex or contested cases. Human planning officers still make all decisions.',
    hint: 'The AI helps with the administrative and checking work, not the actual decision-making.',
  },
  {
    question: 'Why do campaigners raise concerns about bias in local government AI systems?',
    options: [
      'Because AI systems are programmed by council workers who are paid more than residents and therefore have different priorities',
      'Because AI trained on historical data can perpetuate past patterns of discrimination, meaning some groups such as those in deprived areas or certain ethnic communities may be more likely to be flagged by risk-scoring systems regardless of actual need',
      'Because AI prefers to help residents who live in expensive houses and ignores those in social housing',
      'Because council AI systems are operated by private companies based overseas who have no interest in fairness',
    ],
    correctIndex: 1,
    explanation:
      "Algorithmic bias in public sector AI is a documented concern. If an AI is trained on historical social care, benefits, or policing data, it may reflect historical patterns in which certain groups were disproportionately investigated or denied services. The AI can then perpetuate these patterns at scale. For example, if families in a particular postcode were historically more likely to have social care referrals due to poverty rather than neglect, an AI might over-flag families in that area. The Equality and Human Rights Commission has called for rigorous equality impact assessments before councils deploy AI systems that affect residents' access to services.",
    hint: 'Historical data can reflect historical biases, and AI trained on that data may reproduce them.',
  },
]

export function AIAndLocalGovernment() {
  useMarkVisited('ai-and-local-government')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3DB;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and local government
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Pothole detection, planning permission tools, social services AI, and the important question of
            algorithmic accountability &mdash; how AI is being used by UK councils and what residents need to know.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-local-government" />
          <ShareButton lessonTitle="AI and local government" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Fixing the roads &mdash; AI pothole detection</h2>
          <p className="text-gray-600 leading-relaxed">
            The UK has a significant backlog of road repairs. AI is helping councils survey roads faster
            and prioritise the worst potholes more effectively.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F6E3;&#xFE0F;',
                label: 'Camera-equipped vehicles',
                text: 'Councils mount cameras on refuse lorries, street-cleaning vehicles, and dedicated survey cars. As these vehicles go about their normal routes, AI continuously analyses the footage to detect potholes, cracks, and failing road surfaces. One survey pass can cover an entire borough.',
              },
              {
                icon: '&#x1F4F1;',
                label: 'Resident reporting apps',
                text: 'Apps like FixMyStreet let residents photograph potholes and submit them with GPS coordinates. AI analyses the images to assess severity, filters out duplicates, and routes reports to the correct team. This creates a real-time map of road damage across the borough.',
              },
              {
                icon: '&#x1F4CA;',
                label: 'Prioritisation and budgeting',
                text: 'AI ranks potholes by severity, location risk (busy road versus quiet residential street), and likely deterioration rate. This helps councils allocate their limited road maintenance budgets to the repairs that will have the greatest safety impact.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Planning permissions &mdash; AI for planning officers</h2>
          <p className="text-gray-600 leading-relaxed">
            UK councils receive thousands of planning applications each year. AI is helping planning
            departments process them faster without cutting corners on scrutiny.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '&#x2705;', title: 'Document checking', text: "AI automatically checks whether a planning application includes all required documents and drawings. If anything is missing, it flags this immediately, reducing the back-and-forth that currently causes delays at the start of the process." },
              { icon: '&#x1F4DC;', title: 'Policy screening', text: "The AI scans applications against the council's local planning policies and flags potential issues for the officer to consider. For example, if an application is for a building in a flood zone or a conservation area, the AI highlights the relevant policy constraints." },
              { icon: '&#x1F4CD;', title: 'Site history retrieval', text: "The AI retrieves the full planning history of a site in seconds, including previous applications, decisions, appeals, and any conditions attached. This can take an officer several hours manually across different systems." },
              { icon: '&#x1F9D1;', title: 'Human decisions', text: "AI does not approve or reject planning applications. A qualified planning officer makes every decision, using the AI-generated summary as a starting point. Complex or controversial applications receive the same human scrutiny as before." },
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
          <h2 className="text-2xl font-bold text-gray-800">Social services AI &mdash; early intervention tools</h2>
          <p className="text-gray-600 leading-relaxed">
            Some councils use AI to try to identify vulnerable families earlier, before problems
            escalate to crisis. This is one of the most sensitive uses of AI in local government.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CA;',
                label: 'How it works',
                text: "The AI analyses anonymised data from multiple council systems: housing arrears, benefit claims, school attendance records, and previous social care contacts. Patterns in this combined data can flag families who might benefit from an early conversation with a support worker.",
              },
              {
                icon: '&#x1F91D;',
                label: 'The intended benefit',
                text: "By identifying need earlier, councils hope to offer support before a family reaches crisis point. Early intervention is generally cheaper and less traumatic than crisis response. The AI flags cases for human assessment; it does not make decisions.",
              },
              {
                icon: '&#x26A0;&#xFE0F;',
                label: 'The concerns',
                text: "Critics raise serious concerns: privacy (combining multiple data sources without residents' knowledge), bias (the AI may over-flag families in deprived areas because historical data reflects poverty, not actual neglect), and stigma (families may face scrutiny based on data profiles rather than actual behaviour).",
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

        <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Algorithmic accountability &mdash; your right to know</h2>
          <p className="text-gray-600 leading-relaxed">
            When a council uses AI to inform decisions about you &mdash; your benefits, your housing,
            your children &mdash; you have rights. Algorithmic accountability means councils must be
            transparent about how these tools work and must allow you to challenge decisions.
          </p>
          <div className="bg-rose-50 rounded-xl p-4 space-y-2 mb-3">
            <p className="font-semibold text-rose-800 text-sm">Your rights when a council uses AI</p>
            <ul className="text-rose-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>The right to be told that an automated or AI-assisted process was used in a decision affecting you</li>
              <li>The right to request a human review of any automated decision</li>
              <li>The right to an explanation of the factors that influenced the decision</li>
              <li>The right to challenge decisions you believe are incorrect or discriminatory</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-blue-800 text-sm">What councils are required to do</p>
            <ul className="text-blue-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>Conduct Equality Impact Assessments before deploying AI that affects residents</li>
              <li>Ensure AI decisions comply with the Equality Act 2010 and UK GDPR</li>
              <li>Publish details of significant AI systems they use (required by transparency guidance)</li>
              <li>Maintain human oversight of all AI-assisted decisions affecting individual residents</li>
            </ul>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-local-government" />
        <LessonNote lessonId="ai-and-local-government" />

        <Quiz questions={quizQuestions} lessonId="ai-and-local-government" lessonTitle="AI and local government" />

        <LessonFeedback lessonId="ai-and-local-government" />
        <LessonRating lessonId="ai-and-local-government" />
        <RelatedLessons currentId="ai-and-local-government" />
        <NextLesson currentId="ai-and-local-government" />
      </div>
    </div>
  )
}
