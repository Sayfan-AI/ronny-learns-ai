import { useState, useCallback } from 'react'
import { Link } from '@tanstack/react-router'

interface Statement {
  id: string
  text: string
  isTrue: boolean
  explanation: string
}

const STATEMENTS: Statement[] = [
  {
    id: 's1',
    text: 'AI systems are always listening to everything you say, even when you have not used the wake word.',
    isTrue: false,
    explanation: 'FALSE. Voice assistants use a two-stage design: a small on-device model listens only for the wake word ("Alexa", "Hey Siri") and does not send audio to the cloud. Only after the wake word is detected does audio get sent. However, accidental activations do occur — which is why your Echo sometimes lights up for no reason.',
  },
  {
    id: 's2',
    text: 'AI can now beat the best human players at chess, Go, and many popular video games.',
    isTrue: true,
    explanation: 'TRUE. IBM\'s Deep Blue beat Garry Kasparov at chess in 1997. DeepMind\'s AlphaGo beat world champion Lee Sedol in 2016. OpenAI Five beat professional Dota 2 teams in 2019. AI now surpasses humans at most well-defined games — though complex real-world tasks and open-ended creativity remain beyond current AI.',
  },
  {
    id: 's3',
    text: 'If an AI makes a decision about your loan application or job application, you have no right to challenge it in the UK.',
    isTrue: false,
    explanation: 'FALSE. Under UK GDPR (Article 22), you have the right not to be subject to solely automated decisions that have significant effects on you — like loan or job decisions. You have the right to request human review, to express your view, and to be given a meaningful explanation. Lenders and employers must have processes in place to handle these requests.',
  },
  {
    id: 's4',
    text: 'AI systems can currently experience emotions like happiness, sadness, or loneliness.',
    isTrue: false,
    explanation: 'FALSE. Current AI systems do not have subjective experiences or emotions. They can generate text that describes emotions and respond in emotionally appropriate ways — but this is pattern matching, not feeling. There is no scientific consensus that any current AI system is sentient or experiences anything. AI chatbots that say "I feel happy" are producing statistically likely text, not reporting an inner experience.',
  },
  {
    id: 's5',
    text: 'The NHS is already using AI to help detect diseases like cancer and eye conditions.',
    isTrue: true,
    explanation: 'TRUE. Moorfields Eye Hospital uses AI (developed with DeepMind) to detect diabetic retinopathy and other eye conditions from retinal scans. NHS trusts are using AI to help detect early signs of cancer in mammograms and CT scans. The NHS AI Lab was set up in 2019 to accelerate safe AI adoption across the NHS.',
  },
  {
    id: 's6',
    text: 'A computer that can pass the Turing Test has definitely achieved human-level intelligence.',
    isTrue: false,
    explanation: 'FALSE. The Turing Test (whether an AI can fool a human into thinking it is human in text conversation) is a test of conversational ability, not general intelligence. Modern large language models can often pass informal versions of the Turing Test — but they lack common sense, cannot perform physical tasks, have no understanding of the real world, and fail many tests of genuine reasoning. Passing the Turing Test is not the same as being generally intelligent.',
  },
  {
    id: 's7',
    text: 'AI-generated deepfake videos of real people saying things they never said are already being used in scams and disinformation campaigns.',
    isTrue: true,
    explanation: 'TRUE. Deepfake technology is already being misused. There have been documented cases of deepfake videos of politicians and public figures spreading disinformation, deepfake audio used in business email compromise scams (CEO fraud), and deepfake images used for non-consensual intimate image abuse. The Online Safety Act 2023 criminalised sharing non-consensual deepfake intimate images in the UK.',
  },
  {
    id: 's8',
    text: 'All AI systems in the UK are regulated by the same government body, similar to how the FCA regulates financial services.',
    isTrue: false,
    explanation: 'FALSE. The UK deliberately chose not to create a single AI regulator. Instead, existing regulators (the ICO for data, FCA for finance, CQC for healthcare, Ofcom for online content) each oversee AI in their own sector. The AI Safety Institute monitors frontier AI risk but does not regulate most AI products. This "pro-innovation" approach means AI regulation in the UK is more fragmented than in the EU, which has the comprehensive AI Act.',
  },
  {
    id: 's9',
    text: 'Spam filters in email are one of the oldest examples of machine learning in widespread use.',
    isTrue: true,
    explanation: 'TRUE. Email spam filtering using machine learning dates back to the early 2000s. Paul Graham\'s influential 2002 essay "A Plan for Spam" described a Bayesian spam filter. Google\'s Gmail has used machine learning for spam detection since its launch in 2004. This makes spam filtering one of the first examples of AI being used at scale in a consumer product that most people use daily.',
  },
  {
    id: 's10',
    text: 'ChatGPT and other large language models have access to the real-time internet and know about events that happened yesterday.',
    isTrue: false,
    explanation: 'FALSE. Large language models are trained on a dataset with a cutoff date — typically several months to a year or more before the model is released. The base model has no knowledge of events after that date. Some products (like Bing Chat and ChatGPT with browsing enabled) add a separate internet search layer on top, but the underlying model itself does not automatically know recent events.',
  },
  {
    id: 's11',
    text: 'The UK has more AI companies per head of population than any other country in the world.',
    isTrue: true,
    explanation: 'TRUE (approximately). The UK is consistently ranked first or second in AI company density globally (after the USA in absolute terms). London has one of the largest concentrations of AI startups in the world. DeepMind, Arm, Wayve, and Magic Pony Technology are among the notable UK-founded AI companies. The UK government has designated AI as a key priority in its industrial strategy.',
  },
  {
    id: 's12',
    text: 'An AI that can write code, compose music, and write essays has achieved Artificial General Intelligence (AGI).',
    isTrue: false,
    explanation: 'FALSE. AGI refers to an AI that can perform any intellectual task that a human can — including novel problem-solving, learning entirely new skills, and adapting to radically new situations. Being good at multiple tasks does not mean AGI. Current AI systems excel at pattern-matching in domains they were trained on. They cannot reliably reason about genuinely novel situations, learn new skills the way a human does, or handle the full breadth of challenges a human faces. Experts disagree on how close (or far) we are from AGI.',
  },
  {
    id: 's13',
    text: 'UK employers are legally required to tell job applicants if AI was used to screen or assess their application.',
    isTrue: false,
    explanation: 'FALSE (currently). There is no specific UK law requiring employers to disclose AI use in recruitment. UK GDPR Article 22 gives you rights around solely automated decisions — but many employers have humans technically involved in the process, even if AI does most of the work. The ICO has published guidance on AI in recruitment, but disclosure is not currently legally mandated. This is an area where the law has not kept pace with practice.',
  },
  {
    id: 's14',
    text: 'AI systems trained on historical data can perpetuate and amplify the biases present in that data.',
    isTrue: true,
    explanation: 'TRUE. This is one of the most well-documented problems in AI. If training data reflects historical discrimination (e.g., past hiring decisions that favoured men, loan decisions that disadvantaged certain postcodes), the AI learns those patterns and applies them to future decisions. Amazon\'s CV-screening AI downgraded women\'s applications. COMPAS risk scoring has shown racial bias. Facial recognition systems perform worse on darker skin tones because training datasets overrepresented lighter-skinned faces.',
  },
  {
    id: 's15',
    text: 'All data collected by AI devices in your home (smart speakers, security cameras) is protected by UK GDPR.',
    isTrue: true,
    explanation: 'TRUE. UK GDPR applies to any organisation that processes personal data about UK residents — including the manufacturers and operators of smart home devices. Your voice recordings, camera footage, and usage patterns are personal data. You have the right to access this data, request its deletion, and complain to the ICO if you believe it is being misused. However, if you are recording your own neighbours or the public with a home camera, you may also become a data controller with your own obligations.',
  },
]

