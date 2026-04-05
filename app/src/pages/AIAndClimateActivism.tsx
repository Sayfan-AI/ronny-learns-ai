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
import { LessonSeriesBadge } from '../components/LessonSeriesBadge'

const LESSON_TITLE = 'AI and climate activism'

const KEY_TAKEAWAYS = [
  'AI satellite monitoring systems like Global Forest Watch analyse imagery from dozens of satellites every few days to detect deforestation, fires, and land degradation in near real-time — giving activists and governments data that used to take months to compile.',
  'Personal carbon footprint apps powered by AI can estimate your carbon emissions from your bank transactions, travel patterns, and lifestyle choices — helping individuals understand and reduce their environmental impact.',
  'AI is accelerating climate science: DeepMind\'s GraphCast can produce accurate 10-day global weather forecasts in under a minute, and AI climate models are helping scientists simulate the effects of different emissions scenarios far faster than before.',
  'AI tools can detect greenwashing — analysing corporate sustainability reports, advertising claims, and supply chain data to flag statements that appear misleading or unsupported by evidence.',
  'Environmental NGOs and campaign groups are using AI for digital campaigning: targeting petitions, personalising donor outreach, analysing social media trends, and optimising the timing of campaign messages.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does AI satellite monitoring help detect deforestation?',
    options: [
      'AI-controlled drones fly over forests every day and photograph any area where trees have been cut down, sending the images to environmental agencies',
      'AI analyses imagery from satellites that pass over every area of Earth every few days, comparing images over time to detect changes in tree cover, fires, and land use',
      'AI monitors social media posts from local communities who report deforestation they can see from their homes, collating the reports into a map',
      'AI reads government planning applications and cross-references them with protected forest land, flagging any applications that overlap with conservation areas',
    ],
    correctIndex: 1,
    explanation:
      'Platforms like Global Forest Watch, run by the World Resources Institute, use AI to process satellite imagery from multiple sources — including NASA Landsat, ESA Sentinel, and Planet Labs satellites. Modern satellites can image the same location every few days (some daily). The AI compares new images to historical baselines, detecting changes in tree cover down to individual trees in some cases. When forest loss is detected, the system raises an alert that can be sent to local authorities, NGOs, or journalists within hours or days. This near real-time monitoring has transformed deforestation tracking — what used to require field surveys taking months can now be detected automatically from space. The AI also analyses fire spread, illegal mining activity, and agricultural encroachment into protected areas.',
    hint: 'Think about AI comparing satellite images taken at different times.',
  },
  {
    question: 'How do AI-powered carbon footprint apps estimate your personal emissions?',
    options: [
      'They require you to manually enter every purchase, journey, and meal you make, then calculate the carbon equivalent using a standard reference table',
      'They connect to your bank account or spending data and use AI to categorise transactions and estimate the carbon emissions associated with your purchases, travel, and home energy use',
      'They use GPS tracking to follow your physical location and calculate emissions based on the modes of transport you use throughout the day',
      'They access government tax records to estimate your income and lifestyle, then use national average carbon figures for your income bracket',
    ],
    correctIndex: 1,
    explanation:
      'Apps like Cogo, My Carbon, and Klarna\'s sustainability features connect to your bank account (with permission) and use AI to analyse your transactions. The AI categorises each transaction — supermarket, petrol station, airline, restaurant, Amazon — and applies carbon emissions data for each category. A flight booked through an airline gets an estimate based on the route and typical aircraft. Supermarket spending gets broken down using average food carbon intensity data. The AI learns your patterns over time and can suggest the highest-impact changes — often flying less and switching to a plant-rich diet are identified as the biggest levers for most UK consumers. The key advantage over manual tracking is that the AI does the hard work of categorising and calculating automatically.',
    hint: 'Think about what data is most readily available about your spending habits.',
  },
  {
    question: 'What is significant about DeepMind\'s GraphCast weather forecasting model?',
    options: [
      'It is the first AI system to detect human-caused climate change in real-time by comparing current weather patterns to pre-industrial baselines',
      'It can produce accurate 10-day global weather forecasts in under a minute, dramatically faster than traditional physics-based models that take hours of supercomputer time',
      'It has replaced all human meteorologists at the UK Met Office, making weather forecasting fully automated for the first time',
      'It uses AI to retroactively predict what the weather would have been without human greenhouse gas emissions, enabling precise attribution of extreme weather events',
    ],
    correctIndex: 1,
    explanation:
      'Traditional numerical weather prediction (NWP) models work by dividing the atmosphere into a three-dimensional grid and solving physics equations at each point — a process that takes hours even on the world\'s fastest supercomputers. DeepMind\'s GraphCast, published in 2023, was trained on four decades of historical weather data. Instead of solving physics equations, it learns the patterns directly from the data. The result is a model that can produce a 10-day global forecast accurate to a high spatial resolution in under 60 seconds on a single modern computer. In independent tests, it outperformed the European Centre for Medium-Range Weather Forecasts (ECMWF) model — considered the gold standard — on most metrics. This speed and efficiency is particularly valuable for climate scientists who want to run thousands of scenario simulations to understand the range of possible futures under different emissions pathways.',
    hint: 'Think about how much faster AI can be than traditional physics-based models.',
  },
  {
    question: 'How can AI tools detect greenwashing by companies?',
    options: [
      'AI monitors factories via satellite to measure actual emissions from smoke stacks and compares these to the emissions figures companies report publicly',
      'AI analyses corporate sustainability reports, advertising claims, and supply chain data, flagging statements that appear inconsistent with evidence or that use misleading language',
      'AI automatically fines companies whose sustainability claims are found to be false, using pattern recognition to identify misleading advertising without human intervention',
      'AI requires all companies to submit their supply chain data to a central database before making any sustainability claims, ensuring all claims are independently verified first',
    ],
    correctIndex: 1,
    explanation:
      "Greenwashing detection AI, such as tools developed by Watershed, South Pole, and academic researchers, works in several ways. Natural language processing analyses the language in sustainability reports and advertising — words like 'carbon neutral', 'net zero', 'sustainable', and 'eco-friendly' are flagged for closer scrutiny. The AI then checks whether these claims are supported by evidence elsewhere in the document (do they provide actual emissions data?) and compares them to verified third-party databases. Supply chain analysis AI can map a company's suppliers and check whether those suppliers have credible sustainability credentials, exposing cases where a company makes green claims about its products while sourcing from environmentally damaging suppliers. The UK's Competition and Markets Authority and the Advertising Standards Authority use similar AI-assisted tools to investigate greenwashing complaints.",
    hint: 'Think about what kinds of data an AI could compare corporate claims against.',
  },
  {
    question: 'How are environmental campaign groups using AI in their digital campaigns?',
    options: [
      'They use AI to automatically file legal challenges against companies that miss emissions targets, generating court documents without any human lawyer involvement',
      'They use AI for targeted petition campaigns, personalised donor outreach, social media trend analysis, and optimising when to release campaign messages for maximum impact',
      'They use AI to hack into corporate databases and extract evidence of environmental violations, which is then shared with the press anonymously',
      'They use AI to create deepfake videos of politicians and business leaders admitting environmental wrongdoing, used to pressure companies into changing behaviour',
    ],
    correctIndex: 1,
    explanation:
      "NGOs like Greenpeace, Friends of the Earth, and smaller grassroots organisations are increasingly using AI tools for their campaigning. AI helps identify which supporters are most likely to respond to a specific campaign based on their past engagement — allowing organisations to send more relevant messages to the right people rather than blanket emails. Petition platforms use AI to identify who to target for signature drives based on geography, political representation, and past petition behaviour. Social media listening AI monitors conversations about environmental topics in real time, identifying emerging trends, hostile narratives to respond to, and moments when public attention on an issue peaks (often after an extreme weather event). AI also analyses past campaign data to predict which message frames, images, and subject lines drive the highest engagement — allowing campaigns to be optimised continuously.",
    hint: 'Think about how AI can help organisations communicate more effectively with their supporters.',
  },
]

