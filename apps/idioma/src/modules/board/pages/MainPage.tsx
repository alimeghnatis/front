/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  graphql,
  useMutation,
  useRelayEnvironment,
  commitLocalUpdate,
} from 'react-relay'
import { useBoardContext } from 'modules/common/components'
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
  const environment = useRelayEnvironment()

  return (
    <>
      <div className="fixed-special">
        <ModeSelector />
      </div>
      <SwitchRoutes
        items={mainRoutes}
        //
      />
    </>
  )
}

export default function (props) {
  return (
    <Template hasSettings>
      <React.Suspense fallback="Loading board">
        <MainPage {...props} />
      </React.Suspense>
    </Template>
  )
}
