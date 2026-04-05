import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { useLessonVisit } from '../hooks/useLessonVisit'
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
    question: 'What was the main criticism of Cambridge Analytica\'s use of data in the 2016 US election?',
    options: [
      'They hacked voting machines to change results',
      'They harvested Facebook data without proper consent and used it to build psychological profiles for targeted political advertising',
      'They published false voting schedules to confuse voters',
      'They used AI to write fake news articles',
    ],
    correctIndex: 1,
    explanation:
      'Cambridge Analytica obtained the Facebook data of up to 87 million people without meaningful consent, built detailed psychological profiles, and used these to serve highly targeted political adverts. The scandal raised major concerns about data privacy and the manipulation of democratic elections through AI-driven micro-targeting.',
  },
  {
    question: 'What is "predictive policing"?',
    options: [
      'Police using lie detectors powered by AI',
      'Using AI to analyse crime data and predict where crimes are likely to occur or who is likely to commit them',
      'Using AI to automatically write police reports',
      'A system where AI decides who to arrest',
    ],
    correctIndex: 1,
    explanation:
      'Predictive policing uses AI to analyse historical crime data, demographics, and other signals to predict crime hotspots or flag individuals deemed at higher risk of offending. Critics argue it can entrench racial bias (if historical policing was discriminatory, the AI learns those patterns) and create self-fulfilling prophecies by sending more police to certain areas.',
  },
  {
    question: 'What is a "deepfake"?',
    options: [
      'A very deep underwater photograph',
      'AI-generated synthetic media that makes someone appear to say or do something they never did',
      'A secret government surveillance programme',
      'An AI system that monitors social media posts',
    ],
    correctIndex: 1,
    explanation:
      'Deepfakes are AI-generated videos, audio recordings, or images that convincingly depict real people saying or doing things they never said or did. They pose a serious threat to democracy when used to create fake speeches by politicians or false evidence of events.',
  },
  {
    question: 'Why is facial recognition in public spaces considered controversial?',
    options: [
      'The cameras are too expensive',
      'It is slower than human identification',
      'It creates mass surveillance, has higher error rates for darker-skinned people, and can chill free expression and protest',
      'It only works in daylight',
    ],
    correctIndex: 2,
    explanation:
      'Public facial recognition is controversial for several reasons: it enables mass surveillance of citizens; studies show significantly higher error rates for women and people with darker skin tones (leading to wrongful identifications); and the knowledge of being watched may deter people from attending protests or political gatherings — a chilling effect on democratic participation.',
  },
  {
    question: 'What does "algorithmic transparency" mean in the context of government AI?',
    options: [
      'Making government AI systems invisible to the public',
      'Requiring government AI systems to be open about how they work, what data they use, and how to challenge their decisions',
      'Making all government computers available for public use',
      'Publishing the source code of every government system online',
    ],
    correctIndex: 1,
    explanation:
      "Algorithmic transparency means that when governments use AI to make decisions affecting citizens — benefits eligibility, bail decisions, visa applications — those systems should be explainable: what factors they consider, how to challenge a decision, and who is accountable when things go wrong. It's a fundamental principle of accountable government.",
  },
]

