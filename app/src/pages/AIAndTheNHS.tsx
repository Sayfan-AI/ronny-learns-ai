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
import { DifficultyBadge } from '../components/DifficultyBadge'

const LESSON_TITLE = 'AI and the NHS'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What was set up by the NHS in 2019 to coordinate the development and deployment of AI across the health service?',
    options: [
      'The NHS Digital Authority',
      'The NHS AI Lab',
      'The Centre for Health Innovation',
      'The NICE AI Review Board',
    ],
    correctIndex: 1,
    explanation:
      "The NHS AI Lab was established in 2019 to fund research, run clinical evaluations, and bring together NHS trusts, technology companies, and regulators. It also developed the AI and Digital Regulations Service, which helps NHS trusts evaluate AI tools before buying them — checking for robust evidence, proper training data, and regulatory approval.",
  },
  {
    question: 'What was the main concern about the 2016 Royal Free Hospital / DeepMind data-sharing arrangement?',
    options: [
      'That DeepMind replaced Royal Free doctors with AI, putting clinical staff out of work',
      "That 1.6 million NHS patients' data was shared with DeepMind without proper consent or a lawful basis",
      'That the AI app made clinical errors that harmed patients',
      'That the Royal Free Hospital charged patients extra for AI-assisted care',
    ],
    correctIndex: 1,
    explanation:
      "In 2016, the Royal Free NHS Trust shared data on about 1.6 million patients with DeepMind to help develop an app for detecting acute kidney injury. The UK's data watchdog (the ICO) later found this breached data protection law because patients had not been properly informed and there was no clear lawful basis for sharing identifiable patient data. The case prompted new rules around NHS data deals with commercial companies.",
  },
  {
    question: 'What controversy surrounded Babylon Health\'s GP at Hand service?',
    options: [
      'Its AI symptom checker was found to be hacking patient records',
      'It attracted healthier, younger patients away from traditional GP practices, leaving sicker patients behind and threatening GP funding',
      'It refused to serve patients over 65, which was ruled discriminatory',
      'Its app was only available on Apple devices, excluding Android users',
    ],
    correctIndex: 1,
    explanation:
      "GP at Hand was popular with urban, working-age patients who could get appointments quickly via their smartphone. But critics argued it attracted the healthiest patients — leaving traditional GP surgeries with a sicker, more complex patient population but reduced income (which is partly based on patient headcount). The episode illustrated how AI-powered health services can improve convenience while creating new inequalities.",
  },
  {
    question: 'What is AI-assisted diabetic retinopathy screening designed to detect?',
    options: [
      'High blood sugar levels in a blood sample',
      'Early signs of eye disease by analysing photographs of the back of the eye',
      "Whether a patient's glasses prescription needs updating",
      'Symptoms of Type 2 diabetes before they appear in blood tests',
    ],
    correctIndex: 1,
    explanation:
      "Diabetic retinopathy is damage to the blood vessels in the retina caused by high blood sugar — one of the leading causes of blindness in working-age adults in the UK. Moorfields Eye Hospital partnered with DeepMind to develop an AI that analyses retinal scans and can detect early signs of the condition as accurately as a specialist. Early detection means treatment can start before sight is lost.",
  },
  {
    question: 'Which of these is a genuine barrier slowing down AI adoption in the NHS?',
    options: [
      'NHS doctors are legally prohibited from using AI diagnostic tools',
      'AI tools are too expensive for the NHS to afford in any capacity',
      'Legacy IT systems cannot easily exchange data with modern AI tools, making integration difficult and costly',
      'The UK government has banned AI in healthcare until 2030 for safety reasons',
    ],
    correctIndex: 2,
    explanation:
      "Much of the NHS still runs on outdated IT systems from the 1990s and early 2000s. Connecting a modern AI diagnostic tool to these legacy systems is often a complex, expensive engineering project. This — combined with procurement complexity, workforce training gaps, and unresolved liability questions — means many promising AI tools take years to move from successful trial to widespread deployment.",
  },
]

