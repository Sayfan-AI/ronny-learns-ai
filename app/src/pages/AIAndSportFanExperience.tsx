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

const LESSON_TITLE = 'AI and sport (fan experience)'

const KEY_TAKEAWAYS = [
  'VAR (Video Assistant Referee) uses AI to assist with offside decisions in football, drawing lines from body parts to check millimetre-level margins — but its use remains controversial because it slows down the game and often produces decisions that feel technically correct but instinctively wrong.',
  "AI automatically generates match highlight clips from broadcast footage in minutes, using computer vision to detect goals, near-misses, and key moments. Sky Sports, DAZN, and the Premier League all use this technology.",
  'Smart stadiums use AI to manage crowd flow, security, catering queues, and personalised in-seat ordering. Clubs like Tottenham Hotspur use biometric access control and AI-powered cameras throughout their grounds.',
  "Predictive betting algorithms are used by bookmakers to set odds in near-real time during matches — and by problem gambling AI tools to detect when a customer's behaviour patterns suggest they may be developing a gambling problem.",
  'Fan data is collected at enormous scale — from app usage and ticket purchases to in-stadium movement patterns. This data is used to personalise experiences but also raises significant privacy questions about what sports clubs know about their fans.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does VAR primarily use AI to decide, and why is it controversial?',
    options: [
      'VAR uses AI to predict which team will win based on live performance data, and it is controversial because clubs believe it undermines the importance of actually playing the game',
      'VAR uses AI to draw precise measurements for offside decisions and check for fouls, but it is controversial because it can overturn instinctive calls and slow games down with lengthy reviews',
      'VAR uses AI to automatically assign yellow and red cards based on foul severity data, removing referee discretion entirely from disciplinary decisions',
      'VAR uses AI to detect when players are diving or simulating injury, automatically awarding the opposing team a free kick and booking the offender',
    ],
    correctIndex: 1,
    explanation:
      "VAR (Video Assistant Referee) uses computer vision and AI-assisted line drawing to check decisions that would previously have been entirely at the referee's discretion. The most contested application is offside: the system draws lines from a player's relevant body part (armpit, shoulder, toe) to check whether it is fractionally ahead of the last defender. This can produce decisions where a player is technically offside by a matter of centimetres — less than the margin of error of the technology — but the goal is disallowed anyway. Critics argue this removes the human judgement that made marginal offside calls forgivable, slows the game with lengthy reviews, and produces outcomes that feel technically correct but destroy the joy of goal scoring. Proponents argue it is fairer and more consistent. The debate continues.",
    hint: 'Think about the tension between precision and human instinct in officiating.',
  },
  {
    question: 'How does AI generate automatic sports highlights for broadcasters and apps?',
    options: [
      'AI watches entire matches in real time and predicts at the start which moments will be the most exciting, pre-clipping them ready for broadcast before they have actually happened',
      'AI analyses video footage using computer vision to detect events like goals, near-misses, and crowd reactions — then automatically clips and assembles these moments into a highlights reel',
      'AI generates synthetic highlight footage by creating realistic animations of the best moments from match data, without using any actual match footage',
      'AI distributes highlight clips to different fan audiences based on which club they support, automatically removing footage of goals scored against their team',
    ],
    correctIndex: 1,
    explanation:
      "Producing a highlights package traditionally required a human editor watching recorded footage and manually identifying and clipping moments of interest. AI has transformed this. Computer vision models trained on thousands of hours of sports footage can detect specific events: the ball crossing the goal line, a player falling in the penalty area, players celebrating, the crowd suddenly rising. Audio analysis adds another layer — a crowd roar typically accompanies something significant. The AI can produce a rough highlights package within minutes of the final whistle, which is then reviewed by a human editor for broadcast. Services like Stats Perform, WSC Sports, and the Premier League's own AI systems use this technology. It also powers the short-form clips served automatically on apps like Sky Sports and the official Premier League app.",
    hint: 'Think about using computer vision to detect specific events — goals, celebrations, crowd reactions.',
  },
  {
    question: 'What AI features are used in modern "smart stadiums" like Tottenham Hotspur Stadium?',
    options: [
      'Smart stadiums use AI to play personalised entrance music for each fan as they arrive, selected based on their streaming history and emotional state as detected by facial recognition',
      'Smart stadiums use AI for biometric access control, crowd flow management, intelligent camera networks for security, and personalised in-seat food and drink ordering',
      'Smart stadiums replace all human stewards and security staff with AI-powered robots, reducing operating costs while improving incident response times',
      'Smart stadiums use AI to beam personalised advertisements directly into individual fans\' field of vision using augmented reality glasses distributed at the entrance',
    ],
    correctIndex: 1,
    explanation:
      "Tottenham Hotspur Stadium (opened in 2019) is often cited as the UK's most technologically advanced sports venue. It uses biometric access control, where season ticket holders' faces are scanned at entry rather than requiring physical tickets. Its intelligent camera network monitors crowd density throughout the stadium, helping stewards manage flow and identify potential safety issues before they escalate. An AI-powered ordering system allows fans to order food and drink to their seat from their phones, with the system predicting and pre-positioning stock based on demand patterns. The club collects data from all of these systems. Similar technology (at various levels) is being rolled out across Premier League grounds as clubs invest in improving the matchday experience while also gathering valuable fan data.",
    hint: 'Think about the practical applications of AI that would improve safety and convenience in a large venue.',
  },
  {
    question: 'How do bookmakers use AI in live betting during sports matches?',
    options: [
      'Bookmakers use AI to predict the outcome of matches before they start and set fixed odds that cannot change once betting opens',
      'Bookmakers use AI to update odds in near-real time as a match progresses, processing performance data to reflect changing probabilities — while separate AI tools monitor customers for signs of problem gambling',
      'Bookmakers use AI to prevent customers from placing bets during crucial moments of a match, reserving those odds for professional traders who pay a subscription fee',
      'Bookmakers use AI to automatically close losing accounts and reward winning accounts with bonus funds, creating a self-optimising customer portfolio that maximises profitability',
    ],
    correctIndex: 1,
    explanation:
      "Live (in-play) betting has grown enormously — it now accounts for the majority of sports betting revenue in the UK. Offering live betting requires odds that update within seconds as the match develops: when a goal is scored, when a red card is shown, when a penalty is awarded. AI systems process live match data (tracking player positions, ball speed, match events) and update odds continuously, balancing the bookmaker's exposure across all bets. A separate regulatory and ethical application is responsible gambling AI: the UK's Gambling Commission requires operators to implement tools that detect when a customer's betting patterns suggest problem gambling. Bettor360, GambetAI, and similar tools analyse betting speed, stake size, frequency, and session length to flag vulnerable customers before they come to serious financial harm.",
    hint: 'Think about two sides: setting odds fast and protecting customers from harm.',
  },
  {
    question: 'Why do privacy advocates express concern about the data collected from sports fans?',
    options: [
      'Sports clubs share fan attendance data directly with government agencies, allowing immigration enforcement teams to check visa compliance among stadium attendees',
      'The combination of biometric access data, app behaviour, in-stadium movement, purchasing history, and viewing data builds detailed profiles of fans that they cannot easily access or control',
      'Privacy concerns centre mainly on children attending matches with their parents, as child data laws make it illegal to collect any data from under-18s at live events',
      'The concern is that sports clubs sell fan data to rival clubs, allowing opponents to predict which players a club\'s supporters value most — giving a competitive advantage in transfer negotiations',
    ],
    correctIndex: 1,
    explanation:
      "Sports clubs and broadcasters collect data about their fans at multiple points: ticket purchase details, app usage (when you watch, what you watch, how long), in-stadium movement (if the venue uses cameras or app location services), merchandise purchases, and — at clubs with biometric entry — face scan data. Individually, these data points seem innocuous. Combined, they create detailed profiles of individual fans' habits, preferences, and routines. Under UK GDPR, fans have rights to access this data, request its deletion, and understand how it is used. But exercising these rights requires awareness and effort. Privacy advocates argue that sports fans — who have strong emotional attachment to their clubs — are particularly unlikely to read privacy policies carefully or object to data collection that feels like it is enhancing their experience.",
    hint: 'Think about what a club knows about you from multiple data sources combined together.',
  },
]

