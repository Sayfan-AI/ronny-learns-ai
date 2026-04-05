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
    question: 'If an AI generates a painting, who currently owns the copyright in most countries?',
    options: [
      'The AI that created it',
      'The company that made the AI',
      'The person who typed the prompt',
      'Copyright law is unclear — in most countries AI-generated work has no copyright owner',
    ],
    correctIndex: 3,
    explanation:
      'Copyright law was written for human creators. In most countries (including the US and UK), courts and copyright offices have ruled that purely AI-generated works — where no human made creative choices in the actual content — cannot be copyrighted. The legal landscape is still evolving.',
  },
  {
    question: 'What was the core complaint in the lawsuits filed against image-generating AI companies like Stability AI?',
    options: [
      'Their AI was too slow to generate images',
      'They used copyrighted images to train their AI without permission or payment',
      'Their AI could not generate realistic human faces',
      'They sold user data to advertisers',
    ],
    correctIndex: 1,
    explanation:
      'Artists and stock-image companies sued AI companies on the grounds that their models were trained on billions of copyrighted images scraped from the internet without the creators\' consent or compensation. These cases are still working through courts.',
  },
  {
    question: 'What is the EU AI Act?',
    options: [
      'A law that bans all AI development in Europe',
      'A set of rules that classify AI systems by risk level and impose requirements on high-risk uses',
      'A trade agreement between European countries about sharing AI technology',
      'A law that gives AI systems legal personhood',
    ],
    correctIndex: 1,
    explanation:
      'The EU AI Act, agreed in 2024, is the world\'s first comprehensive AI law. It categorises AI systems by their potential for harm — from minimal risk (spam filters) to unacceptable risk (social scoring systems that are banned outright). High-risk uses like recruitment tools or medical AI face strict transparency and testing requirements.',
  },
  {
    question: 'If an AI gives you incorrect medical advice that leads to harm, who is most likely to be held responsible today?',
    options: [
      'The AI itself',
      'The user who followed the advice',
      'The company that made or deployed the AI, depending on how it was described and regulated',
      'No one — AI advice has no legal consequences',
    ],
    correctIndex: 2,
    explanation:
      'Current law holds companies, not AI systems, responsible for harm. Liability depends on many factors: how the product was marketed, whether it claimed to replace professional advice, and which regulations apply. This is an active area of legal debate worldwide.',
  },
  {
    question: 'What is a "training data" concern in AI copyright disputes?',
    options: [
      'AI models train too slowly on small datasets',
      'AI companies used copyrighted text, images, and code to train their models without permission, potentially building a commercial product on others\' creative work',
      'Training data is too expensive to collect legally',
      'AI models forget their training data over time',
    ],
    correctIndex: 1,
    explanation:
      'To train large AI models, companies collected huge amounts of text, images, code, and other content from the internet. Much of this was protected by copyright. The question of whether this constitutes infringement — and whether creators deserve compensation — is one of the biggest legal questions in the AI industry right now.',
  },
]

