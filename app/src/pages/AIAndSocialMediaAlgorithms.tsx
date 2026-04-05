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

const LESSON_TITLE = 'AI and social media algorithms'

const KEY_TAKEAWAYS = [
  'Social media recommendation algorithms are optimised for engagement — not your wellbeing. They have learned that strong emotions (outrage, fear, excitement) drive more interaction than calm, balanced content, so they amplify emotionally charged posts.',
  'Filter bubbles are created when algorithms show you more of what you have already engaged with, gradually narrowing what you see. This is algorithmic — different from echo chambers, which are social (choosing to follow like-minded people).',
  'Research links heavy social media use with increased anxiety, depression, and sleep disruption — particularly in teenagers. Social comparison (seeing curated highlight reels of others\' lives) is a key mechanism.',
  'Platforms have introduced some controls: Instagram\'s sensitive content settings, TikTok\'s 60-minute usage prompt for under-18s, and Twitter/X\'s option to see a chronological rather than algorithmic feed.',
  'You have more control than you think: deliberately following diverse accounts, using chronological feeds where available, being selective about what you like and share, and using built-in screen time tools can meaningfully reshape what you see.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does a social media recommendation algorithm primarily optimise for?',
    options: [
      'The accuracy and factual reliability of the content it shows you, to ensure you receive correct information',
      'Your engagement — the time you spend on the platform, and actions like likes, shares, comments, and replays',
      'The wellbeing and mental health of its users, based on regular surveys and psychological research',
      'The diversity of viewpoints you are exposed to, to ensure you encounter a balanced range of perspectives',
    ],
    correctIndex: 1,
    explanation:
      'Social media algorithms are built to maximise engagement — the metric that drives advertising revenue. The algorithm has no inherent goal of informing you or making you feel good. It has learned, through billions of data points, that content which triggers strong emotions — outrage, fear, awe, excitement — gets more likes, shares, comments, and replays than neutral or nuanced content. A factually accurate but calm explanation of a complex issue will typically receive far less engagement than an emotionally charged, simplified take on the same topic. This is not a deliberate choice by engineers to make you angry — it is the emergent result of optimising a single metric (engagement) without adequately accounting for the side effects.',
    hint: 'Think about what the platform is financially incentivised to maximise.',
  },
  {
    question: 'What is the difference between a filter bubble and an echo chamber?',
    options: [
      'Filter bubbles are found only on news sites, while echo chambers are specific to social media platforms',
      'A filter bubble is created by algorithmic personalisation narrowing what you see; an echo chamber is a social dynamic where you actively choose to follow only like-minded people',
      'Filter bubbles make you see more extreme content; echo chambers make you see more mainstream content',
      'There is no meaningful difference — both terms describe the same phenomenon and can be used interchangeably',
    ],
    correctIndex: 1,
    explanation:
      'The distinction matters because it affects the solution. A filter bubble is created by the platform\'s algorithm: it shows you more of what you have engaged with, based on your click and like history, gradually narrowing the range of content you see even if you are theoretically open to diverse viewpoints. An echo chamber is a social dynamic: you have chosen to follow accounts with similar views, unfollow people who challenge you, and interact mostly with those who agree. Filter bubbles can be addressed by changing your algorithmic settings and deliberately engaging with diverse content. Echo chambers require a different approach — consciously choosing to follow accounts with different perspectives, which is a social and habitual change, not a technical one.',
    hint: 'Think about who or what is doing the narrowing in each case.',
  },
  {
    question: 'What does research suggest about the link between heavy social media use and mental health?',
    options: [
      'Research is completely inconclusive — there is no reliable evidence of any positive or negative mental health effect from social media use',
      'Heavy use, particularly in teenagers, is associated with increased rates of anxiety, depression, and sleep disruption — with social comparison being a key mechanism',
      'Social media has been shown to consistently improve mental health by reducing loneliness and increasing social support networks across all age groups',
      'The mental health effects of social media are entirely positive for adults and entirely negative for children — there is a clear age-based threshold',
    ],
    correctIndex: 1,
    explanation:
      'The research picture is nuanced but not as uncertain as platforms sometimes claim. Multiple large-scale studies, including work by Jean Twenge and Jonathan Haidt, have found correlations between increased smartphone and social media use from around 2012 and rising rates of depression and anxiety in teenagers — particularly girls. The mechanisms include social comparison (comparing yourself to curated highlight reels of others\' best moments), cyberbullying, sleep disruption from late-night use, and the displacement of face-to-face socialising. That said, correlation is not causation, and some research suggests passive consumption is more harmful than active interaction. For adults, the effects are more mixed — social connection benefits can be real, particularly for isolated people. The UK government\'s Online Safety Act and the Children\'s Commissioner have both highlighted these concerns and called for platform-level changes.',
    hint: 'Think about how seeing only the best moments of others\' lives might affect how you feel about your own.',
  },
  {
    question: 'What did TikTok introduce to address concerns about young people\'s screen time?',
    options: [
      'A complete ban on users under 13 creating accounts, enforced by facial recognition AI that estimates age from selfies',
      'A 60-minute daily usage prompt for users under 18, after which they are asked to enter a passcode to continue — encouraging a pause and conscious decision to keep going',
      'A mandatory one-hour break from the app every evening between 9pm and 10pm, enforced by app locks that users cannot override',
      'A weekly wellbeing report sent to parents of under-18 users showing exactly how much time their child has spent on the app and what content they watched',
    ],
    correctIndex: 1,
    explanation:
      'TikTok introduced a 60-minute daily screen time limit for users under 18 as a default. When the limit is reached, users are prompted to enter a passcode to continue watching. The passcode is set by the user (or a parent for younger children), so this is not a hard block — it is a "circuit breaker" designed to create a moment of conscious decision rather than mindless scrolling. The UK Children\'s Commissioner and online safety advocates broadly welcomed this as a step forward, while noting that self-set passcodes are easily bypassed and calling for more robust age verification and parental controls. Instagram has similar features, and the UK\'s Online Safety Act 2023 places legal duties on platforms to protect children from harmful content.',
    hint: 'Think about a feature designed to create a moment of pause rather than a hard block.',
  },
  {
    question: 'What practical step can you take to reduce the filter bubble effect on your social media feeds?',
    options: [
      'Delete your account entirely — it is the only way to fully escape algorithmic influence, as all other steps are ineffective',
      'Deliberately follow and engage with accounts representing perspectives different from your own, and use chronological feed options where available to reduce algorithmic sorting',
      'Report all content you disagree with, as this signals to the algorithm that you want to see more balanced perspectives',
      'Use only private mode or incognito browsing, as this prevents the platform from collecting data about your interests',
    ],
    correctIndex: 1,
    explanation:
      'The algorithm learns from what you engage with, so deliberately expanding what you engage with can reshape what it shows you. Actively following accounts from different political perspectives, different countries, different demographics, or topics you would not normally choose sends a signal to the algorithm that you want a broader diet. Chronological feeds (available on Instagram and Twitter/X) bypass the algorithm entirely and show posts in order of when they were posted — this prevents the algorithm from choosing what to amplify, though it means you see everything rather than a curated selection. Limiting what you like and share also helps, since every like is a training signal. Private browsing does not prevent tracking once you are logged in to a platform. Reporting content does not signal a desire for balance — it signals that the content is harmful or against platform rules.',
    hint: 'Think about what signals you are sending to the algorithm through your actions.',
  },
]

