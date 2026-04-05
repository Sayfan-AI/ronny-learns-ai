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

const LESSON_TITLE = 'AI and sports medicine'

const KEY_TAKEAWAYS = [
  'AI injury prediction systems analyse GPS tracking, biomechanics data, and training workloads to flag athletes at elevated risk of injury before it happens — used by Premier League clubs, Olympic teams, and elite rugby sides.',
  'AI-assisted rehabilitation uses motion capture and computer vision to guide athletes through recovery exercises, checking their form in real time and adjusting programmes based on daily progress data.',
  'AI performance and nutrition tools analyse sleep quality, heart rate variability, training load, and dietary intake to give personalised recovery and performance advice — previously only available to elite athletes.',
  'AI medical imaging tools can analyse MRI and ultrasound scans of muscle, tendon, and bone injuries faster than radiologists, producing preliminary reports in minutes to speed up return-to-play decisions.',
  'The data collected from athlete wearables raises serious ethical questions about ownership, privacy, and consent — especially when clubs or coaches can access health data that athletes may not want to share.',
]

const quizQuestions: QuizQuestion[] = [
  {
    question: 'How do AI injury prediction systems help sports teams prevent injuries?',
    options: [
      'They analyse genetic data from each athlete to identify inherited weaknesses in ligaments or tendons that make them predisposed to specific injuries',
      'They combine GPS movement data, biomechanics analysis, training workload metrics, and historical injury records to identify athletes whose risk of injury in the coming days or weeks is elevated',
      'They monitor stadium and pitch conditions using weather sensors and surface analysis to predict which environmental factors are most likely to cause injuries on a given matchday',
      'They automatically schedule rest days into training programmes whenever an athlete\'s performance metrics drop below a set threshold, preventing overtraining without any human decision-making',
    ],
    correctIndex: 1,
    explanation:
      "Injury prediction AI systems, such as those developed by Kitman Labs and used by numerous Premier League clubs and national sports organisations, work by combining multiple data streams. GPS vests worn during training capture how far athletes run, how fast, how many accelerations and decelerations they make, and the total distance covered at high speed. Force plates in training facilities measure the load on joints during jumps and sprints. When these workload metrics are combined with historical injury data from the player and comparable players, the AI can identify patterns associated with elevated injury risk — for example, a spike in high-speed running volume after a period of reduced activity is a well-known risk factor for hamstring tears. The system flags these athletes for medical staff attention, who then decide whether to modify training, order additional assessments, or prescribe preventive treatment.",
    hint: 'Think about what data streams could predict when a body is under too much stress.',
  },
  {
    question: 'What role does AI play in sports injury rehabilitation?',
    options: [
      'AI performs the physiotherapy treatment itself using robotic arms that deliver precise massage and manipulation techniques prescribed by a human physiotherapist',
      'AI uses computer vision or wearable sensors to monitor an athlete\'s movement quality during rehabilitation exercises, giving real-time feedback on form and adjusting the programme based on progress',
      'AI analyses blood biomarkers from daily blood tests to predict exactly when a torn ligament has healed sufficiently for the athlete to return to full training',
      'AI replaces the need for human physiotherapists entirely in professional sport, with athletes receiving all their rehabilitation guidance from an AI app on their phone',
    ],
    correctIndex: 1,
    explanation:
      "AI rehabilitation tools use one of two primary technologies. Camera-based systems (some using standard smartphone cameras, others using specialist motion capture equipment) observe an athlete performing exercises and use pose estimation AI to analyse their movement quality in real time — is the knee tracking correctly over the foot during a squat? Is the injured shoulder moving symmetrically with the healthy one? The system gives instant feedback and records every session. Wearable sensor systems achieve similar results with accelerometers and gyroscopes on the limbs. This real-time monitoring allows physios to remotely supervise many more athletes simultaneously, and the accumulated data across a rehabilitation programme shows whether progress is on track. When recovery plateaus or regresses, the AI flags it for human review. Return-to-play decisions still involve human clinical judgement — the AI provides the data that informs that decision.",
    hint: 'Think about how technology can help monitor the quality of movement during recovery.',
  },
  {
    question: 'How do AI performance tools help everyday athletes, not just professionals?',
    options: [
      'AI performance tools are exclusively available to professional athletes — the data they require (GPS vests, force plates, regular blood testing) is too expensive for recreational use',
      'Consumer fitness apps and wearables now use AI to analyse training load, sleep, heart rate variability, and self-reported wellbeing to give personalised recovery and performance recommendations accessible to anyone',
      'AI performance tools focus only on physical data and cannot account for psychological factors like motivation and stress, limiting their usefulness to objective physical training',
      'AI performance tools for everyday athletes work by comparing your data against professional athletes in your sport and generating a percentage score showing how close you are to elite performance',
    ],
    correctIndex: 1,
    explanation:
      "Technologies that were exclusively available to elite sports teams ten years ago are now accessible to recreational athletes through consumer products. Wearables like WHOOP, Garmin, Apple Watch, and Polar track heart rate variability (HRV), sleep stages, resting heart rate, and training load. AI analyses these metrics and generates a daily readiness score — an estimate of how recovered your body is and how much training stress it can handle today. High-end apps go further, incorporating nutrition logging, self-reported mood and energy, and menstrual cycle tracking (for female athletes) to build a more complete picture of physiological and psychological readiness. Research has shown that training based on readiness scores leads to better performance outcomes than following a fixed training schedule, because it adapts to individual variation in recovery — the same workout that leaves one person recovered might leave another overreached.",
    hint: 'Think about what consumer wearables can now measure that used to require lab testing.',
  },
  {
    question: 'How is AI being used to speed up medical imaging analysis in sport?',
    options: [
      'AI replaces the need for MRI and ultrasound in sports medicine entirely — it analyses surface movement patterns during exercise to diagnose internal injuries without any imaging equipment',
      'AI analyses MRI and ultrasound scans of injuries, identifying the location, extent, and severity of damage to muscles, tendons, and bones — producing preliminary reports faster than waiting for a radiologist',
      'AI automatically orders the appropriate scan for each injury type based on the mechanism of injury described by the athlete, removing the need for a doctor to decide what imaging is needed',
      'AI performs virtual surgery using robotics guided by MRI data, allowing surgical repair of sports injuries without a human surgeon needing to be present in the operating theatre',
    ],
    correctIndex: 1,
    explanation:
      "In professional sport, speed of diagnosis directly affects competitive and financial outcomes. A hamstring strain that goes undetected for a week before MRI confirmation costs recovery time. AI medical imaging tools, trained on large datasets of labelled scans from sports medicine contexts, can analyse a new scan and produce a preliminary report identifying the injury location, the affected structures (which muscle, which tendon, what grade of tear), and the likely severity within minutes of the scan being completed. This does not remove the radiologist from the process — the AI's output is reviewed and confirmed by a qualified clinician — but it eliminates the waiting time for a busy radiologist to get to the scan. In elite sport, where medical teams have immediate access to imaging and AI analysis, return-to-play decisions can be made in the same day as an injury occurrence.",
    hint: 'Think about what takes time in the traditional imaging process and how AI speeds it up.',
  },
  {
    question: 'What are the main ethical concerns about athlete data collection and AI?',
    options: [
      'The main concern is that AI performance data is inaccurate and leads coaches to make wrong training decisions, potentially harming athlete performance',
      'Key concerns include who owns the health data collected from wearables, whether athletes can refuse to share it without career consequences, and how this sensitive data is stored and used beyond sport',
      'The main concern is that AI gives wealthy clubs an unfair competitive advantage by identifying better training methods that smaller clubs cannot afford to access',
      'The primary concern is that athletes become over-reliant on AI recommendations and lose the ability to listen to their own bodies and make independent training decisions',
    ],
    correctIndex: 1,
    explanation:
      "The data collected from athlete wearables — GPS position, heart rate, sleep patterns, menstrual cycles, psychological wellbeing — is among the most sensitive personal health data imaginable. Several interconnected ethical issues arise. Ownership: who owns this data? In most current contracts, the club or team organisation owns the data collected from their equipment during employment. Privacy: clubs can potentially know more about an athlete's health than the athlete themselves, and this information could affect contract decisions, insurance, and career length. Consent: there are documented cases of athletes feeling they cannot refuse to wear monitoring equipment without negative career consequences — effectively coerced consent. Data security: health databases are high-value targets for hackers. The Professional Footballers' Association (PFA) and athlete unions in other sports have raised these issues and are pushing for clearer contractual protections, athlete data ownership rights, and limits on how health data can be used in employment decisions.",
    hint: 'Think about who benefits from this data and who could be harmed by its misuse.',
  },
]

