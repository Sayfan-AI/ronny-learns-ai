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
  '3D printing (additive manufacturing) builds objects layer by layer from digital designs — and AI is making this process faster, smarter, and capable of designs no human engineer would think of.',
  'Generative design is an AI technique where you tell the software your requirements (weight, strength, materials, budget) and it explores millions of possible shapes to find the optimal design — often producing organic, unexpected structures that are stronger and lighter than conventional designs.',
  'The biggest real-world impact of AI-assisted 3D printing is in medicine: custom prosthetic limbs, dental crowns, surgical guides, and hearing aids can now be produced in days rather than months, fitted precisely to an individual patient.',
  "In aerospace and automotive manufacturing, AI-designed 3D-printed parts are already flying in aircraft and driving on roads — components that are lighter, stronger, and produced with less material waste than those made by traditional manufacturing.",
  'For home users, AI tools built into modern slicer software (the program that converts a 3D design into printing instructions) automatically optimise support structures and print settings, making 3D printing far more accessible to beginners.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is generative design in the context of AI and 3D printing?',
    options: [
      'A method of scanning a physical object with a camera and automatically converting the scan into a printable 3D file',
      'An AI technique where you specify requirements (weight, strength, material) and the software explores millions of possible shapes to find the optimal design',
      'A process where AI monitors a 3D printer in real time and pauses the print if it detects an error, restarting from the last successful layer',
      'Software that generates a random decorative 3D design each day for users to print as a hobby project',
    ],
    correctIndex: 1,
    explanation:
      'Generative design reverses the traditional engineering process. Instead of designing a part and then checking if it meets requirements, you define the requirements (how much weight it must bear, what material it will use, which areas must be kept clear) and the AI explores an enormous search space of possible shapes. The results are often organic-looking structures — lattices, curved supports, branching geometries — that a human engineer would never design but that use material exactly where it is needed and remove it everywhere else. Autodesk Fusion 360 is a well-known tool with generative design built in. The output is then sent directly to a 3D printer.',
    hint: 'Think about letting the AI find the best shape rather than designing it yourself.',
  },
  {
    question: 'Which medical application of AI and 3D printing has had the most widespread real-world impact so far?',
    options: [
      'Printing replacement human organs (hearts, kidneys, livers) from a patient\'s own cells for transplantation',
      'Custom-fitted prosthetics, dental crowns, surgical guides, and hearing aids produced quickly and precisely for individual patients',
      'AI-designed pharmaceutical pills that dissolve at precisely timed intervals based on a patient\'s genetic profile',
      'Printing edible nutrition supplements in personalised shapes and concentrations based on blood test results',
    ],
    correctIndex: 1,
    explanation:
      'The most mature and widely deployed medical use of AI and 3D printing is in custom-fitted devices. A dentist scans your tooth digitally, AI software designs a crown that fits precisely, and a milling machine or 3D printer produces it in the same appointment — replacing a process that once took weeks and multiple fittings. Custom prosthetic limbs are designed using AI to match a patient\'s exact body geometry, improving fit and function. Surgical guides — 3D-printed templates that show a surgeon exactly where to cut or drill during an operation — improve precision and reduce operating time. Hearing aids are almost universally custom-printed today. Bioprinting living organs is real research but is still many years from clinical use.',
    hint: 'Think about what has already changed in a dentist\'s surgery or a prosthetics clinic.',
  },
  {
    question: 'Why do AI-designed 3D-printed components in aerospace sometimes look so unusual — with holes, lattices, and organic shapes?',
    options: [
      'Aerospace regulations require all structural components to have ventilation holes for weight inspection purposes',
      'AI generative design removes material wherever it is not structurally needed, creating efficient shapes that look organic but use the minimum material to achieve required strength',
      'The 3D printing process itself introduces random porosity into metal parts, and these holes are an unavoidable manufacturing artefact',
      'Aerospace companies deliberately make parts look complex to deter unauthorised copying, since unusual shapes are harder to reverse-engineer',
    ],
    correctIndex: 1,
    explanation:
      "When AI generative design tools optimise a component for minimum weight at required strength, they remove material from every place it is not load-bearing. The result looks nothing like a traditionally machined part — instead of solid blocks of metal with holes drilled in, you get lattice-like internal structures, curved supports that follow stress lines, and shapes that resemble bones or coral. Airbus has used generative design to produce aircraft partition walls that are 45% lighter than their conventional equivalents. NASA has 3D-printed rocket engine injectors. Lighter parts in aircraft mean less fuel burned on every flight — the environmental and commercial impact compounds over millions of flight hours.",
    hint: 'Think about what happens when you only put material exactly where the forces require it.',
  },
  {
    question: 'What does slicer software do, and how does AI improve it for home 3D printing users?',
    options: [
      'Slicer software controls the 3D scanner that creates a digital model from a physical object; AI makes the scanner faster',
      'Slicer software converts a 3D design file into layer-by-layer printing instructions; AI automatically optimises support structures and print settings so beginners get good results without expertise',
      'Slicer software manages the online marketplace where users share 3D designs; AI recommends designs based on your previous downloads',
      'Slicer software slices off failed print sections and resumes from a checkpoint; AI predicts which layers are most likely to fail',
    ],
    correctIndex: 1,
    explanation:
      "A slicer takes a 3D model file (like an STL or OBJ) and works out exactly how the printer should move, how fast, at what temperature, and where to add temporary support structures for overhanging parts. Getting these settings right used to require significant experience — wrong settings mean failed prints. Modern slicers like PrusaSlicer and Bambu Studio increasingly use AI and machine learning to recommend optimal settings based on the object's geometry and the material being used. They can automatically generate intelligent support structures that are strong enough to hold the print but easy to remove. This has made 3D printing significantly more accessible to people with no technical background.",
    hint: 'Think about the step between having a 3D design and actually telling the printer what to do.',
  },
  {
    question: 'What is bioprinting, and what is its current realistic status?',
    options: [
      'Bioprinting is the commercial 3D printing of plant-based food products and is widely used in vegan food manufacturing today',
      'Bioprinting uses living cells as the printing material to create biological tissue; it is a real area of research but printing functional transplantable human organs is still many years away',
      'Bioprinting is a marketing term for 3D-printed biodegradable packaging used in sustainable manufacturing',
      'Bioprinting prints biological data (like DNA sequences) onto paper in a form that can be read by sequencing machines, speeding up genetic research',
    ],
    correctIndex: 1,
    explanation:
      "Bioprinting is a genuine and exciting research field. Instead of plastic or metal, bioprinters use bio-ink — a mixture of living cells, growth factors, and a supportive gel — to build biological structures layer by layer. Researchers have printed skin patches for burn victims, ear cartilage, and simple blood vessel structures that have been used in research. The goal of printing a fully functional transplantable kidney or heart would be transformative — there are over 7,000 people on the transplant waiting list in the UK at any time. However, the challenge of keeping cells alive, ensuring they connect properly (particularly blood vessels), and achieving the complexity of a real organ means this is likely at least 10 to 20 years from clinical reality, if it gets there. Current applications are in research, drug testing on tissue models, and simple structural repairs.",
    hint: "Think about the difference between what researchers are working on and what is available today.",
  },
]

