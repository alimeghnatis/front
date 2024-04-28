/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'
import {
  useLocation, Link,
} from 'react-router-dom'
import {
  graphql, useFragment,
} from 'react-relay'
import {
  defineMessages, useIntl,
} from 'react-intl'
import {
  useAuthenticationResource,
  LoginButton,
  useApplicationContext,
  useViewer,
} from '@aztlan/ui'
import Template from '../templates/Base.js'

const m = defineMessages({
  title:{
    // id: `${messagesPrefix}.title`,
    description   :'Message to greet the user.',
    defaultMessage:'Login',
  },
  login:{
    description   :'Message to greet the user.',
    defaultMessage:'Please click on the button to log in.',
  },
})

const FRAGMENT = graphql`
  fragment LoginButtonFragment on Query
    @argumentDefinitions(resource: { type: "String!" }) {
    oAuth2Links(resource: $resource) {
      google
    }
  }
`

function RawLogin({
  data,
  resource,
  initialResource,
}: {
  data           :any;
  resource       :string;
  initialResource:string;
}) {
  const location = useLocation()

  const { formatMessage } = useIntl()
  return (
    <div className="container">
      {location.state?.reason && (
      <p>
        {' '}
        {location.state.reason}
      </p>
      )}
      <LoginButton
        FRAGMENT={FRAGMENT}
        data={data}
        resource={resource}
        initialResource={initialResource}
      />

      <p>{formatMessage(m.login)}</p>
      <p>
        After login you will be redirected to
        {resource}
      </p>
    </div>
  )
}

export { RawLogin }

function Login() {
  const {
    data,
    defaultRedirectionAfterLogin,
    queryVariables: { loginRequestedResource: initialResource },
  } = useApplicationContext()
  const { data: viewerData } = useViewer()
  const resource = useAuthenticationResource()
  if (!viewerData?.id) {
    return (
      <Template title="Login">
        <RawLogin
          data={data}
          resource={resource}
          initialResource={initialResource}
        />
      </Template>
    )
  }
  return (
    <Template title="Login">
      <p>
        You are already logged in.
        <Link to={defaultRedirectionAfterLogin}>Login</Link>
      </p>
    </Template>
  )
}

export default Login
