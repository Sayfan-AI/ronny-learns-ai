import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { LessonFeedback } from '../components/LessonFeedback'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { ShareButton } from '../components/ShareButton'
import { DifficultyBadge } from '../components/DifficultyBadge'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is one way AI is being used in medical imaging today?',
    options: [
      'AI performs surgery independently without surgeon supervision',
      'AI analyses X-rays and scans to help doctors spot potential problems they might miss',
      'AI prescribes medication directly to patients',
      'AI replaces radiologists entirely in most hospitals',
    ],
    correctIndex: 1,
    explanation:
      'AI systems trained on millions of medical images can flag potential issues in X-rays, CT scans, and MRIs — helping doctors catch things that might be easy to miss in a busy day. The AI acts as a second pair of eyes, not a replacement for the doctor.',
  },
  {
    question: 'How does AI speed up drug discovery?',
    options: [
      'AI manufactures the drugs directly in automated factories',
      'AI can test millions of potential drug compounds virtually, narrowing down candidates much faster than lab experiments alone',
      'AI reads existing prescriptions and recommends them to new patients',
      'AI has access to secret medical databases unavailable to researchers',
    ],
    correctIndex: 1,
    explanation:
      'Traditionally, drug discovery required physically testing thousands of compounds, which takes years. AI can simulate how molecules interact with proteins and predict which candidates are most promising — cutting early-stage research from years to months.',
  },
  {
    question: 'What does "personalised medicine" mean in the context of AI?',
    options: [
      'Every patient gets a different doctor',
      'AI uses your specific health data to suggest treatments most likely to work for you specifically, rather than using a one-size-fits-all approach',
      'Doctors print your name on your medicine bottle',
      'Patients choose their own treatment from an AI menu',
    ],
    correctIndex: 1,
    explanation:
      'Personalised medicine means tailoring treatment to the individual patient — their genetics, lifestyle, medical history, and more. AI can analyse these complex, interacting factors at a scale and speed that is not possible manually, suggesting which treatments are most likely to be effective for a specific person.',
  },
  {
    question: 'Why do doctors still need to make the final call, even when AI gives a diagnosis suggestion?',
    options: [
      'Doctors are legally required to pretend they made the decision',
      'AI is always wrong about medical matters',
      'AI can miss context, patient preferences, and factors not in the data — human judgment, empathy, and ethical reasoning are essential to good medical care',
      'AI diagnosis tools have not been tested yet',
    ],
    correctIndex: 2,
    explanation:
      'AI sees patterns in data — but it cannot have a conversation, notice that a patient looks anxious, weigh a treatment against their personal circumstances, or make complex ethical judgments. Doctors bring all of that. AI is a powerful tool to support clinical decisions, not replace them.',
  },
  {
    question: 'Which of the following best describes AI\'s role in healthcare?',
    options: [
      'AI is replacing doctors and nurses across all areas of medicine',
      'AI is too unreliable to be used in healthcare',
      'AI is a tool that supports medical professionals — it processes data faster and spots patterns, but humans make the decisions',
      'AI is only used in hospitals in wealthy countries',
    ],
    correctIndex: 2,
    explanation:
      'AI in healthcare is primarily about augmenting what human professionals can do — analysing large datasets, flagging potential issues, and accelerating research. The final decisions about diagnosis and treatment remain with trained medical professionals who can consider the full picture.',
  },
]

