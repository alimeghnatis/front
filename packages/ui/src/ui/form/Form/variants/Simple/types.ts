import PropTypes, { InferProps } from 'prop-types'

import {
  basePropTypes, fieldPropTypes,
} from '../../types.js'

export const SimpleFormPropTypes = {
  ...basePropTypes,

  /** The fields to be rendered */
  fields    :PropTypes.arrayOf(fieldPropTypes),
  onSubmit  :PropTypes.func,
  isInFlight:PropTypes.bool,

  /** The component to be rendered after the form, defaults to a basic submit button */
  SubmitComponent:PropTypes.elementType,
}

export type SimpleFormProps = InferProps<typeof SimpleFormPropTypes>
