/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { useMemo } from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import { Link } from 'react-router-dom'
import { graphql } from 'react-relay'
import {
  useAuthenticationContext,
  ThemeSwitcher,
  LocaleSwitcher,
  AuthenticationDebugHeader,
  NavigationDebugHeader,
  NavigationVerticalMenu,
  useViewer,
} from '@aztlan/ui'

import { FRAGMENT_AUTHENTICATION_DEBUG } from '../../../ApplicationQuery.js'

const routeMap = [
  {
    url  :'/',
    label:'Homepage',
  },
  {
    url  :'maintenance',
    label:'Maintenance',
  },
  {
    url  :'login',
    label:'Login',
  },
  {
    url  :'profile',
    label:'Profile',
  },
  {
    url  :'formtest',
    label:'Form Test',
  },
  {
    url  :'fileupload',
    label:'File Upload',
  },
  {
    url  :'404',
    label:'Test 404',
  },
]

function Wrapper({
  title,
  children,
  sidebar,
  appendItems: userAppendItems = [],
}) {
  const {
    logout, isLogoutInFlight,
  } = useAuthenticationContext()

  const { data: viewerData } = useViewer()

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
              Component:() => (
                <button
                  onClick={logout}
                  disabled={isLogoutInFlight}
                >
                  Logout
                </button>
              ),
            // onClick:logout,
            // inFlight:isLogoutInFlight,
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
  return (
    <main
      className="grid"
      style={{ padding: '0 1em' }}
    >
      <div className="container">
        <AuthenticationDebugHeader FRAGMENT={FRAGMENT_AUTHENTICATION_DEBUG} />
        <NavigationDebugHeader
          className="container"
          items={routeMap}
        />
      </div>
      <NavigationVerticalMenu
        className="background near span-8 md-span-3 fit-content"
        // rootItem={{
        //  label:title,
        //  items:routeMap,
        // }}
        rootItem={{
          label:title,
          items:[],
        }}
        appendItems={appendItems}
      />
      <div className="background near span-8 md-span-9 fit-content grid canvas">
        {children}
      </div>
    </main>
  )
}

Wrapper.propTypes = {
  title   :PropTypes.node,
  children:PropTypes.node,
  sidebar :PropTypes.node,
}

function Base({
  title,
  wireframe,
  wireframeTitle,
  children,
}: InferProps<typeof Base.propTypes>): React.ReactElement {
  if (wireframe) {
    return (
      <Wrapper title={wireframeTitle || title}>
        <div style={{ minHeight: '300px' }}>WIREFRAME MODE</div>
      </Wrapper>
    )
  }
  return <Wrapper title={title}>{children}</Wrapper>
}

Base.propTypes = {
  title         :PropTypes.node,
  wireframe     :PropTypes.bool,
  wireframeTitle:PropTypes.node,
  children      :PropTypes.node,
  appendItems   :PropTypes.arrayOf(PropTypes.object),
}

export default Base
