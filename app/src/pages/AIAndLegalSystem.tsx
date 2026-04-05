import { useState } from 'react'
import { Link } from '@tanstack/react-router'

const KEY_TAKEAWAYS = [
  'AI tools are increasingly used in UK legal practice for contract review, legal research, and document analysis',
  'Predictive tools used in bail and sentencing decisions (mainly in the US) have raised serious bias and transparency concerns',
  'The UK Supreme Court has confirmed AI cannot be a legal person — only humans can be authors, inventors, or parties in court',
  'AI could dramatically improve access to justice for people who cannot afford a solicitor — but only if it is accurate and trustworthy',
  'Lawyers using AI remain responsible for the work they produce — they cannot blame the AI if it makes an error',
]

const quizQuestions = [
  {
    question: 'How are UK law firms currently using AI tools?',
    options: [
      'AI is completely banned from legal practice in the UK',
      'AI is used for reviewing contracts, conducting legal research, summarising documents, and identifying relevant case law — tasks that previously took junior solicitors many hours',
      'AI is only used for billing and scheduling',
      'AI drafts all court submissions without human review',
    ],
    correctIndex: 1,
    explanation: 'Major UK law firms including Clifford Chance, Allen & Overy, and Linklaters have deployed AI tools for document review and contract analysis. AI can review hundreds of contracts for specific clauses in the time it would take a human to review one. This is changing the economics of legal work, particularly at the junior level.',
  },
  {
    question: 'What was the COMPAS controversy in the US, and why does it matter for UK AI policy?',
    options: [
      'COMPAS was a UK court case about AI copyright',
      'COMPAS was a US risk assessment tool used in sentencing that was found to produce racially biased scores — more likely to label Black defendants as high risk. It became a landmark case for AI accountability in justice',
      'COMPAS was a successful AI legal assistant with no controversies',
      'COMPAS is the name of the UK AI legal framework',
    ],
    correctIndex: 1,
    explanation: 'COMPAS (Correctional Offender Management Profiling for Alternative Sanctions) was used to predict reoffending risk and inform bail and sentencing decisions. A 2016 ProPublica investigation found it was twice as likely to falsely flag Black defendants as future criminals compared to white defendants. This case is now central to debates about algorithmic accountability, transparency, and bias in criminal justice.',
  },
  {
    question: 'What did the UK Supreme Court rule about AI in the DABUS case?',
    options: [
      'AI can be listed as an inventor on a UK patent',
      'AI cannot be a legal person, inventor, or author — only a human can hold legal rights or be a party in legal proceedings in the UK',
      'AI-generated inventions automatically belong to the public domain',
      'The UK Supreme Court has not considered any AI cases',
    ],
    correctIndex: 1,
    explanation: 'The DABUS case (2023) involved an AI system that its creator claimed had independently invented two products. The Supreme Court ruled that under current UK law, only a human can be an inventor, and a patent application must name a human inventor. This has significant implications for AI-generated creative and intellectual work more broadly.',
  },
  {
    question: 'How could AI improve access to justice for ordinary people?',
    options: [
      'By replacing all solicitors so legal services become free',
      'By providing accessible, accurate legal information and document assistance to people who cannot afford a solicitor — for example, helping with tenancy disputes, employment rights, or small claims',
      'By making court proceedings faster by removing the right to appeal',
      'AI cannot help with legal matters at any level',
    ],
    correctIndex: 1,
    explanation: 'Only 20% of people with a legal problem get professional help, largely because of cost. AI tools could bridge this gap: tools like DoNotPay and Citizens Advice AI chatbots can help people understand their rights, draft letters to landlords, or prepare for small claims court. The challenge is ensuring these tools are accurate enough to trust — a poorly informed user taking the wrong legal step can make their situation worse.',
  },
  {
    question: 'Who is responsible when an AI legal tool gives wrong advice and a client suffers harm?',
    options: [
      'The AI company is entirely responsible',
      'The lawyer or solicitor who used the AI tool remains professionally responsible for the work — they cannot use AI as a defence for professional negligence',
      'No one is responsible when AI is involved',
      'The client bears all responsibility for trusting AI',
    ],
    correctIndex: 1,
    explanation: 'The Solicitors Regulation Authority (SRA) has made clear that AI does not alter a solicitor\'s professional obligations. A solicitor who relies on AI-generated research or drafting that turns out to be wrong remains responsible. This is why law firms using AI still require human review of AI outputs — and why "hallucinations" (AI confidently stating false case law) are a serious professional risk.',
  },
]

