/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import {
  useInsertionEffect, useCallback, useState,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import styleNames from '@aztlan/bem'
import {
  graphql, useMutation, ConnectionHandler,
} from 'react-relay'
import { useBoardContext } from 'modules/common/components'
import { Textarea } from './common/index.js'
import optimisticExpression from '../optimisticExpression.js'

const baseClassName = styleNames.base
const componentClassName = 'addition-form'

const MUTATION_CREATE_EXPRESSION = graphql`
  mutation AdditionFormCreateExpressionMutation(
    $input: CreateExpressionMutationInput!
    $connections: [ID!]!
  ) {
    createExpression(input: $input) {
      instance {
        ...ExpressionFragment
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

const updater = (
  store, boardID,
) => {
  const boardRecord = store.get(boardID)
  const connectionRecord = ConnectionHandler.getConnection(
    boardRecord,
    'BoardFragment_groups',
  )
  const payload = store.getRootField('createExpression')
  const instance = payload.getLinkedRecord('instance')
  const groupRecord = instance.getLinkedRecord('group')
  const newGroupEdge = ConnectionHandler.createEdge(
    store,
    connectionRecord,
    groupRecord,
    'GroupNodeEdge',
  )
  ConnectionHandler.insertEdgeBefore(
    connectionRecord, newGroupEdge,
  )
  // Ideally, we would construct the edge from the instance.
  // However, the updater API does not support several updates.
  // This means we need to unefficiently fetch the edge again from the group.
}

/**
 * description
 * @param {InferProps<typeof AdditionForm.propTypes>} props -
 * @returns {React.ReactElement} - Rendered AdditionForm
 */
function AdditionForm({
  id,
  className: userClassName,
  style,
}: // ...otherProps

InferProps<typeof AdditionForm.propTypes>): React.ReactElement {
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

  const {
    id: boardID, uuid: boardUUID, containerRef,
  } = useBoardContext()

  const [
    commitCreateExpression,
    isInFlight,
  ] = useMutation(MUTATION_CREATE_EXPRESSION)

  const createExpression = useCallback(
    () => {
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
      })
    }, [inputValue],
  )

  return (
    <form
      id={id}
      className={[
        baseClassName,
        componentClassName,
        'grid',
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <Textarea
        className="span-6 md-span-9"
        value={inputValue}
        setValue={setInputValue}
      />
      {/*
      <button
        disabled={isInFlight}
        type="button"
      >
        G+
      </button>
          */}
      <button
        disabled={isInFlight}
        onClick={createExpression}
        type="button"
      >
        Add
      </button>
    </form>
  )
}

AdditionForm.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,
}

export default AdditionForm
