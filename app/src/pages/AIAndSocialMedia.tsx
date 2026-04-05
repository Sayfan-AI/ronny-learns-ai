import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { LessonFeedback } from '../components/LessonFeedback'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { ShareButton } from '../components/ShareButton'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is the main goal of a social media recommendation algorithm?',
    options: [
      'To show you the most recent posts in chronological order',
      'To show you content from your closest friends first',
      'To maximise the time you spend on the platform by showing content likely to keep you engaged',
      'To show you the most educational or accurate content available',
    ],
    correctIndex: 2,
    explanation:
      'Recommendation algorithms are optimised for engagement — the more time you spend on the platform, the more adverts the company can show you. This means the algorithm learns what captures your attention, not necessarily what is best for you.',
  },
  {
    question: 'What is a "filter bubble"?',
    options: [
      'A spam filter that blocks unwanted messages',
      'A situation where algorithms show you content that matches your existing views, gradually limiting your exposure to different perspectives',
      'A privacy feature that hides your personal data from advertisers',
      'A setting that lets you filter out certain types of posts',
    ],
    correctIndex: 1,
    explanation:
      'A filter bubble forms when an algorithm — learning from your past behaviour — starts showing you more and more content that matches what you already engage with. Over time this can mean your feed becomes a narrow slice of reality, reinforcing existing views and rarely challenging them.',
  },
  {
    question: 'How does AI help platforms detect harmful content at scale?',
    options: [
      'Human moderators review every post before it is published',
      'AI classifiers automatically flag content that matches patterns of hate speech, violence, and other policy violations — which is then reviewed or removed',
      'Users must report harmful content before the platform acts',
      'AI detects harmful content by checking if it contains blocked words only',
    ],
    correctIndex: 1,
    explanation:
      'Platforms receive millions of posts per hour — far too many for human moderators to review. AI classifiers are trained to recognise patterns in harmful content and can flag or automatically remove it. However, these systems make mistakes in both directions.',
  },
  {
    question: 'Which of these is a practical way to take back some control from social media algorithms?',
    options: [
      'Delete your account — it is the only way',
      'Only use social media after midnight when fewer people are online',
      'Actively use "not interested" or mute options, engage with a wider variety of content, and take deliberate breaks',
      'Always click on every post in your feed so the algorithm has more data',
    ],
    correctIndex: 2,
    explanation:
      'Most platforms give you tools to shape your own algorithm: telling it you are not interested in something, following accounts with different perspectives, muting topics that feel overwhelming. Intentional engagement helps the algorithm reflect your actual preferences.',
  },
  {
    question: 'Why might a social media platform\'s AI remove a legitimate news photograph?',
    options: [
      'Because news content is automatically filtered out to reduce misinformation',
      'Because AI content classifiers work on pattern matching and cannot always understand context — a historical image and a harmful violent image may look similar to the classifier',
      'Because news photos are always protected by copyright and cannot be shared',
      'AI never removes legitimate content — it only removes content flagged by users',
    ],
    correctIndex: 1,
    explanation:
      'AI classifiers trained to detect graphic violence learn patterns from training data — but they struggle with context. A famous historical photograph depicting the horrors of war may trigger the same classifier as a harmful violent image. This is why content moderation regularly produces controversial decisions.',
  },
]

