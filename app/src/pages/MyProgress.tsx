import { Link } from '@tanstack/react-router'
import { useState, useRef, useCallback } from 'react'
import { loadLessonTimestamps } from '../hooks/useMarkVisited'
import { useProfile } from '../hooks/useProfile'
import { useAchievements } from '../hooks/useAchievements'
import { recordVisitAndGetStreak, type StreakData } from '../hooks/useStreak'
import { computeBadges, type Badge } from '../hooks/useBadges'
import { loadVisitCounts } from '../hooks/useLessonVisit'
import { loadAllNotes } from '../components/LessonNote'
import { loadAllReviewLater } from '../hooks/useReviewLater'
import { countHelpfulLessons } from '../components/LessonFeedback'
import { loadWeeklyGoal, saveWeeklyGoal, type WeeklyGoalData } from '../hooks/useWeeklyGoal'
import { StreakCalendar } from '../components/StreakCalendar'
import { useLearningCalendar } from '../hooks/useLearningCalendar'
import { LearningStatsCard } from '../components/LearningStatsCard'
import { TopicCompletionTracker } from '../components/TopicCompletionTracker'
import { EstimatedCompletion } from '../components/EstimatedCompletion'
import { LESSON_SERIES } from '../data/lessonSeries'

// Lessons that have quizzes (ordered as they appear in the curriculum)
const LESSONS_WITH_QUIZZES: Array<{ id: string; title: string; to: string }> = [
  { id: 'what-is-ai',             title: 'What is AI?',                               to: '/learn/what-is-ai' },
  { id: 'what-is-ml',             title: 'What is machine learning?',                 to: '/learn/what-is-machine-learning' },
  { id: 'how-ai-training-works',  title: 'How does AI training work?',                to: '/learn/how-ai-training-works' },
  { id: 'neural-network',         title: 'What is a neural network?',                 to: '/learn/neural-network' },
  { id: 'language-models',        title: 'How do language models work?',              to: '/learn/language-models' },
  { id: 'how-chatbots-work',      title: 'How do chatbots work?',                     to: '/learn/how-chatbots-work' },
  { id: 'ai-everyday-life',       title: 'AI in everyday life',                       to: '/learn/ai-everyday-life' },
  { id: 'ai-pros-and-cons',       title: 'AI: the good and the bad',                  to: '/learn/ai-pros-and-cons' },
  { id: 'ai-bias',                title: 'What is AI bias?',                          to: '/learn/ai-bias' },
  { id: 'ai-safety',              title: 'AI safety and alignment',                   to: '/learn/ai-safety' },
  { id: 'prompt-engineering',     title: 'What is prompt engineering?',               to: '/learn/prompt-engineering' },
  { id: 'trusting-ai',            title: 'Can I trust what AI says?',                 to: '/learn/trusting-ai' },
  { id: 'ai-and-jobs',            title: 'AI and jobs',                               to: '/learn/ai-and-jobs' },
  { id: 'ai-and-creativity',      title: 'AI and creativity',                         to: '/learn/ai-and-creativity' },
  { id: 'ai-in-healthcare',       title: 'AI in healthcare',                          to: '/learn/ai-in-healthcare' },
  { id: 'ai-and-environment',     title: 'AI and the environment',                    to: '/learn/ai-and-environment' },
  { id: 'ai-and-privacy',         title: 'AI and privacy',                            to: '/learn/ai-and-privacy' },
  { id: 'ai-and-education',       title: 'AI and education',                          to: '/learn/ai-and-education' },
  { id: 'ai-and-misinformation',  title: 'AI and misinformation',                    to: '/learn/ai-and-misinformation' },
  { id: 'ai-and-mental-health',   title: 'AI and mental health',                     to: '/learn/ai-and-mental-health' },
  { id: 'future-of-ai',           title: 'What does the future of AI look like?',    to: '/learn/future-of-ai' },
  { id: 'ai-in-your-apps',        title: 'AI in the apps you already use',           to: '/learn/ai-in-your-apps' },
  { id: 'ai-laws-and-rights',     title: 'AI, laws, and your rights',                to: '/learn/ai-laws-and-rights' },
  { id: 'ai-and-social-media',    title: 'AI and social media',                      to: '/learn/ai-and-social-media' },
  { id: 'ai-for-accessibility',   title: 'AI for accessibility',                     to: '/learn/ai-for-accessibility' },
  { id: 'ai-and-scientific-research', title: 'AI and scientific research',           to: '/learn/ai-and-scientific-research' },
  { id: 'ai-productivity-tools',  title: 'AI and your productivity',                 to: '/learn/ai-productivity-tools' },
  { id: 'ai-and-copyright',       title: 'AI and the law',                           to: '/learn/ai-and-copyright' },
  { id: 'how-to-use-ai-safely',   title: 'How to use AI safely',                     to: '/learn/how-to-use-ai-safely' },
  { id: 'ai-and-money',           title: 'AI and money',                             to: '/learn/ai-and-money' },
  { id: 'ai-and-democracy',       title: 'AI and democracy',                         to: '/learn/ai-and-democracy' },
  { id: 'ai-and-language',        title: 'AI and language',                          to: '/learn/ai-and-language' },
  { id: 'ai-and-food',            title: 'AI and food',                              to: '/learn/ai-and-food' },
  { id: 'ai-and-sport',           title: 'AI and sport',                             to: '/learn/ai-and-sport' },
  { id: 'ai-and-transport',       title: 'AI and transport',                         to: '/learn/ai-and-transport' },
  { id: 'ai-and-art',             title: 'AI and art',                               to: '/learn/ai-and-art' },
  { id: 'ai-and-cybersecurity',   title: 'AI and cybersecurity',                     to: '/learn/ai-and-cybersecurity' },
  { id: 'ai-and-space',           title: 'AI and space',                             to: '/learn/ai-and-space' },
  { id: 'ai-and-climate-change',  title: 'AI and climate change',                   to: '/learn/ai-and-climate-change' },
  { id: 'ai-and-music',           title: 'AI and music',                             to: '/learn/ai-and-music' },
  { id: 'ai-and-robotics',        title: 'AI and robotics',                          to: '/learn/ai-and-robotics' },
  { id: 'ai-and-gaming',          title: 'AI and gaming',                            to: '/learn/ai-and-gaming' },
  { id: 'ai-and-journalism',      title: 'AI and journalism',                        to: '/learn/ai-and-journalism' },
  { id: 'ai-and-fashion',         title: 'AI and fashion',                           to: '/learn/ai-and-fashion' },
  { id: 'ai-and-agriculture',     title: 'AI and agriculture',                       to: '/learn/ai-and-agriculture' },
  { id: 'ai-and-mental-wellbeing-at-work', title: 'AI and mental wellbeing at work', to: '/learn/ai-and-mental-wellbeing-at-work' },
  { id: 'ai-and-retail',          title: 'AI and retail',                            to: '/learn/ai-and-retail' },
  { id: 'ai-and-children',        title: 'AI and children',                          to: '/learn/ai-and-children' },
  { id: 'ai-and-travel',          title: 'AI and travel',                            to: '/learn/ai-and-travel' },
  { id: 'ai-and-housing',         title: 'AI and housing',                           to: '/learn/ai-and-housing' },
  { id: 'ai-and-energy',          title: 'AI and energy',                            to: '/learn/ai-and-energy' },
  { id: 'ai-and-elderly-care',    title: 'AI and elderly care',                      to: '/learn/ai-and-elderly-care' },
  { id: 'ai-and-insurance',       title: 'AI and insurance',                         to: '/learn/ai-and-insurance' },
  { id: 'ai-and-policing',        title: 'AI and policing',                          to: '/learn/ai-and-policing' },
  { id: 'ai-and-the-nhs',             title: 'AI and the NHS',                      to: '/learn/ai-and-the-nhs' },
  { id: 'ai-and-hiring',              title: 'AI and hiring',                       to: '/learn/ai-and-hiring' },
  { id: 'ai-and-customer-service',    title: 'AI and customer service',             to: '/learn/ai-and-customer-service' },
  { id: 'ai-and-weather',             title: 'AI and the weather',                  to: '/learn/ai-and-weather' },
  { id: 'ai-and-the-environment',     title: 'AI and the environment',              to: '/learn/ai-and-the-environment' },
  { id: 'ai-and-the-law',             title: 'AI and the law',                      to: '/learn/ai-and-the-law' },
  { id: 'ai-and-relationships',        title: 'AI and relationships',                to: '/learn/ai-and-relationships' },
  { id: 'ai-and-creative-writing',     title: 'AI and creative writing',             to: '/learn/ai-and-creative-writing' },
  { id: 'ai-and-photography',          title: 'AI and photography',                  to: '/learn/ai-and-photography' },
  { id: 'ai-and-mental-health-apps',   title: 'AI and mental health apps',           to: '/learn/ai-and-mental-health-apps' },
  { id: 'ai-and-scams',                title: 'AI and scams',                        to: '/learn/ai-and-scams' },
  { id: 'ai-and-pets',                 title: 'AI and pets',                         to: '/learn/ai-and-pets' },
  { id: 'ai-and-fitness-apps',         title: 'AI and fitness apps',                 to: '/learn/ai-and-fitness-apps' },
  { id: 'ai-and-disability',           title: 'AI and disability',                   to: '/learn/ai-and-disability' },
  { id: 'ai-and-elections',            title: 'AI and elections',                    to: '/learn/ai-and-elections' },
  { id: 'ai-and-banking',              title: 'AI and banking',                      to: '/learn/ai-and-banking' },
  { id: 'ai-and-manufacturing',        title: 'AI and manufacturing',                to: '/learn/ai-and-manufacturing' },
  { id: 'ai-and-drug-discovery',       title: 'AI and drug discovery',               to: '/learn/ai-and-drug-discovery' },
  { id: 'ai-and-sleep',                title: 'AI and sleep',                        to: '/learn/ai-and-sleep' },
  { id: 'ai-and-the-ocean',            title: 'AI and the ocean',                    to: '/learn/ai-and-the-ocean' },
  { id: 'ai-and-parenting',            title: 'AI and parenting',                    to: '/learn/ai-and-parenting' },
  { id: 'ai-and-language-learning',    title: 'AI and language learning',            to: '/learn/ai-and-language-learning' },
  { id: 'ai-and-the-workplace',        title: 'AI and the workplace',                to: '/learn/ai-and-the-workplace' },
  { id: 'ai-and-sport-analytics',      title: 'AI and sport analytics',              to: '/learn/ai-and-sport-analytics' },
  { id: 'ai-and-construction',         title: 'AI and construction',                 to: '/learn/ai-and-construction' },
  { id: 'ai-and-personal-finance',     title: 'AI and personal finance',             to: '/learn/ai-and-personal-finance' },
  { id: 'ai-and-cooking',              title: 'AI and cooking',                      to: '/learn/ai-and-cooking' },
  { id: 'ai-and-genetics',             title: 'AI and genetics',                     to: '/learn/ai-and-genetics' },
  { id: 'ai-and-cybercrime',           title: 'AI and cybercrime',                   to: '/learn/ai-and-cybercrime' },
  { id: 'ai-and-space-exploration',    title: 'AI and space exploration',            to: '/learn/ai-and-space-exploration' },
  { id: 'ai-and-autonomous-vehicles',  title: 'AI and autonomous vehicles',          to: '/learn/ai-and-autonomous-vehicles' },
  { id: 'ai-and-3d-printing',          title: 'AI and 3D printing',                  to: '/learn/ai-and-3d-printing' },
  { id: 'ai-and-translation',          title: 'AI and translation',                  to: '/learn/ai-and-translation' },
  { id: 'ai-and-logistics',            title: 'AI and logistics',                    to: '/learn/ai-and-logistics' },
  { id: 'ai-and-pregnancy-and-baby-care',       title: 'AI and pregnancy and baby care',      to: '/learn/ai-and-pregnancy-and-baby-care' },
  { id: 'ai-and-taxes-and-financial-admin',     title: 'AI and taxes and financial admin',    to: '/learn/ai-and-taxes-and-financial-admin' },
  { id: 'ai-and-real-estate',          title: 'AI and real estate',                  to: '/learn/ai-and-real-estate' },
  { id: 'ai-and-social-care',          title: 'AI and social care',                  to: '/learn/ai-and-social-care' },
  { id: 'ai-and-shopping',             title: 'AI and shopping',                     to: '/learn/ai-and-shopping' },
  { id: 'ai-and-the-home',             title: 'AI and the home',                     to: '/learn/ai-and-the-home' },
  { id: 'ai-and-immigration',          title: 'AI and immigration',                  to: '/learn/ai-and-immigration' },
  { id: 'ai-and-dentistry',            title: 'AI and dentistry',                    to: '/learn/ai-and-dentistry' },
  { id: 'ai-and-nhs-waiting-lists',    title: 'AI and NHS waiting lists',            to: '/learn/ai-and-nhs-waiting-lists' },
  { id: 'ai-and-social-media-algorithms', title: 'AI and social media algorithms',  to: '/learn/ai-and-social-media-algorithms' },
  { id: 'ai-and-climate-activism',     title: 'AI and climate activism',             to: '/learn/ai-and-climate-activism' },
  { id: 'ai-and-sports-medicine',      title: 'AI and sports medicine',              to: '/learn/ai-and-sports-medicine' },
  { id: 'ai-and-fraud-and-identity-theft', title: 'AI and fraud and identity theft', to: '/learn/ai-and-fraud-and-identity-theft' },
]

