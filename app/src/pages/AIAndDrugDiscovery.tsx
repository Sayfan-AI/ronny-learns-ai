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

const LESSON_TITLE = 'AI and drug discovery'

const quizQuestions: QuizQuestion[] = [
  {
    question: "What did DeepMind's AlphaFold achieve, and why is it significant for medicine?",
    options: [
      'It designed a new type of surgical robot that can perform operations without a human surgeon',
      'It solved the protein-folding problem — predicting the 3D shape of proteins from their genetic sequence — unlocking a key barrier in understanding how diseases work and how drugs might target them',
      'It analysed hospital records to predict which patients were most likely to need emergency care',
      'It created a database of all known diseases and matched them to existing approved drugs',
    ],
    correctIndex: 1,
    explanation:
      "Proteins are the molecular machines that carry out almost every function in the human body. Their 3D shape determines what they do — and understanding that shape is essential for designing drugs that can interact with them. For 50 years, working out how a protein folds into its final shape from a flat genetic sequence was one of biology's hardest unsolved problems. In 2020, DeepMind's AlphaFold AI system solved it — predicting the structure of almost every protein known to science with remarkable accuracy. The breakthrough was recognised with a Nobel Prize in Chemistry in 2024. By releasing AlphaFold's predictions freely, DeepMind gave researchers worldwide a tool that would previously have taken individual labs years of expensive experimental work to produce for a single protein.",
    hint: 'Think about what determines how a drug interacts with a target in the body.',
  },
  {
    question: 'How has AI changed the speed of finding new drug candidates?',
    options: [
      'AI has not significantly changed drug discovery timelines — it only helps with paperwork and administrative tasks',
      'AI can now design and manufacture drugs automatically with no human input needed',
      'AI can screen millions of molecular combinations in days rather than years, identifying promising candidates for further testing far faster than traditional experimental methods',
      'AI has slowed drug discovery by adding extra regulatory checks that were not previously required',
    ],
    correctIndex: 2,
    explanation:
      "Traditional drug discovery involved chemists designing molecules one by one, synthesising them in a lab, and testing them — a process that could take years just to find a single promising compound worth testing further. AI can simulate how millions of different molecular structures might interact with a target protein, scoring them all in days. This dramatically shortens the early-stage search. Insilico Medicine, a biotech company, used AI to design a novel drug candidate for a lung disease called idiopathic pulmonary fibrosis in just 46 days — a process that would conventionally take years. The compound subsequently passed early clinical trials, demonstrating that AI-discovered drugs can work in real patients.",
    hint: 'Think about how many molecules can be tested in a computer simulation versus in a physical lab.',
  },
  {
    question: 'Even with AI dramatically speeding up drug discovery, why do new medicines still take many years to reach patients?',
    options: [
      'Because AI systems are not allowed to submit drug applications to regulators — only human scientists can do this',
      'Because clinical trials — the process of testing drugs in humans for safety and effectiveness — still take years and cannot be significantly shortened by AI',
      'Because pharmaceutical companies deliberately slow down drug development to maximise profits',
      'Because AI-discovered drugs are automatically considered experimental and require 20 years of observation before approval',
    ],
    correctIndex: 1,
    explanation:
      "AI can dramatically speed up the early stages of drug discovery — finding targets, designing molecules, and predicting how they might work. But drug development also includes clinical trials, which must be conducted in real human patients to prove that a drug is safe and effective. Clinical trials happen in phases: Phase 1 tests safety in a small group; Phase 2 tests effectiveness in a larger group; Phase 3 tests in a large population and compares against existing treatments. Each phase takes years, involves thousands of participants, and is required by regulators like the MHRA in the UK and the FDA in the US. AI can help make some aspects of trials more efficient — better patient matching, faster analysis of results — but it cannot replace the trials themselves.",
    hint: 'Think about what needs to happen after a promising molecule is discovered.',
  },
  {
    question: 'What is a key concern about AI-discovered drugs and patient access?',
    options: [
      'AI-discovered drugs are automatically banned in the UK until approved by the EU',
      'AI-discovered drugs are always less effective than conventionally discovered drugs and should not be used',
      'Even if AI speeds up discovery, the drugs that result are still developed by commercial companies that may price them beyond the reach of patients in lower-income countries, or beyond what the NHS can afford',
      'AI drug discovery is only available to large pharmaceutical companies in the USA, giving American patients an unfair advantage',
    ],
    correctIndex: 2,
    explanation:
      "AI is a powerful tool, but it does not change the fundamental economics of drug development. Pharmaceutical companies invest billions in research and development and protect their investment through patents — which allow them to charge high prices for a period before generic versions can be made. Even an AI-discovered drug that reaches patients quickly can be priced out of reach for healthcare systems in lower-income countries. Cancer drugs discovered with AI assistance, for example, may cost hundreds of thousands of pounds per patient — making them unaffordable for many NHS budgets without further negotiation. Some researchers argue that drugs discovered using publicly-funded AI tools (like AlphaFold, developed with public funding) should be subject to pricing commitments that ensure access.",
    hint: 'Think about who benefits once a new drug exists — and who might be left out.',
  },
]

