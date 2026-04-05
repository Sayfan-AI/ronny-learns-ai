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
    question: 'When Spotify suggests a song you have never heard before and you end up loving it, what is happening behind the scenes?',
    options: [
      'A Spotify employee personally picks songs for your account',
      'A recommendation algorithm compares your listening habits to millions of other listeners and finds patterns to predict what you will enjoy',
      'Spotify randomly picks songs from your favourite genres',
      'The song is always one of the most-played songs globally that week',
    ],
    correctIndex: 1,
    explanation:
      'Recommendation engines use a technique called collaborative filtering. They look at what you have listened to and what people with similar tastes also listened to. If 10,000 people who love the same artists as you also love a particular song, the algorithm predicts you will probably like it too.',
  },
  {
    question: 'When you type a message on your phone and it suggests the next word, what type of AI is doing that?',
    options: [
      'A search engine looking up common phrases',
      'A language model that has learned patterns from billions of words of text and can predict what word is most likely to come next',
      'A simple spell checker matching words to a dictionary',
      'A database of common phrases stored on your phone',
    ],
    correctIndex: 1,
    explanation:
      'Predictive text uses the same core technology as large language models like Claude. Your phone has learned that after "I\'ll be there" people often type "soon". It is making a statistical prediction, not looking anything up.',
  },
  {
    question: 'How does Google Maps know there is heavy traffic before you even leave?',
    options: [
      'It relies entirely on reports from drivers who call in to report problems',
      'It uses AI to analyse real-time GPS data from millions of phones to detect slow-moving clusters, and historical patterns to predict when traffic builds up',
      'It uses traffic cameras at every junction and counts cars manually',
      'It checks a government database of roadworks updated once per day',
    ],
    correctIndex: 1,
    explanation:
      'Google Maps aggregates anonymised GPS signals from phones. When many devices move slowly along a road, AI detects congestion. It also uses machine learning trained on years of historical data to predict when traffic will build up before it happens.',
  },
  {
    question: 'Why does your email spam filter almost never need you to manually mark obvious spam?',
    options: [
      'Email providers employ thousands of people to read emails and categorise them',
      'All email from unknown senders is automatically blocked',
      'Machine learning models trained on billions of emails have learned to recognise spam patterns — even in emails they have never seen before',
      'Spam has become less common because laws are now strictly enforced',
    ],
    correctIndex: 2,
    explanation:
      'Spam filters use neural networks trained on enormous datasets. They recognise suspicious combinations of patterns — unusual sending addresses, certain phrases, suspicious links — and can generalise to new spam techniques they were not explicitly trained on.',
  },
  {
    question: 'When a smartphone blurs the background in a portrait photo, what is the AI doing?',
    options: [
      'The camera uses a physical lens mechanism to create the blur, the same as a professional camera',
      'The phone uses AI to detect where the person ends and the background begins, then digitally blurs the background',
      'The blur is created by moving the phone slightly while taking the photo',
      'The phone always takes two photos simultaneously and combines them',
    ],
    correctIndex: 1,
    explanation:
      'Most smartphones cannot physically create background blur the way a professional camera can. Instead, AI identifies the subject by detecting their body outline and edges, then applies a digital blur to everything classified as background. This is called semantic segmentation.',
  },
]

