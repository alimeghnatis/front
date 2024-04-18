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
import DeleteBoardButton from './DeleteBoardButton.js'

const baseClassName = styleNames.base
const componentClassName = 'board-settings-form'

const FRAGMENT = graphql`
  fragment BoardUpdateFormFragment on BoardNode {
    id
    name
    isPublic
    explanationsLanguage
    enabledLanguages
    ...DeleteBoardButtonFragment
  }
`

const MUTATION_UPDATE = graphql`
  mutation BoardUpdateFormUpdateMutation($input: UpdateBoardMutationInput!) {
    updateBoard(input: $input) {
      instance {
        id
        name
        isPublic
        isDefault
        explanationsLanguage
        enabledLanguages
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
 * @param {InferProps<typeof BoardUpdateForm.propTypes>} props -
 * @returns {React.ReactElement} - Rendered BoardUpdateForm
 */
function BoardUpdateForm({
  id,
  className: userClassName,
  style,
  data,
}: // ...otherProps

InferProps<typeof BoardUpdateForm.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const result = useFragment(
    FRAGMENT, data,
  )

  const [
    updateBoard,
    isInFlight,
  ] = useMutation(MUTATION_UPDATE)

  const handleUpdate = useCallback(
    (rawInput) => {
      const input = {
        ...rawInput,
        id              :atob(result.id).split(':')[1],
        enabledLanguages:JSON.stringify(rawInput.enabledLanguages),
      }

      updateBoard({
        variables         :{ input },
        optimisticResponse:{
          updateBoard:{
            instance:{
              ...result,
              ...input,
            },
            errors:null,
          },
        },
      })
    },
    [
      result,
      updateBoard,
    ],
  )

  const fields = useBoardFormFields(result)

  const parsedInstance = useMemo(
    () => ({
      ...result,
      enabledLanguages:JSON.parse(result.enabledLanguages),
    }),
    [result],
  )

  const isDefault = result?.isDefault === true

  return (
    <>
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
        defaultValues={parsedInstance}
        isInFlight={isInFlight}
        onSubmit={handleUpdate}
      />
      {!isDefault && <DeleteBoardButton data={result} />}
    </>
  )
}

BoardUpdateForm.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The data to use */
  data:PropTypes.any,
}

export default BoardUpdateForm
