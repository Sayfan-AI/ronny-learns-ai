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

const LESSON_TITLE = 'AI and pregnancy and baby care'

const KEY_TAKEAWAYS = [
  'Bump-tracking apps like Ovia and The Bump use AI to personalise week-by-week pregnancy information, flag potential symptoms that warrant a call to a midwife, and help parents log and understand their body changes throughout pregnancy.',
  'AI is now used in NHS and private hospitals to analyse ultrasound images, helping sonographers spot potential issues earlier and more consistently — the AI does not replace the scan, it assists the clinician reading it.',
  'Baby monitors have moved far beyond audio. Modern smart monitors use AI to detect movement and breathing, alert parents if a baby has not moved for a worrying length of time, and track sleep patterns to give advice on routines.',
  'Sleep and feeding tracker apps analyse patterns in the data parents log (or that wearables collect) and suggest adjustments to help babies settle into a more predictable routine — reducing the exhaustion of the newborn stage.',
  'Parental data collected by these apps is highly sensitive. Many apps share or sell anonymised data, and parents should read privacy policies carefully, choose reputable services with clear data policies, and know how to delete their data.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does an AI-powered bump-tracking app like Ovia primarily offer that a standard pregnancy calendar does not?',
    options: [
      'A direct video link to a midwife available 24 hours a day, seven days a week, for any medical question',
      "Personalised week-by-week information and symptom flagging based on the user's individual pregnancy data, not just generic information",
      "An automatic appointment-booking system that schedules every NHS antenatal appointment on the user's behalf",
      "A genetic testing service that predicts the baby's characteristics using a saliva sample posted to the app provider",
    ],
    correctIndex: 1,
    explanation:
      "Bump-tracking apps use the information you enter — your due date, health history, symptoms, and logged data — to personalise the experience. Rather than showing the same 'your baby is the size of a lime' content to every user in week 12, an AI-powered app can flag if a symptom you log warrants speaking to a midwife, track patterns across your pregnancy, and surface information relevant to your specific situation. They cannot replace medical care and are not diagnostic tools, but they can make information feel more relevant and prompt appropriate action.",
    hint: 'Think about what "personalised" means compared to generic week-by-week content.',
  },
  {
    question: 'How does AI assist in ultrasound scanning during pregnancy?',
    options: [
      'AI replaces the sonographer entirely — the machine runs the scan and produces a report without any human involvement',
      'AI analyses the ultrasound image to help the sonographer identify structures and flag potential anomalies, but a clinician makes all decisions',
      "AI enhances the image quality so parents can see a photo-realistic 3D rendering of their baby's face during every routine scan",
      'AI provides a legal second opinion that the NHS is required to follow when assessing the results of a 20-week anomaly scan',
    ],
    correctIndex: 1,
    explanation:
      "AI in ultrasound is a decision-support tool, not a replacement for human expertise. Systems trained on millions of scans can help sonographers automatically measure foetal head circumference and femur length, detect standard views, and flag images that show possible abnormalities for closer review. Studies show this can improve consistency — catching things that might be missed when a clinician is tired or when image quality is poor. However, the AI's output is always reviewed by a qualified sonographer or clinician who makes the final clinical judgement.",
    hint: 'Think about the relationship between the AI and the human clinician.',
  },
  {
    question: 'What is the key AI feature that makes a modern smart baby monitor different from a traditional audio monitor?',
    options: [
      'Smart monitors connect to a subscription service that employs trained night nannies who watch the video feed remotely while parents sleep',
      'Smart monitors use AI to detect movement, breathing patterns, and unusual stillness, alerting parents to potential concerns automatically',
      'Smart monitors record everything and upload the footage to a cloud album that the baby can watch when they grow up',
      'Smart monitors can detect crying and automatically start a robot arm that moves the cot, rocks the baby, and inserts a dummy without parental input',
    ],
    correctIndex: 1,
    explanation:
      "Smart baby monitors from brands like Nanit, Owlet, and Cubo use AI-powered computer vision to track the baby's movement in the cot. The camera continuously analyses the image to detect breathing movement and can alert parents if the baby has been still for longer than the threshold you set. Some also track sleep patterns and provide charts of sleep stages. Owlet's Smart Sock monitors pulse oximetry on the baby's foot. These devices give parents more information, but they are not medical devices approved to prevent SIDS and should not create a false sense of security.",
    hint: 'Think about what the AI analyses that older monitors could not.',
  },
  {
    question: 'How do AI-powered sleep and feeding tracker apps try to help parents establish a baby routine?',
    options: [
      "They automatically adjust the baby's sleep environment — dimming lights, changing room temperature, and playing sounds — without the parent needing to act",
      "They analyse the patterns in logged or sensor data over days and weeks to identify the baby's natural rhythms and suggest when to offer feeds or naps",
      'They provide a medically certified sleep training programme that is guaranteed to have any baby sleeping through the night within seven days',
      "They use facial recognition to detect the baby's mood from photos and tell parents whether the baby is hungry, tired, or in pain",
    ],
    correctIndex: 1,
    explanation:
      "Apps like Huckleberry and Baby Tracker ask parents to log feeds, naps, and nappy changes. Over time — usually a week or more of data — the AI identifies patterns in the baby's natural rhythms. It can then suggest the optimal window to offer a nap (the 'sweet spot' just as a baby is naturally getting drowsy) or flag that a baby consistently wakes early because of an early morning feed that could be moved. The goal is to help tired parents work with their baby's rhythms rather than against them.",
    hint: 'Think about what the app does with the data you log over time.',
  },
  {
    question: 'Why should parents read the privacy policy of pregnancy and baby apps carefully?',
    options: [
      'Because the law requires parents to sign a declaration that they have read the privacy policy before the app activates',
      'Because pregnancy and baby data is highly sensitive — covering health, location, and child welfare — and some apps share or sell it, sometimes in ways that are hard to undo',
      'Because only apps with a privacy policy approved by the NHS are safe to use, and reading it confirms the NHS has endorsed the service',
      'Because privacy policies contain step-by-step instructions on how to download and export your data for use with other healthcare providers',
    ],
    correctIndex: 1,
    explanation:
      "Pregnancy and baby apps collect some of the most sensitive personal data imaginable — health symptoms, scan images, weight gain, birth details, and a child's early life. Research by groups including the British Medical Journal has found that many popular pregnancy apps share data with third parties, including advertisers. Some apps have been found sharing data in ways that could affect insurance decisions. Practical steps include choosing apps with explicit 'no data sharing' policies, using a pseudonym where possible, and deleting your account when you no longer need the service.",
    hint: 'Think about what type of data pregnancy apps collect and why that matters.',
  },
]

