import * as React from 'react'
import { useMemo } from 'react'
import {
  useAuthenticationContext,
  Button,
  useTriptychContext,
  useApplicationContext,
} from '@aztlan/ui'

import { useBoardContext } from '../../Board/hooks/index.js'

type ItemType = {
  label          :string;
  url?           :string;
  key?           :string;
  Component?     :React.ComponentType<{ item: ItemType }>;
  items?         :ItemType[];
  displayItemsAs?:'group';
  disabled?      :boolean;
}

const defaultThemes = {
  'dark-theme' :'Dark',
  'light-theme':'Light',
  'green-theme':'Green',
  'blue-theme' :'Blue',
}

type UseItemsProps = {
  viewerData     :any;
  currentBoardId?:string;
}

const useItems = ({ viewerData }: UseItemsProps) => {
  const {
    logout, isLogoutInFlight,
  } = useAuthenticationContext()
  const { currentBoardId } = useBoardContext()
  const { selectSecondary } = useTriptychContext()
  const {
    isTheme, setTheme,
  } = useApplicationContext()

  const hasBoardSettings = !!currentBoardId

  const rootItem = useMemo(
    () => ({
      items:[
        hasBoardSettings && {
          Component:() => React.createElement(
            Button,
            {
              onClick:() => selectSecondary('board-settings'),
              variant:'borderless',
              color  :'near',
            },
            'Board Settings',
          ),
        },
        {
          label         :'Help',
          displayItemsAs:'group',
          items         :[
            {
              Component:() => React.createElement(
                Button,
                {
                  onClick:() => selectSecondary('help'),
                  variant:'borderless',
                  color  :'near',
                },
                'Instructions',
              ),
            },
          ],
        },
        {
          label         :'Theme',
          displayItemsAs:'group',
          items         :Object.entries(defaultThemes).map(([
            key,
            value,
          ]) => ({
            Component:() => React.createElement(
              Button,
              {
                onClick:() => setTheme(key),
                variant:'borderless',
                color  :isTheme?.(key) ? 'important' : 'near',
              },
              value,
            ),
          })),
        },
        viewerData
          ? {
            label         :'Debug',
            displayItemsAs:'group',
            items         :[
              {
                Component:() => React.createElement(
                  Button,
                  {
                    onClick :logout,
                    disabled:isLogoutInFlight,
                    variant :'borderless',
                    color   :'near',
                  },
                  'Logout',
                ),
              },
            ],
          }
          : {
            label         :'Debug',
            displayItemsAs:'group',
            items         :[
              {
                Component:() => React.createElement(
                  'div', {}, 'Not logged in',
                ),
                disabled:true,
              },
            ],
          },
      ].filter(Boolean),
    }),
    [
      viewerData,
      currentBoardId,
      logout,
      isLogoutInFlight,
      selectSecondary,
      setTheme,
      isTheme,
    ],
  )

  return { rootItem }
}

export default useItems
