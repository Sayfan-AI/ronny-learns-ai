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
import { DifficultyBadge } from '../components/DifficultyBadge'

const LESSON_TITLE = 'AI and creative writing'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does a large language model generate a story or piece of writing?',
    options: [
      'It searches the internet for a similar story and copies it with small changes',
      'It predicts what words should come next, one at a time, based on patterns learned from vast amounts of human-written text',
      'It uses a database of plot templates and fills in the characters and settings at random',
      'Human writers at the AI company draft a response, which the AI then reads out',
    ],
    correctIndex: 1,
    explanation:
      'A language model generates text by predicting what comes next — one token (roughly one word) at a time. It does this based on patterns it learned during training on billions of words of human-written text: books, articles, websites, and more. It does not copy from a database or search the web in real time. The result can seem creative because the patterns it has learned reflect the full range of human storytelling.',
    hint: 'Think about autocomplete on your phone — but trained on billions of words and incredibly sophisticated.',
  },
  {
    question: 'Which of the following is a real way writers are using AI tools today?',
    options: [
      'AI automatically publishes finished novels on their behalf without any human involvement',
      'AI generates ideas, outlines, and rough drafts that the writer then shapes, edits, and rewrites in their own voice',
      'AI guarantees that everything it writes is factually accurate and legally original',
      'AI can only help with non-fiction — it cannot assist with fiction writing',
    ],
    correctIndex: 1,
    explanation:
      'Many professional and amateur writers use AI as a starting point or thinking partner. They might ask AI to brainstorm plot ideas, write a rough first scene, suggest different ways to open a chapter, or help them get unstuck. The writer then does the real work: editing, rewriting, adding their own voice, and making it actually good. AI is the rough sketch; the writer is the artist.',
    hint: 'AI is most useful as a collaborator or idea generator, not a finished product machine.',
  },
  {
    question: 'Under current UK law, who owns the copyright to text generated purely by AI with no human creative input?',
    options: [
      'The AI company that made the model',
      'The person who typed the prompt',
      'Nobody — purely AI-generated works currently have no copyright owner in the UK',
      'The authors whose writing was used to train the AI',
    ],
    correctIndex: 2,
    explanation:
      "In the UK, copyright law protects works created by human authors. A work generated entirely by AI — with no meaningful human creative contribution — currently has no copyright protection. This means anyone could copy and republish it. However, if a human author significantly shapes, edits, or transforms AI output, that human's contribution may attract copyright. The law is evolving rapidly as AI capabilities grow.",
    hint: 'Copyright protects human creativity — and AI is not human.',
  },
  {
    question: "What is the main argument from writers who feel AI creative writing tools are threatening their profession?",
    options: [
      'AI writing is always better than human writing, so there will be no market for human authors',
      'AI tools are trained on human writing without consent or payment, and are now competing with those same writers for paid work',
      'AI can only write in English, which gives non-English writers an unfair advantage',
      'AI writing tools are only available to large corporations, making it impossible for independent writers to compete',
    ],
    correctIndex: 1,
    explanation:
      "Many writers and authors' organisations argue that AI companies scraped and used human-written books, articles, and creative work without permission or compensation to train their models. The same companies then sell tools that compete directly with human writers for writing jobs. This is the core of the legal and ethical debate: AI was trained on human creativity, and is now being used to replace it.",
    hint: 'Think about where the AI learned to write — and who created that writing.',
  },
  {
    question: 'What is a practical tip for using AI as a writing tool while keeping your own voice?',
    options: [
      'Use AI to write everything and only change the names of characters',
      'Never read what the AI writes — just publish it directly to avoid being influenced by its style',
      'Use AI to generate ideas or a rough draft, then heavily rewrite and edit it in your own words — treating it as raw material, not a finished product',
      'Avoid using AI for any creative purpose as it always produces low-quality work',
    ],
    correctIndex: 2,
    explanation:
      "The writers who get the most value from AI tools tend to use them the way a sculptor uses a rough block of stone: the AI gives you something to work with, but the real craft is in what you do with it. Heavily editing, rewriting in your own voice, cutting what doesn't sound right, and adding your own observations and experiences is how AI output becomes something genuinely yours.",
    hint: 'Think of AI output as a first draft that needs a lot of work — because it usually does.',
  },
]

