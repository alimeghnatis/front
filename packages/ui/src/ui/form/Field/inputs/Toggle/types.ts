import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import * as formPropTypes from '../../propTypes.js'

export const propTypes = {
  ...formPropTypes.baseShared,
  ...formPropTypes.inputShared,

  /** The label for "yes" */
  labelYes:PropTypes.string,

  /** The label for "no" */
  labelNo:PropTypes.string,

  /** Other button props */
  buttonProps:PropTypes.object,
}

export type TProps = InferProps<typeof propTypes>
