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
    question: 'Which of these is an example of a more effective prompt?',
    options: [
      '"Tell me about history"',
      '"Summarise the causes of World War One in three bullet points, using plain language"',
      '"History please"',
      '"Write something about the past"',
    ],
    correctIndex: 1,
    explanation:
      'The best prompt is specific about the topic (World War One causes), the format (three bullet points), and the style (plain language). Vague prompts like "tell me about history" leave the AI guessing what you actually want.',
  },
  {
    question: 'What does it mean to "give an AI context" in your prompt?',
    options: [
      'Copy and paste the whole internet into your message',
      'Tell the AI who you are and why you are asking, so it can tailor its answer',
      'Use technical language so the AI takes you seriously',
      'Always ask in English, even if that is not your first language',
    ],
    correctIndex: 1,
    explanation:
      'Context helps the AI give a more relevant answer. "I am a complete beginner — explain this simply" leads to a much more useful response than just asking the question bare. The AI cannot read your mind, but it can adapt to what you tell it.',
  },
  {
    question: 'Ronny types a prompt and gets an answer that is too long. What is the best next step?',
    options: [
      'Give up and assume AI is useless',
      'Start a completely new conversation from scratch',
      'Follow up with "Can you give me a shorter version — just two sentences?" and iterate',
      'Use more exclamation marks to show urgency',
    ],
    correctIndex: 2,
    explanation:
      'Prompting is a conversation. You can always ask the AI to adjust — shorter, longer, simpler, in a different format. Each follow-up message gives the AI more information about what you actually need.',
  },
  {
    question: 'Which of these things can a well-written prompt NOT do?',
    options: [
      'Make the answer more focused on a specific topic',
      'Request a particular format (like a table or bullet list)',
      'Give the AI new facts it was never trained on',
      'Ask the AI to use simpler language',
    ],
    correctIndex: 2,
    explanation:
      'A prompt shapes how the AI uses its existing knowledge — it does not add new knowledge. If you need up-to-date information the AI was not trained on, you need to provide it in the prompt itself (e.g. paste an article and ask Claude to summarise it).',
  },
]

export function PromptEngineering() {
  useMarkVisited('prompt-engineering')
  useLessonVisit('prompt-engineering')
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x270F;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            What is prompt engineering?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            You now know that Claude is a language model that responds to your instructions.
            The way you write those instructions &mdash; your <strong>prompt</strong> &mdash; makes an enormous difference
            to the quality of the answer you get.
          </p>
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm px-4 py-2 rounded-full">
            <span>About 6 min read</span>
          </div>
          <CompletedBadge lessonId="prompt-engineering" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What is a prompt?</h2>
          <p className="text-gray-600 leading-relaxed">
            A <strong>prompt</strong> is any message you send to an AI &mdash; a question, an instruction, or a description
            of what you want. The AI reads your prompt and generates a response based on it.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Prompt engineering</strong> is just the practice of writing clearer, better prompts to get more useful answers.
            You do not need to be a programmer &mdash; it is more like learning to ask better questions.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Why does the wording matter?</h2>
          <p className="text-gray-600 leading-relaxed">
            The same AI gives very different responses depending on how you ask. Consider these two prompts:
          </p>
          <div className="space-y-3">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-red-700 mb-1">Less effective:</p>
              <p className="text-gray-700 font-mono text-sm">"Tell me about AI"</p>
              <p className="text-gray-500 text-sm mt-2">Result: A very long, general essay covering dozens of topics — probably not what you needed.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-green-700 mb-1">More effective:</p>
              <p className="text-gray-700 font-mono text-sm">"Explain what a language model is in three sentences, as if I am a complete beginner"</p>
              <p className="text-gray-500 text-sm mt-2">Result: A concise, beginner-friendly explanation — exactly what was needed.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Four tips for better prompts</h2>

          <div className="space-y-5">
            {[
              {
                num: '1',
                title: 'Be specific',
                bad: '"Explain AI"',
                good: '"Explain what AI bias is and give one real-world example"',
                tip: 'The more specific you are about what you want, the more focused the answer will be.',
              },
              {
                num: '2',
                title: 'Give context',
                bad: '"What is a repo?"',
                good: '"I am completely new to GitHub. What is a repository, and why would I need one?"',
                tip: 'Tell the AI who you are and why you are asking. It will tailor the answer to your level.',
              },
              {
                num: '3',
                title: 'Ask for a format',
                bad: '"Tell me the steps to sign up for GitHub"',
                good: '"List the steps to sign up for GitHub as a numbered list, one sentence per step"',
                tip: 'Requesting a specific format (bullet list, table, numbered steps) makes answers easier to follow.',
              },
              {
                num: '4',
                title: 'Iterate and follow up',
                bad: 'Give up if the first answer is not perfect',
                good: '"That is helpful — can you make it shorter? Just the three most important points."',
                tip: 'Prompting is a conversation. You can always ask for adjustments rather than starting over.',
              },
            ].map(({ num, title, bad, good, tip }) => (
              <div key={num} className="space-y-3 border-b border-gray-100 last:border-0 pb-5 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-violet-100 text-violet-700 font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {num}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <div className="bg-red-50 border border-red-100 rounded-lg p-3">
                    <p className="font-semibold text-red-600 mb-1">Less effective</p>
                    <p className="text-gray-700 font-mono">{bad}</p>
                  </div>
                  <div className="bg-green-50 border border-green-100 rounded-lg p-3">
                    <p className="font-semibold text-green-600 mb-1">More effective</p>
                    <p className="text-gray-700 font-mono">{good}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-bold text-amber-800">What prompts cannot do</h2>
          <p className="text-amber-700 leading-relaxed">
            A well-crafted prompt helps the AI use its existing knowledge better &mdash; but it cannot:
          </p>
          <ul className="space-y-2 text-amber-700">
            {[
              "Give the AI facts it was never trained on (e.g. today's news)",
              "Remove the AI's built-in safety limits",
              'Make the AI certain about things it is uncertain about',
              'Guarantee a perfect answer — AI can still make mistakes',
            ].map((item, i) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="flex-shrink-0 mt-0.5 text-amber-500">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-amber-700 text-sm leading-relaxed">
            If you need up-to-date information, paste it into your prompt and ask the AI to summarise or analyse it.
          </p>
        </div>

        <Quiz
          lessonId="prompt-engineering"
          lessonTitle="What is prompt engineering?"
          questions={quizQuestions}
        />

        <LessonNote lessonId="prompt-engineering" />

        <RelatedLessons currentId="prompt-engineering" />

        <NextLesson currentId="prompt-engineering" />

      </div>
    </div>
  )
}