export function AIAndDemocracy() {
  useMarkVisited('ai-and-democracy')
  useLessonVisit('ai-and-democracy')
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3DB;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and democracy
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Surveillance, election campaigns, government decisions, and public trust &mdash;
            how AI is reshaping the way societies govern themselves.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-democracy" />
          <ShareButton lessonTitle="ai-and-democracy" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Democracy meets the algorithm</h2>
          <p className="text-gray-600 leading-relaxed">
            Democratic societies rely on informed citizens making free choices. AI introduces
            powerful new forces into this process: the ability to surveil populations at scale,
            to target individuals with personalised messages, and to make government decisions
            automatically. Sometimes this is beneficial. Sometimes it is deeply alarming.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This lesson explores how AI is already being used in elections, policing, and
            government &mdash; and what citizens need to know to stay informed and hold power to account.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-blue-800 text-sm">Did you know?</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              More than 70 countries held national elections in 2024 &mdash; the largest election
              year in history. AI-generated disinformation, synthetic media, and AI-powered
              micro-targeting were documented in campaigns on every continent.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI in election campaigns</h2>
          <p className="text-gray-600 leading-relaxed">
            Political campaigns have always tried to persuade voters. What has changed is the
            scale, precision, and automation that AI enables.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F3AF;',
                label: 'Micro-targeting',
                text: 'AI analyses vast amounts of data about voters — browsing history, social media activity, purchasing patterns, demographic data — to identify which messages will be most persuasive to each individual. Rather than one campaign message for everyone, campaigns can serve thousands of variants tailored to what each voter cares about.',
              },
              {
                icon: '&#x1F4F9;',
                label: 'Deepfakes and synthetic media',
                text: "AI can now generate convincing fake videos of politicians saying things they never said. In 2024, AI-generated audio of President Biden was used in robocalls ahead of the New Hampshire primary, instructing Democrats not to vote. It was a hoax — but it worked on some people.",
              },
              {
                icon: '&#x1F916;',
                label: 'AI-written propaganda',
                text: "Large language models can generate thousands of persuasive political articles, social media posts, and comments at near-zero cost. This makes it cheap to flood the information environment with AI-generated content designed to shift opinion or sow confusion.",
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
          <div className="bg-amber-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-amber-800 text-sm">Did you know?</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              Cambridge Analytica, the data firm behind controversial targeting in the 2016 US
              and UK Brexit campaigns, harvested the Facebook data of up to 87 million people
              without their consent. The scandal led to a dramatic shift in how tech companies
              handle personal data for political advertising.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Surveillance: facial recognition in public spaces</h2>
          <p className="text-gray-600 leading-relaxed">
            Facial recognition technology can identify individuals from CCTV footage in real time.
            Several countries have deployed it in public spaces &mdash; train stations, airports,
            and city streets &mdash; primarily for policing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-red-50 border border-red-100 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-red-800 text-sm">The concerns</p>
              <p className="text-red-700 text-sm leading-relaxed">
                Studies show higher error rates for women and people with darker skin, leading to
                wrongful identifications. Mass surveillance can deter people from attending protests
                or political rallies. Several people in the UK and US have been wrongly arrested
                based on facial recognition matches.
              </p>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-green-800 text-sm">The arguments for</p>
              <p className="text-green-700 text-sm leading-relaxed">
                Police say facial recognition helps identify wanted criminals and missing persons quickly.
                Some trials have led to genuine arrests of serious offenders. Proponents argue the
                technology can be used carefully with proper oversight.
              </p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            The EU AI Act bans real-time facial recognition in public spaces for law enforcement
            in most circumstances &mdash; one of the strongest such restrictions globally. The UK and
            US have taken a more permissive approach, though with ongoing legal challenges.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI in government decisions</h2>
          <p className="text-gray-600 leading-relaxed">
            Governments increasingly use AI to make or inform decisions that directly affect
            citizens&apos; lives. This can be efficient &mdash; but it raises serious questions about
            accountability, fairness, and what happens when the algorithm is wrong.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'Benefits and welfare',
                text: "The UK's Universal Credit system uses automated checks to verify eligibility. Australia's 'Robodebt' scandal saw an automated system wrongly issue 470,000 debt notices to welfare recipients — it matched income records imprecisely, creating debts that didn't exist. The programme was declared unlawful and the government paid back over AU$1.8 billion.",
              },
              {
                label: 'Predictive policing',
                text: "AI systems that predict crime hotspots or flag individuals at risk of offending are used by police forces in many countries. Critics argue these systems concentrate policing on already over-policed communities, creating self-fulfilling prophecies.",
              },
              {
                label: 'Criminal justice',
                text: "In the US, the COMPAS algorithm was used in some states to predict the likelihood that defendants would reoffend — influencing bail and sentencing decisions. An investigation by ProPublica found it was more likely to incorrectly flag Black defendants as high risk and white defendants as low risk.",
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-gray-800 text-sm">{label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-blue-800 text-sm">Did you know?</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              The Netherlands was ordered by a court to shut down its SyRI system &mdash; an AI that
              analysed 17 government data sources to identify citizens likely to commit welfare
              fraud. The court ruled it violated human rights because citizens had no way to
              understand or challenge how they were assessed.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What can you do?</h2>
          <p className="text-gray-600 leading-relaxed">
            As a citizen, you have more power than you might think.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F50D;',
                label: 'Be a critical consumer of political content',
                text: "When you see striking political content online — especially shocking video clips or quotes — pause before sharing. Ask: could this be AI-generated? Does this source have a track record of accuracy? Slow down, verify, then decide.",
              },
              {
                icon: '&#x1F4DC;',
                label: 'Know your rights',
                text: "If a government system makes an automated decision that affects you, ask for an explanation and ask for human review. In many countries, this is a legal right. Do not accept 'the computer says no' as a final answer.",
              },
              {
                icon: '&#x1F5F3;&#xFE0F;',
                label: 'Support algorithmic transparency',
                text: "Advocate for laws requiring governments to disclose when AI is used in decisions, how the systems work, and what appeal processes exist. Citizens and civil society organisations are the main check on government AI overreach.",
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

        <Quiz lessonId="ai-and-democracy" questions={quizQuestions} />
        <LessonFeedback lessonId="ai-and-democracy" />
        <LessonRating lessonId="ai-and-democracy" />
        <ReviewLaterButton lessonId="ai-and-democracy" />
        <LessonNote lessonId="ai-and-democracy" />
        <RelatedLessons currentId="ai-and-democracy" />
        <NextLesson currentId="ai-and-democracy" />
      </div>
    </div>
  )
}
