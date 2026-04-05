import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { ShareButton } from '../components/ShareButton'

const LESSON_TITLE = 'AI and photography'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is a diffusion model, the technology behind tools like DALL-E and Midjourney?',
    options: [
      'A camera filter that blurs photographs to make them look more artistic',
      'A type of AI that starts with random noise and gradually shapes it into a recognisable image, guided by a text description',
      'A compression algorithm that reduces the file size of digital photographs',
      'A social media algorithm that decides which photos to show you',
    ],
    correctIndex: 1,
    explanation:
      'Diffusion models work by starting with a completely random, noisy image and then gradually refining it — removing noise step by step — until it becomes a coherent picture that matches the text prompt. This process is inspired by how physical processes like ink diffusing in water work in reverse. The model learned from billions of labelled images how to guide this process toward meaningful results.',
    hint: 'Think of it as starting with television static and slowly turning it into a picture.',
  },
  {
    question: 'What is a deepfake photograph?',
    options: [
      'A photograph taken with an underwater camera',
      'A photo that has been colour-corrected using AI editing tools',
      'A synthetic image of a real person — or a real scene — that was generated or manipulated by AI to show something that never happened',
      'A photograph shared so many times online that the quality has degraded',
    ],
    correctIndex: 2,
    explanation:
      'A deepfake photograph is a synthetic or heavily manipulated image that depicts a real person, place, or event in a way that never occurred. Early deepfakes required significant expertise; modern AI tools can generate convincing fake photos in seconds. They have been used to spread misinformation, impersonate politicians, create non-consensual intimate images, and run romance scams.',
    hint: 'The word "deep" refers to deep learning — the AI technique used to generate them.',
  },
  {
    question: 'Which of the following is a reliable way to check whether a photo you have seen online might be AI-generated or manipulated?',
    options: [
      'If the photo has a lot of likes and shares, it is more likely to be real',
      'Use a reverse image search (Google Images or TinEye) to see where else the image appears and whether the original source is credible',
      'AI-generated images always have a watermark, so the absence of a watermark means the photo is real',
      'Photos taken on a smartphone cannot be AI-generated',
    ],
    correctIndex: 1,
    explanation:
      'Reverse image search is one of the most accessible verification tools. Uploading a suspicious photo to Google Images or TinEye shows where else it has appeared online, when it was first indexed, and whether credible news organisations have used it. Specialist tools like InVID and FotoForensics can also detect manipulation. AI-generated images do not always have watermarks, and popularity is no indicator of authenticity.',
    hint: 'Think about the tools journalists use to fact-check photos.',
  },
  {
    question: 'Under UK law, who currently owns the copyright to an image generated entirely by AI with no human creative input?',
    options: [
      'The person who typed the text prompt',
      'The AI company that made the tool',
      'The original photographers whose images were used to train the AI',
      'Nobody — purely AI-generated images currently have no copyright owner in the UK',
    ],
    correctIndex: 3,
    explanation:
      "UK copyright law protects works created by human authors. A work generated entirely by AI — with no meaningful human creative contribution — is not currently protected by copyright, meaning anyone could use or republish it freely. However, if a human significantly shaped or edited the output, that human's contribution might attract protection. The law is being actively reviewed as AI capabilities grow rapidly.",
    hint: 'Copyright protects human creativity — and AI is not human.',
  },
  {
    question: 'Which of the following is a genuine way that professional photographers use AI tools today?',
    options: [
      'AI completely replaces the photographer — no human needs to take any photos at all',
      'AI automatically wins photography competitions on behalf of human photographers',
      'AI tools help with background removal, upscaling low-resolution images, and automated editing tasks in software like Lightroom and Photoshop',
      'AI prevents photos from being edited or manipulated after they are taken',
    ],
    correctIndex: 2,
    explanation:
      "Many professional photographers embrace AI tools for practical tasks: background removal (remove.bg, Photoshop), upscaling and sharpening low-resolution images (Topaz AI), automated culling of large photo shoots, sky replacement, and noise reduction. Adobe Lightroom now includes AI-powered masking and editing features used by millions. These tools speed up workflow rather than replacing the photographer's creative vision.",
    hint: 'Think about the boring, time-consuming editing tasks that take hours after a photo shoot.',
  },
]

