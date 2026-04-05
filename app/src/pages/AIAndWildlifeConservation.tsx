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

const LESSON_TITLE = 'AI and wildlife conservation — camera traps, acoustic monitoring, anti-poaching AI, and deforestation tracking'

const KEY_TAKEAWAYS = [
  'AI camera trap systems like Wildlife Insights can automatically identify species from millions of images — a task that previously required thousands of hours of expert human time.',
  'Acoustic AI monitors ecosystems continuously by analysing sound. BirdNET can identify bird species from audio; other systems detect chainsaws in forests to alert rangers to illegal logging in real time.',
  'Anti-poaching AI combines camera networks, drone footage, and movement prediction to alert rangers before poachers reach animals — systems like TrailGuard AI have caught poachers in the act.',
  'Satellite imagery analysed by AI tracks deforestation at planetary scale, detecting forest loss within days rather than months and identifying the areas of highest biodiversity risk.',
  'AI is a tool, not a solution. Conservation ultimately requires political will, funding, local community engagement, and international cooperation — AI makes some parts of this easier but cannot substitute for any of them.',
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'What problem does AI solve with camera trap data in wildlife conservation?',
    options: [
      'Camera traps used to be too expensive; AI has made them free',
      'Researchers used to have to manually review millions of images to identify species — AI can now classify images automatically, doing in hours what took years',
      'AI physically operates the camera traps in remote locations',
      'Camera traps previously only worked at night; AI enables daytime photography',
    ],
    correctIndex: 1,
    explanation:
      'A single camera trap study can produce millions of images over months or years. Manually reviewing each image for species identification was an enormous bottleneck. AI image classification tools like Wildlife Insights can process these images automatically, freeing researchers to focus on analysis and conservation action rather than data entry.',
  },
  {
    question: 'How does acoustic AI like BirdNET contribute to conservation?',
    options: [
      'It plays birdsong recordings to attract endangered species for breeding',
      'It identifies species from recorded audio, allowing continuous ecosystem monitoring without researchers being physically present',
      'It uses ultrasound to locate animals underground',
      'It translates animal calls into human language so researchers can understand them',
    ],
    correctIndex: 1,
    explanation:
      'Acoustic monitoring uses microphones in forests, wetlands, or marine environments to continuously record sound. AI analyses those recordings, identifying which species are present and at what times — building a picture of ecosystem health over time. BirdNET, developed at Cornell University, can identify hundreds of bird species from audio clips.',
  },
  {
    question: 'What does an anti-poaching AI system like TrailGuard AI do?',
    options: [
      'It fires warning shots at intruders detected in protected areas',
      'It uses cameras and motion detection to alert rangers when humans enter protected areas at unusual times, allowing intervention before animals are harmed',
      'It follows poachers by drone and records evidence for court proceedings',
      'It replaces human rangers entirely in large national parks',
    ],
    correctIndex: 1,
    explanation:
      'TrailGuard AI places small, camouflaged cameras at known poaching entry points. When the AI detects a human intruder, it immediately alerts rangers via a mobile notification. Crucially, it acts as an early warning system — rangers can respond while poachers are still some distance from vulnerable animals, rather than discovering evidence after the fact.',
  },
  {
    question: 'How does AI help track deforestation from space?',
    options: [
      'AI satellites physically prevent logging by deploying obstacles',
      'AI analyses satellite imagery to detect changes in forest cover, identifying areas of new deforestation within days of it occurring',
      'AI predicts which forests will be deforested and removes them from maps preemptively',
      'AI calculates the financial value of forests to convince governments to protect them',
    ],
    correctIndex: 1,
    explanation:
      'Platforms like Global Forest Watch use AI to analyse satellite images and detect changes in forest cover. Because satellites pass over every point on Earth regularly, AI can identify new deforestation events quickly — sometimes within days. This allows conservation organisations and governments to respond to illegal logging far faster than was previously possible.',
  },
  {
    question: 'What is the most important limit of AI in conservation?',
    options: [
      'AI cannot process data from developing countries',
      'AI can only identify common species and misses rare ones',
      'AI is a tool for gathering and analysing information — it cannot replace the political will, funding, community engagement, and international cooperation that effective conservation requires',
      'AI-generated conservation data is not accepted by international scientific journals',
    ],
    correctIndex: 2,
    explanation:
      'AI can dramatically improve researchers\' ability to monitor ecosystems and detect threats. But conservation ultimately depends on governments protecting habitats, communities having alternatives to poaching or logging, international agreements on biodiversity, and adequate funding for rangers and protected area management. AI makes the monitoring easier; it cannot create the political and social conditions for conservation to succeed.',
  },
]

