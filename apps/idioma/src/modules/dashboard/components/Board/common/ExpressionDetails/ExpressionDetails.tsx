/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import {
  useInsertionEffect, useRef, useCallback,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'
import {
  useFragment, graphql, useMutation,
} from 'react-relay'
import { marked } from 'marked'

const baseClassName = styleNames.base
const componentClassName = 'expression-details'

const FRAGMENT = graphql`
  fragment ExpressionDetailsFragment on ExpressionNode {
    id
    iso6391
    iso6392
    iso6393
    content
    correctedContent
    grammarExplanation
    generalExplanation
    wordsExplanation
    audioUrl
    created
    changes
  }
`

/**
 * description
 * @param {InferProps<typeof ExpressionDetails.propTypes>} props -
 * @returns {React.ReactElement} - Rendered ExpressionDetails
 */
function ExpressionDetails({
  id,
  className: userClassName,
  style,
  data,
}: // ...otherProps

InferProps<typeof ExpressionDetails.propTypes>): React.ReactElement {
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

  const contentMap = [
    {
      label  :'Content',
      payload:result.correctedContent || result.content,
    },
    {
      label  :'ISO 639',
      payload:result.iso6391 || result.iso6392 || result.iso6393,
    },
    {
      condition:result.generalExplanation,
      label    :'General',
      payload  :result.generalExplanation,
      marked   :true,
    },
    {
      condition:result.grammarExplanation,
      label    :'Grammar',
      payload  :result.grammarExplanation,
      marked   :true,
    },
    {
      condition:result.wordsExplanation,
      label    :'Word by word',
      payload  :result.wordsExplanation,
      marked   :true,
    },
    {
      condition:result.audioUrl,
      label    :'Audio',
      payload  :(
        <>
          <audio ref={audioRef}>
            <source
              src={result.audioUrl}
              type="audio/mpeg"
            />
          </audio>
          <button onClick={playAudio}>Play</button>
        </>
      ),
    },
    {
      label  :'Changes',
      payload:result.changes,
    },
    {
      label  :'Created',
      payload:result.created,
    },
  ]

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'grid container',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      key={result.id}
      // {...otherProps}
    >
      {contentMap.map(({
        condition, ...field
      }) => (condition || condition === undefined ? (
        <>
          <div className="label">{field.label}</div>
          <div
            className="field"
            dangerouslySetInnerHTML={
                field.marked
                  ? { __html: marked.parse(field.payload) }
                  : undefined
              }
            children={!field.marked ? field.payload : undefined}
          />
        </>
      ) : null))}
    </div>
  )
}

ExpressionDetails.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The data to use */
  data:PropTypes.any,
}

export default ExpressionDetails
