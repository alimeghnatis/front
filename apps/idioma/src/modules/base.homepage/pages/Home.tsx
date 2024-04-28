/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import {
  useLazyLoadQuery, graphql,
} from 'react-relay'
import {
  defineMessages, useIntl,
} from 'react-intl'
import {
  useAuthenticationResource,
  useApplicationContext,
  useViewer,
  LoginButton,
} from '@aztlan/ui'
import * as PropTypes from 'prop-types'
import {
  Link, useLocation,
} from 'react-router-dom'
import Template from '../../common/templates/Base.js'

const m = defineMessages({
  title:{
    // id: `${messagesPrefix}.title`,
    defaultMessage:'Homepage',
  },
  welcome:{
    description   :'Message to greet the user.',
    // defaultMessage:'welcome to idioma.io, {name}!!!',
    defaultMessage:'Please login using the following button.',
  },
  afterLogin:{
    description   :'Message to greet the user.',
    defaultMessage:'After login you will be redirected to {resource}.',
  },
})

const FRAGMENT = graphql`
  fragment HomeLoginButtonFragment on Query
    @argumentDefinitions(resource: { type: "String!" })
    @refetchable(queryName: "HomeLoginButtonFragmentRefetchQuery") {
    oAuth2Links(resource: $resource) {
      google
    }
  }
`

function RawHome({
  resource, data, initialResource,
}) {
  const { formatMessage } = useIntl()

  const location = useLocation()

  return (
    <div className="grid container">
      <div className="container">
        {location.state?.reason && (
        <p>
          {' '}
          {location.state.reason}
        </p>
        )}
        <p>{formatMessage(m.welcome)}</p>
        <React.Suspense fallback="Loading link...">
          <LoginButton
            FRAGMENT={FRAGMENT}
            data={data}
            resource={resource}
            initialResource={initialResource}
          />
        </React.Suspense>
      </div>
      <p>
        {formatMessage(
          m.afterLogin, { resource },
        )}
      </p>
    </div>
  )
}

RawHome.propTypes = {
  data    :PropTypes.object,
  resource:PropTypes.string,
}

function Home() {
  const { formatMessage } = useIntl()
  const {
    data,
    defaultRedirectionAfterLogin,
    queryVariables: { loginRequestedResource: initialResource },
  } = useApplicationContext()
  const { data: viewerData } = useViewer()
  const resource = useAuthenticationResource()
  if (!viewerData?.id) {
    return (
      <Template title={formatMessage(m.title)}>
        <RawHome
          resource={resource}
          initialResource={initialResource}
          data={data}
        />
      </Template>
    )
  }
  return (
    <Template title={formatMessage(m.title)}>
      <div className="container">
        <p>You are already logged in.</p>
        <p>
          <Link to={defaultRedirectionAfterLogin}>Access account</Link>
        </p>
      </div>
    </Template>
  )
}

export default Home
