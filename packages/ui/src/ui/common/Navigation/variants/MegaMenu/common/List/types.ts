import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import * as basePropTypes from '../../../../types.js'
// import type { PreparedItem } from '../../types.js'

export const propTypes = {
  ...basePropTypes.fixedShared,
  ...basePropTypes.htmlShared,

  /* The array of navigation elements to be passed to the navigation context */
  rootItem:PropTypes.shape(basePropTypes.itemShape),

  /** The props getter */
  getItemProps:PropTypes.func.isRequired,

  /* The selected items */
  selectedItems:PropTypes.arrayOf(PropTypes.shape(basePropTypes.itemShape)),

  /* The highlighted items */
  highlightedItems:PropTypes.arrayOf(PropTypes.shape(basePropTypes.itemShape)),

  /* How many columns to display */
  columns:PropTypes.number,

  /* The span of the list in the grid */
  span:PropTypes.number,

  /* The desktop span of the list in the grid */
  spanDesktop:PropTypes.number,

  /* The background color to be consumed in the menu */
  background:PropTypes.string,

  /* The index of the currnt element in the navigation tree */
  index:PropTypes.number,

  /* Whether the element is the last in the navigation tree */

  isLast:PropTypes.bool,

  /* The props getter to be passed to the nav items */
  getDynamicProps:PropTypes.func,
}

export type Props = InferProps<typeof propTypes>
