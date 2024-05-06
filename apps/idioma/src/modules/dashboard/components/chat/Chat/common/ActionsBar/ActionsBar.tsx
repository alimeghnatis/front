/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  graphql, useMutation, useFragment,
} from 'react-relay'

import styleNames from '@aztlan/bem'
import { useBoardContext } from 'modules/common/components'

const baseClassName = styleNames.base
const componentClassName = 'actions-bar'

const FRAGMENT = graphql`
  fragment ActionsBarFragment on ThreadNode {
    id
    messages(last: 4, before: null) {
      edges {
        cursor
      }
    }
  }
`

const MUTATION_UPDATE = graphql`
  mutation ActionsBarChatBoardUpdateMutation(
    $input: UpdateBoardMutationInput!
  ) {
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
 * description
 * @param {InferProps<typeof ActionsBar.propTypes>} props -
 * @returns {React.ReactElement} - Rendered ActionsBar
 */
function ActionsBar({
  id,
  className: userClassName,
  style,
  data,
}: // ...otherProps

InferProps<typeof ActionsBar.propTypes>): React.ReactElement {
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
    id: boardID, uuid: boardUUID,
  } = useBoardContext()

  const [
    commit,
    isInFlight,
  ] = useMutation(MUTATION_UPDATE)

  const resetChat = () => {
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
    })
  }

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
      <div className="info">Actions Bar</div>
      <div className="actions">
        <button
          onClick={resetChat}
          type="button"
          disabled={isInFlight || !result.messages.edges.length}
        >
          Reset Chat
        </button>
      </div>
    </div>
  )
}

ActionsBar.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,
}

export default ActionsBar
