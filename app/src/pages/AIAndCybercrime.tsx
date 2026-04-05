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

const LESSON_TITLE = 'AI and cybercrime'

const KEY_TAKEAWAYS = [
  'AI has dramatically lowered the skill bar for cybercriminals — tools that once required technical expertise can now be operated by anyone using AI assistants, enabling far more sophisticated attacks at greater scale.',
  'AI-powered phishing emails are near-perfect — grammatically correct, personalised, and written in the correct style and tone of the person or organisation being impersonated.',
  'Deepfake technology (AI-generated fake video and audio) is being used to impersonate executives, celebrities, and family members to authorise fraudulent payments or spread disinformation.',
  'Ransomware — malware that encrypts your files and demands payment to restore them — is increasingly automated and targeted using AI to identify the most valuable victims.',
  'AI is also the main defence — security systems use machine learning to detect unusual patterns in network traffic, identify phishing emails, and respond to threats faster than any human team.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How has AI changed the scale and sophistication of phishing attacks?',
    options: [
      'AI has made phishing less common because security companies use AI to block all phishing emails before they reach inboxes',
      'AI allows attackers to generate highly personalised, grammatically perfect phishing messages at scale — and to impersonate specific people convincingly',
      'AI has made phishing attacks more obvious — the emails look artificial and are easy for recipients to spot',
      'AI phishing only works against large corporations — individual people and small businesses are not targeted',
    ],
    correctIndex: 1,
    explanation:
      "Traditional phishing emails were often easy to spot: poor grammar, obvious spelling mistakes, generic greetings ('Dear Customer'). AI-powered phishing is different. Large language models can write perfect English, tailor messages to the recipient (using publicly available information from LinkedIn, social media, or data breaches), and impersonate specific writing styles convincingly. Criminals feed AI a sample of someone's emails and it generates responses indistinguishable from the real person. This 'spear phishing' can now be done at scale — thousands of personalised emails per day instead of hundreds.",
    hint: 'Think about what changes when a criminal can generate thousands of personalised, perfectly written messages automatically.',
  },
  {
    question: 'What is a deepfake and how is it being used in fraud?',
    options: [
      'A deepfake is an extremely deep, complex fake website designed to impersonate a real company\'s online banking portal',
      'A deepfake is AI-generated synthetic video or audio that realistically shows a real person saying or doing something they never said or did',
      'A deepfake is a fraudulent cryptocurrency that mimics a legitimate coin to trick investors',
      'A deepfake is a malicious AI model hidden inside legitimate software that activates when connected to a corporate network',
    ],
    correctIndex: 1,
    explanation:
      "Deepfake technology uses AI to generate realistic-looking synthetic video or audio. Criminals have used it to impersonate company CEOs on video calls to authorise large wire transfers to fraudulent accounts — a scam known as 'CEO fraud' or 'business email compromise'. A British engineering company reportedly lost $25 million in 2024 when an employee was tricked on a video call by deepfakes of multiple colleagues. Audio deepfakes are also used — generating a convincing imitation of a family member's voice claiming to be in trouble and needing money urgently.",
    hint: "Think about receiving a video call from your boss asking for something urgent — but it isn't really them.",
  },
  {
    question: 'What is ransomware and how does AI help criminals deploy it more effectively?',
    options: [
      'Ransomware is a type of AI that encrypts your email to protect privacy — criminals sell access to decrypt it',
      'Ransomware is malware that encrypts files and demands payment to restore them — AI helps identify high-value targets and automate the attack process',
      'Ransomware is a social media platform that locks your account and demands payment to restore access',
      'Ransomware refers to AI models that are trained on stolen data and must pay their original owners royalties',
    ],
    correctIndex: 1,
    explanation:
      "Ransomware encrypts all the files on a computer or network — documents, photos, databases — and displays a demand for payment (usually in cryptocurrency) to restore them. Without the decryption key, the files are unrecoverable. AI has made ransomware more dangerous in two ways. First, AI tools can identify which organisations are most vulnerable and have the most to lose — hospitals with patient records, law firms with confidential files — helping criminals prioritise targets. Second, AI automates the attack process, allowing criminal groups to run many simultaneous campaigns without proportionally increasing their staff.",
    hint: 'Think about a criminal using AI to find the most valuable targets automatically.',
  },
  {
    question: 'How do AI security systems defend against cyber attacks?',
    options: [
      'They lock down all internet connections the moment any suspicious activity is detected, disconnecting the organisation from the internet completely',
      'They learn normal patterns of network traffic and user behaviour, and flag anomalies that might indicate an intrusion or data theft in real time',
      'They automatically identify and arrest cybercriminals by cross-referencing their attack signatures with law enforcement databases',
      'They store all company data offline in a secure bunker where no internet-connected system can access it',
    ],
    correctIndex: 1,
    explanation:
      "AI security systems (used by companies like CrowdStrike, Darktrace, and Microsoft) continuously learn what 'normal' looks like on a network — which users access which systems at what times, how much data typically flows between departments, where emails normally come from. When something deviates from the pattern — a user accessing systems they never use at 3am, large amounts of data being copied to an unfamiliar location, a flood of login attempts — the AI flags it as suspicious and can alert security staff or automatically block the activity. This threat detection can happen in milliseconds, far faster than a human monitoring a dashboard.",
    hint: 'Think about the AI learning what normal looks like and spotting when something is different.',
  },
  {
    question: 'What practical steps can individuals take to reduce their risk from AI-powered cyber attacks?',
    options: [
      'Never use the internet — the only way to be completely safe is complete digital disconnection',
      'Use a password manager, enable two-factor authentication, be sceptical of urgent requests even from known contacts, and keep software updated',
      'Only use a phone for internet access — desktop computers are much more vulnerable to AI-powered attacks',
      'Pay for the most expensive antivirus software available — price is directly correlated with protection quality',
    ],
    correctIndex: 1,
    explanation:
      "AI-powered attacks are more sophisticated but the defences remain largely the same good practices, now more important than ever. A strong, unique password for each account (use a password manager like Bitwarden or 1Password) means one compromised password cannot access everything. Two-factor authentication (a code to your phone as well as a password) stops stolen passwords from being enough. Scepticism about urgent requests is crucial — deepfakes and AI phishing often create urgency to short-circuit careful thinking. Call the person on a known number to verify unexpected requests. Keeping software updated closes known security vulnerabilities that attackers exploit.",
    hint: 'Think about layers of defence — if one fails, the next one stops the attack.',
  },
]