export function AIAndSportFanExperience() {
  useMarkVisited('ai-and-sport-fan-experience')

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x26BD;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and sport (fan experience)
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            VAR, AI highlights, smart stadiums, predictive betting, and personalised broadcasts
            — how AI is changing what it means to be a sports fan.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-sport-fan-experience" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI is everywhere in modern sport</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Sports was an early adopter of data analytics, and AI has accelerated this dramatically. From what happens on the pitch to what you experience watching at home, AI is shaping the modern sporting experience in ways that are not always obvious.
          </p>
          <div className="space-y-2">
            {[
              'The Premier League uses AI-assisted officiating through VAR for goals, penalty decisions, and red card incidents',
              'Sky Sports, TNT Sports, and the BBC all use AI tools to produce automated highlights, statistics, and data visualisations',
              'All 20 Premier League clubs now employ data analysts who use AI tools to scout players, plan tactics, and monitor opponent performance',
              'Wembley, Tottenham Hotspur Stadium, and other UK venues use AI-powered crowd management systems',
              'UK sports betting handles over £14 billion per year — AI drives the real-time odds changes that make live betting possible',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">VAR — the most debated use of AI in football</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            VAR (Video Assistant Referee) was introduced to English football in 2019 and has been controversial ever since. It uses a combination of camera technology and AI-assisted line drawing to check four types of decision: goals, penalties, direct red cards, and mistaken identity.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4CF;',
                label: 'How offside AI works',
                text: "For offside checks, AI draws lines from the relevant body part of the attacker (armpit, shoulder, hip) to the last defender. If any part of the attacker is ahead of any part of the defender, it is offside — regardless of how marginal. This precision can produce decisions where a player is offside by a centimetre or less.",
              },
              {
                icon: '&#x23F1;&#xFE0F;',
                label: 'The problem with precision',
                text: "The system's precision creates decisions that feel instinctively wrong. Football has always accepted that marginal offside calls would be given on-field — a centimetre either way was not distinguishable by the human eye. VAR produces technically correct but often deeply unpopular decisions that VAR itself may produce inconsistently due to camera angle limitations.",
              },
              {
                icon: '&#x1F4AC;',
                label: 'The public debate',
                text: "Fan groups, managers, and former players have called for reform or abolition of VAR in its current form. The Premier League has considered changes to how it is applied. This debate reflects a wider question: when does algorithmic precision help humans, and when does it undermine the spirit of what they are doing?",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">{label}</p>
                  <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Personalised broadcasts and fan data</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI is changing how sports is delivered to fans — both making it more personalised and raising questions about data collection.
          </p>
          <div className="space-y-2">
            {[
              'Streaming platforms like DAZN use AI to recommend which matches and sports to watch based on your viewing history',
              'AI-generated personalised graphics — showing statistics about your favourite player during a match — are already used by some broadcasters',
              'The Premier League app uses AI to deliver personalised notifications, highlight clips, and articles based on which clubs you follow',
              "Behind the scenes, AI analyses viewership data to determine which camera angles fans prefer, which commentators they engage with, and even how long they watch before switching off",
              'Sky Sports uses AI sentiment analysis on social media to gauge fan reactions to games and players in near-real time',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-amber-600 dark:text-amber-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <LessonNote lessonId="ai-and-sport-fan-experience" />
        <ReviewLaterButton lessonId="ai-and-sport-fan-experience" />

        <Quiz lessonId="ai-and-sport-fan-experience" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-sport-fan-experience" />
        <LessonFeedback lessonId="ai-and-sport-fan-experience" />

        <RelatedLessons currentId="ai-and-sport-fan-experience" />

        <NextLesson currentId="ai-and-sport-fan-experience" />

      </div>
    </div>
  )
}
