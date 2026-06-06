import * as React from 'react'
import { Triptych } from '@aztlan/ui'
import Status404Page from './common/pages/Status404.js'
// import routes, { prefetchRoutes } from './routes.js'
import LayoutTestPage from './common/pages/LayoutTestPage.js'
import NavigationPage from './common/pages/NavigationPage.js'
import routes, { secondary } from './routes.js'
import * as paths from './paths.js'
import { BoardProvider } from './common/components/index.js'

function Layout() {
  return (
    <BoardProvider>
      <Triptych
        primaryRoutes={routes}
        secondaryRoutes={secondary} // routes}
        navigation={<NavigationPage />}
        navigationSpan={8}
        navigationSpanDesktop={10}
        secondarySpan={6}
        secondarySpanDesktop={12}
      />
    </BoardProvider>
  )
}

export default Layout
