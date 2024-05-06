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
import {
  useBoardContext, TextareaForm,
} from 'modules/common/components'
import optimisticExpression from '../optimisticExpression.js'

// const baseClassName = styleNames.base
const componentClassName = 'addition-form'

const MUTATION_CREATE_EXPRESSION = graphql`
  mutation ExpressionCreateFormCreateExpressionMutation(
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
    id: boardID, uuid: boardUUID, containerRef,
  } = useBoardContext()

  const [
    commitCreateExpression,
    isInFlight,
  ] = useMutation(MUTATION_CREATE_EXPRESSION)

  const handleSubmit = useCallback(
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
