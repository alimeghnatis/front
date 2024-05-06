/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import { Link } from 'react-router-dom'
import {
  NestedNavigation, NavigationFooter, useViewer,
} from '@aztlan/ui'
import {
  useFragment, graphql,
} from 'react-relay'
import {
  // BoardProvider,
  // HeaderGroup,
  Navigation,
} from '../components/index.js'

import { useBoardMemberships } from '../../common/components/index.js'
import Template from '../templates/Primary.js'
import paths from '../paths.js'

function Home({
  wireframe, ...props
}) {
  const result = useBoardMemberships()

  const boardMemberships = result?.edges || {}

  return (
    <Template title="board home">
      <div className="container">
        <ul>
          {boardMemberships.map((membership) => {
            const { node } = membership
            return (
              <li key={node.board.url}>
                <Link
                  to={paths.generatePath(
                    'BOARD_HOME', { board: node.board.id },
                  )}
                  key={node.id}
                >
                  {node.role}
                  {' '}
                  {' - '}
                  {node.board.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Template>
  )
}

/*
function Wrapper({
  wireframe, ...props
}) {
  const rootItem = {
    name :'Home',
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
        <Home
          {...props}
          wireframe={wireframe}
        />
      </Navigation>
    </BoardProvider>
  )
} */

// export default Wrapper
export default Home
