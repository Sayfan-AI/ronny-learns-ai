export interface LessonSeries {
  slug: string
  name: string
  description: string
  icon: string
  lessonIds: string[]
}

export const LESSON_SERIES: LessonSeries[] = []

/**
 * Returns all series that a given lesson belongs to.
 */
export function getSeriesForLesson(lessonId: string): LessonSeries[] {
  return LESSON_SERIES.filter(series => series.lessonIds.includes(lessonId))
}

/**
 * Calculates how many lessons in a series have been visited.
 * Pass the set of visited lesson IDs from localStorage.
 */
export function getSeriesProgress(
  series: LessonSeries,
  visitedIds: Set<string>,
): { completed: number; total: number } {
  const completed = series.lessonIds.filter(id => visitedIds.has(id)).length
  return { completed, total: series.lessonIds.length }
}
