/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import {
  useInsertionEffect, useRef, useCallback, useEffect,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import {
  Link, useHistory,
} from 'react-router-dom'

import styleNames from '@aztlan/bem'
import {
  useFragment, graphql,
} from 'react-relay'

import {
  useBoardContext,
  useViewerPreferences,
} from 'modules/common/components'
import { PREFERENCES } from 'modules/common/constants'
import { useAuthenticationContext } from '@aztlan/ui'
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
  preferences = {},
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
    setCurrentGroupId,
  } = useBoardContext()

  const history = useHistory()

  const {
    detailsLink, variantLink, isExpressionSelected,
  } = useExpressionLinks(result.id)

  const expressionRef = useRef(null)

  const bookmarkButtonRef = useRef(null)
  const audioPlayerRef = useRef(null)
  const audioPlayerSlowRef = useRef(null)

  const { actionOnExpressionClick } = preferences

  const onContentClick = useCallback(
    () => {
      switch (actionOnExpressionClick) {
        case PREFERENCES.ACTION_ON_EXPRESSION_CLICK.DISPLAY_DETAILS:
          history.push(detailsLink)
          break
        case PREFERENCES.ACTION_ON_EXPRESSION_CLICK.PLAY_AUDIO:
          audioPlayerRef.current?.click()
          break
        case PREFERENCES.ACTION_ON_EXPRESSION_CLICK.PLAY_AUDIO_SLOW:
          audioPlayerSlowRef.current?.click()
          break
        case PREFERENCES.ACTION_ON_EXPRESSION_CLICK.BOOKMARK:
          bookmarkButtonRef.current?.click()
          break
        default:
          break
      }
    }, [
      detailsLink,
      actionOnExpressionClick,
    ],
  )

  useEffect(() => {
    if (isExpressionSelected) {
      expressionRef.current.scrollIntoView({
        behavior:'smooth',
        block   :'center',
        inline  :'center',
      })
      setCurrentGroupId(groupID)
    }
  })

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
        <div
          className="expression manual-mobile-only"
          onClick={onContentClick}
        >
          <p>{result.correctedContent || result.content}</p>
        </div>
        <div className="tools manual-mobile-only">
          <AudioButton
            data={result}
            ref={audioPlayerRef}
          />
          <AudioButton
            data={result}
            playbackRate={0.65}
            ref={audioPlayerSlowRef}
            content="65"
          />
          <BookmarkButton
            data={result}
            ref={bookmarkButtonRef}
          />
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
            <Details data={result} />
          )}

          {currentExpressionActionSlug === 'variant' && (
            <Variant
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

function LoggedInExpression(props) {
  const preferences = useViewerPreferences()
  return (
    <Expression
      preferences={preferences}
      {...props}
    />
  )
}

export default function (props) {
  const { data } = useAuthenticationContext()
  if (!data) {
    return <Expression {...props} />
  }
  return <LoggedInExpression {...props} />
}
