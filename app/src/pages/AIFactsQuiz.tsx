import { useState } from 'react'
import { useMarkVisited } from '../hooks/useMarkVisited'

interface FactQuestion {
  statement: string
  isTrue: boolean
  explanation: string
  category: string
}

const FACT_QUESTIONS: FactQuestion[] = [
  {
    statement: 'AI can be genuinely creative — it generates ideas that no human has ever had before.',
    isTrue: false,
    explanation: 'AI generates text and images by finding patterns in training data and combining elements in statistically likely ways. The results can be surprising and useful, but AI is not "creative" in the human sense — it has no experiences, intentions, or desire to express itself. When AI produces something that feels new, it is recombining things from its training data in ways humans did not specifically plan.',
    category: 'How AI works',
  },
  {
    statement: 'Most AI systems that seem intelligent — like recommendation algorithms and spam filters — do not use the same kind of AI as ChatGPT.',
    isTrue: true,
    explanation: 'The word "AI" covers a huge range of different technologies. The algorithm that recommends what to watch on Netflix, the filter that sorts your spam email, and the AI that detects tumours in medical scans all work very differently from large language models like ChatGPT or Claude. Calling all of these "AI" can make artificial intelligence seem both more unified and more human-like than it actually is.',
    category: 'AI myths',
  },
  {
    statement: 'AI always makes more accurate decisions than humans when given the same information.',
    isTrue: false,
    explanation: 'AI systems can outperform humans on specific, well-defined tasks with lots of training data — like identifying skin conditions from photographs. But AI also fails in ways humans do not: it can be confidently wrong, it does not know what it does not know, and it can produce nonsense in situations that differ from its training data. For complex, contextual decisions involving ethics, empathy, or novel situations, humans often perform better.',
    category: 'AI capabilities',
  },
  {
    statement: 'AI language models like ChatGPT are trained once and then their knowledge is fixed — they do not learn from your conversations.',
    isTrue: true,
    explanation: 'When you chat with ChatGPT, it does not update its knowledge based on what you say. The model was trained on a large dataset up to a certain date, and that training is fixed. Your conversations may be used in future training, but the model you are talking to today does not "remember" or "learn" from previous chats. This is why ChatGPT can give the same wrong answer repeatedly, even if you have corrected it before.',
    category: 'How AI works',
  },
  {
    statement: 'AI systems have been shown to discriminate on the basis of race, gender, and other protected characteristics.',
    isTrue: true,
    explanation: 'This is well-documented. Facial recognition systems have significantly higher error rates for darker-skinned women than for lighter-skinned men. Recruitment AI trained on historical hiring data has filtered out female candidates for technical roles. Predictive policing algorithms have unfairly targeted minority communities. These are not bugs to be fixed — they reflect patterns in the data the AI was trained on, which in turn reflect historical inequalities.',
    category: 'AI and society',
  },
  {
    statement: 'Robots are about to take most human jobs within the next ten years.',
    isTrue: false,
    explanation: 'This prediction has been made — and has failed to come true — many times since the 1960s. AI and automation will change many jobs and eliminate some entirely. But they will also create new roles, and many jobs require the physical presence, judgement, social skills, and adaptability that current AI cannot replicate. Most economists predict significant job transformation, but not the elimination of most work, within a ten-year horizon.',
    category: 'AI and work',
  },
  {
    statement: 'AI can understand the meaning of words in the same way a human understands them.',
    isTrue: false,
    explanation: 'AI language models process statistical relationships between words — they learn that "cat" tends to appear near "pet", "fur", "meow", and "whiskers". This is different from human understanding, which is grounded in physical experience: a human knows what a cat feels like, sounds like, and looks like. This is why AI can write convincingly about experiences it has never had, and why it can make errors that no human with real-world experience would make.',
    category: 'How AI works',
  },
  {
    statement: 'The UK has laws that give you the right to challenge automated decisions that significantly affect you.',
    isTrue: true,
    explanation: 'UK GDPR (the UK\'s version of the European data protection law) gives you the right not to be subject to a decision based solely on automated processing if it significantly affects you — such as being denied a loan, a job, or insurance. You can request human review of such decisions, ask for an explanation of the factors involved, and challenge the decision if you believe it is wrong.',
    category: 'AI and rights',
  },
  {
    statement: 'AI systems are objective because they use data and mathematics rather than human feelings.',
    isTrue: false,
    explanation: 'AI systems reflect the choices of the people who built them: what data to train on, what outcome to optimise for, how to define "success". These are all human decisions, and they embed human values and assumptions — often without the people building the AI even being aware of it. Data itself reflects the world as it has been, including historical biases. An AI trained to predict which loan applicants will repay will learn from historical lending decisions, which were themselves influenced by discrimination.',
    category: 'AI and society',
  },
  {
    statement: 'Large AI companies have committed to not building AI that could pose an existential risk to humanity.',
    isTrue: false,
    explanation: 'The picture is mixed. Some AI labs, including Anthropic (which makes Claude) and OpenAI (which makes ChatGPT), say that AI safety is central to their mission. But there is no binding international agreement, and competitive pressures create incentives to move fast. The UK and EU have taken regulatory steps, but global AI governance remains fragmented. Whether existing commitments are adequate is genuinely disputed among AI researchers.',
    category: 'AI safety',
  },
]

