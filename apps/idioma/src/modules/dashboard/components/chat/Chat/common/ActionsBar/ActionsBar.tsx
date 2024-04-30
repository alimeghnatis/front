/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  graphql, useMutation,
} from 'react-relay'

import styleNames from '@aztlan/bem'
import { useBoardContext } from '../../../../Board/index.js'

const baseClassName = styleNames.base
const componentClassName = 'actions-bar'

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
}: // ...otherProps

InferProps<typeof ActionsBar.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
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
            createdAt     :new Date().toISOString(),
            messages      :{
              edges   :[],
              pageInfo:{
                endCursor  :null,
                hasNextPage:false,
              },
            },
          },
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
          disabled={isInFlight}
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
