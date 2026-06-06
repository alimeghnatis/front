import * as PropTypes from 'prop-types'

import * as formPropTypes from '../Field/propTypes.js'

export const fieldPropTypes = PropTypes.shape({
  ...formPropTypes.globalType,
  ...formPropTypes.baseShared,
  ...formPropTypes.inputShared, // Kinda
  ...formPropTypes.optional,
})

export const basePropTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,

  /** An object of field props that will be applied to all the fields */
  fieldProps:fieldPropTypes,

  /** The default values for the form */
  defaultValues:PropTypes.objectOf(PropTypes.any),
}