export function TrueOrFalseQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answered, setAnswered] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [answers, setAnswers] = useState<Array<{ isTrue: boolean; correct: boolean }>>([])

  const currentStatement = STATEMENTS[currentIndex]
  const total = STATEMENTS.length

  const handleAnswer = useCallback((answer: boolean) => {
    if (answered !== null) return
    const correct = answer === currentStatement.isTrue
    if (correct) setScore(s => s + 1)
    setAnswered(answer)
    setAnswers(prev => [...prev, { isTrue: answer, correct }])
  }, [answered, currentStatement])

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= total) {
      setGameOver(true)
    } else {
      setCurrentIndex(i => i + 1)
      setAnswered(null)
    }
  }, [currentIndex, total])

  const handlePlayAgain = useCallback(() => {
    setCurrentIndex(0)
    setAnswered(null)
    setScore(0)
    setGameOver(false)
    setAnswers([])
  }, [])

  function getScoreMessage(score: number, total: number): string {
    const pct = score / total
    if (pct >= 0.9) return 'Excellent! You know your AI facts inside out.'
    if (pct >= 0.7) return 'Great score — you have a solid grasp of AI realities vs myths.'
    if (pct >= 0.5) return 'Good effort! The explanations will help fill in the gaps.'
    return 'Keep exploring! The lessons on this site will help you learn more about these topics.'
  }

  if (gameOver) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
        <div className="max-w-xl w-full space-y-6">
          <div className="text-center space-y-3">
            <div className="text-6xl">
              {score / total >= 0.8 ? '&#x1F3C6;' : score / total >= 0.6 ? '&#x1F44F;' : '&#x1F4AA;'}
            </div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Quiz complete!</h1>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-8 text-center space-y-4">
            <p className="text-6xl font-bold text-amber-600 dark:text-amber-400">
              {score} / {total}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {getScoreMessage(score, total)}
            </p>
          </div>
          {/* Score breakdown */}
          <div className="flex flex-wrap gap-1.5 justify-center">
            {answers.map((a, i) => (
              <div
                key={i}
                className={`w-7 h-7 rounded-full text-xs flex items-center justify-center font-bold ${
                  a.correct ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                }`}
              >
                {a.correct ? '&#x2713;' : '&#x2717;'}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={handlePlayAgain}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
            >
              Play again
            </button>
            <Link
              to="/"
              className="w-full text-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold px-6 py-3 rounded-full text-sm transition-colors"
            >
              Back to lessons
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-xl w-full space-y-6">

        <div className="text-center space-y-2">
          <Link to="/" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Back to home</Link>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            True or False?
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            15 statements about AI — are they true or false?
          </p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-amber-500 h-2 rounded-full transition-all"
              style={{ width: `${(currentIndex / total) * 100}%` }}
            />
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">
            {currentIndex + 1} / {total}
          </span>
          <span className="text-sm font-semibold text-amber-600 dark:text-amber-400 flex-shrink-0">
            {score} pts
          </span>
        </div>

        {/* Statement */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-5">
          <div className="text-center">
            <span className="inline-block bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Statement {currentIndex + 1}
            </span>
            <p className="text-lg text-gray-800 dark:text-gray-100 leading-relaxed font-medium">
              "{currentStatement.text}"
            </p>
          </div>

          {answered === null ? (
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleAnswer(true)}
                className="bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 text-green-800 dark:text-green-200 font-bold py-4 rounded-2xl text-lg transition-colors"
              >
                &#x2705; True
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="bg-red-100 hover:bg-red-200 dark:bg-red-900 dark:hover:bg-red-800 text-red-800 dark:text-red-200 font-bold py-4 rounded-2xl text-lg transition-colors"
              >
                &#x274C; False
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {/* Answer reveal */}
              <div className={`rounded-xl p-4 text-center ${
                answered === currentStatement.isTrue
                  ? 'bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800'
                  : 'bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800'
              }`}>
                <p className={`text-xl font-bold mb-1 ${
                  answered === currentStatement.isTrue
                    ? 'text-green-700 dark:text-green-300'
                    : 'text-red-700 dark:text-red-300'
                }`}>
                  {answered === currentStatement.isTrue ? '&#x2705; Correct!' : '&#x274C; Wrong!'}
                </p>
                <p className={`text-sm font-semibold ${
                  currentStatement.isTrue ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  This statement is {currentStatement.isTrue ? 'TRUE' : 'FALSE'}
                </p>
              </div>
              {/* Explanation */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {currentStatement.explanation}
              </div>
            </div>
          )}
        </div>

        {answered !== null && (
          <button
            onClick={handleNext}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
          >
            {currentIndex + 1 >= total ? 'See my score' : 'Next statement'}
          </button>
        )}

      </div>
    </div>
  )
}
