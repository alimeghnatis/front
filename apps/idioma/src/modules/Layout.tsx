import * as React from 'react'
import { Triptych } from '@aztlan/ui'
import Status404Page from './common/pages/Status404.js'
// import routes, { prefetchRoutes } from './routes.js'
import LayoutTestPage from './common/pages/LayoutTestPage.js'
import NavigationPage from './common/pages/NavigationPage.js'
import {
  v2, secondary,
} from './routes.js'

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
      secondaryRoutes={secondary} // routes}
      navigation={<NavigationPage />}
      navigationSpan={8}
      navigationSpanDesktop={14}
      secondarySpan={6}
      secondarySpanDesktop={10}
    />
  )
}

export default Layout
