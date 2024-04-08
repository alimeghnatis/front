/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import {
  useInsertionEffect, useState, ChangeEvent,
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
  children,
  value,
  setValue,
}: // ...otherProps

InferProps<typeof Textarea.propTypes>): React.ReactElement {
  const [
    rows,
    setRows,
  ] = useState(1)

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const textareaLineHeight = 24 // Adjust based on your CSS
    const previousRows = event.target.rows
    event.target.rows = 1 // Reset number of rows in textarea

    const currentRows = Math.floor(event.currentTarget.scrollHeight / textareaLineHeight)

    if (currentRows === previousRows) {
      event.target.rows = currentRows
    }

    if (event.currentTarget.value === '') {
      setRows(1)
    } else {
      setRows(currentRows)
    }

    setValue(event.target.value)
  }

  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

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
      rows={rows}
      value={value}
      placeholder="Type something..."
      onChange={handleChange}
      style={{
        overflow  :'hidden',
        resize    :'none',
        lineHeight:'24px', // Ensure this matches `textareaLineHeight`
      }}
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

  /** The children JSX */
  children:PropTypes.node,

  /** The value of the textarea */
  value:PropTypes.string,

  /** The function to set the value of the textarea */
  setValue:PropTypes.func,
}

export default Textarea
