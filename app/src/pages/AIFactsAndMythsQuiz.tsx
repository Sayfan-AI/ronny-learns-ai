import { useState } from 'react'
import { Link } from '@tanstack/react-router'

interface MythQuestion {
  statement: string
  verdict: 'Myth' | 'Fact'
  explanation: string
  icon: string
}

const questions: MythQuestion[] = [
  {
    statement: 'AI understands what it says in the same way humans do.',
    verdict: 'Myth',
    explanation: "Current AI language models like ChatGPT generate text by predicting the most likely next word based on patterns learned from vast amounts of text. They do not understand meaning the way humans do. They have no inner experience, no beliefs, and no genuine comprehension. They can produce text that sounds understanding, but this is pattern matching, not understanding.",
    icon: '&#x1F9E0;',
  },
  {
    statement: 'AI can generate images, music, and video as well as text.',
    verdict: 'Fact',
    explanation: "Modern AI systems include image generators like DALL-E, Midjourney, and Stable Diffusion, music generators like Suno and Udio, and video generators like Sora. These use different types of AI models to create original content in each medium. The AI learns the patterns and structures of its medium from vast training datasets and can generate new content that follows those patterns.",
    icon: '&#x1F3A8;',
  },
  {
    statement: 'AI will definitely take all jobs within the next 10 years.',
    verdict: 'Myth',
    explanation: "While AI will automate many tasks and change many jobs significantly, research suggests a more complex picture than total job replacement. AI tends to automate specific tasks within jobs rather than entire jobs. New jobs are also created by AI technology. Historical technological changes, from the industrial revolution to computing, eliminated some jobs while creating others. The actual pace and pattern of AI-driven job change remains genuinely uncertain.",
    icon: '&#x1F4BC;',
  },
  {
    statement: "AI systems can be biased in ways that reflect the biases in their training data.",
    verdict: 'Fact',
    explanation: "This is a well-documented and serious issue. AI systems learn from data created by humans, which reflects historical inequalities and prejudices. Facial recognition systems have been shown to be less accurate for women and people with darker skin tones. Hiring AI has been shown to discriminate against women. Loan AI has shown racial bias. Identifying and reducing bias in AI is an active area of research and regulation.",
    icon: '&#x2696;&#xFE0F;',
  },
  {
    statement: "AI is always more accurate and reliable than human experts.",
    verdict: 'Myth',
    explanation: "AI performs excellently at specific, well-defined tasks it has been trained on, sometimes surpassing human experts in those narrow areas. But AI can fail in unpredictable ways on inputs that fall outside its training distribution, and it can be confidently wrong. Human experts bring contextual understanding, common sense, and the ability to reason in novel situations. Most effective deployments combine AI and human expertise rather than replacing one with the other.",
    icon: '&#x1F3AF;',
  },
  {
    statement: "AI used in the UK is subject to UK and EU data protection laws.",
    verdict: 'Fact',
    explanation: "The UK GDPR (derived from the EU GDPR after Brexit) applies to AI systems that process personal data in the UK. The EU AI Act (which became law in 2024) applies to AI systems used in the EU and to systems developed elsewhere that affect EU residents. UK organisations developing or using AI must comply with UK GDPR, and those operating in both markets must navigate both regimes. The ICO (Information Commissioner's Office) provides guidance on AI and data protection.",
    icon: '&#x2696;&#xFE0F;',
  },
  {
    statement: "AI chatbots like ChatGPT are connected to the internet and have access to all current information.",
    verdict: 'Myth',
    explanation: "Base language models are trained on data up to a specific cutoff date and do not have live internet access unless explicitly given a search tool (some versions of ChatGPT have a browse feature, but it is not always active). This is why AI models can have outdated information and why they should not be relied on for current events, stock prices, or recent news without verification. Always check when the model's knowledge was last updated.",
    icon: '&#x1F310;',
  },
  {
    statement: "AI is already being used in NHS diagnosis and treatment planning.",
    verdict: 'Fact',
    explanation: "Several AI tools are approved and in use across the NHS. AI is used to analyse chest X-rays and CT scans to detect cancer and other conditions, sometimes catching cases a radiologist might miss. AI helps triage A&E patients by severity. AI-powered retinal scanning can detect diabetic eye disease automatically. The NHS AI Lab was established specifically to support the safe adoption of AI in healthcare. These are AI-assisted tools, with qualified clinicians making all final decisions.",
    icon: '&#x1F3E5;',
  },
  {
    statement: "AI systems are conscious and have feelings.",
    verdict: 'Myth',
    explanation: "No current AI system is conscious or has feelings. They have no subjective experience, no awareness of their own existence, and no emotions. When an AI chatbot says it feels curious or happy, it is generating words that pattern-match to appropriate responses in context, not reporting an inner state. The question of machine consciousness is a philosophical one, but there is no scientific evidence that current AI systems have any form of subjective experience.",
    icon: '&#x1F916;',
  },
  {
    statement: "It is possible to deliberately feed misleading information to an AI model to make it behave in unintended ways.",
    verdict: 'Fact',
    explanation: "This is called adversarial attack or prompt injection and is a real security concern. Carefully crafted inputs can cause AI systems to behave unexpectedly, reveal information they should not, or be manipulated into ignoring their safety guidelines. AI security is an active research field. This is one reason why AI systems, especially those with access to sensitive data or real-world actions, must be deployed with robust security measures and human oversight.",
    icon: '&#x1F512;',
  },
]

