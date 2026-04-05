import { useState } from 'react'
import { Link } from '@tanstack/react-router'

interface Statement {
  id: number
  statement: string
  isTrue: boolean
  explanation: string
  topic: string
}

const STATEMENTS: Statement[] = [
  {
    id: 1,
    statement: 'AI can currently think, feel emotions, and have genuine opinions.',
    isTrue: false,
    explanation: "False. Today's AI systems — including the most advanced chatbots — do not think, feel, or hold opinions. They generate responses by recognising patterns in training data. What looks like emotion or opinion is a very convincing statistical prediction of what a human might say. There is no inner experience.",
    topic: 'AI capabilities',
  },
  {
    id: 2,
    statement: 'The UK has passed specific laws regulating how AI can be used.',
    isTrue: false,
    explanation: "False (as of 2024). The UK has not yet passed a dedicated AI law. Instead, it relies on existing laws (data protection, equality, product safety) to cover AI. The government published an AI Regulation White Paper in 2023 proposing a principles-based approach, but specific AI legislation had not been enacted. This contrasts with the EU's AI Act, which was passed in 2024.",
    topic: 'UK regulation',
  },
  {
    id: 3,
    statement: "ChatGPT's training data has a knowledge cutoff — it does not know about events after a certain date.",
    isTrue: true,
    explanation: "True. Large language models like ChatGPT are trained on data collected up to a specific date, after which they have no knowledge of events. ChatGPT's original training had a cutoff in early 2023, though OpenAI has released newer versions with more recent cutoffs and added browsing capabilities to some versions.",
    topic: 'Famous AI systems',
  },
  {
    id: 4,
    statement: 'AI will definitely replace most human jobs within the next 10 years.',
    isTrue: false,
    explanation: "False. The impact of AI on jobs is genuinely uncertain and debated by economists. Historical evidence from previous automation waves shows technology eliminates some roles while creating others. Most economists expect AI to transform jobs — changing what tasks humans do — rather than eliminate most work entirely. The timescale and extent depend heavily on policy, regulation, and how AI capabilities develop.",
    topic: 'Job displacement',
  },
  {
    id: 5,
    statement: "An AI system trained mainly on data from one country may perform worse for people from other countries.",
    isTrue: true,
    explanation: "True. This is a well-documented form of AI bias. A facial recognition system trained mostly on images of white faces performs worse on darker-skinned faces. A medical AI trained on US hospital data may give different results for patients in countries with different demographics, diets, or disease patterns. Diverse, representative training data is essential for fair AI.",
    topic: 'AI bias',
  },
  {
    id: 6,
    statement: 'AlphaGo was the first AI to beat a world champion at Go, in 2016.',
    isTrue: true,
    explanation: "True. DeepMind's AlphaGo defeated the world Go champion Lee Sedol 4-1 in March 2016, a landmark moment in AI history. Go had long been considered too complex for computers to master because the number of possible board positions exceeds the number of atoms in the observable universe. AlphaGo used a combination of deep learning and Monte Carlo tree search.",
    topic: 'Famous AI systems',
  },
  {
    id: 7,
    statement: 'AI systems are always objective and free from the biases that affect human decision-making.',
    isTrue: false,
    explanation: "False. AI systems reflect biases present in their training data and the choices made by their creators. Examples include Amazon's hiring tool (scrapped because it penalised CVs mentioning women's colleges), facial recognition systems (higher error rates for darker-skinned faces), and predictive policing tools (which can amplify historical policing biases). Objectivity is not automatic — it requires deliberate effort.",
    topic: 'AI bias',
  },
  {
    id: 8,
    statement: 'The EU\'s AI Act classifies some AI applications as "unacceptable risk" and bans them outright.',
    isTrue: true,
    explanation: "True. The EU AI Act, passed in 2024, uses a risk-based framework. Applications classified as unacceptable risk — including real-time remote biometric identification in public spaces for law enforcement (with limited exceptions), social scoring by governments, and AI that exploits vulnerable groups — are banned entirely. High-risk applications (like AI in hiring, credit scoring, and medical devices) face strict requirements but are permitted.",
    topic: 'UK regulation',
  },
  {
    id: 9,
    statement: 'AI image generators like DALL-E and Midjourney create images by searching the internet for similar pictures and combining them.',
    isTrue: false,
    explanation: "False. Generative AI image models do not search the internet at runtime. They learn statistical patterns from millions of training images, then generate entirely new pixel values from scratch based on your prompt. The process is more like a learned intuition about what images look like than a search-and-combine operation. The images are genuinely new, though the style and content reflect the training data.",
    topic: 'AI capabilities',
  },
  {
    id: 10,
    statement: "Deepfake technology can convincingly clone a person's voice from just a few seconds of audio.",
    isTrue: true,
    explanation: "True. Modern voice cloning AI requires surprisingly little source audio — sometimes as little as 3 seconds — to produce a convincing imitation of a person's voice. This has been used fraudulently: in 2019, criminals used AI voice cloning to impersonate a CEO and instruct a finance director to transfer £200,000. The NCSC has specifically warned about deepfake voice attacks.",
    topic: 'AI capabilities',
  },
  {
    id: 11,
    statement: "If an AI makes a decision that harms you — for example, rejecting your loan application — you have no legal right to challenge it in the UK.",
    isTrue: false,
    explanation: "False. UK data protection law (UK GDPR) gives you rights when automated decisions have a significant effect on you. You have the right to request human review of automated decisions, to be given an explanation of the factors used, and to contest the decision. The right applies to decisions about loan applications, job applications, insurance, and similar significant matters.",
    topic: 'UK regulation',
  },
  {
    id: 12,
    statement: 'Training a large AI model like GPT-4 uses roughly the same amount of energy as a single household uses in a year.',
    isTrue: false,
    explanation: "False. Training large AI models is enormously energy-intensive. Estimates for GPT-3 training suggested it used approximately 1,287 MWh of electricity — equivalent to the annual electricity use of around 120 average US homes, or producing the lifetime carbon footprint of several cars. GPT-4 and subsequent models are larger and more costly to train. AI's energy consumption is a growing concern for environmental sustainability.",
    topic: 'AI capabilities',
  },
  {
    id: 13,
    statement: 'Siri, Alexa, and Google Assistant all use the same underlying AI technology.',
    isTrue: false,
    explanation: "False. Siri, Alexa, and Google Assistant are developed by different companies (Apple, Amazon, and Google respectively) using different technology stacks, training data, and AI architectures. They have different strengths and weaknesses. While all use voice recognition and natural language processing, the specific models, training approaches, and integrations are quite different.",
    topic: 'Famous AI systems',
  },
  {
    id: 14,
    statement: "An AI can be trained to be racist, sexist, or otherwise discriminatory, even without its creators intending that outcome.",
    isTrue: true,
    explanation: "True. If training data contains historical patterns of discrimination — for example, historical hiring data where women were systematically paid less — an AI trained on that data may learn and reproduce those patterns. This is not because the AI has prejudiced intent (it has no intent) but because it learns statistical regularities, including unfair ones. Preventing this requires careful dataset curation, bias testing, and ongoing monitoring.",
    topic: 'AI bias',
  },
  {
    id: 15,
    statement: "The NHS has the legal right to share all patient data with AI companies for research purposes without requiring patient consent.",
    isTrue: false,
    explanation: "False. The NHS cannot share patient data with commercial AI companies without a lawful basis, which typically requires either patient consent, a specific legal power, or a public interest justification reviewed by an ethics committee. The Royal Free / DeepMind case (2016) was found by the ICO to have breached data protection law precisely because 1.6 million patients' data was shared without proper consent or legal basis. Patients can also opt out of research uses of their data.",
    topic: 'Training data',
  },
]

