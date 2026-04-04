import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { ShareButton } from '../components/ShareButton'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does "AI bias" mean?',
    options: [
      'AI intentionally discriminating against people it dislikes',
      'AI systems producing unfair outcomes because they learned unfair patterns from training data',
      'An AI that only works correctly for one type of user',
      'A setting that makes AI prefer certain topics',
    ],
    correctIndex: 1,
    explanation:
      'AI bias is not intentional. It happens when an AI learns from data that reflects historical inequalities or uneven representation. The AI picks up those patterns and repeats them — even though no one programmed it to discriminate.',
  },
  {
    question: 'Which of these is a real-world example of AI bias?',
    options: [
      'A spell checker preferring British spellings over American ones',
      'A facial recognition system that is more accurate on lighter-skinned faces because training data was skewed',
      'A calculator giving different results on different devices',
      'An AI refusing to answer trick questions',
    ],
    correctIndex: 1,
    explanation:
      'Facial recognition systems trained mostly on images of light-skinned faces perform less accurately on darker-skinned faces. This is a documented and studied example of bias caused by unrepresentative training data — with real consequences for who gets misidentified.',
  },
  {
    question: 'Why does biased training data cause biased AI?',
    options: [
      'Because AI is programmed to copy whatever humans do',
      'Because developers deliberately add bias to test the system',
      'Because AI learns statistical patterns from data — if the data is skewed, so is what the AI learns',
      'Because AI cannot handle data from more than one culture',
    ],
    correctIndex: 2,
    explanation:
      'AI learns by finding patterns in examples. If the training data over-represents certain groups or reflects historical discrimination, the AI learns those patterns as if they were normal. It has no way to know the data was skewed unless that is accounted for in how it is built and tested.',
  },
  {
    question: 'What is one way researchers try to reduce AI bias?',
    options: [
      'Using only data from one country to keep things consistent',
      'Auditing AI systems with diverse test groups and actively working to collect more representative training data',
      'Removing all human data and using only synthetic data',
      'Slowing down the AI so it has time to double-check itself',
    ],
    correctIndex: 1,
    explanation:
      'Reducing bias requires deliberate effort: auditing how well a system performs across different groups, collecting training data that better represents everyone, and testing with diverse users. It is an ongoing process, not a one-time fix.',
  },
]

