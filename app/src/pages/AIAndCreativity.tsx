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
import { ShareButton } from '../components/ShareButton'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does an AI image generator do?',
    options: [
      'It searches the internet for matching photos and downloads them',
      'It creates brand-new images from a text description, generating each pixel from scratch',
      'It copies artwork from famous painters and pastes it together',
      'It converts photos into cartoon drawings',
    ],
    correctIndex: 1,
    explanation:
      'AI image generators like DALL-E and Midjourney create entirely new images from text descriptions. They do not copy or download existing images — they learn patterns from millions of images during training, then use that knowledge to generate new visuals pixel by pixel.',
  },
  {
    question: 'How does AI help musicians and composers?',
    options: [
      'AI replaces musicians entirely — no human involvement is needed',
      'AI can generate backing tracks, suggest chord progressions, and help explore new sounds',
      'AI can only play classical music, not modern styles',
      'AI listens to concerts and writes reviews',
    ],
    correctIndex: 1,
    explanation:
      'AI music tools like Suno and AIVA can generate melodies, suggest chord progressions, create backing tracks in specific styles, and help musicians explore ideas quickly. They are tools that augment human creativity, not replacements for musicians.',
  },
  {
    question: 'What is the most accurate description of how AI writing assistants work?',
    options: [
      'They are a replacement for human writers — the output needs no editing',
      'They are collaborators — they help with drafts, editing, and ideas, but human judgment shapes the final result',
      'They only work for short texts like tweets or captions',
      'They simply copy and rearrange text from books',
    ],
    correctIndex: 1,
    explanation:
      'AI writing assistants are most useful as collaborators. They can help you overcome a blank page, suggest phrasings, improve tone, or brainstorm ideas. But human judgment — deciding what to say, what matters, and what sounds right — is still essential to the final piece.',
  },
  {
    question: 'True or false: AI can replace human creativity because it produces the same kinds of results.',
    options: [
      'True — if the output looks the same, the process does not matter',
      'False — AI generates based on patterns in existing work, but lacks the lived experience, intention, and meaning behind human creative expression',
    ],
    correctIndex: 1,
    explanation:
      'AI generates outputs by recombining patterns it has learned from human-created work. It does not have experiences, feelings, intentions, or a point of view. Human creativity draws on all of those things. The results can look similar, but the origin and meaning are fundamentally different.',
  },
  {
    question: 'Which of these is a practical way a non-artist can use AI creative tools today?',
    options: [
      'Generating images for a presentation or blog post using a text description',
      'Only professional artists and designers can use AI creative tools',
      'AI tools require you to know how to code to use them',
      'AI creative tools are not yet available to the public',
    ],
    correctIndex: 0,
    explanation:
      'AI image generators are widely available today via simple web interfaces — no coding needed. You type a description and the tool generates an image. This makes visual content creation accessible to people who could never draw or design before.',
  },
]

