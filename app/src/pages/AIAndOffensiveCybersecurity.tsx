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

const LESSON_TITLE = 'AI and offensive cybersecurity'

const KEY_TAKEAWAYS = [
  'AI has dramatically lowered the barrier to sophisticated cyberattacks. Tools that previously required expert knowledge — writing convincing phishing emails, finding software vulnerabilities, generating malware — can now be partly or fully automated using AI.',
  'AI-powered phishing emails are now often indistinguishable from legitimate communications. They are grammatically perfect, personalised with real details harvested from data breaches, and capable of passing spam filters because they avoid known suspicious patterns.',
  "Deepfake voice technology can now clone someone's voice from a short audio sample. This has been used in fraud attacks where criminals impersonate CEOs, family members, or colleagues to authorise payments or extract sensitive information.",
  'AI-assisted vulnerability scanning (automated pentesting) can probe an entire corporate network for security weaknesses in minutes. Both legitimate security teams (authorised testing) and attackers use the same AI tools.',
  'Defenders are fighting back with AI: anomaly detection, AI-powered email filtering, behavioural analysis, and automated incident response are all in active use. Security is an ongoing arms race between AI-powered attack and AI-powered defence.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does AI make phishing emails more dangerous than the phishing attacks of a decade ago?',
    options: [
      'AI phishing emails automatically infect a device the moment they are opened, before the recipient has clicked any link — making traditional advice about not clicking links outdated',
      'AI can write grammatically perfect, highly personalised phishing emails using data from breaches, removing the tell-tale signs (poor grammar, generic greetings) that people were taught to look for',
      'AI phishing emails adapt in real time based on how the recipient responds — if they show interest, the email becomes more urgent; if they ignore it, the AI sends a follow-up from a different address',
      'AI emails bypass all corporate email filters entirely by using quantum encryption, making it technically impossible for IT security teams to detect or block them',
    ],
    correctIndex: 1,
    explanation:
      "Traditional phishing emails were often easy to spot: poor grammar, impersonal greetings like 'Dear Customer', generic threats, or suspicious sender addresses. These signals existed because creating convincing emails at scale was difficult, especially for attackers who were not native English speakers. AI has eliminated these weaknesses. Large language models generate fluent, natural-sounding text in any language or tone. Combined with personal data from data breaches — your name, employer, recent purchases, who you bank with — AI can craft emails that are personalised, contextually appropriate, and indistinguishable from legitimate correspondence. Research has shown AI-written phishing emails achieve significantly higher click-through rates than human-written ones. Security training that focuses on grammar and spelling as warning signs is now insufficient.",
    hint: 'Think about what made old phishing easy to spot, and what AI removes.',
  },
  {
    question: 'What is a "deepfake voice attack" and what makes it hard to defend against?',
    options: [
      'An attack where AI generates a synthetic voice that sounds generically like a professional or authority figure, used in mass automated telephone scams targeting elderly people',
      'An attack where AI clones a specific real person\'s voice using audio samples, then uses that cloned voice to make calls impersonating them — to authorise transfers, extract information, or deceive colleagues',
      'An attack where AI analyses recordings of your voice to determine your emotional state, and uses this to time phishing calls for when you are most likely to comply with unusual requests',
      'An attack where AI modifies real audio from a genuine phone call to make it sound like the caller authorised something they never actually said, used as evidence in legal disputes',
    ],
    correctIndex: 1,
    explanation:
      "Deepfake voice technology (voice cloning AI) can now generate a convincing replica of a specific person's voice from as little as three seconds of audio — available publicly on social media, YouTube, or voicemail. This has enabled a new category of attack: criminals use the cloned voice to call a victim, claiming to be the impersonated person in a crisis. A notable 2019 case saw a UK-based company CEO transfer £200,000 after receiving a call that sounded like his German parent company's chief executive ordering an urgent transfer. The fraud was detected too late. Similar attacks have impersonated family members ('I've been in an accident, I need money now') and financial advisers. Defence is difficult because the voice sounds genuinely like the person — authentication needs to move beyond voice recognition.",
    hint: 'Think about what someone could do if they could perfectly mimic your boss or family member on a phone call.',
  },
  {
    question: 'What is AI-assisted vulnerability scanning and why is it a double-edged sword?',
    options: [
      'It is a defensive technique where AI monitors a company\'s systems for unusual activity, and it is a double-edged sword because it sometimes blocks legitimate users by mistake',
      'It is a technique where AI automatically probes a network or application to find security weaknesses — used legitimately by security teams for authorised testing, and used by attackers to find vulnerabilities to exploit',
      'It is a technique where AI scans email attachments for malicious code before they reach the recipient, but sometimes incorrectly flags legitimate business files as threats',
      'It is a government programme where AI automatically scans critical infrastructure for vulnerabilities and patches them, but has been criticised for accessing private company systems without consent',
    ],
    correctIndex: 1,
    explanation:
      "Traditional penetration testing (probing systems for security weaknesses) required skilled human security researchers who could take days or weeks to manually test a system. AI has automated significant portions of this process: tools like GPT-4-powered security agents, Metasploit with AI modules, and commercial automated pentesting platforms can probe an entire corporate network and identify known vulnerability types in minutes. This is enormously valuable for security teams doing authorised testing — they can check their own defences much more thoroughly and frequently. The problem is that the same tools are available to attackers. A criminal with limited technical knowledge can now run an AI vulnerability scanner against a target organisation and receive a report listing potential attack vectors. AI has democratised offensive security capabilities.",
    hint: 'Think about the same tool being used by both security researchers and attackers.',
  },
  {
    question: 'How is AI used in ransomware attacks?',
    options: [
      'AI writes the ransomware code automatically, encrypts victim files with no human involvement, and negotiates the ransom payment on behalf of the criminal via an AI-powered chatbot',
      'AI is used to identify the most valuable files to encrypt, help craft convincing ransom demands personalised to the victim, and assist with evasion techniques to avoid detection',
      'AI monitors the dark web for mentions of specific companies and automatically triggers a ransomware attack when a competitor of the attacking group posts positive financial results',
      'AI is used exclusively to decrypt ransomware attacks without paying the ransom, and most ransomware incidents in the UK are now resolved within hours using AI decryption tools',
    ],
    correctIndex: 1,
    explanation:
      "Modern ransomware attacks have become more sophisticated with AI assistance at multiple stages. During reconnaissance, AI tools help attackers identify which files and systems would be most valuable to encrypt (payroll databases, backup servers, customer records). During the attack itself, AI-assisted techniques help malware evade detection by endpoint security software — by generating code that behaves differently each time it runs (polymorphic malware). After encryption, AI helps craft personalised ransom demands that reflect the victim organisation's size and ability to pay, gathered from public financial records. AI also powers some of the customer service chatbots that ransomware groups operate to handle payment negotiations. The UK's National Cyber Security Centre (NCSC) regularly publishes guidance on defending against ransomware.",
    hint: 'Think about where AI could help an attacker be more effective at each stage of a ransomware campaign.',
  },
  {
    question: 'How are cybersecurity defenders using AI to fight back against AI-powered attacks?',
    options: [
      'Defenders are using AI to legally hack back against attackers — automatically counter-attacking any system that attempts to breach a defended network',
      'Defenders use AI for anomaly detection (spotting unusual behaviour patterns), AI-powered email filtering, behavioural analysis of user and network activity, and automated incident response',
      'Defenders have given up trying to detect sophisticated AI attacks and instead focus entirely on recovery — using AI to restore systems from backups faster than attackers can re-encrypt them',
      'Defenders use AI to psychologically profile individual hackers based on their attack patterns and send personalised warnings to their personal email addresses to deter further attacks',
    ],
    correctIndex: 1,
    explanation:
      "The cybersecurity industry has responded to AI-powered attacks with AI-powered defence. Key applications include: anomaly detection — AI learns what normal network traffic, user behaviour, and system activity look like, then flags deviations; email security — AI analyses email content, metadata, and sender reputation to catch phishing emails that bypass signature-based filters; endpoint detection and response (EDR) — AI monitors all activity on individual devices and can automatically isolate a compromised machine before an attack spreads; and automated incident response — when an attack is detected, AI systems can automatically block suspicious connections, alert security teams, and begin containment procedures without waiting for a human to act. Products from companies like CrowdStrike, Darktrace (a UK company), and Microsoft Sentinel all use AI extensively for these defensive applications.",
    hint: 'Think about AI being used to detect abnormal patterns and respond faster than humans could alone.',
  },
]

