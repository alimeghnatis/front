/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  NavigationHeader, useTriptychContext,
} from '@aztlan/ui'
import {
  useLocation, Link,
} from 'react-router-dom'

import styleNames from '@aztlan/bem'

const baseClassName = styleNames.base
const componentClassName = 'secondary-header'

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

  const location = useLocation()

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
      left={(
        <Link to={location.state?.from || '/'}>
          <button
            onClick={toggleNavigation}
            type="button"
          >
            Close
          </button>
        </Link>
      )}
      // {...otherProps}
    >
      {children}
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
