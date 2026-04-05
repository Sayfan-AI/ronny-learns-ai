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
    question: 'How can AI screening tools help identify people who may have an addiction problem that has not yet been recognised?',
    options: [
      'AI monitors all social media posts and flags anyone who mentions alcohol or drugs to their GP automatically',
      'AI analyses patterns in GP records, A&E attendances, and prescription data to identify individuals whose overall health picture is consistent with addiction, enabling GPs to have a conversation proactively rather than waiting for the person to raise the issue',
      'AI gives every patient a compulsory addiction questionnaire each time they visit any NHS service',
      'AI calls patients on their birthday each year to ask whether they have developed any substance use problems',
    ],
    correctIndex: 1,
    explanation:
      "AI screening tools work by analysing patterns in existing NHS data rather than actively monitoring people. Someone with an alcohol problem might have multiple A&E attendances for falls or injuries, frequent GP visits with vague symptoms, and prescriptions for anxiety or insomnia - a pattern that a busy GP might not immediately connect. AI can surface this pattern and suggest the GP consider asking about alcohol use. Importantly, this is a prompt for a conversation, not an automatic referral or a diagnosis. The approach is used in some NHS trusts to help identify the estimated 80% of people with problematic alcohol use who never seek help.",
    hint: 'The AI analyses existing health records to spot patterns, not to monitor people actively.',
  },
  {
    question: 'What role can AI chatbots play in addiction recovery support?',
    options: [
      'AI chatbots can prescribe medication-assisted treatments like methadone directly, bypassing the need for a doctor',
      'AI chatbots provide 24/7 support for people in recovery, helping them work through cravings using evidence-based techniques, track mood and triggers, and access immediate help at moments when human support is not available',
      'AI chatbots replace all human therapy and counselling services because they are cheaper and more consistent',
      'AI chatbots report all conversations to the user\'s family members and employer to encourage accountability',
    ],
    correctIndex: 1,
    explanation:
      "Addiction recovery is characterised by moments of crisis that do not respect office hours. Cravings typically peak in the evening and at weekends - exactly when human support is unavailable. AI chatbots like Woebot have been adapted for recovery support, offering CBT-based techniques for managing cravings, mood tracking to identify triggers, and immediate connection to crisis resources. Studies have shown they can reduce the feeling of isolation during vulnerable moments. However, they are not replacements for human therapy - they are a supplement that extends support into the gaps between human contact.",
    hint: 'Think about availability and the moments when cravings typically peak.',
  },
  {
    question: 'How does AI relapse prediction aim to help people in addiction recovery?',
    options: [
      'AI predicts who will relapse and automatically removes their access to alcohol and drug services as a preventive measure',
      'AI analyses patterns from wearable devices and self-reported data such as sleep quality, stress levels, social activity, and mood to identify when a person in recovery may be at elevated risk, enabling their support team to offer proactive contact',
      'AI reads text messages between people in recovery and their friends to detect whether they are discussing substance use',
      'AI predicts relapse dates with 100% accuracy so recovery programmes can be scheduled to coincide with the highest-risk moments',
    ],
    correctIndex: 1,
    explanation:
      "Research has identified several factors that increase relapse risk: disrupted sleep, social isolation, high stress, poor mood, and reduced activity. Wearable devices can track many of these indicators passively. AI systems in research trials have analysed this data alongside self-reported mood and trigger information to identify individuals whose pattern of data suggests elevated relapse risk. Rather than waiting for the person to reach out for help, the support worker or app can prompt contact proactively. This is still largely in research or pilot phases - it is not yet standard NHS practice - but preliminary results are promising.",
    hint: 'The AI detects early warning signs in behavioural and physiological data to enable earlier support.',
  },
  {
    question: 'What does the NHS use AI for in planning addiction treatment services?',
    options: [
      'AI decides which individual patients are worth investing treatment resources in based on their likelihood of success',
      'AI analyses patterns in treatment demand, treatment outcomes, and population health data to help NHS commissioners understand where need is greatest and which interventions produce the best results, informing decisions about where to invest in services',
      'AI automatically discharges patients from addiction services when their treatment course is theoretically complete, regardless of their actual progress',
      'AI generates invoices for addiction treatment automatically and sends them to patients',
    ],
    correctIndex: 1,
    explanation:
      "NHS commissioners use data and AI tools to understand addiction at population level. Which types of treatment produce the best long-term outcomes for which patient groups? Where in a region is treatment demand not matched by available services? What is the cost-effectiveness of different intervention models? This kind of analysis, previously requiring months of manual data work, can now be done much faster with AI, enabling evidence-based commissioning decisions. The NHS Long Term Plan explicitly identifies better use of data and AI in mental health and addiction services as a priority.",
    hint: 'Think about using data at a population level to plan where services are needed and what works best.',
  },
  {
    question: 'What is a key concern about AI-powered addiction support tools?',
    options: [
      'People in recovery might become addicted to using AI chatbots instead of addressing their original addiction',
      'Digital tools may not reach the people who need them most, including those without smartphones, in digital poverty, or with severe addiction, while data collected about highly sensitive addiction journeys requires robust privacy protection',
      'AI chatbots in addiction recovery are illegal under UK law because they provide medical advice without a licence',
      'AI might cure addiction too effectively, resulting in fewer people needing treatment and putting addiction counsellors out of work',
    ],
    correctIndex: 1,
    explanation:
      "Digital exclusion is a significant concern in addiction technology. People experiencing the most severe addiction and social deprivation - who arguably need the most support - may be the least likely to have reliable smartphone access or feel comfortable with digital tools. There is a risk that AI-powered services improve outcomes for those who are already better resourced while leaving the most vulnerable behind. Data privacy is also critical: addiction is one of the most sensitive categories of personal information, with potential consequences for employment, insurance, and family relationships if disclosed. Strong data governance is essential.",
    hint: 'Think about who might be left out and what happens to sensitive personal data.',
  },
]

