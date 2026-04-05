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

const LESSON_TITLE = 'AI and social media content moderation — hate speech detection, misinformation, false positives, human moderation, and the EU DSA'

const KEY_TAKEAWAYS = [
  'The scale of social media content — billions of posts per day — makes human-only moderation impossible. AI classifiers automatically review text, images, video, and audio for violations of platform policies.',
  'AI content moderation has a persistent false positive problem: it disproportionately removes content from marginalised communities, non-English speakers, and activists, while sometimes failing to catch well-disguised harmful content.',
  'Human content moderators play an essential role reviewing borderline cases and building the labelled datasets AI is trained on. They are often employed by third-party contractors, paid poorly, and exposed to extremely distressing content at scale.',
  'The EU Digital Services Act (DSA) requires large platforms to conduct annual risk assessments, allow independent audits, and give users explanations and appeal rights when content is removed — significantly raising accountability standards.',
  'The Online Safety Act 2023 introduces similar obligations for UK platforms, requiring systems to identify and remove illegal content and protect children — with Ofcom as the enforcer.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'Why is human-only content moderation impossible on large social media platforms?',
    options: [
      'Human moderators are not qualified to judge what counts as harmful content',
      'The volume of content — billions of posts per day — is far too large for human review of everything before publication',
      'Privacy laws prevent platforms from employing people to read private messages',
      'Human moderators are too slow because they must consult legal teams before removing any post',
    ],
    correctIndex: 1,
    explanation: 'Facebook alone receives billions of posts, likes, and comments every day. Even with tens of thousands of human moderators, reviewing everything before publication is mathematically impossible. AI classifiers process content at scale, with humans reviewing borderline or appealed cases.',
  },
  {
    question: 'What is the "false positive problem" in AI content moderation?',
    options: [
      'AI sometimes approves harmful content that should have been removed',
      'AI removes legitimate content — such as news reporting, education, or marginalised voices — that it incorrectly classifies as a violation',
      'AI incorrectly identifies users as bots when they are real people',
      'AI content moderation tools are too expensive for smaller platforms to afford',
    ],
    correctIndex: 1,
    explanation: 'Research has consistently found that AI content moderation over-removes content from certain groups — including LGBTQ+ users, Palestinian activists, and non-English speakers — while missing harmful content that uses coded language. This chilling effect on speech is a serious concern.',
  },
  {
    question: 'What did research into the psychological impact of human content moderation find?',
    options: [
      'Most content moderators report the work is no different from any other office job',
      'Content moderators are routinely exposed to extremely distressing material — violence, abuse, suicide — and face high rates of PTSD and mental health difficulties',
      'The main challenge for content moderators is boredom, since most reviewed content is harmless',
      'Content moderators are well-paid specialists who voluntarily choose the role for its high salaries',
    ],
    correctIndex: 1,
    explanation: 'Content moderators at third-party contractors (used by Facebook, YouTube, and TikTok) are often paid near minimum wage while reviewing thousands of pieces of deeply disturbing content per day. Multiple investigations and lawsuits have documented high rates of PTSD and inadequate psychological support.',
  },
  {
    question: 'What does the EU Digital Services Act (DSA) require of large platforms?',
    options: [
      'It requires platforms to remove all political content during election periods',
      'It mandates that all AI moderation decisions must be reversed if a user appeals',
      'It requires platforms to conduct risk assessments, accept independent audits, and give users explanations and appeal rights when content is removed',
      'It bans AI from making any moderation decisions without simultaneous human review',
    ],
    correctIndex: 2,
    explanation: 'The DSA, which applies to very large online platforms with over 45 million EU users, introduces significant transparency and accountability requirements. Platforms must explain why content was removed, allow meaningful appeals, and accept audits of their moderation systems.',
  },
  {
    question: 'What does the UK Online Safety Act 2023 require of platforms?',
    options: [
      'It requires platforms to pre-screen all content before it is published, using AI',
      'It requires systems to identify and remove illegal content and take steps to protect children from harmful content, with Ofcom as the regulator',
      'It bans social media companies from using AI for any moderation decisions affecting UK users',
      'It requires platforms to pay compensation to every user whose content is wrongly removed',
    ],
    correctIndex: 1,
    explanation: 'The Online Safety Act introduces a duty of care framework. Platforms must proactively identify and remove illegal content (such as CSAM and terrorism material) and take steps to protect under-18s from harmful content. Ofcom can fine platforms up to 10% of global annual turnover for non-compliance.',
  },
]

