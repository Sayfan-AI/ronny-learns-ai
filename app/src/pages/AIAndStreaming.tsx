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

const LESSON_TITLE = 'AI and streaming'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is the main goal of a streaming recommendation algorithm like Netflix or Spotify?',
    options: [
      'To recommend the highest-quality, most critically acclaimed content regardless of your taste',
      'To maximise your engagement — keeping you watching or listening for as long as possible',
      'To introduce you to the widest possible range of new content you have never encountered',
      'To match you with content that has received the most five-star user reviews',
    ],
    correctIndex: 1,
    explanation:
      "Recommendation algorithms are optimised for engagement — specifically, keeping you on the platform for as long as possible. Netflix measures whether you continue watching after the first few minutes. Spotify tracks how often you skip a song. YouTube optimises for total watch time. This is because more time on the platform means more subscription value (Netflix) or more ad revenue (YouTube). It does not always mean you'll discover the best possible content — it means you'll discover content that keeps you glued to the screen. This distinction matters: what's most engaging isn't always what you'd most value if you thought about it.",
    hint: 'Think about what makes a streaming business profitable.',
  },
  {
    question: "What is the famous story behind Netflix's thumbnail A/B testing?",
    options: [
      'Netflix discovered that thumbnails with bright colours increased clicks by over 200%',
      'Netflix tested whether people preferred landscape or portrait thumbnails and found landscape won',
      'Netflix showed different versions of a thumbnail to different users — for example featuring different characters — and learned that the image dramatically affected whether people clicked',
      "Netflix found that thumbnails with the show's title visible always outperformed thumbnails without text",
    ],
    correctIndex: 2,
    explanation:
      "Netflix runs thousands of A/B tests on thumbnails — showing one version to one group of users and a different version to another, then measuring which gets more clicks. The most well-known finding is that the same show can perform very differently depending on whose face appears in the thumbnail. For a drama with both a famous actor and a lesser-known co-star, Netflix might show the famous actor's face to some users and the co-star's face to others — then measure which drives more clicks. Interestingly, Netflix found that thumbnails showing a character's emotional expression often outperform title text alone. Every image you see on Netflix has been tested and optimised to maximise the probability that you click.",
    hint: 'Think about personalisation — what Netflix learns about what you click.',
  },
  {
    question: "What is Spotify's Discover Weekly, and how does it work?",
    options: [
      'A curated playlist made by Spotify human editors who review new music releases each Monday',
      'A weekly playlist of the 30 most-streamed songs globally, personalised by removing genres you dislike',
      'A personalised playlist of 30 songs generated each Monday using AI that combines what similar users love with analysis of music you already listen to',
      'A feature that analyses your mood using your phone camera and recommends music to match how you look',
    ],
    correctIndex: 2,
    explanation:
      "Discover Weekly is a personalised playlist of 30 songs, refreshed every Monday, that Spotify generates entirely using AI — no human curators are involved. It works by combining two main signals: collaborative filtering (finding users whose listening history closely matches yours and seeing what they love that you haven't heard yet) and content-based analysis (comparing the audio features, tempo, key, and energy of songs you like with similar-sounding tracks). Spotify also uses natural language processing to analyse song mentions in blogs, social media posts, and playlist names to understand what kind of music a track is. The result is a playlist that most users find feels eerily personalised.",
    hint: 'Think about how Spotify could learn from the listening habits of millions of users.',
  },
  {
    question: 'What is a "filter bubble" in the context of streaming recommendations?',
    options: [
      'A technical feature that removes inappropriate content from your recommendations',
      'The experience of only ever being recommended content similar to what you already know and like, gradually narrowing your tastes over time',
      'A paid subscription tier that removes adverts from recommended content',
      'A feature that lets you filter your recommendations by genre, language, or release year',
    ],
    correctIndex: 1,
    explanation:
      "A filter bubble occurs when recommendation algorithms only ever surface content that matches your existing tastes — never pushing you into unfamiliar territory. This can gradually narrow your experience: if you watch one thriller, you get recommended more thrillers; if you listen to one sub-genre, your whole Discover Weekly fills with it. The algorithm is doing its job (maximising engagement by showing you things you're likely to enjoy) but the side effect is that you may discover less, and your tastes may calcify rather than expand. You can counteract it by manually searching, asking friends for recommendations, and actively rating or blocking content you dislike.",
    hint: 'Think about what happens when an algorithm only learns to give you more of the same.',
  },
]

