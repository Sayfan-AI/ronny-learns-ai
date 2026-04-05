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

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does "precision farming" mean?',
    options: [
      'Farming done entirely by robots without any human involvement',
      'Using sensors, GPS, and data to apply exactly the right amount of water, fertiliser, or pesticide to specific areas — rather than treating the whole field the same',
      'A type of farming that only produces high-value crops like truffles and saffron',
      'Growing crops inside climate-controlled vertical farms in city centres',
    ],
    correctIndex: 1,
    explanation:
      'Precision farming uses sensors in soil, drones above fields, and satellite imagery to collect data about conditions across a farm. AI analyses this data and tells farmers — or automated systems — exactly where and how much to intervene. A field might need more water in one corner but less in another; precision farming handles this automatically, saving resources and increasing yield.',
    hint: 'Think about the word "precision" — it means applying just the right amount in just the right place.',
  },
  {
    question: 'How does the PlantVillage project help farmers in developing countries?',
    options: [
      'It sends expert agronomists to visit farms in person',
      'It uses a smartphone app powered by AI to identify crop diseases from a photo, enabling farmers without access to experts to diagnose problems instantly',
      'It provides free fertiliser and pesticides to farmers who sign up online',
      'It builds greenhouses in rural areas to protect crops from disease',
    ],
    correctIndex: 1,
    explanation:
      'PlantVillage is a database of over 50,000 images of diseased and healthy plants. Researchers trained an AI model on this dataset that can identify 26 diseases across 14 crops from a smartphone photo. A farmer in rural Kenya or India with no access to an agronomist can photograph a sick leaf and get a diagnosis in seconds. The app has been downloaded millions of times and is used in over 100 countries.',
    hint: 'PlantVillage is about diagnosing problems from photos on a phone.',
  },
  {
    question: 'How do drones help farmers monitor their crops?',
    options: [
      'Drones pick the fruit and vegetables to replace human pickers',
      'Drones fly over fields capturing aerial images and sensor readings that AI analyses to spot irrigation problems, pest infestations, or crop stress before they become serious',
      'Drones spray water across entire fields on a fixed daily schedule',
      'Drones scare away birds and insects by making loud noises',
    ],
    correctIndex: 1,
    explanation:
      'Agricultural drones carry cameras and sensors — including infrared cameras that detect plant health by measuring how much light leaves reflect. AI analyses the images to create detailed maps showing which parts of a field are stressed, waterlogged, or showing early signs of disease. A drone can survey hundreds of acres in an hour, flagging problems that a farmer walking on foot might miss for days. Early detection means smaller interventions and less crop loss.',
    hint: 'Drones give a bird\'s-eye view that helps spot problems early.',
  },
  {
    question: 'By roughly how much can AI-controlled irrigation systems reduce water usage on farms?',
    options: [
      'About 5%',
      'About 15%',
      'About 30%',
      'About 70%',
    ],
    correctIndex: 2,
    explanation:
      'Traditional irrigation often waters fields on a fixed schedule regardless of actual soil moisture — wasting large amounts of water. AI irrigation systems use soil moisture sensors, weather forecasts, and crop growth models to decide exactly when and how much to water. Studies suggest this can reduce water use by 20–30% while maintaining or improving yields. In water-scarce regions this is significant: agriculture accounts for about 70% of all freshwater use globally.',
    hint: 'It\'s a significant saving — more than 20% but less than half.',
  },
  {
    question: 'How does AI help with global food security?',
    options: [
      'AI can replace all farmers so food is produced more cheaply',
      'AI helps predict crop yields months in advance, detect supply chain disruptions early, and reduce food waste — giving governments and aid organisations time to respond before shortages become crises',
      'AI creates new synthetic foods that require no farming at all',
      'AI helps wealthy countries produce surplus food which is then sold to poorer countries',
    ],
    correctIndex: 1,
    explanation:
      'Food security means having reliable access to sufficient, nutritious food. AI contributes in several ways: satellite-based yield prediction (using satellite imagery and weather data to forecast harvests 3–6 months ahead) gives early warning of potential shortfalls. Supply chain AI detects bottlenecks and reroutes goods to avoid shortages. Post-harvest AI systems optimise storage conditions to reduce the 1.3 billion tonnes of food lost to spoilage each year. None of this replaces farmers, but it gives everyone in the food system better information to act on.',
    hint: 'Think about prediction and early warning — being able to prepare before a shortage happens.',
  },
]

