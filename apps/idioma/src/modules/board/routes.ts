/* @aztlan/generator-front 1.4.1 */
import React from 'react'
import { loadable } from '../common/utils/index.js'

import paths from './paths.js'

import Layer from './layer/Main.js'
import { QUERY as QUERY_LANGUAGE_CHOICES } from './components/board/forms/useBoardFormFields.js'
import { QUERY as QUERY_BOARD } from './pages/BoardPage.js'
import { QUERY as QUERY_FLAGS } from './pages/FlagsPage.js'
// import QUERY_VIEW from './pages/ViewQuery.js'

export const primary = [
  {
    path:[
      paths.absolute.HOME,
      paths.absolute.HOME2,
    ],
    component:loadable(() => import(/* webpackChunkName: `app.dashboard` */ './pages/HomePage.js')),
    exact    :true,
    isPrivate:true,
  },
  {
    path     :[paths.absolute.NEW_BOARD],
    component:loadable(() => import(
      /* webpackChunkName: `app.dashboard` */ './pages/CreateBoardPage.js')),
    exact    :true,
    isPrivate:true,
    QUERY    :QUERY_LANGUAGE_CHOICES,
  },
  {
    path:[
      paths.absolute.FLAGS,
      paths.absolute.FLAGS_EXPRESSION_DETAILS,
    ],
    component:loadable(() => import(/* webpackChunkName: `app.dashboard` */ './pages/FlagsPage.js')),
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
    component:loadable(() => import(/* webpackChunkName: `app.dashboard` */ './pages/BoardPage.js')),
    exact    :true,
    isPrivate:true,
    QUERY    :QUERY_BOARD,
  },
  {
    path     :[paths.absolute.BOARD_CHAT],
    component:loadable(() => import(/* webpackChunkName: `app.dashboard` */ './pages/ChatPage.js')),
    exact    :true,
    isPrivate:true,
    QUERY    :QUERY_BOARD,
  },
]

export default primary

export const secondary = [
  {
    path     :[paths.absolute.BOARD_SETTINGS],
    component:loadable(() => import(
      /* webpackChunkName: `app.dashboard` */ './pages/BoardSettingsPage.js')),
    exact    :true,
    isPrivate:true,
    QUERY    :QUERY_LANGUAGE_CHOICES,
  },
]

export const prefetch = [
  ...primary,
  ...secondary,
]
