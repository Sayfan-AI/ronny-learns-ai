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

const LESSON_TITLE = 'AI and 3D printing'

const KEY_TAKEAWAYS = [
  '3D printing (additive manufacturing) builds objects layer by layer from digital designs — AI is making this faster, smarter, and capable of creating shapes that are impossible to make any other way.',
  'Generative design is an AI technique where you tell the software what a part needs to do and what it must withstand, and the AI generates optimised design options — often producing organic, lattice-like shapes that are lighter and stronger than human-designed equivalents.',
  'AI-designed 3D-printed implants — custom hip replacements, skull plates, dental crowns — are already being used in hospitals worldwide, shaped precisely for individual patients.',
  'Aerospace and car manufacturers use AI generative design and 3D printing to make components that are 40 to 70% lighter than traditional parts, saving enormous amounts of fuel.',
  'AI is also being used to monitor the 3D printing process in real time — detecting errors as they form, adjusting print parameters automatically, and reducing failed prints.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is generative design in the context of 3D printing?',
    options: [
      'A design style that creates random geometric patterns for purely decorative objects',
      'An AI approach where you specify what a part must do and what forces it must withstand, and the AI generates optimised design options automatically',
      'A method of generating 3D printable files from 2D photographs using computer vision',
      'A technique where a 3D printer uses multiple materials in a single print to generate colour gradients',
    ],
    correctIndex: 1,
    explanation:
      'Generative design works like this: an engineer tells the software the constraints — the part must weigh less than 2kg, withstand 500 newtons of force in this direction, connect at these three points, and fit within this bounding box. The AI then runs thousands of simulations, exploring design options a human would never consider, and produces shapes optimised for those requirements. The results often look organic and strange — almost bone-like lattices — because they use material only where it is needed and remove it everywhere else. Airbus used this approach to create an aircraft partition wall that was 45% lighter than its predecessor.',
    hint: 'Think about the AI generating designs based on requirements, not the human drawing them.',
  },
  {
    question: 'How are AI and 3D printing being used together in medicine?',
    options: [
      'Hospitals use 3D printers to produce all pharmaceutical drugs on demand from raw chemical ingredients',
      'Custom implants, prosthetics, dental crowns, and surgical models are 3D-printed to fit individual patients precisely, often designed with AI assistance',
      'AI robots perform 3D printing operations inside a patient\'s body during surgery without any external equipment',
      '3D printing is used to create physical replicas of AI brain models for educational displays in medical schools',
    ],
    correctIndex: 1,
    explanation:
      "Medical 3D printing is already transforming patient care. A surgeon planning a complex hip replacement can have an exact model of the patient's joint printed before the operation to practise on. Custom titanium implants shaped precisely to a patient's skull — for craniofacial reconstruction after accidents or cancer surgery — are designed using AI and printed in hours. Dental labs use AI-assisted scanners and 3D printers to produce crowns, bridges, and aligners overnight, replacing a process that once took weeks. The combination of AI design tools and 3D printing means a patient can have a custom-fitted device faster and cheaper than ever before.",
    hint: 'Think about personalised, patient-specific medical devices.',
  },
  {
    question: 'Why do aerospace companies use AI generative design and 3D printing for structural parts?',
    options: [
      'Because 3D-printed parts are invisible to radar, making aircraft harder to detect on military tracking systems',
      'To produce parts that are significantly lighter than traditionally manufactured equivalents, reducing fuel consumption',
      'Because 3D printing is cheaper in all cases than traditional machining — it takes less time and uses less energy',
      'To create parts that repair themselves automatically when damaged, using shape-memory materials',
    ],
    correctIndex: 1,
    explanation:
      "Every kilogram of weight removed from an aircraft saves thousands of pounds in fuel costs over its lifetime. AI generative design creates parts that are structurally optimised — using material only where it structurally needs to be — producing shapes that look like coral or bone rather than machined metal. GE Aviation's fuel nozzle for the LEAP jet engine was redesigned using AI and 3D printing — the result replaced 20 separate welded parts with a single printed component that was 25% lighter and five times more durable. For the aerospace industry, lighter and more durable are both enormously valuable.",
    hint: 'Think about the most expensive variable in operating aircraft.',
  },
  {
    question: 'What role does AI play in monitoring a 3D print as it is happening?',
    options: [
      'AI controls the ambient temperature of the room where printing occurs, ensuring the environment is exactly right',
      'AI cameras and sensors detect errors — warping, delamination, blocked nozzles — as they form, and adjust print settings automatically to correct them',
      'AI monitors the electricity consumption of the 3D printer to ensure it is running efficiently and flags when to switch to a cheaper tariff',
      'AI generates a new design file automatically if the first print fails, using a different approach to achieve the same result',
    ],
    correctIndex: 1,
    explanation:
      "3D printing is prone to failures — a warped base layer, a blocked nozzle, material that does not adhere properly — and these often ruin the entire print. AI-powered monitoring systems use cameras and sensors to watch the print layer by layer. Machine learning models trained on thousands of prints can recognise when something looks wrong — a slight curve that will cause warping, a slightly under-extruded layer that will be structurally weak — and adjust settings like temperature, speed, and material flow in real time to compensate, or pause and alert the operator before the problem becomes unfixable.",
    hint: 'Think about catching problems during the print rather than after.',
  },
  {
    question: 'Which everyday consumer product has been significantly impacted by AI and 3D printing working together?',
    options: [
      'Televisions — screens are now 3D printed layer by layer for sharper resolution',
      'Running shoes — several major brands now use AI to design and 3D print custom midsoles optimised for an individual runner\'s gait',
      'Smartphones — AI designs the circuit boards and 3D printers assemble them in fully automated factories',
      'Chocolate bars — food manufacturers use AI and 3D printing to create complex flavour combinations impossible by hand',
    ],
    correctIndex: 1,
    explanation:
      "Adidas, New Balance, and Nike have all experimented with 3D-printed shoe soles. Adidas partnered with Carbon (a 3D printing company) to produce the Futurecraft 4D midsole, printed in a lattice structure designed by AI to provide cushioning precisely where a runner's foot needs it. New Balance offers a service where a customer's gait is analysed, the data fed into an AI design tool, and a custom 3D-printed midsole created for their specific foot shape and running style. This is a good example of AI and 3D printing enabling mass personalisation — custom products at near-mass-production speeds.",
    hint: "Think about a product you wear that needs to fit your body's unique shape.",
  },
]

