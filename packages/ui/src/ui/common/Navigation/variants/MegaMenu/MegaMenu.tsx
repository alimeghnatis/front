/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import styleNames from '@aztlan/bem'
import type { Props } from './types.js'
import { Button } from '../../../../common/index.js'
import { propTypes } from './types.js'
import { useNestedNavigation } from '../../hooks/index.js'

const baseClassName = styleNames.base
const componentClassName = 'mega-menu'

function UL({
  items, getItemProps,
  selectedItems,
  highlightedItems,
}) {
  return (
    <ul
      className={[
        //

      ].filter(Boolean).join(' ')}
    >
      { items.map((item) => (
        <li
          key={item.label}
          className={[
            //
          ].filter(Boolean).join(' ')}
          {...getItemProps({ item })}
        >
          <span
            className={[
              selectedItems.includes(item) && 'selected',
              highlightedItems.includes(item) && 'hover',

            ].filter(Boolean).join(' ')}
          >
            {item.label}
          </span>
          {item.items
      && (
      <UL
        items={item.items}
        getItemProps={getItemProps}
        selectedItems={selectedItems}
        highlightedItems={highlightedItems}
      />
      )}
        </li>
      )) }
    </ul>
  )
}

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
}: Props): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const {
    isOpen,
    selectedItems,
    highlightedItems,
    preparedRoot,
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
  } = useNestedNavigation(rootItem)

  const { items } = preparedRoot

  return (
    // @ts-ignore
    <div
      id={id}
      className={[

        baseClassName,

        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      {...getMenuProps()}
      // {...otherProps}
    >
      <p>
        S:
        { selectedItems.map((item) => <span key={item.label}>{ item.label }</span>)}
      </p>
      <p>
        H:
        { highlightedItems.map((item) => <span key={item.label}>{ item.label }</span>)}
      </p>
      <Button {...getToggleButtonProps()}>
        { isOpen ? 'close' : 'open' }
      </Button>
      <div className="nav">
        <UL
          items={items}
          getItemProps={getItemProps}
          selectedItems={selectedItems}
          highlightedItems={highlightedItems}
        />
      </div>
    </div>
  )
}

MegaMenu.propTypes = propTypes

export default MegaMenu
