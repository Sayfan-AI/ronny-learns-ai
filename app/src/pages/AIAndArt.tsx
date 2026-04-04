import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { ReviewLaterButton } from '../components/ReviewLaterButton'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does a diffusion model (like DALL-E or Midjourney) create an image from a text prompt?',
    options: [
      'It searches the internet for a matching image and copies it',
      'It starts with a completely random, noisy image and gradually refines it until it matches the description',
      'It stitches together pieces of existing photos from its training data',
      'A human artist inside the system draws the image based on the prompt',
    ],
    correctIndex: 1,
    explanation:
      'Diffusion models are trained by learning to reverse a process of adding noise to images. Starting from pure noise, the model uses the text description to guide thousands of small refinement steps, gradually producing a coherent image. No internet search or direct copying is involved.',
  },
  {
    question: 'What was the Getty Images vs Stability AI lawsuit about?',
    options: [
      'Getty claimed that Stable Diffusion had directly copied and sold Getty photos',
      'Getty claimed that Stable Diffusion was trained on millions of Getty images without permission or payment, and that AI outputs are too similar to Getty content',
      'Stability AI claimed that Getty was using AI to generate fake photographs',
      'Getty and Stability AI were both suing each other over the same patent',
    ],
    correctIndex: 1,
    explanation:
      "Getty Images sued Stability AI in 2023, alleging that Stable Diffusion was trained on over 12 million Getty images without a licence. Getty argued this violated copyright and that some AI outputs even showed distorted Getty watermarks, suggesting the training data was directly scraped from their site. The case raises fundamental questions about whether training on copyrighted work without payment is lawful.",
  },
  {
    question: "In 2022, an AI-generated image won first prize at the Colorado State Fair's fine arts competition. Why was this controversial?",
    options: [
      'The judges did not know it was AI-generated when they awarded the prize',
      'The creator claimed the image was a photograph, not a digital artwork',
      'AI images are not allowed in any art competitions by law',
      'The image was identical to a painting by a known artist',
    ],
    correctIndex: 0,
    explanation:
      "Jason Allen submitted 'Théâtre D'Opéra Spatial' to the competition under the category 'Digital Arts / Digitally-Manipulated Photography'. The judges awarded it first place without realising it had been created using Midjourney. When Allen publicly revealed this, a fierce debate erupted about whether AI-generated work should compete with human-made art in the same category.",
  },
  {
    question: 'What does it mean when artists say they are opting out of AI training datasets?',
    options: [
      'They are deleting all their artwork from the internet',
      'They are adding technical markers or legal notices to their work requesting that AI companies do not include it in training data',
      'They are suing AI companies individually',
      'They are switching from digital to physical media so their work cannot be scanned',
    ],
    correctIndex: 1,
    explanation:
      "Tools like Glaze (from the University of Chicago) let artists add subtle, invisible perturbations to images that confuse AI training — making the image look normal to humans but causing the AI to mislearn from it. Some platforms, like ArtStation and DeviantArt, have also added opt-out settings. However, most web-scraped datasets were collected before these tools existed, so they offer limited protection for historical work.",
  },
]

