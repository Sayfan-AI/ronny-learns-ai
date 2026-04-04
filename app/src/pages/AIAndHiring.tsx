import { Quiz } from '../components/Quiz'
import type { QuizQuestion } from '../components/Quiz'
import { useMarkVisited } from '../hooks/useMarkVisited'
import { NextLesson } from '../components/NextLesson'
import { LessonNote } from '../components/LessonNote'
import { CompletedBadge } from '../components/CompletedBadge'
import { RelatedLessons } from '../components/RelatedLessons'
import { LessonRating } from '../components/LessonRating'
import { ReviewLaterButton } from '../components/ReviewLaterButton'
import { ShareButton } from '../components/ShareButton'

const LESSON_TITLE = 'AI and hiring'

const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is an applicant tracking system (ATS)?',
    options: [
      'Software that scans and ranks CVs before a human sees them',
      'A video interview tool that analyses facial expressions',
      'A background check service for verifying qualifications',
      'A payroll system for managing employee contracts',
    ],
    correctIndex: 0,
    explanation:
      "Applicant tracking systems are used by most large employers to filter job applications before a human recruiter sees them. The software scans CVs for keywords, qualifications, and phrases that match the job description, then scores and ranks candidates. A CV that scores below a threshold may be automatically rejected — meaning a qualified person can be filtered out if they didn't phrase their skills in the way the software expects.",
    hint: 'Think about the first filter your application hits when you apply for a job at a large company.',
  },
  {
    question: "Why did Amazon scrap its AI recruiting tool in 2018?",
    options: [
      'It was too expensive to run and maintain at scale',
      "It penalised CVs that contained words associated with women, such as 'women's chess club'",
      'It could not read PDF files, only plain text',
      'It gave every candidate the same score, making it useless',
    ],
    correctIndex: 1,
    explanation:
      "Amazon built an AI tool to help screen CVs, training it on ten years of historical hiring data. The problem was that Amazon's tech workforce had been predominantly male, so the AI learned to favour CVs that looked like successful hires — and to down-rank CVs that included words like 'women's' (as in women's sports team or all-women's college). Amazon tried to fix the bias but ultimately scrapped the tool in 2018 when it could not guarantee it was not discriminating.",
    hint: 'Think about what the AI learned from Amazon\'s historical hiring data, which reflected a male-dominated industry.',
  },
  {
    question: 'Which UK law protects you from discrimination in the hiring process?',
    options: [
      'The Equality Act 2010',
      'The Data Protection Act 1984',
      'The Employment Rights Act 1996',
      'The Human Rights Act 1998',
    ],
    correctIndex: 0,
    explanation:
      "The Equality Act 2010 protects people from discrimination based on nine 'protected characteristics': age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, and sexual orientation. This applies to all stages of employment, including the hiring process. If an AI system discriminates — even unintentionally — the employer is still liable under the Act.",
    hint: 'It covers protected characteristics like gender, race, and age. It was passed in 2010.',
  },
  {
    question: 'What does GDPR give you the right to request if an automated system rejects your job application?',
    options: [
      'Human review of the decision',
      'A full copy of the AI model\'s source code',
      'Financial compensation for the rejection',
      'An explanation from the AI within 24 hours',
    ],
    correctIndex: 0,
    explanation:
      "Under UK GDPR (which continues to apply after Brexit), you have the right not to be subject to a decision based solely on automated processing if that decision has a significant effect on you — such as being rejected for a job. Employers must either involve a human in the decision or, if they use a fully automated system, provide you with the right to request human review. You can also ask the employer to explain the decision.",
    hint: 'Think about your right to have a human involved in decisions that affect you significantly.',
  },
  {
    question: 'What is one practical tip for getting your CV past an applicant tracking system?',
    options: [
      'Use the exact keywords and phrases from the job description in your CV',
      'Design a creative, visually striking CV with images and coloured sections',
      'Keep your CV to a single short paragraph to make it easy to scan',
      "Send your CV as an image file so the ATS sees the whole layout",
    ],
    correctIndex: 0,
    explanation:
      "ATS software scans CV text and matches it against keywords from the job description. If the job asks for 'project management experience' and your CV says 'led complex projects', the ATS may not make the connection — even though a human would. The most effective tactic is to mirror the language of the job description in your CV where honest. Avoid tables, columns, headers/footers, and image files, which many ATS systems cannot parse correctly.",
    hint: 'ATS software matches text, not ideas. It looks for specific words, not equivalent meanings.',
  },
]

