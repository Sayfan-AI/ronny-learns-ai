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

const LESSON_TITLE = 'AI and virtual reality'

const KEY_TAKEAWAYS = [
  'Virtual reality (VR) puts you inside a computer-generated world; augmented reality (AR) overlays digital images on the real world. AI makes both far more convincing and responsive.',
  'AI generates entire VR environments in real time — procedural generation creates forests, cities, and landscapes that are unique every time, without human artists drawing every tree.',
  'AI-powered NPCs (non-player characters) can now remember past conversations, react to your mood, and hold natural dialogues — blurring the line between simulated and real companions.',
  'The metaverse is a vision of persistent, shared virtual worlds. AI handles avatar animation, lip-syncing, real-time translation, and the moderation of billions of simultaneous interactions.',
  'Concerns about VR and AI include identity confusion, addiction, the surveillance of your physical movements and emotional responses, and the unequal access caused by expensive hardware.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is the main difference between virtual reality (VR) and augmented reality (AR)?',
    options: [
      'VR uses a headset and AR does not — AR is only available on desktop computers with large screens',
      'VR replaces your entire view with a computer-generated world, while AR overlays digital objects on your real-world view',
      'VR is used only for gaming and AR is used only for professional and industrial purposes',
      'VR requires an internet connection to work, while AR functions entirely offline using local processing',
    ],
    correctIndex: 1,
    explanation:
      'Virtual reality (VR) replaces everything you see with a computer-generated environment — you are fully immersed in a digital world. Augmented reality (AR) keeps the real world visible and adds digital elements on top of it: the IKEA app lets you place virtual furniture in your actual living room; Google Maps AR walking directions overlay arrows on the street you are standing in. Both technologies increasingly rely on AI to make the digital elements look realistic, respond to your movements, and understand what is in your environment.',
    hint: 'Think about what you can still see of the real world.',
  },
  {
    question: 'What is procedural generation in virtual reality?',
    options: [
      'A manual process where human artists design every object, texture, and building in a virtual world individually by hand',
      'An AI technique that generates unique environments, landscapes, and objects algorithmically — so no two playthroughs or experiences are ever identical',
      'A legal procedure that game developers must follow to obtain permission before creating virtual copies of real-world locations',
      'A hardware process where VR headsets generate the images displayed to the user using dedicated graphics chips',
    ],
    correctIndex: 1,
    explanation:
      "Procedural generation uses algorithms — increasingly AI ones — to create content automatically rather than having human artists create every element by hand. A procedurally generated forest has trees, rocks, and paths that were never individually designed by an artist; the algorithm created them following rules about how forests look. Games like No Man's Sky use procedural generation to create 18 quintillion unique planets. In VR, AI procedural generation is used to create training simulations, architectural walkthroughs, and game worlds that are vast, varied, and created in real time.",
    hint: 'Think about who creates the content — a human or an algorithm.',
  },
  {
    question: 'What is NVIDIA DLSS and why does it matter for VR?',
    options: [
      'A headset technology that tracks your eye movements to ensure virtual objects always appear in sharp focus',
      'An AI upscaling technique that renders images at a lower resolution and then uses neural networks to make them look higher quality — reducing the computing power VR requires',
      'A safety standard that all VR headsets must meet before they can be sold to consumers in the EU',
      'A voice recognition system built into VR headsets that lets users control virtual environments with spoken commands',
    ],
    correctIndex: 1,
    explanation:
      "DLSS (Deep Learning Super Sampling) is an AI technique developed by NVIDIA. Instead of rendering every pixel at full resolution — which is enormously expensive for the graphics processor — DLSS renders at a lower resolution and uses a neural network trained on high-quality images to fill in the missing detail. The result looks almost indistinguishable from native high resolution but requires far less computing power. This matters hugely for VR because VR needs very high frame rates (ideally 90 frames per second or more) to prevent motion sickness — AI upscaling makes this achievable on hardware that would otherwise struggle.",
    hint: 'Think about how AI can make graphics look better without doing all the work.',
  },
  {
    question: 'Which of these is a genuine concern raised by experts about AI and virtual reality?',
    options: [
      'That VR headsets powered by AI will eventually become so realistic that users will be unable to remove them physically',
      'That AI in VR systems can collect highly sensitive data about users — including their physical movements, gaze patterns, and emotional reactions — raising significant privacy questions',
      'That AI NPCs in VR will develop genuine consciousness and demand legal rights as sentient beings within the next decade',
      'That AI-generated VR environments are so energy-efficient that they are replacing real-world outdoor spaces faster than expected',
    ],
    correctIndex: 1,
    explanation:
      "VR headsets equipped with AI collect extraordinarily intimate data. They track where your eyes look (revealing what attracts your attention and what you avoid), how your body moves and responds, and increasingly your facial expressions and emotional state. This data is far more revealing than a web browsing history — it captures involuntary physical and emotional responses. Researchers have demonstrated that movement data from VR can identify individuals as reliably as a fingerprint. Privacy experts, regulators, and civil liberties organisations have raised serious concerns about how this data is stored, used, and potentially sold or shared.",
    hint: 'Think about what data your body unconsciously reveals.',
  },
]

