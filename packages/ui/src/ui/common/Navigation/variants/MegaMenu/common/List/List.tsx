/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import { Link } from 'react-router-dom'
import styleNames from '@aztlan/bem'
import type { Props } from './types.js'
import { propTypes } from './types.js'

const baseClassName = styleNames.base
const componentClassName = 'mega-menu-list'

/**
 * description
 * @param {InferProps<typeof List.propTypes>} props -
 * @returns {React.ReactElement} - Rendered List
 */
function List({
  id,
  className: userClassName,
  style,
  items,
  getItemProps,
  selectedItems,
  highlightedItems,
  background,
  span = 4,
  spanDesktop = 3,
  columns = 1,
}:Props): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  return (
    <ul
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        background,
        `span-${span}`,
        `md-span-${spanDesktop}`,
      ]
        .filter((e) => e)
        .join(' ')}
      style={{
        ...style,
        '--content-columns':columns,
      } as React.CSSProperties}
      // {...otherProps}
    >
      {items.map((item) => (
        <li
          key={item.label}
          className={[
            item.disabled && styleNames.modifierDisabled,
            selectedItems.includes(item) && styleNames.modifierSelected,
            highlightedItems.includes(item) && 'hover',
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
