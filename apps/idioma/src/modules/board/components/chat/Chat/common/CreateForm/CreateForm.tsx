/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'
import {
  useInsertionEffect, useRef, useState, useCallback,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  useMutation,
  graphql,
  ConnectionHandler,
  useFragment,
} from 'react-relay'
import { useNotificationContext } from '@aztlan/ui'
import styleNames from '@aztlan/bem'
import {
  useBoardContext, TextareaForm,
} from 'modules/common/components'

// const baseClassName = styleNames.base
const componentClassName = 'create-form'

const MUTATION_CREATE_MESSAGE = graphql`
  mutation CreateFormBoardMessageMutation(
    $input: CreateBoardMessageInput!
    $connections: [ID!]!
  ) {
    createBoardMessage(input: $input) {
      instances
        @appendNode(
          connections: $connections
          edgeTypeName: "LanguageMessageTypeEdge"
        ) {
        ...MessageFragment
      }
      errors
    }
  }
`

const FRAGMENT = graphql`
  fragment CreateFormFragment on BoardNode {
    openaiThreadId
  }
`

/**
 * description
 * @param {InferProps<typeof CreateForm.propTypes>} props -
 * @returns {React.ReactElement} - Rendered CreateForm
 */
function CreateForm({
  className: userClassName,
  data,
  ...otherProps
}: // ...otherProps

InferProps<typeof CreateForm.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const result = useFragment(
    FRAGMENT, data,
  )

  const {
    id: boardID, uuid: boardUUID, containerRef,
  } = useBoardContext()

  const [
    commit,
    isInFlight,
  ] = useMutation(MUTATION_CREATE_MESSAGE)

  const { notify } = useNotificationContext()

  const handleSubmit = useCallback(
    (inputValue) => {
      const connectionID = ConnectionHandler.getConnectionID(
        btoa(`ThreadNode:${result.openaiThreadId}`),
        'ThreadFragment_messages',
      )
      const tempID1 = btoa(`ExpressionNode:${Math.random()}`)
      const tempID2 = btoa(`ExpressionNode:${Math.random()}`)
      const sharedOptimisticResponse = {
        runId    :null,
        threadId :result.openaiThreadId,
        createdAt:new Date().toISOString(),
      }

      // const tempCreated = new Date().toISOString()
      commit({
        variables:{
          input:{
          // ...input,
            content:inputValue,
            boardId:boardUUID,
          },
          connections:[connectionID],
        },
        optimisticResponse:{
          createBoardMessage:{
            instances:[
              {
                id     :tempID1,
                role   :'user',
                content:{
                  __typename:'UserLanguageMessageType',
                  content   :inputValue,
                },
                isLoading:false,
                ...sharedOptimisticResponse,
              },
              {
                id       :tempID2,
                role     :'assistant',
                isLoading:true,
                content  :{
                  __typename :'AssistantLanguageMessageType',
                  content    :'',
                  suggestions:[],
                  iso6393    :null,
                  iso6392    :null,
                  iso6391    :null,
                },
                ...sharedOptimisticResponse,
              },
            ],
            errors:null,
          },
        },
        optimisticUpdater:(store) => {
          setTimeout(
            () => {
              containerRef.current?.scrollTo({
                top     :containerRef.current.scrollHeight + 30,
                behavior:'smooth',
              })
            }, 0,
          )
        },
        onCompleted:() => {
          setTimeout(
            () => {
              notify.success(
                'Chat message received', 2,
              )
              containerRef.current?.scrollTo({
                top     :containerRef.current.scrollHeight + 30,
                behavior:'smooth',
              })
            }, 0,
          )
        },
        onError:(error) => {
          const { errors } = error?.res
          notify.errorCode(errors?.[0]?.message)
        },
      })
    }, [],
  )

  return (
    <TextareaForm
      className={[
        componentClassName,
        userClassName,
      ].filter(Boolean).join(' ')}
      isInFlight={isInFlight}
      handleSubmit={handleSubmit}
      placeholder="Expressions about going to the supermarket in Mexican Spanish."
      buttonLabel="Send"
      {...otherProps}
    />
  )
}

CreateForm.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The data for this element */
  data:PropTypes.objectOf(PropTypes.any).isRequired,
}

export default CreateForm
