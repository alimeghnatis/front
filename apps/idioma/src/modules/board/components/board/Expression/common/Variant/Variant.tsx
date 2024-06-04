/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import {
  useInsertionEffect, useCallback,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'
import {
  MobilePopup, ModularForm,
} from '@aztlan/ui'

import { useHistory } from 'react-router-dom'
import {
  useFragment,
  graphql,
  useMutation,
  ConnectionHandler,
} from 'react-relay'
import { useBoardContext } from 'modules/common/components'
import { getBoardCountsUpdater } from 'relay/utils'
import optimisticExpression from '../../../forms/optimisticResponses/Expression.js'
import useExpressionVariantFields from './useExpressionVariantFields.js'

const baseClassName = styleNames.base
const componentClassName = 'expression-variant'

const FRAGMENT_EXPRESSION = graphql`
  fragment VariantFragment on ExpressionNode {
    id
    iso6391
    iso6392
    iso6393
    content
    created
  }
`

const FRAGMENT_BOARD = graphql`
  fragment VariantBoardFragment on BoardNode {
    id
    enabledLanguages
  }
`

const MUTATION_CREATE_VARIANT = graphql`
  mutation VariantCreateExpressionMutation(
    $input: CreateExpressionMutationInput!
    $connections: [ID!]!
  ) {
    createExpression(input: $input) {
      instance
        @appendNode(
          connections: $connections
          edgeTypeName: "ExpressionNodeEdge"
        ) {
        #__typename
        isNew
        ...DetailsFragment
        ...DefaultExpressionFragment
        #variantName
        #variantWord
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
 * @param {InferProps<typeof Variant.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Variant
 */
function Variant({
  id,
  className: userClassName,
  style,
  data,
  groupID,
}: // ...otherProps

InferProps<typeof Variant.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const history = useHistory()

  const {
    data: boardData,
    baseBoardUrl,
    containerRef,
    id: boardID,
  } = useBoardContext()

  const [
    commitCreateVariant,
    isInFlight,
  ] = useMutation(MUTATION_CREATE_VARIANT)

  const result = useFragment(
    FRAGMENT_EXPRESSION, data,
  )

  const boardResult = useFragment(
    FRAGMENT_BOARD, boardData,
  )

  const onSubmit = useCallback(
    (rawInput) => {
      const connectionID = ConnectionHandler.getConnectionID(
        groupID,
        'DefaultGroupFragment_expressions',
      )
      history.push(baseBoardUrl)
      const variantName = rawInput.variantName === 'other'
        ? rawInput.variantNameOther
        : rawInput.variantName || undefined

      const input = {
        iso6393    :rawInput.iso6393 ? rawInput.iso6393 : undefined,
        variantName,
        variantWord:rawInput.variantWord ? rawInput.variantWord : undefined,
        variantFrom:atob(result.id).split(':')[1],
      }

      commitCreateVariant({
        variables:{
          input,
          connections:[connectionID],
        },
        optimisticResponse:{
          createExpression:{
            instance:{
              ...optimisticExpression,
              id     :btoa(`ExpressionNode:${Math.random()}`),
              iso6393:rawInput.iso6393 || result.iso6393,
              created:new Date().toISOString(),
              isNew  :true,
              // variantName:variables.tone,
              // variantWord:variables.word,
            },
            errors:null,
          },
        },
        optimisticUpdater:(store) => {
          /*
          const target = document.getElementById(groupID)
          const positionToScrollTo = target.offsetTop
            + target.offsetHeight
            - containerRef.current.clientHeight

          containerRef.current?.scrollTo({
            top     :positionToScrollTo,
            behavior:'smooth',
          }) */
          const boardCountsUpdater = getBoardCountsUpdater(
            boardID, { groupCountChange: 0 },
          )
          boardCountsUpdater(store)
        },
        updater:(store) => {
          const root = store.getRoot()
          const payload = store.getRootField('createExpression')
          const newInstance = payload.getLinkedRecord('instance')

          if (newInstance) {
            const newId = newInstance.getValue('id')

            // Set the linked record at the root for 'node(id: $id)'
            root.setLinkedRecord(
              newInstance, 'node', { id: newId },
            )
          } else {
            console.error('Mutation did not return an instance.')
          }
          const boardCountsUpdater = getBoardCountsUpdater(
            boardID, { groupCountChange: 0 },
          )
          boardCountsUpdater(store)
        },

        onCompleted:(response) => {
          // console.log(response)
        },
      })
    },
    [
      commitCreateVariant,
      result,
    ],
  )

  const fields = useExpressionVariantFields(
    result, boardResult,
  )

  return (
    <MobilePopup
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        // 'grid container',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      closeLink={baseBoardUrl}
      // closeContent="x"
      title="Create a new variant"
      fixed
      // {...otherProps}
    >
      <ModularForm
        id={id}
        className={['container flex'].filter(Boolean).join(' ')}
        // style={style}
        // defaultValues={defaultValues}
        onSubmit={onSubmit}
      >
        <div className="scrollbox no-scrollbar">
          <div className="grid margin-vertical">
            <p className="h3 md-start-2 span-8 md-span-9">
              Create a new variant for this expression.
            </p>
          </div>
          <ModularForm.Section
            fields={fields}
            sharedFieldProps={
              {
                //  spanLabelDesktop  :1,
                // spanContentDesktop:13,
              }
            }
          />
        </div>
        <ModularForm.SubmitBar
          className="background near"
          submitText="Create"
          buttonProps={{ color: isInFlight ? 'loading' : 'success' }}
          disabled={isInFlight}
          style={{ width: '100%' }}
        />
      </ModularForm>
    </MobilePopup>
  )
}

Variant.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The data to use */
  data:PropTypes.any,

  /** The group global ID */
  groupID:PropTypes.string,
}

export default Variant
