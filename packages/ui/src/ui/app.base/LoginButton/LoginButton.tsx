/* @aztlan/generator-front 0.2.0 */
import * as React from 'react'

import {
  useInsertionEffect, useEffect,
} from 'react'

import * as PropTypes from 'prop-types'

import styleNames from '@aztlan/bem'

import {
  useRefetchableFragment, graphql,
} from 'react-relay'
import { useAuthenticationResource } from '../Authentication/index.js'
// import { LoginButtonFragment$data } from './__generated__/LoginButtonFragment.graphql.js'

// Local Definitions
const baseClassName = styleNames.base
const componentClassName = 'login-button'

/**
 * This is the LoginButton component description.
 */
function LoginButton({
  id,
  className: userClassName,
  style,
  FRAGMENT,
  data,
  resource,
  initialResource,
  ...otherProps
}) {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const [
    { oAuth2Links },
    refetch,
  ] = useRefetchableFragment(
    FRAGMENT,
    data,
  ) as any
  const { google } = oAuth2Links

  useEffect(
    () => {
      if (initialResource !== resource) {
        refetch({ resource })
      }
    }, [
      initialResource,
      resource,
      refetch,
    ],
  )

  return (
    <button
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <a href={google}>Login with Google</a>
    </button>
  )
}

LoginButton.propTypes = {
  /**
   * The HTML id for this element
   */
  id:PropTypes.string,

  /**
   * The HTML class names for this element
   */
  className:PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style:PropTypes.objectOf(PropTypes.string),

  /**
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * The fragment to use
   */
  FRAGMENT:PropTypes.any,

  /**
   * The data to use
   */
  data:PropTypes.any,

  /**
   * The resource to use
   */
  resource:PropTypes.string,
}

export default LoginButton
