import { createRouter, createRoute, createRootRoute, Outlet, createHashHistory } from '@tanstack/react-router'
import { NavBar } from './components/NavBar'
import { HomePage } from './pages/HomePage'
import { GitHubSignupTutorial } from './pages/GitHubSignupTutorial'
import { GitHubBasics } from './pages/GitHubBasics'
import { WhatIsAI } from './pages/WhatIsAI'
import { GenesisSystem } from './pages/GenesisSystem'
import { WhatIsAnAPI } from './pages/WhatIsAnAPI'
import { HowThisWasBuilt } from './pages/HowThisWasBuilt'
import { InviteRonny } from './pages/InviteRonny'
import { NextSteps } from './pages/NextSteps'
import { LiveActivity } from './pages/LiveActivity'
import { HowAgentsWork } from './pages/HowAgentsWork'
import { YourJourney } from './pages/YourJourney'

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

const inviteRonnyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/invite-ronny',
  component: InviteRonny,
})

const nextStepsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn/next-steps',
  component: NextSteps,
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

const routeTree = rootRoute.addChildren([
  homeRoute,
  githubSignupRoute,
  githubBasicsRoute,
  whatIsAIRoute,
  genesisSystemRoute,
  whatIsAnAPIRoute,
  howThisWasBuiltRoute,
  inviteRonnyRoute,
  nextStepsRoute,
  liveActivityRoute,
  howAgentsWorkRoute,
  yourJourneyRoute,
])

const hashHistory = createHashHistory()

export const router = createRouter({ routeTree, history: hashHistory })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
