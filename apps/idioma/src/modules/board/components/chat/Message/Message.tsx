/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  useFragment, graphql,
} from 'react-relay'

import styleNames from '@aztlan/bem'
import { SuggestionGroup } from './common/index.js'

const baseClassName = styleNames.base
const componentClassName = 'thread-message'

const FRAGMENT = graphql`
  fragment MessageFragment on LanguageMessageType {
    id
    runId
    threadId
    role
    createdAt
    isLoading
    content {
      __typename
      ... on UserLanguageMessageType {
        content
      }
      ... on AssistantLanguageMessageType {
        content
        suggestions
        ...SuggestionGroupFragment
      }
    }
  }
`

/**
 * description
 * @param {InferProps<typeof Message.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Message
 */
function Message({
  id,
  className: userClassName,
  style,
  data,
  UNSTABLE_loading = false,
}: // ...otherProps

InferProps<typeof Message.propTypes>): React.ReactElement {
  const result = useFragment(
    FRAGMENT, data,
  )
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'container grid',
        result.role,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <div className="container">
        <strong>{result.role}</strong>
      </div>
      {!(result.isLoading || UNSTABLE_loading) ? (
        <>
          <div className="container">{result.content.content}</div>
          {result.role === 'assistant'
            && result.content.suggestions?.length > 0 && (
              <div className="container suggestions">
                <SuggestionGroup data={result.content} />
              </div>
          )}
        </>
      ) : (
        <div className="container">Assistant is typing...</div>
      )}
    </div>
  )
}

Message.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The data for this element */
  data:PropTypes.object.isRequired,

  /** UNSTABLE, The loading state for this element. This overrides the relay response for testing, since relay mock resolvers do not allow for client side extensions */
  UNSTABLE_loading:PropTypes.bool,
}

export default Message
