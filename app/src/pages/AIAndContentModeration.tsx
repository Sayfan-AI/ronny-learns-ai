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

const LESSON_TITLE = 'AI and social media content moderation'

const KEY_TAKEAWAYS = [
  'Social media platforms receive hundreds of millions of posts every day — far more than any human workforce could review. AI is the only practical way to detect and remove harmful content at this scale.',
  'AI content moderation is trained to detect hate speech, misinformation, graphic violence, and child sexual abuse material (CSAM). CSAM detection using photo hashing is among the most accurate applications.',
  'The false positive problem is serious: AI moderation removes large amounts of legitimate speech — disproportionately affecting activists, LGBTQ+ users, and users from non-English-speaking communities whose content the AI misclassifies.',
  'Human moderators — mostly based in the Global South — review flagged content that AI cannot confidently classify. Many develop PTSD from exposure to the content they review daily.',
  'The EU Digital Services Act (DSA), which applies to UK users accessing EU-regulated platforms, requires very large platforms to explain moderation decisions, provide meaningful appeals processes, and be audited for systemic risks.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'Why can social media platforms not rely solely on human moderators to review all content?',
    options: [
      'Human moderators are not permitted to view certain categories of illegal content under EU law',
      'Platforms receive hundreds of millions of posts daily — far more content than any human workforce could feasibly review in time',
      'Human moderators consistently make worse decisions than AI, so platforms prefer the more accurate AI approach',
      'Most platform employees refuse to work as content moderators due to the low pay, so platforms are forced to use AI instead',
    ],
    correctIndex: 1,
    explanation:
      "Meta alone receives over three billion posts per day across Facebook and Instagram. YouTube has 500 hours of video uploaded every minute. Twitter (now X) receives 500 million tweets per day. Even an army of human moderators could only review a tiny fraction of this content before it was seen by millions of users. AI systems can scan content in milliseconds, flagging or removing harmful material automatically before most users encounter it. Human moderators still play a role — reviewing borderline cases and appeals — but they work downstream of AI, not instead of it.",
    hint: 'Think about the sheer volume of content that platforms handle every minute.',
  },
  {
    question: 'What is a "false positive" in the context of AI content moderation?',
    options: [
      'When AI incorrectly identifies harmful content as safe, allowing it to remain on the platform',
      'When AI correctly detects a piece of content as harmful and removes it',
      'When AI incorrectly removes legitimate, non-harmful content because it misclassifies it as violating policy',
      'When a human moderator disagrees with an AI decision and overturns it on appeal',
    ],
    correctIndex: 2,
    explanation:
      "A false positive is when the AI gets it wrong in the direction of over-removal — treating something that is actually fine as if it were harmful. During the COVID-19 pandemic, Facebook's AI mistakenly removed articles from reputable news sources because they contained words from a list associated with health misinformation. LGBTQ+ content creators have reported having their videos age-restricted or removed when discussing their identities, while content using identical language without the LGBTQ+ context is left up. Palestinian journalists have reported having posts in Arabic removed that in English would clearly be legitimate news reporting. These are all false positives — real costs to real people's ability to speak online.",
    hint: "Think about which direction the error goes — is it leaving harm up, or taking legitimate content down?",
  },
  {
    question: 'What is PhotoDNA and what is it used for in content moderation?',
    options: [
      'A system that scans photos to verify they are authentic and have not been digitally manipulated before publication',
      'A hashing technology that detects known child sexual abuse images by comparing their digital fingerprint against a database, without anyone having to re-view the content',
      'An AI that reads the faces in photos to identify if any person in the image has consented to being photographed',
      'A copyright detection tool that identifies if a photo has been taken by a professional photographer and requires payment before posting',
    ],
    correctIndex: 1,
    explanation:
      "PhotoDNA, developed by Microsoft and now used by most major platforms, works by creating a unique digital fingerprint (a hash) of every known image of child sexual abuse. When a user uploads a photo, the platform creates a hash of that image and compares it against the database. If they match, the content is flagged and reported to the National Center for Missing and Exploited Children (NCMEC). The clever design means the system can detect a match even if the image has been slightly cropped or adjusted — without anyone at the platform having to view the actual content. This is one of the most effective and least contested uses of AI content moderation.",
    hint: "Think about matching a digital fingerprint without viewing the content.",
  },
  {
    question: 'What psychological impact has been documented in human content moderators at major platforms?',
    options: [
      'Moderators generally report job satisfaction similar to other technology roles, with no significant mental health concerns documented',
      'Many moderators develop post-traumatic stress disorder (PTSD) from repeated exposure to graphic content including violence, abuse, and suicide',
      'Moderators primarily report boredom and repetitive strain injury from the monotonous nature of reviewing large volumes of similar posts',
      'Moderators mostly report political frustration — they disagree with moderation policies but must apply them regardless of their own views',
    ],
    correctIndex: 1,
    explanation:
      "Multiple investigations — including by The Verge, The Guardian, and academic researchers — have documented serious mental health harms among content moderators. Workers at outsourcing companies in the Philippines, Kenya, and India who review content for platforms like Meta and Google describe seeing hundreds of images and videos of extreme violence, child abuse, and self-harm every day. Many develop PTSD, with symptoms including nightmares, intrusive images, and difficulty maintaining relationships. Some have reported that they were not warned about the nature of the work, were given inadequate psychological support, and were penalised if they took too many breaks. A class action lawsuit in the US resulted in Facebook paying $52 million to moderators in 2020.",
    hint: "Think about the long-term effect of repeatedly seeing the most harmful content that exists online.",
  },
  {
    question: 'What does the EU Digital Services Act (DSA) require from very large platforms in relation to content moderation?',
    options: [
      'Platforms must use only government-approved AI tools for moderation and must share their algorithms with national regulators for approval',
      'Very large platforms must ban all AI moderation and move to human-only review to ensure accountability for each decision',
      'Very large platforms must provide explanations for moderation decisions, offer meaningful appeals processes, publish transparency reports, and undergo independent audits for systemic risks',
      'All content moderation decisions must be reviewed by a panel of elected citizen representatives before taking effect',
    ],
    correctIndex: 2,
    explanation:
      "The EU Digital Services Act came into force for the largest platforms (those with more than 45 million EU users, including Facebook, YouTube, TikTok, and X) in 2023. It requires these platforms to: explain to users why their content was removed; provide an effective appeals process; publish detailed transparency reports on moderation decisions; conduct annual risk assessments for systemic harms; and undergo audits by independent bodies. It also bans targeting ads at children and using sensitive personal data for advertising. The DSA applies to EU users, but since major platforms cannot operate one way in the EU and another way elsewhere, its effects are felt by UK users too. Fines for non-compliance can reach 6% of global turnover.",
    hint: "Think about transparency, accountability, and risk management — what rules would a regulator impose?",
  },
]

