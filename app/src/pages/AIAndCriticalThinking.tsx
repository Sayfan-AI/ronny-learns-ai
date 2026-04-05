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

const LESSON_TITLE = 'AI and critical thinking — using AI without losing your own mind'

const KEY_TAKEAWAYS = [
  'Using AI to look up facts and summarise information is very different from using AI to do your thinking for you — the former can make you more efficient, the latter can atrophy your ability to reason independently.',
  'AI language models can sound confident and authoritative even when they are wrong. The ability to evaluate a claim rather than simply accept it is a critical skill in an AI-saturated world.',
  'UK schools and universities are developing policies on AI use in education — generally distinguishing between AI as a learning tool (acceptable) and AI doing the work that students should be doing themselves (not acceptable).',
  'The most valuable human cognitive skills in an AI age — curiosity, ethical reasoning, creative synthesis, and the ability to ask the right question — are precisely the ones that AI is least good at and that education must continue to cultivate.',
  '"Prompt dependency" — relying on AI to generate ideas, structure arguments, or make decisions that you could make yourself — is a real risk, particularly for learners who are still developing these skills.',
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'What is the difference between using AI as a tutor versus letting AI "think for you"?',
    options: [
      'There is no meaningful difference — both achieve the same outcome',
      'Using AI as a tutor means asking it to explain concepts and guide your understanding; letting it think for you means asking it to produce the answer or argument you should be developing yourself',
      'Using AI as a tutor means you pay for a subscription',
      'Letting AI think for you is always faster and therefore better',
    ],
    correctIndex: 1,
    explanation:
      'The distinction matters enormously for learning. When you struggle with a problem and use AI to check your reasoning, you are doing the cognitive work that builds skill. When you ask AI to write your essay or solve the problem for you, you have outsourced the very activity that would have developed your ability.',
  },
  {
    question: 'Why is it important to evaluate AI-generated information critically?',
    options: [
      'Because AI is always wrong',
      'Because AI systems can produce confident, plausible-sounding text that is factually incorrect — sometimes called "hallucination"',
      'Because AI information is always biased towards one political view',
      'Because AI cannot access the internet',
    ],
    correctIndex: 1,
    explanation:
      'AI language models generate text that is statistically likely based on their training data. This means they can produce authoritative-sounding statements that are simply wrong — especially for obscure topics, recent events, or specific facts. Critical evaluation — asking "how do I know this is true?" — remains essential.',
  },
  {
    question: 'What approach do most UK universities take to AI use in assessed work?',
    options: [
      'They ban all use of AI tools outright',
      'They allow unlimited AI use with no restrictions',
      'They typically allow AI for research and learning support but require that submitted work reflects the student\'s own thinking and writing — with disclosure requirements for AI assistance',
      'They require all work to be submitted through a specific AI checking tool',
    ],
    correctIndex: 2,
    explanation:
      'UK universities\' approaches vary but most now have explicit AI policies that allow AI as a tool for learning support (checking grammar, summarising reading, generating ideas) while requiring that assessed work reflects the student\'s own intellectual contribution. Many require disclosure of AI use and have updated academic integrity policies.',
  },
  {
    question: 'What is "prompt dependency"?',
    options: [
      'A technical problem when AI fails to understand a question',
      'A pattern of over-relying on AI to generate ideas, arguments, or decisions that you could and should be making yourself',
      'The skill of writing effective prompts for AI systems',
      'A type of AI hallucination',
    ],
    correctIndex: 1,
    explanation:
      'Prompt dependency is the habit of defaulting to AI at the first sign of difficulty rather than persisting with independent thought. Research in education is beginning to document how this can reduce students\' confidence in their own thinking and their willingness to engage with hard problems.',
  },
  {
    question: 'Which human skills does the research suggest are most valuable in an AI-saturated world?',
    options: [
      'Typing speed and knowledge of multiple programming languages',
      'The ability to memorise large amounts of factual information',
      'Critical thinking, ethical reasoning, creative synthesis, curiosity, and the ability to ask the right question',
      'The ability to use as many AI tools as possible simultaneously',
    ],
    correctIndex: 2,
    explanation:
      'AI is increasingly capable at recall, pattern-matching, and producing fluent text. The skills that remain distinctly human — and distinctly valuable — are the ability to question assumptions, reason about ethics, connect ideas across domains in original ways, and identify what question is worth asking in the first place.',
  },
]

