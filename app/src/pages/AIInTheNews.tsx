import { Link } from '@tanstack/react-router'

interface TimelineEntry {
  year: number
  month?: string
  title: string
  description: string
  icon: string
  category: 'research' | 'product' | 'event' | 'regulation'
}

const TIMELINE: TimelineEntry[] = [
  {
    year: 2011,
    month: 'February',
    title: 'IBM Watson wins Jeopardy!',
    description:
      'IBM\'s Watson computer defeated two of the best Jeopardy! players of all time — Ken Jennings and Brad Rutter — in a televised contest. Watson had to understand the nuance of the clues, process natural language, and buzz in fast enough to compete. It was a landmark moment showing that computers could handle the complexity of human language at a high level.',
    icon: '&#x1F4FA;',
    category: 'event',
  },
  {
    year: 2012,
    month: 'October',
    title: 'Deep learning breakthrough — AlexNet',
    description:
      'A system called AlexNet, built by a small team at the University of Toronto, entered a major image recognition competition and won by a huge margin. It used a technique called deep learning — training neural networks with many layers on large amounts of data. This sparked a wave of AI investment and research that continues today. Almost every AI you use now traces back to the ideas pioneered here.',
    icon: '&#x1F9E0;',
    category: 'research',
  },
  {
    year: 2014,
    title: 'AI assistants go mainstream',
    description:
      'Amazon launched Alexa and the Echo smart speaker, bringing AI voice assistants into living rooms across the world. Earlier voice assistants like Siri (2011) had existed on phones, but the always-on home speaker was a new idea. For the first time, millions of ordinary people interacted with AI daily — asking questions, playing music, setting timers — without thinking of it as AI at all.',
    icon: '&#x1F50A;',
    category: 'product',
  },
  {
    year: 2016,
    month: 'March',
    title: 'AlphaGo beats the world champion at Go',
    description:
      'Google DeepMind\'s AlphaGo defeated Lee Sedol, one of the world\'s greatest players of the ancient board game Go, 4-1. This was considered impossible — Go has more possible board positions than atoms in the observable universe, and experts said intuition, not brute calculation, was required. AlphaGo used deep learning and a technique called reinforcement learning (learning by playing itself millions of times). It was a milestone showing AI could handle problems that required genuine strategy and intuition.',
    icon: '&#x265F;&#xFE0F;',
    category: 'event',
  },
  {
    year: 2017,
    title: '"Attention is all you need" — the Transformer',
    description:
      'A research paper from Google introduced the "Transformer" architecture — a new way of building AI systems that process language. This became the foundation of almost every powerful AI language system built since, including ChatGPT, Claude, and Gemini. If you have ever wondered why these tools suddenly got so much better, much of the answer traces back to this one paper.',
    icon: '&#x1F4C4;',
    category: 'research',
  },
  {
    year: 2018,
    title: 'BERT — Google transforms search',
    description:
      'Google released BERT, an AI system for understanding language. Within a year, it was running on Google Search, fundamentally changing how Google understood what people were looking for. Before BERT, search was largely about keywords. After BERT, Google could understand the meaning and context of a query. You may not have noticed — but if Google Search got noticeably better at understanding your questions around this time, BERT is why.',
    icon: '&#x1F50D;',
    category: 'product',
  },
  {
    year: 2019,
    month: 'February',
    title: 'GPT-2 — too dangerous to release?',
    description:
      'OpenAI released a language model called GPT-2 and initially withheld the most powerful version, saying it was "too dangerous" — it could generate convincing fake news articles. The decision was controversial: many researchers said the risk was overstated. Eventually the full model was released. In hindsight, GPT-2 was impressive but modest compared to what followed. The episode sparked a debate about AI safety that continues today.',
    icon: '&#x1F916;',
    category: 'product',
  },
  {
    year: 2020,
    month: 'July',
    title: 'GPT-3 and AlphaFold — a watershed year',
    description:
      'OpenAI released GPT-3, a language model so capable it could write essays, answer questions, and generate code in ways that genuinely surprised researchers. In the same year, DeepMind\'s AlphaFold cracked a 50-year-old biology problem — predicting the 3D shape of proteins from their genetic sequence. This was considered one of the most important scientific achievements of the decade, with huge implications for medicine and drug discovery.',
    icon: '&#x1F9EC;',
    category: 'research',
  },
  {
    year: 2021,
    month: 'June',
    title: 'GitHub Copilot — AI writes code',
    description:
      'Microsoft and GitHub launched Copilot, an AI tool that helps programmers by suggesting lines of code as they type — like autocomplete, but for entire functions and programmes. Built on GPT technology, it was trained on millions of open-source code files. Developers quickly found it genuinely useful, often completing tedious or repetitive code instantly. It sparked a debate about the future of software development and programmer jobs.',
    icon: '&#x1F4BB;',
    category: 'product',
  },
  {
    year: 2022,
    month: 'April',
    title: 'DALL-E 2 — AI generates images',
    description:
      'OpenAI released DALL-E 2, which could generate photorealistic images from text descriptions. Ask it for "a photograph of an astronaut riding a horse on Mars" and it would produce one instantly. Soon after, Stable Diffusion and Midjourney launched, making AI image generation accessible to anyone. Artists, designers, and photographers began debating what this meant for creative work and copyright.',
    icon: '&#x1F3A8;',
    category: 'product',
  },
  {
    year: 2022,
    month: 'November',
    title: 'ChatGPT launches — everything changes',
    description:
      'OpenAI launched ChatGPT and it became the fastest product in history to reach 100 million users — in just two months. For the first time, a genuinely capable AI assistant was available to everyone, for free, through a chat interface. Teachers worried about homework. Companies began drafting AI policies. Journalists wondered what it meant for their jobs. The AI conversation moved from technology specialists to dinner tables worldwide.',
    icon: '&#x1F4AC;',
    category: 'product',
  },
  {
    year: 2023,
    month: 'March',
    title: 'GPT-4, Gemini, and Claude arrive',
    description:
      'OpenAI released GPT-4, significantly more capable than its predecessor. Google launched Bard (later renamed Gemini). Anthropic launched Claude. Suddenly there were multiple powerful AI assistants competing for users. Businesses began integrating AI into their products rapidly. The "AI arms race" became a regular news story, and investment in AI reached historic levels.',
    icon: '&#x1F680;',
    category: 'product',
  },
  {
    year: 2023,
    month: 'June',
    title: 'EU AI Act — the world\'s first major AI law',
    description:
      'The European Union agreed the world\'s first comprehensive law regulating AI. The EU AI Act takes a "risk-based" approach — banning the highest-risk uses (like real-time facial recognition in public by police) and requiring strict oversight for high-risk uses (like AI in hiring, credit scoring, or medical devices). It applies to any company selling AI products in the EU, giving it global reach. The UK has taken a lighter-touch approach, with sector regulators adapting existing rules rather than creating a new AI law.',
    icon: '&#x2696;&#xFE0F;',
    category: 'regulation',
  },
  {
    year: 2024,
    month: 'February',
    title: 'AI in the UK general election',
    description:
      'As the UK headed towards a general election, AI-generated deepfakes, synthetic voices mimicking politicians, and AI-generated campaign materials became a real concern. Regulators and platforms scrambled to label AI content. A fake audio clip of Labour\'s Keir Starmer appeared online. It raised urgent questions about how democracies protect elections in the age of generative AI.',
    icon: '&#x1F5F3;&#xFE0F;',
    category: 'event',
  },
  {
    year: 2024,
    month: 'June',
    title: 'Apple Intelligence — AI on your iPhone',
    description:
      'Apple announced Apple Intelligence at its developer conference, bringing AI deeply into iPhones, iPads, and Macs. Writing assistance, AI image generation, and a smarter Siri powered by a combination of on-device AI and ChatGPT arrived on millions of devices. It marked the moment AI became a standard feature of everyday consumer technology — not a separate app or service, but built in.',
    icon: '&#x1F34F;',
    category: 'product',
  },
  {
    year: 2025,
    title: 'AI agents go mainstream',
    description:
      'AI moved beyond answering questions to taking actions. "AI agents" — systems that can browse the web, use apps, write and run code, and complete multi-step tasks autonomously — became a major trend. OpenAI, Google, Anthropic, and Microsoft all launched agentic products. The app you are reading right now was built by AI agents — no human wrote the code directly. It raised new questions about automation, trust, and what tasks we are comfortable delegating to AI entirely.',
    icon: '&#x1F916;',
    category: 'product',
  },
]

