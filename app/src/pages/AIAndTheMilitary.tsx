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

const LESSON_TITLE = 'AI and the military'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does "loitering munition" mean in the context of autonomous weapons?',
    options: [
      'A missile that travels slowly to give the operator more time to change the target',
      'A weapon that can fly around an area for an extended period, identify a target on its own, and strike it — sometimes without a human giving the final order to fire',
      'A drone that is used exclusively for surveillance and never carries weapons',
      'A type of naval mine that drifts with ocean currents and detonates on contact',
    ],
    correctIndex: 1,
    explanation:
      'A loitering munition (sometimes called a "kamikaze drone") is a weapon that can fly around an area — loitering — searching for targets meeting criteria programmed into it, then attacking when it finds one. The Switchblade, used by Ukraine, and the Kargu-2, made by a Turkish defence company, are examples. What makes loitering munitions controversial is the degree of autonomy: some models can select and engage targets with little or no human involvement in the final decision to strike. This raises profound legal and ethical questions about accountability — if an autonomous weapon kills a civilian, who is responsible?',
    hint: 'Think about what "loitering" means — staying in one area — and combine that with the word "munition" (a weapon).',
  },
  {
    question: 'What is "meaningful human control" and why does it matter in AI weapons?',
    options: [
      'A technical standard that ensures AI weapons can be remotely shut down by any soldier in the field',
      'The UK government\'s stated requirement that a human must remain in genuine control of decisions to use lethal force — not just nominally present in the loop',
      'A UN treaty that has been signed by all major military powers, banning fully autonomous weapons',
      'A training programme that teaches soldiers how to operate AI-powered equipment safely',
    ],
    correctIndex: 1,
    explanation:
      '"Meaningful human control" is the principle — endorsed by the UK government and many human rights organisations — that a human being must exercise genuine, substantive control over the decision to use lethal force. This goes beyond simply having a human "in the loop": if an AI system recommends a target and a human has only a few seconds to approve or reject it, under enormous pressure, in a complex and chaotic environment, critics argue that the human control is nominal rather than meaningful. The Campaign to Stop Killer Robots and legal scholars argue that without meaningful human control, it becomes impossible to hold anyone accountable under international humanitarian law when civilians are killed.',
    hint: 'Think about the difference between a human technically being present in a decision and a human genuinely being in control.',
  },
  {
    question: 'What was Google\'s "Project Maven" and why did it cause controversy?',
    options: [
      'A Google programme to train AI systems to detect spam and misinformation, which employees objected to because it was too powerful',
      'A contract where Google provided AI technology to help the US military analyse drone footage and identify targets, which led to a staff protest and Google eventually pulling out',
      'A secret partnership between Google and the UK government to monitor social media for national security threats',
      'A Google research project to develop fully autonomous military robots, which was cancelled after public pressure',
    ],
    correctIndex: 1,
    explanation:
      "Project Maven was a US Department of Defense programme that contracted Google to supply AI systems for analysing large volumes of drone footage — identifying objects, vehicles, and people to help military analysts process data faster. When it became public in 2018, more than 4,000 Google employees signed a letter protesting the company's involvement, arguing that Google should not be building warfare technology. A number of employees resigned. Google subsequently declined to renew the contract and published AI principles stating it would not develop AI for weapons systems designed to cause harm. The episode illustrated that the tech industry's involvement in military AI is contested — both within companies and in public debate.",
    hint: 'Think about what AI is well-suited to do with large volumes of video footage, and why that might be useful to a military.',
  },
  {
    question: 'Why have major powers struggled to agree on a binding international treaty to ban or limit autonomous weapons?',
    options: [
      'Because the technology does not yet exist — autonomous weapons are still theoretical, so there is nothing to regulate',
      'Because all major military powers already have secret agreements in place that make a public treaty unnecessary',
      'Because countries like the US, Russia, and China see autonomous weapons as giving a strategic military advantage and are reluctant to limit their own capabilities, even as they express concern about others developing them',
      'Because the United Nations does not have legal authority to regulate weapons used by its member states',
    ],
    correctIndex: 2,
    explanation:
      "The core problem with arms control for autonomous weapons is the same as with many previous weapons technologies: no country wants to restrict its own capabilities while rivals continue to develop theirs. The US, Russia, and China are all investing heavily in military AI. Discussions at the UN's Convention on Certain Conventional Weapons (CCW) have been ongoing since 2014 but have not produced a binding treaty — partly because major powers have resisted any agreement that would constrain them. The US has published principles on responsible military AI use and supports some international norms, but has opposed a binding ban. Critics argue this leaves a dangerous gap: if the most capable military nations will not commit to limits, smaller states have little incentive to either.",
    hint: 'Think about what motivates countries to develop new weapons technologies and what would make them agree to limit them.',
  },
]

