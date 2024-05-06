/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import {
  NavigationVerticalMenu, useViewer,
} from '@aztlan/ui'
import styleNames from '@aztlan/bem'
import { useBoardMemberships } from 'modules/common/components'
import useItems from './useItems.js'

const baseClassName = styleNames.base
const componentClassName = 'vertical-menu'

/**
 * description
 * @param {InferProps<typeof VerticalMenu.propTypes>} props -
 * @returns {React.ReactElement} - Rendered VerticalMenu
 */
function RawVerticalMenu({
  id,
  className: userClassName,
  style,
  viewerData,
  appendItems: userAppendItems,
  memberships,
}: // ...otherProps

InferProps<typeof VerticalMenu.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const {
    rootItem, appendItems,
  } = useItems({
    viewerData,
    userAppendItems,
    memberships,
  })

  return (
    <NavigationVerticalMenu
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
      rootItem={rootItem}
      appendItems={appendItems}
    />
  )
}

RawVerticalMenu.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The viewer data */
  viewerData:PropTypes.any,

  /** The items to append */
  appendItems:PropTypes.any,

  /** The board memberships */
  memberships:PropTypes.any,
}

export { RawVerticalMenu }

function VerticalMenu(props) {
  const { data: viewerData } = useViewer()
  const memberships = useBoardMemberships()
  return (
    <RawVerticalMenu
      {...props}
      viewerData={viewerData}
      memberships={memberships}
    />
  )
}

export default VerticalMenu
