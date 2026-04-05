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

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does AI help catch phishing emails?',
    options: [
      'It blocks every email from an unknown sender automatically',
      'It analyses patterns like unusual sender domains, suspicious links, and mismatched writing styles to flag likely scams',
      'It reads every email and forwards suspicious ones to the police',
      'It only works with emails that contain attachments',
    ],
    correctIndex: 1,
    explanation:
      'AI phishing filters learn from millions of known scam emails. They look for signals like mismatched sender addresses, urgent language designed to panic you, strange link destinations, and writing patterns that match known scams — catching threats that a simple spam filter would miss.',
  },
  {
    question: 'What makes modern antivirus software different from older versions?',
    options: [
      'Modern antivirus only checks files when you open them, not when they arrive',
      'Older antivirus used AI; modern versions use simple rule lists',
      'Modern antivirus uses AI behaviour analysis to spot suspicious activity, rather than just matching known threat signatures',
      'Modern antivirus is entirely cloud-based and needs a constant internet connection to work',
    ],
    correctIndex: 2,
    explanation:
      'Traditional antivirus matched files against a database of known malware signatures — useless against brand-new threats. AI-powered tools watch how software behaves: if a program suddenly starts encrypting all your files or tries to send data to an unfamiliar server, the AI flags it even if it has never seen that exact malware before.',
  },
  {
    question: 'What is a deepfake voice call scam?',
    options: [
      'A scam where criminals call pretending to be from a bank and read out your details',
      'A scam using AI-generated audio that sounds like someone you know — such as a family member — asking for urgent help or money',
      'A scam where AI translates your voicemail into text and steals information',
      'A scam that only works on smartphone users, not landline users',
    ],
    correctIndex: 1,
    explanation:
      "With a few seconds of someone's voice (scraped from a social media video, for example), AI can clone it convincingly. Criminals use this to call family members pretending to be a loved one in trouble, requesting an urgent bank transfer. Always verify via a second channel — ring back on a known number.",
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
      "Adversarial attacks exploit weaknesses in how AI models learn. For example, adding barely visible pixel-level noise to an image of a stop sign can make an AI vision system confidently misclassify it as a speed limit sign. Security researchers study these attacks to make AI systems more robust.",
  },
  {
    question: 'Which of these is a practical step to protect yourself from AI-powered scams?',
    options: [
      'Never use email — AI cannot attack you through other channels',
      'Trust audio or video calls completely because AI cannot yet fake them convincingly',
      'Verify unexpected urgent requests — especially for money — by calling back on a number you already know, not one given in the message',
      'Only use passwords with more than 20 characters, as AI cannot crack those',
    ],
    correctIndex: 2,
    explanation:
      "The most powerful defence against AI-enabled social engineering is verification through a separate channel. If you get an urgent call, text, or email — even from someone who sounds like your bank, your boss, or a family member — hang up and call back using a number you trust independently. Don't let urgency rush you.",
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
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
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