export function AIAndWildlifeConservation() {
  useMarkVisited('ai-and-wildlife-conservation')

  return (
    <main className="max-w-2xl mx-auto px-4 py-8 space-y-8">
      <div className="space-y-3">
        <LessonSeriesBadge lessonId="ai-and-wildlife-conservation" />
        <CompletedBadge lessonId="ai-and-wildlife-conservation" />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
          AI and wildlife conservation
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Conservationists are working to protect species and ecosystems across millions of square kilometres with limited resources. AI is giving them new eyes and ears — from camera traps in African game reserves to microphones in the Amazon rainforest. This lesson explains how, and what the limits are.
        </p>
        <div className="flex flex-wrap gap-2">
          <ShareButton lessonTitle={LESSON_TITLE} />
          <ReviewLaterButton lessonId="ai-and-wildlife-conservation" />
        </div>
      </div>

      <KeyTakeaways points={KEY_TAKEAWAYS} />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Camera traps — millions of images, processed in hours</h2>
        <p className="text-gray-700 dark:text-gray-300">
          A camera trap is a motion-triggered camera placed in a wild location — attached to a tree, hidden in a bush, or buried under leaves. When an animal passes, it takes a photograph. Over a year, a network of camera traps in a national park might produce 5 million images.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          For decades, the bottleneck was human review. Researchers would have to sit at a computer and click through image after image: lion, lion, warthog, wildebeest, lion, empty. It was painstaking, expensive, and slow. A large study could take years to analyse.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Google's Wildlife Insights platform uses AI image classification to automatically identify which species appear in each image. Trained on millions of labelled wildlife photographs, it can distinguish between hundreds of species with high accuracy. What took teams of volunteers years now takes hours — and the data can be shared globally for population monitoring.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          In the UK, similar systems are tracking hedgehog populations, otter recovery, and pine marten reintroductions — species that are nocturnal, shy, and extremely hard to count by conventional means.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Acoustic AI — listening to the forest</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Sound is one of the richest sources of ecological information. A healthy tropical forest sounds completely different from a degraded one — the dawn chorus changes when bird species disappear, the acoustic signatures of insects shift with temperature and season, and cetaceans communicate in patterns that reveal population health.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          BirdNET, developed at Cornell University, can identify over a thousand bird species from short audio clips. Field researchers place small audio recorders in forests, wetlands, and gardens, collect the recordings, and run them through BirdNET to build species inventories that would take months to compile manually.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          A more urgent application is real-time chainsaw detection. Systems like Rainforest Connection place solar-powered microphones in threatened forests. When the AI detects the acoustic signature of a chainsaw or heavy machinery, it immediately sends an alert to rangers and forest authorities — sometimes within 30 seconds. This gives enforcement teams a chance to intercept illegal logging while it is happening rather than discovering the cleared area weeks later.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Anti-poaching AI — protecting animals before harm is done</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Poaching is a sophisticated, well-funded criminal activity. Poachers often know national park patrol routes, know which areas are poorly monitored, and operate at night. Traditional ranger patrols are reactive — by the time evidence of poaching is found, the animal is gone and the poachers have long since left.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          TrailGuard AI, developed by RESOLVE, takes a different approach. Small, camouflaged cameras equipped with AI are placed at known entry points to protected areas — game trails, fence crossing points, river crossings. When the AI detects a human intruder at an unusual time, it sends an instant alert to a ranger's phone, including an image.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Deployed in reserves in Kenya and other African countries, the system has captured images of armed poachers and enabled ranger teams to intercept them before they reached rhinoceros or elephant populations. The AI acts as a tripwire — converting a vast, impractical perimeter into a monitored network of key access points.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Satellite AI — watching deforestation from space</h2>
        <p className="text-gray-700 dark:text-gray-300">
          The Amazon rainforest covers more than five million square kilometres. No human team could monitor it continuously. But satellites can.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Global Forest Watch, operated by the World Resources Institute, uses AI to analyse satellite imagery and detect changes in forest cover. The system compares images taken days apart and flags areas where vegetation has changed — identifying new clearings, logging roads, or fires. Deforestation that previously might not have been noticed for months can now be flagged within days.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          The data is publicly available and has been used by journalists, governments, and conservation organisations to document illegal deforestation, hold companies and governments to account, and target enforcement resources at the highest-risk areas.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What AI cannot do for conservation</h2>
        <p className="text-gray-700 dark:text-gray-300">
          It would be easy to read all of this and conclude that the conservation crisis is a data problem, and that AI is solving it. It is not that simple.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Deforestation and poaching are driven by poverty, land rights disputes, corruption, global demand for commodities like beef, soy, and palm oil, and the failure of international institutions to put enforceable teeth into biodiversity commitments. AI can tell you exactly where a forest was cleared this week and who might have done it. It cannot stop the economic incentives that drove the clearing.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Effective conservation requires local communities to have a stake in protecting wildlife — which means economic alternatives, land rights, and cultural respect. It requires governments with the will and resources to enforce protected area regulations. It requires international agreements on trade in endangered species and forest products. AI is a powerful tool in the hands of people doing this work. It is not a substitute for the work itself.
        </p>
      </section>

      <LessonNote lessonId="ai-and-wildlife-conservation" />

      <Quiz questions={QUIZ_QUESTIONS} lessonId="ai-and-wildlife-conservation" />

      <LessonRating lessonId="ai-and-wildlife-conservation" />
      <LessonFeedback lessonId="ai-and-wildlife-conservation" />
      <RelatedLessons currentId="ai-and-wildlife-conservation" />
      <NextLesson currentId="ai-and-wildlife-conservation" />
    </main>
  )
}
