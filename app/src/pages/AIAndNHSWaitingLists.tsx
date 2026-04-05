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

const LESSON_TITLE = 'AI and NHS waiting lists'

const KEY_TAKEAWAYS = [
  'With over 7 million people on NHS waiting lists in England, AI tools are being deployed to help NHS managers and clinicians prioritise more intelligently — identifying who is deteriorating and needs to be seen urgently before their next scheduled appointment.',
  'No-show prediction AI analyses patterns (appointment time, distance, previous attendance, reminder uptake) to identify patients likely to miss their appointment, enabling proactive contact and releasing slots for others sooner.',
  'Cancellation slot matching AI connects patients with last-minute freed-up slots that match their clinical needs and location — a task that would take a human administrator hours of phone calls can be done by AI in seconds.',
  'AI triage tools raise serious ethical questions: who decides the criteria? How do you prevent health inequalities from being baked into the algorithm? And should patients be told when an AI influenced their waiting time?',
  'Transparency is a key demand from patient groups — the NHS is beginning to publish details of how AI tools are used in waiting list management, but advocacy groups argue more independent oversight is needed.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is the primary purpose of AI triage tools used in NHS waiting list management?',
    options: [
      'To automatically remove patients from the waiting list if they have not responded to appointment reminders within 14 days',
      'To help clinicians identify which patients on a waiting list may be deteriorating and need to be seen more urgently, based on clinical data',
      'To schedule operations automatically without requiring a consultant to approve the date and time',
      'To generate invoices for private health insurance companies based on the length of time a patient has been waiting',
    ],
    correctIndex: 1,
    explanation:
      'AI triage tools in NHS waiting list management are clinical decision support tools — they do not make final decisions, but they help clinicians prioritise. A long waiting list for a specialty like cardiology or orthopaedics may contain patients who have been waiting 2 years and are now significantly worse than when they were referred, alongside patients who were referred recently with similar conditions but have not yet deteriorated. AI tools that monitor clinical data (GP record updates, hospital outpatient letters, blood test results) can flag which patients may have deteriorated and need earlier review, so the consultant can adjust their position in the queue. This is about making better clinical decisions faster, not automating decisions away from clinicians.',
    hint: 'Think about what happens to a patient\'s condition while they are waiting many months for treatment.',
  },
  {
    question: 'How does no-show prediction AI help reduce waste in NHS appointment systems?',
    options: [
      'It charges patients automatically if they miss an appointment without cancelling, using their bank details from the NHS app',
      'It identifies patients statistically likely to miss their appointment so staff can make proactive contact, and potentially offer the slot to another patient in advance',
      'It permanently removes patients from the waiting list after two missed appointments without requiring a GP referral to get back on',
      'It sends automated legal warnings to patients who have missed appointments, threatening removal from the waiting list',
    ],
    correctIndex: 1,
    explanation:
      'NHS appointment no-show rates are estimated to cost the NHS over £1 billion per year in wasted clinical time. AI tools trained on appointment history can identify patterns associated with non-attendance — the day and time of appointment, distance from home to clinic, whether the patient has a previous no-show history, whether they acknowledged a reminder message. By flagging high-risk appointments in advance, admin staff can prioritise follow-up calls and reminders. Crucially, the AI also helps identify whether a slot freed by cancellation or non-attendance can quickly be matched to another waiting patient, reducing the gap between cancellation and the slot being used productively.',
    hint: 'Think about what happens to a hospital appointment slot when a patient does not attend.',
  },
  {
    question: 'What does cancellation slot matching AI do in the NHS context?',
    options: [
      'It automatically contacts the patient who cancelled to reschedule them for the next available slot without human involvement',
      'It rapidly matches patients on the waiting list to last-minute freed-up appointment or procedure slots that fit their clinical needs and location',
      'It analyses whether a cancellation was clinically justified and flags unjustified cancellations for review by a patient services manager',
      'It sends a financial penalty notice to the patient who cancelled, as the slot cost money to prepare for their procedure',
    ],
    correctIndex: 1,
    explanation:
      'When a surgical procedure or outpatient appointment is cancelled at short notice — perhaps because another patient is unwell and cannot attend — finding a suitable replacement quickly is difficult. A human administrator would need to go through the waiting list, call patients to check availability, verify clinical suitability, and arrange transport. AI systems can do this in seconds: they search the waiting list for patients who match the clinical requirements, are geographically close enough to attend at short notice, have previously indicated availability for short-notice appointments, and have not already been waiting beyond acceptable timeframes. The system presents the administrator with a ranked shortlist. This reduces the number of wasted theatre sessions and clinic slots, which is both cost-efficient and reduces waiting times.',
    hint: 'Think about what a last-minute cancellation means and how hard it is to fill that gap manually.',
  },
  {
    question: 'What is one of the main ethical concerns about using AI to manage NHS waiting list priorities?',
    options: [
      'That AI prioritisation tools are too expensive for NHS trusts to afford, meaning only wealthy hospitals benefit from shorter waits',
      'That the criteria built into prioritisation algorithms may reflect and reinforce existing health inequalities, disadvantaging already-marginalised groups',
      'That AI will eventually be used to privatise the NHS waiting list entirely, with priority given to patients willing to pay a premium',
      'That patients who are prioritised by AI will receive worse care because their treatment is rushed, compared to patients who wait longer',
    ],
    correctIndex: 1,
    explanation:
      'Health inequalities are a well-documented feature of NHS access — people in deprived areas, from certain ethnic backgrounds, or with communication barriers consistently receive worse outcomes from the NHS. If an AI prioritisation tool is trained on historical data from this unequal system, it may learn to replicate and even amplify those inequalities. For example, if patients who were less likely to chase up their referral historically received lower priority, the AI may penalise less assertive patients — who disproportionately come from marginalised groups. Patient advocacy groups, the NHS Race and Health Observatory, and parliamentary committees have all called for independent auditing of AI tools used in waiting list management to ensure they do not embed discrimination.',
    hint: 'Think about what happens if an AI learns from data that already contains inequality.',
  },
  {
    question: 'Why do patient groups call for greater transparency in NHS AI waiting list tools?',
    options: [
      'Because patients want to use the AI tools themselves to manually adjust their own position on the waiting list based on their own assessment of urgency',
      'Because patients and their advocates argue they have a right to know when and how AI influenced a decision about their healthcare, and independent oversight is needed to ensure fairness',
      'Because transparency would allow patients to game the system by presenting symptoms that the AI is known to prioritise highly, regardless of actual clinical need',
      'Because NHS staff want AI decision logs made public so they can prove to managers that their clinical decisions were supported by data',
    ],
    correctIndex: 1,
    explanation:
      'Transparency in automated decision-making in healthcare is a key demand from patient groups including Healthwatch, the Patient\'s Association, and disease-specific charities. The argument is twofold: first, patients have a right under UK GDPR to know when automated processing has significantly affected them, and healthcare decisions clearly qualify. Second, without transparency there can be no meaningful independent audit of whether AI tools are fair across different patient groups. The NHS is beginning to move towards greater transparency — NHS England has published guidance requiring trusts to disclose the use of AI in administrative processes — but advocacy groups argue the pace is too slow and oversight too weak. The goal is not to give patients veto power over AI, but to ensure accountability for the outcomes.',
    hint: 'Think about what rights you have when an algorithm influences something as important as your healthcare.',
  },
]

