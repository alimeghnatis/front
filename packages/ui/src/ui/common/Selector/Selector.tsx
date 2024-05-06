/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'
import {
  useInsertionEffect, useRef, useState, useEffect,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'

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
}: // ...otherProps

InferProps<typeof Selector.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const [
    sliderStyle,
    setSliderStyle,
  ] = useState({})

  const itemRefs = useRef(options.reduce(
    (
      acc, option,
    ) => {
      acc[option.value] = React.createRef()
      return acc
    }, {},
  ))

  useEffect(
    () => {
      const activeItem = itemRefs.current[value]?.current
      if (activeItem) {
        const {
          offsetLeft, offsetWidth,
        } = activeItem
        setSliderStyle({
          '--slider-left' :`calc(${offsetLeft}px - var(--gap)/2)`,
          '--slider-width':`calc(${offsetWidth}px + var(--gap)`,
        })
      }
    }, [value],
  )

  return (
    <ul
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      {options.map((option) => (
        <li
          key={option.value}
          onClick={() => setValue(option.value)}
          className={value === option.value ? styleNames.modifierSelected : ''}
          ref={itemRefs.current[option.value]}
        >
          {option.label}
        </li>
      ))}
      <li
        className="slider"
        style={sliderStyle}
      />
    </ul>
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
    value:PropTypes.string,
    label:PropTypes.string,
  })),

  /** The value selected */
  value:PropTypes.string,

  /** The function to set the value */
  setValue:PropTypes.func,
}

export default Selector
