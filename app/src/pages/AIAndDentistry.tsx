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

const LESSON_TITLE = 'AI and dentistry'

const KEY_TAKEAWAYS = [
  'AI tools (Pearl, Overjet, Carestream AI) analyse dental X-rays and can detect cavities, bone loss, and early signs of oral cancer that the human eye can miss on a busy NHS list.',
  'Treatment planning software uses AI to sequence appointments, estimate costs, and flag which patients are most overdue for follow-up — helping overwhelmed dental practices prioritise.',
  'NHS 111 uses AI triage tools to direct people with dental pain to the right level of care — emergency same-day appointments vs. routine care — during the ongoing dental access crisis.',
  'Oral cancer detection AI is being piloted in UK dental schools and community clinics — early detection dramatically improves survival rates for a cancer that is often caught too late.',
  'Some UK dental practices use VR (virtual reality) headsets and AI-guided breathing tools to help patients with dental anxiety — early research shows measurable reduction in fear.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What do AI X-ray analysis tools in dentistry do that improves patient care?',
    options: [
      'They replace the need for dental X-rays entirely by using 3D scanning',
      'They analyse radiographs to flag cavities, bone loss, and oral cancer signs that might be missed by a human in a brief appointment',
      'They automatically book treatment appointments based on what they find, without the dentist needing to be involved',
      'They compare your X-rays to millions of others to predict which teeth you will lose in the next five years',
    ],
    correctIndex: 1,
    explanation:
      'Tools like Pearl and Overjet overlay dental X-rays with AI annotations — highlighting areas that look suspicious. Studies show dentists using AI assistance catch significantly more small cavities, early-stage bone loss, and potential oral cancer sites than those reviewing X-rays without it. This is especially valuable in busy NHS practices where appointment times are short. The dentist still makes the clinical decision — AI flags what to look at more carefully.',
    hint: 'Think about having a second pair of eyes that never gets tired or distracted.',
  },
  {
    question: 'How does AI help with NHS dental triage through the 111 service?',
    options: [
      'AI performs virtual dental examinations over video call, diagnosing conditions remotely without any dentist involvement',
      'AI triage tools ask structured questions about pain type, severity, and duration to direct patients to same-day emergency care or routine appointments',
      'AI books dental appointments directly into NHS practice calendars without any human intermediary',
      'AI prescribes antibiotics and painkillers automatically for dental infections based on symptom matching',
    ],
    correctIndex: 1,
    explanation:
      "NHS 111 handles dental triage through online and phone pathways that use decision-support AI. If someone calls with toothache, the system asks questions about pain severity, whether it is affecting swallowing or breathing (signs of a spreading infection), swelling, and how long symptoms have been present. Based on the answers, it routes them: severe or spreading infection goes to an emergency dental centre (UDCC); persistent but manageable pain goes to a routine urgent dental appointment; mild discomfort gets self-care advice. This AI-assisted routing is particularly important during the dental access crisis, when millions cannot get regular NHS appointments.",
    hint: "Think about efficiently sorting urgent cases from non-urgent ones without a dentist's time.",
  },
  {
    question: 'Why is AI-assisted oral cancer screening particularly important?',
    options: [
      'Because oral cancer is one of the most common cancers in the UK, affecting more people than breast or prostate cancer',
      'Because oral cancer caught early (when limited to the mouth) has a much higher survival rate than cancer caught at a late stage when it has spread',
      'Because AI can cure oral cancer without surgery by identifying and targeting cancer cells directly',
      'Because all dentists are now legally required to use AI for every oral cancer check under UK law',
    ],
    correctIndex: 1,
    explanation:
      'Oral cancer (cancers of the mouth, tongue, lips, throat) has a very good prognosis when caught early — five-year survival rates above 80%. Caught late, when it has spread to lymph nodes or elsewhere, survival drops to around 40%. The problem is that early-stage oral lesions often look ambiguous — many benign ulcers look similar. AI tools trained on large datasets of lesion images are being tested in UK dental schools and community clinics to flag which lesions warrant urgent referral for biopsy. Dentists see the most mouths regularly — AI can help them spot what might otherwise be dismissed as a routine mouth ulcer.',
    hint: 'Think about what early detection means for survival in cancer generally.',
  },
  {
    question: 'How are some UK dental practices using technology to help patients with dental anxiety?',
    options: [
      'They play classical music specifically calibrated by AI to match patients\' heart rates during procedures',
      'Virtual reality headsets and AI-guided breathing exercises give anxious patients an immersive distraction and regulated breathing support',
      'AI robots perform the dental procedures more gently than human dentists, removing the main cause of pain',
      'AI predicts which patients will be anxious and automatically sedates them before procedures without consent',
    ],
    correctIndex: 1,
    explanation:
      "Dental anxiety affects around 25% of UK adults and leads many to avoid care entirely until problems become emergencies. Some practices now offer VR headsets during procedures — the patient watches a calming virtual environment (a beach, a forest) while treatment is performed. AI integration means the content adjusts based on heart rate and breathing monitors to maintain the calming effect. Separately, AI-guided breathing exercises (box breathing with audio and visual cues) delivered via app or screen are used in waiting rooms and during treatment. Early trials show reduced patient-reported anxiety and willingness to return for follow-up appointments.",
    hint: 'Think about distraction and breathing techniques as clinically supported anxiety-management tools.',
  },
  {
    question: 'What is the role of the dentist when AI analysis tools flag something suspicious on an X-ray?',
    options: [
      'The dentist is replaced — the AI makes the treatment decision and the dental nurse carries it out',
      'The dentist uses the AI flag as one input among others, makes the clinical diagnosis, and decides what treatment (if any) is needed',
      'The patient is automatically referred to a specialist without the dentist reviewing the finding',
      'The AI flag is emailed to NHS England who then contact the patient directly',
    ],
    correctIndex: 1,
    explanation:
      "AI tools in dentistry are decision-support tools — they flag, they annotate, they draw attention. They do not diagnose, prescribe, or plan treatment autonomously. A dentist still examines the patient, reviews the X-ray (now with AI annotations highlighting areas of concern), asks questions, probes suspicious areas clinically, and makes a professional clinical judgement. Some AI flags turn out to be nothing on closer inspection; some missed by AI are caught by the dentist's physical examination. The AI improves the dentist's sensitivity to early-stage problems; it does not replace clinical judgement.",
    hint: 'Think about AI as a helpful alert system, not a replacement for professional expertise.',
  },
]

