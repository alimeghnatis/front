/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'
import { useMemo } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'
import { useFormState } from 'react-hook-form'
import useForm from '../useForm.js'

const baseClassName = styleNames.base
const componentClassName = 'submit-bar'

/**
 * A section of a form that renders a set of fields.
 * @param {InferProps<typeof SubmitBar.propTypes>} props -
 * @return {React.ReactElement} - The rendered component
 */
function SubmitBar({
  id,
  className,
  style,
  submitText = 'Submit',
}: InferProps<typeof SubmitBar.propTypes>): React.ReactElement {
  const { sharedFieldProps } = useForm()
  const { errors } = useFormState()

  const transformedErrors = Object.keys(errors).reduce(
    (
      acc, key,
    ) => {
      acc[key] = errors[key]?.message?.toString()
      return acc
    }, {},
  )

  console.log(
    'SB', errors, transformedErrors,
  )

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        className,
        'container grid',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
    >
      <div className="content">
        {Object.keys(transformedErrors).map((key) => (
          <div
            key={key}
            className="error"
          >
            {transformedErrors[key]}
          </div>
        ))}
      </div>
      <div className="actions">
        <button type="submit">{submitText}</button>
      </div>
    </div>
  )
}

SubmitBar.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The text to display on the submit button */
  submitText:PropTypes.string,
}

export default SubmitBar
