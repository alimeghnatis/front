/* @aztlan/generator-front 3.8.3 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'

const baseClassName = styleNames.base
const componentClassName = 'button-group'

/**
 * description
 * @param {InferProps<typeof Group.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Group
 */
function Group({
  id,
  className: userClassName,
  style,
  children,
  variant,
  color,
}: // ...otherProps

InferProps<typeof Group.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const capitalizedVariant = variant && variant.charAt(0).toUpperCase() + variant.slice(1)

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        variant && styleNames[`modifier${capitalizedVariant}`],
        color,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      {children}
    </div>
  )
}

Group.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,

  /** The variant of the button */
  variant:PropTypes.oneOf([
    'borderless',
    'simple',
    'divided',
  ]),

  /** The default color of the buttons in the group. Can be ovrriden by the buttons individually */
  color:PropTypes.string,
}

export default Group
