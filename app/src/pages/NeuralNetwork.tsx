import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { NextLesson } from '../components/NextLesson'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is a neuron in a neural network?',
    options: [
      'A tiny robot that lives inside a computer chip',
      'A simple unit that receives numbers as inputs, combines them, and outputs a single number',
      'A type of memory card that stores information',
      'A programming language used to build AI',
    ],
    correctIndex: 1,
    explanation:
      'A neuron is a simple mathematical unit. It takes in several numbers (inputs), multiplies each by a weight, adds them up, and passes the result through a function to produce an output — just like a biological neuron fires when it receives enough signals.',
  },
  {
    question: 'What are "weights" in a neural network?',
    options: [
      'The physical size of the computer running the network',
      'How much importance is given to each input — the numbers the network adjusts during training',
      'The speed at which the network processes data',
      'The number of layers in the network',
    ],
    correctIndex: 1,
    explanation:
      'Weights are the numbers the network adjusts as it learns. A high weight means "this input matters a lot"; a low weight means "ignore this mostly". Training is the process of finding the right weights.',
  },
  {
    question: 'In a cat-recognition neural network, what does the output layer produce?',
    options: [
      'A drawing of a cat',
      'The raw pixel values of the image',
      'A probability — e.g. "87% sure this is a cat"',
      'The name of the photographer who took the photo',
    ],
    correctIndex: 2,
    explanation:
      'The output layer turns all the internal calculations into a final answer. For cat recognition it might output a number between 0 and 1 representing how confident the network is that the image contains a cat.',
  },
  {
    question: 'Why do neural networks need a lot of training data?',
    options: [
      'Because computers run out of power without enough data',
      'Because more data fills up the hard drive faster',
      'Because they learn by example — the more examples they see, the better they get at spotting patterns',
      'Because legal rules require it',
    ],
    correctIndex: 2,
    explanation:
      'Neural networks learn entirely from examples. With only a few examples the network cannot tell a real pattern from a coincidence. Millions of examples help it learn robust, generalised patterns that work on images it has never seen before.',
  },
]

