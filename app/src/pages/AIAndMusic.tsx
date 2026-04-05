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

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does Spotify decide which songs to recommend to you?',
    options: [
      'It randomly selects songs from your country\'s top charts',
      'It uses a combination of collaborative filtering (what similar listeners enjoy) and audio analysis (the actual sound of tracks) to suggest music you are likely to love',
      'It only recommends songs you have listened to before, in a different order',
      'It asks music experts to review your taste and build playlists manually',
    ],
    correctIndex: 1,
    explanation:
      'Spotify combines two approaches: collaborative filtering finds listeners with similar taste to yours and suggests what they like, while audio analysis breaks each track into its acoustic properties — tempo, key, energy, danceability — to find songs that sound similar to ones you enjoy. Together these make recommendations remarkably accurate.',
  },
  {
    question: 'What can AI composition tools like AIVA and Soundraw actually do?',
    options: [
      'They generate lyrics only — the music must still be composed by a human',
      'They can produce full original music tracks in a chosen style, tempo, and mood in seconds',
      'They copy existing songs and change the key slightly to avoid copyright claims',
      'They can only compose classical music — not popular or electronic genres',
    ],
    correctIndex: 1,
    explanation:
      'AI composition tools like AIVA (used for film scores) and Soundraw (used for content creators) generate entirely new music from scratch. You set a mood, genre, tempo, and duration — the AI produces a full track. The music is original, not a copy of existing work, because the AI learned musical patterns rather than memorising specific songs.',
  },
  {
    question: 'What is the main concern about AI voice cloning of musicians?',
    options: [
      'AI voice clones use too much storage space on streaming platforms',
      'Artists\' voices can be cloned without their consent and used to generate fake songs or statements they never made',
      'AI voice cloning makes music sound too perfect, removing desirable imperfections',
      'It only works with retired musicians whose voices are no longer in use',
    ],
    correctIndex: 1,
    explanation:
      "With a few minutes of clean audio, AI can clone a musician's voice convincingly enough to generate new 'songs' they never recorded, or put words in their mouth they never said. This raises serious questions about consent, copyright, and authenticity — and has led to calls for new legal protections for voice rights.",
  },
]

