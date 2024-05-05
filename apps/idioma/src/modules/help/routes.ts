import { loadable } from '../common/utils/index.js'
import paths from './paths.js'

export const secondary = [
  {
    path     :[paths.absolute.HELP],
    component:loadable(() => import(/* webpackChunkName: `app.dashboard` */ './pages/HelpPage.js')),
    exact    :true,
    isPrivate:true,
  },
]
