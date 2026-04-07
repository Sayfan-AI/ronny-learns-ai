import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
import { CompletedBadge } from '../components/CompletedBadge'
import { LessonNote } from '../components/LessonNote'
import { LessonRating } from '../components/LessonRating'
import { LessonFeedback } from '../components/LessonFeedback'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { NextLesson } from '../components/NextLesson'

interface TipCardProps {
  icon: string
  title: string
  children: React.ReactNode
  link?: string
  linkText?: string
}

function TipCard({ icon, title, children, link, linkText }: TipCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-3xl" dangerouslySetInnerHTML={{ __html: icon }} />
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">{title}</h2>
      </div>
      {children}
      {link && linkText && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold underline"
        >
          {linkText} &#x2197;
        </a>
      )}
    </div>
  )
}

const BIO_EXAMPLES = [
  {
    label: 'Simple',
    text: 'Learning to code for the first time. Based in Tel Aviv.',
  },
  {
    label: 'With interests',
    text: 'Curious about AI and how computers think. Currently working through my first programming lessons.',
  },
  {
    label: 'Professional',
    text: 'Beginner developer interested in AI tools and automation. Open to learning and collaboration.',
  },
]

export function GitHubProfile() {
  useMarkVisited('github-profile')
  useLessonVisit('github-profile')

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center px-4 py-8 sm:py-16">
      <div className="max-w-2xl w-full space-y-6 sm:space-y-8">

        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="text-5xl sm:text-6xl">&#x1F464;</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
            Your GitHub profile
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Your GitHub profile is your public developer identity. In this lesson you
            will learn how to set it up so that anyone who visits can see who you are
            and what you are working on.
          </p>
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm px-4 py-2 rounded-full">
            <span>About 6 min</span>
          </div>
          <CompletedBadge lessonId="github-profile" />
        </div>

        {/* Why it matters */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">&#x1F31F;</span>
            <h2 className="text-2xl font-semibold text-indigo-800">Why does it matter?</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            When you comment on an issue, open a pull request, or contribute to a
            project, people will click your username to find out who you are. A complete
            profile tells your story even when you are not in the room.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Recruiters, collaborators, and open-source project maintainers all look at
            GitHub profiles. A good profile with a photo and bio instantly feels more
            trustworthy than a blank one.
          </p>
        </div>

        {/* Avatar */}
        <TipCard
          icon="&#x1F5BC;&#xFE0F;"
          title="Set a profile photo"
          link="https://github.com/settings/profile"
          linkText="Go to profile settings"
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            A real photo (or a friendly avatar illustration) makes your profile feel
            human. It does not have to be professional &mdash; it just needs to not be the
            default grey silhouette.
          </p>
          <ol className="space-y-2 text-gray-700 text-base leading-relaxed list-none">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
              <span>Click your profile picture in the top-right corner of GitHub</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
              <span>Select &ldquo;Settings&rdquo;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
              <span>Click &ldquo;Edit&rdquo; next to your current avatar</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-xs">4</span>
              <span>Upload a photo from your device</span>
            </li>
          </ol>
        </TipCard>

        {/* Bio */}
        <TipCard
          icon="&#x270F;&#xFE0F;"
          title="Write a bio"
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            Your bio is a short description of yourself (max 160 characters &mdash; about the
            length of a tweet). It appears directly below your name on your profile page.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">You do not need to be fancy. Here are some examples:</p>
          <div className="space-y-3">
            {BIO_EXAMPLES.map(ex => (
              <div key={ex.label} className="bg-gray-50 rounded-xl p-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">{ex.label}</span>
                <p className="text-gray-800 mt-1 text-base">&ldquo;{ex.text}&rdquo;</p>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <span className="text-2xl flex-shrink-0">&#x1F4A1;</span>
            <p className="text-amber-800 text-base leading-relaxed">
              You can also add your location, website, company, and social links in the
              profile settings. These are all optional but help people connect with you.
            </p>
          </div>
        </TipCard>

        {/* Pinned repos */}
        <TipCard
          icon="&#x1F4CC;"
          title="Pin your best repositories"
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            Pinned repositories appear at the top of your profile so visitors immediately
            see the projects you are most proud of. You can pin up to six repositories.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Even if you only have one or two repositories, pin the ones that best
            represent what you know how to do, or what you are currently learning.
          </p>
          <ol className="space-y-2 text-gray-700 text-base leading-relaxed list-none">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-xs">1</span>
              <span>Go to your profile page (click your avatar, then &ldquo;Your profile&rdquo;)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-xs">2</span>
              <span>In the Repositories section click &ldquo;Customize your pins&rdquo;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-xs">3</span>
              <span>Check up to six repositories and click &ldquo;Save pins&rdquo;</span>
            </li>
          </ol>
        </TipCard>

        {/* What recruiters see */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">&#x1F50D;</span>
            <h2 className="text-2xl font-semibold text-gray-700">What do recruiters look at?</h2>
          </div>
          <div className="space-y-3 text-gray-700 text-lg leading-relaxed">
            <div className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold flex-shrink-0 mt-1">&#x2022;</span>
              <p><strong>Profile photo and name</strong> &mdash; first impression, always</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold flex-shrink-0 mt-1">&#x2022;</span>
              <p><strong>Contribution activity</strong> &mdash; the green squares calendar shows how often you code. Regular small contributions beat rare big ones.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold flex-shrink-0 mt-1">&#x2022;</span>
              <p><strong>Pinned repositories</strong> &mdash; they will open one or two to see your code and README files</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold flex-shrink-0 mt-1">&#x2022;</span>
              <p><strong>Bio and location</strong> &mdash; helps them know if you are a fit for their team</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-indigo-600 text-white rounded-2xl p-6 sm:p-8 text-center space-y-4">
          <div className="text-4xl">&#x1F464;</div>
          <h2 className="text-2xl font-bold">Polish your profile now</h2>
          <p className="text-indigo-100 text-lg">
            It only takes 5 minutes to add a photo, a short bio, and pin a repository.
            Do it now while you are thinking about it.
          </p>
          <a
            href="https://github.com/settings/profile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
          >
            Open profile settings &#x2197;
          </a>
        </div>

        <LessonNote lessonId="github-profile" />
        <LessonFeedback lessonId="github-profile" />
        <LessonRating lessonId="github-profile" />
        <ReviewLaterButton lessonId="github-profile" />
        <NextLesson currentId="github-profile" />
      </div>
    </div>
  )
}