interface QuizScoreEntry {
  id: string
  title: string
  to: string
  score: number
  total: number
  pct: number
}

function loadQuizScores(): { attempted: QuizScoreEntry[]; unattempted: Array<{ id: string; title: string; to: string }> } {
  let scores: Record<string, { score: number; total: number }> = {}
  try {
    const raw = localStorage.getItem('ronny-quiz-scores')
    if (raw) scores = JSON.parse(raw)
  } catch {
    // ignore
  }
  const attempted: QuizScoreEntry[] = []
  const unattempted: Array<{ id: string; title: string; to: string }> = []
  for (const lesson of LESSONS_WITH_QUIZZES) {
    const s = scores[lesson.id]
    if (s) {
      attempted.push({ ...lesson, score: s.score, total: s.total, pct: s.total > 0 ? Math.round((s.score / s.total) * 100) : 0 })
    } else {
      unattempted.push(lesson)
    }
  }
  attempted.sort((a, b) => b.pct - a.pct)
  return { attempted, unattempted }
}

const APP_URL = 'https://sayfan-ai.github.io/ronny-learns-ai/'

async function shareProgress(completedCount: number, total: number) {
  const text = `I have completed ${completedCount} of ${total} lessons on Ronny Learns AI! Check it out: ${APP_URL}`
  if (navigator.share) {
    try {
      await navigator.share({ title: 'My progress on Ronny Learns AI', text, url: APP_URL })
      return
    } catch {
      // fall through
    }
  }
  await navigator.clipboard.writeText(text)
}

function generateExportText(
  profile: { name: string; avatar: string } | null,
  visited: Set<string>,
  quizScores: { attempted: QuizScoreEntry[]; unattempted: Array<{ id: string; title: string; to: string }> },
  notes: Record<string, string>,
  achievements: Array<{ name: string; description: string; earned: boolean }>,
): string {
  const now = new Date()
  const dateStr = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  const lines: string[] = []

  lines.push('Ronny Learns AI — My Learning Summary')
  lines.push(`Generated: ${dateStr}`)
  lines.push(`Name: ${profile?.name ?? 'Not set'}`)
  lines.push('')

  const completedModules = ALL_MODULES.filter(m => visited.has(m.id))
  lines.push(`=== Completed Lessons (${completedModules.length} of ${ALL_MODULES.length}) ===`)
  completedModules.forEach((m, i) => {
    lines.push(`${i + 1}. ${m.title}`)
  })
  if (completedModules.length === 0) lines.push('None yet — start your first lesson!')
  lines.push('')

  lines.push('=== My Quiz Scores ===')
  if (quizScores.attempted.length === 0) {
    lines.push('No quiz scores yet.')
  } else {
    quizScores.attempted.forEach(entry => {
      const bar = `${entry.score}/${entry.total} (${entry.pct}%)`
      lines.push(`${entry.title.padEnd(50, '.')} ${bar}`)
    })
  }
  lines.push('')

  const noteEntries = Object.entries(notes).filter(([, v]) => v.trim())
  lines.push(`=== My Notes (${noteEntries.length} lessons with notes) ===`)
  if (noteEntries.length === 0) {
    lines.push('No notes yet.')
  } else {
    noteEntries.forEach(([id, text]) => {
      const module = ALL_MODULES.find(m => m.id === id)
      const title = module?.title ?? id
      lines.push(`[${title}]`)
      lines.push(text.trim())
      lines.push('---')
    })
  }
  lines.push('')

  const earnedAchievements = achievements.filter(a => a.earned)
  lines.push(`=== My Achievements (${earnedAchievements.length} earned) ===`)
  if (earnedAchievements.length === 0) {
    lines.push('No achievements yet.')
  } else {
    earnedAchievements.forEach(a => {
      lines.push(`${a.name} — ${a.description}`)
    })
  }

  return lines.join('\n')
}

const VISITED_KEY = 'ronny-visited-modules'

interface ModuleEntry { id: string; icon: string; title: string; to: string }

interface SectionGroup {
  heading: string
  modules: ModuleEntry[]
}

