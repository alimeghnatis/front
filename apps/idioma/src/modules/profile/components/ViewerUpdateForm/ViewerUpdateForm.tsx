/* @aztlan/generator-front 3.4.7 */
import * as React from 'react'
import {
  useInsertionEffect, useMemo, useCallback,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'

import {
  graphql, useFragment, useMutation,
} from 'react-relay'
import {
  ModularForm, useViewer,
} from '@aztlan/ui'
import useViewerFormFields from './useViewerFormFields.js'

const baseClassName = styleNames.base
const componentClassName = 'viewer-update-form'

const FRAGMENT = graphql`
  fragment ViewerUpdateFormFragment on UserNode {
    id
    firstName
    lastName
    created
    updated
    email
    profilePicture
    isSuperuser
  }
`

const MUTATION_UPDATE = graphql`
  mutation ViewerUpdateFormUpdateMutation($input: UpdateUserMutationInput!) {
    updateUser(input: $input) {
      instance {
        id
        ...ViewerUpdateFormFragment
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
 * @param {InferProps<typeof ViewerUpdateForm.propTypes>} props -
 * @returns {React.ReactElement} - Rendered ViewerUpdateForm
 */
function RawViewerUpdateForm({
  id,
  className: userClassName,
  style,
  data,
}: // ...otherProps

InferProps<typeof RawViewerUpdateForm.propTypes>): React.ReactElement {
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

  const parsedInstance = useMemo(
    () => ({
      // mapping
      ...result,
    }),
    [result],
  )

  const handleUpdate = useCallback(
    (rawInput) => {
      const input = {
        id            :atob(result.id).split(':')[1],
        firstName     :rawInput.firstName,
        lastName      :rawInput.lastName,
        email         :rawInput.email,
        profilePicture:rawInput.profilePicture,
        isSuperuser   :rawInput.isSuperuser,
      }

      commit({
        variables         :{ input },
        optimisticResponse:{
          updateUser:{
            instance:{
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
      commit,
    ],
  )

  const fields = useViewerFormFields(parsedInstance)

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
        spanLabelDesktop  :3,
        spanContentDesktop:9,
      }}
      defaultValues={parsedInstance}
      onSubmit={handleUpdate}
    >
      <div className="scrollbox no-scrollbar">
        <ModularForm.Section fields={fields} />
      </div>
      <ModularForm.SubmitBar
        submitText="Update"
        disabled={isInFlight}
        style={{ width: '100%' }}
      />
    </ModularForm>
  )
}

RawViewerUpdateForm.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The data for this component */
  data:PropTypes.any,
}

export { RawViewerUpdateForm }

function ViewerUpdateForm(props) {
  const { data } = useViewer()

  return (
    <RawViewerUpdateForm
      data={data}
      {...props}
    />
  )
}

export default ViewerUpdateForm
