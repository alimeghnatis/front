/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import useForm from '../useForm.js'
import { Section } from '../../../common/index.js'
import { Field } from '../../../../Field/index.js'

/**
 * A section of a form that renders a set of fields.
 * @param {InferProps<typeof MultipartFormSection.propTypes>} props -
 * @return {React.ReactElement} - The rendered component
 */
function MultipartFormSection(props: InferProps<typeof MultipartFormSection.propTypes>): React.ReactElement {
  const { sharedFieldProps } = useForm()

  return (
    <Section
      sharedFieldProps={sharedFieldProps}
      {...props}
    />
  )
}

MultipartFormSection.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The html tag that acts as an input label */
  as:PropTypes.elementType,

  /** The index of the form section */
  index:PropTypes.number.isRequired,

  /** The label of the form section */
  label:PropTypes.string.isRequired,

  /** The description of the form section */
  description:PropTypes.string,

  /** The fields to be rendered */
  fields:PropTypes.arrayOf(PropTypes.shape(Field.propTypes)).isRequired,
}

export default MultipartFormSection