export function AIAndContentModeration() {
  const lessonId = 'ai-and-content-moderation'
  useMarkVisited(lessonId)

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-3">
          <div className="text-5xl mb-2">&#x1F6A9;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">AI and content moderation</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI polices what billions of people post online, why it often gets it wrong, the human cost of content moderation, and what new laws require platforms to do differently.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <span className="inline-block bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 text-xs font-semibold px-3 py-1 rounded-full">Intermediate</span>
            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">7 min read</span>
          </div>
        </div>

        <CompletedBadge lessonId={lessonId} />

        <div className="flex justify-end gap-2">
          <ReviewLaterButton lessonId={lessonId} />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">The impossible job</h2>
          <p>
            Every minute, people upload 500 hours of video to YouTube, send 500 million tweets, and post millions of pieces of content to Facebook, Instagram, TikTok, and hundreds of other platforms. Some of that content is illegal — child sexual abuse material, terrorist propaganda, incitement to violence. Much more of it is harmful but legal — coordinated harassment, health misinformation, intimate image abuse.
          </p>
          <p>
            Reviewing all of it before it reaches an audience is mathematically impossible for human teams alone. AI content moderation has become the essential infrastructure of the modern internet — and one of the most complex and contested applications of AI in daily life.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">How AI content moderation works</h2>
          <p>
            AI content moderation systems are trained on huge datasets of content labelled by human reviewers as violating or not violating specific policies — hate speech, graphic violence, spam, misinformation, and so on. The resulting classifiers can process text, images, video, and audio at enormous scale.
          </p>
          <p>
            Different types of harmful content use different AI approaches. Illegal content like CSAM uses perceptual hashing — essentially a digital fingerprint — to match known illegal images even when slightly altered. Hate speech detection uses natural language models trained to identify dehumanising language, slurs, and incitement. Misinformation detection increasingly uses claim-checking databases and source credibility signals alongside text analysis.
          </p>
          <p>
            Platforms use AI both proactively (scanning content before or immediately after upload) and reactively (reviewing content flagged by users). Human moderators handle borderline cases, appeals, and the ongoing work of building better training data.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">The false positive problem</h2>
          <p>
            AI content moderation makes mistakes — and those mistakes are not evenly distributed. Research consistently finds that AI systems over-moderate content from marginalised groups: LGBTQ+ users whose coming-out posts are flagged as sexual content; Palestinian users whose documentation of conflict is removed as violent content; Black users whose descriptions of their own experiences of racism are removed as hate speech.
          </p>
          <p>
            This is partly a training data problem: if the labelled examples used to train a classifier reflect the biases of the people who labelled them, the classifier will replicate those biases at scale. It is also a context problem: language that is reclaimed within a community may look identical to slurs used by outsiders. AI struggles with nuance, code-switching, satire, and protest documentation.
          </p>
          <p>
            The false positive problem has a chilling effect: activists, journalists, and marginalised communities self-censor because they know their content is more likely to be removed. Meanwhile, well-resourced actors who understand how to avoid AI triggers can continue spreading harmful content.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">The human moderators behind the AI</h2>
          <p>
            Behind every AI content moderation system is a human workforce that built it and maintains it. Content moderators review borderline cases, build and check training data, and handle appeals. Many work for third-party contractors in countries with lower labour costs — the Philippines, Kenya, India — reviewing content for platforms headquartered in the US or Europe.
          </p>
          <p>
            Multiple investigations and lawsuits have documented the psychological toll. Moderators at Facebook's contract facility in Austin, Texas, described reviewing hundreds of pieces of violent and disturbing content per day, inadequate mental health support, and dismissal for speaking publicly about conditions. A 2023 lawsuit by Kenyan moderators working for Meta resulted in a settlement and commitments to improve standards.
          </p>
          <p>
            The paradox is stark: the people whose daily labour makes social media safe enough to use are among the most exploited workers in the technology supply chain.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">What the law now requires: the DSA and the Online Safety Act</h2>
          <p>
            For most of social media's history, platforms could remove content based on opaque policies, with no obligation to explain decisions or provide meaningful appeals. That is changing.
          </p>
          <p>
            The EU's Digital Services Act (DSA), which applied to very large platforms from August 2023, requires them to conduct annual risk assessments of how their systems contribute to societal harms, accept independent audits, give users clear explanations when content is removed, and provide effective appeal mechanisms. Platforms that fail to comply can be fined up to 6% of global annual turnover.
          </p>
          <p>
            The UK's Online Safety Act 2023, enforced by Ofcom, takes a different approach: it imposes a duty of care, requiring platforms to proactively identify and remove illegal content and to protect children from a wider range of harmful content. Platforms must publish transparency reports showing how their moderation systems perform. Ofcom can fine platforms up to 10% of global annual turnover.
          </p>
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <LessonNote lessonId={lessonId} />

        <Quiz lessonId={lessonId} questions={quizQuestions} />

        <LessonRating lessonId={lessonId} />
        <LessonFeedback lessonId={lessonId} />

        <RelatedLessons currentId={lessonId} />
        <NextLesson currentId={lessonId} />
      </div>
    </div>
  )
}