export function AIInHealthcare() {
  useMarkVisited('ai-in-healthcare')
  useLessonVisit('ai-in-healthcare')
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1FA7A;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI in healthcare
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI is helping doctors diagnose diseases, discover drugs, and personalise treatment &mdash;
            and why human judgment remains essential.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-in-healthcare" />
          <ShareButton lessonTitle="ai-in-healthcare" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Why healthcare and AI are a good fit</h2>
          <p className="text-gray-600 leading-relaxed">
            Medicine produces enormous amounts of data: medical images, lab results, patient records,
            research papers, and clinical trial results. No individual doctor can read all of it.
            AI is remarkably good at finding patterns in large datasets &mdash; which is exactly what
            healthcare needs.
          </p>
          <p className="text-gray-600 leading-relaxed">
            At the same time, healthcare is high-stakes. Errors can harm or kill people. So AI in
            medicine is not about replacing doctors &mdash; it is about giving them better tools.
          </p>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
            <p className="text-teal-800 font-semibold text-sm">The key principle</p>
            <p className="text-teal-700 text-sm leading-relaxed mt-1">
              AI in healthcare augments medical professionals &mdash; it processes data faster and spots
              patterns that are hard to see manually. Humans still make the decisions.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Medical imaging and diagnosis</h2>
          <p className="text-gray-600 leading-relaxed">
            One of the most developed uses of AI in medicine is analysing medical images &mdash;
            X-rays, MRI scans, CT scans, and pathology slides. AI systems can be trained on millions
            of annotated images to recognise patterns associated with specific conditions.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'Cancer screening',
                text: 'AI systems can analyse mammograms and skin images to flag potential cancerous changes. Studies have shown AI catching cancers that radiologists initially missed — not because the doctors were incompetent, but because reviewing hundreds of images in a day creates fatigue. AI does not get tired.',
              },
              {
                label: 'Eye disease detection',
                text: 'Google\'s DeepMind developed an AI that analyses retinal scans and can detect over 50 eye conditions with accuracy matching specialist ophthalmologists. This is especially valuable in regions where specialists are scarce.',
              },
              {
                label: 'Stroke detection',
                text: 'In stroke cases, speed is everything. AI systems can flag CT scans showing signs of stroke in seconds, alerting medical teams faster than traditional workflows.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-gray-800 text-sm">{label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Drug discovery and research</h2>
          <p className="text-gray-600 leading-relaxed">
            Developing a new drug traditionally takes 10 to 15 years and costs billions. Most of
            that time is spent testing molecules that do not work. AI is dramatically changing this.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F9EA;',
                label: 'Screening millions of compounds',
                text: 'AI can simulate how potential drug molecules interact with the proteins involved in a disease — testing millions of candidates virtually in the time it would take to test a few hundred in a lab. This narrows the field to the most promising candidates before any physical testing begins.',
              },
              {
                icon: '&#x1F9EC;',
                label: 'Protein folding',
                text: 'Understanding the 3D shape of proteins is crucial for designing drugs that can interact with them. DeepMind\'s AlphaFold AI solved a 50-year-old biology problem by predicting protein structures, which has already accelerated research into treatments for diseases like malaria and Parkinson\'s.',
              },
              {
                icon: '&#x1F48A;',
                label: 'Repurposing existing drugs',
                text: 'AI can identify existing approved drugs that might work against new diseases — a faster path than developing a brand new compound. This approach was used early in the COVID-19 pandemic to rapidly identify potential treatments.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Personalised medicine</h2>
          <p className="text-gray-600 leading-relaxed">
            For most of medical history, treatments have been designed for the &ldquo;average patient&rdquo; &mdash;
            but people are different. The same drug that works well for one person might have no
            effect or serious side effects for another, because of differences in genetics, age,
            lifestyle, and other conditions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            AI can analyse a patient&rsquo;s full health picture &mdash; genetic profile, medical history,
            lifestyle data, and more &mdash; to suggest which treatments are most likely to work for
            them specifically. This is especially valuable in oncology (cancer treatment), where the
            same cancer type can behave very differently in different patients.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-blue-800 font-semibold text-sm">A real example</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              IBM Watson for Oncology analyses a patient&rsquo;s tumour profile and medical literature
              to suggest treatment options. Doctors at major cancer centres use it as one input
              among many when planning treatment.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Important cautions</h2>
          <p className="text-gray-600 leading-relaxed">
            The potential of AI in healthcare is real &mdash; but so are the risks. It is worth
            understanding both.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'AI can inherit human biases',
                text: 'If an AI is trained primarily on data from certain patient populations, it may perform less well on others. Studies have found some medical AI systems work less accurately for darker skin tones, or for women, because the training data over-represented certain groups.',
              },
              {
                label: 'AI is only as good as its data',
                text: 'Medical records are often incomplete, inconsistently recorded, or contain errors. An AI trained on poor-quality data will give poor-quality outputs.',
              },
              {
                label: 'Trust and accountability',
                text: 'When an AI system contributes to a diagnosis that turns out to be wrong, who is responsible? The regulatory and legal frameworks for medical AI are still being developed.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-red-50 border border-red-100 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-red-800 text-sm">{label}</p>
                <p className="text-red-700 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-bold text-blue-800">The bottom line</h2>
          <p className="text-blue-700 leading-relaxed">
            AI is already making a real difference in healthcare &mdash; from catching cancers earlier to
            accelerating the discovery of new drugs. These are not future possibilities; they are
            happening now.
          </p>
          <p className="text-blue-700 leading-relaxed">
            But AI in medicine is a tool, not a decision-maker. The doctors, nurses, and researchers
            who use it still bring the empathy, judgment, and ethics that good medical care requires.
          </p>
        </div>

        <Quiz
          lessonId="ai-in-healthcare"
          lessonTitle="AI in healthcare"
          questions={quizQuestions}
        />

        <LessonNote lessonId="ai-in-healthcare" />

        {/* Rating */}
        <LessonFeedback lessonId="ai-in-healthcare" />
        <LessonRating lessonId="ai-in-healthcare" />
        <ReviewLaterButton lessonId="ai-in-healthcare" />

        <RelatedLessons currentId="ai-in-healthcare" />

        <NextLesson currentId="ai-in-healthcare" />

      </div>
    </div>
  )
}
