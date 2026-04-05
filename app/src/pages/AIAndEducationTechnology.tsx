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
  'Adaptive learning platforms use AI to adjust the difficulty and pace of lessons to match each individual student — if you struggle with fractions, the system gives you more practice on fractions before moving on.',
  "Khan Academy's Khanmigo and Duolingo's AI features are real examples of AI tutors available now — they explain concepts, answer questions, and give personalised feedback.",
  'AI can mark written essays and give detailed feedback almost instantly, which would take a teacher hours — but AI marking raises concerns about what it might miss.',
  'The biggest risk with EdTech AI is over-reliance: students who use AI tools as shortcuts rather than learning aids may develop surface knowledge without deep understanding.',
  'UK data protection law applies strictly to EdTech tools used with children — schools must check that any AI tool they use handles pupil data lawfully under UK GDPR.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does an adaptive learning platform do differently from a standard online course?',
    options: [
      'It replaces teachers entirely and assesses students using only multiple-choice tests',
      'It adjusts the difficulty, pace, and content of lessons in real time based on how each student is performing',
      'It creates a standardised learning path that all students must follow in exactly the same order and at the same speed',
      'It connects students with human tutors via video call whenever they get a question wrong',
    ],
    correctIndex: 1,
    explanation:
      'Adaptive learning is the key distinction. Platforms like Century Tech and Sparx Maths analyse how each student answers questions — how long they take, which mistakes they make, which concepts they revisit. The AI uses this data to personalise what each student sees next. A student who quickly grasps multiplication might skip ahead to long division; one who struggles might receive additional explanation or easier stepping-stone questions. This is something a teacher with 30 students cannot realistically do for every pupil simultaneously.',
    hint: 'Think about how the platform adjusts to each individual student.',
  },
  {
    question: "What is Khan Academy's Khanmigo?",
    options: [
      'An AI system that automatically grades all homework and gives teachers a class performance report',
      'An AI tutor built into Khan Academy that students can have conversations with — asking questions and working through problems with guidance',
      'A Khan Academy tool that uses AI to write lesson plans and quiz questions for teachers',
      'A parental monitoring system that tracks how much time children spend studying',
    ],
    correctIndex: 1,
    explanation:
      "Khanmigo is Khan Academy's AI-powered learning assistant. Unlike a search engine, students can have back-and-forth conversations with it — asking it to explain a concept differently, to walk them through a maths problem step by step, or to give feedback on writing. Khan Academy designed Khanmigo not to simply give the answer, but to guide students towards working it out themselves — modelling how a good human tutor would behave.",
    hint: 'Think about a conversational AI assistant rather than a content library.',
  },
  {
    question: 'What is one concern specifically about AI marking of essays?',
    options: [
      'AI markers are much slower than human markers because they have to read every word carefully',
      'AI markers may reward essays that follow predictable patterns — potentially penalising creative, unconventional, or culturally specific writing',
      'AI markers only work with essays written in formal academic English and cannot process colloquial language',
      'AI markers always give higher grades than human teachers, unfairly inflating student scores',
    ],
    correctIndex: 1,
    explanation:
      "AI essay marking tools are trained on examples of essays that received high scores from human markers. They tend to reward the stylistic patterns those essays shared: clear structure, formal vocabulary, specific argumentative moves. Research has found that AI markers can give high scores to fluent-sounding nonsense and may score essays by students from non-dominant cultural backgrounds lower. Human readers bring contextual understanding that AI markers may miss.",
    hint: 'Think about what patterns AI might have learned to reward.',
  },
  {
    question: 'What UK regulation governs how schools must handle student data when using EdTech AI tools?',
    options: [
      'The Schools Data Protection Act 2018, which sets specific rules for schools sharing pupil data with technology providers',
      'UK GDPR, which requires schools to ensure any EdTech tool processes pupil data lawfully, fairly, and with appropriate safeguards',
      'The Digital Education Standards Framework, a voluntary code of conduct that is not legally binding',
      "The Children's Online Privacy Act, an American law that UK schools must comply with when using American EdTech tools",
    ],
    correctIndex: 1,
    explanation:
      "UK GDPR applies to all organisations that process personal data, including schools and the EdTech companies they work with. Because pupils are children, extra protections apply. Schools must be able to demonstrate a lawful basis for sharing the data, ensure data is not used for unexpected purposes, and confirm appropriate security measures are in place. The ICO has published specific guidance for schools on using EdTech tools.",
    hint: 'Think about the main UK data protection law.',
  },
]

