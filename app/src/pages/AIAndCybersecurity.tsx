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
import { DifficultyBadge } from '../components/DifficultyBadge'

const LESSON_TITLE = 'AI and cybersecurity'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does a SIEM tool do in cybersecurity?',
    options: [
      'It encrypts data before it is sent over the internet',
      'It collects and analyses security data from across a network in real time to detect and alert on threats',
      'It trains security staff using simulated cyberattacks',
      'It automatically updates software to patch known vulnerabilities',
    ],
    correctIndex: 1,
    explanation:
      'SIEM (Security Information and Event Management) tools gather logs and activity data from devices, servers, and applications across an entire organisation. AI analyses this data in real time, correlating unusual patterns — like a user logging in from two countries simultaneously — that would be invisible if you looked at any single source alone.',
  },
  {
    question: 'What makes Darktrace different from traditional security tools?',
    options: [
      'It only works on Windows systems and is designed for small businesses',
      'It uses AI to learn what "normal" looks like on your network and flags deviations — without needing predefined rules',
      'It blocks all traffic from outside the UK automatically',
      'It replaces human security analysts entirely with no human oversight',
    ],
    correctIndex: 1,
    explanation:
      "Darktrace, a Cambridge-founded cybersecurity company, uses unsupervised machine learning to model what normal behaviour looks like for every device and user on a network. If a laptop suddenly starts scanning thousands of other devices at 3 a.m., Darktrace flags it — even if the behaviour doesn't match any known attack signature. This 'immune system' approach catches novel threats that rule-based systems miss.",
  },
  {
    question: 'What is a deepfake phishing attack involving business email compromise?',
    options: [
      'An attack that intercepts emails in transit and replaces attachments with malware',
      'An attack using AI-generated audio or video to impersonate an executive and authorise fraudulent payments',
      'A phishing email that uses AI to bypass spam filters by mimicking legitimate writing styles',
      'An attack that clones an entire company website to trick employees into logging in',
    ],
    correctIndex: 1,
    explanation:
      "In 2019, criminals used AI voice-cloning to impersonate the CEO of a UK energy firm's parent company, convincing a senior executive to transfer £200,000 to a fraudulent account. The voice sounded authentic enough to be convincing on a phone call. Business email compromise using AI-generated deepfakes is now one of the fastest-growing fraud categories, and the NCSC has specifically warned organisations about it.",
  },
  {
    question: "What does the NCSC's guidance say about AI-generated cyber threats?",
    options: [
      'AI threats are only relevant to large corporations and governments, not ordinary people',
      'AI is expected to lower the barrier for less skilled attackers, making more sophisticated attacks more common',
      'AI makes defenders stronger than attackers, so the overall threat level is falling',
      'The NCSC recommends banning AI tools in all UK government systems',
    ],
    correctIndex: 1,
    explanation:
      "The NCSC (National Cyber Security Centre, part of GCHQ) has assessed that AI will increase the volume and impact of cyberattacks over the next two years, primarily by lowering the skill threshold for attackers. Tasks that previously required expert hackers — writing convincing phishing emails, finding software vulnerabilities, and adapting malware to evade detection — can now be partially automated using AI tools.",
  },
  {
    question: 'What is the role of AI in Endpoint Detection and Response (EDR)?',
    options: [
      'It prevents employees from installing unapproved software on company devices',
      'It monitors device behaviour continuously and responds automatically to suspicious activity, even on devices that are offline',
      'It encrypts all files on a device when a threat is detected to protect data',
      'It sends regular security awareness training emails to employees',
    ],
    correctIndex: 1,
    explanation:
      'EDR tools run continuously on laptops, phones, and servers, using AI to watch for suspicious behaviour: a program trying to access the system registry, a script running at an unusual time, or a device communicating with a known malicious IP address. Unlike traditional antivirus, EDR can respond automatically — isolating a device from the network, killing a suspicious process, or rolling back changes — before a human analyst even sees the alert.',
  },
]

