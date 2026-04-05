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

const LESSON_TITLE = 'AI and film and TV'

const KEY_TAKEAWAYS = [
  'AI de-ageing tools (as seen in The Irishman and various Marvel films) use machine learning to digitally make actors look younger or older — what took months of VFX work now takes days.',
  'Streaming recommendation algorithms at Netflix, Disney+, and Amazon Prime are built on AI: they analyse viewing patterns across millions of users to predict what you will want to watch next.',
  'AI dubbing tools from companies like ElevenLabs and Papercup can clone an actor\'s voice and lip-sync translated dialogue to their mouth movements — making foreign-language versions far more convincing.',
  'AI scriptwriting tools can analyse thousands of successful screenplays to suggest plot structures, flag pacing issues, and generate dialogue options — though professional writers remain firmly in charge of creative decisions.',
  'The 2023 Hollywood writers\' and actors\' strikes put AI firmly on the agenda: the resulting agreements require studios to disclose AI use and restrict the use of AI-generated content in ways that replace human creative work.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What AI technique was used in The Irishman to make Robert De Niro look younger?',
    options: [
      'The filmmakers hired a younger actor to play De Niro and digitally replaced his face using generative adversarial networks trained on old footage',
      'Machine learning models were trained on decades of footage of De Niro to digitally reduce the appearance of wrinkles, smooth skin, and alter facial structure frame by frame',
      'The film used traditional prosthetics and make-up for the de-ageing effect — no AI was involved in The Irishman',
      'AI tools adjusted the lighting and colour grading in post-production to make older actors appear younger without altering their faces directly',
    ],
    correctIndex: 1,
    explanation:
      "Martin Scorsese's The Irishman (2019) used Industrial Light & Magic's proprietary AI de-ageing technology to show Robert De Niro, Al Pacino, and Joe Pesci at various stages of their characters' lives. Machine learning models were trained on extensive archival footage of each actor to understand how their faces changed over decades. The system could then render younger versions frame by frame, in real time with the performance capture. Traditional de-ageing required extensive prosthetics and make-up or months of manual VFX work per shot; AI reduced this dramatically while maintaining the actors' real performances.",
    hint: 'Think about training a model on old footage to understand how a face used to look.',
  },
  {
    question: 'How do streaming platforms like Netflix use AI for content recommendations?',
    options: [
      'Netflix employs teams of human curators who watch every show and manually recommend content to individual subscribers based on their account history',
      'Netflix\'s AI analyses what you watch, how long you watch it, when you pause or rewind, what other users with similar tastes enjoy, and thousands of other signals to predict what you will watch next',
      'Netflix uses a simple rule-based system: it recommends shows in the same genre as the last show you completed, without using machine learning or AI',
      'The recommendations are primarily driven by advertising deals — studios pay Netflix to promote their content and the AI simply implements these commercial arrangements',
    ],
    correctIndex: 1,
    explanation:
      "Netflix's recommendation system is one of the most sophisticated AI applications in entertainment. It analyses not just what you watch but how you watch it: do you skip the intro? Do you rewind certain scenes? Do you watch in one session or spread across days? It compares your behaviour with millions of other users to find those with similar tastes (collaborative filtering), analyses the content itself (genre, tone, pacing, cast), and considers context (time of day, device, how long you have been browsing). Netflix estimates its recommendation algorithm is worth over $1 billion annually in reduced subscription cancellations.",
    hint: 'Think about all the signals beyond just which shows you finished.',
  },
  {
    question: 'What is AI dubbing and how does it differ from traditional dubbing?',
    options: [
      'AI dubbing uses the original actors\' voices recorded in the target language — AI simply adjusts the audio timing to match lip movements',
      'AI dubbing can clone an actor\'s voice characteristics, generate speech in the target language using that voice, and adjust lip movements in the video to match — making dubbed versions more convincing than traditional dubbing',
      'AI dubbing replaces the original actors\' voices with entirely synthetic voices generated from text, without any reference to the original performance',
      'AI dubbing is identical to traditional dubbing but uses speech recognition to automatically generate subtitles, which voice actors then read aloud in a recording studio',
    ],
    correctIndex: 1,
    explanation:
      "Traditional dubbing records local voice actors speaking the translated script, then edits the audio to roughly match lip movements — the result is often visibly out of sync. AI dubbing tools from companies like ElevenLabs, Papercup, and Deepdub work differently: they can clone the original actor's voice characteristics (tone, accent, emotional quality) and generate new speech in the target language using that voice, so dubbed lines sound like the original actor speaking the other language. Some tools also manipulate the video to adjust mouth movements to better match the dubbed audio. The result is dramatically more convincing than traditional dubbing.",
    hint: 'Think about what makes traditional dubbing look awkward and how AI fixes it.',
  },
  {
    question: 'What did the 2023 Hollywood writers\' and actors\' strikes achieve regarding AI?',
    options: [
      'The strikes resulted in a complete ban on all use of AI in film and television production — studios agreed not to use any AI tools until new legislation is passed',
      'The agreements reached required studios to disclose when AI is used and placed restrictions on using AI-generated content to replace human creative work — writers and actors retained rights over their likenesses and work',
      'The strikes ended without any agreement on AI — studios retained complete freedom to use AI however they choose and the question was deferred to future negotiations',
      'The agreements banned AI from scriptwriting entirely but allowed studios unlimited freedom to use AI to generate digital versions of actors without permission or additional payment',
    ],
    correctIndex: 1,
    explanation:
      'The 2023 Writers Guild of America (WGA) and Screen Actors Guild (SAG-AFTRA) strikes in Hollywood were, in part, driven by fears about AI replacing human creative work. The WGA agreement required studios to disclose when AI tools are used in the writing process and established that AI-generated content cannot be used as source material in ways that reduce writers\' credits or compensation. The SAG-AFTRA agreement established protections for actors\' digital likenesses — studios cannot create AI replicas of actors without their consent and appropriate compensation. These agreements set important precedents for how AI use in creative industries should be governed.',
    hint: 'Think about what writers and actors were most worried about losing.',
  },
]

