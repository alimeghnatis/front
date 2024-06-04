import * as React from 'react'
import { useCallback } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import styleNames from '@aztlan/bem'
import {
  Button, useNotificationContext,
} from '@aztlan/ui'
import { useBoardContext } from 'modules/common/components'
import { getBoardCountsUpdater } from 'relay/utils'

import {
  graphql,
  useFragment,
  // RecordSourceSelectorProxy,
  ConnectionHandler,
  useMutation,
} from 'react-relay'

const FRAGMENT = graphql`
  fragment DeleteButtonFragment on ExpressionNode {
    id
    isNew
    isProcessed
  }
`

const MUTATION_DELETE = graphql`
  mutation DeleteButtonMutation($input: DeleteExpressionMutationInput!) {
    deleteExpression(input: $input) {
      success
    }
  }
`

function DeleteButton({
  data,
  groupID,
  ...props
}: InferProps<typeof DeleteButton.propTypes>): React.ReactElement {
  const result = useFragment(
    FRAGMENT, data,
  )

  const [
    deleteExpression,
    isDeleteInFlight,
  ] = useMutation(MUTATION_DELETE)

  const { id: boardID } = useBoardContext()

  const { notify } = useNotificationContext()

  const handleDelete = useCallback(
    (): void => {
      const isConfirmed = confirm('Are you sure you want to delete this expression?')
      if (!isConfirmed) {
        return
      }
      const updater = (store) => {
        const groupRecord = store.get(groupID)
        const connectionRecord = ConnectionHandler.getConnection(
          groupRecord,
          'DefaultGroupFragment_expressions',
        )
        ConnectionHandler.deleteNode(
          connectionRecord, result.id,
        )
        const boardCountsUpdater = getBoardCountsUpdater(
          boardID, { expressionCountChange: -1 },
        )
        boardCountsUpdater(store)
      }

      deleteExpression({
        variables        :{ input: { id: atob(result.id).split(':')[1] } },
        updater,
        optimisticUpdater:updater,
        onCompleted      :(response) => {
          notify.success('Expression deleted.')
        },
        onError:(error) => {
          const { errors } = error?.res
          notify.errorCode(errors?.[0]?.message)
        },
      })
    }, [
      result.id,
      deleteExpression,
    ],
  )

  const isNewAndUnprocessed = result.isNew && !result.isProcessed

  //
  //
  return (
    <Button
      disabled={isDeleteInFlight || result.isNew}
      className={[
        result.isNew && styleNames.modifierNew,
        !result.isProcessed && styleNames.modifierLoading,
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={handleDelete}
      key={result.id}
      title="Delete expression"
      {...props}
    >
      x
    </Button>
  )
}

DeleteButton.propTypes = {
  data   :PropTypes.object.isRequired,
  groupID:PropTypes.string.isRequired,
}

export default DeleteButton
