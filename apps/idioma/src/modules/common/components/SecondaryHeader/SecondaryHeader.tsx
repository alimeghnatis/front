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
 * @param {InferProps<typeof SecondaryHeader.propTypes>} props -
 * @returns {React.ReactElement} - Rendered SecondaryHeader
 */
function SecondaryHeader({
  id,
  className: userClassName,
  style,
  children,
  ...otherProps
}: InferProps<typeof SecondaryHeader.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )
  const { setFocus } = useTriptychContext()

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
        <button
          onClick={() => setFocus(1)}
          type="button"
        >
          Close
        </button>
      )}
      {...otherProps}
    >
      {children}
    </NavigationHeader>
  )
}

SecondaryHeader.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,
}

export default SecondaryHeader
