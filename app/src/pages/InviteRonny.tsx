import { Link } from '@tanstack/react-router'

export function InviteRonny() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F49C;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            How to invite Ronny to GitHub
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            This guide is for <strong>Gigi</strong>. Once Ronny has a GitHub account, follow these steps
            to give them access to the project.
          </p>
        </div>

        {/* What Ronny will be able to see */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F440;</span>
            <h2 className="text-2xl font-semibold text-gray-700">What Ronny will be able to see</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Once invited as a collaborator with <strong>Read</strong> access, Ronny will be able to:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-lg">
            <li>Browse all the code files in the repository</li>
            <li>Read all open and closed issues (the AI&apos;s task list)</li>
            <li>See commit history (who changed what and when)</li>
            <li>Watch GitHub Actions runs (the automated pipeline)</li>
          </ul>
          <p className="text-gray-600 text-lg leading-relaxed">
            They will <em>not</em> be able to push code or close issues — Read access is
            view-only. This is safe and appropriate for learning.
          </p>
        </div>

        {/* Step by step */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4CB;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Step-by-step: Add Ronny as a collaborator</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Go to the repository on GitHub',
                body: 'Open https://github.com/Sayfan-AI/ronny-learns-ai in your browser.',
                note: null,
              },
              {
                step: 2,
                title: 'Click "Settings" in the top navigation',
                body: 'You will see a row of tabs at the top of the repository page. Click the one that says "Settings".',
                note: 'If you do not see Settings, you may need to be logged in as the repository owner.',
              },
              {
                step: 3,
                title: 'Click "Collaborators" in the left sidebar',
                body: 'In the left panel, under "Access", click "Collaborators". GitHub may ask you to confirm your password.',
                note: null,
              },
              {
                step: 4,
                title: 'Click "Add people"',
                body: 'Click the green "Add people" button. A search box will appear.',
                note: null,
              },
              {
                step: 5,
                title: 'Search for Ronny\'s GitHub username',
                body: 'Type Ronny\'s GitHub username or the email address they used to sign up. GitHub will show suggestions. Click the correct account.',
                note: 'Ronny\'s username is the one they created when following the GitHub signup tutorial.',
              },
              {
                step: 6,
                title: 'Choose "Read" access and click "Add collaborator"',
                body: 'For the role, select "Read". This gives view-only access — perfect for someone who is learning and observing. Then click "Add collaborator".',
                note: null,
              },
              {
                step: 7,
                title: 'Ronny accepts the invitation',
                body: 'GitHub will send Ronny an email with an invitation link. They need to click the link to accept. Once accepted, they can browse the project.',
                note: 'The invite email goes to the address Ronny used to create their GitHub account. Check spam if it does not arrive.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-pink-600 text-white font-bold flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                  {item.step}
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-gray-800 text-lg">{item.title}</p>
                  <p className="text-gray-600 text-base leading-relaxed">{item.body}</p>
                  {item.note && (
                    <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 leading-relaxed">
                      <strong>Note:</strong> {item.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What happens next */}
        <div className="bg-pink-50 border border-pink-200 rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F389;</span>
            <h2 className="text-2xl font-semibold text-pink-800">After Ronny accepts</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Once Ronny has accepted the invitation, share this link with them so they can explore:
          </p>
          <a
            href="https://github.com/Sayfan-AI/ronny-learns-ai/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow transition-colors duration-200"
          >
            See all issues on GitHub &rarr;
          </a>
          <p className="text-gray-700 text-lg leading-relaxed">
            Ronny can browse the issues to see what the AI team has been building, leave comments,
            and follow along with the project in real time.
          </p>
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
