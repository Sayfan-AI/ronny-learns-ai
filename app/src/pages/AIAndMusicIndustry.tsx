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

const LESSON_TITLE = 'AI and the music industry — Suno, Spotify algorithms, copyright battles, deepfake voices, and AI concert tech'

const KEY_TAKEAWAYS = [
  'AI music generation tools like Suno and Udio can create full songs from text prompts in seconds — raising questions about what music is and who it belongs to.',
  'The RIAA and major labels have sued AI music companies over training data copyright, arguing that AI tools trained on copyrighted recordings infringe those rights.',
  'Spotify\'s Discover Weekly uses collaborative filtering and audio analysis to recommend music — making it one of the most powerful discovery channels in the industry.',
  'AI voice cloning has been used to create fake songs in the style of living artists, including the viral "Heart on My Sleeve" which cloned Drake and The Weeknd.',
  'AI mastering and production tools like LANDR and iZotope\'s products are democratising music production — enabling bedroom producers to achieve professional-quality results at low cost.',
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'What can AI music generation tools like Suno and Udio do?',
    options: [
      'They can only generate instrumental background music — they cannot produce songs with vocals or lyrics',
      'They can generate complete songs including vocals, harmonies, instrumentation, and lyrics from a short text prompt, in a wide range of styles, in seconds',
      'They can only remix or modify existing songs — they cannot generate new music from scratch',
      'They produce rough demos that always require significant human editing before they are listenable',
    ],
    correctIndex: 1,
    explanation:
      'Suno and Udio (both launched in 2023-24) represent a significant leap in AI music generation. From a short text prompt ("upbeat pop song about a rainy day in London, female vocals, piano and synth"), they can produce a complete song with convincing vocals, lyrics, and instrumentation in seconds. The quality is high enough to be genuinely listenable — and in some cases indistinguishable from human-made music to casual listeners. This has profound implications for how music is created, distributed, and valued.',
  },
  {
    question: 'What are the main copyright arguments in lawsuits against AI music companies?',
    options: [
      'AI music companies are being sued because their tools can only be used to copy existing songs note-for-note, which clearly infringes copyright',
      'The RIAA and major labels argue that training AI models on copyrighted recordings without permission or payment constitutes copyright infringement — and that AI-generated outputs that sound like specific artists may also infringe',
      'The lawsuits are primarily about trademark law, not copyright — the companies are accused of using artist names without permission in their marketing materials',
      'AI music companies are only being sued in the USA — European copyright law does not apply to AI training data',
    ],
    correctIndex: 1,
    explanation:
      'The core legal argument is about training data. To create an AI that can generate music in the style of, say, Taylor Swift, the model must be trained on Taylor Swift recordings. The RIAA (Recording Industry Association of America) and artists including Universal Music Group\'s roster argue that using these recordings for training without a licence is infringement. A secondary argument concerns outputs: if an AI generates a song that is substantially similar to a copyrighted work, or that clones an artist\'s voice, additional rights may be infringed. These cases are among the most significant copyright disputes of the AI era.',
  },
  {
    question: 'How does Spotify\'s Discover Weekly recommendation algorithm work?',
    options: [
      'Spotify pays human music experts to listen to new releases and manually curate personalised playlists for each user',
      'Spotify uses collaborative filtering (analysing what similar users listen to) combined with audio analysis of the actual music, and natural language processing of music writing, to identify songs a user is likely to enjoy',
      'Spotify\'s recommendations are based entirely on what songs the user has previously listened to, just presented in random order',
      'Discover Weekly only recommends music from artists the user has already listened to — it does not suggest genuinely new artists',
    ],
    correctIndex: 1,
    explanation:
      'Spotify\'s recommendation system combines several approaches. Collaborative filtering identifies users with similar listening patterns to you and surfaces songs they love that you have not heard. Audio analysis extracts features of songs — tempo, key, energy, vocal characteristics — and finds musically similar tracks. Natural language processing analyses music blogs, reviews, and playlist titles to understand associations between artists and genres. The result, Discover Weekly, has become one of the music industry\'s most powerful discovery tools — able to surface a track that gets 100,000 plays simply by placing it in the right playlists.',
  },
  {
    question: 'What happened with the "Heart on My Sleeve" AI track that went viral in 2023?',
    options: [
      'Drake and The Weeknd released an AI-generated collaboration to promote an AI music platform they had both invested in',
      'An anonymous creator released a track using AI-cloned voices of Drake and The Weeknd without their permission — it went viral before being removed from platforms, sparking major debate about AI voice cloning',
      'Heart on My Sleeve was a track that Drake released using his own voice but which was falsely rumoured to be AI-generated',
      'The track was created by Universal Music Group to demonstrate the risks of AI voice cloning — it was a planned PR exercise rather than an unsanctioned release',
    ],
    correctIndex: 1,
    explanation:
      '"Heart on My Sleeve" was released anonymously in April 2023 by a creator using the name Ghostwriter977. It featured convincing AI-cloned vocals of Drake and The Weeknd performing an original song. It accumulated millions of streams on TikTok, Spotify, Apple Music, and YouTube before being removed at Universal Music Group\'s request. The creator was never identified. The incident demonstrated that AI voice cloning had reached the point where it could produce commercially convincing fakes of major artists, and accelerated industry and regulatory discussion about AI voice cloning rights.',
  },
  {
    question: 'How are AI tools like LANDR changing music production?',
    options: [
      'LANDR creates entirely finished albums from scratch with no human involvement required',
      'AI mastering and production tools automate previously specialist and expensive tasks — enabling independent artists to achieve professionally mastered recordings at a fraction of traditional costs',
      'LANDR is a streaming platform that uses AI to recommend music, similar to Spotify\'s Discover Weekly',
      'AI production tools are only useful for electronic music genres — they cannot process acoustic instruments or live recordings',
    ],
    correctIndex: 1,
    explanation:
      'Mastering — the final stage of music production that makes a track sound polished and balanced across different playback systems — traditionally required specialist engineers with expensive equipment and commanded significant fees. LANDR and similar AI mastering tools can automate most of this process for a few dollars per track. Combined with AI-assisted mixing, chord suggestion, beat generation, and vocal tuning tools, the cost barrier to professional-sounding music production has dropped dramatically. This democratisation is genuinely positive for independent artists — though it also intensifies the challenge of being heard in an already oversupplied market.',
  },
]

