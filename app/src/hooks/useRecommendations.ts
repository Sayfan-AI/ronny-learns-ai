/**
 * Returns up to 3 lesson recommendations for returning visitors,
 * based on which lessons they have already visited.
 *
 * Rules (deterministic, no LLM):
 * 1. Never recommend a lesson the user has already visited.
 * 2. Prefer unvisited lessons from the same section(s) the user has started.
 * 3. Fall back to the next unvisited lessons in canonical learning-path order.
 */

const VISITED_KEY = 'ronny-visited-modules'

interface RecommendedLesson {
  id: string
  icon: string
  title: string
  path: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  sectionIndex: number
}

// All lessons in canonical order with section index for grouping
const ALL_LESSONS: RecommendedLesson[] = [
  // Section 0: Getting started
  { id: 'github-signup',         icon: '&#x1F511;', title: 'Create your GitHub account',                   path: '/tutorial/github-signup',           difficulty: 'Beginner',     sectionIndex: 0 },
  { id: 'github-basics',         icon: '&#x1F4C1;', title: 'What is GitHub for?',                          path: '/learn/github-basics',              difficulty: 'Beginner',     sectionIndex: 0 },
  { id: 'what-is-api',           icon: '&#x1F50C;', title: 'What is an API?',                              path: '/learn/what-is-api',                difficulty: 'Intermediate', sectionIndex: 0 },
  // Section 1: Understanding AI
  { id: 'what-is-ai',            icon: '&#x1F916;', title: 'What is AI?',                                  path: '/learn/what-is-ai',                 difficulty: 'Beginner',     sectionIndex: 1 },
  { id: 'what-is-ml',            icon: '&#x1F4CA;', title: 'What is machine learning?',                    path: '/learn/what-is-machine-learning',   difficulty: 'Intermediate', sectionIndex: 1 },
  { id: 'how-ai-training-works', icon: '&#x1F9EA;', title: 'How does AI training work?',                   path: '/learn/how-ai-training-works',      difficulty: 'Intermediate', sectionIndex: 1 },
  { id: 'neural-network',        icon: '&#x1F9E0;', title: 'What is a neural network?',                    path: '/learn/neural-network',             difficulty: 'Advanced',     sectionIndex: 1 },
  { id: 'language-models',       icon: '&#x1F4AC;', title: 'How do language models work?',                 path: '/learn/language-models',            difficulty: 'Advanced',     sectionIndex: 1 },
  { id: 'how-chatbots-work',     icon: '&#x1F4AC;', title: 'How do chatbots work?',                        path: '/learn/how-chatbots-work',          difficulty: 'Beginner',     sectionIndex: 1 },
  { id: 'ai-history',            icon: '&#x23F3;',  title: 'The history of AI',                            path: '/ai-history',                       difficulty: 'Beginner',     sectionIndex: 1 },
  { id: 'ai-everyday-life',      icon: '&#x1F30D;', title: 'AI in everyday life',                          path: '/learn/ai-everyday-life',           difficulty: 'Beginner',     sectionIndex: 1 },
  // Section 2: AI and society
  { id: 'ai-pros-and-cons',      icon: '&#x2696;&#xFE0F;', title: 'AI: the good and the bad',             path: '/learn/ai-pros-and-cons',           difficulty: 'Beginner',     sectionIndex: 2 },
  { id: 'ai-bias',               icon: '&#x2696;&#xFE0F;', title: 'What is AI bias?',                      path: '/learn/ai-bias',                    difficulty: 'Intermediate', sectionIndex: 2 },
  { id: 'ai-safety',             icon: '&#x1F6E1;&#xFE0F;', title: 'AI safety and alignment',             path: '/learn/ai-safety',                  difficulty: 'Intermediate', sectionIndex: 2 },
  { id: 'prompt-engineering',    icon: '&#x270F;&#xFE0F;', title: 'What is prompt engineering?',          path: '/learn/prompt-engineering',         difficulty: 'Intermediate', sectionIndex: 2 },
  { id: 'trusting-ai',           icon: '&#x1F50D;', title: 'Can I trust what AI says?',                    path: '/learn/trusting-ai',                difficulty: 'Intermediate', sectionIndex: 2 },
  { id: 'ai-and-jobs',           icon: '&#x1F4BC;', title: 'AI and jobs',                                  path: '/learn/ai-and-jobs',                difficulty: 'Beginner',     sectionIndex: 2 },
  { id: 'ai-and-creativity',     icon: '&#x1F3A8;', title: 'AI and creativity',                            path: '/learn/ai-and-creativity',          difficulty: 'Beginner',     sectionIndex: 2 },
  { id: 'ai-in-healthcare',      icon: '&#x1FA7A;', title: 'AI in healthcare',                             path: '/learn/ai-in-healthcare',           difficulty: 'Intermediate', sectionIndex: 2 },
  { id: 'ai-and-environment',    icon: '&#x1F331;', title: 'AI and the environment',                       path: '/learn/ai-and-environment',         difficulty: 'Intermediate', sectionIndex: 2 },
  { id: 'ai-and-privacy',        icon: '&#x1F512;', title: 'AI and privacy',                               path: '/learn/ai-and-privacy',             difficulty: 'Intermediate', sectionIndex: 2 },
  { id: 'ai-and-education',      icon: '&#x1F393;', title: 'AI and education',                             path: '/learn/ai-and-education',           difficulty: 'Beginner',     sectionIndex: 2 },
  { id: 'ai-and-misinformation', icon: '&#x1F50E;', title: 'AI and misinformation',                        path: '/learn/ai-and-misinformation',      difficulty: 'Intermediate', sectionIndex: 2 },
  { id: 'ai-and-mental-health',  icon: '&#x1F9E0;', title: 'AI and your mental health',                    path: '/learn/ai-and-mental-health',       difficulty: 'Beginner',     sectionIndex: 2 },
  { id: 'future-of-ai',          icon: '&#x1F52D;', title: 'What does the future of AI look like?',        path: '/learn/future-of-ai',               difficulty: 'Intermediate', sectionIndex: 2 },
  // Section 3: How software is built
  { id: 'genesis-system',        icon: '&#x2699;&#xFE0F;', title: 'What is the Genesis system?',          path: '/learn/genesis-system',             difficulty: 'Beginner',     sectionIndex: 3 },
  { id: 'how-this-was-built',    icon: '&#x1F528;', title: 'How this app was built',                       path: '/learn/how-this-was-built',         difficulty: 'Intermediate', sectionIndex: 3 },
  { id: 'what-is-ci-cd',         icon: '&#x1F680;', title: 'How does the website update automatically?',   path: '/learn/what-is-ci-cd',              difficulty: 'Advanced',     sectionIndex: 3 },
  { id: 'version-control',       icon: '&#x1F4BE;', title: 'How does version control work?',               path: '/learn/what-is-version-control',    difficulty: 'Advanced',     sectionIndex: 3 },
  { id: 'pull-request',          icon: '&#x1F4CB;', title: 'What is a pull request?',                      path: '/learn/what-is-a-pull-request',     difficulty: 'Advanced',     sectionIndex: 3 },
  { id: 'meet-the-agents',       icon: '&#x1F465;', title: 'Meet the AI agents',                           path: '/agents',                           difficulty: 'Beginner',     sectionIndex: 3 },
  // Additional lessons added in later milestones
  { id: 'ai-in-your-apps',        icon: '&#x1F4F1;', title: 'AI in the apps you already use',              path: '/learn/ai-in-your-apps',            difficulty: 'Beginner',     sectionIndex: 1 },
  { id: 'ai-for-accessibility',   icon: '&#x267F;',  title: 'AI for accessibility',                         path: '/learn/ai-for-accessibility',       difficulty: 'Beginner',     sectionIndex: 2 },
  { id: 'ai-and-social-media',    icon: '&#x1F4F2;', title: 'AI and social media',                          path: '/learn/ai-and-social-media',        difficulty: 'Beginner',     sectionIndex: 2 },
  { id: 'ai-and-scientific-research', icon: '&#x1F52C;', title: 'AI and scientific research',              path: '/learn/ai-and-scientific-research', difficulty: 'Intermediate', sectionIndex: 2 },
  { id: 'ai-productivity-tools',  icon: '&#x26A1;',  title: 'AI and your productivity',                     path: '/learn/ai-productivity-tools',      difficulty: 'Beginner',     sectionIndex: 2 },
  { id: 'ai-laws-and-rights',     icon: '&#x2696;&#xFE0F;', title: 'AI, laws, and your rights',            path: '/learn/ai-laws-and-rights',         difficulty: 'Intermediate', sectionIndex: 2 },
  { id: 'ai-and-copyright',       icon: '&#x2696;&#xFE0F;', title: 'AI and the law',                       path: '/learn/ai-and-copyright',           difficulty: 'Intermediate', sectionIndex: 2 },
  { id: 'how-to-use-ai-safely',   icon: '&#x1F6E1;&#xFE0F;', title: 'How to use AI safely',               path: '/learn/how-to-use-ai-safely',       difficulty: 'Beginner',     sectionIndex: 2 },
  { id: 'ai-and-money',           icon: '&#x1F4B0;', title: 'AI and money',                                 path: '/learn/ai-and-money',               difficulty: 'Intermediate', sectionIndex: 2 },
  { id: 'ai-and-democracy',       icon: '&#x1F3DB;&#xFE0F;', title: 'AI and democracy',                   path: '/learn/ai-and-democracy',           difficulty: 'Intermediate', sectionIndex: 2 },
  { id: 'ai-and-language',        icon: '&#x1F5E3;&#xFE0F;', title: 'AI and language',                    path: '/learn/ai-and-language',            difficulty: 'Beginner',     sectionIndex: 2 },
  { id: 'ai-and-food',            icon: '&#x1F33F;', title: 'AI and food',                                  path: '/learn/ai-and-food',                difficulty: 'Beginner',     sectionIndex: 2 },
  { id: 'ai-and-sport',           icon: '&#x26BD;',  title: 'AI and sport',                                 path: '/learn/ai-and-sport',               difficulty: 'Intermediate', sectionIndex: 2 },
  { id: 'ai-and-transport',       icon: '&#x1F697;', title: 'AI and transport',                             path: '/learn/ai-and-transport',           difficulty: 'Beginner',     sectionIndex: 2 },
  { id: 'ai-and-art',             icon: '&#x1F58C;&#xFE0F;', title: 'AI and art',                         path: '/learn/ai-and-art',                 difficulty: 'Intermediate', sectionIndex: 2 },
]

