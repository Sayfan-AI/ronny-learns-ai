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
  'AI tools like Pearl and Overjet analyse dental X-rays to detect cavities, bone loss, and signs of oral cancer with accuracy comparable to experienced dentists — and sometimes catching things the human eye misses.',
  'AI treatment planning software can generate sequenced treatment plans, estimate costs, and suggest the order of dental work — helping practices be more consistent and reducing variation between dentists.',
  'During the NHS dental access crisis, 111 dental triage tools and AI chatbots are helping direct patients to emergency versus routine care, easing pressure on a system stretched beyond capacity.',
  'Oral cancer detection AI is being piloted in UK dental schools and community clinics — capable of identifying suspicious lesions in photographs, which could enable earlier intervention.',
  'AI is also helping with dental anxiety: virtual reality relaxation tools, AI-guided breathing exercises, and chatbot aftercare are being trialled in practices to make the experience less stressful for anxious patients.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How do AI tools like Pearl and Overjet help dentists analyse X-rays?',
    options: [
      'They replace dentists entirely — the AI reads every X-ray and produces a diagnosis without human involvement',
      'They highlight areas of concern on the X-ray image — such as possible cavities or bone loss — so the dentist can check those areas with extra attention',
      'They convert X-ray images into 3D models that patients can view on a screen, improving understanding of their dental health',
      'They store X-rays securely in the cloud and compare them against a national database to identify unusual patterns',
    ],
    correctIndex: 1,
    explanation:
      'AI dental imaging tools work by training on millions of annotated X-rays — images where experienced dentists have already marked cavities, bone loss, calculus build-up, and other issues. The AI learns to spot similar patterns and highlights them for the dentist to review. Studies have shown that dentists using AI assistance detect more issues than without it, and that AI sometimes catches very early-stage cavities that might otherwise be missed until the next appointment. Importantly, the dentist remains responsible for the diagnosis — the AI is an assistant, not a replacement.',
    hint: 'Think about the AI as a second pair of eyes that highlights things for the dentist to check.',
  },
  {
    question: 'What does AI treatment planning software do in a dental practice?',
    options: [
      'It performs the dental treatment robotically — drilling, filling, and extracting teeth without a dentist present',
      'It generates a suggested sequence of dental treatments, estimates costs, and helps the dentist present a clear plan to the patient',
      'It automatically submits pre-authorisation requests to NHS England for complex procedures, removing administrative burden from the practice',
      'It scans the patient\'s face using a camera to predict what their smile will look like after treatment, for marketing purposes',
    ],
    correctIndex: 1,
    explanation:
      'AI treatment planning tools — such as those used in conjunction with dental imaging software — review the full picture of a patient\'s dental health and suggest a logical, prioritised sequence of treatment. For example: first address the active infection, then restore the damaged tooth, then consider cosmetic work. They also estimate costs per treatment stage, helping practices have clearer financial conversations with patients. Consistency is a key benefit — different dentists in the same practice may recommend slightly different treatment sequences based on their training and preferences, while AI helps establish a standard baseline.',
    hint: 'Think about the AI creating a roadmap for the dentist to follow and discuss with the patient.',
  },
  {
    question: 'How is AI being used to help with the NHS dental access crisis?',
    options: [
      'AI is being used to train more dentists faster by running virtual dental simulations, cutting the length of dental degrees',
      'AI-powered 111 triage tools and chatbots help patients determine whether they need emergency dental care or can wait for a routine appointment',
      'AI is negotiating new NHS dental contracts automatically, resolving the financial disputes that have caused many dentists to leave the NHS',
      'AI is diagnosing and treating dental pain remotely via video call, eliminating the need for in-person appointments in areas with no dental practices',
    ],
    correctIndex: 1,
    explanation:
      'The NHS dental access crisis has left millions of people unable to find an NHS dentist. Emergency dental services are overwhelmed. AI tools integrated with NHS 111 — the non-emergency helpline — help assess callers\' symptoms and direct them appropriately: a broken tooth with no pain might wait; an abscess causing swelling and fever needs urgent care. Chatbots on NHS websites do similar triage. This does not solve the underlying shortage of dentists, but it helps prioritise the capacity that exists and prevents people with minor issues from blocking emergency slots needed by those in serious pain.',
    hint: 'Think about AI helping sort urgent from non-urgent cases when there are not enough dentists.',
  },
  {
    question: 'Why is AI oral cancer detection considered particularly important?',
    options: [
      'Because oral cancer is the most common cancer in the UK and AI is the only reliable way to detect it',
      'Because oral cancer survival rates improve dramatically with early detection, and AI can spot suspicious lesions at a stage when they are very small and easily treated',
      'Because dentists are not currently trained to look for oral cancer — only oncologists are — and AI bridges this gap',
      'Because AI can detect oral cancer from a blood test taken in the dental chair, avoiding the need for biopsy',
    ],
    correctIndex: 1,
    explanation:
      'Oral cancer (mouth cancer) has a five-year survival rate of around 80% when caught at stage one, but only around 20% when caught at stage four. The problem is that early-stage oral cancer often looks like a harmless ulcer or patch that patients and even dentists may dismiss. AI tools trained on thousands of images of oral lesions can analyse photographs taken during a routine dental examination and flag lesions that match patterns associated with cancer or pre-cancer. This prompts an urgent referral before the cancer has spread. In the UK, pilot programmes are running in several dental schools and community clinics, particularly in areas with high rates of smoking and alcohol use — the main risk factors.',
    hint: 'Think about catching something early versus late.',
  },
  {
    question: 'How is AI being used to help patients with dental anxiety?',
    options: [
      'AI prescribes anti-anxiety medication automatically based on a short online questionnaire before the appointment',
      'AI-guided virtual reality environments, breathing exercise apps, and chatbot aftercare are being used to help anxious patients feel calmer before and after dental treatment',
      'AI replaces the dentist entirely with a robotic system that is completely silent and contactless, reducing the triggers of anxiety',
      'AI sends automated reassurance texts after every appointment, reminding patients that their teeth are fine and they do not need to worry',
    ],
    correctIndex: 1,
    explanation:
      'Dental anxiety affects around one in four people in the UK and is one of the main reasons people avoid going to the dentist until they are in severe pain. Several AI-related tools are being trialled to address this. Virtual reality headsets allow patients to watch calming nature scenes during treatment, reducing the experience of pain and anxiety by directing attention elsewhere. Apps guide patients through breathing exercises and relaxation techniques in the waiting room. After treatment, AI chatbots follow up to ask how the patient is feeling and provide reassurance — catching patients who are worried about their recovery or tempted to cancel future appointments.',
    hint: 'Think about tools that make the dental experience less stressful.',
  },
]

