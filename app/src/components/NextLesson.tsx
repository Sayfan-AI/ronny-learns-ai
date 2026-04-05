import { Link } from '@tanstack/react-router'

/**
 * Canonical lesson order. The id must match the useMarkVisited id
 * used in each lesson page, and the path must match the route.
 */
export const LESSON_ORDER: Array<{ id: string; icon: string; title: string; path: string }> = [
  { id: 'github-signup',      icon: '&#x1F511;', title: 'Create your GitHub account',      path: '/tutorial/github-signup' },
  { id: 'github-basics',      icon: '&#x1F4C1;', title: 'What is GitHub for?',             path: '/learn/github-basics' },
  { id: 'what-is-api',        icon: '&#x1F50C;', title: 'What is an API?',                 path: '/learn/what-is-api' },
  { id: 'genesis-system',     icon: '&#x2699;&#xFE0F;', title: 'What is the Genesis system?', path: '/learn/genesis-system' },
  { id: 'what-is-ai',         icon: '&#x1F916;', title: 'What is AI?',                     path: '/learn/what-is-ai' },
  { id: 'what-is-ml',         icon: '&#x1F4CA;', title: 'What is machine learning?',       path: '/learn/what-is-machine-learning' },
  { id: 'how-ai-training-works', icon: '&#x1F3CB;&#xFE0F;', title: 'How does AI training work?', path: '/learn/how-ai-training-works' },
  { id: 'neural-network',     icon: '&#x1F9E0;', title: 'What is a neural network?',       path: '/learn/neural-network' },
  { id: 'language-models',    icon: '&#x1F4AC;', title: 'How do language models work?',    path: '/learn/language-models' },
  { id: 'ai-history',         icon: '&#x1F4DC;', title: 'AI history timeline',             path: '/ai-history' },
  { id: 'ai-everyday-life',   icon: '&#x1F30D;', title: 'AI in everyday life',             path: '/learn/ai-everyday-life' },
  { id: 'ai-pros-and-cons',   icon: '&#x2696;&#xFE0F;', title: 'AI: the good and the bad', path: '/learn/ai-pros-and-cons' },
  { id: 'prompt-engineering', icon: '&#x270F;&#xFE0F;', title: 'What is prompt engineering?', path: '/learn/prompt-engineering' },
  { id: 'ai-safety',          icon: '&#x1F6E1;&#xFE0F;', title: 'AI safety and alignment', path: '/learn/ai-safety' },
  { id: 'ai-bias',            icon: '&#x2696;&#xFE0F;', title: 'What is AI bias?',          path: '/learn/ai-bias' },
  { id: 'how-chatbots-work',  icon: '&#x1F4AC;', title: 'How do chatbots work?',           path: '/learn/how-chatbots-work' },
  { id: 'trusting-ai',        icon: '&#x1F50D;', title: 'Can I trust what AI says?',       path: '/learn/trusting-ai' },
  { id: 'ai-and-jobs',        icon: '&#x1F4BC;', title: 'AI and jobs — what is really changing?', path: '/learn/ai-and-jobs' },
  { id: 'ai-and-creativity',  icon: '&#x1F3A8;', title: 'AI and creativity',                path: '/learn/ai-and-creativity' },
  { id: 'ai-in-healthcare',   icon: '&#x1FA7A;', title: 'AI in healthcare',                 path: '/learn/ai-in-healthcare' },
  { id: 'ai-and-environment', icon: '&#x1F331;', title: 'AI and the environment',           path: '/learn/ai-and-environment' },
  { id: 'ai-and-privacy',     icon: '&#x1F512;', title: 'AI and privacy',                   path: '/learn/ai-and-privacy' },
  { id: 'ai-and-education',     icon: '&#x1F393;', title: 'AI and education',                            path: '/learn/ai-and-education' },
  { id: 'ai-and-misinformation', icon: '&#x1F50E;', title: 'AI and misinformation',                       path: '/learn/ai-and-misinformation' },
  { id: 'ai-and-mental-health',  icon: '&#x1F9E0;', title: 'AI and your mental health',                   path: '/learn/ai-and-mental-health' },
  { id: 'future-of-ai',          icon: '&#x1F52D;', title: 'What does the future of AI look like?',       path: '/learn/future-of-ai' },
  { id: 'ai-in-your-apps',     icon: '&#x1F4F1;', title: 'AI in the apps you already use',  path: '/learn/ai-in-your-apps' },
  { id: 'ai-laws-and-rights',  icon: '&#x2696;&#xFE0F;', title: 'AI, laws, and your rights', path: '/learn/ai-laws-and-rights' },
  { id: 'ai-and-social-media', icon: '&#x1F4F2;', title: 'AI and social media',             path: '/learn/ai-and-social-media' },
  { id: 'ai-for-accessibility',icon: '&#x267F;',  title: 'AI for accessibility',            path: '/learn/ai-for-accessibility' },
  { id: 'ai-and-scientific-research', icon: '&#x1F52C;', title: 'AI and scientific research', path: '/learn/ai-and-scientific-research' },
  { id: 'ai-productivity-tools', icon: '&#x26A1;', title: 'AI and your productivity',        path: '/learn/ai-productivity-tools' },
  { id: 'how-this-was-built',  icon: '&#x1F528;', title: 'How this app was built',          path: '/learn/how-this-was-built' },
  { id: 'meet-the-agents',    icon: '&#x1F4BC;', title: 'Meet the agents',                 path: '/agents' },
  { id: 'what-is-ci-cd',      icon: '&#x1F680;', title: 'What is CI/CD?',                  path: '/learn/what-is-ci-cd' },
  { id: 'version-control',    icon: '&#x1F4BE;', title: 'Version control',                 path: '/learn/what-is-version-control' },
  { id: 'pull-request',       icon: '&#x1F501;', title: 'What is a pull request?',         path: '/learn/what-is-a-pull-request' },
  { id: 'ai-and-copyright',  icon: '&#x2696;&#xFE0F;', title: 'AI and the law',             path: '/learn/ai-and-copyright' },
  { id: 'how-to-use-ai-safely', icon: '&#x1F6E1;&#xFE0F;', title: 'How to use AI safely',  path: '/learn/how-to-use-ai-safely' },
  { id: 'ai-and-money',      icon: '&#x1F4B0;', title: 'AI and money',                       path: '/learn/ai-and-money' },
  { id: 'ai-and-democracy',  icon: '&#x1F3DB;&#xFE0F;', title: 'AI and democracy',          path: '/learn/ai-and-democracy' },
  { id: 'ai-and-language',   icon: '&#x1F5E3;&#xFE0F;', title: 'AI and language',           path: '/learn/ai-and-language' },
  { id: 'ai-and-food',       icon: '&#x1F33F;', title: 'AI and food',                         path: '/learn/ai-and-food' },
  { id: 'ai-and-sport',      icon: '&#x26BD;',  title: 'AI and sport',                        path: '/learn/ai-and-sport' },
  { id: 'ai-and-transport',  icon: '&#x1F697;', title: 'AI and transport',                    path: '/learn/ai-and-transport' },
  { id: 'ai-and-art',        icon: '&#x1F58C;&#xFE0F;', title: 'AI and art',                path: '/learn/ai-and-art' },
  { id: 'ai-and-fitness-apps', icon: '&#x1F3C3;', title: 'AI and fitness apps',         path: '/learn/ai-and-fitness-apps' },
  { id: 'ai-and-disability',   icon: '&#x267F;',  title: 'AI and disability',            path: '/learn/ai-and-disability' },
  { id: 'ai-and-elections',    icon: '&#x1F5F3;&#xFE0F;', title: 'AI and elections',     path: '/learn/ai-and-elections' },
  { id: 'ai-and-banking',      icon: '&#x1F3E6;', title: 'AI and banking',               path: '/learn/ai-and-banking' },
  { id: 'ai-and-manufacturing',icon: '&#x1F3ED;', title: 'AI and manufacturing',         path: '/learn/ai-and-manufacturing' },
  { id: 'ai-and-drug-discovery',icon: '&#x1F489;', title: 'AI and drug discovery',      path: '/learn/ai-and-drug-discovery' },
  { id: 'ai-and-smart-homes',  icon: '&#x1F3E0;', title: 'AI and smart homes',           path: '/learn/ai-and-smart-homes' },
  { id: 'ai-and-the-military', icon: '&#x1F6E1;&#xFE0F;', title: 'AI and the military',  path: '/learn/ai-and-the-military' },
  { id: 'ai-and-streaming',    icon: '&#x25B6;&#xFE0F;', title: 'AI and streaming',      path: '/learn/ai-and-streaming' },
  { id: 'ai-and-news',         icon: '&#x1F4F0;', title: 'AI and the news',              path: '/learn/ai-and-news' },
  { id: 'ai-and-smart-cities', icon: '&#x1F3D9;&#xFE0F;', title: 'AI and smart cities',  path: '/learn/ai-and-smart-cities' },
  { id: 'ai-and-charities',    icon: '&#x1F91D;', title: 'AI and charities',             path: '/learn/ai-and-charities' },
  { id: 'ai-and-volunteering', icon: '&#x1F91A;', title: 'AI and volunteering',          path: '/learn/ai-and-volunteering' },
  { id: 'ai-and-adult-education', icon: '&#x1F4DA;', title: 'AI and adult education',   path: '/learn/ai-and-adult-education' },
  { id: 'ai-and-the-arts',     icon: '&#x1F3AD;', title: 'AI and the arts',              path: '/learn/ai-and-the-arts' },
  { id: 'ai-and-architecture', icon: '&#x1F3DB;&#xFE0F;', title: 'AI and architecture',  path: '/learn/ai-and-architecture' },
  { id: 'ai-and-advertising',  icon: '&#x1F4E2;', title: 'AI and advertising',           path: '/learn/ai-and-advertising' },
  { id: 'ai-and-emergency-services', icon: '&#x1F691;', title: 'AI and emergency services', path: '/learn/ai-and-emergency-services' },
  { id: 'ai-and-virtual-reality', icon: '&#x1F97D;', title: 'AI and virtual reality',   path: '/learn/ai-and-virtual-reality' },
  { id: 'ai-and-supply-chains', icon: '&#x1F69A;', title: 'AI and supply chains',        path: '/learn/ai-and-supply-chains' },
  { id: 'ai-and-film-and-tv',  icon: '&#x1F3AC;', title: 'AI and film and TV',           path: '/learn/ai-and-film-and-tv' },
  { id: 'ai-and-water',        icon: '&#x1F4A7;', title: 'AI and water',                 path: '/learn/ai-and-water' },
  { id: 'ai-and-sleep',        icon: '&#x1F634;', title: 'AI and sleep',                 path: '/learn/ai-and-sleep' },
  { id: 'ai-and-the-ocean',    icon: '&#x1F30A;', title: 'AI and the ocean',             path: '/learn/ai-and-the-ocean' },
  { id: 'ai-and-parenting',    icon: '&#x1F476;', title: 'AI and parenting',             path: '/learn/ai-and-parenting' },
  { id: 'ai-and-language-learning', icon: '&#x1F5E3;&#xFE0F;', title: 'AI and language learning', path: '/learn/ai-and-language-learning' },
  { id: 'ai-and-the-workplace', icon: '&#x1F4BC;', title: 'AI and the workplace',        path: '/learn/ai-and-the-workplace' },
  { id: 'ai-and-sport-analytics', icon: '&#x1F3C6;', title: 'AI and sport analytics',   path: '/learn/ai-and-sport-analytics' },
  { id: 'ai-and-construction',    icon: '&#x1F3D7;&#xFE0F;', title: 'AI and construction', path: '/learn/ai-and-construction' },
  { id: 'ai-and-personal-finance', icon: '&#x1F4B3;', title: 'AI and personal finance', path: '/learn/ai-and-personal-finance' },
  { id: 'ai-and-cooking',         icon: '&#x1F373;', title: 'AI and cooking',             path: '/learn/ai-and-cooking' },
  { id: 'ai-and-genetics',        icon: '&#x1F9EC;', title: 'AI and genetics',            path: '/learn/ai-and-genetics' },
  { id: 'ai-and-small-businesses', icon: '&#x1F3EA;', title: 'AI and small businesses',  path: '/learn/ai-and-small-businesses' },
  { id: 'ai-and-local-government', icon: '&#x1F3DB;&#xFE0F;', title: 'AI and local government', path: '/learn/ai-and-local-government' },
  { id: 'ai-and-wildlife-conservation', icon: '&#x1F98F;', title: 'AI and wildlife conservation', path: '/learn/ai-and-wildlife-conservation' },
  { id: 'ai-and-addiction-and-recovery', icon: '&#x1F49A;', title: 'AI and addiction and recovery', path: '/learn/ai-and-addiction-and-recovery' },
  { id: 'ai-and-sport-betting',   icon: '&#x1F3B0;', title: 'AI and sport betting',       path: '/learn/ai-and-sport-betting' },
  { id: 'ai-and-prisons-and-criminal-justice', icon: '&#x2696;&#xFE0F;', title: 'AI and prisons and criminal justice', path: '/learn/ai-and-prisons-and-criminal-justice' },
  { id: 'ai-and-space-exploration', icon: '&#x1F680;', title: 'AI and space exploration', path: '/learn/ai-and-space-exploration' },
  { id: 'ai-and-logistics-and-delivery', icon: '&#x1F4E6;', title: 'AI and logistics and delivery', path: '/learn/ai-and-logistics-and-delivery' },
  { id: 'ai-and-the-home',        icon: '&#x1F3E0;', title: 'AI and the home',            path: '/learn/ai-and-the-home' },
  { id: 'ai-and-education-technology', icon: '&#x1F4DA;', title: 'AI and education technology', path: '/learn/ai-and-education-technology' },
  { id: 'ai-and-personal-assistants', icon: '&#x1F399;&#xFE0F;', title: 'AI and personal assistants', path: '/learn/ai-and-personal-assistants' },
  { id: 'ai-and-the-legal-system', icon: '&#x2696;&#xFE0F;', title: 'AI and the legal system', path: '/learn/ai-and-the-legal-system' },
  { id: 'ai-and-climate-tech',    icon: '&#x26A1;', title: 'AI and climate tech',          path: '/learn/ai-and-climate-tech' },
  { id: 'ai-and-creative-economy', icon: '&#x1F3A8;', title: 'AI and the creative economy', path: '/learn/ai-and-creative-economy' },
  { id: 'ai-and-sport-nutrition', icon: '&#x1F96E;', title: 'AI and sport nutrition',       path: '/learn/ai-and-sport-nutrition' },
  { id: 'ai-and-mental-health-chatbots', icon: '&#x1F4AC;', title: 'AI and mental health chatbots', path: '/learn/ai-and-mental-health-chatbots' },
  { id: 'ai-and-content-moderation', icon: '&#x1F6E1;&#xFE0F;', title: 'AI and content moderation', path: '/learn/ai-and-content-moderation' },
  { id: 'ai-and-sport-fan-experience', icon: '&#x1F3DF;&#xFE0F;', title: 'AI and sport fan experience', path: '/learn/ai-and-sport-fan-experience' },
  { id: 'ai-and-offensive-cybersecurity', icon: '&#x1F6E1;&#xFE0F;', title: 'AI and offensive cybersecurity', path: '/learn/ai-and-offensive-cybersecurity' },
  { id: 'ai-and-real-estate', icon: '&#x1F3E0;', title: 'AI and real estate',           path: '/learn/ai-and-real-estate' },
  { id: 'ai-and-social-care', icon: '&#x1F91D;', title: 'AI and social care',           path: '/learn/ai-and-social-care' },
  { id: 'ai-and-immigration', icon: '&#x1F6C2;', title: 'AI and immigration',           path: '/learn/ai-and-immigration' },
  { id: 'ai-and-dentistry',   icon: '&#x1F9B7;', title: 'AI and dentistry',             path: '/learn/ai-and-dentistry' },
  { id: 'ai-and-nhs-waiting-lists', icon: '&#x1F3E5;', title: 'AI and NHS waiting lists', path: '/learn/ai-and-nhs-waiting-lists' },
  { id: 'ai-and-social-media-algorithms', icon: '&#x1F4F2;', title: 'AI and social media algorithms', path: '/learn/ai-and-social-media-algorithms' },
  { id: 'ai-and-fraud',       icon: '&#x26A0;&#xFE0F;', title: 'AI and fraud',          path: '/learn/ai-and-fraud' },
  { id: 'ai-and-climate-activism', icon: '&#x1F33F;', title: 'AI and climate activism', path: '/learn/ai-and-climate-activism' },
  { id: 'ai-and-music-industry', icon: '&#x1F3B5;', title: 'AI and the music industry', path: '/learn/ai-and-music-industry' },
  { id: 'ai-and-fashion-tech', icon: '&#x1F457;', title: 'AI and fashion technology',  path: '/learn/ai-and-fashion-tech' },
  { id: 'ai-and-edtech',      icon: '&#x1F4BB;', title: 'AI and education technology', path: '/learn/ai-and-edtech' },
  { id: 'ai-and-the-benefits-system', icon: '&#x1F3DB;&#xFE0F;', title: 'AI and the benefits system', path: '/learn/ai-and-the-benefits-system' },
  { id: 'ai-and-pregnancy-and-baby-care', icon: '&#x1F476;', title: 'AI and pregnancy and baby care', path: '/learn/ai-and-pregnancy-and-baby-care' },
  { id: 'ai-and-welfare-benefits', icon: '&#x1F3DB;&#xFE0F;', title: 'AI and welfare benefits', path: '/learn/ai-and-welfare-benefits' },
]