function loadVisitedIds(): Set<string> {
  try {
    const raw = localStorage.getItem(VISITED_KEY)
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

export interface Recommendation {
  id: string
  icon: string
  title: string
  path: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
}

/**
 * Returns up to 3 lesson recommendations for the current user.
 * Returns an empty array if the user has not visited any lessons yet.
 */
export function getRecommendations(): Recommendation[] {
  const visited = loadVisitedIds()

  // First-time visitor: no recommendations
  if (visited.size === 0) return []

  const unvisited = ALL_LESSONS.filter(l => !visited.has(l.id))

  // All done!
  if (unvisited.length === 0) return []

  // Find which section indices the user has already started
  const startedSections = new Set<number>()
  for (const lesson of ALL_LESSONS) {
    if (visited.has(lesson.id)) {
      startedSections.add(lesson.sectionIndex)
    }
  }

  // Priority 1: unvisited lessons from sections the user has started
  const fromStartedSections = unvisited.filter(l => startedSections.has(l.sectionIndex))

  // Priority 2: unvisited lessons from sections not yet started (canonical order)
  const fromOtherSections = unvisited.filter(l => !startedSections.has(l.sectionIndex))

  const candidates = [...fromStartedSections, ...fromOtherSections]

  return candidates.slice(0, 3).map(({ id, icon, title, path, difficulty }) => ({
    id,
    icon,
    title,
    path,
    difficulty,
  }))
}
