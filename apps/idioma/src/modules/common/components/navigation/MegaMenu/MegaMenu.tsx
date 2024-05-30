/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import { MegaMenuNavigation } from '@aztlan/ui'
import styleNames from '@aztlan/bem'
import useRootItem from './useRootItem.js'

import { useBoardMemberships } from '../../Board/hooks/index.js'

const componentClassName = 'mega-menu'
/**
 * description
 * @param {InferProps<typeof RawMegaMenu.propTypes>} props -
 * @returns {React.ReactElement} - Rendered MegaMenu
 */
function RawMegaMenu({
  id,
  className: userClassName,
  style,
  children,

  data,
}: // ...otherProps

InferProps<typeof RawMegaMenu.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const rootItem = useRootItem({ memberships: data })

  return (
    <MegaMenuNavigation
      id={id}
      className={[
        componentClassName,
        userClassName,
        'container',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      rootItem={rootItem}
      toggleComponentType="breadcrumb"
      openOn="hover"
      // {...otherProps}
    >
      {children}
    </MegaMenuNavigation>
  )
}

RawMegaMenu.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,
}

function MegaMenu(props) {
  const result = useBoardMemberships()
  return (
    <RawMegaMenu
      data={result}
      {...props}
    />
  )
}

export { RawMegaMenu }

export default MegaMenu
