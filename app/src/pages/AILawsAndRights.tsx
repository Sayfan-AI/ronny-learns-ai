import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is the EU AI Act and why does it matter?',
    options: [
      'A European social media platform that uses AI to moderate content',
      'The world\'s first major law specifically regulating how AI systems can be used, banning the most dangerous applications and requiring oversight for high-risk uses',
      'A law that makes it illegal to use AI for any commercial purpose in the EU',
      'A technical standard for how AI models must be built',
    ],
    correctIndex: 1,
    explanation:
      'The EU AI Act (passed in 2024) is the first comprehensive AI law in the world. It works on a risk-based system: the higher the risk an AI application poses to people, the stricter the rules. Some uses are banned outright, some require human oversight and transparency, and low-risk uses face lighter requirements.',
  },
  {
    question: 'If an AI system is used to decide whether you get a job interview, what right do you have under the EU AI Act?',
    options: [
      'No rights — companies can use AI however they want in hiring',
      'The right to sue the AI company directly',
      'The right to a human review, to be told AI was used, and to challenge the decision',
      'The right to see all the training data the AI was built on',
    ],
    correctIndex: 2,
    explanation:
      'The EU AI Act classifies AI used in hiring as high-risk. This means companies must be transparent about its use, allow meaningful human oversight, and give candidates the right to contest automated decisions. This builds on existing GDPR rights around automated decision-making.',
  },
  {
    question: 'In the ongoing AI copyright debate, what is the core question?',
    options: [
      'Whether AI companies should be allowed to charge money for AI-generated content',
      'Whether AI-generated text, images, or music can be owned by a human or company, and whether training AI on copyrighted works without permission is lawful',
      'Whether AI should be allowed to create content that looks like it was made by a human',
      'Whether AI companies must pay taxes on the content they generate',
    ],
    correctIndex: 1,
    explanation:
      'Two separate copyright questions are being fought in courts: (1) who, if anyone, owns AI-generated output (the US Copyright Office says purely AI-generated work without human authorship cannot be copyrighted), and (2) whether training AI on copyrighted text, images, and music without a licence violates copyright. Multiple lawsuits are ongoing.',
  },
  {
    question: 'Under GDPR, if a bank\'s AI system automatically rejects your loan application, what can you do?',
    options: [
      'Nothing — automated systems are exempt from consumer protection laws',
      'Only complain to the bank\'s customer service department',
      'Request that the decision be reviewed by a human, ask for an explanation of the factors involved, and challenge the decision',
      'Only take action if you can prove the AI was programmed incorrectly',
    ],
    correctIndex: 2,
    explanation:
      'GDPR Article 22 gives people the right not to be subject to decisions based solely on automated processing when those decisions have a significant effect on them. This includes the right to request human review, an explanation of the key factors, and to contest the decision. Financial institutions in the EU must honour these rights.',
  },
  {
    question: 'Why are most experts cautious about completely banning AI systems that make decisions about people?',
    options: [
      'Because AI is always more accurate than humans and banning it would make outcomes worse',
      'Because banning AI would violate international trade agreements',
      'Because human decision-makers are also biased and inconsistent — the goal is better oversight and accountability, not replacing AI with potentially worse human decisions',
      'Because AI companies have successfully lobbied against such bans',
    ],
    correctIndex: 2,
    explanation:
      'Research consistently shows human decision-makers are biased too — often in ways that are less consistent and harder to audit than algorithmic systems. The policy goal is not to ban AI from consequential decisions but to require transparency, human oversight, regular audits for bias, and meaningful ways for affected people to understand and contest decisions.',
  },
]

