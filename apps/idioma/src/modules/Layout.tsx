import * as React from 'react'
import { Triptych } from '@aztlan/ui'
import Status404Page from './common/pages/Status404.js'
// import routes, { prefetchRoutes } from './routes.js'
import LayoutTestPage from './base.navigation/pages/LayoutTestPage.js'
import NavigationPage from './base.navigation/pages/NavigationPage.js'
import { v2 } from './routes.js'

const routes = [
  {
    path     :'/',
    exact    :true,
    component:LayoutTestPage,
  },
  /*
  {
    path: '*',
    component: Status404Page,
  }, */
]

function Layout() {
  return (
    <Triptych
      primaryRoutes={v2}
      secondaryRoutes={[]} // routes}
      navigation={<NavigationPage />}
      navigationSpan={8}
      secondarySpan={8}
      navigationSpanDesktop={14}
      secondarySpanDesktop={14}
    />
  )
}

export default Layout
