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

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does an AI writing assistant like Grammarly or Notion AI primarily help you do?',
    options: [
      'It writes entire documents for you without any input',
      'It helps you improve your writing — fixing grammar, suggesting clearer phrasing, and summarising long texts',
      'It automatically posts your documents to social media',
      'It translates your writing into code',
    ],
    correctIndex: 1,
    explanation:
      'AI writing assistants help you write better — not write for you. They catch grammar mistakes, suggest clearer or more concise phrasing, and can summarise long passages. The ideas and judgement still come from you; the AI handles the polish.',
  },
  {
    question: 'What does GitHub Copilot do?',
    options: [
      'It manages your GitHub account passwords',
      'It automatically submits code to GitHub on your behalf',
      'It suggests lines of code as a developer types, like autocomplete for programming',
      'It reviews other developers\' code and approves pull requests',
    ],
    correctIndex: 2,
    explanation:
      'GitHub Copilot is an AI coding assistant that works inside code editors. As you type, it suggests the next lines of code, entire functions, or even whole files. It has been trained on billions of lines of public code and can massively speed up a developer\'s work — though developers still review and decide whether to accept its suggestions.',
  },
  {
    question: 'What is a common use of AI in meeting tools like Otter.ai or Microsoft Teams?',
    options: [
      'Booking the meeting room and sending calendar invites',
      'Generating an automatic transcript and summary of the meeting',
      'Replacing video calls with AI-generated avatars',
      'Blocking distracting websites during the meeting',
    ],
    correctIndex: 1,
    explanation:
      'AI meeting tools listen to conversations (with permission) and automatically produce a searchable transcript and a summary of the key points and action items. This means you can focus on the conversation rather than taking notes, and easily catch up if you missed a meeting.',
  },
  {
    question: 'Which of the following is a good practice when using AI productivity tools?',
    options: [
      'Always trust AI output and publish it without reading it',
      'Avoid using AI tools — they always make your work worse',
      'Review and edit AI-generated content before using it, since AI can make mistakes',
      'Only use AI tools if you are a professional programmer',
    ],
    correctIndex: 2,
    explanation:
      'AI tools can save a lot of time, but they make mistakes — wrong facts, awkward phrasing, or suggestions that do not fit your specific situation. Always read the AI\'s output critically, correct anything that is wrong or unclear, and add your own expertise before sharing or publishing.',
  },
  {
    question: 'What does a tool like Perplexity or NotebookLM help you do?',
    options: [
      'Automatically reply to emails on your behalf',
      'Research and summarise information from documents or the web quickly',
      'Create animated videos from text prompts',
      'Manage your calendar and schedule meetings',
    ],
    correctIndex: 1,
    explanation:
      'Perplexity and NotebookLM are AI research tools. Perplexity searches the web and gives you a summarised, cited answer to a question. NotebookLM lets you upload documents and ask questions about them — great for understanding a long report or textbook quickly without reading every word.',
  },
]

