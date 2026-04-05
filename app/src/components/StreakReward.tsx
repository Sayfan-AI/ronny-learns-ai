interface StreakRewardProps {
  streak: number
}

/**
 * Shows a congratulatory streak panel when the user has visited lessons
 * on 3 or more consecutive days. Shown prominently at the top of the home page.
 */
export function StreakReward({ streak }: StreakRewardProps) {
  if (streak < 3) return null

  // Pick milestone targets to encourage continued streaking
  function getNextMilestone(current: number): number {
    const milestones = [3, 5, 7, 10, 14, 21, 30, 60, 100]
    return milestones.find(m => m > current) ?? current + 10
  }

  const next = getNextMilestone(streak)
  const remaining = next - streak

  function getEmoji(s: number): string {
    if (s >= 30) return '&#x1F525;&#x1F525;&#x1F525;'
    if (s >= 14) return '&#x1F525;&#x1F525;'
    if (s >= 7) return '&#x1F525;'
    return '&#x2B50;'
  }

  function getMessage(s: number): string {
    if (s >= 30) return `${s} days in a row — incredible dedication!`
    if (s >= 14) return `Two weeks straight — you are on fire!`
    if (s >= 7) return `A full week! You are building a real habit.`
    if (s >= 5) return `Five days running — keep it going!`
    return `${s} days in a row — great momentum!`
  }

  return (
    <div
      className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-4 flex items-start gap-4"
      role="status"
      aria-label={`Learning streak: ${streak} days`}
    >
      <span
        className="text-3xl flex-shrink-0 mt-0.5"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: getEmoji(streak) }}
      />
      <div className="flex-1 min-w-0">
        <p className="font-bold text-amber-900 text-base leading-tight mb-0.5">
          {getMessage(streak)}
        </p>
        <p className="text-amber-700 text-sm">
          {remaining === 1
            ? `Just 1 more day to reach your ${next}-day streak.`
            : `${remaining} more days to reach your ${next}-day streak milestone.`}
        </p>
      </div>
    </div>
  )
}
