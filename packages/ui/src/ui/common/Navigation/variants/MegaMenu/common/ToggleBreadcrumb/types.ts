import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import * as basePropTypes from '../../../../types.js'
// import type { PreparedItem } from '../../types.js'

export const propTypes = {
  ...basePropTypes.htmlShared,

  /* The props getter */
  getToggleButtonProps:PropTypes.func.isRequired,

  /* The open state of the menu */
  isOpen:PropTypes.bool,

  selectedItems:PropTypes.arrayOf(PropTypes.shape(basePropTypes.itemShape)),

  spanDesktop:PropTypes.number,

  span:PropTypes.number,

  /* ({item?, isOpen, index?}) => {props} to apply to the toggle comp */
  getDynamicProps:PropTypes.func,

  /* How many items to slice, used to remove/keep the root element */
  slice:PropTypes.number,
}

export type Props = InferProps<typeof propTypes>