export function AIAndCybercrime() {
  useMarkVisited('ai-and-cybercrime')

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F512;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and cybercrime
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How criminals use AI to run more sophisticated attacks — and how AI defends against them.
            What you need to know to stay safe.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-cybercrime" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI has lowered the barrier for criminals</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Sophisticated cyber attacks once required significant technical skill. AI has changed that — tools that needed programming expertise can now be operated through natural language by anyone.
          </p>
          <div className="space-y-2">
            {[
              'AI can write convincing phishing emails, impersonate writing styles, and translate attacks into any language instantly',
              'AI can identify software vulnerabilities and suggest how to exploit them without requiring security expertise',
              'Criminal groups use AI assistants (including jailbroken versions of legitimate AI tools) to automate parts of their operations',
              'The scale of attacks has grown — AI makes it viable to target thousands of individuals simultaneously with personalised approaches',
              'AI voice cloning can replicate someone\'s voice from a few seconds of audio — enabling fraud calls impersonating family or colleagues',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mt-0.5 flex-shrink-0">&#x26A0;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI-powered phishing</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Phishing — sending a fake message designed to steal information or money — has been transformed by AI.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-orange-50 dark:bg-orange-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4E7;</span>
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-200 text-sm mb-0.5">Before AI: easy to spot</p>
                <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">Old phishing emails had obvious tells: grammatical errors, "Dear Valued Customer" instead of your name, suspicious links. Most people learned to spot them.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-orange-50 dark:bg-orange-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F916;</span>
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-200 text-sm mb-0.5">After AI: much harder</p>
                <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">AI generates perfect prose, researches targets from LinkedIn and social media, writes in the correct tone and style of the person being impersonated, and tailors the message to the specific individual. Security researchers now say AI-generated phishing can fool people who successfully spotted traditional phishing attempts.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Deepfake fraud</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI can now generate convincing video and audio of real people saying things they never said. This is being exploited for fraud.
          </p>
          <div className="space-y-2">
            {[
              'In 2024, a Hong Kong company employee was tricked on a video call with deepfakes of multiple colleagues into transferring $25 million (£20 million) to fraudsters',
              'Audio deepfakes of family members claiming to be in emergency situations are used to extract urgent money transfers',
              'Deepfake CEO video messages authorising unusual financial instructions or policy changes',
              'Political deepfakes put words in politicians\' mouths — spreading in social media before fact-checkers can respond',
              'Romance scammers use deepfake video calls to convincingly impersonate attractive people to build emotional relationships and then request money',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-purple-600 dark:text-purple-400 font-bold mt-0.5 flex-shrink-0">&#x26A0;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How to protect yourself</h2>
          <div className="space-y-2">
            {[
              'Use a password manager — unique, strong passwords for every account mean one breach cannot cascade to all your accounts',
              'Enable two-factor authentication (2FA) on every account that offers it — a stolen password is not enough if the attacker also needs your phone',
              'Be sceptical of urgency — AI attacks often create a sense of panic to bypass careful thinking. Slow down, verify through a different channel',
              'Call the person on a number you already know, not one given in the suspicious message, to verify unexpected requests',
              'Keep software updated — most successful attacks exploit known vulnerabilities that updates fix',
              'Be cautious about what personal information is publicly available on social media — it feeds AI personalisation of attacks',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <LessonNote lessonId="ai-and-cybercrime" />
        <ReviewLaterButton lessonId="ai-and-cybercrime" />

        <Quiz lessonId="ai-and-cybercrime" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-cybercrime" />
        <LessonFeedback lessonId="ai-and-cybercrime" />

        <RelatedLessons currentId="ai-and-cybercrime" />

        <NextLesson currentId="ai-and-cybercrime" />

      </div>
    </div>
  )
}