export function AIAndSportsMedicine() {
  useMarkVisited('ai-and-sports-medicine')

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1FA7A;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI and sports medicine
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            From predicting hamstring injuries before they happen to guiding rehabilitation
            with computer vision — how AI is transforming athlete health.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-sports-medicine" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <KeyTakeaways points={KEY_TAKEAWAYS} />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-green-100 dark:border-green-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The data revolution in sport</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Modern professional sport generates enormous amounts of data about athlete bodies. AI is what makes it possible to turn that data into decisions that keep athletes healthier for longer.
          </p>
          <div className="space-y-2">
            {[
              'A Premier League player covers an average of 11 km per match and generates thousands of data points per second from GPS and heart rate sensors',
              'Hamstring injuries are the most common injury in football and cost clubs an average of 17 missed match days per incident — predictive AI has reduced their frequency at clubs using it',
              'The sports wearables market is now accessible to recreational athletes — consumer-grade AI analysis tools rival what was only available in professional lab settings a decade ago',
              'AI medical imaging analysis is reducing the time between injury and diagnosis from days to hours in elite sport',
              'The Professional Footballers\' Association has raised concerns about clubs using athlete health data in contract negotiations — highlighting the ethical dimension of AI in sport',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-red-100 dark:border-red-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI injury prediction — stopping problems before they start</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The best injury is the one that never happens. AI is giving sports medicine teams the tools to intervene before athletes get hurt.
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F4CD;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">GPS and workload monitoring</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">GPS vests measure every movement during training and match play — total distance, high-speed running, accelerations, and decelerations. AI identifies when an athlete's acute workload (recent load) is too high relative to their chronic workload (longer-term baseline), a proven risk factor for muscle and tendon injuries.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x1F9B5;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">Biomechanics analysis</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">Subtle changes in how an athlete moves — a slight asymmetry in a jump, altered running mechanics, reduced range of motion — can precede injury by days. AI tracking systems compare real-time biomechanics against an athlete's healthy baseline and flag deviations for a physiotherapist to investigate.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950 rounded-xl p-3">
              <span className="text-xl flex-shrink-0 mt-0.5">&#x2764;&#xFE0F;</span>
              <div>
                <p className="font-semibold text-red-800 dark:text-red-200 text-sm mb-0.5">Heart rate variability as a readiness signal</p>
                <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">HRV — the natural variation in the time between heartbeats — is a sensitive indicator of nervous system recovery. When HRV is low or trending downward, it often signals that the body is still recovering from previous stress. AI systems correlate HRV data with training load and injury history to flag athletes who need modified training.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI-assisted rehabilitation</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Getting athletes back to full fitness safely and quickly requires precise monitoring of recovery quality — AI makes this possible at scale.
          </p>
          <div className="space-y-2">
            {[
              'Computer vision systems analyse an athlete performing rehab exercises and check movement quality in real time — flagging poor form that could impede recovery or cause secondary injury',
              'AI compares each day\'s session data to track recovery trajectory — is the athlete on schedule, ahead, or behind typical recovery timelines for this type of injury?',
              'Remote rehabilitation via AI-monitored apps allows physios to supervise many more athletes simultaneously, particularly useful for national squads with athletes in multiple locations',
              'Force plate analysis measures the symmetry between injured and healthy limbs — return to play is only recommended when asymmetry falls within safe thresholds',
              'AI can identify psychological readiness for return to sport by monitoring hesitation patterns in movements — fear of re-injury is a major predictor of re-injury',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">&#x2713;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI for everyday athletes</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Sports medicine AI is no longer just for professionals. Consumer tools bring sophisticated analysis to recreational runners, cyclists, and gym-goers.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x231A;',
                label: 'WHOOP and Garmin',
                text: 'These wearables track HRV, sleep stages, skin temperature, and respiratory rate overnight. AI analyses the data to generate a daily recovery score and strain recommendation — should you train hard, go easy, or rest? Studies have shown athletes using readiness-based training improve faster than those following fixed schedules.',
                color: 'purple',
              },
              {
                icon: '&#x1F34E;',
                label: 'Apple Watch health AI',
                text: "Apple's AI health features include fall detection, AFib (irregular heart rhythm) detection, and ECG analysis — medical-grade features in a consumer device. For recreational athletes, the watch detects when running cadence or form changes in ways associated with fatigue or injury risk.",
                color: 'purple',
              },
              {
                icon: '&#x1F3C3;',
                label: 'Running form analysis',
                text: 'Apps like Runna and Garmin Coach use AI to analyse your running data and adjust training plans based on your actual progress — not just a generic schedule. Some use phone cameras or wearable sensors to give real-time feedback on running form, identifying overstride or cadence issues that cause running injuries.',
                color: 'purple',
              },
            ].map(({ icon, label, text, color }) => (
              <div key={label} className={`flex gap-3 items-start bg-${color}-50 dark:bg-${color}-950 rounded-xl p-3`}>
                <span className="text-xl flex-shrink-0 mt-0.5" dangerouslySetInnerHTML={{ __html: icon }} />
                <div>
                  <p className={`font-semibold text-${color}-800 dark:text-${color}-200 text-sm mb-0.5`}>{label}</p>
                  <p className={`text-${color}-700 dark:text-${color}-300 text-sm leading-relaxed`}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-amber-100 dark:border-amber-900 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">The ethics of athlete data</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The health data collected from athletes is deeply personal. Questions of ownership, consent, and use are becoming increasingly urgent.
          </p>
          <div className="space-y-2">
            {[
              'In most professional contracts, health data collected by club equipment belongs to the club — not the athlete whose body generated it',
              'The PFA has documented cases of athletes feeling unable to refuse wearable monitoring without career consequences — raising questions about meaningful consent',
              'Health data could theoretically affect contract renewal decisions, insurance premiums, or transfer values — creating conflicts of interest',
              'UK GDPR provides protections for special category health data — but enforcement in the specific context of employment in sport is an underdeveloped area of law',
              'Athlete unions in multiple sports are now negotiating data rights provisions into collective agreements, establishing who owns the data and how it can be used',
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <span className="text-amber-600 dark:text-amber-400 font-bold mt-0.5 flex-shrink-0">&#x26A0;</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <LessonNote lessonId="ai-and-sports-medicine" />
        <ReviewLaterButton lessonId="ai-and-sports-medicine" />

        <Quiz lessonId="ai-and-sports-medicine" questions={quizQuestions} />

        <LessonRating lessonId="ai-and-sports-medicine" />
        <LessonFeedback lessonId="ai-and-sports-medicine" />

        <RelatedLessons currentId="ai-and-sports-medicine" />

        <NextLesson currentId="ai-and-sports-medicine" />

      </div>
    </div>
  )
}