export function AIAndHiring() {
  useMarkVisited('ai-and-hiring')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4BC;</div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            AI and hiring
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How AI decides who gets the job &mdash; from CV-scanning software
            to video interview analysis, and what it means for you.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full">
              <span>About 6 min read</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm px-4 py-2 rounded-full font-semibold">
              <span>Intermediate</span>
            </div>
          </div>
          <CompletedBadge lessonId="ai-and-hiring" />
          <ShareButton lessonTitle={LESSON_TITLE} />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI is now in every stage of hiring</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have applied for a job at a large organisation recently, your application was almost
            certainly processed by AI before a human looked at it. Estimates suggest that 75&nbsp;% of
            large employers use some form of automated screening. AI is now involved at every stage:
            filtering CVs, conducting initial assessments, screening video interviews, and even
            deciding who gets invited to a final interview.
          </p>
          <div className="bg-slate-50 rounded-xl p-4 space-y-2">
            <p className="font-semibold text-slate-800 text-sm">Where AI appears in the hiring pipeline</p>
            <ul className="text-slate-700 text-sm leading-relaxed space-y-1 list-disc list-inside">
              <li>Applicant tracking systems (ATS) scan and rank CVs</li>
              <li>Automated assessments (aptitude tests, personality questionnaires)</li>
              <li>AI video interview analysis (facial expression, word choice, tone)</li>
              <li>Background check and reference verification tools</li>
              <li>AI-assisted shortlisting for final interview</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Applicant tracking systems: the invisible gatekeeper</h2>
          <p className="text-gray-600 leading-relaxed">
            Most large employers use an ATS to handle the initial flood of applications.
            When you apply online, the ATS scans your CV for keywords that match the job
            description and scores you against other applicants. Applications below a
            threshold score may never be seen by a human.
          </p>
          <div className="space-y-3">
            {[
              {
                icon: '&#x1F50D;',
                label: 'How ATS scoring works',
                text: "The system looks for specific words from the job description: skills, qualifications, job titles, and software. If the job says 'stakeholder management' and your CV says 'worked with external partners', the ATS may not connect the two ideas — even though they mean the same thing.",
              },
              {
                icon: '&#x1F4CB;',
                label: 'CV formatting matters',
                text: 'Many ATS systems struggle to parse CVs that use tables, columns, text boxes, headers, footers, or graphics. Use a clean, single-column format with standard fonts. Save as a PDF or Word document, not an image. Put your contact details in the main body of the document, not in a header.',
              },
              {
                icon: '&#x1F4A1;',
                label: 'How to improve your chances',
                text: "Tailor your CV to each job description. Copy the exact phrases used (where they honestly apply to your experience). Include the required qualifications using the same terminology the employer uses. Run your CV through a free ATS checker to see how it scores.",
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

        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AI video interviews: what they really measure</h2>
          <p className="text-gray-600 leading-relaxed">
            Some employers use AI video interview platforms (such as HireVue) as a first stage.
            You record yourself answering questions, and the AI analyses your responses &mdash;
            sometimes including your facial expressions, tone of voice, and word choice &mdash;
            to produce a score.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: '&#x1F4F9;',
                title: 'What the AI analyses',
                text: 'HireVue and similar tools analyse the content of what you say, how quickly you speak, your tone, vocabulary, and (in some versions) micro-expressions from your face. The AI compares your profile to those of successful employees in similar roles.',
              },
              {
                icon: '&#x26A0;&#xFE0F;',
                title: 'The criticism',
                text: 'Critics argue that facial expression analysis has very weak scientific foundations. Emotions are expressed differently across cultures, and research suggests these tools can disadvantage people with certain disabilities, neurodivergent candidates, or those from different cultural backgrounds.',
              },
              {
                icon: '&#x1F527;',
                title: 'What you can do',
                text: 'Practise recording yourself. Look directly at the camera. Speak clearly and at a measured pace. Use language from the job description. You can ask the employer how the AI scores are used and whether a human reviews the results.',
              },
              {
                icon: '&#x1F1EC;&#x1F1E7;',
                title: 'Regulatory pressure',
                text: "HireVue dropped facial expression analysis in 2021 following criticism. The UK's ICO has guidance on using AI in recruitment. The EU AI Act classifies AI used in employment as 'high-risk', requiring stricter oversight.",
              },
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
          <h2 className="text-2xl font-bold text-gray-800">Amazon's recruiting tool: a cautionary tale</h2>
          <p className="text-gray-600 leading-relaxed">
            In 2014, Amazon began building an AI tool to rate job applicants on a five-star scale.
            By 2018, the project was quietly scrapped. Here is what happened.
          </p>
          <div className="bg-red-50 rounded-xl p-4 space-y-3">
            <div>
              <p className="font-semibold text-red-800 text-sm">The problem</p>
              <p className="text-red-700 text-sm leading-relaxed mt-1">
                The AI was trained on CVs submitted to Amazon over a decade &mdash; a period when the
                company&apos;s workforce was predominantly male. The AI learned to replicate the
                patterns it observed: it penalised CVs that mentioned &ldquo;women&rsquo;s&rdquo;
                (as in women&apos;s sports teams or all-women&apos;s colleges) and down-ranked
                graduates of two all-women&apos;s universities.
              </p>
            </div>
            <div>
              <p className="font-semibold text-red-800 text-sm">Why it could not be fixed</p>
              <p className="text-red-700 text-sm leading-relaxed mt-1">
                Amazon&apos;s engineers tried to remove the bias, but the model kept finding new
                proxies for gender. They could not guarantee the tool would not discriminate, so
                they scrapped it. The case shows that training an AI on historical data can
                bake in the biases of the past &mdash; even when those biases are not deliberate.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Blind hiring tools: removing bias or hiding it?</h2>
          <p className="text-gray-600 leading-relaxed">
            In response to bias concerns, some tools aim to remove identifying information from
            CVs before a recruiter sees them: names, photos, gender indicators, graduation years
            (a proxy for age), and sometimes university names.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm">
            The evidence is mixed. Removing a name can help reduce discrimination based on perceived
            ethnicity or gender. But AI systems are sometimes able to infer protected characteristics
            from other data points &mdash; language patterns, hobbies, or even postcode &mdash;
            even when the obvious identifiers are removed. Blind hiring is a useful tool,
            but not a complete solution.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Your rights in the UK</h2>
          <div className="space-y-3">
            {[
              {
                icon: '&#x2696;&#xFE0F;',
                label: 'The Equality Act 2010',
                text: 'Employers cannot discriminate against you based on protected characteristics (age, disability, gender, race, religion, sexual orientation, etc.) at any stage of recruitment. This applies even if the discrimination is unintentional — caused by a biased algorithm, for example.',
              },
              {
                icon: '&#x1F512;',
                label: 'UK GDPR and automated decisions',
                text: "You have the right not to be subject to a decision based solely on automated processing that significantly affects you. If a fully automated system rejects your application, you can ask the employer to have a human review it. Employers must also tell you if they are using automated decision-making.",
              },
              {
                icon: '&#x1F4AC;',
                label: 'What to do if you think AI treated you unfairly',
                text: 'Contact the employer and ask how your application was assessed. If you believe you were discriminated against, you can make a complaint to the ICO (about data handling) or the Equality and Human Rights Commission (about discrimination). Citizens Advice can help you understand your options.',
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

        <div className="bg-slate-50 rounded-2xl p-6 space-y-3 border border-slate-200">
          <h2 className="text-xl font-bold text-slate-800">Quick tips for jobseekers</h2>
          <ul className="text-slate-700 text-sm leading-relaxed space-y-2 list-disc list-inside">
            <li>Tailor your CV to each job &mdash; use the exact language from the job description</li>
            <li>Use a clean, single-column format with standard fonts (no tables or text boxes)</li>
            <li>Save your CV as a Word document or clean PDF, not an image</li>
            <li>Ask employers whether they use automated screening and how it works</li>
            <li>If rejected without explanation, you can ask why and request human review</li>
            <li>Practise video interviews: look at the camera, speak clearly, use relevant vocabulary</li>
          </ul>
        </div>

        <ReviewLaterButton lessonId="ai-and-hiring" />
        <LessonNote lessonId="ai-and-hiring" lessonTitle={LESSON_TITLE} />

        <Quiz questions={quizQuestions} lessonId="ai-and-hiring" lessonTitle={LESSON_TITLE} />

        <LessonRating lessonId="ai-and-hiring" />
        <RelatedLessons currentId="ai-and-hiring" />
        <NextLesson currentId="ai-and-hiring" />
      </div>
    </div>
  )
}
