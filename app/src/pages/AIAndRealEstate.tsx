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

const LESSON_TITLE = 'AI and real estate'

const KEY_TAKEAWAYS = [
  "Automated valuation models (AVMs) — used by Rightmove, Zoopla, and mortgage lenders — estimate a property's value in seconds by comparing it against thousands of similar sales. They are a useful starting point but can miss local factors a human surveyor would catch.",
  'AI letting agents and smart property search tools can match renters to homes more accurately than keyword searches alone, and help landlords and agents spot fraudulent listings before damage is done.',
  'Smart home technology — AI thermostats, security cameras, smart locks — is increasingly standard in new-build homes and can add genuine value, but also raises privacy considerations for buyers and renters.',
  'When you apply for a mortgage, AI algorithms assess your credit risk using open banking data, spending patterns, and hundreds of other signals — often making decisions faster than any human could review your file.',
  'AI-powered planning and market prediction tools are already influencing where developers build and what neighbourhoods are likely to change — knowledge that was once only available to professionals.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is an Automated Valuation Model (AVM), and how does it work?',
    options: [
      'It is an AI that physically tours a property and scores it on condition, kerb appeal, and location using a robot camera',
      'It is an algorithm that estimates a property\'s market value by comparing it against recent sales of similar nearby homes, using data like size, age, type, and local price trends',
      'It is a government database that assigns an official value to every property in the UK, updated annually by HMRC',
      'It is a chatbot that interviews buyers and sellers about their expectations and calculates a fair price based on their answers',
    ],
    correctIndex: 1,
    explanation:
      'Automated Valuation Models analyse large datasets of property sales, planning records, size data, and local market trends to estimate what a property should be worth. Rightmove and Zoopla both show AVM estimates on listing pages, and mortgage lenders increasingly use them for initial assessments. They can produce estimates within seconds for millions of properties simultaneously. Their weakness is that they cannot see inside the property, assess condition, judge a view, or understand very local factors — so they work best as a starting point rather than a definitive valuation.',
    hint: 'Think about how a computer would compare your home to others it knows about.',
  },
  {
    question: 'How is AI being used to detect fraud in rental property listings?',
    options: [
      'AI checks whether the landlord\'s name appears on a government approved landlord register before the listing goes live',
      'AI analyses listing photos, descriptions, price patterns, and the landlord\'s history to flag listings that show signs of fraud — such as photos stolen from other listings, unrealistically low rents, or new accounts posting multiple premium properties',
      'AI requires landlords to submit a video selfie and verifies their identity against a government ID database before their listing appears',
      'AI only detects fraud after a renter reports a problem, by cross-referencing their complaint with similar complaints about the same address',
    ],
    correctIndex: 1,
    explanation:
      'Rental fraud is a serious problem — scammers post attractive properties at below-market rents, collect deposits, and disappear. AI fraud detection tools used by platforms like Rightmove and SpareRoom use reverse image search to spot stolen photos, natural language processing to identify language patterns common in scam listings, price anomaly detection to flag suspiciously cheap properties, and account behaviour analysis to spot newly created accounts posting multiple premium listings.',
    hint: 'Think about what signals would make a listing look suspicious to an intelligent system.',
  },
  {
    question: 'What does an AI mortgage algorithm assess when you apply for a home loan?',
    options: [
      'It primarily assesses your credit score number from the three main credit agencies and approves or rejects based on whether you are above or below the lender\'s minimum threshold',
      'It analyses a wide range of data including your income history, spending patterns via open banking, existing debts, the property\'s value, your deposit size, and statistical risk models to assess the probability you will repay the loan',
      'It interviews you via a chatbot about your income and expenses, then a human underwriter reviews the conversation transcript and makes the final decision',
      'It only uses salary and employment status, since the Mortgage Credit Directive legally prohibits lenders from using any other data for mortgage decisions',
    ],
    correctIndex: 1,
    explanation:
      'Modern mortgage AI goes well beyond a simple credit score check. With your permission, open banking allows lenders to analyse 12 months of bank statements in seconds — assessing your spending habits, income stability, whether you have gambling transactions, how you manage direct debits. The AI combines this with the property valuation, your deposit percentage, local market data, and statistical models of how borrowers with similar profiles have historically performed.',
    hint: 'Think about what information a lender would want to assess your ability to repay over 25 years.',
  },
  {
    question: 'What privacy concern does smart home technology create for buyers and renters?',
    options: [
      'Smart home devices increase your electricity bill significantly, which means your personal energy consumption patterns become visible to your supplier',
      'Smart speakers, cameras, thermostats, and smart locks collect detailed data about when you are at home, your routines, your voice, and who visits — data that could be accessed by the manufacturer, hacked, or left behind when the previous owner did not properly reset the device',
      'Smart homes are connected to the internet, which means your home\'s IP address becomes publicly visible and could allow strangers to look up your address',
      'Estate agents can access smart home data during viewings to see whether the current owners are heavy users of heating or electricity, making their utility costs visible',
    ],
    correctIndex: 1,
    explanation:
      'Smart home devices are data-hungry by design. A smart thermostat knows when you wake up, when you leave, and when you go to bed. A smart doorbell records everyone who visits. When buying or renting a home with existing smart devices, it is important to factory-reset everything — without a reset, the previous owner could potentially still access cameras or see when you are home.',
    hint: 'Think about what a smart device in your home actually knows about you.',
  },
  {
    question: 'How are AI prediction tools changing the property market for ordinary buyers?',
    options: [
      'They have made property prices more stable by predicting demand accurately and allowing developers to build exactly the right number of homes in each area',
      'They allow large developers and investors to identify undervalued areas and predict where regeneration is coming, acquiring land before prices rise — an advantage not easily available to individual buyers',
      'They have been banned by the Competition and Markets Authority because they give unfair advantage to large buyers, and are only permitted for use by councils',
      'They mainly help first-time buyers by showing them which areas have the best schools and transport links in a simple, easy-to-use format',
    ],
    correctIndex: 1,
    explanation:
      'AI tools that predict property price growth, model the impact of planned transport links, or identify areas with increasing planning permissions have given professional investors and developers a significant information advantage. A property fund can analyse thousands of planning applications, cross-reference them with transport investment data and demographic trends, and identify areas likely to see price growth years before it becomes obvious to individual buyers.',
    hint: 'Think about who benefits when AI can predict where house prices will rise before it is obvious to everyone.',
  },
]

