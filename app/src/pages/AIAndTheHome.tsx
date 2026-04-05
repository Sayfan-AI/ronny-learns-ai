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
  'Smart thermostats like Hive (by British Gas) and Nest (by Google) learn your heating preferences, detect when you are home, and automatically adjust temperature — UK households can save up to 30% on heating bills.',
  'AI security cameras and doorbells like Ring and Google Nest use computer vision to distinguish between a person, a car, and an animal — only alerting you to what matters and recording faces with detail.',
  'Voice assistants (Alexa, Siri, Google Assistant) are always listening for their wake word and process your voice through cloud servers — not entirely on the device — raising real questions about what is stored.',
  'AI-powered home energy management can automatically run high-energy appliances like washing machines and dishwashers during off-peak hours when electricity is cheapest and greenest.',
  'You have GDPR rights over data collected in your home by smart devices — including the right to access it, correct errors, and request deletion.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does a smart thermostat like Hive or Nest use AI to save energy?',
    options: [
      'It connects to a smart grid and automatically turns heating off whenever the National Grid has too much electricity demand, saving energy nationally',
      'It learns your daily routine and heating preferences, detects when you are home using sensors, and adjusts temperature automatically to heat your home only when needed',
      'It remotely controls every radiator valve in the home individually and monitors room-by-room temperature to maintain perfect conditions in every room simultaneously',
      'It connects to your calendar and automatically heats the home when you have social events listed, anticipating guests before you arrive home',
    ],
    correctIndex: 1,
    explanation:
      'Smart thermostats like Hive (made by British Gas) and Nest (made by Google) use several types of AI. Occupancy detection — using motion sensors or your phone\'s GPS location — tells the thermostat when you are home, away, or on your way back. Learning algorithms observe your manual adjustments over the first few weeks and begin to anticipate them: if you always turn the heating up at 7am, it starts doing this automatically. Some models also connect to weather forecasts and pre-heat the home before cold snaps. The net result is that you heat your home less when it is not occupied and heat it exactly as much as you want when it is. Studies suggest UK households can save up to 30% on heating bills — significant given how expensive gas has become.',
    hint: 'Think about when your home is currently heated when no one is in it.',
  },
  {
    question: 'What can AI security cameras and doorbells do that older cameras could not?',
    options: [
      'They can call the police automatically when they detect an intruder, bypassing the homeowner and eliminating the delay before emergency services are dispatched',
      'They use computer vision to distinguish between people, vehicles, animals, and other movement — reducing false alerts and providing more useful notifications and recordings',
      'They encrypt recordings so strongly that neither the manufacturer, police, nor hackers can access the footage without a physical key held by the homeowner',
      'They connect to neighbourhood watch networks and automatically share footage of suspicious activity with surrounding cameras without requiring the homeowner to share anything manually',
    ],
    correctIndex: 1,
    explanation:
      'Older motion-activated cameras would alert you whenever a leaf blew past or a cat walked through the garden. AI-powered cameras like Ring, Google Nest Cam, and Arlo Pro use computer vision models trained to distinguish between different types of moving objects. A person triggers a person alert; a car triggers a vehicle alert; the neighbourhood fox triggers an animal notification rather than a security alert. Some cameras can now recognise familiar faces and tell you "Gigi has arrived" rather than "person at door". They can also detect packages being left or taken, and some can read number plates. The trade-off is that all this image analysis requires either significant onboard processing power or sending footage to the cloud — where it is stored on company servers.',
    hint: 'Think about the difference between detecting movement and understanding what caused the movement.',
  },
  {
    question: 'What happens to your voice when you speak to Alexa, Siri, or Google Assistant?',
    options: [
      'Your voice is processed entirely on the device — nothing is sent to the internet — which is why these assistants work without a Wi-Fi connection',
      'Your device listens for a wake word locally, and when it hears it, sends the audio clip to cloud servers for processing — where it is analysed and often stored',
      'Your voice is converted to text immediately on the device and only the text is sent to the internet — the actual audio recording is never transmitted',
      'Your voice triggers a direct connection between your device and the assistant\'s servers, but the audio is automatically deleted from both ends within one second of processing',
    ],
    correctIndex: 1,
    explanation:
      'All major voice assistants use a two-stage process. The device itself runs a small, efficient model that listens continuously for the wake word (Hey Alexa, Hey Siri, OK Google). This part works locally and uses relatively little power. When the wake word is detected, the subsequent audio clip is compressed and sent to the company\'s cloud servers where much larger, more powerful AI models transcribe your speech and determine your intent. The response is generated in the cloud and sent back. This means your voice clips are transmitted to and stored on Amazon\'s, Apple\'s, or Google\'s servers. Both Amazon and Google have admitted that human reviewers sometimes listen to samples of voice recordings to improve accuracy. You can review and delete your voice history in the relevant app settings.',
    hint: 'Think about why these assistants need an internet connection to work — what does that tell you about where the processing happens?',
  },
  {
    question: 'How does AI help manage home energy costs?',
    options: [
      'AI negotiates energy tariffs with providers automatically, switching you to the cheapest available tariff each morning based on wholesale energy prices',
      'AI can schedule high-energy appliances like washing machines and dishwashers to run during off-peak hours when electricity is cheapest — and can connect home batteries to store cheap energy for later use',
      'AI monitors your energy consumption and automatically contacts your energy provider to report unusually high usage, which triggers a visit from an engineer to identify faults',
      'AI generates a personalised energy report each month and submits it to Ofgem on your behalf, which adjusts your energy bill to reflect any efficiency improvements you have made',
    ],
    correctIndex: 1,
    explanation:
      'The UK electricity grid is moving towards variable pricing — at times when lots of renewable energy is being generated (windy nights, sunny middays), electricity is cheaper and greener. Smart appliances and home energy management systems can take advantage of this. A smart washing machine connected to an energy management system like Hive, Nest, or an Octopus Energy smart tariff can automatically delay its cycle to start at 2am when electricity costs a fraction of peak-time rates. Home batteries (like Tesla Powerwall, which can be paired with solar panels) use AI to decide when to charge from the grid (when cheap and green) and when to power the home from stored energy (when expensive). Some UK energy suppliers including Octopus offer "agile" tariffs where AI fully automates this optimisation.',
    hint: 'Think about which appliances use the most electricity and when the cheapest time to run them might be.',
  },
  {
    question: 'What are your rights regarding data collected by smart home devices?',
    options: [
      'Smart home devices are classed as entertainment products rather than data processors, so normal data protection law does not apply to them',
      'Under UK GDPR, you have the right to access data collected by smart devices, correct errors, and request deletion — and companies must tell you what they collect and how they use it',
      'Your rights only apply to data processed by UK-based companies — foreign companies like Amazon and Google are not subject to UK data protection law',
      'Smart home devices sold in the UK must process all data on the device itself with no cloud storage, making data access rights irrelevant in practice',
    ],
    correctIndex: 1,
    explanation:
      'Under the UK General Data Protection Regulation (UK GDPR), any company processing personal data about UK residents — including American companies like Amazon, Google, and Apple — must comply with UK data protection law. Smart home data is personal data. Your rights include: the right to access the data collected about you (make a Subject Access Request), the right to correct inaccurate data, the right to request deletion (the "right to be forgotten"), and the right to be told clearly what data is being collected and how it is used. The Information Commissioner\'s Office (ICO) published a specific code of practice for smart devices in 2023, setting minimum standards for transparency, security, and data minimisation. If you believe a smart device company is mishandling your data, you can complain to the ICO.',
    hint: 'Think about whether a UK data protection law would apply to a US company whose devices are sold and used in the UK.',
  },
]

