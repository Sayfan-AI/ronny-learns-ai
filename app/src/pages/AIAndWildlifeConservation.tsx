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

const LESSON_TITLE = 'AI and wildlife conservation — camera traps, acoustic monitoring, and anti-poaching AI'

const KEY_TAKEAWAYS = [
  'Camera trap AI can automatically identify species from millions of photos, reducing analysis time from years to days — tools like Wildlife Insights and MegaDetector are used by conservation organisations worldwide.',
  'Acoustic monitoring AI can identify individual species from sound recordings, even detecting rare bird calls or the chain saws used by illegal loggers — the BTO (British Trust for Ornithology) uses AI to analyse bird survey data.',
  'Satellite imagery AI tracks deforestation in near real time, allowing conservationists and governments to identify illegal clearance faster than was previously possible.',
  'Anti-poaching AI — predicting where poachers will strike based on patrol data, weather, and historical incidents — has been deployed in parks in Africa and Asia with documented reductions in poaching activity.',
  'AI-powered population counting (using drone footage or aerial surveys) has made it feasible to count individual animals in large areas, transforming population monitoring for endangered species.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How do camera trap AI systems like Wildlife Insights help conservationists?',
    options: [
      'They automatically move cameras to follow animals of interest across large territories',
      'They automatically classify species from photos, reducing the time needed to sort millions of images from days or years of human review to hours',
      'They replace the need for field researchers entirely, allowing conservation work to be done entirely from an office',
      'They take photos only when a specific target species triggers the sensor, avoiding wasting storage on other animals',
    ],
    correctIndex: 1,
    explanation:
      'Camera traps take photos triggered by motion, generating millions of images that must be sorted to find shots of target species. Previously this required human reviewers. AI tools like Wildlife Insights (Google) and MegaDetector can identify whether an image contains an animal, blank frame, or human in seconds, and classify species. The Zooniverse platform uses a hybrid approach where AI and volunteer citizen scientists work together.',
  },
  {
    question: 'What is acoustic monitoring in wildlife conservation, and how does AI improve it?',
    options: [
      'A method of using sonar to detect underwater mammals — AI improves it by making the sonar equipment quieter',
      'Recording environmental sound and using AI to identify species from their calls — allowing passive monitoring of biodiversity across large areas without physical traps or observation',
      'Attaching microphones to endangered animals to record their communications — AI analyses the recordings for signs of stress',
      'Playing species-specific calls to attract wildlife for counting purposes — AI determines when the right calls have been played',
    ],
    correctIndex: 1,
    explanation:
      "Bioacoustic recorders capture sound continuously in the field. AI models trained on thousands of species' calls can then analyse hours of recordings automatically, identifying which species were present, when, and how frequently. This allows passive biodiversity monitoring at scale. The BTO's BirdNET-powered analysis and apps like Merlin Bird ID use this approach. It can also detect the sounds of chainsaws or gunshots, flagging illegal activity.",
  },
  {
    question: 'How is satellite imagery AI used to track deforestation?',
    options: [
      'Satellites photograph forests at monthly intervals; AI then compares images to identify areas that have changed from forest to non-forest',
      'Satellites only monitor protected areas — AI flags when protected forest boundaries are breached',
      'AI satellites in orbit can detect deforestation in real time by sensing changes in forest density from above',
      'Satellite imagery AI is mainly used for replanting — identifying the best locations to plant trees after deforestation',
    ],
    correctIndex: 1,
    explanation:
      "Platforms like Global Forest Watch (by the World Resources Institute) use satellite imagery combined with AI to track tree cover changes globally. Satellites capture images at regular intervals; AI compares images to detect areas where forest has been cleared. Alerts can be generated within days of clearance, allowing rapid response. The system has been used to document illegal Amazon deforestation and logging in protected Indonesian rainforests.",
  },
  {
    question: 'What do anti-poaching AI systems typically predict, and what have studies found?',
    options: [
      'They predict the species most likely to be targeted for poaching, helping rangers prioritise which animals to track',
      'They predict where poaching attempts are most likely to occur, based on historical incident data, patrol patterns, and environmental factors — some studies have found reduced poaching activity in areas where AI-guided patrol planning is used',
      'They predict which individual poachers are operating in an area based on footprint analysis and other physical evidence',
      'They predict the future population size of endangered species to determine whether intervention is necessary',
    ],
    correctIndex: 1,
    explanation:
      "AI systems like PAWS (Protection Assistant for Wildlife Security) and PROTECT analyse data from past poaching incidents, patrol records, weather, and terrain to generate risk maps showing where poaching is most likely to occur. Rangers use these maps to plan patrols. A study in Uganda's Queen Elizabeth National Park found a significant reduction in snares found after implementing PAWS-guided patrol planning.",
  },
  {
    question: 'How does AI-powered population counting work for wildlife?',
    options: [
      'AI attaches virtual tracking tags to individual animals using satellite data, allowing exact population counts without physical tagging',
      'Drone or aerial footage of a habitat is analysed by AI, which detects and counts individual animals — making large-scale population surveys feasible where manual counting would be impractical',
      'AI analyses environmental DNA samples from water or soil to count how many individuals of a species are present in a given area',
      'Population counting AI works only in zoos and controlled environments — it cannot accurately count animals in wild conditions',
    ],
    correctIndex: 1,
    explanation:
      "AI can be trained to detect animals from aerial images with high accuracy. Survey planes or drones photograph a landscape, and AI counts individual animals — elephants in savannah, seals on beaches, whales in ocean footage. This is faster, cheaper, and less dangerous than manual aerial surveys, and enables surveys of large, remote areas. WWF has used AI-powered drone counts for several endangered species.",
  },
]

