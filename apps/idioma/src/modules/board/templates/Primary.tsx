import * as React from 'react'
import { useCallback } from 'react'
import BaseTemplate from 'modules/common/templates/Base'
import {
  Link, useHistory,
} from 'react-router-dom'
import {
  useBoardContext, SelectBoardHeader,
} from 'modules/common/components'
import paths from '../paths.js'

function PrimaryTemplate({
  children, title, hasSettings = false,
}) {
  const {
    id: boardID, data,
  } = useBoardContext()

  const history = useHistory()

  const navigateToSettings = useCallback(
    () => {
      history.push(
        paths.generatePath(
          'BOARD_SETTINGS', { board: boardID },
        ), { from: history.location.pathname },
      )
    }, [
      boardID,
      history,
    ],
  )

  return (
    <BaseTemplate
      title={title || <SelectBoardHeader />}
      right={
        hasSettings && <button onClick={navigateToSettings}>Settings</button>
      }
    >
      {children}
    </BaseTemplate>
  )
}

export default PrimaryTemplate
