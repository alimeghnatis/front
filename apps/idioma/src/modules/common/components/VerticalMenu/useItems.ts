import * as React from 'react'
import { useMemo } from 'react'
import {
  LocaleSwitcher,
  ThemeSwitcher,
  useAuthenticationContext,
  PrefetchLink as Link,
} from '@aztlan/ui'

import * as paths from 'modules/paths'
import { useBoardMemberships } from 'modules/common/components'

type ItemType = {
  label          :string;
  url?           :string;
  key?           :string;
  Component?     :React.ComponentType<{ item: ItemType }>;
  items?         :ItemType[];
  displayItemsAs?:'group';
}

type ItemComponentProps = {
  item:ItemType;
}

const useItems = ({
  viewerData,
  userAppendItems = [],
  memberships = null,
} = {}) => {
  const {
    logout, isLogoutInFlight,
  } = useAuthenticationContext()

  // viewerData.isSuperuser

  const rootItem = useMemo(
    () => ({
      label:'Root',
      items:[
        {
          label:'Home',
          url  :'/',
        },
        {
          // url  :paths.generatePath('NEW_BOARD'),
          displayItemsAs:'group',
          items         :[
            {
              label    :'*New Board',
              url      :paths.board.generatePath('NEW_BOARD'),
              Component:({ item }: ItemComponentProps) => React.createElement(
                Link, { to: item.url }, item.label,
              ),
            },
          ],
        },
        memberships && {
          label         :'Boards',
          displayItemsAs:'group',
          items         :memberships?.edges.map((edge) => {
            const { node } = edge
            return {
              label:node.board.name,
              url  :paths.board.generatePath(
                'BOARD_HOME', { board: node.board.id },
              ),
              key      :node.board.id,
              Component:({ item }: ItemComponentProps) => React.createElement(
                Link, { to: item.url }, item.label,
              ),
              items:[
                {
                  displayItemsAs:'group',
                  items         :[
                    {
                      // label:'Board',
                      label:`${node.board.name}`,
                      url  :paths.board.generatePath(
                        'BOARD_HOME2', { board: node.board.id },
                      ),
                      Component:({ item }: ItemComponentProps) => React.createElement(
                        Link,
                        { to: item.url },
                        `${item.label} {node.board.newExpressionsCount ? ' (' + node.board.newExpressionsCount + ')' : ''}`,
                      ),
                    },
                  ],
                },
                {
                  label:'Chat',
                  url  :paths.board.generatePath(
                    'BOARD_CHAT', { board: node.board.id },
                  ),
                  Component:({ item }: ItemComponentProps) => React.createElement(
                    Link, { to: item.url }, item.label,
                  ),
                },
              ],
            }
          }) || [],
        },
        viewerData?.isSuperuser && {
          label         :'*super',
          displayItemsAs:'group',
          items         :[
            {
              label    :'Flags',
              url      :paths.board.generatePath('FLAGS'),
              Component:({ item }: ItemComponentProps) => React.createElement(
                Link, { to: item.url }, item.label,
              ),
            },
          ],
        },
        {
          label         :'test',
          displayItemsAs:'group',
          items         :[
            {
              label:'Maintenance',
              url  :'/maintenance',
            },
            {
              label:'Login',
              url  :'/login',
            },
            {
              label:'Profile',
              url  :'/d/profile',
            },
            {
              label:'Form Test',
              url  :'/formtest',
            },
            {
              label:'File Upload',
              url  :'/fileupload',
            },
            {
              label:'Test 404',
              url  :'/404',
            },
          ],
        },
      ].filter(Boolean),
    }),
    [],
  )

  const appendItems = useMemo(
    () => {
      const items = userAppendItems
      items.push({
        items:[
          { Component: LocaleSwitcher },
          { Component: ThemeSwitcher },
        ],
      })
      if (viewerData) {
        userAppendItems.push({
          label         :'Debug',
          displayItemsAs:'group',
          items         :[
            {
              Component:() => React.createElement(
                'button',
                {
                  onClick :() => logout,
                  disabled:isLogoutInFlight,
                  type    :'button',
                },
                'Logout',
              ),
            },
          ],
        })
      } else {
        userAppendItems.push({
          label         :'Debug',
          displayItemsAs:'group',
          items         :[
            {
              Component:() => React.createElement(
                'div', {}, 'Not logged in',
              ),
            },
          ],
        })
      }
      return items
    }, [
      viewerData,
      userAppendItems,
      logout,
      isLogoutInFlight,
    ],
  )

  return {
    rootItem,
    appendItems,
  }
}

export default useItems