export function AIAndAddictionRecovery() {
  useMarkVisited('ai-and-addiction-recovery')

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F331;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and addiction and recovery
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            AI screening tools, chatbot recovery support, relapse prediction, and how the NHS is
            using AI to plan addiction treatment &mdash; plus the important concerns about digital exclusion and privacy.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 7 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-addiction-recovery" />
          <ShareButton lessonTitle="AI and addiction and recovery" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI screening tools &mdash; finding hidden need</h2>
          <p className="text-gray-600 leading-relaxed">
            Addiction often goes unrecognised for years. Many people with problematic substance use
            never tell their GP. AI screening tools aim to surface these hidden cases by analysing
            patterns in health records, enabling earlier conversations and support.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F50D;',
                label: 'Pattern recognition in GP records',
                text: "Someone with alcohol dependency might have repeated A&E attendances for falls, frequent GP visits with vague symptoms, and prescriptions for anxiety or insomnia. No single visit reveals the pattern, but AI can connect the dots across years of records and flag the possibility for a GP to explore sensitively.",
              },
              {
                icon: '&#x1F3E5;',
                label: 'A&E data analysis',
                text: "Alcohol is involved in a significant proportion of A&E attendances, particularly late at night. AI can identify patients with repeated alcohol-related A&E visits and prompt a brief intervention conversation before they leave the department. Studies show even a short conversation in A&E can reduce subsequent alcohol consumption.",
              },
              {
                icon: '&#x26A0;&#xFE0F;',
                label: 'Important limitations',
                text: "AI screening tools flag possibilities, they do not diagnose. A GP must still have a sensitive, confidential conversation. The AI cannot know the full context of a person's life. False positives (flagging someone who does not have a problem) are a concern, as is the risk of stigmatising people based on data patterns.",
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
          <h2 className="text-2xl font-bold text-gray-800">Chatbot recovery support &mdash; help at 3am</h2>
          <p className="text-gray-600 leading-relaxed">
            Recovery from addiction is rarely a smooth journey. Cravings and difficult moments
            often strike at night or at weekends &mdash; precisely when human support is unavailable.
            AI chatbots are being developed to fill these gaps.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '&#x1F4AC;', title: 'CBT-based techniques', text: "AI chatbots use evidence-based techniques from Cognitive Behavioural Therapy to help people manage cravings. When a craving hits, the chatbot guides the user through thought-challenging exercises, distraction strategies, and mindfulness techniques in real time." },
              { icon: '&#x1F4CA;', title: 'Mood and trigger tracking', text: "Daily mood check-ins and trigger logging help people in recovery identify their own patterns. When do cravings tend to occur? What situations or emotions precede them? This self-awareness is a key part of relapse prevention." },
              { icon: '&#x1F4DE;', title: 'Crisis escalation', text: "Good recovery chatbots know when a person needs more than an app can provide. If conversations indicate serious risk, the chatbot provides immediate links to crisis lines like Alcoholics Anonymous, the FRANK helpline, or emergency services." },
              { icon: '&#x1F91D;', title: 'Not a replacement', text: "Research is clear: chatbots work best as a supplement to human therapy and peer support groups, not a replacement. They extend the reach of support into the hours and moments when human contact is not possible." },
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

        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Relapse prediction &mdash; spotting early warning signs</h2>
          <p className="text-gray-600 leading-relaxed">
            Relapse is common in addiction recovery. Research has identified warning signs that
            often precede it. AI is being tested as a way to spot these signs early enough to intervene.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x231A;',
                label: 'Wearable data',
                text: 'Disrupted sleep, reduced physical activity, increased resting heart rate, and changes in movement patterns are all measurable signs of stress that often precede relapse. Wearable devices collect this data passively, and AI analyses it for patterns associated with elevated risk.',
              },
              {
                icon: '&#x1F4DD;',
                label: 'Self-reported triggers',
                text: 'When combined with daily mood and trigger logs provided by the person themselves, wearable data can give a richer picture. The AI looks for the combination of physiological stress signals and reported emotional difficulty that research associates with increased relapse risk.',
              },
              {
                icon: '&#x1F4DE;',
                label: 'Proactive outreach',
                text: 'When the AI identifies elevated risk, it can prompt a message to the person or alert their support worker to make proactive contact. Rather than waiting for the person to reach out in crisis, support comes before the critical moment.',
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

        <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Concerns &mdash; who gets left behind?</h2>
          <p className="text-gray-600 leading-relaxed">
            AI tools in addiction recovery raise important questions about equity, privacy, and
            whether technology can ever substitute for human relationship.
          </p>
          <div className="bg-rose-50 rounded-xl p-4 space-y-2 mb-3">
            <p className="font-semibold text-rose-800 text-sm">Digital exclusion</p>
            <p className="text-rose-700 text-sm leading-relaxed">
              People experiencing the most severe addiction and social deprivation may be the least likely to
              have reliable smartphone access or comfortable with digital tools. If AI services improve outcomes
              for those already better resourced while the most vulnerable are left behind, they increase
              rather than reduce inequality in addiction treatment.
            </p>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-amber-800 text-sm">Privacy and sensitive data</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              Addiction is one of the most sensitive categories of personal information. If data about
              someone's addiction history is disclosed to an employer, insurer, or family member without
              consent, the consequences can be severe. Any AI tool in this space must have robust data
              governance, clear consent processes, and strong data security.
            </p>
          </div>
        </div>

        <ReviewLaterButton lessonId="ai-and-addiction-recovery" />
        <LessonNote lessonId="ai-and-addiction-recovery" />

        <Quiz questions={quizQuestions} lessonId="ai-and-addiction-recovery" lessonTitle="AI and addiction and recovery" />

        <LessonFeedback lessonId="ai-and-addiction-recovery" />
        <LessonRating lessonId="ai-and-addiction-recovery" />
        <RelatedLessons currentId="ai-and-addiction-recovery" />
        <NextLesson currentId="ai-and-addiction-recovery" />
      </div>
    </div>
  )
}
