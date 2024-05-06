/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'
import {
  useInsertionEffect,
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
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

  const [
    isLoaded,
    setIsLoaded,
  ] = useState(false)

  const containerRef = useRef<HTMLUListElement>()

  useEffect(
    () => {
      if (containerRef.current) {
        const children = Array.from(containerRef.current.children)
        const activeItem = children.find((child) => child.getAttribute('data-value') === value)

        if (activeItem) {
          const {
            offsetLeft, offsetWidth,
          } = activeItem as HTMLElement
          setSliderStyle({
            '--slider-left' :`calc(${offsetLeft}px - var(--gap)/2)`,
            '--slider-width':`calc(${offsetWidth}px + var(--gap))`,
          })
        }
      }
    }, [
      value,
      options,
      isLoaded,
    ],
  )

  useEffect(
    () => {
      if (!isLoaded) {
        setTimeout(
          () => {
            setIsLoaded(true)
          }, 20,
        )
      }
    }, [],
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
      ref={containerRef}
      // {...otherProps}
    >
      {options.map((option) => (
        <li
          key={option.value}
          onClick={() => setValue(option.value)}
          data-value={option.value}
          className={value === option.value ? styleNames.modifierSelected : ''}
        >
          {option.label}
        </li>
      ))}
      {isLoaded && (
      <li
        className="slider"
        style={sliderStyle}
      />
      )}
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
