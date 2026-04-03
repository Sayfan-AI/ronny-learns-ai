import { createRouter, createRoute, createRootRoute, Outlet, createHashHistory } from '@tanstack/react-router'
import { HomePage } from './pages/HomePage'
import { GitHubSignupTutorial } from './pages/GitHubSignupTutorial'

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

const routeTree = rootRoute.addChildren([homeRoute, githubSignupRoute])

const hashHistory = createHashHistory()

export const router = createRouter({ routeTree, history: hashHistory })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
