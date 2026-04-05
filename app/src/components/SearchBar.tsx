import { useState, useRef, useEffect } from 'react'
import { Link } from '@tanstack/react-router'

type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'
type TopicGroup = 'How AI works' | 'AI in the real world' | 'AI and society' | 'Deep dives' | 'GitHub and coding'

interface SearchItem {
  type: 'lesson' | 'glossary'
  title: string
  description: string
  to: string
  difficulty?: Difficulty
  topicGroup?: TopicGroup
}

const SEARCH_INDEX: SearchItem[] = [
  // Lessons
  { type: 'lesson', title: 'Create your GitHub account',             description: 'Step-by-step guide to signing up for GitHub.',                   to: '/tutorial/github-signup',           difficulty: 'Beginner',     topicGroup: 'GitHub and coding' },
  { type: 'lesson', title: 'What is GitHub for?',                    description: 'Repos, commits, issues, and pull requests explained simply.',     to: '/learn/github-basics',              difficulty: 'Beginner',     topicGroup: 'GitHub and coding' },
  { type: 'lesson', title: 'What is AI?',                            description: 'Artificial intelligence explained without jargon.',               to: '/learn/what-is-ai',                 difficulty: 'Beginner',     topicGroup: 'How AI works' },
  { type: 'lesson', title: 'What is machine learning?',              description: 'How computers learn from examples instead of rules.',             to: '/learn/what-is-machine-learning',    difficulty: 'Intermediate', topicGroup: 'How AI works' },
  { type: 'lesson', title: 'How does AI training work?',             description: 'What actually happens when an AI model is trained.',             to: '/learn/how-ai-training-works',       difficulty: 'Intermediate', topicGroup: 'How AI works' },
  { type: 'lesson', title: 'What is a neural network?',              description: 'Layers, neurons, and how deep learning works.',                  to: '/learn/neural-network',              difficulty: 'Advanced',     topicGroup: 'How AI works' },
  { type: 'lesson', title: 'How do language models work?',           description: 'Tokens, context, and how Claude generates text.',                to: '/learn/language-models',             difficulty: 'Advanced',     topicGroup: 'How AI works' },
  { type: 'lesson', title: 'How do chatbots work?',                  description: 'Rule-based vs AI chatbots, context, and hallucination.',          to: '/learn/how-chatbots-work',           difficulty: 'Beginner',     topicGroup: 'How AI works' },
  { type: 'lesson', title: 'The history of AI',                      description: 'Key moments in AI from the 1950s to today.',                     to: '/ai-history',                        difficulty: 'Beginner',     topicGroup: 'How AI works' },
  { type: 'lesson', title: 'What is an API?',                        description: 'How two pieces of software talk to each other.',                 to: '/learn/what-is-api',                 difficulty: 'Intermediate', topicGroup: 'GitHub and coding' },
  { type: 'lesson', title: 'What is the Genesis system?',            description: 'The AI-powered dev loop that built this app.',                   to: '/learn/genesis-system',              difficulty: 'Beginner',     topicGroup: 'GitHub and coding' },
  { type: 'lesson', title: 'How this app was built',                 description: 'An AI system built this entire website, autonomously.',          to: '/learn/how-this-was-built',          difficulty: 'Intermediate', topicGroup: 'GitHub and coding' },
  { type: 'lesson', title: 'How does the website update automatically?', description: 'CI/CD explained in plain language.',                         to: '/learn/what-is-ci-cd',               difficulty: 'Advanced',     topicGroup: 'GitHub and coding' },
  { type: 'lesson', title: 'Version control',                        description: 'How developers track changes without losing work.',              to: '/learn/what-is-version-control',     difficulty: 'Advanced',     topicGroup: 'GitHub and coding' },
  { type: 'lesson', title: 'What is a pull request?',                description: 'How code changes are proposed and reviewed.',                   to: '/learn/what-is-a-pull-request',      difficulty: 'Advanced',     topicGroup: 'GitHub and coding' },
  { type: 'lesson', title: 'Meet the AI agents',                     description: 'The specialist AI agents that run this project.',                to: '/agents',                            difficulty: 'Beginner',     topicGroup: 'GitHub and coding' },
  { type: 'lesson', title: 'AI in everyday life',                    description: 'Where you already encounter AI without realising it.',           to: '/learn/ai-everyday-life',            difficulty: 'Beginner',     topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI pros and cons',                       description: 'Benefits and risks of AI, explained honestly.',                  to: '/learn/ai-pros-and-cons',            difficulty: 'Beginner',     topicGroup: 'Deep dives' },
  { type: 'lesson', title: 'What is AI bias?',                       description: 'How AI picks up unfair patterns from its training data.',        to: '/learn/ai-bias',                     difficulty: 'Intermediate', topicGroup: 'Deep dives' },
  { type: 'lesson', title: 'AI safety and alignment',                description: 'Why making AI do what we want matters.',                         to: '/learn/ai-safety',                   difficulty: 'Intermediate', topicGroup: 'Deep dives' },
  { type: 'lesson', title: 'What is prompt engineering?',            description: 'How to write better prompts to get clearer answers from AI.',   to: '/learn/prompt-engineering',          difficulty: 'Intermediate', topicGroup: 'Deep dives' },
  { type: 'lesson', title: 'Can I trust what AI says?',              description: 'Hallucinations, bias, and when to verify AI answers.',           to: '/learn/trusting-ai',                 difficulty: 'Intermediate', topicGroup: 'Deep dives' },
  { type: 'lesson', title: 'AI and jobs — what is really changing?', description: 'What AI automates, assists, and cannot replace.',               to: '/learn/ai-and-jobs',                 difficulty: 'Beginner',     topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and creativity — art, music, writing',description: 'How AI tools help with creative work.',                          to: '/learn/ai-and-creativity',           difficulty: 'Beginner',     topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI in healthcare',                       description: 'How AI is helping doctors diagnose diseases and discover drugs.',to: '/learn/ai-in-healthcare',            difficulty: 'Intermediate', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and the environment',                 description: 'The energy AI uses and what the industry is doing.',             to: '/learn/ai-and-environment',          difficulty: 'Intermediate', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and privacy — who sees your data?',   description: 'How AI apps collect personal data and your rights.',             to: '/learn/ai-and-privacy',              difficulty: 'Intermediate', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and education',                       description: 'Personalised tutoring, teacher tools, and academic integrity.',  to: '/learn/ai-and-education',            difficulty: 'Beginner',     topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and misinformation — deepfakes and fake news', description: 'How to spot AI-generated misinformation and fact-check.', to: '/learn/ai-and-misinformation',   difficulty: 'Intermediate', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and your mental health',              description: 'AI companion apps — their benefits, risks, and how to use wisely.', to: '/learn/ai-and-mental-health',    difficulty: 'Beginner',     topicGroup: 'AI and society' },
  { type: 'lesson', title: 'What does the future of AI look like?',  description: 'Near-term trends, the AGI debate, and what experts think.',      to: '/learn/future-of-ai',                difficulty: 'Intermediate', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI in the apps you already use',         description: 'Google Maps, Spotify, Netflix, autocorrect — all powered by AI.',to: '/learn/ai-in-your-apps',            difficulty: 'Beginner',     topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI, laws, and your rights',              description: 'The EU AI Act, AI copyright, and your rights when AI affects you.', to: '/learn/ai-laws-and-rights',       difficulty: 'Intermediate', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and social media',                    description: 'How recommendation algorithms shape your feed — and what to do.', to: '/learn/ai-and-social-media',       difficulty: 'Beginner',     topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI for accessibility',                   description: 'How AI helps people with disabilities use technology more fully.',to: '/learn/ai-for-accessibility',        difficulty: 'Beginner',     topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and scientific research',            description: 'AlphaFold, drug discovery, climate modelling, and astronomy — AI in the lab.', to: '/learn/ai-and-scientific-research', difficulty: 'Intermediate',  topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and your productivity',              description: 'Writing assistants, coding helpers, meeting tools, and research tools.', to: '/learn/ai-productivity-tools',    difficulty: 'Beginner',     topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and energy',                        description: 'Smart grids, renewable forecasting, smart tariffs, EV charging, and why AI uses a lot of electricity.', to: '/learn/ai-and-energy',   difficulty: 'Beginner',     topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and elderly care',                  description: 'Fall detection, companion robots, dementia support, and the ethics of AI monitoring.', to: '/learn/ai-and-elderly-care',   difficulty: 'Intermediate', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and insurance',                     description: 'How AI sets premiums, telematics black boxes, health wearables, and fairness concerns.', to: '/learn/ai-and-insurance',  difficulty: 'Beginner',     topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and policing',                      description: 'Predictive policing, facial recognition in law enforcement, racial bias, and civil liberties.', to: '/learn/ai-and-policing', difficulty: 'Intermediate', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and the NHS',                       description: 'AI diagnostics, AlphaFold, the 111 symptom checker, patient data privacy, and reducing NHS admin.', to: '/learn/ai-and-the-nhs', difficulty: 'Beginner',     topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and hiring',                        description: 'Applicant tracking systems, AI video interviews, Amazon\'s biased recruiting tool, and your rights.', to: '/learn/ai-and-hiring',  difficulty: 'Intermediate', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and customer service',              description: 'Chatbots, AI agents that take actions, UK call centre job impacts, and your consumer rights.', to: '/learn/ai-and-customer-service', difficulty: 'Beginner', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and the weather',                   description: 'GraphCast, the Met Office, flood warnings, and how AI is beating traditional forecasting models.', to: '/learn/ai-and-weather', difficulty: 'Beginner', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and the environment',               description: 'The carbon cost of AI training and inference, the AI paradox, DeepMind cooling savings, and how to be a thoughtful AI user.', to: '/learn/ai-and-the-environment', difficulty: 'Beginner', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and the law',                       description: 'AI in legal research, deepfake evidence in court, the EU AI Act, liability, and your right to challenge automated decisions.', to: '/learn/ai-and-the-law', difficulty: 'Intermediate', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and relationships',                  description: 'How dating apps use AI matching, AI companion apps, emotional risks, fake profiles, and the authenticity question.', to: '/learn/ai-and-relationships', difficulty: 'Beginner', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and creative writing',               description: 'How LLMs generate text, tools writers use, copyright questions, the authenticity debate, and practical tips for writers.', to: '/learn/ai-and-creative-writing', difficulty: 'Intermediate', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and photography',                    description: 'How AI image generators work, what deepfakes are, how to spot them, AI editing tools photographers use, and copyright questions.', to: '/learn/ai-and-photography', difficulty: 'Beginner', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and mental health apps',             description: 'CBT chatbots like Woebot and Wysa, what they can and cannot do, UK crisis resources, privacy concerns, and NHS talking therapies.', to: '/learn/ai-and-mental-health-apps', difficulty: 'Intermediate', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and smart homes',                    description: 'How Alexa, Nest, Ring, and robot vacuums use AI — what data your home collects, who can access it, and practical privacy tips.', to: '/learn/ai-and-smart-homes', difficulty: 'Beginner', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and the military',                   description: 'Loitering drones, autonomous weapons, Project Maven, meaningful human control, and the international debate about killer robots.', to: '/learn/ai-and-the-military', difficulty: 'Intermediate', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and streaming',                      description: 'How Netflix, Spotify, and YouTube recommendation algorithms work — and how to take back control of what you see.', to: '/learn/ai-and-streaming', difficulty: 'Beginner', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and the news',                       description: 'How AI writes news, detects misinformation, personalises news feeds, and what it means for journalism and democracy.', to: '/learn/ai-and-news', difficulty: 'Intermediate', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and smart cities',                   description: 'How AI manages traffic, public transport, energy grids, and safety in cities — and the privacy questions this raises.', to: '/learn/ai-and-smart-cities', difficulty: 'Intermediate', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and charities',                      description: 'How charities use AI for fundraising, donor matching, fraud detection, and service delivery — with UK examples.', to: '/learn/ai-and-charities', difficulty: 'Beginner', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and volunteering',                   description: 'How AI is matching volunteers with opportunities, measuring impact, and helping third-sector organisations do more with less.', to: '/learn/ai-and-volunteering', difficulty: 'Beginner', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and adult education',                description: 'How AI tutors, adaptive learning, and skills platforms are changing adult learning and professional development in the UK.', to: '/learn/ai-and-adult-education', difficulty: 'Beginner', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and architecture',                   description: 'How AI generates building designs, optimises energy efficiency, analyses planning applications, and accelerates construction.', to: '/learn/ai-and-architecture', difficulty: 'Intermediate', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and the arts',                       description: 'How AI generates music, art, and film — and what this means for artists, copyright, and creative jobs.', to: '/learn/ai-and-the-arts', difficulty: 'Intermediate', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and advertising',                    description: 'How AI targets ads to you, how real-time bidding works, the ethics of personalised advertising, and how to opt out.', to: '/learn/ai-and-advertising', difficulty: 'Intermediate', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and emergency services',             description: 'How AI helps police, ambulance, and fire services dispatch resources, predict incidents, and protect first responders.', to: '/learn/ai-and-emergency-services', difficulty: 'Intermediate', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and film and TV',                    description: 'How AI creates visual effects, writes scripts, dubs dialogue, and is changing what gets made and who gets paid.', to: '/learn/ai-and-film-and-tv', difficulty: 'Intermediate', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and water',                          description: 'How AI monitors water quality, detects leaks, forecasts floods, and helps manage scarce water resources.', to: '/learn/ai-and-water', difficulty: 'Beginner', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and sleep',                          description: 'How wearables and apps track your sleep, what AI can tell you about sleep quality, and what the research actually shows.', to: '/learn/ai-and-sleep', difficulty: 'Beginner', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and the ocean',                      description: 'How AI monitors ocean health, tracks shipping, detects illegal fishing, and models climate impacts on the seas.', to: '/learn/ai-and-the-ocean', difficulty: 'Intermediate', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and parenting',                      description: 'How AI shapes what children see online, parental control tools, AI tutors, and screen time research.', to: '/learn/ai-and-parenting', difficulty: 'Beginner', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and language learning',              description: 'How Duolingo, Babbel, and AI tutors are transforming language learning — what works and what does not.', to: '/learn/ai-and-language-learning', difficulty: 'Beginner', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and the workplace',                  description: 'How AI monitors productivity, screens applications, manages shifts, and what this means for workers and their rights.', to: '/learn/ai-and-the-workplace', difficulty: 'Intermediate', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and sport analytics',                description: 'How AI analyses performance data, prevents injuries, improves tactics, and is changing professional sport.', to: '/learn/ai-and-sport-analytics', difficulty: 'Intermediate', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and construction',                   description: 'How AI optimises building projects, detects safety hazards on site, and helps design more efficient structures.', to: '/learn/ai-and-construction', difficulty: 'Intermediate', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and personal finance',               description: 'How AI powers budgeting apps, detects bank fraud, offers financial advice, and the limits of automated money management.', to: '/learn/ai-and-personal-finance', difficulty: 'Intermediate', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and cooking',                        description: 'How AI writes recipes, helps manage food waste, powers smart appliances, and is changing how we think about food.', to: '/learn/ai-and-cooking', difficulty: 'Beginner', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and genetics',                       description: 'DNA testing kits, personalised medicine, gene editing, and the profound ethical questions these technologies raise.', to: '/learn/ai-and-genetics', difficulty: 'Intermediate', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and cybercrime',                     description: 'How criminals use AI for phishing, voice cloning, and ransomware — and how AI defences fight back.', to: '/learn/ai-and-cybercrime', difficulty: 'Intermediate', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and space exploration',              description: 'How AI navigates Mars rovers, finds exoplanets, lands rockets autonomously, and helps search for extraterrestrial life.', to: '/learn/ai-and-space-exploration', difficulty: 'Intermediate', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and pregnancy and baby care',        description: 'Pregnancy tracking apps, AI-assisted NHS ultrasound, smart baby monitors, and the privacy questions around infant data.', to: '/learn/ai-and-pregnancy-and-baby-care', difficulty: 'Beginner', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and taxes',                          description: "How HMRC's Connect AI catches fraud, how tax software automates your return, and how to spot HMRC phishing emails.", to: '/learn/ai-and-taxes', difficulty: 'Intermediate', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and real estate',                    description: 'How AI values properties, powers virtual tours, and is changing how homes are bought and sold in the UK.', to: '/learn/ai-and-real-estate', difficulty: 'Beginner', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and social care',                    description: 'Care robots, AI companions for elderly people, ethics of automated care, and what it means for care workers.', to: '/learn/ai-and-social-care', difficulty: 'Intermediate', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and shopping',                       description: 'Personalised recommendations, virtual try-on, dynamic pricing, and your consumer rights in an AI-powered retail world.', to: '/learn/ai-and-shopping', difficulty: 'Beginner', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI in the news timeline',               description: 'A scrollable history of major AI milestones from 2010 to today — key moments that shaped the technology.', to: '/ai-in-the-news', difficulty: 'Beginner', topicGroup: 'How AI works' },
  { type: 'lesson', title: 'AI and the home',                       description: 'Smart speakers, AI thermostats, robot vacuums, security cameras, and how to manage energy use with AI.', to: '/learn/ai-and-the-home', difficulty: 'Beginner', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and immigration',                    description: 'How AI processes visa applications, powers border eGates, raises bias concerns, and what rights you have over automated decisions.', to: '/learn/ai-and-immigration', difficulty: 'Intermediate', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and dentistry',                      description: 'How AI spots cavities in X-rays, helps plan dental treatments, supports NHS 111 triage, screens for oral cancer, and helps anxious patients.', to: '/learn/ai-and-dentistry', difficulty: 'Beginner', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and NHS waiting lists',              description: 'How AI helps manage waiting lists, predict no-shows, match cancellations, and prioritise urgent cases in the NHS.', to: '/learn/ai-and-nhs-waiting-lists', difficulty: 'Beginner', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'AI and social media algorithms',        description: 'How recommendation engines work, what filter bubbles are, the mental health debate, and how to take back control.', to: '/learn/ai-and-social-media-algorithms', difficulty: 'Beginner', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and climate activism',               description: 'How AI helps environmental campaigners track deforestation, measure carbon footprints, and detect greenwashing.', to: '/learn/ai-and-climate-activism', difficulty: 'Intermediate', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and sports medicine',                description: 'How AI predicts injuries, guides rehabilitation with computer vision, and brings elite sports science to everyday athletes.', to: '/learn/ai-and-sports-medicine', difficulty: 'Intermediate', topicGroup: 'AI in the real world' },
  { type: 'lesson', title: 'AI and fraud and identity theft',       description: 'How AI enables synthetic identity fraud and credential stuffing at scale, and how to protect and recover your identity.', to: '/learn/ai-and-fraud-and-identity-theft', difficulty: 'Intermediate', topicGroup: 'AI and society' },
  { type: 'lesson', title: 'Glossary',                               description: 'Plain-English definitions for every AI term.',                   to: '/glossary' },
  { type: 'lesson', title: 'Learning recap',                         description: 'A visual overview of everything you have learned.',              to: '/learning-recap' },
  { type: 'lesson', title: 'Ask a question',                         description: 'Get a plain-language answer to any question about AI.',          to: '/ask' },
  { type: 'lesson', title: 'My progress',                            description: 'See which modules you have visited and how far you have come.',  to: '/my-progress' },
  // Glossary entries
  { type: 'glossary', title: 'Agent',              description: 'A computer program that can take actions on its own to achieve a goal.',             to: '/glossary' },
  { type: 'glossary', title: 'Algorithm',          description: 'A step-by-step set of instructions that a computer follows to solve a problem.',     to: '/glossary' },
  { type: 'glossary', title: 'API',                description: 'A way for two pieces of software to talk to each other.',                            to: '/learn/what-is-api' },
  { type: 'glossary', title: 'Artificial Intelligence', description: 'Computer systems that can do things that normally require human intelligence.', to: '/learn/what-is-ai' },
  { type: 'glossary', title: 'Bias',               description: 'When an AI system produces unfair or skewed results due to its training data.',       to: '/glossary' },
  { type: 'glossary', title: 'CI/CD',              description: 'An automated system that tests and publishes software every time a change is made.',  to: '/learn/what-is-ci-cd' },
  { type: 'glossary', title: 'Context window',     description: 'The amount of text a language model can see at once.',                               to: '/learn/language-models' },
  { type: 'glossary', title: 'Deep learning',      description: 'A type of machine learning that uses neural networks with many layers.',              to: '/learn/neural-network' },
  { type: 'glossary', title: 'Generative AI',      description: 'AI that can create new content such as text, images, music, or video.',               to: '/glossary' },
  { type: 'glossary', title: 'Hallucination',      description: 'When a language model confidently states something that is factually wrong.',         to: '/learn/language-models' },
  { type: 'glossary', title: 'Inference',          description: 'Using a trained AI model to produce a result.',                                       to: '/glossary' },
  { type: 'glossary', title: 'Language model',     description: 'An AI trained to predict the next word in a sequence.',                               to: '/learn/language-models' },
  { type: 'glossary', title: 'Machine learning',   description: 'A way of building AI where the computer learns from examples rather than rules.',     to: '/learn/what-is-machine-learning' },
  { type: 'glossary', title: 'Model',              description: 'The result of training an AI on data.',                                               to: '/glossary' },
  { type: 'glossary', title: 'Neural network',     description: 'A system of connected mathematical units arranged in layers, loosely inspired by the brain.', to: '/learn/neural-network' },
  { type: 'glossary', title: 'Parameter',          description: 'A number inside a neural network that is adjusted during training.',                  to: '/glossary' },
  { type: 'glossary', title: 'Prompt',             description: 'The text you send to an AI model as input.',                                          to: '/glossary' },
  { type: 'glossary', title: 'Token',              description: 'The basic unit a language model works with, roughly a word or part of a word.',       to: '/learn/language-models' },
  { type: 'glossary', title: 'Training data',      description: 'The examples an AI model learns from.',                                              to: '/glossary' },
  { type: 'glossary', title: 'Turing test',        description: 'A test to determine whether a machine can exhibit intelligent behaviour.',             to: '/ai-history' },
  { type: 'glossary', title: 'Version control',    description: 'A system for tracking changes to files over time.',                                   to: '/learn/what-is-version-control' },
  { type: 'glossary', title: 'Weight',             description: 'A number inside a neural network that determines how important a particular input is.', to: '/learn/neural-network' },
]

const DIFFICULTIES: Difficulty[] = ['Beginner', 'Intermediate', 'Advanced']
const TOPIC_GROUPS: TopicGroup[] = ['How AI works', 'AI in the real world', 'AI and society', 'Deep dives', 'GitHub and coding']

const DIFFICULTY_STYLES: Record<Difficulty, { chip: string; active: string }> = {
  Beginner:     { chip: 'border-green-300 text-green-700 hover:bg-green-50',  active: 'bg-green-100 border-green-400 text-green-800 font-semibold' },
  Intermediate: { chip: 'border-amber-300 text-amber-700 hover:bg-amber-50',  active: 'bg-amber-100 border-amber-400 text-amber-800 font-semibold' },
  Advanced:     { chip: 'border-red-300 text-red-700 hover:bg-red-50',        active: 'bg-red-100 border-red-400 text-red-800 font-semibold' },
}

const TOPIC_STYLES: Record<TopicGroup, { chip: string; active: string }> = {
  'How AI works':          { chip: 'border-purple-300 text-purple-700 hover:bg-purple-50',  active: 'bg-purple-100 border-purple-400 text-purple-800 font-semibold' },
  'AI in the real world':  { chip: 'border-emerald-300 text-emerald-700 hover:bg-emerald-50', active: 'bg-emerald-100 border-emerald-400 text-emerald-800 font-semibold' },
  'AI and society':        { chip: 'border-amber-300 text-amber-700 hover:bg-amber-50',     active: 'bg-amber-100 border-amber-400 text-amber-800 font-semibold' },
  'Deep dives':            { chip: 'border-violet-300 text-violet-700 hover:bg-violet-50',  active: 'bg-violet-100 border-violet-400 text-violet-800 font-semibold' },
  'GitHub and coding':     { chip: 'border-blue-300 text-blue-700 hover:bg-blue-50',        active: 'bg-blue-100 border-blue-400 text-blue-800 font-semibold' },
}

function matches(item: SearchItem, query: string): boolean {
  const q = query.toLowerCase()
  return (
    item.title.toLowerCase().includes(q) ||
    item.description.toLowerCase().includes(q)
  )
}

function applyFilters(
  items: SearchItem[],
  difficultyFilter: Difficulty | null,
  topicFilter: TopicGroup | null,
): SearchItem[] {
  return items.filter(item => {
    if (difficultyFilter && item.difficulty !== difficultyFilter) return false
    if (topicFilter && item.topicGroup !== topicFilter) return false
    return true
  })
}

const RECENT_KEY = 'ronny-recent-searches'
const MAX_RECENT = 5

const SUGGESTED_TOPICS = ['jobs', 'law', 'health', 'privacy', 'environment', 'money', 'children', 'sport', 'art', 'future', 'relationships', 'writing']

function loadRecent(): string[] {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) ?? '[]')
  } catch {
    return []
  }
}

