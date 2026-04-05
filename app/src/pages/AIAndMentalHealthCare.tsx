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

const LESSON_TITLE = 'AI and mental health care (professionals)'

const KEY_TAKEAWAYS = [
  'AI-assisted CBT platforms like Woebot and Wysa are used by the NHS as a first step before seeing a therapist — they are tools to bridge the waiting list, not replacements for professional care.',
  'Clinical decision support AI can analyse patient notes, risk factors, and history to flag people who may be at higher risk of self-harm — helping overworked clinicians prioritise.',
  'AI risk assessment tools in mental health care have raised concerns about bias — they can perpetuate racial and socioeconomic disparities present in the training data.',
  'There is genuine debate among mental health professionals about whether AI can ever replicate the therapeutic relationship, which is itself a key mechanism of change in many therapies.',
  'In the UK, the NHS Long Term Plan committed to using digital tools to improve access to mental health support — but experts warn that digital tools alone cannot solve underfunding.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What role do AI-assisted CBT platforms like Woebot play in NHS mental health care?',
    options: [
      'They replace therapists for patients with moderate to severe mental health conditions',
      'They act as a first step or bridge — providing support while patients wait for human therapy',
      'They are only available privately and are not used by the NHS',
      'They are used by psychiatrists to diagnose mental health conditions',
    ],
    correctIndex: 1,
    explanation:
      "AI-assisted CBT apps like Woebot and Wysa are typically used to bridge the waiting list for human therapy — offering structured exercises and psychoeducation while patients wait. The NHS has commissioned some of these tools, but they are not designed to replace the therapeutic relationship with a human clinician.",
  },
  {
    question: 'What is a "clinical decision support" AI in mental health?',
    options: [
      'A chatbot that patients can talk to instead of a therapist',
      'An AI that analyses patient records to flag those who may be at higher risk, helping clinicians prioritise',
      'A billing system that decides which treatments an NHS patient is eligible for',
      'An AI that selects which medication to prescribe based on diagnosis',
    ],
    correctIndex: 1,
    explanation:
      "Clinical decision support tools analyse structured data — patient history, risk factors, previous admissions — to flag cases that may require urgent attention. They are intended to help overstretched clinicians prioritise, not to make final decisions. The clinician remains responsible for the care decision.",
  },
  {
    question: 'What is a key concern about AI risk assessment tools in mental health care?',
    options: [
      'They are too expensive for the NHS to afford',
      'They can only assess risk for physical health conditions, not mental health',
      'They can perpetuate racial and socioeconomic biases present in historical data, leading to unfair outcomes',
      'They require patients to use a smartphone, excluding older patients',
    ],
    correctIndex: 2,
    explanation:
      "AI risk tools are trained on historical data, which often reflects inequalities in how mental health care has been provided. For example, if certain populations have historically been more likely to be detained under the Mental Health Act — which is the case for Black men in the UK — the AI may incorrectly predict higher risk for those groups based on race rather than clinical factors.",
  },
  {
    question: 'Why do some mental health professionals argue that AI cannot replace human therapists?',
    options: [
      'Because AI cannot speak or hear, making conversation impossible',
      'Because the therapeutic relationship itself is a key mechanism of change in many therapies — and this relationship requires a human connection',
      'Because AI does not have the required NHS registration to provide therapy',
      'Because AI systems are too slow to respond to patients in real time',
    ],
    correctIndex: 1,
    explanation:
      "In therapeutic approaches like person-centred therapy and relational psychotherapy, the relationship between therapist and patient is not just a delivery mechanism — it is itself the source of healing. Many clinicians argue that AI cannot replicate this, and that replacing human therapists with AI risks removing what actually makes therapy work.",
  },
  {
    question: 'What did the NHS Long Term Plan say about digital mental health tools?',
    options: [
      'That all NHS mental health treatment should move to digital platforms by 2030',
      'That digital tools would be used to improve access and provide earlier intervention — alongside, not instead of, human services',
      'That AI should replace CBT therapists entirely within five years',
      'That smartphone apps should not be used for NHS mental health support',
    ],
    correctIndex: 1,
    explanation:
      "The NHS Long Term Plan committed to expanding mental health services and using digital tools to improve access — particularly for mild-to-moderate conditions where waiting times are longest. However, critics point out that digital tools cannot compensate for chronic underfunding and workforce shortages in mental health services.",
  },
]

