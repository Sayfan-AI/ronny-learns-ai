import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { ShareButton } from '../components/ShareButton'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does the Associated Press use AI in its journalism?',
    options: [
      'It replaces all its journalists with AI systems that write every article',
      'It uses AI (Automated Insights) to automatically generate thousands of short earnings reports and sports match summaries from structured data',
      'It uses AI only to check spelling and grammar in articles written by humans',
      'It uses AI to decide which stories are published based on reader clicks',
    ],
    correctIndex: 1,
    explanation:
      'The Associated Press partnered with Automated Insights to use AI that turns structured data — company earnings figures, sports box scores — into readable short articles. This frees human journalists to focus on investigative reporting and deeper stories. The AP now publishes thousands of AI-generated earnings reports per quarter that would have been impossible for its human team to write.',
  },
  {
    question: 'What is a "deepfake" in the context of journalism?',
    options: [
      'A deliberately exaggerated headline designed to attract clicks',
      'An AI-generated video or audio that convincingly shows a real person saying or doing something they never actually said or did',
      'A news story that quotes anonymous sources without evidence',
      'A social media post that is shared so many times it becomes difficult to verify',
    ],
    correctIndex: 1,
    explanation:
      'Deepfakes use AI (specifically generative adversarial networks) to create convincing video or audio of real people. In 2023, a deepfake video of Ukrainian president Zelensky appeared to show him telling troops to surrender — it was quickly debunked, but spread rapidly before corrections could catch up. Deepfakes pose a serious threat to trust in video evidence.',
  },
  {
    question: 'What does an automated fact-checking tool like ClaimBuster do?',
    options: [
      'It rewrites inaccurate news stories to make them correct',
      'It scans spoken or written statements in real time and flags claims that are verifiable and potentially worth checking against evidence',
      'It rates news organisations on their overall accuracy over time',
      'It automatically removes misinformation from social media platforms',
    ],
    correctIndex: 1,
    explanation:
      'ClaimBuster, developed at the University of Texas, uses natural language processing to scan political speeches, debates, and news in real time. It flags statements that are check-worthy — factual claims that can be verified against data. It does not verify the claims itself; it helps human fact-checkers find what to investigate. Full Fact in the UK uses similar technology to monitor what politicians say during debates.',
  },
  {
    question: 'Which of the following is a warning sign that a news article might have been written entirely by AI?',
    options: [
      'The article has a named author and a publication date',
      'The article contains specific quotes from named individuals with sources listed',
      'The article has unusually smooth, generic prose with no specific named sources, and the publication has no editorial history',
      'The article is very short — fewer than 100 words',
    ],
    correctIndex: 2,
    explanation:
      'AI-generated articles often have a distinctive style: very smooth, slightly generic prose with no specific sourcing, no named journalist, no strong point of view, and sometimes odd factual errors mixed with plausible-sounding content. Legitimate news organisations have editorial standards, named reporters, and specific sourcing. If an article reads very fluently but has no clear origin or quotes, treat it with extra scepticism.',
  },
  {
    question: 'What approach have news organisations like the BBC and The Guardian taken to AI-generated content?',
    options: [
      'They have banned all use of AI in their newsrooms entirely',
      'They have replaced most human journalists with AI writing systems to cut costs',
      'They have published editorial policies that allow limited AI use (e.g. for transcription or summarisation) but require human oversight and transparency labelling',
      'They use AI only for advertising and never in editorial content',
    ],
    correctIndex: 2,
    explanation:
      'Major news organisations have not banned AI but have set clear boundaries. The BBC, Guardian, and New York Times have published policies that permit AI for specific tasks like transcription, research assistance, or generating first drafts of data-heavy stories — but require human editorial oversight before publication. Several now label AI-assisted content. The concern is not AI assistance itself, but AI replacing human editorial judgment and accountability.',
  },
]

