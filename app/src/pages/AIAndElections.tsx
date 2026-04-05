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

const LESSON_TITLE = 'AI and elections'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is microtargeting in the context of political campaigns?',
    options: [
      'Sending campaign leaflets to every house in a specific postcode',
      'Using AI to analyse personal data and show different political messages to different voters based on their individual profiles and predicted concerns',
      'Placing campaign posters in locations where many people walk past',
      'Targeting voters who have already decided who to vote for to reinforce their choice',
    ],
    correctIndex: 1,
    explanation:
      "Microtargeting uses AI to build detailed profiles of individual voters from data such as social media activity, consumer purchases, location history, and demographic records. The AI then predicts what issues each voter cares about and serves them personalised political adverts designed to resonate with their specific fears or hopes. Cambridge Analytica's work in the 2016 US election and Brexit referendum brought this practice to public attention, though campaigns of all sizes now use similar techniques.",
    hint: 'Think about what makes this different from traditional advertising.',
  },
  {
    question: 'What makes a deepfake video of a politician particularly dangerous during an election?',
    options: [
      'Deepfakes are always obviously fake, so they cause unnecessary panic',
      'Deepfakes are expensive to make, so only major parties can afford them',
      'A convincing AI-generated video can show a candidate saying something they never said and spread virally on social media before fact-checkers can respond — potentially changing how millions of people vote',
      'Deepfakes can only be made of people who have appeared on television',
    ],
    correctIndex: 2,
    explanation:
      "Deepfake videos use AI to replace a person's face and voice so convincingly that many viewers cannot tell they are fake. In a fast-moving election, a viral deepfake clip can spread to millions of people within hours — long before official denials or fact-checks reach the same audience. In 2024, deepfake robocalls imitating US President Biden were sent to New Hampshire voters telling them not to vote in the primary. The time between a fake going viral and it being debunked is the window in which the damage is done.",
    hint: 'Consider the speed of social media versus the speed of fact-checking.',
  },
  {
    question: 'Which of the following is a real legal protection introduced in the UK specifically because of AI election risks?',
    options: [
      'A ban on all social media advertising during election periods',
      'A requirement that all AI-generated political content must include a clear label stating it was made using AI',
      'A law making it illegal to share any political opinion using an AI tool',
      'A rule that only parties with more than 10 MPs can use AI in their campaigns',
    ],
    correctIndex: 1,
    explanation:
      "The UK's Electoral Commission and the Government began requiring clear disclosure labels on AI-generated political advertising as part of efforts to protect the 2024 general election. The Online Safety Act also introduced new obligations on platforms to tackle manipulative content. In the US, several states introduced laws requiring AI-generated political adverts to be labelled. The EU AI Act classifies AI systems used to influence elections as high-risk, requiring transparency. These rules are still evolving as the technology develops faster than legislation.",
    hint: 'Think about transparency — making sure voters know what they are seeing.',
  },
  {
    question: 'What is a bot network in the context of elections, and why is it a problem?',
    options: [
      'A group of robots that physically deliver campaign leaflets door to door',
      'A network of AI-controlled fake social media accounts that flood platforms with coordinated political messages to make a fringe viewpoint appear popular — a technique called astroturfing',
      'A system where volunteers text voters on behalf of a campaign using a central computer',
      'An AI tool that helps election officials count votes more quickly and accurately',
    ],
    correctIndex: 1,
    explanation:
      "Bot networks are collections of automated fake accounts — sometimes hundreds of thousands — that post, like, share, and comment in coordinated ways to make a political view appear far more widely held than it really is. This is called astroturfing (creating a fake grassroots movement). AI makes bots harder to detect because they can now write varied, plausible-sounding text and even generate profile photos. Platforms like X (Twitter), Facebook, and TikTok invest heavily in bot detection, but determined actors find new workarounds. The Oxford Internet Institute has documented bot activity in elections across more than 80 countries.",
    hint: 'The clue is in the word "network" — many fake accounts working together.',
  },
]

