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
import { DifficultyBadge } from '../components/DifficultyBadge'

const LESSON_TITLE = 'AI and cybercrime'

const KEY_TAKEAWAYS = [
  'Criminals use AI to write highly convincing phishing emails in perfect English and to clone voices from just a few seconds of audio, enabling fake phone calls from people who sound exactly like your boss or family member.',
  'Deepfake technology can generate realistic fake videos of real people saying or doing things they never did, which is being used for fraud, extortion, and political disinformation at increasing scale.',
  'AI accelerates ransomware attacks by automating the identification of vulnerable systems, generating custom malicious code, and helping criminals negotiate ransoms — making attacks faster and cheaper to launch.',
  'The same AI that powers attacks also powers defences: email filters now catch 99% of phishing attempts, fraud detection systems flag suspicious transactions in milliseconds, and AI systems monitor networks 24 hours a day for unusual behaviour.',
  'Protecting yourself comes down to a few habits: be suspicious of unexpected urgency, verify surprising requests through a different channel, use strong unique passwords with a password manager, and enable two-factor authentication everywhere you can.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How has AI changed phishing emails compared to older scam emails?',
    options: [
      'AI has made phishing emails shorter and easier to spot because criminals rely on automation instead of writing long messages',
      'AI enables criminals to generate perfectly written, highly personalised phishing emails at massive scale — removing the telltale spelling mistakes that used to give them away',
      'AI has made phishing emails more colourful and visual, since criminals now use image generators to design them',
      'AI has made phishing emails illegal to send in most countries, so criminals now rely on phone calls instead',
    ],
    correctIndex: 1,
    explanation:
      'Traditional phishing emails were often easy to spot because of poor grammar, obvious spelling mistakes, and generic greetings. AI language models can now write flawless English (or any other language) and personalise the email with details about the target pulled from social media — making it much harder to distinguish a scam from a real message. AI also allows criminals to send millions of personalised emails simultaneously, dramatically increasing both scale and success rates.',
    hint: 'Think about what used to make phishing emails easy to identify.',
  },
  {
    question: 'What is voice cloning, and how is it being used in fraud?',
    options: [
      'Voice cloning is a technique where criminals record someone in person and then play the recording back over the phone to impersonate them',
      "Voice cloning uses AI to create a synthetic copy of a real person's voice from a short audio sample, which is then used to make fake calls impersonating that person",
      'Voice cloning is a type of malware that records your voice through your phone microphone and sends it to criminals automatically',
      'Voice cloning is a legal tool used by call centres to standardise customer service voices, which criminals have repurposed to create fake accents',
    ],
    correctIndex: 1,
    explanation:
      "Modern AI voice cloning tools can generate a convincing replica of someone's voice from as little as three to ten seconds of audio — enough to be taken from a public video, voicemail, or social media clip. Criminals use these cloned voices in vishing (voice phishing) attacks. There have been well-documented cases of employees receiving calls from someone sounding exactly like their CEO asking them to transfer money urgently, and of families receiving distress calls from someone sounding exactly like a relative claiming to need emergency funds.",
    hint: 'Think about how little audio is needed and what it enables.',
  },
  {
    question: 'What makes deepfake fraud particularly dangerous compared to traditional image manipulation?',
    options: [
      'Deepfakes are dangerous because they require highly specialised equipment that only large criminal organisations can afford, concentrating the threat',
      'Deepfakes are dangerous because they can only be created using government supercomputers, meaning nation-states are the primary threat',
      'Deepfakes are dangerous because AI makes them increasingly realistic and accessible — creating convincing fake videos of real people no longer requires film industry expertise or expensive equipment',
      'Deepfakes are dangerous because they are indistinguishable from real videos in every situation without exception, even for trained forensic experts',
    ],
    correctIndex: 2,
    explanation:
      'Until recently, creating convincing fake video required significant technical skill and expensive software. Free and cheap AI tools have democratised deepfake creation — a convincing fake video can now be created by someone with a consumer laptop. This lowers the barrier to fraud, extortion, and political disinformation. Detection tools exist but are in a constant arms race with generation tools. Deepfakes are not yet always undetectable — trained eyes and forensic tools can often spot them — but quality is improving rapidly.',
    hint: 'Think about what has changed in terms of who can create deepfakes and at what cost.',
  },
  {
    question: 'How does AI help cyber defenders protect against attacks?',
    options: [
      'AI defenders work by pre-emptively attacking criminal infrastructure before it can be used',
      'AI is used primarily to write clearer security policies and training documents that employees are more likely to read and remember',
      'AI analyses huge volumes of data in real time to detect anomalies — flagging unusual login locations, unexpected file access, suspicious network traffic, and potential phishing emails faster than any human team could',
      'AI defenders require criminals to register their attacks in advance through an international treaty system',
    ],
    correctIndex: 2,
    explanation:
      'Cybersecurity AI systems work by learning what normal looks like for a given network, user, or email inbox and flagging deviations. A login from a new country at 3am, a user suddenly accessing thousands of files they have never opened before, or an email with a link to a domain registered yesterday — these patterns can be detected and acted on in milliseconds. Modern email security filters powered by AI catch over 99% of phishing attempts before they reach inboxes. Security operations centres use AI to process millions of security events per day — a volume impossible for human analysts alone.',
    hint: 'Think about the scale of data that needs to be processed and what AI does well.',
  },
  {
    question: 'Which of the following is the single most effective step an individual can take to protect their accounts from AI-powered attacks?',
    options: [
      'Deleting all social media accounts, since criminals use publicly available information to personalise attacks',
      'Enabling two-factor authentication on important accounts, so that even if a password is stolen the account cannot be accessed without a second verification step',
      'Changing your password every week, since frequent changes mean criminals have less time to use a stolen password before it becomes invalid',
      'Only using websites that have a padlock icon in the browser address bar, which guarantees the site is operated by a legitimate business',
    ],
    correctIndex: 1,
    explanation:
      'Two-factor authentication (2FA) is widely considered the highest-impact single security measure for individuals. Even if a criminal has your password — obtained through phishing, a data breach, or credential stuffing — they cannot access your account without also having the second factor (usually your phone). A padlock in the address bar only means the connection is encrypted, not that the website is trustworthy. Frequent password changes are now considered less effective than using a unique strong password per site.',
    hint: 'Think about what stops an attacker even when they already have your password.',
  },
]

