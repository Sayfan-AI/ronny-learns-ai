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
import { LessonSeriesBadge } from '../components/LessonSeriesBadge'

const LESSON_TITLE = 'AI and financial advice'

const KEY_TAKEAWAYS = [
  'Robo-advisors like Nutmeg and Moneybox use AI to create and manage investment portfolios based on your goals and risk tolerance — at a fraction of the cost of a human financial adviser.',
  'AI is used in pension planning tools to model different scenarios and project likely retirement income based on your contributions and investment strategy.',
  'Credit scoring algorithms from companies like Experian and Equifax determine your creditworthiness — and they can be wrong. You have the right to see your credit file and dispute errors.',
  'Under UK GDPR, if an AI makes a financial decision that significantly affects you (such as refusing a loan), you have the right to request a human review.',
  'Robo-advisors are regulated by the FCA. If you have a complaint about an AI financial product, you can escalate to the Financial Ombudsman Service.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does a robo-advisor like Nutmeg or Moneybox do?',
    options: [
      'It calls you to discuss your finances and manually moves your investments',
      'It uses AI to create and manage a diversified investment portfolio based on your goals and risk tolerance, automatically rebalancing over time',
      'It only provides information about ISAs and does not actually invest your money',
      'It replaces your bank account with an AI-managed spending account',
    ],
    correctIndex: 1,
    explanation:
      "Robo-advisors use algorithms to build and manage investment portfolios. You answer questions about your financial goals, timeline, and how much risk you are comfortable with — the AI then selects appropriate funds and rebalances automatically. This makes managed investment accessible at much lower fees than traditional financial advisers.",
  },
  {
    question: 'How is AI used in pension planning?',
    options: [
      'It selects which pension scheme you must join based on your salary',
      'It models different contribution scenarios and projects likely retirement income, helping you understand whether you are saving enough',
      'It manages your pension pot automatically without any input from you',
      'It only calculates the state pension you will receive',
    ],
    correctIndex: 1,
    explanation:
      "AI-powered pension planning tools take your current pot, contribution rate, expected retirement age, and investment strategy and model different scenarios — showing you the likely range of outcomes and helping you understand the impact of saving more, retiring later, or changing your investment risk level.",
  },
  {
    question: 'What is a credit scoring algorithm, and who runs them in the UK?',
    options: [
      'It is a bank\'s internal system that only considers your payment history with that bank',
      'It is a government database that records all your financial transactions',
      'It is an AI system run by companies like Experian, Equifax, and TransUnion that calculates your creditworthiness based on your financial history',
      'It is a tool used only when applying for a mortgage',
    ],
    correctIndex: 2,
    explanation:
      "Credit reference agencies — primarily Experian, Equifax, and TransUnion — maintain detailed financial histories for most UK adults and use algorithms to generate credit scores. Lenders use these scores when deciding whether to approve applications for credit cards, loans, mortgages, and phone contracts.",
  },
  {
    question: 'What right do you have if an AI makes a significant financial decision about you, such as refusing a loan?',
    options: [
      'You have no rights — automated decisions are legally binding',
      'You can only dispute the decision if you have a human witness who saw the rejection',
      'Under UK GDPR, you have the right to request that a human reviews the automated decision',
      'You must wait 30 days before appealing any AI decision',
    ],
    correctIndex: 2,
    explanation:
      "UK GDPR gives individuals the right not to be subject to purely automated decisions that have a significant effect on them. This includes decisions about loan applications, credit limits, and insurance. You can request that a human being reviews the decision — though in practice, many organisations make this process difficult.",
  },
  {
    question: 'If you have a problem with a robo-advisor or AI financial product in the UK, who regulates these services?',
    options: [
      'The Information Commissioner\'s Office (ICO) only',
      'There is no regulation for AI financial products',
      'The Financial Conduct Authority (FCA), with escalation to the Financial Ombudsman Service for unresolved complaints',
      'Only the Bank of England can investigate AI financial products',
    ],
    correctIndex: 2,
    explanation:
      "Robo-advisors and AI investment products are regulated by the Financial Conduct Authority (FCA), the same body that regulates traditional financial services. If you have a complaint that cannot be resolved with the company directly, you can take it to the Financial Ombudsman Service — a free and independent dispute resolution service.",
  },
]

