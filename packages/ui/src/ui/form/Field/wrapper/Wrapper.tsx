import * as React from 'react'
import { useMemo } from 'react'
import {
  RegisterOptions,
  useFormContext,
} from 'react-hook-form'
import { WrapperPropTypes } from './types.js'
import type { TWrapperProps } from './types.js'

import {
  useFieldAriaProps,
  useFieldError,
} from '../hooks/index.js'
import * as messages from '../../messages.js'
import WrapperContent from './WrapperContent.js'

const defaultObject = {}

/**
 * The Wrapper component is a flexible container
 * for form elements, providing consistent
 * layout and accessibility features.
 * It wraps a specified input component,
 * supplementing it with a label, optional description, or error message.
 * This component supports dynamic layout
 * adjustments for responsive designs and integrates ARIA attributes
 * for enhanced accessibility.
 * Additional features include customizable autoComplete settings and an option for a mock label,
 * making it adaptable to various scenarios.
 *
 * @param {InferProps<typeof Wrapper.propTypes>} props - Component props including the
 * Component to wrap, label props
 * description props, span props, etc...
 * @returns {React.ReactElement} - Rendered Wrapper component
 */
function Wrapper({
  Component,
  name,
  label,
  description,
  optional,
  spanLabel,
  spanLabelDesktop,
  spanContent,
  spanContentDesktop,
  mockLabel,
  descriptionPosition,
  nested,
  registerProps: userRegisterProps = defaultObject,
  nestedRegisterProps = defaultObject,
  unregisterOnUnmount = false,
  ...otherProps
}: TWrapperProps): React.ReactElement {
  // const { register } = useFormContext()
  const fieldError = useFieldError(name)

  const isError = !!fieldError

  const ariaProps = useFieldAriaProps(
    name, isError,
  )

  // Todo if !optional add generic required validation to registerprops

  const registerProps = useMemo(
    () => {
      const props: RegisterOptions = {}
      if (!optional) {
        props.required = {
          value  :true,
          message:messages.required(label || name),
        }
      }
      return {
        ...nestedRegisterProps,
        ...props,
        ...userRegisterProps,
      }
    }, [
      name,
      userRegisterProps,
      optional,
    ],
  )

  const { unregister } = useFormContext()

  React.useEffect(
    () => () => (unregisterOnUnmount ? unregister(name) : undefined),
    [],
  )

  return (
    <WrapperContent
      Component={Component}
      name={name}
      label={label}
      description={description}
      optional={optional}
      spanLabel={spanLabel}
      spanLabelDesktop={spanLabelDesktop}
      spanContent={spanContent}
      spanContentDesktop={spanContentDesktop}
      mockLabel={mockLabel}
      descriptionPosition={descriptionPosition}
      ariaProps={ariaProps}
      nested={nested}
      registerProps={registerProps}
      isError={isError}
      fieldError={fieldError}
      {...otherProps}

    />
  )
}

Wrapper.propTypes = WrapperPropTypes

export default Wrapper
