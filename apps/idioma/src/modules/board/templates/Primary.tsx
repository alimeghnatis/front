import * as React from 'react'
import { useCallback } from 'react'
import BaseTemplate from 'modules/common/templates/Base'
import { useHistory } from 'react-router-dom'
import {
  useBoardContext, SelectSettingsMenu,
} from 'modules/common/components'
import { useTriptychContext } from '@aztlan/ui'
import { SettingsButton } from '../components/index.js'
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

  return (
    <BaseTemplate
      right={<SettingsButton className="span-2" />}
      {...otherProps}
    >
      {children}
    </BaseTemplate>
  )
}

export default PrimaryTemplate
