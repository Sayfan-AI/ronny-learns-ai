export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'

const STYLES: Record<Difficulty, string> = {
  Beginner:     'bg-green-100 text-green-700 border-green-200',
  Intermediate: 'bg-amber-100 text-amber-700 border-amber-200',
  Advanced:     'bg-red-100 text-red-700 border-red-200',
}

/**
 * Shows a difficulty badge (Beginner / Intermediate / Advanced).
 * Place this alongside the reading time indicator at the top of a lesson page.
 *
 * Usage: <DifficultyBadge level="Intermediate" />
 */
export function DifficultyBadge({ level }: { level: Difficulty }) {
  return (
    <div className={`inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full border ${STYLES[level]}`}>
      <span>{level}</span>
    </div>
  )
}
