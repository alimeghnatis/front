/* @aztlan/generator-front 1.8.1 */
import * as React from 'react'
import {
  useInsertionEffect, useCallback, useState, useEffect,
} from 'react'
import {
  generatePath, useHistory,
} from 'react-router-dom'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  NavigationHeader, withSuperuser, usePrefetcher,
} from '@aztlan/ui'
import styleNames from '@aztlan/bem'
import {
  graphql, useFragment,
} from 'react-relay'
import {
  useBoardContext, useBoardMemberships,
} from '../../hooks/index.js'
// import { NavigationHeader } from '@aztlan/ui'

const baseClassName = styleNames.base
const componentClassName = 'select-header'

/*
const FRAGMENT = graphql`
  fragment SelectHeaderFragment on BoardMembershipNodeConnection {
    edges {
      node {
        id
        role
        board {
          id
          name
        }
      }
    }
  }
`
  */

/**
 * description
 * @param {InferProps<typeof RawSelectHeader.propTypes>} props -
 * @returns {React.ReactElement} - Rendered RawSelectHeader
 */
function RawSelectHeader({
  id,
  className: userClassName,
  style,
  children,
  data,
  ...otherProps
}: InferProps<typeof RawSelectHeader.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const {
    basePath,
    baseBoardPath,
    currentBoardId,
    createBoardPath,
    chatBoardPath,
    isChat,
  } = useBoardContext()

  // const prefetcher = usePrefetcher()

  // const result = useBoardMemberships()
  const result = data

  const history = useHistory()

  const isCreating = history.location.pathname === createBoardPath

  const [
    selectedBoardId,
    setSelectedBoardId,
  ] = useState(isCreating ? 'new' : currentBoardId)

  const boardMemberships = result?.edges || {}

  const handleSelectionChange = useCallback(
    (event) => {
      const newSelectedBoardId = event.target.value
      if (newSelectedBoardId === 'null') {
        setSelectedBoardId('null')
        history.push(basePath)
      } else if (newSelectedBoardId === 'new') {
        setSelectedBoardId('null')
        history.push(createBoardPath)
      } else {
        setSelectedBoardId(newSelectedBoardId)
        history.push(generatePath(
          isChat ? chatBoardPath : baseBoardPath, { board: newSelectedBoardId },
        ))
      }
    },
    [
      history,
      isChat,
    ],
  )

  /*
  const handleHover = useCallback(
    (board) => () => {
      console.log(
        'hovering', board,
      )
      prefetcher(
        baseBoardPath, { board },
      )
    },
    [],
  ) */

  useEffect(
    () => {
      if (isCreating) {
        setSelectedBoardId('new')
      } else if (selectedBoardId !== currentBoardId) {
        setSelectedBoardId(currentBoardId)
      }
    }, [
      currentBoardId,
      isCreating,
    ],
  )

  return (
    <select
      id="_board"
      name="_board"
      onChange={handleSelectionChange}
      value={selectedBoardId ?? 'null'}
    >
      <option value="null">Select a board</option>
      {boardMemberships.map((membership) => {
        const { node } = membership
        return (
          <option
            key={node.id}
            value={node.board.id}
            // onMouseEnter={handleHover(node.board.id)}
          >
            {node.board.name}
            {' '}
            - (
            {node.role}
            )
            {/* node.board.name */}
          </option>
        )
      })}
      <option value="new">New Board</option>
    </select>
  )
}

RawSelectHeader.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,

  /** The data to use */
  data:PropTypes.any,
}

function SelectHeader(props) {
  const result = useBoardMemberships()
  return (
    <RawSelectHeader
      data={result}
      {...props}
    />
  )
}

export { RawSelectHeader }

export default SelectHeader
