import * as React from 'react'

import {
  StaticRouter, BrowserRouter,
} from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { IntlProvider } from 'react-intl'
import {
  RelayEnvironmentProvider, graphql,
} from 'react-relay'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  ApplicationProvider,
  useApplicationContext,
  AuthenticationProvider,
} from '@aztlan/ui'
import {
  MUTATION_LOGOUT,
  QUERY_APPLICATION,
  FRAGMENT_VIEWER,
} from './ApplicationQuery.js'

import config from './config.js'
import routes, { prefetchRoutes } from './modules/routes.js'
import * as paths from './modules/paths.js'
import Layout from './modules/Layout.js'

function ThemeWrapper({ children }) {
  const { theme } = useApplicationContext()
  return <main className={`${theme || ''} background far`}>{children}</main>
}

ThemeWrapper.propTypes = { children: PropTypes.any }

function Application({
  locale,
  localeProps,
  messages,
  relayEnvironment,
  ssrHelmetContext, // SSR
  ssrHostname,
  ssrLocation, // SSR
  ssrRouterContext, // SSR
}: InferProps<typeof Application.propTypes>) {
  const Router = ssrLocation ? StaticRouter : BrowserRouter

  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Router
        location={ssrLocation}
        routerContext={ssrRouterContext}
      >
        <IntlProvider
          locale={locale}
          messages={messages}
        >
          <HelmetProvider context={ssrHelmetContext}>
            <React.Suspense fallback="fallback">
              <ApplicationProvider
                value={{
                  locale,
                  ...localeProps,
                }}
                routes={prefetchRoutes}
                // routes={routes}
                maintenance={config.maintenance}
                ssrHostname={ssrHostname}
                QUERY_APPLICATION={QUERY_APPLICATION}
                // applicationQueryVariables={{
                //  organization: 'atest.com',
                //  boardGroupCount :10,
                //  boardGroupCursor:null,
                // }}
                defaultRedirectionAfterLogin={
                  paths.board.absolute.REDIRECT_TO_DEFAULT_BOARD
                }
              >
                <ThemeWrapper>
                  <AuthenticationProvider
                    MUTATION_LOGOUT={MUTATION_LOGOUT}
                    FRAGMENT_VIEWER={FRAGMENT_VIEWER}
                    loginPath="/"
                  >
                    <Layout />
                  </AuthenticationProvider>
                </ThemeWrapper>
              </ApplicationProvider>
            </React.Suspense>
          </HelmetProvider>
        </IntlProvider>
      </Router>
    </RelayEnvironmentProvider>
  )
}

Application.propTypes = {
  locale          :PropTypes.any,
  localeProps     :PropTypes.any,
  messages        :PropTypes.any,
  relayEnvironment:PropTypes.any,
  ssrHelmetContext:PropTypes.any,
  ssrHostname     :PropTypes.string,
  ssrLocation     :PropTypes.string,
  ssrRouterContext:PropTypes.any,
}

export default Application
