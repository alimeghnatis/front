/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import {
  useInsertionEffect, useState,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'
import {
  PrefetchLink as Link, NavigationSelectMenu,
} from '@aztlan/ui'
import {
  useHistory, generatePath,
} from 'react-router-dom'
import {
  useBoardContext, useBoardMemberships,
} from '../../hooks/index.js'

const baseClassName = styleNames.base
const componentClassName = 'board-select-menu'

/**
 * description
 * @param {InferProps<typeof RawSelectMenu.propTypes>} props -
 * @returns {React.ReactElement} - Rendered RrwSelectMenu
 */
function RawSelectMenu({
  id,
  className: userClassName,
  style,
  children,

  data,
}: // ...otherProps

InferProps<typeof RawSelectMenu.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const result = data

  const {
    basePath,
    baseBoardPath,
    currentBoardId,
    createBoardPath,
    chatBoardPath,
    isChat,
  } = useBoardContext()

  const history = useHistory()

  const isCreating = history.location.pathname === createBoardPath

  const rootItem = {
    // label:'Boards',
    items:[
      {
        // displayItemsAs:'group',
        key      :'new',
        label    :'Create New Board',
        url      :createBoardPath,
        Component:({ item }) => <Link to={item.url}>{item.label}</Link>,
        active   :isCreating,
      },
      ...result.edges.map((
        edge, i,
      ) => {
        const { node } = edge
        const url = generatePath(
          isChat ? chatBoardPath : baseBoardPath, { board: node.board.id },
        )
        return {
          key      :node.board.id,
          label    :node.board.name,
          className:i === 0 ? 'first' : '',
          url,
          Component:({ item }) => <Link to={item.url}>{item.label}</Link>,
          active   :node.board.id === currentBoardId,
        }
      }),
    ],
  }

  const initialSelectedItem = rootItem.items.find((item) => item.active)

  return (
    <NavigationSelectMenu
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'near',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      rootItem={rootItem}
      initialSelectedItem={initialSelectedItem}
      openOnHover
      // {...otherProps}
    >
      {children}
    </NavigationSelectMenu>
  )
}

RawSelectMenu.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,

  /** The relay data to use for the component fragment */
  data:PropTypes.any,
}

function SelectMenu(props) {
  const result = useBoardMemberships()
  return (
    <RawSelectMenu
      data={result}
      {...props}
    />
  )
}

export { RawSelectMenu }

export default SelectMenu
