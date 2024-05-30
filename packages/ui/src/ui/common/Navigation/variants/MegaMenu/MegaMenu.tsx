/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import {
  useInsertionEffect, useCallback,
} from 'react'

import styleNames from '@aztlan/bem'
import { useLocation } from 'react-router-dom'
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
import { DisplayItemsType } from '../../types.js'
import { useNestedNavigation } from '../../hooks/index.js'
import { OpenOnOptions } from '../../hooks/useNestedNavigation/types.js'
import {
  List,
  ToggleBreadcrumb,
} from './common/index.js'

const baseClassName = styleNames.base
const componentClassName = 'mega-menu'

function ToggleButton({
  getToggleButtonProps, isOpen,
  getDynamicProps,
}:ToggleButtonProps) {
  return (
    <Button
      {...getToggleButtonProps()}
      variant="borderless"
      color={isOpen ? 'important' : 'near'}
      {...getDynamicProps?.({ isOpen })}
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
  initialUrl:userInitialUrl,
  initialIsOpen = false,
  defaultDisplayItemsType = DisplayItemsType.list,
  navItemsProps,
  toggleComponentType = ToggleComponentType.button,
  toggleComponentProps,
  background = 'near',
  openOn = OpenOnOptions.click,
}: Props): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const location = useLocation()
  const initialUrl = userInitialUrl || location.pathname

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
          return (
            <ToggleButton
              {...baseProps}
              {...toggleComponentProps}
            />
          )
        }
        case ToggleComponentType.breadcrumb: {
          return (
            <ToggleBreadcrumb
              {...baseProps}
              selectedItems={selectedItems}
              {...toggleComponentProps}
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
      rootItem,
      ...props
    }:{ rootItem?: PreparedItem; [key:string]: any; }):React.ReactElement | null => {
      const displayItemsType = rootItem.displayItemsType || defaultDisplayItemsType
      const componentProps = {
        ...props,
        ...rootItem.itemsComponentProps,
        ...navItemsProps,
        getItemProps,
        selectedItems,
        highlightedItems,
        background,
        rootItem,
      }
      switch (displayItemsType) {
        case DisplayItemsType.list: {
          return <List {...componentProps} />
        }
        case DisplayItemsType.custom: {
          // @ts-ignore
          return <rootItem.ItemsComponent {...componentProps} />
        }
        default: {
          console.warn(
            'Unhandled displayItemsType', displayItemsType,
          )
          return null
        }
      }
    }, [
      defaultDisplayItemsType,
      selectedItems,
      highlightedItems,
    ],
  )

  const currentVisibleTree = (highlightedItems.length
    ? highlightedItems
    : selectedItems).slice(1).filter((item) => !!item.items)

  const tree = [
    preparedRoot,
    ...currentVisibleTree,
  ]

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
        { tree.map((
          item, index,
        ) => (
          <ItemsComponent
            key={item.url || item.key}
            rootItem={item}
            index={index}
            isLast={index === tree.length - 1}
          />
        )) }
      </nav>
    </div>
  )
}

MegaMenu.propTypes = propTypes

export default MegaMenu
