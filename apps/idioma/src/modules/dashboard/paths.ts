import { getRoutes as getPaths } from '@aztlan/ui'

export const BOARD_PARAM = ':board([0-9a-z-=.]{3,120})'
export const GLOBAL_ID_PARAM = ':globalId([0-9a-z-.=]{15,100})'
export const EXPRESSION_PARAM = ':expression([0-9a-z-.=]{15,100})'
export const SLUG_PARAM = ':slug([0-9a-z_-]{0,14})'

export default getPaths(
  '/d', {
    HOME     :'/',
    HOME2    :'/home',
    PROFILE  :'/profile',
    NEW_BOARD:'/new-board',
    HELP     :'/help',

    BOARD_HOME              :`/${BOARD_PARAM}`,
    BOARD_HOME2             :`/${BOARD_PARAM}/home`,
    BOARD_EXPRESSION_DETAILS:`/${BOARD_PARAM}/${EXPRESSION_PARAM}/${SLUG_PARAM}`,
    BOARD_CHAT              :`/${BOARD_PARAM}/chat`,
    FLAGS                   :'/flags',
    FLAGS_EXPRESSION_DETAILS:`/flags/${EXPRESSION_PARAM}`,
    BOARD_SETTINGS          :`/${BOARD_PARAM}/settings`,
  },
)
