import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { ReviewLaterButton } from '../components/ReviewLaterButton'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What problem did AlphaFold solve that had puzzled scientists for 50 years?',
    options: [
      'How to sequence a human genome',
      'How to predict the 3D shape of proteins from their amino acid sequence',
      'How to cure cancer using genetic editing',
      'How to create artificial cells in a laboratory',
    ],
    correctIndex: 1,
    explanation:
      'AlphaFold, built by DeepMind, solved the "protein folding problem" — predicting the precise 3D shape a protein takes when it folds up. This matters because a protein\'s shape determines its function, and understanding shapes helps scientists design drugs that interact with specific proteins.',
  },
  {
    question: 'How does AI help in drug discovery?',
    options: [
      'It replaces the need for clinical trials entirely',
      'It physically synthesises new drugs in robotic labs without human input',
      'It can scan millions of molecular structures quickly to predict which ones might work as drugs',
      'It diagnoses patients and prescribes medicine automatically',
    ],
    correctIndex: 2,
    explanation:
      'Traditional drug discovery involves testing thousands of compounds one by one — a process that can take decades. AI can rapidly analyse millions of molecular structures, predict how they interact with a target protein, and narrow down the candidates worth testing in a lab. This dramatically speeds up the early stages of drug development.',
  },
  {
    question: 'Which of the following is a real example of AI being used in astronomy?',
    options: [
      'AI designed the James Webb Space Telescope lenses',
      'AI operates space probes without ground control',
      'AI classified hundreds of millions of galaxies from telescope images far faster than humans could',
      'AI discovered a new planet in our solar system by calculating orbital paths',
    ],
    correctIndex: 2,
    explanation:
      'Projects like Galaxy Zoo started by crowdsourcing humans to classify galaxy shapes from telescope images. Today, AI can classify hundreds of millions of galaxies in hours — a task that would take thousands of human volunteers years. The Event Horizon Telescope collaboration also used AI to help reconstruct the first image of a black hole.',
  },
  {
    question: 'What is an important limitation of AI in scientific research?',
    options: [
      'AI cannot process large datasets',
      'AI cannot be used in biology — only in physics',
      'AI models can produce false results and scientific findings still need rigorous human verification',
      'AI is too slow to be useful for real-time research',
    ],
    correctIndex: 2,
    explanation:
      'AI, especially language models, can generate plausible-sounding but incorrect scientific statements — a problem called hallucination. Any AI-generated scientific hypothesis or result must be verified through rigorous experiments and peer review. AI accelerates the process of generating ideas and spotting patterns, but it does not replace the scientific method.',
  },
  {
    question: 'How is AI used in climate science?',
    options: [
      'AI directly controls carbon emissions through industrial systems',
      'AI runs climate simulations, improves weather forecasting, and helps identify climate patterns in large datasets',
      'AI is not yet used in climate science — it is too new',
      'AI only helps climate scientists write research papers faster',
    ],
    correctIndex: 1,
    explanation:
      'AI improves climate modelling in several ways: running complex simulations faster, analysing satellite imagery to track deforestation or ice melt, improving 10-day weather forecasts, and identifying patterns in decades of climate data. Companies like Google DeepMind have also used AI to improve the efficiency of wind farms and reduce the carbon footprint of data centres.',
  },
]