const SECTION_GROUPS: SectionGroup[] = [
  {
    heading: 'Getting started',
    modules: [
      { id: 'github-signup',    icon: '🔑', title: 'Create your GitHub account',        to: '/tutorial/github-signup' },
      { id: 'github-basics',    icon: '📁', title: 'What is GitHub for?',               to: '/learn/github-basics' },
      { id: 'what-is-api',      icon: '🔗', title: 'What is an API?',                   to: '/learn/what-is-api' },
    ],
  },
  {
    heading: 'Understanding AI',
    modules: [
      { id: 'what-is-ai',            icon: '🤖', title: 'What is AI?',                              to: '/learn/what-is-ai' },
      { id: 'what-is-ml',            icon: '📊', title: 'What is machine learning?',               to: '/learn/what-is-machine-learning' },
      { id: 'how-ai-training-works', icon: '🏋️', title: 'How does AI training work?',             to: '/learn/how-ai-training-works' },
      { id: 'neural-network',        icon: '🧠', title: 'What is a neural network?',               to: '/learn/neural-network' },
      { id: 'language-models',       icon: '💬', title: 'How do language models work?',            to: '/learn/language-models' },
      { id: 'how-chatbots-work',     icon: '💬', title: 'How do chatbots work?',                   to: '/learn/how-chatbots-work' },
      { id: 'ai-history',            icon: '📜', title: 'AI history timeline',                     to: '/ai-history' },
      { id: 'ai-everyday-life',      icon: '🌍', title: 'AI in everyday life',                     to: '/learn/ai-everyday-life' },
      { id: 'ai-in-your-apps',       icon: '📱', title: 'AI in the apps you already use',          to: '/learn/ai-in-your-apps' },
    ],
  },
  {
    heading: 'AI in the real world',
    modules: [
      { id: 'ai-and-creativity',          icon: '🎨', title: 'AI and creativity',                       to: '/learn/ai-and-creativity' },
      { id: 'ai-in-healthcare',           icon: '🩺', title: 'AI in healthcare',                        to: '/learn/ai-in-healthcare' },
      { id: 'ai-for-accessibility',       icon: '♿', title: 'AI for accessibility',                    to: '/learn/ai-for-accessibility' },
      { id: 'ai-and-scientific-research', icon: '🔬', title: 'AI and scientific research',             to: '/learn/ai-and-scientific-research' },
      { id: 'ai-productivity-tools',      icon: '⚡', title: 'AI and your productivity',               to: '/learn/ai-productivity-tools' },
      { id: 'ai-and-food',                icon: '🌿', title: 'AI and food',                              to: '/learn/ai-and-food' },
      { id: 'ai-and-sport',               icon: '⚽', title: 'AI and sport',                             to: '/learn/ai-and-sport' },
      { id: 'ai-and-transport',           icon: '🚗', title: 'AI and transport',                         to: '/learn/ai-and-transport' },
      { id: 'ai-and-art',                 icon: '🎨', title: 'AI and art',                               to: '/learn/ai-and-art' },
      { id: 'ai-and-cybersecurity',       icon: '🔒', title: 'AI and cybersecurity',                     to: '/learn/ai-and-cybersecurity' },
      { id: 'ai-and-space',               icon: '🚀', title: 'AI and space',                             to: '/learn/ai-and-space' },
      { id: 'ai-and-climate-change',      icon: '🌍', title: 'AI and climate change',                    to: '/learn/ai-and-climate-change' },
      { id: 'ai-and-robotics',            icon: '🤖', title: 'AI and robotics',                            to: '/learn/ai-and-robotics' },
      { id: 'ai-and-fashion',             icon: '👗', title: 'AI and fashion',                              to: '/learn/ai-and-fashion' },
      { id: 'ai-and-agriculture',         icon: '🌾', title: 'AI and agriculture',                          to: '/learn/ai-and-agriculture' },
      { id: 'ai-and-retail',              icon: '🛍️', title: 'AI and retail',                                to: '/learn/ai-and-retail' },
      { id: 'ai-and-travel',              icon: '✈️', title: 'AI and travel',                                to: '/learn/ai-and-travel' },
      { id: 'ai-and-housing',             icon: '🏠', title: 'AI and housing',                               to: '/learn/ai-and-housing' },
      { id: 'ai-and-energy',              icon: '⚡', title: 'AI and energy',                                to: '/learn/ai-and-energy' },
      { id: 'ai-and-elderly-care',        icon: '🧓', title: 'AI and elderly care',                          to: '/learn/ai-and-elderly-care' },
      { id: 'ai-and-insurance',           icon: '🛡️', title: 'AI and insurance',                             to: '/learn/ai-and-insurance' },
      { id: 'ai-and-policing',            icon: '⚖️', title: 'AI and policing',                              to: '/learn/ai-and-policing' },
      { id: 'ai-and-the-nhs',            icon: '🏥', title: 'AI and the NHS',                               to: '/learn/ai-and-the-nhs' },
      { id: 'ai-and-hiring',             icon: '💼', title: 'AI and hiring',                                to: '/learn/ai-and-hiring' },
      { id: 'ai-and-customer-service',   icon: '💬', title: 'AI and customer service',                      to: '/learn/ai-and-customer-service' },
      { id: 'ai-and-weather',            icon: '⛅', title: 'AI and the weather',                           to: '/learn/ai-and-weather' },
      { id: 'ai-and-the-environment',    icon: '🌱', title: 'AI and the environment',                       to: '/learn/ai-and-the-environment' },
      { id: 'ai-and-relationships',      icon: '💕', title: 'AI and relationships',                          to: '/learn/ai-and-relationships' },
      { id: 'ai-and-photography',        icon: '📷', title: 'AI and photography',                              to: '/learn/ai-and-photography' },
      { id: 'ai-and-manufacturing',      icon: '🏭', title: 'AI and manufacturing',                              to: '/learn/ai-and-manufacturing' },
      { id: 'ai-and-drug-discovery',     icon: '💉', title: 'AI and drug discovery',                             to: '/learn/ai-and-drug-discovery' },
      { id: 'ai-and-smart-homes',        icon: '🏠', title: 'AI and smart homes',                                to: '/learn/ai-and-smart-homes' },
      { id: 'ai-and-architecture',       icon: '🏛️', title: 'AI and architecture',                               to: '/learn/ai-and-architecture' },
      { id: 'ai-and-supply-chains',      icon: '🚚', title: 'AI and supply chains',                              to: '/learn/ai-and-supply-chains' },
    ],
  },
  {
    heading: 'AI and society',
    modules: [
      { id: 'ai-pros-and-cons',      icon: '⚖️', title: 'AI: the good and the bad',               to: '/learn/ai-pros-and-cons' },
      { id: 'ai-bias',               icon: '⚖️', title: 'What is AI bias?',                        to: '/learn/ai-bias' },
      { id: 'ai-safety',             icon: '🛡️', title: 'AI safety and alignment',                to: '/learn/ai-safety' },
      { id: 'prompt-engineering',    icon: '✏️', title: 'What is prompt engineering?',            to: '/learn/prompt-engineering' },
      { id: 'trusting-ai',           icon: '🔍', title: 'Can I trust what AI says?',              to: '/learn/trusting-ai' },
      { id: 'ai-and-jobs',           icon: '💼', title: 'AI and jobs',                             to: '/learn/ai-and-jobs' },
      { id: 'ai-and-environment',    icon: '🌱', title: 'AI and the environment',                  to: '/learn/ai-and-environment' },
      { id: 'ai-and-privacy',        icon: '🔒', title: 'AI and privacy',                          to: '/learn/ai-and-privacy' },
      { id: 'ai-and-education',      icon: '🎓', title: 'AI and education',                        to: '/learn/ai-and-education' },
      { id: 'ai-and-social-media',   icon: '📲', title: 'AI and social media',                    to: '/learn/ai-and-social-media' },
      { id: 'ai-and-misinformation', icon: '🔎', title: 'AI and misinformation',                  to: '/learn/ai-and-misinformation' },
      { id: 'ai-and-mental-health',  icon: '🧠', title: 'AI and your mental health',              to: '/learn/ai-and-mental-health' },
      { id: 'future-of-ai',          icon: '🔭', title: 'What does the future of AI look like?', to: '/learn/future-of-ai' },
      { id: 'ai-laws-and-rights',    icon: '⚖️', title: 'AI, laws, and your rights',             to: '/learn/ai-laws-and-rights' },
      { id: 'ai-and-copyright',      icon: '⚖️', title: 'AI and the law',                         to: '/learn/ai-and-copyright' },
      { id: 'how-to-use-ai-safely',  icon: '🛡️', title: 'How to use AI safely',                  to: '/learn/how-to-use-ai-safely' },
      { id: 'ai-and-money',          icon: '💰', title: 'AI and money',                            to: '/learn/ai-and-money' },
      { id: 'ai-and-democracy',      icon: '🏛️', title: 'AI and democracy',                       to: '/learn/ai-and-democracy' },
      { id: 'ai-and-language',       icon: '🗣️', title: 'AI and language',                        to: '/learn/ai-and-language' },
      { id: 'ai-and-music',          icon: '🎵', title: 'AI and music',                            to: '/learn/ai-and-music' },
      { id: 'ai-and-gaming',         icon: '🎮', title: 'AI and gaming',                           to: '/learn/ai-and-gaming' },
      { id: 'ai-and-journalism',     icon: '📰', title: 'AI and journalism',                       to: '/learn/ai-and-journalism' },
      { id: 'ai-and-mental-wellbeing-at-work', icon: '🧘', title: 'AI and mental wellbeing at work', to: '/learn/ai-and-mental-wellbeing-at-work' },
      { id: 'ai-and-children',          icon: '🧒', title: 'AI and children',                            to: '/learn/ai-and-children' },
      { id: 'ai-and-the-law',           icon: '⚖️', title: 'AI and the law',                              to: '/learn/ai-and-the-law' },
      { id: 'ai-and-creative-writing',  icon: '✍️', title: 'AI and creative writing',                       to: '/learn/ai-and-creative-writing' },
      { id: 'ai-and-mental-health-apps', icon: '💬', title: 'AI and mental health apps',                      to: '/learn/ai-and-mental-health-apps' },
      { id: 'ai-and-elections',          icon: '🗳️', title: 'AI and elections',                                to: '/learn/ai-and-elections' },
      { id: 'ai-and-banking',            icon: '🏦', title: 'AI and banking',                                  to: '/learn/ai-and-banking' },
      { id: 'ai-and-the-military',       icon: '⚔️', title: 'AI and the military',                             to: '/learn/ai-and-the-military' },
      { id: 'ai-and-streaming',          icon: '🎬', title: 'AI and streaming',                                to: '/learn/ai-and-streaming' },
      { id: 'ai-and-news',               icon: '📰', title: 'AI and the news',                                 to: '/learn/ai-and-news' },
      { id: 'ai-and-smart-cities',       icon: '🏙️', title: 'AI and smart cities',                             to: '/learn/ai-and-smart-cities' },
      { id: 'ai-and-charities',          icon: '🤝', title: 'AI and charities',                                to: '/learn/ai-and-charities' },
      { id: 'ai-and-volunteering',       icon: '🙋', title: 'AI and volunteering',                             to: '/learn/ai-and-volunteering' },
      { id: 'ai-and-adult-education',    icon: '📚', title: 'AI and adult education',                          to: '/learn/ai-and-adult-education' },
      { id: 'ai-and-the-arts',           icon: '🎭', title: 'AI and the arts',                                 to: '/learn/ai-and-the-arts' },
      { id: 'ai-and-advertising',        icon: '📢', title: 'AI and advertising',                              to: '/learn/ai-and-advertising' },
      { id: 'ai-and-emergency-services', icon: '🚨', title: 'AI and emergency services',                       to: '/learn/ai-and-emergency-services' },
      { id: 'ai-and-virtual-reality',    icon: '🥽', title: 'AI and virtual reality',                          to: '/learn/ai-and-virtual-reality' },
      { id: 'ai-and-film-and-tv',        icon: '🎬', title: 'AI and film and TV',                               to: '/learn/ai-and-film-and-tv' },
      { id: 'ai-and-water',              icon: '💧', title: 'AI and water',                                     to: '/learn/ai-and-water' },
      { id: 'ai-and-sleep',              icon: '😴', title: 'AI and sleep',                                     to: '/learn/ai-and-sleep' },
      { id: 'ai-and-the-ocean',          icon: '🌊', title: 'AI and the ocean',                                 to: '/learn/ai-and-the-ocean' },
      { id: 'ai-and-parenting',          icon: '👶', title: 'AI and parenting',                                 to: '/learn/ai-and-parenting' },
      { id: 'ai-and-language-learning',  icon: '🗣️', title: 'AI and language learning',                        to: '/learn/ai-and-language-learning' },
    ],
  },
  {
    heading: 'How software is built',
    modules: [
      { id: 'genesis-system',    icon: '⚙️',  title: 'What is the Genesis system?',   to: '/learn/genesis-system' },
      { id: 'how-this-was-built', icon: '🏗️', title: 'How this app was built',        to: '/learn/how-this-was-built' },
      { id: 'what-is-ci-cd',     icon: '🏭', title: 'How does the website update?',  to: '/learn/what-is-ci-cd' },
      { id: 'version-control',   icon: '💾', title: 'How does version control work?', to: '/learn/what-is-version-control' },
      { id: 'pull-request',      icon: '📋', title: 'What is a pull request?',        to: '/learn/what-is-a-pull-request' },
      { id: 'meet-the-agents',   icon: '👥', title: 'Meet the AI agents',             to: '/agents' },
    ],
  },
]