export function AIAndCybercrime() {
  useMarkVisited('ai-and-cybercrime')

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F6A8;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and cybercrime
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How criminals are using AI for phishing, voice cloning, deepfake fraud, and ransomware
            — and how the same technology is being used to fight back.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-cybercrime" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The changing face of cybercrime</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Cybercrime has existed since the internet began — but AI has changed the game dramatically. Attacks that previously required significant technical skill, time, and resources can now be automated, personalised, and scaled at almost no cost.
          </p>
          <div className="space-y-2">
            {[
              'UK businesses lost over £1.1 billion to cybercrime in 2023 — a figure that has risen sharply as AI-powered attacks become cheaper to launch',
              'AI can write phishing emails indistinguishable from genuine messages from banks, employers, or delivery companies — with perfect grammar and personalised details',
              'Voice cloning tools available for free online can replicate any voice from a 10-second audio clip found on social media',
              'The average ransomware payment demanded from UK businesses in 2024 was over £500,000',
              'Cybercrime costs the global economy an estimated $8 trillion per year — more than the GDP of most countries',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI-powered phishing — a scam that knows your name</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Phishing — tricking someone into revealing a password or clicking a malicious link by pretending to be someone trustworthy — is one of the oldest tricks on the internet. AI has made it dramatically more effective.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-orange-50 dark:bg-orange-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4E7;</span>
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-200 text-sm mb-0.5">Personalised at scale</p>
                <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">Traditional phishing emails were easy to spot — generic greetings, spelling mistakes, obvious pressure tactics. AI can now generate thousands of emails per second, each personalised with the target's name, employer, recent activity, and written in flawless English. It can scan a target's LinkedIn profile to tailor a fake job offer, or read their social media to fake an urgent message from someone they know.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-orange-50 dark:bg-orange-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F1;</span>
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-200 text-sm mb-0.5">Voice cloning — your CEO calling</p>
                <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">In several high-profile cases, employees have received phone calls from someone sounding exactly like their chief executive asking them to make an urgent wire transfer. The voice was a clone created from public audio. One UK engineering firm lost £200,000 to a single AI voice phishing call. The audio used to train the clone can be taken from a corporate video, podcast, or press interview.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-orange-50 dark:bg-orange-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F46A;</span>
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-200 text-sm mb-0.5">Family emergency scams</p>
                <p className="text-orange-700 dark:text-orange-300 text-sm leading-relaxed">Criminals now target families with AI-cloned voices of children or grandchildren, calling elderly relatives claiming to be in an emergency — arrested, in hospital, or stranded abroad — and begging for money urgently. The voice sounds so convincing that victims believe it is their real family member. These scams have caused significant financial and emotional harm to victims across the UK and US.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Deepfakes — when seeing is no longer believing</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Deepfake technology uses AI to convincingly place a real person's face and voice into video footage they were never part of. The implications for fraud, reputation, and trust are profound.
          </p>
          <div className="space-y-2">
            {[
              'Deepfake videos have been used to create fake video calls impersonating executives — one company transferred $25 million after a deepfake video conference in 2024',
              'Criminals create fake investment videos using the faces and voices of celebrities to promote scams',
              'Deepfake pornography — creating fake intimate images of real people without consent — has become a widespread problem affecting mostly women',
              'Political deepfakes — fake videos of politicians making statements they never made — pose a serious risk to elections and public trust in video evidence',
              'Detection tools exist and are improving, but so are generation tools — it is an ongoing technological arms race',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-purple-600 dark:text-purple-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-purple-50 dark:bg-purple-950 rounded-xl p-4">
            <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">
              <span className="font-semibold">A practical rule:</span> if you receive an unexpected video or audio message asking you to take urgent action — especially involving money — verify through an entirely separate channel before acting. Call the person on a number you already know, or speak to them in person.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Ransomware — AI accelerates the arms race</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Ransomware is malicious software that encrypts all the files on a computer system and demands payment to restore access. It has crippled hospitals, councils, schools, and businesses. AI is making these attacks faster and cheaper to execute.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F50D;',
                label: 'Finding targets faster',
                text: 'AI can scan the internet for vulnerable systems — unpatched software, misconfigured servers, weak passwords — far faster than human hackers, identifying targets in minutes that would previously have taken weeks to find.',
              },
              {
                icon: '&#x1F4BB;',
                label: 'Writing malware automatically',
                text: 'AI coding tools can generate custom malicious code variants that evade specific security software. This was previously a skilled job requiring experienced criminal coders — AI makes it accessible to less technically skilled criminals.',
              },
              {
                icon: '&#x1F4AC;',
                label: 'Automated ransom negotiation',
                text: 'Some ransomware operators use AI chatbots to handle ransom negotiations — determining how much to demand based on the apparent financial health of the victim organisation, and maintaining pressure through automated messaging.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-rose-50 dark:bg-rose-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-rose-800 dark:text-rose-200 text-sm mb-0.5">{label}</p>
                  <p className="text-rose-700 dark:text-rose-300 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How AI fights back — the defenders</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The same AI capabilities that power attacks are being used to defend against them — and in many areas, the defenders have the advantage because they have access to larger, better-labelled datasets of known attacks.
          </p>
          <div className="space-y-2">
            {[
              'Email security AI filters catch over 99% of phishing and malware emails before they reach inboxes — analysing writing style, link destinations, sending patterns, and metadata',
              'Bank fraud detection AI analyses every transaction in milliseconds, comparing it against your normal behaviour — if your card is used in Lagos immediately after being used in London, it flags the anomaly instantly',
              'Network monitoring AI watches traffic across entire corporate networks 24 hours a day, identifying patterns that indicate a breach in progress — often before the attacker has done significant damage',
              'Identity verification AI checks for signs that a login is being made by a bot or a stolen credential rather than the real account holder, using typing patterns, mouse movements, and device fingerprints',
              'Threat intelligence AI aggregates data from millions of attacks globally, identifying new attack techniques and sharing warnings faster than any human analyst network could',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How to protect yourself — practical steps</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            You do not need to be a security expert to protect yourself well. A few consistent habits provide the vast majority of protection against AI-powered attacks.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F6A7;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Treat urgency as a red flag</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">Most scams — AI-powered or otherwise — rely on urgency to prevent you thinking clearly. Genuine organisations almost never demand instant irreversible action. Pause, slow down, and verify through a channel you initiate yourself.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F511;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Use a password manager and two-factor authentication</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">A password manager (such as Bitwarden, which is free) generates and stores a unique strong password for every website. Two-factor authentication adds a second barrier even if a password is stolen — most banks, email providers, and social networks now offer it, and enabling it is one of the highest-impact security steps available.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4DE;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Verify surprising requests through a different channel</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">If you receive an unexpected email, call, or video message asking you to transfer money, share a password, or take urgent action — even from someone you recognise — hang up and call them back on a number you already have. Do not use the number in the message. This simple habit defeats most voice cloning and deepfake attacks.</p>
              </div>
            </div>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-cybercrime" />
        <LessonNote lessonId="ai-and-cybercrime" />

        <Quiz lessonId="ai-and-cybercrime" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-cybercrime" />
        <LessonFeedback lessonId="ai-and-cybercrime" />

        <RelatedLessons currentId="ai-and-cybercrime" />

        <NextLesson currentId="ai-and-cybercrime" />

      </div>
    </div>
  )
}