export function AIAndArt() {
  useMarkVisited('ai-and-art')

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F58C;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and art
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI makes images from text, what it means for artists and copyright,
            and the big questions about creativity and authorship.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-art" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The tools making waves</h2>
          <p className="text-gray-600 leading-relaxed">
            In the past few years, a new category of AI has emerged: <strong>text-to-image
            generators</strong>. You type a description &mdash; &ldquo;a fox in a library at night,
            oil painting style&rdquo; &mdash; and within seconds the AI produces a detailed,
            original-looking image.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F310;',
                label: 'DALL-E (OpenAI)',
                text: "OpenAI's image generator, integrated into ChatGPT. Known for following prompts very precisely and producing clean, polished results across many styles.",
              },
              {
                icon: '&#x2728;',
                label: 'Midjourney',
                text: 'A popular service known for its highly aesthetic, painterly outputs. Widely used by concept artists and designers. Accessed via Discord.',
              },
              {
                icon: '&#x1F513;',
                label: 'Stable Diffusion (Stability AI)',
                text: 'An open-source model that anyone can download and run on their own computer. Its openness has led to a huge ecosystem of variants and fine-tuned versions.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How do diffusion models work?</h2>
          <p className="text-gray-600 leading-relaxed">
            The technique behind these tools is called a <strong>diffusion model</strong>.
            Here is the intuition:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-600 text-sm leading-relaxed">
            <li>
              <strong>Training:</strong> The AI is shown millions of images. For each image,
              it is trained to predict what the image looked like before random noise was added.
              It does this thousands of times per image, learning to &ldquo;denoise&rdquo; progressively.
            </li>
            <li>
              <strong>Generating:</strong> At runtime, the AI starts with a completely random,
              noisy image &mdash; pure static. Step by step, it removes noise in a direction guided
              by your text description, until a coherent image emerges.
            </li>
            <li>
              <strong>Text guidance:</strong> A separate model (CLIP, developed by OpenAI) connects
              words to visual concepts. It acts as a compass, steering each denoising step toward
              images that match the description.
            </li>
          </ol>
          <div className="bg-violet-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-violet-800 text-sm">The key point</p>
            <p className="text-violet-700 text-sm leading-relaxed">
              The AI does not search the internet for a matching image or copy pieces of photos
              together. It synthesises something new based on patterns learned during training.
              But those patterns came from real artists&apos; work &mdash; which is at the heart of
              the copyright debate.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The copyright dispute</h2>
          <p className="text-gray-600 leading-relaxed">
            AI image generators were trained on vast datasets scraped from the internet &mdash;
            including billions of images created by professional photographers, illustrators,
            and digital artists. Those artists were not asked for permission and were not paid.
          </p>
          <div className="bg-red-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-red-800 text-sm">Case study: Getty Images vs Stability AI</p>
            <p className="text-red-700 text-sm leading-relaxed">
              In 2023, Getty Images sued Stability AI (the maker of Stable Diffusion) in the
              UK and USA, alleging the model was trained on more than 12 million Getty images
              without a licence. Getty noted that some AI outputs showed distorted versions of
              their watermark &mdash; strong evidence that Getty content was in the training data.
              The case is ongoing and could set a major legal precedent.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed">
            The core legal question &mdash; does training an AI on copyrighted work count as
            copyright infringement? &mdash; has not yet been definitively answered in court in
            most countries.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Artists fighting back</h2>
          <p className="text-gray-600 leading-relaxed">
            Many artists have taken practical steps to protect their work:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F6E1;&#xFE0F;',
                label: 'Glaze and Nightshade',
                text: "Tools from the University of Chicago that add invisible perturbations to images, causing AI models to mislearn from them. Glaze makes the style harder to copy; Nightshade is designed to corrupt the model's outputs when trained on poisoned images.",
              },
              {
                icon: '&#x274C;',
                label: 'Platform opt-outs',
                text: "Sites like ArtStation and DeviantArt added settings allowing artists to request their work not be used in AI training datasets. Adobe Firefly was specifically trained only on licensed and public domain content.",
              },
              {
                icon: '&#x2696;&#xFE0F;',
                label: 'Class action lawsuits',
                text: "Groups of artists have filed class action lawsuits in the USA against Midjourney, Stability AI, and DeviantArt, arguing mass copyright infringement.",
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

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI art winning competitions</h2>
          <p className="text-gray-600 leading-relaxed">
            In 2022, Jason Allen submitted an AI-generated image to the Colorado State Fair&apos;s
            fine arts competition. The image &mdash; &ldquo;Th&eacute;&acirc;tre D&apos;Op&eacute;ra Spatial&rdquo;, created with
            Midjourney &mdash; won first place in the &ldquo;Digital Arts&rdquo; category. The judges did not
            know it was AI-generated.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When Allen announced this publicly, a fierce debate erupted. Some argued AI
            is just a tool, like Photoshop. Others felt it was fundamentally different &mdash;
            that true artistic creation requires human intent, struggle, and skill, and that
            AI work should be in its own category.
          </p>
          <div className="bg-amber-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-amber-800 text-sm">The deeper question</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              Is writing a clever prompt a creative act? Many photographers would say the
              same question was asked when cameras were invented &mdash; &ldquo;is pressing a button
              really art?&rdquo; There is no settled answer. What is clear is that AI is changing
              who can produce visual content and at what speed and cost.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The big picture</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-violet-50 border border-violet-100 rounded-xl p-4">
              <p className="font-semibold text-violet-800 text-sm mb-2">Opportunities</p>
              <ul className="text-violet-700 text-sm space-y-1 leading-relaxed">
                <li>Anyone can create high-quality visuals without drawing skills</li>
                <li>Rapid prototyping for designers and filmmakers</li>
                <li>New forms of artistic expression and collaboration</li>
                <li>Lower cost for small businesses needing images</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-semibold text-orange-800 text-sm mb-2">Concerns</p>
              <ul className="text-orange-700 text-sm space-y-1 leading-relaxed">
                <li>Unconsenting use of artists&apos; work in training data</li>
                <li>Potential job losses for illustrators and stock photographers</li>
                <li>Deepfakes and photorealistic misinformation</li>
                <li>Unclear copyright ownership of AI-generated images</li>
              </ul>
            </div>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-art" />
        <LessonNote lessonId="ai-and-art" />

        <Quiz questions={quizQuestions} lessonId="ai-and-art" lessonTitle="AI and art" />

        <LessonRating lessonId="ai-and-art" />
        <RelatedLessons currentId="ai-and-art" />
        <NextLesson currentId="ai-and-art" />
      </div>
    </div>
  )
}
