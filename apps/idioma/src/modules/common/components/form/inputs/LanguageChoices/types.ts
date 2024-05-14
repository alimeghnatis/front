import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import { fieldPropTypes } from '@aztlan/ui'

export const propTypes = {
  ...fieldPropTypes.baseShared,
  ...fieldPropTypes.inputShared,
  ...fieldPropTypes.optionsShared,

  /** Whether the input can have multiple values */
  multiple:PropTypes.bool,

  /** Whether the input is disabled */
  disabled:PropTypes.bool,

  /** Number of options columns */
  optionsColumns:PropTypes.number,

  /** Number of options columns on desktop */
  optionsColumnsDesktop:PropTypes.number,
}

export type TProps = InferProps<typeof propTypes>
