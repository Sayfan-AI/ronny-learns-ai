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

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is procedural content generation in gaming?',
    options: [
      'A technique where human designers manually create every level, item, and world in a game',
      'The use of algorithms to automatically generate game content — levels, terrain, items, and worlds — rather than hand-crafting each one',
      'A method of compressing game files so they take up less storage space',
      'A way of streaming game content from the internet so games never need to be downloaded',
    ],
    correctIndex: 1,
    explanation:
      "Procedural generation uses algorithms (and increasingly, AI) to create game content automatically. Minecraft generates unique terrain every time you start a new world. No Man's Sky uses it to create 18 quintillion planets, each with distinct geography, plants, and animals. Without procedural generation, creating that much content by hand would be impossible.",
  },
  {
    question: "What did DeepMind's AlphaStar achieve that was remarkable?",
    options: [
      'It became the first AI to complete a video game without losing any lives',
      "It defeated top professional players at StarCraft II — a game considered extremely difficult for AI due to its complexity and speed requirements",
      'It designed a new video game entirely autonomously, without any human input',
      'It learned to play every major video game ever made within 24 hours',
    ],
    correctIndex: 1,
    explanation:
      "StarCraft II is one of the hardest games for AI because it requires managing hundreds of units simultaneously, planning many moves ahead, dealing with incomplete information (you can't see the whole map), and reacting in real time at speeds exceeding 200 actions per minute. AlphaStar beat top professional players in 2019, using reinforcement learning — it played millions of games against itself to develop strategy.",
  },
  {
    question: 'How do online games use AI to detect cheating?',
    options: [
      'They record all games and have human staff manually review suspicious footage',
      'AI systems analyse player behaviour patterns — aim consistency, reaction times, movement — and flag statistical anomalies that indicate aimbots or other cheats',
      'They rely entirely on other players reporting suspected cheaters',
      'They use AI to check if a player has ever visited cheat websites',
    ],
    correctIndex: 1,
    explanation:
      "Cheat detection AI looks for patterns that are statistically impossible for humans: perfect aim with no variation, superhuman reaction times, or movement that follows programmed paths rather than human decision-making. Valve's VAC system, used in Counter-Strike, compares player data against known cheat signatures. Anti-cheat systems from companies like BattlEye and Easy Anti-Cheat analyse thousands of data points per second.",
  },
  {
    question: 'How is AI used in game testing and quality assurance?',
    options: [
      'AI replaces all human game testers and is now the only form of testing used in the industry',
      'AI bots can play-test games automatically for thousands of hours, finding bugs, edge cases, and crashes that human testers would miss or take far longer to discover',
      'AI is only used to test the graphics quality of games, not gameplay mechanics',
      'AI game testing is still entirely theoretical — no major studio uses it yet',
    ],
    correctIndex: 1,
    explanation:
      "Game studios use AI bots to automate testing: bots can run through levels repeatedly, trying every combination of actions, at speeds no human could match. EA uses AI to test sports games by simulating thousands of match scenarios. Ubisoft's Commit Assistant AI predicts which code changes are likely to introduce bugs before they even reach testing. This doesn't eliminate human testers — it finds the low-hanging fruit so humans can focus on creative judgment.",
  },
]

