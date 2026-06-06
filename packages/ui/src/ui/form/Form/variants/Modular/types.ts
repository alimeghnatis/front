import PropTypes, { InferProps } from 'prop-types'

import {
  basePropTypes, fieldPropTypes,
} from '../../types.js'

export const ModularFormPropTypes = {
  ...basePropTypes,

  /** The fields to be rendered */
  // fields    :PropTypes.arrayOf(fieldPropTypes),
  onSubmit  :PropTypes.func,
  isInFlight:PropTypes.bool,

  /** The component to be rendered after the form, defaults to a basic submit button */
  SubmitComponent:PropTypes.elementType,

  /** The span of the submit component */
  submitSpan:PropTypes.number,

  /** The text of the submit component on desktop */
  submitSpanDesktop:PropTypes.number,
}

export type ModularFormProps = InferProps<typeof ModularFormPropTypes>