export function AIAndAgriculture() {
  useMarkVisited('ai-and-agriculture')

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F33E;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and agriculture
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI is helping farmers grow more food with less water, detect
            crop diseases from a smartphone photo, and keep billions of people fed.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <DifficultyBadge level="Beginner" />
          </div>
          <CompletedBadge lessonId="ai-and-agriculture" />
          <ShareButton lessonTitle="AI and agriculture" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Precision farming: the right amount, in the right place</h2>
          <p className="text-gray-600 leading-relaxed">
            For most of human history, farming meant treating an entire field the same way &mdash;
            spreading the same amount of fertiliser across every acre, watering everything on the
            same schedule. That is wasteful and often counterproductive. AI is changing this.
          </p>
          <div className="bg-green-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-green-800 text-sm">How precision farming works</p>
            <p className="text-green-700 text-sm leading-relaxed">
              Sensors buried in the soil measure moisture levels, temperature, and nutrient content
              at different points across a field. Satellites and drones photograph crops from above.
              Weather stations record local conditions in real time. AI combines all of this data
              to build a detailed map of the field &mdash; showing exactly which areas are too dry,
              too wet, nutrient-deficient, or at risk of disease. Farmers (or automated systems)
              can then apply water, fertiliser, or pesticides only where they are needed, saving
              resources and reducing environmental impact.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            John Deere, one of the world&rsquo;s largest tractor manufacturers, has integrated AI
            into its machinery. Its &ldquo;See &amp; Spray&rdquo; system uses cameras and machine
            learning to distinguish between crops and weeds in real time &mdash; applying herbicide
            only to weeds and skipping the crop. This reduces herbicide use by up to 77%.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Spotting disease from a photograph</h2>
          <p className="text-gray-600 leading-relaxed">
            Crop diseases can devastate harvests if caught too late. Traditionally, a farmer
            would need to contact an agricultural extension officer or wait days for a specialist
            to visit. In remote areas, that help might never come.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4F7;',
                label: 'PlantVillage',
                text: "Researchers at Penn State University built a database of over 50,000 labelled images of healthy and diseased plants — covering 26 diseases across 14 crops. They trained an AI model on this dataset that can identify a disease from a single smartphone photo. A farmer in Kenya, India, or anywhere in the world can photograph a sick leaf and receive a diagnosis within seconds. The app has been downloaded millions of times and is actively used in over 100 countries.",
              },
              {
                icon: '&#x1F4CA;',
                label: 'Early detection saves harvests',
                text: "The earlier a disease is caught, the less it spreads. An AI diagnosis in the first week of infection can mean the difference between treating a small patch and losing an entire field. In regions where crop failure means food insecurity, this is genuinely life-changing.",
              },
              {
                icon: '&#x1F333;',
                label: 'Beyond disease: identifying pests and deficiencies',
                text: "Similar AI tools identify nutrient deficiencies (which show up as discolouration in leaves), pest infestations, and water stress. Farmers without university degrees in agronomy can now access diagnosis-quality information from their phone.",
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

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Drones: a bird&rsquo;s-eye view of the farm</h2>
          <p className="text-gray-600 leading-relaxed">
            Agricultural drones have become one of the most practical AI tools on modern farms.
            A drone can survey hundreds of acres in an hour &mdash; something that would take a
            person on foot days to cover.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '&#x1F4F7;', title: 'Aerial imaging', text: 'RGB and infrared cameras capture detailed images of crop health. AI analyses the images to flag stressed or diseased areas.' },
              { icon: '&#x1F4A7;', title: 'Irrigation monitoring', text: 'Drones detect waterlogged areas and dry patches that would be invisible from ground level, enabling targeted intervention.' },
              { icon: '&#x1F41B;', title: 'Pest detection', text: 'Some systems identify pest infestations from aerial imagery, flagging areas for targeted pesticide application.' },
              { icon: '&#x1F4CB;', title: 'Crop counting', text: 'AI on drone footage counts plants, estimates yield, and identifies gaps in crop establishment — useful for insurance and planning.' },
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

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Smarter irrigation: saving water at scale</h2>
          <p className="text-gray-600 leading-relaxed">
            Agriculture uses about 70% of the world&rsquo;s freshwater. Much of that water is wasted
            &mdash; applied on fixed schedules regardless of what the soil actually needs.
            AI-controlled irrigation changes this.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-blue-800 text-sm">How AI irrigation works</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              Soil moisture sensors send real-time data to an AI system that also has access to
              local weather forecasts, evaporation rates, and the specific water requirements of
              the crop at its current growth stage. The system calculates exactly how much water
              to apply &mdash; and where &mdash; and controls the irrigation system automatically.
              Trials show water savings of 20&ndash;30% compared to conventional irrigation, with
              equal or better yields. In drought-prone regions, this difference can determine
              whether a farm survives a dry season.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI and global food security</h2>
          <p className="text-gray-600 leading-relaxed">
            By 2050, the world will need to feed around 10 billion people &mdash; with less arable
            land, less water, and more unpredictable weather than today. AI alone cannot solve
            this, but it is becoming a critical tool.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F6F0;&#xFE0F;',
                label: 'Yield forecasting',
                text: 'Organisations like NASA and the UN Food and Agriculture Organisation use satellite data and AI to predict crop yields 3\u20136 months in advance. Governments can then plan food imports, aid organisations can pre-position supplies, and commodity traders get an earlier signal of price changes. Accurate prediction gives the world more time to respond before a shortage becomes a crisis.',
              },
              {
                icon: '&#x1F69A;',
                label: 'Reducing post-harvest losses',
                text: 'Around 1.3 billion tonnes of food \u2014 about a third of all food produced \u2014 is lost to spoilage, damage in transit, or waste each year. AI-optimised storage (adjusting temperature and humidity based on crop type and ripeness sensors), smarter logistics (routing food to where it is needed before it spoils), and demand prediction (ordering the right amount to avoid unsold stock) all chip away at this waste.',
              },
              {
                icon: '&#x1F30D;',
                label: 'Smallholder farmers',
                text: 'About 500 million smallholder farms provide food for much of the developing world. These farmers have historically lacked access to the expertise and data available to large commercial operations. AI tools delivered via smartphone \u2014 crop disease diagnosis, weather-based planting advice, market price information \u2014 are beginning to close this gap.',
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
          <div className="bg-amber-50 rounded-xl p-4 mt-2">
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>The limits: </strong>
              AI in agriculture works best where farmers have smartphones, reliable internet, and
              access to the electricity to charge devices. In the most food-insecure parts of the
              world, infrastructure gaps remain the biggest barrier &mdash; not the technology itself.
            </p>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-agriculture" />
        <LessonNote lessonId="ai-and-agriculture" />

        <Quiz questions={quizQuestions} lessonId="ai-and-agriculture" lessonTitle="AI and agriculture" />

        <LessonFeedback lessonId="ai-and-agriculture" />
        <LessonRating lessonId="ai-and-agriculture" />
        <RelatedLessons currentId="ai-and-agriculture" />
        <NextLesson currentId="ai-and-agriculture" />
      </div>
    </div>
  )
}