function saveRecent(term: string) {
  const trimmed = term.trim()
  if (!trimmed) return
  const prev = loadRecent().filter(t => t !== trimmed)
  localStorage.setItem(RECENT_KEY, JSON.stringify([trimmed, ...prev].slice(0, MAX_RECENT)))
}

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | null>(null)
  const [topicFilter, setTopicFilter] = useState<TopicGroup | null>(null)
  const [recentSearches, setRecentSearches] = useState<string[]>(loadRecent)
  const containerRef = useRef<HTMLDivElement>(null)

  const hasQuery = query.trim().length >= 2
  const hasFilter = difficultyFilter !== null || topicFilter !== null

  // Base set: text-matched or all lessons if only filters are active
  const textMatched = hasQuery
    ? SEARCH_INDEX.filter(item => matches(item, query.trim()))
    : SEARCH_INDEX.filter(item => item.type === 'lesson')

  const filtered = applyFilters(textMatched, difficultyFilter, topicFilter)

  const results = (hasQuery || hasFilter) ? filtered.slice(0, 12) : []

  const lessons = results.filter(r => r.type === 'lesson')
  const glossaryItems = results.filter(r => r.type === 'glossary')

  const showResults = open && (hasQuery || hasFilter)
  const showFilters = open

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
    setOpen(true)
  }

  function handleClear() {
    setQuery('')
    setDifficultyFilter(null)
    setTopicFilter(null)
    setOpen(false)
  }

  function handleResultClick() {
    if (query.trim().length >= 2) {
      saveRecent(query.trim())
      setRecentSearches(loadRecent())
    }
    setQuery('')
    setOpen(false)
    setDifficultyFilter(null)
    setTopicFilter(null)
  }

  function applyRecentSearch(term: string) {
    setQuery(term)
    setOpen(true)
  }

  function applySuggestedTopic(topic: string) {
    setQuery(topic)
    setOpen(true)
  }

  function clearRecentSearches() {
    localStorage.removeItem(RECENT_KEY)
    setRecentSearches([])
  }

  function toggleDifficulty(d: Difficulty) {
    setDifficultyFilter(prev => prev === d ? null : d)
    setOpen(true)
  }

  function toggleTopic(t: TopicGroup) {
    setTopicFilter(prev => prev === t ? null : t)
    setOpen(true)
  }

  const totalUnfiltered = hasQuery
    ? SEARCH_INDEX.filter(item => matches(item, query.trim()) && item.type === 'lesson').length
    : SEARCH_INDEX.filter(i => i.type === 'lesson').length

  return (
    <div ref={containerRef} className="relative w-full">
      <label htmlFor="site-search" className="sr-only">Search lessons and glossary</label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" aria-hidden="true">
          &#x1F50D;
        </span>
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={handleChange}
          onFocus={() => setOpen(true)}
          placeholder="Search lessons and glossary terms..."
          autoComplete="off"
          className="w-full pl-11 pr-10 py-3 rounded-2xl border border-gray-300 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          aria-label="Search lessons and glossary terms"
          aria-expanded={showResults}
        />
        {(query || hasFilter) && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl"
            aria-label="Clear search and filters"
          >
            &times;
          </button>
        )}
      </div>

      {showFilters && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg border border-gray-200 z-50 overflow-hidden">

          {/* Recent searches (shown only when input is focused and empty) */}
          {!hasQuery && !hasFilter && recentSearches.length > 0 && (
            <div className="px-4 pt-3 pb-2 border-b border-gray-100">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-gray-400 font-medium">Recent searches</span>
                <button
                  onClick={clearRecentSearches}
                  className="text-xs text-blue-500 hover:text-blue-700"
                >
                  Clear
                </button>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {recentSearches.map(term => (
                  <button
                    key={term}
                    onClick={() => applyRecentSearch(term)}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-800 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Suggested topics (shown only when input is focused and empty) */}
          {!hasQuery && !hasFilter && (
            <div className="px-4 pt-3 pb-2 border-b border-gray-100">
              <span className="text-xs text-gray-400 font-medium block mb-1.5">Suggested topics</span>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTED_TOPICS.map(topic => (
                  <button
                    key={topic}
                    onClick={() => applySuggestedTopic(topic)}
                    className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 hover:border-blue-400 transition-colors"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Filter chips */}
          <div className="px-4 pt-3 pb-2 space-y-2 border-b border-gray-100">
            {/* Difficulty filters */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-gray-400 font-medium mr-1">Difficulty:</span>
              {DIFFICULTIES.map(d => {
                const active = difficultyFilter === d
                const styles = DIFFICULTY_STYLES[d]
                return (
                  <button
                    key={d}
                    onClick={() => toggleDifficulty(d)}
                    className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${active ? styles.active : styles.chip}`}
                  >
                    {d}
                  </button>
                )
              })}
            </div>
            {/* Topic filters */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-gray-400 font-medium mr-1">Topic:</span>
              {TOPIC_GROUPS.map(t => {
                const active = topicFilter === t
                const styles = TOPIC_STYLES[t]
                return (
                  <button
                    key={t}
                    onClick={() => toggleTopic(t)}
                    className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${active ? styles.active : styles.chip}`}
                  >
                    {t}
                  </button>
                )
              })}
            </div>
            {/* Result count */}
            {(hasQuery || hasFilter) && (
              <p className="text-xs text-gray-400">
                Showing {lessons.length} of {totalUnfiltered} lessons
                {glossaryItems.length > 0 && ` + ${glossaryItems.length} glossary entries`}
              </p>
            )}
          </div>

          {/* Results */}
          {showResults && (
            <div
              id="search-results"
              role="listbox"
              aria-label="Search results"
            >
              {results.length === 0 ? (
                <div className="px-5 py-4 text-gray-500 text-sm">
                  No lessons match those filters — try adjusting your search or filters.
                </div>
              ) : (
                <div className="divide-y divide-gray-100 max-h-80 overflow-y-auto">
                  {lessons.length > 0 && (
                    <div>
                      <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide bg-gray-50">
                        Lessons
                      </p>
                      {lessons.map(item => (
                        <Link
                          key={item.to + item.title}
                          to={item.to}
                          role="option"
                          aria-selected={false}
                          onClick={handleResultClick}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors"
                        >
                          <span className="text-xl flex-shrink-0">&#x1F4DA;</span>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold text-gray-800 truncate">{item.title}</p>
                            <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                              <p className="text-xs text-gray-500 truncate">{item.description}</p>
                            </div>
                          </div>
                          {item.difficulty && (
                            <span className={`flex-shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${
                              item.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                              item.difficulty === 'Intermediate' ? 'bg-amber-100 text-amber-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {item.difficulty}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                  {glossaryItems.length > 0 && (
                    <div>
                      <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide bg-gray-50">
                        Glossary
                      </p>
                      {glossaryItems.map(item => (
                        <Link
                          key={item.title}
                          to={item.to}
                          role="option"
                          aria-selected={false}
                          onClick={handleResultClick}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-violet-50 transition-colors"
                        >
                          <span className="text-xl flex-shrink-0">&#x1F4D6;</span>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-gray-800 truncate">{item.title}</p>
                            <p className="text-xs text-gray-500 truncate">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