export function AIAndFilmAndTV() {
  useMarkVisited('ai-and-film-and-tv')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3AC;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and film and TV
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI is used behind the scenes in film and television — de-ageing effects, AI
            scriptwriting tools, streaming recommendations, AI dubbing, and the big debate
            about creativity, jobs, and what makes storytelling human.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-film-and-tv" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How Hollywood already uses AI — de-ageing, deepfakes, and digital doubles</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI in film is not a future prospect — it has been used in major productions for years, mostly invisibly.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-slate-50 dark:bg-slate-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F474;</span>
              <div>
                <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-0.5">De-ageing actors</p>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">Martin Scorsese's The Irishman (2019) used AI to make Robert De Niro appear to be in his 30s, 40s, and 50s in the same film. Machine learning models trained on decades of archival footage could render younger faces frame by frame, maintaining the real performance. Marvel films have used similar technology for characters like Captain America and Nick Fury.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-slate-50 dark:bg-slate-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F47B;</span>
              <div>
                <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-0.5">Recreating deceased actors</p>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">Star Wars: Rogue One recreated the likeness of Peter Cushing (who died in 1994) using AI and VFX. James Dean's estate announced plans to use AI to put him in a new film. These uses raise serious ethical questions about consent, legacy, and the rights of deceased people over their image.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-slate-50 dark:bg-slate-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4A5;</span>
              <div>
                <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-0.5">AI stunt doubles and virtual production</p>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">The Mandalorian uses StageCraft — a vast LED volume that displays AI-rendered environments in real time around the actors. Instead of filming on location or in front of a green screen, actors perform in front of photorealistic AI-generated backgrounds. AI renders the correct perspective in real time as cameras move.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI scriptwriting tools — assistants, not authors</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI scriptwriting tools have been quietly used in Hollywood for years — not to write scripts, but to analyse them.
          </p>
          <div className="space-y-2">
            {[
              'Script analysis tools like ScriptBook and Cinelytic analyse thousands of produced films to predict how a new screenplay might perform commercially — rating characters, pacing, and marketability',
              'AI tools flag potential dialogue issues: lines that feel unnatural, characters whose voices sound identical, scenes where the pacing drops',
              'Some writers use AI to generate alternative dialogue options for scenes they are stuck on — like brainstorming with an assistant who has read every screenplay ever written',
              'AI can generate scene outlines or first drafts — but professional writers describe these as starting points, not finished work, requiring extensive human rewriting',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-purple-600 dark:text-purple-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-purple-50 dark:bg-purple-950 rounded-xl p-4">
            <p className="text-purple-800 dark:text-purple-200 text-sm leading-relaxed">
              <strong>What AI cannot do:</strong> AI can analyse patterns in successful screenplays, but the core creative act — finding a story worth telling, making it resonate, giving characters genuine depth — requires human experience and judgment. Every screenwriter interviewed on this topic emphasises that AI-generated dialogue sounds plausible but feels hollow without substantial human revision.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Streaming recommendations — how Netflix decides what you watch next</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Netflix has said its recommendation algorithm is worth over $1 billion per year in reduced subscriber churn. Getting recommendations right is that commercially important.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4FA;',
                label: 'Viewing behaviour signals',
                text: 'Not just what you watch, but how: do you skip intros? Do you rewind? Do you watch in one sitting or spread across a week? Do you browse for 20 minutes then give up? Every action feeds the model.',
                color: 'blue',
              },
              {
                icon: '&#x1F465;',
                label: 'Collaborative filtering',
                text: 'The AI finds users with similar viewing patterns and recommends what they enjoyed. If 10,000 people who loved Succession also loved Succession-like drama X, you will probably enjoy X too.',
                color: 'blue',
              },
              {
                icon: '&#x1F3A8;',
                label: 'Content analysis',
                text: "Netflix tags every piece of content with hundreds of attributes — not just genre, but mood, pacing, cinematography style, whether it has a happy ending. AI matches content attributes to your taste profile.",
                color: 'blue',
              },
              {
                icon: '&#x231A;',
                label: 'Context matters',
                text: 'You might watch different things at 6pm on a Tuesday than at midnight on a Friday. The AI adjusts recommendations based on time of day, day of week, and even what device you are using.',
                color: 'blue',
              },
            ].map(({ icon, label, text, color }) => (
              <div key={label} className={`flex gap-3 items-start bg-${color}-50 dark:bg-${color}-950 rounded-xl p-3`}>
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className={`font-semibold text-${color}-800 dark:text-${color}-200 text-sm mb-0.5`}>{label}</p>
                  <p className={`text-${color}-700 dark:text-${color}-300 text-sm leading-relaxed`}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI dubbing and lip-syncing — making translations convincing</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Traditional dubbing is obviously fake: local voice actors record translated lines, and the audio is crudely edited to roughly match the actors' mouth movements on screen. The result feels unnatural.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI dubbing companies like ElevenLabs, Papercup, and Deepdub take a different approach:
          </p>
          <div className="space-y-2">
            {[
              "Voice cloning: The AI learns the original actor's voice characteristics — tone, accent, emotional quality — from the original audio",
              "Translation and generation: The script is translated, then the AI generates speech in the target language using the cloned voice — so dubbed lines sound like the original actor speaking the other language",
              "Lip-sync adjustment: Some tools manipulate the video to adjust mouth movements to better match the dubbed audio — reducing the visible mismatch",
              "The result is dramatically more convincing than traditional dubbing, opening foreign-language content to wider audiences",
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-950 rounded-xl p-4">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm leading-relaxed">
              <strong>Concern:</strong> If AI can clone any actor's voice from existing recordings, it raises serious questions about consent. Actors are now negotiating contracts that specifically address whether and how their voice can be used in AI dubbing systems.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The Hollywood debate — what makes storytelling human?</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The 2023 Hollywood strikes brought AI to the centre of a debate that creative industries worldwide are grappling with.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x270F;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">Writers' concerns</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">Studios were exploring using AI to generate first drafts of scripts and then hiring writers at lower rates only to refine them — cutting the pay and creative agency of professional writers dramatically. The WGA strike secured agreements requiring disclosure of AI use and preventing AI-generated material from being used to replace writers' work.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F3AD;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">Actors' concerns</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">Background actors were being asked to consent to full-body scans so studios could use AI replicas of them indefinitely without further payment. The SAG-AFTRA agreement established that actors must consent to digital replicas and must be fairly compensated when their likeness is used by AI.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-amber-50 dark:bg-amber-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F914;</span>
              <div>
                <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm mb-0.5">The deeper question</p>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">Can AI write a story that makes you cry? That changes how you see the world? Great storytelling draws on lived experience, empathy, and the full complexity of what it means to be human. AI can pattern-match on successful stories — but whether it can create genuinely original, resonant narratives remains deeply contested.</p>
              </div>
            </div>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-film-and-tv" />

        <Quiz lessonId="ai-and-film-and-tv" questions={quizQuestions} />

        <LessonNote lessonId="ai-and-film-and-tv" />

        <LessonRating lessonId="ai-and-film-and-tv" />

        <LessonFeedback lessonId="ai-and-film-and-tv" />

        <RelatedLessons currentId="ai-and-film-and-tv" />

        <NextLesson currentId="ai-and-film-and-tv" />

        <CompletedBadge lessonId="ai-and-film-and-tv" />

      </div>
    </div>
  )
}
