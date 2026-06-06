import commonRoutes from './common/routes.js'
import baseHomepageRoutes from './base.homepage/routes.js'
import baseTestRoutes from './base.test/routes.js'
import boardRoutes, {
  secondary as secondaryBoardRoutes,
  prefetch as prefetchBoardRoutes,
} from './board/routes.js'
import { secondary as secondaryHelpRoutes } from './help/routes.js'
import profileRoutes from './profile/routes.js'

export default [
  ...baseHomepageRoutes,
  ...baseTestRoutes,
  ...boardRoutes,
  ...profileRoutes,
  ...commonRoutes,
]

export const secondary = [
  ...secondaryHelpRoutes,
  ...secondaryBoardRoutes,
]

export const prefetchRoutes = [
  ...baseHomepageRoutes,
  ...baseTestRoutes,
  ...prefetchBoardRoutes,
  ...commonRoutes,
]
