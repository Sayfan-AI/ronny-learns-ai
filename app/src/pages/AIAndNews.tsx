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

const LESSON_TITLE = 'AI and the news'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What types of news stories are AI writing tools best suited to producing automatically?',
    options: [
      'In-depth investigative reports requiring interviews with multiple sources',
      'Opinion columns and editorials that require personal voice and perspective',
      'Structured data-driven stories like financial results, sports scores, and weather reports',
      'Breaking news stories that require rapid ethical judgements about what to publish',
    ],
    correctIndex: 2,
    explanation:
      "AI writing tools excel at structured, data-driven stories where the pattern is predictable: a company's quarterly earnings, a football match result, an election night vote count. The Associated Press has been using AI to generate thousands of earnings reports since 2014, and Reuters uses AI for sports results. These stories follow a template — the AI fills in the numbers, facts, and key figures automatically. In-depth investigative journalism, opinion writing, and breaking news involving complex ethical judgements remain domains where human journalists are essential — they require source relationships, judgement, and contextual understanding that current AI systems cannot provide.",
    hint: 'Think about which types of story follow a predictable pattern with structured data.',
  },
  {
    question: "What is a 'filter bubble' in the context of personalised news?",
    options: [
      'A tool that news organisations use to remove fake news from their websites',
      'A paid subscription service that filters news to show only stories relevant to your profession',
      'The effect of personalisation algorithms showing you mainly news that confirms your existing views, gradually limiting your exposure to different perspectives',
      'A legal requirement for news platforms to filter out content that violates privacy laws',
    ],
    correctIndex: 2,
    explanation:
      "The term 'filter bubble' was coined by internet activist Eli Pariser in 2011 to describe how personalisation algorithms create an invisible barrier around individuals — showing them content that matches their existing preferences and worldview, and hiding content that challenges or contradicts it. In news, this means that two people reading the same news app may see radically different stories based on their past clicks. Over time, this can mean you mainly encounter viewpoints you already agree with, rarely seeing the strongest arguments for positions you oppose. The concern is that this contributes to political polarisation — not because people see false information, but because they increasingly live in separate information worlds.",
    hint: 'Think about the long-term effect of only ever reading news that agrees with your existing views.',
  },
  {
    question: "What does a news source's 'transparency label' or 'AI tag' typically tell you?",
    options: [
      'That the entire article was written by AI with no human involvement',
      'That the article contains factual errors identified by an automated fact-checking system',
      'That AI tools were used in the production of the article — which could mean anything from AI-assisted research to automated generation of specific sections',
      'That the article has been reviewed and verified by an independent fact-checking organisation',
    ],
    correctIndex: 2,
    explanation:
      "When a news organisation labels an article with 'AI-assisted' or 'written with AI tools', it typically means that AI played some role in the article's production — but the nature of that role varies widely. It might mean the reporter used an AI tool to help research background facts, that a tool generated a first draft that a human editor then substantially rewrote, or that AI was used to produce specific structured sections (like a data table) within a human-written piece. Very few news organisations use AI to produce entire articles with no human involvement, and reputable outlets that do (like AP's earnings reports) have specific editorial policies around it. The label is a step towards transparency, but readers should understand it does not tell them exactly how AI was used.",
    hint: 'Think about the range of ways AI could be involved in producing a news story.',
  },
  {
    question: 'Which of the following is the best approach to avoiding filter bubbles in your news consumption?',
    options: [
      'Only read news from one trusted source you have vetted thoroughly',
      'Avoid all algorithmically curated news apps and only use social media for news instead',
      'Deliberately read across sources with different political perspectives, use tools like AllSides or ground.news to see how different outlets cover the same story, and occasionally search for topics rather than relying solely on your personalised feed',
      'Read only international news outlets, as domestic news is more likely to be politically biased',
    ],
    correctIndex: 2,
    explanation:
      "The most effective approach to reducing filter bubbles is active diversification: deliberately choosing to read outlets with different perspectives, and using tools specifically designed to help you do this. AllSides rates news sources on a political bias scale and shows how different outlets cover the same story. ground.news shows you which stories your usual sources are covering that others are not — revealing blind spots. Occasionally searching for a topic (rather than relying on your feed) surfaces a wider range of coverage. Social media is often worse for filter bubbles than dedicated news apps, because social feeds are heavily shaped by what your friends share. Reading only one source — even a good one — is a significant limitation because every outlet has editorial blind spots.",
    hint: 'Think about which approach exposes you to the widest range of perspectives deliberately.',
  },
]

