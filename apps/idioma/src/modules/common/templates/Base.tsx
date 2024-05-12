/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import { useMemo } from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import { Link } from 'react-router-dom'
import { graphql } from 'react-relay'
import {
  AuthenticationDebugHeader,
  NavigationDebugHeader,
  useViewer,
  NotificationGroup,
  useTriptychContext,
} from '@aztlan/ui'
import {
  Header, SearchBoardHeader,
} from '../components/index.js'

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
  title = null,
  children,
  right,
  beforeHeader,
  absoluteHeaderElements,
}) {
  const { data } = useViewer()
  const { focus } = useTriptychContext()
  return (
    <main className="flex">
      <div className="relative">
        {beforeHeader}
        {data?.isSuperuser && <SearchBoardHeader />}
        <AuthenticationDebugHeader FRAGMENT={FRAGMENT_AUTHENTICATION_DEBUG} />
        <NavigationDebugHeader
          className="container"
          items={routeMap}
        />
        <Header right={right}>{title}</Header>
        <div className="abs-special span-6 md-span-4 manual ">
          {absoluteHeaderElements}
          {focus === 1 && <NotificationGroup />}
        </div>
      </div>

      {children}
    </main>
  )
}

Wrapper.propTypes = {
  title                 :PropTypes.node,
  children              :PropTypes.node,
  right                 :PropTypes.node,
  beforeHeader          :PropTypes.node,
  absoluteHeaderElements:PropTypes.node,
}

function Base({
  title,
  wireframe,
  wireframeTitle,
  children,
  ...otherProps
}: InferProps<typeof Base.propTypes>): React.ReactElement {
  if (wireframe) {
    return (
      <Wrapper
        title={wireframeTitle || title}
        {...otherProps}
      >
        <div style={{ minHeight: '300px' }}>WIREFRAME MODE</div>
      </Wrapper>
    )
  }
  return (
    <Wrapper
      title={title}
      {...otherProps}
    >
      {children}
    </Wrapper>
  )
}

Base.propTypes = {
  title         :PropTypes.node,
  wireframe     :PropTypes.bool,
  wireframeTitle:PropTypes.node,
  children      :PropTypes.node,
}

export default Base
