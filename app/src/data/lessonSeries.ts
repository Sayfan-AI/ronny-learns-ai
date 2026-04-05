/**
 * Lesson series group related lessons together into named collections.
 * Used by the ContinueYourSeries component on the home page.
 */

export interface LessonSeries {
  id: string
  name: string
  description: string
  icon: string
  lessonIds: string[]
}

export const LESSON_SERIES: LessonSeries[] = [
  {
    id: 'ai-fundamentals',
    name: 'AI Fundamentals',
    description: 'Start here — learn how AI actually works under the hood.',
    icon: '🧠',
    lessonIds: [
      'what-is-ai',
      'what-is-ml',
      'how-ai-training-works',
      'neural-network',
      'language-models',
      'how-chatbots-work',
    ],
  },
  {
    id: 'ai-in-society',
    name: 'AI in Society',
    description: 'How AI is shaping the world we live in — for better and worse.',
    icon: '🌍',
    lessonIds: [
      'ai-everyday-life',
      'ai-pros-and-cons',
      'ai-bias',
      'ai-safety',
      'future-of-ai',
    ],
  },
  {
    id: 'ai-and-work',
    name: 'AI and Work',
    description: 'AI in the workplace — jobs, hiring, productivity, and gig work.',
    icon: '💼',
    lessonIds: [
      'ai-and-jobs',
      'ai-and-hiring',
      'ai-and-the-workplace',
      'ai-productivity-tools',
      'ai-and-mental-wellbeing-at-work',
      'ai-and-gig-economy',
    ],
  },
  {
    id: 'ai-and-health',
    name: 'AI and Health',
    description: 'From the NHS to mental health apps — AI across healthcare.',
    icon: '🏥',
    lessonIds: [
      'ai-in-healthcare',
      'ai-and-the-nhs',
      'ai-and-mental-health',
      'ai-and-mental-health-apps',
      'ai-and-drug-discovery',
      'ai-and-genetics',
      'ai-and-sleep',
    ],
  },
  {
    id: 'ai-rights-and-safety',
    name: 'AI, Rights and Safety',
    description: 'Privacy, laws, scams, and staying safe in an AI world.',
    icon: '🛡️',
    lessonIds: [
      'ai-and-privacy',
      'ai-laws-and-rights',
      'ai-and-copyright',
      'how-to-use-ai-safely',
      'ai-and-scams',
      'trusting-ai',
      'ai-and-misinformation',
    ],
  },
  {
    id: 'ai-and-creative-arts',
    name: 'AI and the Creative Arts',
    description: 'AI in art, music, writing, photography, and more.',
    icon: '🎨',
    lessonIds: [
      'ai-and-creativity',
      'ai-and-art',
      'ai-and-music',
      'ai-and-photography',
      'ai-and-creative-writing',
      'ai-and-gaming',
      'ai-and-film-and-tv',
    ],
  },
  {
    id: 'ai-and-education',
    name: 'AI and Education',
    description: 'Learning, tutoring, EdTech, and AI in schools and universities.',
    icon: '📚',
    lessonIds: [
      'ai-and-education',
      'ai-and-edtech',
      'ai-and-language-learning',
      'ai-and-adult-education',
    ],
  },
  {
    id: 'ai-and-environment',
    name: 'AI and the Environment',
    description: 'Climate change, energy, water, and the ocean — AI in nature.',
    icon: '🌱',
    lessonIds: [
      'ai-and-climate-change',
      'ai-and-the-environment',
      'ai-and-energy',
      'ai-and-water',
      'ai-and-the-ocean',
    ],
  },
]
