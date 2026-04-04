import { createRouter, createRoute, createRootRoute, Outlet, createHashHistory } from '@tanstack/react-router'
import { NavBar } from './components/NavBar'
import { HomePage } from './pages/HomePage'
import { GitHubSignupTutorial } from './pages/GitHubSignupTutorial'
import { GitHubBasics } from './pages/GitHubBasics'
import { WhatIsAI } from './pages/WhatIsAI'
import { GenesisSystem } from './pages/GenesisSystem'
import { WhatIsAnAPI } from './pages/WhatIsAnAPI'
import { HowThisWasBuilt } from './pages/HowThisWasBuilt'
import { WhatIsCICD } from './pages/WhatIsCICD'
import { InviteRonny } from './pages/InviteRonny'
import { MeetTheAgents } from './pages/MeetTheAgents'
import { NextSteps } from './pages/NextSteps'
import { HowToGiveFeedback } from './pages/HowToGiveFeedback'
import { LiveActivity } from './pages/LiveActivity'
import { HowAgentsWork } from './pages/HowAgentsWork'
import { YourJourney } from './pages/YourJourney'
import { ProfileSetup } from './pages/ProfileSetup'
import { VersionControl } from './pages/VersionControl'
import { PullRequest } from './pages/PullRequest'
import { MyProgress } from './pages/MyProgress'
import { FeedbackPage } from './pages/FeedbackPage'
import { AskPage } from './pages/AskPage'
import { Certificate } from './pages/Certificate'
import { WhatIsML } from './pages/WhatIsML'
import { HowAITrainingWorks } from './pages/HowAITrainingWorks'
import { NeuralNetwork } from './pages/NeuralNetwork'
import { LanguageModels } from './pages/LanguageModels'
import { AIHistory } from './pages/AIHistory'
import { AIEverydayLife } from './pages/AIEverydayLife'
import { AIProsAndCons } from './pages/AIProsAndCons'
import { Glossary } from './pages/Glossary'
import { LearningRecap } from './pages/LearningRecap'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <Outlet />
    </>
  ),
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const githubSignupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tutorial/github-signup',
  component: GitHubSignupTutorial,
})

const githubBasicsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/github-basics',
  component: GitHubBasics,
})

const whatIsAIRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/what-is-ai',
  component: WhatIsAI,
})

const genesisSystemRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/genesis-system',
  component: GenesisSystem,
})

const whatIsAnAPIRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/what-is-api',
  component: WhatIsAnAPI,
})

const howThisWasBuiltRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/how-this-was-built',
  component: HowThisWasBuilt,
})

const whatIsCICDRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/what-is-ci-cd',
  component: WhatIsCICD,
})

const inviteRonnyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/invite-ronny',
  component: InviteRonny,
})

const meetTheAgentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/agents',
  component: MeetTheAgents,
})

const nextStepsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/next-steps',
  component: NextSteps,
})

const howToGiveFeedbackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/how-to-give-feedback',
  component: HowToGiveFeedback,
})

const liveActivityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/explore/live-activity',
  component: LiveActivity,
})

const howAgentsWorkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/explore/how-agents-work',
  component: HowAgentsWork,
})

const yourJourneyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/explore/your-journey',
  component: YourJourney,
})

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: ProfileSetup,
})

const versionControlRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/what-is-version-control',
  component: VersionControl,
})

const pullRequestRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/what-is-a-pull-request',
  component: PullRequest,
})

const myProgressRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/my-progress',
  component: MyProgress,
})

const feedbackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/feedback',
  component: FeedbackPage,
})

const askRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ask',
  component: AskPage,
})

const certificateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/certificate',
  component: Certificate,
})

const whatIsMLRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/what-is-machine-learning',
  component: WhatIsML,
})

const howAITrainingWorksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/how-ai-training-works',
  component: HowAITrainingWorks,
})

const neuralNetworkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/neural-network',
  component: NeuralNetwork,
})

const languageModelsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/language-models',
  component: LanguageModels,
})

const aiHistoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ai-history',
  component: AIHistory,
})

const aiEverydayLifeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-everyday-life',
  component: AIEverydayLife,
})

const aiProsAndConsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/ai-pros-and-cons',
  component: AIProsAndCons,
})

const glossaryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/glossary',
  component: Glossary,
})

const learningRecapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learning-recap',
  component: LearningRecap,
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
])

const hashHistory = createHashHistory()

export const router = createRouter({ routeTree, history: hashHistory })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
