import * as React from 'react'
import { useMemo } from 'react'
import {
  LocaleSwitcher,
  ThemeSwitcher,
  useAuthenticationContext,
} from '@aztlan/ui'

const useItems = ({
  viewerData, userAppendItems = [],
} = {}) => {
  const {
    logout, isLogoutInFlight,
  } = useAuthenticationContext()

  const rootItem = useMemo(
    () => ({
      label:'Root',
      items:[
        {
          label:'Home',
          url  :'/',
        },
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
          label:'Debug',
          items:[
            {
              Component:() => React.createElement(
                'button',
                {
                  onClick :() => logout,
                  disabled:isLogoutInFlight,
                },
                'Logout',
              ),
            },
          ],
        })
      } else {
        userAppendItems.push({
          label:'Debug',
          items:[
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
