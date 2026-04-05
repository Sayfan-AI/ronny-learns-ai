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

const LESSON_TITLE = 'AI and genetics'

const KEY_TAKEAWAYS = [
  'Consumer DNA testing kits (like 23andMe and AncestryDNA) use AI to analyse your genetic code and report on ancestry, inherited traits, and health predispositions — but what happens to your DNA data afterwards raises serious privacy questions.',
  'Personalised medicine uses AI to match treatments to a patient\'s genetic profile rather than prescribing the same drug to everyone — this is transforming cancer treatment, where tumour genetics increasingly determine which therapy is used.',
  'AI can now predict the risk of developing certain genetic conditions (such as hereditary breast cancer linked to the BRCA gene) years or even decades before symptoms appear, allowing preventative action.',
  'CRISPR gene editing — a technique that can precisely alter DNA — is being accelerated by AI, which designs the guide molecules needed to edit specific genes far faster and more accurately than humans could by hand.',
  'The ethical questions raised by AI and genetics are profound: who owns your DNA data, could employers or insurers discriminate based on genetic risk predictions, and should we ever use AI to select or modify the genes of future children?',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What do consumer DNA testing kits like 23andMe primarily use AI for?',
    options: [
      'Sequencing your entire DNA from scratch — the AI reads every base pair in your genome and assembles them in order from your saliva sample',
      'Analysing patterns across hundreds of thousands of genetic markers to estimate ancestry percentages, inherited traits, and statistical health risks',
      'Comparing your DNA to a criminal database to check for any family members who have been convicted of an offence',
      'Predicting your exact height, weight, and appearance by reading the genes responsible for physical development',
    ],
    correctIndex: 1,
    explanation:
      'Consumer kits do not sequence your entire genome — that would be very expensive. Instead they use a technology called genotyping, which reads hundreds of thousands of specific known genetic variants (called SNPs — single nucleotide polymorphisms). AI then compares your pattern of variants against reference databases built from millions of people. By identifying which variants you share with people of documented ancestry, the AI estimates your heritage. For health reports, it checks whether you carry variants statistically associated with higher or lower risk of specific conditions. The results are probabilistic, not certainties.',
    hint: 'Think about pattern matching against known genetic variants, not reading every single base.',
  },
  {
    question: 'How is AI changing cancer treatment through genetics?',
    options: [
      'AI analyses tumour biopsy images to determine the stage of cancer and recommends surgery, chemotherapy, or radiotherapy based on a standard protocol',
      'AI sequences the DNA of a patient\'s tumour to identify its specific genetic mutations, then matches those mutations to therapies most likely to work against that particular cancer',
      'AI monitors a patient\'s blood markers during chemotherapy and automatically adjusts the drug dose each day to maximise effectiveness and minimise side effects',
      'AI designs entirely new chemotherapy drugs from scratch for each individual patient, synthesised within 24 hours of diagnosis',
    ],
    correctIndex: 1,
    explanation:
      "Cancer is not one disease — it is hundreds. Two breast cancers in two different people may have completely different genetic mutations driving them. Some mutations make a cancer respond brilliantly to a targeted drug; others make the same drug useless. AI now analyses the full genetic profile of a patient's tumour (tumour sequencing) and cross-references it against databases of thousands of other tumours and their responses to treatment. This approach — called precision oncology — is already standard practice in major cancer centres and is improving survival rates for several cancer types, including lung cancer and melanoma.",
    hint: 'Think about matching treatment to the specific genetics of the tumour.',
  },
  {
    question: 'What is the main purpose of AI in CRISPR gene editing research?',
    options: [
      'AI monitors the CRISPR editing process in real time and immediately reverses any edits that produce unwanted changes, acting as a safety check',
      'AI designs the guide RNA molecules that direct the CRISPR tool to the correct location in the genome with high precision and minimal off-target cuts',
      'AI handles the legal and ethical review of proposed gene edits, automatically approving edits that meet international guidelines and rejecting those that do not',
      'AI generates publicity materials explaining gene editing to the public in simple language, to improve acceptance of the technology',
    ],
    correctIndex: 1,
    explanation:
      "CRISPR works by using a short piece of RNA (called a guide RNA) to direct a molecular scissors (the Cas9 protein) to a specific sequence in a genome. Designing a guide RNA that targets exactly the right place — and does not accidentally cut similar sequences elsewhere in the genome (off-target effects) — is enormously complex. AI models, trained on experimental data from thousands of guide RNA designs and their outcomes, can now predict which guide sequences will work reliably and which will cause off-target cuts. This has made CRISPR significantly more precise and has accelerated genetic medicine research. DeepMind's AlphaFold, which predicts protein structures, is also central to understanding how gene edits change the proteins cells produce.",
    hint: 'Think about designing the molecular tool that finds the right place in the DNA.',
  },
  {
    question: 'What is "polygenic risk scoring" in the context of AI and genetics?',
    options: [
      'A legal framework that scores how many genetic patents a company holds, used to determine licensing fees for genetic research',
      'An AI technique that combines the effect of hundreds or thousands of small genetic variants across the genome to estimate an individual\'s statistical risk of developing a condition like heart disease or type 2 diabetes',
      'A blood test that scores how quickly your genes are ageing relative to your chronological age, used to personalise anti-ageing treatments',
      'A scoring system used by geneticists to rank the importance of different genes in controlling a specific trait, such as height or intelligence',
    ],
    correctIndex: 1,
    explanation:
      'Many common diseases — heart disease, type 2 diabetes, depression, schizophrenia — are not caused by a single gene but by the combined effect of hundreds of small genetic variants, each adding a tiny amount of risk. Polygenic risk scores aggregate all these small effects using AI trained on data from genome-wide association studies (GWAS), which compare the genomes of hundreds of thousands of people who have and have not developed a condition. Your score places you on a risk spectrum. People in the top 5% of risk for heart disease, for example, may benefit from starting preventative medication decades earlier than current guidelines suggest. The NHS is exploring using polygenic scores for population screening programmes.',
    hint: 'Think about many small genetic effects adding up to give an overall risk estimate.',
  },
  {
    question: 'What is the primary ethical concern about consumer genetic data being held by testing companies?',
    options: [
      'That the companies will use your genetic data to contact distant relatives you may not know about, causing emotional distress and family disputes',
      'That genetic data could be sold to or accessed by insurers, employers, or law enforcement — and used to discriminate against people based on their genetic risk profile',
      'That the ancestry percentages produced by the tests are inaccurate enough to cause people to make incorrect medical decisions based on false results',
      'That the DNA samples collected by testing kits are frequently contaminated during postal transit, producing unreliable results for a significant proportion of customers',
    ],
    correctIndex: 1,
    explanation:
      'Your genetic data is uniquely identifying — unlike a password, you cannot change it. If a DNA testing company is breached, sells data to a third party, or is acquired by a larger company, your genetic information could end up in unexpected hands. The most serious concern is discriminatory use: an insurer who learns you carry a genetic variant associated with early-onset Alzheimer\'s might refuse life insurance or charge unaffordable premiums; an employer might make hiring decisions based on genetic health predictions. The UK Equality Act and the US Genetic Information Nondiscrimination Act (GINA) provide some protections, but gaps remain. In 2023, 23andMe suffered a significant data breach affecting millions of customers, bringing these concerns into sharp focus.',
    hint: 'Think about what could go wrong if this very personal data were shared without your consent.',
  },
]

