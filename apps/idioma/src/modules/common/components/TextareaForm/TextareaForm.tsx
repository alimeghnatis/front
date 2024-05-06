/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'
import {
  useInsertionEffect, useState, useCallback,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import styleNames from '@aztlan/bem'
import { Textarea } from './common/index.js'

const baseClassName = styleNames.base
const componentClassName = 'textarea-form'

/**
 * description
 * @param {InferProps<typeof TextareaForm.propTypes>} props -
 * @returns {React.ReactElement} - Rendered TextareaForm
 */
function TextareaForm({
  id,
  className: userClassName,
  style,
  isInFlight,
  handleSubmit,
}: // ...otherProps

InferProps<typeof TextareaForm.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const [
    inputValue,
    setInputValue,
  ] = useState('')

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault()
      handleSubmit(inputValue)
      setInputValue('')
    },
    [
      handleSubmit,
      inputValue,
    ],
  )

  return (
    <form
      id={id}
      className={[
        baseClassName,
        componentClassName,
        'grid',
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      onSubmit={onSubmit}
      // {...otherProps}
    >
      <Textarea
        className="span-6 md-span-9"
        value={inputValue}
        setValue={setInputValue}
      />
      {/*
      <button
        disabled={isInFlight}
        type="button"
      >
        G+
      </button>
          */}
      <button
        disabled={isInFlight}
        type="submit"
      >
        Add
      </button>
    </form>
  )
}

TextareaForm.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** Whether the form is in flight */
  isInFlight:PropTypes.bool,

  /** The function to call when the form is submitted */
  handleSubmit:PropTypes.func,
}

export default TextareaForm
