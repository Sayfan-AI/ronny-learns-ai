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

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does AGI stand for, and what does it mean?',
    options: [
      'Advanced General Interface — a very fast computer processor',
      'Artificial General Intelligence — AI that can perform any intellectual task a human can, across all domains',
      'Automated Growth Intelligence — AI that manages business growth automatically',
      'Applied Government Intelligence — AI used by governments for surveillance',
    ],
    correctIndex: 1,
    explanation:
      'AGI stands for Artificial General Intelligence — AI that could perform any cognitive task a human can, with genuine understanding and adaptability across all domains. This is different from today\'s AI, which is narrow: excellent at specific tasks but unable to transfer that ability to unrelated tasks the way humans can. Whether and when AGI will arrive is genuinely debated among AI researchers.',
  },
  {
    question: 'Which of these best describes the current scientific consensus on when AGI will arrive?',
    options: [
      'AGI will arrive within 5 years — most AI researchers agree on this',
      'AGI is impossible — the human brain cannot be replicated by machines',
      'There is no consensus — serious researchers disagree widely, from "never" to "within decades", and nobody knows for certain',
      'AGI already exists but is kept secret by major AI companies',
    ],
    correctIndex: 2,
    explanation:
      'There is genuine, deep disagreement among AI researchers about AGI. Some think it is decades away, some think it will never arrive in the sci-fi sense, some believe we are closer than we think. It is important to be sceptical of anyone who claims to know with certainty — the honest answer is that nobody knows, and the field is moving too fast for confident predictions.',
  },
  {
    question: 'What is one of the near-term AI trends most experts expect to develop significantly by 2030?',
    options: [
      'AI that is fully conscious and has human-like emotions',
      'AI agents that can autonomously carry out multi-step tasks — browsing the web, writing code, sending emails — on behalf of users',
      'AI that has completely replaced all human workers in manufacturing',
      'AI that can perfectly predict the future by analysing all available data',
    ],
    correctIndex: 1,
    explanation:
      'AI agents — systems that can take sequences of actions in the real world, not just answer questions — are one of the most active areas of AI development right now. Rather than just generating text, these systems can use computers, browse the web, write and run code, and carry out multi-step workflows. This is already beginning to happen and is expected to expand significantly in the next few years.',
  },
  {
    question: 'Which of these is a legitimate concern about AI development that many researchers highlight?',
    options: [
      'AI will immediately become conscious and decide to harm humans',
      'Concentration of AI power in a small number of companies and countries could increase inequality and reduce democratic oversight of very powerful technology',
      'AI will make everyone too lazy to do any work at all',
      'AI research will cause climate change to accelerate so fast that civilisation will collapse within ten years',
    ],
    correctIndex: 1,
    explanation:
      'A concern frequently raised by economists, policy researchers, and AI safety researchers is that the most powerful AI systems are being developed by a small number of very large companies (mostly in the USA and China). This concentration could entrench existing inequalities, reduce competition, and put powerful tools in few hands — raising questions about democratic oversight and who benefits from AI advances.',
  },
  {
    question: 'What is the most reliable way to stay informed about AI developments?',
    options: [
      'Follow only AI company announcements — they have the most accurate information',
      'Read science fiction novels — they are usually more accurate than news coverage',
      'Follow a mix of reputable science journalists, independent researchers, and critical voices — and be sceptical of both hype and doom',
      'Only trust information from government sources',
    ],
    correctIndex: 2,
    explanation:
      'AI coverage is often polarised between uncritical enthusiasm ("AI will solve everything") and catastrophist fear ("AI will destroy us all"). Neither extreme reflects careful, evidence-based thinking. The best way to stay informed is to follow people who engage seriously with evidence, acknowledge uncertainty, and represent a range of perspectives — including people who are critical of AI company claims.',
  },
]

