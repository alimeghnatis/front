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
import { Message } from '../Message/index.js'

const baseClassName = styleNames.base
const componentClassName = 'thread'

const FRAGMENT = graphql`
  fragment ThreadFragment on ThreadNode
    @refetchable(queryName: "ThreadFragmentPaginationQuery")
    @argumentDefinitions(
      count: { type: "Int", defaultValue: 10 }
      cursor: { type: "String", defaultValue: null }
    ) {
    id
    createdAt
    messages(first: $count, after: $cursor)
      @connection(key: "ThreadFragment_messages") {
      edges {
        node {
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
    loadNext,
    hasNext,
    isLoadingNext,
  } = usePaginationFragment(
    FRAGMENT, data,
  )

  const loadMoreRef = useRef<HTMLDivElement>(null)

  useIntersectionObserverLoader(
    loadMoreRef, loadNext, hasNext, isLoadingNext,
  )

  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  console.log(result)

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'container grid',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      {result.messages.edges.map((edge) => (
        <Message
          key={edge.node.id}
          data={edge.node}
        />
      ))}
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
