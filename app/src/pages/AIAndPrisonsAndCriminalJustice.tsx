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

const LESSON_TITLE = 'AI and prisons and criminal justice'

const KEY_TAKEAWAYS = [
  'OGRS (Offender Group Reconviction Scale) and OASys (Offender Assessment System) are AI-influenced tools used by HMPPS to score the risk that someone will reoffend — these scores can affect sentencing, parole, and release decisions.',
  'Facial recognition has been piloted by South Wales Police and the Metropolitan Police at courts and custody suites, with legal challenges reaching the Court of Appeal in the Bridges case.',
  'AI licence monitoring uses GPS tagging data and algorithms to detect curfew breaches automatically — removing a significant amount of human judgement from compliance decisions.',
  'Research shows that predictive criminal justice tools can encode racial and socioeconomic bias from historical data — the UN and the UK Equalities and Human Rights Commission have raised serious concerns.',
  'Anyone affected by an algorithmic criminal justice decision has the right to a meaningful explanation under UK GDPR and can request a human review.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What are OGRS and OASys and how are they used in the UK criminal justice system?',
    options: [
      'They are AI systems used by the Crown Prosecution Service to decide whether to bring charges, analysing the strength of evidence before a case goes to court',
      'They are risk assessment tools used by HMPPS that score the likelihood of reoffending — these scores can influence sentencing recommendations, parole decisions, and licence conditions',
      'They are AI systems used by police forces to predict which individuals are likely to commit crimes in the future, allowing pre-emptive intervention before any offence is committed',
      'They are secure communication platforms used by the Parole Board to allow prisoners to present their cases without attending hearings in person',
    ],
    correctIndex: 1,
    explanation:
      'OGRS (Offender Group Reconviction Scale) uses statistical analysis to estimate the probability that someone will be reconvicted within two years, based on factors like age, gender, and criminal history. OASys (Offender Assessment System) is a broader risk and needs assessment used by the National Probation Service and prison service to assess the risk an individual poses and their rehabilitation needs. These tools are used at multiple decision points: by probation officers preparing pre-sentence reports for courts, by the Parole Board when considering release, and by prison governors when making decisions about conditions and progression. Critics argue that because these tools are based on group statistics, they may not accurately reflect the actual risk posed by an individual.',
    hint: 'Think about how risk is assessed in decisions about sentencing and release.',
  },
  {
    question: 'What happened in the Bridges case involving facial recognition?',
    options: [
      'The Court of Appeal ruled that facial recognition technology was completely lawful and that South Wales Police could deploy it freely without any restrictions or oversight',
      'The Court of Appeal ruled that South Wales Police\'s deployment of live facial recognition breached human rights law and data protection law — the first such ruling in the UK',
      'The case was settled out of court when South Wales Police agreed to pay compensation and withdraw all facial recognition technology from use',
      'The High Court ruled that facial recognition was unlawful, but this ruling was overturned on appeal and the technology was approved for widespread deployment',
    ],
    correctIndex: 1,
    explanation:
      'Ed Bridges, a civil liberties activist, challenged South Wales Police\'s use of live facial recognition technology at public events. In 2020, the Court of Appeal ruled in his favour — finding that South Wales Police had breached his human rights (right to privacy under Article 8 of the European Convention on Human Rights), had not complied with the public sector equality duty (failing to consider whether the technology discriminated on grounds of race or sex), and had no sufficient legal basis for the processing of biometric data. This was a landmark ruling in the UK. The government subsequently began developing a new surveillance framework, and the Metropolitan Police continued to deploy live facial recognition at events despite the legal concerns — a highly contested decision.',
    hint: 'Think about what a legal challenge to facial recognition technology might argue.',
  },
  {
    question: 'How does AI monitor prisoners and offenders on licence?',
    options: [
      'AI reads the digital correspondence of offenders on licence — emails, texts, and social media — and flags any communication suggesting planning of further offences',
      'GPS electronic tags transmit location data which AI analyses continuously to detect curfew breaches, exclusion zone violations, and unusual patterns of movement',
      'AI-equipped drones follow high-risk offenders on release and transmit live video to a monitoring centre where staff watch for concerning behaviour',
      'AI analyses employment and benefits records to detect whether offenders on licence are meeting the conditions of rehabilitation programmes',
    ],
    correctIndex: 1,
    explanation:
      'Electronic monitoring (tagging) has been used in the UK since the 1990s, but modern systems are significantly more sophisticated. GPS tags transmit location data multiple times per minute. AI analyses this data in real time: if someone breaches their curfew by entering their home address 10 minutes late, or enters an area they have been excluded from, an automated alert is generated. This removes a lot of human judgement from the monitoring process. The Ministry of Justice uses a centrally managed system, and the data generated can also be used as evidence in recall proceedings if someone is suspected of breaching their licence conditions.',
    hint: 'Think about what GPS tagging data can tell you about someone\'s movements and what AI can do with that data.',
  },
  {
    question: 'Why do critics say predictive criminal justice tools can be racially biased?',
    options: [
      'The tools are explicitly programmed with different thresholds for different ethnic groups, which is illegal but difficult to detect and enforce against',
      'Because they are trained on historical criminal justice data that reflects historical discrimination — groups who were historically over-policed and over-imprisoned score as higher risk even if their actual behaviour is the same',
      'The tools use facial analysis to infer ethnicity and assign higher risk scores based on stereotypes embedded in the training data',
      'Researchers have found that the tools were deliberately designed to discriminate, because the companies developing them had links to right-wing political movements',
    ],
    correctIndex: 1,
    explanation:
      'This is a well-documented mechanism called "feedback loop bias" or "historical bias". Black and minority ethnic people in the UK have historically been subject to more policing, more stops and searches, and higher rates of prosecution and imprisonment — partly as a result of systemic discrimination in the criminal justice system. When a risk assessment tool is trained on this historical data, it learns to associate characteristics correlated with these communities (which may include postcode, socioeconomic background, and prior contact with the criminal justice system) with higher risk. The result is that the tool recommends stricter conditions or longer sentences for people from these communities — even if their actual behaviour is identical to someone from a majority community who receives a lower score. This is not intentional discrimination, but the outcome is discriminatory.',
    hint: 'Think about what happens when you train a model on data that already reflects centuries of discrimination.',
  },
  {
    question: 'What right does someone have if an AI tool influenced a criminal justice decision about them?',
    options: [
      'The right to see and challenge the AI\'s source code in court, and to have an independent AI expert appointed to verify the algorithm was applied correctly',
      'The right to a meaningful explanation of how the algorithmic decision was made under UK GDPR, and the right to request a human review of any decision made substantially by automated means',
      'The right to appeal to a specialist AI court separate from the normal criminal appeals process, specifically designed to handle algorithmic justice complaints',
      'The right to opt out of all algorithmic assessment for the duration of their sentence and have their case managed entirely by human probation officers with no digital tools',
    ],
    correctIndex: 1,
    explanation:
      'Under UK GDPR and the Data Protection Act 2018, individuals have rights around automated decision-making that significantly affects them. In the criminal justice context, this includes the right to an explanation of how an algorithmic risk score was produced, what factors were considered, and what weight was given to each. They also have the right to request a human review — meaning a qualified human decision-maker must consider their case, rather than simply accepting the algorithmic recommendation. In practice, ensuring these rights are meaningful rather than just theoretical requires active advocacy — a solicitor, a probation officer who understands the system, or an organisation like Liberty or the Howard League for Penal Reform.',
    hint: 'Think about data protection rights and the right to challenge decisions made by algorithms.',
  },
]

