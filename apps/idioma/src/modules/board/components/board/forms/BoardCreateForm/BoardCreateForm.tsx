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
  graphql, useMutation, ConnectionHandler,
} from 'react-relay'
import {
  useViewer, ModularForm,
} from '@aztlan/ui'
import styleNames from '@aztlan/bem'
import { useBoardContext } from 'modules/common/components'
import useBoardFormFields from '../useBoardFormFields.js'

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
        explanationsLength
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
        ...VariantBoardFragment
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
    commit,
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
      const tempId = btoa(`BoardNode:${Math.random()}`)

      commit({
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
    [commit],
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
    <ModularForm
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'container',
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
      fieldProps={{
        spanLabelDesktop  :3,
        spanContentDesktop:9,
      }}
      defaultValues={defaultValues}
      onSubmit={handleCreate}
    >
      <div
        className="container"
        style={{
          overflow:'auto',
          height  :'100%',
        }}
      >
        <ModularForm.Section fields={fields} />
      </div>
      <ModularForm.SubmitBar
        submitText="Create"
        disabled={isInFlight}
      />
    </ModularForm>
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
