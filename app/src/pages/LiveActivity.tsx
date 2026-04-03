import { Link } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'

interface GitHubIssue {
  id: number
  number: number
  title: string
  state: 'open' | 'closed'
  html_url: string
  created_at: string
  labels: Array<{ id: number; name: string; color: string }>
}

function IssueCard({ issue }: { issue: GitHubIssue }) {
  const date = new Date(issue.created_at).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <a
      href={issue.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md hover:border-blue-200 transition-all duration-200 space-y-2"
    >
      <div className="flex items-start gap-3">
        <span className={`mt-1.5 flex-shrink-0 w-3 h-3 rounded-full ${issue.state === 'open' ? 'bg-green-500' : 'bg-purple-500'}`} />
        <div className="flex-1 min-w-0">
          <p className="font-medium text-gray-800 text-sm leading-snug">{issue.title}</p>
          <p className="text-gray-400 text-xs mt-1">#{issue.number} &middot; {issue.state === 'open' ? 'Open' : 'Closed'} &middot; {date}</p>
        </div>
      </div>
      {issue.labels.length > 0 && (
        <div className="flex flex-wrap gap-1 pl-6">
          {issue.labels.map(label => (
            <span
              key={label.id}
              className="px-2 py-0.5 rounded-full text-xs font-medium"
              style={{ backgroundColor: `#${label.color}22`, color: `#${label.color}` }}
            >
              {label.name}
            </span>
          ))}
        </div>
      )}
    </a>
  )
}

export function LiveActivity() {
  const { data: issues, isLoading, isError } = useQuery<GitHubIssue[]>({
    queryKey: ['github-issues'],
    queryFn: async () => {
      const res = await fetch(
        'https://api.github.com/repos/Sayfan-AI/ronny-learns-ai/issues?state=all&per_page=20'
      )
      if (!res.ok) throw new Error('Failed to fetch issues')
      return res.json()
    },
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
          <div className="text-5xl">&#128225;</div>
          <h1 className="text-3xl font-bold text-gray-800">Live Activity</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            This page shows the real GitHub issues from this project &mdash; the actual to-do list that the AI agents are working from, right now.
          </p>
        </div>

        {/* What are issues */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">What are you looking at?</h2>
          <p className="text-gray-600 leading-relaxed">
            Each item below is a <strong>GitHub issue</strong> &mdash; a task, idea, or message in the project&apos;s shared inbox. Both humans and AI agents read and respond to issues.
          </p>
          <p className="text-gray-600 leading-relaxed">
            These are not made-up examples. This is the real list, fetched live from GitHub&apos;s servers. Refresh the page and you might see new ones &mdash; the AI is always working.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0" />
              <span className="text-gray-600">Open &mdash; still in progress</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-500 flex-shrink-0" />
              <span className="text-gray-600">Closed &mdash; completed</span>
            </div>
          </div>
        </div>

        {/* Issues list */}
        <div className="space-y-3">
          {isLoading && (
            <div className="bg-white rounded-2xl shadow-md p-8 text-center space-y-3">
              <div className="text-3xl animate-pulse">&#9203;</div>
              <p className="text-gray-500">Fetching live issues from GitHub&hellip;</p>
            </div>
          )}
          {isError && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center space-y-2">
              <p className="text-red-700 font-medium">Could not load issues right now</p>
              <p className="text-red-600 text-sm">GitHub might be temporarily unavailable. Try refreshing in a moment.</p>
              <a
                href="https://github.com/Sayfan-AI/ronny-learns-ai/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 hover:underline text-sm"
              >
                View issues directly on GitHub &rarr;
              </a>
            </div>
          )}
          {issues && issues.length > 0 && (
            <>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-700">Most recent 20 issues</h2>
                <a
                  href="https://github.com/Sayfan-AI/ronny-learns-ai/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-sm"
                >
                  View all on GitHub &rarr;
                </a>
              </div>
              {issues.map(issue => (
                <IssueCard key={issue.id} issue={issue} />
              ))}
            </>
          )}
        </div>

        {/* Try it yourself */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-semibold text-indigo-800">Try it yourself</h2>
          <p className="text-indigo-700 leading-relaxed text-sm">
            Click on any issue to see the full conversation on GitHub. You can see exactly what was requested, what the AI did, and any comments left by humans.
          </p>
          <p className="text-indigo-700 leading-relaxed text-sm">
            If you have a GitHub account, you can leave a comment on any issue. The genesis system will read it and may respond.
          </p>
          <Link
            to="/learn/how-to-give-feedback"
            className="inline-block px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors"
          >
            Learn how to give feedback &rarr;
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-2">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
          >
            &larr; Home
          </Link>
        </div>

      </div>
    </div>
  )
}
