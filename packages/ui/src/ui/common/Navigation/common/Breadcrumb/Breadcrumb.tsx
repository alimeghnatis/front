/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import {
  useInsertionEffect, useMemo,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  Link, useLocation,
} from 'react-router-dom'

import styleNames from '@aztlan/bem'

const baseClassName = styleNames.base
const componentClassName = 'breadcrumb'
const componentItemClassName = styleNames.elementItem

function Item({
  id,
  className: userClassName,
  style,
  children,
  position,
  childrenAs: Wrapper = Link,
  wrapperProps,
  span = 3,
  spanDesktop = 2,
  to,
}: // ...otherProps

InferProps<ItemProps>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const location = useLocation()

  const isSelected = location.pathname === to

  return (
    <li
      itemProp="itemListElement"
      itemScope
      itemType="https://schema.org/ListItem"
      id={id}
      className={[
        baseClassName,
        componentItemClassName,
        userClassName,
        isSelected && styleNames.modifierSelected,
        `span-${span}`,
        `md-span-${spanDesktop}`,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <Wrapper
        to={to}
        itemprop="item"
        {...wrapperProps}
      >
        <span itemProp="name">{children}</span>
      </Wrapper>
      <meta
        itemProp="position"
        content={position.toString()}
      />
    </li>
  )
}

Item.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,

  /** The position of the item in the breadcrumb */
  position:PropTypes.number.isRequired,

  /** The children as a wrapper */
  childrenAs:PropTypes.elementType,

  /** The wrapper props */
  wrapperProps:PropTypes.objectOf(PropTypes.any),

  /** The span of the item */
  span:PropTypes.number,

  /** The span of the item on desktop */
  spanDesktop:PropTypes.number,

  /** The to prop for the Link */
  to:PropTypes.string,
}

type ItemProps = InferProps<typeof Item.propTypes>

/**
 * description
 * @param {InferProps<typeof Breadcrumb.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Breadcrumb
 */
function Breadcrumb({
  id,
  className: userClassName,
  style,
  children,
  separator = '/',
}: // ...otherProps

InferProps<typeof Breadcrumb.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const enhancedChildren = useMemo(
    () => React.Children.map(
      children, (
        child, index,
      ) => {
        if (React.isValidElement<ItemProps>(child) && child.type === Item) {
          return React.cloneElement(
            child, { position: index + 1 },
          )
        }
        return child
      },
    ),
    [children],
  )

  return (
    <ol
      itemScope
      itemType="https://schema.org/BreadcrumbList"
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'grid',
      ]
        .filter((e) => e)
        .join(' ')}
      style={
        {
          ...style,
          '--separator':`"${separator}"`,
        } as React.CSSProperties
      }
      // {...otherProps}
    >
      {enhancedChildren}
    </ol>
  )
}

Breadcrumb.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,

  /** The separator for the breadcrumb */
  separator:PropTypes.string,
}

Breadcrumb.Item = Item as React.FC<ItemProps>

export default Breadcrumb
