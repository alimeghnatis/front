/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import {
  NavigationHeader, useTriptychContext,
} from '@aztlan/ui'
import { VerticalMenu } from '../components/index.js'

function NavigationPage({ staticContext }: {
  staticContext?:{ status?: number };
}) {
  const { toggleNavigation } = useTriptychContext()
  return (
    <>
      <NavigationHeader
        right={<button onClick={toggleNavigation}>Toggle</button>}
      />

      <VerticalMenu />
    </>
  )
}

export default NavigationPage
