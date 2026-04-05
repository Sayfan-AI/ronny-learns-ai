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
      "It scans the patient's face using a camera to predict what their smile will look like after treatment, for marketing purposes",
    ],
    correctIndex: 1,
    explanation:
      "AI treatment planning tools review the full picture of a patient's dental health and suggest a logical, prioritised sequence of treatment. For example: first address the active infection, then restore the damaged tooth, then consider cosmetic work. They also estimate costs per treatment stage, helping practices have clearer financial conversations with patients. Consistency is a key benefit — different dentists in the same practice may recommend slightly different treatment sequences based on their training and preferences, while AI helps establish a standard baseline.",
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
      "The NHS dental access crisis has left millions of people unable to find an NHS dentist. Emergency dental services are overwhelmed. AI tools integrated with NHS 111 help assess callers' symptoms and direct them appropriately: a broken tooth with no pain might wait; an abscess causing swelling and fever needs urgent care. Chatbots on NHS websites do similar triage. This does not solve the underlying shortage of dentists, but it helps prioritise the capacity that exists.",
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
      'Oral cancer has a five-year survival rate of around 80% when caught at stage one, but only around 20% when caught at stage four. The problem is that early-stage oral cancer often looks like a harmless ulcer or patch that patients and even dentists may dismiss. AI tools trained on thousands of images of oral lesions can analyse photographs taken during a routine dental examination and flag lesions that match patterns associated with cancer or pre-cancer. This prompts an urgent referral before the cancer has spread.',
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
      'Dental anxiety affects around one in four people in the UK and is one of the main reasons people avoid going to the dentist until they are in severe pain. Virtual reality headsets allow patients to watch calming nature scenes during treatment, reducing the experience of pain and anxiety by directing attention elsewhere. Apps guide patients through breathing exercises and relaxation techniques in the waiting room. After treatment, AI chatbots follow up to ask how the patient is feeling and provide reassurance.',
    hint: 'Think about tools that make the dental experience less stressful.',
  },
]

