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
import { useBoardContext } from '../../../../Board/index.js'
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
    id: boardID, uuid: boardUUID,
  } = useBoardContext()

  const [
    commit,
    isInFlight,
  ] = useMutation(MUTATION_CREATE_MESSAGE)

  const createMessage = useCallback(
    () => {
      const connectionID = ConnectionHandler.getConnectionID(
        result.threadId,
        'ThreadFragment_messages',
      )
      const tempID1 = btoa(`ExpressionNode:${Math.random()}`)
      const tempID2 = btoa(`ExpressionNode:${Math.random()}`)
      // const tempCreated = new Date().toISOString()
      commit({
        variables:{
          input:{
          // ...input,
            content:inputValue,
            board  :boardUUID,
          },
          connections:[connectionID],
        },
        optimisticResponse:{
          createExpression:{
            instances:[
              {
                id     :tempID1,
                role   :'user',
                content:{ content: inputValue },
              },
              {
                id       :tempID2,
                isLoading:true,
              },
            ],
          },
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
