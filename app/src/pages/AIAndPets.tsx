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
import { DifficultyBadge } from '../components/DifficultyBadge'

const LESSON_TITLE = 'AI and pets'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What do AI-powered pet health wearables like Whistle or the Fi collar primarily track?',
    options: [
      'Your pet\'s GPS location and activity levels — steps, sleep, rest time, and changes in behaviour that might suggest illness',
      'Your pet\'s food preferences by analysing what it eats from a camera',
      'Your pet\'s mood by measuring tail-wagging speed',
      'The nutritional content of your pet\'s food using a built-in scanner',
    ],
    correctIndex: 0,
    explanation:
      "AI-powered pet wearables use accelerometers and GPS to track your pet's physical activity throughout the day — how much they walk, run, sleep, and rest. The AI learns your pet's normal baseline and then flags unusual changes: a dog that suddenly becomes much less active might be in pain or unwell. Some devices also track scratching (a sign of skin issues) and calories burned. They do not yet reliably measure mood or analyse food.",
    hint: 'Think about what a fitness tracker does for humans, adapted for pets.',
  },
  {
    question: 'What is the main limitation of AI pet symptom checkers?',
    options: [
      'They are only available for dogs, not cats or other animals',
      'They require the pet to sit still for a long time to get accurate readings',
      'They can suggest possibilities but cannot examine the animal, run tests, or make a diagnosis — and may give false reassurance for serious conditions',
      'They are only accurate for pets under two years old',
    ],
    correctIndex: 2,
    explanation:
      "AI symptom checkers — whether for humans or pets — are pattern-matching tools, not diagnosticians. They compare described symptoms to a database of conditions and offer possibilities. What they cannot do is physically examine the animal, palpate (feel) for pain or lumps, run blood tests, take X-rays, or use clinical judgement built from thousands of real cases. A vet's hands-on examination often reveals things that no symptom description can capture. The risk of false reassurance is real — an AI saying 'this sounds mild' might discourage someone from seeking urgent care.",
    hint: 'What can a real vet do that an app never can?',
  },
  {
    question: 'How are AI tools being used in veterinary diagnostics today?',
    options: [
      'AI is replacing vets in most routine appointments to reduce NHS waiting times',
      'AI tools can analyse X-rays, MRI scans, and skin lesion photos to help vets identify conditions like bone fractures, tumours, and skin cancer',
      'AI is used exclusively to train new vets in simulation environments',
      'AI tools can diagnose any condition from a photo taken on a smartphone without any vet involvement',
    ],
    correctIndex: 1,
    explanation:
      "AI is genuinely useful in veterinary imaging. Tools trained on thousands of labelled scans can highlight potential fractures, tumours, or abnormalities in X-rays and MRI images — helping vets spot things they might otherwise miss or speeding up the reading of large numbers of scans. Dermatology apps (like those used in human medicine) can also flag suspicious skin lesions from photos. However, these are decision-support tools — the vet still makes the final call. AI is not replacing vets; it is giving them better information.",
    hint: 'Think about what doctors use AI for in hospitals — similar technology applies to animals.',
  },
  {
    question: 'What is one genuine privacy concern with AI smart feeders and pet monitoring cameras?',
    options: [
      'Smart feeders can cause pets to become dependent on technology and forget how to eat normally',
      'The cameras and data are often stored on company servers — meaning your home interior, daily routine, and pet health data are being shared with a third party',
      'Smart feeders use so much electricity that they significantly increase household energy bills',
      'AI pet cameras are banned in flats and rented accommodation across the UK',
    ],
    correctIndex: 1,
    explanation:
      "Many smart pet devices — cameras, feeders, activity trackers — continuously send data to cloud servers operated by the manufacturer. This data includes video footage of your home interior, your daily schedule (when you leave and return), and health information about your pet. Like many smart home devices, the privacy policy may allow data to be used for product improvement, shared with partners, or stored indefinitely. It is worth reading the privacy policy and understanding where your data goes before purchasing.",
    hint: 'What is always flowing to the cloud from a connected device?',
  },
]

