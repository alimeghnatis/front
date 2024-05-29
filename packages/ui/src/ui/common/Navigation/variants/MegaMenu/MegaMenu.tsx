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
  ToggleComponentType,
} from './types.js'
import type {
  PreparedItem, Item,
} from '../../types.js'
import { DisplayItemsAs } from '../../types.js'
import { useNestedNavigation } from '../../hooks/index.js'
import { OpenOnOptions } from '../../hooks/useNestedNavigation/types.js'
import {
  List, Columns,
  ToggleBreadcrumb,
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
  toggleComponentType = ToggleComponentType.button,
  background = 'near',
  openOn = OpenOnOptions.click,
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
      openOn:openOn as OpenOnOptions,
    },
  )

  const ToggleComponent = useCallback(
    (props):React.ReactElement | null => {
      const baseProps = {
        getToggleButtonProps,
        isOpen,
      }
      switch (toggleComponentType) {
        case ToggleComponentType.button: {
          return <ToggleButton {...baseProps} />
        }
        case ToggleComponentType.breadcrumb: {
          return (
            <ToggleBreadcrumb
              {...baseProps}
              selectedItems={selectedItems}
            />
          )
        }
        case ToggleComponentType.custom: {
          return null
        }
        default: {
          console.warn(
            'Unhandled toggleComponentType', toggleComponentType,
          )
          return null
        }
      }
    }, [
      getToggleButtonProps,
      isOpen,
      selectedItems,
    ],
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

  return (
    // @ts-ignore
    <div
      id={id}
      className={[

        baseClassName,

        componentClassName,
        userClassName,
        background,
        'grid',
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
      <ToggleComponent />
      <nav className={
        [
          'grid container manual',
          isOpen && styleNames.modifierOpen,
        ].filter(Boolean).join(' ')
        }
      >
        <ItemsComponent
          root={preparedRoot}
        />
        { currentVisibleTree.map((item) => (
          <ItemsComponent
            key={item.url || item.key}
            root={item}
          />
        )) }
      </nav>
    </div>
  )
}

MegaMenu.propTypes = propTypes

export default MegaMenu
