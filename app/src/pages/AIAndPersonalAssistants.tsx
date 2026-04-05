import { useState } from 'react'
import { Link } from '@tanstack/react-router'

const KEY_TAKEAWAYS = [
  'Voice assistants like Siri, Alexa, and Google Assistant use natural language processing AI to understand speech and respond to requests',
  'These devices are always listening for a wake word — which raises genuine privacy questions about what data is captured and stored',
  'They are excellent at simple commands but struggle with complex, multi-step reasoning or tasks requiring common sense',
  'Smart speakers can be accessed by anyone in the room — a significant consideration for households with children or domestic abuse concerns',
  'UK data protection law means you have rights to access and delete data collected by these devices',
]

const quizQuestions = [
  {
    question: 'How do voice assistants like Alexa and Google Assistant understand what you say?',
    options: [
      'A human transcribes your speech in real time',
      'They use natural language processing AI to convert speech to text, then analyse the text to understand your intent and generate a response',
      'They use simple keyword matching with no real AI involved',
      'They connect to your Wi-Fi and search Google automatically',
    ],
    correctIndex: 1,
    explanation: 'Modern voice assistants use a pipeline of AI models: first, automatic speech recognition converts your speech to text; then natural language understanding identifies your intent and extracts key information; finally, a response system formulates an answer. Large language models are increasingly integrated into this pipeline to handle more complex requests.',
  },
  {
    question: 'What is the "always listening" privacy concern with smart speakers?',
    options: [
      'Smart speakers turn on your camera without permission',
      'Devices like Amazon Echo and Google Nest are in a state of continuous low-level audio monitoring, waiting for the wake word — but recordings of what happens around them may occasionally be captured and processed',
      'The devices record every sound in your home and sell it to advertisers immediately',
      'There is no privacy concern — all data is deleted instantly',
    ],
    correctIndex: 1,
    explanation: 'Smart speakers use an on-device wake word detector that is constantly listening for "Hey Alexa" or "OK Google". After the wake word, audio is sent to cloud servers for processing. However, false activations happen — the device may start recording without you realising. Amazon and Google have had staff review a sample of recordings to improve accuracy, raising significant privacy concerns. You can review and delete your voice history in the app settings.',
  },
  {
    question: 'What are voice assistants generally good at, and what do they struggle with?',
    options: [
      'They are equally good at everything',
      'They excel at simple, well-defined tasks (timers, weather, music, smart home control) but struggle with complex reasoning, ambiguous requests, and tasks requiring common sense or real-world context',
      'They are only useful for shopping',
      'They are better at complex reasoning than humans',
    ],
    correctIndex: 1,
    explanation: 'Voice assistants handle structured, familiar requests well. "Set a timer for 10 minutes" or "What\'s the weather tomorrow?" are tasks they are well-optimised for. But "Should I bring an umbrella to my sister\'s wedding in Bath next Saturday?" requires integrating multiple pieces of context, common sense, and personalised judgement — tasks where they frequently fail or give generic responses.',
  },
  {
    question: 'What UK data protection rights do you have regarding smart speaker recordings?',
    options: [
      'None — companies can keep your data forever',
      'Under UK GDPR, you have the right to access data held about you, request its deletion, and be informed about how it is used',
      'You can only delete data if you cancel your subscription',
      'Your data is automatically deleted after 24 hours by law',
    ],
    correctIndex: 1,
    explanation: 'UK GDPR gives you rights over personal data including voice recordings. You can typically access and delete your voice history through the device app (e.g., Alexa app, Google Home app). You can also opt out of having your recordings reviewed by human staff. If you believe a company is mishandling your data, you can complain to the Information Commissioner\'s Office (ICO).',
  },
  {
    question: 'What specific concern exists about smart speakers in households with children?',
    options: [
      'Children might become too clever from using them',
      'Smart speakers respond to any voice in the room, so children can make purchases, hear inappropriate content, or interact with the device in ways parents may not intend or monitor',
      'Children\'s voices are not recognised by smart speakers',
      'Smart speakers are designed exclusively for adults by law',
    ],
    correctIndex: 1,
    explanation: 'Smart speakers by default respond to anyone in the room who says the wake word. This means children can ask questions, make purchases, or access content. Amazon offers voice profiles and parental controls (Amazon Kids), but these require active setup. The ICO has also expressed concerns about children\'s data being collected by these devices, particularly in relation to the Children\'s Code.',
  },
]

