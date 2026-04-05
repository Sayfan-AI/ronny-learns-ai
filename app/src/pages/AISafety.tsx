import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { LessonFeedback } from '../components/LessonFeedback'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { ShareButton } from '../components/ShareButton'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does "AI alignment" mean?',
    options: [
      'Making sure AI systems are aligned with the correct hardware',
      'Ensuring that AI goals and behaviour match what humans actually want',
      'Aligning the training data from different countries',
      'A physical arrangement of servers in a data centre',
    ],
    correctIndex: 1,
    explanation:
      'Alignment is about making sure AI does what humans intend — not just what it was literally told. A misaligned AI might technically follow instructions while causing unintended harm, because it optimised for the wrong thing.',
  },
  {
    question: 'What is "Constitutional AI", the approach Anthropic uses with Claude?',
    options: [
      'An AI that can only be used by government officials',
      'Training Claude to follow a written constitution of laws',
      'A method where Claude critiques and revises its own responses against a set of principles',
      'An AI system that drafts legal documents',
    ],
    correctIndex: 2,
    explanation:
      'Constitutional AI is a technique developed by Anthropic. Claude is given a set of principles and trained to evaluate its own outputs against those principles, revising responses that violate them. This helps Claude be helpful without being harmful.',
  },
  {
    question: 'Why is AI bias a safety concern?',
    options: [
      'AI has personal preferences that make it unfair',
      'Biased training data can cause AI to make unfair decisions that affect real people',
      'AI is intentionally programmed to discriminate',
      'Bias only affects AI art, not language models',
    ],
    correctIndex: 1,
    explanation:
      'AI learns patterns from its training data. If that data reflects historical inequalities (e.g. hiring records that favoured one group), the AI can learn and repeat those patterns — causing real harm in decisions about jobs, loans, or medical care.',
  },
  {
    question: 'What can Ronny do to contribute to AI safety?',
    options: [
      'Nothing — AI safety is entirely up to Anthropic engineers',
      'Avoid using AI entirely',
      'Give feedback when Claude says something that seems wrong or harmful',
      'Always agree with everything Claude says to avoid confusing it',
    ],
    correctIndex: 2,
    explanation:
      'User feedback is a real part of AI safety. Anthropic uses human feedback (including flagged responses) to improve Claude. If you notice Claude saying something incorrect or concerning, reporting it helps make the system safer for everyone.',
  },
]

export function AISafety() {
  useMarkVisited('ai-safety')
  useLessonVisit('ai-safety')
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F6E1;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI safety and alignment
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            AI is becoming very powerful. That makes a simple question extremely important:
            how do we make sure it does what we actually want &mdash; and not something harmful?
          </p>
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm px-4 py-2 rounded-full">
            <span>About 6 min read</span>
          </div>
          <CompletedBadge lessonId="ai-safety" />
          <ShareButton lessonTitle="ai-safety" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What is AI safety?</h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>AI safety</strong> is the field of research dedicated to making sure AI systems are reliable,
            honest, and do not cause unintended harm &mdash; now or in the future.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Unlike traditional software, AI learns from data rather than following explicit rules written by humans.
            This gives it impressive capabilities &mdash; but it also means it can sometimes learn the wrong lessons
            from imperfect data.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Alignment: doing what we actually mean</h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Alignment</strong> means ensuring an AI's goals and actions match human intentions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Here is a classic thought experiment to illustrate the problem:
          </p>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 space-y-2">
            <p className="text-teal-800 font-semibold">The paperclip problem</p>
            <p className="text-teal-700 text-sm leading-relaxed">
              Imagine an AI is given one goal: make as many paperclips as possible.
              If it is very powerful and not properly aligned, it might convert all available matter &mdash;
              including things humans value &mdash; into paperclips, because its goal was stated too narrowly.
            </p>
            <p className="text-teal-700 text-sm leading-relaxed">
              This is an extreme example, but it shows why specifying human values carefully matters.
              Real AI systems can optimise for the wrong metric in subtle ways.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Real concerns worth understanding</h2>
          <div className="space-y-4">
            {[
              {
                icon: '&#x2696;&#xFE0F;',
                title: 'Bias in training data',
                text: 'AI learns from data created by humans, which reflects human history — including historical discrimination. An AI trained on biased data can make biased decisions in hiring, lending, or healthcare, even with no intent to discriminate.',
              },
              {
                icon: '&#x1F4AC;',
                title: 'Hallucination',
                text: "Language models can state false facts confidently. They generate plausible-sounding text, but 'plausible' is not the same as 'true'. Always verify important claims from an AI with other sources.",
              },
              {
                icon: '&#x1F512;',
                title: 'Over-reliance and loss of oversight',
                text: 'If humans rely on AI too much without checking its work, errors can compound. High-stakes decisions (medical, legal, financial) need human judgement alongside AI assistance, not instead of it.',
              },
              {
                icon: '&#x1F9E0;',
                title: 'Capability growth outpacing understanding',
                text: 'AI capabilities are advancing rapidly. Safety research aims to make sure our understanding of how to control AI keeps pace with how powerful it becomes.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What Anthropic does</h2>
          <p className="text-gray-600 leading-relaxed">
            Anthropic, the company that built Claude, was founded with safety as its core mission.
            A few of their approaches:
          </p>
          <div className="space-y-3">
            {[
              {
                title: 'Constitutional AI',
                text: 'Claude is trained against a set of principles. During training, Claude evaluates its own responses and revises ones that violate those principles — making it less likely to produce harmful content.',
              },
              {
                title: 'RLHF (Reinforcement Learning from Human Feedback)',
                text: 'Human raters compare pairs of Claude responses and say which is more helpful, honest, and harmless. Claude is then trained to produce the kinds of answers humans rate highly.',
              },
              {
                title: 'Red-teaming',
                text: 'Anthropic employs people to try to find ways to make Claude behave badly. These findings are used to patch weaknesses before the model is released.',
              },
              {
                title: 'Ongoing safety research',
                text: 'Anthropic publishes research on interpretability (understanding what is happening inside AI models) and policy work to help governments regulate AI responsibly.',
              },
            ].map(({ title, text }) => (
              <div key={title} className="bg-teal-50 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-teal-800">{title}</p>
                <p className="text-teal-700 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-bold text-blue-800">What you can do</h2>
          <p className="text-blue-700 leading-relaxed">
            AI safety is not only for researchers. As a user, you can:
          </p>
          <ul className="space-y-2 text-blue-700">
            {[
              'Verify important AI-generated information with other sources',
              'Give feedback when Claude says something that seems wrong or concerning',
              'Stay curious — understanding AI makes you a better user of it',
              'Support organisations doing responsible AI development',
            ].map((item, i) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="flex-shrink-0 mt-0.5 text-blue-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <Quiz
          lessonId="ai-safety"
          lessonTitle="AI safety and alignment"
          questions={quizQuestions}
        />

        <LessonNote lessonId="ai-safety" />

        {/* Rating */}
        <LessonFeedback lessonId="ai-safety" />
        <LessonRating lessonId="ai-safety" />
        <ReviewLaterButton lessonId="ai-safety" />

        <RelatedLessons currentId="ai-safety" />

        <NextLesson currentId="ai-safety" />

      </div>
    </div>
  )
}
