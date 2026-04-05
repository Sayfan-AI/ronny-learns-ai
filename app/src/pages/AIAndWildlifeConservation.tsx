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

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does AI help conservationists identify individual animals in camera trap images?',
    options: [
      'Each animal is fitted with a microchip before being released, and cameras scan for the chip signal when an animal walks past',
      'AI uses pattern recognition to identify unique features such as stripe patterns on tigers, spot patterns on leopards, or ear shapes, allowing individual animals to be identified and tracked without physical tags',
      'Conservationists manually review every camera trap image and enter the animal details into a spreadsheet',
      'AI counts the number of animals in each image but cannot distinguish between individuals of the same species',
    ],
    correctIndex: 1,
    explanation:
      "Camera trap networks can generate millions of images per year. AI tools like Wildlife Insights can automatically identify species in images and, for many large mammals, identify individual animals from unique physical features. Tiger stripe patterns are as unique as human fingerprints. Spot patterns on leopards and cheetahs, the ear nicks and tail shapes of elephants, and even the facial features of great apes can be used by AI to create individual identity profiles. This lets researchers track individuals across a landscape over years, building population data that would take teams of people decades to compile manually.",
    hint: 'Think about unique physical features visible in photographs.',
  },
  {
    question: 'What does acoustic monitoring using AI allow conservationists to do?',
    options: [
      'Control the calls of animals remotely to attract them to safe areas away from poachers',
      'Analyse audio recordings from the environment to detect specific animal species by their calls or sounds, including rare species and even the sound of chainsaws indicating illegal logging',
      'Play recordings of healthy ecosystems in degraded habitats to encourage animals to return',
      'Monitor the hearing ability of individual animals to assess their health status',
    ],
    correctIndex: 1,
    explanation:
      "Acoustic monitoring systems place microphones in wildlife habitats and stream audio to AI analysis systems. The AI has been trained on recordings of thousands of species and can identify animals by their calls, even when multiple species are calling simultaneously. This is particularly valuable for monitoring nocturnal species that are hard to see, for detecting rare species whose presence might be missed in camera trap surveys, and for rapid detection of illegal activity. The sound of a chainsaw is distinctive, and AI systems have been deployed in rainforests to detect illegal logging activity in real time and alert rangers.",
    hint: 'Think about identifying species and detecting illegal activity through sound.',
  },
  {
    question: 'How do anti-poaching AI systems help protect endangered animals?',
    options: [
      'AI-controlled drones autonomously shoot tranquilliser darts at anyone who enters a national park without permission',
      'AI analyses patterns of ranger patrol routes, historical poaching incident locations, and environmental conditions to predict where poaching is most likely and help rangers allocate their patrols most effectively',
      'AI monitors all mobile phone signals in wildlife areas and automatically reports suspicious activity to police without any human review',
      'Conservation organisations use AI to set animal traps that capture poachers without harming them',
    ],
    correctIndex: 1,
    explanation:
      "PAWS (Protection Assistant for Wildlife Security) is an AI system developed at the University of Southern California and used in wildlife reserves in Uganda, Cambodia, and elsewhere. It analyses historical poaching incident data, patrol logs, terrain, vegetation cover, and access points to predict where poachers are most likely to operate. Rangers use these predictions to plan more effective patrols. Thermal cameras on drones can also detect the body heat of humans in a reserve at night and alert rangers. These systems aim to help under-resourced ranger teams cover large areas more effectively.",
    hint: 'The AI predicts where poaching is likely and helps rangers patrol smarter.',
  },
  {
    question: 'How is AI used to monitor deforestation?',
    options: [
      'Satellites photograph forests daily and AI detects changes in forest cover as small as a few football pitches, enabling near-real-time alerts when illegal clearing begins',
      'AI analyses the diaries of foresters to identify when they are planning to cut down trees',
      'AI reads news reports from local newspapers in tropical countries and flags any mentions of deforestation',
      'Drones are sent to photograph every tree individually each year and AI counts how many have been removed',
    ],
    correctIndex: 1,
    explanation:
      "Planet Labs, Google Earth Engine, and Global Forest Watch use satellites and AI to monitor forest cover at global scale. Satellites pass over every point on Earth's surface daily, and AI analyses the imagery to detect changes in vegetation cover. It can distinguish between cleared forest, replanted areas, and natural variation. When clearing is detected, an alert can be sent to local authorities, NGOs, or media organisations within hours. This has been used to expose illegal Amazon deforestation, document forest fires, and track the effectiveness of conservation commitments made by governments and corporations.",
    hint: 'Think about satellites providing daily images and AI detecting changes.',
  },
  {
    question: 'What ethical concern is raised about using AI in wildlife conservation?',
    options: [
      'Animals might learn to avoid areas where AI cameras are deployed, making the data unrepresentative',
      'Powerful surveillance technology developed for wildlife conservation, including drone tracking and pattern recognition, could be repurposed to monitor local and indigenous communities without their consent',
      'AI identification of rare species makes it easier for collectors to find and illegally capture them',
      'Wildlife conservation AI is so expensive that it is only available to organisations in wealthy countries',
    ],
    correctIndex: 1,
    explanation:
      "Conservation organisations including WWF and the Global Conservation Fund have raised concerns about the use of surveillance technologies in areas where indigenous and local communities live alongside wildlife. Technologies like AI-enabled drone surveillance, thermal cameras, and movement tracking have been deployed in conservation areas in ways that some communities report as intrusive monitoring of their own movements and activities. There are documented cases of conservationist surveillance being used against communities whose traditional practices conflict with conservation objectives. Researchers argue that conservation AI must be developed and deployed with genuine community participation and consent.",
    hint: 'Think about who else might be monitored by technology designed to watch animals.',
  },
]

