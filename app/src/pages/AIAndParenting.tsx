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

const LESSON_TITLE = 'AI and parenting'

const KEY_TAKEAWAYS = [
  'AI-powered parental control apps can now do far more than just block websites — they analyse how much time children spend in different apps, flag emotional distress signals in messages, and alert parents to cyberbullying patterns.',
  "Educational AI tools like Khan Academy's Khanmigo act as patient AI tutors, adapting to a child's learning pace and style rather than delivering one-size-fits-all content.",
  'Smart toys with AI — from interactive robots to AI companions — can hold conversations with children and adapt to their responses, raising questions about how children form attachments to machines.',
  'The ethics of monitoring your child with AI is genuinely complex: transparency and age-appropriate trust matter. Children who know they are monitored behave differently, and blanket surveillance can harm parent-child relationships.',
  'AI recommendation algorithms on YouTube, TikTok, and gaming platforms are designed to maximise engagement — understanding how they work helps parents make more intentional choices about screen time.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is the main way AI parental control apps go beyond older-style content blockers?',
    options: [
      'They use face recognition to identify which child is using the device and apply different rules for each one automatically',
      'They analyse patterns of app usage, messaging behaviour, and screen time to detect emotional distress, cyberbullying, or risky contact — not just block specific websites',
      'They connect directly to school systems and automatically restrict device access during lesson times based on timetable data',
      'They use AI to predict which websites a child is likely to visit next, blocking them proactively rather than reactively',
    ],
    correctIndex: 1,
    explanation:
      "Older parental controls were largely passive blocklists. AI-powered tools like Bark go much further — monitoring messages across dozens of platforms and using AI to detect language patterns associated with cyberbullying, self-harm, depression, drug use, or contact with strangers, alerting parents only when it detects a real concern. This shifts the approach from blocking to monitoring, which raises its own ethical questions.",
    hint: 'Think about what AI can detect that a simple blocklist cannot.',
  },
  {
    question: "How do AI recommendation algorithms on children's platforms like YouTube Kids create risk for parents?",
    options: [
      'The algorithms deliberately target children with advertising for products their parents would not approve of, based on behavioural profiling of the child',
      'The algorithms are optimised to maximise watch time and engagement, which can lead children from appropriate content to progressively more extreme or disturbing content through autoplay',
      "The algorithms track children's location data to build profiles of their movements and sell this to third parties without parental consent",
      "The algorithms share children's viewing history directly with social media platforms, creating a profile that follows them into adulthood",
    ],
    correctIndex: 1,
    explanation:
      "YouTube's recommendation algorithm is optimised for engagement — the goal is to keep users watching as long as possible. For children, this can create 'rabbit hole' effects where autoplay gradually shifts from age-appropriate content towards increasingly surprising or disturbing material, because novelty and emotional intensity drive engagement. Understanding that the algorithm is designed to maximise watch time — not to be good for your child — helps parents make more informed choices.",
    hint: 'Think about what the algorithm is actually designed to optimise for.',
  },
  {
    question: 'What does research suggest about children who know their parents are monitoring their online activity with AI tools?',
    options: [
      'Children who know they are monitored are more likely to report problems to parents because they feel safe knowing help is available',
      'Children who know they are monitored typically move their sensitive conversations to platforms the monitoring tool cannot access, and the awareness of surveillance can damage trust',
      'Children who know they are monitored have significantly better mental health outcomes because the monitoring itself deters bullies',
      'Children who know they are monitored show no significant difference in behaviour compared to those who do not know',
    ],
    correctIndex: 1,
    explanation:
      'Research on digital surveillance of teenagers consistently finds that children who are aware they are being monitored adapt their behaviour — often by moving sensitive conversations to platforms outside the monitoring tool\'s reach. There is also evidence that children who feel over-monitored report lower trust in their parents and are less likely to come to them with problems. Many child development experts recommend age-appropriate conversations about online safety rather than covert surveillance, particularly for teenagers.',
    hint: 'Think about how surveillance changes the behaviour of the person being watched.',
  },
  {
    question: 'What is the key concern about children forming relationships with AI companions or smart toys?',
    options: [
      'AI companions are so realistic that children cannot distinguish them from real human friends, leading to complete social isolation',
      'Children naturally anthropomorphise AI — treating it as a real friend — which is developmentally normal, but AI companions cannot reciprocate genuine emotion or provide the complex social learning that comes from human relationships',
      'AI companion toys secretly record all conversations and sell the recordings to advertisers',
      'Children who use AI companions develop unrealistic expectations of human relationships because AI is always patient and never has bad days',
    ],
    correctIndex: 1,
    explanation:
      'Children naturally anthropomorphise — they attribute feelings and relationships to toys and objects. With AI companions, this becomes more complex because the AI actually responds and adapts. Researchers are divided on the developmental implications. Some see benefit in a patient practice partner for shy children. Others worry that AI relationships, being one-sided at the level of genuine emotional experience, cannot provide the conflict, repair, and negotiation essential to healthy social development.',
    hint: 'Think about what human relationships provide that AI cannot genuinely replicate.',
  },
  {
    question: "What does the term 'screen time' miss when parents try to assess their child's digital activity?",
    options: [
      'Screen time measures only total hours spent on devices, completely ignoring the quality, educational value, or social context of what the child is doing during that time',
      "Screen time data from parental control apps is often inaccurate because children learn to bypass the tracking software",
      'Screen time is only measured in whole hours by most apps, so shorter sessions are systematically underreported',
      'Screen time does not account for blue light exposure, which is the main health concern identified by paediatricians',
    ],
    correctIndex: 0,
    explanation:
      "The concept of 'screen time' treats all device use as equivalent, which most child development researchers now consider misleading. Video-calling a grandparent, writing a story on a tablet, playing a collaborative game online, watching educational content, and passively scrolling algorithmically recommended short videos are all 'screen time' — but their developmental implications are very different. The key question is not how long a child spends on screens, but what they are doing and in what context.",
    hint: 'Think about whether two hours of video calling a grandparent is the same as two hours of passive scrolling.',
  },
]

