/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'
import {
  useInsertionEffect, useCallback,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  NavigationHeader, useTriptychContext,
} from '@aztlan/ui'
import {
  useHistory, Link,
} from 'react-router-dom'

import styleNames from '@aztlan/bem'

const baseClassName = styleNames.base
const componentClassName = 'header'

/**
 * description
 * @param {InferProps<typeof Header.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Header
 */
function Header({
  id,
  className: userClassName,
  style,
  children,
}: // ...otherProps

InferProps<typeof Header.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )
  const { toggleNavigation } = useTriptychContext()

  const history = useHistory()

  const { location } = history

  const openHelp = useCallback(
    () => {
      history.push(
        `${location.pathname}/help`, { from: location.pathname },
      )
    }, [location],
  )

  return (
    <NavigationHeader
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      left={<button onClick={toggleNavigation}>Toggle Navigation</button>}
      right={<button onClick={openHelp}>Help</button>}
      // {...otherProps}
    >
      {children}
      <Link to="/profile">Profile</Link>
    </NavigationHeader>
  )
}

Header.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,
}

export default Header