export function AIAndElections() {
  useMarkVisited('ai-and-elections')

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F5F3;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and elections
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI is being used in political campaigns — from targeting voters
            to generating deepfake candidates — and what democracies are doing
            to fight back.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-elections" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Why elections matter for AI</h2>
          <p className="text-gray-600 leading-relaxed">
            Democracy depends on voters making informed choices based on reliable information. AI
            does not change the fundamental mechanics of elections — but it does change the
            information environment around them. AI can be used to <strong>persuade, mislead,
            suppress, and amplify</strong> on a scale that was simply not possible before.
          </p>
          <p className="text-gray-600 leading-relaxed">
            In 2024, more people voted in elections around the world than in any previous year —
            covering India, the US, the UK, the EU, and dozens of other countries. AI played a
            visible role in all of them. Understanding how it works helps you navigate what you
            see online during campaign periods.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-blue-800 text-sm">What AI gives political campaigns</p>
            <ul className="text-blue-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>The ability to target individual voters with personalised messages at low cost</li>
              <li>Tools to generate enormous amounts of content — adverts, posts, articles — quickly</li>
              <li>Ways to test which messages work best on which groups of voters</li>
              <li>The ability to create realistic fake audio and video of political figures</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Microtargeting: knowing what each voter worries about</h2>
          <p className="text-gray-600 leading-relaxed">
            Traditional political advertising is a blunt tool — a poster, a TV ad, a leaflet — seen
            by everyone. <strong>Microtargeting</strong> is the opposite: using AI to build a
            detailed profile of each voter and show them a personalised message designed specifically
            for their concerns.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Data used to build these profiles can come from many sources:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4F1;',
                label: 'Social media activity',
                text: 'What you like, share, comment on, and follow reveals your political leanings, concerns, and values — often more accurately than you would guess.',
              },
              {
                icon: '&#x1F6D2;',
                label: 'Consumer data',
                text: 'What you buy — organic food, hunting equipment, luxury goods — is sold by data brokers and used to infer your lifestyle, income, and values.',
              },
              {
                icon: '&#x1F4CD;',
                label: 'Location history',
                text: 'Where you go — church, trade union meetings, gun ranges, climate marches — can be inferred from your phone and used to profile your political views.',
              },
              {
                icon: '&#x1F5F3;&#xFE0F;',
                label: 'Voter roll data',
                text: 'Electoral registers are public in many countries. Combined with other data, they allow campaigns to build profiles of individual registered voters.',
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
          <p className="text-gray-600 leading-relaxed">
            Cambridge Analytica claimed to have built psychological profiles of 87 million Facebook
            users to target voters in the 2016 US election and Brexit referendum. The actual
            effectiveness of that specific work remains disputed — but the techniques it publicised
            are now widely used.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Deepfakes: when you cannot trust what you see</h2>
          <p className="text-gray-600 leading-relaxed">
            A <strong>deepfake</strong> is a video, audio clip, or image generated by AI that shows
            a real person doing or saying something they never did. The technology has advanced
            dramatically: what once took a specialist weeks can now be done in minutes with
            consumer tools.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F3A5;',
                label: 'Video deepfakes',
                text: "AI replaces a person's face and lip movements so they appear to say something they never said. A convincing deepfake of a party leader admitting corruption or making an offensive remark could go viral hours before it is debunked.",
              },
              {
                icon: '&#x1F3A4;',
                label: 'Voice deepfakes',
                text: "AI clones a politician's voice from recordings. In January 2024, deepfake robocalls using a cloned voice of President Biden told New Hampshire Democratic voters not to vote in the primary — a direct attempt to suppress turnout.",
              },
              {
                icon: '&#x1F5BC;&#xFE0F;',
                label: 'Image deepfakes',
                text: 'AI-generated photos of fake events — a candidate at a controversial rally they never attended, shaking hands with a disgraced figure — are shared as if real.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-red-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-red-800 text-sm mb-0.5">{label}</p>
                  <p className="text-red-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-red-50 rounded-xl p-4">
            <p className="font-semibold text-red-800 text-sm mb-1">The liar's dividend</p>
            <p className="text-red-700 text-sm leading-relaxed">
              Researchers warn about a secondary effect: even real footage can now be dismissed as
              "probably a deepfake" by politicians who find it inconvenient. The existence of
              deepfake technology gives bad actors a way to deny authentic evidence.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Bot networks and AI-generated disinformation</h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Bot networks</strong> are collections of automated fake social media accounts that
            post, like, share, and amplify content in a coordinated way — making a fringe political
            view appear far more popular than it actually is. This technique is called
            <strong> astroturfing</strong> (creating a fake grassroots movement).
          </p>
          <p className="text-gray-600 leading-relaxed">
            AI has made bots far harder to detect. Older bots repeated simple phrases. Modern
            AI-powered bots can hold conversations, vary their language, and generate realistic
            profile photos. The Oxford Internet Institute has documented coordinated bot activity in
            elections across more than 80 countries.
          </p>
          <p className="text-gray-600 leading-relaxed">
            AI also allows campaigns or bad actors to generate huge volumes of content cheaply:
            fake news articles, fake opinion polls, fake quotes attributed to real journalists, and
            fictitious grassroots petitions.
          </p>
          <div className="bg-orange-50 rounded-xl p-4">
            <p className="font-semibold text-orange-800 text-sm mb-1">What this means for you</p>
            <p className="text-orange-700 text-sm leading-relaxed">
              When you see a political claim going viral, ask: is there a credible, named source?
              Has a reliable news organisation reported it? Has a fact-checking site like Full Fact
              or Snopes covered it? A story shared by thousands of accounts that no mainstream
              outlet has picked up is a warning sign.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What democracies are doing about it</h2>
          <p className="text-gray-600 leading-relaxed">
            Governments, regulators, and platforms are all responding — though the technology
            usually moves faster than the rules.
          </p>
          <div className="space-y-3">
            {[
              {
                number: '1',
                label: 'Labelling AI-generated political content',
                text: 'The UK Electoral Commission now requires AI-generated political adverts to carry clear disclosures. Several US states have passed similar laws. The EU AI Act classifies election-influencing AI as high-risk, with strict transparency requirements.',
              },
              {
                number: '2',
                label: 'Platform rules',
                text: 'Meta, Google, and X require political advertisers to disclose when they use AI-generated content. YouTube labels AI-generated content in sensitive areas. All major platforms invest in detecting and removing fake accounts.',
              },
              {
                number: '3',
                label: 'Watermarking and detection',
                text: "Tech companies including Google and Microsoft are developing tools to embed invisible watermarks in AI-generated content, so it can be identified even after editing. Researchers are also building deepfake detection tools — though it is an arms race.",
              },
              {
                number: '4',
                label: 'Media literacy',
                text: 'Organisations like Full Fact (UK) and First Draft work to debunk election misinformation quickly. School curricula in several countries now include lessons on spotting manipulation online.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How to be a more informed voter</h2>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F50D;',
                label: 'Reverse image search before sharing',
                text: 'Right-click any political image and use Google Images or TinEye to check where it originally came from. AI-generated images often appear nowhere else online.',
              },
              {
                icon: '&#x2714;&#xFE0F;',
                label: 'Check fact-checking sites',
                text: 'Full Fact (UK), Snopes (US), and BBC Verify all fact-check viral political claims. If a story sounds shocking, check before sharing.',
              },
              {
                icon: '&#x1F4F0;',
                label: 'Follow named journalists',
                text: 'AI-generated misinformation is usually anonymous or attributed to vague "sources". Real journalism has named journalists and editors who are accountable for what they publish.',
              },
              {
                icon: '&#x23F8;&#xFE0F;',
                label: 'Pause before sharing outrage',
                text: 'Content designed to make you angry or shocked is most likely to be shared without thinking. Pause, check the source, and decide if it is real before amplifying it.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-indigo-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-indigo-800 text-sm mb-0.5">{label}</p>
                  <p className="text-indigo-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <p className="font-semibold text-blue-800 mb-2">Key takeaway</p>
          <p className="text-blue-700 text-sm leading-relaxed">
            AI has made it cheaper and easier to mislead voters at scale — through microtargeting,
            deepfakes, bot networks, and AI-generated disinformation. Laws and platform rules are
            catching up, but the best protection is your own critical thinking: slow down, check
            sources, and be especially sceptical of shocking or outrage-inducing content shared
            just before an election.
          </p>
        </div>

        <ReviewLaterButton lessonId="ai-and-elections" />
        <LessonNote lessonId="ai-and-elections" lessonTitle={LESSON_TITLE} />

        <Quiz questions={quizQuestions} lessonId="ai-and-elections" lessonTitle={LESSON_TITLE} />

        <LessonFeedback lessonId="ai-and-elections" />
        <LessonRating lessonId="ai-and-elections" />
        <RelatedLessons currentId="ai-and-elections" />
        <NextLesson currentId="ai-and-elections" />
      </div>
    </div>
  )
}