export function AIAndWildlifeConservation() {
  useMarkVisited('ai-and-wildlife-conservation')

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F98A;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            {LESSON_TITLE}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI is transforming the fight to protect endangered species and habitats &mdash;
            from identifying animals in photos to predicting where poachers will strike.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-wildlife-conservation" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Camera traps and AI image recognition</h2>
          <p className="text-gray-600 leading-relaxed">
            Camera traps &mdash; cameras placed in the wild that take photos when triggered by
            motion &mdash; have been used for decades in wildlife research. A single project
            might deploy hundreds of cameras over months, generating millions of images.
            The problem: someone has to look at all those photos.
          </p>
          <p className="text-gray-600 leading-relaxed">
            AI has transformed this. Tools like Google&apos;s Wildlife Insights and Microsoft&apos;s
            MegaDetector can process camera trap images automatically, identifying whether
            each image contains an animal, a blank frame, or a human. They can then classify
            the species. What would take a team of humans months takes AI hours.
          </p>
          <div className="bg-green-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-green-800 text-sm">Citizen science and AI together</p>
            <p className="text-green-700 text-sm leading-relaxed">
              Platforms like Zooniverse combine AI pre-screening with volunteer citizen
              scientists. AI removes obvious blank frames and makes initial species guesses;
              volunteers confirm or correct them. This hybrid approach is faster than humans
              alone and more accurate than AI alone for rare or ambiguous species.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Acoustic monitoring: listening for life</h2>
          <p className="text-gray-600 leading-relaxed">
            Every species has a distinctive acoustic signature &mdash; birds sing, bats
            echolocate, whales click, insects stridulate. Bioacoustic recorders can be
            left in the field to capture sound continuously. AI can then analyse recordings
            to detect which species were present.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F426;',
                label: 'Bird monitoring',
                text: 'The British Trust for Ornithology (BTO) uses AI to analyse recordings from field surveys, automatically identifying bird species from their calls. Apps like Merlin Bird ID (Cornell Lab) and BirdNET allow anyone with a smartphone to identify birds by sound, contributing to citizen science datasets.',
              },
              {
                icon: '&#x1F987;',
                label: 'Bat surveys',
                text: "Bats echolocate at frequencies mostly above human hearing. AI acoustic monitors identify bat species from their calls — important for planning surveys required before new construction near bat habitats, and for tracking population changes of the UK's 18 bat species.",
              },
              {
                icon: '&#x1F333;',
                label: 'Detecting illegal logging',
                text: "Rainforest Connection places solar-powered listening devices in trees. AI analyses ambient sound continuously, detecting chainsaw noise or truck engines — signs of illegal logging — and sending alerts to rangers within 30 seconds. The system is deployed in several countries including Brazil, Cameroon, and Indonesia.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Satellite AI and deforestation tracking</h2>
          <p className="text-gray-600 leading-relaxed">
            Satellites now photograph the entire Earth&apos;s land surface repeatedly. AI can
            compare images taken at different times to detect changes &mdash; particularly
            the conversion of forest to bare land or agriculture.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Global Forest Watch, run by the World Resources Institute, provides near
            real-time alerts when deforestation is detected. The system uses satellite
            data from multiple providers and AI analysis to generate weekly or monthly
            alerts for any forest area worldwide. Conservationists, journalists, and
            governments use this to track and report on illegal clearance.
          </p>
          <div className="bg-green-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-green-800 text-sm">UK relevance</p>
            <p className="text-green-700 text-sm leading-relaxed">
              The UK government uses satellite data and AI to monitor farming practices
              under agricultural subsidy rules, checking whether land being claimed for
              environmental payments is actually maintaining the habitat it should. The
              Woodland Trust uses AI analysis of aerial and satellite imagery to track
              tree cover changes across the UK.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Anti-poaching AI</h2>
          <p className="text-gray-600 leading-relaxed">
            Poaching is a major driver of wildlife decline. Rangers in large parks cannot
            patrol everywhere at once. AI systems can help predict where poachers are
            most likely to strike, allowing rangers to focus patrols more effectively.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Systems like PAWS (Protection Assistant for Wildlife Security) analyse
            historical poaching incident data, patrol coverage, terrain, water sources,
            and animal movement patterns to generate risk maps. Studies in Uganda&apos;s
            parks found significant reductions in snares found after implementing
            AI-guided patrol planning.
          </p>
          <div className="bg-amber-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-amber-800 text-sm">The limitations</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              Anti-poaching AI is not a silver bullet. It requires reliable historical
              data to train on, and in areas where patrol records are poor, predictions
              are less reliable. There are also concerns about using AI-based targeting
              systems in contexts where they might lead to over-policing of local
              communities who depend on bushmeat for food, rather than organised
              criminal poaching syndicates.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI population counting</h2>
          <p className="text-gray-600 leading-relaxed">
            Knowing how many animals of a species exist is fundamental to conservation.
            Traditional methods &mdash; mark-recapture studies, road transects, aerial
            surveys with human observers &mdash; are slow, expensive, and often impractical
            for large or remote populations.
          </p>
          <p className="text-gray-600 leading-relaxed">
            AI-powered analysis of drone and aerial footage has transformed population
            counting. An aircraft or drone films a habitat; AI detects and counts each
            individual animal from the footage. This has been used to count:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed">
            <li>Elephants in African savannah (WWF, using satellite imagery)</li>
            <li>Seals on UK and Arctic beaches (SMRU Consulting, using drone footage)</li>
            <li>Penguins in Antarctica (from satellite photos)</li>
            <li>Whales in ocean footage (Deep Vision, funded by multiple conservation organisations)</li>
          </ul>
        </div>

        <ReviewLaterButton lessonId="ai-and-wildlife-conservation" />
        <LessonNote lessonId="ai-and-wildlife-conservation" />

        <Quiz questions={quizQuestions} lessonId="ai-and-wildlife-conservation" />

        <LessonFeedback lessonId="ai-and-wildlife-conservation" />
        <LessonRating lessonId="ai-and-wildlife-conservation" />
        <RelatedLessons currentId="ai-and-wildlife-conservation" />
        <NextLesson currentId="ai-and-wildlife-conservation" />
      </div>
    </div>
  )
}
