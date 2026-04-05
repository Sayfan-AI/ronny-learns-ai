import { lazy, Suspense } from 'react'
import { createRouter, createRoute, createRootRoute, Outlet, createHashHistory } from '@tanstack/react-router'
import { NavBar } from './components/NavBar'
import { WelcomeTour } from './components/WelcomeTour'
import { MilestoneCelebration } from './components/MilestoneCelebration'
import { ReadingModeButton } from './components/ReadingModeButton'
import { ReadingProgressBar } from './components/ReadingProgressBar'
import { BackToTopButton } from './components/BackToTopButton'

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
const TrueOrFalse = lazy(() => import('./pages/TrueOrFalse').then(m => ({ default: m.TrueOrFalse })))
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
const AIAndClimateChange = lazy(() => import('./pages/AIAndClimateChange').then(m => ({ default: m.AIAndClimateChange })))
const AIAndMusic = lazy(() => import('./pages/AIAndMusic').then(m => ({ default: m.AIAndMusic })))
const Achievements = lazy(() => import('./pages/Achievements').then(m => ({ default: m.Achievements })))
const AIAndRobotics = lazy(() => import('./pages/AIAndRobotics').then(m => ({ default: m.AIAndRobotics })))
const AIAndGaming = lazy(() => import('./pages/AIAndGaming').then(m => ({ default: m.AIAndGaming })))
const Collections = lazy(() => import('./pages/Collections').then(m => ({ default: m.Collections })))
const AIAndJournalism = lazy(() => import('./pages/AIAndJournalism').then(m => ({ default: m.AIAndJournalism })))
const AIAndFashion = lazy(() => import('./pages/AIAndFashion').then(m => ({ default: m.AIAndFashion })))
const AIAndAgriculture = lazy(() => import('./pages/AIAndAgriculture').then(m => ({ default: m.AIAndAgriculture })))
const AIAndMentalWellbeing = lazy(() => import('./pages/AIAndMentalWellbeing').then(m => ({ default: m.AIAndMentalWellbeing })))
const AIAndRetail = lazy(() => import('./pages/AIAndRetail').then(m => ({ default: m.AIAndRetail })))
const AIAndChildren = lazy(() => import('./pages/AIAndChildren').then(m => ({ default: m.AIAndChildren })))
const AIAndTravel = lazy(() => import('./pages/AIAndTravel').then(m => ({ default: m.AIAndTravel })))
const AIAndHousing = lazy(() => import('./pages/AIAndHousing').then(m => ({ default: m.AIAndHousing })))
const AIAndEnergy = lazy(() => import('./pages/AIAndEnergy').then(m => ({ default: m.AIAndEnergy })))
const AIAndElderlyCare = lazy(() => import('./pages/AIAndElderlyCare').then(m => ({ default: m.AIAndElderlyCare })))
const AIAndInsurance = lazy(() => import('./pages/AIAndInsurance').then(m => ({ default: m.AIAndInsurance })))
const AIAndPolicing = lazy(() => import('./pages/AIAndPolicing').then(m => ({ default: m.AIAndPolicing })))
const AIAndTheNHS = lazy(() => import('./pages/AIAndTheNHS').then(m => ({ default: m.AIAndTheNHS })))
const AIAndHiring = lazy(() => import('./pages/AIAndHiring').then(m => ({ default: m.AIAndHiring })))
const AIAndCustomerService = lazy(() => import('./pages/AIAndCustomerService').then(m => ({ default: m.AIAndCustomerService })))
const AIAndWeather = lazy(() => import('./pages/AIAndWeather').then(m => ({ default: m.AIAndWeather })))
const MyNotes = lazy(() => import('./pages/MyNotes').then(m => ({ default: m.MyNotes })))
const AIAndTheEnvironment = lazy(() => import('./pages/AIAndTheEnvironment').then(m => ({ default: m.AIAndTheEnvironment })))
const AIAndTheLaw = lazy(() => import('./pages/AIAndTheLaw').then(m => ({ default: m.AIAndTheLaw })))
const AIAndRelationships = lazy(() => import('./pages/AIAndRelationships').then(m => ({ default: m.AIAndRelationships })))
const AIAndCreativeWriting = lazy(() => import('./pages/AIAndCreativeWriting').then(m => ({ default: m.AIAndCreativeWriting })))
const AIAndPhotography = lazy(() => import('./pages/AIAndPhotography').then(m => ({ default: m.AIAndPhotography })))
const AIAndMentalHealthApps = lazy(() => import('./pages/AIAndMentalHealthApps').then(m => ({ default: m.AIAndMentalHealthApps })))
const Bookmarks = lazy(() => import('./pages/Bookmarks').then(m => ({ default: m.Bookmarks })))
const AIAndScams = lazy(() => import('./pages/AIAndScams').then(m => ({ default: m.AIAndScams })))
const AIAndPets = lazy(() => import('./pages/AIAndPets').then(m => ({ default: m.AIAndPets })))
const AIAndFitnessApps = lazy(() => import('./pages/AIAndFitnessApps').then(m => ({ default: m.AIAndFitnessApps })))
const AIAndDisability = lazy(() => import('./pages/AIAndDisability').then(m => ({ default: m.AIAndDisability })))
const AIAndElections = lazy(() => import('./pages/AIAndElections').then(m => ({ default: m.AIAndElections })))
const AIAndBanking = lazy(() => import('./pages/AIAndBanking').then(m => ({ default: m.AIAndBanking })))
const AIAndManufacturing = lazy(() => import('./pages/AIAndManufacturing').then(m => ({ default: m.AIAndManufacturing })))
const AIAndDrugDiscovery = lazy(() => import('./pages/AIAndDrugDiscovery').then(m => ({ default: m.AIAndDrugDiscovery })))
const AIAndSmartHomes = lazy(() => import('./pages/AIAndSmartHomes').then(m => ({ default: m.AIAndSmartHomes })))
const AIAndTheMilitary = lazy(() => import('./pages/AIAndTheMilitary').then(m => ({ default: m.AIAndTheMilitary })))
const AIAndStreaming = lazy(() => import('./pages/AIAndStreaming').then(m => ({ default: m.AIAndStreaming })))
const AIAndNews = lazy(() => import('./pages/AIAndNews').then(m => ({ default: m.AIAndNews })))
const AIAndSmartCities = lazy(() => import('./pages/AIAndSmartCities').then(m => ({ default: m.AIAndSmartCities })))
const AIAndCharities = lazy(() => import('./pages/AIAndCharities').then(m => ({ default: m.AIAndCharities })))
const AIAndVolunteering = lazy(() => import('./pages/AIAndVolunteering').then(m => ({ default: m.AIAndVolunteering })))
const AIAndAdultEducation = lazy(() => import('./pages/AIAndAdultEducation').then(m => ({ default: m.AIAndAdultEducation })))
const AIAndArchitecture = lazy(() => import('./pages/AIAndArchitecture').then(m => ({ default: m.AIAndArchitecture })))
const AIAndAdvertising = lazy(() => import("./pages/AIAndAdvertising").then(m => ({ default: m.AIAndAdvertising })))
const AIAndEmergencyServices = lazy(() => import("./pages/AIAndEmergencyServices").then(m => ({ default: m.AIAndEmergencyServices })))
const AIAndTheArts = lazy(() => import('./pages/AIAndTheArts').then(m => ({ default: m.AIAndTheArts })))
const AIAndVirtualReality = lazy(() => import('./pages/AIAndVirtualReality').then(m => ({ default: m.AIAndVirtualReality })))
const AIAndSupplyChains = lazy(() => import('./pages/AIAndSupplyChains').then(m => ({ default: m.AIAndSupplyChains })))
const AIAndFilmAndTV = lazy(() => import('./pages/AIAndFilmAndTV').then(m => ({ default: m.AIAndFilmAndTV })))
const AIAndWater = lazy(() => import('./pages/AIAndWater').then(m => ({ default: m.AIAndWater })))
const AIAndSleep = lazy(() => import('./pages/AIAndSleep').then(m => ({ default: m.AIAndSleep })))
const AIAndTheOcean = lazy(() => import('./pages/AIAndTheOcean').then(m => ({ default: m.AIAndTheOcean })))
const AIAndParenting = lazy(() => import('./pages/AIAndParenting').then(m => ({ default: m.AIAndParenting })))
const AIAndLanguageLearning = lazy(() => import('./pages/AIAndLanguageLearning').then(m => ({ default: m.AIAndLanguageLearning })))
const AIAndTheWorkplace = lazy(() => import('./pages/AIAndTheWorkplace').then(m => ({ default: m.AIAndTheWorkplace })))
const AIAndSportAnalytics = lazy(() => import('./pages/AIAndSportAnalytics').then(m => ({ default: m.AIAndSportAnalytics })))
const AIAndConstruction = lazy(() => import('./pages/AIAndConstruction').then(m => ({ default: m.AIAndConstruction })))
const AIAndPersonalFinance = lazy(() => import('./pages/AIAndPersonalFinance').then(m => ({ default: m.AIAndPersonalFinance })))
const AIAndCooking = lazy(() => import('./pages/AIAndCooking').then(m => ({ default: m.AIAndCooking })))
const AIAndGenetics = lazy(() => import('./pages/AIAndGenetics').then(m => ({ default: m.AIAndGenetics })))
const AIAndSmallBusinesses = lazy(() => import('./pages/AIAndSmallBusinesses').then(m => ({ default: m.AIAndSmallBusinesses })))
const AIAndLocalGovernment = lazy(() => import('./pages/AIAndLocalGovernment').then(m => ({ default: m.AIAndLocalGovernment })))
const AIAndWildlifeConservation = lazy(() => import('./pages/AIAndWildlifeConservation').then(m => ({ default: m.AIAndWildlifeConservation })))
const AIAndAddictionAndRecovery = lazy(() => import('./pages/AIAndAddictionAndRecovery').then(m => ({ default: m.AIAndAddictionAndRecovery })))
const AIFactsAndMythsQuiz = lazy(() => import('./pages/AIFactsAndMythsQuiz').then(m => ({ default: m.AIFactsAndMythsQuiz })))
const SeriesPage = lazy(() => import('./pages/SeriesPage').then(m => ({ default: m.SeriesPage })))
const AIAndSportBetting = lazy(() => import('./pages/AIAndSportBetting').then(m => ({ default: m.AIAndSportBetting })))
const AIAndPrisonsAndCriminalJustice = lazy(() => import('./pages/AIAndPrisonsAndCriminalJustice').then(m => ({ default: m.AIAndPrisonsAndCriminalJustice })))
const WhatNextQuiz = lazy(() => import('./pages/WhatNextQuiz').then(m => ({ default: m.WhatNextQuiz })))
const AIAndSpaceExploration = lazy(() => import('./pages/AIAndSpaceExploration').then(m => ({ default: m.AIAndSpaceExploration })))
const AIAndLogisticsAndDelivery = lazy(() => import('./pages/AIAndLogisticsAndDelivery').then(m => ({ default: m.AIAndLogisticsAndDelivery })))
const AIAndTheHome = lazy(() => import('./pages/AIAndTheHome').then(m => ({ default: m.AIAndTheHome })))
const StreakChallengePage = lazy(() => import('./pages/StreakChallengePage').then(m => ({ default: m.StreakChallengePage })))
// Milestone 55–58 pages
const AIAndGigWorkers = lazy(() => import('./pages/AIAndGigWorkers').then(m => ({ default: m.AIAndGigWorkers })))
const AIAndAgeing = lazy(() => import('./pages/AIAndAgeing').then(m => ({ default: m.AIAndAgeing })))
const AIAndCriticalThinking = lazy(() => import('./pages/AIAndCriticalThinking').then(m => ({ default: m.AIAndCriticalThinking })))
const AIAndSportFanExperience = lazy(() => import('./pages/AIAndSportFanExperience').then(m => ({ default: m.AIAndSportFanExperience })))
const AIAndOffensiveCybersecurity = lazy(() => import('./pages/AIAndOffensiveCybersecurity').then(m => ({ default: m.AIAndOffensiveCybersecurity })))
const AIAndRealEstate = lazy(() => import('./pages/AIAndRealEstate').then(m => ({ default: m.AIAndRealEstate })))
const AIAndSocialCare = lazy(() => import('./pages/AIAndSocialCare').then(m => ({ default: m.AIAndSocialCare })))
const AIInTheNews = lazy(() => import('./pages/AIInTheNews').then(m => ({ default: m.AIInTheNews })))
const AIAndImmigration = lazy(() => import('./pages/AIAndImmigration').then(m => ({ default: m.AIAndImmigration })))
const AIAndDentistry = lazy(() => import('./pages/AIAndDentistry').then(m => ({ default: m.AIAndDentistry })))
const AIAndNHSWaitingLists = lazy(() => import('./pages/AIAndNHSWaitingLists').then(m => ({ default: m.AIAndNHSWaitingLists })))
const AIAndSocialMediaAlgorithms = lazy(() => import('./pages/AIAndSocialMediaAlgorithms').then(m => ({ default: m.AIAndSocialMediaAlgorithms })))
const AIAndFraud = lazy(() => import('./pages/AIAndFraud').then(m => ({ default: m.AIAndFraud })))
const AIAndClimateActivism = lazy(() => import('./pages/AIAndClimateActivism').then(m => ({ default: m.AIAndClimateActivism })))
// Milestone 59–64 additional pages
const AIAndMusicIndustry = lazy(() => import('./pages/AIAndMusicIndustry').then(m => ({ default: m.AIAndMusicIndustry })))
const AIAndFashionTech = lazy(() => import('./pages/AIAndFashionTech').then(m => ({ default: m.AIAndFashionTech })))
const StreakPage = lazy(() => import('./pages/StreakPage').then(m => ({ default: m.StreakPage })))
const AIFactsQuiz = lazy(() => import('./pages/AIFactsQuiz').then(m => ({ default: m.AIFactsQuiz })))
// Milestone 65 pages
const AIAndSportNutrition = lazy(() => import('./pages/AIAndSportNutrition').then(m => ({ default: m.AIAndSportNutrition })))
const AIAndMentalHealthChatbots = lazy(() => import('./pages/AIAndMentalHealthChatbots').then(m => ({ default: m.AIAndMentalHealthChatbots })))
const GuessTheAIGame = lazy(() => import('./pages/GuessTheAIGame').then(m => ({ default: m.GuessTheAIGame })))
const AIAndClimateTech = lazy(() => import('./pages/AIAndClimateTech').then(m => ({ default: m.AIAndClimateTech })))
const AIAndCreativeEconomy = lazy(() => import('./pages/AIAndCreativeEconomy').then(m => ({ default: m.AIAndCreativeEconomy })))
// Milestone 66 pages
const AIAndPersonalAssistants = lazy(() => import('./pages/AIAndPersonalAssistants').then(m => ({ default: m.AIAndPersonalAssistants })))
const AIAndLegalSystem = lazy(() => import('./pages/AIAndLegalSystem').then(m => ({ default: m.AIAndLegalSystem })))
const AIAndTheLegalSystem = lazy(() => import('./pages/AIAndTheLegalSystem').then(m => ({ default: m.AIAndTheLegalSystem })))
const AIAndEdTech = lazy(() => import('./pages/AIAndEdTech').then(m => ({ default: m.AIAndEdTech })))
const AIAndEducationTechnology = lazy(() => import('./pages/AIAndEducationTechnology').then(m => ({ default: m.AIAndEducationTechnology })))
const SortItOut = lazy(() => import('./pages/SortItOut').then(m => ({ default: m.SortItOut })))
// Milestone 67 pages
const TrueOrFalseQuiz = lazy(() => import('./pages/TrueOrFalseQuiz').then(m => ({ default: m.TrueOrFalseQuiz })))
// Milestone 68 pages
const AIAndContentModeration = lazy(() => import('./pages/AIAndContentModeration').then(m => ({ default: m.AIAndContentModeration })))
const AITimeline = lazy(() => import('./pages/AITimeline').then(m => ({ default: m.AITimeline })))

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
      <ReadingProgressBar />
      <NavBar />
      <WelcomeTour />
      <MilestoneCelebration />
      <ReadingModeButton />
      <BackToTopButton />
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

const trueOrFalseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/quiz/true-or-false',
  component: withSuspense(TrueOrFalse),
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

const aiAndClimateChangeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-climate-change',
  component: withSuspense(AIAndClimateChange),
})

const aiAndMusicRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-music',
  component: withSuspense(AIAndMusic),
})

const achievementsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/achievements',
  component: withSuspense(Achievements),
})

const aiAndRoboticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-robotics',
  component: withSuspense(AIAndRobotics),
})

const aiAndGamingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-gaming',
  component: withSuspense(AIAndGaming),
})

const collectionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/collections',
  component: withSuspense(Collections),
})

const aiAndJournalismRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-journalism',
  component: withSuspense(AIAndJournalism),
})

const aiAndFashionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-fashion',
  component: withSuspense(AIAndFashion),
})

const aiAndAgricultureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-agriculture',
  component: withSuspense(AIAndAgriculture),
})

const aiAndMentalWellbeingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-mental-wellbeing-at-work',
  component: withSuspense(AIAndMentalWellbeing),
})

const aiAndRetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-retail',
  component: withSuspense(AIAndRetail),
})

const aiAndChildrenRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-children',
  component: withSuspense(AIAndChildren),
})

const aiAndTravelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-travel',
  component: withSuspense(AIAndTravel),
})

const aiAndHousingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-housing',
  component: withSuspense(AIAndHousing),
})

const aiAndEnergyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-energy',
  component: withSuspense(AIAndEnergy),
})

const aiAndElderlyCareRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-elderly-care',
  component: withSuspense(AIAndElderlyCare),
})

const aiAndInsuranceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-insurance',
  component: withSuspense(AIAndInsurance),
})

const aiAndPolicingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-policing',
  component: withSuspense(AIAndPolicing),
})

const aiAndTheNHSRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-the-nhs',
  component: withSuspense(AIAndTheNHS),
})

const aiAndHiringRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-hiring',
  component: withSuspense(AIAndHiring),
})

const aiAndCustomerServiceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-customer-service',
  component: withSuspense(AIAndCustomerService),
})

const aiAndWeatherRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-weather',
  component: withSuspense(AIAndWeather),
})

const myNotesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/my-notes',
  component: withSuspense(MyNotes),
})

const aiAndTheEnvironmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-the-environment',
  component: withSuspense(AIAndTheEnvironment),
})

const aiAndTheLawRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-the-law',
  component: withSuspense(AIAndTheLaw),
})

const aiAndRelationshipsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-relationships',
  component: withSuspense(AIAndRelationships),
})

const aiAndCreativeWritingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-creative-writing',
  component: withSuspense(AIAndCreativeWriting),
})

const aiAndPhotographyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-photography',
  component: withSuspense(AIAndPhotography),
})

const aiAndMentalHealthAppsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-mental-health-apps',
  component: withSuspense(AIAndMentalHealthApps),
})

const bookmarksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/bookmarks',
  component: withSuspense(Bookmarks),
})

const aiAndScamsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-scams',
  component: withSuspense(AIAndScams),
})

const aiAndPetsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-pets',
  component: withSuspense(AIAndPets),
})

const aiAndFitnessAppsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-fitness-apps',
  component: withSuspense(AIAndFitnessApps),
})

const aiAndDisabilityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-disability',
  component: withSuspense(AIAndDisability),
})

const aiAndElectionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-elections',
  component: withSuspense(AIAndElections),
})

const aiAndBankingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-banking',
  component: withSuspense(AIAndBanking),
})

const aiAndManufacturingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-manufacturing',
  component: withSuspense(AIAndManufacturing),
})

const aiAndDrugDiscoveryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-drug-discovery',
  component: withSuspense(AIAndDrugDiscovery),
})

const aiAndSmartHomesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-smart-homes',
  component: withSuspense(AIAndSmartHomes),
})

const aiAndTheMilitaryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-the-military',
  component: withSuspense(AIAndTheMilitary),
})

const aiAndStreamingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-streaming',
  component: withSuspense(AIAndStreaming),
})

const aiAndNewsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-news',
  component: withSuspense(AIAndNews),
})

const aiAndSmartCitiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-smart-cities',
  component: withSuspense(AIAndSmartCities),
})

const aiAndCharitiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-charities',
  component: withSuspense(AIAndCharities),
})

const aiAndVolunteeringRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-volunteering',
  component: withSuspense(AIAndVolunteering),
})

const aiAndAdultEducationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-adult-education',
  component: withSuspense(AIAndAdultEducation),
})

const aiAndArchitectureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-architecture',
  component: withSuspense(AIAndArchitecture),
})

const aiAndAdvertisingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-advertising',
  component: withSuspense(AIAndAdvertising),
})

const aiAndEmergencyServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-emergency-services',
  component: withSuspense(AIAndEmergencyServices),
})

const aiAndVirtualRealityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-virtual-reality',
  component: withSuspense(AIAndVirtualReality),
})

const aiAndSupplyChainsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-supply-chains',
  component: withSuspense(AIAndSupplyChains),
})

const aiAndTheArtsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-the-arts',
  component: withSuspense(AIAndTheArts),
})

const aiAndFilmAndTVRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-film-and-tv',
  component: withSuspense(AIAndFilmAndTV),
})

const aiAndWaterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-water',
  component: withSuspense(AIAndWater),
})

const aiAndSleepRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-sleep',
  component: withSuspense(AIAndSleep),
})

const aiAndTheOceanRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-the-ocean',
  component: withSuspense(AIAndTheOcean),
})

const aiAndParentingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-parenting',
  component: withSuspense(AIAndParenting),
})

const aiAndLanguageLearningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-language-learning',
  component: withSuspense(AIAndLanguageLearning),
})

const aiAndTheWorkplaceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-the-workplace',
  component: withSuspense(AIAndTheWorkplace),
})

const aiAndSportAnalyticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-sport-analytics',
  component: withSuspense(AIAndSportAnalytics),
})

const aiAndConstructionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-construction',
  component: withSuspense(AIAndConstruction),
})

const aiAndPersonalFinanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-personal-finance',
  component: withSuspense(AIAndPersonalFinance),
})

const aiAndCookingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-cooking',
  component: withSuspense(AIAndCooking),
})

const aiAndGeneticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-genetics',
  component: withSuspense(AIAndGenetics),
})

const aiAndSmallBusinessesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-small-businesses',
  component: withSuspense(AIAndSmallBusinesses),
})

const aiAndLocalGovernmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-local-government',
  component: withSuspense(AIAndLocalGovernment),
})

const aiAndWildlifeConservationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-wildlife-conservation',
  component: withSuspense(AIAndWildlifeConservation),
})

const aiAndAddictionAndRecoveryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-addiction-and-recovery',
  component: withSuspense(AIAndAddictionAndRecovery),
})

const seriesPageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/series',
  component: withSuspense(SeriesPage),
})

const aiFactsQuizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/quiz/ai-facts',
  component: withSuspense(AIFactsAndMythsQuiz),
})

const aiAndSportBettingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-sport-betting',
  component: withSuspense(AIAndSportBetting),
})

const aiAndPrisonsAndCriminalJusticeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-prisons-and-criminal-justice',
  component: withSuspense(AIAndPrisonsAndCriminalJustice),
})

const whatNextQuizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/quiz/what-next',
  component: withSuspense(WhatNextQuiz),
})

const aiAndSpaceExplorationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-space-exploration',
  component: withSuspense(AIAndSpaceExploration),
})

const aiAndLogisticsAndDeliveryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-logistics-and-delivery',
  component: withSuspense(AIAndLogisticsAndDelivery),
})

const aiAndTheHomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-the-home',
  component: withSuspense(AIAndTheHome),
})

const streakChallengeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/streak',
  component: withSuspense(StreakChallengePage),
})

