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

const LESSON_TITLE = 'AI and the home'

const KEY_TAKEAWAYS = [
  "Smart speakers (Amazon Echo with Alexa, Google Nest, Apple HomePod) use AI voice recognition and natural language processing to answer questions, control smart devices, play music, and set reminders — but they are always listening for their wake word, which raises genuine privacy questions.",
  "AI thermostats like Nest, Hive, and Tado learn your daily schedule and heating preferences over time and adjust automatically — studies show they save households around 10-15% on heating bills.",
  "Robot vacuums like the Roomba use AI to map your home, learn where obstacles are, and plan efficient cleaning routes — newer models can even identify and avoid pet mess.",
  "Smart security cameras use AI to distinguish between a person, a car, an animal, or a waving tree branch — sending you an alert only when something worth knowing about happens, rather than recording constantly.",
  "AI-managed energy systems can shift your high-consumption appliances (dishwasher, washing machine, EV charging) to off-peak times automatically, reducing bills and reducing strain on the national grid.",
]

const quizQuestions: QuizQuestion[] = [
  {
    question: "How does a smart speaker like Amazon Echo know when you are talking to it?",
    options: [
      "It constantly records everything said in the room and sends it to Amazon's servers for analysis",
      "It listens locally for its specific wake word (such as 'Alexa') and only connects to the internet and records audio after it hears that word",
      "It uses facial recognition via a built-in camera to detect when you are looking at it and ready to speak",
      "It turns on only when you press a physical button on the top of the device, then processes your voice command offline",
    ],
    correctIndex: 1,
    explanation:
      "Smart speakers use a small amount of on-device processing to continuously listen for their wake word. This wake word detection happens on the device itself, without sending audio to the internet. Only after hearing the wake word does the device start recording and sending audio to cloud servers for full processing. This is why the device's ring light turns on when you say the wake word — it is telling you it has started recording. It is possible for the device to mishear something as a wake word and accidentally record snippets of conversation.",
    hint: "Think about what the device needs to do before it can understand your command.",
  },
  {
    question: "How does an AI thermostat like Nest learn when to heat your home?",
    options: [
      "You programme it once with your complete weekly schedule and it follows that schedule exactly, never deviating",
      "It monitors when you manually adjust the temperature and over one to two weeks learns your patterns, then creates a schedule automatically — adjusting further based on outside temperature and whether anyone is home",
      "It connects to your work calendar and your family members' calendars to predict when the house will be occupied",
      "It uses a built-in microphone to detect sounds of activity in the house and turns heating up when it hears movement",
    ],
    correctIndex: 1,
    explanation:
      "In the first week, you simply use your heating normally — turning it up when you are cold, down when you leave. Nest watches and records every adjustment. After about a week it has built a model of your routine and starts heating the house proactively — warming up before you usually wake, cooling down just before you leave for work. It also uses motion sensors to detect when the house is empty and goes into an energy-saving mode. Independent studies typically show energy savings of 10-15%.",
    hint: "Think about how it could learn without you needing to programme it.",
  },
  {
    question: "What does AI add to a robot vacuum cleaner like the Roomba?",
    options: [
      "It makes the vacuum louder and more powerful, since AI processing requires more electricity which generates extra suction as a side effect",
      "It enables the vacuum to create a map of your home, remember where furniture and obstacles are, plan efficient cleaning routes, and on some models identify and avoid hazards like pet mess",
      "It connects the vacuum to your smartphone so you can watch a live camera feed of your floors from anywhere in the world",
      "It allows the vacuum to clean in complete darkness using infrared sensors, so you can run it overnight without disturbing anyone",
    ],
    correctIndex: 1,
    explanation:
      "Early robot vacuums used random bouncing patterns. AI changed this completely. Modern Roombas use SLAM (Simultaneous Localisation and Mapping) technology — the same navigation approach used in self-driving cars. They build a detailed map of your home on their first clean and remember it. They plan systematic routes to cover every area efficiently. Higher-end models can identify different rooms and let you schedule cleaning room by room. Some models (like Roomba j7+) have cameras and AI to identify pet waste and avoid it.",
    hint: "Think about the difference between randomly bouncing around and navigating intelligently.",
  },
  {
    question: "How do AI security cameras reduce unnecessary alerts?",
    options: [
      "They only record when motion is detected, reducing storage, but still send an alert for every movement whether it is a person, a leaf, or a shadow",
      "They use computer vision AI to distinguish between a person, a vehicle, an animal, and other movement like swaying trees or changes in light — sending alerts only for the categories you have configured",
      "They require you to watch a live feed yourself and press a button to confirm whether an alert should be escalated to the police",
      "They use time-based restrictions so they only alert you during the hours you set — typically while you are asleep or away",
    ],
    correctIndex: 1,
    explanation:
      "The biggest frustration with early motion-triggered cameras was alert fatigue — constant notifications for cars driving past, foxes in the garden, or a tree blowing in the wind. AI object detection solved this. A camera like Ring, Arlo, or Nest Cam uses computer vision to classify every movement. It can tell the difference between a person walking up your path, a car parking outside, a cat in the garden, or a spider walking across the lens. You can configure which categories trigger alerts.",
    hint: "Think about what made early security cameras annoying and how AI solves that.",
  },
  {
    question: "How do AI energy management systems reduce household electricity bills?",
    options: [
      "They automatically switch your household to a different energy supplier whenever a cheaper tariff becomes available, without you needing to do anything",
      "They identify which appliances use the most electricity, shift high-consumption tasks like dishwasher cycles and EV charging to cheaper off-peak times, and can reduce usage when the grid is under strain",
      "They turn off all non-essential appliances remotely when you leave the house by detecting that your phone has moved outside a set geographic radius",
      "They negotiate lower unit rates directly with your energy supplier using AI chatbots that call on your behalf each quarter",
    ],
    correctIndex: 1,
    explanation:
      "Smart energy management systems work by shifting flexible electricity use to cheaper times. Most people pay the same rate for electricity regardless of when they use it, but some tariffs charge far less overnight when demand is low and renewable energy is plentiful. An AI system connected to your smart meter, EV charger, smart appliances, and solar panels can automatically schedule your dishwasher to run at 2am and charge your electric car overnight when electricity is cheapest. National Grid also pays households to reduce usage at times of high demand — AI systems can respond to these signals automatically.",
    hint: "Think about when electricity is cheaper and which of your appliances can work at unusual times.",
  },
]