export function AIAndContentModeration() {
  useMarkVisited('ai-and-content-moderation')

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F6E1;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and social media content moderation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How platforms use AI to police billions of posts — the science, the mistakes,
            the human cost, and the rules being written to govern it.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-content-moderation" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The scale of the problem</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Social media platforms handle a volume of content that is simply impossible for humans
            to review. AI is not a choice — it is a necessity.
          </p>
          <div className="space-y-2">
            {[
              'Facebook receives over 3 billion posts, comments, and messages every day',
              'YouTube has 500 hours of video uploaded every minute',
              'X (formerly Twitter) receives 500 million posts per day',
              'Meta employs around 15,000 people in trust and safety — but even this workforce could only manually review a tiny fraction of all content',
              'Without AI, content like child abuse images, terrorist recruitment videos, and coordinated harassment campaigns would spread unchecked for days or weeks',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-rose-600 dark:text-rose-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How AI content moderation works</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Platforms use a combination of AI techniques, each suited to different types of harmful content.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4F7;',
                label: 'Image and video hashing (PhotoDNA)',
                text: 'Known harmful images — particularly child sexual abuse material — are given a unique digital fingerprint (hash). Every uploaded image is compared against this database. If the hashes match, even if the image has been slightly modified, the content is automatically removed and reported to authorities. This is among the most effective and least controversial AI moderation applications.',
                color: 'orange',
              },
              {
                icon: '&#x1F5E3;',
                label: 'Natural language processing for hate speech',
                text: 'AI trained on millions of examples of hate speech can flag posts based on the words, phrases, and context used. This is much harder than image hashing — language is ambiguous, culturally specific, and constantly evolving. The same words can be reclaimed slurs, in-group terms, or weapons of harassment depending on who is using them and how.',
                color: 'orange',
              },
              {
                icon: '&#x1F4F9;',
                label: 'Video and audio analysis',
                text: "YouTube uses AI called Content ID to identify copyrighted music in videos automatically. Similar technology identifies extremist imagery (ISIS flags, specific terrorist graphics) and graphic violence. Audio AI can detect whether a video's soundtrack matches known dangerous content or hate speech in spoken form.",
                color: 'orange',
              },
              {
                icon: '&#x1F4CA;',
                label: 'Coordinated inauthentic behaviour',
                text: 'AI analyses patterns across accounts — posting frequency, connection networks, IP addresses, device fingerprints — to detect bot networks and coordinated manipulation campaigns even when individual posts seem innocuous. This is how platforms identify and remove thousands of fake accounts amplifying state propaganda.',
                color: 'orange',
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

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The false positive problem</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI that removes harmful content at scale also removes large amounts of legitimate speech.
            This is called over-removal — and it has disproportionate impacts on certain groups.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-amber-50 dark:bg-amber-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F3F3;&#xFE0F;&#x200D;&#x1F308;</span>
              <div>
                <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm mb-0.5">LGBTQ+ content</p>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">Content creators discussing their LGBTQ+ identities have reported disproportionate removal and demonetisation. TikTok's algorithm was found to suppress posts from LGBTQ+ creators in some regions. AI trained predominantly on non-LGBTQ+ content may flag identity-related discussions as potentially sensitive even when they are entirely benign.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-amber-50 dark:bg-amber-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F310;</span>
              <div>
                <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm mb-0.5">Non-English languages</p>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">AI moderation is far less accurate in Arabic, Bengali, Tamil, Swahili, and hundreds of other languages than it is in English. During the fall of Kabul in 2021 and the 2021 Israel-Palestine conflict, Arabic-language posts about political events were removed en masse because the AI could not distinguish war journalism from violent incitement.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-amber-50 dark:bg-amber-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F0;</span>
              <div>
                <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm mb-0.5">Journalism and activism</p>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">Human rights organisations documenting atrocities — uploading videos of war crimes as evidence — have had content removed because the AI flags graphic violence regardless of documentary purpose. The Syrian Archive, which preserved evidence of chemical weapons attacks, had content removed by YouTube multiple times despite its crucial evidentiary value.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The human moderators behind the AI</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI handles the high-volume, clear-cut cases. Borderline content and appeals go to human
            moderators — a workforce whose working conditions have come under serious scrutiny.
          </p>
          <div className="space-y-2">
            {[
              'Most human moderation is outsourced to companies in the Philippines, Kenya, and India — where labour costs are lower than in the US or Europe',
              'Moderators may review 200 to 400 pieces of content per day, including graphic violence, child abuse, torture, and suicide',
              'Multiple investigations and legal cases have documented PTSD, depression, and anxiety disorders among content moderators',
              "In 2020, Facebook agreed to pay $52 million to current and former US-based content moderators in a class action lawsuit over mental health harms",
              'Workers often report inadequate psychological support, insufficient breaks, and pressure not to raise concerns about their working conditions',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-slate-600 dark:text-slate-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The EU Digital Services Act — new rules for platforms</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The EU has passed the most comprehensive platform regulation in the world. It affects
            UK users because major platforms cannot operate differently in different jurisdictions.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CB;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">What the DSA requires</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Very large platforms (45 million+ EU users) must: explain moderation decisions to affected users; provide a real appeals process; publish detailed transparency reports; conduct annual risk assessments; and undergo independent audits. Fines can reach 6% of global annual turnover for non-compliance.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F1EC;&#x1F1E7;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">UK equivalent — Online Safety Act</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">The UK passed the Online Safety Act in 2023, with Ofcom as regulator. Platforms must protect users from illegal content, carry out risk assessments, and give users more controls. However, critics argue it goes less far than the DSA on transparency and appeals, and implementation has been slow.</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950 rounded-xl p-4">
            <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
              <span className="font-semibold">The fundamental tension:</span> Platforms face a genuine dilemma. Over-moderate and you silence legitimate voices, suppress news, and damage free expression. Under-moderate and you allow harassment, radicalisation, and abuse to flourish. AI makes this problem faster and more scalable — but does not resolve the underlying tension, which is ultimately a political and ethical question, not a technical one.
            </p>
          </div>
        </div>

        <LessonNote lessonId="ai-and-content-moderation" />
        <ReviewLaterButton lessonId="ai-and-content-moderation" />

        <Quiz lessonId="ai-and-content-moderation" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-content-moderation" />
        <LessonFeedback lessonId="ai-and-content-moderation" />

        <RelatedLessons currentId="ai-and-content-moderation" />

        <NextLesson currentId="ai-and-content-moderation" />

      </div>
    </div>
  )
}
