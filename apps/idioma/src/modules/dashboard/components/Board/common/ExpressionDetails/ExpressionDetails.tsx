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
      <div className="label">Content</div>
      <div className="field">{result.correctedContent}</div>
      <div className="label">ISO 639</div>
      <div className="field">
        {result.iso6391 || result.iso6392 || result.iso6393}
      </div>
      <div className="label">General Explanation</div>
      <div
        className="field"
        dangerouslySetInnerHTML={{ __html: marked.parse(result.generalExplanation) }}
      />
      <div className="label">Grammar</div>
      <div
        className="field"
        dangerouslySetInnerHTML={{ __html: marked.parse(result.grammarExplanation) }}
      />
      <div className="label">Content</div>
      <div className="field">{result.correctedContent}</div>
      <div className="label">Word by word</div>
      <div
        className="field"
        dangerouslySetInnerHTML={{ __html: marked.parse(result.wordsExplanation) }}
      />
      {result.audioUrl && (
        <>
          <div className="label">Audio</div>
          <div className="field">
            <audio ref={audioRef}>
              <source
                src={result.audioUrl}
                type="audio/mpeg"
              />
            </audio>
            <button onClick={playAudio}>Play</button>
          </div>
        </>
      )}
      <div className="label">Created</div>
      <div className="field">{result.created}</div>
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
