// src/hooks/useRoot.ts

import React, { useMemo } from 'react'
import {
  generatePath, useHistory, Link,
} from 'react-router-dom'
import {
  Button,
  useApplicationContext,
  PrefetchLink,
  useAuthenticationContext,
} from '@aztlan/ui'
import * as paths from 'modules/paths'
import themes from 'modules/common/themes'
import { useBoardContext } from '../../Board/hooks/index.js'

/**
 * Custom hook to generate root item for MegaMenuNavigation.
 * @returns {Object} rootItem - Root item object for MegaMenuNavigation.
 */
export default function useRootItem({ memberships }) {
  const {
    logout, isLogoutInFlight,
  } = useAuthenticationContext()
  const {
    matchRoute, isTheme, setTheme, theme,
  } = useApplicationContext()
  const LinkType = matchRoute ? PrefetchLink : Link
  const {
    baseBoardPath,
    currentBoardId,
    createBoardPath,
    chatBoardPath,
    isChat,
  } = useBoardContext()

  const history = useHistory()
  const isCreating = history.location.pathname === createBoardPath

  const itemMyBoards = useMemo(
    () => {
      const rootItem = {
        label:'My boards',
        key  :'my-boards',
        url  :paths.board.generatePath('HOME'),
        items:[
          {
            key      :'new',
            label    :'Create New Board',
            url      :createBoardPath,
            Component:({ item }: { item: { url: string; label: string } }) => React.createElement(
              LinkType, { to: item.url }, item.label,
            ),
            active:isCreating,
          },
          ...memberships.edges.map((
            edge: any, i: number,
          ) => {
            const { node } = edge
            const url = baseBoardPath
              ? generatePath(
                isChat ? chatBoardPath : baseBoardPath, { board: node.board.id },
              )
              : node.board.id // For testing, should always be generatePath on app
            return {
              key      :node.board.id,
              label    :node.board.name,
              className:i === 0 ? 'first' : '',
              url,
              Component:({ item }: { item: { url: string; label: string } }) => React.createElement(
                LinkType, { to: item.url }, item.label,
              ),
              active:node.board.id === currentBoardId,
            }
          }),
        ],
      }

      return rootItem
    }, [
      memberships,
      LinkType,
      isChat,
      baseBoardPath,
      chatBoardPath,
      createBoardPath,
      currentBoardId,
      isCreating,
    ],
  )

  const accountItem = useMemo(
    () => ({
      label:'Account',
      url  :'/account',
      items:[
        {
          label:'Profile',
          url  :paths.profile.generatePath('PROFILE'),
        },
        {
          key      :'logout',
          Component:() => React.createElement(
            Button,
            {
              onClick :logout,
              disabled:isLogoutInFlight,
              variant :'natural',
              // color   :'near',
            },
            'Logout',
          ),
        },
      ],
    }),
    [isLogoutInFlight],
  )

  const settingsItem = useMemo(
    () => ({
      label:'Settings',
      key  :'settings',
      items:[
        {
          label:'Theme',
          key  :'theme',
          items:Object.entries(themes).map(([
            key,
            value,
          ]) => ({
            key,
            Component:() => React.createElement(
              Button,
              {
                onClick:() => setTheme(key),
                variant:'natural',
                style  :{
                  background:isTheme?.(key) ? 'var(--selected)' : 'inherit',
                  color     :isTheme?.(key) ? 'var(--on-selected)' : 'inherit',
                },
              },
              value,
            ),
          })),
        },
      ],
    }),
    [
      isTheme,
      theme,
    ],
  )

  const rootItem = useMemo(
    () => ({
      label:'Navigation',
      url  :'/',
      items:[
        itemMyBoards,
        accountItem,
        settingsItem,
      ],
    }),
    [
      itemMyBoards,
      accountItem,
      settingsItem,
    ],
  )

  return rootItem
}
