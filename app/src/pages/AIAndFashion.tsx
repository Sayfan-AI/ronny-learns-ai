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

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does AI trend forecasting work in the fashion industry?',
    options: [
      'AI reads fashion magazines and copies what editors recommend',
      'AI analyses millions of social media images and posts to detect which styles, colours, and patterns are gaining popularity before they go mainstream',
      'AI surveys shoppers in stores about what they plan to buy next season',
      'AI studies the weather forecast to predict which clothes people will need',
    ],
    correctIndex: 1,
    explanation:
      'Companies like Heuritech analyse around 3 million social media images daily to spot emerging trends. The AI tracks which colours, silhouettes, patterns, and styles are growing in popularity — weeks or months before they appear in mainstream shops. Fashion brands use this to make manufacturing decisions earlier, reducing the risk of producing styles that nobody wants.',
  },
  {
    question: 'What is "virtual try-on" technology?',
    options: [
      'A system that lets customers video-call a personal stylist for advice',
      'AI that uses your body measurements and photos to show how clothes would look on you without physically trying them on',
      'A 3D scanner in changing rooms that suggests what size to buy',
      'An AI chatbot that recommends outfits based on your previous purchases',
    ],
    correctIndex: 1,
    explanation:
      'Virtual try-on uses AI to detect body landmarks from a photo and then overlay clothing onto your image using texture mapping — so you can see how a garment would look on your body shape without visiting a shop. Zalando and Amazon both offer this. It aims to reduce returns (a major cost and environmental problem in online fashion) by helping shoppers visualise fit before buying.',
  },
  {
    question: 'How does Stitch Fix use AI to reduce waste in fashion?',
    options: [
      'It uses AI to design clothes that are less likely to go out of fashion quickly',
      'It uses machine learning to predict which items individual subscribers will keep, so it only ships clothes people are likely to want — reducing returns and overproduction',
      'It uses AI to recycle returned clothes into new fabrics automatically',
      'It uses AI to match customers with local tailors who can alter ill-fitting clothes',
    ],
    correctIndex: 1,
    explanation:
      'Stitch Fix sends subscribers personalised boxes of clothing, chosen by a combination of AI and human stylists. The AI analyses each customer\'s purchase and return history, feedback, and preferences to predict what they will keep. This means less overproduction and fewer returns — both significant sources of waste in the fashion industry. The model has been so effective that AI recommendations now drive the majority of its selections.',
  },
  {
    question: 'What is the main ethical concern about AI-generated fashion models?',
    options: [
      'AI models are too expensive for small fashion brands to use',
      'AI models might make mistakes when posing in complex positions',
      'Replacing real human models with AI-generated synthetic models raises concerns about job displacement, lack of diversity, and the erasure of real bodies from fashion imagery',
      'AI models take too long to render and slow down website load times',
    ],
    correctIndex: 2,
    explanation:
      "In 2023, Levi's announced a partnership with Lalaland.ai to create AI-generated models of diverse body types, sizes, and skin tones for its website. This sparked debate: while AI models can theoretically show more diverse body types, they also displace real models' jobs and raise questions about whose image is being used to train the AI. Critics argue the solution to lack of diversity in fashion should be hiring more diverse human models, not replacing them with synthetic ones.",
  },
  {
    question: 'What environmental problem does AI trend forecasting help reduce in the fashion industry?',
    options: [
      'The carbon emissions from fashion shows and runway events',
      'The water pollution caused by synthetic fabric production',
      'Overproduction — the industry produces billions of unsold garments each year, many of which end up in landfill',
      'The electricity used by fashion brand websites to show product images',
    ],
    correctIndex: 2,
    explanation:
      "The fashion industry produces an estimated 100 billion garments per year, and around 30% are never sold. Unsold stock is often destroyed or sent to landfill — a massive environmental problem. AI trend forecasting helps brands produce closer to actual demand, and tools like demand prediction reduce how many items get manufactured without buyers. It won't solve fast fashion's environmental issues alone, but it is one lever brands are pulling.",
  },
]

