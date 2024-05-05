import commonRoutes from './common/routes.js'
import baseHomepageRoutes from './base.homepage/routes.js'
import baseTestRoutes from './base.test/routes.js'
import dashboardRoutes, { prefetchRoutes as dashboardPrefetchRoutes } from './dashboard/routes.js'
import { secondary as helpSecondaryRoutes } from './help/routes.js'
import { primary as primaryProfileRoutes } from './profile/routes.js'

export default [
  ...baseHomepageRoutes,
  ...baseTestRoutes,
  ...dashboardRoutes,
  ...commonRoutes,
]

export const v2 = [
  ...baseHomepageRoutes,
  ...baseTestRoutes,
  ...primaryProfileRoutes,
  ...commonRoutes,
]

export const secondary = [...helpSecondaryRoutes]

export const prefetchRoutes = [
  ...baseHomepageRoutes,
  ...baseTestRoutes,
  ...dashboardPrefetchRoutes,
  ...commonRoutes,
]
