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

const quizQuestions: QuizQuestion[] = [
  {
    question: 'Approximately how many pieces of content do platforms like Meta remove every day using AI?',
    options: [
      'Around 10,000 items per day',
      'Around 100,000 items per day',
      'Millions of items per day',
      'Fewer than 1,000 — most decisions are made by human reviewers',
    ],
    correctIndex: 2,
    explanation:
      "Meta's AI systems remove millions of pieces of content every day across Facebook, Instagram, and WhatsApp. In its quarterly Community Standards Enforcement Reports, Meta consistently reports hundreds of millions of removals per quarter for categories like spam, fake accounts, and hate speech — the vast majority actioned automatically before any user reports them. At this scale, human-only moderation would be impossible.",
    hint: 'Think about the scale of social media — billions of posts per day.',
  },
  {
    question: 'What is a "false positive" in the context of content moderation?',
    options: [
      'When a harmful post is correctly identified and removed by the AI',
      'When a legitimate, harmless piece of content is incorrectly removed by the AI',
      'When a user successfully appeals and gets a removed post reinstated',
      'When AI detects misinformation before it goes viral',
    ],
    correctIndex: 1,
    explanation:
      "A false positive occurs when the AI incorrectly flags or removes content that does not actually violate the platform's rules. This is a major problem: news reports about violence, historical discussion of hate speech for educational purposes, medical information, and satire have all been incorrectly removed. Facebook's AI has removed posts showing historical photos of wartime atrocities because it cannot distinguish documentation from glorification.",
    hint: "False positive = the AI says 'this is bad' when it isn't.",
  },
  {
    question: 'Which EU law requires very large online platforms to be more transparent and accountable about their content moderation systems?',
    options: [
      'The General Data Protection Regulation (GDPR)',
      'The Digital Services Act (DSA)',
      'The Online Safety Act (UK)',
      'The Artificial Intelligence Act',
    ],
    correctIndex: 1,
    explanation:
      "The EU's Digital Services Act (DSA), which came into force for very large platforms in August 2023, requires platforms like Meta, TikTok, and YouTube to publish risk assessments, audit their recommender systems and moderation AI, provide researchers with data access, and give users the right to contest moderation decisions.",
    hint: 'This EU law is specifically about digital services and went live in 2023.',
  },
  {
    question: 'Why is moderating hate speech so difficult for AI?',
    options: [
      'AI can read text but not images, so it misses hate speech in memes',
      'Hate speech often relies on cultural context, sarcasm, reclaimed language, and slang that AI systems struggle to interpret correctly',
      'Hate speech rules are the same in every country, making it easy to apply globally',
      'AI systems are only trained on English content, so non-English hate speech goes undetected',
    ],
    correctIndex: 1,
    explanation:
      'Detecting hate speech requires understanding context that is difficult for AI. The same word can be an insult or a reclaimed term of identity. Sarcasm and irony mean the surface reading is the opposite of intent. Regional slang and cultural references shift meaning. A phrase that is hate speech when directed at a group might be legitimate commentary when quoted critically.',
    hint: 'Language is context-dependent — the same words mean different things in different situations.',
  },
  {
    question: 'What conditions do many human content moderators face?',
    options: [
      'Human moderators work in relaxed office environments reviewing content at their own pace',
      'Most moderation is now automated so human moderators only handle complex edge cases with ample time',
      'Human moderators often review hundreds of disturbing items per day, under time pressure, with limited psychological support — leading to high rates of PTSD and burnout',
      'Human moderators are paid very well because of the specialist nature of the work',
    ],
    correctIndex: 2,
    explanation:
      "Investigative journalism and lawsuits have revealed the difficult conditions facing human content moderators, many of whom work for outsourcing contractors rather than the platforms themselves. The Kenyan moderators who sued Meta revealed they were reviewing thousands of pieces of violent content per day. Many develop PTSD. Pay and psychological support are often inadequate.",
    hint: 'Think about what it means to review the worst of the internet at scale, every day.',
  },
]

