// REF 15.1: VerticalMenu.tsx Adjusted for Recursion and Original className API
import * as React from 'react'
import {
  useInsertionEffect,
  useMemo,
} from 'react'
import {
  Link, useLocation,
} from 'react-router-dom'
import { useSelect } from 'downshift'
import styleNames from '@aztlan/bem'
import {
  ComponentPropTypes, ComponentItemPropTypes,
  ComponentListPropTypes,
} from './types.js' // Keep original import
import type {
  ComponentProps, ComponentItemProps,
  ComponentListProps,
} from './types.js' // Keep original import for TypeScript types

const baseClassName = styleNames.base
const componentClassName = 'vertical-menu'
const componentItemClassName = styleNames.elementItem
const componentListClassName = styleNames.elementList

function Item({
  id,
  className: userClassName,
  style,
  item,
  onItemMouseEnterHandler,
  onItemMouseLeaveHandler,
  ...otherProps
}:ComponentItemProps) {
  const location = useLocation()

  return (
    <li
      // key={item.key || item.label}
      id={id}
      className={[
        baseClassName,
        componentItemClassName,
        userClassName,
        item.disabled && styleNames.modifierDisabled,
        item.url && (location.pathname === item.url) && styleNames.modifierActive,
        // isItemAGroupHeader(item) && styleNames.elementGroup,
        item.className,
      ].filter(Boolean).join(' ')}
      style={style}
      {...otherProps}
    >
      {item.Component ? <item.Component item={item} /> : item.url ? (
        <Link
          to={item.url}
          onMouseEnter={() => onItemMouseEnterHandler?.(item)}
        >
          {item.label}
        </Link>
      ) : item.label}
      {item.items && !item.url && (
        // @ts-ignore
        <List
          items={item.items}
          className="container"
          onItemMouseEnterHandler={onItemMouseEnterHandler}
          onItemMouseLeaveHandler={onItemMouseLeaveHandler}
        />
      )}
    </li>
  )
}

Item.propTypes = ComponentItemPropTypes

function List({
  id,
  className: userClassName,
  style,
  items,
  onItemMouseEnterHandler,
  onItemMouseLeaveHandler,
  ...otherProps
}:ComponentListProps) {
  return (
    <ul
      id={id}
      className={[
        baseClassName,
        componentListClassName,
        userClassName,
      ].filter(Boolean).join(' ')}
      style={style}
      // {...getMenuProps()}
      {...otherProps}
    >
      {items.map((
        item, index,
      ) => (
        <Item
          key={item.key || item.label}
          item={item}
          onItemMouseEnterHandler={onItemMouseEnterHandler}
          onItemMouseLeaveHandler={onItemMouseLeaveHandler}
        />
      ))}
    </ul>
  )
}

List.propTypes = ComponentListPropTypes

function VerticalMenu({
  id,
  className: userClassName,
  style,
  as: Wrapper = 'nav',
  rootItem,
  appendItems,
  spaced,
  onItemMouseEnterHandler,
  onItemMouseLeaveHandler,
  hideRootItem = false,
  ...otherProps
}: ComponentProps): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const {
    items:baseItems,
    ...rootItemWithoutItems
  } = rootItem

  const finalItems = useMemo(
    () => (appendItems ? baseItems.concat(appendItems) : rootItem.items), [
      appendItems,
      rootItem.items,
    ],
  )

  return (
    <Wrapper
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        spaced && styleNames.modifierSpaced,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
      {...otherProps}
    >
      <List
        items={[
          !hideRootItem && rootItemWithoutItems,
          ...finalItems,
        ].filter(Boolean)}
        onItemMouseEnterHandler={onItemMouseEnterHandler}
        onItemMouseLeaveHandler={onItemMouseLeaveHandler}
      />
    </Wrapper>
  )
}

VerticalMenu.propTypes = ComponentPropTypes

export default VerticalMenu