export function AIAndRealEstate() {
  useMarkVisited('ai-and-real-estate')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3E0;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and real estate
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI is changing the way homes are valued, bought, rented, and financed —
            from instant property estimates and AI mortgage decisions to smart home tech and fraud detection.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-real-estate" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How AI values your home</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            You may have noticed that Rightmove and Zoopla show an estimated value for your property — or one you are looking at. These estimates come from Automated Valuation Models (AVMs), AI systems that analyse vast amounts of property data to produce a price estimate in seconds.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CA;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">What AVMs use</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">AVMs pull together Land Registry sales data (every property sale in England and Wales is recorded), council tax banding, floor area data from Energy Performance Certificates, local school ratings, distance to stations, crime statistics, and comparable recent sales nearby. Machine learning models find patterns across millions of transactions to estimate what your home would sell for today.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F3E6;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Mortgage lenders use them too</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Many mortgage lenders now use AVMs for initial assessments — some lenders can approve a mortgage in principle in minutes because the AI instantly values the property without needing to send a surveyor. This speeds up the process enormously, though a full physical survey is still advisable before exchange.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-amber-50 dark:bg-amber-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x26A0;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm mb-0.5">Their limits</p>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">AVMs cannot see inside a property. They do not know if the kitchen was just renovated or if the roof is about to collapse. They struggle with unusual properties — barns, listed buildings, homes with large gardens — where there are few comparable sales. A human RICS surveyor remains essential for a definitive valuation.</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-4">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              <strong>Practical tip:</strong> The AVM estimates shown on Rightmove and Zoopla can vary by tens of thousands of pounds from each other and from reality. Use them as a rough benchmark, not as a substitute for a proper valuation when making a major decision.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI letting agents and smarter property search</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Finding a home to rent or buy used to mean scrolling through pages of listings and booking viewings for places that turned out to be wrong. AI is changing the search experience — and tackling the fraud problem that has plagued rental platforms.
          </p>
          <div className="space-y-2">
            {[
              'AI property search tools learn your preferences from the properties you click on, save, or spend time viewing — and weight future results accordingly, going beyond simple filters',
              'Natural language search is emerging: instead of setting filters, you describe what you want and AI matches listings to your description',
              'Virtual viewings with AI commentary allow you to explore properties in 360-degree video with automated descriptions of room sizes, natural light, and nearby amenities',
              'Fraud detection AI analyses listings for stolen photos (using reverse image search), price anomalies, newly created accounts posting many premium listings, and language patterns common in scam adverts',
              'AI referencing tools can process a tenant\'s employment history, rental history, and bank statements in minutes rather than days, speeding up the letting process for honest applicants',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 dark:bg-red-950 rounded-xl p-4">
            <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
              <strong>Watch out for rental fraud:</strong> AI fraud detection is improving but not perfect. Never pay a deposit before you have physically visited a property or confirmed the landlord owns it. Legitimate landlords never ask for payment via bank transfer before a viewing.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Smart home technology — what it means for buyers and renters</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            New-build homes increasingly come fitted with smart home technology — and older homes are being retrofitted. Understanding what these devices do is increasingly important when moving home.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-purple-50 dark:bg-purple-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F321;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-0.5">Smart thermostats (Nest, Hive, Tado)</p>
                <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">These AI systems learn your schedule, adjust heating automatically, and can reduce energy bills by 10-20%. They also know when you are at home or away. If you move into a property with an existing smart thermostat linked to the previous owner's account, make sure it is fully reset and linked only to yours.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-purple-50 dark:bg-purple-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F6AA;</span>
              <div>
                <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-0.5">Smart locks and video doorbells</p>
                <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">Video doorbells (Ring, Nest Hello) record everyone who approaches your door and use AI to distinguish people from animals, detect packages, and recognise familiar faces. Smart locks log every entry and exit. Both can add genuine security but also create a detailed record of your household's comings and goings.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-purple-50 dark:bg-purple-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F50F;</span>
              <div>
                <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-0.5">Privacy when renting</p>
                <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">Landlords in the UK must disclose any surveillance devices installed in a rental property. If a landlord installs smart home devices without informing tenants, this may breach privacy law. As a tenant, you have the right to know what data is being collected in your home.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-teal-100 dark:border-teal-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI mortgages — how algorithms decide your home loan</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Applying for a mortgage used to mean lengthy interviews with a bank manager who reviewed your finances and made a judgment. Today, AI algorithms do much of this work — often faster and more consistently than humans, but also more opaquely.
          </p>
          <div className="space-y-2">
            {[
              'Open banking allows you to share up to 12 months of bank statements with a lender digitally — AI analyses your spending patterns, income regularity, and financial behaviour in seconds',
              'Credit risk algorithms combine your credit score, deposit size, income, existing debts, the property AVM value, and statistical models of how similar borrowers have performed to calculate a risk score',
              'Some lenders can produce a mortgage in principle decision in under 10 minutes — entirely automated, with no human reviewing your file at that stage',
              'If the AI flags a risk (unusual income patterns, certain spending categories, previous county court judgments), your application may be referred to a human underwriter or declined automatically',
              'You have the right to request a human review of an automated financial decision under UK GDPR — if your mortgage is declined by an algorithm, you can ask for a human to reconsider',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-teal-600 dark:text-teal-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-4">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              <strong>Know your rights:</strong> Under UK GDPR, you have the right not to be subject to a decision based solely on automated processing if it significantly affects you. For mortgage rejections, ask the lender for an explanation and a human review. A mortgage broker can also help navigate applications if the direct route fails.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI and the future of the UK property market</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Beyond individual transactions, AI is beginning to reshape the property market at a structural level — and not always in ways that benefit ordinary buyers and renters.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-rose-50 dark:bg-rose-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4C8;</span>
              <div>
                <p className="font-semibold text-rose-800 dark:text-rose-200 text-sm mb-0.5">Predictive analytics for investors</p>
                <p className="text-rose-700 dark:text-rose-300 text-sm leading-relaxed">Large property investment funds use AI to analyse planning applications, transport investment announcements, demographic migration data, and school performance trends to identify areas where property prices are likely to rise before it becomes obvious. This allows them to buy ahead of ordinary buyers — one reason prices can rise sharply in areas earmarked for regeneration.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-rose-50 dark:bg-rose-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F3D7;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-rose-800 dark:text-rose-200 text-sm mb-0.5">AI in planning</p>
                <p className="text-rose-700 dark:text-rose-300 text-sm leading-relaxed">Some councils are piloting AI tools to process planning applications faster, identify land suitable for housing, and model the impact of new developments on traffic and services. Proponents say this will help speed up housebuilding. Critics worry it removes local democratic input from decisions that profoundly affect communities.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-rose-50 dark:bg-rose-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F3E2;</span>
              <div>
                <p className="font-semibold text-rose-800 dark:text-rose-200 text-sm mb-0.5">Energy efficiency and the property market</p>
                <p className="text-rose-700 dark:text-rose-300 text-sm leading-relaxed">AI tools can model the energy performance of a building and predict the cost of bringing it up to modern standards. As energy efficiency requirements tighten, AI assessment tools will influence which properties landlords invest in and which they sell — reshaping the rental market in ways that are only beginning to become visible.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-900 p-6 space-y-3">
          <ReviewLaterButton lessonId="ai-and-real-estate" />
          <LessonNote lessonId="ai-and-real-estate" />
        </div>

        <Quiz questions={quizQuestions} lessonId="ai-and-real-estate" />

        <LessonRating lessonId="ai-and-real-estate" />
        <LessonFeedback lessonId="ai-and-real-estate" />

        <RelatedLessons currentId="ai-and-real-estate" />

        <NextLesson currentId="ai-and-real-estate" />

      </div>
    </div>
  )
}
