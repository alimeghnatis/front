import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import * as basePropTypes from '../../../../types.js'
// import type { PreparedItem } from '../../types.js'

export const propTypes = {
  ...basePropTypes.fixedShared,
  ...basePropTypes.htmlShared,

  items:PropTypes.arrayOf(PropTypes.shape(basePropTypes.itemShape)),

  getItemProps:PropTypes.func.isRequired,

  selectedItems:PropTypes.arrayOf(PropTypes.shape(basePropTypes.itemShape)),

  highlightedItems:PropTypes.arrayOf(PropTypes.shape(basePropTypes.itemShape)),

  columns:PropTypes.number,

  span:PropTypes.number,

  spanDesktop:PropTypes.number,

  /* The background color to be consumed in the menu */
  background:PropTypes.string,
}

export type Props = InferProps<typeof propTypes>
