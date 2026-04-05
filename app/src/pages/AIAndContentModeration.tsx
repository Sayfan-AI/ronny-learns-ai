import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { LessonFeedback } from '../components/LessonFeedback'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { ShareButton } from '../components/ShareButton'
import { KeyTakeaways } from '../components/KeyTakeaways'

const LESSON_TITLE = 'AI and content moderation'

const KEY_TAKEAWAYS = [
  'Social media platforms receive hundreds of millions of posts per day — human-only moderation is impossible at this scale, which is why AI is used to detect hate speech, misinformation, and illegal content.',
  'AI content moderation systems generate significant false positives — removing legitimate speech, particularly from marginalised communities whose language is less well-represented in training data.',
  'Human moderators still review edge cases and make final calls on contested decisions, but they face difficult working conditions, psychological harm from repeated exposure to disturbing content, and low pay.',
  'The EU Digital Services Act (DSA) requires large platforms to be transparent about moderation practices, give users the right to appeal removals, and publish regular transparency reports.',
  'Balancing free expression with harm prevention is a genuine ethical tension — over-removal and under-removal both cause real harm, and there is no perfect answer.',
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'Why can\'t social media platforms rely entirely on human moderators?',
    options: [
      'Humans are not smart enough to identify harmful content reliably',
      'The volume of content — hundreds of millions of posts per day — makes human-only review impossible',
      'Laws in most countries ban humans from viewing user content',
      'Human moderators are not allowed to remove content without AI approval',
    ],
    correctIndex: 1,
    explanation: 'The sheer scale of content uploaded to major platforms every day is far beyond what any human workforce could review in real time. AI is used to scan content automatically and flag or remove content that violates policies.',
  },
  {
    question: 'What is a "false positive" in the context of AI content moderation?',
    options: [
      'When AI correctly removes a piece of harmful content',
      'When AI wrongly removes content that is actually legitimate',
      'When AI fails to detect a deepfake video',
      'When a user successfully appeals a moderation decision',
    ],
    correctIndex: 1,
    explanation: 'A false positive is when the AI incorrectly classifies legitimate content as harmful and removes it. LGBTQ+ creators, Black creators, and speakers of minority languages have all reported having their content disproportionately removed.',
  },
  {
    question: 'Which EU law introduced transparency requirements for how large platforms moderate content and gave users the right to appeal removal decisions?',
    options: [
      'General Data Protection Regulation (GDPR)',
      'EU AI Act',
      'Digital Services Act (DSA)',
      'Network and Information Systems Directive',
    ],
    correctIndex: 2,
    explanation: 'The EU Digital Services Act (DSA), fully in force since 2024, requires very large online platforms to be transparent about their content moderation practices, give users a right to appeal decisions, and publish regular transparency reports.',
  },
  {
    question: 'What is a well-documented impact on human content moderators?',
    options: [
      'They earn significantly more than software engineers',
      'They only review text — not images or video',
      'Repeated exposure to violent and disturbing content causes serious psychological harm',
      'They are located exclusively in the United States',
    ],
    correctIndex: 2,
    explanation: 'Human content moderators — many of whom work in outsourced call centres in the Philippines, Kenya, and other countries — review the most disturbing content on the internet. Research and legal cases have found high rates of PTSD and other psychological conditions among moderators.',
  },
  {
    question: 'Why is AI particularly likely to make more errors when moderating content in some languages compared to others?',
    options: [
      'AI can only read Latin script',
      'Training datasets tend to contain far more English content, so models perform worse on under-represented languages',
      'Some languages use encryption that AI cannot decode',
      'Governments in some countries block AI from accessing their languages',
    ],
    correctIndex: 1,
    explanation: 'AI content moderation systems are trained on large datasets that typically contain far more content in English and a handful of other major languages. This means models are less accurate for speakers of minority languages, regional dialects, or languages where irony and context are harder to capture.',
  },
]