export function AIAndTheHome() {
  useMarkVisited('ai-and-the-home')

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3E0;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and the home
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Smart speakers, AI thermostats, robot vacuums, security cameras, and energy management
            — how AI has moved into every room of your house.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-the-home" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The smart home — hype and reality</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            &quot;Smart home&quot; has been a marketing buzzword for a decade, but the technology has genuinely
            matured. Here is what AI actually adds to everyday home life.
          </p>
          <div className="space-y-2">
            {[
              "Over 10 million smart speakers are now in UK homes — Amazon Echo is the most popular, followed by Google Nest and Apple HomePod",
              "AI thermostats are available from most UK energy suppliers and can pay for themselves in energy savings within one to two years",
              "Robot vacuum sales increased by 40% during the pandemic as people noticed their floors more — AI mapping has made them genuinely useful rather than a novelty",
              "Smart doorbells and security cameras are now in roughly one in four UK homes",
              "The biggest barrier to smart home adoption is not cost but complexity — AI is gradually making setup and management much simpler",
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-amber-600 dark:text-amber-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Smart speakers — AI in your kitchen</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Smart speakers are probably the most visible AI in most UK homes. Here is what they can
            do — and what to think about before getting one.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: "&#x1F4E2;",
                label: "What they do well",
                text: "Setting timers while your hands are covered in flour, adding items to your shopping list as you run out of them, playing music, answering quick questions, controlling other smart devices by voice, and making phone calls without picking up your phone.",
                color: "blue",
              },
              {
                icon: "&#x26A0;&#xFE0F;",
                label: "Privacy considerations",
                text: "Smart speakers are always listening for their wake word. Accidental activations do happen. Amazon, Google, and Apple have all used human contractors to review voice recordings to improve their AI — though you can opt out of this in the privacy settings. Check and delete your voice history regularly in the app.",
                color: "blue",
              },
              {
                icon: "&#x1F4A1;",
                label: "Practical tip",
                text: "Most smart speakers have a physical mute button that disconnects the microphone entirely. Use it when having sensitive conversations. Also check what permissions you have given any third-party skills or actions you have added — some have access to your account information.",
                color: "blue",
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
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI thermostats — heating that thinks</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Heating accounts for around 55% of the average UK energy bill. AI thermostats are one
            of the most practical ways to reduce this.
          </p>
          <div className="space-y-2">
            {[
              "Nest (Google), Hive (British Gas), and Tado are the three most popular AI thermostat brands in the UK",
              "All three learn your routine in the first week or two, then heat proactively — your home is warm when you need it, not when you get around to turning the heating on",
              "Geofencing (using your phone's location) lets the thermostat know when you are heading home and start heating in time for your arrival",
              "Multi-zone systems can heat individual rooms differently — no more heating the whole house to warm one room",
              "Most AI thermostats provide a monthly energy report showing you exactly how much gas or electricity you used",
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Robot vacuums — AI on the floor</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Robot vacuums have come a long way from the random-bouncing devices of ten years ago.
            AI navigation has made them genuinely effective.
          </p>
          <div className="bg-green-50 dark:bg-green-950 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-green-800 dark:text-green-200 text-sm">How AI navigation works</p>
            <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">
              A modern robot vacuum uses LIDAR (laser distance sensing) or camera-based SLAM to build a
              precise floor plan of your home on its first clean. It remembers where walls, furniture, and
              hazards are, and on subsequent cleans follows an efficient parallel-row pattern. You can view
              the map in the app, name rooms, set no-go zones, and schedule different rooms on different days.
            </p>
          </div>
          <div className="space-y-2">
            {[
              "Roomba i-series and j-series can empty their own dustbin into a bag in the base station — you might only need to empty it every 30-60 days",
              "Combination robot vacuum and mop models (like Roborock and Dreame) can vacuum and mop in a single pass",
              "AI pet-waste avoidance (on models like Roomba j7+) uses cameras to identify and navigate around hazards on the floor",
              "Multi-floor mapping lets the robot remember the layout of every floor of your house",
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">What to consider before you buy</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Smart home devices are not all created equal. Here are the key questions to ask.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-slate-50 dark:bg-slate-800 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F510;</span>
              <div>
                <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-0.5">Privacy and data</p>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">Where is your data stored? Can the company sell it or share it with third parties? Does the device work if the company goes bust or discontinues the product? Choose established brands with clear privacy policies.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-slate-50 dark:bg-slate-800 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F517;</span>
              <div>
                <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-0.5">Ecosystem lock-in</p>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">Amazon, Google, and Apple smart home ecosystems do not always work seamlessly together. The Matter smart home standard (launched in 2022) is intended to make devices from different brands work together, but adoption is still incomplete. Think about whether you want to be tied to one company&apos;s ecosystem.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-slate-50 dark:bg-slate-800 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4A1;</span>
              <div>
                <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-0.5">What genuinely adds value</p>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">Smart thermostats and robot vacuums have clear, measurable value (energy savings and time saved respectively). Smart speakers are genuinely useful for voice control and quick tasks. Smart lightbulbs that require an app to turn on are often more frustrating than helpful. Be selective — not every &quot;smart&quot; product earns its premium.</p>
              </div>
            </div>
          </div>
        </div>

        <Quiz questions={quizQuestions} lessonId="ai-and-the-home" />

        <LessonNote lessonId="ai-and-the-home" />
        <ReviewLaterButton lessonId="ai-and-the-home" />
        <LessonRating lessonId="ai-and-the-home" />
        <LessonFeedback lessonId="ai-and-the-home" />
        <RelatedLessons currentId="ai-and-the-home" />
        <NextLesson currentId="ai-and-the-home" />
      </div>
    </div>
  )
}
