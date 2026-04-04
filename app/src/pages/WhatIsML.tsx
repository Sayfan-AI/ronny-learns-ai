import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does "machine learning" mean?',
    options: [
      'A machine that repairs itself when broken',
      'A computer program that learns patterns from examples instead of following fixed rules',
      'A robot that learns to walk',
      'A program that searches the internet faster over time',
    ],
    correctIndex: 1,
    explanation:
      'Machine learning means a program improves by finding patterns in data — rather than a programmer writing every rule by hand.',
  },
  {
    question: 'Which of these is the best everyday example of machine learning?',
    options: [
      'A calculator doing maths',
      'A clock showing the correct time',
      'A spam filter that learns which emails are junk',
      'A thermostat set to a fixed temperature',
    ],
    correctIndex: 2,
    explanation:
      'A spam filter is a classic ML example — it learns from thousands of labelled emails (spam/not spam) and gets better over time.',
  },
  {
    question: 'In supervised learning, what does the word "supervised" refer to?',
    options: [
      'A human watching the computer at all times',
      'The computer learning from labelled examples where the correct answer is already known',
      'A supervisor approving each result before it is used',
      'The computer checking its own work after every step',
    ],
    correctIndex: 1,
    explanation:
      'Supervised means the training data already has correct labels — like a practice test with an answer key. The model learns to match inputs to the right outputs.',
  },
  {
    question: 'How does a machine learning model "learn"?',
    options: [
      'It reads a textbook written by its creators',
      'It is programmed with every possible answer in advance',
      'It makes predictions, checks how wrong they were, and adjusts — over and over',
      'It copies answers from the internet in real time',
    ],
    correctIndex: 2,
    explanation:
      'ML models learn by trial and error at massive scale — making a prediction, measuring the error, and adjusting internal numbers (called weights) to do better next time.',
  },
  {
    question: 'Which of these is NOT a real-world use of machine learning?',
    options: [
      'Netflix recommending films you might like',
      'A voice assistant understanding what you say',
      'A light switch turning on when you flip it',
      'A photo app recognising faces',
    ],
    correctIndex: 2,
    explanation:
      'A light switch is just a simple circuit — no learning involved. Netflix, voice assistants, and face recognition all use machine learning to improve with more data.',
  },
  {
    question: 'What is the difference between machine learning and traditional programming?',
    options: [
      'Traditional programming is slower; ML is just faster traditional programming',
      'In traditional programming you write rules; in ML the program discovers rules from examples',
      'ML programs can only run on special hardware',
      'There is no real difference — they produce the same results',
    ],
    correctIndex: 1,
    explanation:
      'Traditional programming: you write the rules. Machine learning: you provide examples and the program figures out the rules itself. This is why ML can tackle problems too complex to write rules for by hand.',
  },
]