export function AIAndContentModeration() {
  useMarkVisited('ai-and-content-moderation')

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 space-y-10">
      <header className="space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">Intermediate</span>
          <span className="text-gray-400 text-xs">7 min read</span>
          <CompletedBadge lessonId="ai-and-content-moderation" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AI and content moderation</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Every minute, millions of posts, images, and videos are uploaded to social media platforms. Keeping harmful content off these platforms is one of the hardest problems in technology — and AI is at the centre of it.
        </p>
        <div className="flex gap-2 flex-wrap">
          <ReviewLaterButton lessonId="ai-and-content-moderation" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>
      </header>

      <KeyTakeaways points={KEY_TAKEAWAYS} />

      <LessonNote lessonId="ai-and-content-moderation" />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">The scale problem</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          YouTube receives around 500 hours of video every minute. Facebook processes several billion pieces of content every day. X (formerly Twitter), Instagram, TikTok, and Reddit each handle hundreds of millions of posts, comments, and messages around the clock.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          No human workforce could review this volume of content in real time. Even a company employing 100,000 content moderators — far more than any platform actually has — could only handle a fraction of what is uploaded each hour.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          This is why AI is not just helpful for content moderation — it is essential to it. Without automated systems, platforms would either have to allow everything (creating a free-for-all) or shut down user content altogether.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">What AI moderates</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          AI moderation systems are trained to detect several categories of harmful content: hate speech targeting people based on protected characteristics; misinformation about health, elections, and public figures; child sexual abuse material (CSAM); violent and graphic content; and spam or coordinated inauthentic behaviour like bot networks.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          For most of these categories, AI acts as the first filter — flagging content automatically. Human moderators then review flagged content, handle appeals, and make decisions in ambiguous cases.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">The false positive problem</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          A <strong>false positive</strong> is when the AI incorrectly removes legitimate content. This is not a minor technical issue — it has real consequences for real people.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          LGBTQ+ creators have had educational content about safe sex removed. Black creators have reported their posts about racism being taken down while the racist content they were responding to remained up. Palestinian journalists had accounts suspended during coverage of the conflict in Gaza.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          The root cause is often training data bias. If the AI was trained mostly on English-language content from majority groups, it may not understand the context of reclaimed language, community-specific slang, or cultural references. Facebook's own research, leaked in 2021, showed the company was aware its AI removed content from marginalised groups at higher rates — but struggled to fix it without degrading moderation of genuinely harmful content.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Human moderators</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          AI cannot make every moderation decision alone. Context, cultural nuance, satire, and edge cases all require human judgment. Most platform moderation is outsourced to third-party companies in countries with lower labour costs: the Philippines, Kenya, India, and parts of Latin America. Moderators typically earn far less than tech workers in the US or UK.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          The psychological toll is severe. Moderators spend hours each day viewing beheading videos, child abuse material, graphic violence, and other deeply disturbing content. Research and legal cases brought by former moderators have documented extremely high rates of PTSD, depression, and anxiety. In 2020, Facebook agreed to pay $52 million to settle a lawsuit brought by American content moderators suffering from PTSD.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Regulation: the DSA and the Online Safety Act</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          The <strong>EU Digital Services Act (DSA)</strong>, fully in force since 2024, requires very large online platforms to publish transparency reports, give users a meaningful right to appeal removal decisions, allow independent researchers to audit their systems, and conduct annual risk assessments.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          The UK's <strong>Online Safety Act 2023</strong> takes a different approach — focusing on categories of illegal content that platforms must proactively detect and remove, and placing a "duty of care" on platforms to protect users from harm. Ofcom is the regulator responsible for enforcement.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">The free expression tension</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Content moderation sits at the intersection of two values that are both important: protecting people from harm, and protecting free expression. Over-moderation silences legitimate voices — particularly those of marginalised communities. Under-moderation allows platforms to become amplifiers of hate, harassment, and harmful misinformation.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          There is no perfect balance. What is clear is that these decisions are too important to leave entirely to AI — transparency, human oversight, robust appeals processes, and independent auditing are essential, which is what the DSA and Online Safety Act are beginning to require.
        </p>
      </section>

      <Quiz lessonId="ai-and-content-moderation" questions={QUIZ_QUESTIONS} lessonTitle={LESSON_TITLE} />

      <LessonRating lessonId="ai-and-content-moderation" />
      <LessonFeedback lessonId="ai-and-content-moderation" />

      <RelatedLessons currentId="ai-and-content-moderation" />

      <NextLesson currentId="ai-and-content-moderation" />
    </div>
  )
}