export function AIAndCriticalThinking() {
  useMarkVisited('ai-and-critical-thinking')

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <LessonSeriesBadge lessonId="ai-and-critical-thinking" />

      <h1 className="text-3xl font-bold text-gray-900 mb-2">{LESSON_TITLE}</h1>
      <p className="text-gray-500 text-sm mb-6">8 min read</p>

      <CompletedBadge lessonId="ai-and-critical-thinking" />
      <ShareButton lessonTitle={LESSON_TITLE} />

      <KeyTakeaways points={KEY_TAKEAWAYS} />

      <div className="prose prose-gray max-w-none mt-8">

        <h2>The AI in your pocket</h2>
        <p>
          A student in 2024 has something no previous generation had: instant access, at any moment, to an AI system capable of answering almost any question, writing almost any essay, and solving almost any problem — in seconds, for free, from their phone.
        </p>
        <p>
          This is genuinely remarkable. It is also genuinely challenging. Because the question of whether this makes people smarter or less capable depends entirely on how they use it.
        </p>

        <h2>Using AI as a tool vs outsourcing your thinking</h2>
        <p>
          Consider two students working on an essay about climate change. The first uses ChatGPT to ask: "Explain the greenhouse effect in simple terms." She reads the explanation, finds it useful, and incorporates her improved understanding into her own argument. She uses AI to learn faster.
        </p>
        <p>
          The second student asks: "Write me a 1000-word essay arguing that climate change policy needs to be more radical." He receives a polished essay and submits it with minor edits. He has produced the essay without doing the intellectual work that writing an essay is meant to develop.
        </p>
        <p>
          The outcome is different not just for the assignment — it is different for the students. The first is developing her ability to understand, evaluate, and argue. The second is outsourcing exactly the activity that would have developed those abilities.
        </p>
        <p>
          This distinction — AI as learning tool versus AI as cognitive prosthetic — is at the heart of every serious educational debate about AI today.
        </p>

        <h2>The confidence problem: AI sounds right even when it is wrong</h2>
        <p>
          AI language models generate text that is statistically plausible given their training data. They are optimised to produce fluent, confident-sounding responses. They are not optimised for truth.
        </p>
        <p>
          This creates what researchers call "hallucinations" — confident claims that are simply incorrect. An AI asked about a historical event might fabricate a specific date. An AI asked for academic citations might invent plausible-looking journal articles and authors that do not exist. An AI asked a legal question might state as definitive fact something that is actually contested or jurisdiction-specific.
        </p>
        <p>
          The problem is that these errors look exactly like correct answers. There is no uncertainty flag, no disclaimer, no tone shift. The AI states the invented fact with the same authority as a real one.
        </p>
        <p>
          This means the critical thinking skill of source verification — "how do I know this is true?" — matters more, not less, in an AI world. Every important AI-generated fact should be checked against reliable sources.
        </p>

        <h2>How UK schools and universities are responding</h2>
        <p>
          UK schools and universities have scrambled to develop AI policies. The challenge is enormous: tools that did not exist in 2022 are now used by virtually every student. The responses vary.
        </p>
        <p>
          Many universities have updated their academic integrity policies to address AI. A common approach distinguishes between permitted uses (using AI to understand a topic, check grammar, brainstorm ideas) and non-permitted uses (submitting AI-generated text as your own work, using AI to complete assessments that are meant to test your own skills). Many now require disclosure: "I used ChatGPT to help structure my argument" must be declared.
        </p>
        <p>
          UK schools have been guided by the Department for Education's 2023 guidance, which emphasised that AI should support learning rather than replace it, and that schools should help students use AI tools critically rather than uncritically banning them.
        </p>
        <p>
          The harder challenge is assessment design. Any assessment that can be completed by AI is now fundamentally broken as a measure of student learning. This has accelerated interest in oral assessments, observed practical work, and assignments that require demonstrated understanding rather than polished written products.
        </p>

        <LessonNote lessonId="ai-and-critical-thinking" />

        <h2>What "prompt dependency" looks like</h2>
        <p>
          Researchers in education have begun documenting a pattern they call prompt dependency — a learned helplessness where students (and adults) default to asking AI rather than thinking independently. Signs include:
        </p>
        <ul>
          <li>Opening an AI chat before attempting to solve a problem yourself</li>
          <li>Accepting the first AI answer without questioning it or considering alternatives</li>
          <li>Using AI to generate opinions or arguments you are then unable to defend or explain</li>
          <li>Reduced tolerance for the discomfort of not knowing something immediately</li>
        </ul>
        <p>
          This is not about AI being bad. A calculator is also a tool that can be used well or poorly. The question is whether the person using the tool develops or loses the underlying capability the tool is replacing.
        </p>

        <h2>The skills that matter most now</h2>
        <p>
          If AI can produce decent text, recall facts, and generate ideas, what does that mean for human skills? Researchers and educators are converging on a similar list of what remains distinctly human and distinctly valuable:
        </p>
        <ul>
          <li><strong>Critical evaluation</strong> — the ability to assess whether a claim is well-supported, not just plausible-sounding</li>
          <li><strong>Ethical reasoning</strong> — thinking through the implications of an action or policy for different people, including people not in the room</li>
          <li><strong>Creative synthesis</strong> — connecting ideas across domains in original ways, not just recombining existing patterns</li>
          <li><strong>Curiosity</strong> — the desire to understand, not just to receive an answer</li>
          <li><strong>Asking the right question</strong> — knowing what to ask AI (or anyone else) is itself a deep skill that AI cannot teach you</li>
        </ul>
        <p>
          These are also, not coincidentally, the skills that the best education has always tried to develop. AI has not changed what good education looks like — it has made it more urgently necessary.
        </p>

      </div>

      <div className="mt-10">
        <Quiz questions={QUIZ_QUESTIONS} lessonId="ai-and-critical-thinking" />
      </div>

      <LessonRating lessonId="ai-and-critical-thinking" />
      <LessonFeedback lessonId="ai-and-critical-thinking" />
      <ReviewLaterButton lessonId="ai-and-critical-thinking" />
      <RelatedLessons currentId="ai-and-critical-thinking" />
      <NextLesson currentId="ai-and-critical-thinking" />
    </div>
  )
}
