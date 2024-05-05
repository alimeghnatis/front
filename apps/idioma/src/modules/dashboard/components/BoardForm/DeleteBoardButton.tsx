import * as React from 'react'
import { useCallback } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import { useHistory } from 'react-router-dom'
import {
  graphql,
  useFragment,
  // RecordSourceSelectorProxy,
  ConnectionHandler,
  useMutation,
} from 'react-relay'
import { useBoardContext } from '../../../common/components/index.js'

const FRAGMENT = graphql`
  fragment DeleteBoardButtonFragment on BoardNode {
    id
  }
`

const MUTATION_DELETE = graphql`
  mutation DeleteBoardButtonMutation($input: DeleteBoardMutationInput!) {
    deleteBoard(input: $input) {
      success
    }
  }
`

function DeleteButton({
  data,
  ...props
}: InferProps<typeof DeleteButton.propTypes>): React.ReactElement {
  const result = useFragment(
    FRAGMENT, data,
  )

  const { basePath } = useBoardContext()
  const history = useHistory()

  const [
    deleteBoard,
    isDeleteInFlight,
  ] = useMutation(MUTATION_DELETE)

  const handleDelete = useCallback(
    (): void => {
      const isConfirmed = confirm('Are you sure you want to delete this board?')
      if (!isConfirmed) {
        return
      }
      /*
      const updater = (store) => {
        const groupRecord = store.get(groupID)
        const connectionRecord = ConnectionHandler.getConnection(
          groupRecord,
          'GroupFragment_expressions',
        )
        ConnectionHandler.deleteNode(
          connectionRecord, result.id,
        )
      }
        */

      deleteBoard({
        variables  :{ input: { id: atob(result.id).split(':')[1] } },
        // updater,
        // optimisticUpdater:updater,
        onCompleted:() => {
          history.push(basePath)
        },
      })
    }, [
      result.id,
      deleteBoard,
    ],
  )

  //
  //
  return (
    <button
      disabled={isDeleteInFlight}
      onClick={handleDelete}
      key={result.id}
      {...props}
    >
      Delete Board
    </button>
  )
}

DeleteButton.propTypes = {
  data   :PropTypes.object.isRequired,
  groupID:PropTypes.string.isRequired,
}

export default DeleteButton