export function AIAndCybersecurity() {
  useMarkVisited('ai-and-cybersecurity')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F512;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and cybersecurity
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI-powered security tools detect intrusions, how adversarial AI is used to
            attack systems, and what the NCSC says about the threat landscape.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-cybersecurity" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The AI arms race</h2>
          <p className="text-gray-600 leading-relaxed">
            Cybersecurity is one of the clearest examples of AI being used on both sides of a
            conflict at once. Security teams use AI to monitor networks and detect threats at
            machine speed; attackers use AI to craft more convincing phishing campaigns, find
            vulnerabilities faster, and evade detection tools. Understanding both sides helps
            organisations &mdash; and individuals &mdash; stay safer.
          </p>
          <div className="bg-slate-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-slate-800 text-sm">Scale of the problem</p>
            <p className="text-slate-700 text-sm leading-relaxed">
              The UK government estimated that cybercrime cost UK businesses over &pound;30 billion in 2023.
              No human team can monitor the volume of security events a modern network generates &mdash;
              AI is the only practical way to do it at scale.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">SIEM tools: watching everything at once</h2>
          <p className="text-gray-600 leading-relaxed">
            SIEM stands for <strong>Security Information and Event Management</strong>. These platforms
            collect logs from every device, application, and service on a network &mdash; firewalls,
            servers, user accounts, cloud services &mdash; and use AI to correlate them in real time.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F9E0;',
                label: 'Microsoft Sentinel',
                text: "Microsoft's cloud-based SIEM uses AI to detect attack patterns across an organisation's Microsoft 365 emails, Azure cloud infrastructure, and on-premises servers simultaneously. It can spot an attacker who compromises an email account and then tries to move laterally to cloud storage.",
              },
              {
                icon: '&#x1F50E;',
                label: 'Splunk',
                text: 'Splunk ingests billions of log events per day and uses machine learning to surface anomalies. A bank using Splunk might see an alert when a user who normally logs in from London suddenly authenticates from three different countries in the same hour.',
              },
              {
                icon: '&#x1F6E1;&#xFE0F;',
                label: 'Darktrace',
                text: "Cambridge-founded Darktrace uses unsupervised AI to build a model of what 'normal' looks like for every device and user. Deviations from that baseline trigger alerts. This approach catches novel threats that rule-based systems miss entirely.",
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
          <h2 className="text-2xl font-bold text-gray-800">Endpoint Detection and Response (EDR)</h2>
          <p className="text-gray-600 leading-relaxed">
            EDR tools run on individual devices &mdash; laptops, phones, servers &mdash; monitoring
            behaviour continuously. Unlike traditional antivirus, which checks files against a list
            of known malware, EDR uses AI to watch what software <em>does</em>.
          </p>
          <div className="bg-indigo-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-indigo-800 text-sm">Example: stopping ransomware before it spreads</p>
            <p className="text-indigo-700 text-sm leading-relaxed">
              Ransomware works by encrypting all your files. An EDR tool notices that a process has
              suddenly started opening and rewriting thousands of files in rapid succession &mdash;
              behaviour no legitimate application would exhibit. It kills the process and isolates
              the device from the network automatically, stopping the attack before it spreads,
              even if the specific ransomware has never been seen before.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Adversarial AI: using AI to attack</h2>
          <p className="text-gray-600 leading-relaxed">
            The same capabilities that make AI useful for defenders make it useful for attackers.
            AI is making cyberattacks cheaper, faster, and more convincing.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4E7;',
                label: 'AI-generated phishing at scale',
                text: "AI can write thousands of unique, personalised phishing emails in seconds — using your name, employer, recent news events, and writing style — at a cost close to zero. What previously required a skilled social engineer now requires only a prompt.",
              },
              {
                icon: '&#x1F3A4;',
                label: 'Deepfake voice and video fraud',
                text: "In 2019, fraudsters cloned the voice of a CEO to instruct a finance director to transfer £200,000. As deepfake technology improves, executives, family members, and public figures can all be impersonated convincingly. The NCSC has issued specific guidance on this threat.",
              },
              {
                icon: '&#x1F50D;',
                label: 'AI-assisted vulnerability discovery',
                text: 'Attackers use AI to scan millions of lines of open-source code looking for security flaws, automating a task that used to take expert analysts weeks. This widens the gap between how fast vulnerabilities are found by attackers versus patched by defenders.',
              },
              {
                icon: '&#x1F479;',
                label: 'Adversarial examples',
                text: 'Researchers have shown that tiny, deliberate changes to input data can fool AI systems — adding pixel-level noise to a stop sign image can make a vision AI misclassify it. Attackers use similar techniques to craft emails that bypass AI spam filters.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">NCSC guidance on AI cyber threats</h2>
          <p className="text-gray-600 leading-relaxed">
            The National Cyber Security Centre (NCSC) is part of GCHQ and is the UK&apos;s technical
            authority on cybersecurity. It has published specific assessments of how AI is changing
            the threat landscape.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: '&#x26A0;&#xFE0F;',
                title: 'Lower barriers to attack',
                text: 'AI lowers the skill needed to carry out sophisticated attacks. Less experienced criminals can now use AI tools to write malware, conduct reconnaissance, and craft convincing social engineering scripts.',
              },
              {
                icon: '&#x1F4CA;',
                title: 'Increased attack volume',
                text: 'AI automation allows attackers to run campaigns at a scale previously impossible. Phishing volumes, credential stuffing attacks, and vulnerability scans are all increasing.',
              },
              {
                icon: '&#x1F91D;',
                title: 'Defender opportunity',
                text: 'The NCSC also notes that AI gives defenders powerful new tools. Organisations using AI-powered SIEM and EDR are better positioned than those relying on traditional rule-based security.',
              },
              {
                icon: '&#x1F3E2;',
                title: 'Sector guidance',
                text: 'The NCSC has issued sector-specific guidance for healthcare, finance, and critical infrastructure, recognising that AI threats are not uniform across all organisations.',
              },
            ].map(({ icon, title, text }) => (
              <div key={title} className="bg-amber-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl" dangerouslySetInnerHTML={{ __html: icon }} />
                  <p className="font-semibold text-amber-800 text-sm">{title}</p>
                </div>
                <p className="text-amber-700 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How organisations protect themselves</h2>
          <p className="text-gray-600 leading-relaxed">
            Effective AI-era cybersecurity combines technology, process, and human judgement.
            No single tool is sufficient on its own.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4F1;',
                label: 'Multi-factor authentication (MFA)',
                text: 'Even if credentials are stolen through AI-generated phishing, MFA prevents attackers from using them. The NCSC consistently ranks MFA as the single highest-impact control against account compromise.',
              },
              {
                icon: '&#x1F9D1;&#x200D;&#x1F4BB;',
                label: 'Security operations centres (SOCs)',
                text: 'Human analysts working alongside AI tools review the alerts that AI surfaces, investigate potential incidents, and make judgement calls that automated systems cannot. AI handles volume; humans handle context.',
              },
              {
                icon: '&#x1F4DA;',
                label: 'Staff awareness training',
                text: "Most successful cyberattacks still start with a human being fooled — a convincing phishing email, a vishing call. Training staff to slow down and verify unusual requests remains one of the most effective defences against AI-powered social engineering.",
              },
              {
                icon: '&#x260E;&#xFE0F;',
                label: 'Verify via a second channel',
                text: "If you receive an unexpected request to transfer money, change credentials, or take urgent action — whether by email, phone, or video call — verify it through a completely separate channel. Call the person back on a number you already know. Do not use contact details provided in the suspicious message.",
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

        <div className="bg-blue-50 rounded-2xl p-6 space-y-3 border border-blue-100">
          <h2 className="text-xl font-bold text-blue-800">The big picture</h2>
          <p className="text-blue-700 text-sm leading-relaxed">
            AI in cybersecurity is a genuine arms race. Defenders benefit from AI&apos;s ability to
            correlate vast amounts of data and detect novel threats automatically. Attackers benefit
            from AI&apos;s ability to generate convincing content and automate reconnaissance at scale.
          </p>
          <p className="text-blue-700 text-sm leading-relaxed">
            The organisations that fare best are those that combine AI tools with human expertise,
            treat security as a continuous process rather than a one-off project, and cultivate a
            culture where staff feel confident questioning unusual requests &mdash; even when those
            requests appear to come from someone they trust.
          </p>
        </div>

        <ReviewLaterButton lessonId="ai-and-cybersecurity" />
        <LessonNote lessonId="ai-and-cybersecurity" lessonTitle={LESSON_TITLE} />

        <Quiz questions={quizQuestions} lessonId="ai-and-cybersecurity" lessonTitle={LESSON_TITLE} />

        <LessonFeedback lessonId="ai-and-cybersecurity" />
        <LessonRating lessonId="ai-and-cybersecurity" />
        <RelatedLessons currentId="ai-and-cybersecurity" />
        <NextLesson currentId="ai-and-cybersecurity" />
      </div>
    </div>
  )
}