export function WhatIsML() {
  useMarkVisited('what-is-ml')
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4CA;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            What is machine learning?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            You have heard &ldquo;AI&rdquo; &mdash; but what about &ldquo;machine learning&rdquo;?
            They are closely related, and once you understand the idea it becomes surprisingly simple.
          </p>
        </div>

        {/* Section 1: The core idea */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4A1;</span>
            <h2 className="text-2xl font-semibold text-gray-700">The core idea</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Traditional computer programs follow rules written by a programmer. Want the computer
            to sort a list? A programmer writes: &ldquo;compare each pair, put the smaller one
            first, repeat.&rdquo; Every rule is spelled out in advance.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Machine learning flips this.</strong> Instead of writing rules, you give the
            computer thousands (or millions) of examples &mdash; and let it figure out the rules itself.
          </p>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>Analogy:</strong> Imagine teaching a child to recognise cats. You do not give
              them a rulebook saying &ldquo;cats have four legs, pointed ears, whiskers&hellip;&rdquo;
              You just show them hundreds of pictures &mdash; &ldquo;this is a cat, this is not a cat&rdquo;
              &mdash; and they figure out the pattern. Machine learning works the same way, but with computers and data.
            </p>
          </div>
        </div>

        {/* Section 2: How it learns */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F504;</span>
            <h2 className="text-2xl font-semibold text-gray-700">How a model actually learns</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Under the hood, a machine learning model is a huge collection of numbers (called
            <strong> weights</strong>). At the start they are set randomly. Then the model goes
            through a training loop:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-600 text-lg">
            <li>
              <strong>Make a guess</strong> &mdash; given a cat picture, predict &ldquo;cat&rdquo; or
              &ldquo;not cat&rdquo;.
            </li>
            <li>
              <strong>Check how wrong it was</strong> &mdash; compare the guess to the correct answer.
            </li>
            <li>
              <strong>Adjust the weights</strong> &mdash; nudge the numbers slightly so the next guess
              is a little better.
            </li>
            <li>
              <strong>Repeat millions of times</strong> &mdash; after enough examples, the model becomes
              reliably accurate.
            </li>
          </ol>
          <p className="text-gray-600 text-lg leading-relaxed">
            This process of adjusting based on errors is called <strong>gradient descent</strong>
            &mdash; but you do not need to remember the name. The key idea is: <em>learn by trying and correcting</em>.
          </p>
        </div>

        {/* Section 3: Types of ML */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F9E9;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Three flavours of machine learning</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="font-semibold text-blue-800 text-lg mb-1">Supervised learning</p>
              <p className="text-gray-600 text-base leading-relaxed">
                You train on labelled examples &mdash; each input comes with the correct answer.
                Like a practice test with an answer key. Most practical ML (spam filters,
                image recognition, language models) is supervised.
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <p className="font-semibold text-purple-800 text-lg mb-1">Unsupervised learning</p>
              <p className="text-gray-600 text-base leading-relaxed">
                No labels &mdash; the model just finds structure in the data on its own. Like
                giving someone a big pile of customer records and asking them to spot groups.
                Used for clustering, anomaly detection, and recommendation systems.
              </p>
            </div>
            <div className="bg-orange-50 rounded-xl p-4">
              <p className="font-semibold text-orange-800 text-lg mb-1">Reinforcement learning</p>
              <p className="text-gray-600 text-base leading-relaxed">
                The model learns by trial and error in an environment, getting rewards for
                good actions and penalties for bad ones &mdash; like training a dog with treats.
                Used to teach game-playing AIs and robotics.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Real-world examples */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F310;</span>
            <h2 className="text-2xl font-semibold text-gray-700">ML is already everywhere</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            You almost certainly use machine learning every day without realising it:
          </p>
          <ul className="space-y-3 text-gray-600 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">&#x1F4E7;</span>
              <span><strong>Spam filter</strong> &mdash; your email app learned from millions of spam examples what junk looks like.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">&#x1F3AC;</span>
              <span><strong>Netflix recommendations</strong> &mdash; the &ldquo;because you watched&hellip;&rdquo; suggestions come from ML models trained on viewing patterns.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">&#x1F5E3;&#xFE0F;</span>
              <span><strong>Voice assistants</strong> &mdash; Siri and Alexa use ML to convert your speech into words and understand what you mean.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">&#x1F4F8;</span>
              <span><strong>Photo apps</strong> &mdash; face recognition, auto-tagging, and &ldquo;enhance&rdquo; features all run on ML.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">&#x1F697;</span>
              <span><strong>Navigation apps</strong> &mdash; traffic predictions and route suggestions use ML trained on millions of journeys.</span>
            </li>
          </ul>
        </div>

        {/* Section 5: Connection to Claude */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F916;</span>
            <h2 className="text-2xl font-semibold text-gray-700">How this connects to Claude</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Claude &mdash; the AI that helps build this app &mdash; is a <strong>large language model</strong>
            (LLM). It was trained using machine learning on enormous amounts of text.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            It learned to predict the next word so well, and across so many topics, that
            it became capable of writing code, explaining ideas, answering questions, and
            even managing a software project &mdash; all from the same underlying technique.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Machine learning did not give Claude a mind. It gave it a very powerful pattern
            engine trained on a huge chunk of human knowledge.
          </p>
        </div>

        {/* Key message */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4CC;</span>
            <h2 className="text-2xl font-semibold text-emerald-800">The one thing to remember</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Machine learning = learning by example, not by rules.</strong>
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            You show the computer enough examples, it finds the pattern, and then it can
            apply that pattern to things it has never seen before. That is the whole idea &mdash;
            and it turns out to be astonishingly powerful.
          </p>
        </div>

        {/* Quiz */}
        <Quiz questions={quizQuestions} title="Quiz: What is machine learning?" lessonId="what-is-ml" lessonTitle="What is machine learning?" />

        {/* Back link */}
        <div className="text-center">
          <a
            href="#/"
            className="inline-block text-blue-600 hover:text-blue-800 text-lg font-medium underline"
          >
            &larr; Back to home
          </a>
        </div>
      </div>
    </div>
  )
}
