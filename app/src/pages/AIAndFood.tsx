import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { ShareButton } from '../components/ShareButton'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does AI help farmers reduce the amount of pesticide they use?',
    options: [
      'It removes the need for pesticides entirely',
      'It uses computer vision on drones or tractors to spray only the plants that are actually affected by weeds or disease',
      'It predicts the weather so farmers can spray before it rains',
      'It chooses which crops need the most pesticide based on price',
    ],
    correctIndex: 1,
    explanation:
      "Precision agriculture tools like John Deere's See & Spray use cameras and AI to identify weeds in real time. The machine only sprays where weeds are present, which can cut herbicide use by up to 90% compared to blanket spraying. This saves money and reduces environmental harm.",
  },
  {
    question: 'What is one way supermarkets use AI to reduce food waste?',
    options: [
      'They use AI to set prices higher so less food is bought',
      'They use AI demand forecasting to order only as much stock as they expect to sell',
      'They use AI to spot food that has gone off before it reaches shelves',
      'They use AI to redesign packaging so food lasts longer',
    ],
    correctIndex: 1,
    explanation:
      'AI demand forecasting analyses past sales, local events, the weather, and promotions to predict how much of each product will sell. Retailers like Tesco and Walmart use this to order more precisely, significantly cutting the amount of unsold food that is thrown away.',
  },
  {
    question: 'What is food fraud, and how does AI help detect it?',
    options: [
      'Food fraud is when restaurants overcharge customers; AI monitors receipts',
      'Food fraud is mislabelling or adulterating food products; AI uses spectroscopy and chemical analysis to spot fakes',
      'Food fraud is when food passes its use-by date; AI reads expiry labels',
      'Food fraud is when farms use unlicensed pesticides; AI checks soil samples',
    ],
    correctIndex: 1,
    explanation:
      "Food fraud — such as diluting expensive olive oil with cheaper oils, or labelling farmed fish as wild-caught — costs the global food industry billions each year. AI-powered spectroscopy can analyse the chemical fingerprint of a product in seconds, catching adulteration that human inspectors would miss.",
  },
  {
    question: 'What is a limitation of AI in farming for small-scale farmers?',
    options: [
      'AI cannot work in hot climates',
      'AI farming tools are often too expensive for small farms in lower-income countries to afford',
      'AI can only manage one crop type at a time',
      'AI requires a constant internet connection that most farms cannot provide',
    ],
    correctIndex: 1,
    explanation:
      'Most advanced AI farming tools are developed for large industrial farms with capital to invest. Smallholder farmers, who produce about 70% of the food eaten in developing countries, are often priced out of these technologies, widening inequality in the food system.',
  },
]

