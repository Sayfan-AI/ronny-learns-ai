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

const LESSON_TITLE = 'AI and education technology'

const KEY_TAKEAWAYS = [
  'Adaptive learning platforms like Century Tech and Khanmigo personalise what students study based on how they respond — moving them on when they understand and offering extra practice when they struggle.',
  'AI essay marking tools are increasingly used in exam systems, but raise concerns about whether AI can fairly assess creativity, nuance, and original argument — particularly for students from diverse backgrounds.',
  'AI exam proctoring software uses webcams and eye-tracking to detect cheating — but has faced serious criticism for racial bias in facial recognition, invasive surveillance, and penalising anxious students.',
  'The UK government funds Oak National Academy, which uses AI to help teachers generate lesson plans and resources, reducing workload for teachers in state schools.',
  'AI in education can both widen and narrow opportunity — adaptive tools can help students who lack private tutors, but require reliable devices and internet access that not all students have.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does an adaptive learning platform like Century Tech personalise learning for individual students?',
    options: [
      'A human teacher remotely monitors each student progress on a dashboard and manually adjusts the difficulty of tasks after every lesson',
      'AI analyses how a student responds to questions and adapts the sequence and difficulty of content in real time, providing extra practice where gaps are detected and advancing when mastery is shown',
      'The platform selects lessons randomly from the curriculum to ensure students are exposed to a wide variety of topics rather than repeatedly covering the same ground',
      'Students are placed in one of three ability groups at the start of term, and all students in the same group receive identical content throughout the year',
    ],
    correctIndex: 1,
    explanation:
      "Adaptive learning platforms build a model of each student's knowledge over time. Century Tech, used in thousands of UK schools, maps what students know against curriculum objectives and identifies knowledge gaps. When a student struggles with a concept, the platform serves additional practice questions designed to build understanding of the prerequisite knowledge. When a student demonstrates mastery, the platform advances to the next topic or presents more challenging questions. The AI also prioritises content for review before memory naturally decays, using spaced repetition techniques. Evidence from pilot programmes in UK schools showed improved outcomes in mathematics and reading, particularly for students who struggled to get individual attention in large classes.",
    hint: 'Think about the platform responding to what each student does, rather than following a fixed sequence.',
  },
  {
    question: 'What is the main concern about using AI to mark student essays and written assignments?',
    options: [
      'AI marking is too slow — it takes longer to process an essay than an experienced teacher and so does not save any marking time in practice',
      'AI marking systems may penalise unconventional writing styles, original arguments, and diverse linguistic backgrounds, favouring formulaic responses that match patterns in training data',
      'AI systems cannot read handwriting, so they can only be used for typed submissions, which many students and teachers find awkward and impractical',
      'The cost of AI marking software is prohibitively expensive for most schools and universities, meaning it creates inequality between well-funded and underfunded institutions',
    ],
    correctIndex: 1,
    explanation:
      "AI essay marking systems — including Turnitin's WritingMentor and various automated essay scoring tools used in standardised tests — are trained on large datasets of human-marked essays. They learn to identify features associated with high marks (complex vocabulary, logical structure, argument development). However, critics point out that training data typically overrepresents writing from majority-culture backgrounds and standardised English. Students who write in non-standard dialects, use non-Western rhetorical structures, or produce genuinely original arguments that diverge from typical patterns may be penalised. There are also concerns about whether AI can assess the quality of creative fiction or detect subtle irony and satire.",
    hint: 'Think about what kinds of writing an AI trained on typical essays might not understand or value.',
  },
  {
    question: 'What is AI exam proctoring software and what are the main criticisms of it?',
    options: [
      'Software that allows invigilators to monitor students remotely during online exams using a webcam feed, with the AI filtering out routine activity to reduce monitoring workload',
      'Software that uses AI to analyse webcam footage, eye movements, keyboard patterns, and screen activity during online exams to flag potential cheating — criticised for racial bias, false positives, and privacy invasion',
      'Software that automatically generates exam questions from course content using AI, ensuring each student receives a unique set of questions to make copying impossible',
      'An AI system that analyses historical exam results to predict which students are most likely to cheat, so invigilators can allocate their attention during physical exams more efficiently',
    ],
    correctIndex: 1,
    explanation:
      "AI proctoring tools like Proctorio, Honorlock, and ExamSoft monitor students during online exams by analysing webcam video, tracking eye movements, recording keystrokes, and detecting multiple monitor use. The AI flags behaviour it interprets as suspicious — looking away from the screen, unusual typing patterns, background noise. Several universities rapidly adopted these tools during the COVID-19 pandemic. Significant problems have been documented: facial recognition components have higher failure rates for students with darker skin, penalising them unfairly; students with anxiety disorder have been flagged for signs of stress; students without quiet private spaces at home are disadvantaged; and the constant surveillance creates significant psychological distress. Several US universities have dropped these tools following student protest and research findings.",
    hint: 'Think about who is disadvantaged by the AI\'s assumptions about what normal exam behaviour looks like.',
  },
  {
    question: 'What is Oak National Academy and how is AI used in it?',
    options: [
      'A private AI tutoring service that provides personalised one-to-one tutoring to secondary school students in the UK for a monthly subscription fee',
      'A government-funded platform providing free curriculum resources to UK state schools, which uses AI to help teachers generate lesson plans, adapt materials, and reduce workload',
      'An AI system developed by Ofsted that automatically generates school inspection reports based on student test scores and attendance data',
      'A university-based research project that uses AI to analyse national exam results and identify which teaching approaches produce the best outcomes across different school types',
    ],
    correctIndex: 1,
    explanation:
      "Oak National Academy was set up by the UK government during the COVID-19 pandemic to provide free online lessons for pupils when schools closed. It has since become a permanent resource, providing curriculum-aligned lessons and materials free of charge to all UK state schools. In 2023, Oak launched AI-powered teacher tools that help teachers generate lesson plans, create presentations, and adapt resources for different ability levels in a fraction of the time it would take manually. The aim is to reduce teacher workload — a significant problem in UK schools, where many teachers spend more than 50 hours per week on work including substantial planning and marking time. The tools are opt-in and the resources remain under teacher control.",
    hint: 'Think about who the primary beneficiary is — students directly, or teachers who then help students.',
  },
  {
    question: 'How can AI in education both widen and narrow educational opportunity?',
    options: [
      'AI widens opportunity only — it always helps students who lack resources because it replaces expensive private tutors with affordable digital tools that work equally well for all students',
      'AI can widen opportunity (personalised support without private tutors, more teacher time through workload reduction) but can also narrow it (requires reliable devices and internet, may disadvantage students with non-standard writing styles)',
      'AI narrows opportunity only — the platforms are developed by private companies whose primary motivation is profit, so the features that most benefit disadvantaged students are always placed behind expensive subscription tiers',
      'AI has no effect on educational inequality because all AI-based tools must be provided free of charge to schools under the UK Education Act',
    ],
    correctIndex: 1,
    explanation:
      "AI educational tools have genuine potential to reduce inequality. Adaptive learning platforms can provide the kind of personalised, responsive feedback previously available only through private tutoring — in principle giving state school students an equivalent experience to those with tutors. However, realising this potential requires conditions that do not exist equally for all students. The digital divide is real: around 900,000 children in the UK lack suitable devices or reliable internet at home. AI tools that advantage students who type fluently or write in standard academic English may disadvantage those from different linguistic backgrounds. Assessment systems that use AI must be audited for differential impact across student groups. The tools are not neutral — their impact depends on how they are designed, implemented, and who has access to them.",
    hint: 'Think about the conditions needed for an AI tool to actually help a disadvantaged student.',
  },
]

