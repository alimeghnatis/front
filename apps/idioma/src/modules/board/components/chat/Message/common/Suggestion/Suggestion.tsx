/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'
import { Button } from '@aztlan/ui'

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
  handleClick,
  isInFlight,
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
        <p>
          <strong>{language}</strong>
        </p>
      </div>
      <div className="content">
        <p>{children}</p>
      </div>
      <div className="actions">
        <Button
          onClick={handleClick}
          disabled={isInFlight}
          variant="borderless"
          color="selected"
        >
          +
        </Button>
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

  /** The function to call when the suggestion is clicked */
  handleClick:PropTypes.func.isRequired,

  /** Whether the suggestion is in flight */
  isInFlight:PropTypes.bool,
}

export default Suggestion