export function AIAndPrisonsAndCriminalJustice() {
  useMarkVisited('ai-and-prisons-and-criminal-justice')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x2696;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and prisons and criminal justice
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI tools are being used in risk assessment, facial recognition, licence monitoring, and parole decisions
            in the UK — and the serious concerns about racial bias and accountability.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-prisons-and-criminal-justice" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI in the UK justice system — what is already happening</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI tools are not science fiction in the UK criminal justice system — they are already influencing decisions about sentencing, release, and supervision.
          </p>
          <div className="space-y-2">
            {[
              'His Majesty\'s Prison and Probation Service (HMPPS) uses algorithmic tools at multiple decision points in a person\'s journey through the justice system',
              'The National Probation Service uses OASys (Offender Assessment System) to assess risk and need for everyone on probation in England and Wales',
              'Electronic monitoring (tagging) of people on licence uses AI to detect breaches automatically — over 20,000 people are monitored this way at any time',
              'South Wales Police and the Metropolitan Police have piloted live facial recognition at courts, transport hubs, and public events',
              'The Parole Board receives AI-generated risk assessments as part of the evidence it considers when deciding whether to release prisoners',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-slate-600 dark:text-slate-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The racial bias problem</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The most serious criticism of AI in criminal justice is that it can encode and amplify racial and socioeconomic discrimination.
          </p>
          <div className="bg-red-50 dark:bg-red-950 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-red-800 dark:text-red-200 text-sm">The feedback loop</p>
            <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
              If Black people in the UK are historically more likely to be stopped, searched, prosecuted, and imprisoned — partly because of discrimination — then any AI trained on this historical data will learn to associate Blackness (or proxies for it, such as postcode) with higher risk. It will then recommend stricter conditions for Black individuals, who are then more likely to be monitored, breached, and recalled. The AI does not cause the original discrimination, but it can amplify and perpetuate it in a self-reinforcing cycle.
            </p>
          </div>
          <div className="space-y-2">
            {[
              'The United Nations Special Rapporteur on Racism has called for a moratorium on predictive policing and criminal justice AI tools pending human rights assessment',
              'The UK Equalities and Human Rights Commission has highlighted concerns about algorithmic discrimination in public sector decision-making',
              'Research by organisations including the Ada Lovelace Institute has called for mandatory equality impact assessments before deploying algorithmic tools in criminal justice',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mt-0.5 flex-shrink-0">&#x26A0;&#xFE0F;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Your rights</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            If you or someone you know is affected by algorithmic criminal justice decisions, these rights apply.
          </p>
          <div className="space-y-2">
            {[
              'Under UK GDPR, you have the right to a meaningful explanation of how an algorithmic risk score was generated and what factors were used',
              'You have the right to request a human review of any significant decision made substantially by automated means',
              'You can make a Subject Access Request (SAR) to access your OASys assessment and any other data HMPPS holds about you',
              'Organisations including the Howard League for Penal Reform, Liberty, and INQUEST can provide support and advice on challenging algorithmic decisions',
              'If you believe an algorithmic tool has produced a discriminatory outcome, you can complain to the Parole Board, the Independent Monitor for Tagging, or the Information Commissioner\'s Office',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-prisons-and-criminal-justice" />
        <LessonNote lessonId="ai-and-prisons-and-criminal-justice" />

        <Quiz questions={quizQuestions} lessonId="ai-and-prisons-and-criminal-justice" />

        <LessonRating lessonId="ai-and-prisons-and-criminal-justice" />
        <LessonFeedback lessonId="ai-and-prisons-and-criminal-justice" />

        <RelatedLessons currentId="ai-and-prisons-and-criminal-justice" />

        <NextLesson currentId="ai-and-prisons-and-criminal-justice" />
      </div>
    </div>
  )
}