export function AIFactsAndMythsQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [userAnswer, setUserAnswer] = useState<'Myth' | 'Fact' | null>(null)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)

  const current = questions[currentIndex]

  function handleAnswer(answer: 'Myth' | 'Fact') {
    if (revealed) return
    setUserAnswer(answer)
    setRevealed(true)
    if (answer === current.verdict) {
      setScore(s => s + 1)
    }
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1)
      setRevealed(false)
      setUserAnswer(null)
    } else {
      setCompleted(true)
    }
  }

  function handleRestart() {
    setCurrentIndex(0)
    setRevealed(false)
    setUserAnswer(null)
    setScore(0)
    setCompleted(false)
  }

  if (completed) {
    const percentage = Math.round((score / questions.length) * 100)
    let message = ''
    let messageColor = ''
    if (percentage >= 90) { message = 'Outstanding! You really know your AI facts from myths.'; messageColor = 'text-green-700' }
    else if (percentage >= 70) { message = 'Great work! You have a solid grasp of how AI really works.'; messageColor = 'text-blue-700' }
    else if (percentage >= 50) { message = 'Good effort! There is always more to learn about AI.'; messageColor = 'text-amber-700' }
    else { message = 'AI can be surprising! Review the explanations to learn more.'; messageColor = 'text-rose-700' }

    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white px-4 py-10 flex flex-col items-center">
        <div className="max-w-2xl w-full space-y-6">
          <div className="text-center space-y-4">
            <div className="text-6xl">&#x1F3C6;</div>
            <h1 className="text-3xl font-bold text-gray-800">Quiz complete!</h1>
            <div className="text-6xl font-bold text-indigo-600">{score}/{questions.length}</div>
            <p className={`text-lg font-semibold ${messageColor}`}>{message}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
            >
              Try again
            </button>
            <Link to="/" className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-center">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const isCorrect = revealed && userAnswer === current.verdict

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-6">

        <div className="text-center space-y-2">
          <div className="text-5xl">&#x1F9EA;</div>
          <h1 className="text-3xl font-bold text-gray-800">AI facts and myths</h1>
          <p className="text-gray-600">Is each statement a fact or a myth? Find out the truth about AI.</p>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span className="font-semibold text-indigo-600">Score: {score}</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex) / questions.length) * 100}%` }}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-5">
          <div className="flex items-start gap-3">
            <span className="text-3xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: current.icon }} />
            <p className="text-xl font-semibold text-gray-800 leading-snug">{current.statement}</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => handleAnswer('Fact')}
              disabled={revealed}
              className={[
                'flex-1 py-3 px-4 rounded-xl font-bold text-lg border-2 transition-all',
                revealed && current.verdict === 'Fact'
                  ? 'bg-green-100 border-green-500 text-green-800'
                  : revealed && userAnswer === 'Fact' && current.verdict !== 'Fact'
                  ? 'bg-red-100 border-red-400 text-red-700'
                  : revealed
                  ? 'bg-gray-50 border-gray-200 text-gray-400'
                  : 'bg-green-50 border-green-300 text-green-700 hover:bg-green-100 hover:border-green-500',
              ].join(' ')}
            >
              &#x2705; Fact
            </button>
            <button
              onClick={() => handleAnswer('Myth')}
              disabled={revealed}
              className={[
                'flex-1 py-3 px-4 rounded-xl font-bold text-lg border-2 transition-all',
                revealed && current.verdict === 'Myth'
                  ? 'bg-green-100 border-green-500 text-green-800'
                  : revealed && userAnswer === 'Myth' && current.verdict !== 'Myth'
                  ? 'bg-red-100 border-red-400 text-red-700'
                  : revealed
                  ? 'bg-gray-50 border-gray-200 text-gray-400'
                  : 'bg-rose-50 border-rose-300 text-rose-700 hover:bg-rose-100 hover:border-rose-500',
              ].join(' ')}
            >
              &#x274C; Myth
            </button>
          </div>

          {revealed && (
            <div className={`rounded-xl p-4 space-y-2 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-rose-50 border border-rose-200'}`}>
              <p className={`font-bold text-sm ${isCorrect ? 'text-green-700' : 'text-rose-700'}`}>
                {isCorrect ? '&#x2705; Correct! ' : `&#x274C; Not quite. It is a ${current.verdict}. `}
              </p>
              <p className={`text-sm leading-relaxed ${isCorrect ? 'text-green-800' : 'text-rose-800'}`}>
                {current.explanation}
              </p>
            </div>
          )}

          {revealed && (
            <button
              onClick={handleNext}
              className="w-full py-3 px-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
            >
              {currentIndex < questions.length - 1 ? 'Next question' : 'See results'}
            </button>
          )}
        </div>

        <div className="text-center">
          <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 underline">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
