import { useReadingMode } from '../hooks/useReadingMode'

export function ReadingModeButton() {
  const { active, toggle } = useReadingMode()

  return (
    <button
      onClick={toggle}
      title={active ? 'Exit reading mode (Esc)' : 'Enter reading mode'}
      aria-pressed={active}
      className={[
        'fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium shadow-md transition-all',
        active
          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
          : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50',
      ].join(' ')}
    >
      <span aria-hidden="true">{active ? '✕' : '📖'}</span>
      <span className="hidden sm:inline">{active ? 'Exit reading mode' : 'Reading mode'}</span>
    </button>
  )
}
