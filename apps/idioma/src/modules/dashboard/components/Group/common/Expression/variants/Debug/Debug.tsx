import * as React from 'react'
import {
  useMemo, useEffect,
} from 'react'
import {
  graphql, useFragment,
} from 'react-relay'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import styleNames from '@aztlan/bem'
import Expression from '../../Expression.js'

const componentClassName = 'debug-expression'

const FRAGMENT = graphql`
  fragment DebugExpressionFragment on ExpressionNode {
    id
    isProcessed
    created
    iso6391
    iso6392
    iso6393
    rating
    ratingComment
    rated
    flagIsProcessed
    flagComment
    ...ExpressionFragment
  }
`

/**
 * description
 * @param {InferProps<typeof DebugExpression.propTypes>} props -
 * @returns {React.ReactElement} - Rendered DebugExpression
 */
function DebugExpression({
  className: userClassName,
  data,
  ...otherProps
}: InferProps<typeof DebugExpression.propTypes>): React.ReactElement {
  const result = useFragment(
    FRAGMENT, data,
  )

  return (
    <Expression
      className={[
        componentClassName,
        userClassName,
      ].filter((e) => e).join(' ')}
      data={result}
      extras={result.ratingComment}
      spanExtras="3"
      {...otherProps}
    />
  )
}

DebugExpression.propTypes = {
  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The data for this element */
  data:PropTypes.any,
}

export default DebugExpression