interface NextLessonProps {
  currentId: string
}

/**
 * Shows the next lesson in the canonical order.
 * Place this at the bottom of every lesson page.
 */
export function NextLesson({ currentId }: NextLessonProps) {
  const idx = LESSON_ORDER.findIndex(l => l.id === currentId)
  if (idx === -1) return null

  const next = LESSON_ORDER[idx + 1]

  if (!next) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
        <div className="text-3xl">&#x1F393;</div>
        <p className="font-bold text-emerald-800 text-lg">You have reached the end of the learning path!</p>
        <p className="text-emerald-700 text-sm leading-relaxed">
          That is all the lessons for now. Head to <strong>My Progress</strong> to see your badges and certificate.
        </p>
        <Link
          to="/my-progress"
          className="inline-block mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
        >
          See my progress &rarr;
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 space-y-3">
      <p className="text-sm font-semibold text-blue-500 uppercase tracking-wide">Up next</p>
      <Link
        to={next.path as '/'}
        className="flex items-center gap-4 group"
      >
        <span
          className="text-3xl flex-shrink-0"
          dangerouslySetInnerHTML={{ __html: next.icon }}
        />
        <div className="flex-1 min-w-0">
          <p className="font-bold text-blue-800 group-hover:underline text-lg leading-tight">
            {next.title}
          </p>
        </div>
        <span className="text-blue-400 text-xl flex-shrink-0 group-hover:translate-x-1 transition-transform">
          &rarr;
        </span>
      </Link>
    </div>
  )
}