export function AIAndContentModeration() {
  useMarkVisited('ai-and-content-moderation')

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F6E1;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and content moderation
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI helps platforms police billions of posts, why it gets things wrong,
            and the human cost of keeping the internet safe.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-content-moderation" />
          <ShareButton lessonTitle="AI and content moderation" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The scale problem</h2>
          <p className="text-gray-600 leading-relaxed">
            Every minute, people upload 500 hours of video to YouTube, post 350,000 tweets,
            and share 66,000 photos on Instagram. No human workforce could review this in real time.
            AI content moderation is not optional &mdash; it is the only way platforms can
            operate at this scale.
          </p>
          <div className="bg-purple-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-purple-800 text-sm">What AI moderation covers</p>
            <p className="text-purple-700 text-sm leading-relaxed">
              Platforms use AI to detect and remove spam and fake accounts, hate speech and
              harassment, terrorist content, child sexual abuse material (CSAM), graphic violence,
              misinformation, and copyright violations &mdash; often before any user reports the content.
              Meta reports removing hundreds of millions of items per quarter, mostly automatically.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            The consequences of failure are severe in both directions. Leave harmful content up
            and the platform enables abuse, radicalisation, or election interference. Remove too
            aggressively and the platform silences legitimate speech, journalists, and activists.
            There is no perfect calibration.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How AI moderation works</h2>
          <p className="text-gray-600 leading-relaxed">
            Platforms use several different AI techniques depending on what they are trying to detect.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4F7;',
                label: 'Image and video hashing',
                text: "Every known image of child sexual abuse material is given a unique digital fingerprint (hash). When a new image is uploaded, its hash is compared against a shared database (PhotoDNA, operated by Microsoft). If there is a match, the image is blocked automatically. This is extremely accurate for known content but cannot detect new material.",
              },
              {
                icon: '&#x1F4AC;',
                label: 'Text classifiers',
                text: "Natural language models are trained on millions of examples of hate speech, spam, and misinformation. When new text is posted, the classifier scores it against each category. Posts above a confidence threshold are removed automatically or routed to human review. These models struggle with sarcasm, slang, and context.",
              },
              {
                icon: '&#x1F4F9;',
                label: 'Computer vision',
                text: "AI analyses video frame by frame to detect graphic violence, nudity, or terrorist imagery. YouTube's Content ID uses this to detect copyrighted footage. The system must work across billions of videos in hundreds of languages with context that varies enormously by culture.",
              },
              {
                icon: '&#x1F310;',
                label: 'Network analysis',
                text: "AI maps the connections and behaviour patterns of accounts to detect coordinated inauthentic behaviour — networks of fake accounts spreading disinformation together. This looks at posting patterns, IP addresses, device fingerprints, and interaction graphs rather than content alone.",
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

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The problem of false positives</h2>
          <p className="text-gray-600 leading-relaxed">
            A false positive is when AI removes content that should have been allowed.
            False positives are not just an inconvenience &mdash; they can silence important voices
            and erase history.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: '&#x1F5BC;&#xFE0F;',
                title: 'The Napalm Girl',
                text: "Facebook's AI removed the iconic 1972 Vietnam War photograph showing a naked child fleeing a napalm attack — a Pulitzer Prize-winning image documenting a war crime. The AI saw nudity, not historical documentation. Norway's prime minister reposted it in protest and her post was also removed.",
              },
              {
                icon: '&#x2695;&#xFE0F;',
                title: 'Medical information',
                text: 'Posts about breastfeeding, skin conditions, cancer screening, and harm reduction information for drug users have all been incorrectly removed. Health professionals report difficulty sharing legitimate medical content.',
              },
              {
                icon: '&#x1F4F0;',
                title: 'Journalism and activism',
                text: 'Human rights organisations documenting atrocities for legal evidence have had their archives removed. Syrian Archive lost years of documentation of chemical weapons attacks when YouTube removed it.',
              },
              {
                icon: '&#x1F3AD;',
                title: 'Satire and criticism',
                text: 'Satirical posts criticising hate speech sometimes quote the very language they are criticising. AI systems trained to detect words rather than intent remove these posts, making it harder to challenge hateful content.',
              },
            ].map(({ icon, title, text }) => (
              <div key={title} className="bg-red-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl" dangerouslySetInnerHTML={{ __html: icon }} />
                  <p className="font-semibold text-gray-800 text-sm">{title}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The human cost: content moderators</h2>
          <p className="text-gray-600 leading-relaxed">
            AI handles volume, but the hardest decisions &mdash; and the content that does not
            fit neatly into any category &mdash; goes to human reviewers. The conditions many of
            them work in have become a serious ethical issue.
          </p>
          <div className="bg-orange-50 rounded-xl p-4 space-y-3">
            <p className="font-semibold text-orange-800 text-sm">What moderators face</p>
            <ul className="text-orange-700 text-sm space-y-2 list-disc list-inside leading-relaxed">
              <li>Reviewing hundreds of disturbing videos and images per day, including graphic violence and child abuse imagery</li>
              <li>Strict quotas &mdash; hitting accuracy and volume targets regardless of content severity</li>
              <li>Often employed by outsourcing contractors, not directly by the platform, with lower pay and fewer protections</li>
              <li>High rates of PTSD, anxiety, and burnout documented across the industry</li>
              <li>Moderators in Kenya who worked for Meta (through Sama, a contractor) sued Meta in 2023 over trauma, pay, and union-busting</li>
            </ul>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            The platforms save money by outsourcing moderation. The psychological cost falls on
            workers in lower-income countries who often have limited legal recourse. Critics argue
            that the business model of engagement-maximising social media creates the content problem
            that moderators then have to clean up at great personal cost.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Regulation: the EU Digital Services Act</h2>
          <p className="text-gray-600 leading-relaxed">
            The EU&apos;s Digital Services Act (DSA) is the most comprehensive attempt to regulate
            platform content moderation. It came into force for very large platforms in August 2023.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CB;',
                label: 'Risk assessments',
                text: 'Very large platforms (those with over 45 million EU users) must conduct annual risk assessments of how their systems &mdash; including recommendation algorithms and moderation AI &mdash; may cause harm, and publish the results.',
              },
              {
                icon: '&#x1F9EA;',
                label: 'Independent audits',
                text: 'Platforms must submit to annual independent audits of their risk assessments and the measures they have taken to reduce risk. The results must be shared with regulators.',
              },
              {
                icon: '&#x1F4E4;',
                label: 'Transparency reports',
                text: "Platforms must publish detailed information about how many items they removed, why, and at what stage. They must also publish information about their recommender systems and give users the option to use chronological feeds.",
              },
              {
                icon: '&#x2696;&#xFE0F;',
                label: 'Right to appeal',
                text: 'Users whose content is removed must be given clear reasons and an effective way to appeal. Platforms must have internal complaint-handling systems and must cooperate with certified out-of-court dispute settlement bodies.',
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
          <div className="bg-green-50 rounded-xl p-4">
            <p className="text-green-800 text-sm font-semibold mb-1">UK Online Safety Act</p>
            <p className="text-green-700 text-sm leading-relaxed">
              The UK has its own framework. The Online Safety Act 2023 requires platforms to assess
              risks of illegal content and content harmful to children, with Ofcom as the regulator.
              Critics argue it is less detailed than the DSA and gives platforms more discretion.
            </p>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-content-moderation" />
        <LessonNote lessonId="ai-and-content-moderation" />

        <Quiz questions={quizQuestions} lessonId="ai-and-content-moderation" lessonTitle="AI and content moderation" />

        <LessonFeedback lessonId="ai-and-content-moderation" />
        <LessonRating lessonId="ai-and-content-moderation" />
        <RelatedLessons currentId="ai-and-content-moderation" />
        <NextLesson currentId="ai-and-content-moderation" />
      </div>
    </div>
  )
}
