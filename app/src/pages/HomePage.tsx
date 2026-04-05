import { Link, useNavigate } from '@tanstack/react-router'
import { useState, useCallback } from 'react'
import { useProfile } from '../hooks/useProfile'
import { SearchBar } from '../components/SearchBar'
import { useStreak } from '../hooks/useStreak'
import { getRecommendations, type Recommendation } from '../hooks/useRecommendations'
import { useWeeklyHighlight } from '../hooks/useWeeklyHighlight'
import { useDailyReminder } from '../hooks/useDailyReminder'
import { loadWeeklyGoal } from '../hooks/useWeeklyGoal'
import { loadLessonTimestamps, loadLessonViewCounts } from '../hooks/useMarkVisited'
import { DailyChallenge } from '../components/DailyChallenge'
import { LessonOfTheWeek } from '../components/LessonOfTheWeek'
import { RecentlyViewed, loadRecentlyViewed } from '../components/RecentlyViewed'
import { WhatsNew } from '../components/WhatsNew'
import { InterestQuiz } from '../components/InterestQuiz'
import { TestYourself } from '../components/TestYourself'
import { AppFeedback } from '../components/AppFeedback'
import { AIFactsTicker } from '../components/AIFactsTicker'
import { QuizOfTheDay } from '../components/QuizOfTheDay'

const AI_FACTS = [
  'The first chatbot, ELIZA, was created in 1966 at MIT — it could hold simple conversations by matching patterns in text.',
  'Google Translate processes over 100 billion words every single day.',
  'AlphaFold, an AI by DeepMind, solved a 50-year-old biology problem by predicting the shapes of nearly all known proteins.',
  'The word "robot" comes from the Czech word "robota", meaning forced labour or drudgery.',
  'GPT-4 was trained on roughly 1 trillion words of text — more than any human could read in thousands of lifetimes.',
  'Chess computers first beat a reigning world champion in 1997. The game of Go fell 19 years later, in 2016.',
  'Siri was originally built as a standalone app before Apple acquired the company in 2010 for a reported $200 million.',
  'The term "Artificial Intelligence" was coined in 1956 at a summer workshop at Dartmouth College, USA.',
  'A modern smartphone has more computing power than the computers used to send astronauts to the Moon in 1969.',
  'Netflix estimates its recommendation algorithm saves the company over $1 billion per year by keeping subscribers engaged.',
  'AI can now detect certain cancers from medical scans as accurately as experienced doctors — sometimes more accurately.',
  'The first industrial robot, Unimate, started working on a General Motors assembly line in 1961.',
  'Claude processes your message and generates a full response in a matter of seconds — yet the underlying maths involves billions of calculations.',
  'Spam filters powered by machine learning now catch over 99.9% of spam before it reaches your inbox.',
  'OpenAI\'s ChatGPT reached 100 million users in just 2 months — faster than any consumer app in history.',
  'An AI called DALL-E can generate a photorealistic image from a text description in seconds — a task that would take a human artist hours.',
  'The largest AI models today have more "parameters" (internal numbers) than there are synapses in a human brain.',
  'Waymo\'s self-driving cars have driven over 20 million autonomous miles on public roads.',
  'AI is used to discover new antibiotics — it found a new one called Halicin in 2020 that works against drug-resistant bacteria.',
  'YouTube\'s recommendation algorithm drives over 70% of the total watch time on the platform.',
  'Alan Turing, who proposed the Turing Test in 1950, is widely regarded as the father of theoretical computer science and AI.',
  'Voice recognition accuracy has gone from around 80% in 2010 to over 99% today, thanks to deep learning.',
  'An AI system called Libratus won $1.8 million from professional poker players in a 20-day tournament in 2017.',
  'The human brain has roughly 86 billion neurons — a large AI model has a comparable number of parameters, but works very differently.',
  'Anthropic, the company that built Claude, was founded in 2021 by former members of OpenAI.',
  'AI can compose music, write poetry, and generate art — but it has no feelings about any of it.',
  'The first commercially successful AI product was a spam filter — long before chatbots or image generators.',
  'DeepMind\'s AlphaCode AI can write competitive programming solutions at the level of a typical human software engineer.',
  'Amazon\'s Alexa was launched in 2014 alongside the Echo speaker — it was one of the first AI assistants to live in a dedicated home device.',
  'AI weather models can now predict the weather 10 days ahead as accurately as traditional forecasts did just 5 days ahead a decade ago.',
]

function getTodaysFact(): string {
  const dayIndex = Math.floor(Date.now() / 86400000) % AI_FACTS.length
  return AI_FACTS[dayIndex]
}

type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'

interface Module {
  id: string
  title: string
  description: string
  readingTime?: string
  icon: string
  to: string
  color: string
  difficulty?: Difficulty
}

interface ModuleGroup {
  heading: string
  modules: Module[]
}

