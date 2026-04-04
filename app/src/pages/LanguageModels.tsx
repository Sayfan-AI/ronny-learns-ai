import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { ReviewLaterButton } from '../components/ReviewLaterButton'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is a "token" in the context of language models?',
    options: [
      'A special coin used to pay for AI services',
      'A chunk of text — roughly a word or part of a word — that the model processes as a unit',
      'A security code that protects your account',
      'A mistake the model makes',
    ],
    correctIndex: 1,
    explanation:
      'Tokens are the building blocks language models work with. The word "unhappy" might be split into "un" and "happy" — two tokens. The model never sees raw letters; it sees tokens. This is why very long conversations can hit a "context limit".',
  },
  {
    question: 'How does a language model produce its answer?',
    options: [
      'It searches the internet in real time',
      'It picks a random answer from its training data',
      'It predicts the most likely next token, then the next, then the next — one at a time',
      'It copies an answer from a database of pre-written responses',
    ],
    correctIndex: 2,
    explanation:
      'Language models generate text one token at a time. At each step they look at everything written so far and predict the most likely next token. This process repeats until the answer is complete — which is why the response streams in word by word.',
  },
  {
    question: 'What does "context window" mean?',
    options: [
      'The size of the browser window you use to access the AI',
      'The number of tokens the model can see at once — the limit of what it can "remember" in a conversation',
      'The speed at which the model generates text',
      'The country where the model is hosted',
    ],
    correctIndex: 1,
    explanation:
      'The context window is how much text a model can hold in its "working memory" at one time. If a conversation exceeds this limit, earlier parts get forgotten. Modern models like Claude have very large context windows.',
  },
  {
    question: 'What is RLHF (Reinforcement Learning from Human Feedback)?',
    options: [
      'A way to make AI play video games',
      'A technique where human raters score AI responses, and the model is trained to produce higher-rated answers',
      'A method of compressing training data',
      'A type of computer chip designed for AI',
    ],
    correctIndex: 1,
    explanation:
      'RLHF is how models like Claude learn to be helpful and safe. Human raters compare pairs of responses and say which is better. The model is then trained to prefer the kinds of answers humans rated highly — making it more helpful, honest, and harmless.',
  },
]