const ALL_MODULES: ModuleEntry[] = SECTION_GROUPS.flatMap(g => g.modules)

function loadVisited(): Set<string> {
  try {
    const raw = localStorage.getItem(VISITED_KEY)
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

function streakMessage(streak: number): string {
  if (streak === 0) return 'Visit again tomorrow to start a streak!'
  if (streak === 1) return 'You started your streak today — come back tomorrow!'
  if (streak < 5) return `${streak} days in a row — keep it up!`
  if (streak < 10) return `${streak} days in a row — you are on a roll!`
  return `${streak} days in a row — incredible dedication!`
}

// Reading time per lesson (minutes) — matches values shown on lesson pages
const READING_TIMES: Record<string, number> = {
  'github-signup': 5, 'github-basics': 4, 'what-is-api': 4, 'genesis-system': 4,
  'what-is-ai': 5, 'what-is-ml': 6, 'how-ai-training-works': 7, 'neural-network': 6,
  'language-models': 7, 'how-chatbots-work': 6, 'ai-history': 5, 'ai-everyday-life': 5,
  'ai-in-your-apps': 5,
  'ai-and-creativity': 6, 'ai-in-healthcare': 6, 'ai-for-accessibility': 5,
  'ai-and-scientific-research': 6, 'ai-productivity-tools': 5,
  'ai-pros-and-cons': 6, 'ai-bias': 6, 'ai-safety': 6, 'prompt-engineering': 6,
  'trusting-ai': 5, 'ai-and-jobs': 6, 'ai-and-environment': 6, 'ai-and-privacy': 6,
  'ai-and-education': 6, 'ai-and-social-media': 6, 'ai-and-misinformation': 6,
  'ai-and-mental-health': 6, 'future-of-ai': 7, 'ai-laws-and-rights': 7,
  'ai-and-copyright': 6, 'how-to-use-ai-safely': 5,
  'ai-and-money': 6, 'ai-and-democracy': 7, 'ai-and-language': 5,
  'ai-and-food': 5, 'ai-and-sport': 6, 'ai-and-transport': 5, 'ai-and-art': 6,
  'ai-and-cybersecurity': 5, 'ai-and-space': 6,
  'ai-and-climate-change': 6, 'ai-and-music': 5,
  'ai-and-robotics': 5, 'ai-and-gaming': 5,
  'ai-and-journalism': 6, 'ai-and-fashion': 5,
  'ai-and-agriculture': 5, 'ai-and-mental-wellbeing-at-work': 6,
  'ai-and-retail': 5, 'ai-and-children': 6,
  'ai-and-travel': 5, 'ai-and-housing': 6,
  'ai-and-energy': 5, 'ai-and-elderly-care': 6,
  'ai-and-insurance': 5, 'ai-and-policing': 6,
  'ai-and-the-nhs': 5, 'ai-and-hiring': 6,
  'ai-and-customer-service': 5, 'ai-and-weather': 5,
  'ai-and-the-environment': 5, 'ai-and-the-law': 6,
  'ai-and-relationships': 5, 'ai-and-creative-writing': 6,
  'ai-and-photography': 5, 'ai-and-mental-health-apps': 6,
  'how-this-was-built': 5, 'what-is-ci-cd': 4, 'version-control': 4, 'pull-request': 4,
  'meet-the-agents': 4,
}

// Topic group membership for "favourite topic" stat
const TOPIC_GROUPS: Record<string, string> = {
  'github-signup': 'GitHub and coding', 'github-basics': 'GitHub and coding', 'what-is-api': 'GitHub and coding',
  'genesis-system': 'GitHub and coding', 'how-this-was-built': 'GitHub and coding',
  'what-is-ci-cd': 'GitHub and coding', 'version-control': 'GitHub and coding',
  'pull-request': 'GitHub and coding', 'meet-the-agents': 'GitHub and coding',
  'what-is-ai': 'How AI works', 'what-is-ml': 'How AI works', 'how-ai-training-works': 'How AI works',
  'neural-network': 'How AI works', 'language-models': 'How AI works', 'how-chatbots-work': 'How AI works',
  'ai-history': 'How AI works', 'ai-everyday-life': 'How AI works', 'ai-in-your-apps': 'How AI works',
  'ai-and-creativity': 'AI in the real world', 'ai-in-healthcare': 'AI in the real world',
  'ai-for-accessibility': 'AI in the real world', 'ai-and-scientific-research': 'AI in the real world',
  'ai-productivity-tools': 'AI in the real world',
  'ai-and-jobs': 'AI and society', 'ai-and-environment': 'AI and society', 'ai-and-privacy': 'AI and society',
  'ai-and-education': 'AI and society', 'ai-and-social-media': 'AI and society',
  'ai-and-misinformation': 'AI and society', 'ai-and-mental-health': 'AI and society',
  'future-of-ai': 'AI and society', 'ai-laws-and-rights': 'AI and society',
  'ai-and-copyright': 'AI and society', 'how-to-use-ai-safely': 'AI and society',
  'ai-and-money': 'AI and society', 'ai-and-democracy': 'AI and society', 'ai-and-language': 'AI and society',
  'ai-and-food': 'AI in the real world', 'ai-and-sport': 'AI in the real world',
  'ai-and-transport': 'AI in the real world', 'ai-and-art': 'AI in the real world',
  'ai-and-cybersecurity': 'AI in the real world', 'ai-and-space': 'AI in the real world',
  'ai-and-climate-change': 'AI in the real world', 'ai-and-music': 'AI and society',
  'ai-and-robotics': 'AI in the real world', 'ai-and-gaming': 'AI and society',
  'ai-and-journalism': 'AI and society', 'ai-and-fashion': 'AI in the real world',
  'ai-and-agriculture': 'AI in the real world', 'ai-and-mental-wellbeing-at-work': 'AI and society',
  'ai-and-retail': 'AI in the real world', 'ai-and-children': 'AI and society',
  'ai-and-travel': 'AI in the real world', 'ai-and-housing': 'AI in the real world',
  'ai-and-energy': 'AI in the real world', 'ai-and-elderly-care': 'AI in the real world',
  'ai-and-insurance': 'AI and society', 'ai-and-policing': 'AI and society',
  'ai-and-the-nhs': 'AI in the real world', 'ai-and-hiring': 'AI and society',
  'ai-and-customer-service': 'AI in the real world', 'ai-and-weather': 'AI in the real world',
  'ai-and-the-environment': 'AI in the real world', 'ai-and-the-law': 'AI and society',
  'ai-and-relationships': 'AI and society', 'ai-and-creative-writing': 'AI and society',
  'ai-and-photography': 'AI in the real world', 'ai-and-mental-health-apps': 'AI and society',
  'ai-pros-and-cons': 'Deep dives', 'ai-bias': 'Deep dives', 'ai-safety': 'Deep dives',
  'prompt-engineering': 'Deep dives', 'trusting-ai': 'Deep dives',
}

interface StatsResult {
  totalReadingMinutes: number
  quizAccuracyPct: number | null
  favouriteTopic: string | null
}

function computeStats(visited: Set<string>): StatsResult {
  // Total reading time
  let totalReadingMinutes = 0
  for (const id of visited) {
    totalReadingMinutes += READING_TIMES[id] ?? 0
  }

  // Quiz accuracy from ronny-quiz-scores
  let quizAccuracyPct: number | null = null
  try {
    const raw = localStorage.getItem('ronny-quiz-scores')
    if (raw) {
      const scores: Record<string, { score: number; total: number }> = JSON.parse(raw)
      let totalCorrect = 0
      let totalQuestions = 0
      for (const v of Object.values(scores)) {
        totalCorrect += v.score
        totalQuestions += v.total
      }
      if (totalQuestions > 0) {
        quizAccuracyPct = Math.round((totalCorrect / totalQuestions) * 100)
      }
    }
  } catch {
    // ignore
  }

  // Favourite topic — group with most completed lessons
  const topicCounts: Record<string, number> = {}
  for (const id of visited) {
    const group = TOPIC_GROUPS[id]
    if (group) topicCounts[group] = (topicCounts[group] ?? 0) + 1
  }
  let favouriteTopic: string | null = null
  let maxCount = 0
  for (const [topic, count] of Object.entries(topicCounts)) {
    if (count > maxCount || (count === maxCount && (!favouriteTopic || topic < favouriteTopic))) {
      maxCount = count
      favouriteTopic = topic
    }
  }
  // Only show favourite if Ronny has completed at least 3 lessons in it
  if (maxCount < 3) favouriteTopic = null

  return { totalReadingMinutes, quizAccuracyPct, favouriteTopic }
}

function buildProgressSummary(
  completedCount: number,
  total: number,
  streak: number,
  favouriteTopic: string | null,
): string {
  if (completedCount === 0) {
    return "You have not completed any lessons yet — but you are here, and that counts. Pick any lesson below to get started!"
  }

  const parts: string[] = []

  // Completion sentence
  if (completedCount === total) {
    parts.push(`You have completed all ${total} lessons — that is a remarkable achievement.`)
  } else {
    parts.push(`You have completed ${completedCount} of ${total} lessons.`)
  }

  // Favourite topic
  if (favouriteTopic) {
    parts.push(`Your most-explored topic is ${favouriteTopic}.`)
  }

  // Streak
  if (streak >= 7) {
    parts.push(`You are on a ${streak}-day learning streak — incredible dedication!`)
  } else if (streak >= 3) {
    parts.push(`You are on a ${streak}-day learning streak — keep it going!`)
  } else if (streak === 2) {
    parts.push(`You have visited 2 days in a row — you are building a habit!`)
  } else if (streak === 1) {
    parts.push(`You visited today — come back tomorrow to start a streak.`)
  }

  // Encouragement for partial completion
  if (completedCount > 0 && completedCount < total) {
    const pct = Math.round((completedCount / total) * 100)
    if (pct >= 75) {
      parts.push(`You are nearly there — just ${total - completedCount} lesson${total - completedCount === 1 ? '' : 's'} to go.`)
    } else if (pct >= 50) {
      parts.push(`You are over halfway through the curriculum. Nice work!`)
    } else if (pct >= 25) {
      parts.push(`You are making real progress.`)
    }
  }

  return parts.join(' ')
}

// Lessons marked Beginner — used for 'What to learn next' suggestions
const BEGINNER_IDS = new Set([
  'github-signup', 'github-basics', 'what-is-api', 'what-is-ai', 'ai-everyday-life',
  'ai-in-your-apps', 'ai-and-creativity', 'ai-productivity-tools', 'how-to-use-ai-safely',
  'ai-and-language', 'ai-and-food', 'ai-and-transport', 'ai-and-cybersecurity',
  'ai-and-climate-change', 'ai-and-music', 'ai-and-robotics', 'ai-and-gaming',
  'ai-and-fashion', 'ai-and-agriculture', 'ai-and-retail', 'ai-and-travel',
  'ai-and-energy', 'ai-and-insurance', 'ai-and-the-nhs',
  'genesis-system', 'how-this-was-built', 'what-is-ci-cd', 'version-control',
])

interface NextLessonSuggestion {
  id: string
  title: string
  to: string
  difficulty: string
}

function buildWhatToLearnNext(
  visited: Set<string>,
  timestamps: Record<string, string>,
): NextLessonSuggestion[] {
  const unvisited = ALL_MODULES.filter(m => !visited.has(m.id))
  if (unvisited.length === 0) return []

  const suggestions: NextLessonSuggestion[] = []
  const usedIds = new Set<string>()

  function toSuggestion(m: { id: string; title: string; to: string }): NextLessonSuggestion {
    return { id: m.id, title: m.title, to: m.to, difficulty: BEGINNER_IDS.has(m.id) ? 'Beginner' : 'Intermediate' }
  }

  // 1. Most recently visited lesson that is not yet completed (continue where you left off)
  const visitedButUnfinished = ALL_MODULES.filter(m => !visited.has(m.id) && timestamps[m.id])
  if (visitedButUnfinished.length > 0) {
    const sorted = [...visitedButUnfinished].sort((a, b) => {
      const tA = timestamps[a.id] ?? ''
      const tB = timestamps[b.id] ?? ''
      return tB.localeCompare(tA)
    })
    const pick = sorted[0]
    suggestions.push(toSuggestion(pick))
    usedIds.add(pick.id)
  }

  // 2. A beginner pick
  const beginnerUnvisited = unvisited.filter(m => BEGINNER_IDS.has(m.id) && !usedIds.has(m.id))
  if (beginnerUnvisited.length > 0) {
    const pick = beginnerUnvisited[Math.floor(Math.random() * beginnerUnvisited.length)]
    suggestions.push(toSuggestion(pick))
    usedIds.add(pick.id)
  }

  // 3. Any random uncompleted lesson
  const remaining = unvisited.filter(m => !usedIds.has(m.id))
  if (remaining.length > 0 && suggestions.length < 3) {
    const pick = remaining[Math.floor(Math.random() * remaining.length)]
    suggestions.push(toSuggestion(pick))
  }

  return suggestions.slice(0, 3)
}

export function MyProgress() {
  const [visited] = useState<Set<string>>(loadVisited)
  const { profile, setProfile } = useProfile()
  const [streak] = useState<StreakData>(() => recordVisitAndGetStreak())
  const [badges] = useState<Badge[]>(() => computeBadges())
  const [shared, setShared] = useState(false)
  const [weeklyGoalData, setWeeklyGoalData] = useState<WeeklyGoalData>(() => loadWeeklyGoal())
  const { calendar } = useLearningCalendar()
  const achievements = useAchievements()
  const earnedCount = achievements.filter(a => a.earned).length
  const [editingName, setEditingName] = useState(false)
  const [nameInput, setNameInput] = useState('')
  const nameInputRef = useRef<HTMLInputElement>(null)
  const [showAllQuizScores, setShowAllQuizScores] = useState(false)
  const [quizScoreData] = useState(() => loadQuizScores())
  const [exportStatus, setExportStatus] = useState<'idle' | 'copied' | 'downloaded'>('idle')
  const [showAllTimeline, setShowAllTimeline] = useState(false)
  const [lessonTimestamps] = useState<Record<string, string>>(() => loadLessonTimestamps())
  const [whatToLearnNext] = useState<NextLessonSuggestion[]>(() => buildWhatToLearnNext(loadVisited(), loadLessonTimestamps()))
  const helpfulCount = countHelpfulLessons(LESSONS_WITH_QUIZZES.map(l => l.id))
  const [quizStreak] = useState<number>(() => {
    try {
      const raw = localStorage.getItem('ronny-quiz-streak-count')
      const n = raw ? parseInt(raw, 10) : 0
      return isNaN(n) ? 0 : n
    } catch { return 0 }
  })
  const [selectedTopicFilter, setSelectedTopicFilter] = useState<string>('All')

  const completedCount = ALL_MODULES.filter(m => visited.has(m.id)).length
  const total = ALL_MODULES.length
  const pct = Math.round((completedCount / total) * 100)
  const allDone = completedCount === total
  const displayName = profile?.name || 'Ronny'

  const visitCounts = loadVisitCounts()
  const revisitedCount = ALL_MODULES.filter(m => (visitCounts[m.id] ?? 0) >= 2).length

  const stats = computeStats(visited)

  const progressSummary = buildProgressSummary(completedCount, total, streak.current, stats.favouriteTopic)

  const allNotes = loadAllNotes()
  const noteEntries = ALL_MODULES.filter(m => allNotes[m.id])

  const reviewLaterIds = loadAllReviewLater()
  const reviewEntries = ALL_MODULES.filter(m => reviewLaterIds.includes(m.id))

  // Learning timeline: completed lessons sorted by timestamp, most recent first
  const timelineEntries = ALL_MODULES
    .filter(m => lessonTimestamps[m.id])
    .sort((a, b) => {
      const tA = lessonTimestamps[a.id] ?? ''
      const tB = lessonTimestamps[b.id] ?? ''
      return tB.localeCompare(tA)
    })
  const TIMELINE_PREVIEW = 8

  async function handleShare() {
    await shareProgress(completedCount, total)
    setShared(true)
    setTimeout(() => setShared(false), 2500)
  }

  function handleSetGoal(goal: number) {
    saveWeeklyGoal(goal)
    setWeeklyGoalData(loadWeeklyGoal())
  }

  function handleChangeGoal() {
    // Open the goal picker again by setting goal to null temporarily
    setWeeklyGoalData(prev => ({ ...prev, goal: null }))
  }

  const getExportText = useCallback(() => {
    return generateExportText(profile, visited, quizScoreData, loadAllNotes(), achievements)
  }, [profile, visited, quizScoreData, achievements])

  async function handleCopyExport() {
    const text = getExportText()
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const el = document.createElement('textarea')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setExportStatus('copied')
    setTimeout(() => setExportStatus('idle'), 2500)
  }

  function handleDownloadExport() {
    const text = getExportText()
    const now = new Date()
    const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `ronny-learns-ai-progress-${dateStr}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    setExportStatus('downloaded')
    setTimeout(() => setExportStatus('idle'), 2500)
  }

  function handleEditName() {
    setNameInput(profile?.name ?? '')
    setEditingName(true)
    setTimeout(() => nameInputRef.current?.focus(), 50)
  }

  function handleSaveName() {
    const trimmed = nameInput.trim().slice(0, 30)
    if (trimmed) {
      setProfile({ name: trimmed, avatar: profile?.avatar ?? '👋' })
    }
    setEditingName(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center space-y-3">
          <Link to="/" className="text-blue-500 hover:underline text-sm block">
            &larr; Back to home
          </Link>

          {allDone ? (
            <>
              <div className="text-7xl pt-2">&#x1F389;</div>
              <h1 className="text-4xl font-bold text-gray-800">
                You did it, {displayName}!
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                You have completed every module. From zero programming knowledge to understanding
                how AI agents build real software — that is genuinely impressive.
              </p>
            </>
          ) : (
            <>
              <div className="text-6xl pt-2">&#x1F4AA;</div>
              <h1 className="text-3xl font-bold text-gray-800">
                Your learning progress
              </h1>
              <p className="text-gray-600 leading-relaxed">
                {completedCount === 0
                  ? 'Start with the first module and work your way through the list!'
                  : `You have visited ${completedCount} of ${total} modules. Keep going!`}
              </p>
            </>
          )}
        </div>

        {/* Learning stats card */}
        <LearningStatsCard />

        {/* Estimated completion panel */}
        <EstimatedCompletion completedCount={completedCount} totalCount={total} />

        {/* Lesson completion certificate */}
        {(() => {
          const quizDoneCount = quizScoreData.attempted.length
          const CERTIFICATE_THRESHOLD = 10
          if (quizDoneCount >= CERTIFICATE_THRESHOLD) {
            const certDate = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
            return (
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 rounded-2xl p-6 space-y-4 print:border-amber-400 print:shadow-none">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">&#x1F396;&#xFE0F;</span>
                  <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide">Certificate of Achievement</p>
                </div>
                <div className="text-center space-y-2 py-2">
                  <p className="text-amber-900 font-bold text-2xl leading-tight">This certifies that</p>
                  <p className="text-amber-800 font-extrabold text-3xl">{displayName}</p>
                  <p className="text-amber-700 text-lg">has successfully completed</p>
                  <p className="text-amber-900 font-bold text-4xl">{quizDoneCount}</p>
                  <p className="text-amber-700 text-lg">lessons on Ronny Learns AI</p>
                  <p className="text-amber-600 text-sm mt-2">Awarded on {certDate}</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    onClick={() => window.print()}
                    className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors print:hidden"
                  >
                    &#x1F5A8;&#xFE0F; Print or save as PDF
                  </button>
                  <p className="text-amber-600 text-xs text-center sm:text-left print:hidden">
                    In your browser print dialog, choose &ldquo;Save as PDF&rdquo; to save a copy.
                  </p>
                </div>
              </div>
            )
          }
          const remaining = CERTIFICATE_THRESHOLD - quizDoneCount
          return (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center gap-3">
              <span className="text-2xl flex-shrink-0">&#x1F3C5;</span>
              <div>
                <p className="font-semibold text-amber-800 text-sm">Certificate of Achievement</p>
                <p className="text-amber-700 text-xs mt-0.5 leading-relaxed">
                  Complete {remaining} more lesson{remaining === 1 ? '' : 's'} with a quiz to unlock your printable certificate.
                  {quizDoneCount > 0 && ` (${quizDoneCount} of ${CERTIFICATE_THRESHOLD} done)`}
                </p>
              </div>
            </div>
          )
        })()}

        {/* Topic completion tracker */}
        <TopicCompletionTracker />

        {/* Learning series overview */}
        {(() => {
          const completedIds = new Set(quizScoreData.attempted.map(e => e.id))
          return (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-violet-100 dark:border-violet-900 p-5 space-y-4">
              <p className="font-semibold text-gray-800 dark:text-gray-100 text-base">Learning series</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Lessons are grouped into themed series. Complete all lessons in a series to master a topic area.
              </p>
              <div className="space-y-3">
                {LESSON_SERIES.map(series => {
                  const done = series.lessonIds.filter(id => completedIds.has(id)).length
                  const total = series.lessonIds.length
                  const pct = Math.round((done / total) * 100)
                  return (
                    <div key={series.slug} className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <span dangerouslySetInnerHTML={{ __html: series.icon }} className="text-base flex-shrink-0" />
                          <p className="font-medium text-gray-800 dark:text-gray-100 text-sm truncate">{series.name}</p>
                        </div>
                        <span className="text-gray-500 dark:text-gray-400 text-xs flex-shrink-0">{done}/{total}</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${done === total ? 'bg-emerald-500' : 'bg-violet-500'}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      {done === total && (
                        <p className="text-emerald-600 dark:text-emerald-400 text-xs">&#x2713; Series complete!</p>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })()}

        {/* Achievements summary + name change */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/achievements"
            className="flex-1 bg-white rounded-2xl shadow-sm border border-amber-200 p-4 flex items-center gap-3 hover:bg-amber-50 transition-colors"
          >
            <span className="text-3xl">&#x1F3C5;</span>
            <div>
              <p className="font-semibold text-gray-800 text-sm">Your achievements</p>
              <p className="text-gray-500 text-xs mt-0.5">
                {earnedCount === 0
                  ? 'Start earning badges'
                  : `${earnedCount} of ${achievements.length} badges earned`}
              </p>
            </div>
            <span className="ml-auto text-amber-400">&#x279C;</span>
          </Link>

          {profile && (
            <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-200 p-4 flex items-center gap-3">
              <span className="text-3xl">{profile.avatar}</span>
              <div className="flex-1 min-w-0">
                {editingName ? (
                  <div className="flex gap-2 items-center">
                    <input
                      ref={nameInputRef}
                      type="text"
                      value={nameInput}
                      onChange={e => setNameInput(e.target.value)}
                      onKeyDown={e => { if (e.key === 'Enter') handleSaveName(); if (e.key === 'Escape') setEditingName(false) }}
                      maxLength={30}
                      className="flex-1 border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      aria-label="Your name"
                    />
                    <button onClick={handleSaveName} className="text-blue-600 text-xs font-semibold hover:underline">Save</button>
                  </div>
                ) : (
                  <>
                    <p className="font-semibold text-gray-800 text-sm truncate">{profile.name}</p>
                    <button onClick={handleEditName} className="text-blue-500 hover:underline text-xs">Change your name</button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* How am I doing? summary card */}
        <div className="bg-white rounded-2xl shadow-sm border-l-4 border-indigo-400 p-5 space-y-2">
          <p className="font-semibold text-gray-800 text-base">How am I doing?</p>
          <p className="text-gray-700 leading-relaxed text-sm">{progressSummary}</p>
        </div>

        {/* What to learn next */}
        <div className="bg-indigo-50 rounded-2xl border border-indigo-100 p-5 space-y-3">
          <p className="font-semibold text-indigo-900 text-base">What to learn next</p>
          {whatToLearnNext.length === 0 ? (
            <p className="text-indigo-700 text-sm leading-relaxed">
              You have completed every lesson! Why not revisit a favourite, or try the Surprise me button on the home page?
            </p>
          ) : (
            <ul className="space-y-2">
              {whatToLearnNext.map(s => (
                <li key={s.id}>
                  <Link
                    to={s.to as '/'}
                    className="flex items-center justify-between gap-3 bg-white rounded-xl px-4 py-3 border border-indigo-100 hover:border-indigo-300 hover:bg-white/80 transition-colors group"
                  >
                    <span className="text-gray-800 text-sm font-medium group-hover:text-indigo-700 leading-tight">{s.title}</span>
                    <span className={`flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${s.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {s.difficulty}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Weekly learning goal */}
        {weeklyGoalData.goal === null ? (
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-5 space-y-3">
            <p className="font-semibold text-gray-800 text-base">Set a weekly learning goal</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              How many lessons would you like to complete each week? Choose a target and track it on the home page.
            </p>
            <div className="flex flex-wrap gap-3">
              {[2, 3, 5].map(n => (
                <button
                  key={n}
                  onClick={() => handleSetGoal(n)}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors min-h-[44px]"
                >
                  {n} lessons / week
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-5">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="space-y-1">
                <p className="font-semibold text-gray-800 text-base">Weekly goal</p>
                <p className="text-gray-500 text-sm">
                  {weeklyGoalData.completedThisWeek >= weeklyGoalData.goal
                    ? `Goal reached this week — well done!`
                    : `${weeklyGoalData.completedThisWeek} of ${weeklyGoalData.goal} lessons completed this week`}
                </p>
              </div>
              <div className="flex items-center gap-3">
                {/* Progress ring */}
                <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true">
                  <circle cx="28" cy="28" r="22" fill="none" stroke="#e5e7eb" strokeWidth="6" />
                  <circle
                    cx="28"
                    cy="28"
                    r="22"
                    fill="none"
                    stroke={weeklyGoalData.completedThisWeek >= weeklyGoalData.goal ? '#10b981' : '#3b82f6'}
                    strokeWidth="6"
                    strokeDasharray={`${2 * Math.PI * 22}`}
                    strokeDashoffset={`${2 * Math.PI * 22 * (1 - Math.min(1, weeklyGoalData.completedThisWeek / weeklyGoalData.goal))}`}
                    strokeLinecap="round"
                    transform="rotate(-90 28 28)"
                  />
                  <text x="28" y="33" textAnchor="middle" fontSize="13" fontWeight="700"
                    fill={weeklyGoalData.completedThisWeek >= weeklyGoalData.goal ? '#10b981' : '#3b82f6'}>
                    {weeklyGoalData.completedThisWeek}/{weeklyGoalData.goal}
                  </text>
                </svg>
                <button
                  onClick={handleChangeGoal}
                  className="text-blue-500 hover:underline text-sm"
                >
                  Change goal
                </button>
              </div>
            </div>
            {weeklyGoalData.completedThisWeek >= weeklyGoalData.goal && (
              <p className="text-emerald-600 font-semibold text-sm mt-3 text-center">
                &#x1F389; You hit your goal this week — amazing work!
              </p>
            )}
          </div>
        )}

        {/* Progress bar */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">Overall progress</span>
            <span className="text-2xl font-bold text-emerald-600">{pct}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-4">
            <div
              className="bg-emerald-500 h-4 rounded-full transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="text-gray-500 text-sm text-center">
            {completedCount} of {total} modules visited
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleShare}
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors text-sm"
            >
              {shared ? '&#x2713; Copied!' : '&#x1F517; Share my progress'}
            </button>
          </div>
        </div>

        {/* Section progress visualisation */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-5">
          <h2 className="text-xl font-semibold text-gray-700">Your learning path</h2>
          {SECTION_GROUPS.map(group => {
            const groupTotal = group.modules.length
            const groupDone = group.modules.filter(m => visited.has(m.id)).length
            const groupPct = Math.round((groupDone / groupTotal) * 100)
            const sectionComplete = groupDone === groupTotal
            return (
              <div key={group.heading} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700 text-sm">{group.heading}</span>
                  {sectionComplete ? (
                    <span className="flex items-center gap-1 text-emerald-600 text-sm font-semibold">
                      <span>&#x2713;</span> Section complete!
                    </span>
                  ) : groupDone === 0 ? (
                    <span className="text-gray-400 text-xs">Not started yet</span>
                  ) : (
                    <span className="text-gray-500 text-xs">{groupDone} / {groupTotal}</span>
                  )}
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full transition-all duration-700 ${sectionComplete ? 'bg-emerald-500' : 'bg-blue-500'}`}
                    style={{ width: `${groupPct}%` }}
                  />
                </div>
                {!sectionComplete && groupDone > 0 && (
                  <p className="text-gray-400 text-xs">{groupPct}% complete</p>
                )}
              </div>
            )
          })}
        </div>

        {/* Streak card */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🔥</span>
            <h2 className="text-xl font-semibold text-gray-700">Learning streak</h2>
          </div>
          <div className="flex items-end gap-4">
            <span className="text-5xl font-extrabold text-orange-500">{streak.current}</span>
            <span className="text-gray-500 pb-1">day{streak.current !== 1 ? 's' : ''} in a row</span>
          </div>
          <p className="text-gray-500 text-sm">{streakMessage(streak.current)}</p>
          {streak.longest > streak.current && (
            <p className="text-gray-400 text-xs">
              Personal best: <strong>{streak.longest}</strong> day{streak.longest !== 1 ? 's' : ''}
            </p>
          )}
          <div className="pt-2 border-t border-gray-100">
            <StreakCalendar calendar={calendar} />
          </div>
        </div>

        {/* Revisit stat */}
        {revisitedCount > 0 && (
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-5">
            <div className="text-4xl flex-shrink-0">&#x1F501;</div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-blue-600">{revisitedCount}</span>
                <span className="text-gray-500 text-sm font-medium">lesson{revisitedCount !== 1 ? 's' : ''} revisited</span>
              </div>
              <p className="text-gray-400 text-xs mt-0.5">You looked twice &mdash; that is how real learning works</p>
            </div>
          </div>
        )}

        {/* Quiz streak */}
        {quizStreak >= 2 && (
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-5">
            <div className="text-4xl flex-shrink-0">&#x1F9E0;</div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-violet-600">{quizStreak}</span>
                <span className="text-gray-500 text-sm font-medium">quiz{quizStreak !== 1 ? 'zes' : ''} in a row</span>
              </div>
              <p className="text-gray-400 text-xs mt-0.5">
                {quizStreak >= 10
                  ? 'Remarkable quiz focus — keep going!'
                  : quizStreak >= 5
                  ? 'Impressive focus — you are on a roll!'
                  : 'Great start — see how long you can keep it up!'}
              </p>
            </div>
          </div>
        )}

        {/* Stats at a glance */}
        {completedCount >= 3 && (
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">My stats at a glance</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Reading time */}
              <div className="bg-blue-50 rounded-xl p-4 text-center space-y-1">
                <div className="text-3xl" aria-hidden="true">&#x1F4DA;</div>
                <div className="text-2xl font-extrabold text-blue-700">
                  {stats.totalReadingMinutes >= 60
                    ? `${(stats.totalReadingMinutes / 60).toFixed(1)}h`
                    : `${stats.totalReadingMinutes}m`}
                </div>
                <div className="text-xs text-blue-600 font-medium leading-tight">reading completed</div>
              </div>

              {/* Quiz accuracy */}
              <div className="bg-emerald-50 rounded-xl p-4 text-center space-y-1">
                <div className="text-3xl" aria-hidden="true">&#x1F9E0;</div>
                {stats.quizAccuracyPct !== null ? (
                  <>
                    <div className="text-2xl font-extrabold text-emerald-700">{stats.quizAccuracyPct}%</div>
                    <div className="text-xs text-emerald-600 font-medium leading-tight">quiz accuracy</div>
                  </>
                ) : (
                  <>
                    <div className="text-lg font-bold text-emerald-600">No quizzes yet</div>
                    <div className="text-xs text-emerald-500 leading-tight">complete a lesson quiz to see your score</div>
                  </>
                )}
              </div>

              {/* Favourite topic */}
              <div className="bg-purple-50 rounded-xl p-4 text-center space-y-1">
                <div className="text-3xl" aria-hidden="true">&#x2B50;</div>
                {stats.favouriteTopic ? (
                  <>
                    <div className="text-sm font-extrabold text-purple-700 leading-tight">{stats.favouriteTopic}</div>
                    <div className="text-xs text-purple-500 leading-tight">your favourite topic so far</div>
                  </>
                ) : (
                  <>
                    <div className="text-sm font-bold text-purple-600 leading-tight">Keep going!</div>
                    <div className="text-xs text-purple-500 leading-tight">your favourite topic will appear here</div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Lessons you found helpful */}
        {helpfulCount > 0 && (
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-5">
            <div className="text-4xl flex-shrink-0">&#x1F44D;</div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-green-600">{helpfulCount}</span>
                <span className="text-gray-500 text-sm font-medium">
                  lesson{helpfulCount !== 1 ? 's' : ''} marked helpful
                </span>
              </div>
              <p className="text-gray-400 text-xs mt-0.5">out of {completedCount} completed — thanks for the feedback!</p>
            </div>
          </div>
        )}

        {/* Badges */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Your badges</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className={`rounded-xl border p-4 flex flex-col items-center gap-2 text-center transition-all ${
                  badge.earned
                    ? `${badge.color} ${badge.borderColor}`
                    : 'bg-gray-50 border-gray-200 opacity-40'
                }`}
              >
                <span className="text-3xl">{badge.icon}</span>
                <p className={`font-semibold text-sm leading-tight ${badge.earned ? badge.textColor : 'text-gray-500'}`}>
                  {badge.name}
                </p>
                <p className={`text-xs leading-tight ${badge.earned ? badge.textColor : 'text-gray-400'}`}>
                  {badge.description}
                </p>
                {!badge.earned && (
                  <span className="text-xs text-gray-400 italic">Locked</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quiz scores */}
        {quizScoreData.attempted.length > 0 && (
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h2 className="text-xl font-semibold text-gray-700">My quiz scores</h2>
                <p className="text-gray-400 text-xs mt-0.5">Best scores across all lessons</p>
              </div>
              <span className="text-sm text-gray-400">{quizScoreData.attempted.length} of {LESSONS_WITH_QUIZZES.length} attempted</span>
            </div>
            <div className="space-y-2">
              {(showAllQuizScores ? quizScoreData.attempted : quizScoreData.attempted.slice(0, 10)).map(entry => (
                <Link
                  key={entry.id}
                  to={entry.to}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 hover:border-blue-100 transition-colors"
                >
                  <span className={`text-xl flex-shrink-0 ${entry.pct === 100 ? 'text-amber-500' : entry.pct >= 75 ? 'text-emerald-500' : 'text-blue-500'}`}>
                    {entry.pct === 100 ? '&#x1F3C6;' : entry.pct >= 75 ? '&#x2713;' : '&#x1F4DD;'}
                  </span>
                  <span className="flex-1 font-medium text-gray-700 text-sm leading-tight truncate">{entry.title}</span>
                  <span className={`flex-shrink-0 text-sm font-bold px-2 py-0.5 rounded-full ${
                    entry.pct === 100 ? 'bg-amber-100 text-amber-700' :
                    entry.pct >= 75 ? 'bg-emerald-100 text-emerald-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {entry.score}/{entry.total}
                  </span>
                </Link>
              ))}
              {!showAllQuizScores && quizScoreData.attempted.length > 10 && (
                <button
                  onClick={() => setShowAllQuizScores(true)}
                  className="w-full text-center text-blue-500 hover:underline text-sm py-2"
                >
                  Show all {quizScoreData.attempted.length} scores
                </button>
              )}
              {quizScoreData.unattempted.length > 0 && showAllQuizScores && (
                <div className="pt-2 border-t border-gray-100 space-y-2">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Not yet attempted</p>
                  {quizScoreData.unattempted.map(entry => (
                    <Link
                      key={entry.id}
                      to={entry.to}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-colors opacity-60"
                    >
                      <span className="text-xl flex-shrink-0 text-gray-300">&#x25CB;</span>
                      <span className="flex-1 font-medium text-gray-500 text-sm leading-tight truncate">{entry.title}</span>
                      <span className="flex-shrink-0 text-xs text-gray-400">Not tried yet</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* My notes */}
        {noteEntries.length > 0 && (
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold text-gray-700">My notes</h2>
              <Link
                to="/my-notes"
                className="text-sm text-yellow-700 hover:text-yellow-800 underline underline-offset-2 font-medium"
              >
                View all notes &#x2192;
              </Link>
            </div>
            <div className="space-y-2">
              {noteEntries.slice(0, 3).map(mod => (
                <Link
                  key={mod.id}
                  to={mod.to}
                  className="flex items-start gap-3 p-4 rounded-xl bg-yellow-50 border border-yellow-100 hover:bg-yellow-100 transition-colors"
                >
                  <span className="text-xl flex-shrink-0 mt-0.5">{mod.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-yellow-800 text-sm">{mod.title}</p>
                    <p className="text-yellow-600 text-xs mt-0.5 truncate">{allNotes[mod.id]?.slice(0, 100)}{(allNotes[mod.id]?.length ?? 0) > 100 ? '...' : ''}</p>
                  </div>
                  <span className="text-yellow-400 flex-shrink-0">&#x2192;</span>
                </Link>
              ))}
              {noteEntries.length > 3 && (
                <Link
                  to="/my-notes"
                  className="block text-center text-sm text-yellow-700 hover:text-yellow-800 py-2 rounded-xl bg-yellow-50 border border-yellow-100 hover:bg-yellow-100 transition-colors"
                >
                  + {noteEntries.length - 3} more note{noteEntries.length - 3 !== 1 ? 's' : ''} &mdash; view all
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Learning timeline */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">&#x1F4C5;</span>
            <h2 className="text-xl font-semibold text-gray-700">My learning timeline</h2>
          </div>
          {timelineEntries.length === 0 ? (
            <p className="text-gray-400 text-sm leading-relaxed">
              Complete your first lesson to start your timeline!
            </p>
          ) : (
            <>
              <div className="space-y-2">
                {(showAllTimeline ? timelineEntries : timelineEntries.slice(0, TIMELINE_PREVIEW)).map(mod => {
                  const ts = lessonTimestamps[mod.id]
                  const dateLabel = ts
                    ? new Date(ts).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
                    : ''
                  return (
                    <Link
                      key={mod.id}
                      to={mod.to}
                      className="flex items-center gap-3 p-3 rounded-xl bg-indigo-50 border border-indigo-100 hover:bg-indigo-100 transition-colors"
                    >
                      <span className="text-xl flex-shrink-0">{mod.icon}</span>
                      <span className="flex-1 font-medium text-indigo-800 text-sm leading-tight">{mod.title}</span>
                      <span className="flex-shrink-0 text-xs text-indigo-500 whitespace-nowrap">{dateLabel}</span>
                    </Link>
                  )
                })}
              </div>
              {!showAllTimeline && timelineEntries.length > TIMELINE_PREVIEW && (
                <button
                  onClick={() => setShowAllTimeline(true)}
                  className="w-full text-center text-indigo-500 hover:underline text-sm py-2"
                >
                  Show all {timelineEntries.length} completed lessons
                </button>
              )}
            </>
          )}
        </div>

        {/* Review list */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">&#x1F514;</span>
            <h2 className="text-xl font-semibold text-gray-700">Review list</h2>
          </div>
          {reviewEntries.length === 0 ? (
            <p className="text-gray-400 text-sm leading-relaxed">
              No lessons marked for review yet. Tap the &ldquo;Review later&rdquo; button on any lesson to
              add it here so you can come back to it easily.
            </p>
          ) : (
            <div className="space-y-2">
              {reviewEntries.map(mod => (
                <Link
                  key={mod.id}
                  to={mod.to}
                  className="flex items-center gap-3 p-4 rounded-xl bg-orange-50 border border-orange-100 hover:bg-orange-100 transition-colors"
                >
                  <span className="text-xl flex-shrink-0">{mod.icon}</span>
                  <span className="flex-1 font-semibold text-orange-800 text-sm leading-tight">{mod.title}</span>
                  <span className="text-orange-400 flex-shrink-0">&#x2192;</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Module list */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-5">
          <h2 className="text-xl font-semibold text-gray-700">All modules</h2>

          {/* Topic filter pills */}
          {completedCount > 0 && (() => {
            const allTopics = ['All', ...Array.from(new Set(Object.values(TOPIC_GROUPS)))]
            return (
              <div className="flex flex-wrap gap-2">
                {allTopics.map(topic => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopicFilter(topic)}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                      selectedTopicFilter === topic
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            )
          })()}

          {SECTION_GROUPS.map(group => {
            const filteredModules = selectedTopicFilter === 'All'
              ? group.modules
              : group.modules.filter(m => TOPIC_GROUPS[m.id] === selectedTopicFilter)
            if (filteredModules.length === 0) return null
            return (
              <div key={group.heading} className="space-y-2">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{group.heading}</p>
                <div className="space-y-1.5">
                  {filteredModules.map((mod) => {
                    const done = visited.has(mod.id)
                    return (
                      <Link
                        key={mod.id}
                        to={mod.to}
                        className={`flex items-center gap-4 p-3 rounded-xl border transition-all duration-150 ${
                          done
                            ? 'border-emerald-200 bg-emerald-50 hover:bg-emerald-100'
                            : 'border-gray-100 bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <span className="text-2xl flex-shrink-0">{mod.icon}</span>
                        <span className={`flex-1 font-medium leading-tight text-sm ${done ? 'text-emerald-800' : 'text-gray-600'}`}>
                          {mod.title}
                        </span>
                        {done ? (
                          <span className="text-emerald-500 font-bold text-xl flex-shrink-0">&#x2713;</span>
                        ) : (
                          <span className="text-gray-300 text-xl flex-shrink-0">&#x25CB;</span>
                        )}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}

          {/* Empty state for filtered view */}
          {completedCount > 0 && selectedTopicFilter !== 'All' &&
            SECTION_GROUPS.every(g => g.modules.every(m => TOPIC_GROUPS[m.id] !== selectedTopicFilter)) && (
            <p className="text-gray-400 text-sm text-center py-4">No lessons in this topic yet.</p>
          )}
        </div>

        {/* What's next */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">What would you like to do next?</h2>
          <div className="space-y-3">
            <Link
              to="/quiz/knowledge-check"
              className="flex items-center gap-4 p-4 rounded-xl bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 transition-colors"
            >
              <span className="text-3xl flex-shrink-0">&#x1F9E0;</span>
              <div>
                <p className="font-semibold text-indigo-800">Test your knowledge</p>
                <p className="text-indigo-600 text-sm">10 questions across the whole course &mdash; see how much you have taken in.</p>
              </div>
              <span className="text-indigo-400 ml-auto flex-shrink-0">&rarr;</span>
            </Link>

            <Link
              to="/feedback"
              className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors"
            >
              <span className="text-3xl flex-shrink-0">&#x1F4AC;</span>
              <div>
                <p className="font-semibold text-blue-800">Share your thoughts</p>
                <p className="text-blue-600 text-sm">Tell us what you enjoyed or what confused you — no GitHub needed.</p>
              </div>
              <span className="text-blue-400 ml-auto flex-shrink-0">&rarr;</span>
            </Link>

            <Link
              to="/explore/live-activity"
              className="flex items-center gap-4 p-4 rounded-xl bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 transition-colors"
            >
              <span className="text-3xl flex-shrink-0">&#x1F4CB;</span>
              <div>
                <p className="font-semibold text-indigo-800">See the AI at work</p>
                <p className="text-indigo-600 text-sm">Browse the real GitHub issues from this project — fetched live.</p>
              </div>
              <span className="text-indigo-400 ml-auto flex-shrink-0">&rarr;</span>
            </Link>

            <a
              href="https://github.com/Sayfan-AI/ronny-learns-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors"
            >
              <span className="text-3xl flex-shrink-0">&#x1F3E0;</span>
              <div>
                <p className="font-semibold text-gray-800">Explore the project on GitHub</p>
                <p className="text-gray-500 text-sm">Browse the real repository, issues, pull requests, and commit history.</p>
              </div>
              <span className="text-gray-400 ml-auto flex-shrink-0">&rarr;</span>
            </a>

            {allDone && (
              <Link
                to="/certificate"
                className="flex items-center gap-4 p-4 rounded-xl bg-amber-50 border border-amber-200 hover:bg-amber-100 transition-colors"
              >
                <span className="text-3xl flex-shrink-0">&#x1F3C6;</span>
                <div>
                  <p className="font-semibold text-amber-800">Get your certificate</p>
                  <p className="text-amber-600 text-sm">You earned it — view and save your certificate of completion.</p>
                </div>
                <span className="text-amber-400 ml-auto flex-shrink-0">&rarr;</span>
              </Link>
            )}
          </div>
        </div>

        {/* Achievement certificate — shown when 10+ lessons completed */}
        {quizScoreData.attempted.length >= 10 ? (
          <div className="bg-gradient-to-b from-amber-50 to-white rounded-2xl shadow-md border-2 border-amber-200 p-6 space-y-4 print:shadow-none">
            <div className="text-center space-y-1">
              <div className="flex justify-center gap-2 text-2xl">
                <span>&#x2B50;</span>
                <span>&#x1F3C6;</span>
                <span>&#x2B50;</span>
              </div>
              <p className="text-xs font-bold text-amber-600 uppercase tracking-widest">Certificate of Achievement</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-gray-500">This certifies that</p>
              <p className="text-3xl font-extrabold text-gray-800">{displayName}</p>
              <p className="text-gray-500">has completed</p>
              <p className="text-2xl font-bold text-amber-700">{quizScoreData.attempted.length} lessons</p>
              <p className="text-gray-500 text-sm">on Ronny Learns AI</p>
              {quizScoreData.attempted.length >= 100 && (
                <p className="text-amber-700 font-semibold text-sm">&#x1F31F; Outstanding — you have mastered over 100 lessons!</p>
              )}
              {quizScoreData.attempted.length >= 50 && quizScoreData.attempted.length < 100 && (
                <p className="text-amber-700 font-semibold text-sm">&#x1F4AA; Exceptional — halfway to 100 lessons!</p>
              )}
              {quizScoreData.attempted.length >= 25 && quizScoreData.attempted.length < 50 && (
                <p className="text-amber-700 font-semibold text-sm">&#x1F680; Impressive progress — keep going!</p>
              )}
              {quizScoreData.attempted.length >= 10 && quizScoreData.attempted.length < 25 && (
                <p className="text-amber-700 font-semibold text-sm">&#x1F389; Great start — you have built a solid foundation!</p>
              )}
            </div>
            <div className="flex justify-between items-end pt-2 border-t border-amber-100 text-xs text-gray-400">
              <span>Date: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span>Issued by: Genesis AI System</span>
            </div>
            <div className="flex justify-center print:hidden">
              <button
                onClick={() => window.print()}
                className="px-5 py-2 rounded-xl border border-amber-300 text-amber-700 font-semibold text-sm hover:bg-amber-50 transition-colors"
              >
                &#x1F5A8; Print or save as PDF
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center space-y-1">
            <span className="text-2xl">&#x1F3C6;</span>
            <p className="text-amber-800 font-semibold text-sm">Complete {10 - quizScoreData.attempted.length} more {10 - quizScoreData.attempted.length === 1 ? 'lesson' : 'lessons'} to unlock your certificate</p>
            <p className="text-amber-600 text-xs">{quizScoreData.attempted.length} of 10 lessons needed</p>
          </div>
        )}

        {/* Export progress */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Export my progress</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Download or copy a plain-text summary of everything you have learned &mdash; including
            your completed lessons, quiz scores, personal notes, and achievements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleCopyExport}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-800 font-semibold text-sm transition-colors"
            >
              {exportStatus === 'copied' ? (
                <><span>&#x2713;</span> Copied!</>
              ) : (
                <><span>&#x1F4CB;</span> Copy to clipboard</>
              )}
            </button>
            <button
              onClick={handleDownloadExport}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-800 font-semibold text-sm transition-colors"
            >
              {exportStatus === 'downloaded' ? (
                <><span>&#x2713;</span> Downloaded!</>
              ) : (
                <><span>&#x1F4E5;</span> Download as .txt</>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