const MODULE_GROUPS: ModuleGroup[] = [
  {
    heading: 'Getting started',
    modules: [
      {
        id: 'github-signup',
        title: 'Create your GitHub account',
        description: 'Step-by-step guide to signing up for GitHub — your key to the whole project.',
        readingTime: '5 min',
        icon: '🔑',
        to: '/tutorial/github-signup',
        color: 'blue',
        difficulty: 'Beginner',
      },
      {
        id: 'github-basics',
        title: 'What is GitHub for?',
        description: 'Repos, commits, issues, and pull requests — explained simply, no coding needed.',
        readingTime: '4 min',
        icon: '📁',
        to: '/learn/github-basics',
        color: 'green',
        difficulty: 'Beginner',
      },
      {
        id: 'what-is-api',
        title: 'What is an API?',
        description: 'How programs talk to each other — in plain English, with real-world examples.',
        readingTime: '4 min',
        icon: '🔗',
        to: '/learn/what-is-api',
        color: 'teal',
        difficulty: 'Intermediate',
      },
    ],
  },
  {
    heading: 'Understanding AI',
    modules: [
      {
        id: 'what-is-ai',
        title: 'What is AI?',
        description: 'Artificial intelligence explained without jargon — plus what Claude can and cannot do.',
        readingTime: '5 min',
        icon: '🤖',
        to: '/learn/what-is-ai',
        color: 'purple',
        difficulty: 'Beginner',
      },
      {
        id: 'what-is-ml',
        title: 'What is machine learning?',
        description: 'How computers learn from examples instead of rules — with everyday analogies and real-world uses.',
        readingTime: '6 min',
        icon: '📊',
        to: '/learn/what-is-machine-learning',
        color: 'emerald',
        difficulty: 'Intermediate',
      },
      {
        id: 'how-ai-training-works',
        title: 'How does AI training work?',
        description: 'Datasets, weights, loss functions, and RLHF — all explained in plain language, no maths required.',
        readingTime: '7 min',
        icon: '🧪',
        to: '/learn/how-ai-training-works',
        color: 'violet',
        difficulty: 'Intermediate',
      },
      {
        id: 'neural-network',
        title: 'What is a neural network?',
        description: 'The brain-inspired technology behind modern AI — neurons, weights, layers, and why cats need millions of photos.',
        readingTime: '6 min',
        icon: '🧠',
        to: '/learn/neural-network',
        color: 'pink',
        difficulty: 'Advanced',
      },
      {
        id: 'language-models',
        title: 'How do language models like Claude work?',
        description: 'Tokens, context windows, predicting the next word, and how RLHF makes Claude safe and helpful.',
        readingTime: '7 min',
        icon: '💬',
        to: '/learn/language-models',
        color: 'indigo',
        difficulty: 'Advanced',
      },
      {
        id: 'how-chatbots-work',
        title: 'How do chatbots work?',
        description: 'Rule-based vs. AI chatbots, context windows, hallucination, and when to trust your chatbot.',
        readingTime: '6 min',
        icon: '💬',
        to: '/learn/how-chatbots-work',
        color: 'cyan',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-history',
        title: 'The history of AI',
        description: 'From the Turing Test in 1950 to ChatGPT in 2022 — the key milestones that shaped artificial intelligence.',
        readingTime: '5 min',
        icon: '⏳',
        to: '/ai-history',
        color: 'amber',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-everyday-life',
        title: 'AI in everyday life',
        description: 'Search engines, recommendations, voice assistants, spam filters — AI is already all around you.',
        readingTime: '5 min',
        icon: '🌍',
        to: '/learn/ai-everyday-life',
        color: 'sky',
        difficulty: 'Beginner',
      },
    ],
  },
  {
    heading: 'AI and society',
    modules: [
      {
        id: 'ai-pros-and-cons',
        title: 'AI: the good and the bad',
        description: 'A balanced, honest look at what AI can do for us — and the real risks worth understanding.',
        readingTime: '6 min',
        icon: '⚖️',
        to: '/learn/ai-pros-and-cons',
        color: 'orange',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-bias',
        title: 'What is AI bias?',
        description: 'How AI systems pick up unfair patterns from training data — and real-world examples that show why it matters.',
        readingTime: '6 min',
        icon: '⚖️',
        to: '/learn/ai-bias',
        color: 'orange',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-safety',
        title: 'AI safety and alignment',
        description: 'Why making AI do what we actually want matters, and what Anthropic does to keep Claude safe.',
        readingTime: '6 min',
        icon: '🛡️',
        to: '/learn/ai-safety',
        color: 'teal',
        difficulty: 'Intermediate',
      },
      {
        id: 'prompt-engineering',
        title: 'What is prompt engineering?',
        description: 'How to write better prompts to get clearer, more useful answers from AI — with before and after examples.',
        readingTime: '6 min',
        icon: '✏️',
        to: '/learn/prompt-engineering',
        color: 'violet',
        difficulty: 'Intermediate',
      },
      {
        id: 'trusting-ai',
        title: 'Can I trust what AI says?',
        description: 'Hallucinations, out-of-date info, bias — how to use AI wisely and know when to verify.',
        readingTime: '5 min',
        icon: '🔍',
        to: '/learn/trusting-ai',
        color: 'amber',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-jobs',
        title: 'AI and jobs — what is really changing?',
        description: 'A grounded look at what AI automates, what it assists, what it cannot replace, and what new roles it creates.',
        readingTime: '6 min',
        icon: '💼',
        to: '/learn/ai-and-jobs',
        color: 'emerald',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-creativity',
        title: 'AI and creativity — art, music, and writing',
        description: 'How AI tools help with creative work, and why human creativity still matters more than ever.',
        readingTime: '6 min',
        icon: '🎨',
        to: '/learn/ai-and-creativity',
        color: 'purple',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-in-healthcare',
        title: 'AI in healthcare',
        description: 'How AI is helping doctors diagnose diseases, discover drugs, and personalise treatment.',
        readingTime: '6 min',
        icon: '🩺',
        to: '/learn/ai-in-healthcare',
        color: 'teal',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-environment',
        title: 'AI and the environment',
        description: 'The energy and water AI uses, its carbon footprint, and what the industry is doing to go greener.',
        readingTime: '6 min',
        icon: '🌱',
        to: '/learn/ai-and-environment',
        color: 'green',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-privacy',
        title: 'AI and privacy — who sees your data?',
        description: 'How AI apps collect and use personal data, your rights, and practical tips to stay safe.',
        readingTime: '6 min',
        icon: '🔒',
        to: '/learn/ai-and-privacy',
        color: 'violet',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-education',
        title: 'AI and education — how AI is changing how we learn',
        description: 'Personalised tutoring, teacher tools, academic integrity, and what AI cannot replace.',
        readingTime: '6 min',
        icon: '🎓',
        to: '/learn/ai-and-education',
        color: 'sky',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-misinformation',
        title: 'AI and misinformation — deepfakes, fake news, and what to watch out for',
        description: 'How AI creates convincing deepfakes and fake news, how to spot them, and how to fact-check effectively.',
        readingTime: '6 min',
        icon: '🔎',
        to: '/learn/ai-and-misinformation',
        color: 'red',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-mental-health',
        title: 'AI and your mental health — chatbots, therapy apps, and digital wellbeing',
        description: 'AI companion and therapy apps — their real benefits, risks, and how to use them wisely.',
        readingTime: '6 min',
        icon: '🧠',
        to: '/learn/ai-and-mental-health',
        color: 'violet',
        difficulty: 'Beginner',
      },
      {
        id: 'future-of-ai',
        title: 'What does the future of AI look like?',
        description: 'Near-term trends, the AGI debate, what experts actually think, and how to stay informed.',
        readingTime: '7 min',
        icon: '🔭',
        to: '/learn/future-of-ai',
        color: 'indigo',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-in-your-apps',
        title: 'AI in the apps you already use',
        description: 'Google Search, Maps, Spotify, Netflix, autocorrect, spam filters — AI at work in your daily apps.',
        readingTime: '5 min',
        icon: '📱',
        to: '/learn/ai-in-your-apps',
        color: 'blue',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-laws-and-rights',
        title: 'AI, laws, and your rights',
        description: 'The EU AI Act explained, AI copyright, and your rights when AI makes decisions about you.',
        readingTime: '7 min',
        icon: '⚖️',
        to: '/learn/ai-laws-and-rights',
        color: 'orange',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-social-media',
        title: 'AI and social media',
        description: 'How recommendation algorithms decide what you see — and what you can do about it.',
        readingTime: '6 min',
        icon: '📲',
        to: '/learn/ai-and-social-media',
        color: 'blue',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-copyright',
        title: 'AI and the law',
        description: 'Copyright, liability, and who is responsible — what happens when AI creates or gets something wrong.',
        readingTime: '6 min',
        icon: '⚖️',
        to: '/learn/ai-and-copyright',
        color: 'slate',
        difficulty: 'Intermediate',
      },
      {
        id: 'how-to-use-ai-safely',
        title: 'How to use AI safely',
        description: 'Practical tips: how to verify AI answers, spot hallucinations, protect your data, and get better results.',
        readingTime: '5 min',
        icon: '🛡️',
        to: '/learn/how-to-use-ai-safely',
        color: 'green',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-money',
        title: 'AI and money — banking, fraud detection, and robo-advisors',
        description: 'How AI spots fraud in milliseconds, what robo-advisors do, AI credit scoring, and your rights when an algorithm says no.',
        readingTime: '6 min',
        icon: '💰',
        to: '/learn/ai-and-money',
        color: 'emerald',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-democracy',
        title: 'AI and democracy — surveillance, voting, and public trust',
        description: 'Election micro-targeting, deepfakes in campaigns, facial recognition in public spaces, and predictive policing.',
        readingTime: '7 min',
        icon: '🏛️',
        to: '/learn/ai-and-democracy',
        color: 'blue',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-language',
        title: 'AI and language — translation, speech, and breaking barriers',
        description: "How neural machine translation works, Google Translate's 2016 breakthrough, text-to-speech, and AI for endangered languages.",
        readingTime: '5 min',
        icon: '🗣️',
        to: '/learn/ai-and-language',
        color: 'purple',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-music',
        title: 'AI and music — composition, recommendation, and the future of sound',
        description: 'How Spotify recommends your next favourite song, how AI composition tools work, the voice cloning debate, and AI behind the mixing desk.',
        readingTime: '5 min',
        icon: '🎵',
        to: '/learn/ai-and-music',
        color: 'violet',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-gaming',
        title: 'AI and gaming — NPCs, procedural worlds, and cheating detection',
        description: 'From Pac-Man ghosts to AlphaStar beating StarCraft pros — how AI shapes the games we play and the fairness of online competition.',
        readingTime: '5 min',
        icon: '🎮',
        to: '/learn/ai-and-gaming',
        color: 'purple',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-journalism',
        title: 'AI and journalism — fake news, newsroom tools, and the battle for truth',
        description: 'How newsrooms use AI for transcription and story leads, why deepfakes threaten trust, and how to spot AI-generated news.',
        readingTime: '6 min',
        icon: '📰',
        to: '/learn/ai-and-journalism',
        color: 'slate',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-the-law',
        title: 'AI and the law — courts, contracts, and your legal rights',
        description: 'How AI is used in legal research, deepfake evidence in court, what the EU AI Act means for you, and how to challenge an automated decision.',
        readingTime: '6 min',
        icon: '⚖️',
        to: '/learn/ai-and-the-law',
        color: 'slate',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-the-military',
        title: 'AI and the military — autonomous weapons, AI-assisted warfare, and the ethics of killer robots',
        description: "How AI is being used in defence and conflict — loitering drones, autonomous weapons, Project Maven, and why 'meaningful human control' is so hard to define.",
        readingTime: '7 min',
        icon: '⚔️',
        to: '/learn/ai-and-the-military',
        color: 'slate',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-streaming',
        title: 'AI and streaming — how Netflix, Spotify, and YouTube decide what you watch and listen to',
        description: 'The algorithms behind your recommendations, filter bubbles, the business model driving them, and how to take back control of your own taste.',
        readingTime: '7 min',
        icon: '🎬',
        to: '/learn/ai-and-streaming',
        color: 'purple',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-news',
        title: 'AI and the news — personalised feeds, AI-written articles, and how algorithms shape what you read',
        description: 'How AI writes financial results and sports reports, how personalised newsfeeds create filter bubbles, and the tools that help you read more widely.',
        readingTime: '7 min',
        icon: '📰',
        to: '/learn/ai-and-news',
        color: 'blue',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-smart-cities',
        title: 'AI and smart cities — urban planning, smart traffic, energy-efficient buildings, and the surveillance city debate',
        description: 'How AI is reshaping our cities — adaptive traffic lights, generative building design, AI-assisted planning, and the civil liberties questions raised by public surveillance.',
        readingTime: '8 min',
        icon: '🏙️',
        to: '/learn/ai-and-smart-cities',
        color: 'cyan',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-charities',
        title: 'AI and charities — donor prediction, volunteer matching, and the ethics of automated giving',
        description: 'How nonprofits use AI for fundraising, volunteer matching, and service delivery — and the unique ethical questions raised when the people affected are the most vulnerable in society.',
        readingTime: '7 min',
        icon: '🤝',
        to: '/learn/ai-and-charities',
        color: 'rose',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-volunteering',
        title: 'AI and volunteering — matching helpers, predicting need, and the ethics of automated giving of time',
        description: 'How AI is transforming volunteer matching, demand forecasting, and emergency coordination — and what it means for the millions of people who give their time.',
        readingTime: '7 min',
        icon: '🙋',
        to: '/learn/ai-and-volunteering',
        color: 'emerald',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-adult-education',
        title: 'AI and adult education — AI tutors, personalised learning, and lifelong upskilling',
        description: 'How AI is reshaping lifelong learning through adaptive platforms, skills gap analysis, and workplace training — and the access barriers that must be overcome.',
        readingTime: '7 min',
        icon: '📚',
        to: '/learn/ai-and-adult-education',
        color: 'violet',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-the-arts',
        title: 'AI and the arts — museums, galleries, theatres, and cultural AI',
        description: 'How AI is being used in cultural institutions — from personalising museum visits and restoring ancient frescoes to the fierce debate over AI-generated art and artist rights.',
        readingTime: '7 min',
        icon: '🎭',
        to: '/learn/ai-and-the-arts',
        color: 'purple',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-advertising',
        title: 'AI and advertising — how AI targets ads, personalised marketing, and your digital rights',
        description: 'How programmatic advertising, real-time bidding, and behavioural profiling work — plus practical steps to protect your privacy with ad blockers and UK GDPR rights.',
        readingTime: '7 min',
        icon: '📢',
        to: '/learn/ai-and-advertising',
        color: 'orange',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-emergency-services',
        title: 'AI and emergency services — AI in 999 calls, fire detection, ambulance dispatch, and disaster response',
        description: 'How AI is transforming emergency response — from voice analysis in 999 calls and ambulance optimisation to earthquake early warning, flood prediction, and disaster response drones.',
        readingTime: '7 min',
        icon: '🚨',
        to: '/learn/ai-and-emergency-services',
        color: 'red',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-virtual-reality',
        title: 'AI and virtual reality — AI-generated worlds, VR NPCs, the metaverse, and what it means for real life',
        description: 'How AI powers immersive VR environments, lifelike virtual characters, AR in everyday life, and the real questions about identity, addiction, and surveillance.',
        readingTime: '7 min',
        icon: '🥽',
        to: '/learn/ai-and-virtual-reality',
        color: 'violet',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-supply-chains',
        title: 'AI and supply chains — robots in warehouses, demand forecasting, last-mile delivery, and when AI gets it wrong',
        description: 'How AI keeps goods moving — demand forecasting, Amazon warehouse robots, route optimisation, last-mile delivery, and what the pandemic taught us about the limits of efficiency.',
        readingTime: '7 min',
        icon: '🚚',
        to: '/learn/ai-and-supply-chains',
        color: 'orange',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-film-and-tv',
        title: 'AI and film and TV — de-ageing effects, AI scriptwriting, dubbing, and the Hollywood debate',
        description: 'How AI is used behind the scenes — de-ageing actors, streaming recommendations, AI dubbing, and the 2023 Hollywood strikes over AI and creative jobs.',
        readingTime: '7 min',
        icon: '🎬',
        to: '/learn/ai-and-film-and-tv',
        color: 'purple',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-water',
        title: 'AI and water — smart networks, flood prediction, drought monitoring, and the global water crisis',
        description: 'How AI is helping manage the world\'s most precious resource — detecting leaks in real time, predicting floods days ahead, and monitoring droughts from space.',
        readingTime: '7 min',
        icon: '💧',
        to: '/learn/ai-and-water',
        color: 'blue',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-sleep',
        title: 'AI and sleep — sleep trackers, AI sleep coaches, smart alarms, and what AI can tell you about your rest',
        description: 'How AI turns your smartwatch into a sleep researcher — analysing your deep sleep, REM, and heart rate to give personalised advice, wake you gently, and flag health warning signs.',
        readingTime: '7 min',
        icon: '😴',
        to: '/learn/ai-and-sleep',
        color: 'indigo',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-the-ocean',
        title: 'AI and the ocean — underwater robots, coral reef monitoring, illegal fishing detection, and climate research',
        description: 'How AI is exploring the deep sea, protecting coral reefs, catching illegal fishing fleets from space, and helping us understand the ocean\'s role in our changing climate.',
        readingTime: '7 min',
        icon: '🌊',
        to: '/learn/ai-and-the-ocean',
        color: 'cyan',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-parenting',
        title: 'AI and parenting — monitoring apps, AI tutors, smart toys, and recommendation algorithms',
        description: 'How AI is changing family life — from parental control apps that detect cyberbullying to AI tutors, smart toys that hold conversations, and the algorithms deciding what your children watch next.',
        readingTime: '7 min',
        icon: '👶',
        to: '/learn/ai-and-parenting',
        color: 'pink',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-language-learning',
        title: 'AI and language learning — Duolingo, pronunciation coaches, conversation practice, and instant translation',
        description: 'How AI has transformed language learning through spaced repetition, AI pronunciation feedback, and always-available conversation partners — and whether fluency still matters in the age of instant translation.',
        readingTime: '7 min',
        icon: '🗣️',
        to: '/learn/ai-and-language-learning',
        color: 'teal',
        difficulty: 'Beginner',
      },
    ],
  },
  {
    heading: 'AI in the real world',
    modules: [
      {
        id: 'ai-for-accessibility',
        title: 'AI for accessibility',
        description: 'How AI helps people with disabilities — captions, image descriptions, voice control, and more.',
        readingTime: '5 min',
        icon: '♿',
        to: '/learn/ai-for-accessibility',
        color: 'teal',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-scientific-research',
        title: 'AI and scientific research',
        description: 'AlphaFold, drug discovery, climate modelling, and astronomy — how AI is accelerating discovery.',
        readingTime: '6 min',
        icon: '🔬',
        to: '/learn/ai-and-scientific-research',
        color: 'violet',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-productivity-tools',
        title: 'AI and your productivity',
        description: 'Writing helpers, coding assistants, meeting transcripts, and research tools — AI that saves you time.',
        readingTime: '5 min',
        icon: '⚡',
        to: '/learn/ai-productivity-tools',
        color: 'amber',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-food',
        title: 'AI and food — smart farming, supply chains, and what is in your meal',
        description: 'How AI reduces pesticide use on farms, cuts supermarket waste, detects food fraud, and powers food delivery apps.',
        readingTime: '5 min',
        icon: '🌿',
        to: '/learn/ai-and-food',
        color: 'green',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-sport',
        title: 'AI and sport — performance analytics, injury prevention, and fan experience',
        description: 'GPS vests, expected goals, Hawk-Eye officiating, injury prediction, and personalised training plans.',
        readingTime: '6 min',
        icon: '⚽',
        to: '/learn/ai-and-sport',
        color: 'sky',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-transport',
        title: 'AI and transport — self-driving cars, smart traffic, and the future of getting around',
        description: 'Waymo vs Tesla Autopilot, smart traffic lights, how Google Maps predicts your journey time, and predictive maintenance on trains.',
        readingTime: '5 min',
        icon: '🚗',
        to: '/learn/ai-and-transport',
        color: 'sky',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-art',
        title: 'AI and art — how AI makes images, and what that means for artists',
        description: 'DALL-E, Midjourney, and Stable Diffusion explained simply — plus the copyright debate, artist opt-outs, and AI art competitions.',
        readingTime: '6 min',
        icon: '🎨',
        to: '/learn/ai-and-art',
        color: 'violet',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-cybersecurity',
        title: 'AI and cybersecurity — how AI fights (and creates) cyber threats',
        description: 'How AI catches phishing emails, spots new malware, and protects your accounts — and how criminals use the same technology against you.',
        readingTime: '5 min',
        icon: '🔒',
        to: '/learn/ai-and-cybersecurity',
        color: 'slate',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-space',
        title: 'AI and space — telescopes, Mars rovers, and the search for life',
        description: 'How NASA uses AI to drive rovers on Mars, how AI discovered exoplanets, the first black hole image, and predicting solar flares.',
        readingTime: '6 min',
        icon: '🚀',
        to: '/learn/ai-and-space',
        color: 'indigo',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-climate-change',
        title: 'AI and climate change — forecasting, clean energy, and carbon capture',
        description: 'How AI improves climate models, makes renewable energy grids reliable, tracks deforestation from space, and accelerates materials discovery.',
        readingTime: '6 min',
        icon: '🌍',
        to: '/learn/ai-and-climate-change',
        color: 'emerald',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-robotics',
        title: 'AI and robotics — from factory floors to your home',
        description: 'From Unimate in 1961 to Boston Dynamics and cobots — how robots see, move, and are changing the world of work.',
        readingTime: '5 min',
        icon: '🤖',
        to: '/learn/ai-and-robotics',
        color: 'slate',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-fashion',
        title: 'AI and fashion — trend forecasting, sustainable design, and virtual try-ons',
        description: 'How AI predicts next season\'s trends, lets you try clothes on digitally, and helps cut billions of unsold garments from landfill.',
        readingTime: '5 min',
        icon: '👗',
        to: '/learn/ai-and-fashion',
        color: 'pink',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-agriculture',
        title: 'AI and agriculture — precision farming, crop disease detection, and food security',
        description: 'How AI helps farmers grow more food with less water, diagnose crop diseases from a smartphone photo, and tackle global food security.',
        readingTime: '5 min',
        icon: '🌾',
        to: '/learn/ai-and-agriculture',
        color: 'green',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-mental-wellbeing-at-work',
        title: 'AI and mental wellbeing at work — coaching apps, surveillance, and staying balanced',
        description: 'How AI tools like BetterUp and Wysa support workplace wellbeing, the ethics of employee monitoring, and your rights.',
        readingTime: '6 min',
        icon: '🧘',
        to: '/learn/ai-and-mental-wellbeing-at-work',
        color: 'violet',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-retail',
        title: 'AI and retail — personalised shopping, dynamic pricing, and the future of the high street',
        description: 'How recommendation engines work, why prices change by the minute, cashierless stores, and what AI means for retail jobs.',
        readingTime: '5 min',
        icon: '🛍️',
        to: '/learn/ai-and-retail',
        color: 'blue',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-children',
        title: 'AI and children — educational toys, screen time algorithms, and keeping kids safe online',
        description: 'AI tutors like Khanmigo, algorithmic feeds targeting young viewers, AI parental controls, and children\'s data rights.',
        readingTime: '6 min',
        icon: '🧒',
        to: '/learn/ai-and-children',
        color: 'yellow',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-travel',
        title: 'AI and travel — smart airports, personalised holidays, and the future of getting away',
        description: 'How AI predicts flight prices, personalises hotel recommendations, powers airport facial recognition, and plans your itinerary.',
        readingTime: '5 min',
        icon: '✈️',
        to: '/learn/ai-and-travel',
        color: 'blue',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-housing',
        title: 'AI and housing — property search, smart homes, and automated valuations',
        description: 'How AI helps you find a home, estimates property values, collects data through smart home devices, and makes mortgage decisions.',
        readingTime: '6 min',
        icon: '🏠',
        to: '/learn/ai-and-housing',
        color: 'orange',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-energy',
        title: 'AI and energy — smart grids, renewable power, and your home energy bill',
        description: 'How AI balances electricity grids, forecasts renewable output, cuts your energy bills with smart tariffs, and powers EV smart charging.',
        readingTime: '5 min',
        icon: '⚡',
        to: '/learn/ai-and-energy',
        color: 'yellow',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-elderly-care',
        title: 'AI and elderly care — companion robots, fall detection, and memory support',
        description: 'How AI-powered devices help older people live independently, companion robots tackle loneliness, and AI supports people with dementia.',
        readingTime: '6 min',
        icon: '🧓',
        to: '/learn/ai-and-elderly-care',
        color: 'rose',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-insurance',
        title: 'AI and insurance — how AI sets your premium, telematics, and fairness concerns',
        description: 'How insurers use AI to price policies, what black box devices track, health wearable discounts, and the fairness questions regulators are asking.',
        readingTime: '5 min',
        icon: '🛡️',
        to: '/learn/ai-and-insurance',
        color: 'teal',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-policing',
        title: 'AI and policing — predictive policing, facial recognition, and civil liberties',
        description: 'How police use AI for hot-spot mapping and facial recognition, the evidence of racial bias, wrongful arrests, and the civil liberties debate.',
        readingTime: '6 min',
        icon: '⚖️',
        to: '/learn/ai-and-policing',
        color: 'slate',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-the-nhs',
        title: 'AI and the NHS — how AI is changing the UK health service',
        description: 'AI diagnostics, AlphaFold and drug discovery, the 111 symptom checker, patient data privacy, and how AI is reducing NHS admin.',
        readingTime: '5 min',
        icon: '🏥',
        to: '/learn/ai-and-the-nhs',
        color: 'blue',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-hiring',
        title: 'AI and hiring — how AI decides who gets the job',
        description: "How applicant tracking systems filter CVs, AI video interviews, Amazon's biased recruiting tool, blind hiring, and your rights.",
        readingTime: '6 min',
        icon: '💼',
        to: '/learn/ai-and-hiring',
        color: 'slate',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-customer-service',
        title: 'AI and customer service — chatbots, automated support, and the end of the call centre?',
        description: 'How AI handles your queries, the difference between chatbots and AI agents, UK job impacts, and your consumer rights.',
        readingTime: '5 min',
        icon: '💬',
        to: '/learn/ai-and-customer-service',
        color: 'sky',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-weather',
        title: 'AI and the weather — how AI is transforming forecasting',
        description: "GraphCast vs the Met Office's supercomputer, flood warnings, renewable energy forecasting, and the limits of AI in a changing climate.",
        readingTime: '5 min',
        icon: '⛅',
        to: '/learn/ai-and-weather',
        color: 'blue',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-the-environment',
        title: 'AI and the environment — the carbon cost of AI, and can AI help save the planet?',
        description: 'Energy and water use in AI training and inference, the AI paradox, DeepMind cooling savings, and how to be a more thoughtful AI user.',
        readingTime: '5 min',
        icon: '🌱',
        to: '/learn/ai-and-the-environment',
        color: 'green',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-relationships',
        title: 'AI and relationships — dating apps, companion AI, and the future of human connection',
        description: 'How dating apps use AI matching, AI companion apps like Replika, emotional risks, fake profiles, and the authenticity question.',
        readingTime: '5 min',
        icon: '💕',
        to: '/learn/ai-and-relationships',
        color: 'pink',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-creative-writing',
        title: 'AI and creative writing — story generators, co-authors, and what makes writing human',
        description: 'How LLMs generate text, tools writers use (ChatGPT, Sudowrite), copyright questions, the authenticity debate, and practical tips.',
        readingTime: '6 min',
        icon: '✍️',
        to: '/learn/ai-and-creative-writing',
        color: 'orange',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-photography',
        title: 'AI and photography — image generators, deepfakes, and what happens when you can\'t trust a photo',
        description: 'How diffusion models generate images, what deepfakes are, how to spot them, AI editing tools photographers use, and copyright questions.',
        readingTime: '5 min',
        icon: '📷',
        to: '/learn/ai-and-photography',
        color: 'sky',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-mental-health-apps',
        title: 'AI and mental health apps — therapy chatbots, crisis support, and knowing when to see a real person',
        description: 'CBT chatbots like Woebot and Wysa, what they can and cannot do, UK crisis resources, privacy concerns, and the NHS talking therapies context.',
        readingTime: '6 min',
        icon: '💬',
        to: '/learn/ai-and-mental-health-apps',
        color: 'teal',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-scams',
        title: 'AI and scams — how criminals use AI, and how to protect yourself',
        description: 'Phishing, voice cloning, romance fraud, fake chatbots, and the NCSC\'s stop-think-call-back approach.',
        readingTime: '6 min',
        icon: '🚨',
        to: '/learn/ai-and-scams',
        color: 'red',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-pets',
        title: 'AI and pets — health monitors, AI vets, and smart feeders',
        description: 'Activity trackers for dogs, AI symptom checkers, how vets use AI diagnostics, smart feeders, and the privacy questions around connected pet devices.',
        readingTime: '5 min',
        icon: '🐾',
        to: '/learn/ai-and-pets',
        color: 'amber',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-fitness-apps',
        title: 'AI and fitness apps — smart wearables, AI coaches, and sport analytics',
        description: 'How Fitbit, Apple Watch, and Garmin use AI to personalise fitness tracking; AI coaching apps; how professional sport uses data; and the privacy questions around health data.',
        readingTime: '6 min',
        icon: '🏃',
        to: '/learn/ai-and-fitness-apps',
        color: 'green',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-disability',
        title: 'AI and disability — assistive technology, communication aids, and access for all',
        description: 'How AI is helping people with visual, hearing, mobility, and cognitive differences — from Be My Eyes and live captioning to AI prosthetics and AAC communication tools.',
        readingTime: '6 min',
        icon: '♿',
        to: '/learn/ai-and-disability',
        color: 'blue',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-elections',
        title: 'AI and elections — deepfakes, targeted ads, and protecting democracy',
        description: 'How AI is used in political campaigns — microtargeting, deepfake candidates, bot networks, and what democracies are doing to protect fair elections.',
        readingTime: '7 min',
        icon: '🗳️',
        to: '/learn/ai-and-elections',
        color: 'indigo',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-banking',
        title: 'AI and banking — fraud detection, credit scoring, and your financial rights',
        description: 'How banks use AI to spot fraud in real time, decide who gets credit, power chatbot advisors, and what rights you have when an algorithm makes a financial decision about you.',
        readingTime: '7 min',
        icon: '🏦',
        to: '/learn/ai-and-banking',
        color: 'green',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-manufacturing',
        title: 'AI and manufacturing — smart factories, predictive maintenance, and the future of industry',
        description: 'How AI is transforming factories — predicting machine breakdowns before they happen, spotting defects at speed, and reshaping jobs on the factory floor.',
        readingTime: '7 min',
        icon: '🏭',
        to: '/learn/ai-and-manufacturing',
        color: 'slate',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-drug-discovery',
        title: 'AI and drug discovery — finding new medicines faster with artificial intelligence',
        description: "How AI is helping scientists find new medicines faster — from AlphaFold's Nobel Prize-winning breakthrough to drug candidates designed in weeks instead of years.",
        readingTime: '7 min',
        icon: '💉',
        to: '/learn/ai-and-drug-discovery',
        color: 'teal',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-smart-homes',
        title: 'AI and smart homes — smart speakers, thermostats, cameras, and privacy in the connected home',
        description: 'How AI powers Alexa, Nest, Ring, and robot vacuums — what data your home collects, who can access it, and practical privacy tips.',
        readingTime: '7 min',
        icon: '🏠',
        to: '/learn/ai-and-smart-homes',
        color: 'green',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-architecture',
        title: 'AI and architecture — generative design, smart buildings, and the future of the built environment',
        description: 'How AI is reshaping building design, planning applications, construction site safety, and the way our buildings are managed and maintained.',
        readingTime: '7 min',
        icon: '🏛️',
        to: '/learn/ai-and-architecture',
        color: 'slate',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-the-workplace',
        title: 'AI and the workplace — writing assistants, meeting summaries, scheduling AI, and what it means for your job',
        description: 'How AI is changing office work every day — drafting emails, summarising meetings, managing calendars, and what this means for jobs and how to use AI responsibly at work.',
        readingTime: '7 min',
        icon: '💼',
        to: '/learn/ai-and-the-workplace',
        color: 'blue',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-sport-analytics',
        title: 'AI and sport analytics — performance tracking, injury prediction, AI scouting, and the data-driven game',
        description: 'How professional clubs use AI to track every player movement, predict injuries before they happen, discover hidden talent worldwide, and transform the fan experience.',
        readingTime: '7 min',
        icon: '🏆',
        to: '/learn/ai-and-sport-analytics',
        color: 'green',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-construction',
        title: 'AI and construction — digital twins, AI safety on building sites, smart scheduling, and the future of the building industry',
        description: 'How AI is transforming construction — from digital twins and computer vision safety cameras to generative design and predictive maintenance in buildings.',
        readingTime: '7 min',
        icon: '🏗️',
        to: '/learn/ai-and-construction',
        color: 'orange',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-personal-finance',
        title: 'AI and personal finance — robo-advisors, budgeting apps, credit scoring, fraud detection, and using AI with your money',
        description: 'How AI is changing the way we save, invest, borrow, and protect our money — and how to use these tools wisely while staying in control of your finances.',
        readingTime: '7 min',
        icon: '💰',
        to: '/learn/ai-and-personal-finance',
        color: 'teal',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-cooking',
        title: 'AI and cooking — smart kitchen gadgets, recipe apps, food scanning, and AI in your kitchen',
        description: 'From AI recipe apps that know what is in your fridge to smart ovens that cook automatically — how AI is changing the way we plan, prepare, and enjoy food.',
        readingTime: '6 min',
        icon: '🍳',
        to: '/learn/ai-and-cooking',
        color: 'orange',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-genetics',
        title: 'AI and genetics — DNA testing kits, personalised medicine, gene editing, and ethical questions',
        description: 'How AI analyses your DNA, powers personalised cancer treatments, and accelerates gene editing — plus the profound ethical questions these technologies raise.',
        readingTime: '7 min',
        icon: '🧬',
        to: '/learn/ai-and-genetics',
        color: 'teal',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-small-businesses',
        title: 'AI and small businesses — AI bookkeeping, chatbots, inventory management, and the future of the high street',
        description: 'How AI is helping independent shops and small businesses compete — from Xero and QuickBooks to customer chatbots and stock prediction tools.',
        readingTime: '7 min',
        icon: '🛍️',
        to: '/learn/ai-and-small-businesses',
        color: 'green',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-local-government',
        title: 'AI and local government — pothole detection, planning AI, social services prediction, and your rights',
        description: 'How UK councils are using AI to fix roads faster, speed up planning applications, optimise bin collections — and the serious questions about algorithmic accountability.',
        readingTime: '7 min',
        icon: '🏛️',
        to: '/learn/ai-and-local-government',
        color: 'blue',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-education-technology',
        title: 'AI and education technology — AI tutors, adaptive learning, essay feedback, and UK EdTech',
        description: 'How AI is changing the way we learn — from adaptive platforms like Sparx Maths to AI tutors like Khanmigo, and the risks of over-reliance on algorithmic teaching.',
        readingTime: '7 min',
        icon: '📚',
        to: '/lessons/ai-and-education-technology',
        color: 'blue',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-wildlife-conservation',
        title: 'AI and wildlife conservation — camera traps, acoustic monitoring, anti-poaching AI, and satellite deforestation tracking',
        description: 'How AI is helping scientists identify species, detect illegal logging in real time, track deforestation from space, and predict where poachers will strike — and the ethical questions this raises.',
        readingTime: '7 min',
        icon: '🦏',
        to: '/learn/ai-and-wildlife-conservation',
        color: 'emerald',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-addiction-and-recovery',
        title: 'AI and addiction and recovery — NHS screening tools, recovery chatbots, relapse prediction, and privacy',
        description: 'How AI is helping the NHS identify addiction earlier, support people in recovery between appointments, personalise treatment, and predict relapse — with important questions about data privacy.',
        readingTime: '7 min',
        icon: '💚',
        to: '/learn/ai-and-addiction-and-recovery',
        color: 'purple',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-sport-betting',
        title: 'AI and sport betting — algorithmic odds, trading bots, in-play AI, addiction profiling, and UK regulation',
        description: 'How AI transforms the gambling industry — from odds-making and Betfair trading bots to personalised promotions that target vulnerable gamblers, and how the UK Gambling Commission is responding.',
        readingTime: '7 min',
        icon: '🎰',
        to: '/learn/ai-and-sport-betting',
        color: 'green',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-prisons-and-criminal-justice',
        title: 'AI and prisons and criminal justice — risk assessment, facial recognition, licence monitoring, and bias',
        description: 'How AI tools are used in UK criminal justice — from OGRS risk scores to facial recognition at courts — and the serious concerns about racial bias and algorithmic accountability.',
        readingTime: '7 min',
        icon: '⚖️',
        to: '/learn/ai-and-prisons-and-criminal-justice',
        color: 'slate',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-space-exploration',
        title: 'AI and space exploration — Mars rovers, satellite constellations, exoplanet discovery, and UK space',
        description: 'From Perseverance navigating Mars autonomously to AI discovering new planets — how artificial intelligence is transforming what we can explore beyond Earth.',
        readingTime: '7 min',
        icon: '🚀',
        to: '/learn/ai-and-space-exploration',
        color: 'indigo',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-logistics-and-delivery',
        title: 'AI and logistics and delivery — route planning, parcel sorting, drone delivery, and algorithmic management',
        description: 'How Amazon, Royal Mail, DPD, and Ocado use AI to plan routes, sort millions of parcels, predict orders, and trial drone delivery — and what this means for delivery workers.',
        readingTime: '7 min',
        icon: '📦',
        to: '/learn/ai-and-logistics-and-delivery',
        color: 'orange',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-the-home',
        title: 'AI and the home — smart thermostats, AI cameras, voice assistants, energy management, and privacy',
        description: 'From Hive and Nest thermostats to Ring doorbells and Alexa — how AI is changing the home, what it is doing with your data, and what your rights are.',
        readingTime: '7 min',
        icon: '🏠',
        to: '/learn/ai-and-the-home',
        color: 'teal',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-gig-workers',
        title: 'AI and gig workers — algorithmic management, Uber, Deliveroo, and the future of platform work',
        description: 'How algorithms assign jobs, rate performance, and can deactivate accounts — the realities of working for an AI boss and the legal battles reshaping gig economy rights.',
        readingTime: '7 min',
        icon: '🛵',
        to: '/learn/ai-and-gig-workers',
        color: 'orange',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-ageing',
        title: 'AI and ageing — care robots, fall detection, dementia support, and the ethics of AI for older people',
        description: 'From AI fall sensors that call for help to companion robots reducing loneliness in care homes — how technology is changing what it means to grow old in the UK.',
        readingTime: '7 min',
        icon: '👴',
        to: '/learn/ai-and-ageing',
        color: 'amber',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-critical-thinking',
        title: 'AI and critical thinking — how to evaluate AI claims, spot misinformation, and think clearly about AI',
        description: 'The skills you need to cut through AI hype and fear — how to evaluate evidence, spot logical fallacies, and ask the right questions when an AI claim sounds too good to be true.',
        readingTime: '6 min',
        icon: '🧩',
        to: '/learn/ai-and-critical-thinking',
        color: 'purple',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-sport-fan-experience',
        title: 'AI and the sport fan experience — personalised broadcasts, live stats, fan apps, and AI pundits',
        description: 'How AI is transforming how fans watch, follow, and engage with sport — from personalised highlight reels and VAR to AI commentators and predictive fantasy football.',
        readingTime: '6 min',
        icon: '⚽',
        to: '/learn/ai-and-sport-fan-experience',
        color: 'green',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-offensive-cybersecurity',
        title: 'AI and offensive cybersecurity — AI-powered attacks, deepfake phishing, and cyber defence',
        description: 'How criminals are using AI to make cyberattacks faster, more convincing, and harder to detect — and how the same AI tools are being used to defend against them.',
        readingTime: '7 min',
        icon: '🔓',
        to: '/learn/ai-and-offensive-cybersecurity',
        color: 'red',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-real-estate',
        title: 'AI and real estate — property valuation AI, virtual viewings, predictive analytics, and Rightmove',
        description: 'How AI is changing how homes are valued, marketed, and bought — from Zoopla\'s algorithm to virtual property tours and AI mortgage underwriting.',
        readingTime: '7 min',
        icon: '🏡',
        to: '/learn/ai-and-real-estate',
        color: 'blue',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-social-care',
        title: 'AI and social care — needs assessment AI, care robots, workforce tools, and safeguarding ethics',
        description: 'How AI is being used in adult social care in the UK — from automated needs assessments and care planning tools to robot carers and the profound ethical questions these raise.',
        readingTime: '7 min',
        icon: '🤝',
        to: '/learn/ai-and-social-care',
        color: 'teal',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-immigration',
        title: 'AI and immigration — visa processing AI, border facial recognition, Home Office algorithms, and bias',
        description: 'How AI is used in UK immigration — from automated visa decision systems and e-passport gates to the serious concerns about bias, lack of transparency, and the consequences of algorithmic errors.',
        readingTime: '7 min',
        icon: '✈️',
        to: '/learn/ai-and-immigration',
        color: 'indigo',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-dentistry',
        title: 'AI and dentistry — AI diagnosis, dental imaging, NHS waiting lists, and the future of the dentist',
        description: 'How AI is changing dental care in the UK — from AI that spots tooth decay in X-rays to tools helping overstretched NHS dentists manage patient lists.',
        readingTime: '6 min',
        icon: '🦷',
        to: '/learn/ai-and-dentistry',
        color: 'blue',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-nhs-waiting-lists',
        title: 'AI and NHS waiting lists — prioritisation AI, admin automation, and the waiting list crisis',
        description: 'How AI is being deployed to tackle the NHS waiting list backlog — from tools that triage patients by urgency to AI that spots appointment no-shows before they happen.',
        readingTime: '7 min',
        icon: '🏥',
        to: '/learn/ai-and-nhs-waiting-lists',
        color: 'green',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-social-media-algorithms',
        title: 'AI and social media algorithms — recommendation engines, filter bubbles, and the Online Safety Act',
        description: 'How TikTok, Instagram, and YouTube decide what you see — the mechanics of recommendation algorithms, their effects on mental health and democracy, and the new UK rules.',
        readingTime: '7 min',
        icon: '📱',
        to: '/learn/ai-and-social-media-algorithms',
        color: 'violet',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-fraud',
        title: 'AI and fraud — deepfake bank calls, AI phishing, authorised push payment fraud, and how to stay safe',
        description: 'How AI is supercharging fraud — from voice cloning that fools your relatives to AI-generated phishing emails indistinguishable from the real thing — and what banks, regulators, and you can do.',
        readingTime: '7 min',
        icon: '🕵️',
        to: '/learn/ai-and-fraud',
        color: 'red',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-climate-activism',
        title: 'AI and climate activism — AI tools for campaigning, greenwashing detection, and climate disinformation',
        description: 'How environmental groups use AI to analyse satellite data, track corporate emissions claims, coordinate campaigns — and how AI is also used to spread climate disinformation.',
        readingTime: '6 min',
        icon: '🌍',
        to: '/learn/ai-and-climate-activism',
        color: 'green',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-music-industry',
        title: 'AI and the music industry — Suno, AI copyright battles, deepfake voices, and what this means for musicians',
        description: 'From AI that generates complete songs in seconds to AI voice clones of famous artists — how AI is transforming music creation, the legal battles, and what this means for human musicians.',
        readingTime: '7 min',
        icon: '🎵',
        to: '/learn/ai-and-music-industry',
        color: 'purple',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-fashion-tech',
        title: 'AI and fashion technology — virtual try-on, trend forecasting, sustainable fashion, and fast fashion AI',
        description: 'How AI is reshaping fashion — from virtual fitting rooms and AI-designed garments to algorithms that predict next season\'s trends and the environmental questions these raise.',
        readingTime: '6 min',
        icon: '👗',
        to: '/learn/ai-and-fashion-tech',
        color: 'pink',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-climate-tech',
        title: 'AI and climate tech — wind and solar optimisation, smart grid AI, carbon capture, and UK Net Zero',
        description: 'How AI is accelerating the clean energy transition — from optimising wind farm output and balancing the UK grid to discovering new carbon capture materials.',
        readingTime: '7 min',
        icon: '⚡',
        to: '/learn/ai-and-climate-tech',
        color: 'emerald',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-creative-economy',
        title: 'AI and the creative economy — musicians, writers, designers, UK copyright, and how creatives are adapting',
        description: 'How AI is changing what it means to be a creative professional in the UK — the copyright disputes, the tools creatives are using, and the debate about human artistry versus generative AI.',
        readingTime: '7 min',
        icon: '🎨',
        to: '/learn/ai-and-creative-economy',
        color: 'amber',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-sport-nutrition',
        title: 'AI and sport nutrition — calorie tracking, gut microbiome AI, and the risks of algorithmic diet advice',
        description: 'From apps that photograph your meal and estimate calories to gut microbiome AI that reads your bacteria — how AI is transforming nutrition for athletes and everyone else.',
        readingTime: '6 min',
        icon: '🥦',
        to: '/learn/ai-and-sport-nutrition',
        color: 'green',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-mental-health-chatbots',
        title: 'AI and mental health chatbots — Woebot, Wysa, Kooth, evidence, MHRA regulation, and important limits',
        description: 'The apps offering therapy through conversation — what CBT-based chatbots can do, what the evidence shows, the regulatory grey area, and when to seek human help instead.',
        readingTime: '7 min',
        icon: '🧠',
        to: '/learn/ai-and-mental-health-chatbots',
        color: 'blue',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-personal-assistants',
        title: 'AI and personal assistants — Siri, Alexa, Google Assistant, privacy, and what they really do with your data',
        description: 'How voice assistants work, what they are always listening for, the privacy questions about audio data, and how to use them without compromising your privacy.',
        readingTime: '6 min',
        icon: '🔊',
        to: '/learn/ai-and-personal-assistants',
        color: 'indigo',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-legal-system',
        title: 'AI and the legal system — contract AI, predictive justice, access to legal advice, and UK regulation',
        description: 'How AI is used in UK legal practice, the US case of risk assessment tools in sentencing, the access to justice opportunity, and the principle that AI cannot be a lawyer.',
        readingTime: '7 min',
        icon: '⚖️',
        to: '/learn/ai-and-legal-system',
        color: 'slate',
        difficulty: 'Intermediate',
      },
      {
        id: 'ai-and-edtech',
        title: 'AI and education technology — AI tutors, personalised learning, cheating detection, and the future of school',
        description: 'How AI is entering classrooms — from adaptive learning platforms that tailor content to each student to AI essay detectors and the ethics of algorithmic grading.',
        readingTime: '7 min',
        icon: '📚',
        to: '/learn/ai-and-edtech',
        color: 'blue',
        difficulty: 'Beginner',
      },
      {
        id: 'ai-and-content-moderation',
        title: 'AI and content moderation — hate speech detection, misinformation, false positives, and the EU DSA',
        description: 'How AI helps platforms police billions of posts, why it gets things wrong, and the human cost of keeping the internet safe.',
        readingTime: '7 min',
        icon: '🛡️',
        to: '/learn/ai-and-content-moderation',
        color: 'purple',
        difficulty: 'Intermediate',
      },
    ],
  },
  {
    heading: 'How software is built',
    modules: [
      {
        id: 'genesis-system',
        title: 'What is the Genesis system?',
        description: 'The AI team that builds this app — see how agents coordinate through GitHub.',
        readingTime: '4 min',
        icon: '⚙️',
        to: '/learn/genesis-system',
        color: 'orange',
        difficulty: 'Beginner',
      },
      {
        id: 'how-this-was-built',
        title: 'How this app was built',
        description: 'The full story — how AI planned, coded, and deployed what you are reading.',
        readingTime: '5 min',
        icon: '🏗️',
        to: '/learn/how-this-was-built',
        color: 'indigo',
        difficulty: 'Intermediate',
      },
      {
        id: 'what-is-ci-cd',
        title: 'How does the website update automatically?',
        description: 'CI/CD explained — how every code change goes live without anyone pressing publish.',
        readingTime: '4 min',
        icon: '🏭',
        to: '/learn/what-is-ci-cd',
        color: 'cyan',
        difficulty: 'Advanced',
      },
      {
        id: 'version-control',
        title: 'How does version control work?',
        description: 'Commits, branches, and merges — using everyday analogies like Google Docs history.',
        readingTime: '4 min',
        icon: '💾',
        to: '/learn/what-is-version-control',
        color: 'sky',
        difficulty: 'Advanced',
      },
      {
        id: 'pull-request',
        title: 'What is a pull request?',
        description: 'How code changes get reviewed and approved before going live — with real examples.',
        readingTime: '4 min',
        icon: '📋',
        to: '/learn/what-is-a-pull-request',
        color: 'violet',
        difficulty: 'Advanced',
      },
      {
        id: 'meet-the-agents',
        title: 'Meet the AI agents',
        description: 'The five agents behind this project — their roles, their loop, and how they coordinate.',
        icon: '👥',
        to: '/agents',
        color: 'violet',
        difficulty: 'Beginner',
      },
    ],
  },
]

