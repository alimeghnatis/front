/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import {
  useInsertionEffect, useCallback,
} from 'react'

import styleNames from '@aztlan/bem'
import type {
  Props, ToggleButtonProps,
} from './types.js'
import { Button } from '../../../../common/index.js'
import {
  propTypes, toggleButtonPropTypes,
} from './types.js'
import type {
  PreparedItem, Item,
} from '../../types.js'
import { DisplayItemsAs } from '../../types.js'
import { useNestedNavigation } from '../../hooks/index.js'
import {
  List, Columns,
} from './common/index.js'

const baseClassName = styleNames.base
const componentClassName = 'mega-menu'

function ToggleButton({
  getToggleButtonProps, isOpen,
}:ToggleButtonProps) {
  return (
    <Button
      {...getToggleButtonProps()}
      variant="borderless"
      color={isOpen ? 'important' : 'near'}
    >
      { isOpen ? 'close' : 'open' }
    </Button>

  )
}

ToggleButton.propTypes = toggleButtonPropTypes

/**
 * description
 * @param {InferProps<typeof MegaMenu.propTypes>} props -
 * @returns {React.ReactElement} - Rendered MegaMenu
 */
function MegaMenu({
  id,
  className:userClassName,
  style,
  rootItem,
  initialUrl,
  initialIsOpen = false,
  defaultDisplayItemsAs = DisplayItemsAs.list,
  background = 'near',
}: Props): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const {
    isOpen,
    // keysSoFar,
    selectedItems,
    highlightedItems,
    preparedRoot,
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
  } = useNestedNavigation(
    rootItem as Item,
    {
      initialUrl,
      initialIsOpen,
    },
  )

  const ItemsComponent = useCallback(
    ({
      root, ...props
    }:{ root?: PreparedItem; [key:string]: any; }):React.ReactElement | null => {
      const displayItemsAs = root.displayItemsAs || defaultDisplayItemsAs
      const componentProps = {
        ...props,
        ...root.itemsComponentProps,
        getItemProps,
        selectedItems,
        highlightedItems,
        background,
        items:root.items,
      }
      switch (displayItemsAs) {
        case DisplayItemsAs.list: {
          return <List {...componentProps} />
        }
        case DisplayItemsAs.columns: {
          return <Columns {...componentProps} />
        }
        case DisplayItemsAs.custom: {
          // @ts-ignore
          return <root.ItemsComponent {...componentProps} />
        }
        default: {
          console.warn(
            'Unhandled displayItemsAs', displayItemsAs,
          )
          return null
        }
      }
    }, [
      defaultDisplayItemsAs,
      selectedItems,
      highlightedItems,
    ],
  )

  const currentVisibleTree = (highlightedItems.length
    ? highlightedItems
    : selectedItems).slice(1).filter((item) => !!item.items)

  const ToggleComponent = ToggleButton

  return (
    // @ts-ignore
    <div
      id={id}
      className={[

        baseClassName,

        componentClassName,
        userClassName,
        background,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      {...getMenuProps()}
      // {...otherProps}
    >
      {/*
      <p>
        K :
        {keysSoFar}
      </p>
      <p>
        S:
        { selectedItems.map((item) => <span key={item.label}>{ item.label }</span>)}
      </p>
      <p>
        H:
        { highlightedItems.map((item) => <span key={item.label}>{ item.label }</span>)}
      </p> */}
      <ToggleComponent
        getToggleButtonProps={getToggleButtonProps}
        isOpen={isOpen}
      />
      <nav className={
        [
          'grid',
          isOpen && styleNames.modifierOpen,
        ].filter(Boolean).join(' ')
        }
      >
        <ItemsComponent
          root={preparedRoot}
        />
        { currentVisibleTree.map((item) => (
          <ItemsComponent
            root={item}
          />
        )) }
      </nav>
    </div>
  )
}

MegaMenu.propTypes = propTypes

export default MegaMenu
