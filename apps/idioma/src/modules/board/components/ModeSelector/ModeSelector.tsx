/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'
import {
  useInsertionEffect, useMemo, useCallback,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import { Selector } from '@aztlan/ui'
import { useBoardContext } from 'modules/common/components'
import {
  graphql, useFragment,
} from 'react-relay'
import {
  useLocation, useHistory,
} from 'react-router-dom'

import styleNames from '@aztlan/bem'

import paths from '../../paths.js'

const componentClassName = 'mode-selector'

const FRAGMENT = graphql`
  fragment ModeSelectorFragment on BoardNode {
    id
    newExpressionsCount
  }
`

/**
 * description
 * @param {InferProps<typeof ModeSelector.propTypes>} props -
 * @returns {React.ReactElement} - Rendered ModeSelector
 */
function ModeSelector({
  id,
  className: userClassName,
  boardId: userBoardId,
  style,
  data: userData, // to mock
}: // ...otherProps

InferProps<typeof ModeSelector.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const {
    id: boardId, data, isChat,
  } = useBoardContext()

  const result = useFragment(
    FRAGMENT, data || userData,
  )

  const location = useLocation()

  const history = useHistory()

  const board = boardId || userBoardId

  const options = useMemo(
    () => [
      {
        value:board
          ? paths.generatePath(
            'BOARD_CHAT', { board: boardId || userBoardId },
          )
          : 'chat',
        label:'Chat',
      },
      {
        value:!isChat
          ? location.pathname
          : board
            ? paths.generatePath(
              'BOARD_HOME', { board: boardId || userBoardId },
            )
            : 'board',
        label:`Board ${
          result?.newExpressionsCount ? `(${result.newExpressionsCount})` : ''
        }`,
      },
    ],
    [
      isChat,
      location.pathname,
      boardId,
      result?.newExpressionsCount,
    ],
  )

  const value = location.pathname

  const setValue = useCallback(
    (v) => {
      history.push(v)
    },
    [history],
  )

  return (
    <Selector
      className={[
        componentClassName,
        userClassName,
        'manual span-4',
      ]
        .filter(Boolean)
        .join(' ')}
      options={options}
      value={value}
      setValue={setValue}
    />
  )
}

ModeSelector.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The board id : For mocking only */
  boardId:PropTypes.string,
}

export default ModeSelector