export function AIAndSocialMedia() {
  useMarkVisited('ai-and-social-media')
  useLessonVisit('ai-and-social-media')
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4F2;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and social media
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Feeds, filters, and what you see &mdash; how AI decides what appears in your
            timeline and what you can do about it.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-social-media" />
          <ShareButton lessonTitle="ai-and-social-media" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Why does your feed look different to everyone else&apos;s?</h2>
          <p className="text-gray-600 leading-relaxed">
            Open Instagram, TikTok, Facebook, or YouTube right now. The content you see is not a
            random selection or a simple chronological list. It is a carefully curated sequence
            produced by an AI system that has spent years learning exactly what keeps <em>you</em>{' '}
            watching, scrolling, and coming back.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This AI is called a <strong>recommendation algorithm</strong>. It watches everything
            you do on the platform &mdash; what you pause on, what you skip, what you like, what
            you comment on, how long you watch, even what time of day you use the app. From all
            this it builds a model of your interests and predicts what you will engage with next.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-blue-800 text-sm">What &ldquo;engagement&rdquo; actually means</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              The algorithm does not optimise for what makes you happy, informed, or healthy.
              It optimises for <strong>engagement</strong> &mdash; likes, comments, shares, watch
              time, return visits. These proxy metrics drive advertising revenue, and they do not
              always point in the same direction as your wellbeing.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How the algorithm decides what you see</h2>
          <p className="text-gray-600 leading-relaxed">
            Each platform&apos;s algorithm is different, but they all share a similar approach.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CA;',
                label: 'Signals from you',
                text: 'Everything you do sends a signal: what you watch to the end, what you scroll past quickly, what you search for, who you message. Passive signals (watching without reacting) are just as important as active ones (liking or sharing).',
              },
              {
                icon: '&#x1F465;',
                label: 'Signals from people like you',
                text: 'The algorithm groups users with similar behaviour patterns. If people with similar histories to yours all loved a particular video, the algorithm predicts you will too — even if you have never searched for that topic.',
              },
              {
                icon: '&#x1F4C8;',
                label: 'Content performance signals',
                text: 'New content is shown to a small test group first. If it gets strong engagement, the algorithm amplifies it to more people. If it underperforms, it quietly disappears. This is why a post from a small account can sometimes go viral overnight.',
              },
              {
                icon: '&#x1F55C;',
                label: 'Recency and freshness',
                text: 'New content is generally given a boost. This is why creators post at specific times of day — the algorithm gives each piece of content a brief window of opportunity when it first appears.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Filter bubbles and echo chambers</h2>
          <p className="text-gray-600 leading-relaxed">
            Because the algorithm learns from what you engage with, it tends to show you more of
            the same. Engage with political content from one perspective and the algorithm learns
            that is what you like. Over time your feed fills with a narrower slice of reality.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This is called a <strong>filter bubble</strong> &mdash; a personalised information
            environment where you primarily see content that reinforces what you already believe.
            It is not a conspiracy. It is an algorithm doing exactly what it was designed to do:
            keep you engaged by showing you things you respond to.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'The bubble problem',
                text: 'If you rarely encounter perspectives different from your own, disagreement starts to feel more extreme than it is. Research suggests filter bubbles can contribute to political polarisation — not because the algorithm intends to divide people, but because outrage generates more engagement than nuanced content.',
              },
              {
                label: 'Echo chambers',
                text: 'Related but slightly different: an echo chamber is a community (online group, subreddit, Facebook group) where one viewpoint dominates and dissenting voices are actively discouraged. Algorithms can funnel people into echo chambers by recommending groups that match their current interests.',
              },
              {
                label: 'The research is nuanced',
                text: 'Academic research on filter bubbles is mixed. Some studies find that social media actually exposes people to more diverse views than their offline lives. Filter bubbles are real, but they are not equally severe for everyone.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-gray-800 text-sm">{label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How AI removes harmful content &mdash; and sometimes gets it wrong</h2>
          <p className="text-gray-600 leading-relaxed">
            Major platforms receive millions of posts per hour. Human moderators cannot review
            everything, so AI does most of the initial screening. Trained classifiers detect
            patterns in text, images, audio, and video that match policy violations like hate
            speech, graphic violence, and dangerous misinformation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-red-50 border border-red-100 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-red-800 text-sm">False positives</p>
              <p className="text-red-700 text-sm leading-relaxed">
                Legitimate content removed in error: historical war photographs, news images
                of protests, medical or educational content, and satire are all regularly
                caught by overzealous AI classifiers.
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-orange-800 text-sm">False negatives</p>
              <p className="text-orange-700 text-sm leading-relaxed">
                Harmful content that slips through. Bad actors learn to phrase harmful content
                in ways the classifier does not recognise. Subtle or context-dependent harassment
                is particularly hard for AI to catch.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What you can do</h2>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F6AB;',
                label: 'Use platform tools',
                text: '"Not interested", "mute topic", "see less of this" buttons are available on most platforms. Using them actively shapes your feed. The algorithm takes these signals seriously — they are stronger than passive behaviour.',
              },
              {
                icon: '&#x1F4F5;',
                label: 'Engage deliberately',
                text: 'The algorithm learns from every click, like, and comment. Consciously choose what you interact with rather than reacting automatically. If you only engage with content that adds value, your feed will gradually reflect that.',
              },
              {
                icon: '&#x1F310;',
                label: 'Follow diverse sources',
                text: 'Actively seeking out accounts with different perspectives helps push your feed beyond its current limits. You do not have to like the content — just occasionally engaging with it signals to the algorithm that you want variety.',
              },
              {
                icon: '&#x23F2;&#xFE0F;',
                label: 'Set intentional limits',
                text: 'Using Screen Time (iOS) or Digital Wellbeing (Android) to set daily limits, or choosing specific times to check social media, can help you step out of the automatic scrolling pattern.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-bold text-blue-800">The key thing to remember</h2>
          <p className="text-blue-700 leading-relaxed">
            Social media algorithms are not neutral tools. They are AI systems designed to
            maximise engagement, and they are very good at their job. That is not inherently bad
            &mdash; they also surface genuinely useful and delightful content.
          </p>
          <p className="text-blue-700 leading-relaxed">
            The important thing is to use them intentionally. Know what they are optimising for,
            understand their tendencies, and use the tools available to make your feed work for
            you rather than the other way around.
          </p>
        </div>

        <Quiz
          lessonId="ai-and-social-media"
          lessonTitle="AI and social media"
          questions={quizQuestions}
        />

        <LessonNote lessonId="ai-and-social-media" />

        {/* Rating */}
        <LessonFeedback lessonId="ai-and-social-media" />
        <LessonRating lessonId="ai-and-social-media" />
        <ReviewLaterButton lessonId="ai-and-social-media" />

        <RelatedLessons currentId="ai-and-social-media" />

        <NextLesson currentId="ai-and-social-media" />

      </div>
    </div>
  )
}
