/* @aztlan/generator-front 1.4.1 */
import * as React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  graphql,
  useMutation,
  useRelayEnvironment,
  commitLocalUpdate,
} from 'react-relay'
import Template from '../layer/Main.js'
import {
  AdditionForm, Board,
} from '../components/index.js'
import { useBoardContext } from '../../common/components/index.js'

/*
const FRAGMENT = graphql`
  fragment BoardDashboardFragment on UserNode {
    firstName
    lastName
    created
    updated
    email
    profilePicture
  }
` */

const QUERY = graphql`
  query BoardSingleQuery($board: ID!) {
    board(id: $board) {
      id
      name
      created
      updated
      newExpressionsCount
      ...BoardFragment
      ...BoardUpdateFormFragment
      ...ExpressionVariantBoardFragment
      ...ChatFragment
    }
  }
`
export { QUERY }

function BoardPage() {
  const environment = useRelayEnvironment()
  const {
    data, id: boardID,
  } = useBoardContext()

  // Effect to on first load reset with commitLocalUpdate the board.newExpressionsCount

  useEffect(
    () => {
      if (data?.newExpressionsCount) {
        commitLocalUpdate(
          environment, (store) => {
            const board = store.get(boardID)
            if (board) {
              board.setValue(
                0, 'newExpressionsCount',
              )
            } else {
              console.error('BoardPage useEffect board not found')
            }
          },
        )
      }
    }, [boardID],
  )

  return (
    <>
      {/*
      <h1>Board </h1>
      <pre
        style={{
          whiteSpace:'pre-wrap',
          wordWrap  :'break-word',
        }}
      >
        {JSON.stringify(
          data, null, 2,
        )}
      </pre> */}
      <Board data={data} />
      <AdditionForm />
    </>
  )
}

export default BoardPage
