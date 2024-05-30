/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import {
  useMemo, useInsertionEffect,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import * as paths from 'modules/paths'

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

  const toggleComponentProps = useMemo(
    () => ({
      getDynamicProps:({
        item, index, isLast,
      }) => ({
        spanDesktop:item.parentUrl === paths.board.generatePath('HOME') ? 5 : 2,
        style      :{
          background:index === 2
            ? 'var(--warning)'
            : index === 3
              ? 'var(--success)'
              : undefined,
        },
      }),
    }),
    [],
  )

  const navItemsProps = useMemo(
    () => ({
      getDynamicProps:({
        item, index, isLast,
      }) => {
        let spanDesktop = 2
        if (item.key === 'my-boards') {
          spanDesktop = 5
        }
        if (item.key === 'theme') {
          spanDesktop = 3
        }
        return { spanDesktop }
      },
    }),
    [],
  )

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
      toggleComponentProps={toggleComponentProps}
      navItemsProps={navItemsProps}
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
