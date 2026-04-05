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

const LESSON_TITLE = 'AI and sport betting'

const KEY_TAKEAWAYS = [
  'AI allows bookmakers like Bet365, Sky Bet, and William Hill to calculate and adjust betting odds in milliseconds — far faster than any human trader could manage, using real-time data from matches around the world.',
  'Betting exchanges like Betfair are dominated by AI trading bots that react to in-play events almost instantaneously — making it very difficult for ordinary punters to compete.',
  'Personalised promotions powered by AI target individual gamblers based on their behaviour — what they bet on, how much they stake, and how often they bet — raising serious concerns about addiction profiling.',
  'GAMSTOP and the UK Gambling Commission are working to require betting companies to use AI to identify at-risk gamblers and intervene before harm escalates.',
  'The UK Gambling Act is being reformed — a 2023 White Paper proposed mandatory affordability checks, stake limits on online slots, and new rules around AI-driven personalised promotions.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How do major UK bookmakers use AI to set and adjust betting odds?',
    options: [
      'They employ large teams of human traders who use AI as a tool to help them make faster decisions, but all odds are ultimately set by humans',
      'They use AI systems that ingest real-time data from thousands of markets and adjust odds automatically within milliseconds — far faster than human traders could manage',
      'They use a fixed mathematical formula that generates odds before an event and does not change once betting opens, to ensure fairness for all customers',
      'They buy standardised odds from a central UK authority that regulates all bookmakers, ensuring the same odds are available across all betting platforms',
    ],
    correctIndex: 1,
    explanation:
      'Modern bookmakers use sophisticated AI systems that process vast amounts of real-time data — team news, injury updates, weather conditions, betting patterns from other markets, live match statistics — and continuously adjust odds to manage risk. Bet365, Flutter Entertainment (owner of Sky Bet, Paddy Power, and Betfair), and William Hill all use proprietary AI pricing models. An odds movement that would have taken a human trader several minutes to calculate and implement can happen automatically in under a second. This is why you sometimes see odds change dramatically between clicking and placing a bet.',
    hint: 'Think about how fast odds need to change when a goal is scored or a player is injured during a live match.',
  },
  {
    question: 'Why is it difficult for ordinary bettors to compete on betting exchanges like Betfair?',
    options: [
      'Betting exchanges charge higher commission rates to individual punters than they do to professional betting companies',
      'AI trading bots react to in-play events almost instantaneously, meaning a human who sees a goal scored will find the odds have already moved by the time they can act',
      'Betfair has a minimum bet size that effectively excludes casual punters from the most valuable betting opportunities',
      'AI systems can predict match outcomes with such accuracy that all the value has been removed from the market before individual bettors can find it',
    ],
    correctIndex: 1,
    explanation:
      'Betfair operates as an exchange where punters bet against each other rather than against a bookmaker. This sounds fairer — and it is, in principle — but in practice the exchange is dominated by professional betting syndicates and algorithmic traders. These bots monitor data feeds from television broadcasts, official data suppliers, and court-side cameras, and can detect events like goals, red cards, or set points within milliseconds — before the average viewer watching at home has even seen them happen. By the time a human reacts and places a bet, the bot has already moved the odds. This is called "latency arbitrage" and makes the exchange environment very hostile for casual bettors.',
    hint: 'Think about the speed advantage of a computer compared to a human reacting to a live event.',
  },
  {
    question: 'How do AI systems in betting apps build profiles of individual customers?',
    options: [
      'They access customers\' bank accounts directly to understand their financial situation and assess whether they can afford to lose money',
      'They analyse betting history, stake sizes, bet types, timing patterns, and response to offers to classify customers by profitability and risk of harm',
      'They use facial recognition cameras in betting shops to identify customers and link their in-person and online betting behaviour',
      'They purchase data from social media companies to understand customers\' social lives and personal circumstances and use this to time promotional offers',
    ],
    correctIndex: 1,
    explanation:
      'Betting companies build detailed behavioural profiles of every customer using their own data. This includes: which sports and markets they bet on, how often they place bets, the size of their stakes, whether they bet impulsively (late at night, after a loss), how they respond to different types of promotions, and how long they spend on the app. These profiles are used to identify "valuable" customers (high-staking, emotionally driven bettors who lose money consistently) and serve them targeted promotions designed to maximise their spend. They are also theoretically used to identify at-risk gamblers — but critics argue the commercial incentive to keep these customers betting has historically outweighed the harm reduction motive.',
    hint: 'Think about what data the betting app itself can collect from how you use it.',
  },
  {
    question: 'What is GAMSTOP and how does AI relate to it?',
    options: [
      'GAMSTOP is an AI system that analyses every bet placed in the UK and automatically blocks bets it identifies as being made by problem gamblers',
      'GAMSTOP is the UK\'s national self-exclusion scheme — betting companies are required to check it before accepting bets, and AI can help identify customers who should be referred to it',
      'GAMSTOP is a government-run AI that monitors betting company profits and automatically adjusts industry regulation when profits exceed permitted levels',
      'GAMSTOP is a voluntary AI certification scheme that betting companies can join to demonstrate their AI systems meet ethical standards for gambling harm reduction',
    ],
    correctIndex: 1,
    explanation:
      'GAMSTOP is the national online self-exclusion service. When someone registers with GAMSTOP, all licensed UK gambling operators are required to block that person from gambling on their platforms. AI comes in at the stage before self-exclusion: the UK Gambling Commission and harm reduction organisations have been pushing betting companies to use AI to proactively identify customers showing signs of problem gambling — increasing bet frequency, chasing losses, betting at unusual hours — and interact with them before they reach a crisis point. The 2023 Gambling White Paper proposed mandatory requirements for betting companies to use AI-based harm detection, rather than leaving it voluntary as it has largely been.',
    hint: 'Think about what happens when someone decides they want to stop gambling.',
  },
  {
    question: 'What does the 2023 UK Gambling White Paper propose to regulate AI in betting?',
    options: [
      'It proposes banning all AI from the gambling industry, requiring all odds to be calculated by human traders to make the industry fairer',
      'It proposes mandatory affordability checks, limits on online slot stakes, and new rules around AI-driven personalised promotions to reduce harm',
      'It proposes requiring all betting companies to open-source their AI algorithms so independent researchers can audit them for fairness',
      'It proposes creating a government-owned AI system that all betting companies must use to set odds, eliminating competitive advantage from proprietary AI',
    ],
    correctIndex: 1,
    explanation:
      'The Gambling Act review, which resulted in the 2023 White Paper ("High Stakes: Gambling Reform for the Digital Age"), did not attempt to eliminate AI from betting — that would be impossible and counterproductive. Instead, it proposed using regulation to shape how AI is deployed. Key proposals included: mandatory frictionless affordability checks for customers spending significant amounts, limits on online slot stakes (£5 for most adults, £2 for under-25s), a statutory levy on gambling companies to fund research and treatment, and restrictions on AI-driven personalised bonuses and promotions that target vulnerable customers. The White Paper acknowledged the dual nature of AI in gambling — it can both drive harm through addictive design and detect and reduce harm through monitoring.',
    hint: 'Think about balancing the commercial use of AI in gambling with protecting people from harm.',
  },
]