export function AIAndNews() {
  useMarkVisited('ai-and-news')

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4F0;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and the news
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            AI-written articles, personalised newsfeeds, and filter bubbles — how algorithms now
            shape what news you see, and how to read more widely.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-news" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How news has changed</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            For most of the twentieth century, the front page of a newspaper was chosen by editors
            — human beings who decided, each morning, what mattered most. Television news worked the
            same way: producers selected the stories, in the order they would run, for everyone
            watching.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Today, most people get their news through an app, a social media feed, or a search
            engine — all of which are personalised by algorithms. The front page is no longer the
            same for everyone. It is tailored to each individual, shaped by their past clicks, their
            location, their demographic profile, and thousands of other signals. An AI system
            decides what news you see, in what order, and how prominently.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
            <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
              <strong>Where do people get news in the UK?</strong> According to the Reuters Digital
              News Report, around 40% of UK adults use social media as a news source. Around 30%
              use news aggregator apps like Apple News or Google News. Both are heavily personalised.
              Only a minority of people navigate directly to a news organisation's own website or app.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI-written news articles</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            You have probably already read news articles written by AI without knowing it.
            The practice is more widespread than most readers realise — but it is concentrated
            in specific types of stories.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CA;',
                label: 'Financial results',
                text: "The Associated Press (AP) has been using AI to automatically generate earnings reports since 2014. When a company publishes its quarterly results, the AP's AI reads the data and produces a news story within seconds — a story structured identically to one a human journalist would write. AP now produces thousands of such stories per quarter, covering companies that would not otherwise get any press coverage.",
              },
              {
                icon: '&#x26BD;',
                label: 'Sports scores and match reports',
                text: "Reuters, the Washington Post (with its Heliograf system), and others use AI to generate match reports, league table updates, and sports round-ups. These stories follow predictable structures that AI handles well: who won, what the score was, who scored, what the key moments were.",
              },
              {
                icon: '&#x1F326;&#xFE0F;',
                label: 'Weather and local news',
                text: "AI tools are used to generate local weather stories ('a cold front is expected in the North West this weekend'), town-level election result stories, and local crime statistics reports — types of coverage that local newspapers have cut as their budgets have shrunk.",
              },
              {
                icon: '&#x1F4AC;',
                label: 'AI-assisted journalism',
                text: "Beyond fully automated stories, many journalists now use AI tools to help with research, to transcribe interviews, to summarise documents, and to generate first drafts that they then substantially rewrite. This is different from fully automated generation — a human is still in control of the final story.",
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

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-orange-100 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Personalised newsfeeds: what gets in and what doesn't</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            When you open Google News, Apple News, or the Facebook news feed, an algorithm is
            selecting stories for you based on a combination of:
          </p>
          <div className="space-y-2">
            {[
              'What you have clicked on before — the strongest signal',
              'How long you spent reading previous stories',
              'Your location — local news is weighted higher',
              'What stories are popular with users whose behaviour resembles yours',
              'The publication: established outlets with strong track records are ranked higher',
              'The freshness of the story — breaking news is boosted regardless of personalisation',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5 flex-shrink-0">•</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The result is a newsfeed that feels relevant and engaging — but may be quietly
            narrowing your view of the world.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Filter bubbles in news</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The term <strong>filter bubble</strong> was coined by internet activist Eli Pariser in
            2011. It describes the invisible wall that personalisation algorithms build around
            individuals — showing them content that confirms their existing beliefs and filtering
            out content that challenges them.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            This is different from the misinformation problem (where the news is false). In a filter
            bubble, the news may be entirely accurate — it has simply been selected to match what
            you already believe. The problem is what you are <em>not</em> seeing.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F5F3;&#xFE0F;',
                label: 'Political filter bubbles',
                text: 'Research has found that people who get news primarily from social media or personalised apps tend to see far less coverage of political views they oppose than people who read a range of newspapers. Over time, this makes it harder to understand or engage with people who think differently.',
              },
              {
                icon: '&#x1F30D;',
                label: 'Geographic filter bubbles',
                text: 'Algorithms also filter by geography in ways that can reduce national or international awareness. If you live in a city, you may see very little rural news — and vice versa. International stories may be deprioritised if your clicks suggest you prefer domestic coverage.',
              },
              {
                icon: '&#x1F4B0;',
                label: 'The engagement incentive',
                text: "Platforms that rely on advertising need you to spend time on them. Content that triggers strong emotions — outrage, fear, tribal pride — tends to drive more clicks and shares than measured analysis. Recommendation algorithms often amplify this effect, not because they are designed to polarise, but because emotionally engaging content performs better by their metrics.",
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

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Tools for better news literacy</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Several tools and organisations exist specifically to help you read news more critically
            and more widely:
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F6E1;&#xFE0F;',
                label: 'NewsGuard',
                text: 'A browser extension and service that rates news websites on credibility — checking whether they publish corrections, identify their owners, distinguish news from opinion, and avoid publishing false content. Used by schools, libraries, and some governments to identify untrustworthy sources.',
              },
              {
                icon: '&#x2696;&#xFE0F;',
                label: 'AllSides',
                text: 'A US-based service that rates news sources on a political bias scale (Left, Lean Left, Centre, Lean Right, Right) and shows the same story covered by outlets across the spectrum side by side. Useful for understanding how differently the same event can be framed.',
              },
              {
                icon: '&#x1F30F;',
                label: 'ground.news',
                text: 'Shows you stories that your usual sources are covering that others are not — revealing blind spots in your news diet. Also shows how many sources across the political spectrum are covering a story, which can indicate how widely agreed upon the facts are.',
              },
              {
                icon: '&#x1F4AC;',
                label: 'Full Fact (UK)',
                text: "The UK's leading independent fact-checking organisation. Full Fact checks claims made by politicians, public figures, and news outlets and publishes its findings. It is non-partisan and transparent about its methods.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-purple-50 dark:bg-purple-900/20 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-purple-800 dark:text-purple-300 text-sm mb-0.5">{label}</p>
                  <p className="text-purple-700 dark:text-purple-200 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-indigo-100 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">What news organisations are doing</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Reputable news organisations are increasingly thinking carefully about how they use AI
            and how they label it:
          </p>
          <div className="space-y-2">
            {[
              'The BBC has published editorial guidelines stating AI must not be used to create news without human editorial control, and any AI-generated content must be labelled',
              'The Associated Press and Reuters publish clear policies on where AI is and is not used in their newsgathering',
              'The Guardian has committed to labelling all AI-assisted content and not using AI to write opinion or analysis',
              'The Nieman Journalism Lab at Harvard publishes regular research on how AI is changing journalism — useful for understanding the broader picture',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5 flex-shrink-0">•</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4">
            <p className="text-indigo-800 dark:text-indigo-200 text-sm leading-relaxed">
              <strong>The bottom line:</strong> AI transparency labelling in news is still early and
              inconsistent. When you see an AI label on a story, it tells you AI was involved — but
              not exactly how. As a reader, the best protection is to read across multiple sources,
              use fact-checking tools for important claims, and be especially sceptical of news that
              arrives via social media.
            </p>
          </div>
        </div>

        <LessonNote lessonId="ai-and-news" />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Test your knowledge</h2>
          <Quiz questions={quizQuestions} lessonId="ai-and-news" />
        </div>

        <ReviewLaterButton lessonId="ai-and-news" />
        <LessonRating lessonId="ai-and-news" />
        <LessonFeedback lessonId="ai-and-news" />
        <RelatedLessons currentId="ai-and-news" />
        <NextLesson currentId="ai-and-news" />

      </div>
    </div>
  )
}
