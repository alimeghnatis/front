/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import { useLayoutEffect } from 'react'

import { useBoardMemberships } from 'modules/common/components'
import { useHistory } from 'react-router-dom'
import paths from '../paths.js'

function RedirectToDefaultBoard({
  wireframe, ...props
}) {
  const result = useBoardMemberships()

  const boardMemberships = result?.edges || {}

  const history = useHistory()

  const defaultBoard = boardMemberships.find((membership) => {
    const { node } = membership
    return node.role === 'OWNER' && node.board.isDefault
  })

  console.log(
    boardMemberships, defaultBoard,
  )

  useLayoutEffect(
    () => {
      if (defaultBoard) {
        history.push(paths.generatePath(
          'BOARD_HOME', { board: defaultBoard.node.board.id },
        ))
      } else {
        history.push(paths.generatePath('HOME'))
      }
    }, [
      defaultBoard,
      history,
    ],
  )

  return null
}

export default RedirectToDefaultBoard
