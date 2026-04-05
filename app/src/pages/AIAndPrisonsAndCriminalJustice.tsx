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

const LESSON_TITLE = 'AI and prisons and criminal justice — risk assessment, facial recognition, algorithmic parole, and your rights'

const KEY_TAKEAWAYS = [
  'Risk assessment tools like OASys (Offender Assessment System) are used by HMPPS to score the likelihood of reoffending — these scores influence sentencing, parole, and release decisions.',
  'Facial recognition technology has been piloted by South Wales Police and the Metropolitan Police at courts and public spaces — the Bridges case established legal limits on its use.',
  'AI-powered GPS tagging and automated curfew monitoring are used to supervise people released on licence, with automated alerts triggering potential recall to prison.',
  'Research consistently shows that risk assessment algorithms can encode historical racial and socioeconomic bias — if the training data reflects past discrimination, the predictions will too.',
  'Under GDPR and the Police Act, people have rights to challenge algorithmic decisions about them in the criminal justice system, including a right to explanation and human review.',
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'What is OASys and how is it used in the UK criminal justice system?',
    options: [
      'OASys is the UK\'s national prison CCTV management system, used to monitor prisoner movements inside custody',
      'OASys (Offender Assessment System) is a risk assessment tool used by HMPPS to score the probability of reoffending — these scores inform decisions about sentencing, prison category, release on licence, and parole',
      'OASys is the case management software used by criminal defence solicitors to manage their client files',
      'OASys is a real-time facial recognition system used at UK courts to verify the identity of defendants',
    ],
    correctIndex: 1,
    explanation:
      'OASys (Offender Assessment System) is used by His Majesty\'s Prison and Probation Service (HMPPS) to assess the risk and needs of adults in the criminal justice system. It combines structured professional judgement with statistical scoring based on factors including criminal history, age, employment status, accommodation, and substance misuse. The resulting risk scores influence decisions throughout a person\'s journey through the justice system — from initial sentencing guidance to prison category assignment, to release on licence conditions, to Parole Board recommendations. Critics argue that because these scores are based on historical data that reflects past discrimination, they can systematically disadvantage people from marginalised groups.',
  },
  {
    question: 'What was the significance of the Bridges case for facial recognition in the UK?',
    options: [
      'The Bridges case established that all use of facial recognition technology by UK police forces is lawful as long as it is proportionate',
      'The Bridges case (Bridges v. Chief Constable of South Wales Police) found that South Wales Police\'s use of live facial recognition in public places breached data protection law and the Human Rights Act — setting legal limits on how police can deploy the technology',
      'The Bridges case was a government inquiry into facial recognition that concluded more investment in the technology was needed to reduce crime',
      'The Bridges case involved a private company, not a police force, and has no legal relevance to police use of facial recognition',
    ],
    correctIndex: 1,
    explanation:
      'Ed Bridges challenged South Wales Police\'s use of Automated Facial Recognition (AFR) technology in public spaces. In 2020, the Court of Appeal ruled in his favour, finding that the use of AFR was unlawful because: the legal framework governing its use was not sufficiently precise; there was inadequate assessment of its impact on privacy rights; and there were no adequate guidelines about when and how the technology could be used. The ruling did not prohibit facial recognition entirely but set requirements for lawful deployment. The Metropolitan Police has subsequently used facial recognition under updated guidelines, but legal challenges continue.',
  },
  {
    question: 'How does AI-powered electronic monitoring (GPS tagging) work for people released on licence?',
    options: [
      'Licence monitoring is entirely manual — a probation officer calls or visits the person each day to check their location',
      'GPS ankle tags record the wearer\'s location continuously; AI systems compare this against permitted locations and curfew conditions, automatically generating alerts when conditions appear to be breached — which can trigger recall proceedings',
      'GPS tagging only records whether the person is at home during their curfew — it cannot track their location when they are outside',
      'Electronic monitoring AI can only send alerts to probation officers; it has no connection to the recall-to-prison process',
    ],
    correctIndex: 1,
    explanation:
      'GPS electronic monitoring tags worn by people released on licence record continuous location data. AI systems analyse this data against the conditions of the licence — for example, exclusion zones, curfew hours, and prohibited contacts. When the system detects a potential breach, it generates an automated alert to the monitoring centre. This can trigger a review by a probation officer and, if confirmed, recall proceedings to return the person to custody. The automation of this monitoring raises questions about false positives and whether decisions with serious consequences (recall to prison) are being made too quickly on algorithmic grounds.',
  },
  {
    question: 'Why do researchers argue that risk assessment algorithms in criminal justice can be racially biased?',
    options: [
      'Risk assessment algorithms are explicitly programmed with racial categories, which is why they produce biased outputs',
      'Because the algorithms are trained on historical criminal justice data that already reflects racial and socioeconomic disparities — over-policing of certain communities, differential charging and sentencing rates — the algorithm learns patterns that encode past discrimination rather than true risk',
      'Risk assessment algorithms are only biased in the US; UK-developed tools like OASys have been independently verified as bias-free',
      'The racial bias concern is theoretical — no real-world examples of AI producing racially disparate outcomes in criminal justice have been documented',
    ],
    correctIndex: 1,
    explanation:
      'Risk assessment tools are trained on historical data about who was arrested, charged, convicted, and reoffended. If Black people and people from lower socioeconomic backgrounds are over-represented in that data — because of over-policing of certain neighbourhoods, differential stop-and-search, or disparities in charging and sentencing — the algorithm will learn those patterns. It will then apply them to new cases, effectively predicting that people who share those demographic characteristics are higher risk. This is not because those people are actually more likely to reoffend, but because the system has learned the patterns of a biased past. The Equalities and Human Rights Commission and academic researchers have raised these concerns specifically about UK tools.',
  },
  {
    question: 'What rights does a person have if they believe an AI tool made a wrong decision about them in the criminal justice system?',
    options: [
      'There are no formal rights to challenge AI decisions in the criminal justice system — courts and the Parole Board have complete discretion',
      'Under UK GDPR and data protection law, individuals have the right to know when solely automated decision-making has affected them, the right to a human review of that decision, and the right to request an explanation of how a risk score was calculated',
      'Rights to challenge AI decisions only apply in employment law, not criminal justice',
      'Any challenge to AI-assisted criminal justice decisions must be raised at the European Court of Human Rights, as UK courts have no jurisdiction',
    ],
    correctIndex: 1,
    explanation:
      'UK GDPR (Article 22) gives individuals the right not to be subject to decisions based solely on automated processing that have significant effects, and the right to request human review. In practice, decisions in the criminal justice system are supposed to involve human professional judgement — an OASys score should inform, not replace, a professional assessment. Where someone believes a risk assessment has been incorrectly calculated or has unfairly affected a decision, they can request a review through the relevant body (Parole Board, HMPPS, probation service) and in some cases through the courts. Subject access requests can be used to obtain copies of risk assessment data held about an individual.',
  },
]

