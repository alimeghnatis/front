/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import {
  NavigationHeader, useTriptychContext, Button,
} from '@aztlan/ui'
import { VerticalMenu } from '../components/index.js'

function NavigationPage({ staticContext }: {
  staticContext?:{ status?: number };
}) {
  const { toggleNavigation } = useTriptychContext()
  return (
    <div
      id="nav-wrapper"
      className="flex"
    >
      <NavigationHeader
        right={(
          <Button
            onClick={toggleNavigation}
            variant="simple"
          >
            Toggle
          </Button>
        )}
      />

      <VerticalMenu />
    </div>
  )
}

export default NavigationPage
