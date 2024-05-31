import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import * as formPropTypes from '../../propTypes.js'

export const propTypes = {
  ...formPropTypes.baseShared,
  ...formPropTypes.inputShared,
  ...formPropTypes.optionsShared,

  /** Whether the input can have multiple values */
  multiple:PropTypes.bool,

  /** Whether the input is disabled */
  disabled:PropTypes.bool,

  /** The number of columns to display the choices in. If undefined, defaults to a line flexbox with wrap */
  columns:PropTypes.number,

  /** The number of columns for desktop */
  columnsDesktop:PropTypes.number,
}

export type TProps = InferProps<typeof propTypes>