export function AIAndPersonalAssistants() {
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
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-3">
          <span className="text-5xl" aria-hidden="true">&#x1F4F1;</span>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">AI and personal assistants</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">6 min read &middot; Beginner</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>More than half of UK adults now use a voice assistant regularly. Whether it is Alexa on an Echo speaker, Siri on an iPhone, Google Assistant on an Android, or Cortana on a Windows PC, these AI-powered personal assistants have become woven into daily life. Understanding how they work — and their genuine privacy implications — helps you use them confidently and safely.</p>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 pt-2">How voice assistants understand you</h2>
          <p>When you say "Hey Alexa, play some jazz", several AI systems work in sequence. First, a wake word detection model on the device itself monitors audio for the specific phrase. Once triggered, your speech is captured and sent to cloud servers. There, automatic speech recognition (ASR) converts your audio to text. A natural language understanding (NLU) model then interprets what you want. Finally, a response is generated and returned to your device.</p>
          <p>This whole process takes about one to two seconds. As large language models have improved, companies have been integrating them into voice assistants to handle more complex, conversational requests — Alexa with Claude, Google Assistant with Gemini, Siri with more advanced Apple AI models.</p>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 pt-2">The always-listening problem</h2>
          <p>Smart speakers are in a permanent state of low-level audio monitoring. The on-device wake word detector is always running, listening for its activation phrase. False activations happen — conversations that sound like "Hey Alexa" trigger the device unexpectedly. When this happens, snippets of unintended conversations may be recorded and processed.</p>
          <p>Amazon and Google have both acknowledged that a small sample of voice recordings are reviewed by employees to improve accuracy. This caused significant controversy when reported in 2019. Both companies now offer opt-outs and make it easier to delete voice history. Your Alexa app shows every recorded command — worth reviewing if you have not before.</p>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 pt-2">What they are good at — and what they are not</h2>
          <p>Voice assistants excel at well-defined, common requests: timers, reminders, music, weather, smart home control, quick factual questions. They struggle with ambiguity, complex reasoning, and anything requiring real-world context or common sense they were not trained for. They also make mistakes confidently — answering questions incorrectly without indicating any uncertainty.</p>
          <p>As large language models are integrated more deeply, the range of tasks voice assistants can handle is expanding. But the fundamental limitation remains: they are good at tasks where there is a clear, learnable pattern — and less reliable where genuine understanding and judgement are required.</p>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 pt-2">Privacy, families, and data rights</h2>
          <p>UK GDPR gives you rights over the personal data collected by smart speakers: you can access it, delete it, and object to certain uses. The ICO has specifically focused on smart speakers and children, noting that data collected from children requires extra protection under the Age Appropriate Design Code (Children's Code).</p>
          <p>For households with children, it is worth exploring parental controls, voice profiles, and purchase restrictions in your device app. For households with domestic abuse concerns, smart speakers can be used to monitor or control — a risk that domestic abuse charities have highlighted. Knowing how to disconnect, disable, and delete data from these devices is as important as knowing how to use them.</p>
        </div>
        <div className="bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 rounded-2xl p-5 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-600 dark:text-sky-400">Key takeaways</p>
          <ul className="space-y-1.5">
            {KEY_TAKEAWAYS.map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-sky-500 flex-shrink-0 mt-0.5">&#x2713;</span>{t}
              </li>
            ))}
          </ul>
        </div>
        {!quizStarted && (
          <div className="text-center">
            <button onClick={() => setQuizStarted(true)} className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl transition-colors">Test yourself &rarr;</button>
          </div>
        )}
        {quizStarted && !quizComplete && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 space-y-4">
            <p className="text-xs text-gray-400">Question {currentQuestion + 1} of {quizQuestions.length}</p>
            <p className="font-semibold text-gray-800 dark:text-gray-100 leading-snug">{q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt, idx) => {
                let style = 'border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/20'
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
            {showExplanation && <button onClick={handleNext} className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl transition-colors">{currentQuestion + 1 >= quizQuestions.length ? 'See results' : 'Next question'}</button>}
          </div>
        )}
        {quizComplete && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 text-center space-y-3">
            <p className="text-4xl">&#x1F3C6;</p>
            <p className="text-xl font-bold text-gray-800 dark:text-gray-100">Quiz complete!</p>
            <p className="text-gray-600 dark:text-gray-300">You scored <span className="font-bold text-sky-600 dark:text-sky-400">{score} out of {quizQuestions.length}</span></p>
            <Link to="/" className="inline-block mt-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl transition-colors">Back to home</Link>
          </div>
        )}
        <div className="text-center pt-4">
          <Link to="/" className="text-sky-600 dark:text-sky-400 text-sm hover:underline">&larr; Back to home</Link>
        </div>
      </div>
    </div>
  )
}
