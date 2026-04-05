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

const LESSON_TITLE = 'AI and charities'

const KEY_TAKEAWAYS = [
  'Many charities are only beginning to adopt AI — budget constraints, legacy systems, and a shortage of data skills mean the sector lags behind business.',
  'Donor prediction models help charities identify who is most likely to give and when, enabling more targeted and respectful outreach rather than blanket mass mailings.',
  'Volunteer matching platforms use AI to connect volunteers with opportunities that suit their skills, location, and availability — improving retention on both sides.',
  'The ethical risks are real: algorithmic bias can affect who charities target for support, and vulnerable beneficiaries deserve especially careful data protection.',
  'As a donor, you have the right to ask charities how your data is used and whether AI influences how resources are allocated to the people they serve.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'Why do many charities lag behind businesses in adopting AI?',
    options: [
      'Charities are legally prohibited from using AI tools under charity law in the UK',
      'Charities have smaller budgets, older IT infrastructure, fewer data specialists, and governance structures that require extensive trustee approval before adopting new technology',
      'Charities believe AI is unethical and have collectively agreed not to use it',
      'AI tools are simply not useful for charitable work because charity data is too varied and unstructured',
    ],
    correctIndex: 1,
    explanation:
      "Charity adoption of AI lags behind the private sector for structural reasons. Most charities operate on tight budgets — money spent on technology is money not spent on services. Many use legacy donor management systems (often called CRMs) that are old, siloed, and not designed to integrate with modern AI tools. Recruiting and retaining data scientists is hard when salaries cannot compete with the private sector. And charity governance — with volunteer trustees who may have limited tech experience — can slow decision-making. None of this is inevitable: organisations like DataKind and Cause4 specifically help charities build data capacity, often with volunteer data scientists.",
    hint: 'Think about what resources and skills AI adoption typically requires.',
  },
  {
    question: 'What is a donor prediction model and what does it do?',
    options: [
      'A model that predicts how much money a charity will receive from government grants in the next financial year',
      'An AI system that analyses donor data to identify who is most likely to give, how much they might give, and when to approach them — enabling more targeted fundraising',
      'A legal model that predicts whether a charity will maintain its registered status with the Charity Commission',
      'A financial model that predicts which fundraising events will be most profitable based on historical attendance data',
    ],
    correctIndex: 1,
    explanation:
      "Donor prediction models — sometimes called propensity models — analyse everything a charity knows about its existing supporters: giving history, how they first got involved, how they respond to different types of communication, life events like changes of address (which can signal life changes), and sometimes data purchased from third parties. The AI finds patterns that predict future behaviour: this person tends to give when approached by post; this person always gives at Christmas; this person is at risk of lapsing. The charity can then target communications more precisely — sending fewer asks to people unlikely to respond, and more to those who are receptive. Done well, this feels like a more respectful relationship; done badly, it can feel intrusive.",
    hint: 'Think about what a charity would want to know about a donor before deciding when and how to contact them.',
  },
  {
    question: "What is the most significant ethical risk of using AI to decide who receives a charity's services?",
    options: [
      'AI makes these decisions too slowly, causing delays that harm vulnerable people who need urgent support',
      'AI systems trained on historical data can replicate and amplify existing biases — meaning groups already underserved may be further marginalised by automated allocation',
      'Using AI for service allocation is illegal under the Equality Act 2010',
      'AI cannot handle the qualitative information a caseworker needs, so decisions would always be worse than human ones',
    ],
    correctIndex: 1,
    explanation:
      "If a charity's historical data reflects past patterns of who was helped and who was not — patterns that may themselves reflect societal biases — then an AI trained on that data will learn and replicate those patterns. For example: if a food bank has historically served more men than women because women felt less comfortable accessing the service, an AI allocation system trained on that data might score men as 'higher need' simply because they have been served more often. This is the same algorithmic bias problem that affects hiring, policing, and lending — but in a charity context it can directly harm the most vulnerable people the organisation exists to help. The solution is not to avoid AI, but to audit outputs for bias, include diverse voices in design, and always keep human oversight in the loop.",
    hint: 'Think about what happens when historical patterns are baked into a model.',
  },
  {
    question: 'What question should you feel empowered to ask a charity as a donor?',
    options: [
      'Nothing — donors have no legal rights over how charities use their data or allocate resources',
      'Only large donors who give more than £1,000 per year have the right to ask charities about their data practices',
      "How is my personal data used, and does AI influence how the charity decides who receives its services? Charities are subject to UK GDPR and must answer data access requests within one month.",
      'You can only raise concerns about charity data practices by making a formal complaint to the Charity Commission',
    ],
    correctIndex: 2,
    explanation:
      "Under UK GDPR, any individual has the right to ask any organisation — including charities — what personal data it holds about them and how it is used. This is called a Subject Access Request (SAR), and organisations must respond within one month. You can also ask more broadly about the charity's data and AI policies — most reputable charities will answer these questions as part of their transparency commitments. If you are uncomfortable with how a charity uses data, you can ask to be removed from their database, withdraw consent for data sharing, or simply direct your donations elsewhere. The Charity Commission also publishes guidance on AI governance for charities.",
    hint: 'Think about your rights as an individual under UK GDPR.',
  },
]