export function AIAndParenting() {
  useMarkVisited('ai-and-parenting')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F476;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and parenting
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI is changing family life — from monitoring apps and AI tutors to smart toys and
            recommendation algorithms, and the real questions parents need to think about.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-parenting" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI in family life — the landscape</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Parenting has always involved navigating new technologies — television, video games, the internet, smartphones. AI represents the latest and in some ways most complex chapter. Unlike previous technologies, AI adapts to the individual child, makes decisions about what content to show next, and can carry on conversations.
          </p>
          <div className="space-y-2">
            {[
              'By 2025, over 80% of UK children aged 5-15 go online daily, most using algorithmic platforms that personalise content using AI',
              'AI parental control tools have moved from simple blocklists to sophisticated behavioural monitoring that can detect signs of distress',
              'Educational AI is moving from drill-and-test software to genuine adaptive tutoring that responds to how a child thinks',
              'Smart toys and AI companions are increasingly designed to form ongoing relationships with children rather than just respond to one-off commands',
              'The pace of change means most parents are navigating these questions without clear guidance or long-term research evidence',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI parental controls — beyond the blocklist</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The first generation of parental control software was simple: parents could block categories of website or specific URLs. AI-powered tools are dramatically more sophisticated — and more intrusive.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F1;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Bark — behavioural monitoring</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Bark monitors messages across over 30 platforms — including Instagram, Snapchat, TikTok, Gmail, and text messages — and uses AI to detect language patterns associated with cyberbullying, depression, self-harm, sexual content, and contact with strangers. Rather than showing parents all their child's conversations, it alerts only when it detects a genuine concern. This approach is designed to preserve some privacy while flagging real dangers.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x23F0;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Qustodio and Screen Time — usage analytics</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Tools like Qustodio provide detailed breakdowns of how a child spends time across apps and websites, with daily limits for different categories. Apple's built-in Screen Time and Google's Family Link offer similar features. AI layers in some tools now identify when usage patterns change significantly — for example, a child who suddenly uses social media far more or far less than usual — which can be an early warning sign.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F6E1;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">The ethics of monitoring</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Child development experts generally distinguish between monitoring younger children (where oversight is appropriate) and surveilling teenagers (where covert monitoring can backfire). Research suggests that teenagers who feel surveilled are more likely to move conversations to unmonitored channels and less likely to come to parents with problems. Age-appropriate conversations about online safety, combined with transparent tools, tend to produce better outcomes than covert surveillance.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI as educational tutor</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Educational AI has moved far beyond quiz software and flashcard apps. The newest generation of tools can genuinely adapt to how an individual child learns.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-emerald-50 dark:bg-emerald-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4DA;</span>
              <div>
                <p className="font-semibold text-emerald-800 dark:text-emerald-200 text-sm mb-0.5">Khan Academy's Khanmigo</p>
                <p className="text-emerald-700 dark:text-emerald-300 text-sm leading-relaxed">Khanmigo is an AI tutor built on top of Khan Academy's vast library of educational content. Rather than giving answers, it uses the Socratic method — asking guiding questions that lead the student to work out the solution themselves. It can explain the same concept in multiple ways until one clicks, and it tracks where a student repeatedly struggles to target extra support. It is designed not to do homework for children but to help them understand.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-emerald-50 dark:bg-emerald-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F9E0;</span>
              <div>
                <p className="font-semibold text-emerald-800 dark:text-emerald-200 text-sm mb-0.5">Adaptive learning platforms</p>
                <p className="text-emerald-700 dark:text-emerald-300 text-sm leading-relaxed">Platforms like DreamBox (maths), Lexia (reading), and Century Tech adjust what they teach and how they teach it in real time, based on how each student responds. If a child gets a concept quickly, the system moves on. If they struggle, it tries a different explanation. This kind of personalised pacing is difficult for a teacher managing 30 children, but straightforward for software.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-emerald-50 dark:bg-emerald-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x26A0;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-emerald-800 dark:text-emerald-200 text-sm mb-0.5">The homework problem</p>
                <p className="text-emerald-700 dark:text-emerald-300 text-sm leading-relaxed">General-purpose AI tools like ChatGPT and Claude can complete most school homework assignments. Evidence suggests that using AI to complete homework rather than to understand material undermines learning — particularly in building foundational skills like writing and mathematical reasoning. The key question for parents is whether their child is using AI to learn or to avoid learning.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Smart toys and AI companions</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The latest generation of children's toys includes AI that can hold real conversations, remember previous interactions, and adapt their personality over time.
          </p>
          <div className="space-y-2">
            {[
              'Toys like Moxie (a social robot designed for children) can hold guided conversations, teach emotional skills, and remember what your child talked about previously — building a sense of ongoing relationship',
              'Smart speakers placed in children\'s rooms effectively create a permanent AI listener — useful for bedtime stories and alarms, but raising questions about what is recorded and stored',
              'AI in gaming adapts difficulty in real time based on player performance, keeping children in an engaging flow state — beneficial for enjoyment but potentially problematic for excessive play',
              'Some AI companion apps for older children and teenagers are designed to provide emotional support — useful for lonely or anxious young people, but unable to provide genuine human empathy',
              'Children naturally anthropomorphise AI — treating it as a friend — which is developmentally normal, but the relationship is fundamentally one-sided in ways that matter for healthy social development',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-purple-600 dark:text-purple-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Recommendation algorithms — the invisible influence</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The most powerful AI tool affecting children's lives may not be a monitoring app or a tutor — it may be the recommendation algorithm deciding what to show them next.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-amber-50 dark:bg-amber-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4FA;</span>
              <div>
                <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm mb-0.5">YouTube and YouTube Kids</p>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">YouTube's algorithm is designed to maximise watch time. For children, this can mean a gradual shift through autoplay from age-appropriate content towards more extreme or disturbing material, because novelty and emotional intensity drive engagement. YouTube Kids uses a curated catalogue, but researchers have still found its algorithm can guide children towards low-quality or age-inappropriate content over extended sessions.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-amber-50 dark:bg-amber-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F3B5;</span>
              <div>
                <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm mb-0.5">TikTok</p>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">TikTok's For You Page algorithm is particularly effective at learning individual preferences and delivering content with extreme precision. Research has found that accounts created as teenagers were quickly served content related to eating disorders and self-harm after expressing mild interest in fitness or weight topics. The algorithm optimises for engagement, not wellbeing.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-amber-50 dark:bg-amber-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4A1;</span>
              <div>
                <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm mb-0.5">What parents can do</p>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">Understanding that algorithms are designed to maximise engagement — not to serve your child's interests — changes how parents can approach them. Practical steps include turning off autoplay, having children use platforms in shared spaces, watching together sometimes, and having age-appropriate conversations about why platforms are designed the way they are. Understanding that what you see is chosen for you by an algorithm is a genuine life skill.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Privacy and data — your child's digital footprint</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Children generate detailed data profiles from a very early age — often before they can read or consent to anything.
          </p>
          <div className="space-y-2">
            {[
              "Under UK law, children under 13 cannot consent to their data being processed — but many services allow children to create accounts with a parent's approval, meaning parents effectively consent on their behalf",
              'Many apps marketed at children contain third-party advertising SDKs that collect behavioural data, even when the app appears to be free and educational',
              "Data collected from a child's online activity could be used by AI systems to make inferences about them as adults — including credit decisions, insurance, and employment",
              "Parental monitoring tools themselves collect sensitive data about your child. Reading the privacy policy of a parental control app matters — where is the monitoring data stored, and who can access it?",
              "The UK's Age Appropriate Design Code (the Children's Code) requires online services to put children's best interests first, with high privacy settings by default — but enforcement is inconsistent",
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-rose-600 dark:text-rose-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <LessonNote lessonId="ai-and-parenting" />
        <ReviewLaterButton lessonId="ai-and-parenting" />

        <Quiz lessonId="ai-and-parenting" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-parenting" />
        <LessonFeedback lessonId="ai-and-parenting" />

        <RelatedLessons currentId="ai-and-parenting" />

        <NextLesson currentId="ai-and-parenting" />

      </div>
    </div>
  )
}