export function AIAndOffensiveCybersecurity() {
  useMarkVisited('ai-and-offensive-cybersecurity')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F5A5;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and offensive cybersecurity
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How attackers use AI to make phishing, hacking, and fraud more effective —
            and how defenders are fighting back with AI of their own.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-offensive-cybersecurity" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The AI arms race in cybersecurity</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Cybersecurity has always been a cat-and-mouse game between attackers and defenders. AI has dramatically accelerated both sides of this competition — making attacks more sophisticated and defences more capable simultaneously.
          </p>
          <div className="space-y-2">
            {[
              'AI-generated phishing emails now pass standard grammar and spelling checks — the main signs people were trained to look for',
              "Voice cloning AI can replicate someone's voice from a few seconds of audio, enabling CEO fraud and family emergency scams",
              'Automated vulnerability scanning can probe a corporate network for weaknesses in minutes — a task that previously took expert pentesters days',
              "AI-assisted malware can modify its own code to evade antivirus detection — a technique called 'polymorphic malware'",
              'UK businesses reported £2.5 billion in cybercrime losses in 2023 — a significant portion involving AI-enhanced attacks',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-red-500 dark:text-red-400 font-bold mt-0.5 flex-shrink-0">&#x26A0;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How attackers use AI</h2>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4E7;',
                label: 'AI-generated spear phishing',
                text: "Spear phishing is personalised phishing — targeting a specific person with details that make the email seem genuine. AI automates this by combining public information (LinkedIn, company websites) with breached data (email addresses, passwords from other breaches) to generate convincing personalised emails at scale.",
              },
              {
                icon: '&#x1F399;&#xFE0F;',
                label: 'Deepfake voice and video fraud',
                text: "Voice cloning AI creates convincing audio of real people. Video deepfakes can put words in someone's mouth in a video call. In 2024, a Hong Kong employee transferred $25 million after a video call with what appeared to be their CFO — all participants were deepfakes.",
              },
              {
                icon: '&#x1F50D;',
                label: 'AI-assisted hacking',
                text: "AI tools can analyse code for vulnerabilities, generate working exploit code for known vulnerabilities, and automate the process of finding and testing attack vectors. This has lowered the skill threshold required to launch sophisticated attacks.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">{label}</p>
                  <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How defenders use AI</h2>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F9E0;',
                label: 'Anomaly detection',
                text: "AI learns what normal network traffic, user behaviour, and login patterns look like for an organisation. When something deviates — a user logging in at 3am, a sudden spike in data being copied to an external drive — the AI flags it as suspicious for investigation.",
              },
              {
                icon: '&#x1F4E8;',
                label: 'AI email security',
                text: "Modern email security uses AI to analyse incoming emails for phishing signals beyond grammar: unusual sender patterns, suspicious link structures, urgency language, impersonation of known contacts. Products like Proofpoint and Mimecast use AI models trained on millions of phishing examples.",
              },
              {
                icon: '&#x1F6A8;',
                label: 'Automated incident response',
                text: "When an AI detects a threat, automated response systems can isolate an infected device from the network, block suspicious IP addresses, and alert security teams — all within seconds. UK company Darktrace specialises in this AI-powered autonomous response capability.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">{label}</p>
                  <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 dark:bg-blue-950 rounded-xl p-4">
            <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
              <span className="font-semibold">Practical advice:</span> The most effective defence against AI-powered attacks remains consistent: use a password manager with unique passwords, enable two-factor authentication everywhere, and treat any unexpected request for money or information with suspicion — verify through a separate channel before acting.
            </p>
          </div>
        </div>

        <LessonNote lessonId="ai-and-offensive-cybersecurity" />
        <ReviewLaterButton lessonId="ai-and-offensive-cybersecurity" />

        <Quiz lessonId="ai-and-offensive-cybersecurity" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-offensive-cybersecurity" />
        <LessonFeedback lessonId="ai-and-offensive-cybersecurity" />

        <RelatedLessons currentId="ai-and-offensive-cybersecurity" />

        <NextLesson currentId="ai-and-offensive-cybersecurity" />

      </div>
    </div>
  )
}