function CategoryBadge({ category }: { category: string }) {
  const colours: Record<string, string> = {
    'How AI works': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'AI myths': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'AI capabilities': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'AI and society': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    'AI and work': 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
    'AI and rights': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
    'AI safety': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  }
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colours[category] ?? 'bg-gray-100 text-gray-700'}`}>
      {category}
    </span>
  )
}

export function AIFactsQuiz() {
  useMarkVisited('ai-facts-quiz')

  const [answers, setAnswers] = useState<Record<number, boolean | null>>({})

  const answered = Object.keys(answers).length
  const correct = Object.entries(answers).filter(
    ([i, answer]) => answer === FACT_QUESTIONS[Number(i)].isTrue
  ).length

  function handleAnswer(index: number, answer: boolean) {
    if (answers[index] !== undefined) return
    setAnswers(prev => ({ ...prev, [index]: answer }))
  }

  function handleReset() {
    setAnswers({})
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const allAnswered = answered === FACT_QUESTIONS.length

  return (
    <main className="max-w-2xl mx-auto px-4 py-8 space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
          AI facts and myths
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          There is a lot of confusion about what AI can and cannot do. For each statement below, decide whether it is true or false — then read the explanation to find out why.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {answered} of {FACT_QUESTIONS.length} answered
          {answered > 0 && ` · ${correct} correct`}
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(answered / FACT_QUESTIONS.length) * 100}%` }}
        />
      </div>

      <div className="space-y-6">
        {FACT_QUESTIONS.map((q, i) => {
          const userAnswer = answers[i]
          const hasAnswered = userAnswer !== undefined
          const isCorrect = hasAnswered && userAnswer === q.isTrue

          return (
            <div
              key={i}
              className={`rounded-2xl border-2 p-5 space-y-4 transition-colors ${
                !hasAnswered
                  ? 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                  : isCorrect
                  ? 'border-green-400 dark:border-green-500 bg-green-50 dark:bg-green-900/20'
                  : 'border-red-400 dark:border-red-500 bg-red-50 dark:bg-red-900/20'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-gray-900 dark:text-white font-medium leading-snug flex-1">
                  <span className="text-gray-400 dark:text-gray-500 font-normal mr-2">{i + 1}.</span>
                  {q.statement}
                </p>
                <CategoryBadge category={q.category} />
              </div>

              {!hasAnswered ? (
                <div className="flex gap-3">
                  <button
                    onClick={() => handleAnswer(i, true)}
                    className="flex-1 py-2 rounded-xl border-2 border-green-300 dark:border-green-600 text-green-700 dark:text-green-300 font-semibold text-sm hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors"
                  >
                    True
                  </button>
                  <button
                    onClick={() => handleAnswer(i, false)}
                    className="flex-1 py-2 rounded-xl border-2 border-red-300 dark:border-red-600 text-red-700 dark:text-red-300 font-semibold text-sm hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
                  >
                    False
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg" aria-hidden="true">
                      {isCorrect ? '\u2705' : '\u274C'}
                    </span>
                    <span className={`font-semibold text-sm ${isCorrect ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                      {isCorrect ? 'Correct!' : `Not quite — this is ${q.isTrue ? 'true' : 'false'}.`}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {q.explanation}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {allAnswered && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-2xl p-6 text-center space-y-3">
          <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">
            {correct} / {FACT_QUESTIONS.length}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            {correct >= 9
              ? 'Excellent! You have a strong grasp of what AI can and cannot do.'
              : correct >= 7
              ? 'Good work. There are a few myths worth revisiting.'
              : correct >= 5
              ? 'Not bad — AI is genuinely confusing. The explanations above should help.'
              : 'AI is more complicated than it looks. Read through the explanations above — they cover the most important ideas.'}
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
        </div>
      )}
    </main>
  )
}
