/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import {
  useCallback, useInsertionEffect, useRef,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'
import {
  useFragment,
  graphql,
  useMutation,
  RecordSourceSelectorProxy,
  ConnectionHandler,
} from 'react-relay'

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
    grammarExplanation
    wordsExplanation
    audioUrl
    created
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
      deleteExpression({
        variables:{ input: { id: atob(result.id).split(':')[1] } },
        updater  :(store: RecordSourceSelectorProxy) => {
          const groupRecord = store.get(groupID)
          const connectionRecord = ConnectionHandler.getConnection(
            groupRecord,
            'GroupFragment_expressions',
          )
          ConnectionHandler.deleteNode(
            connectionRecord, result.id,
          )
        },
        optimisticUpdater:(store: RecordSourceSelectorProxy) => {
          const groupRecord = store.get(groupID)
          const connectionRecord = ConnectionHandler.getConnection(
            groupRecord,
            'GroupFragment_expressions',
          )
          ConnectionHandler.deleteNode(
            connectionRecord, result.id,
          )
        },
      })
    }, [
      result.id,
      deleteExpression,
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
      <div className="language">
        {result.iso6391 || result.iso6392 || result.iso6393}
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
        <button>?</button>
        <button>*</button>
        <button
          disabled={isDeleteInFlight}
          onClick={handleDelete}
        >
          x
        </button>
      </div>
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
