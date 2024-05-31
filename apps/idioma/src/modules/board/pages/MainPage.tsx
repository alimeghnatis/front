/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import {
  graphql, useRelayEnvironment,
} from 'react-relay'
import { SwitchRoutes } from '@aztlan/ui'
import Template from '../templates/Primary.js'
import { ModeSelector } from '../components/index.js'
import { mainRoutes } from '../routes.js'

const QUERY = graphql`
  query MainPageBoardSingleQuery($board: ID!) {
    board(id: $board) {
      id
      name
      created
      updated
      newExpressionsCount
      ...BoardFragment
      ...BoardUpdateFormFragment
      ...VariantBoardFragment
      ...ChatFragment
    }
  }
`
export { QUERY }

function MainPage() {
  return <SwitchRoutes items={mainRoutes} />
}

export default function (props) {
  return (
    <Template
      hasSettings
      mobileTitle="Board"
      absoluteHeaderElements={(
        <div
          style={{
            display       :'flex',
            justifyContent:'center',
          }}
        >
          <ModeSelector />
        </div>
      )}
    >
      <React.Suspense fallback="Loading board">
        <MainPage {...props} />
      </React.Suspense>
    </Template>
  )
}
