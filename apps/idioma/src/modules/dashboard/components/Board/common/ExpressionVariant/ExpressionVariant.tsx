/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import {
  useInsertionEffect, useCallback,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'
import { SimpleForm } from '@aztlan/ui'

import { useHistory } from 'react-router-dom'
import {
  useFragment,
  graphql,
  useMutation,
  ConnectionHandler,
} from 'react-relay'
import { useBoardContext } from '../../hooks/index.js'
import optimisticExpression from '../../../optimisticExpression.js'

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
    data: boardData, baseBoardUrl,
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
    (variables) => {
      const connectionID = ConnectionHandler.getConnectionID(
        groupID,
        'GroupFragment_expressions',
      )
      history.push(baseBoardUrl)
      commitCreateVariant({
        variables:{
          input:{
            iso6393    :variables.iso6393,
            variantName:variables.tone,
            variantWord:variables.word,
            variantFrom:atob(result.id).split(':')[1],
          },
          connections:[connectionID],
        },
        optimisticResponse:{
          createExpression:{
            instance:{
              ...optimisticExpression,
              id     :btoa(`ExpressionNode:${Math.random()}`),
              iso6393:variables.iso6393 || result.iso6393,
              created:new Date().toISOString(),
              // variantName:variables.tone,
              // variantWord:variables.word,
            },
            errors:null,
          },
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
      <SimpleForm
        className="container"
        fieldProps={{
          spanLabel         :2,
          spanLabelDesktop  :1,
          spanContent       :6,
          spanContentDesktop:9,
        }}
        onSubmit={onSubmit}
        isInFlight={isInFlight}
        fields={[
          {
            name    :'word',
            label   :'word',
            type    :'choices',
            optional:true,
            options :[
              {
                value:null,
                label:'All words',
              },
              ...result.content.split(' ').map((word) => ({
                value:word,
                label:word,
              })),
            ],
          },
          {
            name    :'tone',
            label   :'tone',
            type    :'choices',
            optional:true,
            options :[
              {
                value:'more formal',
                label:'more formal',
              },
              {
                value:'more informal',
                label:'more informal',
              },
              {
                value:'more slang',
                label:'more slang',
              },
              {
                value:'more vulgar',
                label:'more vulgar',
              },
              {
                value:'more polite',
                label:'more polite',
              },
              {
                value:'more litterary',
                label:'more litterary',
              },
              {
                value:'more antiquated',
                label:'more antiquated',
              },
              {
                value:'more neutral',
                label:'more neutral',
              },
              {
                value:'more berlin slang of 1980',
                label:'more berlin slang of 1980',
              },
              {
                value:'more munich slang of 1980',
                label:'more munich slang of 1980',
              },
            ],
          },
          {
            name    :'iso6393',
            label   :'lang',
            type    :'choices',
            optional:true,
            options :[
              {
                value:null,
                label:'original',
              },
              ...JSON.parse(boardResult.enabledLanguages).map((lang) => ({
                value:lang,
                label:lang,
              })),
            ],
          },
          /*
          {
            name :'iso6393',
            label:'Iso6393',
            type :'text',
          },
          {
            name :'created',
            label:'Created',
            type :'text',
          }, */
        ]}
      />
    </div>
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