export function NeuralNetwork() {
  useMarkVisited('neural-network')
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F9E0;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            What is a neural network?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Neural networks are the engine behind modern AI. They sound complicated &mdash;
            but the core idea is beautifully simple.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F9EC;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Start with the brain</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Your brain contains about 86 billion <strong>neurons</strong> &mdash; tiny cells
            that pass electrical signals to each other. When you learn something new, the
            connections between neurons get stronger. When something is forgotten, they weaken.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Artificial neural networks are inspired by this idea. They are made of
            <strong> artificial neurons</strong> &mdash; simple mathematical units that pass
            numbers to each other. They do not think or feel, but they can learn to recognise
            patterns in exactly the same trial-and-error way.
          </p>
          <div className="bg-pink-50 border border-pink-200 rounded-xl p-4">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>Analogy:</strong> Think of each neuron as a tiny voting booth.
              It receives votes (numbers) from other neurons, weighs them up, and decides
              whether to &ldquo;vote yes&rdquo; or &ldquo;vote no&rdquo; to the next layer.
              Thousands of these booths together can make surprisingly smart decisions.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x2696;&#xFE0F;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Weighted inputs &mdash; not all signals are equal</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Each connection between neurons has a <strong>weight</strong> &mdash; a number that
            says how important that signal is. A high weight means &ldquo;this matters a lot&rdquo;.
            A weight near zero means &ldquo;mostly ignore this&rdquo;.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            The neuron multiplies each incoming signal by its weight, adds them all up, and if
            the total is high enough, it fires a signal to the next layer.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="font-semibold text-blue-800 mb-1">Simple example:</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Imagine deciding whether a photo shows a sunny day. Your neuron gets signals for:
              &ldquo;sky is blue&rdquo; (weight: high), &ldquo;lots of shadows&rdquo; (weight: medium),
              &ldquo;people wearing sunglasses&rdquo; (weight: high), &ldquo;image is blurry&rdquo;
              (weight: low). Add them up and you get a &ldquo;sunny score&rdquo;.
            </p>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Training a network means adjusting all these weights until the answers come out right.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F9F1;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Layers: input, hidden, and output</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Neurons are organised into <strong>layers</strong>. Data flows through three types of layer:
          </p>
          <div className="space-y-4">
            <div className="bg-green-50 rounded-xl p-4">
              <p className="font-semibold text-green-800 text-lg mb-1">Input layer</p>
              <p className="text-gray-600 text-base leading-relaxed">
                This is where raw data enters. For a photo, each pixel becomes one input neuron.
                A 100&times;100 image has 10,000 input neurons &mdash; one per pixel.
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <p className="font-semibold text-purple-800 text-lg mb-1">Hidden layers</p>
              <p className="text-gray-600 text-base leading-relaxed">
                These do all the interesting work. Early hidden layers detect simple features like
                edges and colours. Deeper layers combine those into shapes, then textures, then whole
                objects. &ldquo;Deep learning&rdquo; just means a network with many hidden layers.
              </p>
            </div>
            <div className="bg-orange-50 rounded-xl p-4">
              <p className="font-semibold text-orange-800 text-lg mb-1">Output layer</p>
              <p className="text-gray-600 text-base leading-relaxed">
                This gives the final answer. For a cat/dog classifier it might have two output
                neurons: one for &ldquo;cat probability&rdquo; and one for &ldquo;dog probability&rdquo;.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F431;</span>
            <h2 className="text-2xl font-semibold text-gray-700">The cat photo example</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Imagine training a network to answer &ldquo;Is this a cat?&rdquo; Here is what happens step by step:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-600 text-lg">
            <li><strong>Feed in a photo</strong> &mdash; each pixel becomes a number. A bright pixel might be 255; a dark one might be 0.</li>
            <li><strong>Signals flow through hidden layers</strong> &mdash; the network looks for edges, then curves, then ear shapes, then whiskers.</li>
            <li><strong>The output neuron fires</strong> &mdash; say it produces 0.94, meaning &ldquo;94% confident this is a cat&rdquo;.</li>
            <li><strong>Compare to the real answer</strong> &mdash; if the photo really was a cat, the network was right. If not, weights get adjusted.</li>
            <li><strong>Repeat millions of times</strong> &mdash; after enough photos the network becomes very good at cat detection.</li>
          </ol>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4DA;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Why neural networks need lots of data</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            A neural network has millions (sometimes billions) of weights. To set them all correctly,
            it needs to see a huge number of examples. With only a handful of cat photos the network
            might just memorise those exact images &mdash; and fail completely on any new photo.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            With millions of diverse examples, it learns the <em>general pattern</em> of what
            makes a cat a cat &mdash; pointy ears, fur texture, whiskers &mdash; regardless of
            lighting, angle, or breed.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>Real numbers:</strong> The image-recognition network that started the modern
              deep-learning era (AlexNet, 2012) was trained on over 1.2 million photos.
              Today&apos;s largest models train on billions of examples.
            </p>
          </div>
        </div>

        <div className="bg-pink-50 border border-pink-200 rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4CC;</span>
            <h2 className="text-2xl font-semibold text-pink-800">The one thing to remember</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>A neural network is layers of simple number-crunching units, connected by
            weights, that learn by adjusting those weights based on millions of examples.</strong>
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            No magic. No understanding. Just a very large, very tuned pattern-matching machine &mdash;
            and that is enough to recognise cats, understand speech, and even write code.
          </p>
        </div>

        <Quiz questions={quizQuestions} title="Quiz: What is a neural network?" lessonId="neural-network" lessonTitle="What is a neural network?" />

        {/* Next lesson */}
        <NextLesson currentId="neural-network" />
      </div>
    </div>
  )
}