export function AIBias() {
  useMarkVisited('ai-bias')
  useLessonVisit('ai-bias')
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x2696;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            What is AI bias?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            AI systems learn from data created by humans &mdash; and humans have not always been fair.
            Here is what that means, and why it matters.
          </p>
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm px-4 py-2 rounded-full">
            <span>About 6 min read</span>
          </div>
          <CompletedBadge lessonId="ai-bias" />
          <ShareButton lessonTitle="ai-bias" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What does "bias" mean here?</h2>
          <p className="text-gray-600 leading-relaxed">
            In everyday life, <strong>bias</strong> means favouring one thing over another unfairly.
            A biased judge might favour one side without a good reason. A biased news story might only
            tell half the picture.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>AI bias</strong> is the same idea, applied to AI systems. An AI is biased when it
            produces outcomes that are unfair to certain groups of people &mdash; not because someone
            programmed it to discriminate, but because it learned unfair patterns from its training data.
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <p className="text-orange-800 font-semibold text-sm">Key point</p>
            <p className="text-orange-700 text-sm leading-relaxed mt-1">
              AI bias is usually <em>unintentional</em>. The AI is not trying to be unfair.
              It is repeating patterns it learned &mdash; which is exactly what makes it tricky to spot and fix.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How does bias get into AI?</h2>
          <p className="text-gray-600 leading-relaxed">
            AI systems learn by looking at enormous amounts of examples. A language model might read
            billions of web pages. A facial recognition system might be trained on millions of photographs.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The problem: those examples were created by humans living in a world with real inequalities.
            If the examples are skewed &mdash; over-representing some groups, under-representing others,
            or reflecting historical discrimination &mdash; the AI learns those skewed patterns as if they
            were normal.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4F7;',
                title: 'Unrepresentative training data',
                text: 'If a facial recognition system is trained mostly on photos of light-skinned faces, it will be less accurate on darker-skinned faces — because it has not learned to recognise them as well. This has been measured and documented in real deployed systems.',
              },
              {
                icon: '&#x1F4CB;',
                title: 'Historical records reflecting past discrimination',
                text: 'Hiring algorithms trained on past hiring data can learn that certain universities, names, or background signals correlate with getting hired — even if those correlations existed because of historical bias, not genuine merit.',
              },
              {
                icon: '&#x1F5FA;&#xFE0F;',
                title: 'Feedback loops',
                text: 'If a biased system is used to make decisions, those decisions create new data. That new data can then be used to retrain the system — reinforcing the original bias. The problem compounds over time unless someone actively breaks the loop.',
              },
            ].map(({ icon, title, text }) => (
              <div key={title} className="flex gap-3 items-start">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-gray-800 mb-1">{title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Real examples</h2>
          <div className="space-y-4">
            {[
              {
                label: 'Facial recognition',
                text: 'Multiple studies have found that commercial facial recognition tools have significantly higher error rates for darker-skinned women compared to lighter-skinned men. In some cases the error rate was more than 30 percentage points higher. This matters enormously in contexts like law enforcement, where a misidentification can have life-changing consequences.',
              },
              {
                label: 'Hiring tools',
                text: "Amazon built an AI hiring tool and then abandoned it after discovering it penalised CVs that included the word 'women\'s' (as in 'women\'s chess club') — because it had been trained on CVs submitted to Amazon over 10 years, which skewed male.",
              },
              {
                label: 'Healthcare',
                text: 'A widely-used algorithm in US healthcare was found to systematically underestimate the health needs of Black patients compared to equally sick white patients. It used healthcare spending as a proxy for health need — but Black patients historically had less money spent on their care.',
              },
              {
                label: 'Predictive policing',
                text: 'Some police departments have used AI tools to predict where crime is likely to occur or who is likely to reoffend. If those tools are trained on arrest records from an era of uneven policing, they risk directing police to already over-policed communities — creating a self-fulfilling cycle.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-orange-50 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-orange-800">{label}</p>
                <p className="text-orange-700 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What is being done about it</h2>
          <p className="text-gray-600 leading-relaxed">
            Researchers, companies, and policymakers are all working on the problem:
          </p>
          <div className="space-y-3">
            {[
              {
                title: 'Bias audits',
                text: 'Testing AI systems across different demographic groups to measure whether they perform equally well for everyone.',
              },
              {
                title: 'Diverse training data',
                text: 'Deliberately collecting or reweighting training data to better represent the full range of people who will be affected by the system.',
              },
              {
                title: 'Transparency and disclosure',
                text: 'Requiring organisations to report how their AI systems perform across different groups, so problems can be spotted and addressed.',
              },
              {
                title: 'Regulation',
                text: "The EU's AI Act and similar laws in other countries require high-risk AI systems (in hiring, lending, law enforcement) to meet fairness and transparency standards.",
              },
            ].map(({ title, text }) => (
              <div key={title} className="flex gap-3 items-start">
                <span className="text-green-500 flex-shrink-0 mt-1">&#x2713;</span>
                <div>
                  <p className="font-semibold text-gray-800">{title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-bold text-blue-800">Why this matters to you</h2>
          <p className="text-blue-700 leading-relaxed">
            Understanding AI bias makes you a more informed user and citizen. When you hear about an AI
            being used in hiring, policing, healthcare, or lending, you can ask: who was this system tested on?
            Does it work equally well for everyone it affects?
          </p>
          <p className="text-blue-700 leading-relaxed">
            These are exactly the questions that push AI development in a fairer direction.
          </p>
        </div>

        <Quiz
          lessonId="ai-bias"
          lessonTitle="What is AI bias?"
          questions={quizQuestions}
        />

        <LessonNote lessonId="ai-bias" />

        {/* Rating */}
        <LessonRating lessonId="ai-bias" />
        <ReviewLaterButton lessonId="ai-bias" />

        <RelatedLessons currentId="ai-bias" />

        <NextLesson currentId="ai-bias" />

      </div>
    </div>
  )
}