export function TrueOrFalse() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answered, setAnswered] = useState<boolean | null>(null)
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [results, setResults] = useState<Array<{ correct: boolean; statement: string }>>([])

  const current = STATEMENTS[currentIndex]
  const total = STATEMENTS.length

  function handleAnswer(answer: boolean) {
    if (answered !== null) return
    const correct = answer === current.isTrue
    setUserAnswer(answer)
    setAnswered(answer)
    if (correct) setScore(s => s + 1)
    setResults(r => [...r, { correct, statement: current.statement }])
  }

  function handleNext() {
    if (currentIndex < total - 1) {
      setCurrentIndex(i => i + 1)
      setAnswered(null)
      setUserAnswer(null)
    } else {
      setCompleted(true)
    }
  }

  function handleRestart() {
    setCurrentIndex(0)
    setAnswered(null)
    setUserAnswer(null)
    setScore(0)
    setCompleted(false)
    setResults([])
  }

  if (completed) {
    const percent = Math.round((score / total) * 100)
    const grade =
      percent >= 90 ? 'Outstanding' :
      percent >= 75 ? 'Excellent' :
      percent >= 60 ? 'Good' :
      percent >= 40 ? 'Not bad' :
      'Keep learning'

    return (
      <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white px-4 py-10 flex flex-col items-center">
        <div className="max-w-xl w-full space-y-6">
          <div className="text-center space-y-4">
            <div className="text-6xl">&#x1F3AF;</div>
            <h1 className="text-3xl font-bold text-gray-800">Quiz complete!</h1>
            <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
              <p className="text-5xl font-bold text-violet-600">{score}/{total}</p>
              <p className="text-xl font-semibold text-gray-700">{grade}</p>
              <p className="text-gray-500 text-sm">{percent}% correct</p>
              <div className="w-full bg-gray-100 rounded-full h-3">
                <div
                  className="bg-violet-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-3">
            <h2 className="font-bold text-gray-800 text-lg">Your answers</h2>
            {results.map((r, i) => (
              <div key={i} className={`flex items-start gap-3 p-3 rounded-xl ${r.correct ? 'bg-green-50' : 'bg-red-50'}`}>
                <span className="text-lg flex-shrink-0 mt-0.5">{r.correct ? '✅' : '❌'}</span>
                <p className="text-sm text-gray-700 leading-relaxed">{r.statement}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleRestart}
              className="flex-1 bg-violet-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-violet-700 transition-colors"
            >
              Play again
            </button>
            <Link
              to="/"
              className="flex-1 text-center bg-white border border-slate-200 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-xl w-full space-y-6">

        <div className="text-center space-y-3">
          <div className="text-5xl">&#x2753;</div>
          <h1 className="text-3xl font-bold text-gray-800">True or False</h1>
          <p className="text-gray-500 text-sm">15 statements about AI &mdash; you decide</p>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Question {currentIndex + 1} of {total}</span>
          <span className="font-semibold text-violet-600">Score: {score}</span>
        </div>

        <div className="w-full bg-gray-100 rounded-full h-2">
          <div
            className="bg-violet-400 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex) / total) * 100}%` }}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <div className="inline-block bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full">
            {current.topic}
          </div>
          <p className="text-xl font-semibold text-gray-800 leading-relaxed">
            {current.statement}
          </p>
        </div>

        {answered === null ? (
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleAnswer(true)}
              className="bg-green-500 hover:bg-green-600 text-white text-2xl font-bold py-8 rounded-2xl transition-all duration-150 shadow-sm hover:shadow-md active:scale-95"
            >
              TRUE
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="bg-red-500 hover:bg-red-600 text-white text-2xl font-bold py-8 rounded-2xl transition-all duration-150 shadow-sm hover:shadow-md active:scale-95"
            >
              FALSE
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className={`rounded-2xl p-5 space-y-3 ${userAnswer === current.isTrue ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{userAnswer === current.isTrue ? '✅' : '❌'}</span>
                <div>
                  <p className={`font-bold text-lg ${userAnswer === current.isTrue ? 'text-green-700' : 'text-red-700'}`}>
                    {userAnswer === current.isTrue ? 'Correct!' : 'Not quite.'}
                  </p>
                  <p className={`text-sm font-semibold ${userAnswer === current.isTrue ? 'text-green-600' : 'text-red-600'}`}>
                    This statement is <strong>{current.isTrue ? 'TRUE' : 'FALSE'}</strong>
                  </p>
                </div>
              </div>
              <p className={`text-sm leading-relaxed ${userAnswer === current.isTrue ? 'text-green-800' : 'text-red-800'}`}>
                {current.explanation}
              </p>
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-4 rounded-2xl transition-colors"
            >
              {currentIndex < total - 1 ? 'Next statement' : 'See results'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
