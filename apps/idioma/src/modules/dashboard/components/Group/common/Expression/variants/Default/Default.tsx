import * as React from 'react'
import {
  useMemo, useEffect,
} from 'react'
import {
  graphql, useRefetchableFragment,
} from 'react-relay'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import styleNames from '@aztlan/bem'
import Expression from '../../Expression.js'

import checkRecentUnprocessed from './checkRecentUnprocessed.js'

const componentClassName = 'default-expression'

const FRAGMENT = graphql`
  fragment DefaultExpressionFragment on ExpressionNode
    @refetchable(queryName: "DefaultExpressionRefetchQuery") {
    id
    isProcessed
    created
    iso6391
    iso6392
    iso6393
    isNew
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
  const [
    result,
    refetch,
  ] = useRefetchableFragment(
    FRAGMENT, data,
  )

  const isRecentAndUnprocessed = useMemo(
    () => checkRecentUnprocessed(
      result.isProcessed, result.created,
    ),
    [
      result.iso6392,
      result.isProcessed,
      result.created,
    ],
  )

  console.log(
    'result', atob(result.id), result.isNew,
  )

  useEffect(
    () => {
      let intervalId: NodeJS.Timeout | undefined

      if (isRecentAndUnprocessed && !result.isNew) {
        intervalId = setInterval(
          () => {
            refetch(
              {}, { fetchPolicy: 'store-and-network' },
            )
          }, 200,
        )
      }

      return () => {
        if (intervalId) {
          clearInterval(intervalId)
        }
      }
    }, [
      isRecentAndUnprocessed,
      refetch,
      result.isNew,
    ],
  )

  return (
    <Expression
      className={[
        componentClassName,
        userClassName,
        result.isNew && styleNames.modifierLoading,
      ]
        .filter((e) => e)
        .join(' ')}
      data={result}
      // style={{ background: result.isProcessed ? 'inherit' : 'lightcoral' }}
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

export default React.memo(DefaultExpression)