export function AIAndPets() {
  useMarkVisited('ai-and-pets')

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F43E;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and pets
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Health monitors, AI vets, smart feeders — and what AI can and
            cannot replace when it comes to caring for animals.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <DifficultyBadge level="Beginner" />
          </div>
          <CompletedBadge lessonId="ai-and-pets" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI-powered pet health wearables</h2>
          <p className="text-gray-600 leading-relaxed">
            Millions of people now wear fitness trackers that count their steps, monitor their heart
            rate, and track their sleep. The same idea has come to pets — and AI makes it more useful
            than a simple step counter.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Devices like <strong>Whistle</strong> (US) and the <strong>Fi collar</strong> attach to your
            dog's collar and track activity all day. The AI learns your dog's normal baseline — how
            much they typically walk, run, and rest each day — and then alerts you if that pattern
            changes significantly.
          </p>
          <div className="bg-amber-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-amber-800 text-sm">What these devices track</p>
            <ul className="text-amber-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>Steps, distance, and activity levels throughout the day</li>
              <li>Sleep quality — restless nights can indicate discomfort or pain</li>
              <li>Scratching frequency (excessive scratching may indicate skin problems or allergies)</li>
              <li>GPS location for dogs that roam or escape</li>
              <li>Long-term trends — spotting gradual decline in activity in older animals</li>
            </ul>
          </div>
          <p className="text-gray-600 leading-relaxed">
            The appeal is that pets cannot tell you they are unwell. A dog that is in pain may simply
            seem quieter or less playful — changes a busy owner might miss. An AI that has learned
            your pet's normal can spot those early signals.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Behaviour analysis apps</h2>
          <p className="text-gray-600 leading-relaxed">
            Beyond wearables, AI apps are now analysing video footage and sounds to detect changes in
            animal behaviour:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F3A5;',
                label: 'Pet cameras with AI analysis',
                text: 'Cameras like Furbo and Petcube watch your pet while you are out and use AI to detect barking, unusual movement, or signs of distress — sending alerts to your phone.',
              },
              {
                icon: '&#x1F50A;',
                label: 'Vocalisation analysis',
                text: "Research teams have trained AI on recordings of cat meows and dog barks to try to classify emotional states — pain, hunger, fear, contentment. Apps like MeowTalk attempt this for cats. Results are promising but still limited.",
              },
              {
                icon: '&#x1F4CA;',
                label: 'Gait analysis',
                text: 'Some specialist veterinary tools analyse video of how a dog walks to detect lameness or joint problems — useful for catching early arthritis before a dog is visibly limping.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-green-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-green-800 text-sm mb-0.5">{label}</p>
                  <p className="text-green-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI symptom checkers for pets</h2>
          <p className="text-gray-600 leading-relaxed">
            Apps like <strong>PetMD</strong> and features within some pet insurance apps let you
            describe your pet's symptoms and receive a list of possible explanations, along with advice
            about urgency — whether to call the vet today, go to an emergency clinic now, or monitor at
            home.
          </p>
          <p className="text-gray-600 leading-relaxed">
            These tools work the same way as human symptom checkers: they pattern-match your description
            against a database of conditions. They can be useful for triage — working out how urgent
            something is — but they have clear limitations:
          </p>
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-blue-800 text-sm">What AI symptom checkers cannot do</p>
            <ul className="text-blue-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>Physically examine the animal to feel for pain, lumps, or abnormalities</li>
              <li>Run blood tests, urine analysis, or X-rays</li>
              <li>Make a definitive diagnosis</li>
              <li>Apply the clinical judgement of a vet who has seen thousands of animals</li>
              <li>Account for the individual animal's history and previous conditions</li>
            </ul>
          </div>
          <p className="text-gray-600 leading-relaxed">
            The risk of false reassurance is real. An AI saying something "sounds mild" might discourage
            an owner from seeking urgent care. When in doubt, call your vet.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI in veterinary diagnostics</h2>
          <p className="text-gray-600 leading-relaxed">
            Inside vet practices and specialist clinics, AI is being used as a tool to help vets do
            their jobs better — not replace them:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1FA7B;',
                label: 'Reading X-rays and MRI scans',
                text: 'AI systems trained on thousands of labelled animal scans can highlight potential fractures, tumours, or organ abnormalities — helping vets spot things or speeding up reading large numbers of scans in busy practices.',
              },
              {
                icon: '&#x1F9EC;',
                label: 'Skin condition analysis',
                text: 'Apps that analyse photos of skin lesions are being trialled in veterinary dermatology, similar to tools used in human medicine to flag potentially cancerous moles.',
              },
              {
                icon: '&#x1F52C;',
                label: 'Pathology assistance',
                text: 'AI can assist in analysing tissue samples and blood smears — tasks that are time-consuming for human lab technicians and subject to fatigue-related errors.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-teal-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-teal-800 text-sm mb-0.5">{label}</p>
                  <p className="text-teal-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            These are decision-support tools — the vet still makes the final call. The aim is to give
            them better information, faster.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Smart feeders and connected pet devices</h2>
          <p className="text-gray-600 leading-relaxed">
            AI-enabled feeders like <strong>SureFeed</strong> and <strong>Petlibro</strong> use cameras
            and sensors to automate feeding — dispensing precise portions at set times, tracking how
            much each pet eats (useful in multi-pet households), and alerting you if eating habits
            change. Some models can even identify individual pets using microchip recognition.
          </p>
          <div className="bg-orange-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-orange-800 text-sm">A note on privacy</p>
            <p className="text-orange-700 text-sm leading-relaxed">
              Many connected pet devices — cameras, feeders, trackers — continuously send data to
              cloud servers. This includes video footage of your home interior, your daily schedule,
              and your pet's health data. Before buying, it is worth reading the privacy policy to
              understand where your data goes, how long it is stored, and whether it is shared with
              third parties.
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <p className="font-semibold text-amber-800 mb-2">Key takeaway</p>
          <p className="text-amber-700 text-sm leading-relaxed">
            AI can genuinely help pet owners spot early signs of illness, make feeding more precise,
            and give vets better diagnostic tools. But it cannot replace the hands, eyes, and
            clinical judgement of a real vet. The best use of AI in pet care is as an early warning
            system — something that tells you when it is worth calling the vet, not a replacement for
            doing so.
          </p>
        </div>

        <ReviewLaterButton lessonId="ai-and-pets" />
        <LessonNote lessonId="ai-and-pets" lessonTitle={LESSON_TITLE} />

        <Quiz questions={quizQuestions} lessonId="ai-and-pets" lessonTitle={LESSON_TITLE} />

        <LessonFeedback lessonId="ai-and-pets" />
        <LessonRating lessonId="ai-and-pets" />
        <RelatedLessons currentId="ai-and-pets" />
        <NextLesson currentId="ai-and-pets" />
      </div>
    </div>
  )
}
