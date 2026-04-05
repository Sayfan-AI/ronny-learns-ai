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
  'AI tools like Pearl and Overjet analyse dental X-rays to detect cavities, bone loss, and early signs of oral cancer — often catching things that human eyes miss on a busy clinic day.',
  'Treatment planning software uses AI to sequence appointments, estimate costs, and generate personalised care plans, helping dentists manage complex cases more consistently.',
  'NHS 111 uses AI-assisted triage to direct patients to emergency versus routine dental care — particularly important during the ongoing dental access crisis in England.',
  'AI oral cancer screening tools are being piloted in UK dental schools and community clinics, aiming to catch the disease earlier when it is most treatable.',
  'For anxious patients, some UK practices are using virtual reality relaxation tools and AI-guided breathing exercises during treatment — not replacing the dentist, but making the experience less stressful.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What do AI dental X-ray analysis tools like Pearl and Overjet primarily do?',
    options: [
      'They replace the dentist entirely by diagnosing conditions and automatically generating a treatment plan sent directly to the patient',
      'They analyse dental radiographs to highlight areas of potential concern — cavities, bone loss, or suspicious lesions — that the dentist then reviews and confirms',
      'They improve the quality of X-ray images by removing noise and adjusting brightness, making them clearer for the dentist to read manually',
      'They compare a patient\'s teeth against a database of aesthetically ideal smiles and generate a cosmetic treatment plan',
    ],
    correctIndex: 1,
    explanation:
      "AI dental X-ray tools work as a second set of eyes on radiographic images. The software has been trained on millions of annotated dental X-rays, so it has learned to recognise patterns associated with cavities at early stages, bone resorption, calculus, and other conditions. When a dentist takes an X-ray, the AI overlays colour-coded annotations on the image in seconds, highlighting areas of concern. The dentist then reviews these suggestions and decides whether to treat. Studies have shown that AI-assisted review catches a significantly higher proportion of early cavities than unassisted review.",
    hint: 'Think about AI as a decision-support tool that highlights areas for the dentist to check, rather than making decisions independently.',
  },
  {
    question: 'How is AI helping to address the dental access crisis in England?',
    options: [
      'AI systems are being used to train new NHS dentists more quickly, reducing the number of years required to qualify',
      'NHS 111 uses AI-assisted triage to assess dental symptoms described by callers and direct them to emergency dental treatment or routine NHS care appropriately',
      'AI scheduling systems automatically book patients into the nearest available NHS dental appointment without requiring them to phone a practice',
      'AI is being used to negotiate new NHS dental contracts on behalf of practices, increasing the number of dentists who choose to work in the NHS',
    ],
    correctIndex: 1,
    explanation:
      "England has a severe shortage of NHS dental provision. Many areas have no NHS dentists accepting new adult patients. When someone has a dental emergency, they often turn to NHS 111. AI triage tools help call handlers assess symptom severity consistently. The AI analyses reported symptoms (pain level, presence of swelling, fever, difficulty swallowing) and generates a priority score guiding whether the patient needs same-day emergency treatment, can wait a few days, or simply needs over-the-counter pain relief advice. This helps direct limited emergency dental appointments to those in greatest clinical need.",
    hint: 'Think about the biggest practical problem in NHS dentistry right now — getting an appointment — and what AI can do to triage who needs urgent help.',
  },
  {
    question: 'What is the significance of AI oral cancer screening being piloted in dental settings?',
    options: [
      'Oral cancer screening has traditionally been done by specialist oncologists in hospital, so moving it to the dental practice using AI makes early detection much more accessible',
      'AI can cure early-stage oral cancer directly by targeting the affected cells with precision radiation during a regular dental appointment',
      'Oral cancer screening has never before been possible without an MRI scan, and AI tools allow dental X-rays to substitute for MRI in low-risk patients',
      'Dental AI tools can detect oral cancer by analysing the bacteria present in a saliva sample',
    ],
    correctIndex: 0,
    explanation:
      "Oral cancer kills around 3,000 people per year in the UK. Survival rates are strongly linked to how early the cancer is caught: early-stage oral cancer has a roughly 90% five-year survival rate; late-stage has around 20%. Most people see their dentist more regularly than any other healthcare professional, making the dental appointment an ideal early detection opportunity. AI tools being piloted in dental schools can analyse images of oral tissue and flag lesions with characteristics associated with malignancy, prioritising who needs urgent specialist referral.",
    hint: 'Think about where most people encounter healthcare regularly, and what that means for catching cancer early.',
  },
  {
    question: 'How is AI being used to help patients with dental anxiety?',
    options: [
      'AI chatbots prescribe anti-anxiety medication directly to patients before appointments, bypassing the need for a GP referral',
      'Virtual reality headsets and AI-guided breathing exercises are used in some practices during treatment, creating calming environments and helping patients manage anxiety in the moment',
      'AI analyses a patient\'s heart rate during treatment and automatically adjusts the speed of dental drills to minimise discomfort',
      'AI replaces the dental drill entirely with a laser cutting system that is completely painless',
    ],
    correctIndex: 1,
    explanation:
      "Dental anxiety affects roughly one in four adults in the UK, and severe dental phobia stops many people from attending at all. Some forward-thinking practices are piloting technology to make the experience less distressing. Virtual reality headsets immerse anxious patients in calming scenes — a beach, a forest, an underwater world — distracting them from the sights and sounds of treatment. AI-guided breathing exercises delivered through an app can help patients regulate their nervous system response before and during appointments. These tools do not replace the dentist or the treatment, but they can make the experience manageable for people who might otherwise avoid dental care entirely.",
    hint: 'Think about what makes dental visits frightening, and what technology can do to address the sensory and emotional experience.',
  },
  {
    question: 'What is AI treatment planning software designed to help dentists do?',
    options: [
      'It replaces the clinical judgement of the dentist entirely, generating a legally binding treatment plan that the patient must accept without modification',
      'It analyses a patient\'s dental records, X-rays, and clinical findings to suggest a sequenced treatment plan — helping dentists manage complex cases consistently and communicate costs clearly',
      'It automatically submits NHS treatment claims and negotiates the treatment band with NHS England to maximise the practice\'s income per patient',
      'It creates a 3D printed replica of the patient\'s teeth so the dentist can practice procedures on the model before performing them',
    ],
    correctIndex: 1,
    explanation:
      "Complex dental cases — a patient who needs fillings, extractions, crown work, and potentially implants — require careful sequencing. AI treatment planning software analyses all available clinical information and generates a suggested treatment sequence with estimated timescales and costs. This helps dentists who may be managing hundreds of patients to maintain consistency, and helps patients understand what they are facing financially and clinically. The dentist reviews and modifies the AI-suggested plan based on their clinical judgement and the patient's preferences.",
    hint: 'Think about a dentist managing a complex case with multiple treatments needed — what would help them plan and explain it clearly?',
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
            Dental practices generate enormous amounts of visual data — X-rays, photographs, scans — and AI is very good at analysing images. The result is a growing set of tools that help dentists see more, plan better, and reach patients who struggle to access care.
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
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Clinical studies have found AI-assisted review catches significantly more early cavities than unaided review. An early cavity — one that has not yet reached the nerve — can often be treated with a small filling or remineralisation. Missed until it is larger, it may need a crown or root canal treatment.</p>
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
              'Without triage AI, the allocation of scarce emergency dental slots would depend on how assertively the patient pushed — which disadvantages vulnerable people',
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
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Dental anxiety and AI — making the dentist less dreadful</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Around one in four adults in the UK experiences significant dental anxiety. For roughly one in ten, it is severe enough to stop them attending at all.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'Virtual reality distraction',
                detail: 'Patients wear a VR headset during treatment and are immersed in a calming virtual environment — a beach, a forest, a gentle underwater scene. The visual and audio immersion reduces their awareness of what is happening in the chair.',
              },
              {
                label: 'AI-guided breathing and relaxation',
                detail: "Apps using AI guide patients through controlled breathing exercises before and during appointments. Some systems monitor heart rate via a smartphone camera or wearable and adjust the breathing prompts based on the patient's actual stress level.",
              },
              {
                label: 'Chatbot aftercare',
                detail: 'Following treatment, AI chatbots can answer questions about recovery — what to eat, when to take painkillers, what level of discomfort is normal — reducing the anxiety that comes from uncertainty after a procedure.',
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
