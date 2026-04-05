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
import { LessonSeriesBadge } from '../components/LessonSeriesBadge'

const LESSON_TITLE = 'AI and local government — pothole detection, planning permissions, social services AI, and algorithmic accountability'

const KEY_TAKEAWAYS = [
  'UK councils are using AI to detect potholes from dashcam footage and smartphone reports, prioritising repairs based on severity and road usage rather than who complains loudest.',
  'AI planning tools help councils process planning applications faster by flagging applications that comply with local rules versus those needing human review — but complex or contentious decisions still require human judgement.',
  'Several UK councils have used AI to assess social care needs and child safeguarding risk — raising serious questions about whether algorithmic systems can make fair decisions about vulnerable people.',
  'Algorithmic accountability is a growing area of UK law: councils have duties under the Equality Act 2010 to ensure automated decisions do not discriminate unlawfully against protected groups.',
  'The right to human review of automated decisions that significantly affect you is protected under UK GDPR — you can request that a council decision made primarily by an algorithm be reconsidered by a human.',
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'How do AI pothole detection systems work?',
    options: [
      'They use satellites to photograph every road in the country daily',
      'They analyse dashcam footage and sensor data to identify and classify road defects, feeding a prioritised repair list to highway teams',
      'They automatically dispatch repair crews the moment a pothole is detected',
      'They fine drivers who damage their vehicles in potholes',
    ],
    correctIndex: 1,
    explanation:
      'AI pothole detection typically uses cameras on council vehicles, bus fleets, or even smartphones to gather images of road surfaces. Computer vision algorithms then classify defects by type and severity, helping highway teams prioritise repairs based on risk and road usage rather than relying solely on public reports.',
  },
  {
    question: 'What is the main concern about using AI for child safeguarding risk assessments?',
    options: [
      'AI is too slow to process child protection referrals in time',
      'AI systems cannot access school records',
      'Algorithmic risk scores can embed historical biases and may unfairly flag families from certain backgrounds as high-risk without adequate human oversight',
      'The cost of AI systems is too high for local authority budgets',
    ],
    correctIndex: 2,
    explanation:
      'Several councils that trialled AI safeguarding tools found that if the training data reflected past patterns of intervention that were themselves biased — for example, disproportionate referrals from lower-income or minority ethnic families — the AI would perpetuate and potentially amplify those biases. The consequences for families wrongly flagged as high-risk can be severe.',
  },
  {
    question: 'Under UK GDPR, what right do you have if a council makes a significant decision about you using an automated system?',
    options: [
      'The right to receive a full copy of the AI\'s source code',
      'The right to request that the decision be reconsidered by a human',
      'The right to financial compensation automatically',
      'The right to have all AI systems in the council switched off',
    ],
    correctIndex: 1,
    explanation:
      'UK GDPR gives individuals the right not to be subject to a decision based solely on automated processing that significantly affects them, including the right to request human review of such decisions. This applies to council decisions on benefits, housing, planning, or social care where an algorithm played a primary decision-making role.',
  },
  {
    question: 'How might AI help councils process planning applications?',
    options: [
      'By approving all applications automatically to reduce backlogs',
      'By flagging which applications clearly comply with local planning rules versus those that need detailed human review, speeding up straightforward cases',
      'By contacting neighbours automatically to gather objections',
      'By replacing planning officers entirely with AI agents',
    ],
    correctIndex: 1,
    explanation:
      'AI can read planning applications and check them against local development plans, national planning policy, and standard requirements. Applications that clearly comply can be fast-tracked; those that are ambiguous or contentious are flagged for detailed human review. This reduces the backlog without removing human judgement from complex cases.',
  },
  {
    question: 'What does the Equality Act 2010 require councils to consider when deploying AI?',
    options: [
      'That AI systems are built in the UK',
      'That AI decisions must always be more favourable than human decisions',
      'That AI systems used for public services must not unlawfully discriminate against people with protected characteristics such as race, gender, disability, or age',
      'That councils must hire equal numbers of human and AI decision-makers',
    ],
    correctIndex: 2,
    explanation:
      'The public sector equality duty under the Equality Act 2010 requires councils to have due regard to equality when exercising their functions — including when deploying AI. If an AI system produces outcomes that disadvantage people because of a protected characteristic (even unintentionally), the council may be acting unlawfully.',
  },
]

