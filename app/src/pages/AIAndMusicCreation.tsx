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

const LESSON_TITLE = 'AI and music creation'

const KEY_TAKEAWAYS = [
  'AI music generators like Suno and Udio can create a complete song — with vocals, instruments, and production — from a short text prompt. The quality is improving rapidly and some tracks are convincing enough to fool casual listeners.',
  'Voice cloning AI can replicate a famous artist\'s voice from a small sample. The "Heart on My Sleeve" controversy in 2023, featuring AI-generated tracks using Drake and The Weeknd\'s voices, prompted record labels to push for legal reform.',
  'Spotify\'s Discover Weekly and personalised playlists use a combination of collaborative filtering (listeners like you also liked...) and content analysis AI that analyses the actual audio characteristics of songs.',
  'Professional musicians are divided: some use AI tools to speed up composition, generate chord progressions, or explore ideas. Others see AI-trained on their work without consent or payment as straightforward theft.',
  'The UK\'s Intellectual Property Office has confirmed that AI-generated content with no human author cannot be protected by copyright — but the legal position on training data and voice cloning remains contested.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How does an AI music generator like Suno create a song from a text prompt?',
    options: [
      'It searches a licensed database of royalty-free music and assembles clips from existing tracks based on the mood and genre described in the prompt',
      'It generates new audio from scratch using a model trained on vast libraries of music, learning the patterns of rhythm, melody, harmony, and vocal style to produce original-sounding output',
      'It converts the text prompt into sheet music notation using music theory rules, then synthesises each instrument separately and mixes them together',
      'It records a human session musician playing to the prompt description and applies real-time pitch and tempo AI corrections to improve the quality',
    ],
    correctIndex: 1,
    explanation:
      'Tools like Suno, Udio, and Google\'s MusicLM use generative AI models trained on enormous libraries of music. Like a language model that learns word patterns from text, music AI learns the patterns of sound — how drum beats relate to basslines, how verse melodies transition to choruses, how different genres use different chord progressions and timbres. Given a prompt like "upbeat UK garage track about a rainy morning in London", the model generates a new audio waveform from scratch that matches those characteristics. It does not copy or stitch together existing tracks — it generates new audio. The quality varies enormously depending on the prompt, but the best outputs can sound surprisingly polished.',
    hint: 'Think about patterns learned from millions of existing songs, generating something new.',
  },
  {
    question: 'What was the "Heart on My Sleeve" controversy and why did it matter for AI and music?',
    options: [
      'A legal case in which Spotify was sued for using AI to replace human curators on its editorial playlists, reducing music discovery opportunities for independent artists',
      'A song created using AI-cloned voices of Drake and The Weeknd, released anonymously on streaming platforms, which went viral and prompted record labels to push for laws against AI voice cloning without consent',
      'A controversy over an AI system that automatically flagged songs containing references to mental health struggles, removing them from recommendation algorithms without artist consent',
      'A situation where an AI music tool accidentally trained on unreleased Drake material that had been leaked online, generating tracks that sounded like unfinished official recordings',
    ],
    correctIndex: 1,
    explanation:
      '"Heart on My Sleeve" was posted on TikTok, Spotify, and Apple Music in April 2023. It sounded completely convincing — the voice, the delivery, the production — and initially fooled many listeners. The creator (ghostwriter977) used voice cloning AI to replicate Drake and The Weeknd\'s voices. Universal Music Group had it removed from platforms, calling it a "violation of artists\' rights". The case sparked an industry-wide debate: no existing law in the UK or US explicitly makes it illegal to clone a living person\'s voice without consent. Record labels, artists, and music industry bodies began lobbying governments for specific voice cloning protections. The UK government launched a consultation on AI and copyright in 2023, including the question of voice rights.',
    hint: 'Think about a song that cloned real artists\' voices without permission.',
  },
  {
    question: 'How does Spotify\'s Discover Weekly personalised playlist use AI?',
    options: [
      'It uses only music theory AI — analysing the tempo, key, and instrumentation of songs you have liked, then recommending other songs with matching technical characteristics',
      'It combines collaborative filtering (other users with similar listening history also liked these tracks) with audio analysis (comparing the sonic features of songs you enjoy) to generate a unique weekly playlist',
      'It uses social media AI to analyse which artists you follow or mention on Twitter and Instagram, then creates playlists of those artists\' deeper catalogue tracks that you might have missed',
      'It is manually curated by Spotify\'s editorial team using data about what songs are trending in your city, with no AI involvement in the actual track selection',
    ],
    correctIndex: 1,
    explanation:
      'Discover Weekly uses two complementary AI approaches. Collaborative filtering finds other users whose listening history closely matches yours — if those users also consistently listen to a track you have never heard, the AI recommends it to you (on the basis that tastes like yours tend to enjoy it). Content-based analysis looks at the audio itself: Spotify\'s AI analyses every track for features like tempo, energy, danceability, acousticness, and "speechiness". If you tend to enjoy high-energy tracks in a particular BPM range, the AI looks for new songs with matching audio features. Combining these two approaches produces recommendations that feel both familiar and surprising. Discover Weekly launched in 2015 and remains one of Spotify\'s most popular features.',
    hint: 'Think about both "people like you listened to this" AND analysing the actual sound.',
  },
  {
    question: 'What is the legal position in the UK on copyright for music created entirely by AI with no human author?',
    options: [
      'AI-generated music is automatically owned by the company that created the AI tool, because software-generated content is considered a work made for hire under the Copyright, Designs and Patents Act',
      'AI-generated content with no human creative contribution cannot be protected by copyright in the UK — there is no human author to hold the rights, so the work enters the public domain immediately',
      'AI-generated music is protected for 10 years after creation, after which it enters the public domain — a shorter term than human-authored works in recognition of the reduced creative effort involved',
      'The UK has not yet made any legal ruling on AI-generated content — it remains in a legal grey area where ownership is determined case by case by the courts',
    ],
    correctIndex: 1,
    explanation:
      "The UK Intellectual Property Office (IPO) has confirmed that copyright in the UK requires a human author. A work generated entirely by AI with no human creative input — no selection of notes, no lyrics written, no arrangement chosen by a person — cannot be protected by copyright. It effectively belongs to no one and enters the public domain. However, the legal situation becomes much more complex when a human uses AI as a tool but makes creative decisions (choosing prompts, selecting from AI outputs, editing the result) — in that case, there may be sufficient human authorship to claim copyright. The IPO is also wrestling with a separate question: whether training AI on copyrighted music without a licence or payment is itself a copyright infringement.",
    hint: 'Think about whether copyright requires a human creator.',
  },
  {
    question: 'What is the music industry\'s main concern about AI tools being trained on existing music?',
    options: [
      'That AI-generated music trained on copyrighted works will be so similar to the originals that streaming platforms will not be able to tell them apart, causing royalty payments to go to the wrong artists',
      'That AI companies have used vast libraries of copyrighted music to train their models without licensing it or paying the artists and songwriters whose work was used',
      'That AI music tools will make professional recording studios obsolete, putting sound engineers and producers out of work before the industry has time to adapt',
      'That AI music will lower the overall quality of new releases, making it harder for listeners to find genuinely good music and reducing engagement with streaming platforms',
    ],
    correctIndex: 1,
    explanation:
      "The core concern is consent and compensation. Companies like Suno and Udio were reportedly trained on enormous datasets of music scraped from the internet — including copyrighted tracks by professional artists — without asking permission or paying licences. Artists argue this is straightforward theft: their creative work was used, without payment, to build a commercial product that now competes with them. The Recording Industry Association of America (RIAA) filed lawsuits against Suno and Udio in 2024. The UK Musicians' Union has called for an opt-in model where artists must actively agree for their music to be used in training data. The debate mirrors the controversy in visual art over AI image generators like Midjourney being trained on artists' work.",
    hint: 'Think about who created the music the AI was trained on and whether they were asked.',
  },
]

