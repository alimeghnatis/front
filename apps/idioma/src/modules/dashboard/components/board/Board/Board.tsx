/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import {
  useEffect, useInsertionEffect, useRef,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  usePaginationFragment, graphql,
} from 'react-relay'
import styleNames from '@aztlan/bem'
import { useIntersectionObserverLoader } from '@aztlan/react-relay'
import { DefaultGroup } from '../Group/index.js'
import { useBoardContext } from '../../../../common/components/index.js'

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

  useIntersectionObserverLoader(
    loadMoreRef, hasNext, loadNext, isLoadingNext,
  )

  const { containerRef } = useBoardContext()

  console.log(
    'Board result', result,
  )

  useEffect(
    () => {
      const observer = new IntersectionObserver(
        (entries) => {
          console.log(
            'entries', entries[0],
          )
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

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'grid',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      ref={containerRef}
      // {...otherProps}
    >
      {!result?.groups?.edges.length && (
        <div className="container">
          Start by adding an expression using the form at the bottom.
        </div>
      )}
      <div className="groups container">
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
      >
        <div
          ref={loadMoreRef}
          className="ref"
        />
        {isLoadingNext && 'Loading.'}
        {!hasNext && 'No more to load'}
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
