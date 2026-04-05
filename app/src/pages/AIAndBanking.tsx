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

const LESSON_TITLE = 'AI and banking'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does AI help banks detect fraud on your account?',
    options: [
      'AI reads your emails and text messages to check whether you authorised a payment',
      'AI analyses every transaction in real time, comparing it to your normal spending patterns, and flags or blocks anything that looks unusual — such as a large overseas payment you have never made before',
      'AI contacts you by phone before processing any payment over £100',
      'AI only checks transactions made outside the UK, as domestic payments are considered safe',
    ],
    correctIndex: 1,
    explanation:
      "Banks like Lloyds, Barclays, and Monzo use AI to monitor every transaction as it happens. The AI learns your normal behaviour — where you usually shop, how much you spend, what time of day you make payments — and raises an alert if something deviates from that pattern. This happens in milliseconds. A common example: if your card is used in Manchester at 10am and then in New York at 11am, the AI flags it as impossible and blocks the second transaction. UK Finance estimates that AI-powered fraud detection stopped around £1.1 billion in fraudulent transactions in 2022 alone.",
    hint: 'Think about how the AI knows what normal looks like for you specifically.',
  },
  {
    question: 'What is a key criticism of using AI to make credit scoring decisions?',
    options: [
      'AI credit scoring is too slow — it takes weeks to process an application',
      'AI credit scoring can perpetuate and amplify historical biases, potentially denying credit to people from certain postcodes, ethnic backgrounds, or professions — even when they are personally creditworthy',
      'AI credit scoring only works for people who have had a bank account for more than 10 years',
      'AI credit scoring always gives lower scores than human assessors, making credit harder to obtain',
    ],
    correctIndex: 1,
    explanation:
      "Traditional credit scoring already had bias problems — for example, people who had lived in postcodes associated with higher default rates could be penalised regardless of their personal circumstances. AI models trained on historical data inherit these patterns and can amplify them. A 2019 investigation found that Apple Card's AI-based credit decisions gave women significantly lower credit limits than men with identical financial profiles. In the UK, the FCA has raised concerns about AI models that use proxy variables (like postcode or occupation) that correlate with protected characteristics under the Equality Act.",
    hint: 'AI learns from historical data — and history has not always been fair.',
  },
  {
    question: 'If a bank uses AI to refuse your mortgage application, what right do you have under UK law?',
    options: [
      'No right — banks are private companies and can decline applications without explanation',
      'The right to request that a human reviews the AI decision and the right to a meaningful explanation of why you were refused',
      'The right to an automatic refund of any application fee you paid',
      'The right to see all the data the AI used, but not to challenge the decision itself',
    ],
    correctIndex: 1,
    explanation:
      "Under the UK GDPR (based on the EU's General Data Protection Regulation), you have the right not to be subject to a decision based solely on automated processing if that decision significantly affects you — and you have the right to request human review. The FCA also requires regulated firms to be able to explain their credit decisions in plain language. In practice, this means if an AI system refuses your mortgage, you can ask the bank to have a human look at your case and give you a proper explanation. Simply saying 'the computer said no' is not sufficient under UK financial regulation.",
    hint: 'Think about the right to explanation and the right to human review.',
  },
  {
    question: 'What is open banking, and what does AI make possible with it?',
    options: [
      'A system where all banks share their profits equally with customers',
      'A UK regulation that allows you to securely share your bank transaction data with authorised third-party apps, which AI can then analyse to give you personalised budgeting advice, better deals, or faster loan decisions',
      'A way for banks to share your financial data with the government for tax purposes',
      'A system that lets you use any ATM in the world without paying a fee',
    ],
    correctIndex: 1,
    explanation:
      "Open banking was introduced in the UK in 2018 under regulations from the Competition and Markets Authority. It means banks must allow you to share your transaction data securely with third-party apps you have authorised — using a standard secure technical interface. AI-powered apps like Cleo, Plum, and Emma use this data to analyse your spending patterns, identify subscriptions you have forgotten about, predict when you might run low on money, and help you save automatically. Lenders also use open banking data to make faster, more accurate loan decisions — because they can see your actual income and spending rather than relying on estimates.",
    hint: 'Think about sharing your data voluntarily with apps you choose to use.',
  },
]

