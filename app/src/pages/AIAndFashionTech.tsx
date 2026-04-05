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

const LESSON_TITLE = 'AI and fashion technology — trend forecasting, virtual try-on, and what AI means for the industry'

const KEY_TAKEAWAYS = [
  'AI trend forecasting analyses social media, search data, and past sales to predict which styles will sell — helping brands like Zara and ASOS reduce overproduction and waste.',
  'Virtual try-on technology uses computer vision and augmented reality to let shoppers see how clothes and accessories will look on them before buying — reducing returns.',
  'AI is being used to design garments, suggest sustainable fabric alternatives, and predict end-of-season surplus — addressing the fashion industry\'s enormous environmental footprint.',
  'The resale market (Depop, Vinted, eBay) uses AI to suggest pricing, detect counterfeit goods, and personalise recommendations.',
  'AI automation in fashion creates real risks for garment workers, buyers, and stylists — the technology changes who does what and which roles remain economically viable.',
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'How do brands like Zara and ASOS use AI trend forecasting?',
    options: [
      'To design entirely new clothing styles without any human designers involved',
      'To analyse social media trends, search data, and past sales patterns to predict which styles customers will buy — enabling more accurate stock decisions',
      'To automatically place orders with factories without human approval',
      'To copy designs from independent designers more quickly',
    ],
    correctIndex: 1,
    explanation:
      'AI trend forecasting uses large datasets — social media engagement, search query volumes, past sales by region and season — to predict which styles, colours, and silhouettes are likely to sell. This allows brands to produce closer to actual demand, reducing the overproduction that leads to unsold inventory being burned or landfilled.',
  },
  {
    question: 'What technology makes virtual try-on features work in apps like Snapchat and on retail websites?',
    options: [
      'AI generates a new photo of the customer wearing the item, reviewed by a stylist before being shown',
      'Computer vision and augmented reality — the app identifies the person\'s body or face, tracks its position in real time, and overlays a 3D model of the product that moves with them',
      'The customer sends a photo to the brand\'s customer service team, who Photoshop the item onto the image',
      'Virtual try-on only works for accessories — it cannot simulate how clothing fits or moves',
    ],
    correctIndex: 1,
    explanation:
      'Virtual try-on uses computer vision to detect and track a person\'s face, body, or hands in real time. Augmented reality then overlays a three-dimensional model of the product, resizing and repositioning it as the person moves. For clothing this involves estimating body pose and surface geometry. For beauty products it maps the product onto facial features.',
  },
  {
    question: 'How is AI being used to address fashion\'s environmental impact?',
    options: [
      'AI is replacing all synthetic fabrics with biodegradable materials automatically',
      'AI is used to predict surplus before it happens, recommend sustainable fabric substitutions, track supply chain carbon footprints, and optimise logistics to reduce emissions',
      'Fashion brands use AI to publish environmental reports that overstate their sustainability credentials',
      'AI has no significant role in sustainable fashion — improvements come entirely from consumer behaviour changes',
    ],
    correctIndex: 1,
    explanation:
      'Fashion is responsible for around 10% of global carbon emissions. AI is applied at multiple points: demand forecasting to reduce overproduction; materials science to identify sustainable fabric alternatives; supply chain visibility to track carbon and water footprints; and end-of-life prediction to route unsold stock to resale or recycling rather than landfill.',
  },
  {
    question: 'How do platforms like Depop and Vinted use AI in the resale market?',
    options: [
      'AI automatically photographs and lists items from sellers\' wardrobes without requiring the seller to do anything',
      'AI suggests pricing based on comparable sales, detects counterfeit or prohibited listings using image recognition, and personalises search results for buyers',
      'AI buys items from sellers at a fixed price and resells them at a profit',
      'AI only helps with payment processing — all listing, discovery, and pricing decisions are made by humans',
    ],
    correctIndex: 1,
    explanation:
      'Resale platforms use AI across multiple functions. Pricing suggestion tools analyse recent sales of comparable items. Image recognition models scan listings for counterfeit goods and prohibited items at a scale impossible for human moderators. Recommendation algorithms personalise the browsing experience based on each buyer\'s search history, saves, and past purchases.',
  },
  {
    question: 'What are the main risks that AI automation poses for fashion industry workers?',
    options: [
      'AI poses no real risk to fashion workers because all creative and manufacturing roles require human skills that AI cannot replicate',
      'AI trend forecasting and design tools reduce the need for human buyers and some design roles; logistics automation reduces warehouse jobs; and automated sewing machines are beginning to threaten the lowest-paid garment manufacturing roles',
      'The only workers at risk are senior executives and creative directors — AI primarily threatens high-status roles',
      'AI is only displacing workers in marketing and PR, not in design, buying, or manufacturing',
    ],
    correctIndex: 1,
    explanation:
      'AI trend forecasting and automated buying tools reduce the number of human trend analysts and buyers needed. In warehouses, robotic picking and sorting systems reduce manual handling jobs. Most significantly, the development of automated sewing machines threatens garment manufacturing roles that employ millions of workers — predominantly women — in Bangladesh, Cambodia, Vietnam, and other lower-income countries.',
  },
]

