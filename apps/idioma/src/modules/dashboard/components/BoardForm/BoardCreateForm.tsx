/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import {
  useInsertionEffect, useCallback, useMemo,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  useHistory, generatePath,
} from 'react-router-dom'
import {
  graphql,
  useFragment,
  useMutation,
  ConnectionHandler,
} from 'react-relay'
import {
  useViewer, SimpleForm,
} from '@aztlan/ui'
import styleNames from '@aztlan/bem'
import useBoardFormFields from './useBoardFormFields.js'
import { useBoardContext } from '../Board/index.js'

const baseClassName = styleNames.base
const componentClassName = 'board-settings-form'

const MUTATION_UPDATE = graphql`
  mutation BoardCreateFormCreateMutation(
    $input: CreateBoardMutationInput!
    $connections: [ID!]!
  ) {
    createBoard(input: $input) {
      instance {
        id
        name
        isPublic
        isDefault
        explanationsLanguage
        enabledLanguages
        memberships {
          edges {
            node
              @appendNode(
                connections: $connections
                edgeTypeName: "BoardMembershipNodeEdge"
              ) {
              id
              role
              board {
                id
                name
              }
            }
          }
        }
        ...BoardFragment
        ...BoardUpdateFormFragment
        ...ExpressionVariantBoardFragment
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
 * @param {InferProps<typeof BoardCreateForm.propTypes>} props -
 * @returns {React.ReactElement} - Rendered BoardCreateForm
 */
function RawBoardCreateForm({
  id,
  className: userClassName,
  style,
  userID,
}: // ...otherProps

InferProps<typeof BoardCreateForm.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const [
    createBoard,
    isInFlight,
  ] = useMutation(MUTATION_UPDATE)

  const { baseBoardPath } = useBoardContext()

  const history = useHistory()

  const handleCreate = useCallback(
    (rawInput) => {
      const input = {
        ...rawInput,
        enabledLanguages:JSON.stringify(rawInput.enabledLanguages),
      }

      const connectionID = ConnectionHandler.getConnectionID(
        userID,
        'useBoardMembershipsFragment_boardMemberships',
      )
      const tempId = btoa(`BoardMembershipNode:${Math.random()}`)

      createBoard({
        variables:{
          input,
          connections:[connectionID],
        },
        optimisticResponse:{
          createBoard:{
            instance:{
              ...input,
              id       :tempId,
              isDefault:false,
              iso6391  :null,
              iso6392  :null,
              iso6393  :input.explanationsLanguage,
              created  :new Date().toISOString(),
              groups   :{
                pageInfo:{
                  hasNextPage:false,
                  endCursor  :null,
                },
                edges:[],
              },
              memberships:{
                edges:[
                  {
                    node:{
                      id   :btoa(`BoardMembershipNode:${Math.random()}`),
                      role :'OWNER',
                      board:{
                        id  :tempId,
                        name:input.name,
                      },
                    },
                  },
                ],
              },
            },
            errors:null,
          },
        },
        onCompleted:(res) => {
          const newPath = generatePath(
            baseBoardPath, { board: res.createBoard.instance.id },
          )
          history.push(newPath)
        },
      })
    },
    [createBoard],
  )

  const fields = useBoardFormFields({})

  const defaultValues = useMemo(
    () => ({
      isPublic            :false,
      explanationsLanguage:'eng',
      enabledLanguages    :[
        'eng',
        'spa',
        'fra',
        'ukr',
        'ita',
        'deu',
      ],
    }),
    [],
  )

  return (
    <SimpleForm
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'grid container',
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
      fields={fields}
      fieldProps={{
        spanLabelDesktop  :1,
        spanContentDesktop:9,
      }}
      defaultValues={defaultValues}
      isInFlight={isInFlight}
      onSubmit={handleCreate}
    />
  )
}

RawBoardCreateForm.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The data to use */
  data:PropTypes.any,

  /** The user ID */
  userID:PropTypes.string,
}

export { RawBoardCreateForm }

function BoardCreateForm(props) {
  const { data } = useViewer()

  return (
    <RawBoardCreateForm
      userID={data?.id}
      {...props}
    />
  )
}

export default BoardCreateForm
