/* @aztlan/generator-front 1.4.1 */
import React from 'react'
import { loadable } from '../common/utils/index.js'

import paths from './paths.js'

import Layer from './layer/Main.js'
import { QUERY as QUERY_LANGUAGE_CHOICES } from './components/BoardForm/useBoardFormFields.js'
import { QUERY as QUERY_BOARD } from './pages/Board.js'
import { QUERY as QUERY_FLAGS } from './pages/Flags.js'
// import QUERY_VIEW from './pages/ViewQuery.js'

export const internalRoutes = [
  {
    path:[
      paths.absolute.HOME,
      paths.absolute.HOME2,
    ],
    component:loadable(() => import(/* webpackChunkName: `app.dashboard` */ './pages/Home.js')),
    exact    :true,
    isPrivate:true,
  },
  {
    path     :[paths.absolute.PROFILE],
    component:loadable(() => import(/* webpackChunkName: `app.dashboard` */ './pages/Profile.js')),
    exact    :true,
    isPrivate:true,
  },
  {
    path     :[paths.absolute.NEW_BOARD],
    component:loadable(() => import(/* webpackChunkName: `app.dashboard` */ './pages/NewBoard.js')),
    exact    :true,
    isPrivate:true,
    QUERY    :QUERY_LANGUAGE_CHOICES,
  },
  {
    path     :[paths.absolute.HELP],
    component:loadable(() => import(/* webpackChunkName: `app.dashboard` */ './pages/Help.js')),
    exact    :true,
    isPrivate:true,
  },
  {
    path     :[paths.absolute.BOARD_SETTINGS],
    component:loadable(() => import(/* webpackChunkName: `app.dashboard` */ './pages/BoardSettings.js')),
    exact    :true,
    isPrivate:true,
    QUERY    :QUERY_LANGUAGE_CHOICES,
  },
  {
    path:[
      paths.absolute.FLAGS,
      paths.absolute.FLAGS_EXPRESSION_DETAILS,
    ],
    component:loadable(() => import(/* webpackChunkName: `app.dashboard` */ './pages/Flags.js')),
    exact    :true,
    isPrivate:true,
    QUERY    :QUERY_FLAGS,
  },
  {
    path:[
      paths.absolute.BOARD_HOME,
      paths.absolute.BOARD_HOME2,
      paths.absolute.BOARD_EXPRESSION_DETAILS,
    ],
    component:loadable(() => import(/* webpackChunkName: `app.dashboard` */ './pages/Board.js')),
    exact    :true,
    isPrivate:true,
    QUERY    :QUERY_BOARD,
  },
  {
    path     :[paths.absolute.BOARD_CHAT],
    component:loadable(() => import(/* webpackChunkName: `app.dashboard` */ './pages/Chat.js')),
    exact    :true,
    isPrivate:true,
  },
]

export default [
  {
    path     :[`${paths.absolute.HOME}`],
    component:({
      children, ...props
    }) => React.createElement(
      Layer,
      {
        routes:internalRoutes,
        ...props,
      },
      children,
    ),
    // exact    :true,
    isPrivate:true,
  },
]

export const prefetchRoutes = internalRoutes
