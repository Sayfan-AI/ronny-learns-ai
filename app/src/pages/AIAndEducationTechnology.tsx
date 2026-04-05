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
  'AI tutors and adaptive learning platforms adjust the difficulty and pace of lessons in real time based on how you are doing — meaning every student gets a personalised path through the material rather than one-size-fits-all teaching.',
  "Tools like Grammarly, Turnitin, and Khanmigo (Khan Academy's AI tutor) are already used in millions of classrooms — helping students improve writing, detecting plagiarism, and answering curriculum questions with detailed explanations.",
  'AI can detect when a student is struggling before a human teacher notices — using data from typing speed, number of retries, and time spent on a question to flag who needs extra support.',
  'Critics worry that AI in education encourages over-reliance: students who use AI to write their essays may never develop the writing skills themselves, and schools in the UK are still working out where the lines should be drawn.',
  'The UK EdTech sector is worth over £3.5 billion and growing fast — but access is unequal. Students in well-funded schools are far more likely to benefit from AI learning tools than those in under-resourced areas.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does an adaptive learning platform do that a traditional textbook cannot?',
    options: [
      'It replaces the teacher entirely, delivering all lessons and assessments automatically without any human involvement',
      "It adjusts the difficulty, sequence, and style of content in real time based on each student's performance and learning pace",
      'It generates printed worksheets customised to each student and posts them home automatically each week',
      'It connects students with professional tutors in other countries via live video call, available 24 hours a day',
    ],
    correctIndex: 1,
    explanation:
      'Adaptive learning platforms like Century Tech and Knewton analyse every response a student gives — not just whether it was right or wrong, but how quickly they answered, how often they retried, and which types of questions trip them up. The system then adjusts what comes next: easier reinforcement if the student is struggling, harder challenges if they are breezing through. This is fundamentally different from a textbook, which presents the same content to everyone in the same order. Human teachers can do this too, but only for small groups — AI can do it simultaneously for thousands of students.',
    hint: 'Think about what the word "adaptive" means.',
  },
  {
    question: "How does Khanmigo, Khan Academy's AI tutor, differ from just giving a student the answer?",
    options: [
      'Khanmigo refuses to discuss any topic until the student has watched at least three video lessons on the subject first',
      'Khanmigo uses the Socratic method — asking guiding questions to lead the student to figure out the answer themselves, rather than simply stating it',
      'Khanmigo provides the correct answer immediately but requires the student to copy it out by hand three times before moving on',
      "Khanmigo contacts the student's teacher by email whenever it detects that the student is stuck, triggering a human intervention",
    ],
    correctIndex: 1,
    explanation:
      "Khanmigo, built by Khan Academy using GPT-4, is specifically designed not to just hand students the answer. Instead it asks questions like 'What do you think the first step might be?' or 'What happens if you try multiplying both sides?' — a teaching technique known as the Socratic method. The goal is to develop the student's ability to think through problems, not just to get the right answer quickly. This is a deliberate design choice rooted in educational research showing that students retain knowledge better when they work it out themselves. Simply telling someone the answer rarely results in lasting learning.",
    hint: 'Think about what approach helps students actually learn rather than just get answers.',
  },
  {
    question: 'What concern do UK schools and universities most commonly raise about AI writing tools like ChatGPT?',
    options: [
      'That ChatGPT is too expensive for schools to afford and the subscription costs are creating inequality between wealthy and less wealthy institutions',
      'That students may use AI to write their assignments for them, meaning they never develop the writing, critical thinking, and research skills the work was designed to build',
      "That ChatGPT produces content in American English, which conflicts with the UK curriculum's emphasis on British spelling and grammar conventions",
      'That the data centres running ChatGPT consume too much electricity, and schools should not use tools with a large carbon footprint',
    ],
    correctIndex: 1,
    explanation:
      'The core worry for UK educators is academic integrity and the development of fundamental skills. When a student submits an essay written by ChatGPT, the student has bypassed the process that builds their ability to research, organise arguments, and express ideas in writing. Universities and schools are responding in different ways: some ban AI tools outright, others require students to disclose AI use, and others have redesigned assessments to focus on in-person tasks, discussions, or portfolios of work that are harder to outsource. The challenge is that AI tools are so capable and so widely available that blanket bans are very difficult to enforce.',
    hint: 'Think about what skills the assignment was supposed to develop.',
  },
  {
    question: "What does AI-powered plagiarism detection software like Turnitin's AI detector do?",
    options: [
      'It searches every document on the internet to find the exact source a student copied from, then provides a link to the original page',
      'It analyses patterns in the writing — such as sentence structure, word choice, and stylistic consistency — to estimate the likelihood that AI generated some or all of the text',
      'It compares the submitted work against a database of every essay ever submitted to Turnitin by students around the world to find identical passages',
      'It requires the student to complete a live oral examination immediately after submitting their written work to verify they understand what they wrote',
    ],
    correctIndex: 1,
    explanation:
      'AI detectors like Turnitin\'s look at statistical patterns in the text. AI-generated writing tends to be more predictable — it uses common words and constructions more consistently than human writing, which is more varied and sometimes deliberately unusual. The detector calculates a "perplexity" score (how surprising the word choices are) and a "burstiness" score (how much variation there is between sentences). Human writers naturally vary their sentence length and complexity; AI tends to be more uniform. However, these detectors are not perfect — they can flag human writing as AI-generated and miss well-disguised AI output — which is why most institutions use them as a starting point for a conversation, not as definitive proof of cheating.',
    hint: 'Think about how AI writing differs statistically from human writing.',
  },
  {
    question: 'Why is access to AI education technology considered an equity issue in the UK?',
    options: [
      'Because AI tutoring apps are only available in English, disadvantaging students who speak other languages at home',
      "Because well-funded schools can afford AI learning platforms and tools that give their students a measurable advantage, while under-resourced schools cannot, widening the attainment gap",
      'Because AI tools are only allowed in grammar schools and academies, not in comprehensives, due to regulatory restrictions on their use in state education',
      'Because students in cities have faster internet connections that make AI tools load more quickly, giving them a speed advantage in timed tests',
    ],
    correctIndex: 1,
    explanation:
      'This is known as the "AI divide" in education. Schools in wealthier areas, or with larger per-pupil budgets, can subscribe to platforms like Century Tech, Educake, or Carousel Learning — tools that provide personalised practice and detailed analytics for teachers. Schools with tighter budgets cannot. Research consistently shows that personalised practice and timely feedback improve outcomes, so students with access to AI tools may advance faster than those without. This does not necessarily mean AI tools are good or bad for education overall — but it does mean that unequal access to them could widen the existing attainment gap between disadvantaged and advantaged students, which is a serious concern for UK education policy.',
    hint: 'Think about what happens when a powerful learning tool is not available equally to everyone.',
  },
]

