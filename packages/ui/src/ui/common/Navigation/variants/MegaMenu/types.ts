import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import * as basePropTypes from '../../types.js'
// import type { PreparedItem } from '../../types.js'
import { rootItemPropType } from '../../common/VerticalMenu/types.js'

export const propTypes = {
  ...basePropTypes.fixedShared,
  ...basePropTypes.htmlShared,

  /* The array of navigation elements to be passed to the navigation context */
  rootItem:rootItemPropType,

  /** Whether it's open by default */
  initialIsOpen:PropTypes.bool,

  /** The initial URL */
  initialUrl:PropTypes.string,
}

export type Props = InferProps<typeof propTypes>
