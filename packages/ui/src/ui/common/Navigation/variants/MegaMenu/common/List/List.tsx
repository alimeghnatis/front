/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import { Link } from 'react-router-dom'
import styleNames from '@aztlan/bem'
import type { Props } from './types.js'
import { propTypes } from './types.js'

const baseClassName = styleNames.base
const componentClassName = 'mega-menu-list'

const arrayIncludes = (
  array, item,
) => {
  const sameUrl = item.url && array.find((e) => e.url === item.url)
  const sameKey = item.key && array.find((e) => e.key === item.key)
  return sameUrl || sameKey
}

/**
 * description
 * @param {InferProps<typeof List.propTypes>} props -
 * @returns {React.ReactElement} - Rendered List
 */
function List({
  id,
  className: userClassName,
  style,
  rootItem,
  getItemProps,
  selectedItems,
  highlightedItems,
  background,
  span = 4,
  spanDesktop = 3,
  columns = 1,
  index,
  isLast,
  getDynamicProps,
}:Props): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )
  const {
    style:dynamicStyle,
    className,
    span:dynamicSpan,
    spanDesktop:dynamicSpanDesktop,
    ...dynamicProps
  } = getDynamicProps?.({
    item:rootItem,
    index,
    isLast,
  }) || {}

  const { items } = rootItem
  console.log(
    'items', items,
  )

  return (
    <ul
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        background,
        `span-${dynamicSpan || span}`,
        `md-span-${dynamicSpanDesktop || spanDesktop}`,
        className,
      ]
        .filter((e) => e)
        .join(' ')}
      style={{
        ...style,
        ...dynamicStyle,
        '--content-columns':columns,
      } as React.CSSProperties}
      {...dynamicProps}
    >
      {items.map((item) => (
        <li
          key={item.label}
          className={[
            item.disabled && styleNames.modifierDisabled,
            arrayIncludes(
              selectedItems, item,
            ) && styleNames.modifierSelected,
            arrayIncludes(
              highlightedItems, item,
            ) && 'hover',
            //
          ]
            .filter(Boolean)
            .join(' ')}
          {...getItemProps({ item })}
        >
          {item.Component ? (
            <item.Component item={item} />
          ) : item.url ? (
            <Link to={item.url}>
              <span className={[].filter(Boolean).join(' ')}>{item.label}</span>
            </Link>
          ) : (
            item.label
          )}
        </li>
      ))}
    </ul>
  )
}

List.propTypes = propTypes

export default List
