import * as React from 'react'

import Label from './Label.js'
import Description from './Description.js'
import { WrapperPropTypes } from './types.js'
import type { TWrapperProps } from './types.js'

const labelClassName = 'label'
const inputClassName = 'input'
/**
 * Constructs a className string based on column span parameters.
 * @param {number} defaultSpan - The column span for mobile and general view.
 * @param {number | undefied} desktopSpan - The column span for desktop view.
 * @returns {string[]} An array of className strings.
 */
const span = (
  defaultSpan: number,
  desktopSpan: number | null = null,
): string[] => {
  const className: string[] = []
  if (defaultSpan) className.push(`span-${defaultSpan}`)
  if (desktopSpan) className.push(`md-span-${desktopSpan}`)
  return className
}

type TWrapperContentProps = TWrapperProps & {
  ariaProps: Partial<{
    label      :Record<string, any>
    description:Record<string, any>
    input      :Record<string, any>
    error      :Record<string, any>
  }>
  registerProps:Record<string, any>
  isError      :boolean
  fieldError   :Record<string, any>
}

function WrapperContent({
  Component,
  name,
  label,
  description,
  optional,
  spanLabel = 8,
  spanLabelDesktop = 6,
  spanContent = 8,
  spanContentDesktop = 8,
  mockLabel = false,
  descriptionPosition = 'bottom',
  nested = false,
  ariaProps = {},
  registerProps,
  isError,
  fieldError,
  ...otherProps
}:Partial<TWrapperContentProps>): React.ReactElement {
  return (
    <>
      <div
        className={[
          ...span(
            spanLabel, spanLabelDesktop,
          ),
          labelClassName,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <Label
          name={name}
          optional={optional}
          as={mockLabel ? 'legend' : undefined}
          {...ariaProps.label}
        >
          {label}
        </Label>
      </div>
      <div
        className={[
          ...span(
            spanContent, spanContentDesktop,
          ),
          nested && 'grid',
          inputClassName,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {description && descriptionPosition === 'top' && (
          <Description {...ariaProps.description}>{description}</Description>
        )}
        <Component
          name={name}
          registerProps={registerProps}
          {...ariaProps.input}
          {...otherProps}
        />
        {description && descriptionPosition === 'bottom' && (
          <Description {...ariaProps.description}>{description}</Description>
        )}
        {isError && (
          <Description
            {...ariaProps.error}
            isError
          >
            {fieldError?.message?.toString()}
          </Description>
        )}
      </div>
    </>
  )
}

export default WrapperContent
