/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import {
  useInsertionEffect, useCallback, useState,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import styleNames from '@aztlan/bem'
import {
  graphql, useMutation,
} from 'react-relay'
import { Textarea } from './common/index.js'
import { useBoardContext } from '../Board/index.js'

const baseClassName = styleNames.base
const componentClassName = 'addition-form'

const MUTATION_CREATE_EXPRESSION = graphql`
  mutation AdditionFormCreateExpressionMutation(
    $input: CreateExpressionMutationInput!
  ) {
    createExpression(input: $input) {
      id
      generalExplanation
      grammarExplanation
      wordsExplanation
      audioUrl
      audioKey
      created
      updated
      errors {
        field
        messages
      }
      #expression {
      #  id
      #  text
      #  created
      #  updated
      #}
    }
  }
`

/**
 * description
 * @param {InferProps<typeof AdditionForm.propTypes>} props -
 * @returns {React.ReactElement} - Rendered AdditionForm
 */
function AdditionForm({
  id,
  className: userClassName,
  style,
}: // ...otherProps

InferProps<typeof AdditionForm.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const [
    inputValue,
    setInputValue,
  ] = useState('')

  const { uuid: boardUUID } = useBoardContext()

  const [
    commitCreateExpression,
    isInFlight,
  ] = useMutation(MUTATION_CREATE_EXPRESSION)

  const createExpression = useCallback(
    () => {
      commitCreateExpression({
        variables:{
          input:{
          // ...input,
            content:inputValue,
            board  :boardUUID,
          },
        },
      })
    }, [inputValue],
  )

  return (
    <form
      id={id}
      className={[
        baseClassName,
        componentClassName,
        'grid',
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <Textarea
        className="span-6 md-span-8"
        value={inputValue}
        setValue={setInputValue}
      />
      <button
        disabled={isInFlight}
        type="button"
      >
        G+
      </button>
      <button
        disabled={isInFlight}
        onClick={createExpression}
        type="button"
      >
        B+
      </button>
    </form>
  )
}

AdditionForm.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,
}

export default AdditionForm