export function AIAnd3DPrinting() {
  useMarkVisited('ai-and-3d-printing')

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F9F1;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and 3D printing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI generative design is creating shapes impossible to make any other way —
            from lighter aircraft parts to custom medical implants and personalised running shoes.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-3d-printing" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">What is 3D printing?</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            3D printing — formally called additive manufacturing — builds objects by depositing material layer by layer, following a digital design file. Unlike traditional manufacturing (which cuts, drills, or moulds material), 3D printing adds material only where needed. AI is transforming what can be designed and how reliably it can be printed.
          </p>
          <div className="space-y-2">
            {[
              'Traditional manufacturing removes material from a block (subtractive). 3D printing adds material only where needed (additive) — less waste',
              'Materials include plastic, metal, concrete, ceramics, food (yes, chocolate and pasta), and biological tissue',
              'Professional 3D printers can produce parts in titanium, aluminium, and stainless steel for industrial and medical use',
              'The global 3D printing market is expected to exceed £30 billion by 2025',
              'AI has made 3D printing smarter — in what can be designed, how it is manufactured, and how errors are caught',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Generative design — AI as the engineer</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Traditionally, an engineer designs a part and then checks if it meets requirements. Generative design flips this — you specify requirements, the AI generates designs that meet them.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4AC;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">How it works</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">You define constraints: maximum weight, minimum strength, attachment points, and operating forces. The AI explores thousands of design variations through simulation, keeping what works and discarding what does not — similar to natural selection.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F9B4;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">The results look strange</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">AI-generated parts often look organic — lattices, branches, and bone-like structures. That is because the AI puts material only where it is structurally needed and removes it everywhere else. These shapes are usually impossible to manufacture traditionally but can be 3D-printed precisely.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x2708;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Real results</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Airbus used generative design to create an aircraft cabin partition wall that is 45% lighter than its predecessor while being equally strong. GE designed a jet engine fuel nozzle that replaced 20 welded parts with one printed component, 25% lighter and five times more durable.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Medical implants designed for you</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Every human body is slightly different. AI and 3D printing together allow medical devices to be designed and manufactured for individual patients, not average shapes.
          </p>
          <div className="space-y-2">
            {[
              'Custom titanium skull plates for craniofacial reconstruction — designed from a CT scan, printed within hours',
              'Hip and knee replacements shaped precisely to a patient\'s anatomy — reducing operation time and improving fit',
              'Dental crowns and bridges designed by AI from a scan and printed overnight in the dental lab — same-day fitting possible',
              'Hearing aid shells printed to the exact shape of an individual\'s ear canal',
              'Surgical planning models — a 3D print of a patient\'s heart or tumour so surgeons can practise complex procedures beforehand',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Everyday consumer products</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            3D printing started in industrial and medical settings but is increasingly changing consumer products.
          </p>
          <div className="space-y-3">
            {[
              { icon: '&#x1F45F;', label: 'Running shoes', text: 'Adidas, New Balance, and Nike use AI generative design and 3D printing to create shoe midsoles with lattice structures that provide cushioning exactly where your foot needs it.' },
              { icon: '&#x1F3AF;', label: 'Hearing aids', text: 'Nearly all hearing aids are now made with 3D printing. The earpiece shell is printed to fit the individual ear canal precisely — dramatically improving comfort and sound quality.' },
              { icon: '&#x1F6F2;', label: 'Eyewear', text: "Several eyewear brands offer 3D-printed frames designed around a scan of the customer's face — perfectly fitted glasses made on demand." },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">{label}</p>
                  <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <LessonNote lessonId="ai-and-3d-printing" />
        <ReviewLaterButton lessonId="ai-and-3d-printing" />

        <Quiz lessonId="ai-and-3d-printing" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-3d-printing" />
        <LessonFeedback lessonId="ai-and-3d-printing" />

        <RelatedLessons currentId="ai-and-3d-printing" />

        <NextLesson currentId="ai-and-3d-printing" />

      </div>
    </div>
  )
}