export function AIAndFood() {
  useMarkVisited('ai-and-food')

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F33F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and food
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI is transforming farming, reducing waste in supermarkets,
            detecting food fraud, and deciding what ends up on your plate.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-food" />
          <ShareButton lessonTitle="ai-and-food" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI on the farm</h2>
          <p className="text-gray-600 leading-relaxed">
            Before your food reaches a shop, AI has already played a role. Sensors buried in
            soil measure moisture and nutrients. Drones photograph fields from above, scanning
            for disease or poor growth. Tractors with computer-vision systems drive themselves
            and spray only the plants that need treating.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This is called <strong>precision agriculture</strong> &mdash; using data and AI to
            make farming decisions at a very fine level, rather than treating an entire field
            the same. The results are striking: less water used, fewer chemicals applied, and
            better yields from the same land.
          </p>
          <div className="bg-green-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-green-800 text-sm">Real example: John Deere See &amp; Spray</p>
            <p className="text-green-700 text-sm leading-relaxed">
              John Deere&apos;s See &amp; Spray system uses cameras mounted on a sprayer bar.
              As the machine moves across a field, AI identifies weeds in real time and triggers
              a nozzle only at that exact spot. In trials, farmers reduced herbicide use by up to
              90%, cutting costs and reducing environmental run-off.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Predicting supply chains</h2>
          <p className="text-gray-600 leading-relaxed">
            Moving food from a farm to your kitchen involves a huge chain of steps: harvesting,
            processing, packaging, shipping, and stocking shelves. AI helps at almost every stage.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CA;',
                label: 'Demand forecasting',
                text: "Supermarkets like Tesco and Walmart feed sales history, weather forecasts, local events, and promotional plans into AI models that predict how much of each product to order. This cuts waste because shops order closer to what they will actually sell.",
              },
              {
                icon: '&#x1F69A;',
                label: 'Logistics optimisation',
                text: "AI routing systems find the most efficient delivery routes in real time, taking into account traffic, weather, vehicle capacity, and shelf-life deadlines. Fresher food arrives at the right time.",
              },
              {
                icon: '&#x1F4F1;',
                label: 'Inventory management',
                text: "Smart shelf sensors and RFID tags let stores track stock in real time. When a product is running low, an automated reorder is triggered, reducing the chance of empty shelves or overstock.",
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
          <h2 className="text-2xl font-bold text-gray-800">Detecting food fraud</h2>
          <p className="text-gray-600 leading-relaxed">
            Food fraud &mdash; passing off a cheaper product as a premium one &mdash; is a global
            problem worth an estimated &pound;40 billion a year. Classic examples include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed">
            <li>Olive oil diluted with cheaper sunflower or canola oil, still labelled &ldquo;extra virgin&rdquo;</li>
            <li>Farmed salmon sold as wild-caught</li>
            <li>Honey mixed with sugar syrup</li>
            <li>Ground beef bulked out with horse meat (as in the 2013 European horsemeat scandal)</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Traditional lab testing is slow and expensive. AI-powered <strong>near-infrared spectroscopy</strong>
            {' '}shines light on a sample and reads its chemical fingerprint in seconds. AI trained on
            thousands of authentic and adulterated samples can spot fakes with high accuracy.
            Interpol and the European Commission now use these tools in large-scale food fraud
            investigations.
          </p>
          <div className="bg-amber-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-amber-800 text-sm">Did you know?</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              Up to 80% of the olive oil sold in some markets does not meet the &ldquo;extra virgin&rdquo;
              standard on its label. AI fraud detection is now being deployed by major olive oil
              producers and customs agencies to address this.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI and what you eat</h2>
          <p className="text-gray-600 leading-relaxed">
            AI also influences what lands on your plate through recommendation engines. Food
            delivery apps like Deliveroo and Uber Eats use machine learning to personalise what
            restaurants and dishes they surface to you, based on your past orders, time of day,
            the weather, and what similar users chose.
          </p>
          <p className="text-gray-600 leading-relaxed">
            AI recipe generators can suggest dishes from the ingredients in your fridge. Some
            apps let you photograph a meal and estimate its calorie content automatically. These
            tools are convenient but imprecise &mdash; calorie estimation from photos can be off
            by 20 to 30%, so they are better used as a rough guide than a precise count.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Who gets left behind</h2>
          <p className="text-gray-600 leading-relaxed">
            Most precision agriculture technology is designed for large industrial farms in
            wealthy countries. A smallholder farmer in sub-Saharan Africa or South Asia &mdash; farming
            just one or two hectares &mdash; typically cannot afford GPS-guided sprayers or
            satellite yield-prediction subscriptions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Smallholders produce about 70% of the food consumed in developing countries. If AI
            tools remain out of their reach, the productivity gains will widen the gap between
            large agribusinesses and small farms, with consequences for rural livelihoods and
            global food security.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Some non-profit and government programmes are working to change this &mdash; providing
            free satellite crop monitoring via mobile phones, for example &mdash; but the gap
            remains large.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The big picture</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-100 rounded-xl p-4">
              <p className="font-semibold text-green-800 text-sm mb-2">Where AI is helping</p>
              <ul className="text-green-700 text-sm space-y-1 leading-relaxed">
                <li>Reducing pesticide and water use</li>
                <li>Cutting food waste in supply chains</li>
                <li>Catching food fraud faster</li>
                <li>Making food delivery more convenient</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-semibold text-orange-800 text-sm mb-2">Where caution is needed</p>
              <ul className="text-orange-700 text-sm space-y-1 leading-relaxed">
                <li>High costs excluding small farmers</li>
                <li>AI monoculture optimisation reducing biodiversity</li>
                <li>Calorie-counting apps that over-claim accuracy</li>
                <li>Algorithmic pricing pushing up food costs</li>
              </ul>
            </div>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-food" />
        <LessonNote lessonId="ai-and-food" />

        <Quiz questions={quizQuestions} lessonId="ai-and-food" />

        <LessonRating lessonId="ai-and-food" />
        <RelatedLessons currentId="ai-and-food" />
        <NextLesson currentId="ai-and-food" />
      </div>
    </div>
  )
}