export function AIAndTheHome() {
  useMarkVisited('ai-and-the-home')

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3E0;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and the home
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            From smart thermostats and AI security cameras to voice assistants and energy management — how AI is
            changing the home, and the important privacy questions this raises.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-the-home" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-teal-100 dark:border-teal-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Smart thermostats — heating AI you might already have</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Hive (by British Gas) and Nest (by Google) are the two most popular smart thermostats in the UK. They represent some of the most accessible AI most people will ever use.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-teal-50 dark:bg-teal-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F321;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-teal-800 dark:text-teal-200 text-sm mb-0.5">Hive (British Gas)</p>
                <p className="text-teal-700 dark:text-teal-300 text-sm leading-relaxed">Hive uses occupancy sensors and your smartphone's location to detect when you're home, away, or approaching. It learns your preferred temperatures and schedules and begins applying them automatically. The app lets you control the heating from anywhere — a genuinely useful feature if you return home early or go on holiday.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-teal-50 dark:bg-teal-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4A1;</span>
              <div>
                <p className="font-semibold text-teal-800 dark:text-teal-200 text-sm mb-0.5">Nest (Google)</p>
                <p className="text-teal-700 dark:text-teal-300 text-sm leading-relaxed">Nest's learning algorithm watches your manual adjustments for the first week or two and then begins automatically creating a schedule based on your actual behaviour. It also has a built-in sensor that detects motion — if no one moves past the thermostat for a few hours, it drops into an energy-saving mode automatically. Nest claims UK users save an average of £130 a year on energy bills.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI security cameras — more than motion detection</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Ring (owned by Amazon) and Google Nest cameras have transformed home security — but also raised new questions about surveillance.
          </p>
          <div className="space-y-2">
            {[
              'Ring doorbells can distinguish between a person approaching, a vehicle passing, and a package being delivered — sending different alerts for each',
              'Some Ring and Nest cameras can recognise familiar faces and send personalised notifications — but this requires enrolling faces in the app',
              'Footage from Ring cameras can be shared with police via Amazon\'s Neighbors app — a practice that has attracted significant scrutiny in the UK and USA',
              'The UK Information Commissioner\'s Office has produced guidance on using home CCTV — if cameras capture a neighbour\'s property, additional data protection obligations apply',
              'You can set Ring and Nest cameras to process footage locally rather than storing it in the cloud — though this limits features like remote viewing',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Voice assistants — always listening</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Amazon Echo, Google Home, and Apple HomePod are in millions of UK homes. Understanding how they actually work helps you make informed choices about using them.
          </p>
          <div className="bg-purple-50 dark:bg-purple-950 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm">How to manage your privacy</p>
            <div className="space-y-1">
              {[
                'In the Alexa app: Settings > Alexa Privacy > Review Voice History — you can delete recordings individually or all at once',
                'In Google Home app: Settings > More Settings > My Activity — shows all Google Assistant interactions with audio',
                'For Apple Siri: Settings > Siri and Search > Siri History — you can opt out of sharing recordings with Apple',
                'You can turn the microphone off physically on Amazon Echo and Google Home using the mute button — a hardware switch that cuts the microphone circuit',
                'Consider whether always-on microphones in the bedroom are something you are comfortable with',
              ].map((item) => (
                <div key={item} className="flex gap-2 items-start">
                  <span className="text-purple-600 dark:text-purple-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                  <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-the-home" />
        <LessonNote lessonId="ai-and-the-home" />

        <Quiz questions={quizQuestions} lessonId="ai-and-the-home" />

        <LessonRating lessonId="ai-and-the-home" />
        <LessonFeedback lessonId="ai-and-the-home" />

        <RelatedLessons currentId="ai-and-the-home" />

        <NextLesson currentId="ai-and-the-home" />
      </div>
    </div>
  )
}
