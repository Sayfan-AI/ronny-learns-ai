import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
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
    question: 'When you use a free AI chatbot, what is often used to help pay for the service?',
    options: [
      'Government grants fund all free AI services',
      'Your conversations and usage data, which may be used to train future models or target advertising',
      'The AI generates money by investing in stocks',
      'Other paid users cross-subsidise free users with no data involvement',
    ],
    correctIndex: 1,
    explanation:
      'Many free AI products are funded in part by using your interactions to improve their models, or by selling access to your usage patterns to advertisers. This is not always clearly disclosed. It is worth reading privacy policies to understand exactly what happens to your data.',
  },
  {
    question: 'What does GDPR give people in Europe the right to do?',
    options: [
      'Sue any AI company for using AI at all',
      'Access, correct, and in some cases delete personal data that companies hold about them',
      'Demand a physical printout of every AI model\'s weights',
      'Choose which AI company is allowed to operate in their country',
    ],
    correctIndex: 1,
    explanation:
      'GDPR (General Data Protection Regulation) gives EU residents rights over their personal data: the right to see what is held, to correct errors, to restrict processing, and in some cases to have their data deleted — the "right to be forgotten". Similar laws exist in other countries.',
  },
  {
    question: 'Why is it risky to share sensitive personal information with AI chatbots?',
    options: [
      'AI chatbots will immediately share your information with your employer',
      'Your conversations may be stored, reviewed by staff, used for training, or potentially exposed in a data breach',
      'AI cannot process personal information at all',
      'There is no risk — AI chatbots are fully private by law in all countries',
    ],
    correctIndex: 1,
    explanation:
      'Conversations with AI chatbots are typically stored on company servers. They may be reviewed by staff for safety or quality purposes, used to improve the model, and are subject to the same data breach risks as any online service. Sensitive information — financial, medical, legal — should be treated with caution.',
  },
  {
    question: 'What is the simplest way to protect your privacy when using AI tools?',
    options: [
      'Never use any AI tool under any circumstances',
      'Always use AI in a private browser window',
      'Be thoughtful about what you share: avoid names, addresses, financial details, and sensitive personal information',
      'Change your name before signing up to any AI service',
    ],
    correctIndex: 2,
    explanation:
      'The most practical step is simply being mindful of what you type. You can often get help with a task by describing it in general terms without sharing identifying details. For example, instead of "my bank account number is X and I need help with...", describe the situation without the sensitive numbers.',
  },
]

