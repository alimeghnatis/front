/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import styleNames from '@aztlan/bem'
import { useFormContext } from 'react-hook-form'
import { propTypes } from './types.js'
import type { TProps } from './types.js'
import { Button } from '../../../../common/index.js'
import useOptionAriaProps from '../../hooks/useOptionAriaProps.js'

import withWrapper from '../../wrapper/withWrapper.js'

const baseClassName = styleNames.base
const componentClassName = 'toggle'

/**
 * description
 * @param {InferProps<typeof Toggle.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Toggle
 */
function Toggle({
  name,
  className:userClassName,
  style,
  registerProps,
  disabled,
  labelYes = 'Yes',
  labelNo = 'No',
  buttonProps,
  spanToggleLabel = 3,
  spanToggleLabelDesktop,
  ...otherProps
}: TProps): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const { register } = useFormContext()

  const ariaProps = useOptionAriaProps(
    name, 'true',
  )

  return (
    <div
      className={[

        baseClassName,

        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <input
        type="checkbox"
        disabled={disabled || false}
        {...register(
          name, registerProps,
        )}
        {...otherProps}
        {...ariaProps.input}
      />
      <label
        {...ariaProps.label}
        className="grid"
      >
        <Button.Group
          variant="borderless"
          className={[
            `span-${spanToggleLabel}`,
            spanToggleLabelDesktop && `md-span-${spanToggleLabelDesktop}`,
          ].filter(Boolean).join(' ')}
        >
          <Button
            className="true"
            as="span"
            tabindex="0"
            {...buttonProps}
          >
            {labelYes}
          </Button>
          <Button
            className="false"
            as="span"
            tabindex="0"
            {...buttonProps}
          >
            {labelNo}
          </Button>
        </Button.Group>
      </label>
    </div>
  )
}

Toggle.propTypes = propTypes

export default withWrapper(
  Toggle, { mockLabel: true },
)
