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

const LESSON_TITLE = 'AI and sport nutrition — personalised plans, calorie tracking, gut microbiome AI, and the risks of algorithmic advice'

const KEY_TAKEAWAYS = [
  'AI nutrition apps like Zoe and Noom use machine learning to personalise dietary advice based on individual responses to food, gut microbiome data, and continuous glucose monitoring — going beyond generic dietary guidelines.',
  'Calorie-counting apps increasingly use AI image recognition to estimate nutritional content from food photos, making logging faster but introducing accuracy errors that users often do not recognise.',
  'Elite sports teams use AI to optimise athlete nutrition: timing of carbohydrates around training, hydration monitoring, and recovery nutrition — informed by biometric data from wearables.',
  'Gut microbiome AI is an emerging area where machine learning analyses the hundreds of bacterial species in the gut to predict individual food responses, but the science is still early-stage and commercial claims sometimes outrun the evidence.',
  'The biggest risk is over-reliance on algorithmic nutrition advice, particularly for people with eating disorders or complex health conditions, where AI tools are not a substitute for professional dietetic advice.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What makes AI nutrition programmes like Zoe different from traditional dietary advice?',
    options: [
      'They are the only nutrition services approved by the NHS for use by the general public',
      'They personalise recommendations based on individual responses — including gut microbiome testing and continuous glucose monitoring — rather than applying population-level guidelines',
      'They guarantee weight loss by restricting all users to the same calorie target',
      'They replace the need for any human dietitian or nutritionist for all users',
    ],
    correctIndex: 1,
    explanation: 'Zoe and similar programmes use individual biological data to personalise advice, recognising that people respond differently to the same foods — something population guidelines cannot account for.',
  },
  {
    question: 'What is the main accuracy limitation of AI food photo recognition in calorie tracking apps?',
    options: [
      'The apps can only recognise food items from a list of 50 pre-approved meals',
      'Photo recognition works well for packaged foods but struggles with home-cooked meals, restaurant dishes, and mixed plates',
      'The apps require an internet connection to process images and fail in areas with poor signal',
      'Food recognition AI only functions in daylight conditions and cannot process photos taken in restaurants',
    ],
    correctIndex: 1,
    explanation: 'AI food recognition struggles to estimate portion sizes accurately and to identify the ingredients in mixed dishes, home-cooked meals, and restaurant food — leading to calorie estimates that can be significantly off.',
  },
  {
    question: 'How are elite sports teams using AI in athlete nutrition?',
    options: [
      'AI systems automatically prepare and deliver meals to athletes without any human involvement',
      'Using wearable biometric data to personalise carbohydrate timing, hydration plans, and recovery nutrition around individual training loads',
      'AI has replaced all team dietitians in Premier League football clubs since 2022',
      'Teams use AI to set identical nutritional targets for all players regardless of their position or training demands',
    ],
    correctIndex: 1,
    explanation: 'Elite teams use data from GPS trackers, heart rate monitors, and blood markers to tailor nutrition to each athlete — for example, adjusting pre-training carbohydrate intake based on the planned training intensity.',
  },
  {
    question: 'What should someone with a history of eating disorders consider before using an AI nutrition app?',
    options: [
      'They should use AI apps as a first step before seeking professional help, since they are less intimidating',
      'AI nutrition apps are specifically designed for people with eating disorder histories and are clinically approved for this use',
      'Calorie tracking and food restriction features in AI apps can be harmful triggers and should only be used under professional supervision',
      'There are no specific concerns — AI nutrition apps are safe for everyone',
    ],
    correctIndex: 2,
    explanation: 'Clinicians and eating disorder charities (including Beat in the UK) warn that calorie-tracking features can reinforce harmful behaviours. People with eating disorder histories should always consult a specialist dietitian.',
  },
  {
    question: 'What is "gut microbiome AI" and why should users be cautious about commercial claims?',
    options: [
      'Gut microbiome AI is a government-developed tool that provides NHS-approved dietary advice based on stool samples',
      'Machine learning analysis of gut bacteria that can accurately predict every individual\'s optimal diet with 100% certainty',
      'AI analysis of gut bacteria composition to personalise dietary advice — promising but still early-stage science where commercial product claims sometimes go beyond what the research supports',
      'A fictional concept from science fiction that has not yet been developed as a real product',
    ],
    correctIndex: 2,
    explanation: 'Gut microbiome research is a legitimate and growing field, but the science connecting specific bacterial profiles to individual food responses is still developing. Some commercial products make stronger claims than the current evidence supports.',
  },
]

