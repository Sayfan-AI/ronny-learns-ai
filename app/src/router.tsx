import { lazy, Suspense } from 'react'
import { createRouter, createRoute, createRootRoute, Outlet, createHashHistory } from '@tanstack/react-router'
import { NavBar } from './components/NavBar'
import { WelcomeTour } from './components/WelcomeTour'
import { MilestoneCelebration } from './components/MilestoneCelebration'

// Lazy-loaded page components — each becomes its own JS chunk
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })))
const GitHubSignupTutorial = lazy(() => import('./pages/GitHubSignupTutorial').then(m => ({ default: m.GitHubSignupTutorial })))
const GitHubBasics = lazy(() => import('./pages/GitHubBasics').then(m => ({ default: m.GitHubBasics })))
const WhatIsAI = lazy(() => import('./pages/WhatIsAI').then(m => ({ default: m.WhatIsAI })))
const GenesisSystem = lazy(() => import('./pages/GenesisSystem').then(m => ({ default: m.GenesisSystem })))
const WhatIsAnAPI = lazy(() => import('./pages/WhatIsAnAPI').then(m => ({ default: m.WhatIsAnAPI })))
const HowThisWasBuilt = lazy(() => import('./pages/HowThisWasBuilt').then(m => ({ default: m.HowThisWasBuilt })))
const WhatIsCICD = lazy(() => import('./pages/WhatIsCICD').then(m => ({ default: m.WhatIsCICD })))
const InviteRonny = lazy(() => import('./pages/InviteRonny').then(m => ({ default: m.InviteRonny })))
const MeetTheAgents = lazy(() => import('./pages/MeetTheAgents').then(m => ({ default: m.MeetTheAgents })))
const NextSteps = lazy(() => import('./pages/NextSteps').then(m => ({ default: m.NextSteps })))
const HowToGiveFeedback = lazy(() => import('./pages/HowToGiveFeedback').then(m => ({ default: m.HowToGiveFeedback })))
const LiveActivity = lazy(() => import('./pages/LiveActivity').then(m => ({ default: m.LiveActivity })))
const HowAgentsWork = lazy(() => import('./pages/HowAgentsWork').then(m => ({ default: m.HowAgentsWork })))
const YourJourney = lazy(() => import('./pages/YourJourney').then(m => ({ default: m.YourJourney })))
const ProfileSetup = lazy(() => import('./pages/ProfileSetup').then(m => ({ default: m.ProfileSetup })))
const VersionControl = lazy(() => import('./pages/VersionControl').then(m => ({ default: m.VersionControl })))
const PullRequest = lazy(() => import('./pages/PullRequest').then(m => ({ default: m.PullRequest })))
const MyProgress = lazy(() => import('./pages/MyProgress').then(m => ({ default: m.MyProgress })))
const FeedbackPage = lazy(() => import('./pages/FeedbackPage').then(m => ({ default: m.FeedbackPage })))
const AskPage = lazy(() => import('./pages/AskPage').then(m => ({ default: m.AskPage })))
const Certificate = lazy(() => import('./pages/Certificate').then(m => ({ default: m.Certificate })))
const WhatIsML = lazy(() => import('./pages/WhatIsML').then(m => ({ default: m.WhatIsML })))
const HowAITrainingWorks = lazy(() => import('./pages/HowAITrainingWorks').then(m => ({ default: m.HowAITrainingWorks })))
const NeuralNetwork = lazy(() => import('./pages/NeuralNetwork').then(m => ({ default: m.NeuralNetwork })))
const LanguageModels = lazy(() => import('./pages/LanguageModels').then(m => ({ default: m.LanguageModels })))
const AIHistory = lazy(() => import('./pages/AIHistory').then(m => ({ default: m.AIHistory })))
const AIEverydayLife = lazy(() => import('./pages/AIEverydayLife').then(m => ({ default: m.AIEverydayLife })))
const AIProsAndCons = lazy(() => import('./pages/AIProsAndCons').then(m => ({ default: m.AIProsAndCons })))
const Glossary = lazy(() => import('./pages/Glossary').then(m => ({ default: m.Glossary })))
const LearningRecap = lazy(() => import('./pages/LearningRecap').then(m => ({ default: m.LearningRecap })))
const QuizReview = lazy(() => import('./pages/QuizReview').then(m => ({ default: m.QuizReview })))
const PromptEngineering = lazy(() => import('./pages/PromptEngineering').then(m => ({ default: m.PromptEngineering })))
const AISafety = lazy(() => import('./pages/AISafety').then(m => ({ default: m.AISafety })))
const AIBias = lazy(() => import('./pages/AIBias').then(m => ({ default: m.AIBias })))
const HowChatbotsWork = lazy(() => import('./pages/HowChatbotsWork').then(m => ({ default: m.HowChatbotsWork })))
const TrustingAI = lazy(() => import('./pages/TrustingAI').then(m => ({ default: m.TrustingAI })))
const AIAndJobs = lazy(() => import('./pages/AIAndJobs').then(m => ({ default: m.AIAndJobs })))
const AIAndCreativity = lazy(() => import('./pages/AIAndCreativity').then(m => ({ default: m.AIAndCreativity })))
const AIInHealthcare = lazy(() => import('./pages/AIInHealthcare').then(m => ({ default: m.AIInHealthcare })))
const AIAndEnvironment = lazy(() => import('./pages/AIAndEnvironment').then(m => ({ default: m.AIAndEnvironment })))
const AIAndPrivacy = lazy(() => import('./pages/AIAndPrivacy').then(m => ({ default: m.AIAndPrivacy })))
const AIAndEducation = lazy(() => import('./pages/AIAndEducation').then(m => ({ default: m.AIAndEducation })))
const AIAndMisinformation = lazy(() => import('./pages/AIAndMisinformation').then(m => ({ default: m.AIAndMisinformation })))
const AIAndMentalHealth = lazy(() => import('./pages/AIAndMentalHealth').then(m => ({ default: m.AIAndMentalHealth })))
const FutureOfAI = lazy(() => import('./pages/FutureOfAI').then(m => ({ default: m.FutureOfAI })))
const AIInYourApps = lazy(() => import('./pages/AIInYourApps').then(m => ({ default: m.AIInYourApps })))
const AILawsAndRights = lazy(() => import('./pages/AILawsAndRights').then(m => ({ default: m.AILawsAndRights })))
const KnowledgeCheck = lazy(() => import('./pages/KnowledgeCheck').then(m => ({ default: m.KnowledgeCheck })))
const AIAndSocialMedia = lazy(() => import('./pages/AIAndSocialMedia').then(m => ({ default: m.AIAndSocialMedia })))
const AIForAccessibility = lazy(() => import('./pages/AIForAccessibility').then(m => ({ default: m.AIForAccessibility })))
const LearningPath = lazy(() => import('./pages/LearningPath').then(m => ({ default: m.LearningPath })))
const AIAndScientificResearch = lazy(() => import('./pages/AIAndScientificResearch').then(m => ({ default: m.AIAndScientificResearch })))
const AIProductivityTools = lazy(() => import('./pages/AIProductivityTools').then(m => ({ default: m.AIProductivityTools })))
const AIAndCopyright = lazy(() => import('./pages/AIAndCopyright').then(m => ({ default: m.AIAndCopyright })))
const HowToUseAISafely = lazy(() => import('./pages/HowToUseAISafely').then(m => ({ default: m.HowToUseAISafely })))
const AIAndMoney = lazy(() => import('./pages/AIAndMoney').then(m => ({ default: m.AIAndMoney })))
const AIAndDemocracy = lazy(() => import('./pages/AIAndDemocracy').then(m => ({ default: m.AIAndDemocracy })))
const AIAndLanguage = lazy(() => import('./pages/AIAndLanguage').then(m => ({ default: m.AIAndLanguage })))
const AIAndFood = lazy(() => import('./pages/AIAndFood').then(m => ({ default: m.AIAndFood })))
const AIAndSport = lazy(() => import('./pages/AIAndSport').then(m => ({ default: m.AIAndSport })))
const AIAndTransport = lazy(() => import('./pages/AIAndTransport').then(m => ({ default: m.AIAndTransport })))
const AIAndArt = lazy(() => import('./pages/AIAndArt').then(m => ({ default: m.AIAndArt })))
const AIAndCybersecurity = lazy(() => import('./pages/AIAndCybersecurity').then(m => ({ default: m.AIAndCybersecurity })))
const AIAndSpace = lazy(() => import('./pages/AIAndSpace').then(m => ({ default: m.AIAndSpace })))

