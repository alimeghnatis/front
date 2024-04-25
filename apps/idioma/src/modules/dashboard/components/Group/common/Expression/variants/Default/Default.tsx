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
      result.isProcessed,
      result.created,
    ],
  )

  useEffect(
    () => {
      let intervalId: NodeJS.Timeout | undefined // Initialize intervalId as undefined

      // iso equality is a proxy for loaded but not processed
      const loadedAndUnprocessedProxy = result.iso6392 !== '***'
      if (isRecentAndUnprocessed && loadedAndUnprocessedProxy) {
        intervalId = setInterval(
          () => {
            // console.log('Refetching data...')
            refetch(
              {}, { fetchPolicy: 'store-and-network' },
            )
          }, 200,
        )
      }

      // Cleanup function that will clear the interval if 'result.isProcessed' is true
      return () => {
        clearInterval(intervalId)
      }
    }, [
      isRecentAndUnprocessed,
      refetch,
      result.iso6392,
      result.isProcessed,
    ],
  )

  const isNew = useMemo(
    () => isRecentAndUnprocessed, [],
  )

  return (
    <Expression
      className={[
        componentClassName,
        userClassName,
        isNew && styleNames.modifierLoading,
      ]
        .filter((e) => e)
        .join(' ')}
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