export function AIAndStreaming() {
  useMarkVisited('ai-and-streaming')

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3AC;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and streaming
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How Netflix, Spotify, and YouTube decide what you watch and listen to — the algorithms
            behind your recommendations, the business model driving them, and how to take back control.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-streaming" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The algorithm that never sleeps</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Every time you open Netflix, Spotify, or YouTube, an AI system makes hundreds of decisions
            in milliseconds: which titles to show you, in what order, which thumbnail image to use,
            and how prominently to feature something new. These decisions are not random, and they
            are not made by human editors. They are made by <strong>recommendation algorithms</strong> —
            AI systems trained on the behaviour of hundreds of millions of users.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The goal of these algorithms is simple to state but complex to execute:
            show you the content most likely to keep you watching or listening for as long as possible.
            Understanding how they work helps you use them more intentionally — and recognise when
            they are shaping your tastes rather than reflecting them.
          </p>
          <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4">
            <p className="text-purple-800 dark:text-purple-200 text-sm leading-relaxed">
              <strong>How big is this?</strong> Netflix has over 300 million subscribers worldwide.
              Spotify has 600 million active users. YouTube sees over 500 hours of video uploaded
              every minute. Without AI-powered recommendations, none of these platforms could
              function — there is simply too much content for any human team to curate.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How Netflix works</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Netflix says its recommendation system is responsible for around 80% of what people
            watch on the platform. That means the vast majority of viewing is driven not by people
            searching for something specific, but by what Netflix places in front of them.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F91D;',
                label: 'Collaborative filtering',
                text: "Netflix finds other users whose viewing history closely matches yours — you both watched the same mix of shows, gave similar ratings — and then recommends what they loved that you haven't seen yet. This is called collaborative filtering: learning from the collective behaviour of similar users.",
              },
              {
                icon: '&#x1F3A8;',
                label: 'Content-based signals',
                text: 'Netflix also analyses the content itself — the genre, themes, actors, director, pacing, and even the visual style. If you watched several slow-burn psychological thrillers, Netflix learns that "slow-burn psychological thriller" is a useful category for you, even if that exact label never appears on screen.',
              },
              {
                icon: '&#x23F1;&#xFE0F;',
                label: 'What they actually track',
                text: 'Netflix tracks far more than whether you finished a show. They watch when you paused, whether you rewound, what time of day you watched, whether you watched on a phone or TV, how far into the first episode you got before stopping, and whether you came back the next day.',
              },
              {
                icon: '&#x1F5BC;&#xFE0F;',
                label: 'The thumbnail A/B test',
                text: "Netflix runs thousands of simultaneous A/B tests on thumbnail images — showing different images of the same show to different users and measuring which gets more clicks. They've found that the face shown in the thumbnail, and the emotion on that face, can dramatically change whether you click. You may see a different version of a show's artwork than your friend does.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-red-800 dark:text-red-300 text-sm mb-0.5">{label}</p>
                  <p className="text-red-700 dark:text-red-200 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How Spotify works</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Spotify's recommendation system is considered one of the most sophisticated in the music
            industry. Its flagship feature — <strong>Discover Weekly</strong> — is a personalised
            playlist of 30 songs refreshed every Monday, generated entirely by AI with no human
            curators involved.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F465;',
                label: 'Collaborative filtering',
                text: "Like Netflix, Spotify uses collaborative filtering — finding users whose playlists and listening history match yours, then surfacing songs they love that you haven't discovered yet. With 600 million users, the dataset for this is enormous.",
              },
              {
                icon: '&#x1F50A;',
                label: 'Audio analysis',
                text: "Spotify's AI analyses the audio of every track — measuring tempo, key, energy, danceability, acousticness, and dozens of other features. This lets it recommend songs that sound similar to ones you already like, even if no human has ever labelled them as related.",
              },
              {
                icon: '&#x1F4F0;',
                label: 'Natural language processing',
                text: 'Spotify also analyses text about music — blog posts, reviews, social media, and the names of playlists people make. If thousands of playlists titled "chill Sunday morning" include a particular song, Spotify learns that the song fits that mood, even without listening to it.',
              },
              {
                icon: '&#x1F9EA;',
                label: 'The fake artists controversy',
                text: 'In 2016, reports emerged that some of the most-played "artists" on Spotify were not real musicians but tracks created specifically to fill algorithmic playlists cheaply. Spotify denied creating fake artists but acknowledged using unbranded tracks. The episode raised questions about transparency in streaming economics.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-green-50 dark:bg-green-900/20 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-green-800 dark:text-green-300 text-sm mb-0.5">{label}</p>
                  <p className="text-green-700 dark:text-green-200 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-yellow-100 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How YouTube works — and why it's different</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            YouTube's recommendation system is perhaps the most consequential of any streaming
            platform — and the most controversial. Unlike Netflix or Spotify, YouTube's business model
            is almost entirely advertising. More time watching means more ads served means more revenue.
            This creates a powerful incentive to recommend content that keeps you engaged for as long
            as possible.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x23F0;',
                label: 'Watch time optimisation',
                text: "YouTube's algorithm historically optimised for clicks. In 2012 it switched to optimising for watch time — how long people actually watch. This dramatically changed what got recommended: longer videos, serialised content, and cliffhangers that encourage you to watch the next video immediately.",
              },
              {
                icon: '&#x1F4C8;',
                label: 'Why emotional content spreads',
                text: "Research has found that content triggering strong emotions — outrage, fear, excitement — tends to generate longer watch times and more engagement than calm, measured content. YouTube's algorithm, which optimises for watch time and engagement, tends to surface emotionally charged videos higher in recommendations.",
              },
              {
                icon: '&#x1F6A8;',
                label: 'The radicalisation pipeline debate',
                text: "Researchers including Zeynep Tufekci and the Wall Street Journal's own internal investigation found evidence that YouTube's recommendations can lead users progressively towards more extreme content — starting with mainstream videos and gradually surfacing more fringe material because it drives higher engagement. YouTube disputes the severity of this but has updated its recommendation policies multiple times in response.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-yellow-800 dark:text-yellow-300 text-sm mb-0.5">{label}</p>
                  <p className="text-yellow-700 dark:text-yellow-200 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Filter bubbles: when the algorithm narrows your world</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            A <strong>filter bubble</strong> is what happens when a recommendation algorithm only
            ever shows you content similar to what you already know and like — gradually narrowing
            your world rather than expanding it.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The algorithm is not doing anything malicious — it is doing exactly what it was designed
            to do. But over time, this can mean:
          </p>
          <div className="space-y-2">
            {[
              'Your music taste calcifies around a single genre or era instead of evolving',
              'Your podcast and documentary recommendations become dominated by one worldview',
              'You discover fewer genuinely new artists, directors, or genres',
              "The platform's idea of who you are is based on your past, not who you're becoming",
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5 flex-shrink-0">•</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-teal-100 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Taking back control</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            You do not have to passively accept whatever the algorithm serves you. These steps help:
          </p>
          <div className="space-y-3">
            {[
              {
                step: '1',
                tip: 'Use the search bar more',
                detail: 'When you search for something specific — an artist, a director, a documentary topic — you are bypassing the algorithm and exercising your own taste.',
              },
              {
                step: '2',
                tip: 'Rate content actively',
                detail: "Netflix's thumbs up/down and Spotify's heart/block buttons directly shape your recommendations. Marking something as disliked is one of the most effective ways to correct a filter bubble.",
              },
              {
                step: '3',
                tip: 'Use "Not interested" on YouTube',
                detail: 'Clicking the three dots next to any YouTube video and selecting "Not interested" or "Don\'t recommend channel" is surprisingly effective at breaking out of recommendation loops.',
              },
              {
                step: '4',
                tip: 'Clear your history occasionally',
                detail: 'Netflix, Spotify, and YouTube all let you review and delete your viewing or listening history. A periodic reset can refresh your recommendations if they feel stale.',
              },
              {
                step: '5',
                tip: 'Ask people for recommendations',
                detail: 'A friend who knows you well remains one of the best recommendation engines. It operates on completely different signals than any streaming platform.',
              },
            ].map(({ step, tip, detail }) => (
              <div key={step} className="flex gap-3 items-start">
                <span className="bg-teal-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                  {step}
                </span>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100 text-sm mb-0.5">{tip}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <LessonNote lessonId="ai-and-streaming" />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Test your knowledge</h2>
          <Quiz questions={quizQuestions} lessonId="ai-and-streaming" />
        </div>

        <ReviewLaterButton lessonId="ai-and-streaming" />
        <LessonRating lessonId="ai-and-streaming" />
        <LessonFeedback lessonId="ai-and-streaming" />
        <RelatedLessons currentId="ai-and-streaming" />
        <NextLesson currentId="ai-and-streaming" />

      </div>
    </div>
  )
}
