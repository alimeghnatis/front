/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  graphql, useFragment,
} from 'react-relay'

import styleNames from '@aztlan/bem'

import { Suggestion } from '../Suggestion/index.js'

const baseClassName = styleNames.base
const componentClassName = 'suggestion-group'

const FRAGMENT = graphql`
  fragment SuggestionGroupFragment on AssistantMessageType {
    suggestions
    iso6391
    iso6392
    iso6393
  }
`

/**
 * description
 * @param {InferProps<typeof SuggestionGroup.propTypes>} props -
 * @returns {React.ReactElement} - Rendered SuggestionGroup
 */
function SuggestionGroup({
  id,
  className: userClassName,
  style,
  data,
}: // ...otherProps

InferProps<typeof SuggestionGroup.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const result = useFragment(
    FRAGMENT, data,
  )

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      {result.suggestions.map((suggestion) => (
        <Suggestion
          key={suggestion}
          language={result.iso6391 || result.iso6392 || result.iso6393}
        >
          {suggestion}
        </Suggestion>
      ))}
    </div>
  )
}

SuggestionGroup.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,
}

export default SuggestionGroup