export function AIAndDentistry() {
  useMarkVisited('ai-and-dentistry')

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F9B7;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and dentistry
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            From AI that reads your X-rays to tools helping anxious patients — how artificial
            intelligence is changing the way we care for our teeth and gums.
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

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-cyan-100 dark:border-cyan-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Dentistry — a perfect fit for AI</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Dental diagnosis relies heavily on pattern recognition — spotting a cavity in an X-ray, identifying early signs of gum disease, or recognising a suspicious lesion. This is exactly what AI is good at.
          </p>
          <div className="space-y-2">
            {[
              'Around 27% of adults in England have tooth decay — many cases are caught too late because people do not attend regular check-ups',
              'Oral cancer kills more people each year than cervical cancer or testicular cancer in the UK',
              'The NHS dental crisis has left millions unable to access routine care — AI is helping triage those who are in urgent need',
              'Dental anxiety affects roughly one in four people, leading to avoidance that makes problems worse',
              'AI imaging tools have been shown to match or exceed average dentist accuracy in detecting interproximal (between-teeth) cavities on X-rays',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-cyan-600 dark:text-cyan-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI X-ray analysis</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Dental X-rays are the most common imaging tool in dentistry. AI is transforming how they are read.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F9EA;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Pearl and Overjet</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">These AI systems analyse dental radiographs in real time, highlighting areas of concern. They can detect cavities at early stages, measure bone loss (an indicator of gum disease), spot calculus build-up, and flag potential signs of pathology. Studies comparing AI and dentist performance show AI performs at the level of experienced dentists and sometimes catches things that were missed.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CA;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Patient communication</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">A key advantage of AI imaging is the annotated output. The dentist can show the patient exactly where the AI has flagged a problem on their X-ray — a specific grey area in a specific tooth — making it much easier for patients to understand why treatment is recommended. This increases treatment acceptance and trust.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4C1;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Longitudinal tracking</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">AI can compare X-rays over time — comparing this year's X-ray to last year's and measuring whether a lesion has grown, bone loss has increased, or a cavity has worsened. This longitudinal view is difficult for a human to do reliably across hundreds of patients, but straightforward for software.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-teal-100 dark:border-teal-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Oral cancer detection</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Catching oral cancer early saves lives. AI is being used to spot suspicious lesions before they become life-threatening.
          </p>
          <div className="space-y-2">
            {[
              'Oral cancer most commonly appears on the tongue, floor of the mouth, or cheeks — often starting as a patch or ulcer that does not heal',
              'AI tools trained on thousands of images can analyse photographs taken by the dentist and flag lesions that match patterns associated with pre-cancer or cancer',
              'Pilot programmes in UK dental schools are testing AI screening during routine check-ups, targeting patients who smoke or drink alcohol heavily',
              'Community dental teams in some areas are using AI-assisted screening in areas where traditional access to specialist oral cancer checks is limited',
              'A flagged result does not mean a cancer diagnosis — it means the dentist is prompted to refer the patient urgently to a specialist for a biopsy',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-teal-600 dark:text-teal-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-teal-50 dark:bg-teal-950 rounded-xl p-4">
            <p className="text-teal-700 dark:text-teal-300 text-sm leading-relaxed">
              <span className="font-semibold">Why this matters:</span> The five-year survival rate for oral cancer caught at stage one is around 80%. When caught at stage four — after it has spread to the lymph nodes or beyond — it falls to around 20%. AI has the potential to shift when cancers are detected, which translates directly into lives saved.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">NHS dental triage and access</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The NHS dental crisis has made AI triage tools increasingly important in directing limited care to those who need it most.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4DE;',
                label: '111 dental triage',
                text: 'NHS 111 dental triage tools — including AI-assisted pathways — ask callers questions about their symptoms (pain level, swelling, bleeding) to determine whether they need emergency treatment within hours, urgent treatment within days, or can safely wait for a routine appointment.',
                color: 'purple',
              },
              {
                icon: '&#x1F4AC;',
                label: 'Chatbots on NHS websites',
                text: 'Some NHS and local authority dental websites use AI chatbots to direct patients. If you describe symptoms of a dental abscess, the chatbot directs you to the urgent pathway. If you describe a chipped tooth with no pain, it advises waiting for a routine appointment and provides advice on managing it in the meantime.',
                color: 'purple',
              },
              {
                icon: '&#x1F4CD;',
                label: 'Finding emergency appointments',
                text: 'Some tools help identify which emergency dental practices have slots available nearby — reducing the time patients spend ringing multiple practices. This is a relatively simple AI application but has a significant practical impact when someone is in pain.',
                color: 'purple',
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

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Dental anxiety and AI</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Dental anxiety is a serious public health problem. Around one in four people experience significant anxiety about dental treatment, and many avoid the dentist for years as a result — until a crisis forces their hand.
          </p>
          <div className="space-y-2">
            {[
              'Virtual reality headsets allow patients to watch calming underwater scenes or nature environments while having treatment, redirecting their attention away from the sounds and sensations of dentistry',
              'AI-guided breathing apps coach anxious patients through relaxation exercises in the waiting room before their appointment',
              'Some practices use AI chatbots to conduct gentle pre-appointment conversations about patients\' fears, preparing the dentist with information before the patient sits in the chair',
              'Post-appointment chatbot check-ins ask patients how they are feeling, provide aftercare advice, and offer reassurance that can reduce the fear of future appointments',
              'Research shows that reducing anxiety in the dental chair not only improves patient experience but also reduces physiological stress responses that can make treatment more complicated',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-rose-600 dark:text-rose-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-rose-50 dark:bg-rose-950 rounded-xl p-4">
            <p className="text-rose-700 dark:text-rose-300 text-sm leading-relaxed">
              <span className="font-semibold">A note for anxious readers:</span> If you have been avoiding the dentist because of anxiety, you are not alone and it is not something to be ashamed of. Modern dental practices are increasingly equipped to help — and AI is one small part of a larger movement to make dentistry a less frightening experience.
            </p>
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
