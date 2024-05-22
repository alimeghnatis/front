/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'
import {
  useInsertionEffect, useRef,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  graphql, usePaginationFragment,
} from 'react-relay'
import { useIntersectionObserverLoader } from '@aztlan/react-relay'
import styleNames from '@aztlan/bem'
import { useBoardContext } from 'modules/common/components'
import { Message } from '../Message/index.js'

const baseClassName = styleNames.base
const componentClassName = 'thread'

const FRAGMENT = graphql`
  fragment ThreadFragment on ThreadNode
    @refetchable(queryName: "ThreadFragmentPaginationQuery")
    @argumentDefinitions(
      count: { type: "Int", defaultValue: 4 }
      cursor: { type: "String", defaultValue: null }
    ) {
    id
    createdAt
    messages(last: $count, before: $cursor)
      @connection(key: "ThreadFragment_messages") {
      edges {
        node {
          id
          ...MessageFragment
        }
      }
    }
  }
`

/**
 * description
 * @param {InferProps<typeof Thread.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Thread
 */
function Thread({
  id,
  className: userClassName,
  style,
  data,
}: // ...otherProps

InferProps<typeof Thread.propTypes>): React.ReactElement {
  const {
    data: result,
    loadPrevious,
    hasPrevious,
    isLoadingPrevious,
  } = usePaginationFragment(
    FRAGMENT, data,
  )

  const { containerRef } = useBoardContext()

  const loadMoreRef = useRef<HTMLDivElement>(null)

  useIntersectionObserverLoader(
    loadMoreRef,
    hasPrevious,
    loadPrevious,
    isLoadingPrevious,
    { quantity: 4 },
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
        'no-scrollbar',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      ref={containerRef}
      // {...otherProps}
    >
      {result.messages.edges.length > 0 ? (
        [...result.messages.edges].reverse().map((edge) => (
          <div className="grid container message-wrapper">
            <Message
              key={edge.node.id}
              data={edge.node}
            />
          </div>
        ))
      ) : (
        <div className="container empty grid">
          <div className="span-8 md-start-3 md-span-10">
            <p className="info">Welcome to your board.</p>
            <p className="info">
              Start by asking a question related to a language and a topic you
              would like to learn. For instance "What are the most common
              greetings in Spanish?" or "How do I say 'I love you' in French?".
            </p>
          </div>
        </div>
      )}
      <div
        // ref={loadMoreRef}
        id="load-more"
        className="container"
      >
        <div
          ref={loadMoreRef}
          className="ref"
        />
        {isLoadingPrevious && (
          <p className="info">Loading previous chat messages.</p>
        )}
        {!hasPrevious && result.messages.edges.length > 0 && (
          <p className="info">This is the beginning of the conversation.</p>
        )}
      </div>
    </div>
  )
}

Thread.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The data for this element */
  data:PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Thread
