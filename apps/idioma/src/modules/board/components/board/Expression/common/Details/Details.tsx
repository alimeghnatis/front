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
import { useBoardContext } from 'modules/common/components'
import { RatingForm } from './common/index.js'
import { Morphosa } from '../Morphosa/index.js'

const baseClassName = styleNames.base
const componentClassName = 'expression-details'

const FRAGMENT = graphql`
  fragment DetailsFragment on ExpressionNode {
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
    ...MorphosaFragment
  }
`

// PropTypes for ContentMap component

/**
 * ContentMap component to render content maps.
 * @param {InferProps<typeof ContentMapPropTypes>} props - Props for ContentMap component.
 * @returns {React.ReactElement} - Rendered content map.
 */
const ContentMap: React.FC<InferProps<typeof ContentMap.PropTypes>> = ({
  contentMap,
  spanLabel,
  spanLabelDesktop,
  spanContent,
  spanContentDesktop,
  className,
}) => {
  const validItems = contentMap.filter(({ condition }) => condition || condition === undefined)

  if (!validItems.length) {
    return null
  }
  return (
    <div
      className={[
        'grid',
        'content-map',
        className,
      ].filter(Boolean).join(' ')}
    >
      {validItems.map(({
        label, payload, marked: isMarked,
      }) => (
        <>
          <div
            className={[
              'label',
              `span-${spanLabel}`,
              `md-span-${spanLabelDesktop}`,
            ].join(' ')}
          >
            {label}
          </div>
          <div
            className={[
              'field',
              `span-${spanContent}`,
              `md-span-${spanContentDesktop}`,
            ].join(' ')}
            dangerouslySetInnerHTML={
              isMarked ? { __html: marked.parse(payload) } : undefined
            }
            children={!isMarked ? payload : undefined}
          />
        </>
      ))}
    </div>
  )
}

ContentMap.PropTypes = {
  contentMap:PropTypes.arrayOf(PropTypes.shape({
    condition:PropTypes.bool,
    label    :PropTypes.string.isRequired,
    payload  :PropTypes.string.isRequired,
    marked   :PropTypes.bool,
  })).isRequired,
  spanLabel         :PropTypes.number.isRequired,
  spanLabelDesktop  :PropTypes.number.isRequired,
  spanContent       :PropTypes.number.isRequired,
  spanContentDesktop:PropTypes.number.isRequired,
}

/**
 * description
 * @param {InferProps<typeof Details.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Details
 */
function Details({
  id,
  className: userClassName,
  style,
  data,
}: // ...otherProps

InferProps<typeof Details.propTypes>): React.ReactElement {
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

  const contentMap0 = [
    {
      label  :'Morpho-syntactic analysis',
      payload:(
        <Morphosa
          data={result}
          displayHeadOnHover
          displayWordAnalysisOnHover
          // exclude={['function']}
        />
      ),
    },
    {
      condition:boardData?.displayTranslations && result.translation?.length,
      label    :'Translation',
      payload  :result.translation,
      // marked   :true,
    },
  ]

  const contentMap1 = [
    {
      condition:boardData.displayGeneral && result.generalExplanation,
      label    :'General',
      payload  :result.generalExplanation,
      marked   :true,
    },
    {
      condition:boardData.displayGrammar && result.grammarExplanation,
      label    :'Grammar',
      payload  :result.grammarExplanation,
      marked   :true,
    },
  ]

  const contentMap2 = [
    {
      condition:boardData.displayWords && result.wordsExplanation,
      label    :'Word by word',
      payload  :result.wordsExplanation,
      marked   :true,
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
        <ContentMap
          contentMap={contentMap0}
          spanLabel={spanLabel}
          spanLabelDesktop={12}
          spanContent={spanContent}
          spanContentDesktop={12}
          className="analysis span-8 md-span-12"
        />
        <ContentMap
          contentMap={contentMap1}
          spanLabel={spanLabel}
          spanLabelDesktop={6}
          spanContent={spanContent}
          spanContentDesktop={6}
          className="explanations span-8 md-span-6"
        />
        <ContentMap
          contentMap={contentMap2}
          spanLabel={spanLabel}
          spanLabelDesktop={7}
          spanContent={spanContent}
          spanContentDesktop={7}
          className="details span-8 md-span-7"
        />
        <RatingForm
          data={result}
          className="span-8 md-span-6"
          spanLabel={spanLabel}
          spanLabelDesktop={1}
          spanContent={spanContent}
          spanContentDesktop={10}
        />
      </div>
    </MobilePopup>
  )
}

Details.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The data to use */
  data:PropTypes.any,
}

export default Details