export function AIAndTheNHS() {
  useMarkVisited('ai-and-the-nhs')

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3E5;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and the NHS
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How artificial intelligence is helping the UK&apos;s health service diagnose
            diseases earlier, reduce waiting times, and give staff more time with patients.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-the-nhs" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">NHS AI Lab and the AI and Digital Regulations Service</h2>
          <p className="text-gray-600 leading-relaxed">
            In 2019, the NHS set up the <strong>NHS AI Lab</strong> to coordinate the development and
            deployment of AI across the health service. It funds research, runs clinical evaluations,
            and brings together NHS trusts, tech companies, and regulators.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-blue-800 text-sm">The AI and Digital Regulations Service</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              The NHS has also developed the <strong>AI and Digital Regulations Service</strong> to
              help NHS trusts evaluate AI tools before they buy them. It provides evidence summaries
              about whether a tool has been properly tested, whether the data it was trained on
              represents the NHS patient population, and whether it has regulatory approval.
              This matters because many AI tools are marketed to the NHS without robust evidence
              that they actually work in practice.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The NHS and the pressure to change</h2>
          <p className="text-gray-600 leading-relaxed">
            The NHS is one of the largest employers in the world, treating millions of people every year.
            But it faces enormous pressures: an ageing population, rising demand, long waiting lists,
            and stretched clinical staff. AI is being tested as a way to help &mdash; not to replace
            doctors and nurses, but to spot things earlier, handle admin, and make better use of
            limited resources.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-blue-800 text-sm">Where AI is being used in the NHS right now</p>
            <ul className="text-blue-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>Reading medical scans (X-rays, MRIs, retinal photos)</li>
              <li>Triaging patients through the 111 symptom checker</li>
              <li>Coding diagnoses and drafting clinical letters</li>
              <li>Predicting which patients are most likely to need urgent care</li>
              <li>Drug discovery research (AlphaFold)</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI diagnostics: seeing what humans might miss</h2>
          <p className="text-gray-600 leading-relaxed">
            One of the most promising uses of AI in healthcare is reading medical images &mdash; scans,
            X-rays, and photographs of the eye. The AI is trained on millions of labelled images
            and can spot patterns that indicate disease.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F441;&#xFE0F;',
                label: 'Diabetic retinopathy screening',
                text: "Moorfields Eye Hospital partnered with DeepMind to develop an AI that reads retinal scans and detects early signs of diabetic retinopathy (damage to blood vessels in the eye). It matches the accuracy of a specialist. Early detection means treatment can begin before sight is lost. This is now being rolled out more widely in NHS eye clinics.",
              },
              {
                icon: '&#x1FA7B;',
                label: 'Cancer detection',
                text: 'AI tools are being trialled in NHS breast cancer screening programmes, analysing mammograms to flag suspicious areas for a radiologist to review. Studies suggest AI can reduce the number of cancers missed and the time radiologists spend reviewing routine, clearly normal scans.',
              },
              {
                icon: '&#x1F9EA;',
                label: 'Chest X-rays',
                text: 'Tools like those from Qure.ai analyse chest X-rays for signs of pneumonia, TB, and other conditions. In busy A&E departments, AI can prioritise which scans need urgent attention, helping the most seriously ill patients be seen faster.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AlphaFold: the drug discovery revolution</h2>
          <p className="text-gray-600 leading-relaxed">
            In 2020, DeepMind&apos;s AlphaFold solved one of biology&apos;s greatest challenges &mdash;
            a problem scientists had worked on for fifty years.
          </p>
          <div className="bg-emerald-50 rounded-xl p-4 space-y-3">
            <div>
              <p className="font-semibold text-emerald-800 text-sm">The protein folding problem</p>
              <p className="text-emerald-700 text-sm leading-relaxed mt-1">
                Proteins are the molecules that do almost everything in your body &mdash; they are enzymes,
                antibodies, structural components, and signal carriers. A protein&apos;s function is
                determined by its three-dimensional shape. But working out that shape from the protein&apos;s
                chemical recipe (its amino acid sequence) was extraordinarily difficult. It could take
                years of laboratory experiments to solve the structure of a single protein.
              </p>
            </div>
            <div>
              <p className="font-semibold text-emerald-800 text-sm">What AlphaFold changed</p>
              <p className="text-emerald-700 text-sm leading-relaxed mt-1">
                AlphaFold can predict the shape of a protein from its sequence in minutes, with accuracy
                close to laboratory methods. DeepMind released the structures of 200 million proteins &mdash;
                essentially every protein known to science &mdash; for free. This has dramatically
                accelerated research into diseases like Parkinson&apos;s, cancer, and antibiotic resistance,
                and is helping scientists design new drugs faster and at lower cost.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">NHS 111 and AI triage</h2>
          <p className="text-gray-600 leading-relaxed">
            The 111 online symptom checker uses AI to help people work out how urgently they need care.
            You enter your symptoms and answer follow-up questions; the system recommends whether to
            call 999, go to A&amp;E, contact a GP, visit a pharmacy, or manage things at home.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm">
            This kind of AI triage reduces unnecessary A&amp;E visits and helps people get the right level
            of care more quickly. Hospitals also use predictive AI to forecast how many patients are
            likely to arrive on any given day, helping managers plan staffing levels.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Babylon Health and the GP at Hand controversy</h2>
          <p className="text-gray-600 leading-relaxed">
            Babylon Health, a UK health tech company, launched <strong>GP at Hand</strong> in 2017
            &mdash; a service allowing NHS patients in London to register with a GP via a smartphone
            app and get appointments within hours, day or night.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4F1;',
                label: 'The appeal',
                text: "GP at Hand used an AI symptom checker to triage patients and book video or in-person appointments quickly. For many urban, working-age people it was dramatically faster and more convenient than a traditional GP surgery.",
              },
              {
                icon: '&#x26A0;&#xFE0F;',
                label: 'The controversy',
                text: 'Critics argued that GP at Hand attracted healthier, younger, wealthier patients — leaving traditional GP practices with a sicker, more complex patient population but a smaller NHS income (which is partly based on patient numbers). GPs warned it was skimming off easy patients and destabilising local healthcare.',
              },
              {
                icon: '&#x1F9EA;',
                label: "Babylon's AI accuracy claims",
                text: "Babylon claimed its AI symptom checker matched doctors at a medical licensing exam, prompting a high-profile public dispute with doctors who argued the test conditions were misleading and real-world performance was far lower. The dispute raised broader questions about how AI health tools are tested and marketed.",
              },
              {
                icon: '&#x1F4C4;',
                label: 'What happened next',
                text: 'Babylon Health faced financial difficulties and restructured significantly in 2023. GP at Hand continues as a service but the episode remains a case study in how disruptive health AI can create new inequalities even when it improves convenience.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Patient data and privacy</h2>
          <p className="text-gray-600 leading-relaxed">
            AI systems need data to learn &mdash; and healthcare data is among the most sensitive
            that exists. The NHS holds medical records for almost everyone in England.
            This is enormously valuable for research, but raises serious privacy questions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: '&#x26A0;&#xFE0F;',
                title: 'The Royal Free / DeepMind case',
                text: 'In 2016, Royal Free NHS Trust shared data on 1.6 million patients with DeepMind without properly informing patients or establishing a lawful basis. The ICO (data watchdog) found this breached data protection law. The case prompted new rules around NHS data deals with commercial companies.',
              },
              {
                icon: '&#x1F512;',
                title: 'Your rights',
                text: 'You can opt out of your NHS data being used for research or planning (Type 1 opt-out for GP data; National Data Opt-out for NHS data more broadly). Your data cannot be used to make decisions about your care without your knowledge.',
              },
              {
                icon: '&#x1F91D;',
                title: 'The benefit side',
                text: 'NHS data, used responsibly, has real public benefit. It helped speed up COVID-19 vaccine research, identify which treatments were working, and monitor disease trends. The question is not whether to use data, but how to do it safely and fairly.',
              },
              {
                icon: '&#x2696;&#xFE0F;',
                title: 'The balance',
                text: 'Researchers and patient groups broadly support using anonymised NHS data for research, with proper oversight. The challenge is ensuring commercial companies do not profit disproportionately from public data while the NHS bears all the risk.',
              },
            ].map(({ icon, title, text }) => (
              <div key={title} className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl" dangerouslySetInnerHTML={{ __html: icon }} />
                  <p className="font-semibold text-gray-800 text-sm">{title}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Helping NHS staff — less paperwork, more patients</h2>
          <p className="text-gray-600 leading-relaxed">
            Clinical staff in the NHS spend a large part of their day on administrative tasks.
            AI tools are beginning to take some of that burden away.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CB;',
                label: 'Clinical coding',
                text: 'Every hospital visit must be coded with standardised diagnosis and procedure codes for NHS billing and statistics. AI tools can read clinical notes and suggest the correct codes automatically, a task that currently requires trained clinical coders and takes significant time.',
              },
              {
                icon: '&#x270D;&#xFE0F;',
                label: 'Letter drafting',
                text: 'Doctors write hundreds of letters: referrals to specialists, discharge summaries, letters to GPs. AI tools can transcribe a consultation and draft a letter for the doctor to review and approve, cutting the time spent on dictation and typing.',
              },
              {
                icon: '&#x1F4C5;',
                label: 'Appointment management',
                text: 'Predictive AI can identify patients who are likely to miss appointments (based on factors like distance, time of day, and past behaviour) so that the NHS can send targeted reminders or rebook proactively, reducing the costly problem of DNA (did not attend).',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Barriers to AI adoption in the NHS</h2>
          <p className="text-gray-600 leading-relaxed">
            Despite the promise, AI is spreading slowly through the NHS. Several real obstacles
            stand in the way.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4B8;',
                label: 'Procurement complexity',
                text: "NHS trusts are independent organisations that buy technology separately. There is no single national procurement route for AI tools, meaning the same AI product might go through a different approval process at every trust. This is slow, expensive, and creates a patchwork of different tools across the country.",
              },
              {
                icon: '&#x1F9E9;',
                label: 'Integration with legacy systems',
                text: "Much of the NHS runs on outdated IT systems, many of which cannot easily exchange data with modern AI tools. Connecting a cutting-edge diagnostic AI to a hospital running on a 1990s patient records system is often an expensive and difficult technical project.",
              },
              {
                icon: '&#x1F468;&#x200D;&#x2695;&#xFE0F;',
                label: 'Workforce confidence and training',
                text: "Clinicians need to trust AI tools before they will rely on them. This requires training, evidence of performance in real NHS settings, and clear guidance on when to override an AI recommendation. Many AI tools are deployed without adequate support for the staff using them.",
              },
              {
                icon: '&#x2696;&#xFE0F;',
                label: 'Regulation and liability',
                text: "Who is responsible if an AI system makes an error that harms a patient — the hospital, the AI developer, or the clinician who trusted it? UK regulation is still developing clear answers to these questions, creating uncertainty that slows adoption.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-6 space-y-3 border border-blue-100">
          <h2 className="text-xl font-bold text-blue-800">What it means for you as a patient</h2>
          <p className="text-blue-700 text-sm leading-relaxed">
            AI in the NHS should mean faster diagnoses, earlier detection of disease, and more time
            from clinical staff who are freed from paperwork. But there are real concerns too: if an
            AI misses a cancer or incorrectly prioritises a patient, who is responsible? The NHS,
            the AI company, or the doctor who trusted the system?
          </p>
          <p className="text-blue-700 text-sm leading-relaxed">
            For now, NHS policy is that AI supports clinicians &mdash; it flags things for a human
            to review, rather than making final clinical decisions on its own. That is likely to
            remain the case for years to come.
          </p>
        </div>

        <ReviewLaterButton lessonId="ai-and-the-nhs" />
        <LessonNote lessonId="ai-and-the-nhs" lessonTitle={LESSON_TITLE} />

        <Quiz questions={quizQuestions} lessonId="ai-and-the-nhs" lessonTitle={LESSON_TITLE} />

        <LessonFeedback lessonId="ai-and-the-nhs" />
        <LessonRating lessonId="ai-and-the-nhs" />
        <RelatedLessons currentId="ai-and-the-nhs" />
        <NextLesson currentId="ai-and-the-nhs" />
      </div>
    </div>
  )
}
