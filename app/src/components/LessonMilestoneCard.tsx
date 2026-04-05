interface LessonMilestoneCardProps {
  completedCount: number
}

const MILESTONES = [
  { count: 10, label: '10 lessons', icon: '&#x1F331;', message: 'You are getting started — well done!', color: 'green' },
  { count: 25, label: '25 lessons', icon: '&#x1F4DA;', message: 'A quarter of the way to expert status!', color: 'blue' },
  { count: 50, label: '50 lessons', icon: '&#x1F680;', message: 'Halfway hero! You know more about AI than most people.', color: 'indigo' },
  { count: 75, label: '75 lessons', icon: '&#x1F525;', message: 'Three quarters done — you are on fire!', color: 'orange' },
  { count: 100, label: '100 lessons', icon: '&#x1F3C6;', message: 'AI expert! You have completed 100 lessons.', color: 'amber' },
]

function getRelevantMilestone(count: number): { current: typeof MILESTONES[number] | null; next: typeof MILESTONES[number] | null } {
  const achieved = MILESTONES.filter(m => count >= m.count)
  const upcoming = MILESTONES.filter(m => count < m.count)

  return {
    current: achieved.length > 0 ? achieved[achieved.length - 1] : null,
    next: upcoming.length > 0 ? upcoming[0] : null,
  }
}

const COLOR_STYLES: Record<string, { bg: string; border: string; text: string; bar: string }> = {
  green: { bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-700', text: 'text-green-700 dark:text-green-300', bar: 'bg-green-500' },
  blue: { bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-700', text: 'text-blue-700 dark:text-blue-300', bar: 'bg-blue-500' },
  indigo: { bg: 'bg-indigo-50 dark:bg-indigo-900/20', border: 'border-indigo-200 dark:border-indigo-700', text: 'text-indigo-700 dark:text-indigo-300', bar: 'bg-indigo-500' },
  orange: { bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-700', text: 'text-orange-700 dark:text-orange-300', bar: 'bg-orange-500' },
  amber: { bg: 'bg-amber-50 dark:bg-amber-900/20', border: 'border-amber-200 dark:border-amber-700', text: 'text-amber-700 dark:text-amber-300', bar: 'bg-amber-500' },
}

/**
 * Shows a milestone celebration card when the user hits 10, 25, 50, 75, or 100 completed lessons.
 * Also shows progress toward the next milestone when not at a milestone exactly.
 */
export function LessonMilestoneCard({ completedCount }: LessonMilestoneCardProps) {
  if (completedCount < 5) return null

  const { current, next } = getRelevantMilestone(completedCount)

  // Show the "just hit" celebration if within 3 lessons of a milestone
  const recentMilestone = MILESTONES.find(m => completedCount >= m.count && completedCount - m.count <= 3)

  if (recentMilestone) {
    const styles = COLOR_STYLES[recentMilestone.color]
    return (
      <div className={`rounded-2xl border p-5 ${styles.bg} ${styles.border}`}>
        <div className="flex items-center gap-3">
          <span className="text-3xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: recentMilestone.icon }} />
          <div>
            <p className={`font-bold text-base ${styles.text}`}>{recentMilestone.label} completed!</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">{recentMilestone.message}</p>
          </div>
        </div>
      </div>
    )
  }

  if (!next) return null

  const prevMilestone = current ? current.count : 0
  const progress = completedCount - prevMilestone
  const total = next.count - prevMilestone
  const pct = Math.round((progress / total) * 100)
  const styles = COLOR_STYLES[next.color]

  return (
    <div className={`rounded-2xl border p-5 ${styles.bg} ${styles.border}`}>
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl" dangerouslySetInnerHTML={{ __html: next.icon }} />
          <p className={`font-bold text-sm ${styles.text}`}>
            Next milestone: {next.label}
          </p>
        </div>
        <span className={`text-sm font-bold ${styles.text}`}>{completedCount}/{next.count}</span>
      </div>
      <div className="h-2 bg-white/60 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ${styles.bar}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{next.count - completedCount} more to go</p>
    </div>
  )
}
