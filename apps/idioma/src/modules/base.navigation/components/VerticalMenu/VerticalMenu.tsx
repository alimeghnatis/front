/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import {
  NavigationVerticalMenu, useViewer,
} from '@aztlan/ui'
import styleNames from '@aztlan/bem'
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

  /** The children JSX */
  children:PropTypes.node,
}

export { RawVerticalMenu }

function VerticalMenu(props) {
  const { data: viewerData } = useViewer()
  return (
    <RawVerticalMenu
      {...props}
      viewerData={viewerData}
    />
  )
}

export default VerticalMenu