export function LanguageModels() {
  useMarkVisited('language-models')
  useLessonVisit('language-models')
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4AC;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            How do language models like Claude work?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Claude can write code, answer questions, and tell stories &mdash; all from the same
            surprisingly simple idea: predicting the next word.
          </p>
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm px-4 py-2 rounded-full">
            <span>About 7 min read</span>
          </div>
          <CompletedBadge lessonId="language-models" />
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F52E;</span>
            <h2 className="text-2xl font-semibold text-gray-700">The core trick: predict the next word</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            At its heart, a language model does one thing: given all the text so far, what word
            (or part of a word) is most likely to come next?
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            If you type &ldquo;The sky is&rdquo;, the model considers thousands of possible next words
            &mdash; &ldquo;blue&rdquo;, &ldquo;clear&rdquo;, &ldquo;falling&rdquo; &mdash; and picks
            the most probable one. Then it does it again. And again. Until the full response is built,
            one word at a time.
          </p>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>This is why text streams in word by word</strong> when you use Claude &mdash;
              it is genuinely generating one token at a time, not retrieving a pre-written answer.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F9E9;</span>
            <h2 className="text-2xl font-semibold text-gray-700">What are tokens?</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Models do not process letters or whole words &mdash; they process <strong>tokens</strong>.
            A token is roughly a word or a meaningful chunk of a word.
          </p>
          <div className="bg-gray-50 rounded-xl p-4 space-y-3">
            <p className="font-semibold text-gray-700">Examples:</p>
            <ul className="space-y-2 text-gray-600 text-base">
              <li className="flex gap-3"><span className="font-mono bg-indigo-100 px-2 py-0.5 rounded text-indigo-800">hello</span><span>&rarr; 1 token</span></li>
              <li className="flex gap-3"><span className="font-mono bg-indigo-100 px-2 py-0.5 rounded text-indigo-800">unhappy</span><span>&rarr; 2 tokens: &ldquo;un&rdquo; + &ldquo;happy&rdquo;</span></li>
              <li className="flex gap-3"><span className="font-mono bg-indigo-100 px-2 py-0.5 rounded text-indigo-800">ChatGPT</span><span>&rarr; 3 tokens: &ldquo;Chat&rdquo; + &ldquo;G&rdquo; + &ldquo;PT&rdquo;</span></li>
              <li className="flex gap-3"><span className="font-mono bg-indigo-100 px-2 py-0.5 rounded text-indigo-800">1,000 words of text</span><span>&rarr; roughly 1,333 tokens</span></li>
            </ul>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Tokens matter because every model has a <strong>context window</strong> &mdash; a limit
            on how many tokens it can process at once. Think of it as working memory: the model can
            only &ldquo;see&rdquo; a certain amount of text at one time.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4DD;</span>
            <h2 className="text-2xl font-semibold text-gray-700">How context works</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every time you send a message, the model sees the <em>entire conversation so far</em> &mdash;
            your messages and its own previous replies &mdash; and generates the next response based
            on all of that.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            This is why Claude can remember what you said earlier in the same chat. But if a
            conversation runs very long, older parts fall outside the context window and the model
            effectively &ldquo;forgets&rdquo; them. It is not amnesia &mdash; they just are not
            included in the input anymore.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>Analogy:</strong> Imagine reading a book but you can only hold the last 200
              pages in your head. If the book is 300 pages long, you have forgotten the beginning
              &mdash; even though the words are still there on paper.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F3CB;&#xFE0F;</span>
            <h2 className="text-2xl font-semibold text-gray-700">Training vs inference</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="font-semibold text-blue-800 text-lg mb-1">Training</p>
              <p className="text-gray-600 text-base leading-relaxed">
                This happens once (or periodically) before you ever use the model. The model is
                shown billions of examples of text and adjusts its weights to get better at
                predicting the next token. Training takes weeks, costs millions of dollars in
                computing power, and produces a fixed set of weights.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <p className="font-semibold text-green-800 text-lg mb-1">Inference</p>
              <p className="text-gray-600 text-base leading-relaxed">
                This is what happens every time you send a message. The model uses its already-trained
                weights to generate a response. No learning happens during inference &mdash; the weights
                stay fixed. This is why Claude does not remember conversations after you close the tab.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F31F;</span>
            <h2 className="text-2xl font-semibold text-gray-700">What makes LLMs different from earlier AI?</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Earlier AI systems were narrow &mdash; a spam filter only filtered spam, a chess engine
            only played chess. Large language models are different because:
          </p>
          <ul className="space-y-3 text-gray-600 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">&#x1F50D;</span>
              <span><strong>They are trained on almost everything</strong> &mdash; books, articles, code, conversations. This breadth gives them general knowledge.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">&#x1F501;</span>
              <span><strong>They are generalists</strong> &mdash; one model can write code, explain history, translate languages, and brainstorm ideas, all without being retrained.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">&#x1F4C8;</span>
              <span><strong>They are extremely large</strong> &mdash; billions of parameters (weights) trained on trillions of tokens. Scale turns out to unlock surprising capabilities.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F916;</span>
            <h2 className="text-2xl font-semibold text-gray-700">How Claude was trained</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Claude is made by Anthropic. Its training went through several stages:
          </p>
          <div className="space-y-4">
            <div className="bg-purple-50 rounded-xl p-4">
              <p className="font-semibold text-purple-800 mb-1">1. Pre-training on text</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Like all LLMs, Claude started by learning to predict the next token across
                a vast dataset of text. This gave it general knowledge and language ability.
              </p>
            </div>
            <div className="bg-indigo-50 rounded-xl p-4">
              <p className="font-semibold text-indigo-800 mb-1">2. RLHF &mdash; learning from human feedback</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Human raters compared pairs of Claude responses and said which was better.
                The model was then trained to favour the kinds of answers humans preferred &mdash;
                more helpful, more honest, safer. This is Reinforcement Learning from Human Feedback (RLHF).
              </p>
            </div>
            <div className="bg-pink-50 rounded-xl p-4">
              <p className="font-semibold text-pink-800 mb-1">3. Constitutional AI</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Anthropic also used a technique called Constitutional AI &mdash; giving the model a
                set of principles (like a constitution) and having it critique and revise its own
                responses against those principles. This helps Claude be helpful without being harmful.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">&#x1F4CC;</span>
            <h2 className="text-2xl font-semibold text-indigo-800">The one thing to remember</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>A language model predicts the next token, over and over, based on everything
            it has seen &mdash; trained on the internet, refined by human feedback.</strong>
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            It is not retrieving facts from a database or looking things up. It is generating
            text based on patterns learned from billions of examples. That is both its superpower
            and its limitation.
          </p>
        </div>

        <Quiz questions={quizQuestions} title="Quiz: How do language models work?" lessonId="language-models" lessonTitle="How do language models work?" />

        {/* Next lesson */}
        <LessonNote lessonId="language-models" />

        {/* Rating */}
        <LessonRating lessonId="language-models" />
        <ReviewLaterButton lessonId="language-models" />

        <RelatedLessons currentId="language-models" />

        <NextLesson currentId="language-models" />
      </div>
    </div>
  )
}
