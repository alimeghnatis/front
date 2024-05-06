/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import {
  useInsertionEffect, useRef,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import { Link } from 'react-router-dom'

import styleNames from '@aztlan/bem'
import {
  useFragment, graphql,
} from 'react-relay'

import { useBoardContext } from 'modules/common/components'
import {
  AudioButton,
  DeleteButton,
  BookmarkButton,
  Details,
  Variant,
} from './common/index.js'
import useExpressionLinks from './useExpressionLinks.js'

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
    ...DetailsFragment
    ...VariantFragment
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
  extras,
  spanExtras,
}: // ...otherProps

InferProps<typeof Expression.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const result = useFragment(
    FRAGMENT, data,
  )

  const {
    currentExpressionId,
    currentExpressionActionSlug,
  } = useBoardContext()

  const {
    detailsLink, variantLink,
  } = useExpressionLinks(result.id)

  const expressionRef = useRef(null)

  return (
    <div
      id={id || result.id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
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
      <div
        className="grid container general"
        style={{ '--span-extras': spanExtras }}
      >
        <div className="language manual-mobile-only">
          <strong>{result.iso6391 || result.iso6392 || result.iso6393}</strong>
        </div>
        {extras !== undefined && (
          <div className="extras manual-mobile-only">{extras}</div>
        )}
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

  /** Extras to display */
  extras:PropTypes.node,

  /** The span for extras */
  spanExtras:PropTypes.number,
}

export default Expression
