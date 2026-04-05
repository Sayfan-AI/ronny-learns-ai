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
import { DifficultyBadge } from '../components/DifficultyBadge'

const LESSON_TITLE = 'AI and advertising'

const KEY_TAKEAWAYS = [
  'Every time you load a webpage, an automated auction runs in milliseconds — advertisers bid for the right to show you an ad based on who they think you are. This is called real-time bidding.',
  'Ad personalisation algorithms build a profile of you using your browsing history, location, purchases, social media activity, and data bought from data brokers — often without you realising.',
  'Tracking pixels are tiny invisible images embedded in emails and web pages that silently report back when you opened something, what device you used, and where you were.',
  'Data brokers are companies that collect personal data from hundreds of sources and sell detailed profiles to advertisers, insurers, employers, and political campaigns.',
  'You have real tools to push back: ad blockers, browser privacy settings, opt-out registries, and your rights under UK GDPR to access and delete data companies hold about you.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is real-time bidding in online advertising?',
    options: [
      'A system where website owners manually set a fixed price for each ad slot and advertisers pay that price in advance',
      'An automated auction that runs in milliseconds when you load a webpage — advertisers bid for the right to show you an ad based on your profile data',
      'A live TV auction format where brands bid against each other for advertising slots during popular programmes',
      'A bidding system used only by large platforms like Google and Facebook to sell their own advertising space directly to businesses',
    ],
    correctIndex: 1,
    explanation:
      'When you load almost any commercial website, a real-time bidding auction runs in the background — typically in under 100 milliseconds, before the page has even finished loading. The website sends a signal to an advertising exchange containing information about you: your approximate location, what you have browsed recently, what demographic group you appear to belong to. Advertisers\' automated systems evaluate this and submit bids. The highest bidder\'s ad appears. The whole process happens invisibly, every time you visit a page with advertising.',
    hint: 'Think about the speed — it happens before you even see the page.',
  },
  {
    question: 'What is a data broker?',
    options: [
      'A government agency responsible for protecting personal data under UK GDPR and handling complaints about misuse of data',
      'A company that collects personal information from many sources and sells detailed profiles of individuals to advertisers, insurers, and other buyers',
      'A software tool used by website developers to manage cookies and obtain user consent before collecting browsing data',
      'An independent auditor who checks that advertising companies are complying with data protection rules',
    ],
    correctIndex: 1,
    explanation:
      'Data brokers are companies that most people have never heard of, yet they may know more about you than your bank. They collect data from public records, loyalty card schemes, social media, shopping apps, electoral rolls, and hundreds of other sources — then combine and sell this information. Major data brokers include Experian, Acxiom, and LexisNexis. They sell to advertisers who want to target specific audiences, but also to employers doing background checks, insurers assessing risk, and political campaigns building voter models. Under UK GDPR, you have the right to ask a data broker what data they hold about you.',
    hint: 'Think about who sits in the middle — collecting data from everywhere and selling it on.',
  },
  {
    question: 'What is a tracking pixel?',
    options: [
      'A large visible image placed in online adverts that helps advertisers count how many times an ad has been seen',
      'A small piece of code installed on your computer by an ad blocker that prevents websites from loading advertising content',
      'A tiny invisible image, often just one pixel in size, embedded in emails or web pages that silently reports back when you opened it and what device you used',
      'A legal requirement under UK law that all websites must display to inform users that their browsing data is being tracked',
    ],
    correctIndex: 2,
    explanation:
      'A tracking pixel is a transparent image — sometimes literally just a single dot — embedded in an email or web page. When your email client or browser loads the image, it makes a request to the tracker\'s server, which logs your IP address, device type, email client, and the exact time you opened the message. You never see it and are never asked for consent. Email marketing platforms including Mailchimp, Salesforce, and HubSpot use tracking pixels as standard. Many modern email clients like Apple Mail now block tracking pixels by pre-loading images — but this is not universal.',
    hint: 'The clue is in the name — it is designed to be invisible.',
  },
  {
    question: 'Which of these is a practical step you can take to limit ad tracking?',
    options: [
      'Switching your phone to aeroplane mode at all times prevents all data collection by advertisers',
      'Using a browser ad blocker, enabling your browser\'s privacy settings, and opting out of data broker profiles using tools like the ICO\'s guidance',
      'Deleting social media apps entirely from your phone removes all data about you from advertising systems permanently',
      'Paying for a subscription to a website always prevents it from showing you targeted adverts or collecting your data',
    ],
    correctIndex: 1,
    explanation:
      'No single step eliminates ad tracking entirely, but a combination of tools significantly reduces it. Browser extensions like uBlock Origin block most advertising trackers and ads. Privacy-focused browsers like Firefox and Brave have built-in tracking protection. You can opt out of interest-based advertising through the ICO\'s Your Ad Choices tool and the Digital Advertising Alliance opt-out. You can request your data from major data brokers and ask them to delete it. Under UK GDPR, you have the right to access data held about you and to object to it being used for direct marketing.',
    hint: 'Think about a combination of browser tools and your legal rights.',
  },
]

