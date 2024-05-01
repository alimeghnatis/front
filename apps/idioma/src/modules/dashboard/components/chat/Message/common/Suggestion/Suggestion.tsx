/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'

const baseClassName = styleNames.base
const componentClassName = 'suggestion'

/**
 * description
 * @param {InferProps<typeof Suggestion.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Suggestion
 */
function Suggestion({
  id,
  className: userClassName,
  style,
  children,
  language,
  selected = false,
  ...otherProps
}: // ...otherProps

InferProps<typeof Suggestion.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        selected && styleNames.modifierSelected,
        'grid container',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      {...otherProps}
    >
      <div className="language">
        <strong>{language}</strong>
      </div>
      <div className="content">{children}</div>
      <div className="actions">
        <button type="button">+</button>
      </div>
    </div>
  )
}

Suggestion.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node.isRequired,

  /** The language of the suggestion */
  language:PropTypes.string.isRequired,

  /** Whether the suggestion is selected */
  selected:PropTypes.bool,
}

export default Suggestion
