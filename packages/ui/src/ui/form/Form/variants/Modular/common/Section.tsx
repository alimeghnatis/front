/* @aztlan/generator-front 0.7.2 */
import * as React from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import useForm from '../useForm.js'
import { Section } from '../../../common/index.js'
import { Field } from '../../../../Field/index.js'

/**
 * A section of a form that renders a set of fields.
 * @param {InferProps<typeof ModularFormSection.propTypes>} props -
 * @return {React.ReactElement} - The rendered component
 */
function ModularFormSection(props: InferProps<typeof ModularFormSection.propTypes>): React.ReactElement {
  const { sharedFieldProps } = useForm()

  return (
    <Section
      sharedFieldProps={sharedFieldProps}
      {...props}
    />
  )
}

ModularFormSection.propTypes = Section.propTypes

export default ModularFormSection