export function AIAndSocialMediaAlgorithms() {
  useMarkVisited('ai-and-social-media-algorithms')

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4F1;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and social media algorithms
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How recommendation algorithms decide what you see, why outrage gets amplified,
            what filter bubbles actually are, and how to take back some control.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-social-media-algorithms" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How the algorithm works</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Every major social media platform uses AI recommendation algorithms to decide what you see in your feed.
            The core goal is to maximise the time you spend on the platform — and the algorithm has become very good at it.
          </p>
          <div className="space-y-2">
            {[
              'The algorithm watches what you watch, like, share, and comment on — and what you scroll past quickly',
              'It also considers who you follow, what time of day you usually use the app, and what similar users engage with',
              'Content that triggers strong emotions — outrage, fear, excitement, awe — consistently gets more engagement than calm, balanced content',
              'The algorithm amplifies emotionally charged content not because engineers designed it to cause harm, but because it maximises the engagement metric it was built to optimise',
              'Even completely false content is amplified if it generates strong emotional engagement — the algorithm does not prioritise accuracy',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-950 rounded-xl p-4">
            <p className="text-indigo-700 dark:text-indigo-300 text-sm leading-relaxed">
              <span className="font-semibold">A real example:</span> A 2021 internal Facebook document (leaked by whistleblower Frances Haugen) showed that Facebook's own researchers found that 64% of people who joined extremist groups on the platform did so because the algorithm recommended it. The algorithm was doing its job — driving engagement — but with harmful side effects.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Filter bubbles and echo chambers</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Two related but distinct phenomena shape what information you encounter online.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F50E;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Filter bubbles (algorithmic)</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">The algorithm shows you more of what you have already engaged with, gradually narrowing the range of content you see. Even if you are open to diverse viewpoints, the algorithm serves you what it predicts you will engage with — and if your engagement history leans one way, so will your feed. Coined by Eli Pariser in 2011, the filter bubble describes how personalisation can trap you in an increasingly narrow information environment without you choosing to be there.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F5E3;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Echo chambers (social)</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">An echo chamber is a social dynamic: you have actively chosen to follow like-minded accounts, unfollowed or blocked people who challenge your views, and found communities where your beliefs are reinforced. The algorithm plays a role (it recommends similar accounts) but the key mechanism is your own social choices. Breaking out of an echo chamber requires social behaviour change, not just adjusting algorithm settings.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Mental health and social media</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The evidence linking heavy social media use to mental health harms is substantial, though the picture is nuanced.
          </p>
          <div className="space-y-2">
            {[
              'Social comparison — seeing curated highlight reels of others\' lives — drives feelings of inadequacy and low self-worth, particularly in teenagers',
              'Research by Jean Twenge shows a correlation between smartphone adoption from around 2012 and rising rates of depression and anxiety in UK and US teenagers, particularly girls',
              'Cyberbullying has been significantly amplified by social media — harassment that previously ended at the school gate now follows young people home 24 hours a day',
              'Late-night social media use disrupts sleep — notifications, engagement loops, and the blue light from screens all contribute to poorer sleep quality',
              'Passive scrolling (consuming content without interacting) is associated with worse mental health outcomes than active interaction (commenting, posting, messaging friends)',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-rose-600 dark:text-rose-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">What platforms are doing — and what you can do</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Platforms have introduced some tools in response to regulatory pressure and public criticism.
            But the most effective steps are often ones you take yourself.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4F1;',
                label: 'Platform controls',
                text: 'Instagram has sensitive content controls that limit certain types of content. TikTok prompts under-18s after 60 minutes. Twitter/X offers a chronological feed option. YouTube has a "take a break" reminder feature. These are imperfect but meaningful first steps.',
                color: 'green',
              },
              {
                icon: '&#x1F465;',
                label: 'Diversify your follows',
                text: 'Deliberately follow accounts representing perspectives, geographies, and demographics different from your own. The algorithm will learn from this expanded engagement history and show you broader content.',
                color: 'green',
              },
              {
                icon: '&#x23F0;',
                label: 'Use chronological feeds',
                text: 'Where available, switch to chronological feed mode. Instagram and Twitter/X both offer this. You see posts in time order rather than algorithm-sorted order — you control what you engage with rather than the platform choosing for you.',
                color: 'green',
              },
              {
                icon: '&#x1F914;',
                label: 'Be selective about what you share',
                text: 'Every share is a signal to the algorithm that emotionally charged content is valuable. Pausing before sharing outrage-inducing content — asking "is this verified? why am I sharing this?" — can reduce the amplification of harmful content and reshape your own feed.',
                color: 'green',
              },
            ].map(({ icon, label, text, color }) => (
              <div key={label} className={`flex gap-3 items-start bg-${color}-50 dark:bg-${color}-950 rounded-xl p-3`}>
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className={`font-semibold text-${color}-800 dark:text-${color}-200 text-sm mb-0.5`}>{label}</p>
                  <p className={`text-${color}-700 dark:text-${color}-300 text-sm leading-relaxed`}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <LessonNote lessonId="ai-and-social-media-algorithms" />
        <ReviewLaterButton lessonId="ai-and-social-media-algorithms" />

        <Quiz lessonId="ai-and-social-media-algorithms" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-social-media-algorithms" />
        <LessonFeedback lessonId="ai-and-social-media-algorithms" />

        <RelatedLessons currentId="ai-and-social-media-algorithms" />

        <NextLesson currentId="ai-and-social-media-algorithms" />

      </div>
    </div>
  )
}
