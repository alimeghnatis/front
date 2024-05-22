import * as React from 'react'
import { useCallback } from 'react'
import BaseTemplate from 'modules/common/templates/Base'
import {
  Link, useHistory,
} from 'react-router-dom'
import {
  useBoardContext,
  SelectBoardHeader,
  SelectSettingsMenu,
  SelectBoardMenu,
} from 'modules/common/components'
import {
  Button,
  useTriptychContext,
  NavigationSelectMenu,
  NavigationBreadcrumb,
} from '@aztlan/ui'
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
      title={(
        <NavigationBreadcrumb className="hide-mobile">
          <NavigationBreadcrumb.Item to="/">Home</NavigationBreadcrumb.Item>
          <NavigationBreadcrumb.Item to="/">
            My Boards
          </NavigationBreadcrumb.Item>
          <NavigationBreadcrumb.Item
            childrenAs={SelectBoardMenu}
            spanDesktop={6}
          >
            My Boards
          </NavigationBreadcrumb.Item>
        </NavigationBreadcrumb>
      )
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