export function AIAndDentistry() {
  useMarkVisited('ai-and-dentistry')

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F9B7;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and dentistry
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            X-ray analysis, cavity detection, treatment planning, NHS dental triage,
            and how AI is helping anxious patients get through the door.
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

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-sky-100 dark:border-sky-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI in the dental surgery — the big picture</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Dentistry might not be the first place you think of when you think about artificial intelligence. But dental practices generate enormous amounts of visual data — X-rays, photographs, scans — and AI is very good at analysing images. The result is a growing set of tools that help dentists see more, plan better, and reach patients who struggle to access care.
          </p>
          <div className="space-y-2">
            {[
              'AI X-ray analysis tools are now used in thousands of dental practices in the UK and US, catching cavities and bone loss earlier than unaided review',
              'The UK has a significant shortage of NHS dentists — AI triage tools are helping 111 direct patients to the right level of care when they cannot get an appointment',
              'Oral cancer kills around 3,000 people per year in the UK; early detection dramatically improves survival, and AI screening could help dentists catch it sooner',
              'Treatment planning AI helps dentists map out complex multi-stage treatments and give patients a clear picture of what to expect and what it will cost',
              'Dental anxiety affects one in four adults — new tools using VR and AI-guided breathing are making treatment more bearable for people who dread the dentist',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-sky-600 dark:text-sky-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI X-ray analysis — a second pair of eyes</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            When your dentist takes an X-ray, they are looking at a complex image under time pressure. AI tools like Pearl and Overjet act as a trained second opinion, analysing the image and highlighting areas of concern in seconds.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F7;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">How it works</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">The AI has been trained on millions of annotated dental X-rays, learning the visual signatures of early decay, bone loss, cracked teeth, and other conditions. When a new X-ray is uploaded, it overlays colour-coded annotations on the image within seconds — flagging areas that warrant closer inspection.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4C8;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">What the evidence shows</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Clinical studies have found AI-assisted review catches significantly more early cavities than unaided review. An early cavity — one that has not yet reached the nerve — can often be treated with a small filling or remineralisation. Missed until it is larger, it may need a crown or root canal treatment. Earlier detection saves patients pain and money.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F468;&#x200D;&#x2695;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Who makes the decision</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">The dentist always reviews the AI annotations and decides whether to treat. The AI cannot examine the patient, ask about symptoms, or apply clinical judgement about when treatment is warranted versus watchful waiting. It is a decision-support tool, not a replacement for the dentist.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-violet-100 dark:border-violet-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">NHS dental triage AI — helping during the access crisis</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            England has a dental emergency problem. Millions of people have no NHS dentist, and when they have acute pain or infection, they often turn to NHS 111. AI helps 111 handle the volume consistently and fairly.
          </p>
          <div className="space-y-2">
            {[
              'A caller describing severe facial swelling with fever needs to be seen by a dentist or at A&E the same day — this is a potentially serious infection',
              'A caller describing a lost filling with mild sensitivity can usually wait a few days and use over-the-counter pain relief in the meantime',
              'A caller describing a broken tooth with no pain can often wait for a routine appointment',
              'AI triage tools analyse the combination of symptoms described and generate a priority level, helping call handlers direct patients appropriately',
              'Without triage AI, the allocation of scarce emergency dental slots would depend heavily on how assertively the patient pushed for an appointment — which disadvantages vulnerable people',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-violet-600 dark:text-violet-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI oral cancer screening</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Oral cancer is one of the cancers where early detection makes the biggest difference to survival. Dentists are well-placed to spot it — but only if they have the tools to assess suspicious lesions accurately.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F50D;',
                label: 'The detection challenge',
                text: 'Early oral cancer can look like a small ulcer or a white patch — easy to overlook or misattribute to a bite injury or irritation. AI tools trained on images of malignant and benign lesions can flag which lesions have characteristics associated with cancer, prompting earlier specialist referral.',
                color: 'red',
              },
              {
                icon: '&#x1F3EB;',
                label: 'Where it is being tested',
                text: 'AI oral cancer screening tools are currently being piloted in UK dental schools and some community dental clinics, particularly in areas with higher rates of oral cancer (linked to smoking and alcohol use). The aim is to make screening more consistent and reduce the postcode lottery in early detection.',
                color: 'red',
              },
              {
                icon: '&#x23F1;&#xFE0F;',
                label: 'Why speed matters',
                text: 'Five-year survival for early-stage oral cancer is around 90%. For late-stage, it drops to around 20%. The delay between a patient first noticing something and receiving a diagnosis averages several months in the UK. AI tools that prompt earlier referral could save hundreds of lives per year.',
                color: 'red',
              },
            ].map(({ icon, label, text, color }) => (
              <div key={label} className={"flex gap-3 items-start bg-" + color + "-50 dark:bg-" + color + "-950 rounded-xl p-3"}>
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className={"font-semibold text-" + color + "-800 dark:text-" + color + "-200 text-sm mb-0.5"}>{label}</p>
                  <p className={"text-" + color + "-700 dark:text-" + color + "-300 text-sm leading-relaxed"}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Dental anxiety and AI — making the dentist less dreadful</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Around one in four adults in the UK experiences significant dental anxiety. For roughly one in ten, it is severe enough to stop them attending at all — which leads to dental disease that could have been prevented or treated early.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'Virtual reality distraction',
                detail: 'Patients wear a VR headset during treatment and are immersed in a calming virtual environment — a beach, a forest, a gentle underwater scene. The visual and audio immersion reduces their awareness of what is happening in the chair. Several UK practices have reported significantly reduced anxiety scores and treatment completion rates for patients who previously could not tolerate procedures.',
              },
              {
                label: 'AI-guided breathing and relaxation',
                detail: "Apps using AI to guide patients through controlled breathing exercises before and during appointments can reduce physiological stress responses. Some systems monitor heart rate via a smartphone camera or wearable and adjust the breathing prompts based on the patient's actual state.",
              },
              {
                label: 'Chatbot aftercare',
                detail: 'Following treatment, AI chatbots can answer questions about recovery — what to eat, when to take painkillers, what level of discomfort is normal — reducing the anxiety that comes from uncertainty after a procedure and reducing unnecessary emergency calls.',
              },
            ].map(({ label, detail }) => (
              <div key={label} className="bg-green-50 dark:bg-green-950 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm">{label}</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">{detail}</p>
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
