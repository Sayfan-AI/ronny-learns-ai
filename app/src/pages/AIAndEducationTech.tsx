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
  "AI tutors like Khan Academy's Khanmigo and Duolingo's AI-powered lessons adapt in real time to what a student understands — slowing down when they struggle and moving faster when they are ready, something a single teacher in a class of thirty cannot easily do.",
  'Adaptive learning platforms track every question answered, every mistake made, and every concept revisited. Over time they build a precise picture of what each student knows and does not know, then personalise what comes next.',
  'Automated essay marking tools can give instant feedback on grammar, structure, and argument — useful for drafting practice, though they cannot yet replace a teacher\'s understanding of creativity and critical depth.',
  'The risk of over-reliance is real: students who let AI complete their work rather than struggling through it themselves may find they have not actually learned anything. The challenge for schools is distinguishing support from shortcut.',
  'The UK EdTech sector is growing fast — government-backed schemes like Oak National Academy now use AI features, and the DfE has published guidance on how schools should approach AI tools in the classroom.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does an adaptive learning platform personalise lessons for each student?',
    options: [
      'It shows every student the same content but lets them choose their own order of topics from a menu',
      'It tracks what each student gets right and wrong, builds a model of their knowledge, and adjusts which concepts and questions come next accordingly',
      'It assigns students to ability groups at the start of the year based on a single placement test, then keeps them in that group',
      'It gives students unlimited attempts at the same question until they get it right, then moves them on automatically',
    ],
    correctIndex: 1,
    explanation:
      "Adaptive learning platforms like Century Tech, Knewton, and DreamBox collect thousands of data points as a student works — which questions they answer correctly, how long they take, which topics they skip back to, and which explanations they read more than once. A model of each student's knowledge is built and updated continuously. The platform then selects the next concept or question to maximise learning — neither too easy (boring) nor too hard (discouraging). This is sometimes called a 'knowledge graph' approach.",
    hint: 'Think about what the platform tracks while you work.',
  },
  {
    question: "What does Khanmigo, Khan Academy's AI tutor, do when a student gives a wrong answer?",
    options: [
      'It immediately shows the correct answer with a full worked solution so the student can copy the right method',
      'It asks guiding questions to help the student figure out what went wrong themselves, rather than just telling them the answer',
      'It skips the question and moves to an easier version of the same topic to avoid discouraging the student',
      "It sends an automated email to the student's parent or teacher alerting them to the error",
    ],
    correctIndex: 1,
    explanation:
      "Khanmigo is designed around the Socratic method — it asks questions rather than giving answers. If you get a maths problem wrong, Khanmigo might ask 'what did you do in the first step?' or 'can you think of a similar problem you have solved before?'. This approach is based on evidence from learning science: struggling with a problem and working through it yourself leads to better retention than being shown the answer. Just giving students the answer quickly is efficient in the short term but poor for long-term learning.",
    hint: 'Think about the Socratic method — helping someone think rather than telling them.',
  },
  {
    question: 'Which of the following is the most significant risk of students using AI writing tools for schoolwork?',
    options: [
      "AI writing tools always produce grammatically perfect text, which might make students feel their own writing is not good enough",
      'Students who use AI to produce work they have not written themselves miss the cognitive effort that builds actual writing skill and understanding',
      'AI tools are too expensive for most students to access, creating inequality between those whose families can afford them and those who cannot',
      'AI writing tools sometimes include factual errors, meaning students who submit AI work may include incorrect information without realising',
    ],
    correctIndex: 1,
    explanation:
      "Learning to write well requires the effortful process of deciding what to say, organising ideas, finding the right words, and revising. If AI does all of that, the student never develops those skills — they just get a grade for work they did not produce. This is distinct from using AI for feedback and drafting support, which can genuinely help. The distinction most educators draw is between AI as a thinking partner (helpful) versus AI as a ghostwriter (harmful to learning). Factual errors are a real issue too, but the learning-bypass problem is considered the more fundamental concern.",
    hint: 'Think about what actually happens in the brain when you write something yourself.',
  },
  {
    question: 'What is the main purpose of automated essay feedback tools used in schools?',
    options: [
      'To replace teacher marking entirely, freeing up teacher time for activities that cannot be automated',
      'To give students instant, detailed feedback on drafts so they can revise and improve before submitting final work to a teacher',
      "To detect plagiarism by comparing student work against a database of published texts and other students' submissions",
      'To generate model answers that students can use as templates for their own essays',
    ],
    correctIndex: 1,
    explanation:
      "The most educationally valuable use of automated essay feedback (tools like Turnitin's Draft Coach or Grammarly Education) is in the drafting process. A student writes a first draft, gets automated feedback on structure, clarity, grammar, and argument, revises, and submits improved work to their teacher. This mirrors how professional writers use editors — multiple revision cycles lead to better work. Automated tools cannot replace a teacher's judgement on the quality of ideas or the depth of analysis, but they can handle surface-level feedback at scale, freeing teachers to focus on higher-level discussion.",
    hint: 'Think about when in the writing process automated feedback is most useful.',
  },
  {
    question: "What does the UK government's Oak National Academy offer in the context of AI and education?",
    options: [
      "A platform that uses AI to automatically write personalised lesson plans for every teacher in England based on their school's exam results",
      'Free AI-assisted lesson resources, including lesson plans and presentation slides created with AI tools, freely available to all UK teachers',
      'An AI system that monitors student attention during video lessons and reports disengaged students to their teachers',
      'A national database of AI-written essays in every GCSE subject that teachers can use as marking exemplars',
    ],
    correctIndex: 1,
    explanation:
      "Oak National Academy is a government-funded organisation that provides free teaching resources to UK schools. In 2023 and 2024 it began using AI tools to accelerate the creation of lesson plans, worksheets, and presentation slides, releasing these freely to teachers across England. The idea is to reduce teacher workload — a significant issue in UK education — by letting AI draft resources that teachers can review and adapt rather than creating from scratch. The Department for Education has also published guidance on responsible AI use in schools, trying to help teachers and school leaders navigate both the opportunities and the risks.",
    hint: 'Think about what would help a time-pressured teacher most.',
  },
]

