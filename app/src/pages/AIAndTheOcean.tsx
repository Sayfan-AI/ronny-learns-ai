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

const LESSON_TITLE = 'AI and the ocean'

const KEY_TAKEAWAYS = [
  'Only about 20% of the ocean floor has been mapped in high resolution. Autonomous underwater vehicles (AUVs) guided by AI are steadily filling that gap — mapping seamounts, hydrothermal vents, and deep-sea habitats at a scale no human diver could reach.',
  'AI systems analyse satellite images and drone footage to monitor coral reef health across entire reef systems, spotting bleaching events and damage weeks earlier than traditional surveys.',
  'Global Fishing Watch uses AI to track hundreds of thousands of vessels from space, detecting suspicious patterns that suggest illegal, unreported, or unregulated (IUU) fishing — a practice that costs the ocean billions of tonnes of fish per year.',
  'AI climate models are helping scientists predict ocean warming, sea level rise, and the spread of ocean dead zones — giving communities and governments earlier warning to adapt.',
  'The ocean is the planet\'s largest carbon sink, absorbing about 30% of human CO2 emissions. AI is helping scientists understand how much longer it can keep absorbing at current rates before the consequences become severe.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What are autonomous underwater vehicles (AUVs) and how does AI help them?',
    options: [
      'AUVs are remotely controlled submarines piloted by scientists sitting at consoles on research ships — AI assists by automatically avoiding obstacles',
      'AUVs are self-guided underwater robots that navigate, collect data, and make decisions without a human controlling them moment-to-moment — AI enables them to follow complex routes, avoid hazards, and adapt to unexpected conditions in real time',
      'AUVs are buoys tethered to the seabed that drift with currents — AI analyses the sensor data they collect about temperature, salinity, and chemical composition',
      'AUVs are underwater drones used exclusively by navies — AI helps them identify submarine activity and map military shipping lanes',
    ],
    correctIndex: 1,
    explanation:
      'AUVs (autonomous underwater vehicles) are robotic submarines that operate without real-time human control. Unlike remotely operated vehicles (ROVs), which are connected to a surface ship by a cable and piloted by a human operator, AUVs are pre-programmed with a mission and carry it out independently. AI enables them to navigate complex 3D environments — avoiding obstacles, following terrain, adjusting for currents — and make decisions in real time when conditions change. They can dive deeper, stay submerged longer, and cover more ground than any human diver or ROV, making them invaluable for ocean mapping and research.',
    hint: 'Think about what "autonomous" means — operating without a human at the controls.',
  },
  {
    question: 'How does AI help monitor the health of coral reefs?',
    options: [
      'AI-controlled underwater robots scrub algae from coral reefs and dispense chemicals to prevent bleaching',
      'AI analyses satellite and drone images of reef systems to identify bleaching, crown-of-thorns starfish outbreaks, and damage — detecting problems across vast areas faster than human surveys could',
      'AI monitors the temperature of water in aquariums where coral is cultivated for reef restoration, ensuring optimal growing conditions',
      'AI generates computer simulations of healthy coral reefs that scientists compare against real footage to spot differences',
    ],
    correctIndex: 1,
    explanation:
      'Coral reefs cover less than 1% of the ocean floor but support around 25% of all marine species. Monitoring their health across thousands of square kilometres is impossible with human divers alone. AI systems trained on images of healthy and bleached coral can analyse satellite imagery and drone footage to automatically detect bleaching events, quantify their extent, and track how quickly damage is spreading. Projects like the Allen Coral Atlas have mapped the world\'s shallow coral reefs using AI and satellite imagery. This allows conservation organisations to prioritise where to focus restoration efforts and give researchers early warning when bleaching is beginning.',
    hint: 'Think about covering vast ocean areas more efficiently than human divers.',
  },
  {
    question: 'What is illegal, unreported, and unregulated (IUU) fishing, and how does AI help detect it?',
    options: [
      'IUU fishing refers to fishing in areas designated as marine reserves. AI identifies it by analysing underwater microphone data that detects the sound of fishing nets being dragged',
      'IUU fishing refers to catching fish outside of legal quotas and reporting rules. Global Fishing Watch uses AI to analyse satellite tracking data from vessels and identify suspicious movement patterns that suggest illegal fishing',
      'IUU fishing refers to fishing vessels that do not carry the required GPS transponders. AI cross-references vessel registration databases to identify ships operating without proper documentation',
      'IUU fishing refers to fish imported from countries with weaker fishing regulations. AI analyses customs data and food labelling to trace where fish sold in supermarkets actually came from',
    ],
    correctIndex: 1,
    explanation:
      "IUU fishing is estimated to account for up to 26 million tonnes of fish per year — as much as 15-20% of the global catch — depleting fish stocks, undermining legal fishers, and damaging marine ecosystems. Global Fishing Watch, a non-profit, uses AI to analyse Automatic Identification System (AIS) transponder data from vessels worldwide. The AI learns the behavioural patterns of different types of fishing (trawling, longlining, purse seining) and flags vessels showing suspicious behaviour — such as appearing to fish in protected zones, switching off their transponders in known fishing grounds, or making rendezvous at sea in ways consistent with transferring illegally caught fish. This enables coast guards and fishery authorities to target their inspections more effectively.",
    hint: 'Think about tracking ships from space to spot suspicious behaviour.',
  },
  {
    question: 'Why is the ocean so important for understanding climate change?',
    options: [
      'The ocean reflects sunlight back into space, and AI helps scientists measure how much of this reflection is changing as sea ice melts',
      'The ocean absorbs about 30% of human CO2 emissions and 90% of excess heat from climate change — making it the planet\'s most important climate buffer, and AI is helping predict how long it can continue absorbing at current rates',
      'The ocean generates most of the world\'s weather patterns, and AI weather models use ocean temperature data to produce more accurate 10-day forecasts',
      'Ocean currents transport warm and cold water around the planet, and AI models predict when these currents will shift — events that have caused major weather disruptions in the past',
    ],
    correctIndex: 1,
    explanation:
      "The ocean is Earth's largest carbon sink, absorbing roughly 30% of the CO2 humans emit and about 90% of the excess heat trapped by greenhouse gases. Without the ocean's buffering effect, global warming would already be far more severe. However, this absorption is changing the ocean — warming it, acidifying it (as CO2 dissolves to form carbonic acid), and depleting oxygen levels. AI models are helping scientists understand how these changes interact, how close the ocean is to saturation point for carbon absorption, and how ocean currents like the Atlantic Meridional Overturning Circulation (AMOC) might change — changes that could have dramatic effects on European weather.",
    hint: 'Think about what absorbs most of the CO2 and heat from climate change.',
  },
  {
    question: 'What are ocean dead zones and how is AI helping researchers understand them?',
    options: [
      'Dead zones are areas of ocean so deep that no sunlight reaches them, making it impossible for fish to survive. AI helps identify new dead zones using sonar mapping',
      'Dead zones are areas where oxygen levels have dropped so low that most marine life cannot survive. AI analyses satellite data and sensor networks to map their extent, track their spread, and model what is causing them to grow',
      'Dead zones are patches of the ocean contaminated by plastic pollution so dense that fish avoid them. AI analyses drone footage to track where plastic concentrations are highest',
      'Dead zones are areas where overfishing has completely eliminated fish populations. AI models predict which ocean regions will become dead zones next based on fishing intensity data',
    ],
    correctIndex: 1,
    explanation:
      "Ocean dead zones — formally called hypoxic zones — are areas where dissolved oxygen has fallen so low that fish and most other marine animals suffocate and flee or die. They are caused primarily by agricultural runoff (especially fertilisers containing nitrogen and phosphorus) that triggers massive algae blooms; when the algae die, bacteria decomposing them consume enormous amounts of oxygen. There are over 400 known dead zones worldwide, many of them growing. AI analyses a combination of satellite images showing chlorophyll levels (indicating algae), ocean sensors measuring dissolved oxygen, and climate data to map dead zones, track their seasonal patterns, and model how nutrient runoff from land contributes to their formation — helping policymakers design more effective interventions.",
    hint: 'Think about areas of ocean where marine life cannot survive due to low oxygen.',
  },
]

