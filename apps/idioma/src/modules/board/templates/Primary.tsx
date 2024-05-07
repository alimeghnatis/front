import * as React from 'react'
import { useCallback } from 'react'
import BaseTemplate from 'modules/common/templates/Base'
import {
  Link, useHistory,
} from 'react-router-dom'
import {
  useBoardContext, SelectBoardHeader,
} from 'modules/common/components'
import { useTriptychContext } from '@aztlan/ui'
import paths from '../paths.js'

function PrimaryTemplate({
  children,
  title,
  hasSettings = false,
  ...otherProps
}) {
  const {
    id: boardID, data,
  } = useBoardContext()

  const history = useHistory()

  const { selectSecondary } = useTriptychContext()

  return (
    <BaseTemplate
      title={title || <SelectBoardHeader />}
      right={
        hasSettings && (
          <button onClick={() => selectSecondary('board-settings')}>
            Settings
          </button>
        )
      }
      {...otherProps}
    >
      {children}
    </BaseTemplate>
  )
}

export default PrimaryTemplate