export function AIAndVirtualReality() {
  useMarkVisited('ai-and-virtual-reality')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F97D;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and virtual reality
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            How AI powers immersive worlds — from AI-generated landscapes and lifelike virtual
            characters to the metaverse, AR in everyday life, and the real questions about
            identity, addiction, and surveillance.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-virtual-reality" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">VR vs AR — what is the difference?</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Virtual reality (VR) and augmented reality (AR) are often mentioned together but work quite differently.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-violet-50 dark:bg-violet-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F97D;</span>
              <div>
                <p className="font-semibold text-violet-800 dark:text-violet-200 text-sm mb-0.5">Virtual reality (VR)</p>
                <p className="text-violet-700 dark:text-violet-300 text-sm leading-relaxed">A headset blocks out the real world entirely and replaces your view with a computer-generated environment. You feel fully immersed — you can look around, move, and interact as if you were physically present in a different place. Popular headsets include the Meta Quest, PlayStation VR, and Apple Vision Pro.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-blue-50 dark:bg-blue-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F1;</span>
              <div>
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-0.5">Augmented reality (AR)</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">AR keeps the real world visible and adds digital objects on top of it. The IKEA app lets you place a virtual sofa in your actual living room. Snapchat filters add digital ears to your face. Surgeons use AR headsets that overlay patient data and imaging onto their real-world view during operations.</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-4">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              AI plays a central role in both — generating realistic environments in VR, and understanding the real world well enough to insert convincing digital objects into it in AR.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI-generated environments — worlds that build themselves</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Creating a believable virtual world by hand is enormously expensive. Every tree, cobblestone, and shadow has to be placed by an artist. AI is changing this fundamentally.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F332;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Procedural generation</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">AI algorithms can create entire landscapes — forests, cities, caves, alien planets — by following rules rather than requiring human artists to design every element. The game No Man's Sky uses procedural generation to create 18 quintillion unique planets. No artist designed any of them individually.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x2728;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">DLSS and AI upscaling</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">NVIDIA's DLSS (Deep Learning Super Sampling) renders images at a lower resolution and uses a neural network to fill in the missing detail, making them look far sharper. This allows VR to run at the high frame rates it needs to prevent motion sickness, on hardware that would otherwise struggle.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-green-50 dark:bg-green-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4A1;</span>
              <div>
                <p className="font-semibold text-green-800 dark:text-green-200 text-sm mb-0.5">Real-time physics and lighting</p>
                <p className="text-green-700 dark:text-green-300 text-sm leading-relaxed">AI-assisted physics engines and lighting systems make virtual worlds feel physically convincing — water flows realistically, cloth folds naturally, light bounces off surfaces correctly. These calculations would take days without AI acceleration.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI-powered NPCs — characters with memory and emotion</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Non-player characters (NPCs) are the virtual people and creatures you meet in games and simulations. Traditional NPCs follow scripts — ask them the same question twice and they give the same answer. AI is changing this.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            AI NPCs powered by large language models can hold genuine conversations, remember what you told them last session, adapt their personality based on how you treat them, and react with apparent emotion. Companies like Inworld AI are building NPC systems that give every character their own backstory, goals, and conversational style.
          </p>
          <div className="bg-blue-50 dark:bg-blue-950 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm">Why this matters</p>
            <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
              When virtual characters feel genuinely responsive, the line between simulated and real relationships begins to blur. This has real potential for education (AI tutors in VR), therapy (practising social situations with AI characters), and entertainment — but also raises important questions about emotional attachment to simulated beings.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The metaverse — what AI enables</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The metaverse is a vision of persistent, shared virtual worlds where people can work, socialise, shop, and play. AI is the infrastructure that makes shared virtual worlds possible at scale.
          </p>
          <div className="space-y-2">
            {[
              "Avatar animation: AI animates your virtual avatar in real time based on your body movements and facial expressions — tracked by the headset's cameras — so your virtual self mirrors you naturally.",
              'Real-time lip-syncing: When you speak, AI maps your speech to realistic mouth movements on your avatar, even translating between languages while keeping the lip movement in sync.',
              'AI moderation: With potentially millions of people in shared virtual spaces, AI moderators monitor conversations and behaviours for harassment, abuse, and illegal content — a task no human team could do at that scale.',
              "Personalised spaces: AI generates virtual offices, homes, and event spaces personalised to users' preferences and history — no two people's metaverse home need look the same.",
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AR in everyday life — it is already here</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            You may already use AR daily without thinking of it as a technology at all.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-amber-50 dark:bg-amber-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F30E;</span>
              <div>
                <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm mb-0.5">Navigation</p>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">Google Maps AR walking mode overlays arrows and directions on your camera view of the actual street you are standing in. AI identifies buildings and landmarks in the camera feed to anchor the directions precisely.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-amber-50 dark:bg-amber-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F8;</span>
              <div>
                <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm mb-0.5">Snapchat and Instagram filters</p>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">Filters that add dog ears, change your background, or apply virtual make-up use AI to track your face in real time and attach digital objects to it convincingly — even as you move.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-amber-50 dark:bg-amber-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F6CB;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm mb-0.5">Shopping and home design</p>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">IKEA Place and similar apps use AI to measure your room from the camera feed and render virtual furniture at the correct scale and perspective, so you can see exactly how a sofa will look in your living room before you buy it.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-amber-50 dark:bg-amber-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F3E5;</span>
              <div>
                <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm mb-0.5">Surgery and medicine</p>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">AR headsets in operating theatres overlay patient scans onto the surgeon's real-world view, guiding procedures with millimetre precision. AI aligns the virtual imaging with the physical patient in real time.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Concerns — identity, addiction, and surveillance</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            VR and AI together raise genuinely novel concerns that researchers, regulators, and ethicists are only beginning to grapple with.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-rose-50 dark:bg-rose-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F575;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-rose-800 dark:text-rose-200 text-sm mb-0.5">Unprecedented data collection</p>
                <p className="text-rose-700 dark:text-rose-300 text-sm leading-relaxed">VR headsets collect extraordinarily intimate data — where your eyes look, how your body moves, your emotional responses. Researchers have shown that movement data alone can identify individuals as reliably as a fingerprint. This data could be used to infer your political views, health conditions, and emotional vulnerabilities.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-rose-50 dark:bg-rose-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F9E0;</span>
              <div>
                <p className="font-semibold text-rose-800 dark:text-rose-200 text-sm mb-0.5">Identity and presence</p>
                <p className="text-rose-700 dark:text-rose-300 text-sm leading-relaxed">When your virtual avatar looks different from you — younger, different race, more attractive — studies show it changes how you behave and how others treat you. Extended time in VR can blur the boundary between virtual experiences and real memories.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-rose-50 dark:bg-rose-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x23F0;</span>
              <div>
                <p className="font-semibold text-rose-800 dark:text-rose-200 text-sm mb-0.5">Addiction and withdrawal</p>
                <p className="text-rose-700 dark:text-rose-300 text-sm leading-relaxed">VR environments can be designed to be more immediately rewarding than real life. AI personalisation can tailor the experience to keep you engaged beyond what is healthy. Some mental health researchers have raised concerns about VR dependency, particularly for children and teenagers.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-rose-50 dark:bg-rose-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4B0;</span>
              <div>
                <p className="font-semibold text-rose-800 dark:text-rose-200 text-sm mb-0.5">Access and inequality</p>
                <p className="text-rose-700 dark:text-rose-300 text-sm leading-relaxed">High-end VR headsets cost hundreds of pounds. AI-powered VR experiences require powerful computing. If immersive AI experiences become significant social and economic spaces, those who cannot afford the hardware risk being excluded from important opportunities.</p>
              </div>
            </div>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-virtual-reality" />

        <Quiz lessonId="ai-and-virtual-reality" questions={quizQuestions} />

        <LessonNote lessonId="ai-and-virtual-reality" />

        <LessonRating lessonId="ai-and-virtual-reality" />

        <LessonFeedback lessonId="ai-and-virtual-reality" />

        <RelatedLessons currentId="ai-and-virtual-reality" />

        <NextLesson currentId="ai-and-virtual-reality" />

        <CompletedBadge lessonId="ai-and-virtual-reality" />

      </div>
    </div>
  )
}