export function AIAndEdTech() {
  useMarkVisited('ai-and-edtech')

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4DA;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and education technology
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            AI tutors, adaptive learning, essay marking, exam surveillance, teacher
            tools, and the equity questions that matter most in UK classrooms.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-edtech" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI tutors and adaptive learning</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The most significant use of AI in education is personalised adaptive learning — systems that respond to each student individually rather than following a fixed curriculum path for everyone.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F3EB;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Century Tech (UK)</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Used in thousands of UK state schools, Century Tech maps student knowledge against the national curriculum and adapts the sequence and difficulty of content in real time. Teachers get a class-level view of where students are struggling, enabling them to intervene where most needed.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F916;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Khanmigo (Khan Academy)</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">Built on GPT-4, Khanmigo is an AI tutor that can explain concepts, walk through worked examples, answer questions, and provide practice problems with feedback. Khan Academy is free and available globally, making this level of personalised support accessible to students who would otherwise rely on private tutors.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4C8;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Tassomai</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">A UK platform used by secondary school students preparing for GCSEs, Tassomai uses spaced repetition and AI-driven question selection to help students revise effectively. Studies have shown significantly improved exam results for regular users compared to those who only used traditional revision methods.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI essay marking — promise and concerns</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI is increasingly used to provide feedback on student writing and, in some contexts, to assign marks. This is one of the most contested areas in educational AI.
          </p>
          <div className="space-y-2">
            {[
              'Turnitin\'s AI writing detection tool is used by thousands of UK universities to flag essays it suspects were written by AI rather than students',
              'Automated essay scoring systems are used in some standardised tests and increasingly in formative (non-final) assessment contexts',
              'AI can provide immediate, detailed feedback on grammar, structure, and argument — far faster than waiting for a teacher to mark a class set',
              'Concerns include: AI penalises unconventional writing styles and non-standard English, it may not appreciate genuine originality, and students from diverse backgrounds may be systematically disadvantaged',
              'Several UK universities have had to apologise to students who were wrongly flagged as having used AI tools to write assignments',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI exam surveillance — the proctoring controversy</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            During COVID-19 lockdowns, universities worldwide adopted AI-powered remote exam proctoring. The fallout has prompted significant debate about surveillance in education.
          </p>
          <div className="space-y-3">
            {[
              { icon: '&#x1F4F9;', label: 'How it works', text: 'Software like Proctorio monitors students via webcam, tracking eye movements, head position, keyboard behaviour, and screen content. The AI flags behaviour it classifies as suspicious and generates a report for a human reviewer.' },
              { icon: '&#x1F3C0;', label: 'The racial bias problem', text: 'Facial recognition components in proctoring software have documented higher error rates for students with darker skin tones, leading to more frequent false flags and distressing interruptions during exams. This has been characterised as algorithmic discrimination.' },
              { icon: '&#x1F3E0;', label: 'The home environment problem', text: 'Proctoring software expects a quiet, well-lit room with no other people present. Many students, particularly those from lower-income backgrounds, share rooms with family members and cannot meet these requirements — effectively penalising them for their home circumstances.' },
              { icon: '&#x1F4C4;', label: 'The mental health impact', text: 'Research found that AI surveillance during exams significantly increases anxiety, particularly for students already prone to test anxiety. Some students reported performance significantly worse than their classroom work because of the monitoring.' },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">{label}</p>
                  <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Oak National Academy — AI for teachers</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            One of the most promising applications of AI in UK education is reducing teacher workload by automating routine planning and resource creation tasks.
          </p>
          <div className="space-y-2">
            {[
              'Oak National Academy is a government-funded platform providing free curriculum resources to all UK state schools',
              'In 2023, Oak launched AI tools that help teachers generate lesson plans, slides, quizzes, and worksheets aligned to national curriculum requirements',
              'Teachers report saving several hours per week on planning when using the AI tools, which can generate a first draft of a full lesson plan in minutes',
              'Resources remain under teacher control — the AI generates a starting point, the teacher adapts and improves it',
              'The UK Department for Education has committed to expanding AI-powered teacher support tools as part of its EdTech strategy',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Equity and access — who benefits?</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI in education raises a fundamental equity question: does it help those who need it most, or widen existing advantages?
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x2705;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">How AI can reduce inequality</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Adaptive learning platforms provide personalised support that was previously only available through private tutors — potentially levelling the playing field between students from different economic backgrounds. Free tools like Khan Academy bring this to anyone with an internet connection.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x26A0;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">How AI can widen inequality</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">Around 900,000 children in the UK lack suitable devices or reliable internet at home. Premium AI tutoring tools are only available to those who can afford them. AI systems that disadvantage non-standard writing styles or diverse linguistic backgrounds may systematically underserve students from less privileged backgrounds.</p>
              </div>
            </div>
          </div>
        </div>

        <LessonNote lessonId="ai-and-edtech" />

        <Quiz questions={quizQuestions} lessonId="ai-and-edtech" />

        <ReviewLaterButton lessonId="ai-and-edtech" />

        <LessonRating lessonId="ai-and-edtech" />

        <LessonFeedback lessonId="ai-and-edtech" />

        <RelatedLessons currentId="ai-and-edtech" />

        <NextLesson currentId="ai-and-edtech" />

      </div>
    </div>
  )
}