export function AIAndEducationTech() {
  useMarkVisited('ai-and-education-tech')

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4DA;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and education technology
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            AI tutors that adapt to every learner, platforms that know exactly where you are stuck,
            and the big question: is AI in schools helping students learn or helping them avoid learning?
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-education-tech" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The problem AI is trying to solve in education</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            A teacher in a class of thirty cannot give each student individual attention. The student who needs the explanation slowed down and repeated differently gets the same lesson as the student who already understood it five minutes ago. This has always been a fundamental limitation of classroom teaching.
          </p>
          <div className="space-y-2">
            {[
              'One in five children in the UK leaves primary school without meeting the expected standard in reading — often because early gaps were not caught and addressed quickly enough',
              'Private tutoring costs around £30 to £60 per hour in the UK — inaccessible to most families, creating a clear inequality in educational outcomes',
              'Research consistently shows that one-to-one tutoring is the single most effective way to improve attainment — the problem is scaling it',
              'AI tutors aim to provide personalised, one-to-one-style teaching at near-zero cost per student, making this level of support available to everyone',
              'The UK EdTech market was worth £3.9 billion in 2023 and is expected to more than double by 2030',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Adaptive learning platforms</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The most powerful EdTech tools do not just deliver content — they constantly adjust what they show you based on what you know.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F9E0;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Century Tech (UK)</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Used by thousands of UK schools, Century builds a knowledge graph of each student — tracking which concepts they have mastered and which have gaps. It suggests what to study next based on where you are weakest and uses spaced repetition (returning to things you are about to forget) to make learning stick. Teachers get a dashboard showing exactly where each student in their class is struggling.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F98C;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Duolingo</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Duolingo's AI tracks which words and grammar rules you get wrong most often and serves them up again more frequently. It also adapts lesson difficulty in real time and uses engagement data from 500 million users to continuously improve which teaching methods work best. Its AI-powered roleplay feature lets learners have conversations with AI characters in the language they are learning.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4D0;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">DreamBox (maths)</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">DreamBox analyses how students solve problems — not just whether the final answer is right but how they reached it, including which strategies they tried and where they got stuck. It adjusts lesson content based on reasoning patterns, which is more powerful than only tracking correct answers.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI tutors and the Socratic approach</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Simply giving students the right answer is not good teaching. The best AI tutors are designed to help students think, not think for them.
          </p>
          <div className="bg-purple-50 dark:bg-purple-950 rounded-xl p-4 mb-4">
            <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">
              <span className="font-semibold">Khanmigo</span> — Khan Academy's AI tutor — is built around a simple rule: it will not just tell you the answer. Instead it asks questions that guide you to figure it out yourself. If you are stuck on a maths problem, it might ask "what information do we have?" or "what would happen if you tried this step?". This mirrors what the best human tutors do and produces better learning outcomes than immediate answer-giving.
            </p>
          </div>
          <div className="space-y-2">
            {[
              'Khanmigo can tutor across subjects — maths, science, history, writing — and also act as a debate partner, asking students to argue a position and pushing back to develop their thinking',
              "It can help teachers by generating lesson plans, creating differentiated versions of the same exercise for different ability levels, and suggesting discussion questions",
              "The system refuses to write essays for students — if asked to write a student's essay, it will offer to help them plan it and give feedback on drafts instead",
              'Khan Academy makes Khanmigo free for US teachers and is expanding internationally',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-purple-600 dark:text-purple-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The over-reliance problem</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI in education comes with a genuine risk: students who use it as a shortcut rather than a scaffold may end up learning less, not more.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x26A0;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">The ghostwriting problem</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">If a student uses ChatGPT to write their essay rather than using it for feedback on their own draft, they get a grade without developing the thinking. Schools are struggling to detect this — AI detection tools are unreliable, and the solution may be more about assessment design (asking for things AI cannot easily fake) than detection.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F9E0;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">Cognitive offloading</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">There is evidence that outsourcing mental effort to tools reduces the development of those mental skills. Students who always use a calculator for simple arithmetic become less confident with numbers. Students who always ask AI to summarise text may not develop strong reading comprehension. The question is whether AI tools are replacing thinking or augmenting it.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-amber-50 dark:bg-amber-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4A1;</span>
              <div>
                <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm mb-0.5">What good use looks like</p>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">Good use of AI in education involves students doing the thinking and using AI to get feedback, unstick themselves when genuinely stuck, or explore ideas further. Bad use involves giving AI the task and submitting the output. Most educators agree the distinction is real — but enforcing it requires both good assessment design and digital literacy education so students understand why the shortcut is self-defeating.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-teal-100 dark:border-teal-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI in UK schools</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            UK schools and the government are navigating AI in education in real time — trying to take advantage of genuine benefits while managing the risks.
          </p>
          <div className="space-y-2">
            {[
              'The Department for Education published guidance in 2023 on using generative AI in education — recommending schools develop a clear AI policy and focus on AI literacy for all students',
              'Oak National Academy now uses AI to create free lesson resources for teachers, aiming to reduce the workload of lesson planning and resource creation',
              'Many schools have moved to oral assessments and in-class written work to counter AI ghostwriting, with exam boards reviewing assessment formats',
              'Ofsted inspections now look at how schools are preparing students to understand and critically evaluate AI — it is becoming part of the digital skills curriculum',
              'The UK AI Safety Institute is examining risks of AI in education specifically, including data privacy, algorithmic bias in assessment tools, and the long-term impact on critical thinking',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-teal-600 dark:text-teal-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-teal-50 dark:bg-teal-950 rounded-xl p-4">
            <p className="text-teal-700 dark:text-teal-300 text-sm leading-relaxed">
              <span className="font-semibold">The key question for the next decade:</span> Can AI help close the attainment gap between disadvantaged students and their better-off peers by providing personalised tutoring that private school students already benefit from — or will the AI advantage mainly flow to those who already have advantages?
            </p>
          </div>
        </div>

        <LessonNote lessonId="ai-and-education-tech" />
        <ReviewLaterButton lessonId="ai-and-education-tech" />

        <Quiz lessonId="ai-and-education-tech" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-education-tech" />
        <LessonFeedback lessonId="ai-and-education-tech" />

        <RelatedLessons currentId="ai-and-education-tech" />

        <NextLesson currentId="ai-and-education-tech" />

      </div>
    </div>
  )
}