export function AIAndMentalHealthCare() {
  useMarkVisited('ai-and-mental-health-care')

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <CompletedBadge lessonId="ai-and-mental-health-care" />
        <LessonSeriesBadge lessonId="ai-and-mental-health-care" />

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-purple-600 font-medium">
            <span>&#x1F9E0;</span>
            <span>Intermediate &middot; 7 min read</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{LESSON_TITLE}</h1>
          <p className="text-lg text-gray-600">
            AI is being used by mental health professionals to triage patients, support therapy, and assess risk. This lesson looks at the tools being used in clinical settings — and the important debates about their limitations.
          </p>
        </div>

        <ShareButton lessonTitle={LESSON_TITLE} />
        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <section className="prose prose-gray max-w-none space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">AI-assisted CBT: bridging the waiting list</h2>
          <p>
            CBT (Cognitive Behavioural Therapy) is one of the most evidence-based treatments for anxiety, depression, and related conditions. It is also in short supply — NHS waiting times for talking therapies can stretch to months.
          </p>
          <p>
            AI-assisted CBT platforms like Woebot and Wysa offer structured exercises, psychoeducation, and mood tracking through a conversational interface. They are not therapists — they follow scripted therapeutic techniques — but they can provide something useful while a patient waits for human support. The NHS has commissioned pilots of these tools, and some GP surgeries recommend them as a first step.
          </p>
          <p>
            The evidence is mixed. Some studies show modest improvements in low-to-moderate depression and anxiety. Critics note that people with more complex needs often find these tools insufficient, and there is a risk that recommending an app becomes a way to avoid funding the human services people actually need.
          </p>
        </section>

        <section className="prose prose-gray max-w-none space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Clinical decision support</h2>
          <p>
            Mental health clinicians face high caseloads and difficult risk assessments. AI clinical decision support tools aim to help by analysing patient records — previous diagnoses, medication history, recorded risk factors — and flagging cases that may need urgent attention.
          </p>
          <p>
            These tools do not make treatment decisions. They surface information that a clinician might not have had time to review, or highlight patterns that suggest elevated risk. The final decision always rests with the professional. In crisis teams and community mental health services, where clinicians manage dozens of patients, having AI highlight a concerning pattern in the notes can be genuinely life-saving.
          </p>
        </section>

        <section className="prose prose-gray max-w-none space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">AI risk assessment: the bias problem</h2>
          <p>
            Some NHS trusts and mental health services have piloted AI tools that assess a patient&apos;s risk of self-harm, relapse, or crisis based on data patterns. The theory is sound — AI can process far more variables than a human clinician can hold in mind simultaneously.
          </p>
          <p>
            The practice is more troubling. AI systems are trained on historical data, which reflects longstanding inequalities in mental health care. Black men in the UK are significantly more likely to be detained under the Mental Health Act than white men — a disparity that reflects historical bias in the system, not greater clinical need. If an AI is trained on this data, it may learn to predict higher risk for Black patients, creating a self-fulfilling cycle.
          </p>
          <LessonNote lessonId="ai-and-mental-health-care" />
        </section>

        <section className="prose prose-gray max-w-none space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Can AI replace the therapeutic relationship?</h2>
          <p>
            In CBT and other structured therapies, much of the value comes from specific techniques — thought records, exposure hierarchies, behavioural experiments — which are teachable and, arguably, automatable.
          </p>
          <p>
            But in person-centred therapy, psychodynamic therapy, and many other approaches, the relationship itself is the mechanism of change. Being truly heard by another person, feeling understood in a non-judgmental space, experiencing consistent care over time — these are not incidental features of therapy but its core. Many experienced therapists argue that no AI, however sophisticated, can provide this.
          </p>
          <p>
            The debate continues. What most clinicians agree on is that AI is most useful as a tool that extends human capacity — helping more people access some support — rather than as a replacement for human therapeutic relationships.
          </p>
        </section>

        <Quiz lessonId="ai-and-mental-health-care" questions={quizQuestions} lessonTitle={LESSON_TITLE} />

        <RelatedLessons currentId="ai-and-mental-health-care" />

        <LessonRating lessonId="ai-and-mental-health-care" />
        <LessonFeedback lessonId="ai-and-mental-health-care" />
        <ReviewLaterButton lessonId="ai-and-mental-health-care" />

        <NextLesson currentId="ai-and-mental-health-care" />
      </div>
    </div>
  )
}
