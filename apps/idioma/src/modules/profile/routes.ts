import { loadable } from '../common/utils/index.js'
import paths from './paths.js'

export const primary = [
  {
    path     :[paths.absolute.PROFILE],
    component:loadable(() => import(/* webpackChunkName: `app.dashboard` */ './pages/ProfilePage.js')),
    exact    :true,
    isPrivate:true,
  },
]