export function AIProductivityTools() {
  useMarkVisited('ai-productivity-tools')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-10">

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl" aria-hidden="true">&#x26A1;</div>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
              AI and your productivity
            </h1>
            <CompletedBadge lessonId="ai-productivity-tools" />
          <ShareButton lessonTitle="ai-productivity-tools" />
          </div>
          <div className="flex items-center justify-center gap-3 text-sm text-gray-500 flex-wrap">
            <span className="bg-green-100 text-green-700 font-medium px-3 py-1 rounded-full">Beginner</span>
            <span>~5 min read</span>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            AI tools can help you write better, manage email, take meeting notes, and research faster.
            Here is a tour of the most useful ones — and how to use them wisely.
          </p>
        </div>

        {/* Writing assistants */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI writing assistants</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have ever had a spelling or grammar correction pop up while typing, you have already used a basic AI
            writing tool. Modern AI writing assistants go much further.
          </p>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex gap-2"><span className="text-purple-500 font-bold mt-0.5">&#x2022;</span><span><strong>Grammarly</strong> checks grammar and spelling, but also suggests clearer phrasing and adjusts the tone of your writing — more formal, more friendly, more concise.</span></li>
            <li className="flex gap-2"><span className="text-purple-500 font-bold mt-0.5">&#x2022;</span><span><strong>Notion AI</strong> can summarise a long document into bullet points, draft a first version of something you describe, or translate your notes into a tidy summary.</span></li>
            <li className="flex gap-2"><span className="text-purple-500 font-bold mt-0.5">&#x2022;</span><span><strong>Google Docs</strong> now has built-in AI that can suggest how to continue a sentence, rewrite a paragraph, or generate a table from a description.</span></li>
          </ul>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p className="text-yellow-800 text-sm font-medium">
              Tip: use AI to improve your drafts, not to replace your thinking. The ideas and judgement should still
              come from you — AI is the editor, not the author.
            </p>
          </div>
        </section>

        {/* Coding assistants */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI coding helpers</h2>
          <p className="text-gray-700 leading-relaxed">
            You do not need to be a developer to benefit from AI coding tools, but they are transforming software
            development for the people who write code every day.
          </p>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">&#x2022;</span><span><strong>GitHub Copilot</strong> sits inside a code editor and suggests the next lines of code as you type — like autocomplete, but for entire functions. Developers say it can roughly double their speed on routine tasks.</span></li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">&#x2022;</span><span><strong>Cursor</strong> is a whole code editor built around AI. You can describe what you want in plain English and the AI writes or edits the code for you.</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Even if you never write code, these tools matter because they are making it faster and cheaper for businesses
            to build software — which affects everyone.
          </p>
        </section>

        {/* Meeting tools */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI meeting tools</h2>
          <p className="text-gray-700 leading-relaxed">
            Taking notes in a meeting while also trying to listen and contribute is genuinely hard. AI can take the
            notes for you.
          </p>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex gap-2"><span className="text-teal-500 font-bold mt-0.5">&#x2022;</span><span><strong>Otter.ai</strong> joins your video call and produces a live transcript. After the meeting, it generates a summary with the key discussion points and action items.</span></li>
            <li className="flex gap-2"><span className="text-teal-500 font-bold mt-0.5">&#x2022;</span><span><strong>Microsoft Copilot in Teams</strong> (if your organisation uses Microsoft 365) does the same thing — live transcription, summaries, and the ability to ask questions about what was discussed.</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Always tell other participants if you are recording or transcribing the meeting. Transparency about AI
            use in professional settings is both polite and often legally required.
          </p>
        </section>

        {/* Email */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI for email</h2>
          <p className="text-gray-700 leading-relaxed">
            Managing a busy inbox is one of the most common productivity problems. AI is helping in a few ways:
          </p>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex gap-2"><span className="text-orange-500 font-bold mt-0.5">&#x2022;</span><span><strong>Gmail Smart Reply</strong> suggests short responses to emails so you can reply in a tap.</span></li>
            <li className="flex gap-2"><span className="text-orange-500 font-bold mt-0.5">&#x2022;</span><span><strong>Gmail summarise</strong> can condense a long email thread into a few key points so you do not have to read the whole thing.</span></li>
            <li className="flex gap-2"><span className="text-orange-500 font-bold mt-0.5">&#x2022;</span><span><strong>Superhuman</strong> (a premium email app) uses AI to prioritise your inbox and draft replies in your writing style.</span></li>
          </ul>
        </section>

        {/* Research tools */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI for research and summarisation</h2>
          <p className="text-gray-700 leading-relaxed">
            Need to quickly understand a long report, a research paper, or a news topic? AI research tools can help.
          </p>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex gap-2"><span className="text-indigo-500 font-bold mt-0.5">&#x2022;</span><span><strong>Perplexity</strong> is an AI search engine. Ask it a question in plain English and it searches the web, then gives you a cited, summarised answer — rather than a list of links to click through.</span></li>
            <li className="flex gap-2"><span className="text-indigo-500 font-bold mt-0.5">&#x2022;</span><span><strong>NotebookLM</strong> (by Google) lets you upload documents and chat with them. Ask "what does this report say about costs?" and it finds and explains the relevant sections.</span></li>
          </ul>
        </section>

        {/* Practical tips */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Practical tips for using AI tools wisely</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex gap-2"><span className="text-green-500 font-bold mt-0.5">&#x2713;</span><span><strong>Always review output before using it.</strong> AI tools make mistakes — wrong facts, wrong tone, or suggestions that miss your specific context.</span></li>
            <li className="flex gap-2"><span className="text-green-500 font-bold mt-0.5">&#x2713;</span><span><strong>Do not share sensitive information with AI tools</strong> unless you know and trust their data privacy policy. Many free tools train on your inputs.</span></li>
            <li className="flex gap-2"><span className="text-green-500 font-bold mt-0.5">&#x2713;</span><span><strong>Use AI for the boring parts.</strong> Let AI draft the first version of a routine email or clean up your notes. Spend your energy on the parts that need real judgement and creativity.</span></li>
            <li className="flex gap-2"><span className="text-green-500 font-bold mt-0.5">&#x2713;</span><span><strong>Be transparent.</strong> If you use AI to help write something professional, it is good practice to acknowledge that — especially in educational or legal contexts where it matters.</span></li>
          </ul>
        </section>

        {/* Note */}
        <LessonNote lessonId="ai-productivity-tools" />

        {/* Rating */}
        <LessonFeedback lessonId="ai-productivity-tools" />
        <LessonRating lessonId="ai-productivity-tools" />
        <ReviewLaterButton lessonId="ai-productivity-tools" />

        {/* Quiz */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Test your knowledge</h2>
          <Quiz lessonId="ai-productivity-tools" questions={quizQuestions} />
        </section>

        {/* Related lessons */}
        <RelatedLessons currentId="ai-productivity-tools" />

        {/* Next lesson */}
        <NextLesson currentId="ai-productivity-tools" />

      </div>
    </div>
  )
}
