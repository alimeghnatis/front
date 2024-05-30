// src/hooks/useRoot.ts

import React, { useMemo } from 'react'
import {
  generatePath, useHistory, Link,
} from 'react-router-dom'
import {
  useApplicationContext, PrefetchLink,
} from '@aztlan/ui'
import { useBoardContext } from '../../Board/hooks/index.js'

/**
 * Custom hook to generate root item for MegaMenuNavigation.
 * @returns {Object} rootItem - Root item object for MegaMenuNavigation.
 */
export default function useRootItem({ memberships }) {
  const { matchRoute } = useApplicationContext()
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
        url  :'/boards',
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
        /*
          ...memberships.edges.map((
            edge: any, i: number,
          ) => {
            const { node } = edge
            const url = generatePath(
              isChat ? chatBoardPath : baseBoardPath, { board: node.board.id },
            )
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
          */
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

  const rootItem = useMemo(
    () => ({
      label:'Navigation',
      url  :'/',
      items:[
        itemMyBoards,
        {
          label:'Ukrainian',
          url  :'/uk',
        },
        {
          label:'Portuguese',
          url  :'/pt',
        },
        {
          label:'Polish',
          url  :'/pl',
        },
      ],
    }),
    [],
  )

  return rootItem
}