export function AILawsAndRights() {
  useMarkVisited('ai-laws-and-rights')
  useLessonVisit('ai-laws-and-rights')
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x2696;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI, laws, and your rights
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            AI is powerful &mdash; but who makes the rules? What rights do you have
            when AI makes decisions that affect your life?
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-laws-and-rights" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Laws are catching up with AI</h2>
          <p className="text-gray-600 leading-relaxed">
            For most of AI&rsquo;s history, governments watched from a distance while the technology
            developed. That changed in the early 2020s, when AI became powerful enough to affect
            people&rsquo;s jobs, finances, access to services, and daily lives. Governments around
            the world are now writing rules &mdash; and the most significant one has already passed.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The EU AI Act &mdash; the world&rsquo;s first major AI law</h2>
          <p className="text-gray-600 leading-relaxed">
            In 2024, the European Union passed the AI Act &mdash; the first comprehensive law in
            the world specifically about AI. It works on a <strong>risk-based system</strong>: the
            higher the risk an AI application poses to people, the stricter the rules.
          </p>
          <div className="space-y-3">
            {[
              {
                colour: 'red',
                label: 'Banned outright (unacceptable risk)',
                items: [
                  'Real-time facial recognition in public spaces (with limited exceptions)',
                  'Social scoring systems — AI that rates citizens on behaviour (as used in some countries)',
                  'AI that exploits psychological vulnerabilities to manipulate people',
                  'AI that infers political opinions, religion, or sexual orientation from biometric data',
                ],
              },
              {
                colour: 'amber',
                label: 'High-risk — allowed but heavily regulated',
                items: [
                  'AI used in hiring and employee management',
                  'AI used in credit scoring and loan decisions',
                  'AI used in medical devices',
                  'AI used in education and exam scoring',
                  'AI used in law enforcement',
                ],
              },
              {
                colour: 'green',
                label: 'Lower-risk — lighter requirements',
                items: [
                  'Chatbots must tell users they are talking to AI',
                  'AI-generated images and videos must be labelled',
                  'General AI tools like ChatGPT face transparency requirements',
                ],
              },
            ].map(({ colour, label, items }) => (
              <div key={label} className={`bg-${colour}-50 border border-${colour}-100 rounded-xl p-4 space-y-2`}>
                <p className={`font-semibold text-${colour}-800 text-sm`}>{label}</p>
                <ul className={`text-${colour}-700 text-sm space-y-1`}>
                  {items.map(item => (
                    <li key={item} className="flex gap-2">
                      <span className="flex-shrink-0">&#x2022;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            The EU AI Act applies to any company selling AI products or services into the EU &mdash;
            not just European companies. This makes it globally significant, similar to how GDPR
            (the EU&rsquo;s data privacy law) set a standard that companies worldwide had to follow.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI and copyright &mdash; who owns AI-generated art?</h2>
          <p className="text-gray-600 leading-relaxed">
            AI can now generate text, images, music, and video. This raises two thorny legal
            questions that courts around the world are actively working through.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Question 1: Can you own AI-generated content?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Copyright law was built around the idea of a human author. The US Copyright Office
                has ruled that purely AI-generated work &mdash; where a human simply typed a prompt
                and the AI produced the output &mdash; cannot be copyrighted. No one owns it; it
                falls into the public domain.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                However, if a human makes significant creative choices &mdash; editing, arranging,
                or combining AI output with original work &mdash; that human contribution can be
                copyrighted. The line between &ldquo;enough human creativity&rdquo; and &ldquo;just
                a prompt&rdquo; is being fought in courts right now.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Question 2: Was training AI on copyrighted work legal?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                AI models were trained on vast amounts of text, images, and other data scraped from
                the internet &mdash; including copyrighted books, artwork, and articles. Authors,
                musicians, and visual artists are suing AI companies, arguing this was done without
                permission.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                AI companies argue this is &ldquo;fair use&rdquo; &mdash; similar to how a human
                learns by reading books. Courts in the US and UK are yet to reach final verdicts on
                most of these cases. The outcome will shape the entire AI industry.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">When AI makes decisions about you</h2>
          <p className="text-gray-600 leading-relaxed">
            AI is increasingly used to make or influence consequential decisions: whether you get a
            job interview, whether a loan is approved, how much your insurance costs, and even &mdash;
            in some countries &mdash; aspects of criminal sentencing or bail decisions.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4BC;',
                label: 'Hiring and job screening',
                text: 'Many large companies use AI to screen CVs before a human sees them. AI scores applications, ranks candidates, and filters out the majority automatically. Studies have found some hiring AI amplified biases — for example, favouring certain universities or penalising career gaps.',
              },
              {
                icon: '&#x1F3E6;',
                label: 'Credit scoring and loan decisions',
                text: 'Banks and lenders use AI to assess creditworthiness. In the EU and US, you have legal rights if you are rejected: you can ask for an explanation and request human review. These rights exist partly because automated systems have been shown to discriminate against certain postcodes, ethnicities, and age groups.',
              },
              {
                icon: '&#x1F9FE;',
                label: 'Insurance pricing',
                text: 'Car insurance algorithms can use data like your job, your postcode, and even the device you used to get a quote to adjust prices. Some uses of data in this way are restricted in the UK and EU; others remain legal but opaque.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Your rights under existing law</h2>
          <p className="text-gray-600 leading-relaxed">
            Even before the EU AI Act, people in the UK and EU had important rights around automated
            decisions. These come mainly from <strong>GDPR</strong> (the General Data Protection
            Regulation):
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'Right to an explanation',
                text: 'If an automated system makes a significant decision about you, you can ask for a meaningful explanation of the key factors. Vague answers like "the algorithm decided" are not sufficient.',
              },
              {
                label: 'Right to human review',
                text: 'For decisions with significant effects (loan rejections, job screening), you can request that a human reviews the decision rather than just accepting the automated output.',
              },
              {
                label: 'Right to contest the decision',
                text: 'You can challenge automated decisions that affect you — for example, providing additional information you believe was not considered, or pointing out factual errors.',
              },
              {
                label: 'Right to know AI was used',
                text: 'Companies increasingly must disclose when AI is being used in decisions affecting you, rather than presenting automated decisions as coming from "our team".',
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-purple-50 border border-purple-100 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-purple-800 text-sm">{label}</p>
                <p className="text-purple-700 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What other governments are doing</h2>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F1FA;&#x1F1F8;',
                label: 'United States',
                text: 'The US has no single comprehensive AI law yet. President Biden\'s 2023 Executive Order set requirements for AI developers to share safety testing with the government. Individual states are passing their own rules. The US approach has generally been lighter-touch than the EU.',
              },
              {
                icon: '&#x1F1EC;&#x1F1E7;',
                label: 'United Kingdom',
                text: 'The UK Government published an AI Safety Institute and a voluntary framework for responsible AI. Post-Brexit, the UK chose not to replicate the EU AI Act, aiming for a more flexible, pro-innovation approach. Sector regulators (like the FCA for finance) apply their own rules.',
              },
              {
                icon: '&#x1F1E8;&#x1F1F3;',
                label: 'China',
                text: 'China has passed several AI-specific regulations, including rules on generative AI, deepfakes, and algorithmic recommendations. These require content labelling and prohibit using AI to spread "false information". Chinese regulations also require companies to align AI output with "socialist values".',
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

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What you can do</h2>
          <div className="space-y-3">
            {[
              'If you are rejected for a job, loan, or service and suspect AI was involved, ask directly: "Was AI used in this decision?" In the EU, they must tell you.',
              'If a decision was made automatically, you can request human review. This is a legal right in the EU and UK for significant decisions.',
              'Check your credit report regularly — errors in your data can feed AI decisions about you, and you have the right to correct them.',
              'If you believe an AI system discriminated against you (e.g. in hiring), you can report it to your national data protection authority. In the UK this is the ICO; in Ireland it is the DPC.',
            ].map((text, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-700 text-sm font-bold flex items-center justify-center">{i + 1}</span>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-50 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-bold text-purple-900">Laws are always catching up</h2>
          <p className="text-purple-800 leading-relaxed text-sm">
            Regulation of AI is still in its early stages. The EU AI Act is a landmark achievement,
            but enforcement will take years. Many of the most important cases &mdash; on copyright,
            on bias in hiring, on automated decision-making &mdash; are still being decided in courts.
          </p>
          <p className="text-purple-800 leading-relaxed text-sm">
            Technology always moves faster than law. But the direction of travel is clear: AI systems
            that affect people&rsquo;s lives will increasingly need to be transparent, auditable, and
            subject to human oversight. Knowing your rights is the first step to exercising them.
          </p>
        </div>

        <Quiz questions={quizQuestions} lessonId="ai-laws-and-rights" />

        <LessonNote lessonId="ai-laws-and-rights" />

        <RelatedLessons currentId="ai-laws-and-rights" />

        <NextLesson currentId="ai-laws-and-rights" />

      </div>
    </div>
  )
}
