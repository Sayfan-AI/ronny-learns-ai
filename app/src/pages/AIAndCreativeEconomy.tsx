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

const LESSON_TITLE = 'AI and the creative economy — musicians, writers, designers, the UK copyright debate, and adaptation'

const KEY_TAKEAWAYS = [
  'AI can now generate music, writing, images, and video of commercially viable quality — tools like Suno, Midjourney, DALL-E, and ChatGPT are being used by both professionals and the general public.',
  'The UK government\'s 2024 consultation on AI and copyright proposed allowing AI companies to train on copyrighted material without permission unless creators explicitly opt out — an approach strongly opposed by most UK creative industries.',
  'Many working musicians, illustrators, and writers are already experiencing direct economic impact: lost commissions, lower rates, and displacement from entry-level work that AI now performs.',
  'Some creatives are adapting by positioning themselves as AI-assisted, incorporating AI tools into their workflow to increase output while keeping human craft for the work that requires it.',
  'The fundamental tension is unresolved: AI learns by ingesting vast amounts of human creative work, and the question of whether this constitutes fair use, transformative use, or exploitation is being litigated in courts worldwide.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What was the UK government\'s controversial proposal in its 2024 consultation on AI and copyright?',
    options: [
      'Banning AI companies from training on any UK-produced creative works',
      'Requiring AI companies to pay a flat royalty fee to all UK rights holders annually',
      'Allowing AI to train on copyrighted works without permission unless rights holders explicitly opt out',
      'Requiring all AI-generated content to be labelled and sold only through a government-approved platform',
    ],
    correctIndex: 2,
    explanation: 'The UK government\'s "text and data mining" exception proposal would allow AI training on copyrighted material by default, with rights holders able to opt out. UK creative industries strongly opposed this, arguing it would effectively make their work free for AI companies to use.',
  },
  {
    question: 'Which of the following best describes how AI is affecting entry-level creative work?',
    options: [
      'Entry-level roles are largely unaffected because clients prefer human work for all projects',
      'AI has primarily displaced senior creative directors because their strategic work is easier to automate',
      'Entry-level tasks like stock illustration, basic copywriting, and background music are increasingly performed by AI at much lower cost',
      'AI has created so many new entry-level jobs in prompt engineering that overall creative employment has increased',
    ],
    correctIndex: 2,
    explanation: 'The work most affected is at the volume, commodity end of creative markets — generic illustration, stock photography, background music, and templated copywriting — where buyers prioritise cost over distinctive style.',
  },
  {
    question: 'How are some professional musicians adapting to AI-generated music?',
    options: [
      'By lobbying governments to ban AI music tools entirely in all commercial contexts',
      'By using AI for repetitive or routine elements of production (drum patterns, background textures) while focusing their craft on the creative decisions that require human taste',
      'By exclusively creating music in genres that AI systems cannot yet replicate',
      'By switching to visual art, which is not yet affected by generative AI',
    ],
    correctIndex: 1,
    explanation: 'Many professional musicians are incorporating AI tools into their production workflow to work faster, while reserving their human expertise for the creative decisions that define their artistic identity.',
  },
  {
    question: 'What is the "training data" debate in the context of AI and creative work?',
    options: [
      'A disagreement about whether AI models should be trained on historical works or only on contemporary material',
      'A debate about whether AI companies should be allowed to use creative works to train AI systems without the creators\' permission or compensation',
      'A technical dispute about the most efficient way to process large creative datasets',
      'An argument about whether AI should be trained by human artists or automated scraping tools',
    ],
    correctIndex: 1,
    explanation: 'Generative AI models learn from massive datasets of human creative works scraped from the internet. Whether doing so without permission or compensation is legal and ethical is the central question in ongoing copyright litigation worldwide.',
  },
  {
    question: 'What has been the outcome of major copyright lawsuits against AI companies by artists and writers?',
    options: [
      'Courts have uniformly ruled that AI training is fair use in all jurisdictions',
      'All AI companies have been ordered to delete their training data and start again with licensed material',
      'Results are mixed and evolving — some cases have been dismissed, others are ongoing, and no definitive legal standard has yet been established globally',
      'The UK Supreme Court has ruled definitively that AI training does not require copyright permission',
    ],
    correctIndex: 2,
    explanation: 'As of 2024–25, copyright cases against AI companies are proceeding in courts in the US, UK, and EU. Some early motions have been dismissed on procedural grounds while the substantive copyright questions remain unresolved.',
  },
]

