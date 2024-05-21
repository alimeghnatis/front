import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import {
  htmlShared,
  desktopOnlyShared,
  itemShape,
  itemsValidator,
} from '../../types.js'

itemShape.items = itemsValidator

export const rootItemPropType = PropTypes.shape(itemShape).isRequired

export const ComponentPropTypes = {
  ...htmlShared,
  ...desktopOnlyShared,

  /* the children */
  children:PropTypes.node,

  /* the root item */
  rootItem:rootItemPropType,

  /** A function that takes the current item is executed on mouse enter */
  onItemMouseEnterHandler:PropTypes.func,

  /** A function that takes the current item is executed on mouse leave */
  onItemMouseLeaveHandler:PropTypes.func,

  /** Whether the menu is initially open */

  initialIsOpen:PropTypes.bool,

  /** Whether the menu should remain open */
  shouldRemainOpen:PropTypes.bool,

  /** The color of the button */
  buttonColor:PropTypes.string,

  /** The max height of the menu */
  maxHeight:PropTypes.string,

  /** Whether the menu should open on hover */
  openOnHover:PropTypes.bool,

  /** The default text of the button */
  defaultText:PropTypes.string,

  /** The span of the options */
  optionsSpan:PropTypes.number,

  /** The span of the options on desktop */
  optionsSpanDesktop:PropTypes.number,

  /** The alignment of the menu */
  align:PropTypes.oneOf([
    'left',
    'right',
  ]),

  /** Display the selected item */
  displaySelectedItem:PropTypes.bool,
}

export type ComponentProps = InferProps<typeof ComponentPropTypes>