export function AIAndGaming() {
  useMarkVisited('ai-and-gaming')

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F3AE;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and gaming
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            From Pac-Man ghosts to AlphaStar beating StarCraft pros &mdash; how AI shapes
            the games we play, the worlds we explore, and the fairness of online competition.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 5 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-gaming" />
          <ShareButton lessonTitle="AI and gaming" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Game AI: a brief history</h2>
          <p className="text-gray-600 leading-relaxed">
            Games have always needed AI &mdash; some kind of logic that makes the non-player
            characters behave in a believable way. How that logic works has changed enormously.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F47B;',
                label: '1980: Rule-based AI (Pac-Man)',
                text: "The four ghosts in Pac-Man each had a simple rule: Blinky chases you directly, Pinky tries to ambush you from ahead, Inky has a complex combined target, and Clyde retreats when he gets close. These were hand-coded rules — no learning, no adaptation. But they created the illusion of personality.",
              },
              {
                icon: '&#x2694;&#xFE0F;',
                label: '2000s: Finite state machines',
                text: "More complex games used FSMs — systems where characters could be in different 'states' (patrolling, alert, attacking, fleeing) and switch between them based on triggers. This gave enemy soldiers in stealth games convincing behaviour without true intelligence.",
              },
              {
                icon: '&#x1F9E0;',
                label: '2010s–now: Machine learning',
                text: "Modern game AI can use reinforcement learning — the same technique that powers AlphaGo and AlphaStar. AI agents learn by playing millions of games and receiving rewards for good outcomes. They discover strategies humans never thought of.",
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
          <h2 className="text-2xl font-bold text-gray-800">Procedural generation: infinite worlds</h2>
          <p className="text-gray-600 leading-relaxed">
            Creating game content by hand is expensive. Every room, enemy, item, and dialogue
            line takes developer time. Procedural generation uses algorithms to create content
            automatically &mdash; and AI is making it more sophisticated than ever.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x26F0;&#xFE0F;',
                label: 'Minecraft',
                text: "Every Minecraft world is unique — generated from a random 'seed' number using noise functions that create realistic-looking terrain, caves, biomes, and structures. No two worlds are the same, and yet they all feel coherent and believable. Billions of distinct worlds have been generated.",
              },
              {
                icon: '&#x1F30C;',
                label: "No Man's Sky",
                text: "18 quintillion planets (18,000,000,000,000,000,000), each generated on the fly with unique plants, animals, weather, and geography. Each animal's body shape, colouring, and behaviour is procedurally assembled from components. The entire universe fits in a few gigabytes of rules, not content.",
              },
              {
                icon: '&#x2694;&#xFE0F;',
                label: 'Roguelikes and randomisation',
                text: "Games like Hades, Dead Cells, and Spelunky generate a new dungeon layout, enemy placement, and item drops every run. This 'roguelike' genre has exploded because procedural generation means every playthrough is a fresh challenge.",
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
          <h2 className="text-2xl font-bold text-gray-800">AlphaStar: when AI beats the pros</h2>
          <p className="text-gray-600 leading-relaxed">
            In January 2019, DeepMind&rsquo;s AlphaStar defeated two of the world&rsquo;s top
            StarCraft II players. This was a landmark moment in AI &mdash; and a landmark
            moment in gaming.
          </p>
          <div className="bg-purple-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-purple-800 text-sm">Why StarCraft II is so hard for AI</p>
            <ul className="text-purple-700 text-sm space-y-1 leading-relaxed list-disc list-inside">
              <li>You manage hundreds of units simultaneously across a large map</li>
              <li>You can&rsquo;t see the whole map &mdash; you must make decisions under uncertainty</li>
              <li>You must plan many moves ahead while reacting in real time</li>
              <li>Top players perform over 200 precise actions per minute</li>
              <li>There are more possible game states than atoms in the universe</li>
            </ul>
          </div>
          <p className="text-gray-600 leading-relaxed">
            AlphaStar trained by playing millions of games against itself using reinforcement
            learning. It discovered strategies that surprised even expert human players &mdash;
            some of which professional players then adopted for their own games.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI game testing: finding the bugs</h2>
          <p className="text-gray-600 leading-relaxed">
            Before a game ships, developers need to find and fix bugs. Game testing used to
            mean hiring hundreds of testers to play repeatedly. AI is changing that.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F916;',
                label: 'Automated play-testing bots',
                text: "AI bots can play a game continuously, trying every possible combination of actions at machine speed. What would take a human tester a week to find, a bot might discover in hours — by doing things no human would think to try.",
              },
              {
                icon: '&#x1F4CA;',
                label: "EA's automated testing",
                text: "EA Sports uses AI agents to play thousands of simulated matches in FIFA and Madden, checking that gameplay statistics match real-world expectations. If an AI agent discovers it can score from an impossible angle every time, the developers know there's a bug to fix.",
              },
              {
                icon: '&#x1F6A8;',
                label: "Ubisoft's Commit Assistant",
                text: "Ubisoft built an AI that analyses code changes and predicts whether they're likely to introduce bugs — before the code is even tested. It was trained on years of bug reports and code history, and now catches potential issues earlier in development.",
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
          <h2 className="text-2xl font-bold text-gray-800">Catching cheaters in online games</h2>
          <p className="text-gray-600 leading-relaxed">
            Cheating in online games &mdash; using aimbots, wallhacks, or speed hacks &mdash; ruins
            the experience for everyone. AI is increasingly the primary defence against it.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F3AF;',
                label: 'Behavioural analysis',
                text: "Cheat detection AI looks for patterns that are statistically impossible for humans: perfect aim consistency with zero natural variation, reaction times faster than human neural limits, or movement that follows programmed paths rather than human decisions.",
              },
              {
                icon: '&#x1F512;',
                label: "Valve's VAC system",
                text: "Counter-Strike's Valve Anti-Cheat system compares player data against a database of known cheat software signatures. It also uses machine learning to detect new cheats it hasn't seen before — catching them by their behaviour rather than their code.",
              },
              {
                icon: '&#x2696;&#xFE0F;',
                label: "The arms race",
                text: "Cheat developers and anti-cheat AI are in a constant arms race. As AI gets better at detecting cheats, cheat software evolves to appear more human-like — introducing artificial aim variation, for example. This is an ongoing cat-and-mouse battle.",
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
          <h2 className="text-2xl font-bold text-gray-800">Why games matter for AI research</h2>
          <p className="text-gray-600 leading-relaxed">
            Games are not just entertainment &mdash; they are one of the most important testing
            grounds for AI research.
          </p>
          <div className="bg-amber-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-amber-800 text-sm">Games as AI laboratories</p>
            <ul className="text-amber-700 text-sm space-y-1 leading-relaxed">
              <li><strong>Clear rules:</strong> Games have defined goals and scoring, making it easy to measure AI progress</li>
              <li><strong>Safe environment:</strong> An AI making mistakes in a game costs nothing; mistakes in the real world can be costly or dangerous</li>
              <li><strong>Scalable complexity:</strong> Researchers can start with simple games (Pong) and work up to complex ones (StarCraft)</li>
              <li><strong>Techniques transfer:</strong> Reinforcement learning from games now powers real-world systems in robotics, drug discovery, and supply chains</li>
            </ul>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            DeepMind literally started by teaching AI to play Atari games &mdash; and the
            techniques they developed there led directly to AlphaGo, AlphaFold, and breakthroughs
            in scientific research.
          </p>
        </div>

        <ReviewLaterButton lessonId="ai-and-gaming" />
        <LessonNote lessonId="ai-and-gaming" />

        <Quiz questions={quizQuestions} lessonId="ai-and-gaming" lessonTitle="AI and gaming" />

        <LessonFeedback lessonId="ai-and-gaming" />
        <LessonRating lessonId="ai-and-gaming" />
        <RelatedLessons currentId="ai-and-gaming" />
        <NextLesson currentId="ai-and-gaming" />
      </div>
    </div>
  )
}
