import { loadable } from './utils/index.js'

export default [
  {
    path     :'/404',
    component:loadable(() => import(/* webpackChunkName: `common` */ './pages/Status404Page.js')),
    exact    :true,
  },
  {
    path     :'/maintenance',
    component:loadable(() => import(/* webpackChunkName: `common` */ './pages/MaintenancePage.js')),
    exact    :true,
  },
  {
    path     :'/login',
    component:loadable(() => import(/* webpackChunkName: `common` */ './pages/LoginPage.js')),
    exact    :true,
  },
]
