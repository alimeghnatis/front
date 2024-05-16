/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import {
  useMemo, useInsertionEffect, useState,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import morphosaMapper from '@aztlan/morphosa'

import {
  graphql, useFragment,
} from 'react-relay'

import styleNames from '@aztlan/bem'
import { WordAnalysis } from './common/index.js'

const baseClassName = styleNames.base
const componentClassName = 'morphosa-base'

const FRAGMENT = graphql`
  fragment MorphosaFragment on ExpressionNode {
    #@refetchable(queryName: "MorphosaRefetchQuery")
    id
    analysis {
      payloadV1 {
        word
        lemma
        pos
        morphology {
          tense
          mood
          voice
          aspect
          person
          number
          gender
          case
          politeness
          clusivity
          register
        }
        syntax {
          function
          head
        }
        ...WordAnalysisFragment
      }
      created
    }
  }
`

/**
 * description
 * @param {InferProps<typeof Morphosa.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Morphosa
 */
function Morphosa({
  id,
  className: userClassName,
  style,
  exclude = [],
  displayHeadOnHover = false,
  displayWordAnalysisOnHover = false,

  data,
}: // ...otherProps

InferProps<typeof Morphosa.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const result = useFragment(
    FRAGMENT, data,
  )

  const analysedContent = useMemo(
    () => {
      if (result.analysis) {
        return morphosaMapper(
          result.analysis.payloadV1, exclude,
        )
      }
      return null
    }, [result],
  )

  const [
    selectedWords,
    setSelectedWords,
  ] = useState([])

  if (!analysedContent) {
    return <p>No analisis</p>
    // return null
  }

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        (displayHeadOnHover || displayWordAnalysisOnHover) && 'selectable',
        'morphosa grid',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      onMouseLeave={() => setSelectedWords([])}
      // {...otherProps}
    >
      <div className="content container">
        {analysedContent.map((
          word, i,
        ) => (
          <>
            <span
              key={`${i}-${word}`}
              className={[
                'outer',
                ...word.classes,
                (displayHeadOnHover || displayWordAnalysisOnHover)
                  && selectedWords.indexOf(i) === 0
                  && styleNames.modifierSelected,
                displayHeadOnHover
                  && selectedWords.indexOf(i) === 1
                  && 'important',
              ]
                .filter(Boolean)
                .join(' ')}
              onMouseEnter={() => setSelectedWords([
                i,
                word.head,
              ])}
              onClick={() => setSelectedWords([
                i,
                word.head,
              ])}
            >
              <span className="inner">{word.string}</span>
            </span>
            {i !== analysedContent.length - 1 && ' '}
          </>
        ))}
      </div>
      {displayWordAnalysisOnHover
        && (selectedWords[0] || selectedWords[0] === 0 ? (
          <WordAnalysis data={result.analysis.payloadV1[selectedWords[0]]} />
        ) : (
          <p className="container color metadata">
            Select a word to display more information.
          </p>
        ))}
    </div>
  )
}

Morphosa.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,

  /** The relay data to use for the component fragment */
  data:PropTypes.any,

  /** The list of attributes to exclude from the morphosa mapping */
  exclude:PropTypes.arrayOf(PropTypes.string),

  /** The flag to display the head word on hover */
  displayHeadOnHover:PropTypes.bool,

  /** The flag to display the word analysis on hover */
  displayWordAnalysisOnHover:PropTypes.bool,
}

export default Morphosa