export function AIInYourApps() {
  useMarkVisited('ai-in-your-apps')
  useLessonVisit('ai-in-your-apps')
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4F1;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI in the apps you already use
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            You are already using AI dozens of times a day &mdash; often without realising it.
            Here is where it is hiding.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <DifficultyBadge level="Beginner" />
          </div>
          <CompletedBadge lessonId="ai-in-your-apps" />
          <ShareButton lessonTitle="ai-in-your-apps" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">You are already an AI user</h2>
          <p className="text-gray-600 leading-relaxed">
            When most people think about AI, they picture robots or futuristic chatbots. But the truth
            is far more ordinary &mdash; and far more interesting. AI is woven into the fabric of the
            apps and devices you use every single day. You have been using it for years, long before
            ChatGPT or Claude were household names.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This lesson walks through the AI running silently inside the most common apps, so you can
            see how the technology you have already learned about actually shows up in the real world.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Google Search</h2>
          <p className="text-gray-600 leading-relaxed">
            When you type a search query, Google does not just scan a list of websites for your exact
            words. It uses AI to understand <em>what you mean</em>, not just what you wrote. If you
            search &ldquo;best way to get red wine out of carpet&rdquo;, it understands this as a
            stain-removal question, not a question about wine or carpets separately.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'Autocomplete suggestions',
                text: 'As you type, a language model predicts what you are trying to search for, based on what billions of other people have searched for. It adapts to your location and the time of year.',
              },
              {
                label: 'Featured snippets',
                text: 'The answer box at the top of results is AI extracting a direct answer from a web page rather than just linking to it.',
              },
              {
                label: 'Spam and quality filtering',
                text: 'AI constantly evaluates websites for quality and trustworthiness. Sites that use tricks to game the algorithm are penalised automatically.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-blue-50 border border-blue-100 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-blue-800 text-sm">{label}</p>
                <p className="text-blue-700 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Google Maps and navigation apps</h2>
          <p className="text-gray-600 leading-relaxed">
            Modern sat-nav is a showcase of applied AI. When Maps shows you that a route will take
            35 minutes and the road is coloured orange, that is the result of several AI systems
            working together.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F697;',
                label: 'Real-time traffic',
                text: 'Google Maps aggregates anonymised GPS data from millions of phones. When devices are moving slowly along a stretch of road, AI detects this as congestion. No traffic cameras needed — the phone in every driver\'s pocket is the sensor.',
              },
              {
                icon: '&#x23F1;&#xFE0F;',
                label: 'Arrival time predictions',
                text: 'The estimated arrival time uses machine learning trained on years of historical data — what typical journey times look like on a Thursday evening on this specific road, factoring in school run times, local events, and weather.',
              },
              {
                icon: '&#x1F6A7;',
                label: 'Route optimisation',
                text: 'Choosing the fastest route among dozens of options, and updating in real-time as conditions change, is a problem that AI handles far faster than any human could.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Translation apps</h2>
          <p className="text-gray-600 leading-relaxed">
            Google Translate and DeepL can now translate between over 100 languages with quality
            that would have seemed like science fiction 15 years ago. The leap came when translation
            switched from rule-based systems to neural machine translation.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Instead of grammar rules written by hand, the AI was trained on billions of pairs of
            sentences in two languages &mdash; for example, the same document in both English and
            French &mdash; and learned to translate by finding deep patterns in that data. It does
            not understand language the way a human does, but it has learned which sequences of words
            in one language map to which sequences in another.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 text-sm text-blue-800">
            <p className="font-semibold mb-1">Why it still makes mistakes</p>
            <p>Translation AI struggles with idioms, humour, and cultural context. It also does better with widely spoken languages like Spanish or French (enormous training data) than with less common languages.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Spotify and Netflix recommendations</h2>
          <p className="text-gray-600 leading-relaxed">
            When Spotify creates your Discover Weekly playlist, or Netflix shows &ldquo;because you
            watched&rdquo; suggestions, a recommendation engine is at work. These are some of the
            most commercially important AI systems in the world.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'Collaborative filtering',
                text: 'The system looks for people with similar taste profiles to yours. If 10,000 people who love the same artists as you all love a particular lesser-known album, the algorithm predicts you will enjoy it too.',
              },
              {
                label: 'Content-based analysis',
                text: 'Spotify also analyses the audio itself — tempo, key, energy, danceability — and groups songs with similar features. Netflix analyses genre, tone, cast, and narrative structure.',
              },
              {
                label: 'The business case',
                text: 'Netflix has said that over 80% of hours watched come from recommendations rather than direct searches. Good recommendations keep subscribers paying — it is a huge AI problem with enormous commercial stakes.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-blue-50 border border-blue-100 rounded-xl p-4 space-y-1">
                <p className="font-semibold text-blue-800 text-sm">{label}</p>
                <p className="text-blue-700 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Autocorrect and predictive text</h2>
          <p className="text-gray-600 leading-relaxed">
            The word suggestions that pop up as you type on your phone are powered by a miniature
            language model. It has learned from billions of text messages, emails, and web pages
            which words tend to follow which other words in which contexts.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When you type &ldquo;looking forward to seeing&rdquo;, the phone suggests &ldquo;you&rdquo;
            because this follows that phrase most often in training data. It also learns from
            <em> your</em> typing over time, which is why it starts suggesting names and phrases
            specific to your life.
          </p>
          <div className="bg-amber-50 rounded-xl p-4 text-sm text-amber-800">
            <p className="font-semibold mb-1">Why autocorrect still gets it wrong</p>
            <p>Autocorrect predicts the most statistically likely word, not necessarily the correct one. If you regularly use unusual names or technical jargon, the model may override them because they look wrong statistically.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Email spam filters</h2>
          <p className="text-gray-600 leading-relaxed">
            Before machine learning, spam filters used simple rules: if an email contains certain
            words or comes from a suspicious domain, mark it as spam. Spammers quickly learned to
            evade those rules.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Modern spam filters use neural networks trained on billions of labelled emails. They
            learn subtle combinations of patterns &mdash; unusual sending servers, slightly
            off-brand language, suspicious link formats, urgency cues &mdash; that collectively
            signal spam even when each element looks innocent alone.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Gmail&rsquo;s spam filter now blocks over 99.9% of spam and phishing attempts before
            they reach your inbox.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Photo tools on your phone</h2>
          <p className="text-gray-600 leading-relaxed">
            Your smartphone camera is packed with AI. The hardware &mdash; a small sensor and lens
            &mdash; is physically limited, but software AI compensates in remarkable ways.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F464;',
                label: 'Portrait mode and background blur',
                text: 'A large camera lens blurs backgrounds using physics (depth of field). Your phone fakes it using AI that identifies the outline of a person, then digitally blurs everything classified as background. The quality has improved to the point of often fooling professional photographers.',
              },
              {
                icon: '&#x1F305;',
                label: 'Night mode',
                text: 'In low light, a sensor captures noise. Night mode takes many rapid exposures and uses AI to align and merge them, distinguishing genuine light signals from random noise. The result looks like it was taken in much better lighting.',
              },
              {
                icon: '&#x1F465;',
                label: 'Google Photos face grouping',
                text: 'Google Photos scans your photos and groups images by person automatically. It uses facial recognition AI to identify that the person in photo 1 and photo 47 are the same person, even across years and different lighting.',
              },
              {
                icon: '&#x1F50D;',
                label: 'Google Lens / visual search',
                text: 'Point your camera at a plant, a landmark, a product, or text in another language — AI can identify it, translate it, or find it for sale. This is computer vision: AI trained on billions of labelled images to recognise objects.',
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

        <div className="bg-blue-50 rounded-2xl p-6 space-y-3">
          <h2 className="text-xl font-bold text-blue-900">The bigger picture</h2>
          <p className="text-blue-800 leading-relaxed text-sm">
            AI is not a single technology that arrived recently &mdash; it is a family of techniques
            that have been quietly built into products for years. Spam filters have used machine
            learning since the early 2000s. Netflix recommendations since 2006. What changed recently
            is that AI became good enough to be useful in conversation and creative tasks, which made
            it visible to everyone.
          </p>
          <p className="text-blue-800 leading-relaxed text-sm">
            The AI in your apps is mostly narrow and specific &mdash; trained to do one thing well.
            Tools like Claude or ChatGPT are more general. But both grow from the same roots:
            patterns learned from data.
          </p>
        </div>

        <Quiz questions={quizQuestions} lessonId="ai-in-your-apps" />

        <LessonNote lessonId="ai-in-your-apps" />

        {/* Rating */}
        <LessonFeedback lessonId="ai-in-your-apps" />
        <LessonRating lessonId="ai-in-your-apps" />
        <ReviewLaterButton lessonId="ai-in-your-apps" />

        <RelatedLessons currentId="ai-in-your-apps" />

        <NextLesson currentId="ai-in-your-apps" />

      </div>
    </div>
  )
}