export function AIAndLegalSystem() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)

  function handleAnswer(index: number) {
    if (selectedAnswer !== null) return
    setSelectedAnswer(index)
    setShowExplanation(true)
    if (index === quizQuestions[currentQuestion].correctIndex) setScore(s => s + 1)
  }

  function handleNext() {
    if (currentQuestion + 1 >= quizQuestions.length) setQuizComplete(true)
    else { setCurrentQuestion(c => c + 1); setSelectedAnswer(null); setShowExplanation(false) }
  }

  const q = quizQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-3">
          <span className="text-5xl" aria-hidden="true">&#x2696;&#xFE0F;</span>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">AI and the legal system</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">7 min read &middot; Intermediate</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>The law touches every part of life — contracts, tenancies, employment, family disputes, criminal justice. AI is changing how legal work is done, how courts make decisions, and potentially who can afford legal help. Understanding these changes matters whether you are a tenant challenging a landlord, someone facing a criminal charge, or just curious about how justice is evolving.</p>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 pt-2">AI in legal practice</h2>
          <p>UK law firms are deploying AI tools for three main purposes. Contract review AI can scan hundreds of documents and flag non-standard clauses, missing protections, or terms that deviate from agreed templates. Legal research AI can find relevant case law, regulations, and precedents far faster than a human researcher. Document analysis tools can summarise complex court bundles or extract key facts from witness statements.</p>
          <p>This is changing the economics of legal work. Tasks that once occupied junior solicitors for hours can be done in minutes. Major firms like Allen & Overy (which partnered with Harvey AI) and Clifford Chance have integrated AI deeply into their workflows. This raises questions about the future of legal training — if AI handles research and drafting, how do junior lawyers develop those skills?</p>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 pt-2">Predictive tools in criminal justice</h2>
          <p>The most controversial application of AI in the legal system is using algorithms to inform bail, sentencing, and parole decisions. In the US, tools like COMPAS became notorious after a 2016 investigation by ProPublica found that they were twice as likely to incorrectly classify Black defendants as high risk compared to white defendants. This sparked global debate about algorithmic accountability in justice.</p>
          <p>UK courts currently do not use automated risk scores in the same way US courts do. However, tools like OASys (used in probation) and OGRS (reoffending prediction) incorporate statistical models. The Ministry of Justice has been cautious about AI in sentencing, but the direction of travel — towards more data-driven decisions — raises the same bias and transparency concerns seen in the US.</p>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 pt-2">AI and legal personhood — the DABUS case</h2>
          <p>Can an AI be an inventor? This question reached the UK Supreme Court in 2023 in the DABUS case. An AI system had allegedly invented two products independently. The Court ruled that only a human can be named as an inventor in a UK patent application — AI has no legal personality and cannot hold rights.</p>
          <p>This ruling has broader implications. Copyright law similarly requires a human author. As AI generates more creative and inventive output, fundamental questions about who owns AI-generated work — and who bears liability if it causes harm — are being actively litigated across multiple jurisdictions.</p>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 pt-2">Access to justice</h2>
          <p>Perhaps the most positive potential of AI in law is democratising access to legal help. Most people with a legal problem do not consult a solicitor — cost is the primary barrier. AI tools could help people understand their rights, draft letters to landlords or employers, prepare for small claims court, or navigate the benefits system.</p>
          <p>Tools like DoNotPay have demonstrated that AI can handle simple legal tasks. Citizens Advice and other charities are developing AI-assisted services. But accuracy is critical — poorly calibrated AI giving wrong legal advice could cause real harm. The challenge is building tools that are reliable enough to trust while remaining accessible enough to help people who cannot afford professional legal advice.</p>
        </div>
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-5 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">Key takeaways</p>
          <ul className="space-y-1.5">
            {KEY_TAKEAWAYS.map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-amber-600 flex-shrink-0 mt-0.5">&#x2713;</span>{t}
              </li>
            ))}
          </ul>
        </div>
        {!quizStarted && (
          <div className="text-center">
            <button onClick={() => setQuizStarted(true)} className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition-colors">Test yourself &rarr;</button>
          </div>
        )}
        {quizStarted && !quizComplete && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 space-y-4">
            <p className="text-xs text-gray-400">Question {currentQuestion + 1} of {quizQuestions.length}</p>
            <p className="font-semibold text-gray-800 dark:text-gray-100 leading-snug">{q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt, idx) => {
                let style = 'border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20'
                if (selectedAnswer !== null) {
                  if (idx === q.correctIndex) style = 'border-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300'
                  else if (idx === selectedAnswer) style = 'border-rose-400 bg-rose-50 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300'
                  else style = 'border-gray-200 dark:border-gray-600 text-gray-400 dark:text-gray-500'
                }
                return <button key={idx} onClick={() => handleAnswer(idx)} disabled={selectedAnswer !== null} className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-colors ${style}`}>{opt}</button>
              })}
            </div>
            {showExplanation && (
              <div className={`rounded-xl p-4 text-sm ${selectedAnswer === q.correctIndex ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800' : 'bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800'}`}>
                <p className={`font-semibold mb-1 ${selectedAnswer === q.correctIndex ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}`}>{selectedAnswer === q.correctIndex ? 'Correct!' : 'Not quite.'}</p>
                <p className="text-gray-600 dark:text-gray-300">{q.explanation}</p>
              </div>
            )}
            {showExplanation && <button onClick={handleNext} className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition-colors">{currentQuestion + 1 >= quizQuestions.length ? 'See results' : 'Next question'}</button>}
          </div>
        )}
        {quizComplete && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 text-center space-y-3">
            <p className="text-4xl">&#x1F3C6;</p>
            <p className="text-xl font-bold text-gray-800 dark:text-gray-100">Quiz complete!</p>
            <p className="text-gray-600 dark:text-gray-300">You scored <span className="font-bold text-amber-600 dark:text-amber-400">{score} out of {quizQuestions.length}</span></p>
            <Link to="/" className="inline-block mt-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition-colors">Back to home</Link>
          </div>
        )}
        <div className="text-center pt-4">
          <Link to="/" className="text-amber-600 dark:text-amber-400 text-sm hover:underline">&larr; Back to home</Link>
        </div>
      </div>
    </div>
  )
}