// Milestone 55–58 routes
const aiAndGigWorkersRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-gig-workers', component: withSuspense(AIAndGigWorkers) })
const aiAndAgeingRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-ageing', component: withSuspense(AIAndAgeing) })
const aiAndCriticalThinkingRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-critical-thinking', component: withSuspense(AIAndCriticalThinking) })
const aiAndSportFanExperienceRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-sport-fan-experience', component: withSuspense(AIAndSportFanExperience) })
const aiAndOffensiveCybersecurityRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-offensive-cybersecurity', component: withSuspense(AIAndOffensiveCybersecurity) })
const aiAndRealEstateRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-real-estate', component: withSuspense(AIAndRealEstate) })
const aiAndSocialCareRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-social-care', component: withSuspense(AIAndSocialCare) })
const aiInTheNewsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-in-the-news', component: withSuspense(AIInTheNews) })
const aiAndImmigrationRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-immigration', component: withSuspense(AIAndImmigration) })
const aiAndDentistryRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-dentistry', component: withSuspense(AIAndDentistry) })
const aiAndNHSWaitingListsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-nhs-waiting-lists', component: withSuspense(AIAndNHSWaitingLists) })
const aiAndSocialMediaAlgorithmsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-social-media-algorithms', component: withSuspense(AIAndSocialMediaAlgorithms) })
const aiAndFraudRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-fraud', component: withSuspense(AIAndFraud) })
const aiAndClimateActivismRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-climate-activism', component: withSuspense(AIAndClimateActivism) })
// Milestone 59–64 additional routes
const aiAndMusicIndustryRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-music-industry', component: withSuspense(AIAndMusicIndustry) })
const aiAndFashionTechRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-fashion-tech', component: withSuspense(AIAndFashionTech) })
const streakPageRoute = createRoute({ getParentRoute: () => rootRoute, path: '/streak-page', component: withSuspense(StreakPage) })
const aiFactsQuiz2Route = createRoute({ getParentRoute: () => rootRoute, path: '/quiz/ai-facts-quiz', component: withSuspense(AIFactsQuiz) })
// Milestone 65 routes
const aiAndSportNutritionRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-sport-nutrition', component: withSuspense(AIAndSportNutrition) })
const aiAndMentalHealthChatbotsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-mental-health-chatbots', component: withSuspense(AIAndMentalHealthChatbots) })
const guessTheAIGameRoute = createRoute({ getParentRoute: () => rootRoute, path: '/quiz/guess-the-ai', component: withSuspense(GuessTheAIGame) })
const aiAndClimateTechRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-climate-tech', component: withSuspense(AIAndClimateTech) })
const aiAndCreativeEconomyRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-creative-economy', component: withSuspense(AIAndCreativeEconomy) })
// Milestone 66 routes
const aiAndPersonalAssistantsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-personal-assistants', component: withSuspense(AIAndPersonalAssistants) })
const aiAndLegalSystemRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-legal-system', component: withSuspense(AIAndLegalSystem) })
const aiAndEdTechRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-edtech', component: withSuspense(AIAndEdTech) })
const aiAndEducationTechnologyRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-education-technology', component: withSuspense(AIAndEducationTechnology) })
const aiAndTheLegalSystemRoute = createRoute({ getParentRoute: () => rootRoute, path: '/learn/ai-and-the-legal-system', component: withSuspense(AIAndTheLegalSystem) })
const sortItOutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/quiz/sort-it-out', component: withSuspense(SortItOut) })
// Milestone 67 routes
const trueOrFalseQuizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/quiz/true-or-false',
  component: withSuspense(TrueOrFalseQuiz),
})
// Milestone 68 routes
const aiAndContentModerationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-and-content-moderation',
  component: withSuspense(AIAndContentModeration),
})

const aiTimelineRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/quiz/ai-timeline',
  component: withSuspense(AITimeline),
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
  trueOrFalseRoute,
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
  aiAndClimateChangeRoute,
  aiAndMusicRoute,
  achievementsRoute,
  aiAndRoboticsRoute,
  aiAndGamingRoute,
  collectionsRoute,
  aiAndJournalismRoute,
  aiAndFashionRoute,
  aiAndAgricultureRoute,
  aiAndMentalWellbeingRoute,
  aiAndRetailRoute,
  aiAndChildrenRoute,
  aiAndTravelRoute,
  aiAndHousingRoute,
  aiAndEnergyRoute,
  aiAndElderlyCareRoute,
  aiAndInsuranceRoute,
  aiAndPolicingRoute,
  aiAndTheNHSRoute,
  aiAndHiringRoute,
  aiAndCustomerServiceRoute,
  aiAndWeatherRoute,
  myNotesRoute,
  aiAndTheEnvironmentRoute,
  aiAndTheLawRoute,
  aiAndRelationshipsRoute,
  aiAndCreativeWritingRoute,
  aiAndPhotographyRoute,
  aiAndMentalHealthAppsRoute,
  bookmarksRoute,
  aiAndScamsRoute,
  aiAndPetsRoute,
  aiAndFitnessAppsRoute,
  aiAndDisabilityRoute,
  aiAndElectionsRoute,
  aiAndBankingRoute,
  aiAndManufacturingRoute,
  aiAndDrugDiscoveryRoute,
  aiAndSmartHomesRoute,
  aiAndTheMilitaryRoute,
  aiAndStreamingRoute,
  aiAndNewsRoute,
  aiAndSmartCitiesRoute,
  aiAndCharitiesRoute,
  aiAndVolunteeringRoute,
  aiAndAdultEducationRoute,
  aiAndArchitectureRoute,
  aiAndTheArtsRoute,
  aiAndAdvertisingRoute,
  aiAndEmergencyServicesRoute,
  aiAndVirtualRealityRoute,
  aiAndSupplyChainsRoute,
  aiAndFilmAndTVRoute,
  aiAndWaterRoute,
  aiAndSleepRoute,
  aiAndTheOceanRoute,
  aiAndParentingRoute,
  aiAndLanguageLearningRoute,
  aiAndTheWorkplaceRoute,
  aiAndSportAnalyticsRoute,
  aiAndConstructionRoute,
  aiAndPersonalFinanceRoute,
  aiAndCookingRoute,
  aiAndGeneticsRoute,
  aiAndSmallBusinessesRoute,
  aiAndLocalGovernmentRoute,
  aiAndWildlifeConservationRoute,
  aiAndAddictionAndRecoveryRoute,
  seriesPageRoute,
  aiFactsQuizRoute,
  aiAndSportBettingRoute,
  aiAndPrisonsAndCriminalJusticeRoute,
  whatNextQuizRoute,
  aiAndSpaceExplorationRoute,
  aiAndLogisticsAndDeliveryRoute,
  aiAndTheHomeRoute,
  streakChallengeRoute,
  // Milestone 55–58
  aiAndGigWorkersRoute,
  aiAndAgeingRoute,
  aiAndCriticalThinkingRoute,
  aiAndSportFanExperienceRoute,
  aiAndOffensiveCybersecurityRoute,
  aiAndRealEstateRoute,
  aiAndSocialCareRoute,
  aiInTheNewsRoute,
  aiAndImmigrationRoute,
  aiAndDentistryRoute,
  aiAndNHSWaitingListsRoute,
  aiAndSocialMediaAlgorithmsRoute,
  aiAndFraudRoute,
  aiAndClimateActivismRoute,
  // Milestone 59–64 additional
  aiAndMusicIndustryRoute,
  aiAndFashionTechRoute,
  streakPageRoute,
  aiFactsQuiz2Route,
  // Milestone 65
  aiAndSportNutritionRoute,
  aiAndMentalHealthChatbotsRoute,
  guessTheAIGameRoute,
  aiAndClimateTechRoute,
  aiAndCreativeEconomyRoute,
  // Milestone 66
  aiAndPersonalAssistantsRoute,
  aiAndLegalSystemRoute,
  aiAndEdTechRoute,
  aiAndEducationTechnologyRoute,
  aiAndTheLegalSystemRoute,
  sortItOutRoute,
  // Milestone 67
  trueOrFalseQuizRoute,
  // Milestone 68
  aiAndContentModerationRoute,
  aiTimelineRoute,
])

const hashHistory = createHashHistory()

export const router = createRouter({ routeTree, history: hashHistory })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
