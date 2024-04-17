/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import {
  useInsertionEffect, useCallback, useMemo,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  graphql, useFragment, useMutation,
} from 'react-relay'
import { SimpleForm } from '@aztlan/ui'
import styleNames from '@aztlan/bem'
import useBoardFormFields from './useBoardFormFields.js'

const baseClassName = styleNames.base
const componentClassName = 'board-settings-form'

const MUTATION_UPDATE = graphql`
  mutation BoardCreateFormCreateMutation($input: CreateBoardMutationInput!) {
    createBoard(input: $input) {
      instance {
        id
        name
        isPublic
        isDefault
        explanationsLanguage
        enabledLanguages
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
function BoardCreateForm({
  id,
  className: userClassName,
  style,
}: // ...otherProps

InferProps<typeof BoardCreateForm.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const [
    updateBoard,
    isInFlight,
  ] = useMutation(MUTATION_UPDATE)

  const handleCreate = useCallback(
    (rawInput) => {
      const input = {
        ...rawInput,
        enabledLanguages:JSON.stringify(rawInput.enabledLanguages),
      }

      updateBoard({
        variables:{ input },
        /*
        optimisticResponse:{
          updateBoard:{
            instance:{
              ...input,
            },
            errors:null,
          },
        }, */
      })
    },
    [updateBoard],
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

BoardCreateForm.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The data to use */
  data:PropTypes.any,
}

export default BoardCreateForm