export function AIAndMusicCreation() {
  useMarkVisited('ai-and-music-creation')

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3B5;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and music creation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            AI composers, voice cloning controversies, Spotify's recommendation engine,
            and what it all means for musicians.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-music-creation" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-violet-100 dark:border-violet-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The music industry meets its AI moment</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The music industry has faced technology disruptions before — cassette tapes, MP3s, Napster, streaming. AI may be the biggest disruption yet, because it does not just change how music is distributed: it changes how music is created.
          </p>
          <div className="space-y-2">
            {[
              'Suno and Udio can generate a complete song with vocals in under 30 seconds from a text prompt',
              'The global recorded music market was worth $28.6 billion in 2023 — AI threatens established business models throughout the supply chain',
              'Grammy rules were updated in 2024 to require disclosure of AI use, but will still allow AI-assisted works to be eligible',
              'The UK Musicians\' Union represents over 30,000 professional musicians who are concerned about AI\'s impact on their livelihoods',
              'Voice cloning technology that cost millions a decade ago is now available for free online — with audio samples of just a few seconds',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-violet-600 dark:text-violet-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI music generators — how they work</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Tools like Suno, Udio, and Google's MusicLM generate music from text descriptions. They are trained on vast libraries of existing music and have learned the patterns that make different genres, moods, and styles sound the way they do.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-indigo-50 dark:bg-indigo-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F3B9;</span>
              <div>
                <p className="font-semibold text-indigo-800 dark:text-indigo-200 text-sm mb-0.5">What they can do well</p>
                <p className="text-indigo-700 dark:text-indigo-300 text-sm leading-relaxed">Background music for videos, quick demos to test a melody idea, exploring different genre styles quickly, generating music in a very specific mood or tempo. The results are improving month by month.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-indigo-50 dark:bg-indigo-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F914;</span>
              <div>
                <p className="font-semibold text-indigo-800 dark:text-indigo-200 text-sm mb-0.5">What they still struggle with</p>
                <p className="text-indigo-700 dark:text-indigo-300 text-sm leading-relaxed">Complex song structure (a true four-movement symphony or a jazz improvisation responding to other musicians in real time), lyrics that are genuinely meaningful, and the kind of emotional authenticity that comes from lived experience. A human composer who has experienced grief writes about grief differently from an AI trained on descriptions of grief.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Voice cloning — when AI sounds like Drake</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The "Heart on My Sleeve" controversy showed that AI voice cloning had reached a watershed moment. The technology is now good enough to fool listeners.
          </p>
          <div className="bg-red-50 dark:bg-red-950 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-red-800 dark:text-red-200 text-sm">The legal gap</p>
            <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
              In the UK, there is no specific law against cloning a living person's voice without their consent. A voice is not protected by copyright (you can't copyright a voice, only a specific recording). Some lawyers argue that voice cloning without consent could amount to a "passing off" claim (pretending goods or services come from someone they do not), or potentially a data protection violation (voice is biometric data). But these routes are uncertain and costly. Record labels, artists, and the Music Rights Group are pushing for specific legislation. The UK Intellectual Property Office consultation in 2023 specifically asked whether voice rights needed new legal protection.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How Spotify knows what you want to hear</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Spotify's AI recommendation system is one of the most sophisticated in the world. Discover Weekly generates 100 million unique playlists every week — each one different.
          </p>
          <div className="space-y-2">
            {[
              'Collaborative filtering: Spotify identifies users with similar listening histories and recommends tracks they loved that you have never played',
              'Audio analysis: Spotify\'s AI analyses the actual sound of every track — tempo, key, energy level, acousticness — and recommends songs with similar sonic characteristics',
              'Natural language processing: Spotify reads blog posts, playlists names, and music press reviews to understand how people describe music and connect that to their listening data',
              'The system has 600 million users\' listening data to learn from — making predictions more accurate the more you use it',
              'Every song you skip, replay, or save gives the algorithm feedback that improves future recommendations',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-music-creation" />

        <Quiz questions={quizQuestions} lessonId="ai-and-music-creation" />

        <LessonNote lessonId="ai-and-music-creation" />
        <LessonRating lessonId="ai-and-music-creation" />
        <LessonFeedback lessonId="ai-and-music-creation" />

        <RelatedLessons currentId="ai-and-music-creation" />
        <NextLesson currentId="ai-and-music-creation" />
      </div>
    </div>
  )
}