export function AIAndFinancialAdvice() {
  useMarkVisited('ai-and-financial-advice')

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <CompletedBadge lessonId="ai-and-financial-advice" />
        <LessonSeriesBadge lessonId="ai-and-financial-advice" />

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
            <span>&#x1F4B0;</span>
            <span>Intermediate &middot; 7 min read</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{LESSON_TITLE}</h1>
          <p className="text-lg text-gray-600">
            AI is now involved in many financial decisions that affect your life — from managing your investments to deciding whether you can get a mortgage. Here is how it works and what rights you have.
          </p>
        </div>

        <ShareButton lessonTitle={LESSON_TITLE} />
        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <section className="prose prose-gray max-w-none space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Robo-advisors: AI-managed investing</h2>
          <p>
            Traditional financial advice is expensive — an independent financial adviser might charge 1% of your portfolio per year or more. Robo-advisors like Nutmeg, Moneybox, and Wealthsimple use AI to do much of the same work at a fraction of the cost.
          </p>
          <p>
            You start by answering questions about your goals (retirement, saving for a house, general investing), your timeline, and how you feel about risk. The algorithm then builds a diversified portfolio of funds matched to your profile, monitors it, and rebalances automatically as markets move. Human advisers are still available at some services for complex situations, but the day-to-day management is handled by AI.
          </p>
        </section>

        <section className="prose prose-gray max-w-none space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">AI in pension planning</h2>
          <p>
            Pension planning involves modelling an uncertain future — how long you might live, what investment returns might be, how inflation will affect your savings. AI makes this modelling much faster and more personalised.
          </p>
          <p>
            Tools like those offered by Pension Bee, Aviva, and various workplace pension providers use AI to show you projections based on your current contribution rate. They can answer questions like: "If I increase my contributions by £50 a month, how much extra retirement income could that generate?" or "What happens to my projected pension if markets fall 20%?"
          </p>
          <p>
            These tools are projections, not guarantees — but they give people much better visibility of their likely retirement situation than a paper statement once a year.
          </p>
        </section>

        <section className="prose prose-gray max-w-none space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Credit scoring and your rights</h2>
          <p>
            Every time you apply for a credit card, loan, mortgage, or mobile phone contract, a lender checks your credit file. Three main credit reference agencies — Experian, Equifax, and TransUnion — maintain records of your payment history, open accounts, and any defaults or county court judgements.
          </p>
          <p>
            Their algorithms combine this data to generate a credit score. Lenders use this score, along with their own criteria, to decide whether to approve your application and at what interest rate.
          </p>
          <p>
            Credit files can contain errors. A missed payment recorded incorrectly, or someone else&apos;s debt linked to your address, can damage your score unfairly. You have the right to see your full credit file for free from all three agencies (via their websites or apps like ClearScore), and to raise a formal dispute if information is wrong.
          </p>
          <LessonNote lessonId="ai-and-financial-advice" />
        </section>

        <section className="prose prose-gray max-w-none space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Your rights when AI affects financial decisions</h2>
          <p>
            UK GDPR gives you specific rights around automated decision-making. If a significant decision about you — a loan refusal, a credit limit reduction, an insurance premium increase — is made purely by an algorithm without human review, you have the right to request that a human being reviews it.
          </p>
          <p>
            In practice, many financial companies do involve human review for some decisions, but the process is not always easy to navigate. You can:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Write to the company requesting a human review of an automated decision</li>
            <li>Contact the Financial Ombudsman Service if the company does not respond or you are not satisfied</li>
            <li>Raise a complaint with the Information Commissioner&apos;s Office if you believe your data rights have been violated</li>
          </ul>
        </section>

        <Quiz lessonId="ai-and-financial-advice" questions={quizQuestions} lessonTitle={LESSON_TITLE} />

        <RelatedLessons currentId="ai-and-financial-advice" />

        <LessonRating lessonId="ai-and-financial-advice" />
        <LessonFeedback lessonId="ai-and-financial-advice" />
        <ReviewLaterButton lessonId="ai-and-financial-advice" />

        <NextLesson currentId="ai-and-financial-advice" />
      </div>
    </div>
  )
}
