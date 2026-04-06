import type { QuizQuestion } from '../components/Quiz'

export interface BankedQuestion extends QuizQuestion {
  lessonId: string
  lessonTitle: string
}

// A curated selection of questions from completed lessons.
// Add new lesson questions here when lessons are created.
export const QUIZ_BANK: BankedQuestion[] = [
  // --- What is AI? ---
  {
    lessonId: 'what-is-ai',
    lessonTitle: 'What is AI?',
    question: 'What does "artificial intelligence" actually mean?',
    options: [
      'A physical robot that can think and feel like a human',
      'Software that can perform tasks which normally require human intelligence, like understanding language or recognising images',
      'A supercomputer that stores every fact ever written down',
      'A program that can only follow exact, pre-written rules with no ability to adapt',
    ],
    correctIndex: 1,
    explanation: 'AI is software that can perform tasks requiring human-like intelligence. It is not a physical robot, nor a database, nor a rigid rule-following program.',
  },
  // --- AI bias ---
  {
    lessonId: 'ai-bias',
    lessonTitle: 'What is AI bias?',
    question: 'Where does AI bias most often come from?',
    options: [
      'Deliberate programming by engineers who want the AI to be unfair',
      'The training data, which may reflect historical inequalities or be unrepresentative of some groups',
      'The speed of the computer running the AI — slower computers produce more biased results',
      'AI bias only occurs in facial recognition, not in other AI applications',
    ],
    correctIndex: 1,
    explanation: 'AI learns from training data. If that data reflects historical biases or underrepresents certain groups, the AI learns and perpetuates those patterns — not because anyone intended it, but because the data contained it.',
  },
  // --- AI safety ---
  {
    lessonId: 'ai-safety',
    lessonTitle: 'AI safety and alignment',
    question: 'What is the "alignment problem" in AI safety?',
    options: [
      'The difficulty of making different AI systems work together on the same hardware',
      'The challenge of ensuring AI systems actually do what humans intend, rather than finding unintended shortcuts to achieve their objectives',
      'The problem of aligning the political views of AI researchers with government policy',
      'The technical challenge of keeping AI systems up to date with current events',
    ],
    correctIndex: 1,
    explanation: "The alignment problem refers to the gap between what we tell an AI to do and what we actually want it to do. An AI optimising for a simple goal might find unintended ways to achieve it that violate our deeper intentions.",
  },
  // --- Trusting AI ---
  {
    lessonId: 'trusting-ai',
    lessonTitle: 'Can I trust what AI says?',
    question: 'What is an AI "hallucination"?',
    options: [
      'When an AI becomes confused and stops responding',
      'When an AI generates false or fabricated information confidently, as if it were true',
      'When an AI displays visual images that look distorted or dreamlike',
      'A technical term for an AI that has been deliberately trained to mislead users',
    ],
    correctIndex: 1,
    explanation: "AI hallucination describes the tendency of language models to generate plausible-sounding but factually incorrect information — citing non-existent studies, inventing quotes, or stating false facts with complete confidence.",
  },
  // --- AI and healthcare ---
  {
    lessonId: 'ai-in-healthcare',
    lessonTitle: 'AI in healthcare',
    question: 'What did AlphaFold achieve that was considered a major scientific breakthrough?',
    options: [
      "It diagnosed a rare disease that had stumped doctors for over a decade, using only a patient's symptoms",
      'It predicted the 3D structures of nearly all known proteins — solving a problem that had stumped biologists for 50 years',
      'It performed the first fully autonomous surgical procedure without a human surgeon in the operating theatre',
      'It discovered a vaccine for a new virus strain in under 24 hours, compared to years for traditional methods',
    ],
    correctIndex: 1,
    explanation: "Proteins fold into specific 3D shapes that determine their function. Predicting those shapes from the underlying amino acid sequence was a 50-year unsolved problem in biology. DeepMind's AlphaFold solved it in 2020, predicting the structure of almost every known protein.",
  },
]
