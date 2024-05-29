/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import styleNames from '@aztlan/bem'
import type { Props } from './types.js'
import { propTypes } from './types.js'
import { Breadcrumb } from '../../../../common/index.js'

const baseClassName = styleNames.base
const componentClassName = 'toggle-breadcrumb'

/**
 * description
 * @param {InferProps<typeof ToggleBreadcrumb.propTypes>} props -
 * @returns {React.ReactElement} - Rendered ToggleBreadcrumb
 */
function ToggleBreadcrumb({
  id,
  className: userClassName,
  style,
  selectedItems,
  getToggleButtonProps,
  span = 2,
  spanDesktop = 3,
  getDynamicProps,
  isOpen,
}: Props): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  return (
    <Breadcrumb
      id={id}
      className={[
        componentClassName,
        userClassName,
        'container',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      {selectedItems.map((
        item, index,
      ) => {
        const {
          ref, ...otherProps
        } = getToggleButtonProps({ depth: index + 1 })
        const dynamicProps = getDynamicProps?.({
          item,
          isOpen,
          index,
        }) || {}
        return (
          <Breadcrumb.Item
            to={item.url}
            spanDesktop={spanDesktop}
            span={span}
            key={item.url}
            {...otherProps}
            {...dynamicProps}
          >
            {item.label}
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  )
}

ToggleBreadcrumb.propTypes = propTypes

export default ToggleBreadcrumb
