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

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What does predictive policing software like PredPol aim to do?',
    options: [
      'It identifies specific individuals who are likely to commit crimes in the future based on their personal profiles',
      'It analyses historical crime data to identify times and locations where crimes are more likely to occur, so police can patrol those areas more heavily',
      'It uses AI to automatically dispatch the nearest officer the moment any crime is reported',
      'It predicts which officers are most likely to use excessive force and removes them from patrol duties',
    ],
    correctIndex: 1,
    explanation:
      'Predictive policing tools like PredPol (now renamed Geolitica) focus primarily on location and time prediction rather than individual prediction. They analyse years of reported crime data — burglaries on Tuesday nights in certain streets, car thefts in certain car parks during specific hours — to generate "hot spot" predictions where extra patrols might deter crime. Critics argue this creates a feedback loop: more patrols in predicted areas generate more arrests there, which feeds back into the model as evidence that those areas are more criminal, regardless of actual underlying crime rates.',
    hint: 'The focus is on places and times, not individuals.',
  },
  {
    question: 'Why have facial recognition systems been found to be less accurate for darker-skinned faces?',
    options: [
      'The technology uses infrared light that reflects differently off different skin tones, making it a hardware limitation that cannot be fixed in software',
      'Training datasets historically contained disproportionately more images of lighter-skinned faces, so the AI learned to distinguish those faces more accurately',
      'Regulatory restrictions prevented darker-skinned individuals from being included in training datasets for privacy reasons',
      'Darker-skinned faces have fewer unique facial features, making them inherently harder for any recognition system to distinguish',
    ],
    correctIndex: 1,
    explanation:
      'Researchers Joy Buolamwini and Timnit Gebru published the "Gender Shades" study in 2018, demonstrating that commercial facial recognition systems from major tech companies had significantly higher error rates for darker-skinned faces — particularly darker-skinned women. The core reason is training data bias: these systems were trained predominantly on datasets featuring lighter-skinned faces, so the models became better at distinguishing features that vary most across that demographic. This is a direct consequence of non-representative training data, and is an example of AI bias with real-world consequences.',
    hint: 'Think about what training data these systems were built on.',
  },
  {
    question: 'What happened in several US cases where facial recognition was used in law enforcement investigations?',
    options: [
      'The technology performed flawlessly and helped convict several dangerous criminals who would otherwise have escaped justice',
      'Several people — all of them Black men — were wrongfully arrested after facial recognition incorrectly matched their faces to crime scene footage; charges were eventually dropped',
      'Facial recognition technology successfully prevented a terrorist attack by identifying a suspect at an airport before they could board a plane',
      'Courts ruled that facial recognition evidence was acceptable as primary proof of identity without any additional corroborating evidence',
    ],
    correctIndex: 1,
    explanation:
      "Multiple documented US cases involve wrongful arrests based on flawed facial recognition matches. Robert Williams, Michael Oliver, and Nijeer Parks — all Black men — were arrested based on incorrect facial recognition identifications. In each case, there was no other significant evidence; police relied heavily on the AI match. Charges were eventually dropped but only after significant personal harm. These cases, investigated by journalists and academics, have been central to the debate about banning or restricting facial recognition in law enforcement.",
    hint: 'Think about what the documented cases show about the reliability of facial recognition evidence.',
  },
  {
    question: 'What is the main civil liberties concern about police use of live facial recognition in public spaces?',
    options: [
      'That it will cause traffic congestion as police vehicles park near cameras to monitor footage in real time',
      'That scanning every face in a crowd — including people who have done nothing wrong — represents mass surveillance that could deter people from attending protests, demonstrations, or simply going about their daily lives',
      'That criminals will start wearing masks, making the investment in facial recognition technology pointless',
      'That the technology will make police officers lazy, as they will stop developing traditional detective skills',
    ],
    correctIndex: 1,
    explanation:
      "Live facial recognition scans the faces of everyone in a public space and checks them against a watchlist in real time. Unlike retrospective searches (checking CCTV footage after a crime), live deployment means innocent people are identified and processed without their knowledge or consent. Amnesty International and Liberty have argued this has a chilling effect: knowing that your face will be scanned and checked against a police database may deter people from attending entirely lawful protests or demonstrations. The EU AI Act classifies most real-time biometric surveillance in public spaces as 'unacceptable risk' and prohibits it, though with exceptions.",
    hint: 'The concern is about what happens to innocent people who are scanned.',
  },
  {
    question: 'What approach did Durham Constabulary\'s HART tool take, and why was it controversial?',
    options: [
      'HART was a tool that automatically sent warning letters to people it identified as high risk, without any human review',
      'HART used an algorithmic risk score to help custody officers decide whether to remand a suspect or release them on bail — but critics argued the algorithm could encode historical biases and that defendants could not challenge the score',
      'HART identified police officers with a history of complaints and recommended them for retraining',
      'HART predicted the exact location and time of future crimes with 90% accuracy, allowing police to prevent offences before they occurred',
    ],
    correctIndex: 1,
    explanation:
      "Durham's Harm Assessment Risk Tool (HART) was one of the first AI tools used in UK criminal justice. It assigned defendants a Low, Medium, or High risk score based on factors including criminal history and postcode, to assist custody officers in making bail decisions. A Cambridge study found the model performed well statistically but raised concerns: the postcode factor meant residents of deprived areas were systematically rated as higher risk; defendants had no way to see or challenge the score; and it was unclear whether officers actually treated it as advisory or deferential. HART was quietly retired after the publicity around these concerns.",
    hint: 'Think about what HART was used to decide, and what information defendants were denied.',
  },
]

