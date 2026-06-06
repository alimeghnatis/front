/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'

const baseClassName = styleNames.base
const componentClassName = 'bubble'

/**
 * description
 * @param {InferProps<typeof Bubble.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Bubble
 */
function Bubble({
  id,
  className: userClassName,
  style,
  color,
  children,
}: // ...otherProps

InferProps<typeof Bubble.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  return (
    <span
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        color,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      {children}
    </span>
  )
}

Bubble.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,

  /** The color of the bubble */
  color:PropTypes.string,
}

export default Bubble
