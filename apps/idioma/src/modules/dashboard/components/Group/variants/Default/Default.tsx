/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  useFragment, graphql,
} from 'react-relay'
import { DefaultExpression } from '../../common/index.js'
import Group from '../../Group.js'

const componentClassName = 'exp-group-default'

const FRAGMENT = graphql`
  fragment DefaultGroupFragment on GroupNode {
    id
    created
    expressions(first: 50)
      @connection(key: "DefaultGroupFragment_expressions") {
      edges {
        node {
          ...DefaultExpressionFragment
        }
      }
    }
  }
`

/**
 * description
 * @param {InferProps<typeof DefaultGroup.propTypes>} props -
 * @returns {React.ReactElement} - Rendered DefaultGroup
 */
function DefaultGroup({
  id,
  className: userClassName,
  style,
  data,
}: // ...otherProps

InferProps<typeof DefaultGroup.propTypes>): React.ReactElement {
  const result = useFragment(
    FRAGMENT, data,
  )

  if (!result.expressions.edges.length) {
    return null
  }

  return (
    <Group
      id={id || result.id}
      className={[
        componentClassName,
        userClassName,
      ].filter((e) => e).join(' ')}
      style={style}
      key={result.id}
      // {...otherProps}
    >
      {result.expressions.edges.map((edge) => (
        <DefaultExpression
          key={edge.node.id}
          data={edge.node}
          groupID={result.id}
        />
      ))}
    </Group>
  )
}

DefaultGroup.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The data to use */
  data:PropTypes.any,
}

export default React.memo(DefaultGroup)
