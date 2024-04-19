import * as React from 'react'
import { useMemo } from 'react'
import {
  NestedNavigation, useApplicationContext,
  useAuthenticationContext,
  PrefetchLink as Link,
} from '@aztlan/ui'
// import { useOrganizationContext } from '@ldmnet/ui'
import { useParams } from 'react-router-dom'
import * as PropTypes from 'prop-types'
import type { InferProps } from 'prop-types'
import paths from '../paths.js'
import { useBoardMemberships } from './hooks/index.js'
// import getRootItem from './navigationConfig.js'
// import type { Item } from '@aztlan/ui/dist/esm/common/Navigation/'

function Navigation({ children }: InferProps<typeof Navigation.propTypes>) {
  const { logout } = useAuthenticationContext()
  const result = useBoardMemberships()
  /*

  const rootItem = useMemo(
    () => getRootItem(result
      ? {
        name           :result.name,
        url            :result.url,
        collectionEdges:result.xOwned?.edges,
      }
      : {}),
    [result],
  ) */

  const rootItem = useMemo(
    () => ({
      label:'Navigation',
      url  :paths.generatePath('HOME'),
      items:[
        {
          label:'Home',
          url  :paths.generatePath('HOME2'),
        },
        {
          // url  :paths.generatePath('NEW_BOARD'),
          displayItemsAs:'group',
          items         :[
            {
              label    :'*New Board',
              url      :paths.generatePath('NEW_BOARD'),
              Component:({ item }) => <Link to={item.url}>{item.label}</Link>,
            },
          ],
        },
        {
          label         :'Boards',
          displayItemsAs:'group',
          items         :result?.edges.map((edge) => {
            const { node } = edge
            return {
              label:node.board.name,
              url  :paths.generatePath(
                'BOARD_HOME', { board: node.board.id },
              ),
              Component:({ item }) => <Link to={item.url}>{item.label}</Link>,
              items    :[
                {
                  displayItemsAs:'group',
                  items         :[
                    {
                      label:'Board',
                      url  :paths.generatePath(
                        'BOARD_HOME2', { board: node.board.id },
                      ),
                      Component:({ item }) => <Link to={item.url}>{item.label}</Link>,
                    },
                  ],
                },
                {
                  label:'Settings',
                  url  :paths.generatePath(
                    'BOARD_SETTINGS', { board: node.board.id },
                  ),
                  Component:({ item }) => <Link to={item.url}>{item.label}</Link>,
                },
              ],
            }
          }) || [],
        },
        {
          label:'Profile',
          url  :paths.generatePath('PROFILE'),
        },
        {
          label    :'Logout',
          Component:() => <button onClick={logout}>Logout</button>,
        },
        /*
        {
          label         :'Themes',
          displayItemsAs:'group',
          items         :[
            {
              label:'Dark',
              url  :'/address2',
            },
            {
              label:'Light',
              url  :'/contact2',
            },
          ],
        }, */
      ],

    }), [
      result,
      result?.edges,
    ],
  )

  return (
    <NestedNavigation
      rootItem={rootItem}
      key={result?.edges[result?.edges.length - 1]?.node?.board.id}
      // key={result?.edges}
    >
      {children}
    </NestedNavigation>
  )
}

Navigation.propTypes = {
  children:PropTypes.node,
  rootItem:PropTypes.object,
}

export default Navigation
