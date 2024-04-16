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

const baseClassName = styleNames.base
const componentClassName = 'expression-variant'

const FRAGMENT = graphql`
  fragment ExpressionVariantFragment on ExpressionNode {
    id
    iso6391
    iso6392
    iso6393
    content
    created
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
        id
        content
        correctedContent
        generalExplanation
        grammarExplanation
        wordsExplanation
        iso6393
        iso6392
        iso6391
        audioUrl
        audioKey
        created
        variantName
        variantWord
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

  const { baseBoardUrl } = useBoardContext()

  const [
    commitCreateVariant,
    isInFlight,
  ] = useMutation(MUTATION_CREATE_VARIANT)

  const result = useFragment(
    FRAGMENT, data,
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
            iso6391    :variables.iso6391,
            variantName:variables.tone,
            variantWord:variables.word,
            variantFrom:atob(result.id).split(':')[1],
          },
          connections:[connectionID],
        },
        optimisticResponse:{
          createExpression:{
            instance:{
              id         :btoa(`ExpressionNode:${Math.random()}`),
              content    :'Loading',
              iso6391    :variables.iso6391 || result.iso6391,
              variantName:variables.tone,
              variantWord:variables.word,
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
            ],
          },
          {
            name    :'iso6391',
            label   :'lang',
            type    :'choices',
            optional:true,
            options :[
              {
                value:null,
                label:'original',
              },
              {
                value:'en',
                label:'English',
              }, // de, es, fr, it, pt, ru, zh, pl, ja, ko, ar, hi, bn, ur, fa, tr, nl, el, sv, no, da, fi,
              {
                value:'de',
                label:'German',
              },
              {
                value:'es',
                label:'Spanish',
              },
              {
                value:'fr',
                label:'French',
              },
              {
                value:'it',
                label:'Italian',
              },
              {
                value:'pt',
                label:'Portuguese',
              },
              {
                value:'ru',
                label:'Russian',
              },
              {
                value:'zh',
                label:'Chinese',
              },
              {
                value:'pl',
                label:'Polish',
              },
              {
                value:'ja',
                label:'Japanese',
              },
              {
                value:'ko',
                label:'Korean',
              },
              {
                value:'ar',
                label:'Arabic',
              },
              {
                value:'hi',
                label:'Hindi',
              },
              {
                value:'bn',
                label:'Bengali',
              },
              {
                value:'ur',
                label:'Urdu',
              },
              {
                value:'fa',
                label:'Persian',
              },
              {
                value:'tr',
                label:'Turkish',
              },
              {
                value:'nl',
                label:'Dutch',
              },
              {
                value:'el',
                label:'Greek',
              },
              {
                value:'sv',
                label:'Swedish',
              },
              {
                value:'no',
                label:'Norwegian',
              },
              {
                value:'da',
                label:'Danish',
              },
              {
                value:'fi',
                label:'Finnish',
              },
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