export function AIAndTheOcean() {
  useMarkVisited('ai-and-the-ocean')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F30A;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and the ocean
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI is exploring the deep, protecting marine life, catching illegal fishing fleets,
            and helping us understand the ocean's role in our changing climate.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-the-ocean" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The ocean — vast, vital, and mostly unexplored</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The ocean covers 71% of Earth's surface and contains 97% of its water. It regulates our climate, produces half the oxygen we breathe, and feeds billions of people. Yet more of the ocean floor has been mapped than the surface of Mars.
          </p>
          <div className="space-y-2">
            {[
              'Only about 20% of the ocean floor has been mapped in high resolution — the rest is known only in broad outlines',
              'The deep ocean (below 200 metres) makes up 95% of the ocean\'s volume and hosts extraordinary biodiversity we have barely begun to catalogue',
              'Ocean currents transport heat around the planet, regulating temperatures in Europe, North America, and beyond',
              'Oceans absorb about 30% of human CO2 emissions — but this is acidifying the water, threatening shellfish, coral, and the entire marine food web',
              'An estimated 8 million tonnes of plastic enter the ocean every year, and AI is helping track where it accumulates',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-4">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Studying the ocean is extraordinarily difficult. It is deep, dark, cold, pressurised, and corrosive. AI is making it possible to gather, process, and understand ocean data at a scale that was previously impossible.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-cyan-100 dark:border-cyan-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Mapping the deep — autonomous underwater vehicles</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AUVs (autonomous underwater vehicles) are self-guided underwater robots that carry out research missions without a human operator at the controls. AI makes this possible.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-cyan-50 dark:bg-cyan-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F916;</span>
              <div>
                <p className="font-semibold text-cyan-800 dark:text-cyan-200 text-sm mb-0.5">How AUVs navigate</p>
                <p className="text-cyan-700 dark:text-cyan-300 text-sm leading-relaxed">GPS does not work underwater — radio waves cannot penetrate seawater. AUVs use a combination of acoustic positioning, inertial navigation (tracking movement from a known starting point), and AI to estimate their position and navigate precisely. They can follow complex pre-programmed survey routes or adapt dynamically to obstacles and interesting features they encounter.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-cyan-50 dark:bg-cyan-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F5FA;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-cyan-800 dark:text-cyan-200 text-sm mb-0.5">Seafloor mapping</p>
                <p className="text-cyan-700 dark:text-cyan-300 text-sm leading-relaxed">AUVs equipped with sonar can map the seafloor in extraordinary detail, revealing underwater mountains (seamounts), deep-sea trenches, hydrothermal vent systems, and habitats for deep-sea life. AI processes the sonar data in real time to build 3D maps and identify features worth investigating further.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-cyan-50 dark:bg-cyan-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F41F;</span>
              <div>
                <p className="font-semibold text-cyan-800 dark:text-cyan-200 text-sm mb-0.5">Species identification</p>
                <p className="text-cyan-700 dark:text-cyan-300 text-sm leading-relaxed">Cameras on AUVs capture video of marine life, and AI models trained on libraries of underwater images automatically identify species, estimate population sizes, and flag unusual behaviour. What would take marine biologists months of manual video review can be processed in hours.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-teal-100 dark:border-teal-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Protecting coral reefs</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Coral reefs cover less than 1% of the ocean floor but support around 25% of all marine species. They are under severe threat from warming seas, ocean acidification, pollution, and destructive fishing. AI is helping conservation efforts scale.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-teal-50 dark:bg-teal-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F6F0;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-teal-800 dark:text-teal-200 text-sm mb-0.5">The Allen Coral Atlas</p>
                <p className="text-teal-700 dark:text-teal-300 text-sm leading-relaxed">This project, backed by Paul Allen's philanthropic foundation, has used AI and satellite imagery to map 95% of the world's shallow coral reefs. The AI classifies reef types, identifies bleaching, and tracks change over time — enabling scientists to see the global state of reefs at a glance for the first time.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-teal-50 dark:bg-teal-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1FAB8;</span>
              <div>
                <p className="font-semibold text-teal-800 dark:text-teal-200 text-sm mb-0.5">Detecting bleaching early</p>
                <p className="text-teal-700 dark:text-teal-300 text-sm leading-relaxed">Coral bleaching — when stressed coral expels the algae that give it colour and energy — can be detected by AI weeks before it would be noticed by a passing diver. Early detection allows conservation teams to prepare restoration interventions, reduce local stressors (like water quality problems), and document the extent of damage for advocacy purposes.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-teal-50 dark:bg-teal-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x2B50;</span>
              <div>
                <p className="font-semibold text-teal-800 dark:text-teal-200 text-sm mb-0.5">Crown-of-thorns starfish</p>
                <p className="text-teal-700 dark:text-teal-300 text-sm leading-relaxed">Crown-of-thorns starfish periodically swarm the Great Barrier Reef and devour coral. Researchers have trained AI models to identify them in underwater video footage, enabling rapid surveys to track outbreaks and guide targeted removal before they devastate entire reef sections.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Catching illegal fishing — from space</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Illegal, unreported, and unregulated (IUU) fishing accounts for up to 26 million tonnes of fish per year — depleting stocks, undermining legal fishers, and damaging ecosystems. AI is giving authorities the ability to monitor every vessel on the ocean.
          </p>
          <div className="space-y-2">
            {[
              'Global Fishing Watch is a non-profit that uses AI to analyse AIS (Automatic Identification System) transponder data from hundreds of thousands of vessels worldwide',
              'The AI learns the behavioural signatures of different fishing methods — trawling, longlining, purse seining — and flags vessels that appear to be fishing in protected zones or outside their licensed areas',
              'Vessels that switch off their transponders in known fishing grounds (a classic IUU tactic) are flagged as suspicious based on their pre-disappearance behaviour and post-reappearance location',
              'Radar satellite imagery from Sentinel-1 can detect vessels regardless of whether they have switched off their AIS transponder — AI matches these against registered vessel databases',
              'Global Fishing Watch data is freely available to governments, coast guards, and journalists, making it much harder for IUU operators to avoid scrutiny',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The ocean and climate — what AI is revealing</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The ocean is the planet's most important climate regulator — and understanding how it is changing is central to understanding climate change.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F321;&#xFE0F;',
                label: 'Ocean heat content',
                text: 'The ocean has absorbed 90% of the excess heat from climate change since 1970. AI models process data from thousands of Argo floats — automated sensors distributed across the ocean — to track how heat is being distributed through the water column and how this is changing over decades.',
                color: 'blue',
              },
              {
                icon: '&#x1F9EA;',
                label: 'Ocean acidification',
                text: 'As CO2 dissolves into seawater, it forms carbonic acid, lowering the pH of the ocean. AI analyses global sensor networks to map where acidification is progressing fastest — threatening shellfish, corals, and the base of the marine food chain in ways that affect billions of people who depend on seafood.',
                color: 'blue',
              },
              {
                icon: '&#x1F4C9;',
                label: 'Dead zones',
                text: 'Oxygen-depleted dead zones have more than doubled since 1960 due to agricultural runoff. AI combines satellite imagery, ocean sensors, and climate models to map their extent and predict where new ones are forming — helping policymakers target interventions to reduce nutrient runoff from land.',
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

        <LessonNote lessonId="ai-and-the-ocean" />
        <ReviewLaterButton lessonId="ai-and-the-ocean" />

        <Quiz lessonId="ai-and-the-ocean" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-the-ocean" />
        <LessonFeedback lessonId="ai-and-the-ocean" />

        <RelatedLessons currentId="ai-and-the-ocean" />

        <NextLesson currentId="ai-and-the-ocean" />

      </div>
    </div>
  )
}
