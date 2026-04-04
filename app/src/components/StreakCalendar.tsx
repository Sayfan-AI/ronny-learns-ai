interface StreakCalendarProps {
  /** Record of { 'YYYY-MM-DD': lessonCount } */
  calendar: Record<string, number>
}

const DAY_LABELS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

/**
 * Renders a 7-week rolling grid (7 cols x 7 rows).
 * Today sits in the bottom-right corner; the grid extends 48 days back.
 * Coloured squares = days when at least one lesson was completed.
 */
export function StreakCalendar({ calendar }: StreakCalendarProps) {
  // Build an array of 49 dates ending with today
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const days: Array<{ dateStr: string; count: number }> = []
  for (let i = 48; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(today.getDate() - i)
    const dateStr = d.toISOString().slice(0, 10)
    days.push({ dateStr, count: calendar[dateStr] ?? 0 })
  }

  // Arrange into 7 columns (Mon–Sun) x 7 rows
  // We need to find the day-of-week of the first date to pad the grid
  // For simplicity, lay out in column-major order (columns = weeks, rows = days)
  // days[0] is oldest; days[48] is today
  // We render 7 columns of 7 days each
  const columns: Array<Array<{ dateStr: string; count: number }>> = []
  for (let col = 0; col < 7; col++) {
    columns.push(days.slice(col * 7, col * 7 + 7))
  }

  const totalLearningDays = Object.values(calendar).filter(v => v > 0).length

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-lg">&#x1F4C5;</span>
        <h3 className="font-bold text-gray-800">Learning calendar</h3>
      </div>
      <p className="text-sm text-gray-500">
        Each square is one day. A coloured square means you completed at least one lesson that day.
      </p>

      {/* Day-of-week labels on the left, weeks as columns */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-0">
          <div className="flex gap-1">
            {/* Day-of-week labels on left */}
            <div className="flex flex-col gap-1 mr-1">
              {DAY_LABELS.map((label, i) => (
                <div key={i} className="w-4 h-7 flex items-center justify-center text-xs text-gray-400 font-medium">
                  {label}
                </div>
              ))}
            </div>
            {/* 7 columns of 7 days each */}
            {columns.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-1">
                {col.map(({ dateStr, count }) => {
                  const isToday = dateStr === today.toISOString().slice(0, 10)
                  const hasLesson = count > 0
                  return (
                    <div
                      key={dateStr}
                      title={hasLesson ? `${dateStr}: ${count} lesson${count === 1 ? '' : 's'}` : dateStr}
                      className={[
                        'w-7 h-7 rounded-md transition-colors',
                        hasLesson
                          ? 'bg-teal-500 hover:bg-teal-400'
                          : 'bg-gray-100 hover:bg-gray-200',
                        isToday ? 'ring-2 ring-teal-700 ring-offset-1' : '',
                      ].join(' ')}
                      aria-label={`${dateStr}${hasLesson ? `: ${count} lesson${count === 1 ? '' : 's'} completed` : ': no lessons'}`}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500">
        {totalLearningDays === 0
          ? 'Complete your first lesson to see it appear here!'
          : `You have learned on ${totalLearningDays} day${totalLearningDays === 1 ? '' : 's'} in total.`}
      </p>
    </div>
  )
}