export function AIAndCharities() {
  useMarkVisited('ai-and-charities')

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F91D;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and charities
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Donor prediction, volunteer matching, and the ethics of automated giving — how nonprofits
            are using AI, and the unique questions it raises.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-charities" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Why AI and charities?</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The UK charity sector is enormous — over 170,000 registered charities, employing nearly
            a million people, and supported by millions of volunteers and donors. Yet most charities
            are only beginning to engage seriously with AI. The sector faces a distinctive set of
            opportunities and ethical challenges that differ from business or government.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The opportunity is clear: AI could help charities reach more people with fewer resources,
            make better use of donor money, and identify need before it becomes crisis. The challenge
            is equally clear: charities exist to serve vulnerable people, which means mistakes have
            human consequences — and the data they hold about beneficiaries is often deeply sensitive.
          </p>
          <div className="bg-rose-50 dark:bg-rose-950 rounded-xl p-4">
            <p className="text-rose-800 dark:text-rose-200 text-sm leading-relaxed">
              <strong>The data skills gap:</strong> A 2023 NCVO survey found that fewer than 10% of
              UK charities have a dedicated data or digital team. Most rely on a single 'database
              administrator' or outsource entirely. DataKind UK connects volunteer data scientists with
              charities to bridge this gap — their alumni have worked with organisations from Oxfam to
              local foodbanks.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Fundraising: donor prediction and targeting</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Fundraising is where AI has the clearest and most immediate commercial case for charities.
            Large fundraising organisations like Cancer Research UK, the RNLI, and British Heart
            Foundation have invested in donor analytics for years. Smaller charities are increasingly
            accessing similar tools through affordable platforms.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CA;',
                label: 'Propensity modelling',
                text: 'AI analyses a charity\'s donor database to identify which supporters are most likely to give, upgrade their giving, set up a direct debit, or lapse. This lets fundraisers prioritise their effort — calling the people most likely to respond, rather than working through an alphabetical list.',
                color: 'indigo',
              },
              {
                icon: '&#x1F4E7;',
                label: 'Personalised communications',
                text: "AI tools can personalise email subject lines, donation ask amounts ('would you consider £25 a month?'), and timing based on when individual donors have historically been most responsive. Research by the Fundraising Effectiveness Project found that donors who receive personalised communication retain at a significantly higher rate.",
                color: 'indigo',
              },
              {
                icon: '&#x1F50E;',
                label: 'Wealth screening',
                text: 'Major gift fundraisers use AI tools that combine publicly available data — company directorships, property ownership, donations to other charities — to identify donors with the capacity for larger gifts. This is legal in the UK but must be disclosed to donors under GDPR. The ICO has provided specific guidance to charities on this practice.',
                color: 'indigo',
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

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Volunteer matching</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Volunteering is one of the most powerful resources the charity sector has — but matching
            volunteers to the right opportunities has historically been hit-and-miss. AI is making this
            process more effective for both volunteers and organisations.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Platforms like <strong>Do-it.org</strong> and <strong>Volunteering Matters</strong> now
            use AI to match volunteers with roles based on skills, location, availability, and interests.
            Rather than showing every volunteer every opportunity, the platform surfaces the roles
            most likely to be a good fit — reducing the frustration of scrolling through irrelevant
            listings and increasing the probability the volunteer commits.
          </p>
          <div className="bg-green-50 dark:bg-green-950 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-green-800 dark:text-green-200 text-sm">Why matching quality matters</p>
            <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">
              Research consistently shows that volunteer retention is higher when the role feels like a
              good fit. A poorly matched volunteer — someone with legal expertise placed in a role that
              needs manual labour, or vice versa — is likely to disengage quickly. Good matching is not
              just convenient; it makes the entire volunteering ecosystem more productive.
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI is also being used in <strong>emergency response volunteering</strong> — coordinating
            spontaneous volunteers who show up after natural disasters. During the 2020 and 2021 UK
            floods, voluntary coordination platforms used AI to match offers of help (lorries, boats,
            accommodation) with requests in real time.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI and service delivery</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Beyond fundraising, charities are beginning to use AI to improve how they deliver services
            to the people they exist to help.
          </p>
          <div className="space-y-2">
            {[
              {
                icon: '&#x1F4AC;',
                label: 'Chatbots for first contact',
                text: 'Charities like Mind (mental health) and the Samaritans have explored AI chatbots for initial contact — providing information, signposting, and low-level support 24 hours a day when human volunteers are not available. These are carefully designed not to replace human connection but to ensure no one is left without any response.',
              },
              {
                icon: '&#x1F4CD;',
                label: 'Need identification',
                text: 'Some housing charities and food banks are using AI to analyse referral patterns and identify postcodes where need is growing before it becomes a crisis — allowing proactive outreach rather than waiting for people to self-refer.',
              },
              {
                icon: '&#x1F4CB;',
                label: 'Impact reporting',
                text: "Funders — including the National Lottery Community Fund and UK Research and Innovation — are increasingly requiring charities to demonstrate impact quantitatively. AI tools can help charities analyse their outcome data and produce evidence of impact more efficiently than manual reporting.",
              },
              {
                icon: '&#x1F50D;',
                label: 'Fraud detection',
                text: 'Large charitable foundations use AI to audit grant applications and spending — flagging unusual patterns that might indicate fraud or misuse of charitable funds. The Fraud Advisory Panel estimates UK charity fraud costs over £2 billion annually.',
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
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The ethics of AI in the charity sector</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The charity sector faces ethical questions that are sharper than in commercial AI — because
            the people affected are often the most vulnerable in society.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x2696;&#xFE0F;',
                label: 'Algorithmic bias in service allocation',
                text: 'If AI influences who receives support — who gets a food parcel, which family is prioritised for housing — then bias in the training data can systematically disadvantage groups already underserved. A system trained on historical patterns may replicate those patterns rather than correcting them.',
                color: 'red',
              },
              {
                icon: '&#x1F512;',
                label: 'Data sensitivity and consent',
                text: 'Charities often hold highly sensitive data — health conditions, mental health history, criminal records, immigration status. Beneficiaries may be in vulnerable situations that affect the quality of their consent. Charities have a heightened duty of care around this data.',
                color: 'red',
              },
              {
                icon: '&#x1F9D1;&#x200D;&#x1F4BC;',
                label: 'Replacing human judgment',
                text: 'Caseworkers make complex judgements about individual circumstances that a model cannot fully capture. There is a real risk that AI tools are used to reduce headcount rather than to augment human capacity — with consequences for service quality and accountability.',
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

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">What you can do as a donor or volunteer</h2>
          <div className="space-y-2">
            {[
              'Ask charities how your personal data is used — you have the right to a Subject Access Request under UK GDPR, and charities must respond within one month.',
              'Ask whether AI influences how resources are allocated to beneficiaries — reputable charities should be able to explain this.',
              'Choose charities that publish clear AI and data policies — transparency is a sign of good governance.',
              'Support organisations like DataKind UK that help charities build ethical data capacity.',
              'When volunteering, ask platforms how they use your data to match you with opportunities and who they share it with.',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-amber-600 dark:text-amber-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-charities" />

        <Quiz lessonId="ai-and-charities" questions={quizQuestions} />

        <LessonNote lessonId="ai-and-charities" />

        <LessonRating lessonId="ai-and-charities" />

        <LessonFeedback lessonId="ai-and-charities" />

        <RelatedLessons currentId="ai-and-charities" />

        <NextLesson currentId="ai-and-charities" />

        <CompletedBadge lessonId="ai-and-charities" />

      </div>
    </div>
  )
}