export function AIAndAdvertising() {
  useMarkVisited('ai-and-advertising')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4E2;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and advertising
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI targets you with ads — the hidden auction that runs every time you load a
            webpage, how advertisers build a picture of you, and what you can do to protect
            your privacy.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-advertising" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">What is programmatic advertising?</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Before the internet, advertising was bought in blocks. A company would call a newspaper
            and pay for a quarter-page slot. A brand would negotiate with a TV channel for a spot
            during the evening news. Advertisers chose the context — the programme, the publication
            — and hoped the right people were watching.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Programmatic advertising changed everything. Instead of buying space in a publication,
            advertisers now buy <strong>audiences</strong>. They do not pay to appear on a specific
            website — they pay to reach specific people, wherever those people happen to be online.
            The whole system is run by algorithms, with no human negotiation involved.
          </p>
          <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">How big is it?</p>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Programmatic advertising now accounts for the majority of all digital display
              advertising spend. In the UK alone, digital advertising was worth over £29 billion
              in 2023. Most of that money flows through automated systems making billions of
              decisions every day about which ads to show to which people.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Real-time bidding — your attention auctioned in milliseconds</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Every time you load a commercial webpage, an invisible auction takes place in the
            background — usually completing in under 100 milliseconds. This is called
            <strong> real-time bidding</strong> (RTB).
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '1️⃣',
                label: 'The bid request is sent',
                text: "When you load the page, the website's ad server sends a bid request to an advertising exchange. The request includes data about you: your approximate location, your device type, what you've recently browsed, and what audience segments you've been placed in.",
                color: 'blue',
              },
              {
                icon: '2️⃣',
                label: 'Advertisers evaluate and bid',
                text: "Hundreds of advertisers' automated systems receive the bid request simultaneously. Each evaluates whether you match their target audience and how much you're worth to them. A car company might bid high if you've recently browsed car websites. A travel company might bid high if you've been searching for flights.",
                color: 'blue',
              },
              {
                icon: '3️⃣',
                label: "The winner's ad appears",
                text: "The highest bid wins. The winning advertiser's ad is served to your browser. The entire process — from page load to ad appearing — takes less time than a single blink.",
                color: 'blue',
              },
            ].map(({ icon, label, text, color }) => (
              <div key={label} className={`flex gap-3 items-start bg-${color}-50 dark:bg-${color}-950 rounded-xl p-3`}>
                <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
                <div>
                  <p className={`font-semibold text-${color}-800 dark:text-${color}-200 text-sm mb-0.5`}>{label}</p>
                  <p className={`text-${color}-700 dark:text-${color}-300 text-sm leading-relaxed`}>{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-950 rounded-xl p-4">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm leading-relaxed">
              <strong>Privacy concern:</strong> During real-time bidding, your data is shared with
              hundreds of companies simultaneously — not just the winning advertiser. Privacy
              campaigners and the UK's Information Commissioner's Office (ICO) have raised serious
              concerns about whether this is lawful under UK GDPR.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Ad personalisation algorithms — how advertisers build a picture of you</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            To bid on you in real-time auctions, advertisers need to know who you are. Ad
            personalisation algorithms build detailed profiles from many sources, often combining
            data in ways you would not expect.
          </p>
          <div className="space-y-2">
            {[
              "Browsing history: what websites you visit, what you search for, what products you look at — tracked via cookies and browser fingerprinting even when you don't click on ads.",
              'Purchase history: data from loyalty cards, online shopping, and payment data shared by retailers with advertising companies.',
              'Location data: your phone\'s GPS, combined with records of which shops, restaurants, gyms, and medical facilities you visit.',
              'Social media activity: what you like, share, follow, and comment on — which reveals your interests, beliefs, relationships, and emotions.',
              'Inferred characteristics: algorithms use your known data to infer things you\'ve never stated — your income bracket, health concerns, relationship status, and political leanings.',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-purple-600 dark:text-purple-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-purple-50 dark:bg-purple-950 rounded-xl p-4">
            <p className="text-purple-800 dark:text-purple-200 text-sm leading-relaxed">
              <strong>Real example:</strong> In 2012, Target's data scientists in the US built a
              model that could predict whether a customer was pregnant — based on changes in their
              shopping patterns — before the customer had told anyone. A father complained after
              his teenage daughter received baby product coupons. The algorithm had spotted the
              pattern before her family knew.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Data brokers and tracking pixels</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Two of the least visible parts of the advertising ecosystem — data brokers and
            tracking pixels — have an outsized effect on your privacy.
          </p>
          <div className="space-y-4">
            <div className="bg-orange-50 dark:bg-orange-950 rounded-xl p-4 space-y-2">
              <p className="font-semibold text-orange-800 dark:text-orange-200">Data brokers</p>
              <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">
                Data brokers are companies whose entire business is collecting personal information
                from hundreds of sources — public records, loyalty schemes, social media, apps,
                and financial data — and selling it on. The largest data brokers hold files on
                hundreds of millions of people. Companies like <strong>Acxiom</strong>,{' '}
                <strong>Experian</strong>, and <strong>LexisNexis</strong> sell this data to
                advertisers, insurers, employers, and political campaigns. Most people have no idea
                these companies exist, let alone that they hold detailed profiles of them.
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-950 rounded-xl p-4 space-y-2">
              <p className="font-semibold text-red-800 dark:text-red-200">Tracking pixels</p>
              <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
                A tracking pixel is a tiny — often literally one pixel — transparent image embedded
                in an email or web page. When your device loads the image, it reports back to the
                tracker's server: your IP address, device type, browser, the exact time you opened
                the email, and sometimes your location. Email marketing platforms include tracking
                pixels as standard. Many people block remote images in their email clients to
                prevent this — but not everyone knows to do this.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Behavioural profiling — how advertisers know what you want before you do</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Modern advertising does not just show you products you have already searched for.
            Behavioural profiling allows AI systems to predict what you might want next — and to
            show you ads at precisely the moment you are most likely to act on them.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '📈',
                label: 'Look-alike modelling',
                text: "Advertisers upload their existing customer list to an ad platform like Meta or Google. The platform's AI finds users who share characteristics with your existing customers — people you've never reached before, but who behave similarly to people who already buy from you.",
                color: 'rose',
              },
              {
                icon: '🧠',
                label: 'Sentiment analysis',
                text: "AI analyses your social media posts, comments, and reactions to infer your emotional state. Some platforms adjust which ads you see based on whether you appear to be happy, anxious, bored, or celebrating — serving ads calibrated to your mood.",
                color: 'rose',
              },
              {
                icon: '🔁',
                label: 'Retargeting',
                text: "You browse a pair of trainers on a sports website but don't buy them. For the next two weeks, those trainers follow you around the internet — appearing on news sites, social media, and apps. This is retargeting: tracking your interest and repeatedly showing the same product until you buy or it stops.",
                color: 'rose',
              },
            ].map(({ icon, label, text, color }) => (
              <div key={label} className={`flex gap-3 items-start bg-${color}-50 dark:bg-${color}-950 rounded-xl p-3`}>
                <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
                <div>
                  <p className={`font-semibold text-${color}-800 dark:text-${color}-200 text-sm mb-0.5`}>{label}</p>
                  <p className={`text-${color}-700 dark:text-${color}-300 text-sm leading-relaxed`}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How to protect your privacy — ad blockers, opt-outs, and your digital rights</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            You have more tools and rights than most people realise. No single step eliminates
            tracking, but a combination of approaches significantly reduces what advertisers
            know about you.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '🛡️',
                label: 'Use an ad blocker',
                text: 'Browser extensions like uBlock Origin (free, open-source) block most advertising trackers and ads. Brave is a browser with built-in ad and tracker blocking. These tools prevent your data from being shared in real-time bidding auctions in the first place.',
                color: 'green',
              },
              {
                icon: '⚙️',
                label: 'Adjust your browser and phone settings',
                text: 'All major browsers offer privacy settings: disable third-party cookies, enable private browsing for sensitive searches. On your phone, disable ad tracking in your privacy settings — both iPhone and Android offer this option.',
                color: 'green',
              },
              {
                icon: '❌',
                label: 'Opt out of interest-based advertising',
                text: 'The Your Ad Choices tool (youronlinechoices.com) lets you tell advertising networks not to use your data for targeted ads. Google, Facebook, and other platforms have their own ad personalisation settings in their privacy dashboards.',
                color: 'green',
              },
              {
                icon: '⚖️',
                label: 'Exercise your UK GDPR rights',
                text: 'Under UK GDPR, you have the right to ask any company what data they hold about you (a Subject Access Request), to correct inaccurate data, and to object to your data being used for direct marketing. You can ask data brokers to delete your profile. The ICO (ico.org.uk) has guidance on how to do this.',
                color: 'green',
              },
            ].map(({ icon, label, text, color }) => (
              <div key={label} className={`flex gap-3 items-start bg-${color}-50 dark:bg-${color}-950 rounded-xl p-3`}>
                <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
                <div>
                  <p className={`font-semibold text-${color}-800 dark:text-${color}-200 text-sm mb-0.5`}>{label}</p>
                  <p className={`text-${color}-700 dark:text-${color}-300 text-sm leading-relaxed`}>{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-green-50 dark:bg-green-950 rounded-xl p-4">
            <p className="text-green-800 dark:text-green-200 text-sm leading-relaxed">
              <strong>Bigger picture:</strong> Privacy is not just a personal issue. The same
              data infrastructure that shows you trainers can be used to target vulnerable people
              with payday loans, to manipulate voters with political advertising, or to discriminate
              in insurance and credit. Individual choices matter — and so does advocating for
              stronger regulation.
            </p>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-advertising" />

        <Quiz lessonId="ai-and-advertising" questions={quizQuestions} />

        <LessonNote lessonId="ai-and-advertising" />

        <LessonRating lessonId="ai-and-advertising" />

        <LessonFeedback lessonId="ai-and-advertising" />

        <RelatedLessons currentId="ai-and-advertising" />

        <NextLesson currentId="ai-and-advertising" />

        <CompletedBadge lessonId="ai-and-advertising" />

      </div>
    </div>
  )
}
