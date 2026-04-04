import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does AI personalise learning for individual students?',
    options: [
      'By assigning the same content to all students at the same pace',
      'By adapting the difficulty, pace, and type of content based on each student\'s responses and progress',
      'By replacing teachers with automated video lectures',
      'By tracking students\' social media to understand their interests',
    ],
    correctIndex: 1,
    explanation:
      'AI-powered learning platforms like Khan Academy\'s Khanmigo or Duolingo adapt in real time to how a learner is doing. If you get something right, the system moves you to harder content. If you struggle, it gives more practice and explanations. This is called personalised or adaptive learning.',
  },
  {
    question: 'What is the main concern about students using AI to write essays for them?',
    options: [
      'AI essays are always factually incorrect',
      'It bypasses the learning process — students miss developing critical thinking, argument construction, and their own voice',
      'AI writing is illegal in all countries',
      'Teachers always know immediately when AI has been used',
    ],
    correctIndex: 1,
    explanation:
      'The concern is not just about dishonesty — it is about what students miss. Writing an essay develops critical thinking, research skills, and the ability to construct and express an argument. Using AI to do it means those skills go undeveloped, even if the submitted work looks fine.',
  },
  {
    question: 'What is the most educationally valuable way to use AI as a study tool?',
    options: [
      'Have AI summarise your textbook so you never have to read it',
      'Ask AI to complete all your assignments and submit them',
      'Use AI to explain concepts, generate practice questions, and check your understanding — while still doing the thinking yourself',
      'Only use AI to check spelling, never for content',
    ],
    correctIndex: 2,
    explanation:
      'AI is most useful as an active learning partner: explaining things in different ways, generating practice questions for self-testing, helping you understand where your reasoning went wrong. This is very different from using AI to avoid thinking — which defeats the purpose of studying.',
  },
  {
    question: 'Which skill does AI learning tools struggle to develop in students?',
    options: [
      'Memorising facts and definitions',
      'Translating between languages',
      'Critical thinking, social collaboration, and learning from human mentorship',
      'Solving mathematical equations',
    ],
    correctIndex: 2,
    explanation:
      'AI can help with many aspects of learning, but it cannot replace the social and human dimensions of education: learning to collaborate, resolve disagreements, benefit from a mentor\'s wisdom, or develop the kind of critical thinking that comes from genuine intellectual struggle in a social context.',
  },
]