export function AIAndCopyright() {
  useMarkVisited('ai-and-copyright')
  useLessonVisit('ai-and-copyright')
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x2696;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and the law
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Copyright, liability, and who is responsible &mdash; what happens when AI
            creates something, gets something wrong, or uses your work without asking.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-copyright" />
          <ShareButton lessonTitle="ai-and-copyright" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The law has not kept up with AI</h2>
          <p className="text-gray-600 leading-relaxed">
            Copyright law was written for human creators. Patent law was written for human
            inventors. Liability rules were written for products with identifiable makers.
            AI breaks all of these assumptions &mdash; and courts and governments around the
            world are scrambling to figure out what the rules should be.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This is not just a problem for lawyers. It affects artists who found their
            work used to train AI without permission, businesses deploying AI tools that
            make costly mistakes, and ordinary people who follow AI advice that turns out
            to be wrong.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-blue-800 text-sm">Did you know?</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              In 2023, the US Copyright Office received over 10,000 applications to register
              AI-generated works. It rejected most of them, ruling that copyright requires
              human authorship. A single image with AI-generated elements and human creative
              choices got partial protection &mdash; only the human-created parts.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Who owns what AI creates?</h2>
          <p className="text-gray-600 leading-relaxed">
            If you type a prompt into an image generator and it produces a picture, you
            might assume you own it. The reality is more complicated.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'In the United States',
                text: 'The Copyright Office has said that purely AI-generated images, text, and music cannot be copyrighted because copyright requires human authorship. If you heavily guided the output — making many specific creative choices — you might have a case for partial protection. The boundaries are blurry.',
              },
              {
                label: 'In the United Kingdom',
                text: 'UK law is unusual: it allows copyright in "computer-generated works" where there is no human author, and assigns ownership to the person who arranged for the work to be created. This gives more protection to AI output — but courts have not yet fully tested what this means in practice.',
              },
              {
                label: 'The practical reality',
                text: 'Most AI companies\' terms of service say you own the output you generate. But if it turns out that output is legally unprotectable, that ownership claim may not mean much commercially. Businesses relying on AI-generated content for branding or products face real uncertainty.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-gray-800 text-sm">{label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Training data: was it legal to use?</h2>
          <p className="text-gray-600 leading-relaxed">
            To train large AI models, companies collected enormous datasets scraped from
            the internet &mdash; billions of images, articles, books, and lines of code.
            Most of this content was created by people who never gave permission for
            their work to be used this way.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F3A8;',
                label: 'Artists vs. image generators',
                text: 'Artists including Sarah Andersen, Kelly McKernan, and Karla Ortiz sued Stability AI and Midjourney in 2023, arguing that training on their work without consent or compensation was copyright infringement. Getty Images filed a separate lawsuit over billions of watermarked images used for training.',
              },
              {
                icon: '&#x270F;&#xFE0F;',
                label: 'Authors vs. text models',
                text: 'Authors including George R.R. Martin, John Grisham, and the Authors Guild sued OpenAI, arguing their books were used to train GPT models without permission. Publishers including Penguin Random House have filed similar claims.',
              },
              {
                icon: '&#x1F4BB;',
                label: 'The GitHub Copilot case',
                text: 'GitHub Copilot (which suggests code as you type) was trained on public code repositories on GitHub, including open-source projects. A class action lawsuit argued this violated the licences of those projects, which often require attribution or prohibit commercial use without permission.',
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
          <div className="bg-amber-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-amber-800 text-sm">Did you know?</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              The concept of &ldquo;fair use&rdquo; in US law allows limited use of copyrighted material
              without permission for purposes like commentary, parody, and research. AI companies
              have argued their training data use qualifies as fair use &mdash; a legal question that
              will likely be decided by the US Supreme Court in the coming years.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">When AI gets it wrong: who is responsible?</h2>
          <p className="text-gray-600 leading-relaxed">
            AI systems make mistakes. They confidently state false information (called
            &ldquo;hallucination&rdquo;), give bad advice, misidentify people, and
            produce outputs that cause real harm. When that happens, who is liable?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-red-50 border border-red-100 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-red-800 text-sm">Real cases of AI harm</p>
              <p className="text-red-700 text-sm leading-relaxed">
                A Canadian airline chatbot gave a passenger incorrect information about
                bereavement fares. A court held the airline responsible. A US lawyer used
                ChatGPT to research cases &mdash; it invented fake citations and the lawyer was
                sanctioned for filing them.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-blue-800 text-sm">The product liability question</p>
              <p className="text-blue-700 text-sm leading-relaxed">
                Existing product liability law may apply to AI in some circumstances. If a
                medical AI device gives incorrect diagnoses, the manufacturer faces the same
                scrutiny as any other medical device maker. Deployment context matters a lot.
              </p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Currently, <strong>the AI itself cannot be held legally responsible</strong> for
            anything &mdash; it has no legal personhood. Liability falls on the companies that
            made it, the businesses that deployed it, and sometimes the users who relied on it.
            Exactly where the line falls depends on context, jurisdiction, and how the product
            was marketed.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The EU AI Act: the world&apos;s first major AI law</h2>
          <p className="text-gray-600 leading-relaxed">
            In 2024, the European Union passed the AI Act &mdash; the world&apos;s first
            comprehensive attempt to regulate AI at a national/regional level. It classifies
            AI by risk and imposes proportionate requirements.
          </p>
          <div className="space-y-3">
            <div className="bg-red-50 border border-red-100 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-red-800 text-sm">Unacceptable risk (banned)</p>
              <p className="text-red-700 text-sm leading-relaxed">
                Social scoring systems (governments rating citizens&apos; behaviour), real-time
                facial recognition in public spaces, and AI that manipulates people through
                subliminal techniques are prohibited outright.
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-orange-800 text-sm">High risk (strict rules)</p>
              <p className="text-orange-700 text-sm leading-relaxed">
                AI used in hiring, credit scoring, medical devices, critical infrastructure, and
                education must be registered, tested, and accompanied by transparency documentation.
                Humans must remain in control.
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-yellow-800 text-sm">Limited risk (transparency rules)</p>
              <p className="text-yellow-700 text-sm leading-relaxed">
                Chatbots must tell users they are talking to an AI. AI-generated content must
                be labelled when there is a risk of confusion with real human-made content.
              </p>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-green-800 text-sm">Minimal risk (no new rules)</p>
              <p className="text-green-700 text-sm leading-relaxed">
                Spam filters, recommendation systems, and most consumer AI tools face no
                additional requirements beyond existing law.
              </p>
            </div>
          </div>
          <div className="bg-purple-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-purple-800 text-sm">Did you know?</p>
            <p className="text-purple-700 text-sm leading-relaxed">
              Because the EU is a large market, the AI Act will affect companies worldwide &mdash;
              any company that wants to sell AI products in Europe must comply. This is sometimes
              called the &ldquo;Brussels effect&rdquo;: EU regulations becoming a de facto global standard
              because companies find it easier to apply one set of rules everywhere.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-bold text-blue-800">The key thing to remember</h2>
          <p className="text-blue-700 leading-relaxed">
            AI is developing faster than the law. Copyright disputes, liability questions, and
            regulatory frameworks are all being worked out in real time &mdash; in courtrooms,
            parliaments, and corporate boardrooms around the world.
          </p>
          <p className="text-blue-700 leading-relaxed">
            That is not a reason to be alarmed. It is a reason to stay curious. The decisions
            being made right now about how to govern AI will shape how the technology develops
            &mdash; and as a citizen, your awareness matters.
          </p>
        </div>

        <Quiz
          lessonId="ai-and-copyright"
          lessonTitle="AI and the law"
          questions={quizQuestions}
        />

        <LessonNote lessonId="ai-and-copyright" />

        <LessonFeedback lessonId="ai-and-copyright" />
        <LessonRating lessonId="ai-and-copyright" />
        <ReviewLaterButton lessonId="ai-and-copyright" />

        <RelatedLessons currentId="ai-and-copyright" />

        <NextLesson currentId="ai-and-copyright" />

      </div>
    </div>
  )
}