export function AIAndMusicIndustry() {
  useMarkVisited('ai-and-music-industry')

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{LESSON_TITLE}</h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">8 min read &middot; Intermediate</p>

      <CompletedBadge lessonId="ai-and-music-industry" />
      <ShareButton lessonTitle={LESSON_TITLE} />

      <KeyTakeaways points={KEY_TAKEAWAYS} />

      <div className="prose prose-gray dark:prose-invert max-w-none mt-8">

        <h2>A year that changed everything</h2>
        <p>
          In 2023, two things happened that the music industry had been dreading. First, Suno and Udio launched AI music generators capable of producing convincing songs &mdash; with full vocals, instrumentation, and lyrics &mdash; from a short text prompt, in seconds, for free. Then &ldquo;Heart on My Sleeve&rdquo; went viral: a track using AI-cloned vocals of Drake and The Weeknd, produced by an anonymous creator, accumulating millions of streams before being removed.
        </p>
        <p>
          These events crystallised questions the industry had been circling: What happens to music when anyone can make a convincing song? Who owns the voice of a living artist? And what does it mean for the millions of people who make a living from music?
        </p>

        <h2>AI music generation: Suno, Udio, and what they can do</h2>
        <p>
          Suno and Udio are the leading AI music generation platforms. Both are trained on vast libraries of recorded music and can generate original songs in almost any style from a text description. The output quality has improved dramatically &mdash; from clearly robotic-sounding results in 2022 to genuinely listenable, often impressive songs in 2024.
        </p>
        <p>
          The creative implications are significant. Music that previously required studio time, musicians, producers, and engineers can now be created in seconds at no cost. This is genuinely useful for content creators needing background music, for music educators, and for songwriters exploring ideas. It is also a direct challenge to the economic model of professional music production.
        </p>

        <h2>The copyright battle</h2>
        <p>
          In June 2024, the RIAA (Recording Industry Association of America) filed lawsuits against Suno and Udio, alleging that their training data &mdash; the vast libraries of recorded music used to train the AI models &mdash; was used without licence or compensation. The suits asked for up to $150,000 in damages per infringed work.
        </p>
        <p>
          The legal questions are genuinely complex. Does training an AI on copyrighted music infringe the copyright? The music industry says yes; the AI companies argue that training is transformative use, similar to a human musician learning from listening to other music. The courts will ultimately decide &mdash; and the outcome will shape AI development across the creative industries.
        </p>

        <h2>Spotify and the algorithm-driven music economy</h2>
        <p>
          Spotify&apos;s recommendation system &mdash; particularly Discover Weekly, Release Radar, and the editorial and algorithmic playlist ecosystem &mdash; has become the most powerful force in music discovery. Being featured in a major Spotify playlist can transform a track from obscurity to millions of streams overnight.
        </p>
        <p>
          The algorithm uses collaborative filtering (finding users similar to you and surfacing what they love), audio analysis (matching musical characteristics), and natural language processing (understanding genre and mood from music writing) to personalise recommendations. For listeners this is largely positive. For artists, it creates strong pressure to make music optimised for streaming: shorter songs, immediate hooks, consistent style, and high replay value.
        </p>

        <LessonNote lessonId="ai-and-music-industry" />

        <h2>AI voice cloning: the deepfake music problem</h2>
        <p>
          Voice cloning AI can now replicate a person&apos;s voice from a short sample of recordings. Applied to music, this means anyone can generate a &ldquo;new song&rdquo; in the voice of any artist whose recordings are available &mdash; without permission or payment.
        </p>
        <p>
          The &ldquo;Heart on My Sleeve&rdquo; incident demonstrated that this technology has matured. Beyond the Drake and The Weeknd case, there have been AI-generated tracks imitating voices ranging from Elvis to contemporary artists who are actively recording. The legal position is unclear &mdash; in the UK, voice is not automatically protected by copyright (the recording of a voice is, but the voice itself may not be). Several countries are considering new laws specifically protecting voice identity.
        </p>

        <h2>AI production tools: democratising music making</h2>
        <p>
          Not all AI in music is controversial. Tools like LANDR (AI mastering), iZotope (AI-assisted mixing and restoration), and various AI chord suggestion and beat generation tools are making professional-quality music production accessible to independent artists at low cost.
        </p>
        <p>
          Mastering &mdash; the final stage of production that makes music sound polished across all playback systems &mdash; previously required specialist engineers and significant fees. LANDR automates most of this for a few dollars per track. The result is a dramatic reduction in the cost barrier to releasing professional-sounding music. This is genuinely positive for independent artists, though it also intensifies competition in an already saturated streaming market.
        </p>

        <h2>AI setlist optimisation and live music</h2>
        <p>
          Major touring artists now routinely use data analytics &mdash; informed by streaming patterns, social media engagement, and past setlist analysis &mdash; to optimise their live shows. AI tools analyse which songs generate the highest energy and engagement at which point in a show, which songs perform differently in different countries or markets, and which combinations of songs sustain crowd energy across a full concert.
        </p>
        <p>
          The result is more carefully curated live shows &mdash; though some music fans argue this reduces the spontaneity that makes live music special. The data-driven approach also raises questions about whether niche or uncommercial material gets crowded out by the algorithm&apos;s preference for proven crowd-pleasers.
        </p>

      </div>

      <div className="mt-10">
        <Quiz questions={QUIZ_QUESTIONS} lessonId="ai-and-music-industry" />
      </div>

      <ReviewLaterButton lessonId="ai-and-music-industry" />
      <LessonRating lessonId="ai-and-music-industry" />
      <LessonFeedback lessonId="ai-and-music-industry" />
      <RelatedLessons currentId="ai-and-music-industry" />
      <NextLesson currentId="ai-and-music-industry" />
    </div>
  )
}