export function AIAndWildlifeConservation() {
  useMarkVisited('ai-and-wildlife-conservation')

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F98F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and wildlife conservation
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Camera traps that identify individual animals, acoustic sensors that detect chainsaws,
            anti-poaching AI, and satellite deforestation alerts &mdash; how AI is transforming the
            effort to protect wildlife.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-wildlife-conservation" />
          <ShareButton lessonTitle="AI and wildlife conservation" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Camera traps &mdash; AI eyes in the wild</h2>
          <p className="text-gray-600 leading-relaxed">
            Camera traps are motion-triggered cameras placed in wildlife habitats. They have been used
            for decades, but the sheer volume of images they generate &mdash; millions per year for a
            large reserve &mdash; made manual review impractical. AI has transformed what is possible.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4F7;',
                label: 'Automated species identification',
                text: "AI tools like Wildlife Insights can scan millions of camera trap images and identify the species in each one automatically. What used to take a team of researchers months of manual work can now be completed in hours. The AI is trained on millions of labelled images from wildlife databases worldwide.",
              },
              {
                icon: '&#x1F42F;',
                label: 'Individual animal recognition',
                text: "For many large mammals, AI can identify individual animals from unique physical features. Tiger stripes, leopard spots, elephant ear shapes, and even the facial features of great apes are as unique as human fingerprints. AI builds identity profiles, enabling researchers to track specific individuals across a landscape over years without capturing or tagging them.",
              },
              {
                icon: '&#x1F4CA;',
                label: 'Population estimates',
                text: "By counting individuals and tracking their movements over time, AI enables more accurate population estimates than traditional survey methods. This data is essential for assessing conservation status, detecting population declines early, and measuring whether conservation efforts are working.",
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

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Acoustic monitoring &mdash; listening to the wild</h2>
          <p className="text-gray-600 leading-relaxed">
            Many species are easier to hear than see &mdash; and the sounds of an ecosystem tell a
            story about its health. AI acoustic monitoring has opened up an entirely new way of
            surveying wildlife.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '&#x1F3A4;', title: 'Species identification by call', text: "AI trained on recordings of thousands of species can identify animals by their calls, even when multiple species are calling at once. This is valuable for nocturnal species, rare species, and bats (which use ultrasound that humans cannot hear but microphones can detect)." },
              { icon: '&#x1F333;', title: 'Ecosystem health monitoring', text: "A healthy ecosystem has a rich soundscape of many species calling at different times. AI can analyse the overall acoustic complexity of a recording and track how it changes over time, providing an indicator of ecosystem health without needing to identify every individual species." },
              { icon: '&#x26CF;&#xFE0F;', title: 'Illegal logging detection', text: "The sound of a chainsaw is distinctive. AI acoustic systems deployed in rainforests in South America and Southeast Asia detect chainsaw sounds in real time and alert rangers, enabling rapid response to illegal clearing before large areas are lost." },
              { icon: '&#x1F433;', title: 'Whale and dolphin monitoring', text: "Underwater hydrophones and AI are used to track whale populations, monitor migration routes, and detect distress calls. AI can identify species and individual whales from their unique calls, and alert shipping lanes when endangered whales are present." },
            ].map(({ icon, title, text }) => (
              <div key={title} className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl" dangerouslySetInnerHTML={{ __html: icon }} />
                  <p className="font-semibold text-gray-800 text-sm">{title}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Anti-poaching AI &mdash; protecting the most endangered</h2>
          <p className="text-gray-600 leading-relaxed">
            Poaching drives species to extinction. AI is giving conservation rangers new tools to
            protect wildlife in vast, under-resourced reserves.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F5FA;&#xFE0F;',
                label: 'Predictive patrol planning',
                text: "The PAWS (Protection Assistant for Wildlife Security) system analyses historical poaching incident data, terrain, vegetation, weather, and ranger patrol records to predict where poachers are most likely to operate. Rangers use these predictions to plan patrols that cover the highest-risk areas, making limited resources go further.",
              },
              {
                icon: '&#x1F6F8;',
                label: 'Thermal drone surveillance',
                text: "Drones equipped with thermal cameras can detect human body heat in a wildlife reserve at night, when most poaching occurs. AI distinguishes between humans and large animals by body shape and heat signature. When a suspicious person is detected, rangers are alerted to their location.",
              },
              {
                icon: '&#x1F50D;',
                label: 'Snare detection',
                text: "AI trained on camera trap images can identify wire snares left by poachers, which are nearly invisible in dense vegetation. Identifying snare locations from images allows rangers to remove them systematically rather than searching on foot across vast areas.",
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

        <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Deforestation tracking from space</h2>
          <p className="text-gray-600 leading-relaxed">
            Forests cover about 31% of Earth&apos;s land surface and are home to 80% of terrestrial
            species. Losing them is the single biggest driver of wildlife extinction. AI satellite
            monitoring is transforming our ability to detect and respond to deforestation.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F6F0;&#xFE0F;',
                label: 'Daily satellite coverage',
                text: "Planet Labs operates hundreds of small satellites that photograph every point on Earth daily. AI analyses this imagery to detect changes in forest cover as small as a few football pitches. Alerts can be generated and sent to local authorities or NGOs within hours of clearing being detected.",
              },
              {
                icon: '&#x1F30E;',
                label: 'Global Forest Watch',
                text: "This free, publicly available platform (run by the World Resources Institute) uses AI and satellite data to provide near-real-time forest change alerts globally. Anyone can set up alerts for a specific forest area and receive notifications when change is detected.",
              },
              {
                icon: '&#x1F4C4;',
                label: 'Holding corporations accountable',
                text: "Many companies have made commitments to deforestation-free supply chains. AI satellite monitoring provides independent evidence of whether forests in their supply regions are being protected, making it harder for companies and governments to claim commitments are being met when they are not.",
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

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Important concerns and ethical questions</h2>
          <div className="bg-purple-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-purple-800 text-sm">The rights of communities who live alongside wildlife</p>
            <p className="text-purple-700 text-sm leading-relaxed">
              Powerful surveillance technology developed for conservation can be misused. There are documented
              cases of conservation drones and cameras being used to monitor indigenous communities rather than
              wildlife, and of conservation organisations acting against the interests of people who have lived
              in these landscapes for generations. Researchers and charities argue that conservation AI must
              be developed with genuine community consent and participation, and that local communities should
              benefit from, not be threatened by, conservation technology.
            </p>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-wildlife-conservation" />
        <LessonNote lessonId="ai-and-wildlife-conservation" />

        <Quiz questions={quizQuestions} lessonId="ai-and-wildlife-conservation" lessonTitle="AI and wildlife conservation" />

        <LessonFeedback lessonId="ai-and-wildlife-conservation" />
        <LessonRating lessonId="ai-and-wildlife-conservation" />
        <RelatedLessons currentId="ai-and-wildlife-conservation" />
        <NextLesson currentId="ai-and-wildlife-conservation" />
      </div>
    </div>
  )
}
