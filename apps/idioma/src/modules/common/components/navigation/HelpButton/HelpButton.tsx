/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import {
  Button, useTriptychContext,
} from '@aztlan/ui'

import styleNames from '@aztlan/bem'

const componentClassName = 'help-button'

/**
 * description
 * @param {InferProps<typeof HelpButton.propTypes>} props -
 * @returns {React.ReactElement} - Rendered HelpButton
 */
function HelpButton({
  id,
  className: userClassName,
  style,
  helpId = 'help',
}: // ...otherProps

InferProps<typeof HelpButton.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const { selectSecondary } = useTriptychContext()

  return (
    <Button
      id={id}
      className={[
        componentClassName,
        userClassName,
      ].filter((e) => e).join(' ')}
      style={style}
      title="Open help"
      onClick={() => selectSecondary(helpId)}
      variant="borderless"
      color="near"
      // {...otherProps}
    >
      <span className="hide-mobile">Help</span>
      <span className="hide-desktop">H</span>
    </Button>
  )
}

HelpButton.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),
}

export default HelpButton
