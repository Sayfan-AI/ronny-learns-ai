export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'

const STYLES: Record<Difficulty, string> = {
  Beginner:     'bg-green-100 text-green-700 border-green-200',
  Intermediate: 'bg-amber-100 text-amber-700 border-amber-200',
  Advanced:     'bg-red-100 text-red-700 border-red-200',
}

/**
 * Shows a difficulty badge (Beginner / Intermediate / Advanced).
 * Use size="sm" for compact lesson card badges, or omit for full-size lesson headers.
 *
 * Usage: <DifficultyBadge level="Intermediate" />
 *        <DifficultyBadge level="Beginner" size="sm" />
 */
export function DifficultyBadge({ level, size = 'md' }: { level: Difficulty; size?: 'sm' | 'md' }) {
  if (size === 'sm') {
    return (
      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${STYLES[level]}`}>
        {level}
      </span>
    )
  }
  return (
    <div className={`inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full border ${STYLES[level]}`}>
      <span>{level}</span>
    </div>
  )
}