export function AIAndDrugDiscovery() {
  useMarkVisited('ai-and-drug-discovery')

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F489;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and drug discovery
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI is helping scientists find new medicines faster — from AlphaFold solving one
            of biology's hardest problems to drug candidates designed in weeks instead of years.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-drug-discovery" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Why finding new medicines is so hard</h2>
          <p className="text-gray-600 leading-relaxed">
            Developing a new medicine from scratch is one of the most expensive and time-consuming
            things humans do. On average, bringing a single new drug to market takes <strong>10 to 15 years
            </strong> and costs over <strong>£1 billion</strong>. And most drugs fail — only about 1 in
            10 compounds that enter clinical trials ever make it to patients.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The process traditionally involves:
          </p>
          <div className="space-y-2">
            {[
              { step: '1', label: 'Target identification', text: 'Scientists identify a protein or biological mechanism involved in a disease — something a drug might be able to act on.' },
              { step: '2', label: 'Hit discovery', text: 'Researchers screen thousands of compounds to find ones that interact with the target. This is slow and expensive when done physically in a lab.' },
              { step: '3', label: 'Lead optimisation', text: 'The most promising compounds are refined — tweaked chemically to be more effective, less toxic, and stable enough to survive as a medicine.' },
              { step: '4', label: 'Clinical trials', text: 'The drug is tested in humans in three phases — safety, effectiveness, and large-scale comparison against existing treatments.' },
            ].map(({ step, label, text }) => (
              <div key={step} className="flex gap-3 items-start">
                <span className="bg-teal-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                  {step}
                </span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            AI is making the early stages dramatically faster — but it cannot replace the later stages.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AlphaFold: solving a 50-year problem</h2>
          <p className="text-gray-600 leading-relaxed">
            To understand why AlphaFold matters, you need to know a little about proteins. Proteins are
            the molecular machines that carry out almost every function in your body — digesting food,
            carrying oxygen in your blood, fighting infection, and much more.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A protein starts as a long chain of amino acids, like beads on a string — encoded in your
            DNA. But to do its job, that chain folds into a specific 3D shape. The shape determines
            everything: what the protein does, what other molecules it can interact with, and —
            crucially for medicine — how a drug might be designed to block or activate it.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 space-y-3">
            <p className="font-semibold text-blue-800 text-sm">The protein-folding problem</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              For 50 years, working out how a protein chain folds into its final 3D shape from its
              genetic sequence alone was one of biology's greatest unsolved challenges. Traditional
              methods — X-ray crystallography, cryo-electron microscopy — could determine protein
              structures, but each one took months of painstaking lab work.
            </p>
            <p className="text-blue-700 text-sm leading-relaxed">
              In 2020, DeepMind's <strong>AlphaFold</strong> AI system solved this problem. It could
              predict the 3D structure of a protein from its genetic sequence with accuracy that matched
              experimental methods. DeepMind released predictions for over 200 million proteins —
              essentially the entire known protein universe — for free. In 2024, the scientists behind
              AlphaFold were awarded the Nobel Prize in Chemistry.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed">
            For drug discovery, this is transformative. Researchers who previously spent years
            determining a single protein structure can now access it instantly — and start designing
            drugs to target it.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Finding drug candidates in days, not years</h2>
          <p className="text-gray-600 leading-relaxed">
            Once you know what a protein looks like, you need to find molecules that will interact with
            it in the right way. Traditional drug discovery screened physical libraries of compounds —
            a slow and expensive process. AI can simulate interactions with millions of molecules
            in days.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F9EA;',
                label: 'Insilico Medicine: 46 days to a drug candidate',
                text: 'The biotech company Insilico Medicine used AI to design a novel drug candidate for idiopathic pulmonary fibrosis — a serious lung disease — in just 46 days. This would conventionally take years. The compound subsequently passed Phase 1 and Phase 2 clinical trials, showing that AI-discovered drugs can work in real patients.',
              },
              {
                icon: '&#x1F48A;',
                label: 'Rare diseases: the long tail of neglect',
                text: 'Most rare diseases have no treatment — because developing a drug for a small patient population is not commercially attractive. AI changes this calculus: if the early discovery phase costs a fraction of what it used to, drugs for rare conditions become more viable to develop.',
              },
              {
                icon: '&#x1F9EC;',
                label: 'Repurposing existing drugs',
                text: 'AI is also being used to identify new uses for drugs that are already approved for other conditions. During COVID-19, AI tools rapidly screened existing drugs to find ones that might work against the virus — leading to faster testing of candidates like dexamethasone, which proved to save lives.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-green-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-green-800 text-sm mb-0.5">{label}</p>
                  <p className="text-green-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Clinical trials: still the long part</h2>
          <p className="text-gray-600 leading-relaxed">
            Even if AI designs a promising drug candidate in weeks, getting it to patients still takes
            years. Clinical trials — testing drugs in real humans — cannot be bypassed.
          </p>
          <div className="space-y-3">
            {[
              { phase: 'Phase 1', text: 'A small group of healthy volunteers (or sometimes patients) test the drug to check it is safe, identify side effects, and determine dosing. Takes 1 to 2 years.' },
              { phase: 'Phase 2', text: 'A larger group of patients take the drug to see whether it actually works and at what dose. Takes 2 to 3 years.' },
              { phase: 'Phase 3', text: 'A large, randomised trial compares the new drug against existing treatments or a placebo. This is the gold standard of evidence. Takes 3 to 5 years.' },
              { phase: 'Regulatory approval', text: 'The drug company submits all trial data to regulators (MHRA in the UK, FDA in the US) for review. This can take a further 1 to 2 years.' },
            ].map(({ phase, text }) => (
              <div key={phase} className="bg-indigo-50 rounded-xl p-3">
                <p className="font-semibold text-indigo-800 text-sm mb-0.5">{phase}</p>
                <p className="text-indigo-700 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            AI can help make trials more efficient — better matching patients to trials, faster analysis
            of data, earlier detection of safety signals — but it cannot replace trials themselves.
            The safety of patients in trials is non-negotiable.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Limits, risks, and the question of access</h2>
          <div className="space-y-3">
            {[
              {
                icon: '&#x26A0;&#xFE0F;',
                label: 'AI predicts, humans verify',
                text: "AI models for drug discovery can be confidently wrong. A molecule that looks great in a simulation may fail spectacularly in a real biological system. The history of drug development is full of promising candidates that turned out to be ineffective or unsafe. AI speeds up the search, but the verification still requires real-world testing.",
              },
              {
                icon: '&#x1F4B0;',
                label: 'Who benefits?',
                text: 'AlphaFold was developed using public funding and released freely — a decision that accelerated research globally. But drugs discovered using AlphaFold are developed by commercial companies that patent them and set prices. An AI-discovered cancer drug may cost hundreds of thousands of pounds per patient, putting it beyond the reach of NHS budgets without negotiation — and out of reach entirely for healthcare systems in lower-income countries.',
              },
              {
                icon: '&#x1F52C;',
                label: 'Overpromising',
                text: "There is significant hype around AI drug discovery, with some companies claiming AI will cure diseases within a few years. The reality is more measured: AI is a powerful accelerant for a process that is still genuinely hard. It does not remove the uncertainty of biology or the necessity of testing in humans.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-amber-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-amber-800 text-sm mb-0.5">{label}</p>
                  <p className="text-amber-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5">
          <p className="font-semibold text-teal-800 mb-2">Key takeaway</p>
          <p className="text-teal-700 text-sm leading-relaxed">
            AI is genuinely transforming the early stages of drug discovery — cutting the search for
            promising compounds from years to weeks, and unlocking structural biology through tools
            like AlphaFold. For patients with diseases that have no treatment, this is meaningful
            progress. But AI does not remove the need for rigorous testing in humans, does not
            automatically make medicines affordable, and should not be oversold as a cure-all for
            the deep challenges of developing safe new medicines.
          </p>
        </div>

        <ReviewLaterButton lessonId="ai-and-drug-discovery" />
        <LessonNote lessonId="ai-and-drug-discovery" lessonTitle={LESSON_TITLE} />

        <Quiz questions={quizQuestions} lessonId="ai-and-drug-discovery" lessonTitle={LESSON_TITLE} />

        <LessonFeedback lessonId="ai-and-drug-discovery" />
        <LessonRating lessonId="ai-and-drug-discovery" />
        <RelatedLessons currentId="ai-and-drug-discovery" />
        <NextLesson currentId="ai-and-drug-discovery" />
      </div>
    </div>
  )
}
