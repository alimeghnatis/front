/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import {
  useInsertionEffect, useRef, useCallback,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import { MobilePopup } from '@aztlan/ui'
import styleNames from '@aztlan/bem'
import {
  useFragment, graphql, useMutation,
} from 'react-relay'
import { marked } from 'marked'
import { useBoardContext } from '../../../../../common/components/index.js'
import { RatingForm } from './common/index.js'

const baseClassName = styleNames.base
const componentClassName = 'expression-details'

const FRAGMENT = graphql`
  fragment ExpressionDetailsFragment on ExpressionNode {
    id
    iso6391
    iso6392
    iso6393
    content
    translation
    correctedContent
    grammarExplanation
    generalExplanation
    wordsExplanation
    audioUrl
    created
    changes
    ...RatingFormFragment
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

  const {
    data: boardData, baseBoardUrl,
  } = useBoardContext()

  const audioRef = useRef<HTMLAudioElement>(null)

  const playAudio = useCallback(
    (): void => {
      if (audioRef.current) {
        audioRef.current.play()
      }
    }, [audioRef],
  )

  const contentMap = [
    /*
    {
      label  :'Content',
      payload:result.correctedContent || result.content,
    },
    {
      label  :'ISO 639',
      payload:result.iso6391 || result.iso6392 || result.iso6393,
    },
    */
    {
      condition:boardData?.displayTranslations && result.translation?.length,
      label    :'Translation',
      payload  :result.translation,
      // marked   :true,
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

  const spanLabel = 8
  const spanLabelDesktop = 2
  const spanContent = 8
  const spanContentDesktop = 8

  return (
    <MobilePopup
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        // 'grid container',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      key={result.id}
      title="Expression details"
      closeLink={baseBoardUrl}
      fixed
      // {...otherProps}
    >
      <div className="grid container">
        {contentMap.map(({
          condition, ...field
        }) => (condition || condition === undefined ? (
          <>
            <div
              className={[
                'label',
                `span-${spanLabel}`,
                `md-span-${spanLabelDesktop}`,
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {field.label}
            </div>
            <div
              className={[
                'field',
                `span-${spanContent}`,
                `md-span-${spanContentDesktop}`,
              ]
                .filter(Boolean)
                .join(' ')}
              dangerouslySetInnerHTML={
                  field.marked
                    ? { __html: marked.parse(field.payload) }
                    : undefined
                }
              children={!field.marked ? field.payload : undefined}
            />
          </>
        ) : null))}
        <RatingForm
          data={result}
          spanLabel={spanLabel}
          spanLabelDesktop={spanLabelDesktop}
          spanContent={spanContent}
          spanContentDesktop={spanContentDesktop}
        />
      </div>
    </MobilePopup>
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
