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
import { ModularForm } from '@aztlan/ui'
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
    explanationsLength
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
        explanationsLength
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

  const parsedInstance = useMemo(
    () => ({
      id                  :result.id,
      name                :result.name,
      isPublic            :result.isPublic,
      explanationsLanguage:result.explanationsLanguage,
      explanationsLength  :result.explanationsLength,
      enabledLanguages    :JSON.parse(result.enabledLanguages),
    }),
    [result],
  )

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
              isDefault:result.isDefault,
              ...parsedInstance,
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

  const isDefault = result?.isDefault === true

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
        spanLabelDesktop  :2,
        spanContentDesktop:8,
      }}
      defaultValues={parsedInstance}
      onSubmit={handleUpdate}
    >
      <ModularForm.Section fields={fields}>
        {!isDefault && (
          <>
            <h2 className="container">Danger Zone</h2>
            <p className="span-8 md-span-2">Delete board</p>
            <div className="span-8">
              <DeleteBoardButton data={result} />
            </div>
          </>
        )}
      </ModularForm.Section>
      <ModularForm.SubmitBar
        submitText="Update"
        disabled={isInFlight}
      />
    </ModularForm>
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