export function AIAndPolicing() {
  useMarkVisited('ai-and-policing')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x2696;&#xFE0F;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and policing
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Predictive policing, facial recognition in law enforcement,
            the evidence of racial bias, and the civil liberties concerns.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <DifficultyBadge level="Intermediate" />
          </div>
          <CompletedBadge lessonId="ai-and-policing" />
          <ShareButton lessonTitle="AI and policing" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Predictive policing: hot spots and feedback loops</h2>
          <p className="text-gray-600 leading-relaxed">
            Police forces have used crime statistics to inform patrol decisions for decades. AI allows
            this analysis to happen at far greater speed and granularity &mdash; but brings with it
            new risks of entrenching existing biases.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F5FA;',
                label: 'Hot spot mapping',
                text: "Tools like PredPol (now Geolitica), used by police forces in the US and trialled in the UK, analyse years of crime reports to predict the times and locations of future crimes. Officers are directed to patrol these 'hot spots'. Proponents argue this deters crime; critics argue it is simply a more sophisticated version of directing police to already over-policed areas.",
              },
              {
                icon: '&#x1F501;',
                label: 'The feedback loop problem',
                text: "If police patrol area X more heavily because the algorithm says X is high-crime, they will discover more crime in area X — which feeds back into the training data and increases the predicted risk score for area X. Meanwhile, crime in areas with less police presence goes unreported and undetected. The model learns to reflect policing patterns more than actual crime distribution.",
              },
              {
                icon: '&#x1F4BC;',
                label: "Durham's HART tool",
                text: "Durham Constabulary's Harm Assessment Risk Tool used AI to help custody officers decide bail or remand decisions. Critics found that postcode — a proxy for deprivation — was a significant factor, meaning residents of poorer areas were systematically rated as higher risk. Defendants had no way to see or challenge their score. HART was retired after public scrutiny.",
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
          <h2 className="text-2xl font-bold text-gray-800">Facial recognition: how it works in policing</h2>
          <p className="text-gray-600 leading-relaxed">
            Police facial recognition comes in two forms &mdash; retrospective and live &mdash; and each
            raises different concerns.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '&#x1F4F9;', title: 'Retrospective search', text: 'A face from CCTV footage of a crime scene is compared against a database of custody images (mugshots). The AI ranks possible matches by similarity; a human officer reviews the results. This is now routine in UK policing for serious crimes.' },
              { icon: '&#x1F534;', title: 'Live facial recognition', text: "Cameras scan faces in a crowd in real time and check each face against a watchlist. The Metropolitan Police has run live deployments in London. Unlike retrospective search, every person in the crowd is processed — even those with no connection to any crime." },
              { icon: '&#x1F9BE;', title: 'ANPR and CCTV analytics', text: "Automatic Number Plate Recognition (ANPR) cameras read millions of licence plates per day and check them against police databases. AI-enhanced CCTV analytics can detect behaviours like abandoned bags, fights, or people running in unusual directions." },
              { icon: '&#x26A0;&#xFE0F;', title: 'Wrongful arrests', text: "In the US, documented cases include Robert Williams, Michael Oliver, and Nijeer Parks — all Black men who were wrongfully arrested after flawed facial recognition matches. These cases have driven calls to ban police use of the technology." },
            ].map(({ icon, title, text }) => (
              <div key={title} className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl" dangerouslySetInnerHTML={{ __html: icon }} />
                  <p className="font-semibold text-gray-800 text-sm">{title}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Bias in the data, bias in the outcome</h2>
          <p className="text-gray-600 leading-relaxed">
            The racial bias in facial recognition systems is among the best-documented examples
            of AI bias in any field.
          </p>
          <div className="bg-red-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-red-800 text-sm">The Gender Shades study</p>
            <p className="text-red-700 text-sm leading-relaxed">
              Researchers Joy Buolamwini and Timnit Gebru tested commercial facial analysis systems
              from Microsoft, IBM, and Face++ on a dataset of faces representing different genders
              and skin tones. The error rates ranged from under 1% for lighter-skinned men to over 34%
              for darker-skinned women. The cause: training datasets containing far more images of
              lighter-skinned faces, giving the AI much more data to learn from for that group.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            This matters enormously in policing. A system that is far more likely to misidentify
            a Black person&apos;s face than a white person&apos;s face &mdash; and then be used
            by police to make arrest decisions &mdash; risks systematically directing the criminal
            justice system unfairly. Some US cities (San Francisco, Boston, Portland) have banned
            police use of facial recognition entirely because of these concerns.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Civil liberties and the regulatory picture</h2>
          <p className="text-gray-600 leading-relaxed">
            The use of AI in policing raises profound questions about the relationship between
            the state and its citizens.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F91D;',
                label: 'The chilling effect',
                text: "Knowing that your face will be scanned and checked against a police database at a protest or demonstration may deter people from exercising their legal right to assemble. Amnesty International's 'Ban the Scan' campaign argues that live facial recognition in public spaces is incompatible with human rights.",
              },
              {
                icon: '&#x1F1EA;&#x1F1FA;',
                label: 'The EU AI Act',
                text: "The EU AI Act (passed 2024) classifies real-time biometric surveillance of people in public spaces as an 'unacceptable risk' AI practice and prohibits it — with narrow law enforcement exceptions (terrorism, missing children, specific suspects). This is one of the strictest AI regulations in the world.",
              },
              {
                icon: '&#x1F1EC;&#x1F1E7;',
                label: 'The UK position',
                text: "In the UK, the Biometrics and Surveillance Camera Commissioner oversees police use of facial recognition. The Information Commissioner has said live facial recognition must meet a high legal threshold. The Met Police continue to use it, arguing it is lawful and effective. Civil rights groups continue to challenge this in the courts.",
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

        <ReviewLaterButton lessonId="ai-and-policing" />
        <LessonNote lessonId="ai-and-policing" />

        <Quiz questions={quizQuestions} lessonId="ai-and-policing" lessonTitle="AI and policing" />

        <LessonFeedback lessonId="ai-and-policing" />
        <LessonRating lessonId="ai-and-policing" />
        <RelatedLessons currentId="ai-and-policing" />
        <NextLesson currentId="ai-and-policing" />
      </div>
    </div>
  )
}
