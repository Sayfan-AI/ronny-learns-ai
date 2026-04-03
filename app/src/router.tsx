import { createRouter, createRoute, createRootRoute, Outlet, createHashHistory } from '@tanstack/react-router'
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

const rootRoute = createRootRoute({
  component: () => <Outlet />,
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
  path: '/learn/meet-the-agents',
  component: MeetTheAgents,
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
])

const hashHistory = createHashHistory()

export const router = createRouter({ routeTree, history: hashHistory })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
