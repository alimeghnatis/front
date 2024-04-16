/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  useFragment, graphql,
} from 'react-relay'
import styleNames from '@aztlan/bem'
import { Expression } from './common/index.js'

const baseClassName = styleNames.base
const componentClassName = 'group'

const FRAGMENT = graphql`
  fragment GroupFragment on GroupNode {
    id
    created
    expressions(first: 50) @connection(key: "GroupFragment_expressions") {
      edges {
        node {
          ...ExpressionFragment
        }
      }
    }
  }
`

/**
 * description
 * @param {InferProps<typeof Group.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Group
 */
function Group({
  id,
  className: userClassName,
  style,
  data,
}: // ...otherProps

InferProps<typeof Group.propTypes>): React.ReactElement {
  const result = useFragment(
    FRAGMENT, data,
  )

  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  if (!result.expressions.edges.length) {
    return null
  }

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'container',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      key={result.id}
      // {...otherProps}
    >
      {result.expressions.edges.map((edge) => (
        <Expression
          key={edge.node.id}
          data={edge.node}
          groupID={result.id}
        />
      ))}
    </div>
  )
}

Group.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The data to use */
  data:PropTypes.any,
}

export default Group