export function AIAndPregnancyAndBabyCare() {
  useMarkVisited('ai-and-pregnancy-and-baby-care')

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F476;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and pregnancy and baby care
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Bump-tracking apps, AI ultrasound analysis, smart baby monitors, sleep trackers,
            and the important questions around privacy and parental data.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Beginner</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-pregnancy-and-baby-care" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-pink-100 dark:border-pink-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI arrives in the most personal moments</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Pregnancy and early parenthood have always involved enormous amounts of information — much of it conflicting, anxiety-inducing, and hard to personalise. AI is starting to change that, offering tools that adapt to the individual rather than presenting generic advice to everyone.
          </p>
          <div className="space-y-2">
            {[
              'The average pregnancy app is downloaded by over 70% of pregnant people in the UK at some point during their pregnancy',
              'Ovia, one of the most popular bump-tracking apps, claims over 10 million users worldwide and is used by some NHS trusts for patient communication',
              'AI-assisted ultrasound analysis is being piloted in NHS hospitals across the UK as of 2024',
              'Smart baby monitors now account for over 30% of the UK baby monitor market, up from almost nothing a decade ago',
              'The NHS Long Term Plan includes digital tools for maternity care as a key part of improving outcomes and patient experience',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-pink-600 dark:text-pink-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Bump-tracking apps — your personalised pregnancy companion</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Bump-tracking apps go beyond the traditional format to offer a genuinely personalised experience.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-purple-50 dark:bg-purple-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4F1;</span>
              <div>
                <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-0.5">Ovia Pregnancy</p>
                <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">Ovia asks about your health history, any previous pregnancies, and tracks symptoms you log each day. Its AI uses this to personalise the information it surfaces — if you log heartburn frequently, it offers tips and flags at what point to mention it to your midwife. Some NHS trusts integrate Ovia directly into their maternity care pathway.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-purple-50 dark:bg-purple-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F33C;</span>
              <div>
                <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-0.5">The Bump</p>
                <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">The Bump focuses on week-by-week development content paired with a community forum. Its AI features include a symptom checker that helps users distinguish between normal pregnancy discomfort and signs that warrant contacting a healthcare provider — a genuinely useful triage tool for first-time parents overwhelmed by information.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-purple-50 dark:bg-purple-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x26A0;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-0.5">Important limits</p>
                <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">These apps are companions, not clinicians. None of them can diagnose conditions, and they should never be used to delay seeking medical attention. If something feels wrong during a pregnancy, the right action is always to call a midwife or GP — not to wait for an app to flag it.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI and ultrasound — helping clinicians see more clearly</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Ultrasound scanning is a skill that takes years to develop. AI tools are now being used to support and standardise the process.
          </p>
          <div className="space-y-2">
            {[
              'AI systems trained on millions of scan images can automatically identify and measure key structures — head circumference, femur length, abdominal circumference — reducing the time each scan takes',
              'They can flag images that show potential anomalies for the sonographer to review more carefully, improving consistency',
              'They can check that the correct standard views have been captured during a scan, prompting the sonographer if a required view is missing',
              'In resource-limited settings, AI guidance tools can help less experienced sonographers perform more accurate scans, improving care where specialist expertise is scarce',
              'The AI always works alongside — not instead of — a qualified sonographer or clinician who reviews every result and makes the clinical decision',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Smart baby monitors — AI watching while you sleep</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Modern smart monitors combine HD cameras, AI, and sensors to give parents information about their baby that was previously impossible at home.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F4F9;',
                label: 'Nanit Pro',
                text: "Uses computer vision AI to track every movement in the cot. It gives parents a sleep score each morning and charts of how long the baby was awake, asleep, or unsettled during the night. The background analysis detects breathing movement without contact sensors on the baby.",
              },
              {
                icon: '&#x1F9E6;',
                label: 'Owlet Smart Sock',
                text: "A sensor worn on the baby's foot that tracks pulse oximetry (blood oxygen levels) and heart rate. An AI alert system notifies parents if readings fall outside normal ranges. Note: these are wellness devices, not medical devices cleared to prevent SIDS.",
              },
              {
                icon: '&#x1F916;',
                label: 'Cubo Ai',
                text: "Combines a video monitor with AI face detection. It alerts parents if the baby's face is covered — by a blanket or by rolling — a scenario associated with safe sleep concerns. It also detects if the baby climbs out of the cot and can recognise crying versus other sounds.",
              },
            ].map(({ icon, label, text }) => (
              <div key={label} className="flex gap-3 items-start bg-indigo-50 dark:bg-indigo-950 rounded-xl p-3">
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className="font-semibold text-indigo-800 dark:text-indigo-200 text-sm mb-0.5">{label}</p>
                  <p className="text-indigo-700 dark:text-indigo-300 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-teal-100 dark:border-teal-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Sleep and feeding trackers — finding the pattern in the chaos</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The newborn stage is characterised by exhaustion and unpredictability. AI-powered tracker apps aim to find the pattern hidden in that chaos.
          </p>
          <div className="space-y-2">
            {[
              "Huckleberry analyses logged sleep data to predict each baby's natural sleep window — the period when they are most likely to settle easily — and sends a personalised alert before the window closes",
              'Baby Tracker (Nara) and similar apps log feeds, nappy changes, growth, and sleep in one place, then generate charts health visitors can review at appointments',
              'Some apps identify patterns the exhausted parent would never spot manually — for example, that a baby consistently wakes at 5am because the last night feed is at 11pm rather than midnight',
              "AI-generated routine suggestions are based on evidence-informed sleep science but are adapted to the individual baby's patterns, not a one-size-fits-all schedule",
              'These apps work best when parents commit to logging consistently for at least a week — the more data the AI has, the more accurate its pattern recognition becomes',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-teal-600 dark:text-teal-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The ethics of parental data — what you need to know</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The data collected by pregnancy and baby apps is among the most sensitive imaginable. Parents deserve to understand how it is used.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CB;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">What data is collected?</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">Pregnancy apps may collect your due date, symptoms, weight, scan images, birth details, the baby's weight and feeding habits, and location. Combined, this data paints an extraordinarily detailed picture of a family's private life and a child's earliest months.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4E4;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">Is it shared?</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">Research has found that many popular pregnancy apps share data with third parties, including advertisers and analytics companies. The BMJ found in 2019 that several major pregnancy apps shared data in ways most users would not expect. "Anonymised" data can often be re-identified when combined with other sources.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F6E1;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">How to protect yourself</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">Choose apps from established NHS-backed or clearly commercial providers with explicit data policies. Check whether the app sells data to advertisers. Delete your account properly when you are done — do not just uninstall the app. Under UK GDPR you have the right to request deletion of your data. Consider using a pseudonym for any non-medical app where your real name is not necessary.</p>
              </div>
            </div>
          </div>
        </div>

        <LessonNote lessonId="ai-and-pregnancy-and-baby-care" />
        <ReviewLaterButton lessonId="ai-and-pregnancy-and-baby-care" />

        <Quiz lessonId="ai-and-pregnancy-and-baby-care" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-pregnancy-and-baby-care" />
        <LessonFeedback lessonId="ai-and-pregnancy-and-baby-care" />

        <RelatedLessons currentId="ai-and-pregnancy-and-baby-care" />

        <NextLesson currentId="ai-and-pregnancy-and-baby-care" />

      </div>
    </div>
  )
}