export function AIAndFashion() {
  useMarkVisited('ai-and-fashion')

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F457;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and fashion
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI predicts next season&rsquo;s trends, lets you try clothes on
            without a changing room, and cuts billions of unsold garments from landfill.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <DifficultyBadge level="Beginner" />
          </div>
          <CompletedBadge lessonId="ai-and-fashion" />
          <ShareButton lessonTitle="AI and fashion" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Predicting what you will want to wear</h2>
          <p className="text-gray-600 leading-relaxed">
            Fashion has always been about anticipating desire. What will people want to wear next
            season? For most of history, that question was answered by intuition, experience, and
            a lot of guesswork. AI has changed the equation.
          </p>
          <div className="bg-pink-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-pink-800 text-sm">How Heuritech reads social media</p>
            <p className="text-pink-700 text-sm leading-relaxed">
              The Paris-based startup Heuritech analyses around 3 million social media images per
              day across Instagram, TikTok, and Pinterest. Its AI identifies which colours, silhouettes,
              fabrics, and patterns are appearing more frequently &mdash; and flags what is growing
              before it becomes mainstream. Fashion brands use this data to make manufacturing
              decisions 12 to 18 months in advance, reducing the risk of producing clothes
              nobody ends up wanting.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            Other trend-forecasting platforms like EDITED and WGSN use AI to analyse runway shows,
            retail pricing, and competitor stock levels in real time &mdash; giving buyers and
            designers a data-driven view of where the market is heading.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Generative design tools</h2>
          <p className="text-gray-600 leading-relaxed">
            AI image generators have entered the fashion design process &mdash; and sparked
            significant debate about creativity, ownership, and who gets credit.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F58C;&#xFE0F;',
                label: 'Concept and mood boards',
                text: "Designers at brands including H&M and Adidas use Midjourney and Stable Diffusion to generate concept images and mood boards in minutes — exploring dozens of visual directions before committing to a design. What once took days of sketching now takes an afternoon of prompting.",
              },
              {
                icon: '&#x1F9F5;',
                label: 'Fabric pattern generation',
                text: "AI tools can generate unique textile patterns — stripes, florals, abstract prints — at any scale and resolution. Companies sell AI-generated print licences to small fashion brands that cannot afford original pattern designers. This democratises access to design but also raises questions about the artists whose work trained the models.",
              },
              {
                icon: '&#x1F4BC;',
                label: 'From concept to product faster',
                text: "The traditional fashion design cycle — concept, sketch, sample, revision — could take months. AI shortens concept phases, though physical sampling still takes time. The risk is that speed increases overproduction; the opportunity is that better-targeted designs reduce waste.",
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

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Virtual try-on: shopping without a changing room</h2>
          <p className="text-gray-600 leading-relaxed">
            One of the biggest problems in online fashion is returns. Shoppers buy clothes that
            do not fit, then send them back. Returns cost brands and the environment enormously.
            Virtual try-on technology aims to fix this.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4F7;',
                label: 'How it works',
                text: "You upload a photo. The AI detects body landmarks — shoulders, waist, hips — and builds a rough 3D model of your body shape. It then maps the selected garment's texture and shape onto your image, showing how the item would drape on your specific body. The result is a realistic-looking photo of you wearing the clothes.",
              },
              {
                icon: '&#x1F6CD;&#xFE0F;',
                label: 'Zalando and Amazon',
                text: "Zalando (Europe's largest fashion retailer) and Amazon both offer virtual try-on for shoes and some clothing. Amazon's 'Virtual Try-On for Shoes' lets you point your phone camera at your feet and see how trainers look on you in real time using augmented reality.",
              },
              {
                icon: '&#x1F4C9;',
                label: 'Does it reduce returns?',
                text: "Early data suggests yes — but modestly. Shoppers who use virtual try-on are somewhat less likely to return items. The bigger gains come from better size recommendation tools (which recommend your likely size based on your measurements and brand sizing data), which Zalando and ASOS both offer.",
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

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Cutting waste: Stitch Fix and demand prediction</h2>
          <p className="text-gray-600 leading-relaxed">
            The fashion industry is one of the world&rsquo;s most wasteful &mdash; producing
            around 100 billion garments per year, with roughly 30% never sold. AI is being used
            to bring supply closer to demand.
          </p>
          <div className="bg-green-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-green-800 text-sm">Stitch Fix&rsquo;s personalisation model</p>
            <p className="text-green-700 text-sm leading-relaxed">
              Stitch Fix sends subscribers a box of clothes chosen by AI and human stylists working
              together. The AI analyses each customer&rsquo;s history &mdash; what they kept, returned,
              and said about each item &mdash; along with similar customers&rsquo; preferences. It
              predicts which items a specific person is most likely to keep. The result: Stitch Fix
              ships fewer returns and produces closer to actual demand. AI recommendations now
              influence the majority of its selections.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The AI model debate</h2>
          <p className="text-gray-600 leading-relaxed">
            In 2023, Levi&rsquo;s announced a partnership with Lalaland.ai to create AI-generated
            models of diverse body types for its website. The announcement ignited a fierce debate.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="font-semibold text-blue-800 text-sm mb-2">The argument for</p>
              <ul className="text-blue-700 text-sm space-y-1 leading-relaxed">
                <li>Can represent a wider range of body sizes and skin tones</li>
                <li>Cheaper to produce at scale than photo shoots</li>
                <li>Always available, never needs rebooking</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-xl p-4">
              <p className="font-semibold text-red-800 text-sm mb-2">The concerns</p>
              <ul className="text-red-700 text-sm space-y-1 leading-relaxed">
                <li>Displaces real models&rsquo; jobs and income</li>
                <li>Erases real bodies from fashion imagery</li>
                <li>Trained on images of real people without consent</li>
                <li>Fails to address the root cause: lack of diverse casting</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            The debate reflects a wider tension: AI can produce diverse-looking outputs at low cost,
            but doing so by displacing the very people whose diversity you claim to celebrate is
            not a genuine solution.
          </p>
        </div>

        <ReviewLaterButton lessonId="ai-and-fashion" />
        <LessonNote lessonId="ai-and-fashion" />

        <Quiz questions={quizQuestions} lessonId="ai-and-fashion" lessonTitle="AI and fashion" />

        <LessonFeedback lessonId="ai-and-fashion" />
        <LessonRating lessonId="ai-and-fashion" />
        <RelatedLessons currentId="ai-and-fashion" />
        <NextLesson currentId="ai-and-fashion" />
      </div>
    </div>
  )
}
