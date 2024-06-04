/* @aztlan/generator-front 0.9.1 */
import * as React from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'
import { Button } from '../../../../../common/index.js'

const baseClassName = styleNames.base
const componentClassName = 'reset'

/**
 * A button to clear the current selection.
 * @param {InferProps<typeof ResetButton.propTypes>} props -
 * @returns {React.ReactElement} - Rendered ResetButton component
 */
function ResetButton({
  className: userClassName,
  style,
  onClick,
}: InferProps<typeof ResetButton.propTypes>): React.ReactElement {
  return (
    <Button
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      type="button"
      onClick={onClick}
      aria-label="Clear selection"
      variant="borderless"
      color="neutral"
    >
      X
    </Button>
  )
}

ResetButton.propTypes = {
  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The onClick event handler for this element. */
  onClick:PropTypes.func,
}

export default React.memo(ResetButton)
