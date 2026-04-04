import { Link } from '@tanstack/react-router'
import { useAchievements } from '../hooks/useAchievements'

export function Achievements() {
  const achievements = useAchievements()
  const earnedCount = achievements.filter(a => a.earned).length

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-3">
          <div className="text-6xl">&#x1F3C5;</div>
          <h1 className="text-4xl font-bold text-gray-800">Your achievements</h1>
          <p className="text-gray-500 text-lg">
            {earnedCount === 0
              ? 'Complete lessons to earn badges.'
              : earnedCount === achievements.length
              ? 'You have earned every badge — incredible!'
              : `${earnedCount} of ${achievements.length} badges earned. Keep going!`}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map(achievement => (
            <div
              key={achievement.id}
              className={`rounded-2xl border p-5 flex gap-4 items-start transition-all ${
                achievement.earned
                  ? 'bg-white border-amber-200 shadow-sm'
                  : 'bg-gray-50 border-gray-200 opacity-60'
              }`}
            >
              <div
                className={`text-4xl flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl ${
                  achievement.earned ? 'bg-amber-100' : 'bg-gray-100 grayscale'
                }`}
                dangerouslySetInnerHTML={{ __html: achievement.icon }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-bold text-gray-800 text-sm">{achievement.name}</p>
                  {achievement.earned && (
                    <span className="bg-teal-100 text-teal-700 text-xs px-2 py-0.5 rounded-full font-semibold">
                      Earned
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.earned ? achievement.description : achievement.unlockHint}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/my-progress"
            className="text-blue-500 hover:text-blue-700 underline text-sm"
          >
            Back to My Progress
          </Link>
        </div>

      </div>
    </div>
  )
}