// Loading fallback shown while a page chunk is being fetched
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[40vh]" aria-busy="true" aria-label="Loading page">
      <div className="text-center">
        <div className="inline-block w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-3" />
        <p className="text-gray-500 text-sm">Loading...</p>
      </div>
    </div>
  )
}

// Wrap a lazy component in Suspense
function withSuspense(Component: React.ComponentType) {
  return function SuspenseWrapper() {
    return (
      <Suspense fallback={<PageLoader />}>
        <Component />
      </Suspense>
    )
  }
}

const rootRoute = createRootRoute({
  component: () => (
    <>
      {/* Skip to main content — keyboard navigation helper */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-blue-700 focus:font-semibold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-md focus:border focus:border-blue-300"
      >
        Skip to main content
      </a>
      <NavBar />
      <WelcomeTour />
      <MilestoneCelebration />
      <main id="main-content">
        <Outlet />
      </main>
    </>
  ),
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: withSuspense(HomePage),
})

const githubSignupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tutorial/github-signup',
  component: withSuspense(GitHubSignupTutorial),
})

const githubBasicsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/github-basics',
  component: withSuspense(GitHubBasics),
})

const whatIsAIRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/what-is-ai',
  component: withSuspense(WhatIsAI),
})

const genesisSystemRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/genesis-system',
  component: withSuspense(GenesisSystem),
})

const whatIsAnAPIRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/what-is-api',
  component: withSuspense(WhatIsAnAPI),
})

const howThisWasBuiltRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/how-this-was-built',
  component: withSuspense(HowThisWasBuilt),
})

const whatIsCICDRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/what-is-ci-cd',
  component: withSuspense(WhatIsCICD),
})

const inviteRonnyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/invite-ronny',
  component: withSuspense(InviteRonny),
})

const meetTheAgentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/agents',
  component: withSuspense(MeetTheAgents),
})

const nextStepsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/next-steps',
  component: withSuspense(NextSteps),
})

const howToGiveFeedbackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/how-to-give-feedback',
  component: withSuspense(HowToGiveFeedback),
})

const liveActivityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/explore/live-activity',
  component: withSuspense(LiveActivity),
})

const howAgentsWorkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/explore/how-agents-work',
  component: withSuspense(HowAgentsWork),
})

const yourJourneyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/explore/your-journey',
  component: withSuspense(YourJourney),
})

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: withSuspense(ProfileSetup),
})

const versionControlRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/what-is-version-control',
  component: withSuspense(VersionControl),
})

const pullRequestRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/what-is-a-pull-request',
  component: withSuspense(PullRequest),
})

const myProgressRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/my-progress',
  component: withSuspense(MyProgress),
})

const feedbackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/feedback',
  component: withSuspense(FeedbackPage),
})

const askRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ask',
  component: withSuspense(AskPage),
})

const certificateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/certificate',
  component: withSuspense(Certificate),
})

const whatIsMLRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/what-is-machine-learning',
  component: withSuspense(WhatIsML),
})

const howAITrainingWorksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/how-ai-training-works',
  component: withSuspense(HowAITrainingWorks),
})

const neuralNetworkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/neural-network',
  component: withSuspense(NeuralNetwork),
})

const languageModelsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/language-models',
  component: withSuspense(LanguageModels),
})

const aiHistoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ai-history',
  component: withSuspense(AIHistory),
})

const aiEverydayLifeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-everyday-life',
  component: withSuspense(AIEverydayLife),
})

const aiProsAndConsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-pros-and-cons',
  component: withSuspense(AIProsAndCons),
})

const glossaryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/glossary',
  component: withSuspense(Glossary),
})

const learningRecapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learning-recap',
  component: withSuspense(LearningRecap),
})

const quizReviewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/quiz-review',
  component: withSuspense(QuizReview),
})

const promptEngineeringRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/prompt-engineering',
  component: withSuspense(PromptEngineering),
})

const aiSafetyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-safety',
  component: withSuspense(AISafety),
})

const aiBiasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-bias',
  component: withSuspense(AIBias),
})

const howChatbotsWorkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/how-chatbots-work',
  component: withSuspense(HowChatbotsWork),
})

const trustingAIRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/trusting-ai',
  component: withSuspense(TrustingAI),
})

const aiAndJobsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-jobs',
  component: withSuspense(AIAndJobs),
})

const aiAndCreativityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-creativity',
  component: withSuspense(AIAndCreativity),
})

const aiInHealthcareRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-in-healthcare',
  component: withSuspense(AIInHealthcare),
})

const aiAndEnvironmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-environment',
  component: withSuspense(AIAndEnvironment),
})

const aiAndPrivacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-privacy',
  component: withSuspense(AIAndPrivacy),
})

const aiAndEducationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-education',
  component: withSuspense(AIAndEducation),
})

const aiAndMisinformationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-misinformation',
  component: withSuspense(AIAndMisinformation),
})

const aiAndMentalHealthRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-mental-health',
  component: withSuspense(AIAndMentalHealth),
})

const futureOfAIRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/future-of-ai',
  component: withSuspense(FutureOfAI),
})

const aiInYourAppsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-in-your-apps',
  component: withSuspense(AIInYourApps),
})

const aiLawsAndRightsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-laws-and-rights',
  component: withSuspense(AILawsAndRights),
})

const knowledgeCheckRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/quiz/knowledge-check',
  component: withSuspense(KnowledgeCheck),
})

const aiAndSocialMediaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-social-media',
  component: withSuspense(AIAndSocialMedia),
})

const aiForAccessibilityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-for-accessibility',
  component: withSuspense(AIForAccessibility),
})

const learningPathRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learning-path',
  component: withSuspense(LearningPath),
})

const aiAndScientificResearchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-scientific-research',
  component: withSuspense(AIAndScientificResearch),
})

const aiProductivityToolsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-productivity-tools',
  component: withSuspense(AIProductivityTools),
})

const aiAndCopyrightRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-copyright',
  component: withSuspense(AIAndCopyright),
})

const howToUseAISafelyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/how-to-use-ai-safely',
  component: withSuspense(HowToUseAISafely),
})

const aiAndMoneyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-money',
  component: withSuspense(AIAndMoney),
})

const aiAndDemocracyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-democracy',
  component: withSuspense(AIAndDemocracy),
})

const aiAndLanguageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-language',
  component: withSuspense(AIAndLanguage),
})

const aiAndFoodRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-food',
  component: withSuspense(AIAndFood),
})

const aiAndSportRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-sport',
  component: withSuspense(AIAndSport),
})

const aiAndTransportRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-transport',
  component: withSuspense(AIAndTransport),
})

const aiAndArtRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-art',
  component: withSuspense(AIAndArt),
})

const aiAndCybersecurityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-cybersecurity',
  component: withSuspense(AIAndCybersecurity),
})

const aiAndSpaceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-space',
  component: withSuspense(AIAndSpace),
})

const routeTree = rootRoute.addChildren([
  homeRoute,
  githubSignupRoute,
  githubBasicsRoute,
  whatIsAIRoute,
  genesisSystemRoute,
  whatIsAnAPIRoute,
  howThisWasBuiltRoute,
  whatIsCICDRoute,
  inviteRonnyRoute,
  meetTheAgentsRoute,
  nextStepsRoute,
  howToGiveFeedbackRoute,
  liveActivityRoute,
  howAgentsWorkRoute,
  yourJourneyRoute,
  profileRoute,
  versionControlRoute,
  pullRequestRoute,
  myProgressRoute,
  feedbackRoute,
  askRoute,
  certificateRoute,
  whatIsMLRoute,
  howAITrainingWorksRoute,
  neuralNetworkRoute,
  languageModelsRoute,
  aiHistoryRoute,
  aiEverydayLifeRoute,
  aiProsAndConsRoute,
  glossaryRoute,
  learningRecapRoute,
  quizReviewRoute,
  promptEngineeringRoute,
  aiSafetyRoute,
  aiBiasRoute,
  howChatbotsWorkRoute,
  trustingAIRoute,
  aiAndJobsRoute,
  aiAndCreativityRoute,
  aiInHealthcareRoute,
  aiAndEnvironmentRoute,
  aiAndPrivacyRoute,
  aiAndEducationRoute,
  aiAndMisinformationRoute,
  aiAndMentalHealthRoute,
  futureOfAIRoute,
  aiInYourAppsRoute,
  aiLawsAndRightsRoute,
  knowledgeCheckRoute,
  aiAndSocialMediaRoute,
  aiForAccessibilityRoute,
  learningPathRoute,
  aiAndScientificResearchRoute,
  aiProductivityToolsRoute,
  aiAndCopyrightRoute,
  howToUseAISafelyRoute,
  aiAndMoneyRoute,
  aiAndDemocracyRoute,
  aiAndLanguageRoute,
  aiAndFoodRoute,
  aiAndSportRoute,
  aiAndTransportRoute,
  aiAndArtRoute,
  aiAndCybersecurityRoute,
  aiAndSpaceRoute,
])

const hashHistory = createHashHistory()

export const router = createRouter({ routeTree, history: hashHistory })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
