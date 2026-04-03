import { useQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'

interface GitHubIssue {
  number: number
  title: string
  state: 'open' | 'closed'
  html_url: string
  labels: { name: string; color: string }[]
  created_at: string
  closed_at: string | null
  pull_request?: object
}

async function fetchIssues(): Promise<GitHubIssue[]> {
  const response = await fetch(
    'https://api.github.com/repos/Sayfan-AI/ronny-learns-ai/issues?state=all&per_page=20&sort=created&direction=desc',
    { headers: { Accept: 'application/vnd.github.v3+json' } }
  )
  if (!response.ok) throw new Error('Could not fetch issues from GitHub')
  const data: GitHubIssue[] = await response.json()
  return data.filter((item) => !item.pull_request)
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function LiveActivity() {
  const { data: issues, isLoading, isError } = useQuery({
    queryKey: ['github-issues'],
    queryFn: fetchIssues,
    staleTime: 1000 * 60 * 5,
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="text-blue-500 hover:underline text-sm">
            &larr; Back to home
          </Link>
          <div className="text-5xl pt-2">📋</div>
          <h1 className="text-3xl font-bold text-gray-800">Live Activity</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            These are the real GitHub issues from this project — fetched live right now.
            This is the AI team&apos;s actual to-do list.
          </p>
        </div>

        {/* What is this */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-3">
          <h2 className="text-xl font-semibold text-gray-700">What am I looking at?</h2>
          <p className="text-gray-600 leading-relaxed">
            Each item below is an <strong>issue</strong> — a task that was either planned, in progress, or completed.
            The AI agents create these issues to track their own work. When a task is done, the issue is
            automatically closed.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This list updates live from GitHub, so you are seeing the real state of the project right now.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <span className="flex items-center gap-1 text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> Open = still to do
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-500 bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-gray-400 inline-block"></span> Closed = done
            </span>
          </div>
        </div>

        {/* Issues list */}
        <div className="space-y-3">
          {isLoading && (
            <div className="text-center py-12 text-gray-400">
              <div className="text-4xl mb-3">...</div>
              <p>Fetching latest issues from GitHub...</p>
            </div>
          )}

          {isError && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center space-y-2">
              <p className="text-red-700 font-semibold">Could not load issues right now.</p>
              <p className="text-red-600 text-sm">
                This might be a temporary network problem. Try refreshing the page.
              </p>
              <a
                href="https://github.com/Sayfan-AI/ronny-learns-ai/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 hover:underline text-sm"
              >
                View issues directly on GitHub &rarr;
              </a>
            </div>
          )}

          {issues && issues.map((issue) => (
            <a
              key={issue.number}
              href={issue.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-indigo-200 transition-all duration-200 space-y-2"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2 min-w-0">
                  <span
                    className={`mt-1 w-3 h-3 rounded-full flex-shrink-0 ${
                      issue.state === 'open' ? 'bg-green-500' : 'bg-gray-400'
                    }`}
                  />
                  <span className="font-medium text-gray-800 leading-snug">{issue.title}</span>
                </div>
                <span className="text-gray-400 text-sm flex-shrink-0">#{issue.number}</span>
              </div>

              {issue.labels.length > 0 && (
                <div className="flex flex-wrap gap-1 pl-5">
                  {issue.labels.map((label) => (
                    <span
                      key={label.name}
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        backgroundColor: `#${label.color}22`,
                        color: `#${label.color}`,
                        border: `1px solid #${label.color}44`,
                      }}
                    >
                      {label.name}
                    </span>
                  ))}
                </div>
              )}

              <div className="pl-5 text-xs text-gray-400">
                {issue.state === 'closed' && issue.closed_at
                  ? `Completed on ${formatDate(issue.closed_at)}`
                  : `Opened on ${formatDate(issue.created_at)}`}
              </div>
            </a>
          ))}
        </div>

        {/* Link to GitHub */}
        {issues && (
          <div className="text-center space-y-3 pt-2">
            <p className="text-gray-500 text-sm">Showing up to 20 most recent issues</p>
            <a
              href="https://github.com/Sayfan-AI/ronny-learns-ai/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              See all issues on GitHub &rarr;
            </a>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center pt-2">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
          >
            &larr; Home
          </Link>
          <Link
            to="/explore/how-agents-work"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors"
          >
            How the agents work &rarr;
          </Link>
        </div>

      </div>
    </div>
  )
}
