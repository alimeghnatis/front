/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  useFragment, graphql,
} from 'react-relay'
import { DebugExpression } from '../../common/index.js'
import Group from '../../Group.js'

const componentClassName = 'exp-group-debug'

const FRAGMENT = graphql`
  fragment DebugGroupFragment on Query {
    expressions(first: 100, rating_Lte: 4)
      @connection(key: "DebugGroupFragment_expressions") {
      edges {
        node {
          ...DebugExpressionFragment
        }
      }
    }
  }
`

/**
 * description
 * @param {InferProps<typeof DebugGroup.propTypes>} props -
 * @returns {React.ReactElement} - Rendered DebugGroup
 */
function DebugGroup({
  id,
  className: userClassName,
  style,
  data,
}: // ...otherProps

InferProps<typeof DebugGroup.propTypes>): React.ReactElement {
  const result = useFragment(
    FRAGMENT, data,
  )

  if (!result.expressions.edges.length) {
    return null
  }

  return (
    <Group
      id={id}
      className={[
        componentClassName,
        userClassName,
      ].filter((e) => e).join(' ')}
      style={style}
      // {...otherProps}
    >
      {result.expressions.edges.map((edge) => (
        <DebugExpression
          key={edge.node.id}
          data={edge.node}
        />
      ))}
    </Group>
  )
}

DebugGroup.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The data to use */
  data:PropTypes.any,
}

export default DebugGroup
