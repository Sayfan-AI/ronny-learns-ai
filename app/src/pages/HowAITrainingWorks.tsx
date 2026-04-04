import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { NextLesson } from '../components/NextLesson'
import { CompletedBadge } from '../components/CompletedBadge'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does it mean to "train" an AI?',
    options: [
      'A programmer types all the correct answers into a database',
      'You show the AI millions of examples so it can learn patterns',
      'The AI reads a manual written by scientists',
      'The AI connects to the internet and memorises websites',
    ],
    correctIndex: 1,
    explanation:
      'Training means showing an AI an enormous number of examples and letting it adjust itself until it gets good at the task. No one types the answers in by hand.',
  },
  {
    question: 'What is a dataset?',
    options: [
      'A single correct answer the AI is given',
      'The computer hardware used to run the AI',
      'A large collection of examples used to teach the AI',
      'The final version of the AI after training is complete',
    ],
    correctIndex: 2,
    explanation:
      'A dataset is simply a big collection of examples — like a huge pile of labelled photos, or millions of sentences — that the AI learns from.',
  },
  {
    question: 'What are "weights" in an AI model?',
    options: [
      'The physical weight of the computer running the AI',
      'Internal numbers the AI adjusts as it learns — they store what it has figured out',
      'The size of the dataset used to train the AI',
      'A score that tells you how smart the AI is',
    ],
    correctIndex: 1,
    explanation:
      'Weights are millions (or billions) of internal numbers. At the start of training they are random. As the AI practises on examples, it nudges these numbers until they encode useful patterns.',
  },
  {
    question: 'What does the "loss function" do during training?',
    options: [
      'It deletes wrong answers from the AI permanently',
      'It measures how badly the AI got something wrong, giving it a score to improve on',
      'It stops the AI from making too many guesses',
      'It connects the AI to a human teacher in real time',
    ],
    correctIndex: 1,
    explanation:
      "The loss function is like a score on a test — the lower the score, the better the AI did. The AI's job is to keep lowering that score by adjusting its weights.",
  },
  {
    question: 'What is "inference"?',
    options: [
      'The stage where the AI is still learning from examples',
      "When humans check whether the AI's answers are correct",
      'Using a finished, trained model to answer new questions or do new tasks',
      'Deleting the dataset after training is done',
    ],
    correctIndex: 2,
    explanation:
      'Inference is what happens when you actually use the AI. Training is the learning phase; inference is the doing phase — the model applies everything it learned to new inputs.',
  },
  {
    question: 'Why does training a large AI take so long?',
    options: [
      'Because the programmers have to check every single answer by hand',
      'Because the AI must read billions of examples, often many times over, doing maths on each one',
      'Because the internet connection is slow',
      'Because the AI takes breaks to avoid overheating',
    ],
    correctIndex: 1,
    explanation:
      'Large models are trained on billions of examples, and the training loop runs many times (called "epochs"). Each pass involves enormous amounts of maths across thousands of computer chips — which is why it can take weeks.',
  },
  {
    question: 'What does RLHF stand for, and why does it matter for Claude?',
    options: [
      'Random Learning from Helpful Files — a way to find data on the internet',
      "Reinforcement Learning from Human Feedback — humans rated Claude's answers so it could learn to be more helpful",
      'Rapid Language Handling Framework — software that speeds up training',
      'Reliable Learning with Honest Facts — a dataset of verified information',
    ],
    correctIndex: 1,
    explanation:
      "RLHF means human raters compared pairs of Claude's answers and said which was better. Claude then learned to produce the kinds of answers humans preferred — making it more helpful, honest, and safe.",
  },
]