export function AIAndPrivacy() {
  useMarkVisited('ai-and-privacy')
  useLessonVisit('ai-and-privacy')
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F512;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and privacy
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Who sees your data when you use AI tools, how your information may be used,
            and what your rights are.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-privacy" />
          <ShareButton lessonTitle="ai-and-privacy" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What data do AI apps collect?</h2>
          <p className="text-gray-600 leading-relaxed">
            When you use an AI chatbot, image generator, or recommendation system, several types
            of data are typically collected &mdash; some obvious, some less so.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'Your prompts and conversations',
                text: 'Everything you type into an AI chatbot is sent to the company\'s servers. Most services store these conversations, sometimes indefinitely. This includes anything you share: names, medical details, financial information, personal problems.',
              },
              {
                label: 'Usage patterns',
                text: 'When you use the service, how long sessions last, which features you use, and how often you return — all of this creates a profile of your behaviour.',
              },
              {
                label: 'Device and account information',
                text: 'Your IP address, device type, browser, and (if you have an account) your email address are typically collected. This can be linked to your conversations.',
              },
              {
                label: 'Feedback and ratings',
                text: 'When you give a thumbs up or down, or correct an AI, that feedback is collected and used to improve future model versions.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-gray-800 text-sm">{label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How your data may be used</h2>
          <p className="text-gray-600 leading-relaxed">
            Different AI companies have different policies &mdash; and policies change over time. Common
            uses of your data include:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4DA;',
                label: 'Training future models',
                text: 'Many AI services use conversations to improve future versions of their models. This means your questions and the AI\'s answers become part of the training data. Some services let you opt out; others do it by default.',
              },
              {
                icon: '&#x1F440;',
                label: 'Human review',
                text: 'Staff at AI companies may review a sample of conversations for safety, quality assurance, and to understand how the AI is being used. These are usually anonymised, but not always immediately.',
              },
              {
                icon: '&#x1F4B0;',
                label: 'Advertising and partnerships',
                text: 'Free AI services often fund themselves through advertising or by sharing data with business partners. Your usage patterns may be used to target you with ads on other platforms.',
              },
              {
                icon: '&#x1F510;',
                label: 'Legal compliance',
                text: 'Companies may share your data with law enforcement if required to by a court order. This is standard practice for any online service operating in countries with legal disclosure requirements.',
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
          <h2 className="text-2xl font-bold text-gray-800">Reading privacy policies (without falling asleep)</h2>
          <p className="text-gray-600 leading-relaxed">
            Privacy policies are long and written in legal language &mdash; most people skip them.
            But a few key questions can tell you almost everything you need to know:
          </p>
          <div className="space-y-3">
            {[
              'Do they train on your conversations? Can you opt out?',
              'How long do they keep your data?',
              'Who do they share it with? (Look for "third parties" or "partners")',
              'Can you delete your account and data?',
              'Have they had any data breaches?',
            ].map((q) => (
              <div key={q} className="flex gap-3 items-start">
                <span className="text-violet-500 font-bold flex-shrink-0">?</span>
                <p className="text-gray-600 text-sm leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
            <p className="text-violet-800 font-semibold text-sm">Tip</p>
            <p className="text-violet-700 text-sm leading-relaxed mt-1">
              Search for the company name + "privacy policy training data" and you will often find
              news articles that summarise the key points in plain language &mdash; much faster than
              reading the full policy.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Your rights: what the law says</h2>
          <p className="text-gray-600 leading-relaxed">
            Depending on where you live, you may have significant legal rights over your personal
            data held by AI companies.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'GDPR (European Union)',
                text: 'The world\'s strongest privacy law. You have the right to access your data, correct inaccuracies, restrict processing, and in some cases delete your data (the "right to be forgotten"). Companies must explain clearly how they use your data and get meaningful consent.',
              },
              {
                label: 'UK GDPR',
                text: 'The UK adopted similar rules after Brexit. Many of the same protections apply.',
              },
              {
                label: 'CCPA (California)',
                text: 'California residents have the right to know what personal data is collected, to opt out of data sales, and to delete their data. Other US states are introducing similar laws.',
              },
              {
                label: 'Elsewhere',
                text: 'Privacy protections vary significantly worldwide. In many countries, you have fewer formal rights — though major AI companies typically offer some controls regardless of location.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-gray-800 text-sm">{label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Practical tips: staying safe</h2>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F6AB;',
                label: 'Never share sensitive data',
                text: 'Avoid sharing real names, addresses, phone numbers, financial account details, passwords, or medical records with AI chatbots. Describe your situation in general terms if you need help with something sensitive.',
              },
              {
                icon: '&#x2699;&#xFE0F;',
                label: 'Check your privacy settings',
                text: 'Most AI services have a settings page where you can turn off training on your data, clear your history, or download a copy of your data. These options are often buried but they exist.',
              },
              {
                icon: '&#x1F4DD;',
                label: 'Use a work tool for work',
                text: 'If your employer provides an AI tool for work, use that for work tasks. Using a personal ChatGPT account for work-related queries may inadvertently share company information with a third party.',
              },
              {
                icon: '&#x1F9D0;',
                label: 'Be sceptical of free services',
                text: '"If the product is free, you are the product" is a useful reminder. Understand how a free AI service is funded before sharing sensitive information with it.',
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

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-bold text-blue-800">The bottom line</h2>
          <p className="text-blue-700 leading-relaxed">
            Using AI tools does involve sharing data. The key is understanding what is being
            shared and making deliberate choices &mdash; not avoiding AI entirely, but using it
            wisely.
          </p>
          <p className="text-blue-700 leading-relaxed">
            Treat AI chatbots like a public conversation, not a private diary. Anything you type
            could potentially be seen by someone &mdash; be thoughtful about what that something is.
          </p>
        </div>

        <Quiz
          lessonId="ai-and-privacy"
          lessonTitle="AI and privacy"
          questions={quizQuestions}
        />

        <LessonNote lessonId="ai-and-privacy" />

        {/* Rating */}
        <LessonFeedback lessonId="ai-and-privacy" />
        <LessonRating lessonId="ai-and-privacy" />
        <ReviewLaterButton lessonId="ai-and-privacy" />

        <RelatedLessons currentId="ai-and-privacy" />

        <NextLesson currentId="ai-and-privacy" />

      </div>
    </div>
  )
}
