/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { useMemo } from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import { Link } from 'react-router-dom'
import { graphql } from 'react-relay'
import {
  AuthenticationDebugHeader, NavigationDebugHeader,
} from '@aztlan/ui'
import { Header } from '../../base.navigation/components/index.js'

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
    url  :'/d/profile',
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
  title, children,
}) {
  return (
    <main className="grid">
      <div className="container">
        <AuthenticationDebugHeader FRAGMENT={FRAGMENT_AUTHENTICATION_DEBUG} />
        <NavigationDebugHeader
          className="container"
          items={routeMap}
        />
        <Header>{title}</Header>
      </div>
      {children}
    </main>
  )
}

Wrapper.propTypes = {
  title   :PropTypes.node,
  children:PropTypes.node,
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
}

export default Base
