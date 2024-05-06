import commonRoutes from './common/routes.js'
import baseHomepageRoutes from './base.homepage/routes.js'
import baseTestRoutes from './base.test/routes.js'
import boardRoutes, { prefetch as boardPrefetchRoutes } from './board/routes.js'
import { secondary as helpSecondaryRoutes } from './help/routes.js'
import { primary as primaryProfileRoutes } from './profile/routes.js'

export default [
  ...baseHomepageRoutes,
  ...baseTestRoutes,
  ...boardRoutes,
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
  ...boardPrefetchRoutes,
  ...commonRoutes,
]