export function AIAndJournalism() {
  useMarkVisited('ai-and-journalism')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4F0;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and journalism
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How newsrooms use AI to report faster, why deepfakes threaten
            trust, and how to tell real news from AI-generated noise.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-journalism" />
          <ShareButton lessonTitle="AI and journalism" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI in the newsroom</h2>
          <p className="text-gray-600 leading-relaxed">
            Journalists were among the first professionals to feel AI&rsquo;s impact &mdash; and among the
            first to push back. The technology has been entering newsrooms for over a decade, quietly
            automating the most routine parts of reporting while sparking serious debates about what
            journalism is actually for.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CA;',
                label: 'Automated earnings reports',
                text: "The Associated Press partnered with Automated Insights in 2014 to generate quarterly earnings reports automatically. AI reads structured financial data — revenue, profit, guidance — and writes readable short articles. The AP now publishes around 3,000 earnings stories per quarter this way, far more than its human team could ever produce.",
              },
              {
                icon: '&#x1F3A4;',
                label: 'Transcription and summarisation',
                text: "Tools like Whisper (OpenAI) and Otter.ai transcribe interviews and press conferences in minutes. Journalists who once spent hours transcribing recordings now use AI to get an instant draft, freeing time for analysis. Reuters uses AI to generate first-draft leads from sports data in real time.",
              },
              {
                icon: '&#x1F50D;',
                label: 'Story leads and pattern detection',
                text: "Reuters Lynx Insight scans thousands of data points — financial reports, economic statistics, social media — to flag potential stories worth investigating. It spotted unusual trading patterns before several market events. AI is particularly good at finding anomalies in large datasets that a human reporter might miss.",
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
          <h2 className="text-2xl font-bold text-gray-800">The synthetic media threat</h2>
          <p className="text-gray-600 leading-relaxed">
            The same AI that helps journalists report faster can also be used to fabricate
            convincing false content at scale. This is one of the defining challenges for media
            trust in the 2020s.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F3A5;',
                label: 'Deepfake videos',
                text: "In March 2022, a deepfake video appeared showing Ukrainian president Zelensky telling his troops to surrender. It was quickly identified as fake and removed — but not before spreading widely on social media. Creating such a video now takes hours, not months. The technology is improving faster than detection methods.",
              },
              {
                icon: '&#x270D;&#xFE0F;',
                label: 'AI-written fake articles',
                text: "AI can generate fluent, plausible-sounding news articles at scale. In 2023, NewsGuard identified over 400 websites publishing almost entirely AI-generated content, often with little editorial oversight. These sites sometimes publish false information that looks like legitimate journalism.",
              },
              {
                icon: '&#x1F916;',
                label: 'Coordinated inauthentic behaviour',
                text: "State actors and political groups use AI to generate fake social media accounts, comments, and articles at a scale that was previously impossible. A single operator can now appear to be thousands of real people, manufacturing the appearance of grassroots support for a narrative.",
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
          <h2 className="text-2xl font-bold text-gray-800">Automated fact-checking</h2>
          <p className="text-gray-600 leading-relaxed">
            Fact-checkers have always been outnumbered by the claims they need to check. AI is
            helping to close that gap.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4AC;',
                label: 'ClaimBuster (University of Texas)',
                text: "ClaimBuster scans political speeches and debates in real time and flags statements that are 'check-worthy' — factual claims that could be verified against evidence. It scored claims during the 2020 US election debates, giving human fact-checkers a prioritised list to work through.",
              },
              {
                icon: '&#x1F1EC;&#x1F1E7;',
                label: 'Full Fact (UK)',
                text: "Full Fact uses AI to monitor what UK politicians say during PMQs and debates, automatically flagging repeated or potentially misleading claims. It has checked thousands of claims that would have been impossible to process manually. Its AI tools are now used by fact-checkers in other countries too.",
              },
              {
                icon: '&#x26A0;&#xFE0F;',
                label: 'Limitations of automated fact-checking',
                text: "AI can spot a claim and compare it against known data, but it struggles with nuance. Whether a statistic is 'misleading' often depends on context, framing, and what question is being answered. Automated tools are good at triaging what needs checking — human judgment still determines whether something is actually false.",
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
          <h2 className="text-2xl font-bold text-gray-800">How to spot AI-generated news</h2>
          <p className="text-gray-600 leading-relaxed">
            You don&rsquo;t need special tools to develop a healthy scepticism. Here are the
            warning signs to look for.
          </p>
          <div className="bg-amber-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-amber-800 text-sm">Red flags</p>
            <ul className="text-amber-700 text-sm space-y-1.5 leading-relaxed list-disc list-inside">
              <li>No named author, or a very generic author name with no other bylines</li>
              <li>Unusually smooth prose &mdash; reads fluently but says very little of substance</li>
              <li>No specific quotes from named individuals &mdash; just vague &ldquo;experts say&rdquo;</li>
              <li>Publication is very new, has no editorial history, or publishes hundreds of articles per day</li>
              <li>Claims match a particular political narrative very neatly</li>
              <li>Factual details that sound plausible but cannot be verified anywhere else</li>
            </ul>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            When in doubt: search for the same story in a source you already trust. If three different
            reputable organisations report the same facts independently, it is much more likely to be true.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Responsible AI journalism</h2>
          <p className="text-gray-600 leading-relaxed">
            The organisations doing journalism well in the AI era are being transparent about how they
            use the technology &mdash; and clear about what it cannot replace.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4DC;',
                label: 'Editorial policies',
                text: "The BBC, The Guardian, and the New York Times have all published detailed AI usage policies. These allow AI for tasks like transcription, data analysis, and first drafts of structured reports — but require human editorial sign-off before publication. AI-assisted content is labelled.",
              },
              {
                icon: '&#x1F91D;',
                label: 'Human accountability',
                text: "A journalist puts their name on a story and is accountable for its accuracy. AI-generated content has no such accountability mechanism. This is why most policies require a named human journalist to take responsibility for every published article — regardless of how much AI helped produce it.",
              },
              {
                icon: '&#x1F310;',
                label: 'The business pressure',
                text: "Many local news organisations have been devastated by falling ad revenue. AI offers a way to publish more content more cheaply — which creates real pressure to cut corners. The risk is that efficiency-focused publishers use AI to replace rather than assist journalism, producing high-volume low-quality content that looks like news.",
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

        <ReviewLaterButton lessonId="ai-and-journalism" />
        <LessonNote lessonId="ai-and-journalism" />

        <Quiz questions={quizQuestions} lessonId="ai-and-journalism" lessonTitle="AI and journalism" />

        <LessonRating lessonId="ai-and-journalism" />
        <RelatedLessons currentId="ai-and-journalism" />
        <NextLesson currentId="ai-and-journalism" />
      </div>
    </div>
  )
}
