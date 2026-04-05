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

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What do AI-powered SIEM tools like Darktrace do that traditional security tools cannot?',
    options: [
      'They store backups of your files so you can recover them after a cyberattack',
      'They learn what normal network behaviour looks like and alert security teams when something unusual happens — even if no one has seen that threat before',
      'They automatically report cybercrime to the police without human involvement',
      'They encrypt all data leaving a network so hackers cannot read it',
    ],
    correctIndex: 1,
    explanation:
      'SIEM (Security Information and Event Management) tools like Darktrace, Splunk, and Microsoft Sentinel use AI to create a baseline of normal activity across a network. When behaviour deviates — such as an employee account suddenly downloading thousands of files at 3 am — the AI flags it in real time. Traditional tools only catch known threats; AI catches novel ones too.',
  },
  {
    question: 'What is a deepfake voice call scam?',
    options: [
      'A scam where criminals call pretending to be from a bank and read out your details',
      'A scam using AI-generated audio that sounds like someone you know — such as a family member or your boss — asking for urgent help or money',
      'A scam where AI translates your voicemail into text and steals information',
      'A scam that only works on smartphone users, not landline users',
    ],
    correctIndex: 1,
    explanation:
      "With a few seconds of audio from a social media video, AI can clone someone's voice convincingly. Criminals use this to call family members pretending to be a loved one in distress, or to impersonate a company executive authorising a fraudulent bank transfer (business email compromise). Always verify via a second channel — ring back on a number you already know.",
  },
  {
    question: "What does 'adversarial AI' mean in cybersecurity?",
    options: [
      'Two AI systems competing against each other to improve both',
      'Tricking an AI system by making tiny, deliberate changes to input data so it makes wrong decisions',
      'An AI that has learned to hack systems by itself without human help',
      'A government AI used to test the security of other AI systems',
    ],
    correctIndex: 1,
    explanation:
      "Adversarial attacks exploit weaknesses in how AI models learn. For example, adding barely visible pixel-level noise to an image of a stop sign can make an AI vision system confidently misclassify it as a yield sign. Criminals also use this technique against spam filters, tweaking scam emails until they pass AI detection.",
  },
  {
    question: "What is endpoint detection and response (EDR)?",
    options: [
      'Software that blocks internet access on devices reported stolen',
      'AI-powered security software on individual devices that monitors behaviour and responds to threats automatically, even cutting a device off from the network',
      'A government system for tracking and responding to cyber attacks on critical infrastructure',
      'An antivirus program that only works on server computers, not personal laptops',
    ],
    correctIndex: 1,
    explanation:
      "EDR tools (like CrowdStrike Falcon or Microsoft Defender for Endpoint) run on each individual device — laptop, server, phone — and use AI to monitor what programmes are doing. If an EDR agent detects ransomware starting to encrypt files, it can isolate that device from the rest of the network within seconds, stopping the attack from spreading, even before a human security analyst is aware of it.",
  },
  {
    question: 'Which UK government body provides official guidance on AI cyber threats to organisations?',
    options: [
      'GCHQ (Government Communications Headquarters)',
      'The National Cyber Security Centre (NCSC)',
      'The Information Commissioner\'s Office (ICO)',
      'The Cyber Security Council',
    ],
    correctIndex: 1,
    explanation:
      "The NCSC (National Cyber Security Centre), part of GCHQ, is the UK's technical authority on cybersecurity. It publishes guidance for organisations on AI threats — including how AI is being used to scale up phishing attacks, create deepfake fraud, and automate vulnerability scanning. The NCSC also issues alerts when it identifies specific AI-enabled threats targeting UK organisations.",
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
            How AI helps protect us online &mdash; and how criminals are using the same
            technology to attack us.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-cybersecurity" />
          <ShareButton lessonTitle="AI and cybersecurity" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The AI arms race in cybersecurity</h2>
          <p className="text-gray-600 leading-relaxed">
            Cybersecurity is one of the clearest examples of AI being used on both sides of a
            conflict. Security teams use AI to spot threats faster than any human could; criminals
            use AI to craft more convincing attacks. Understanding both sides helps you stay safer.
          </p>
          <div className="bg-slate-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-slate-800 text-sm">Scale of the problem</p>
            <p className="text-slate-700 text-sm leading-relaxed">
              Google blocks around 15 billion spam and phishing emails every day. No human
              team could review even a fraction of that &mdash; AI does the filtering automatically,
              around the clock.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How AI catches scam emails</h2>
          <p className="text-gray-600 leading-relaxed">
            Phishing emails try to trick you into clicking a dangerous link or giving away
            a password. AI filters analyse hundreds of signals at once to decide whether an
            email is legitimate.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4E7;',
                label: 'Sender analysis',
                text: "The email claims to be from your bank but comes from 'support@natwest-secure-login.xyz'. AI spots the mismatch instantly.",
              },
              {
                icon: '&#x1F517;',
                label: 'Link inspection',
                text: "The email contains a link that appears to say 'natwest.com' but actually points to a different address. AI checks where links really lead.",
              },
              {
                icon: '&#x270D;&#xFE0F;',
                label: 'Language patterns',
                text: "Phishing emails often use urgent, panicked language: 'Your account will be closed in 24 hours!' AI recognises these pressure tactics.",
              },
              {
                icon: '&#x1F9E0;',
                label: 'Learned patterns',
                text: 'AI learns from millions of confirmed scam emails, recognising combinations of signals that individually seem innocent but together are suspicious.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Smarter antivirus</h2>
          <p className="text-gray-600 leading-relaxed">
            Old antivirus software kept a list of known malware and checked your files against
            it. This worked until criminals released a new virus &mdash; then everyone was
            vulnerable until the list was updated.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Modern security tools use AI behaviour analysis. Instead of asking &ldquo;have I seen
            this exact file before?&rdquo;, they ask &ldquo;is this software doing something suspicious?&rdquo;
          </p>
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-blue-800 text-sm">Example: ransomware detection</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              Ransomware encrypts all your files and demands payment. An AI security system notices
              that a program has suddenly started opening and rewriting thousands of files in rapid
              succession &mdash; behaviour no legitimate app would exhibit &mdash; and halts it before
              your files are lost, even if it has never seen that specific ransomware before.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How criminals use AI</h2>
          <p className="text-gray-600 leading-relaxed">
            The same technology that defends you is being used against you. AI makes attacks
            cheaper, faster, and more convincing.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F916;',
                label: 'Personalised phishing at scale',
                text: "AI can write thousands of unique, personalised scam emails — using your name, your employer, and recent events — in seconds. What used to take a criminal hours now takes milliseconds.",
              },
              {
                icon: '&#x1F3A4;',
                label: 'Deepfake voice calls',
                text: "With a few seconds of audio from a social media video, AI can clone someone's voice. Criminals use this to impersonate family members in distress, or even a company executive authorising a bank transfer.",
              },
              {
                icon: '&#x1F511;',
                label: 'AI password crackers',
                text: "AI models trained on leaked password databases can guess passwords far faster than brute-force methods, because they prioritise patterns humans actually use (like replacing letters with numbers).",
              },
              {
                icon: '&#x1F5BC;&#xFE0F;',
                label: 'Deepfake images and video',
                text: "AI-generated fake images and video can be used to impersonate people, create false evidence, or manipulate public opinion. Verifying what you see online is increasingly important.",
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

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Adversarial AI &mdash; tricking the machines</h2>
          <p className="text-gray-600 leading-relaxed">
            Researchers have discovered that AI systems can be fooled by tiny, deliberate
            changes to their inputs &mdash; changes invisible to a human eye.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For example, adding barely visible pixel-level noise to a photo of a stop sign
            can cause an AI vision system to confidently misidentify it as a yield sign.
            In a self-driving car, that could be catastrophic. Understanding this weakness
            is why AI safety research matters.
          </p>
          <div className="bg-amber-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-amber-800 text-sm">Why this matters for you</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              Adversarial attacks are not just theoretical. Criminals test AI spam filters
              by making tiny tweaks to scam emails until the filter passes them. Security
              researchers race to patch these gaps before attackers can exploit them at scale.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How to protect yourself</h2>
          <p className="text-gray-600 leading-relaxed">
            You do not need to understand every technical detail. A few simple habits protect
            you against most AI-powered attacks:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x260E;&#xFE0F;',
                label: 'Verify through a second channel',
                text: 'If you receive an urgent request — for money, a password, or personal information — hang up or ignore the message and call back using a number you trust independently. Never use the number or link provided in the suspicious message.',
              },
              {
                icon: '&#x1F510;',
                label: 'Use a password manager',
                text: 'A password manager creates and stores long, unique, random passwords for every site. This defeats AI password crackers that exploit human patterns.',
              },
              {
                icon: '&#x1F4F1;',
                label: 'Turn on two-factor authentication',
                text: 'Even if a criminal steals your password, they cannot log in without the second factor (usually a code sent to your phone or generated by an app).',
              },
              {
                icon: '&#x1F914;',
                label: 'Slow down with urgent requests',
                text: 'AI-generated scams are designed to panic you into acting fast. Urgency is the attack vector. If you pause and verify, you break the trap.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">SIEM tools: AI watching entire networks</h2>
          <p className="text-gray-600 leading-relaxed">
            Large organisations use AI-powered <strong>SIEM</strong> (Security Information and Event
            Management) tools to monitor everything happening across their network at once &mdash;
            thousands of devices, millions of events per minute.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F916;',
                label: 'Darktrace',
                text: "Darktrace, a Cambridge-based company, uses AI to learn what 'normal' looks like on a network. When an employee account starts behaving oddly — logging in from a new country, accessing unusual files — Darktrace flags it. It has detected early-stage ransomware attacks before they spread.",
              },
              {
                icon: '&#x1F4CA;',
                label: 'Splunk',
                text: "Splunk collects logs from every device and system in an organisation and uses AI to find patterns that suggest a breach. Security analysts use its dashboards to investigate alerts. It's widely used in banks, hospitals, and government departments.",
              },
              {
                icon: '&#x2601;&#xFE0F;',
                label: 'Microsoft Sentinel',
                text: 'Microsoft Sentinel is a cloud-based SIEM that uses AI to correlate signals across email, devices, and identity systems. It can automatically block a suspicious account or isolate a compromised device while a human analyst investigates.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Endpoint detection and response (EDR)</h2>
          <p className="text-gray-600 leading-relaxed">
            SIEM tools watch the network from above. <strong>EDR</strong> tools live on each individual
            device — laptops, servers, phones — and watch what software is doing from the inside.
          </p>
          <div className="bg-red-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-red-800 text-sm">How EDR stops ransomware</p>
            <p className="text-red-700 text-sm leading-relaxed">
              When ransomware starts encrypting files, an EDR agent (like CrowdStrike Falcon or
              Microsoft Defender for Endpoint) can detect the unusual file activity within seconds,
              automatically quarantine the device, and cut it off from the rest of the network &mdash;
              all before a human has even seen an alert. The faster the isolation, the less data is lost.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">NCSC: UK guidance on AI cyber threats</h2>
          <p className="text-gray-600 leading-relaxed">
            The <strong>National Cyber Security Centre (NCSC)</strong>, part of GCHQ, is the UK
            government body responsible for cybersecurity. It publishes free, practical guidance for
            individuals and organisations.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4E2;',
                label: 'AI is supercharging phishing',
                text: "The NCSC has warned that AI is dramatically lowering the skill barrier for cyberattacks. Criminals who previously couldn't write convincing English can now use AI to generate polished, personalised phishing messages at scale.",
              },
              {
                icon: '&#x1F3A5;',
                label: 'Deepfake fraud warnings',
                text: "The NCSC and GCHQ have both issued warnings about AI-generated deepfake video and voice calls being used to commit fraud, particularly in business email compromise (BEC) attacks — where criminals impersonate executives to authorise payments.",
              },
              {
                icon: '&#x1F6E1;&#xFE0F;',
                label: 'Guidance for businesses',
                text: "The NCSC's Cyber Essentials scheme and AI-specific guidance help organisations implement the basic technical controls that block the majority of AI-assisted attacks. Following official guidance is the clearest evidence an organisation takes security seriously.",
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

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The big picture</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="font-semibold text-blue-800 text-sm mb-2">Where AI is helping</p>
              <ul className="text-blue-700 text-sm space-y-1 leading-relaxed">
                <li>Filtering billions of scam emails daily</li>
                <li>Detecting new malware through behaviour, not signatures</li>
                <li>Spotting network intrusions in real time</li>
                <li>Protecting online banking with fraud detection</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-xl p-4">
              <p className="font-semibold text-red-800 text-sm mb-2">Where caution is needed</p>
              <ul className="text-red-700 text-sm space-y-1 leading-relaxed">
                <li>AI-generated personalised scam messages</li>
                <li>Deepfake voice and video impersonation</li>
                <li>AI-powered password cracking</li>
                <li>Adversarial attacks on AI security systems</li>
              </ul>
            </div>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-cybersecurity" />
        <LessonNote lessonId="ai-and-cybersecurity" />

        <Quiz questions={quizQuestions} lessonId="ai-and-cybersecurity" lessonTitle="AI and cybersecurity" />

        <LessonFeedback lessonId="ai-and-cybersecurity" />
        <LessonRating lessonId="ai-and-cybersecurity" />
        <RelatedLessons currentId="ai-and-cybersecurity" />
        <NextLesson currentId="ai-and-cybersecurity" />
      </div>
    </div>
  )
}