export function AIAndSportBetting() {
  useMarkVisited('ai-and-sport-betting')

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3B0;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and sport betting
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI is transforming the gambling industry — from algorithmic odds and trading bots to addiction
            profiling and the UK government's attempts to regulate it.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-sport-betting" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The size of the UK gambling market</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The UK has one of the largest and most regulated gambling markets in the world — and AI is now embedded in virtually every part of it.
          </p>
          <div className="space-y-2">
            {[
              'The UK gambling industry generates approximately £14 billion in gross gambling yield (revenue) each year',
              'Flutter Entertainment — owner of Betfair, Paddy Power, Sky Bet, and Tombola — is one of the world\'s largest gambling companies, headquartered in Dublin',
              'Around 24 million adults in the UK gamble in some form each year, with online gambling growing rapidly since the pandemic',
              'The UK Gambling Commission licences and regulates all commercial gambling in Great Britain, with a particular focus on consumer protection',
              'Problem gambling affects an estimated 0.4% of UK adults, with further millions classified as "at risk" of developing gambling harm',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI odds-making — the end of the human trader</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Setting betting odds used to require human expertise and judgement. AI has transformed this into an almost fully automated process.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x26A1;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Real-time in-play markets</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">In-play betting — betting on events as they happen during a match — is where AI is most visible. When a goal is scored, an odds movement that would have taken a human minutes must happen in milliseconds to avoid arbitrage. AI pricing engines process official data feeds, adjust every affected market simultaneously, and suspend betting when uncertainty is too high — all automatically.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CA;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Risk management</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">AI also manages the bookmaker's overall risk position — tracking how much money has been bet on each outcome, identifying if a result would cause unusually large losses, and adjusting odds to encourage betting on the underexposed side. This is called liability management and used to require a team of experienced traders. Now it is largely automated.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Addiction profiling — using AI to identify and target vulnerable gamblers</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The same AI that could identify problem gamblers and offer them help is also used to identify high-value customers and maximise their spend. This is the central ethical tension in AI gambling technology.
          </p>
          <div className="bg-red-50 dark:bg-red-950 rounded-xl p-4">
            <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-1">The commercial incentive problem</p>
            <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
              Research by GamCare and the Gambling Commission has found that a significant proportion of gambling industry revenue comes from a small proportion of customers who are problem gamblers. This creates a structural conflict of interest: the AI knows who the vulnerable customers are; the business benefits financially from keeping them gambling. Without strong regulation, commercial incentives push in the wrong direction.
            </p>
          </div>
          <div className="space-y-2">
            {[
              'Signs of problem gambling that AI can detect: betting late at night, chasing losses (placing larger bets after losses), declining to set deposit limits when prompted',
              'The Gambling Commission requires operators to have processes to identify and interact with customers at risk — but enforcement has historically been inconsistent',
              'GamCare operates the National Gambling Helpline and works with operators on voluntary safer gambling programmes',
              'The 2023 White Paper proposed mandatory requirements for operators to use AI-based harm detection rather than leaving it voluntary',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mt-0.5 flex-shrink-0">&#x26A0;&#xFE0F;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Your rights as a gambler</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            If you or someone you know is concerned about gambling, these protections and resources exist.
          </p>
          <div className="space-y-2">
            {[
              'GAMSTOP (gamstop.co.uk) — register to exclude yourself from all UK licensed gambling sites for 6 months, 1 year, or 5 years',
              'GamCare National Helpline — 0808 8020 133, free, confidential, available 24/7',
              'Deposit limits and reality checks — all UK licensed operators must offer these and cannot discourage you from using them',
              'Under UK GDPR, you can request to see all data a gambling company holds about you, including your behavioural profile',
              'The Financial Ombudsman Service can help if you believe a gambling company has treated you unfairly',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-purple-600 dark:text-purple-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-sport-betting" />
        <LessonNote lessonId="ai-and-sport-betting" />

        <Quiz questions={quizQuestions} lessonId="ai-and-sport-betting" />

        <LessonRating lessonId="ai-and-sport-betting" />
        <LessonFeedback lessonId="ai-and-sport-betting" />

        <RelatedLessons currentId="ai-and-sport-betting" />

        <NextLesson currentId="ai-and-sport-betting" />
      </div>
    </div>
  )
}