// Flat list of all modules for progress counting
const MODULES: Module[] = MODULE_GROUPS.flatMap(g => g.modules)

const COLOR_MAP: Record<string, { border: string; badge: string; button: string }> = {
  blue:   { border: 'hover:border-blue-300',   badge: 'bg-blue-100 text-blue-700',   button: 'bg-blue-600 hover:bg-blue-700 text-white' },
  green:  { border: 'hover:border-green-300',  badge: 'bg-green-100 text-green-700', button: 'bg-green-600 hover:bg-green-700 text-white' },
  purple: { border: 'hover:border-purple-300', badge: 'bg-purple-100 text-purple-700', button: 'bg-purple-600 hover:bg-purple-700 text-white' },
  teal:   { border: 'hover:border-teal-300',   badge: 'bg-teal-100 text-teal-700',   button: 'bg-teal-600 hover:bg-teal-700 text-white' },
  orange: { border: 'hover:border-orange-300', badge: 'bg-orange-100 text-orange-700', button: 'bg-orange-600 hover:bg-orange-700 text-white' },
  violet: { border: 'hover:border-violet-300', badge: 'bg-violet-100 text-violet-700', button: 'bg-violet-600 hover:bg-violet-700 text-white' },
  indigo: { border: 'hover:border-indigo-300', badge: 'bg-indigo-100 text-indigo-700', button: 'bg-indigo-600 hover:bg-indigo-700 text-white' },
  cyan:   { border: 'hover:border-cyan-300',   badge: 'bg-cyan-100 text-cyan-700',     button: 'bg-cyan-600 hover:bg-cyan-700 text-white' },
  sky:     { border: 'hover:border-sky-300',     badge: 'bg-sky-100 text-sky-700',       button: 'bg-sky-600 hover:bg-sky-700 text-white' },
  emerald: { border: 'hover:border-emerald-300', badge: 'bg-emerald-100 text-emerald-700', button: 'bg-emerald-600 hover:bg-emerald-700 text-white' },
  pink:    { border: 'hover:border-pink-300',    badge: 'bg-pink-100 text-pink-700',       button: 'bg-pink-600 hover:bg-pink-700 text-white' },
  amber:   { border: 'hover:border-amber-300',   badge: 'bg-amber-100 text-amber-700',     button: 'bg-amber-600 hover:bg-amber-700 text-white' },
  red:     { border: 'hover:border-red-300',     badge: 'bg-red-100 text-red-700',         button: 'bg-red-600 hover:bg-red-700 text-white' },
  slate:   { border: 'hover:border-slate-300',   badge: 'bg-slate-100 text-slate-700',     button: 'bg-slate-600 hover:bg-slate-700 text-white' },
}