export function AIAndSportNutrition() {
  const lessonId = 'ai-and-sport-nutrition'
  useMarkVisited(lessonId)

  return (
    <div className="min-h-screen bg-gradient-to-b from-lime-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-3">
          <div className="text-5xl mb-2">&#x1F96C;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">AI and sport nutrition</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Personalised nutrition AI, calorie tracking apps, gut microbiome analysis, and the important limits of algorithmic dietary advice.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <span className="inline-block bg-lime-100 dark:bg-lime-900 text-lime-700 dark:text-lime-300 text-xs font-semibold px-3 py-1 rounded-full">Intermediate</span>
            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">6 min read</span>
          </div>
        </div>

        <CompletedBadge lessonId={lessonId} />

        <div className="flex justify-end gap-2">
          <ReviewLaterButton lessonId={lessonId} />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Nutrition meets machine learning</h2>
          <p>
            Nutrition science has long struggled with a fundamental problem: general dietary guidelines work for populations but not reliably for individuals. Two people can eat the same meal and have completely different blood glucose responses, gut reactions, and long-term health outcomes. AI is beginning to change this, at least for those who can afford it.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Personalised nutrition: Zoe and continuous monitoring</h2>
          <p>
            <strong>Zoe</strong> — a UK-based nutrition programme co-founded by Tim Spector from King's College London — uses a combination of gut microbiome testing (from stool samples), continuous glucose monitoring (CGM), and blood fat testing to build a personalised nutrition model for each user. Machine learning analyses your gut bacteria profile and your glucose and fat responses to specific foods to generate personalised food scores.
          </p>
          <p>
            The approach has genuine scientific backing: Zoe's large-scale PREDICT study has produced peer-reviewed research showing that individual responses to identical meals vary enormously. The app is legitimate science made accessible — though at a cost that makes it inaccessible to many.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Calorie tracking: convenient but imprecise</h2>
          <p>
            Apps like <strong>MyFitnessPal</strong>, <strong>Lose It</strong>, and increasingly <strong>Noom</strong> use AI image recognition to estimate nutritional content from photos. Rather than searching a database, you take a picture of your meal and the AI estimates what it is and how much of it there is.
          </p>
          <p>
            This is more convenient than manual entry but less accurate. AI struggles particularly with portion estimation, mixed dishes, and restaurant food where preparation methods vary. Research has shown that photo-based calorie estimates can be off by 20–40% — a significant margin for anyone using calorie counting to manage weight.
          </p>
          <p>
            A more serious concern: for users with eating disorders or disordered eating patterns, precise calorie tracking — however convenient — can reinforce harmful relationships with food. UK eating disorder charity Beat recommends against calorie-tracking apps for people in recovery.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Elite sport: nutrition as a performance variable</h2>
          <p>
            In professional sport, nutrition has long been taken seriously — but AI is allowing teams to move from group protocols to individual optimisation. Premier League football clubs, cycling teams, and national athletics squads use GPS data, heart rate monitors, and blood biomarker tests to adjust nutritional plans individually.
          </p>
          <p>
            The key application is carbohydrate timing: adjusting pre-training carbohydrate intake based on the planned session intensity, and managing recovery nutrition window timing based on what the biometric data shows about an athlete's depletion and recovery rate.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Gut microbiome AI: science and commercial hype</h2>
          <p>
            The gut microbiome — the community of bacteria, fungi, and other microorganisms in your digestive tract — influences everything from immune function to mood. AI analysis of microbiome samples is generating real scientific insights. But some commercial products have run ahead of the evidence, claiming to personalise diets based on microbiome profiles in ways that current science cannot reliably support.
          </p>
          <p>
            The honest state of the field: microbiome science is advancing rapidly, individual variation is real and significant, and AI is a valuable tool for analysis. But specific claims about what your microbiome means for your diet should be treated with appropriate scepticism, and a registered dietitian remains the gold standard for clinical dietary advice.
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
