/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import {
  useInsertionEffect, useCallback,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'
import {
  MobilePopup, SimpleForm,
} from '@aztlan/ui'

import { useHistory } from 'react-router-dom'
import {
  useFragment,
  graphql,
  useMutation,
  ConnectionHandler,
} from 'react-relay'
import { useBoardContext } from '../../hooks/index.js'
import optimisticExpression from '../../../optimisticExpression.js'
import useExpressionVariantFields from './useExpressionVariantFields.js'

const baseClassName = styleNames.base
const componentClassName = 'expression-variant'

const FRAGMENT_EXPRESSION = graphql`
  fragment ExpressionVariantFragment on ExpressionNode {
    id
    iso6391
    iso6392
    iso6393
    content
    created
  }
`

const FRAGMENT_BOARD = graphql`
  fragment ExpressionVariantBoardFragment on BoardNode {
    id
    enabledLanguages
  }
`

const MUTATION_CREATE_VARIANT = graphql`
  mutation ExpressionVariantCreateExpressionMutation(
    $input: CreateExpressionMutationInput!
    $connections: [ID!]!
  ) {
    createExpression(input: $input) {
      instance
        @appendNode(
          connections: $connections
          edgeTypeName: "ExpressionNodeEdge"
        ) {
        ...ExpressionDetailsFragment
        ...ExpressionFragment
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
 * @param {InferProps<typeof ExpressionVariant.propTypes>} props -
 * @returns {React.ReactElement} - Rendered ExpressionVariant
 */
function ExpressionVariant({
  id,
  className: userClassName,
  style,
  data,
  groupID,
}: // ...otherProps

InferProps<typeof ExpressionVariant.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const history = useHistory()

  const {
    data: boardData, baseBoardUrl, containerRef,
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
      <SimpleForm
        className="container"
        fieldProps={{
          spanLabel         :8,
          spanLabelDesktop  :1,
          spanContent       :8,
          spanContentDesktop:9,
        }}
        onSubmit={onSubmit}
        isInFlight={isInFlight}
        fields={fields}
      />
    </MobilePopup>
  )
}

ExpressionVariant.propTypes = {
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

export default ExpressionVariant