export function AIAndCreativeWriting() {
  useMarkVisited('ai-and-creative-writing')

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x270D;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and creative writing
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Story generators, AI co-authors, copyright questions, and the
            debate about what makes writing genuinely human.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-creative-writing" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How AI generates text</h2>
          <p className="text-gray-600 leading-relaxed">
            When you ask an AI to write a story, it does not search a library or copy anything. It
            predicts &mdash; one word at a time &mdash; what should come next, based on patterns it learned
            from enormous amounts of human-written text.
          </p>
          <p className="text-gray-600 leading-relaxed">
            During training, a language model reads billions of words: novels, screenplays, blog posts,
            news articles, song lyrics, academic papers. It learns the patterns of how ideas flow, how
            sentences are structured, how stories are shaped. When you give it a prompt, it uses those
            patterns to generate text that fits.
          </p>
          <div className="bg-orange-50 rounded-xl p-4">
            <p className="font-semibold text-orange-800 text-sm mb-2">A useful analogy</p>
            <p className="text-orange-700 text-sm leading-relaxed">
              Think of AI writing like an extremely well-read person who has absorbed thousands of
              books but has never lived a life. It knows how stories work. It knows how to describe
              grief or joy in ways that sound convincing. But it has never felt either. Whether that
              matters to you as a reader &mdash; or a writer &mdash; is part of what makes this debate interesting.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Tools writers are using</h2>
          <p className="text-gray-600 leading-relaxed">
            A whole ecosystem of AI writing tools has emerged, each designed for slightly different purposes:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F916;',
                label: 'ChatGPT (OpenAI)',
                text: "The most widely used AI writing assistant. Writers use it for brainstorming, generating plot ideas, writing character backstories, drafting scenes to react to, checking dialogue, or simply getting unstuck. It's a general-purpose tool used for everything from haiku to novels.",
              },
              {
                icon: '&#x270F;&#xFE0F;',
                label: 'Sudowrite',
                text: 'Built specifically for fiction writers. It can describe a scene in multiple styles, suggest what might happen next, rewrite a passage with more tension, or help you develop a character. It is designed to work alongside a human writer rather than replace them.',
              },
              {
                icon: '&#x1F4DD;',
                label: 'Jasper',
                text: 'Originally designed for marketing content — blog posts, product descriptions, social media copy. Many businesses use it for content production at scale. It is less focused on creative fiction and more on commercial writing.',
              },
              {
                icon: '&#x1F393;',
                label: 'Grammarly and similar tools',
                text: 'AI-powered grammar and style checkers that have existed for years. These suggest edits rather than generating whole passages. Most writers who are uncomfortable with AI generation are entirely comfortable with these editing tools.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Copyright and ownership</h2>
          <p className="text-gray-600 leading-relaxed">
            AI creative writing raises difficult legal questions that courts and governments are still
            working out. There are two distinct issues.
          </p>
          <div className="space-y-4">
            <div className="bg-amber-50 rounded-xl p-4">
              <p className="font-semibold text-amber-800 text-sm mb-2">Issue 1: Who owns AI output?</p>
              <p className="text-amber-700 text-sm leading-relaxed">
                In the UK and US, copyright currently protects human creativity. A work generated
                entirely by AI &mdash; with no meaningful human contribution &mdash; has no copyright owner.
                Anyone could reprint it. If a human author significantly shapes, edits, or
                transforms AI output, that human's contribution may be protected. But the line is blurry
                and courts are still deciding where it falls.
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl p-4">
              <p className="font-semibold text-amber-800 text-sm mb-2">Issue 2: Was training legal?</p>
              <p className="text-amber-700 text-sm leading-relaxed">
                AI companies trained their models on billions of words of human-written text &mdash; much of
                it scraped from the internet without asking the authors. Several major legal cases are underway
                from authors, publishers, and news organisations arguing this was copyright infringement.
                The New York Times, the Authors Guild, and many individual authors have filed or joined
                lawsuits. No final ruling has been made as of early 2026.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The authenticity debate</h2>
          <p className="text-gray-600 leading-relaxed">
            The sharpest disagreement about AI writing is not legal. It is about what writing is for.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-xl p-4">
              <p className="font-semibold text-red-800 text-sm mb-2">The sceptic view</p>
              <ul className="text-red-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
                <li>Writing is how humans process experience — AI has no experience to process</li>
                <li>Great writing comes from living, not pattern-matching</li>
                <li>Publishing AI writing as your own is a form of deception</li>
                <li>AI writing tends to be competent but bland — it averages human writing, not transcends it</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <p className="font-semibold text-green-800 text-sm mb-2">The optimist view</p>
              <ul className="text-green-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
                <li>Writers have always used tools — from quill to typewriter to spellcheck</li>
                <li>AI can unlock creativity for people who have ideas but struggle to get them on the page</li>
                <li>The writer's vision, choices, and editing are still what make the work good</li>
                <li>What matters is the finished piece, not the process used to make it</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>The honest answer:</strong> both sides have valid points. The debate is likely to
              evolve as AI capabilities change and as norms around disclosure develop. For now, the
              most widely respected position among writers and editors is: use AI if it helps you, be
              transparent about it, and make sure the final work genuinely reflects your own thinking.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Practical tips for writers</h2>
          <p className="text-gray-600 leading-relaxed">
            If you want to use AI as a writing tool without losing your voice, here are approaches
            that working writers have found useful:
          </p>
          <div className="bg-teal-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-teal-800 text-sm">How to use AI as a creative partner</p>
            <ul className="text-teal-700 text-sm leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Use it for brainstorming, not drafting:</strong> ask AI for 10 possible directions for your story, pick the one that excites you, and write it yourself</li>
              <li><strong>Treat AI output as raw material:</strong> a rough first scene from AI is like a sketch &mdash; it tells you roughly what shape the thing should be, but the real work is yours</li>
              <li><strong>Rewrite heavily:</strong> if you use AI text, change it so much that the original is unrecognisable &mdash; that is where your voice comes in</li>
              <li><strong>Use it to get unstuck:</strong> blocked on a scene? Ask AI to write three different versions of how it might go. You probably won't use any of them, but seeing options can unlock your own idea</li>
              <li><strong>Disclose it:</strong> if you submit AI-assisted work professionally or academically, check the rules and be transparent if required</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>The bottom line:</strong> AI writing tools are powerful, controversial, and here to
              stay. Like any tool, they can be used well or badly. The writers who will thrive are those
              who understand what AI can and cannot do &mdash; and who use it to amplify their own creativity
              rather than replace it.
            </p>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-creative-writing" />
        <LessonNote lessonId="ai-and-creative-writing" lessonTitle={LESSON_TITLE} />

        <Quiz questions={quizQuestions} lessonId="ai-and-creative-writing" lessonTitle={LESSON_TITLE} />

        <LessonFeedback lessonId="ai-and-creative-writing" />
        <LessonRating lessonId="ai-and-creative-writing" />
        <RelatedLessons currentId="ai-and-creative-writing" />
        <NextLesson currentId="ai-and-creative-writing" />
      </div>
    </div>
  )
}