export function AIAndLocalGovernment() {
  useMarkVisited('ai-and-local-government')

  return (
    <main className="max-w-2xl mx-auto px-4 py-8 space-y-8">
      <div className="space-y-3">
        <LessonSeriesBadge lessonId="ai-and-local-government" />
        <CompletedBadge lessonId="ai-and-local-government" />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
          AI and local government
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Your council is quietly becoming an AI user. From detecting potholes to processing planning applications and assessing social care needs, local authorities across the UK are using algorithms to help manage services under tight budgets. This lesson explains what they are doing, why it raises difficult questions, and what rights you have.
        </p>
        <div className="flex flex-wrap gap-2">
          <ShareButton lessonTitle={LESSON_TITLE} />
          <ReviewLaterButton lessonId="ai-and-local-government" />
        </div>
      </div>

      <KeyTakeaways points={KEY_TAKEAWAYS} />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Pothole detection — AI on the road</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Reporting a pothole used to mean calling the council, filling in a web form, and hoping someone noticed. Now, councils including Bath, Oxfordshire, and several London boroughs use AI dashcam systems mounted on council vehicles and bin lorries that continuously scan road surfaces.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Computer vision algorithms analyse the footage in real time, classifying defects by type (pothole, crack, surface deterioration), size, and severity. The result is a prioritised repair list that weighs risk factors — how deep the pothole is, how busy the road is, how close it is to a junction — rather than simply responding to whichever resident complained most recently.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Some councils have also used smartphone app data: apps like FixMyStreet or council-specific apps let residents photograph and report defects, and AI classifies the reports before a human ever looks at them. The system is faster, more consistent, and covers roads that are rarely driven by council vehicles.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Planning applications — faster decisions for routine cases</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Local planning departments are chronically understaffed. Applications for extensions, loft conversions, and change of use can sit in a queue for months. AI tools are starting to help by doing what humans currently do with straightforward applications: checking whether the proposal complies with local planning rules.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          An AI can read an application, cross-reference it with the local development plan, national planning policy, flood risk maps, and heritage designations, and produce a summary of which criteria the application meets and which it does not. For a simple rear extension in an area with no special designations, this takes seconds rather than days.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          The AI does not make the final decision — a planning officer does. But by automating the information-gathering and checking stage, officers can spend their limited time on the applications that genuinely need human judgement: contentious cases, listed buildings, green belt applications, or anything likely to face appeal.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Social services AI — the most contested territory</h2>
        <p className="text-gray-700 dark:text-gray-300">
          The most controversial application of AI in local government is in social services — particularly in assessing need for adult social care and risk in child protection.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Several UK councils trialled predictive risk scoring tools that used data from multiple council systems — housing, benefits, school attendance, previous social care contacts — to generate a risk score for families. The idea was that early intervention, prompted by an AI flag, could prevent crises before they happened.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          The results were mixed, and the concerns were significant. Critics pointed out that if the AI was trained on historical data reflecting past patterns of intervention — which often reflected systemic inequalities — it would reproduce those biases. A system trained on data showing that low-income families in certain postcodes had more social care contacts might flag future families from those areas as high-risk, not because they were actually at greater risk but because they had historically been subject to more scrutiny.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Several councils abandoned these tools following public pressure and academic scrutiny. The lesson is that AI risk assessment in child protection is not simply a technical problem — it is a profound ethical and legal question about who decides which children are at risk, and on what basis.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your rights when an algorithm makes a decision about you</h2>
        <p className="text-gray-700 dark:text-gray-300">
          If a council makes a significant decision about you — whether you qualify for social care, housing benefit, a planning permission, or a blue badge — using an automated system, you have rights under UK GDPR.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Specifically, you have the right not to be subject to a decision based solely on automated processing that significantly affects you. You can request that the decision be reconsidered by a human, ask for an explanation of the factors that influenced the automated decision, and challenge it if you believe it is wrong.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Councils also have duties under the Equality Act 2010's public sector equality duty. If you believe an AI system is producing outcomes that discriminate against you because of a protected characteristic — race, gender, disability, age, or others — you can complain to the council, escalate to the Local Government Ombudsman, or seek legal advice.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          The right to explanation and human review is not always easy to enforce in practice, but it exists. Knowing it gives you a starting point if you believe an automated decision about you is unfair.
        </p>
      </section>

      <LessonNote lessonId="ai-and-local-government" />

      <Quiz questions={QUIZ_QUESTIONS} lessonId="ai-and-local-government" />

      <LessonRating lessonId="ai-and-local-government" />
      <LessonFeedback lessonId="ai-and-local-government" />
      <RelatedLessons currentId="ai-and-local-government" />
      <NextLesson currentId="ai-and-local-government" />
    </main>
  )
}
