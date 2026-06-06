/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import {
  useEffect, useInsertionEffect, useRef, useCallback,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  usePaginationFragment, graphql,
} from 'react-relay'
import { useHistory } from 'react-router-dom'
import styleNames from '@aztlan/bem'
import { useIntersectionObserverLoader } from '@aztlan/react-relay'
import { useBoardContext } from 'modules/common/components'
import { DefaultGroup } from '../Group/index.js'

const baseClassName = styleNames.base
const componentClassName = 'board'

const FRAGMENT = graphql`
  fragment BoardFragment on BoardNode
    @refetchable(queryName: "BoardFragmentPaginationQuery")
    @argumentDefinitions(
      count: { type: "Int", defaultValue: 20 }
      cursor: { type: "String", defaultValue: null }
    ) {
    id
    iso6391
    iso6392
    iso6393
    created
    newExpressionsCount
    groups(first: $count, after: $cursor)
      @connection(key: "BoardFragment_groups") {
      edges {
        node {
          ...DefaultGroupFragment
        }
      }
    }
  }
`

/**
 * description
 * @param {InferProps<typeof Board.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Board
 */
function Board({
  id,
  className: userClassName,
  style,
  data,
}: // ...otherProps

InferProps<typeof Board.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const {
    data: result,
    loadNext,
    hasNext,
    isLoadingNext,
  } = usePaginationFragment(
    FRAGMENT, data,
  )

  const loadMoreRef = useRef<HTMLDivElement>(null)
  const groupsContainerRef = useRef<HTMLDivElement>(null)
  const loadMoreWrapperRef = useRef<HTMLDivElement>(null)

  useIntersectionObserverLoader(
    loadMoreRef, hasNext, loadNext, isLoadingNext,
  )

  const {
    containerRef, baseBoardUrl, currentExpressionId,
  } = useBoardContext()

  useEffect(
    () => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasNext && !isLoadingNext) {
            loadNext(15)
          }
        },
        {
          threshold :0,
          rootMargin:'0px 0px 0px 0px',
        // root      :containerRef.current,
        },
      )

      if (loadMoreRef.current) {
        observer.observe(loadMoreRef.current)
      }

      return () => {
        if (loadMoreRef.current) {
          observer.unobserve(loadMoreRef.current)
        }
      }
    }, [
      loadMoreRef.current,
      hasNext,
      isLoadingNext,
      loadNext,
    ],
  )

  const edges = [...(result?.groups?.edges || [])].reverse()

  const history = useHistory()

  const handleClickOnBoard = useCallback(
    (e) => {
      const { target } = e
      const containerElement = containerRef.current
      const groupsContainerElement = groupsContainerRef.current
      const loadMoreWrapperElement = loadMoreWrapperRef.current
      if (
        (target === containerElement
          || target == groupsContainerElement
          || target == loadMoreWrapperElement)
        && currentExpressionId
      ) {
        history.push(baseBoardUrl)
      } else {
        // console.log('a child was clicked')
      }
    },
    [
      containerRef,
      groupsContainerRef,
      currentExpressionId,
    ],
  )

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'grid',
        'no-scrollbar',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      ref={containerRef}
      onClick={handleClickOnBoard}
      // {...otherProps}
    >
      {!result?.groups?.edges.length && (
        <div className="container empty grid">
          <div className="span-8 md-start-3 md-span-10">
            <p className="info">Welcome to your board.</p>
            <p className="info">
              Start by adding an expression using the form at the bottom. This
              works in any language. You can also use the chat mode to generate
              expressions.
            </p>
          </div>
        </div>
      )}
      <div
        className="groups container"
        ref={groupsContainerRef}
      >
        {// results? because of the expreession refetch. Non deterministic error saying canoot read property 'groups' of null
        edges.map((edge) => (
          <DefaultGroup
            key={edge.node.id}
            data={edge.node}
          />
        ))
}
      </div>
      <div
        // ref={loadMoreRef}
        id="load-more"
        className="container"
        ref={loadMoreWrapperRef} // Only used to deselect
      >
        <div
          ref={loadMoreRef}
          className="ref"
        />
        {isLoadingNext && <p className="info">Loading previous expressions.</p>}
        {!hasNext && result?.groups?.edges.length > 0 && (
          <p className="info">This is the beginning of the board.</p>
        )}
      </div>
    </div>
  )
}

Board.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The data to use */
  data:PropTypes.any,
}

export default Board
