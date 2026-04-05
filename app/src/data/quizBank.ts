import type { QuizQuestion } from '../components/Quiz'

export interface BankedQuestion extends QuizQuestion {
  lessonId: string
  lessonTitle: string
}

// A curated selection of questions from completed lessons.
// Add new lesson questions here when lessons are created.
export const QUIZ_BANK: BankedQuestion[] = [
  // --- What is AI? ---
  {
    lessonId: 'what-is-ai',
    lessonTitle: 'What is AI?',
    question: 'What does "artificial intelligence" actually mean?',
    options: [
      'A physical robot that can think and feel like a human',
      'Software that can perform tasks which normally require human intelligence, like understanding language or recognising images',
      'A supercomputer that stores every fact ever written down',
      'A program that can only follow exact, pre-written rules with no ability to adapt',
    ],
    correctIndex: 1,
    explanation: 'AI is software that can perform tasks requiring human-like intelligence. It is not a physical robot, nor a database, nor a rigid rule-following program.',
  },
  // --- AI bias ---
  {
    lessonId: 'ai-bias',
    lessonTitle: 'What is AI bias?',
    question: 'Where does AI bias most often come from?',
    options: [
      'Deliberate programming by engineers who want the AI to be unfair',
      'The training data, which may reflect historical inequalities or be unrepresentative of some groups',
      'The speed of the computer running the AI — slower computers produce more biased results',
      'AI bias only occurs in facial recognition, not in other AI applications',
    ],
    correctIndex: 1,
    explanation: 'AI learns from training data. If that data reflects historical biases or underrepresents certain groups, the AI learns and perpetuates those patterns — not because anyone intended it, but because the data contained it.',
  },
  // --- AI safety ---
  {
    lessonId: 'ai-safety',
    lessonTitle: 'AI safety and alignment',
    question: 'What is the "alignment problem" in AI safety?',
    options: [
      'The difficulty of making different AI systems work together on the same hardware',
      'The challenge of ensuring AI systems actually do what humans intend, rather than finding unintended shortcuts to achieve their objectives',
      'The problem of aligning the political views of AI researchers with government policy',
      'The technical challenge of keeping AI systems up to date with current events',
    ],
    correctIndex: 1,
    explanation: "The alignment problem refers to the gap between what we tell an AI to do and what we actually want it to do. An AI optimising for a simple goal might find unintended ways to achieve it that violate our deeper intentions.",
  },
  // --- Trusting AI ---
  {
    lessonId: 'trusting-ai',
    lessonTitle: 'Can I trust what AI says?',
    question: 'What is an AI "hallucination"?',
    options: [
      'When an AI becomes confused and stops responding',
      'When an AI generates false or fabricated information confidently, as if it were true',
      'When an AI displays visual images that look distorted or dreamlike',
      'A technical term for an AI that has been deliberately trained to mislead users',
    ],
    correctIndex: 1,
    explanation: "AI hallucination describes the tendency of language models to generate plausible-sounding but factually incorrect information — citing non-existent studies, inventing quotes, or stating false facts with complete confidence.",
  },
  // --- AI and jobs ---
  {
    lessonId: 'ai-and-jobs',
    lessonTitle: 'AI and jobs — what is really changing?',
    question: 'Which types of tasks are most at risk of being automated by AI?',
    options: [
      'Physical jobs that require manual dexterity, like plumbing and surgery',
      'Repetitive, rule-based cognitive tasks — data entry, routine document processing, and predictable customer queries',
      'Creative roles and leadership positions at the top of organisations',
      'Jobs that require in-person human presence, like teaching and social work',
    ],
    correctIndex: 1,
    explanation: "AI is best at automating tasks that are well-defined, repetitive, and based on recognising patterns in data. Jobs involving complex physical dexterity, genuine creativity, social judgment, and unpredictable human interaction are much harder to automate.",
  },
  // --- AI and privacy ---
  {
    lessonId: 'ai-and-privacy',
    lessonTitle: 'AI and privacy — who sees your data?',
    question: 'Under UK GDPR, what right do you have regarding data held about you?',
    options: [
      'The right to delete any AI system you believe has used your data',
      'The right to request a copy of the personal data an organisation holds about you — known as a Subject Access Request',
      'The right to receive financial compensation any time your data is used to train an AI',
      'The right to opt out of all data collection by technology companies operating in the UK',
    ],
    correctIndex: 1,
    explanation: 'UK GDPR gives individuals the right to submit a Subject Access Request (SAR) to any organisation that processes their personal data. The organisation must respond within 30 days, providing a copy of what data they hold, why, and who they share it with.',
  },
  // --- AI and healthcare ---
  {
    lessonId: 'ai-in-healthcare',
    lessonTitle: 'AI in healthcare',
    question: 'What did AlphaFold achieve that was considered a major scientific breakthrough?',
    options: [
      "It diagnosed a rare disease that had stumped doctors for over a decade, using only a patient's symptoms",
      'It predicted the 3D structures of nearly all known proteins — solving a problem that had stumped biologists for 50 years',
      'It performed the first fully autonomous surgical procedure without a human surgeon in the operating theatre',
      'It discovered a vaccine for a new virus strain in under 24 hours, compared to years for traditional methods',
    ],
    correctIndex: 1,
    explanation: "Proteins fold into specific 3D shapes that determine their function. Predicting those shapes from the underlying amino acid sequence was a 50-year unsolved problem in biology. DeepMind's AlphaFold solved it in 2020, predicting the structure of almost every known protein.",
  },
  // --- AI and scams ---
  {
    lessonId: 'ai-and-scams',
    lessonTitle: 'AI and scams',
    question: 'What is "voice cloning" and why is it dangerous for consumers?',
    options: [
      'A technique used by phone companies to improve call quality by copying your voice patterns',
      "AI technology that can create a convincing fake recording of someone's voice using only a short audio sample — used by scammers to impersonate family members or bank staff",
      'A legitimate feature used by voice assistants like Alexa to learn your preferred speaking style',
      'An AI tool used by police to identify criminals from voice recordings — not a consumer threat',
    ],
    correctIndex: 1,
    explanation: "Voice cloning tools can synthesise a convincing fake of someone's voice using just a few seconds of audio. Scammers use this to call victims pretending to be a distressed family member or bank fraud team. The NCSC advises having a family safe word to verify real emergency calls.",
  },
  // --- AI and transport ---
  {
    lessonId: 'ai-and-transport',
    lessonTitle: 'AI and transport',
    question: 'How does Google Maps predict how long your journey will take?',
    options: [
      'It uses a fixed database of historical average travel times that is updated manually each month',
      'It analyses real-time GPS data from millions of phone users to detect traffic conditions, then uses machine learning to predict how conditions will change during your journey',
      'It asks local traffic authorities to provide real-time speed data from roadside sensors, which it displays directly',
      'It uses satellite images to count the number of vehicles on each road, then calculates journey times from that count',
    ],
    correctIndex: 1,
    explanation: "Google Maps uses anonymised location data from Android phones and Google Maps app users to build a real-time picture of traffic speeds. Machine learning models then predict how conditions will evolve — whether the queue will clear before you arrive, or whether an incident will affect a different route.",
  },
  // --- AI and retail ---
  {
    lessonId: 'ai-and-retail',
    lessonTitle: 'AI and retail',
    question: 'What is dynamic pricing, and where is it most commonly used?',
    options: [
      'A government-regulated pricing scheme where supermarkets must change their prices based on food safety data',
      'AI-driven pricing that adjusts prices in real time based on demand, competition, time of day, and stock levels — most visible in airline tickets, hotels, and online retail',
      'A loyalty scheme that offers discounts to customers who shop at the same store consistently over time',
      'A pricing model where all products are sold at cost price, with profits made from subscription fees',
    ],
    correctIndex: 1,
    explanation: "Dynamic pricing uses AI to adjust prices constantly based on multiple signals: how many seats are left on a flight, what a competitor is charging, whether it is peak travel season, even the time of day. Airlines have used it for decades; hotel booking sites, Uber, and Amazon use it extensively.",
  },
  // --- AI and elections ---
  {
    lessonId: 'ai-and-elections',
    lessonTitle: 'AI and elections',
    question: 'What is political microtargeting, and what makes it a concern for democracy?',
    options: [
      'A practice where politicians target specific geographical areas for campaign events, based on historical voting patterns',
      'Using AI to analyse personal data from social media and serve different political messages to different individuals based on their inferred beliefs — without transparency',
      'A legal requirement in the UK that political adverts must be targeted at voters most likely to benefit from the policies advertised',
      'A neutral data analysis tool used by all parties equally to understand voter priorities, with full public disclosure',
    ],
    correctIndex: 1,
    explanation: "Political microtargeting uses data about individual voters to infer their political views and serve them highly tailored messages. The concern is that different voters effectively see different campaigns — promises to one group that contradict messages to another — undermining the idea of a shared public debate.",
  },
  // --- AI and banking ---
  {
    lessonId: 'ai-and-banking',
    lessonTitle: 'AI and banking',
    question: 'How do banks use AI to detect fraud so quickly?',
    options: [
      'Banks employ teams of human analysts who monitor every transaction in real time, supported by AI that highlights unusual activity',
      'AI analyses each transaction in milliseconds, comparing it to your normal spending patterns and flagging statistical anomalies — a transaction at 3am in a different country, for instance',
      'Banks use a simple rules-based system: any transaction over a set amount triggers a manual review',
      'Fraud detection AI only works after the fraud has happened — it identifies patterns in past data to help investigate, but cannot prevent real-time fraud',
    ],
    correctIndex: 1,
    explanation: "Modern fraud detection AI analyses each transaction in milliseconds — before it is approved or declined. It compares the transaction to your established spending pattern: usual location, typical time of day, normal merchant type, expected transaction size. High-risk transactions are declined or challenged with a verification request.",
  },
  // --- AI and architecture ---
  {
    lessonId: 'ai-and-architecture',
    lessonTitle: 'AI and architecture',
    question: 'What is generative design in architecture?',
    options: [
      'A process where an AI fully designs a building from scratch with no human input, then sends it directly to construction without review',
      'A software approach where an architect sets goals and constraints, and the AI explores thousands of possible design solutions to find the best options',
      'A legal requirement that all new buildings must be digitally modelled before planning permission is granted',
      'A method of generating 3D printed building materials on site using AI-controlled robots',
    ],
    correctIndex: 1,
    explanation: 'Generative design flips the traditional design process. Instead of an architect manually drawing one or two options, they define what they need and the AI generates hundreds or thousands of possible layouts that meet those constraints. The architect then applies human judgment to select and refine the most promising options.',
  },
  // --- AI and the arts ---
  {
    lessonId: 'ai-and-the-arts',
    lessonTitle: 'AI and the arts',
    question: 'What happened in the 2023 Hollywood strikes, and how was AI involved?',
    options: [
      "Hollywood writers and actors went on strike purely over pay disputes — AI was mentioned in negotiations but was not a significant concern for either union",
      "Writers and actors struck partly over studios' plans to use AI to write scripts and create digital replicas of actors' likenesses — winning new contractual protections against these uses",
      'The strikes were caused by AI systems already having replaced most writers and actors, with human workers demanding their jobs back',
      'The strikes ended when studios agreed to ban AI from the entertainment industry entirely for a period of ten years',
    ],
    correctIndex: 1,
    explanation: "The 2023 strikes by the Writers Guild of America and SAG-AFTRA were the longest in Hollywood's history. AI was a central issue: writers feared AI-generated scripts using their work as training data without consent; actors feared digital doubles used in perpetuity without pay. Both unions won new contractual protections.",
  },
  // --- AI and manufacturing ---
  {
    lessonId: 'ai-and-manufacturing',
    lessonTitle: 'AI and manufacturing',
    question: 'What is predictive maintenance, and why do factories use it?',
    options: [
      'A maintenance schedule where machines are serviced every six months regardless of their condition',
      'AI analysis of sensor data from machines to predict when a component is likely to fail — allowing maintenance to be done just before breakdown, rather than during or after',
      'A system where AI controls maintenance robots that automatically repair machines without human involvement',
      'Predictive maintenance is a theoretical concept — it is not yet used in real factories',
    ],
    correctIndex: 1,
    explanation: "Predictive maintenance uses sensors on machines to continuously monitor vibration, temperature, pressure, and electrical signals. AI analyses these streams, detecting subtle anomalies that indicate a component is beginning to degrade. This allows factories to schedule maintenance at the specific time it is needed — avoiding both unplanned breakdowns and unnecessary servicing.",
  },
  // --- AI and food ---
  {
    lessonId: 'ai-and-food',
    lessonTitle: 'AI and food',
    question: 'How does AI help reduce food waste in supermarkets?',
    options: [
      'AI automatically donates food to charities once it passes its best-before date, without any human involvement',
      'AI analyses sales patterns, weather, local events, and other factors to predict demand more accurately — helping supermarkets order closer to what they will actually sell',
      'AI sets prices so high that customers only buy exactly what they need, reducing the amount of food bought and subsequently wasted',
      'Food waste reduction is handled entirely by human store managers using traditional ordering systems',
    ],
    correctIndex: 1,
    explanation: "AI demand forecasting analyses dozens of variables — historical sales, day of week, upcoming bank holidays, local school terms, weather forecasts — to predict how much of each product each store will sell. More accurate forecasts mean smaller safety margins and less unsold stock.",
  },
  // --- AI and climate change ---
  {
    lessonId: 'ai-and-climate-change',
    lessonTitle: 'AI and climate change',
    question: 'How does AI help make renewable energy more reliable?',
    options: [
      'AI can directly control the weather, ensuring wind and solar power generation remains constant regardless of conditions',
      'AI predicts renewable output hours or days ahead by analysing weather forecasts, allowing grid operators to plan backup power and storage in advance',
      'AI converts intermittent renewable energy into a stable current using advanced power electronics',
      'AI is mainly used to locate new sites for renewable energy installations, not to manage their output',
    ],
    correctIndex: 1,
    explanation: "Wind and solar power are intermittent — they depend on weather. AI forecasting models can predict how much renewable energy will be available hours or days ahead with remarkable accuracy, allowing operators to plan when to bring gas backup online, when to charge batteries, and when to import or export power.",
  },
  // --- AI and cybersecurity ---
  {
    lessonId: 'ai-and-cybersecurity',
    lessonTitle: 'AI and cybersecurity',
    question: 'How do AI-powered spam and phishing filters protect your inbox?',
    options: [
      'They block all emails from senders you have not previously corresponded with, requiring manual approval for each new sender',
      'They analyse thousands of signals in each email — sender reputation, language patterns, link destinations — to assign a risk score and filter out suspicious messages',
      'They only block emails containing known virus attachments, leaving other suspicious messages for the user to assess',
      'They compare emails to a manually maintained list of known spam senders, updated weekly by a team of human reviewers',
    ],
    correctIndex: 1,
    explanation: "Modern spam and phishing filters use machine learning to analyse hundreds of signals simultaneously: sender IP reputation, domain age, email header anomalies, the language and urgency of the message, and the destination of any links. This multi-signal approach catches over 99.9% of spam.",
  },
  // --- AI and cooking ---
  {
    lessonId: 'ai-and-cooking',
    lessonTitle: 'AI and cooking',
    question: 'What technology do food scanning and calorie tracking apps mainly rely on to identify food from a photo?',
    options: [
      'Barcode scanning linked to manufacturer nutritional data',
      'Computer vision AI trained on millions of food images, combined with nutritional databases',
      'Infrared sensors built into smartphones that analyse the molecular composition of food',
      'A manual entry system where users type in ingredients and portion sizes',
    ],
    correctIndex: 1,
    explanation: 'Apps like Lose It! and Calorie Mama use computer vision — the same technology behind facial recognition — trained on enormous datasets of food photos. Point your phone at a plate and the AI identifies the dish, estimates the portion size, and looks up the approximate nutritional content.',
  },
  // --- AI and genetics ---
  {
    lessonId: 'ai-and-genetics',
    lessonTitle: 'AI and genetics',
    question: 'What is a "polygenic risk score" in the context of AI and genetics?',
    options: [
      'A legal score that ranks how many genetic patents a company holds',
      'An AI technique that combines hundreds of small genetic variants to estimate an individual\'s statistical risk of developing a condition like heart disease',
      'A blood test that scores how quickly your genes are ageing',
      'A scoring system that ranks the importance of individual genes in controlling a specific trait',
    ],
    correctIndex: 1,
    explanation: 'Many common diseases are not caused by a single gene but by the combined effect of hundreds of small genetic variants. Polygenic risk scores aggregate all these small effects using AI trained on data from hundreds of thousands of people, placing each person on a risk spectrum for conditions like heart disease or type 2 diabetes.',
  },
]
