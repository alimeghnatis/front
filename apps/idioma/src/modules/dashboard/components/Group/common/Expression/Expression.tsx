/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import {
  useInsertionEffect,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import { Link } from 'react-router-dom'

import styleNames from '@aztlan/bem'
import {
  useRefetchableFragment, graphql,
} from 'react-relay'

import { useBoardContext } from '../../../Board/index.js'
import {
  AudioButton, DeleteButton, BookmarkButton,
} from './common/index.js'
import useExpressionLinks from './useExpressionLinks.js'
import checkRecentUnprocessed from './checkRecentUnprocessed.js'
import {
  ExpressionDetails,
  ExpressionVariant,
} from '../../../Board/common/index.js'

const baseClassName = styleNames.base
const componentClassName = 'expression'

const FRAGMENT = graphql`
  fragment ExpressionFragment on ExpressionNode
    @refetchable(queryName: "ExpressionRefetchQuery") {
    id
    content
    iso6391
    iso6392
    iso6393
    correctedContent
    created
    isProcessed
    isBookmarked
    ...AudioButtonFragment
    ...DeleteButtonFragment
    ...BookmarkButtonFragment
    ...ExpressionDetailsFragment
    ...ExpressionVariantFragment
  }
`

/**
 * description
 * @param {InferProps<typeof Expression.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Expression
 */
function Expression({
  id,
  className: userClassName,
  style,
  data,
  groupID,
}: // ...otherProps

InferProps<typeof Expression.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const [
    result,
    refetch,
  ] = useRefetchableFragment(
    FRAGMENT, data,
  )

  const {
    currentExpressionId,
    currentExpressionActionSlug,
  } = useBoardContext()

  const isRecentAndUnprocessed = useMemo(
    () => checkRecentUnprocessed(
      result.isProcessed, result.created,
    ),
    [
      result.isProcessed,
      result.created,
    ],
  )

  const {
    detailsLink, variantLink,
  } = useExpressionLinks(result.id)

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

  const expressionRef = useRef(null)

  return (
    <div
      id={id || result.id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        isNew && styleNames.modifierLoading,
        result.isBookmarked && 'bookmarked',
        // isRecentAndUnprocessed && styleNames.modifierLoading,
        'grid',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      ref={expressionRef}
      // {...otherProps}
    >
      <div className="grid container general">
        <div className="language manual-mobile-only">
          <strong>{result.iso6391 || result.iso6392 || result.iso6393}</strong>
        </div>
        <div className="expression manual-mobile-only">
          <p>{result.correctedContent || result.content}</p>
        </div>
        <div className="tools manual-mobile-only">
          <AudioButton data={result} />
          <BookmarkButton data={result} />
          <Link to={detailsLink}>
            <button
              type="button"
              title="Display expression details and explanations"
            >
              ?
            </button>
          </Link>
          <Link to={variantLink}>
            <button
              type="button"
              title="Create a new variant of this expression"
            >
              *
            </button>
          </Link>
          <DeleteButton
            data={result}
            groupID={groupID}
          />
        </div>
      </div>

      {currentExpressionId === result.id && (
        <>
          {currentExpressionActionSlug === 'details' && (
            <ExpressionDetails data={result} />
          )}

          {currentExpressionActionSlug === 'variant' && (
            <ExpressionVariant
              data={result}
              groupID={groupID}
            />
          )}
        </>
      )}
    </div>
  )
}

Expression.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The data to use */
  data:PropTypes.any,

  /** The group global ID */
  groupID:PropTypes.string,
}

export default Expression