export function AIAndCreativity() {
  useMarkVisited('ai-and-creativity')
  useLessonVisit('ai-and-creativity')
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3A8;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and creativity
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI is changing art, music, and writing &mdash; and why human creativity still matters more than ever.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-creativity" />
          <ShareButton lessonTitle="ai-and-creativity" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI as a creative collaborator</h2>
          <p className="text-gray-600 leading-relaxed">
            Not long ago, making visual art, composing music, or writing a novel required years of practice
            or professional training. AI is changing that. Today, anyone with a laptop can type a description
            and get a professional-looking image back in seconds. Anyone can ask for help with a first draft.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This is not the end of human creativity. It is a new kind of collaboration &mdash; one that is
            accessible to more people than ever before.
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="text-purple-800 font-semibold text-sm">The key idea</p>
            <p className="text-purple-700 text-sm leading-relaxed mt-1">
              AI is a tool that amplifies human creative intent. You still need the idea, the taste, the
              judgment &mdash; AI just makes execution faster and more accessible.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI and visual art</h2>
          <p className="text-gray-600 leading-relaxed">
            Tools like <strong>DALL-E</strong>, <strong>Midjourney</strong>, and <strong>Stable Diffusion</strong> can
            generate striking, detailed images from a text description. Type &ldquo;a watercolour painting of a cat
            reading a book in a library&rdquo; and you get exactly that &mdash; in seconds.
          </p>
          <p className="text-gray-600 leading-relaxed">
            These tools learned to generate images by studying millions of human-created artworks, photos, and
            illustrations. They learned what things look like, what styles feel like, and how to combine
            concepts. The output is always new &mdash; it does not search for an existing image; it generates
            one from scratch.
          </p>
          <div className="space-y-3">
            {[
              { label: 'What it is great for', text: 'Blog illustrations, presentation visuals, social media images, concept sketches, book covers, product mockups — anything where you need an image but do not have the time or skills to create one traditionally.' },
              { label: 'What it is not so great for', text: 'Precise technical diagrams, accurate representations of specific real people, or anything that needs to exactly match a brand style without a lot of guidance.' },
            ].map(({ label, text }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-gray-800 text-sm">{label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI and music</h2>
          <p className="text-gray-600 leading-relaxed">
            AI music tools like <strong>Suno</strong>, <strong>Udio</strong>, and <strong>AIVA</strong> can generate
            complete songs, backing tracks, and instrumentals in virtually any style &mdash; from lo-fi jazz to
            heavy metal. Some tools let you describe a mood, and the AI fills in the rest.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For professional musicians, AI is a creative partner: a way to quickly explore ideas, generate
            demo tracks, and experiment with new sounds. For non-musicians, it opens a door that was previously closed.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-1">
            <p className="text-blue-800 font-semibold text-sm">A real-world example</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              A podcast producer who cannot afford a composer can use an AI music tool to generate custom
              background music that fits the exact mood and length of each episode. They describe what they
              need &mdash; &ldquo;calm, thoughtful, 90 seconds, no vocals&rdquo; &mdash; and get it in minutes.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI and writing</h2>
          <p className="text-gray-600 leading-relaxed">
            AI writing assistants &mdash; like Claude &mdash; can help with almost every part of the writing process:
            getting past a blank page, drafting, editing, finding the right words, improving flow, adjusting
            tone, or expanding on an idea.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x270F;&#xFE0F;',
                label: 'First drafts',
                text: 'Ask AI to write a first draft of an email, article, or speech. It will not be perfect, but it gives you something to shape rather than a blank page to fill.',
              },
              {
                icon: '&#x1F50D;',
                label: 'Editing and improving',
                text: 'Paste in text you have written and ask AI to make it clearer, shorter, more formal, or more friendly. It is like having a thoughtful editor available at any time.',
              },
              {
                icon: '&#x1F4A1;',
                label: 'Brainstorming',
                text: 'Ask for 10 headline ideas, 5 ways to structure an argument, or 20 potential names for a product. AI generates options fast, and you choose the best ones.',
              },
              {
                icon: '&#x1F5E3;&#xFE0F;',
                label: 'Translating tone',
                text: 'Write a message casually and ask AI to make it sound more professional. Or write something very formal and ask for a friendlier version. This is especially useful for non-native speakers.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Does AI replace human creativity?</h2>
          <p className="text-gray-600 leading-relaxed">
            This is the question people ask most. The honest answer is: <strong>no, not really &mdash; but it does change things.</strong>
          </p>
          <p className="text-gray-600 leading-relaxed">
            AI generates outputs by recombining patterns from human-created work. It does not have experiences,
            feelings, or a perspective of its own. A photograph taken because a moment moved you, a song written
            about a specific loss, a poem shaped by a lifetime of reading &mdash; these carry meaning that AI output
            cannot replicate, because they come from a real human life.
          </p>
          <p className="text-gray-600 leading-relaxed">
            What AI does change is the barrier to entry. You no longer need to spend years learning to draw
            before you can make visual work. This is genuinely democratising.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-amber-800 font-semibold text-sm">Worth thinking about</p>
            <p className="text-amber-700 text-sm leading-relaxed mt-1">
              AI cannot decide what to create or why it matters. It cannot have a point of view, an emotional
              experience, or an intention. Those things are still yours.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-bold text-blue-800">The bottom line</h2>
          <p className="text-blue-700 leading-relaxed">
            AI creative tools are genuinely useful and increasingly accessible. They are best thought of as
            powerful assistants: they handle execution while you provide direction, taste, and meaning.
          </p>
          <p className="text-blue-700 leading-relaxed">
            The most creative people are already using these tools &mdash; not to replace their creativity,
            but to amplify it.
          </p>
        </div>

        <Quiz
          lessonId="ai-and-creativity"
          lessonTitle="AI and creativity"
          questions={quizQuestions}
        />

        <LessonNote lessonId="ai-and-creativity" />

        {/* Rating */}
        <LessonRating lessonId="ai-and-creativity" />
        <ReviewLaterButton lessonId="ai-and-creativity" />

        <RelatedLessons currentId="ai-and-creativity" />

        <NextLesson currentId="ai-and-creativity" />

      </div>
    </div>
  )
}