export function AIAndMusic() {
  useMarkVisited('ai-and-music')

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3B5;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and music
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI recommends your next favourite song, composes original tracks, clones
            voices &mdash; and what that means for musicians.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <DifficultyBadge level="Beginner" />
          </div>
          <CompletedBadge lessonId="ai-and-music" />
          <ShareButton lessonTitle="AI and music" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI already knows your taste</h2>
          <p className="text-gray-600 leading-relaxed">
            If you use Spotify, Apple Music, or YouTube Music, AI is already shaping what
            you listen to. Recommendation algorithms account for the majority of streams
            on every major platform &mdash; most music is now discovered through AI, not
            through radio or word of mouth.
          </p>
          <div className="bg-violet-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-violet-800 text-sm">How Spotify Discover Weekly works</p>
            <p className="text-violet-700 text-sm leading-relaxed">
              Every Monday Spotify delivers a personalised 30-song playlist to each of its
              600+ million users. The AI combines what you have listened to with what
              millions of similar listeners enjoy, then analyses the actual audio of candidate
              tracks to filter for songs that match your sound preferences. It refreshes
              every week because your taste changes.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">How music recommendation AI works</h2>
          <p className="text-gray-600 leading-relaxed">
            Music recommendation uses two main approaches, usually combined:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F465;',
                label: 'Collaborative filtering',
                text: "If thousands of people who love the same artists as you also love a band you haven't heard of, the AI infers you probably will too. It finds your 'taste neighbourhood' across millions of users.",
              },
              {
                icon: '&#x1F3B6;',
                label: 'Audio analysis',
                text: "Spotify's AI breaks every track into acoustic features: tempo, key, energy, danceability, 'speechiness', acousticness, and more. It then finds songs with similar audio profiles to tracks you play repeatedly.",
              },
              {
                icon: '&#x1F4C8;',
                label: 'Listening context',
                text: 'The AI also considers when and how you listen — upbeat tracks when you skip through quickly, mellow ones when you play on repeat. Time of day, season, and even location can influence recommendations.',
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
          <h2 className="text-2xl font-bold text-gray-800">AI that composes music</h2>
          <p className="text-gray-600 leading-relaxed">
            AI is no longer just recommending music &mdash; it can create it. Several tools
            now generate original compositions, and some are already used commercially.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F3BC;',
                label: 'AIVA — for film and game scores',
                text: 'AIVA (Artificial Intelligence Virtual Artist) is trained on classical and cinematic compositions. Film-makers and game developers use it to generate bespoke orchestral scores. Several AIVA compositions have been performed by live orchestras.',
              },
              {
                icon: '&#x1F399;&#xFE0F;',
                label: 'Soundraw — for content creators',
                text: 'YouTubers, podcasters, and advertisers use Soundraw to generate royalty-free background music on demand. You choose a mood, genre, and length — the AI generates a track in seconds. No two tracks are identical.',
              },
              {
                icon: '&#x1F916;',
                label: 'Suno and Udio — full songs with vocals',
                text: "More recent tools like Suno can generate complete songs with lyrics and sung vocals in almost any genre. The quality has surprised even professional musicians. You type a description — 'upbeat pop song about a rainy Monday' — and get a full track.",
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
          <h2 className="text-2xl font-bold text-gray-800">The voice cloning problem</h2>
          <p className="text-gray-600 leading-relaxed">
            Perhaps the most controversial AI music development is voice cloning &mdash; the
            ability to recreate any singer&rsquo;s voice from a small sample of their recordings.
          </p>
          <div className="bg-red-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-red-800 text-sm">The Drake vs AI Drake incident</p>
            <p className="text-red-700 text-sm leading-relaxed">
              In 2023, a track called &ldquo;Heart on My Sleeve&rdquo; went viral on social media. It
              featured AI-generated voices cloned from Drake and The Weeknd &mdash; two of the
              world&rsquo;s biggest artists &mdash; performing an entirely new song neither had recorded.
              Universal Music Group had the track taken down within days, but the incident
              showed how convincing &mdash; and legally murky &mdash; AI voice cloning had become.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Artists and record labels are pushing for laws that protect voices as intellectual
            property, similar to how a musician&rsquo;s image is protected. Some US states have
            already passed legislation, and the EU AI Act includes provisions on deepfakes.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI behind the mixing desk</h2>
          <p className="text-gray-600 leading-relaxed">
            AI is also changing how music is produced and performed live:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F39A;&#xFE0F;',
                label: 'Automatic mixing and mastering',
                text: 'Tools like LANDR and iZotope use AI to analyse a recording and automatically adjust levels, EQ, compression, and spatial effects — producing a professionally mastered track in minutes without an engineer.',
              },
              {
                icon: '&#x1F50A;',
                label: 'Live sound feedback detection',
                text: 'AI systems at live venues can detect the beginning of microphone feedback (that painful screech) in milliseconds and automatically cut the offending frequency before the audience hears it.',
              },
              {
                icon: '&#x1F3A4;',
                label: 'Noise cancellation in streaming',
                text: 'When artists perform live streams, AI removes background noise in real time — traffic, air conditioning, other people — so the listener hears only the music.',
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
          <h2 className="text-2xl font-bold text-gray-800">What it means for musicians</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-violet-50 border border-violet-100 rounded-xl p-4">
              <p className="font-semibold text-violet-800 text-sm mb-2">New opportunities</p>
              <ul className="text-violet-700 text-sm space-y-1 leading-relaxed">
                <li>AI tools lower the cost of producing high-quality music</li>
                <li>Independent artists can compete with major labels on production quality</li>
                <li>Recommendation AI can surface small artists to exactly the right audience</li>
                <li>AI handles repetitive engineering tasks, freeing time for creativity</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-xl p-4">
              <p className="font-semibold text-red-800 text-sm mb-2">Real concerns</p>
              <ul className="text-red-700 text-sm space-y-1 leading-relaxed">
                <li>AI-generated music is flooding streaming platforms, diluting royalties</li>
                <li>Voice cloning threatens artists' identity and consent</li>
                <li>Copyright law has not caught up with AI-generated content</li>
                <li>Algorithms favour certain styles, potentially narrowing musical diversity</li>
              </ul>
            </div>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-music" />
        <LessonNote lessonId="ai-and-music" />

        <Quiz questions={quizQuestions} lessonId="ai-and-music" lessonTitle="AI and music" />

        <LessonFeedback lessonId="ai-and-music" />
        <LessonRating lessonId="ai-and-music" />
        <RelatedLessons currentId="ai-and-music" />
        <NextLesson currentId="ai-and-music" />
      </div>
    </div>
  )
}
