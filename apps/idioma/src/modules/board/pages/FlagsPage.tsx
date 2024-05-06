/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import { Link } from 'react-router-dom'
import {
  NestedNavigation, NavigationFooter, useViewer,
} from '@aztlan/ui'
import {
  useLazyLoadQuery, graphql,
} from 'react-relay'
import {
  // BoardProvider,
  // HeaderGroup,
  Navigation,
  useBoardMemberships,
  DebugGroup,
} from '../components/index.js'

const QUERY = graphql`
  query FlagsPageQuery {
    ...DebugGroupFragment
  }
`

export { QUERY }

function Flags({
  wireframe, ...props
}) {
  const data = useLazyLoadQuery(
    QUERY, {},
  )

  return (
    <>
      <h1>FLAGS</h1>
      <DebugGroup
        data={data}
        style={{ overflow: 'auto' }}
      />
    </>
  )
}

/*
function Wrapper({
  wireframe, ...props
}) {
  const rootItem = {
    name :'Flags',
    url  :'home',
    items:[
      {
        label:'Dashboard',
        url  :'dashboard',
      },
      {
        label:'Board',
        url  :'board',
      },
    ],
  }
  return (
    <BoardProvider>
      <Navigation rootItem={rootItem}>
        <Flags
          {...props}
          wireframe={wireframe}
        />
      </Navigation>
    </BoardProvider>
  )
} */

// export default Wrapper
export default function (props) {
  return (
    <React.Suspense fallback="Loading flags">
      <Flags {...props} />
    </React.Suspense>
  )
}
