/* @aztlan/generator-front 3.8.3 */
import * as React from 'react'
import {
  useInsertionEffect, ForwardedRef,
} from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import styleNames from '@aztlan/bem'
import Group from './Group.js'

const baseClassName = styleNames.base
const componentClassName = 'button'

/**
 * description
 * @param {InferProps<typeof Button.propTypes>} props -
 * @param {ForwardedRef<HTMLButtonElement>} ref - The forwarded ref for the button element
 * @returns {React.ReactElement} - Rendered Button
 */
const Button = React.forwardRef<
HTMLButtonElement,
InferProps<typeof Button.propTypes> & { [key: string]: any }
>((
  {
    id,
    className: userClassName,
    style,
    children,
    as: Wrapper = 'button',
    type = 'button',
    color,
    variant,
    disabled = false,
    loading = false,
    ...otherProps
  },
  ref,
): React.ReactElement => {
  useInsertionEffect(
    () => {
      // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const capitalizedVariant = variant && variant.charAt(0).toUpperCase() + variant.slice(1)
  const isHTMLButton = Wrapper === 'button'

  return (
    <Wrapper
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        color,
        variant && styleNames[`modifier${capitalizedVariant}`],
        loading && styleNames.modifierLoading,
        !isHTMLButton && disabled && styleNames.modifierDisabled,
        // disabled && styleNames.modifierDisabled,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      type={isHTMLButton ? type : undefined}
      disabled={isHTMLButton ? disabled : undefined}
      ref={ref}
      {...otherProps}
    >
      {children}
    </Wrapper>
  )
})

Button.Group = Group

Button.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,

  /** The wrapper element */
  as:PropTypes.elementType,

  /** The button variant */
  variant:PropTypes.oneOf([
    'simple',
    'borderless',
    'divided',
    'natural',
  ]),

  /** The button color */
  color:PropTypes.string,

  /** The button type */
  type:PropTypes.oneOf([
    'button',
    'submit',
    'reset',
  ]),

  /** Whether the button is disabled */
  disabled:PropTypes.bool,

  /** Whether the button is loading */
  loading:PropTypes.bool,
}

export default Button
