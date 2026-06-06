import PropTypes, {
  Validator, InferProps,
} from 'prop-types'

import { basePropTypes } from '../../types.js'

export const typeShared = {
  /** Whether the form is multipart or not */
  type:PropTypes.oneOf([
    'default',
    'multipart',
  ]),
}

const sectionTypeValidator: Validator<any> = (
  props,
  propName,
  componentName,
) => {
  const sections = props[propName]

  if (!Array.isArray(sections)) {
    return new Error(`Invalid prop \`${propName}\` of type \`${typeof sections}\` supplied to \`${componentName}\`, expected an array.`)
  }

  sections.forEach((section) => {
    if (typeof section !== 'object' || section === null) {
      return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Each item must be an object.`)
    }

    if (typeof section.label !== 'string') {
      return new Error(`Invalid prop \`${propName}.label\` supplied to \`${componentName}\`. Label must be a string.`)
    }
  })

  // Return null if no error
  return null
}

export const MultipartFormPropTypes = {
  ...basePropTypes,
  ...typeShared,
  items         :sectionTypeValidator,
  loadInitialUrl:PropTypes.bool,
  onSubmit      :PropTypes.func,
}

export type MultipartFormProps = InferProps<typeof MultipartFormPropTypes>
