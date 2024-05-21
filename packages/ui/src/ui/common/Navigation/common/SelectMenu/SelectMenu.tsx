/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import {
  useInsertionEffect, useCallback,
} from 'react'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'
import { useSelect } from 'downshift'
import { Link } from 'react-router-dom'
import { itemShape } from '../../types.js'
import { ComponentPropTypes } from './types.js'
import type { ComponentProps } from './types.js'
import { Button } from '../../../Button/index.js'

const baseClassName = styleNames.base
const componentClassName = 'select-menu'

function flattenTree(rootItem:InferProps<typeof itemShape>):InferProps<typeof itemShape>[] {
  const items = rootItem.items || []
  const initialAcc = [rootItem]

  return items.reduce(
    (
      acc, item,
    ) => {
      if (item.items) {
        return acc.concat(flattenTree(item))
      }
      return acc.concat(item)
    }, initialAcc,
  )
}

const isItemAGroupHeader = (item) => item.items && !item.url

const areSubItemsDisabled = (item) => item.items && item.items.filter((subItem) => !isItemAGroupHeader(subItem)).every((subItem) => subItem.disabled)

/**
 * description
 * @param {InferProps<typeof SelectMenu.propTypes>} props -
 * @returns {React.ReactElement} - Rendered SelectMenu
 */
function SelectMenu({
  id,
  className: userClassName,
  style,
  rootItem,
  initialIsOpen = false,
  shouldRemainOpen = false,
  buttonColor = 'paragraph',
  maxHeight = 'auto',
  openOnHover = false,
  defaultText = 'Select',
  optionsSpan = undefined,
  optionsSpanDesktop = undefined,
  displaySelectedItem = true,
  align = 'left',
}: ComponentProps): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )
  const displayNaturalOptions = !(optionsSpan || optionsSpanDesktop)

  const isItemDisabled = (item) => (item.disabled) || areSubItemsDisabled(item) || isItemAGroupHeader(item)

  const items = flattenTree(rootItem)

  const findFirstNonDisabledIndex = (arr) => arr.findIndex((item) => !isItemDisabled(item))

  const stateReducer = (
    state, actionAndChanges,
  ) => {
    const {
      changes, type,
    } = actionAndChanges
    switch (type) {
      case useSelect.stateChangeTypes.ItemClick:
      case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
        return {
          ...changes,
          isOpen          :shouldRemainOpen, // ? state.isOpen, // Keep the menu open
          highlightedIndex:state.highlightedIndex, // Keep the highlighted index
        }
      case useSelect.stateChangeTypes.FunctionOpenMenu:
        return {
          ...changes,
          highlightedIndex:state.highlightedIndex >= 0 ? state.highlightedIndex : findFirstNonDisabledIndex(items),
        }
      default:
        return changes
    }
  }

  const {
    isOpen,
    getMenuProps,
    getItemProps,
    getToggleButtonProps,
    selectedItem,
    highlightedIndex,
    openMenu,
    closeMenu,
  } = useSelect({
    items,
    itemToString:(item) => (item.label || item.key),
    // onSelectedItemChange,
    initialIsOpen, // parentIsOpen,
    isItemDisabled,
    stateReducer,
    // initialSelectedItem: parentSelectedItem,
  })

  const onMouseEnterHandler = useCallback(
    (item) => {
      if (openOnHover) {
        openMenu()
      }
    }, [
      openMenu,
      openOnHover,
    ],
  )

  const onMouseLeaveHandler = useCallback(
    (item) => {
      if (openOnHover) {
        closeMenu()
      }
    }, [
      closeMenu,
      openOnHover,
    ],
  )

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={{
        '--max-height':maxHeight,
        ...style,
      } as React.CSSProperties}
      onMouseLeave={(openOnHover && !shouldRemainOpen) ? onMouseLeaveHandler : undefined}
      // {...otherProps}
    >
      <Button
        type="button"
        {...getToggleButtonProps()}
        variant="simple"
        color={buttonColor}
        onMouseEnter={openOnHover ? onMouseEnterHandler : undefined}
        // style={{ display: 'none' }}
      >
        {displaySelectedItem ? selectedItem ? selectedItem.label : defaultText : defaultText}
      </Button>
      {isOpen
      && (
      <ul
        className={[
          'options',
          displayNaturalOptions ? 'natural' : 'manual',
          optionsSpan && `span-${optionsSpan}`,
          optionsSpanDesktop && `md-span-${optionsSpanDesktop}`,
          align,
        ].filter(Boolean).join(' ')}
        {...getMenuProps()}
      >
        {items.map((
          item, index,
        ) => (
          <li
            key={`${item.key || item.label}${item.url || ''}`}
            className={[
              item.className,
              item.disabled && styleNames.modifierDisabled,
              item.displayItemsAs === 'group' && 'group',
              highlightedIndex === index && styleNames.modifierSelected,
            ].filter(Boolean).join(' ')}
            {...getItemProps({ item })}
          >

            {item.Component ? <item.Component item={item} /> : item.url ? (
              <Link
                to={item.url}
                // onMouseEnter={() => onMouseEnterHandler?.(item)}
              >
                {item.label}
              </Link>
            ) : item.label}
          </li>

        ))}
      </ul>
      )}
    </div>
  )
}

SelectMenu.propTypes = ComponentPropTypes

export default SelectMenu