export function AIAndEducation() {
  useMarkVisited('ai-and-education')
  useLessonVisit('ai-and-education')
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F393;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and education
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI is changing how we learn &mdash; personalised tutoring, teacher tools,
            academic integrity, and what AI cannot replace.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-education" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI as a personal tutor</h2>
          <p className="text-gray-600 leading-relaxed">
            For most of history, personalised one-on-one tutoring has been a luxury only wealthy
            families could afford. AI is beginning to change that.
          </p>
          <p className="text-gray-600 leading-relaxed">
            AI-powered learning tools can adapt to each student individually &mdash; adjusting the
            difficulty of questions, providing explanations in different ways, and giving immediate
            feedback. This is called <strong>adaptive learning</strong>, and it has been shown to
            help students learn faster than traditional one-size-fits-all teaching.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'Khan Academy\'s Khanmigo',
                text: 'An AI tutor built on top of Claude that guides students through problems with questions rather than just giving answers — mimicking the Socratic method used by the best human tutors.',
              },
              {
                label: 'Duolingo',
                text: 'The language learning app has used AI for years to adapt lessons to each learner\'s pace and weak spots. Its AI-powered exercises respond to what you struggle with, not what an average learner struggles with.',
              },
              {
                label: 'Photomath and Wolfram',
                text: 'AI that can explain step-by-step how to solve maths problems — not just giving the answer, but showing the reasoning. This helps students understand the method, not just copy the result.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-gray-800 text-sm">{label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How AI is changing what teachers do</h2>
          <p className="text-gray-600 leading-relaxed">
            AI is not replacing teachers &mdash; but it is changing how they spend their time. Many
            teachers spend hours each week on tasks that AI can help with:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CB;',
                label: 'Creating lesson materials',
                text: 'AI can generate draft lesson plans, worksheets, quiz questions, and reading materials in seconds. Teachers then review and customise these rather than starting from scratch.',
              },
              {
                icon: '&#x270F;&#xFE0F;',
                label: 'Marking and feedback',
                text: 'AI tools can give first-pass feedback on written work — flagging grammar, structure, and argument clarity. This frees teachers to focus on the deeper, more human aspects of assessment.',
              },
              {
                icon: '&#x1F4CA;',
                label: 'Spotting who needs help',
                text: 'AI learning platforms can identify students who are struggling and alert teachers — often before the student would ask for help themselves. This means support can be offered earlier.',
              },
              {
                icon: '&#x1F30D;',
                label: 'Translation and accessibility',
                text: 'AI translation tools help teachers communicate with students and parents whose first language is different from the language of instruction. AI can also help create materials for students with different learning needs.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Academic integrity: where is the line?</h2>
          <p className="text-gray-600 leading-relaxed">
            AI writing tools have created genuine challenges for schools and universities around
            the world. The questions are not simple.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'The concern',
                text: 'If a student uses AI to write their essay, they have not done the thinking, research, and writing themselves. Even if the essay is good, they have not learned what the essay was supposed to teach them. This is the core academic integrity issue.',
              },
              {
                label: 'The detection problem',
                text: 'AI detection tools exist but are unreliable — they sometimes flag human writing as AI-generated and miss AI writing. Many institutions are moving away from relying on detection.',
              },
              {
                label: 'The redesign response',
                text: 'Many educators are redesigning assessments to make AI less useful: in-person writing, oral exams, project-based work, portfolios that show process not just final product. These are arguably better assessments anyway.',
              },
              {
                label: 'The nuance',
                text: 'Using AI to brainstorm, check your grammar, or understand a concept is quite different from using AI to write your entire assignment. Most institutions are trying to articulate where these lines are — with varying success.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-amber-50 border border-amber-100 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-amber-800 text-sm">{label}</p>
                <p className="text-amber-700 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How to use AI as a study tool (the right way)</h2>
          <p className="text-gray-600 leading-relaxed">
            Used well, AI can make you a better learner. The key is using it to <em>support</em> your
            thinking, not replace it.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4AC;',
                label: 'Explain it back to me differently',
                text: 'If you do not understand something from your textbook, ask AI to explain it in simpler terms, or with a different analogy. "Explain this concept as if I am 12" is a genuinely useful prompt.',
              },
              {
                icon: '&#x2753;',
                label: 'Generate practice questions',
                text: 'Ask AI to quiz you on a topic. Active recall — testing yourself — is one of the most effective study techniques. AI can generate endless practice questions tailored to your exact topic.',
              },
              {
                icon: '&#x1F4DD;',
                label: 'Check your reasoning',
                text: 'Write your own answer to a question first, then ask AI if your reasoning is correct. This preserves the learning while letting you get feedback you would not otherwise have.',
              },
              {
                icon: '&#x1F9E9;',
                label: 'Understand, don\'t copy',
                text: 'If AI explains something and you cannot explain it back in your own words, you have not understood it — you have just seen it. Understanding requires reconstruction, not passive reading.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What AI cannot replace in education</h2>
          <p className="text-gray-600 leading-relaxed">
            For all its usefulness, AI is not a replacement for human education. Some of the most
            important things learning develops cannot come from an AI:
          </p>
          <div className="space-y-3">
            {[
              'The struggle of working through a hard problem yourself — and the satisfaction when you get it.',
              'Learning to collaborate, negotiate, and resolve disagreement with other people.',
              'Having a mentor who knows you personally and can inspire you in ways that go beyond information.',
              'The social environment of a classroom — learning to be part of a community.',
              'Critical thinking about what you are told — including what AI tells you.',
            ].map((point) => (
              <div key={point} className="flex gap-3 items-start">
                <span className="text-sky-500 font-bold flex-shrink-0">&#x2022;</span>
                <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-bold text-blue-800">The bottom line</h2>
          <p className="text-blue-700 leading-relaxed">
            AI is a powerful tool that can make learning more personalised, more accessible, and
            more efficient. Used well, it can help anyone learn faster and understand more deeply.
          </p>
          <p className="text-blue-700 leading-relaxed">
            Used poorly &mdash; as a way to avoid thinking &mdash; it undermines the very purpose of
            education. The skills AI cannot teach you (critical thinking, collaboration, independent
            judgment) are exactly the ones that will matter most as AI becomes more prevalent.
          </p>
        </div>

        <Quiz
          lessonId="ai-and-education"
          lessonTitle="AI and education"
          questions={quizQuestions}
        />

        <LessonNote lessonId="ai-and-education" />

        <RelatedLessons currentId="ai-and-education" />

        <NextLesson currentId="ai-and-education" />

      </div>
    </div>
  )
}
