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
    }, [
      boardID,
      data?.newExpressionsCount,
      data?.updated,
    ],
  )

  return (
    <>
      <Board
        data={data}
        className="container"
      />
      <ExpressionCreateForm className="container" />
    </>
  )
}

export default function (props) {
  return (
    <React.Suspense fallback="Loading board">
      <BoardPage {...props} />
    </React.Suspense>
  )
}
