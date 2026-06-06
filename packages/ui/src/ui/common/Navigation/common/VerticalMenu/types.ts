import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import {
  htmlShared,
  desktopOnlyShared,
  asShared,
  itemShape,
  itemsValidator,
} from '../../types.js'

itemShape.items = itemsValidator

export const rootItemPropType = PropTypes.shape(itemShape).isRequired

export const BaseComponentPropTypes = {
  ...htmlShared,
  ...asShared,
  ...desktopOnlyShared,

  /** A function that takes the current item is executed on mouse enter */
  onItemMouseEnterHandler:PropTypes.func,

  /** A function that takes the current item is executed on mouse leave */
  onItemMouseLeaveHandler:PropTypes.func,

  /** Whether the last element displays at the end of the flexbox */
  spaced:PropTypes.bool,

  appendItems:itemsValidator,

  /** Whether to hide the root item */
  hideRootItem:PropTypes.bool,
}

export const ComponentPropTypes = {
  ...BaseComponentPropTypes,

  /* the root item */
  rootItem:rootItemPropType,
}

export type ComponentProps = InferProps<typeof ComponentPropTypes>

export const ComponentItemPropTypes = {
  ...htmlShared,
  item                   :PropTypes.shape(itemShape).isRequired,
  onItemMouseEnterHandler:PropTypes.func,
  onItemMouseLeaveHandler:PropTypes.func,
}

export type ComponentItemProps = InferProps<typeof ComponentItemPropTypes>

export const ComponentListPropTypes = {
  ...htmlShared,
  ...desktopOnlyShared,
  ...asShared,

  // items                  :itemsValidator,
  items                  :PropTypes.arrayOf(PropTypes.shape(itemShape)).isRequired,
  // initialIsOpen          :PropTypes.bool,
  onItemMouseEnterHandler:PropTypes.func,
  onItemMouseLeaveHandler:PropTypes.func,
}

export type ComponentListProps = InferProps<typeof ComponentListPropTypes>
