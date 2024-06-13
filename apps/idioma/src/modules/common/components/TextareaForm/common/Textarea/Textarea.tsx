/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import {
  useInsertionEffect,
  useState,
  ChangeEvent,
  useRef,
  useEffect,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'

const baseClassName = styleNames.base
const componentClassName = 'textarea'

/**
 * description
 * @param {InferProps<typeof Textarea.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Textarea
 */
function Textarea({
  id,
  className: userClassName,
  style,
  value,
  setValue,
  placeholder = 'Type something...',
  ...otherProps
}: // ...otherProps

InferProps<typeof Textarea.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current
    if (!textarea) return

    let textareaLineHeight = 24 // Default line height in case we can't get it from CSS

    if (typeof window !== 'undefined') {
      const computedStyle = window.getComputedStyle(textarea)
      textareaLineHeight = parseFloat(computedStyle.lineHeight)
    }

    // Reset number of rows in textarea to calculate the new height
    textarea.rows = 1
    const currentRows = Math.ceil(textarea.scrollHeight / textareaLineHeight)

    console.log(
      'currentRows:',
      currentRows,
      'scrollHeight:',
      textarea.scrollHeight,
      'clientHeight:',
      textarea.clientHeight,
      'lineHeight:',
      textareaLineHeight,
    )

    // Update the rows directly on the textarea element
    textarea.rows = currentRows > 1 ? currentRows : 1

    setValue(event.target.value)
  }

  return (
    <textarea
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      // style={style}
      rows={1}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      ref={textareaRef}
      style={{
        overflow:'hidden',
        resize  :'none',
        // lineHeight:'24px', // Ensure this matches `textareaLineHeight`
        ...style,
      }}
      {...otherProps}
    />
  )
}

Textarea.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The value of the textarea */
  value:PropTypes.string,

  /** The function to set the value of the textarea */
  setValue:PropTypes.func,

  /** The placeholder text */
  placeholder:PropTypes.string,
}

export default Textarea
