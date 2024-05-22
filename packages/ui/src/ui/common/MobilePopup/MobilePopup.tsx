/* @aztlan/generator-front 3.4.7 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import { Link } from 'react-router-dom'

import styleNames from '@aztlan/bem'

const baseClassName = styleNames.base
const componentClassName = 'mobile-popup'

/**
 * description
 * @param {InferProps<typeof MobilePopup.propTypes>} props -
 * @returns {React.ReactElement} - Rendered MobilePopup
 */
function MobilePopup({
  id,
  className: userClassName,
  style,
  children,
  closeLink,
  closeContent = 'Close',
  fixed = false,
  title,
}: // ...otherProps

InferProps<typeof MobilePopup.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  return (
    <div
      id={id}
      className={[
        baseClassName,

        componentClassName,
        fixed && 'fixed',
        userClassName,
        'grid container',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <div className="span-8 md-span-0 grid header">
        <p className="span-2">
          <Link to={closeLink}>{closeContent}</Link>
        </p>
        <p className="span-6">{title}</p>
      </div>
      <div className="container grid content">{children}</div>
    </div>
  )
}

MobilePopup.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,

  /** The close link */
  closeLink:PropTypes.string,

  /** The title */
  title:PropTypes.string,

  /** The close content */
  closeContent:PropTypes.string,

  /** Fixed */
  fixed:PropTypes.bool,
}

export default MobilePopup
