/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import {
  useInsertionEffect, useCallback,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import styleNames from '@aztlan/bem'
import {
  graphql, useMutation, ConnectionHandler,
} from 'react-relay'
import { useNotificationContext } from '@aztlan/ui'
import {
  useBoardContext, TextareaForm,
} from 'modules/common/components'
import getNodeUpdater from 'relay/utils/getNodeUpdater'
import optimisticExpression from '../optimisticResponses/Expression.js'

// const baseClassName = styleNames.base
const componentClassName = 'addition-form'

const MUTATION_CREATE_EXPRESSION = graphql`
  mutation ExpressionCreateFormCreateExpressionMutation(
    $input: CreateExpressionMutationInput!
    $connections: [ID!]!
  ) {
    createExpression(input: $input) {
      instance {
        ...DefaultExpressionFragment
        ...DetailsFragment
        group
          @prependNode(
            connections: $connections
            edgeTypeName: "GroupNodeEdge"
          ) {
          ...DefaultGroupFragment
        }
      }
      errors {
        field
        messages
      }
    }
  }
`

const MUTATION_APPEND_EXPRESSION = graphql`
  mutation ExpressionCreateFormAppendExpressionMutation(
    $input: CreateExpressionMutationInput!
    $connections: [ID!]!
  ) {
    createExpression(input: $input) {
      instance
        @appendNode(
          connections: $connections
          edgeTypeName: "ExpressionNodeEdge"
        ) {
        ...DefaultExpressionFragment
        ...DetailsFragment
      }
      errors {
        field
        messages
      }
    }
  }
`

const updater = getNodeUpdater('createExpression')

/**
 * description
 * @param {InferProps<typeof ExpressionCreateForm.propTypes>} props -
 * @returns {React.ReactElement} - Rendered ExpressionCreateForm
 */
function ExpressionCreateForm({
  className: userClassName,
  ...otherProps
}: // ...otherProps

InferProps<typeof ExpressionCreateForm.propTypes>): React.ReactElement {
  /*
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  ) */

  const {
    id: boardID,
    uuid: boardUUID,
    containerRef,
    currentExpressionId,
    currentGroupId,
  } = useBoardContext()

  const [
    commitCreateExpression,
    isCreateExpressionInFlight,
  ] = useMutation(MUTATION_CREATE_EXPRESSION)

  const [
    commitAppendExpression,
    isAppendExpressionInFlight,
  ] = useMutation(MUTATION_APPEND_EXPRESSION)

  const isInFlight = isCreateExpressionInFlight || isAppendExpressionInFlight

  const optimisticUpdater = useCallback(
    (store) => {
      setTimeout(
        () => {
          containerRef.current?.scrollTo({
            top     :containerRef.current.scrollHeight + 30,
            behavior:'smooth',
          })
        }, 0,
      )
    }, [],
  )

  const { notify } = useNotificationContext()

  const handleCreate = useCallback(
    (inputValue) => {
      const connectionID = ConnectionHandler.getConnectionID(
        boardID,
        'BoardFragment_groups',
      )
      const tempID = btoa(`ExpressionNode:${Math.random()}`)
      const tempCreated = new Date().toISOString()

      commitCreateExpression({
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
            instance:{
              ...optimisticExpression,
              id              :tempID,
              content         :inputValue,
              correctedContent:inputValue,
              created         :tempCreated,
              group           :{
                id         :btoa(`GroupNode:${Math.random()}`),
                created    :tempCreated,
                expressions:{
                  pageInfo:{
                    hasNextPage:false,
                    endCursor  :null,
                  },
                  edges:[
                    {
                      cursor:tempID,
                      node  :{
                        ...optimisticExpression,
                        id              :tempID,
                        content         :inputValue,
                        correctedContent:inputValue,
                        created         :tempCreated,
                        __typename      :'ExpressionNode',
                      },
                    },
                  ],
                },
              },
            },
            errors:null,
          },
        },
        optimisticUpdater,
        updater,
        onCompleted:(response) => {
          notify.success('Expression created')
        },
        onError:(error) => {
          const { errors } = error?.res
          notify.errorCode(errors?.[0]?.message)
        },
      })
    },
    [currentExpressionId],
  )

  const handleAppend = useCallback(
    (inputValue) => {
      const connectionID = ConnectionHandler.getConnectionID(
        currentGroupId,
        'DefaultGroupFragment_expressions',
      )
      const tempID = btoa(`ExpressionNode:${Math.random()}`)
      const tempCreated = new Date().toISOString()

      commitAppendExpression({
        variables:{
          input:{
            content    :inputValue,
            appendAfter:atob(currentExpressionId).split(':')[1],
          },
          connections:[connectionID],
        },
        optimisticResponse:{
          createExpression:{
            instance:{
              ...optimisticExpression,
              id              :tempID,
              content         :inputValue,
              correctedContent:inputValue,
              created         :tempCreated,
            },
            errors:null,
          },
        },
        // optimisticUpdater,
        updater,
      })
    },
    [
      currentExpressionId,
      currentGroupId,
    ],
  )

  const handleSubmit = useCallback(
    (inputValue) => {
      if (currentExpressionId) {
        handleAppend(inputValue)
      } else {
        handleCreate(inputValue)
      }
    },
    [
      currentExpressionId,
      currentGroupId,
    ],
  )

  return (
    <TextareaForm
      className={[
        componentClassName,
        userClassName,
      ].filter(Boolean).join(' ')}
      isInFlight={isInFlight}
      handleSubmit={handleSubmit}
      buttonLabel={(
        <>
          <span className="hide-desktop">Add</span>
          <span className="hide-mobile">
            {currentExpressionId ? 'Add to group' : 'Add to board'}
          </span>
        </>
      )}
      placeholder={
        currentExpressionId
          ? 'Type a sentence here to add it to the selected group'
          : 'Type a sentence here to add it to your board'
      }
      {...otherProps}
    />
  )
}

ExpressionCreateForm.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),
}

export default ExpressionCreateForm
