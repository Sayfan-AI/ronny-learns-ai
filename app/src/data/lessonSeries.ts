export interface LessonSeries {
  slug: string
  name: string
  description: string
  icon: string
  lessonIds: string[]
}

export const LESSON_SERIES: LessonSeries[] = [
  {
    slug: 'ai-in-everyday-life',
    name: 'AI in everyday life',
    description: 'How AI shows up in your home, kitchen, travel, shopping, and daily routines.',
    icon: '&#x1F3E0;',
    lessonIds: [
      'ai-everyday-life',
      'ai-and-cooking',
      'ai-and-food',
      'ai-and-smart-homes',
      'ai-and-sleep',
      'ai-and-pets',
      'ai-and-fitness-apps',
      'ai-and-travel',
      'ai-and-retail',
      'ai-in-your-apps',
    ],
  },
  {
    slug: 'ai-at-work',
    name: 'AI at work',
    description: 'How AI is changing jobs, workplaces, hiring, finance, and industry.',
    icon: '&#x1F4BC;',
    lessonIds: [
      'ai-and-jobs',
      'ai-and-the-workplace',
      'ai-and-hiring',
      'ai-and-manufacturing',
      'ai-and-supply-chains',
      'ai-and-logistics',
      'ai-and-personal-finance',
      'ai-and-banking',
      'ai-productivity-tools',
      'ai-and-advertising',
    ],
  },
  {
    slug: 'ai-and-society',
    name: 'AI and society',
    description: 'The bigger picture — AI\'s impact on law, democracy, safety, and the future.',
    icon: '&#x1F30D;',
    lessonIds: [
      'ai-bias',
      'ai-safety',
      'trusting-ai',
      'ai-and-misinformation',
      'ai-laws-and-rights',
      'ai-and-the-law',
      'ai-and-policing',
      'ai-and-elections',
      'ai-and-democracy',
      'ai-and-cybercrime',
      'ai-and-scams',
    ],
  },
  {
    slug: 'ai-in-health-and-science',
    name: 'AI in health and science',
    description: 'AI in medicine, research, genetics, mental health, and the natural world.',
    icon: '&#x1F9EC;',
    lessonIds: [
      'ai-in-healthcare',
      'ai-and-the-nhs',
      'ai-and-drug-discovery',
      'ai-and-genetics',
      'ai-and-mental-health',
      'ai-and-mental-health-apps',
      'ai-and-scientific-research',
      'ai-and-disability',
      'ai-for-accessibility',
    ],
  },
  {
    slug: 'ai-and-the-world',
    name: 'AI and the world',
    description: 'Climate, environment, space, transport, and the planet we live on.',
    icon: '&#x1F4A1;',
    lessonIds: [
      'ai-and-climate-change',
      'ai-and-the-environment',
      'ai-and-environment',
      'ai-and-the-ocean',
      'ai-and-water',
      'ai-and-transport',
      'ai-and-autonomous-vehicles',
      'ai-and-space-exploration',
      'ai-and-energy',
    ],
  },
]
