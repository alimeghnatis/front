/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  useFragment, graphql,
} from 'react-relay'
import styleNames from '@aztlan/bem'
import { Group } from '../Group/index.js'
import { AdditionForm } from '../AdditionForm/index.js'

const baseClassName = styleNames.base
const componentClassName = 'board'

const FRAGMENT = graphql`
  fragment BoardFragment on BoardNode {
    id
    language
    created
    groups(first: 100) @connection(key: "BoardFragment_groups") {
      edges {
        node {
          ...GroupFragment
        }
      }
    }
  }
`

/**
 * description
 * @param {InferProps<typeof Board.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Board
 */
function Board({
  id,
  className: userClassName,
  style,
  data,
}: // ...otherProps

InferProps<typeof Board.propTypes>): React.ReactElement {
  const result = useFragment(
    FRAGMENT, data,
  )

  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'grid',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      {result.groups?.edges.map((edge) => (
        <Group
          key={edge.node.id}
          data={edge.node}
        />
      ))}
      <AdditionForm />
    </div>
  )
}

Board.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The data to use */
  data:PropTypes.any,
}

export default Board