export function AIAndEducationTechnology() {
  useMarkVisited('ai-and-education-technology')

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4DA;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and education technology
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            AI tutors, adaptive learning platforms, instant essay feedback, and the risks of
            letting algorithms decide how we learn.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-education-technology" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Why education is changing</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            For most of history, education meant a teacher standing in front of a room teaching the same lesson to everyone. AI is making it possible to give every student a lesson that adapts to exactly where they are right now.
          </p>
          <div className="space-y-2">
            {[
              'The UK EdTech market is worth over £3.5 billion and growing — schools, colleges, and universities all use AI-powered tools',
              'Duolingo has over 500 million registered users worldwide — more than the population of the United States learning a new language for free',
              'Khan Academy serves over 150 million learners globally with free lessons in maths, science, history, and more',
              'Century Tech, a UK-built adaptive learning platform, is used in hundreds of UK schools',
              "The UK government's EdTech strategy explicitly encourages AI to reduce teacher workload and personalise learning",
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Adaptive learning — the AI that teaches to you</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Traditional teaching assumes every student is at the same place at the same time. Adaptive learning platforms start from a different assumption: every student is different, and the lesson should fit the learner.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CA;',
                label: 'How it works',
                text: "The platform monitors every answer — not just whether it's right or wrong, but how quickly you answer, whether you hesitate, and whether you improve after a hint. This builds a model of exactly what you know and do not know.",
                color: 'green',
              },
              {
                icon: '&#x1F3AF;',
                label: 'What it changes',
                text: "A student who already understands fractions does not sit through ten practice questions — the AI skips ahead. A student who struggles gets more examples and easier stepping-stone questions. Each student's path through the curriculum is unique.",
                color: 'green',
              },
              {
                icon: '&#x1F4CB;',
                label: 'Real examples',
                text: 'Sparx Maths assigns personalised homework to each pupil — different questions at different levels, all targeting the same curriculum objective. Century Tech does the same across multiple subjects. Both are widely used in UK secondary schools.',
                color: 'green',
              },
            ].map(({ icon, label, text, color }) => (
              <div key={label} className={`flex gap-3 items-start bg-${color}-50 dark:bg-${color}-950 rounded-xl p-3`}>
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className={`font-semibold text-${color}-800 dark:text-${color}-200 text-sm mb-0.5`}>{label}</p>
                  <p className={`text-${color}-700 dark:text-${color}-300 text-sm leading-relaxed`}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-violet-100 dark:border-violet-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI tutors — having a conversation about learning</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The biggest recent development in EdTech is AI tutors that students can have real conversations with. These go far beyond multiple-choice questions.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-violet-50 dark:bg-violet-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F916;</span>
              <div>
                <p className="font-semibold text-violet-800 dark:text-violet-200 text-sm mb-0.5">Khanmigo by Khan Academy</p>
                <p className="text-violet-700 dark:text-violet-300 text-sm leading-relaxed">
                  Built on large language model technology, Khanmigo acts like a Socratic tutor — it does not give you the answer straight away. Instead it asks guiding questions: "What do you think the first step should be?" This approach is deliberately modelled on how good human tutors teach.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-violet-50 dark:bg-violet-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F426;</span>
              <div>
                <p className="font-semibold text-violet-800 dark:text-violet-200 text-sm mb-0.5">Duolingo&rsquo;s AI features</p>
                <p className="text-violet-700 dark:text-violet-300 text-sm leading-relaxed">
                  Duolingo uses AI to personalise when it reviews vocabulary with you — a technique called spaced repetition. It also has roleplay conversations where an AI character plays the part of a shopkeeper or friend so you can practise real-world dialogue in a new language.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-violet-50 dark:bg-violet-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x270D;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-violet-800 dark:text-violet-200 text-sm mb-0.5">AI writing feedback</p>
                <p className="text-violet-700 dark:text-violet-300 text-sm leading-relaxed">
                  Tools like Grammarly, Turnitin&rsquo;s AI writing assistant, and Microsoft Copilot can give detailed feedback on structure, argument, and language within seconds. For students who would otherwise wait days for teacher feedback, this is a significant advantage.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">What teachers think — colleague or replacement?</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Teachers have mixed views on AI in education. Many welcome the practical help. Others worry about what gets lost when algorithms take over parts of their role.
          </p>
          <div className="space-y-2">
            {[
              'AI can mark routine homework quickly, freeing teachers to spend more time on discussion, mentoring, and supporting students who need extra help',
              'Planning lessons and writing reports are time-consuming tasks — AI writing tools can significantly reduce this burden',
              'Concerns exist about students submitting AI-generated work as their own — the boundary between AI assistance and academic dishonesty is genuinely unclear',
              "Teachers bring human judgement that AI lacks: recognising when a student is anxious, bored, or struggling for reasons the data does not show",
              'The National Education Union has called for clear guidelines on AI use in schools, arguing that staff must be involved in decisions about which tools are adopted',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-amber-600 dark:text-amber-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Risks and concerns</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            EdTech AI brings genuine benefits, but there are real concerns that educators, parents, and policymakers are grappling with.
          </p>
          <div className="space-y-3">
            {[
              {
                title: 'Over-reliance',
                detail: 'If students use AI to answer every question rather than as a tool to support thinking, they may develop surface familiarity without deep understanding. The skill of working through confusion — which builds resilience and genuine comprehension — risks being bypassed.',
              },
              {
                title: 'Data privacy for children',
                detail: "EdTech platforms collect enormous amounts of data about children's learning behaviours. This data is valuable commercially and requires careful legal safeguards. Parents often have no visibility into what is collected or how it is used.",
              },
              {
                title: 'Algorithmic bias in assessments',
                detail: 'If AI systems are trained primarily on data from certain student populations, they may perform less well for students from different backgrounds, languages, or learning styles — potentially widening attainment gaps rather than closing them.',
              },
              {
                title: 'The digital divide',
                detail: 'AI EdTech tools often require reliable broadband, up-to-date devices, and paid subscriptions. Students from lower-income households may lack access, potentially widening existing educational inequalities.',
              },
            ].map(({ title, detail }) => (
              <div key={title} className="bg-red-50 dark:bg-red-950 rounded-xl p-3">
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-1">{title}</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <LessonNote lessonId="ai-and-education-technology" lessonTitle={LESSON_TITLE} />

        <Quiz questions={quizQuestions} lessonId="ai-and-education-technology" />

        <ReviewLaterButton lessonId="ai-and-education-technology" />
        <LessonRating lessonId="ai-and-education-technology" />
        <LessonFeedback lessonId="ai-and-education-technology" />

        <RelatedLessons currentId="ai-and-education-technology" />

        <NextLesson currentId="ai-and-education-technology" />
      </div>
    </div>
  )
}