const VISITED_KEY = 'ronny-visited-modules'
const QUIZ_KEY = 'ronny-quiz-completed'
const BOOKMARKS_KEY = 'ronny-bookmarks'
const SCORES_KEY = 'ronny-quiz-scores'
const COMPLETION_ORDER_KEY = 'ronny-completion-order'

function loadVisited(): Set<string> {
  try {
    const raw = localStorage.getItem(VISITED_KEY)
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

function loadQuizCompleted(): Set<string> {
  try {
    const raw = localStorage.getItem(QUIZ_KEY)
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

function loadBookmarks(): Set<string> {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY)
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

function saveBookmarks(bookmarks: Set<string>) {
  try {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify([...bookmarks]))
  } catch {
    // ignore
  }
}

function loadScores(): Record<string, { score: number; total: number }> {
  try {
    const raw = localStorage.getItem(SCORES_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

/** Returns up to N most recently completed lesson IDs in reverse-completion order */
function loadRecentlyCompleted(quizCompleted: Set<string>, max: number): string[] {
  try {
    const raw = localStorage.getItem(COMPLETION_ORDER_KEY)
    const ordered: string[] = raw ? JSON.parse(raw) : []
    // Return only IDs still in quizCompleted, most-recent first, up to max
    const recent: string[] = []
    for (let i = ordered.length - 1; i >= 0 && recent.length < max; i--) {
      if (quizCompleted.has(ordered[i])) recent.push(ordered[i])
    }
    return recent
  } catch {
    return []
  }
}

// Lesson-eligible modules for "Lesson of the day" (educational lessons only, not utility pages)
const LESSON_POOL = MODULES.filter(m =>
  !['meet-the-agents'].includes(m.id) && m.readingTime !== undefined
)

/** Curated fallback for Popular Lessons when not enough view data is available */
const POPULAR_LESSONS_FALLBACK = [
  'what-is-ai',
  'ai-and-social-media',
  'ai-and-privacy',
]

/** Returns the top N lesson modules by view count, with curated fallback for missing slots */
function getPopularLessons(max: number): Module[] {
  try {
    const counts = loadLessonViewCounts()
    const sorted = LESSON_POOL
      .filter(m => (counts[m.id] ?? 0) > 0)
      .sort((a, b) => (counts[b.id] ?? 0) - (counts[a.id] ?? 0))
      .slice(0, max)
    if (sorted.length >= max) return sorted
    // Fill remaining slots from curated fallback list
    const existing = new Set(sorted.map(m => m.id))
    for (const fallbackId of POPULAR_LESSONS_FALLBACK) {
      if (sorted.length >= max) break
      if (existing.has(fallbackId)) continue
      const mod = LESSON_POOL.find(m => m.id === fallbackId)
      if (mod) { sorted.push(mod); existing.add(fallbackId) }
    }
    return sorted.slice(0, max)
  } catch {
    return POPULAR_LESSONS_FALLBACK
      .map(id => LESSON_POOL.find(m => m.id === id))
      .filter((m): m is Module => m !== undefined)
      .slice(0, max)
  }
}

function getLessonOfTheDay(quizCompleted: Set<string>): Module | null {
  if (LESSON_POOL.length === 0) return null
  const dayIndex = Math.floor(Date.now() / 86400000)
  // Find the first uncompleted lesson starting from today's index
  for (let offset = 0; offset < LESSON_POOL.length; offset++) {
    const candidate = LESSON_POOL[(dayIndex + offset) % LESSON_POOL.length]
    if (!quizCompleted.has(candidate.id)) return candidate
  }
  return null // all completed
}

/**
 * Returns the most recently visited lesson that hasn't been quiz-completed,
 * or the next unstarted lesson in curriculum order if all visited ones are done.
 * Returns null if no lessons have been visited yet.
 */
function getContinueLesson(visited: Set<string>, quizCompleted: Set<string>): { module: Module; lastVisited: string | null } | null {
  if (visited.size === 0) return null

  // Find the most recently visited module that isn't quiz-completed
  const timestamps = loadLessonTimestamps()
  const visitedIncomplete = LESSON_POOL
    .filter(m => visited.has(m.id) && !quizCompleted.has(m.id))
    .sort((a, b) => {
      const tsA = timestamps[a.id] ?? ''
      const tsB = timestamps[b.id] ?? ''
      return tsB.localeCompare(tsA) // most recent first
    })

  if (visitedIncomplete.length > 0) {
    const mod = visitedIncomplete[0]
    return { module: mod, lastVisited: timestamps[mod.id] ?? null }
  }

  // All visited lessons are completed — suggest the next unstarted one
  const nextUnstarted = LESSON_POOL.find(m => !visited.has(m.id))
  if (nextUnstarted) {
    return { module: nextUnstarted, lastVisited: null }
  }

  return null // all lessons visited and completed
}

const DIFFICULTY_STYLES: Record<Difficulty, string> = {
  Beginner:     'bg-green-100 text-green-700',
  Intermediate: 'bg-amber-100 text-amber-700',
  Advanced:     'bg-red-100 text-red-700',
}

export function HomePage() {
  const navigate = useNavigate()
  const [visited, setVisited] = useState<Set<string>>(loadVisited)
  const [bookmarks, setBookmarks] = useState<Set<string>>(loadBookmarks)
  const [recentlyViewedIds] = useState<string[]>(loadRecentlyViewed)
  const { profile, setProfile } = useProfile()

  const handleSurpriseMe = useCallback(() => {
    const allModules = MODULE_GROUPS.flatMap(g => g.modules)
    const unvisited = allModules.filter(m => !visited.has(m.id))
    const pool = unvisited.length > 0 ? unvisited : allModules
    const pick = pool[Math.floor(Math.random() * pool.length)]
    if (pick) navigate({ to: pick.to as '/' })
  }, [visited, navigate])
  const [nameInput, setNameInput] = useState('')
  const { streak, bestStreak } = useStreak()
  const weeklyHighlight = useWeeklyHighlight()

  const { show: showReminder, dismiss: dismissReminder } = useDailyReminder()

  const quizCompleted = loadQuizCompleted()
  const quizCompletedCount = MODULES.filter(m => quizCompleted.has(m.id)).length
  const lessonOfTheDay = getLessonOfTheDay(quizCompleted)
  const displayName = profile?.name || 'Ronny'
  const avatar = profile?.avatar || '👋'
  const todaysFact = getTodaysFact()
  const scores = loadScores()

  const recentlyCompletedIds = loadRecentlyCompleted(quizCompleted, 3)
  const recentlyCompletedModules = recentlyCompletedIds
    .map(id => MODULES.find(m => m.id === id))
    .filter((m): m is Module => m !== undefined)

  const bookmarkedModules = MODULES.filter(m => bookmarks.has(m.id))
  const continueLesson = getContinueLesson(visited, quizCompleted)
  const popularLessons = getPopularLessons(3)
  const [recommendations] = useState<Recommendation[]>(() => getRecommendations())
  const weeklyGoalData = loadWeeklyGoal()
  const [difficultyFilter, setDifficultyFilter] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All')
  const [keywordFilter, setKeywordFilter] = useState('')
  const showInterestQuiz = quizCompletedCount === 0 && localStorage.getItem('ronny-interest-quiz-done') === null

  function toggleBookmark(id: string) {
    const next = new Set(bookmarks)
    if (next.has(id)) {
      next.delete(id)
    } else {
      next.add(id)
    }
    setBookmarks(next)
    saveBookmarks(next)
  }

  function handleSaveName() {
    const trimmed = nameInput.trim().slice(0, 30)
    if (!trimmed) return
    setProfile({ name: trimmed, avatar: '👋' })
    setNameInput('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center px-4 py-8 sm:py-16">
      <div className="max-w-2xl w-full space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="text-5xl sm:text-6xl" aria-hidden="true">{avatar}</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            {profile
              ? `Welcome back, ${displayName}!`
              : `Hi there! Welcome to your AI learning journey.`}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Follow the steps below to learn about GitHub and AI — no experience needed.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/learning-path"
              className="inline-block text-sm bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl transition-colors"
            >
              See the full learning path &rarr;
            </Link>
          </div>
        </div>

        {/* Inline name prompt — shown only when no profile is set */}
        {!profile && (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 space-y-3">
            <p className="font-semibold text-blue-800 text-sm">What should we call you?</p>
            <p className="text-blue-700 text-sm">Enter your name and we will greet you personally every time you visit.</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={nameInput}
                onChange={e => setNameInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleSaveName() }}
                placeholder="Your name"
                maxLength={30}
                className="flex-1 border border-blue-200 rounded-xl px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                aria-label="Enter your name"
              />
              <button
                onClick={handleSaveName}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        )}

        {/* Daily reminder banner */}
        {showReminder && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center gap-3">
            <span className="text-2xl flex-shrink-0">&#x1F4DA;</span>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-amber-800 text-sm leading-snug">
                Welcome back! You have not visited in a while &mdash; ready to learn something new today?
              </p>
            </div>
            <button
              onClick={dismissReminder}
              className="text-amber-600 hover:text-amber-800 text-sm font-semibold flex-shrink-0 transition-colors"
              aria-label="Dismiss reminder"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Search */}
        <SearchBar />

        {/* Surprise me */}
        <div className="flex justify-center">
          <button
            onClick={handleSurpriseMe}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-indigo-300 text-indigo-700 font-semibold text-sm hover:bg-indigo-50 transition-colors"
          >
            <span>&#x1F3B2;</span>
            Surprise me! Pick a random lesson
          </button>
        </div>

        {/* Today's AI Fact */}
        <div className="bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-200 rounded-2xl p-4 flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">&#x1F4A1;</span>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-violet-600 uppercase tracking-wide mb-1">Today&apos;s AI fact</p>
            <p className="text-gray-700 text-sm leading-relaxed">{todaysFact}</p>
          </div>
        </div>

        {/* Quiz completion progress bar — always shown */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">Your learning progress</span>
            <span className="text-sm text-gray-500">{quizCompletedCount} of {MODULES.length} lessons completed</span>
          </div>
          <div
            className="w-full bg-gray-100 rounded-full h-3"
            role="progressbar"
            aria-valuenow={quizCompletedCount}
            aria-valuemin={0}
            aria-valuemax={MODULES.length}
            aria-label={`${quizCompletedCount} of ${MODULES.length} lessons completed`}
          >
            <div
              className="bg-blue-500 h-3 rounded-full transition-all duration-500"
              style={{ width: quizCompletedCount > 0 ? `${(quizCompletedCount / MODULES.length) * 100}%` : '2px' }}
            />
          </div>
          {quizCompletedCount === 0 ? (
            <p className="text-sm text-gray-400">Start with a lesson below and complete its quiz to track your progress!</p>
          ) : quizCompletedCount === MODULES.length ? (
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
              <p className="text-green-700 font-medium">
                You have completed all the lessons. Amazing work!
              </p>
              <Link
                to="/certificate"
                className="text-sm font-semibold text-amber-600 hover:text-amber-800 underline flex-shrink-0"
              >
                Get your certificate &rarr;
              </Link>
            </div>
          ) : (
            <Link to="/my-progress" className="text-sm text-blue-500 hover:underline">
              View detailed progress &rarr;
            </Link>
          )}
        </div>

        {/* Learning streak */}
        {streak > 0 && (
          <Link to="/streak" className="block bg-orange-50 border border-orange-200 rounded-2xl p-4 flex items-center gap-4 hover:bg-orange-100 transition-colors">
            <span className="text-3xl flex-shrink-0">&#x1F525;</span>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-orange-800 text-base leading-tight">
                {streak} day{streak !== 1 ? 's' : ''} in a row!
              </p>
              <p className="text-orange-600 text-sm mt-0.5">
                Keep it up &mdash; you are on a learning streak.
                {bestStreak > streak && (
                  <span className="ml-1 text-orange-500">Best: {bestStreak} days.</span>
                )}
                {bestStreak === streak && streak > 1 && (
                  <span className="ml-1 text-orange-500">That is your best yet!</span>
                )}
                <span className="ml-1 text-orange-500 text-xs">View your streak &rarr;</span>
              </p>
            </div>
          </Link>
        )}

        {/* Weekly learning goal ring */}
        {weeklyGoalData.goal !== null && (
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-4 flex items-center gap-4">
            <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true" className="flex-shrink-0">
              <circle cx="28" cy="28" r="22" fill="none" stroke="#e5e7eb" strokeWidth="6" />
              <circle
                cx="28"
                cy="28"
                r="22"
                fill="none"
                stroke={weeklyGoalData.completedThisWeek >= weeklyGoalData.goal ? '#10b981' : '#3b82f6'}
                strokeWidth="6"
                strokeDasharray={`${2 * Math.PI * 22}`}
                strokeDashoffset={`${2 * Math.PI * 22 * (1 - Math.min(1, weeklyGoalData.completedThisWeek / weeklyGoalData.goal))}`}
                strokeLinecap="round"
                transform="rotate(-90 28 28)"
              />
              <text x="28" y="33" textAnchor="middle" fontSize="12" fontWeight="700"
                fill={weeklyGoalData.completedThisWeek >= weeklyGoalData.goal ? '#10b981' : '#3b82f6'}>
                {weeklyGoalData.completedThisWeek}/{weeklyGoalData.goal}
              </text>
            </svg>
            <div className="flex-1 min-w-0">
              {weeklyGoalData.completedThisWeek >= weeklyGoalData.goal ? (
                <>
                  <p className="font-semibold text-emerald-800 text-sm leading-tight">Weekly goal reached!</p>
                  <p className="text-emerald-600 text-xs mt-0.5">You completed {weeklyGoalData.completedThisWeek} of {weeklyGoalData.goal} lessons this week. Amazing!</p>
                </>
              ) : (
                <>
                  <p className="font-semibold text-blue-800 text-sm leading-tight">Weekly goal</p>
                  <p className="text-blue-600 text-xs mt-0.5">
                    {weeklyGoalData.completedThisWeek} of {weeklyGoalData.goal} lessons this week.
                    {' '}{weeklyGoalData.goal - weeklyGoalData.completedThisWeek} to go!
                  </p>
                </>
              )}
            </div>
            <Link to="/my-progress" className="text-blue-500 hover:underline text-xs flex-shrink-0">Change goal</Link>
          </div>
        )}

        {/* Weekly highlight */}
        {weeklyHighlight && (
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-4 sm:p-5 space-y-3">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide">This week &mdash; try something new</p>
            <Link
              to={weeklyHighlight.path as '/'}
              onClick={() => {
                const next = new Set(visited)
                next.add(weeklyHighlight.id)
                setVisited(next)
                localStorage.setItem(VISITED_KEY, JSON.stringify([...next]))
              }}
              className="flex items-center gap-4 group"
            >
              <span
                className="text-3xl flex-shrink-0"
                dangerouslySetInnerHTML={{ __html: weeklyHighlight.icon }}
              />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-amber-800 group-hover:underline text-base leading-tight">
                  {weeklyHighlight.title}
                </p>
                <p className="text-amber-700 text-sm mt-0.5 leading-relaxed">{weeklyHighlight.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-amber-500 text-xs">{weeklyHighlight.readingTime} read</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${DIFFICULTY_STYLES[weeklyHighlight.difficulty]}`}>
                    {weeklyHighlight.difficulty}
                  </span>
                </div>
              </div>
              <span className="text-amber-400 text-xl flex-shrink-0 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        )}

        {/* Personalised recommendations */}
        {recommendations.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-5 space-y-4">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Up next for you</p>
            <div className="space-y-2">
              {recommendations.map(rec => (
                <Link
                  key={rec.id}
                  to={rec.path as '/'}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                  onClick={() => {
                    const next = new Set(visited)
                    next.add(rec.id)
                    setVisited(next)
                    localStorage.setItem(VISITED_KEY, JSON.stringify([...next]))
                  }}
                >
                  <span
                    className="text-2xl flex-shrink-0"
                    dangerouslySetInnerHTML={{ __html: rec.icon }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 group-hover:text-blue-700 text-sm leading-tight transition-colors">
                      {rec.title}
                    </p>
                    <span className={`inline-block mt-0.5 text-xs px-2 py-0.5 rounded-full font-medium ${DIFFICULTY_STYLES[rec.difficulty]}`}>
                      {rec.difficulty}
                    </span>
                  </div>
                  <span className="text-gray-400 text-base flex-shrink-0 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Lesson of the day */}
        {lessonOfTheDay ? (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 sm:p-5 space-y-3">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Lesson of the day</p>
            <Link
              to={lessonOfTheDay.to as '/'}
              onClick={() => {
                const next = new Set(visited)
                next.add(lessonOfTheDay.id)
                setVisited(next)
                localStorage.setItem(VISITED_KEY, JSON.stringify([...next]))
              }}
              className="flex items-center gap-4 group"
            >
              <span className="text-3xl flex-shrink-0">{lessonOfTheDay.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-blue-800 group-hover:underline text-base leading-tight">{lessonOfTheDay.title}</p>
                <p className="text-blue-600 text-sm mt-0.5 leading-relaxed">{lessonOfTheDay.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  {lessonOfTheDay.readingTime && (
                    <span className="text-blue-400 text-xs">{lessonOfTheDay.readingTime} read</span>
                  )}
                  {lessonOfTheDay.difficulty && (
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${DIFFICULTY_STYLES[lessonOfTheDay.difficulty]}`}>
                      {lessonOfTheDay.difficulty}
                    </span>
                  )}
                </div>
              </div>
              <span className="text-blue-400 text-xl flex-shrink-0 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        ) : (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center space-y-1">
            <p className="text-emerald-800 font-semibold">You have completed all the lessons!</p>
            <p className="text-emerald-600 text-sm">Head to My Progress to see your achievements and certificate.</p>
          </div>
        )}

        {/* Interest quiz for new users */}
        {showInterestQuiz && <InterestQuiz />}

        {/* Daily challenge */}
        <DailyChallenge />

        {/* AI facts ticker */}
        <AIFactsTicker facts={AI_FACTS} />

        {/* Quiz of the day */}
        {visited.size >= 1 && <QuizOfTheDay />}

        {/* Test yourself — mixed-topic quiz from completed lessons */}
        <TestYourself />

        {/* Continue where you left off */}
        {continueLesson && (
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 sm:p-5">
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-3">Continue where you left off</p>
            <div className="flex items-center gap-4">
              <span className="text-3xl flex-shrink-0" aria-hidden="true">{continueLesson.module.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-indigo-900 text-sm leading-tight">{continueLesson.module.title}</p>
                {continueLesson.lastVisited ? (
                  <p className="text-indigo-500 text-xs mt-0.5">
                    You visited this on {new Date(continueLesson.lastVisited).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}
                  </p>
                ) : (
                  <p className="text-indigo-500 text-xs mt-0.5">Next up in your learning path</p>
                )}
              </div>
              <Link
                to={continueLesson.module.to as '/'}
                className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors whitespace-nowrap"
              >
                Pick up here &rarr;
              </Link>
            </div>
          </div>
        )}

        {/* Popular lessons */}
        {popularLessons.length > 0 && (
          <div className="bg-violet-50 border border-violet-200 dark:bg-violet-950 dark:border-violet-800 rounded-2xl p-4 sm:p-5 space-y-3">
            <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wide">Popular lessons</p>
            <div className="space-y-2">
              {popularLessons.map(mod => {
                const group = MODULE_GROUPS.find(g => g.modules.some(m => m.id === mod.id))
                return (
                  <Link
                    key={mod.id}
                    to={mod.to as '/'}
                    className="flex items-center gap-3 group"
                  >
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">{mod.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-violet-900 dark:text-violet-100 text-sm group-hover:underline leading-tight">{mod.title}</p>
                      <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        {group && (
                          <span className="text-xs text-violet-500 dark:text-violet-400">{group.heading}</span>
                        )}
                        <span className="inline-flex items-center gap-1 bg-violet-200 dark:bg-violet-800 text-violet-700 dark:text-violet-300 text-xs px-2 py-0.5 rounded-full font-medium">
                          &#x2605; Popular
                        </span>
                      </div>
                    </div>
                    <span className="text-violet-400 text-base flex-shrink-0 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* Not sure where to start? */}
        <div className="bg-violet-600 dark:bg-violet-800 rounded-2xl p-5 text-white space-y-3">
          <p className="font-bold text-lg leading-tight">Not sure where to start?</p>
          <p className="text-violet-100 text-sm leading-relaxed">Answer 5 quick questions and we will suggest the perfect lessons for you based on your interests and experience.</p>
          <Link
            to="/quiz/what-next"
            className="inline-flex items-center gap-2 bg-white text-violet-700 rounded-xl px-5 py-2.5 font-semibold text-sm hover:bg-violet-50 transition-colors"
          >
            Find my perfect lesson &rarr;
          </Link>
        </div>

        {/* True or False quiz game */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-amber-800 mb-0.5">&#x2753; True or False?</p>
            <p className="text-sm text-amber-700">15 statements about AI — can you tell fact from fiction?</p>
          </div>
          <Link
            to="/quiz/true-or-false"
            className="flex-shrink-0 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
          >
            Play &rarr;
          </Link>
        </div>

        {/* Recently completed */}
        {recentlyCompletedModules.length > 0 && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 sm:p-5 space-y-3">
            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Recently completed</p>
            <div className="space-y-2">
              {recentlyCompletedModules.map(mod => {
                const modScore = scores[mod.id]
                return (
                  <Link
                    key={mod.id}
                    to={mod.to as '/'}
                    className="flex items-center gap-3 group"
                  >
                    <span className="text-2xl flex-shrink-0">{mod.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-emerald-800 text-sm group-hover:underline leading-tight">{mod.title}</p>
                      {modScore && (
                        <p className="text-xs text-emerald-600 mt-0.5">
                          Quiz score: {modScore.score}/{modScore.total} ({Math.round((modScore.score / modScore.total) * 100)}%)
                        </p>
                      )}
                    </div>
                    <span className="text-emerald-400 text-base flex-shrink-0 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* Bookmarked lessons */}
        {bookmarkedModules.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 space-y-3">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide">Saved for later</p>
            <div className="space-y-2">
              {bookmarkedModules.map(mod => (
                <div key={mod.id} className="flex items-center gap-3 group">
                  <Link
                    to={mod.to as '/'}
                    className="flex items-center gap-3 flex-1 min-w-0"
                  >
                    <span className="text-2xl flex-shrink-0">{mod.icon}</span>
                    <p className="font-semibold text-amber-800 text-sm group-hover:underline leading-tight flex-1 min-w-0">{mod.title}</p>
                  </Link>
                  <button
                    onClick={() => toggleBookmark(mod.id)}
                    className="text-amber-500 hover:text-amber-700 transition-colors flex-shrink-0 text-lg"
                    aria-label={`Remove bookmark for ${mod.title}`}
                    title="Remove bookmark"
                  >
                    &#x2605;
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lesson of the week */}
        <LessonOfTheWeek lessons={MODULES} visitedIds={visited} />

        {/* Recently viewed */}
        <RecentlyViewed lessons={MODULES} recentIds={recentlyViewedIds} />

        {/* What's new */}
        <WhatsNew />

        {/* App feedback */}
        <AppFeedback />

        {/* For Gigi section */}
        <div className="bg-pink-50 border border-pink-200 rounded-2xl p-4 sm:p-6 space-y-3">
          <p className="text-sm font-semibold text-pink-700 uppercase tracking-wide">For Gigi</p>
          <p className="text-gray-700 leading-relaxed">
            This site is a step-by-step guide for Ronny. Share the link and they can work through it
            at their own pace. Once Ronny has a GitHub account, you can invite them to the project
            so they can follow along in real time.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/invite-ronny"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              How to invite Ronny to GitHub &rarr;
            </Link>
            <a
              href="https://github.com/Sayfan-AI/ronny-learns-ai/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-pink-300 text-pink-700 hover:bg-pink-100 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Give feedback on GitHub &rarr;
            </a>
          </div>
        </div>

        {/* Learning path — grouped by theme */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">Your learning path</h2>
            <p className="text-gray-500 text-sm">Grouped by topic — start anywhere, or work through in order.</p>
          </div>

          {/* Keyword filter */}
          <div className="relative">
            <input
              type="search"
              placeholder="Search lessons by keyword..."
              value={keywordFilter}
              onChange={e => setKeywordFilter(e.target.value)}
              aria-label="Filter lessons by keyword"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 pl-10 text-sm text-gray-700 shadow-sm placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" aria-hidden="true">
              🔍
            </span>
            {keywordFilter && (
              <button
                onClick={() => setKeywordFilter('')}
                aria-label="Clear keyword filter"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg leading-none"
              >
                &times;
              </button>
            )}
          </div>

          {/* Difficulty filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map(level => (
              <button
                key={level}
                onClick={() => setDifficultyFilter(level)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors min-h-[36px] ${
                  difficultyFilter === level
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          {MODULE_GROUPS.map((group) => {
            const keyword = keywordFilter.trim().toLowerCase()
            const filteredModules = group.modules
              .filter(m => difficultyFilter === 'All' || m.difficulty === difficultyFilter)
              .filter(m => !keyword || m.title.toLowerCase().includes(keyword) || m.description.toLowerCase().includes(keyword))
            if (filteredModules.length === 0) return null
            return (
            <section key={group.heading} className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-200" />
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2 whitespace-nowrap">
                  {group.heading}
                </h3>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              <div className="space-y-2">
                {filteredModules.map((mod) => {
                  const done = visited.has(mod.id)
                  const isBookmarked = bookmarks.has(mod.id)
                  const modScore = scores[mod.id]
                  const colors = COLOR_MAP[mod.color] ?? COLOR_MAP['blue']
                  return (
                    <div
                      key={mod.id}
                      className={`bg-white rounded-xl shadow-sm border-2 transition-all duration-200 flex items-center gap-3 sm:gap-4 ${
                        done ? 'border-green-300' : `border-gray-100 ${colors.border}`
                      }`}
                    >
                      <Link
                        to={mod.to}
                        onClick={() => {
                          const next = new Set(visited)
                          next.add(mod.id)
                          setVisited(next)
                          localStorage.setItem(VISITED_KEY, JSON.stringify([...next]))
                        }}
                        className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0 p-4 sm:p-5"
                      >
                        {/* Done indicator */}
                        <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                          done ? 'bg-green-500 text-white' : colors.badge
                        }`}>
                          {done ? '✓' : mod.icon}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-800 text-sm sm:text-base leading-tight">{mod.title}</h4>
                          <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{mod.description}</p>
                          <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                            {mod.readingTime && (
                              <span className="text-gray-400 text-xs">{mod.readingTime} read</span>
                            )}
                            {mod.difficulty && (
                              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${DIFFICULTY_STYLES[mod.difficulty]}`}>
                                {mod.difficulty}
                              </span>
                            )}
                            {modScore && (
                              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                                modScore.score / modScore.total >= 0.8
                                  ? 'bg-green-100 text-green-700'
                                  : modScore.score / modScore.total >= 0.5
                                  ? 'bg-amber-100 text-amber-700'
                                  : 'bg-red-100 text-red-700'
                              }`}>
                                {Math.round((modScore.score / modScore.total) * 100)}%
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Arrow */}
                        <span className="text-gray-400 text-lg sm:text-xl flex-shrink-0">&rarr;</span>
                      </Link>

                      {/* Bookmark toggle */}
                      <button
                        onClick={() => toggleBookmark(mod.id)}
                        className={`pr-4 flex-shrink-0 text-xl transition-colors ${
                          isBookmarked ? 'text-amber-400 hover:text-amber-600' : 'text-gray-200 hover:text-amber-300'
                        }`}
                        aria-label={isBookmarked ? `Remove bookmark for ${mod.title}` : `Bookmark ${mod.title}`}
                        title={isBookmarked ? 'Remove bookmark' : 'Save for later'}
                      >
                        {isBookmarked ? '★' : '☆'}
                      </button>
                    </div>
                  )
                })}
              </div>
            </section>
          )
          })}

          {/* No results message when keyword filter matches nothing */}
          {keywordFilter.trim() && MODULE_GROUPS.every(group => {
            const keyword = keywordFilter.trim().toLowerCase()
            return group.modules
              .filter(m => difficultyFilter === 'All' || m.difficulty === difficultyFilter)
              .filter(m => m.title.toLowerCase().includes(keyword) || m.description.toLowerCase().includes(keyword))
              .length === 0
          }) && (
            <div className="text-center py-10 space-y-2">
              <p className="text-gray-500 text-base">No lessons match &ldquo;{keywordFilter}&rdquo;.</p>
              <button
                onClick={() => setKeywordFilter('')}
                className="text-blue-600 underline text-sm hover:text-blue-800"
              >
                Clear filter
              </button>
            </div>
          )}
        </div>

        <p className="text-gray-400 text-sm text-center">
          Most lessons include a short quiz at the end to check what you learned.
        </p>

        {/* Participate section */}
        <div className="border-t border-gray-200 pt-6 space-y-3">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">Get involved</h2>
          <div className="space-y-3">
            <Link
              to="/ask"
              className="bg-purple-50 border border-purple-200 rounded-xl p-5 hover:bg-purple-100 hover:border-purple-300 transition-all flex items-center gap-4"
            >
              <span className="text-3xl flex-shrink-0">&#x1F914;</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-purple-800 text-base">Ask a question</h3>
                <p className="text-purple-600 text-sm">Get a plain-language answer to any question about AI, GitHub, or this project.</p>
              </div>
              <span className="text-purple-400 text-xl flex-shrink-0">&rarr;</span>
            </Link>

            <Link
              to="/feedback"
              className="bg-blue-50 border border-blue-200 rounded-xl p-5 hover:bg-blue-100 hover:border-blue-300 transition-all flex items-center gap-4"
            >
              <span className="text-3xl flex-shrink-0">&#x1F4AC;</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-blue-800 text-base">Share your thoughts</h3>
                <p className="text-blue-600 text-sm">Leave feedback or ask something — no GitHub account needed.</p>
              </div>
              <span className="text-blue-400 text-xl flex-shrink-0">&rarr;</span>
            </Link>

            <Link
              to="/my-progress"
              className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 hover:bg-emerald-100 hover:border-emerald-300 transition-all flex items-center gap-4"
            >
              <span className="text-3xl flex-shrink-0">&#x1F4AA;</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-emerald-800 text-base">My progress</h3>
                <p className="text-emerald-600 text-sm">See which modules you have visited and how far you have come.</p>
              </div>
              <span className="text-emerald-400 text-xl flex-shrink-0">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Tools section */}
        <div className="border-t border-gray-200 pt-6 space-y-3">
          <h2 className="text-xl font-semibold text-gray-700 text-center">Useful tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              to="/glossary"
              className="bg-violet-50 border border-violet-200 rounded-xl p-4 hover:bg-violet-100 transition-colors flex items-center gap-3"
            >
              <span className="text-2xl flex-shrink-0">&#x1F4D6;</span>
              <div>
                <p className="font-semibold text-violet-800 text-sm">Glossary</p>
                <p className="text-violet-600 text-xs">Plain-English definitions for every AI term.</p>
              </div>
            </Link>
            <Link
              to="/learning-recap"
              className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 hover:bg-indigo-100 transition-colors flex items-center gap-3"
            >
              <span className="text-2xl flex-shrink-0">&#x1F393;</span>
              <div>
                <p className="font-semibold text-indigo-800 text-sm">Learning recap</p>
                <p className="text-indigo-600 text-xs">A visual overview of everything you have learned.</p>
              </div>
            </Link>
            <Link
              to="/quiz-review"
              className="bg-amber-50 border border-amber-200 rounded-xl p-4 hover:bg-amber-100 transition-colors flex items-center gap-3"
            >
              <span className="text-2xl flex-shrink-0">&#x1F4DD;</span>
              <div>
                <p className="font-semibold text-amber-800 text-sm">Quiz review</p>
                <p className="text-amber-600 text-xs">Retry questions you got wrong to lock in your learning.</p>
              </div>
            </Link>
            <Link
              to="/quiz/true-or-false"
              className="bg-violet-50 border border-violet-200 rounded-xl p-4 hover:bg-violet-100 transition-colors flex items-center gap-3"
            >
              <span className="text-2xl flex-shrink-0">&#x2753;</span>
              <div>
                <p className="font-semibold text-violet-800 text-sm">True or false</p>
                <p className="text-violet-600 text-xs">15 AI statements — test your knowledge of facts, myths, and regulation.</p>
              </div>
            </Link>
            <Link
              to="/quiz/ai-timeline"
              className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 hover:bg-indigo-100 transition-colors flex items-center gap-3"
            >
              <span className="text-2xl flex-shrink-0">&#x23F3;</span>
              <div>
                <p className="font-semibold text-indigo-800 text-sm">AI timeline game</p>
                <p className="text-indigo-600 text-xs">Arrange 10 AI milestones in the correct order.</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Next steps CTA */}
        <div className="border-t border-gray-200 pt-6">
          <Link
            to="/learn/next-steps"
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl shadow-md p-4 sm:p-6 flex items-center gap-3 sm:gap-4 transition-colors duration-200"
          >
            <span className="text-3xl sm:text-4xl flex-shrink-0">&#x1F680;</span>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white text-lg sm:text-xl leading-tight">Ready to get involved?</h3>
              <p className="text-emerald-100 text-sm mt-1">After you have gone through the modules, here is how to go from learning to doing.</p>
            </div>
            <span className="text-white text-xl flex-shrink-0">&rarr;</span>
          </Link>
        </div>

        {/* Explore section */}
        <div className="border-t border-gray-200 pt-6 space-y-4">
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-semibold text-gray-700">Explore the real thing</h2>
            <p className="text-gray-500 text-sm">See the AI at work — hands on.</p>
          </div>

          <div className="space-y-3">
            <Link
              to="/explore/live-activity"
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-indigo-200 transition-all duration-200 flex items-center gap-4"
            >
              <span className="text-3xl flex-shrink-0">📋</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800 text-base">Live Activity</h3>
                <p className="text-gray-500 text-sm">See the real GitHub issues from this project — fetched live right now.</p>
              </div>
              <span className="text-gray-400 text-xl flex-shrink-0">&rarr;</span>
            </Link>

            <Link
              to="/explore/how-agents-work"
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-violet-200 transition-all duration-200 flex items-center gap-4"
            >
              <span className="text-3xl flex-shrink-0">🔄</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800 text-base">How the agents work</h3>
                <p className="text-gray-500 text-sm">The genesis dev loop from trigger to deployed website — with a quiz.</p>
              </div>
              <span className="text-gray-400 text-xl flex-shrink-0">&rarr;</span>
            </Link>

            <Link
              to="/explore/your-journey"
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-emerald-200 transition-all duration-200 flex items-center gap-4"
            >
              <span className="text-3xl flex-shrink-0">🎉</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800 text-base">Your learning journey</h3>
                <p className="text-gray-500 text-sm">A summary of everything you have learned and links to explore the real project.</p>
              </div>
              <span className="text-gray-400 text-xl flex-shrink-0">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* For Gigi bottom */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-6 space-y-3">
          <h2 className="text-lg font-semibold text-amber-800">For Gigi</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            This site was built by the Genesis AI system to help Ronny learn about AI, GitHub, and this project.
            It updates automatically as new lessons are added.
          </p>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>To invite Ronny to GitHub:</strong>{' '}
              <Link to="/invite-ronny" className="text-blue-600 hover:underline">
                see the step-by-step invite guide
              </Link>{' '}
              or go directly to{' '}
              <a
                href="https://github.com/Sayfan-AI/ronny-learns-ai/settings/access"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                repository settings
              </a>{' '}
              and add Ronny as a collaborator.
            </p>
            <p>
              <strong>To give feedback or request changes:</strong> open an issue in the{' '}
              <a
                href="https://github.com/Sayfan-AI/ronny-learns-ai/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub repository
              </a>.
              The AI agents monitor issues and will act on your requests automatically.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