export function AIAndTheMilitary() {
  useMarkVisited('ai-and-the-military')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x2694;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and the military
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Autonomous drones, AI-assisted targeting, the race between major powers, and the
            difficult question of who is responsible when a machine decides to use lethal force.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-the-military" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI in modern warfare: an overview</h2>
          <p className="text-gray-600 leading-relaxed">
            Artificial intelligence is transforming warfare as profoundly as gunpowder, aircraft,
            and nuclear weapons did before it. The world's major military powers — the United States,
            China, Russia, and others — are investing billions in military AI, and the technology
            is already being used in active conflicts.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Military AI covers a wide spectrum: from systems that help analysts process
            reconnaissance footage, to drones that can navigate and attack without a human pilot,
            to AI that assists in nuclear command and control. Each raises different ethical and
            legal questions — but all share a common concern: <strong>what happens when life-and-death
            decisions are made by algorithms rather than human beings?</strong>
          </p>
          <div className="bg-slate-50 rounded-xl p-4">
            <p className="text-slate-700 text-sm leading-relaxed">
              This is one of the most contested areas of AI ethics. Unlike privacy or job
              displacement — where the harms are often diffuse — military AI can cause immediate,
              irreversible harm. Getting it wrong can mean killing civilians or triggering
              unintended escalation between nuclear powers.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Autonomous weapons: drones and loitering munitions</h2>
          <p className="text-gray-600 leading-relaxed">
            The most visible and controversial application of military AI is autonomous weapons —
            sometimes called "killer robots" by campaigners, though the term covers a wide range of
            systems with very different levels of human involvement.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F6F8;',
                label: 'Remote-controlled drones (human in the loop)',
                text: 'The simplest case: a human operator remotely pilots a drone and decides when to fire. The AI helps with navigation and targeting assistance, but a human makes the final decision. US Predator and Reaper drones fall into this category.',
              },
              {
                icon: '&#x1F4A5;',
                label: 'Loitering munitions (partial autonomy)',
                text: 'A loitering munition is a weapon that flies around an area searching for a target matching criteria set in advance, then strikes autonomously. The Switchblade (used by Ukraine) and Kargu-2 (made in Turkey) are examples. A human sets the mission parameters, but the weapon may select and strike a specific target on its own.',
              },
              {
                icon: '&#x1F916;',
                label: 'Fully autonomous weapons systems (no human in the loop)',
                text: 'These are weapons designed to select and engage targets entirely on their own, with no human involved in the final firing decision. No country has publicly admitted to deploying such a system in unrestricted combat, but several — including the US and China — are known to be developing them.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-red-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-red-800 text-sm mb-0.5">{label}</p>
                  <p className="text-red-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            The war in Ukraine has become a testing ground for many of these technologies — both
            sides are using AI-assisted drones extensively, and the conflict is accelerating
            development of more capable autonomous systems.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI in intelligence and surveillance</h2>
          <p className="text-gray-600 leading-relaxed">
            Before autonomous weapons, AI entered the military through a less dramatic but highly
            significant door: intelligence analysis. Modern militaries generate vast quantities of
            sensor data — satellite images, intercepted communications, drone footage — far more
            than human analysts can process.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F6F0;&#xFE0F;',
                label: 'Project Maven',
                text: "In 2017, the US Department of Defense contracted Google to develop AI that could analyse drone footage and automatically identify objects, vehicles, and people. When it became public in 2018, more than 4,000 Google employees protested, and Google eventually declined to renew the contract. The episode illustrated the tension between the tech industry's culture and military applications of AI.",
              },
              {
                icon: '&#x1F441;&#xFE0F;',
                label: 'Facial recognition on the battlefield',
                text: "Both the US and Russia are believed to use AI-powered facial recognition to identify individuals in conflict zones. Ukraine has used commercial facial recognition technology to identify Russian soldiers killed in combat. This raises difficult questions: the same technology used to identify enemy combatants can misidentify civilians.",
              },
              {
                icon: '&#x1F4CA;',
                label: 'Predicting enemy movements',
                text: "AI systems can analyse patterns in large datasets — troop movements, supply shipments, communications — to predict where and when an adversary might act. This kind of predictive intelligence has historically taken days for human analysts; AI can do it in minutes.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-indigo-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-indigo-800 text-sm mb-0.5">{label}</p>
                  <p className="text-indigo-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI-assisted decision making: the human in the loop problem</h2>
          <p className="text-gray-600 leading-relaxed">
            Many military AI systems are designed with a "human in the loop" — a human must approve
            any decision to use lethal force. In theory, this preserves accountability. In practice,
            it is more complicated.
          </p>
          <div className="bg-amber-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-amber-800 text-sm">The problem with fast decisions</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              Imagine an AI system that identifies a potential threat and gives a human operator
              7 seconds to approve or reject a strike. The operator is in a chaotic environment,
              under stress, with incomplete information, and 20 other things demanding their
              attention. In that situation, is the human really exercising meaningful control — or
              are they simply rubber-stamping the AI's recommendation?
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed">
            This is why many legal scholars and human rights organisations use the term
            <strong> "meaningful human control"</strong> rather than simply "human in the loop."
            The UK government has adopted "meaningful human control" as its stated policy — a human
            must be genuinely capable of exercising judgement, not just nominally present.
          </p>
          <p className="text-gray-600 leading-relaxed">
            But defining what makes human control "meaningful" in a fast-moving combat situation
            remains deeply contested — and different from what it means when approving a bank loan.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The 'killer robots' debate and international law</h2>
          <p className="text-gray-600 leading-relaxed">
            International humanitarian law (also called the laws of war or the Geneva Conventions)
            requires that combatants distinguish between fighters and civilians, avoid
            disproportionate harm to civilians, and take precautions to minimise civilian casualties.
            These rules were written for humans making decisions in the field.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The legal challenge with autonomous weapons is profound: an AI system targeting
            combatants on a battlefield must reliably distinguish a soldier carrying a weapon from
            a civilian carrying a tool — in poor visibility, in unfamiliar terrain, with a target
            who may not be wearing a uniform. Current AI image recognition systems make errors in
            controlled conditions; in the chaos of battle, the risks multiply.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F6A9;',
                label: 'Campaign to Stop Killer Robots',
                text: 'A coalition of over 180 organisations and 70 countries calling for a pre-emptive international ban on fully autonomous weapons. They argue that allowing machines to decide who lives and who dies crosses a fundamental moral line — and that accountability under international law requires a human decision-maker.',
              },
              {
                icon: '&#x1F1FA;&#x1F1F3;',
                label: 'UN discussions',
                text: 'Since 2014, the UN Convention on Certain Conventional Weapons (CCW) has been discussing autonomous weapons. Progress has been slow — major military powers have resisted a binding treaty. In 2023, the US led a political declaration on responsible military AI use, which was non-binding and signed by a limited number of countries.',
              },
              {
                icon: '&#x2696;&#xFE0F;',
                label: 'The accountability gap',
                text: 'If an autonomous weapon kills civilians in error, who is responsible? The programmer? The commanding officer who deployed it? The manufacturer? International law has no clear answer for decisions made by machines. Critics argue this accountability gap is itself a reason to ban weapons where the decision to kill is made without human involvement.',
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-green-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-green-800 text-sm mb-0.5">{label}</p>
                  <p className="text-green-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">The UK and US positions</h2>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F1EC;&#x1F1E7;',
                label: 'UK government policy',
                text: 'The UK has stated it will not develop or deploy fully autonomous weapons — requiring "meaningful human control" over all use of lethal force. The UK Defence AI Strategy (2022) commits to responsible development of military AI, including transparency and human oversight. However, critics note that "meaningful" is not clearly defined, leaving significant ambiguity.',
              },
              {
                icon: '&#x1F1FA;&#x1F1F8;',
                label: 'US Department of Defense Directive 3000.09',
                text: 'The US DoD directive (updated 2023) requires human judgement in the use of lethal force and prohibits autonomous weapons that cannot be controlled, commanded, or disabled. However, it does not prohibit all autonomous weapon systems — and its implementation is contested within the US military establishment.',
              },
              {
                icon: '&#x1F1E8;&#x1F1F3;',
                label: "China's approach",
                text: "China has called for a prohibition on fully autonomous weapons in the UN — but analysts note this position may be tactical rather than genuine, as China is investing heavily in military AI. The divergence between stated positions and actual investments makes meaningful arms control extremely difficult.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-blue-50 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-blue-800 text-sm mb-0.5">{label}</p>
                  <p className="text-blue-700 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What does this mean for all of us?</h2>
          <p className="text-gray-600 leading-relaxed">
            Military AI might seem distant from everyday life, but there are several ways it touches
            everyone:
          </p>
          <div className="space-y-2">
            {[
              {
                label: 'Dual-use technology',
                text: 'The same AI that powers your photo library (image recognition), your navigation app (spatial mapping), and your voice assistant (natural language processing) is being adapted for military use. Commercial AI companies are inevitably part of the military AI ecosystem, whether they choose to be or not.',
              },
              {
                label: 'The tech industry employee choice',
                text: "Following the Google Project Maven protests, many major tech companies have published AI ethics policies. Employees at Amazon, Microsoft, Palantir, and others have raised concerns about military contracts. Whether to work on military AI is a genuine ethical choice facing software engineers today.",
              },
              {
                label: 'The speed of the arms race',
                text: 'Military AI development is moving faster than international law and arms control mechanisms can keep up. The decisions being made now — about what autonomous weapons to develop, what norms to accept — will shape global security for decades. This is an area where public awareness and political engagement matters.',
              },
            ].map(({ label, text }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-3">
                <p className="font-semibold text-gray-800 text-sm mb-0.5">{label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <LessonNote lessonId="ai-and-the-military" />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Test your knowledge</h2>
          <Quiz questions={quizQuestions} lessonId="ai-and-the-military" />
        </div>

        <ReviewLaterButton lessonId="ai-and-the-military" />
        <LessonRating lessonId="ai-and-the-military" />
        <LessonFeedback lessonId="ai-and-the-military" />
        <RelatedLessons currentId="ai-and-the-military" />
        <NextLesson currentId="ai-and-the-military" />

      </div>
    </div>
  )
}
