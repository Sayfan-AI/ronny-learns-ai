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

const LESSON_TITLE = 'AI and wildlife conservation'

const KEY_TAKEAWAYS = [
  'AI can process thousands of camera trap images automatically — identifying species, counting individuals, and detecting poachers — a task that would take teams of researchers months to do manually.',
  'Acoustic monitoring tools like Rainforest Connection listen to the sounds of rainforests and can detect the sound of chainsaws in real time, alerting rangers to illegal logging before a single tree has fallen.',
  'Satellite imagery analysed by AI can track deforestation at a scale and speed impossible for human analysts — Global Forest Watch uses AI to provide weekly deforestation alerts covering the entire planet.',
  'PAWS (Protection Assistant for Wildlife Security) uses AI to analyse poaching patterns, predict where poachers are likely to strike next, and help rangers plan their patrols more effectively.',
  'AI conservation raises ethical questions: whose definition of conservation counts, who controls the technology, and whether surveillance tools developed for wildlife could be turned on indigenous communities.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does AI help researchers process camera trap images?',
    options: [
      'It automatically cleans and maintains the cameras in remote locations, ensuring high-quality images are captured without human visits',
      'It identifies species in images, counts individual animals, and flags unusual activity — processing thousands of images that would otherwise require months of manual review',
      'It enhances low-quality nighttime images using AI upscaling so that researchers can see details that the camera itself could not capture',
      'It selects the best images from thousands captured and automatically submits them to scientific journals for publication',
    ],
    correctIndex: 1,
    explanation:
      'Camera traps — motion-activated cameras placed in remote habitats — capture millions of images every year, far more than research teams could ever review manually. AI tools trained on labelled wildlife images (like Microsoft\'s AI for Earth programme and Wildlife Insights from Google) can identify the species in each image, estimate the number of animals, note the time and location, and flag images that contain humans — potentially poachers. A study in the Snapshot Serengeti project found that an AI model matched trained human volunteers at identifying 48 species with 96.6% accuracy, while processing images 300 times faster.',
    hint: 'Think about the sheer volume of images camera traps produce and what researchers do with them.',
  },
  {
    question: 'How does Rainforest Connection use AI to protect rainforests?',
    options: [
      'It analyses satellite images of rainforests weekly and automatically reports areas of deforestation to national governments and international bodies',
      'It uses devices attached to trees to listen to forest sounds continuously, and AI detects the sounds of chainsaws or trucks in real time — triggering instant alerts to rangers',
      'It tracks animals fitted with GPS collars and uses AI to predict when they might be approaching areas of human activity, helping rangers position themselves to prevent conflict',
      'It analyses the social media posts of logging companies and environmental activists to predict where illegal activity is most likely to occur next',
    ],
    correctIndex: 1,
    explanation:
      'Rainforest Connection (now part of Earth Networks) developed a system that straps repurposed smartphones to the tops of rainforest trees. Each device uses solar power and connects to a mobile network. A machine learning model running on the device listens continuously for the sounds of chainsaws, logging trucks, and gunshots. When it detects these sounds, it sends an alert — via SMS or an app — to rangers on the ground within 25 seconds. This gives rangers a chance to intercept illegal activity before it progresses. The system has been deployed in rainforests in Ecuador, Brazil, Cameroon, and Sumatra.',
    hint: 'Think about listening rather than looking — what sounds would indicate illegal logging?',
  },
  {
    question: 'How does Global Forest Watch use AI to monitor deforestation?',
    options: [
      'It deploys fleets of drones that fly over forests monthly and photograph the canopy, with AI comparing images to detect changes in tree cover',
      'It analyses satellite imagery of the entire planet using AI to detect changes in forest cover and provides weekly deforestation alerts for any location on Earth',
      'It uses data from GPS trackers on logging vehicles to map their movements and automatically identify logging operations in protected areas',
      'It monitors the carbon content of the atmosphere above forests using weather satellites, and uses AI to detect areas where carbon is being released by felling trees',
    ],
    correctIndex: 1,
    explanation:
      'Global Forest Watch is run by the World Resources Institute and uses satellite imagery from sources including Landsat and Sentinel. AI analyses these images — which cover the entire Earth\'s surface — and detects changes in forest cover from week to week. The system generates alerts that pinpoint the location of recent forest loss, even in remote areas with no ground presence. This data is publicly available and has been used by journalists, NGOs, and governments to hold logging companies accountable and to support legal action against illegal deforestation. The AI processes a volume of satellite data that would be completely impossible for human analysts to handle.',
    hint: 'Think about monitoring changes across the entire planet\'s forests simultaneously.',
  },
  {
    question: 'What does the PAWS system do to help prevent poaching?',
    options: [
      'It uses drone surveillance to follow suspected poachers and transmit their location to law enforcement in real time',
      'It analyses historical poaching data and patrol records to predict where poachers are most likely to strike, helping rangers plan more effective patrol routes',
      'It uses facial recognition cameras at park entrances to identify known poachers and deny them entry before they can reach protected animals',
      'It places electronic tags on all animals in a reserve and triggers an automatic alert if any animal\'s tag stops moving — indicating it may have been killed',
    ],
    correctIndex: 1,
    explanation:
      'PAWS (Protection Assistant for Wildlife Security) was developed by researchers at Harvard and the University of Southern California as a game-theory-based AI. It analyses historical poaching incidents, the locations of snares and traps found by rangers, patrol coverage data, and geographical features to predict where poachers are most likely to target next. It then generates patrol routes that maximise coverage of the highest-risk areas. Because poachers adapt their behaviour over time, PAWS also models how they might respond to different patrol patterns. It has been deployed in protected areas in Uganda and Malaysia.',
    hint: 'Think about predicting future events based on patterns in historical data.',
  },
  {
    question: 'What ethical concern is raised about AI conservation tools?',
    options: [
      'AI conservation tools are often developed by companies seeking profit, meaning the technology is too expensive for the developing countries where most biodiversity exists',
      'Surveillance tools and AI monitoring systems developed for wildlife conservation could also be used to track and monitor indigenous and local communities living in or near protected areas',
      'AI identifies so many species in camera trap images that it overwhelms researchers with data they cannot analyse, making the conservation problem worse rather than better',
      'AI systems trained on Western conservation priorities may not recognise the same species as valuable that local communities have traditionally protected for generations',
    ],
    correctIndex: 1,
    explanation:
      'This is a serious and well-documented concern raised by conservation ethicists, indigenous rights organisations, and NGOs like the Forest Peoples Programme. Many conservation areas overlap with the traditional territories of indigenous communities. Camera networks, acoustic sensors, and satellite monitoring can all be repurposed to monitor people — tracking their movements, recording their activities, and potentially providing data to governments or companies with interests in removing communities from their land. Several conservation organisations have been criticised for deploying surveillance tools without the consent of local communities. The principle of free, prior, and informed consent (FPIC) is increasingly seen as essential to ethical AI-assisted conservation.',
    hint: 'Think about what else surveillance infrastructure might be used to monitor besides wildlife.',
  },
]

