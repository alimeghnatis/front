/* @aztlan/generator-front 3.4.7 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import { Link } from 'react-router-dom'
import styleNames from '@aztlan/bem'
import { Button } from '../Button/index.js'

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
  buttonProps,
}: // ...otherProps

InferProps<typeof MobilePopup.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const {
    className: buttonClassName, ...otherButtonProps
  } = buttonProps || {}

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
        <Button
          as={Link}
          to={closeLink}
          color="important"
          variant="borderless"
          className={[
            buttonClassName,
            'span-2',
          ].filter(Boolean).join(' ')}
          {...otherButtonProps}
        >
          {closeContent}
        </Button>
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

  /** Button props */
  buttonProps:PropTypes.objectOf(PropTypes.any),
}

export default MobilePopup
