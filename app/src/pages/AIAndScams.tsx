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

const LESSON_TITLE = 'AI and scams'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How has AI changed the quality of phishing emails compared to five years ago?',
    options: [
      'AI has made phishing emails easier to spot because they now contain more links',
      'AI has made phishing emails much harder to spot — they are now grammatically correct, personalised, and far more convincing',
      'AI has had no effect on phishing emails — scammers still use the same templates',
      'AI has made phishing emails shorter and easier to filter automatically',
    ],
    correctIndex: 1,
    explanation:
      'Until recently, phishing emails were often easy to identify by their poor spelling, odd grammar, and generic greetings. AI tools like ChatGPT allow scammers to generate fluent, personalised, error-free messages at scale — even in your own language dialect. They can also scrape your social media to personalise the message with your name, employer, or recent activity, making the fraud far more convincing.',
    hint: 'Think about the classic signs of a scam email that no longer apply.',
  },
  {
    question: 'What is a voice cloning scam?',
    options: [
      "A scam where criminals record your voice and sell it to advertisers",
      "A fraud where AI is used to recreate someone's voice from audio clips, then used to impersonate them in phone calls — for example, pretending to be a distressed family member or your bank",
      'A scam where criminals trick you into calling a premium-rate phone number',
      'A type of scam that only affects people who use voice assistants like Alexa or Siri',
    ],
    correctIndex: 1,
    explanation:
      "Voice cloning tools can replicate a person's voice from as little as three seconds of audio — which could come from a voicemail, a YouTube video, or a social media clip. Criminals then use the cloned voice to call relatives claiming to be in an emergency (the grandparent scam), or to impersonate an employee's manager authorising a bank transfer (CEO fraud). The UK's National Cyber Security Centre has flagged this as a growing threat.",
    hint: 'AI only needs a few seconds of someone talking to clone their voice.',
  },
  {
    question: "According to the UK's National Cyber Security Centre (NCSC), what is the best first step if you receive an unexpected message or call asking you to act quickly — such as transferring money or sharing a password?",
    options: [
      'Reply immediately to confirm your identity before someone else does',
      'Stop, think, and verify — hang up and call the organisation back using a number from their official website, not the one the caller gave you',
      'Forward the message to all your contacts so they know to be careful',
      'Immediately change all your passwords in case you have already been hacked',
    ],
    correctIndex: 1,
    explanation:
      "The NCSC's stop, think, call back approach is specifically designed for these situations. Urgency is a key manipulation tactic — scammers want you to act before you think. Hanging up and independently finding the real contact number for a bank, company, or government agency breaks the scammer's chain of control. Never call back on a number the potential scammer provided, and never trust caller ID alone — it can be spoofed.",
    hint: 'The key word is independently — find the number yourself rather than using the one you were given.',
  },
  {
    question: 'What is a common sign that a romantic partner you have only met online might be using AI-generated photos as part of a scam?',
    options: [
      'They only message you during UK business hours',
      'Their profile photo looks too perfect — flawless skin, oddly smooth background, or slightly distorted details like earrings or hair that do not quite match',
      'They have more than 200 friends on social media',
      'They refuse to use video calls, always claiming technical problems',
    ],
    correctIndex: 3,
    explanation:
      'Avoiding video calls entirely is one of the strongest warning signs in romance scams. A genuine person who claims to have feelings for you will eventually agree to a live video call. AI-generated profile photos are also a red flag — look for a too-perfect appearance, strange background details, or hands and hair that look unnatural. If you are suspicious of a photo, reverse image search it using Google Images or TinEye.',
    hint: 'Which answer is harder to fake with AI alone?',
  },
]

