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
import { useBoardContext } from 'modules/common/components'
import Template from '../templates/Primary.js'
import {
  ExpressionCreateForm, Board,
} from '../components/index.js'

const QUERY = graphql`
  query BoardPageSingleQuery($board: ID!) {
    board(id: $board) {
      id
      name
      created
      updated
      newExpressionsCount
      ...BoardFragment
      ...BoardUpdateFormFragment
      ...VariantBoardFragment
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
      <Board
        data={data}
        className="container"
      />
      <ExpressionCreateForm />
    </>
  )
}

export default function (props) {
  return (
    <Template hasSettings>
      <React.Suspense fallback="Loading board">
        <BoardPage {...props} />
      </React.Suspense>
    </Template>
  )
}