export function AIAndDentistry() {
  useMarkVisited('ai-and-dentistry')

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F9B7;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and dentistry
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI is helping dentists spot what the eye misses — from cavity detection and
            oral cancer screening to NHS triage and helping anxious patients.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-dentistry" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Why dentistry needs AI</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            UK dentistry is under enormous pressure. Millions of people cannot get NHS appointments. Dentists see dozens of patients per day in brief slots. Oral cancer is found late in too many cases. AI is being applied to all of these problems.
          </p>
          <div className="space-y-2">
            {[
              'Around 2,400 people are diagnosed with oral cancer in the UK each year — and early detection dramatically improves survival',
              'NHS dental access reached a crisis point post-pandemic, with 43 million NHS dental courses of treatment not provided in 2020/21',
              'AI X-ray analysis tools can analyse a radiograph in seconds — catching findings a fatigued dentist might miss at the end of a long list',
              'Studies show AI-assisted cavity detection increases small cavity detection rates by up to 30%',
              'Dental anxiety affects 25% of adults and leads many to avoid care until emergencies arise — technology is helping address this too',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-teal-100 dark:border-teal-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI X-ray analysis</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Dental X-rays contain enormous amounts of diagnostic information. AI tools analyse them faster and more consistently than a tired human eye.
          </p>
          <div className="space-y-3">
            {[
              { icon: '&#x1F4F7;', label: 'Pearl and Overjet', text: 'These AI tools overlay dental radiographs with colour-coded annotations — green for normal, amber for watch, red for concern. They flag cavities at very early stages (when a small filling is much better than a root canal), bone loss around teeth, and lesions that could indicate oral cancer.' },
              { icon: '&#x1F4CA;', label: 'Consistency matters', text: 'Research shows significant variability between dentists reviewing the same X-ray — what one flags, another misses. AI provides consistent detection regardless of how long the dentist has been working that day or how tired they are.' },
              { icon: '&#x1F4B7;', label: 'Not a replacement', text: "The dentist still makes every clinical decision. AI flags what to look at — the human decides what it means and what to do. Some AI alerts turn out to be false positives on clinical examination; some findings are caught by the dentist's physical probe that AI missed." },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-teal-50 dark:bg-teal-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-teal-800 dark:text-teal-200 text-sm mb-0.5">{label}</p>
                  <p className="text-teal-700 dark:text-teal-300 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Oral cancer detection</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Oral cancer caught early is very treatable. Caught late, it is often devastating. AI is improving early detection.
          </p>
          <div className="space-y-2">
            {[
              'Early-stage oral cancer (confined to the mouth) has a five-year survival rate of over 80% — late-stage drops to around 40%',
              'AI tools trained on large datasets of lesion photographs can classify oral lesions as low-risk, watch-and-wait, or urgent referral',
              'Pilots at UK dental schools use AI-assisted screening to flag lesions that warrant prompt biopsy referral',
              'Community dental services are piloting AI screening in GP practices and pharmacies — bringing assessment to people who do not visit dentists regularly',
              'Dentists see mouths more often than any other health professional — AI tools help them catch what might otherwise be dismissed as a routine ulcer',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Helping anxious patients</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Dental anxiety is one of the biggest barriers to oral health in the UK. Technology is helping address it.
          </p>
          <div className="space-y-2">
            {[
              'VR headsets during treatment — patients watch calming virtual environments (beaches, forests) while treatment is performed, reducing perceived pain and time',
              'AI-adjusted content — some systems monitor heart rate and breathing and adjust the VR content to maintain calm when readings spike',
              'AI-guided breathing exercises in waiting rooms — box breathing and slow breathing guided by visual prompts on screens or apps before appointments',
              'Chatbot aftercare — AI messaging systems that follow up after procedures, answering questions about pain, healing, and what to expect',
              'Early studies show patients using VR or guided breathing report lower anxiety and are more likely to return for follow-up care',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-purple-600 dark:text-purple-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <LessonNote lessonId="ai-and-dentistry" />
        <ReviewLaterButton lessonId="ai-and-dentistry" />

        <Quiz lessonId="ai-and-dentistry" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-dentistry" />
        <LessonFeedback lessonId="ai-and-dentistry" />

        <RelatedLessons currentId="ai-and-dentistry" />

        <NextLesson currentId="ai-and-dentistry" />

      </div>
    </div>
  )
}
