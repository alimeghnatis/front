/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import {
  useCallback, useInsertionEffect, useRef, useMemo,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import { Link } from 'react-router-dom'

import styleNames from '@aztlan/bem'
import {
  useFragment,
  graphql,
  useMutation,
  RecordSourceSelectorProxy,
  ConnectionHandler,
} from 'react-relay'

import { useBoardContext } from '../../../Board/index.js'
import { ExpressionDetails } from '../../../Board/common/index.js'

const baseClassName = styleNames.base
const componentClassName = 'expression'

const FRAGMENT = graphql`
  fragment ExpressionFragment on ExpressionNode {
    id
    content
    iso6391
    iso6392
    iso6393
    correctedContent
    audioUrl
    created
    ...ExpressionDetailsFragment
  }
`

const MUTATION_DELETE = graphql`
  mutation ExpressionDeleteMutation($input: DeleteExpressionMutationInput!) {
    deleteExpression(input: $input) {
      success
    }
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

  const {
    baseBoardUrl,
    getExpressionDetailsUrl,
    currentExpressionId,
    currentExpressionActionSlug,
  } = useBoardContext()

  const result = useFragment(
    FRAGMENT, data,
  )

  const audioRef = useRef<HTMLAudioElement>(null)

  const playAudio = useCallback(
    (): void => {
      if (audioRef.current) {
        audioRef.current.play()
      }
    }, [audioRef],
  )

  const [
    deleteExpression,
    isDeleteInFlight,
  ] = useMutation(MUTATION_DELETE)

  const handleDelete = useCallback(
    (): void => {
      const isConfirmed = confirm('Are you sure you want to delete this expression?')
      if (!isConfirmed) {
        return
      }
      const updater = (store: RecordSourceSelectorProxy) => {
        const groupRecord = store.get(groupID)
        const connectionRecord = ConnectionHandler.getConnection(
          groupRecord,
          'GroupFragment_expressions',
        )
        ConnectionHandler.deleteNode(
          connectionRecord, result.id,
        )
      }

      deleteExpression({
        variables        :{ input: { id: atob(result.id).split(':')[1] } },
        updater,
        optimisticUpdater:updater,
      })
    }, [
      result.id,
      deleteExpression,
    ],
  )

  const {
    detailsLink, variantLink,
  } = useMemo(
    () => {
      const isCurrent = currentExpressionId === result.id
      const detailsType = 'details'
      const variantType = 'variant'

      let detailsLink = getExpressionDetailsUrl?.(
        result.id, detailsType,
      )
      let variantLink = getExpressionDetailsUrl?.(
        result.id, variantType,
      )

      if (isCurrent) {
        if (currentExpressionActionSlug === 'details') {
          detailsLink = baseBoardUrl
          variantLink = getExpressionDetailsUrl?.(
            result.id, variantType,
          )
        } else if (currentExpressionActionSlug === 'variant') {
          detailsLink = getExpressionDetailsUrl?.(
            result.id, detailsType,
          )
          variantLink = baseBoardUrl
        }
      }

      return {
        detailsLink,
        variantLink,
      }
    }, [
      currentExpressionId,
      currentExpressionActionSlug,
      result.id,
      baseBoardUrl,
      getExpressionDetailsUrl,
    ],
  )

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'grid',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <div className="grid container general">
        <div className="language">
          <strong>{result.iso6391 || result.iso6392 || result.iso6393}</strong>
        </div>
        <div className="expression">
          {result.correctedContent || result.content}
        </div>
        <audio ref={audioRef}>
          <source
            src={result.audioUrl}
            type="audio/mpeg"
          />
        </audio>
        <div className="tools">
          <button onClick={playAudio}>&lt;</button>
          <Link to={detailsLink}>
            <button>?</button>
          </Link>
          <Link to={variantLink}>
            <button>*</button>
          </Link>
          <button
            disabled={isDeleteInFlight}
            onClick={handleDelete}
          >
            x
          </button>
        </div>
      </div>
      {currentExpressionId === result.id && (
        <>
          {currentExpressionActionSlug === 'details' && (
            <div className="grid container detail">
              <ExpressionDetails data={result} />
            </div>
          )}

          {currentExpressionActionSlug === 'variant' && (
            <div className="grid container variant">TEST</div>
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
}

export default Expression