export function AIAndScientificResearch() {
  useMarkVisited('ai-and-scientific-research')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-10">

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl" aria-hidden="true">&#x1F52C;</div>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
              AI and scientific research
            </h1>
            <CompletedBadge lessonId="ai-and-scientific-research" />
          </div>
          <div className="flex items-center justify-center gap-3 text-sm text-gray-500 flex-wrap">
            <span className="bg-amber-100 text-amber-700 font-medium px-3 py-1 rounded-full">Intermediate</span>
            <span>~6 min read</span>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            AI is transforming how scientists make discoveries — from folding proteins to predicting the weather.
            Here is how it works and why it matters.
          </p>
        </div>

        {/* AlphaFold */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AlphaFold: solving a 50-year mystery</h2>
          <p className="text-gray-700 leading-relaxed">
            Every living thing is made of proteins — tiny machines that carry oxygen, fight infection, digest food, and
            more. The shape a protein folds into determines what it does. For 50 years, working out that shape from the
            protein's chemical recipe was one of science's hardest problems.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In 2020, DeepMind's AI system <strong>AlphaFold</strong> cracked it. It can predict a protein's 3D shape with
            astonishing accuracy — a task that used to require years of lab work. AlphaFold has since published the shapes
            of over 200 million proteins, freely available to any researcher in the world. Scientists are already using
            those predictions to design drugs for diseases that were previously very hard to treat.
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="text-purple-800 text-sm font-medium">
              Why it matters: understanding protein shapes is the first step in designing drugs that interact with them.
              AlphaFold did not cure any diseases on its own — but it gave the world a tool that could compress decades
              of future research into years.
            </p>
          </div>
        </section>

        {/* Drug discovery */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Speeding up drug discovery</h2>
          <p className="text-gray-700 leading-relaxed">
            Developing a new drug traditionally takes 10 to 15 years and costs over a billion dollars. Most of that time
            is spent in the earliest phase: searching for a molecule that might work.
          </p>
          <p className="text-gray-700 leading-relaxed">
            AI dramatically compresses that search. A system can evaluate <strong>millions of molecular structures in hours</strong>,
            predicting which ones might bind to a target protein, which might be toxic, and which are worth testing in a
            lab. In 2020, an AI system discovered a new antibiotic called Halicin — effective against drug-resistant
            bacteria that human researchers had failed to treat for years.
          </p>
          <p className="text-gray-700 leading-relaxed">
            AI does not replace chemists or doctors. It narrows down a universe of options, so scientists can focus their
            limited time on the most promising leads.
          </p>
        </section>

        {/* Climate science */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Climate modelling and weather forecasting</h2>
          <p className="text-gray-700 leading-relaxed">
            Climate science involves processing enormous amounts of data — satellite imagery, ocean temperature records,
            atmospheric measurements — to build models of how the Earth's climate works. AI is making those models
            faster and more accurate.
          </p>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex gap-2"><span className="text-emerald-500 font-bold mt-0.5">&#x2022;</span><span><strong>Weather forecasting:</strong> Google DeepMind's GraphCast and NVIDIA's FourCastNet can produce accurate 10-day global weather forecasts in under a minute — a task traditional models take hours to compute.</span></li>
            <li className="flex gap-2"><span className="text-emerald-500 font-bold mt-0.5">&#x2022;</span><span><strong>Ice and deforestation tracking:</strong> AI analyses satellite images to monitor the rate at which Arctic ice is melting or forests are being cleared — automatically, at global scale.</span></li>
            <li className="flex gap-2"><span className="text-emerald-500 font-bold mt-0.5">&#x2022;</span><span><strong>Energy optimisation:</strong> DeepMind used AI to cut the energy used to cool Google's data centres by 40%, showing that AI can reduce its own environmental footprint.</span></li>
          </ul>
        </section>

        {/* Astronomy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Astronomy: classifying the cosmos</h2>
          <p className="text-gray-700 leading-relaxed">
            Modern telescopes generate more data than humans could ever manually analyse. The Rubin Observatory will
            produce 20 terabytes of new images every single night. AI is essential for making sense of it all.
          </p>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">&#x2022;</span><span><strong>Galaxy classification:</strong> AI can sort hundreds of millions of galaxies by shape — spiral, elliptical, irregular — far faster than any human team.</span></li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">&#x2022;</span><span><strong>Black hole imaging:</strong> The Event Horizon Telescope team used AI to fill in gaps in their data and produce the first-ever image of a black hole in 2019.</span></li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">&#x2022;</span><span><strong>Exoplanet detection:</strong> NASA used machine learning to find two exoplanets in Kepler Space Telescope data that traditional analysis had missed.</span></li>
          </ul>
        </section>

        {/* Limitations */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What AI cannot do in science</h2>
          <p className="text-gray-700 leading-relaxed">
            AI is a powerful tool, but it does not replace the scientific method. Some important caveats:
          </p>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex gap-2"><span className="text-red-500 font-bold mt-0.5">&#x2022;</span><span><strong>Hallucination:</strong> Language models can generate plausible-sounding but wrong scientific claims. Any AI output still needs human experts to verify it through experiments and peer review.</span></li>
            <li className="flex gap-2"><span className="text-red-500 font-bold mt-0.5">&#x2022;</span><span><strong>Reproducibility:</strong> If an AI model is trained on biased data or its internals are opaque, it can be hard to understand why it produced a result — a problem for science that relies on repeatability.</span></li>
            <li className="flex gap-2"><span className="text-red-500 font-bold mt-0.5">&#x2022;</span><span><strong>Creativity and intuition:</strong> AI spots patterns in existing data very well. But the big leaps in science often come from a scientist asking an entirely new question — and that remains a human strength.</span></li>
          </ul>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-blue-800 text-sm font-medium">
              The best scientific AI projects pair machine intelligence with human expertise. AI does the heavy
              computational lifting; human scientists design the questions, interpret the results, and decide what
              to test next.
            </p>
          </div>
        </section>

        {/* Note */}
        <LessonNote lessonId="ai-and-scientific-research" />

        {/* Rating */}
        <LessonRating lessonId="ai-and-scientific-research" />
        <ReviewLaterButton lessonId="ai-and-scientific-research" />

        {/* Quiz */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Test your knowledge</h2>
          <Quiz lessonId="ai-and-scientific-research" questions={quizQuestions} />
        </section>

        {/* Related lessons */}
        <RelatedLessons currentId="ai-and-scientific-research" />

        {/* Next lesson */}
        <NextLesson currentId="ai-and-scientific-research" />

      </div>
    </div>
  )
}