export function AIAnd3DPrinting() {
  useMarkVisited('ai-and-3d-printing')

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F5A8;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and 3D printing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Generative design, custom medical implants, aerospace parts, and how AI is
            transforming what can be made — and who can make it.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-3d-printing" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-cyan-100 dark:border-cyan-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">What is 3D printing and why does AI matter?</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            3D printing — technically called additive manufacturing — builds physical objects layer by layer from a digital design file. A printer head deposits material (plastic, metal, resin, or even living cells) and builds up the shape from the ground up.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            For years, 3D printing was mainly useful for prototypes and hobbyist projects. AI has changed this. It can now design parts that outperform anything a human engineer would conceive, optimise printing for complex geometries, and make the technology accessible to people with no technical background.
          </p>
          <div className="space-y-2">
            {[
              'The global 3D printing market was worth around £15 billion in 2024 and is growing rapidly across manufacturing, medicine, and consumer products',
              'Airbus has used AI-designed 3D-printed components that are 45% lighter than traditional equivalents — compounding fuel savings across millions of flights',
              'Almost all custom hearing aids manufactured today are 3D-printed, replacing a manual moulding process that took weeks',
              'NASA has 3D-printed rocket engine components that would be impossible to manufacture by traditional machining',
              'Home 3D printers can now be bought for under £300, and AI-powered slicer software means beginners can produce good results without deep technical knowledge',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-cyan-600 dark:text-cyan-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Generative design — letting AI design the part</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Traditional engineering: a human designs a part and then checks whether it is strong enough, light enough, and affordable. Generative design reverses this entirely.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-indigo-50 dark:bg-indigo-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4AC;</span>
              <div>
                <p className="font-semibold text-indigo-800 dark:text-indigo-200 text-sm mb-0.5">How it works</p>
                <p className="text-indigo-700 dark:text-indigo-300 text-sm leading-relaxed">You define your constraints: this part must support 500 kg of load, it must weigh no more than 2 kg, it must fit within this bounding box, and it will be printed in titanium. The AI then explores millions of possible geometries, simulating stress and material behaviour, to find designs that meet your requirements. It removes material from every place the physics say it is not needed.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-indigo-50 dark:bg-indigo-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F9EC;</span>
              <div>
                <p className="font-semibold text-indigo-800 dark:text-indigo-200 text-sm mb-0.5">Why the results look strange</p>
                <p className="text-indigo-700 dark:text-indigo-300 text-sm leading-relaxed">Generative design outputs look nothing like traditional engineered parts. They are organic — lattices, branching struts, curved surfaces that follow stress lines. They resemble bones or coral. A human would never design something that looks like this, but the AI has found that this shape uses the minimum material to do the job. These shapes are only manufacturable by 3D printing — traditional machining cannot produce them.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-indigo-50 dark:bg-indigo-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F6E0;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-indigo-800 dark:text-indigo-200 text-sm mb-0.5">Tools available today</p>
                <p className="text-indigo-700 dark:text-indigo-300 text-sm leading-relaxed">Autodesk Fusion 360 includes generative design features accessible to individuals and small businesses. nTopology and Materialise are used by aerospace and medical device companies. The outputs feed directly into metal 3D printers (typically using laser sintering of metal powder) to produce the final part.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Medicine — the biggest human impact</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The combination of AI and 3D printing has had its deepest human impact in medicine, where personalisation is everything and traditional manufacturing struggles to deliver.
          </p>
          <div className="space-y-3">
            {[
              { icon: '&#x1F9B7;', label: 'Dental crowns and aligners', desc: "A dentist scans your tooth, AI software designs a crown that fits your exact anatomy, and it is printed and fitted in one appointment. Orthodontic aligners (like Invisalign) are individually designed by AI for each patient's teeth and 3D-printed at scale." },
              { icon: '&#x1F9B4;', label: 'Custom prosthetics', desc: "Traditional prosthetic limbs are expensive, time-consuming to fit, and made to approximate sizes. AI-assisted 3D printing produces custom sockets that fit an individual's residual limb precisely, improving comfort and function dramatically. Cost can be reduced by over 90% in some cases — transformative for patients in lower-income countries." },
              { icon: '&#x1F489;', label: 'Surgical guides and implants', desc: "3D-printed surgical guides are templates that help surgeons know exactly where to cut or drill based on a patient's CT scan. AI software designs the guide from medical imaging data. Titanium implants for facial reconstruction after injury or cancer surgery can be custom-printed to match the patient's original anatomy." },
              { icon: '&#x1F442;', label: 'Hearing aids', desc: "Almost every custom hearing aid manufactured today is 3D-printed. An audiologist scans the ear canal digitally, AI software designs the shell, and it is printed in hours. A process that once took weeks now takes a single day." },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="flex gap-3 items-start bg-rose-50 dark:bg-rose-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-rose-800 dark:text-rose-200 text-sm mb-0.5">{label}</p>
                  <p className="text-rose-700 dark:text-rose-300 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Aerospace, automotive, and industrial uses</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            In high-performance industries where every gram and every millimetre matters, AI-assisted 3D printing has become a genuine competitive advantage.
          </p>
          <div className="space-y-2">
            {[
              "Airbus produces AI-designed cabin divider panels using 3D printing — 45% lighter than conventional versions, saving significant fuel across the fleet's lifetime",
              'GE Aviation prints fuel nozzles for the LEAP jet engine as a single 3D-printed part that previously required 20 welded components — stronger, lighter, and more efficient',
              'Formula 1 teams use 3D printing with AI optimisation to produce new parts between races — sometimes overnight — iterating faster than any traditional manufacturing process allows',
              'BMW prints custom components for its i8 and other models, and uses AI to simulate how printed parts will perform before committing to production',
              'The construction industry is experimenting with AI-designed concrete structures and 3D-printed building components that reduce material use while maintaining structural integrity',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-teal-100 dark:border-teal-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Home printing and bioprinting — what is possible now</h2>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-teal-50 dark:bg-teal-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F3E0;</span>
              <div>
                <p className="font-semibold text-teal-800 dark:text-teal-200 text-sm mb-0.5">Home 3D printing today</p>
                <p className="text-teal-700 dark:text-teal-300 text-sm leading-relaxed">A decent home 3D printer costs £200 to £600. AI-powered slicer software (like Bambu Studio and PrusaSlicer) automatically generates support structures, recommends print settings for your specific object, and detects likely failure points before you start printing. Sites like Printables and Thingiverse provide millions of free designs. People print replacement parts for appliances, custom phone cases, toys, and practical household items.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-teal-50 dark:bg-teal-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F9EC;</span>
              <div>
                <p className="font-semibold text-teal-800 dark:text-teal-200 text-sm mb-0.5">Bioprinting — the future frontier</p>
                <p className="text-teal-700 dark:text-teal-300 text-sm leading-relaxed">Bioprinting uses living cells as ink to print biological tissue. Researchers have printed skin patches for burns, ear cartilage, and simple blood vessel structures. The ultimate goal — a fully printable transplant organ — would be transformative (over 7,000 people are on the UK transplant waiting list). However, the challenge of keeping cells alive, ensuring vascularisation (blood supply), and matching the complexity of real organs means this is likely 10 to 20 years from clinical use for major organs. Simpler applications (skin, cartilage, corneas) are closer.</p>
              </div>
            </div>
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