export function AIAndBanking() {
  useMarkVisited('ai-and-banking')

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3E6;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and banking
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How banks use AI to spot fraud, decide who gets a loan, and power
            chatbot advisors — and what rights you have when an algorithm makes
            a financial decision about you.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-banking" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI is already in your bank account</h2>
          <p className="text-gray-600 leading-relaxed">
            Every time you make a payment, an AI system is watching. Banks have been using
            machine learning since the 1990s, but modern AI has transformed banking — from
            fraud detection that works in milliseconds to mortgage decisions made without a
            human underwriter.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This brings real benefits: faster decisions, better fraud protection, and new
            financial tools that were not possible before. But it also raises serious questions
            about fairness, accountability, and what happens when the algorithm gets it wrong.
          </p>
          <div className="bg-green-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-green-800 text-sm">Where AI is active in your bank right now</p>
            <ul className="text-green-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>Monitoring every transaction for fraud — in real time, as you spend</li>
              <li>Deciding whether to approve loan, mortgage, and credit card applications</li>
              <li>Powering the chatbot you talk to when you contact customer support</li>
              <li>Personalising your savings and spending insights in banking apps</li>
              <li>Flagging unusual account activity that might indicate you are being scammed</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Fraud detection: AI watching every payment</h2>
          <p className="text-gray-600 leading-relaxed">
            Fraud detection is where AI has had its biggest and most positive impact in banking.
            Every transaction you make — whether it is a contactless coffee or an online transfer —
            is assessed by an AI model in milliseconds before it is approved.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The AI builds a model of your normal behaviour: where you shop, how much you typically
            spend, what time of day, and which countries. When something deviates significantly
            from that model, the AI flags or blocks the transaction and may send you an alert.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x2705;',
                label: 'What AI catches well',
                text: 'Impossible geography (card used in London then New York within an hour), unusual large payments, purchases at merchants you have never used, transactions in countries you have not visited.',
              },
              {
                icon: '&#x26A0;&#xFE0F;',
                label: 'The false positive problem',
                text: "AI sometimes blocks legitimate payments — especially if you are travelling, making an unusual purchase, or paying a new supplier. This is called a false positive. It is annoying but protective. You can usually unblock payments by confirming them in your app.",
              },
              {
                icon: '&#x1F4B8;',
                label: 'Authorised push payment fraud',
                text: "AI is now being used to detect when you might be being scammed into making a payment yourself — not just when someone steals your card. If you suddenly try to transfer a large sum to a new payee, some banks' AI will add extra warnings or delays.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-blue-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-blue-800 text-sm mb-0.5">{label}</p>
                  <p className="text-blue-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            UK Finance estimates that AI-powered fraud detection stopped around <strong>£1.1 billion
            </strong> in fraudulent transactions in 2022. Without AI, banks could not possibly review
            the billions of transactions that happen every day.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Credit scoring: when AI decides if you get a loan</h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Credit scoring</strong> is the process of estimating how likely you are to repay
            a debt. It determines whether you can get a mortgage, credit card, car finance, or
            personal loan — and at what interest rate.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Traditional scoring used a simple formula based on a few factors: payment history,
            outstanding debt, length of credit history. Modern AI credit models can analyse
            hundreds of variables simultaneously — including some that raise fairness concerns.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CA;',
                label: 'What AI scoring can use',
                text: 'Payment history, income, employment type, spending patterns (via open banking), postcode, and in some countries even social media behaviour and the type of phone you use.',
              },
              {
                icon: '&#x2696;&#xFE0F;',
                label: 'The fairness problem',
                text: "AI models trained on historical data inherit past biases. People from certain postcodes, professions, or ethnic backgrounds may be scored lower not because of their personal creditworthiness, but because of patterns in historical data. The FCA actively monitors for this.",
              },
              {
                icon: '&#x1F34E;',
                label: 'The Apple Card example',
                text: "In 2019, Apple Card's AI credit system gave women significantly lower limits than men with identical financial situations. This prompted a regulatory investigation. The algorithm was using proxy variables that correlated with gender without anyone intending it.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-amber-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-amber-800 text-sm mb-0.5">{label}</p>
                  <p className="text-amber-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Your rights when AI makes a financial decision</h2>
          <p className="text-gray-600 leading-relaxed">
            Under UK GDPR and FCA rules, if an AI system makes a significant decision about you —
            such as refusing a mortgage, declining a credit card, or flagging you for fraud — you
            have specific rights:
          </p>
          <div className="space-y-3">
            {[
              {
                number: '1',
                label: 'Right to a human review',
                text: 'You can request that a human reviews any decision made purely by automated means. The bank cannot simply say "the computer said no" and refuse to engage further.',
              },
              {
                number: '2',
                label: 'Right to an explanation',
                text: 'You are entitled to a meaningful explanation of why a decision was made — what factors were considered and how they affected the outcome. Vague answers are not acceptable.',
              },
              {
                number: '3',
                label: 'Right to contest',
                text: 'You can contest a decision and provide additional information that the AI may not have considered. The bank must have a process for this.',
              },
              {
                number: '4',
                label: 'Right to complain',
                text: 'If you believe an AI decision about you was unfair or discriminatory, you can complain to the Financial Ombudsman Service. The FCA also accepts complaints about AI-related financial harm.',
              },
            ].map(({ number, label, text }) => (
              <div key={number} className="flex gap-3 items-start">
                <span className="bg-purple-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                  {number}
                </span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Chatbot advisors and AI financial tools</h2>
          <p className="text-gray-600 leading-relaxed">
            Most high-street banks now use AI chatbots for customer service — handling queries
            about balances, lost cards, and account changes. But AI has also spawned a new category
            of financial apps.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F916;',
                label: 'Cleo',
                text: 'An AI money assistant that connects to your bank via open banking, tracks your spending, sets budgets, and offers a chatty, conversational interface. It can roast your spending habits or give you a "hype" message about your savings.',
              },
              {
                icon: '&#x1F331;',
                label: 'Plum',
                text: 'Automatically moves small amounts into a savings pot based on your spending patterns — so you save without thinking about it. Uses AI to calculate how much you can afford to put aside.',
              },
              {
                icon: '&#x1F4B0;',
                label: 'AI mortgage brokers',
                text: "Services like Habito use AI to search thousands of mortgage deals and recommend the best option for your situation — faster than a traditional broker and available 24/7.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-teal-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-teal-800 text-sm mb-0.5">{label}</p>
                  <p className="text-teal-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-teal-50 rounded-xl p-4">
            <p className="font-semibold text-teal-800 text-sm mb-1">Important limit</p>
            <p className="text-teal-700 text-sm leading-relaxed">
              AI financial apps can give you useful insights and suggestions, but they are not
              regulated financial advisers. For significant decisions — large investments, pension
              planning, complex tax situations — you still need a qualified human financial adviser
              who is regulated by the FCA.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Open banking: sharing your data with apps you choose</h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Open banking</strong> is a UK regulation introduced in 2018 that requires banks
            to allow you to share your transaction data securely with authorised third-party apps —
            if you choose to. The data is shared via a secure technical interface; the apps never
            get your password.
          </p>
          <p className="text-gray-600 leading-relaxed">
            AI-powered apps use this data to give you personalised financial insights that were
            previously only available to people who could afford a financial adviser:
          </p>
          <ul className="text-gray-600 leading-relaxed space-y-1 list-disc list-inside text-sm">
            <li>Spotting subscriptions you have forgotten about</li>
            <li>Predicting when your balance might run low before payday</li>
            <li>Comparing your energy or phone tariff to better deals</li>
            <li>Helping lenders make faster, more accurate loan decisions using your actual income data</li>
          </ul>
          <div className="bg-indigo-50 rounded-xl p-4">
            <p className="font-semibold text-indigo-800 text-sm mb-1">You are always in control</p>
            <p className="text-indigo-700 text-sm leading-relaxed">
              You must explicitly consent before any app can access your open banking data. You
              can revoke that permission at any time through your bank's app or website.
              Open banking access does not give apps the ability to move money — only to read
              your transactions (unless you separately grant payment permission).
            </p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
          <p className="font-semibold text-green-800 mb-2">Key takeaway</p>
          <p className="text-green-700 text-sm leading-relaxed">
            AI is deeply embedded in banking — protecting you from fraud, deciding if you get
            credit, and powering the apps that help you manage your money. The benefits are real,
            but so are the risks of unfair or unexplained decisions. If AI makes a financial
            decision that affects you, you have the right to ask why, request a human review,
            and challenge it if it seems wrong.
          </p>
        </div>

        <ReviewLaterButton lessonId="ai-and-banking" />
        <LessonNote lessonId="ai-and-banking" lessonTitle={LESSON_TITLE} />

        <Quiz questions={quizQuestions} lessonId="ai-and-banking" lessonTitle={LESSON_TITLE} />

        <LessonFeedback lessonId="ai-and-banking" />
        <LessonRating lessonId="ai-and-banking" />
        <RelatedLessons currentId="ai-and-banking" />
        <NextLesson currentId="ai-and-banking" />
      </div>
    </div>
  )
}
