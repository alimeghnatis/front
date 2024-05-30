import * as React from 'react'
import { useCallback } from 'react'
import BaseTemplate from 'modules/common/templates/Base'
import { useHistory } from 'react-router-dom'
import {
  useBoardContext,
  SelectSettingsMenu,
  MegaMenu,
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

  // const { selectSecondary } = useTriptychContext()

  return (
    <BaseTemplate
      title={
        <MegaMenu />
        // title || <SelectBoardHeader />
      }
      right={<SelectSettingsMenu />}
      {...otherProps}
    >
      {children}
    </BaseTemplate>
  )
}

export default PrimaryTemplate
