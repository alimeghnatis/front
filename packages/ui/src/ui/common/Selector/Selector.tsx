/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'
import {
  useInsertionEffect, useCallback,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import styleNames from '@aztlan/bem'
import { Button } from '../Button/index.js'

const baseClassName = styleNames.base
const componentClassName = 'selector'

/**
 * description
 * @param {InferProps<typeof Selector.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Selector
 */
function Selector({
  id,
  className: userClassName,
  style,
  options,
  value,
  setValue,
  defaultColor = 'neutral',
  selectedColor = 'success',
}: // ...otherProps

InferProps<typeof Selector.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const getColor = useCallback(
    (option) => {
      if (option.disabled) {
        return 'disabled'
      }
      if (value === option.value) {
        return option.color || selectedColor
      }
      return defaultColor
    },
    [
      value,
      defaultColor,
      selectedColor,
    ],
  )

  return (
    <Button.Group
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      variant="borderless"
      // {...otherProps}
    >
      {options.map((option) => (
        <Button
          key={option.key || option.value}
          onClick={!option.disabled ? () => setValue(option.value) : undefined}
          disabled={option.disabled}
          color={getColor(option)}
        >
          {option.label}
        </Button>
      ))}
    </Button.Group>
  )
}

Selector.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The options to display */
  options:PropTypes.arrayOf(PropTypes.shape({
    key  :PropTypes.string,
    value:PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    label   :PropTypes.string.isRequired,
    disabled:PropTypes.bool,
    color   :PropTypes.string,
  })),

  /** The value selected */
  value:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),

  /** The function to set the value */
  setValue:PropTypes.func,

  /** The default color */
  defaultColor:PropTypes.string,

  /** The selected color */
  selectedColor:PropTypes.string,
}

export default Selector
