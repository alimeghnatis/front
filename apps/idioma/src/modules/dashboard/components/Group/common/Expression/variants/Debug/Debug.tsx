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
    ...ExpressionFragment
  }
`

/**
 * description
 * @param {InferProps<typeof DefaultExpression.propTypes>} props -
 * @returns {React.ReactElement} - Rendered DefaultExpression
 */
function DefaultExpression({
  className: userClassName,
  data,
  ...otherProps
}: InferProps<typeof DefaultExpression.propTypes>): React.ReactElement {
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
      {...otherProps}
    />
  )
}

DefaultExpression.propTypes = {
  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The data for this element */
  data:PropTypes.any,
}

export default DefaultExpression
