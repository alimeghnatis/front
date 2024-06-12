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
import {
  parseISO, isSameDay,
} from 'date-fns'
import { DateTime } from '@aztlan/ui'
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
          createdAt
          role
          ...MessageFragment
        }
      }
    }
  }
`

/**
 * Compares the day of two ISO date strings using date-fns.
 * @param {string} isoString1 - The first ISO date string.
 * @param {string} isoString2 - The second ISO date string.
 * @returns {boolean} - Returns true if both dates are on the same day, false otherwise.
 */
function compareDays(
  isoString1: string, isoString2: string,
): boolean {
  const date1 = parseISO(isoString1)
  const date2 = parseISO(isoString2)

  return isSameDay(
    date1, date2,
  )
}

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

  const messageEdges = [...result.messages.edges].reverse()

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
      {messageEdges.length > 0 ? (
        messageEdges.map((
          edge, index,
        ) => (
          <div
            className="grid container message-wrapper"
            key={`${edge.node.role}${edge.node.createdAt}`}
          >
            {index < messageEdges.length - 1
            && compareDays(
              edge.node.createdAt,
              messageEdges[index + 1].node.createdAt,
            ) ? null : (
              <div className="container date">
                <p className="info">
                  <DateTime
                    iso={edge.node.createdAt}
                    format="date"
                  />
                </p>
              </div>
              )}
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
