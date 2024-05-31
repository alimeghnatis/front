import * as React from 'react'
import {
  useCallback, useInsertionEffect,
} from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import { useHistory } from 'react-router-dom'
import {
  graphql, useFragment, useMutation,
} from 'react-relay'
import {
  Button, useNotificationContext,
} from '@aztlan/ui'
import { useBoardContext } from 'modules/common/components'
import styleNames from '@aztlan/bem'

const baseClassName = styleNames.base
const componentClassName = 'reset-chat-button'

const FRAGMENT = graphql`
  fragment ResetChatButtonFragment on ThreadNode {
    id
    messages(last: 4, before: null)
      @connection(key: "ResetChatButtonFragment_messages") {
      __id
      edges {
        cursor
      }
    }
  }
`

const MUTATION_RESET_CHAT = graphql`
  mutation ResetChatButtonMutation($input: UpdateBoardMutationInput!) {
    updateBoard(input: $input) {
      instance {
        ...ChatFragment
      }
      errors {
        field
        messages
      }
    }
  }
`

/**
 * ResetChatButton component to reset the chat in the board context.
 * @param {InferProps<typeof ResetChatButton.propTypes>} props - The component props.
 * @returns {React.ReactElement} - Rendered ResetChatButton component.
 */
function ResetChatButton({
  data,
  ...props
}: InferProps<typeof ResetChatButton.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const result = useFragment(
    FRAGMENT, data,
  )
  console.log(
    'RCB', result,
  )
  const {
    id: boardID, uuid: boardUUID,
  } = useBoardContext()
  const history = useHistory()

  const [
    commit,
    isInFlight,
  ] = useMutation(MUTATION_RESET_CHAT)

  const { notify } = useNotificationContext()

  const handleReset = useCallback(
    (): void => {
      const isConfirmed = confirm('Are you sure you want to reset the chat?')
      if (!isConfirmed) {
        return
      }

      const tempThreadId = btoa(`ThreadNode:${Math.random()}`)

      commit({
        variables:{
          input:{
            id            :boardUUID,
            openaiThreadId:null,
          },
        },
        optimisticResponse:{
          updateBoard:{
            instance:{
              id            :boardID,
              openaiThreadId:tempThreadId,
              thread        :{
                createdAt:new Date().toISOString(),
                id       :result.id,
                messages :{
                  edges   :[],
                  pageInfo:{
                    startCursor    :null,
                    hasPreviousPage:false,
                  },
                },
              },
            },
            errors:null,
          },
        },
        onCompleted:() => {
        // history.push(basePath)
          notify.success('Chat reset.')
        },
        onError:(error) => {
          const { errors } = error?.res
          notify.errorCode(errors?.[0]?.message)
        },
      })
    }, [
      boardUUID,
      boardID,
      commit,
      history,
    ],
  )

  const disabled = isInFlight || !result?.messages?.edges.length

  return (
    <Button
      disabled={disabled}
      onClick={handleReset}
      // className={`${baseClassName} ${componentClassName}`}
      {...props}
      variant="borderless"
      color="warning"
      title={
        disabled
          ? 'Chat is empty, no need to reset'
          : 'Click to clear the existing chat messages'
      }
    >
      Reset Chat
    </Button>
  )
}

ResetChatButton.propTypes = { data: PropTypes.object.isRequired }

export default ResetChatButton