export function AIAndWildlifeConservation() {
  useMarkVisited('ai-and-wildlife-conservation')

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F98F;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and wildlife conservation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI is helping scientists identify species from camera traps, detect illegal logging in real time,
            track deforestation from space, and predict where poachers will strike — and the ethical questions this raises.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-wildlife-conservation" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The scale of the problem</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Wildlife conservation has always been a problem of scale. There are more animals to monitor, more forests to protect, and more threats to track than any human team could handle. AI is beginning to change that balance.
          </p>
          <div className="space-y-2">
            {[
              'Around 1 million plant and animal species are currently threatened with extinction according to the UN — the highest number in human history',
              'Illegal wildlife trade is estimated to be worth up to £15 billion annually, making it one of the world\'s most profitable criminal activities',
              'Camera trap networks in large nature reserves can generate millions of images each year — far more than researchers can manually review',
              'Over 4.7 million hectares of tropical forest are lost every year — an area larger than Switzerland — much of it illegally',
              'AI tools trained on wildlife data can process and analyse this information at a speed and scale that was simply impossible a decade ago',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Camera traps and AI identification</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Camera traps have been used in conservation for decades, but the flood of images they produce was always a bottleneck. AI has removed that bottleneck.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F7;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Wildlife Insights (Google)</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Google's Wildlife Insights platform allows conservationists to upload camera trap images, which AI then processes automatically — identifying species, estimating population counts, and flagging images that contain humans. What might take a team of volunteers months to sort through manually can be processed in hours.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F30A;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Individual animal identification</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Some AI systems can identify individual animals within a species — recognising a specific tiger by its stripe pattern, a specific whale shark by its spot pattern, or a specific dolphin by the shape of its dorsal fin. This allows researchers to track individual animals across years without physical tags, building life history data that was previously impossible to collect at scale.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Anti-poaching AI — predicting the next crime</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Wildlife rangers are massively outnumbered. A national park the size of a county might be patrolled by just a handful of rangers. AI is helping them deploy their limited resources more effectively.
          </p>
          <div className="bg-red-50 dark:bg-red-950 rounded-xl p-4">
            <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-1">How PAWS works</p>
            <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
              PAWS (Protection Assistant for Wildlife Security) treats anti-poaching as a game-theory problem — rangers and poachers are both trying to outwit each other. It analyses historical poaching data, patrol records, and terrain to predict the highest-risk zones, then generates patrol routes that maximise the chance of catching poachers while being unpredictable enough that poachers cannot simply wait for rangers to pass.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-yellow-100 dark:border-yellow-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The ethics of AI conservation</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The same tools that protect wildlife can threaten the rights of local communities. This tension is one of the most important debates in modern conservation.
          </p>
          <div className="space-y-2">
            {[
              'Camera networks and sensors in protected areas can inadvertently — or deliberately — monitor the movements of indigenous communities',
              'Conservation decisions made with AI tools developed in wealthy countries may not reflect the priorities and knowledge of local communities who have lived alongside wildlife for generations',
              'The principle of free, prior, and informed consent (FPIC) requires that indigenous communities agree to conservation activities on their land — this should include AI surveillance systems',
              'Some conservation organisations have faced legal challenges from communities who felt monitored without consent by technology deployed in the name of protecting animals',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-yellow-600 dark:text-yellow-400 font-bold mt-0.5 flex-shrink-0">&#x26A0;&#xFE0F;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-wildlife-conservation" />
        <LessonNote lessonId="ai-and-wildlife-conservation" />

        <Quiz questions={quizQuestions} lessonId="ai-and-wildlife-conservation" />

        <LessonRating lessonId="ai-and-wildlife-conservation" />
        <LessonFeedback lessonId="ai-and-wildlife-conservation" />

        <RelatedLessons currentId="ai-and-wildlife-conservation" />

        <NextLesson currentId="ai-and-wildlife-conservation" />
      </div>
    </div>
  )
}