export function AIAndScams() {
  useMarkVisited('ai-and-scams')

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F6A8;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and scams
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How criminals use AI to run fraud — and the practical steps you can
            take to protect yourself.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-scams" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Why AI has made scams much worse</h2>
          <p className="text-gray-600 leading-relaxed">
            Scams and fraud are nothing new — but AI has made them dramatically more convincing,
            more personalised, and easier to run at scale. In 2023, UK consumers lost over
            <strong> £1.2 billion</strong> to fraud, according to UK Finance. AI is accelerating that.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The classic giveaways — terrible spelling, odd phrasing, generic greetings like "Dear
            Customer" — are disappearing. AI tools can now generate fluent, personalised messages in
            any language, any dialect, and any tone. A scammer in another country can write a
            convincing email that sounds exactly like your bank, your GP surgery, or your employer.
          </p>
          <div className="bg-red-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-red-800 text-sm">What AI gives scammers</p>
            <ul className="text-red-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>Perfect grammar and spelling in any language</li>
              <li>Personalisation using your name, employer, and recent activity scraped from social media</li>
              <li>Scale — thousands of convincing, personalised messages generated automatically</li>
              <li>Speed — AI can generate and send a scam in seconds</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Phishing: the most common AI-powered scam</h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Phishing</strong> means sending a fake message that appears to come from a trusted
            source — your bank, HMRC, Royal Mail, Amazon — to trick you into clicking a link, entering
            your password, or downloading something harmful.
          </p>
          <p className="text-gray-600 leading-relaxed">
            AI has made phishing emails, texts (smishing), and calls (vishing) far more convincing:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4E7;',
                label: 'Email phishing',
                text: 'AI can write a convincing email from "your bank" about a suspicious payment, complete with correct formatting, your real name, and urgent language designed to make you act without thinking.',
              },
              {
                icon: '&#x1F4F1;',
                label: 'Text message scams (smishing)',
                text: 'A fake text claiming to be from Royal Mail about a missed parcel, or from HMRC about a tax refund — but the link leads to a fake website that steals your details.',
              },
              {
                icon: '&#x1F4BB;',
                label: 'Fake customer service chatbots',
                text: 'Fraudsters create fake websites with AI-powered chat assistants that appear to be legitimate customer service. They collect your account details, passwords, and card numbers.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-orange-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-orange-800 text-sm mb-0.5">{label}</p>
                  <p className="text-orange-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Voice cloning scams</h2>
          <p className="text-gray-600 leading-relaxed">
            One of the most disturbing new scam types uses <strong>AI voice cloning</strong>. Modern AI
            can recreate someone's voice from as little as three seconds of audio — a voicemail, a
            YouTube video, a TikTok clip.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F474;',
                label: 'The grandparent scam',
                text: "A cloned voice of a grandchild calls an elderly relative claiming to have been in an accident or arrested, urgently needing money wired. The voice sounds exactly like their grandchild.",
              },
              {
                icon: '&#x1F4BC;',
                label: 'CEO / boss fraud',
                text: "A finance employee receives a call that sounds exactly like their managing director, authorising an urgent payment to a supplier. The caller is actually a cloned voice — and the money goes to the fraudster.",
              },
              {
                icon: '&#x2764;&#xFE0F;',
                label: 'Romance scams',
                text: "Scammers use AI-generated photos and sometimes voice notes to build romantic relationships over weeks or months — then ask for money for an emergency.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-purple-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-purple-800 text-sm mb-0.5">{label}</p>
                  <p className="text-purple-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-purple-50 rounded-xl p-4">
            <p className="font-semibold text-purple-800 text-sm mb-1">Set a family safe word</p>
            <p className="text-purple-700 text-sm leading-relaxed">
              Security experts recommend setting a secret word with close family — something only you
              all know. If you receive an urgent call claiming to be a family member, ask for the safe
              word before doing anything. A real family member will know it. A scammer will not.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What the NCSC says: stop, think, call back</h2>
          <p className="text-gray-600 leading-relaxed">
            The UK's <strong>National Cyber Security Centre (NCSC)</strong> — the government body that
            helps people stay safe online — gives clear guidance for these situations. The key
            principle is simple: <strong>urgency is a manipulation tactic</strong>.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Scammers want you to act before you think. They create a sense of panic — your account is
            being drained, your relative is in trouble, your parcel is stuck — so that you bypass your
            natural caution.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 space-y-3">
            <p className="font-semibold text-blue-800 text-sm">The NCSC approach: Stop. Think. Call back.</p>
            <ol className="text-blue-700 text-sm leading-relaxed space-y-2 list-decimal list-inside">
              <li><strong>Stop.</strong> Do not act immediately, no matter how urgent it feels. Hang up or close the message.</li>
              <li><strong>Think.</strong> Would my bank or HMRC really contact me this way? Does this feel right?</li>
              <li><strong>Call back.</strong> Find the real contact number from the official website — not from the message you received — and call to verify.</li>
            </ol>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Important: <strong>caller ID can be faked</strong>. Seeing your bank's name on an incoming
            call does not prove it is your bank. Always hang up and call back independently.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">5 practical rules to protect yourself</h2>
          <div className="space-y-3">
            {[
              {
                number: '1',
                label: 'Never act on urgency alone',
                text: 'If someone is pressuring you to act immediately — transfer money, share a code, click a link — treat it as a red flag. Pause and verify independently.',
              },
              {
                number: '2',
                label: 'Never give out passwords or one-time codes',
                text: 'No legitimate bank, government body, or company will ever ask for your full password or one-time security code over the phone or by text.',
              },
              {
                number: '3',
                label: 'Use a family safe word',
                text: 'Agree on a secret word with close family. If someone claims to be a distressed relative and cannot say the word, hang up and call the family member on a number you know.',
              },
              {
                number: '4',
                label: 'Check before you click',
                text: 'Hover over links in emails to see where they really go. If the address looks odd — lots of numbers, a slightly wrong spelling of a known company name — do not click.',
              },
              {
                number: '5',
                label: 'Report it — even if you are not sure',
                text: 'Forward suspicious emails to report@phishing.gov.uk (the NCSC). Report suspicious texts by forwarding to 7726. If you have lost money, contact Action Fraud on 0300 123 2040.',
              },
            ].map(({ number, label, text }) => (
              <div key={number} className="flex gap-3 items-start">
                <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                  {number}
                </span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">{label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
          <p className="font-semibold text-red-800 mb-2">Key takeaway</p>
          <p className="text-red-700 text-sm leading-relaxed">
            AI has made scams more convincing, more personalised, and harder to spot — but the
            underlying tactics are the same: create urgency, exploit trust, and stop you thinking
            clearly. The counter is simple: slow down. No genuine emergency requires you to transfer
            money or share a password in the next ten minutes. Always verify independently before acting.
          </p>
        </div>

        <ReviewLaterButton lessonId="ai-and-scams" />
        <LessonNote lessonId="ai-and-scams" lessonTitle={LESSON_TITLE} />

        <Quiz questions={quizQuestions} lessonId="ai-and-scams" lessonTitle={LESSON_TITLE} />

        <LessonFeedback lessonId="ai-and-scams" />
        <LessonRating lessonId="ai-and-scams" />
        <RelatedLessons currentId="ai-and-scams" />
        <NextLesson currentId="ai-and-scams" />
      </div>
    </div>
  )
}