export function HowAITrainingWorks() {
  useMarkVisited('how-ai-training-works')
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F9EA;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            How does AI training work?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            You have heard that AIs &ldquo;learn&rdquo; &mdash; but what does that actually mean?
            Here is the full story, told without any jargon.
          </p>
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm px-4 py-2 rounded-full">
            <span>About 7 min read</span>
          </div>
          <CompletedBadge lessonId="how-ai-training-works" />
        </div>

        {/* Section 1: What training means */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4DA;</span>
            <h2 className="text-2xl font-semibold text-gray-700">What &ldquo;training&rdquo; means</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Training an AI is like giving it an enormous amount of practice. Instead of a
            programmer writing rules like &ldquo;if someone asks X, say Y&rdquo;, the AI is shown
            millions &mdash; sometimes <em>billions</em> &mdash; of examples, and it figures out
            the patterns itself.
          </p>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>Analogy:</strong> Imagine learning to ride a bike. Nobody gives you a ten-thousand-page
              rulebook about balance. You just try, fall, adjust, try again &mdash; and eventually you
              get it. AI training works the same way, just with numbers instead of muscles, and at
              a scale of billions of practice attempts.
            </p>
          </div>
        </div>

        {/* Section 2: Datasets */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F5C2;&#xFE0F;</span>
            <h2 className="text-2xl font-semibold text-gray-700">What is a dataset?</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            A <strong>dataset</strong> is simply a big collection of examples. If you are training
            an AI to recognise handwriting, your dataset might be millions of photos of handwritten
            letters, each labelled with which letter it is.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            For a language AI like Claude, the dataset is vast amounts of text &mdash; books,
            articles, websites, code &mdash; covering almost every topic humans have ever written about.
            The bigger and more varied the dataset, the more the AI can learn.
          </p>
          <div className="bg-gray-50 rounded-xl p-4 space-y-2">
            <p className="text-gray-600 text-base"><strong>Examples of datasets:</strong></p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 text-base">
              <li>Millions of cat and dog photos (for image recognition)</li>
              <li>Thousands of hours of recorded speech (for voice assistants)</li>
              <li>Billions of words of written text (for language models)</li>
              <li>Millions of chess games with their outcomes (for game AI)</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Weights and loss */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x2696;&#xFE0F;</span>
            <h2 className="text-2xl font-semibold text-gray-700">How the AI adjusts itself</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Inside every AI model are millions (or billions) of numbers called <strong>weights</strong>.
            Think of them as tiny dials. At the start of training they are set randomly &mdash; the
            AI knows nothing. Then the training loop begins:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-600 text-lg">
            <li>
              <strong>Make a guess</strong> &mdash; given an example from the dataset, the AI produces an answer.
            </li>
            <li>
              <strong>Score itself</strong> &mdash; a mathematical formula called the <strong>loss function</strong>{' '}
              measures how wrong the answer was. A high score = very wrong; a low score = almost right.
            </li>
            <li>
              <strong>Adjust the dials</strong> &mdash; the AI nudges its weights slightly in the
              direction that would lower the score next time.
            </li>
            <li>
              <strong>Repeat, billions of times</strong> &mdash; after enough practice, the weights
              settle into values that produce good answers.
            </li>
          </ol>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>Plain English summary:</strong> The AI scores itself on every attempt and keeps
              tweaking its internal numbers to bring that score down. It is exactly like practising
              a skill &mdash; each attempt tells you what to do differently next time.
            </p>
          </div>
        </div>

        {/* Section 4: Inference */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F680;</span>
            <h2 className="text-2xl font-semibold text-gray-700">What happens during inference</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Once training is finished, the weights are saved and the model is ready to use.
            Every time you ask the AI a question, that is called <strong>inference</strong> &mdash;
            the model applies everything it learned to produce a new answer.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 rounded-xl p-4">
              <p className="font-semibold text-amber-800 text-base mb-1">Training</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Slow. Happens once (or a few times). Requires massive computing power.
                Produces the finished model.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <p className="font-semibold text-green-800 text-base mb-1">Inference</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fast. Happens every time you use the AI. Uses the finished model to
                answer new questions it has never seen before.
              </p>
            </div>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            When you chat with Claude, you are always in inference mode &mdash; you are using the
            finished, trained model, not teaching it anything new.
          </p>
        </div>

        {/* Section 5: Why training takes so long */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x23F3;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Why training takes so long</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Training a large language model can take weeks &mdash; even running on thousands of
            specialised computer chips at the same time. Why?
          </p>
          <ul className="space-y-3 text-gray-600 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">&#x1F4C8;</span>
              <span><strong>Enormous datasets</strong> &mdash; billions of words, each processed many times.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">&#x1F501;</span>
              <span><strong>Multiple passes</strong> &mdash; the model often sees the whole dataset several times (called &ldquo;epochs&rdquo;) to keep improving.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">&#x1F9EE;</span>
              <span><strong>Billions of weights</strong> &mdash; adjusting all those internal numbers on each example involves staggering amounts of arithmetic.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">&#x26A1;</span>
              <span><strong>Specialised hardware</strong> &mdash; companies use thousands of GPUs (graphics chips) running in parallel just to make the timeline manageable.</span>
            </li>
          </ul>
          <p className="text-gray-600 text-lg leading-relaxed">
            Training a model like Claude costs many millions of dollars in compute time. Once it
            is done, though, anyone can use it cheaply &mdash; which is why inference is affordable.
          </p>
        </div>

        {/* Section 6: How Claude was trained — RLHF */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F91D;</span>
            <h2 className="text-2xl font-semibold text-gray-700">How Claude was trained &mdash; a human touch</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Claude was not only trained on text. Anthropic used a technique called{' '}
            <strong>RLHF</strong> &mdash; Reinforcement Learning from Human Feedback.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Here is how it worked, in plain language:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-600 text-lg">
            <li>
              Claude produced two or more different answers to the same question.
            </li>
            <li>
              A human rater read both and said which one was better &mdash; more helpful, more
              honest, safer.
            </li>
            <li>
              This feedback was used to train Claude further, nudging it towards producing the
              kinds of answers humans preferred.
            </li>
            <li>
              This loop was repeated thousands of times across many different topics and question types.
            </li>
          </ol>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>Think of it like this:</strong> Imagine training a new employee by giving them
              two drafts of an email and asking &ldquo;which is better?&rdquo; Over time, they
              learn your style and standards. RLHF does the same thing &mdash; at massive scale,
              with AI instead of a new hire.
            </p>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            This is why Claude tends to give careful, measured answers rather than just raw
            information &mdash; humans trained it to be helpful <em>and</em> responsible.
          </p>
        </div>

        {/* Key message */}
        <div className="bg-violet-50 border border-violet-200 rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4CC;</span>
            <h2 className="text-2xl font-semibold text-violet-800">The one thing to remember</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Training = showing the AI billions of examples so it can learn patterns by scoring itself and adjusting.</strong>
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            No one types the answers in. No one writes the rules. The AI builds its own understanding
            through a mountain of practice &mdash; guided, in Claude&apos;s case, by human feedback
            to make sure it is helpful and honest.
          </p>
        </div>

        {/* Quiz */}
        <Quiz questions={quizQuestions} title="Quiz: How does AI training work?" lessonId="how-ai-training-works" lessonTitle="How does AI training work?" />

        {/* Next lesson */}
        <NextLesson currentId="how-ai-training-works" />
      </div>
    </div>
  )
}
