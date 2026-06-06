/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import styleNames from '@aztlan/bem'

const baseClassName = styleNames.base
const componentClassName = 'exp-group'

/**
 * description
 * @param {InferProps<typeof Group.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Group
 */
function Group(
  {
    className: userClassName,
    children,
    ...otherProps
  }: InferProps<typeof Group.propTypes>,
  ref,
): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  return (
    <div
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'container',
      ]
        .filter((e) => e)
        .join(' ')}
      {...otherProps}
      ref={ref}
      {...otherProps}
    >
      {children}
    </div>
  )
}

Group.propTypes = {
  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The children for this element */
  children:PropTypes.any,
}

export default React.forwardRef(Group as React.ForwardRefRenderFunction<HTMLDivElement>)
