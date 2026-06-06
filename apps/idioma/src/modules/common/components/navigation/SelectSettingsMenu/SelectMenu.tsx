/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import {
  useInsertionEffect, useState,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'
import {
  NavigationSelectMenu, useViewer,
} from '@aztlan/ui'

import useItems from './useItems.js'

const baseClassName = styleNames.base
const componentClassName = 'settings-select-menu'

const defaultThemes = {
  'dark-theme' :'Dark',
  'light-theme':'Light',
  'green-theme':'Green',
  'blue-theme' :'Blue',
}

/**
 * description
 * @param {InferProps<typeof RawSelectMenu.propTypes>} props -
 * @returns {React.ReactElement} - Rendered RrwSelectMenu
 */
function RawSelectMenu({
  id,
  className: userClassName,
  style,
  children,
  viewerData,
  themes = defaultThemes,
}: // ...otherProps

InferProps<typeof RawSelectMenu.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const { rootItem } = useItems({ viewerData })

  return (
    <NavigationSelectMenu
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'near',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      rootItem={rootItem}
      defaultText="Settings"
      alwaysDisplayDefault
      openOnHover
      // {...otherProps}
    >
      {children}
    </NavigationSelectMenu>
  )
}

RawSelectMenu.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,

  /** The relay data to use for the component fragment */
  data:PropTypes.any,
}

function SelectMenu(props) {
  const { data: viewerData } = useViewer()
  return (
    <RawSelectMenu
      viewerData={viewerData}
      {...props}
    />
  )
}

export { RawSelectMenu }

export default SelectMenu