const CATEGORY_STYLES: Record<TimelineEntry['category'], { bg: string; text: string; label: string }> = {
  research: { bg: 'bg-purple-100 dark:bg-purple-900', text: 'text-purple-700 dark:text-purple-300', label: 'Research' },
  product: { bg: 'bg-blue-100 dark:bg-blue-900', text: 'text-blue-700 dark:text-blue-300', label: 'Product' },
  event: { bg: 'bg-amber-100 dark:bg-amber-900', text: 'text-amber-700 dark:text-amber-300', label: 'Event' },
  regulation: { bg: 'bg-red-100 dark:bg-red-900', text: 'text-red-700 dark:text-red-300', label: 'Regulation' },
}

export function AIInTheNews() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-10 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-8">

        <div className="text-center space-y-4">
          <div className="text-6xl">&#x1F4F0;</div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            AI in the news
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            A timeline of the moments that shaped modern AI — from the first computers that could understand language,
            to the tools that are transforming work and daily life today.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            {Object.entries(CATEGORY_STYLES).map(([key, style]) => (
              <span key={key} className={`${style.bg} ${style.text} px-3 py-1 rounded-full font-medium`}>
                {style.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-6">
            {TIMELINE.map((entry, idx) => {
              const style = CATEGORY_STYLES[entry.category]
              const isLast = idx === TIMELINE.length - 1
              return (
                <div key={idx} className="relative flex gap-4">
                  {/* Year badge on the line */}
                  <div className="flex-shrink-0 w-16 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center z-10 relative">
                      <span className="text-xs" dangerouslySetInnerHTML={{ __html: entry.icon }} />
                    </div>
                    {!isLast && <div className="text-xs text-gray-400 dark:text-gray-500 mt-1 font-mono">{entry.year}</div>}
                  </div>

                  {/* Content card */}
                  <div className="flex-1 pb-2">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-900 p-5 space-y-3">
                      <div className="flex flex-wrap items-start gap-2 justify-between">
                        <div>
                          <div className="text-xs text-gray-400 dark:text-gray-500 font-mono mb-0.5">
                            {entry.month ? `${entry.month} ${entry.year}` : entry.year}
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 leading-tight">{entry.title}</h3>
                        </div>
                        <span className={`${style.bg} ${style.text} text-xs px-2 py-1 rounded-full font-medium flex-shrink-0`}>
                          {style.label}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{entry.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 rounded-2xl border border-blue-100 dark:border-blue-900 p-6 space-y-3">
          <h2 className="text-xl font-bold text-blue-800 dark:text-blue-200">What comes next?</h2>
          <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
            AI is developing faster than almost any technology in history. The events above happened in just over a decade. The lessons in this app are your guide to understanding what these changes mean for your life, your work, and the world around you. Every topic you explore gives you more context for the headlines you will read in the years ahead.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-xl text-center transition-colors"
            >
              Explore lessons
            </Link>
            <Link
              to="/glossary"
              className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-2 rounded-xl text-center hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
            >
              Look up AI terms
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