export function FutureOfAI() {
  useMarkVisited('future-of-ai')
  useLessonVisit('future-of-ai')
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F52D;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            What does the future of AI look like?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Near-term trends, the AGI debate, what most experts actually think, and how to
            stay informed without getting overwhelmed by hype or fear.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="future-of-ai" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Where we are now: AI in 2025</h2>
          <p className="text-gray-600 leading-relaxed">
            To understand where AI is going, it helps to be clear about what it can and cannot do
            today. Current AI systems are genuinely remarkable &mdash; and also genuinely limited.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'What AI is very good at now',
                text: 'Language: understanding and generating text, code, and structured content. Image and video generation. Recognising patterns in large datasets (medical imaging, fraud detection, weather prediction). Translation. Playing games. Writing software.',
              },
              {
                label: 'What AI still struggles with',
                text: 'Reliable factual accuracy (AI still hallucinate confidently false information). Long-term planning. Physical tasks requiring fine motor control. Genuine creative novelty rather than recombination. Understanding context the way humans do. Consistent reasoning under pressure.',
              },
              {
                label: 'The key limitation',
                text: 'Today\'s AI is narrow: extraordinarily good at specific things, but unable to transfer that ability the way humans can. A chess AI cannot play checkers. A medical imaging AI cannot hold a conversation. This is fundamentally different from human intelligence.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-indigo-800 text-sm">{label}</p>
                <p className="text-indigo-700 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Near-term trends: 2025&ndash;2030</h2>
          <p className="text-gray-600 leading-relaxed">
            These are developments most AI researchers expect to see accelerate in the next few
            years &mdash; not speculation, but reasonable extrapolation from current trajectories.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F916;',
                label: 'AI agents',
                text: 'AI that can take sequences of actions in the world — browsing the internet, writing and running code, sending emails, managing calendars. Rather than answering questions, these agents complete tasks. This is already beginning and will expand significantly.',
              },
              {
                icon: '&#x1F52C;',
                label: 'AI in science',
                text: 'AlphaFold transformed biology by predicting protein structures. Similar AI tools are accelerating drug discovery, materials science, and climate modelling. AI is becoming a standard tool in scientific research labs worldwide.',
              },
              {
                icon: '&#x1F3A5;',
                label: 'Multimodal AI',
                text: 'AI that seamlessly combines text, images, video, audio, and code in a single conversation. Early versions exist now; more capable versions are coming. This will make AI more useful in creative, educational, and practical contexts.',
              },
              {
                icon: '&#x1F9BE;',
                label: 'Robotics',
                text: 'AI is beginning to enable more general-purpose robots — not just industrial arms doing one task, but robots that can navigate unfamiliar spaces and handle objects they have not seen before. Progress is slower than in language AI, but accelerating.',
              },
              {
                icon: '&#x1F3E5;',
                label: 'Healthcare applications',
                text: 'AI-assisted diagnosis, personalised treatment recommendations, drug discovery, and mental health tools will all expand. These applications have real potential to improve healthcare access and quality — alongside real risks around bias and accountability.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The AGI debate: no hype, no panic</h2>
          <p className="text-gray-600 leading-relaxed">
            Artificial General Intelligence (AGI) &mdash; AI that can do anything a human can
            intellectually &mdash; is one of the most debated topics in technology. Here is an
            honest, grounded view:
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'What AGI would mean',
                text: 'An AI that could learn any task, transfer knowledge across domains, reason about novel situations, and generally match or exceed human cognitive ability across the board. This is fundamentally different from current AI.',
              },
              {
                label: 'What experts actually think',
                text: 'There is no consensus. Serious, thoughtful researchers have estimates ranging from "within 10 years" to "never, in the sci-fi sense". The honest answer is that nobody knows. Anyone claiming certainty in either direction is overstating what we can know.',
              },
              {
                label: 'The sci-fi framing is misleading',
                text: 'Movies and books have shaped our image of AI: a sudden moment when it "wakes up" and becomes all-powerful. Real AI development is more gradual and domain-specific. The transition to more powerful AI is likely to be incremental, not sudden.',
              },
              {
                label: 'Why it matters anyway',
                text: 'Even without AGI, AI systems are becoming powerful enough to warrant serious thinking about governance, safety, and who benefits. You do not need sci-fi scenarios to have important conversations about AI — the present is plenty interesting enough.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-gray-800 text-sm">{label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Risks worth watching carefully</h2>
          <p className="text-gray-600 leading-relaxed">
            These are concerns raised by researchers and policy experts that do not require any
            sci-fi scenarios &mdash; they are grounded in how current AI is actually developing.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F3E6;',
                label: 'Concentration of power',
                text: 'A small number of very large companies control the most capable AI systems. This concentration could entrench inequality and reduce democratic oversight of extremely powerful technology.',
              },
              {
                icon: '&#x1F30D;',
                label: 'Access inequality',
                text: 'The benefits of AI are not evenly distributed. Access to the best AI tools currently favours wealthy individuals, companies, and countries. Without deliberate intervention, this could widen existing global inequalities.',
              },
              {
                icon: '&#x26A1;',
                label: 'Energy and environment',
                text: 'Training and running large AI models uses significant amounts of energy and water. As AI use scales, managing its environmental impact becomes increasingly important.',
              },
              {
                icon: '&#x1F4F0;',
                label: 'Misinformation at scale',
                text: 'AI-generated content makes it easier and cheaper to produce convincing misinformation. This is already happening and will continue to be a challenge for democracy and public discourse.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How to stay informed</h2>
          <p className="text-gray-600 leading-relaxed">
            AI news moves fast and is often polarised between breathless enthusiasm and catastrophist
            fear. Here is how to navigate it sensibly:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4F0;',
                label: 'Follow science journalists, not just press releases',
                text: 'Technology reporters at outlets like MIT Technology Review, the Guardian\'s technology section, or Wired often provide more sceptical, evidence-based coverage than AI company announcements. Look for people who cover both the potential and the limitations.',
              },
              {
                icon: '&#x1F9ED;',
                label: 'Look for epistemic humility',
                text: 'Be sceptical of anyone who claims to know exactly what AI will and will not do in 10 years. The most trustworthy voices tend to say "I think" and "we don\'t know" rather than "definitely" and "never".',
              },
              {
                icon: '&#x1F465;',
                label: 'Include critical voices',
                text: 'Read researchers who work on AI safety, AI ethics, and policy alongside those excited about AI capabilities. Both perspectives are needed to form a balanced view.',
              },
              {
                icon: '&#x1F5F3;&#xFE0F;',
                label: 'Engage as a citizen',
                text: 'AI policy decisions — around regulation, data rights, algorithmic accountability — are made by governments. These decisions affect everyone. Public understanding matters for democratic oversight to work.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-bold text-blue-800">The bottom line</h2>
          <p className="text-blue-700 leading-relaxed">
            The future of AI is genuinely uncertain, and anyone who tells you otherwise is
            overconfident. What we can say is that AI will become more capable, more integrated
            into daily life, and more consequential for society &mdash; and the decisions made
            now about how to develop and govern it will matter enormously.
          </p>
          <p className="text-blue-700 leading-relaxed">
            Understanding AI &mdash; which you are building by reading this &mdash; is one of the
            most important things you can do to participate meaningfully in those decisions,
            whether as a voter, a worker, a consumer, or simply a curious human being.
          </p>
        </div>

        <Quiz
          lessonId="future-of-ai"
          lessonTitle="What does the future of AI look like?"
          questions={quizQuestions}
        />

        <LessonNote lessonId="future-of-ai" />

        {/* Rating */}
        <LessonRating lessonId="future-of-ai" />
        <ReviewLaterButton lessonId="future-of-ai" />

        <RelatedLessons currentId="future-of-ai" />

        <NextLesson currentId="future-of-ai" />

      </div>
    </div>
  )
}