export function AIAndGenetics() {
  useMarkVisited('ai-and-genetics')

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F9EC;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and genetics
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            DNA testing kits, personalised medicine, gene editing, and the profound
            ethical questions that arise when AI starts reading the code of life.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-genetics" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-teal-100 dark:border-teal-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Why genetics and AI are a powerful combination</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The human genome contains around 3 billion base pairs of DNA. Making sense of all that data — finding the variants that matter, linking them to health outcomes, and using that understanding to treat disease — is exactly the kind of large-scale pattern recognition at which AI excels.
          </p>
          <div className="space-y-2">
            {[
              'The first human genome took 13 years and $3 billion to sequence, completing in 2003. Today a genome can be sequenced in hours for around $200',
              'Over 50 million people have now taken consumer DNA tests through services like 23andMe, AncestryDNA, and MyHeritage',
              "DeepMind's AlphaFold solved a 50-year-old biology problem in 2020 by predicting the 3D shape of virtually every known protein from its genetic code",
              'Cancer treatments guided by tumour genetics have extended survival times significantly for several previously untreatable cancers',
              'The UK Biobank holds genetic and health data from half a million volunteers — one of the world\'s largest genetics research resources',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-teal-600 dark:text-teal-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Consumer DNA tests — what they tell you and what they do not</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Spit in a tube, post it off, and a few weeks later you receive a detailed report about your ancestry, inherited traits, and health risks. But there is quite a lot happening behind the scenes.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F30D;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Ancestry reports</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">The AI compares your genetic variants against reference populations. If your DNA has many variants common among people from West Africa, Ireland, or East Asia, you will see those regions appear in your results. The percentages are estimates, not exact measurements, and they can shift as the reference databases grow larger and more representative.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x2764;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Health risk reports</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Some tests report on whether you carry variants associated with conditions like hereditary breast and ovarian cancer (BRCA genes), late-onset Alzheimer's, or coeliac disease. Carrying a risk variant does not mean you will develop the condition — it means your statistical risk is higher than average. Genetic counsellors recommend discussing these results with a doctor before acting on them.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F512;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">The privacy question</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Your DNA is unique and permanent. Many testing companies share anonymised data with pharmaceutical researchers (sometimes for a fee). Anonymisation is difficult with genetic data because your relatives — who share your DNA — can often be used to re-identify you. Reading the terms and conditions before taking a test matters more than with most apps.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Personalised medicine — treating the patient, not just the disease</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Traditional medicine tends to prescribe the same treatment to everyone with the same diagnosis. AI and genetics are enabling a different approach.
          </p>
          <div className="space-y-2">
            {[
              'Pharmacogenomics studies how your genes affect how you respond to drugs — some people metabolise certain medications too quickly (making them ineffective) or too slowly (making them toxic)',
              'Cancer genomics sequences a tumour\'s DNA to identify which mutations are driving it — the same type of cancer in two people may require completely different treatments',
              'The NHS Genomics Medicine Service now offers whole genome sequencing for rare diseases in children and for cancer patients, using AI to interpret the results',
              'AI is used to identify which patients are most likely to benefit from a clinical trial based on their genetic profile, making trials faster and more targeted',
              'Targeted therapies for lung cancer, based on specific gene mutations like EGFR and ALK, have transformed prognosis for patients who carry those mutations',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-violet-100 dark:border-violet-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">CRISPR and AI — editing the code of life</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            CRISPR-Cas9 is a gene editing tool that can precisely cut and modify DNA in living cells. It was awarded the Nobel Prize in Chemistry in 2020. AI is making it significantly more powerful and precise.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x2702;&#xFE0F;',
                label: 'How CRISPR works',
                text: 'A short RNA molecule acts as a GPS address, guiding a protein that cuts DNA to exactly the right location in the genome. The cell then repairs the cut — and scientists can influence whether the repair restores the original gene, disables it, or inserts a new sequence.',
                color: 'violet',
              },
              {
                icon: '&#x1F916;',
                label: 'What AI adds',
                text: 'Designing the guide RNA to target the right place without accidentally cutting elsewhere is complex. AI models trained on millions of experimental results can now predict the best guide design with much higher precision, dramatically reducing off-target effects and speeding up research.',
                color: 'violet',
              },
              {
                icon: '&#x1F489;',
                label: 'Real treatments',
                text: 'In 2023, the first CRISPR-based medicine received regulatory approval — a treatment for sickle cell disease and beta-thalassemia. Patients who previously needed regular blood transfusions have been effectively cured after a single treatment. AI was central to designing the therapy.',
                color: 'violet',
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

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Ethical questions — where the debate gets difficult</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The combination of AI and genetics raises some of the most significant ethical questions in modern science. These are genuine societal debates with no easy answers.
          </p>
          <div className="space-y-3">
            {[
              {
                question: 'Who owns your DNA?',
                detail: 'When you take a consumer DNA test, do you own your genetic data — or does the company? Most terms of service grant testing companies broad rights to use your anonymised data for research and commercial purposes. Many users are unaware of this.',
              },
              {
                question: 'Could genetic data be used to discriminate?',
                detail: 'If insurers could access your genetic risk scores, they could raise premiums or refuse cover for people with higher predicted risk of expensive conditions. The same risk exists in employment. Laws exist to prevent this but are not universal and are difficult to enforce.',
              },
              {
                question: 'Designer babies — where is the line?',
                detail: 'If AI can predict which embryos carry genetic variants linked to disease, should we select against those embryos? This is already done in the UK via pre-implantation genetic diagnosis for serious hereditary conditions. But should the same technology ever select for traits like height or intelligence? Most scientists and ethicists say no — but the technology would make it technically possible.',
              },
            ].map(({ question, detail }) => (
              <div key={question} className="bg-red-50 dark:bg-red-950 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm">{question}</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            These questions are not hypothetical — they are being debated in parliaments, hospitals, and laboratories right now. How they are answered will shape what kind of society we become.
          </p>
        </div>

        <LessonNote lessonId="ai-and-genetics" />
        <ReviewLaterButton lessonId="ai-and-genetics" />

        <Quiz lessonId="ai-and-genetics" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-genetics" />
        <LessonFeedback lessonId="ai-and-genetics" />

        <RelatedLessons currentId="ai-and-genetics" />

        <NextLesson currentId="ai-and-genetics" />

      </div>
    </div>
  )
}