export function AIAndClimateActivism() {
  useMarkVisited('ai-and-climate-activism')

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F333;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and climate activism
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            From satellites that catch illegal deforestation to apps that track your carbon footprint —
            how AI is becoming one of the most powerful tools in the fight against climate change.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-climate-activism" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <LessonSeriesBadge lessonId="ai-and-climate-activism" />

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Why climate activists need AI</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Climate change is one of the most data-intensive problems humanity has ever faced. The scale of monitoring, analysis, and coordination required is beyond what humans can do alone. AI is changing that.
          </p>
          <div className="space-y-2">
            {[
              'The world loses an area of forest the size of a football pitch every second — tracking this manually across millions of square kilometres is impossible without AI',
              'There are over 6,000 climate-related pledges from governments and corporations — verifying whether they are being kept requires AI-scale analysis',
              'Environmental campaign groups are often small organisations trying to influence decisions made by governments and corporations with vastly more resources',
              'AI levels the playing field: a small NGO with access to satellite AI tools can now monitor a country\'s forests as effectively as a large government agency',
              'Public concern about climate change is high, but translating it into action requires effective communication — AI helps campaigns reach the right people with the right message',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI satellite monitoring — watching the planet from space</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Dozens of Earth observation satellites now circle the planet, generating terabytes of imagery every day. AI makes it possible to actually use that data.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-emerald-50 dark:bg-emerald-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F6F0;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-emerald-800 dark:text-emerald-200 text-sm mb-0.5">Global Forest Watch</p>
                <p className="text-emerald-700 dark:text-emerald-300 text-sm leading-relaxed">Run by the World Resources Institute, this platform processes imagery from multiple satellite constellations. AI detects tree cover loss, fires, and land-use changes within days of them occurring — then sends alerts to local authorities and NGOs. It has been used to expose illegal logging in the Amazon, Congo Basin, and Southeast Asia.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-emerald-50 dark:bg-emerald-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F30A;</span>
              <div>
                <p className="font-semibold text-emerald-800 dark:text-emerald-200 text-sm mb-0.5">Ocean and reef monitoring</p>
                <p className="text-emerald-700 dark:text-emerald-300 text-sm leading-relaxed">AI analyses satellite thermal imagery to track coral bleaching events, monitors illegal fishing vessel activity using radar and AIS data, and maps plastic debris concentrations in ocean gyres. Some systems can now track individual fishing vessels anywhere on Earth in near real-time.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-emerald-50 dark:bg-emerald-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4A8;</span>
              <div>
                <p className="font-semibold text-emerald-800 dark:text-emerald-200 text-sm mb-0.5">Methane and emissions tracking</p>
                <p className="text-emerald-700 dark:text-emerald-300 text-sm leading-relaxed">Satellites equipped with spectrometers can detect methane plumes from oil and gas fields, landfills, and agriculture. AI identifies and locates emission sources — allowing environmental groups to present governments and companies with specific, verifiable evidence of emissions they may be under-reporting.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-teal-100 dark:border-teal-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Carbon footprint apps — AI in your pocket</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Understanding your personal carbon footprint is the first step to reducing it. AI makes this dramatically easier.
          </p>
          <div className="space-y-2">
            {[
              'Apps like Cogo and My Carbon connect to your bank account and use AI to categorise transactions and estimate associated carbon emissions',
              'The AI breaks down your footprint into categories: home energy, travel, food, shopping, and holidays — showing where your biggest impact lies',
              'Most UK users find that flights and diet are the two highest-impact categories — eating less beef and flying less typically have a bigger effect than recycling or switching to LED bulbs',
              'Some apps integrate with smart meters and electric vehicle charge points to give more precise energy and transport data',
              'The UK government\'s DEFRA publishes emissions factor data that these apps use — making the methodology transparent and auditable',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-teal-600 dark:text-teal-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI accelerating climate science</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The climate crisis is ultimately a scientific and technical problem. AI is giving researchers new tools to understand and respond to it.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F32A;&#xFE0F;',
                label: 'Weather forecasting',
                text: 'DeepMind\'s GraphCast produces accurate 10-day global weather forecasts in under a minute — a task that takes traditional supercomputer models several hours. More accurate extreme weather forecasting allows communities to prepare earlier.',
                color: 'blue',
              },
              {
                icon: '&#x1F9EA;',
                label: 'Climate model acceleration',
                text: 'Climate models that previously required months of supercomputer time to run can now be approximated using AI emulators in minutes — allowing scientists to run thousands of simulations of different emissions scenarios to understand the range of possible futures.',
                color: 'blue',
              },
              {
                icon: '&#x1F33F;',
                label: 'Biodiversity monitoring',
                text: "AI analyses acoustic recordings from forests, reefs, and grasslands to assess ecosystem health from the sounds of bird calls, insect activity, and marine life — providing a low-cost way to monitor biodiversity over vast areas that couldn't be surveyed by hand.",
                color: 'blue',
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

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Detecting greenwashing with AI</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            As sustainability becomes a selling point, the risk of misleading claims grows. AI is being used to hold companies accountable.
          </p>
          <div className="space-y-2">
            {[
              'Natural language processing AI analyses sustainability reports for vague, unverifiable, or contradictory claims — flagging statements like "carbon neutral by 2050" with no interim targets or methodology',
              'Supply chain AI maps a company\'s suppliers to check whether their environmental credentials are consistent with the company\'s public claims',
              'The UK Advertising Standards Authority uses AI-assisted tools to monitor online advertising for potentially misleading environmental claims',
              'The Competition and Markets Authority\'s Green Claims Code requires that environmental claims be clear, accurate, and substantiated — AI helps enforce this at scale',
              'Academic researchers have published AI tools that score corporate sustainability reports for credibility, creating public accountability pressure',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-violet-100 dark:border-violet-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI in digital campaigning</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Climate campaign organisations are using AI to communicate more effectively and build more powerful movements.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-violet-50 dark:bg-violet-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4EC;</span>
              <div>
                <p className="font-semibold text-violet-800 dark:text-violet-200 text-sm mb-0.5">Personalised outreach</p>
                <p className="text-violet-700 dark:text-violet-300 text-sm leading-relaxed">AI analyses past supporter behaviour to identify which campaigns, messages, and donation asks each person is most likely to respond to — allowing organisations to send targeted messages rather than generic mass emails. This increases response rates and reduces unsubscribes.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-violet-50 dark:bg-violet-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F1;</span>
              <div>
                <p className="font-semibold text-violet-800 dark:text-violet-200 text-sm mb-0.5">Social media intelligence</p>
                <p className="text-violet-700 dark:text-violet-300 text-sm leading-relaxed">AI monitors social media in real time, identifying when climate topics trend, which narratives are gaining traction, and where disinformation about climate change is spreading. Campaigns can respond quickly to shift public conversations at the right moment.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-violet-50 dark:bg-violet-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F5F3;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-violet-800 dark:text-violet-200 text-sm mb-0.5">Petition targeting</p>
                <p className="text-violet-700 dark:text-violet-300 text-sm leading-relaxed">AI identifies which parliamentary constituencies, local councils, or company shareholders are most likely to be persuadable on a given issue — allowing campaigns to direct petition signatures and lobbying effort where it will have the most political impact.</p>
              </div>
            </div>
          </div>
        </div>

        <LessonNote lessonId="ai-and-climate-activism" />
        <ReviewLaterButton lessonId="ai-and-climate-activism" />

        <Quiz lessonId="ai-and-climate-activism" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-climate-activism" />
        <LessonFeedback lessonId="ai-and-climate-activism" />

        <RelatedLessons currentId="ai-and-climate-activism" />

        <NextLesson currentId="ai-and-climate-activism" />

      </div>
    </div>
  )
}