export function AIAndPhotography() {
  useMarkVisited('ai-and-photography')

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4F7;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and photography
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Image generators, deepfakes, and what happens when you
            can no longer trust a photograph.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-photography" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How AI image generators work</h2>
          <p className="text-gray-600 leading-relaxed">
            Tools like DALL-E (OpenAI), Midjourney, Stable Diffusion, and Adobe Firefly can
            generate photorealistic images from a text description in seconds. Type "a fox
            wearing a top hat sitting in a library" and you get exactly that — an image that
            has never existed before.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The technology behind most of these tools is called a <strong>diffusion model</strong>.
            Here is how it works in plain language:
          </p>
          <div className="bg-sky-50 rounded-xl p-4 space-y-3">
            <p className="font-semibold text-sky-800 text-sm">Diffusion models — step by step</p>
            <ol className="text-sky-700 text-sm leading-relaxed space-y-2 list-decimal list-inside">
              <li>During training, the AI looked at billions of photos labelled with descriptions.</li>
              <li>It learned to add noise to images (like static on a TV) and then learned to reverse the process — to clean up noisy images back into recognisable pictures.</li>
              <li>When you type a prompt, the AI starts with pure random noise and gradually shapes it into an image that matches your description, step by step, guided by what it learned.</li>
            </ol>
          </div>
          <p className="text-gray-600 leading-relaxed">
            The results can be stunning — and indistinguishable from real photographs. That is
            exactly what makes them both exciting and concerning.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Deepfakes — what they are and why they matter</h2>
          <p className="text-gray-600 leading-relaxed">
            A <strong>deepfake photograph</strong> is a synthetic image that depicts a real person
            or event in a way that never happened. The name comes from "deep learning" — the AI
            technique used to make them.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F3DB;&#xFE0F;',
                label: 'Politics and elections',
                text: 'Fake images of politicians have been used to spread disinformation during elections in multiple countries — showing candidates in compromising situations, or at events they never attended.',
              },
              {
                icon: '&#x1F4F0;',
                label: 'Fake news and journalism',
                text: 'Major news agencies like Reuters and the Associated Press now have strict policies about AI-generated images. They require full disclosure because the public has lost the ability to tell real from fake at a glance.',
              },
              {
                icon: '&#x1F4F2;',
                label: 'Social media catfishing',
                text: 'AI-generated profile photos are used by scammers to create convincing fake identities — for romance scams, fake influencer accounts, and impersonating real people.',
              },
              {
                icon: '&#x1F6AB;',
                label: 'Non-consensual intimate images',
                text: 'This is one of the most harmful uses. AI is used to generate fake intimate images of real people — overwhelmingly targeting women. The UK made this a criminal offence in 2024.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-red-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-red-800 text-sm mb-0.5">{label}</p>
                  <p className="text-red-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How to spot an AI-generated photo</h2>
          <p className="text-gray-600 leading-relaxed">
            Modern AI images are very convincing, but there are often telltale signs — and tools
            to help you check:
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'Hands and fingers',
                text: 'AI still often gets hands wrong — too many fingers, fused joints, or unnatural positions. Always check hands in a suspicious image.',
              },
              {
                label: 'Background inconsistencies',
                text: 'Look at text in the background (it may be garbled or nonsensical), reflections in mirrors or glasses, and edges where objects meet — AI often struggles with fine details here.',
              },
              {
                label: 'Reverse image search',
                text: 'Drag the image into Google Images or upload it to TinEye to see if it appears elsewhere. A brand-new image that cannot be traced to any source should raise questions.',
              },
              {
                label: 'AI detection tools',
                text: 'Tools like InVID (free, browser extension), FotoForensics, and Hive Moderation can analyse images for signs of manipulation or AI generation. They are not perfect, but they are useful.',
              },
              {
                label: 'Metadata',
                text: 'Real photos contain metadata (camera model, GPS location, time taken). AI-generated images usually have no metadata, or metadata that has been stripped.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="flex gap-3 items-start">
                <span className="text-amber-500 font-bold text-lg flex-shrink-0 mt-0.5">&#x2713;</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI tools real photographers use</h2>
          <p className="text-gray-600 leading-relaxed">
            Not all AI in photography is about fake images. Many working photographers use AI tools
            to speed up their workflow and improve their work:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x2702;&#xFE0F;',
                label: 'Background removal',
                text: 'Tools like remove.bg and Adobe Photoshop can remove backgrounds from portraits in one click — a task that previously took hours of careful manual work.',
              },
              {
                icon: '&#x1F50D;',
                label: 'Upscaling',
                text: 'Topaz AI and similar tools can take a low-resolution or blurry photo and intelligently enhance it, adding realistic detail that was not in the original. Useful for old family photos.',
              },
              {
                icon: '&#x1F3A8;',
                label: 'AI editing in Lightroom and Photoshop',
                text: "Adobe has built AI into both tools. Lightroom can automatically select a subject, apply edits to just the sky, or recognise faces and apply specific adjustments. Photoshop's Generative Fill can extend a photo beyond its edges or remove unwanted objects seamlessly.",
              },
              {
                icon: '&#x1F4E4;',
                label: 'Culling and sorting',
                text: 'After a wedding or event shoot, a photographer may have 2,000 photos to sort through. AI tools can rank photos by sharpness, expression quality, and composition — reducing hours of sorting to minutes.',
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
          <h2 className="text-2xl font-bold text-gray-800">Copyright and AI-generated images</h2>
          <p className="text-gray-600 leading-relaxed">
            Who owns an AI-generated image? The legal answer in the UK and US is currently:
            <strong> nobody</strong>, if no human made significant creative choices.
          </p>
          <div className="bg-purple-50 rounded-xl p-4 space-y-3">
            <p className="font-semibold text-purple-800 text-sm">The key legal questions</p>
            <ul className="text-purple-700 text-sm leading-relaxed space-y-2 list-disc list-inside">
              <li>Copyright protects human creativity. A purely AI-generated image currently has no copyright owner — anyone can use it.</li>
              <li>If a human photographer significantly directs, edits, and shapes an AI image, they may be able to claim copyright over the result. The line is not yet clearly defined.</li>
              <li>The UK Intellectual Property Office is reviewing this area. US courts are also hearing cases. The law will change.</li>
            </ul>
          </div>
          <p className="text-gray-600 leading-relaxed">
            There is also the question of what the AI was trained on. Many image generators were trained
            on images scraped from the internet, including the work of living photographers and artists
            who never consented. Several lawsuits are ongoing against AI companies including Stability AI
            and Midjourney.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <p className="font-semibold text-amber-800 mb-2">Key takeaway</p>
          <p className="text-amber-700 text-sm leading-relaxed">
            AI has fundamentally changed what it means to "see it in a photo". A photograph is no
            longer evidence that something happened. The skills of a good media consumer now include
            knowing how to check whether an image is real — reverse image search, source checking,
            and healthy scepticism about anything dramatic or emotionally charged.
          </p>
        </div>

        <ReviewLaterButton lessonId="ai-and-photography" />
        <LessonNote lessonId="ai-and-photography" lessonTitle={LESSON_TITLE} />

        <Quiz questions={quizQuestions} lessonId="ai-and-photography" lessonTitle={LESSON_TITLE} />

        <LessonRating lessonId="ai-and-photography" />
        <RelatedLessons currentId="ai-and-photography" />
        <NextLesson currentId="ai-and-photography" />
      </div>
    </div>
  )
}