export function AIAndNHSWaitingLists() {
  useMarkVisited('ai-and-nhs-waiting-lists')

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3E5;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and NHS waiting lists
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            With 7 million people waiting for NHS treatment, AI is being used to prioritise smarter,
            predict no-shows, and match patients to cancellation slots — but raises hard questions about fairness.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-nhs-waiting-lists" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The scale of the problem</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The NHS waiting list crisis is one of the most urgent healthcare challenges in England. AI is being
            deployed not as a silver bullet, but as a tool to help managers and clinicians make better use of
            existing capacity.
          </p>
          <div className="space-y-2">
            {[
              'Over 7 million people in England were on an NHS waiting list as of 2024 — the highest number since records began',
              'The NHS target is for no patient to wait more than 18 weeks from referral to treatment — currently around 40% of patients wait longer',
              'Missed appointments (no-shows) cost the NHS an estimated £1 billion per year in wasted clinical time',
              'A wasted operating theatre slot costs the NHS on average £2,000 to £3,000 — AI that reduces wasted slots has significant financial value',
              'The NHS Long Term Plan commits to increasing the use of digital tools and AI in elective care management',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI triage — identifying who needs to be seen first</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Traditional waiting list management is largely administrative — patients are seen roughly in the order they
            were referred. AI triage tools aim to surface clinical urgency more effectively.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4C8;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Deterioration detection</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">AI tools that monitor GP records and outpatient correspondence can flag patients who have deteriorated since their referral — for example, a patient referred for cardiac assessment who has since had two A&E attendances for chest pain. The system alerts the consultant to review their position on the waiting list before their scheduled appointment date.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CB;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Clinical decision support</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Rather than replacing clinician judgment, AI triage tools present consultants with a ranked list of patients and the key clinical data points behind each ranking. The clinician can agree, override, or ask for more information. The AI handles the information-gathering; the human makes the decision.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">No-show prediction and slot filling</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Every missed appointment is both a waste and a lost opportunity for another patient. AI is making it easier
            to anticipate non-attendance and fill slots efficiently.
          </p>
          <div className="space-y-2">
            {[
              'No-show prediction models are trained on appointment history, demographics, appointment type, time of day, and reminder response data',
              'High-risk appointments are flagged for extra follow-up contact — a text, a call, or a more personalised reminder',
              'If a slot becomes available at short notice, AI can search the waiting list in seconds for the most suitable patient who lives close enough and has indicated availability',
              'NHS trusts using slot-matching AI report reductions in wasted theatre time of up to 30%',
              'Patients can opt in to receive short-notice offers — some systems use NHS App messaging to contact patients instantly when a slot becomes available',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-purple-600 dark:text-purple-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The ethical questions</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The use of AI in waiting list management raises some of the most difficult questions in healthcare policy.
            There are no easy answers — but these questions must be asked.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x2696;&#xFE0F;',
                label: 'Who decides the criteria?',
                text: 'Any AI prioritisation system embeds assumptions about what makes a patient more or less urgent. These assumptions should be made explicitly by clinicians and ethicists — not hidden inside an algorithm.',
                color: 'rose',
              },
              {
                icon: '&#x1F4CA;',
                label: 'Health inequalities',
                text: 'If the AI is trained on historical data from an unequal system, it may learn to replicate those inequalities. Deprived communities, people with communication barriers, and those with lower health literacy may be systematically disadvantaged.',
                color: 'rose',
              },
              {
                icon: '&#x1F50D;',
                label: 'Transparency and oversight',
                text: 'Patients deserve to know when AI has influenced their care pathway. NHS England guidance now requires trusts to disclose the use of AI in administrative processes — but enforcement and independent audit remain limited.',
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

        <LessonNote lessonId="ai-and-nhs-waiting-lists" />
        <ReviewLaterButton lessonId="ai-and-nhs-waiting-lists" />

        <Quiz lessonId="ai-and-nhs-waiting-lists" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-nhs-waiting-lists" />
        <LessonFeedback lessonId="ai-and-nhs-waiting-lists" />

        <RelatedLessons currentId="ai-and-nhs-waiting-lists" />

        <NextLesson currentId="ai-and-nhs-waiting-lists" />

      </div>
    </div>
  )
}
