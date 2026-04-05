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
  'AI tools like Pearl and Overjet analyse dental X-rays to detect cavities, bone loss, and early signs of oral cancer — often catching things that human eyes miss on a busy clinic day.',
  'Treatment planning software uses AI to sequence appointments, estimate costs, and generate personalised care plans, helping dentists manage complex cases more consistently.',
  'NHS 111 uses AI-assisted triage to direct patients to emergency versus routine dental care — particularly important during the ongoing dental access crisis in England.',
  'AI oral cancer screening tools are being piloted in UK dental schools and community clinics, aiming to catch the disease earlier when it is most treatable.',
  'For anxious patients, some UK practices are using virtual reality relaxation tools and AI-guided breathing exercises during treatment — not replacing the dentist, but making the experience less stressful.',
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
    question: 'What do AI dental X-ray analysis tools like Pearl and Overjet primarily do?',
    options: [
      'They replace the dentist entirely by diagnosing conditions and automatically generating a treatment plan that is sent directly to the patient\'s phone without any human review',
      'They analyse dental radiographs to highlight areas of potential concern — cavities, bone loss, or suspicious lesions — that the dentist then reviews and confirms',
      'They improve the quality of X-ray images by removing noise and adjusting brightness, making them clearer for the dentist to read manually',
      'They compare a patient\'s teeth against a database of aesthetically ideal smiles and generate a cosmetic treatment plan for whitening and alignment',
    ],
    correctIndex: 1,
    explanation:
      "AI dental X-ray tools work as a second set of eyes on radiographic images. The software has been trained on millions of annotated dental X-rays, so it has learned to recognise patterns associated with cavities at early stages, bone resorption, calculus (tartar), and other conditions. When a dentist takes an X-ray, the AI overlays colour-coded annotations on the image in seconds, highlighting areas of concern. The dentist then reviews these suggestions, confirms or dismisses them based on their clinical judgement, and incorporates the findings into their diagnosis. Studies have shown that AI-assisted review catches a significantly higher proportion of early cavities than unassisted review — partly because dentists are often working quickly with many patients, and a subtle early cavity can be easy to miss when looking at a complex image under time pressure.",
    hint: 'Think about AI as a decision-support tool that highlights areas for the dentist to check, rather than making decisions independently.',
  },
  {
    question: 'How is AI helping to address the dental access crisis in England?',
    options: [
      'AI systems are being used to train new NHS dentists more quickly, reducing the number of years required to qualify and increasing the total supply of dentists',
      'NHS 111 uses AI-assisted triage to assess dental symptoms described by callers and direct them to emergency dental treatment or routine NHS care appropriately',
      'AI scheduling systems automatically book patients into the nearest available NHS dental appointment without requiring them to phone a practice or wait on a waiting list',
      'AI is being used to negotiate new NHS dental contracts on behalf of practices, increasing the number of dentists who choose to work in the NHS rather than going private',
    ],
    correctIndex: 1,
    explanation:
      "England has a severe shortage of NHS dental provision. Many areas have no NHS dentists accepting new adult patients. When someone has a dental emergency — acute pain, a lost filling, a swollen face — they may struggle to find any NHS dentist willing to see them. NHS 111 handles large volumes of dental calls, and AI triage tools help call handlers assess symptom severity consistently. The AI analyses reported symptoms (pain level, presence of swelling, fever, difficulty swallowing) and generates a priority score that guides whether the patient needs same-day emergency treatment, can wait a few days, or simply needs over-the-counter pain relief advice. This helps direct limited emergency dental appointments to those in greatest clinical need, rather than simply those who called first or were most persistent.",
    hint: 'Think about the biggest practical problem in NHS dentistry right now — getting an appointment — and what AI can do to triage who needs urgent help.',
  },
  {
    question: 'What is the significance of AI oral cancer screening being piloted in dental settings?',
    options: [
      'Oral cancer screening has traditionally been done by specialist oncologists in hospital, so moving it to the dental practice using AI makes early detection much more accessible',
      'AI can cure early-stage oral cancer directly by targeting the affected cells with precision radiation during a regular dental appointment, without requiring a hospital referral',
      'Oral cancer screening has never before been possible without an MRI scan, and AI tools allow dental X-rays to substitute for MRI in low-risk patients',
      'Dental AI tools can detect oral cancer by analysing the bacteria present in a saliva sample — a test that previously required expensive laboratory equipment',
    ],
    correctIndex: 0,
    explanation:
      "Oral cancer — cancer of the mouth, tongue, lips, and throat — kills around 3,000 people per year in the UK. Survival rates are strongly linked to how early the cancer is caught: early-stage oral cancer has a roughly 90% five-year survival rate; late-stage has around 20%. Most people see their dentist more regularly than any other healthcare professional, making the dental appointment an ideal early detection opportunity. Historically, a suspicious lesion seen by a dentist required referral to a hospital oral medicine specialist for biopsy. AI tools being piloted in dental schools can analyse images of oral tissue and flag lesions with characteristics associated with malignancy, prioritising who needs urgent specialist referral. This could dramatically reduce diagnostic delays, which are currently a significant contributor to late-stage diagnoses.",
    hint: 'Think about where most people encounter healthcare regularly, and what that means for catching cancer early.',
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
      'AI chatbots prescribe anti-anxiety medication directly to patients before appointments, bypassing the need for a GP referral in cases where dental phobia is severe',
      'Virtual reality headsets and AI-guided breathing exercises are used in some practices during treatment, creating calming environments and helping patients manage anxiety in the moment',
      'AI analyses a patient\'s heart rate during treatment and automatically adjusts the speed of dental drills to minimise discomfort based on physiological stress signals',
      'AI replaces the dental drill entirely with a laser cutting system that is completely painless, removing the most common source of anxiety for most patients',
    ],
    correctIndex: 1,
    explanation:
      "Dental anxiety affects roughly one in four adults in the UK, and severe dental phobia stops many people from attending at all — contributing to worse oral health outcomes. Some forward-thinking practices are piloting technology to make the experience less distressing. Virtual reality headsets immerse anxious patients in calming scenes — a beach, a forest, an underwater world — distracting them from the sights and sounds of treatment. AI-guided breathing exercises delivered through an app can help patients regulate their nervous system response before and during appointments. Some systems use biofeedback — monitoring heart rate or skin conductance — and prompt the patient to breathe slowly when stress levels rise. These tools do not replace the dentist or the treatment, but they can make the experience manageable for people who might otherwise avoid dental care entirely, which has serious long-term health consequences.",
    hint: 'Think about what makes dental visits frightening, and what technology can do to address the sensory and emotional experience.',
  },
  {
    question: 'What is AI treatment planning software designed to help dentists do?',
    options: [
      'It replaces the clinical judgement of the dentist entirely, generating a legally binding treatment plan that the patient must accept without modification',
      'It analyses a patient\'s dental records, X-rays, and clinical findings to suggest a sequenced treatment plan — helping dentists manage complex cases consistently and communicate costs clearly',
      'It automatically submits NHS treatment claims and negotiates the treatment band (Band 1, 2, or 3) with NHS England to maximise the practice\'s income per patient',
      'It creates a 3D printed replica of the patient\'s teeth so the dentist can practice procedures on the model before performing them in the patient\'s mouth',
    ],
    correctIndex: 1,
    explanation:
      "Complex dental cases — a patient who needs fillings, extractions, crown work, and potentially implants — require careful sequencing. Doing things in the wrong order can cause problems: extracting a tooth before completing adjacent restorations, for example, can allow teeth to drift. AI treatment planning software analyses all available clinical information — X-rays, photographs, existing restorations, periodontal measurements, patient history — and generates a suggested treatment sequence with estimated timescales and costs. This helps dentists who may be managing hundreds of patients to maintain consistency, and it helps patients understand what they are facing financially and clinically. The dentist reviews and modifies the AI-suggested plan based on their clinical judgement and the patient's preferences. It is a planning tool, not an autonomous decision-maker.",
    hint: 'Think about a dentist managing a complex case with multiple treatments needed — what would help them plan and explain it clearly?',
  },
]

export function AIAndDentistry() {
  useMarkVisited('ai-and-dentistry')

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F9B7;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and dentistry
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            From AI that reads your X-rays to tools helping anxious patients — how artificial
            intelligence is changing the way we care for our teeth and gums.
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
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI oral cancer screening</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Oral cancer is one of the cancers where early detection makes the biggest difference to survival. Dentists are well-placed to spot it — but only if they have the tools to assess suspicious lesions accurately.
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
                detail: "Apps using AI to guide patients through controlled breathing exercises (a technique called diaphragmatic breathing) before and during appointments can reduce physiological stress responses. Some systems monitor heart rate via a smartphone camera or wearable and adjust the breathing prompts based on the patient's actual state.",
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
