/* @aztlan/generator-front 3.9.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  Button, useTriptychContext,
} from '@aztlan/ui'

import styleNames from '@aztlan/bem'

const baseClassName = styleNames.base
const componentClassName = 'settings-button'

/**
 * description
 * @param {InferProps<typeof SettingsButton.propTypes>} props -
 * @returns {React.ReactElement} - Rendered SettingsButton
 */
function SettingsButton({
  id,
  className: userClassName,
  style,
  children,
}: // ...otherProps

InferProps<typeof SettingsButton.propTypes>): React.ReactElement {
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
      title="Open board settings"
      onClick={() => selectSecondary('board-settings')}
      variant="borderless"
      color="near"
      // {...otherProps}
    >
      <span className="hide-mobile">Settings</span>
      <span className="hide-desktop">S</span>
    </Button>
  )
}

SettingsButton.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,
}

export default SettingsButton
