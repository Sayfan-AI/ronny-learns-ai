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
import { KeyTakeaways } from '../components/KeyTakeaways'

const LESSON_TITLE = 'AI and the arts'

const KEY_TAKEAWAYS = [
  'Museums and galleries use AI to personalise visitor experiences — from tailored audio guides to real-time crowd management — while Google Arts and Culture makes global collections searchable by anyone.',
  'AI is transforming art conservation: scanning X-rays of old paintings to reveal hidden works, digitally restoring damaged frescoes, and helping preserve cultural heritage threatened by conflict or climate change.',
  'Contemporary artists are using generative AI tools as creative instruments — but the practice is contested, with ongoing legal battles over whether training on artists\' work without consent is lawful.',
  'The entertainment and theatre industries are concerned about AI-generated scripts, AI voice clones, and digital doubles — issues that drove the 2023 Hollywood writers\' and actors\' strikes.',
  'You have practical options: the Have I Been Trained? website lets artists check whether their work is in AI training datasets, and they can opt out of some datasets.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does AI help museums and galleries provide better visitor experiences?',
    options: [
      'AI replaces human curators entirely, selecting which works are displayed and writing all interpretation labels without human oversight',
      'AI enables personalised audio guides, makes global collections searchable online, helps manage visitor flow, and powers accessibility tools like image descriptions for blind visitors',
      'AI is only used in museums for ticketing and shop management — cultural institutions have agreed not to use AI in any curatorial or interpretive role',
      'AI is used exclusively to authenticate artworks, detecting forgeries by analysing brushstroke patterns with 100% accuracy',
    ],
    correctIndex: 1,
    explanation:
      "Museums have found many practical uses for AI that enhance rather than replace human expertise. Google Arts and Culture has digitised millions of artworks from over 2,000 institutions worldwide, making them searchable and discoverable by anyone. Some museums use AI to offer personalised audio guides — learning which rooms a visitor has spent time in and adjusting recommendations accordingly. Visitor flow analysis helps staff deploy resources on busy days. AI-generated image descriptions (alt text) help blind and partially sighted visitors engage with digital collections. The Rijksmuseum in Amsterdam uses AI to allow visitors to search its collection in natural language — 'show me paintings of storms at sea' — rather than navigating complex catalogue systems.",
    hint: 'Think about how the same AI tools used in retail or streaming could be applied in a cultural setting.',
  },
  {
    question: 'How is AI used in art conservation and heritage preservation?',
    options: [
      'AI physically restores damaged paintings by controlling robotic arms that apply new pigments to damaged areas',
      'AI analyses scientific imaging (like X-rays and infrared scans) to reveal hidden layers in paintings, digitally reconstructs damaged works, and helps digitise fragile manuscripts before they deteriorate',
      'AI conservation tools are only available to the largest national museums — smaller institutions and sites at risk cannot access or afford them',
      'Art conservation AI is still entirely theoretical — no real-world applications exist yet outside of research laboratories',
    ],
    correctIndex: 1,
    explanation:
      "AI is doing remarkable things in conservation without touching the physical objects. When conservators X-ray an old painting, the image shows layers of paint — sometimes revealing earlier compositions the artist painted over. AI can analyse these complex layered images far more effectively than human eyes alone, revealing hidden works (Picasso painted over many early canvases) or helping understand an artist's working process. After the Notre-Dame de Paris fire in 2019, a pre-existing detailed 3D scan of the cathedral — made for a videogame — became an essential reference for restoration. AI tools are also used to digitise fragile manuscripts, papyri, and oral recordings from endangered cultures before they are lost. The British Library and the Endangered Archives Programme have used AI-assisted transcription to process vast quantities of fragile historical material.",
    hint: 'Think about what AI can see in scientific scans that human eyes might struggle with.',
  },
  {
    question: 'What happened in the 2023 Hollywood strikes, and how was AI involved?',
    options: [
      'Hollywood writers and actors went on strike purely over pay disputes — AI was mentioned in negotiations but was not a significant concern for either union',
      'Writers and actors struck partly over studios\' plans to use AI to write scripts and create digital replicas of actors\' likenesses — winning new contractual protections against these uses',
      'The strikes were caused by AI systems already having replaced most writers and actors, with human workers demanding their jobs back',
      'The strikes ended when studios agreed to ban AI from the entertainment industry entirely for a period of ten years',
    ],
    correctIndex: 1,
    explanation:
      "The 2023 strikes by the Writers Guild of America and SAG-AFTRA (which represents actors) were the longest and most significant in Hollywood's history. AI was a central — though not the only — issue. Writers were concerned that studios would use AI to generate scripts, using their past work as training data without consent or compensation. Actors were concerned about 'digital doubles' — studios scanning an actor's likeness once and then using AI to put them in scenes indefinitely without additional pay. Both unions secured new contractual protections: studios must get consent and negotiate compensation before scanning an actor's likeness for AI use, and AI-generated scripts must be disclosed. The strikes showed that creative workers are actively shaping how AI is used in their industries, not simply accepting it.",
    hint: 'Think about what two specific things — writing and likenesses — the workers were protecting.',
  },
  {
    question: 'What is the "Have I Been Trained?" website, and who is it for?',
    options: [
      'A website where members of the public can check whether their personal data has been used to train AI chatbots like ChatGPT or Claude',
      'A website where artists can search whether their artwork appears in the LAION-5B dataset used to train image-generating AI models — and request to opt out',
      'A website run by the UK government that lists all AI companies operating in the UK and the training data they have used',
      'A website for AI developers to register the datasets they have used for training, creating a public record of AI training data sources',
    ],
    correctIndex: 1,
    explanation:
      "Have I Been Trained? (haveibeentrained.com) was created by the artist collective Spawning to give visual artists some visibility and control over whether their work appears in LAION-5B — the massive dataset of internet images used to train many image-generating AI systems including Stable Diffusion. Artists can search for their name or upload an image to see if it appears in the dataset. If it does, they can request to have it excluded from future training runs. This does not undo existing training, but it gives artists some recourse going forward. The site reflects a broader debate: AI companies largely scraped the internet to build training datasets without asking creators' permission, and artists, writers, photographers, and musicians are pushing back — through websites like this, through lawsuits, and through lobbying for new copyright protections.",
    hint: 'Think about what problem it solves for visual artists specifically.',
  },
]

