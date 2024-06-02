/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'
import { processWord } from '@aztlan/morphosa'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import {
  graphql, useFragment,
} from 'react-relay'

import styleNames from '@aztlan/bem'

const baseClassName = styleNames.base
const componentClassName = 'morphosa-word'

const FRAGMENT = graphql`
  fragment WordAnalysisFragment on Word {
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
  }
`

/**
 * description
 * @param {InferProps<typeof Word.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Word
 */
function WordAnalysis({
  id,
  className: userClassName,
  style,

  data,
}: // ...otherProps

InferProps<typeof Word.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('../../styles.scss')
    }, [],
  )

  const result = useFragment(
    FRAGMENT, data,
  )

  const fields = [
    {
      label    :'Word',
      payload  :result.word,
      className:processWord(result).classes.join(' '),
    },
    {
      label    :'Lemma',
      payload  :result.lemma,
      condition:result.word.toLowerCase() !== result.lemma[0].toLowerCase(),
    },
    {
      label  :'Part of Speech',
      payload:result.pos?.toLowerCase(),
    },
    {
      label    :'Tense',
      payload  :result.morphology.tense?.toLowerCase(),
      className:`verb tense ${result.morphology.tense}`,
    },
    {
      label    :'Mood',
      payload  :result.morphology.mood?.toLowerCase(),
      className:`verb mood${result.morphology.mood}`,
    },
    {
      label  :'Person',
      payload:result.morphology.person,
    },
    {
      label    :'Gender',
      payload  :result.morphology.gender?.toLowerCase(),
      className:`gender ${result.morphology.gender?.toLowerCase()}`,
    },
    {
      label  :'Number',
      payload:result.morphology.number?.toLowerCase(),
    },
    {
      label    :'Case',
      payload  :result.morphology.case?.toLowerCase(),
      className:`case ${result.morphology.case}`,
    },
    {
      label  :'Syntax Function',
      payload:result.syntax.function?.toLowerCase(),
    },
  ]

  return (
    <p
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'container',
        'morphosa',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      {fields.map((
        field, i,
      ) => ((field.condition || typeof field.condition === 'undefined')
        && field.payload ? (
          <>
            <span
              key={field.payload}
              className={field.className?.toLowerCase()}
              title={field.label}
            >
              {field.payload}
            </span>
            {i < fields.length - 1 && ' '}
          </>
        ) : null))}
    </p>
  )
}

WordAnalysis.propTypes = {
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
}

export default WordAnalysis
