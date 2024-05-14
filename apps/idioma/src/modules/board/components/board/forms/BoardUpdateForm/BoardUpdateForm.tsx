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
import {
  ModularForm, useNotificationContext,
} from '@aztlan/ui'
import styleNames from '@aztlan/bem'
import useBoardFormFields from '../useBoardFormFields.js'
import DeleteBoardButton from './DeleteBoardButton.js'

const baseClassName = styleNames.base
const componentClassName = 'board-settings-form'

const FRAGMENT = graphql`
  fragment BoardUpdateFormFragment on BoardNode {
    id
    name
    isPublic
    isDefault
    explanationsLanguage
    explanationsLength
    displayTranslations
    enabledLanguages
    ...DeleteBoardButtonFragment
  }
`

const MUTATION_UPDATE = graphql`
  mutation BoardUpdateFormBoardUpdateMutation(
    $input: UpdateBoardMutationInput!
  ) {
    updateBoard(input: $input) {
      instance {
        ...BoardUpdateFormFragment
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
    commit,
    isInFlight,
  ] = useMutation(MUTATION_UPDATE)

  const { notify } = useNotificationContext()

  const parsedInstance = useMemo(
    () => ({
      id                  :result.id,
      name                :result.name,
      isPublic            :result.isPublic,
      explanationsLanguage:result.explanationsLanguage,
      explanationsLength  :result.explanationsLength,
      enabledLanguages    :JSON.parse(result.enabledLanguages),
      displayTranslations :result.displayTranslations,
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

      commit({
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
        onCompleted:(response) => {
          console.log(
            'response', response,
          )
          notify.success('Board successfully updated.')
        },
        onError:(error) => {
          const { errors } = error?.res
          notify.errorCode(errors?.[0]?.message)
        },
      })
    },
    [
      result,
      commit,
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
        'flex',
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
      fieldProps={{
        spanLabelDesktop  :2,
        spanContentDesktop:9,
      }}
      defaultValues={parsedInstance}
      onSubmit={handleUpdate}
    >
      <div className="scrollbox no-scrollbar">
        <ModularForm.Section fields={fields}>
          {!isDefault && (
            <>
              <h2 className="container">Danger Zone</h2>
              <p className="span-8 md-span-2">Delete board</p>
              <div className="span-8 md-span-9">
                <DeleteBoardButton data={result} />
              </div>
            </>
          )}
        </ModularForm.Section>
      </div>
      <ModularForm.SubmitBar
        className="background near"
        buttonProps={{ color: isInFlight ? 'loading' : 'success' }}
        submitText={isInFlight ? 'Loading' : 'Save'}
        disabled={isInFlight}
        style={{ width: '100%' }}
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