export function AIAndFashionTech() {
  useMarkVisited('ai-and-fashion-tech')

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{LESSON_TITLE}</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">8 min read &middot; Intermediate</p>

      <CompletedBadge lessonId="ai-and-fashion-tech" />
      <ShareButton lessonTitle={LESSON_TITLE} />

      <KeyTakeaways points={KEY_TAKEAWAYS} />

      <div className="prose prose-gray dark:prose-invert max-w-none mt-8">

        <h2>Fashion and AI: from runway to returns</h2>
        <p>
          Fashion is one of the world&apos;s largest industries &mdash; and one of its most wasteful. Around 30% of all clothing produced is never sold. Returns from online purchases run at 20&ndash;40% for clothing. AI is being deployed across the entire fashion value chain to address these problems.
        </p>

        <h2>Trend forecasting: predicting what will sell</h2>
        <p>
          Traditionally, fashion trend forecasting involved human experts studying runway shows, street style, and consumer research. AI has transformed this. Modern tools analyse millions of social media posts, search queries, and sales patterns to identify emerging trends weeks or months before they reach the mass market. Brands use these signals to decide which designs to produce, in what quantities, and for which markets &mdash; resulting in faster inventory decisions and lower overproduction.
        </p>

        <h2>Virtual try-on: solving the fit problem</h2>
        <p>
          The biggest reason people return online clothing purchases is fit. Virtual try-on technology is addressing this directly. Using computer vision and augmented reality, virtual try-on tools overlay digital models of clothing, shoes, or accessories onto a live video feed or photograph. Snapchat&apos;s AR try-on feature lets users preview sunglasses and trainers. ASOS has experimented with rendering products on virtual model avatars matched to the customer&apos;s size. As returns are expensive for both retailers and the environment, even modest reductions in return rates represent significant savings.
        </p>

        <h2>AI in design and sustainability</h2>
        <p>
          AI generative tools are used by fashion designers to rapidly explore colour palette variations, pattern combinations, and silhouette options. Some brands use AI to analyse which design elements from past collections performed best and generate new designs that blend successful features.
        </p>
        <p>
          On sustainability, AI is applied to: demand forecasting to reduce overproduction; recommending sustainable fabric alternatives; tracking supply chain carbon and water footprints; and predicting end-of-season surplus so unsold stock can be routed to resale or recycling rather than landfill. Critics note that AI efficiency gains can be offset by growth in overall production volumes.
        </p>

        <LessonNote lessonId="ai-and-fashion-tech" />

        <h2>The resale market</h2>
        <p>
          Platforms like Depop, Vinted, and eBay use AI to suggest prices based on comparable recent sales, detect counterfeit goods using image recognition, and personalise the browsing experience for buyers. This AI infrastructure is part of what has made the resale market grow dramatically in the 2020s.
        </p>

        <h2>What this means for fashion workers</h2>
        <p>
          Fashion employs tens of millions of people globally. AI is changing what many of them do. Buyers and trend analysts find AI takes over data analysis work. Designers use AI for rapid iteration. Most significantly, the development of automated sewing machines threatens garment manufacturing roles &mdash; primarily held by women in lower-income countries &mdash; that were previously too technically difficult to automate.
        </p>

      </div>

      <div className="mt-10">
        <Quiz questions={QUIZ_QUESTIONS} lessonId="ai-and-fashion-tech" />
      </div>

      <ReviewLaterButton lessonId="ai-and-fashion-tech" />
      <LessonRating lessonId="ai-and-fashion-tech" />
      <LessonFeedback lessonId="ai-and-fashion-tech" />
      <RelatedLessons currentId="ai-and-fashion-tech" />
      <NextLesson currentId="ai-and-fashion-tech" />
    </div>
  )
}
