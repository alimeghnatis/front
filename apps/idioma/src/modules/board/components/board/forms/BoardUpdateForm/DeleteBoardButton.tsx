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
import {
  Button, useNotificationContext,
} from '@aztlan/ui'
import { useBoardContext } from 'modules/common/components'

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

  const { notify } = useNotificationContext()

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
          notify.success('Board deleted.')
        },
        onError:(error) => {
          const { errors } = error?.res
          notify.errorCode(errors?.[0]?.message)
        },
      })
    }, [
      result.id,
      deleteBoard,
    ],
  )

  const disabled = isDeleteInFlight

  //
  //
  return (
    <Button
      disabled={disabled}
      onClick={handleDelete}
      key={result.id}
      variant="borderless"
      color="error"
      title={disabled ? 'Deletion in progress' : 'Click to delete the board'}
      {...props}
    >
      Delete Board
    </Button>
  )
}

DeleteButton.propTypes = { data: PropTypes.object.isRequired }

export default DeleteButton