export function AIAndTheArts() {
  useMarkVisited('ai-and-the-arts')

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3AD;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and the arts
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI is being used in museums, galleries, theatres, and cultural institutions —
            from personalising your visit to restoring ancient frescoes and sparking fierce debates
            about creativity, copyright, and what art is for.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-the-arts" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-violet-100 dark:border-violet-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI in museums and galleries</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Walk into the National Gallery or the Rijksmuseum today and you are surrounded by
            AI — though you might not notice it. Visitor flow cameras help staff anticipate
            where crowds are building. Digital kiosks use natural language processing so you
            can ask "where are the Dutch Golden Age paintings?" rather than reading a map.
            And behind the scenes, AI is making the vast majority of the world's cultural
            heritage accessible online for the first time.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F5BC;&#xFE0F;',
                label: 'Google Arts and Culture',
                text: 'Over 2,000 cultural institutions have partnered with Google Arts and Culture, creating high-resolution digital versions of millions of artworks. AI makes them searchable by colour, subject, time period, and emotion — and powers features like Art Selfie, which matches your face to a historical portrait.',
                color: 'violet',
              },
              {
                icon: '&#x1F3A7;',
                label: 'Personalised audio guides',
                text: "The Rijksmuseum's AI-powered audio guide learns from your behaviour in the museum — noticing which works you pause at, adjusting recommendations. Some institutions are experimenting with AI-generated commentary that adapts its language and depth to the visitor's apparent level of expertise.",
                color: 'violet',
              },
              {
                icon: '&#x267F;',
                label: 'Accessibility',
                text: 'AI-generated image descriptions (alt text) help blind and partially sighted visitors engage with digital collections. Live captioning powered by speech recognition makes gallery talks and theatre performances more accessible to deaf visitors.',
                color: 'violet',
              },
            ].map(({ icon, label, text, color }) => (
              <div key={label} className={`flex gap-3 items-start bg-${color}-50 dark:bg-${color}-950 rounded-xl p-3`}>
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className={`font-semibold text-${color}-800 dark:text-${color}-200 text-sm mb-0.5`}>{label}</p>
                  <p className={`text-${color}-700 dark:text-${color}-300 text-sm leading-relaxed`}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Art restoration and heritage preservation</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Some of AI's most unambiguously positive applications in culture are in conservation
            — helping us understand, preserve, and restore works that might otherwise be lost.
          </p>
          <div className="space-y-2">
            {[
              'X-ray and infrared analysis: conservators have always used scientific imaging to examine what lies beneath the surface of a painting. AI can analyse these complex images with greater precision, revealing hidden underdrawings, earlier compositions, and details invisible to the naked eye. Researchers have used AI to reveal a hidden portrait beneath a Picasso painting and to map the underdrawing of the Mona Lisa.',
              'Digital restoration: damaged or faded frescoes and manuscripts can be digitally reconstructed using AI — giving scholars a version to work from without physically touching the fragile original. The method has been used on ancient Pompeii wall paintings and Herculaneum papyri.',
              "Notre-Dame de Paris: when the cathedral caught fire in 2019, a detailed 3D scan made by art historian Andrew Tallon — and used in a videogame — became an invaluable reference for the restoration. AI is being used to analyse the scan and guide decisions about reconstruction.",
              'Endangered languages: the Endangered Archives Programme and similar initiatives use AI-assisted transcription and translation to process recordings of endangered languages and oral traditions before the last speakers are gone.',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-amber-600 dark:text-amber-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-pink-100 dark:border-pink-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Generative AI in contemporary art practice</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            A growing number of contemporary artists are using generative AI tools — Midjourney,
            Stable Diffusion, DALL-E, and custom models — as creative instruments. For some,
            AI is a new medium like photography or video was before it. For others, it raises
            deep questions about authorship, craft, and what it means to make something.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F3A8;',
                label: 'Refik Anadol',
                text: "The Turkish-American artist uses machine learning to create large-scale data sculptures — feeding AI systems with thousands of images (of nature, of architecture, of a city's history) and visualising the patterns it finds as flowing, immersive installations displayed in galleries and public spaces worldwide.",
                color: 'pink',
              },
              {
                icon: '&#x1F3C6;',
                label: 'The Théâtre d\'Opéra Spatial controversy',
                text: "In 2022, Jason Allen submitted an AI-generated image ('Théâtre d'Opéra Spatial', made with Midjourney) to a Colorado State Fair art competition and won first place. The revelation triggered intense debate about whether AI art should be eligible for competitions, and whether it constitutes 'real' art at all.",
                color: 'pink',
              },
              {
                icon: '&#x1F4BB;',
                label: 'Artists using AI as a tool',
                text: "Many working artists use AI tools as one element of a broader creative process — generating initial ideas, producing reference images, or creating textures that they then hand-finish. This is analogous to a photographer editing in Lightroom or a musician using synthesisers: the tool does not make the art, but it changes what is possible.",
                color: 'pink',
              },
            ].map(({ icon, label, text, color }) => (
              <div key={label} className={`flex gap-3 items-start bg-${color}-50 dark:bg-${color}-950 rounded-xl p-3`}>
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className={`font-semibold text-${color}-800 dark:text-${color}-200 text-sm mb-0.5`}>{label}</p>
                  <p className={`text-${color}-700 dark:text-${color}-300 text-sm leading-relaxed`}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI in theatre and performance</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The entertainment industry has felt the impact of AI more acutely — and more
            contentiously — than almost any other creative sector. The 2023 Hollywood writers'
            and actors' strikes brought AI concerns to global attention.
          </p>
          <div className="space-y-2">
            {[
              "Writers' fears: studios proposed using AI to generate script drafts that human writers would then 'polish' — effectively reducing the number of writers needed and lowering pay. The Writers Guild of America struck for 148 days and won new protections: AI-generated material must be disclosed, and writers cannot be forced to work on AI-generated scripts.",
              "Actors' fears: studios wanted to scan actors' digital likenesses and use them in perpetuity — effectively creating a digital double that could appear in scenes without the actor being present or paid. SAG-AFTRA secured consent and compensation requirements for digital replicas.",
              'Theatre: smaller theatre companies are exploring AI for generating initial script ideas, creating soundscapes, and producing projection content. The concerns are similar: credit, authorship, and whether AI-generated work displaces human artists.',
              'Voice cloning: AI can now clone a voice from a short recording. Legitimate uses include allowing people who have lost their voice to speak again. Illegitimate uses include creating fake audio of an actor saying things they never said — a serious concern for both artistic and legal reasons.',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The artist rights debate</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The central legal and ethical question in AI and the arts is consent: AI image
            generators were largely trained on billions of images scraped from the internet —
            including the work of professional artists — without asking permission or offering
            compensation. Artists argue this is copyright infringement. AI companies argue it
            falls under fair use or fair dealing.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x2696;&#xFE0F;',
                label: 'UK Intellectual Property Office consultation',
                text: 'The UK government consulted on whether to introduce a new copyright exception allowing AI companies to train on any lawfully accessible content. Following fierce opposition from the creative industries — musicians, authors, artists — the proposal was paused. The debate is ongoing.',
                color: 'slate',
              },
              {
                icon: '&#x1F50E;',
                label: 'Have I Been Trained?',
                text: "The website haveibeentrained.com allows artists to search whether their work appears in the LAION-5B dataset used to train many AI image generators, and to request exclusion from future training runs. It doesn't undo existing training but gives artists some recourse.",
                color: 'slate',
              },
              {
                icon: '&#x2696;&#xFE0F;',
                label: 'Legal cases',
                text: 'Getty Images has sued Stability AI (makers of Stable Diffusion) in both the UK and US for scraping its image library. A group of US artists brought a class action against Midjourney, Stable Diffusion, and DeviantArt. These cases will help establish whether training on copyrighted work requires permission or payment.',
                color: 'slate',
              },
            ].map(({ icon, label, text, color }) => (
              <div key={label} className={`flex gap-3 items-start bg-${color}-50 dark:bg-${color}-950 rounded-xl p-3`}>
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className={`font-semibold text-${color}-800 dark:text-${color}-200 text-sm mb-0.5`}>{label}</p>
                  <p className={`text-${color}-700 dark:text-${color}-300 text-sm leading-relaxed`}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">What you can do</h2>
          <div className="space-y-2">
            {[
              'Explore Google Arts and Culture (artsandculture.google.com) — it is free, and gives access to millions of artworks from museums worldwide that you might never be able to visit in person.',
              'If you are an artist or creator, visit haveibeentrained.com to check whether your work is in AI training datasets and request exclusion if you wish.',
              'When AI-generated art is exhibited or published, look for disclosure — reputable institutions and publishers should be transparent about when AI tools were used in the creative process.',
              'Support human artists directly: buy prints, attend performances, stream from platforms that pay fair royalties. The debate about AI and art is also a debate about whether creative work can support a living wage.',
              'Engage with the public consultation: the UK government periodically consults on AI and copyright. These are open processes where members of the public can respond — your view counts.',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-the-arts" />

        <Quiz lessonId="ai-and-the-arts" questions={quizQuestions} />

        <LessonNote lessonId="ai-and-the-arts" />

        <LessonRating lessonId="ai-and-the-arts" />

        <LessonFeedback lessonId="ai-and-the-arts" />

        <RelatedLessons currentId="ai-and-the-arts" />

        <NextLesson currentId="ai-and-the-arts" />

        <CompletedBadge lessonId="ai-and-the-arts" />

      </div>
    </div>
  )
}