export function AIAndCreativeEconomy() {
  const lessonId = 'ai-and-creative-economy'
  useMarkVisited(lessonId)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-3">
          <div className="text-5xl mb-2">&#x1F3A8;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">AI and the creative economy</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI is reshaping music, writing, and design — the UK copyright debate, who is losing work, and how creatives are adapting.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-semibold px-3 py-1 rounded-full">Intermediate</span>
            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">7 min read</span>
          </div>
        </div>

        <CompletedBadge lessonId={lessonId} />

        <div className="flex justify-end gap-2">
          <ReviewLaterButton lessonId={lessonId} />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">The creative sector and AI</h2>
          <p>
            The UK creative industries — film, music, advertising, publishing, games, design — are worth over £100 billion a year and employ around 2.4 million people. AI is now capable of producing creative outputs — images, music, text, video — that were the exclusive domain of human professionals just five years ago.
          </p>
          <p>
            This is generating both opportunity and significant anxiety. The central questions are: whose creative work trained these systems, who owns what AI generates, and who loses their livelihood as a result?
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">What AI can now produce</h2>
          <p>
            <strong>Music:</strong> Tools like Suno and Udio can generate full songs in any genre from a text prompt in seconds. The output is often indistinguishable from competent human production. Background music, library tracks, and jingle composition are already being displaced.
          </p>
          <p>
            <strong>Visual art and design:</strong> Midjourney, Stable Diffusion, and DALL-E produce high-quality imagery. Graphic designers report losing stock illustration contracts and lower-budget commissions to AI-generated images. Architecture visualisation, product mockups, and social media graphics are all affected.
          </p>
          <p>
            <strong>Writing:</strong> AI is being used for blog content, product descriptions, press releases, and even journalism. SEO content farms — websites that publish AI-generated articles to capture search traffic — have proliferated, further compressing rates for human writers doing similar work.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">The UK copyright debate</h2>
          <p>
            In 2024, the UK government consulted on expanding the "text and data mining" exception to copyright — which would allow AI companies to train on copyrighted material without permission unless rights holders explicitly opt out. This proposal was met with fierce opposition from virtually all UK creative industry organisations: the Musicians' Union, the Authors' Guild, the Association of Illustrators, UK music labels, and major publishers.
          </p>
          <p>
            The core argument against: AI companies would benefit commercially from ingesting decades of human creative work without paying for it. The opt-out mechanism would require millions of individual rights holders to actively protect their work — a practical impossibility for most.
          </p>
          <p>
            As of 2025, the UK position remains unresolved, with the government committed to finding a "workable solution" that balances AI industry interests with creator rights. Similar battles are playing out in the EU, the US, and internationally.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Who is most affected and how creatives are adapting</h2>
          <p>
            The clearest economic impact is at the volume, commodity end of creative markets: stock illustration, generic background music, templated copywriting. These are jobs where buyers have historically prioritised cost over distinctive style. AI can now do this work cheaply and instantly.
          </p>
          <p>
            Experienced professionals with strong personal styles, established client relationships, and the ability to direct and edit AI output are better positioned. Many are adapting by incorporating AI tools into their workflow: using AI to generate rough drafts, reference images, or background elements — and applying their craft to the decisions that require human taste and judgement.
          </p>
          <p>
            The concern is that AI will erode the entry-level and mid-market work that has historically been how creative careers are built. If there is no market for the work that teaches craft at scale, the pool of skilled senior professionals may shrink over time.
          </p>
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <LessonNote lessonId={lessonId} />

        <Quiz lessonId={lessonId} questions={quizQuestions} />

        <LessonRating lessonId={lessonId} />
        <LessonFeedback lessonId={lessonId} />

        <RelatedLessons currentId={lessonId} />
        <NextLesson currentId={lessonId} />
      </div>
    </div>
  )
}
