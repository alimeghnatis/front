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
import styleNames from '@aztlan/bem'
import { useBoardContext } from 'modules/common/components'
import { Textarea } from '../../../../AdditionForm/common/index.js'

const baseClassName = styleNames.base
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
  id,
  className: userClassName,
  style,
  data,
}: // ...otherProps

InferProps<typeof CreateForm.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const [
    inputValue,
    setInputValue,
  ] = useState('')

  const chatRef = useRef(null)

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

  const createMessage = useCallback(
    () => {
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
              containerRef.current?.scrollTo({
                top     :containerRef.current.scrollHeight + 30,
                behavior:'smooth',
              })
            }, 0,
          )
        },
      })
    }, [inputValue],
  )

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'grid container',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <Textarea
        className="span-6 md-span-9"
        value={inputValue}
        placeholder="Type a message..."
        setValue={setInputValue}
      />
      <button
        disabled={isInFlight}
        onClick={createMessage}
        type="button"
      >
        Add
      </button>
    </div>
  )
}

CreateForm.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),
}

export default CreateForm
