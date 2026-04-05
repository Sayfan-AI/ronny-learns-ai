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
    question: 'What is the NHS AI Lab and what does it do?',
    options: [
      'It is a research hospital that treats patients using AI-only diagnosis',
      'It is a government body that funds, tests, and coordinates AI adoption across the NHS in England',
      'It is a commercial company that sells AI software to NHS trusts',
      'It is part of GCHQ and focuses on cybersecurity for NHS data systems',
    ],
    correctIndex: 1,
    explanation:
      'The NHS AI Lab, run by NHS England and NHSX (now merged into NHS England), was set up to accelerate safe and ethical adoption of AI across the health service. It funds trials of AI diagnostic tools, works with regulators on approval pathways, and publishes guidance for NHS trusts evaluating AI products. The AI and Digital Regulations Service (ADRS) works alongside it to help staff understand what regulatory requirements apply to AI tools they are considering buying or building.',
  },
  {
    question: 'What did the Moorfields Eye Hospital / DeepMind partnership achieve?',
    options: [
      'It created an AI system that replaces ophthalmologists in routine appointments',
      'It developed an AI that can detect over 50 eye conditions from retinal scans with specialist-level accuracy',
      'It built a system that books eye appointment slots automatically based on GP referrals',
      'It created an AI that monitors patients remotely and alerts staff when vision deteriorates',
    ],
    correctIndex: 1,
    explanation:
      "Moorfields Eye Hospital partnered with DeepMind to develop an AI that analyses optical coherence tomography (OCT) retinal scans. The AI can detect more than 50 eye conditions — including diabetic retinopathy, age-related macular degeneration, and glaucoma — with accuracy matching world-leading specialists. It also recommends the urgency of referral. The work was published in Nature Medicine in 2018 and is being rolled out more widely in NHS eye clinics.",
  },
  {
    question: 'What was the controversy around Babylon Health and GP at Hand?',
    options: [
      'Babylon was found to have fabricated its AI accuracy statistics in clinical trials',
      'GP at Hand selectively attracted younger, healthier patients, potentially underfunding traditional GP surgeries serving older populations',
      'Babylon was hacked and patient data was leaked to a foreign government',
      'GP at Hand was shut down after its AI chatbot gave dangerous medical advice',
    ],
    correctIndex: 1,
    explanation:
      "Babylon Health's GP at Hand app, which offered AI symptom checking and video GP consultations, attracted a disproportionately young, healthy, and urban patient population. Critics argued this 'cream-skimming' risked destabilising traditional GP practices, which receive NHS funding partly based on patient numbers and face higher costs serving older, more complex patients. The controversy raised wider questions about whether digital-first healthcare services cherry-pick profitable patients and leave conventional GPs with underfunded, more demanding lists.",
  },
  {
    question: 'What was the GPDPR controversy about in 2021?',
    options: [
      'GPDPR was an NHS AI system that was found to make racially biased diagnostic recommendations',
      'NHS England planned to extract and share GP patient data with researchers without patients being able to easily opt out in time',
      'GPDPR was a Babylon Health product that was found to be collecting patient data without NHS permission',
      'The government proposed using GP data to train a commercial AI model that would be sold internationally',
    ],
    correctIndex: 1,
    explanation:
      "The General Practice Data for Planning and Research (GPDPR) programme proposed extracting pseudonymised GP records for NHS data analysts and approved researchers. A campaign by privacy groups argued that the opt-out process was not sufficiently publicised and that the definition of 'approved researcher' was too broad. The programme was delayed twice after public backlash, with NHS England eventually committing to a new public communications campaign and a clearer opt-out process before data collection began.",
  },
  {
    question: 'What are the main barriers to AI adoption in the NHS?',
    options: [
      'NHS staff are opposed to AI on ethical grounds and refuse to use AI diagnostic tools',
      'Procurement rules, legacy IT systems, integration challenges, and workforce training requirements all slow NHS AI adoption',
      'AI tools for the NHS are too expensive for any NHS trust to afford without government grants',
      'UK data protection law prohibits the use of patient data to train AI models',
    ],
    correctIndex: 2,
    explanation:
      "Multiple reviews, including the Topol Review, have identified several barriers: NHS procurement processes are slow and risk-averse; legacy IT systems in many trusts cannot easily integrate new AI tools; clinical staff need training to understand and trust AI outputs; and the regulatory pathway for approving AI as a medical device (via the MHRA) takes time. The result is that even AI tools with strong clinical evidence often take years to move from trial to routine NHS use.",
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
            The NHS AI Lab, diagnostic AI, deployment challenges, patient data controversies,
            and what Babylon Health&apos;s GP at Hand revealed about AI in primary care.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-the-nhs" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The NHS AI Lab and AI and Digital Regulations Service</h2>
          <p className="text-gray-600 leading-relaxed">
            The NHS AI Lab was set up to accelerate safe and ethical adoption of AI across
            the NHS in England. It funds clinical trials of AI tools, develops guidance for
            NHS trusts, and works with regulators to create clearer approval pathways.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 space-y-3">
            <div>
              <p className="font-semibold text-blue-800 text-sm">AI and Digital Regulations Service (ADRS)</p>
              <p className="text-blue-700 text-sm leading-relaxed mt-1">
                The ADRS helps NHS staff navigate the regulatory landscape when evaluating AI products.
                In the UK, AI that qualifies as a medical device must be approved by the Medicines and
                Healthcare products Regulatory Agency (MHRA). The ADRS helps trusts understand which
                category an AI tool falls into, what evidence is required, and what post-market
                surveillance is needed once it is deployed.
              </p>
            </div>
            <div>
              <p className="font-semibold text-blue-800 text-sm">Where AI is being used in the NHS right now</p>
              <ul className="text-blue-700 text-sm leading-relaxed space-y-1 list-disc list-inside mt-1">
                <li>Reading retinal scans, mammograms, and chest X-rays</li>
                <li>Triaging patients through the 111 online symptom checker</li>
                <li>Clinical coding and drafting discharge letters</li>
                <li>Predicting which patients are at highest risk of deterioration</li>
                <li>Skin cancer detection in dermatology outpatient clinics</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Diagnostic AI: Moorfields and DeepMind</h2>
          <p className="text-gray-600 leading-relaxed">
            One of the most cited examples of AI in the NHS is the partnership between
            Moorfields Eye Hospital and DeepMind, published in <em>Nature Medicine</em> in 2018.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F441;&#xFE0F;',
                label: 'What the AI does',
                text: 'The AI analyses optical coherence tomography (OCT) retinal scans and can detect more than 50 eye conditions — including diabetic retinopathy, age-related macular degeneration, and glaucoma — with accuracy matching world-leading specialists. It also recommends urgency of referral.',
              },
              {
                icon: '&#x1FA7B;',
                label: 'Chest X-ray AI',
                text: 'AI tools are being trialled in NHS chest X-ray reporting to detect signs of pneumonia, tuberculosis, and lung cancer. In busy radiology departments, AI can prioritise which scans need urgent attention, helping the most seriously ill patients be seen faster.',
              },
              {
                icon: '&#x1F9EC;',
                label: 'Skin cancer AI',
                text: "Studies have shown AI can detect malignant melanoma from photographs of skin lesions with accuracy comparable to dermatologists. NHS dermatology services are piloting AI triage tools to help GPs decide which lesions need urgent specialist review.",
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
          <h2 className="text-2xl font-bold text-gray-800">Babylon Health and the GP at Hand controversy</h2>
          <p className="text-gray-600 leading-relaxed">
            Babylon Health&apos;s GP at Hand app launched in London in 2017, offering AI-powered
            symptom checking and same-day video GP consultations. It attracted hundreds of
            thousands of users &mdash; but also significant controversy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: '&#x2714;&#xFE0F;',
                title: 'What worked',
                text: 'Patients loved the convenience: appointments available within hours, from your phone, at any time. For younger, mobile patients with straightforward needs, it was genuinely transformative.',
              },
              {
                icon: '&#x26A0;&#xFE0F;',
                title: 'The cream-skimming concern',
                text: "GP at Hand disproportionately attracted young, healthy, urban patients — the cheapest to treat. Traditional GP practices, funded partly by patient numbers, faced losing income while serving older, more complex patients with greater needs.",
              },
              {
                icon: '&#x1F4CA;',
                title: 'Accuracy claims disputed',
                text: "Babylon's claims about its AI outperforming GPs were disputed by NHS clinicians and researchers, who argued the benchmarking methodology was flawed and the comparisons misleading.",
              },
              {
                icon: '&#x1F3E2;',
                title: 'Wider lesson',
                text: "The GP at Hand case illustrated how digital health services can disrupt funding models designed for a different world. Regulators have since worked on updated frameworks to prevent cherry-picking of low-cost patients.",
              },
            ].map(({ icon, title, text }) => (
              <div key={title} className="bg-orange-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl" dangerouslySetInnerHTML={{ __html: icon }} />
                  <p className="font-semibold text-orange-800 text-sm">{title}</p>
                </div>
                <p className="text-orange-700 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Patient data: GPDPR and the Royal Free case</h2>
          <p className="text-gray-600 leading-relaxed">
            AI systems need large amounts of data to learn &mdash; and healthcare data is among
            the most sensitive that exists. The NHS has faced two high-profile controversies
            about how patient data is handled in AI partnerships.
          </p>
          <div className="space-y-4">
            <div className="bg-amber-50 rounded-xl p-4">
              <p className="font-semibold text-amber-800 text-sm mb-1">Royal Free Hospital / DeepMind (2016)</p>
              <p className="text-amber-700 text-sm leading-relaxed">
                Royal Free NHS Trust shared data on 1.6 million patients with DeepMind to develop an
                app called Streams for detecting acute kidney injury. The ICO (data watchdog) found
                the arrangement breached data protection law: patients had not been properly informed
                and there was no clear lawful basis for sharing identifiable data. The case prompted
                new rules around NHS data deals with commercial companies.
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl p-4">
              <p className="font-semibold text-amber-800 text-sm mb-1">GPDPR (2021)</p>
              <p className="text-amber-700 text-sm leading-relaxed">
                The General Practice Data for Planning and Research (GPDPR) programme proposed
                extracting pseudonymised GP records for approved researchers. Privacy campaigners
                argued the opt-out process was not well publicised and the definition of &quot;approved
                researcher&quot; was too broad. The programme was delayed twice after public backlash.
                NHS England eventually committed to improved public communications and a clearer
                opt-out process before data collection began.
              </p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-slate-800 text-sm">Your rights</p>
            <p className="text-slate-700 text-sm leading-relaxed">
              You can opt out of your NHS data being used for research (Type 1 opt-out for GP data;
              National Data Opt-out for NHS data more broadly). Your data cannot be used to make
              decisions about your individual care without your knowledge.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Barriers to AI adoption in the NHS</h2>
          <p className="text-gray-600 leading-relaxed">
            Despite strong evidence for some AI tools, adoption across the NHS has been slower
            than in some other health systems. The Topol Review and subsequent NHS reports
            have identified several recurring barriers.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F6D2;',
                label: 'Procurement',
                text: "NHS procurement processes are slow and risk-averse. An AI tool that has strong clinical evidence can still take years to navigate contracting, information governance, and legal review before it reaches patients.",
              },
              {
                icon: '&#x1F9F1;',
                label: 'Legacy IT',
                text: "Many NHS trusts run on IT infrastructure that is decades old. Integrating a modern AI tool with a system running on outdated software, different data standards, and fragmented records is technically complex and expensive.",
              },
              {
                icon: '&#x1F9D1;&#x200D;&#x2695;&#xFE0F;',
                label: 'Workforce training',
                text: "Clinicians need training to understand what an AI tool can and cannot do, how to interpret its outputs, and when to override it. Without this, there is a risk of both over-reliance and under-use.",
              },
              {
                icon: '&#x2696;&#xFE0F;',
                label: 'Regulatory pathway',
                text: "AI that qualifies as a medical device must be approved by the MHRA. The pathway is clearer than it was, but still takes time — and AI models that are updated or retrained may need re-approval.",
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
          <h2 className="text-xl font-bold text-blue-800">The future of AI in the NHS</h2>
          <p className="text-blue-700 text-sm leading-relaxed">
            The NHS has enormous potential to benefit from AI &mdash; its population-scale datasets,
            if used responsibly, could train diagnostic tools that save lives. But the path from
            promising research to routine clinical use is long, and the controversies around data
            privacy and commercial partnerships have made patients and clinicians rightly cautious.
          </p>
          <p className="text-blue-700 text-sm leading-relaxed">
            For now, NHS policy is clear: AI supports clinicians rather than replacing them. AI flags
            findings for a human to review; it does not make final clinical decisions alone. Whether
            that remains the case as AI capabilities improve is one of the most important questions
            facing UK healthcare.
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