export function AIAndEducationTechnology() {
  useMarkVisited('ai-and-education-technology')

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4BB;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and education technology
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            AI tutors, adaptive learning platforms, personalised feedback, the risks of over-reliance,
            and the UK EdTech landscape.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-education-technology" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The classroom is changing</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            For most of the 20th century, teaching looked the same: one teacher, thirty students, a textbook, and a chalkboard. AI is beginning to change that — and not always in the ways you might expect.
          </p>
          <div className="space-y-2">
            {[
              'Over 60% of UK schools now use some form of EdTech tool in the classroom — up from under 30% before the pandemic',
              'Khan Academy, which offers free courses to anyone in the world, has over 100 million registered users',
              'GCSE students in England spend an estimated 2.5 hours per week using online learning platforms outside school',
              'The UK EdTech sector was valued at £3.5 billion in 2023 and is projected to reach £7 billion by 2028',
              'UNESCO estimates that 300 million children worldwide have no access to the internet — meaning AI learning tools will not reach them',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Adaptive learning — teaching that adjusts to you</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The most powerful shift in AI education is not AI tutors that talk to you — it is platforms that track exactly what you know and what you do not, then adjust every lesson accordingly.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CA;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Century Tech</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Used in hundreds of UK schools, Century analyses every answer a student gives — including how long they took and how many attempts they needed. It identifies knowledge gaps and automatically adds revision material for those specific gaps. Teachers get a dashboard showing exactly which students are struggling with which concepts, so they can target their support where it is most needed.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F9E0;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Khanmigo — the Socratic AI tutor</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Khan Academy's AI tutor, powered by GPT-4, deliberately refuses to just give students the answer. Instead it asks guiding questions — "What do you think happens when you add these two fractions?" — leading students to work out the answer themselves. This Socratic approach is designed to build genuine understanding, not just correct answers. It can tutor students in maths, science, history, and reading at any level.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x270F;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">AI writing feedback</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Tools like Grammarly and Hemingway App give instant feedback on writing style, grammar, and clarity. More advanced platforms like NoRedInk use AI to generate grammar exercises targeted at the specific errors each student makes most often. A student who consistently confuses "fewer" and "less" gets more practice on exactly that — not a generic worksheet covering everything.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI in the UK classroom — the honest picture</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            UK schools are at very different stages of adopting AI. Some are embracing it enthusiastically; others are cautious or outright ban it.
          </p>
          <div className="space-y-3">
            {[
              { icon: '✅', title: 'What is working', text: 'Personalised practice platforms have strong evidence behind them. A 2023 Education Endowment Foundation review found that adaptive practice tools consistently improve outcomes in maths, particularly for students who are behind. Teachers report saving hours of marking time each week.' },
              { icon: '⚠️', title: 'What is worrying schools', text: 'ChatGPT and similar tools have made it trivially easy for students to have AI write their essays. UK universities are redesigning assessments, adding oral examinations, and requiring in-person written work to verify that students can actually do what their assignments claim.' },
              { icon: '💰', title: 'The inequality problem', text: 'The best AI learning platforms cost money. Schools in wealthier areas or multi-academy trusts with negotiating power can afford them. Schools in areas of deprivation often cannot. This risks widening the attainment gap that education is supposed to close.' },
              { icon: '🇬🇧', title: 'UK policy response', text: "The Department for Education published guidance in 2023 acknowledging AI's potential in education while emphasising the need for schools to make their own judgements. Ofsted is considering how AI use will factor into inspection frameworks. There is currently no national ban on AI tools in schools." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 items-start bg-purple-50 dark:bg-purple-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-0.5">{item.title}</p>
                  <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The risk of over-reliance</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI can explain any concept, solve any maths problem, write any essay, and generate any piece of code. Which raises a serious question: if students can always ask AI, will they ever learn to think for themselves?
          </p>
          <div className="space-y-2">
            {[
              'Writing an essay develops skills that are not just about the essay — organising thoughts, making arguments, and communicating clearly are skills for life. Using AI to write it skips all of that.',
              'Working through a hard maths problem builds the ability to reason under pressure. Asking AI for the answer builds nothing except the habit of asking AI.',
              'Some researchers argue the right comparison is not "AI vs. no AI" but "AI as scaffold" — using it for hints and feedback rather than complete answers, which can be genuinely helpful.',
              'The best AI tutors, like Khanmigo, are specifically designed to avoid giving direct answers because the designers understand this risk.',
              'Employers are already noticing that graduates struggle with tasks they believe AI should handle — suggesting over-reliance during education has real consequences.',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-amber-600 dark:text-amber-400 font-bold mt-0.5 flex-shrink-0">&#x2192;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <Quiz lessonId="ai-and-education-technology" questions={quizQuestions} />

        <ReviewLaterButton lessonId="ai-and-education-technology" />
        <LessonNote lessonId="ai-and-education-technology" />
        <LessonRating lessonId="ai-and-education-technology" />
        <LessonFeedback lessonId="ai-and-education-technology" />
        <RelatedLessons currentId="ai-and-education-technology" />
        <NextLesson currentId="ai-and-education-technology" />
      </div>
    </div>
  )
}