export function AIAndPrisonsAndCriminalJustice() {
  useMarkVisited('ai-and-prisons-and-criminal-justice')

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{LESSON_TITLE}</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">8 min read &middot; Intermediate</p>

      <CompletedBadge lessonId="ai-and-prisons-and-criminal-justice" />
      <ShareButton lessonTitle={LESSON_TITLE} />

      <KeyTakeaways points={KEY_TAKEAWAYS} />

      <div className="prose prose-gray dark:prose-invert max-w-none mt-8">

        <h2>When algorithms decide your fate</h2>
        <p>
          Few decisions in a person&apos;s life are more consequential than those made by the criminal justice system. Whether you are released on bail, how long your sentence is, whether you are deemed safe to release on parole &mdash; these decisions are increasingly informed by AI systems that score and rank individuals based on their predicted behaviour.
        </p>
        <p>
          This lesson explores how AI is used in UK criminal justice, what the risks are, and what rights you have if you believe an algorithm has got it wrong.
        </p>

        <h2>Risk assessment: OASys and OGRS</h2>
        <p>
          His Majesty&apos;s Prison and Probation Service (HMPPS) uses the Offender Assessment System (OASys) to assess the risk and needs of adults in the criminal justice system. OASys combines professional judgement with statistical scoring based on factors including criminal history, age, employment, accommodation, substance use, and attitudes to offending.
        </p>
        <p>
          The Offender Group Reconviction Scale (OGRS) is a purely statistical tool that uses age and criminal history to predict the probability of a further offence within a defined period. These scores are used at multiple points: pre-sentence reports, prison category assignment, release on licence conditions, and Parole Board recommendations.
        </p>
        <p>
          The concern is that these tools are trained on historical criminal justice data that already reflects systemic disparities. If certain communities were historically over-policed, the algorithm will learn that people with those characteristics are higher risk &mdash; not because they truly are, but because they were more likely to be caught.
        </p>

        <h2>Facial recognition at courts and custody</h2>
        <p>
          South Wales Police and the Metropolitan Police have piloted Automated Facial Recognition (AFR) technology. The landmark legal case is <em>Bridges v. Chief Constable of South Wales Police</em> (2020), in which the Court of Appeal ruled that South Wales Police&apos;s use of AFR in public places was unlawful because the legal framework was insufficiently precise and there had been inadequate assessment of privacy rights.
        </p>
        <p>
          Facial recognition is also used in custody settings &mdash; verifying the identity of people being processed through police custody suites. This is generally considered less controversial than public-space deployment, though civil liberties groups still raise concerns about data retention and the accuracy of systems for people with darker skin tones.
        </p>

        <LessonNote lessonId="ai-and-prisons-and-criminal-justice" />

        <h2>AI monitoring on licence</h2>
        <p>
          People released from prison on licence can be required to wear GPS electronic monitoring tags. These tags record location continuously, and AI systems compare this data against licence conditions &mdash; curfew hours, exclusion zones, permitted locations. Automated alerts are generated when potential breaches are detected.
        </p>
        <p>
          This automation raises questions about proportionality. A false positive &mdash; for example, a GPS signal error that suggests a person left their permitted area &mdash; can trigger recall proceedings with serious consequences. The speed of automated enforcement means human review can happen after the alert, rather than before it.
        </p>

        <h2>Algorithmic parole decisions</h2>
        <p>
          The Parole Board makes decisions about whether it is safe to release people who have served their tariff. These decisions involve risk assessment tools including OASys scores, but the Board is required to make an independent human judgement &mdash; the algorithm informs, it does not decide.
        </p>
        <p>
          There is ongoing debate about whether AI tools should ever have a more direct role in parole decisions. Proponents argue AI can provide more consistent assessments than individual panel members. Critics argue that decisions with such profound consequences for individual liberty require human judgement and accountability that algorithms cannot provide.
        </p>

        <h2>Racial and socioeconomic bias</h2>
        <p>
          Research by academics, the Equalities and Human Rights Commission, and human rights groups has documented concerns about racial and socioeconomic bias in risk assessment tools. The core problem: if historical data reflects over-policing, differential charging, and disparities in sentencing, an algorithm trained on that data will encode those patterns.
        </p>
        <p>
          The UN Special Rapporteur on Contemporary Forms of Racism has raised these concerns globally. In the UK, specific scrutiny has focused on whether algorithmic tools used in sentencing and parole disproportionately impact Black defendants and those from deprived backgrounds.
        </p>

        <h2>Your rights</h2>
        <p>
          Under UK GDPR, you have the right to know if a significant decision about you was made solely by automated processing, the right to request human review, and the right to an explanation of how a risk score was calculated. In practice, accessing and challenging this information requires persistence and often legal assistance &mdash; but the rights exist and have been successfully used.
        </p>

      </div>

      <div className="mt-10">
        <Quiz questions={QUIZ_QUESTIONS} lessonId="ai-and-prisons-and-criminal-justice" />
      </div>

      <ReviewLaterButton lessonId="ai-and-prisons-and-criminal-justice" />
      <LessonRating lessonId="ai-and-prisons-and-criminal-justice" />
      <LessonFeedback lessonId="ai-and-prisons-and-criminal-justice" />
      <RelatedLessons currentId="ai-and-prisons-and-criminal-justice" />
      <NextLesson currentId="ai-and-prisons-and-criminal-justice" />
    </div>
  )
}
