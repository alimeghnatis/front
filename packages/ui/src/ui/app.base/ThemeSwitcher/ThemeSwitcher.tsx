/* @aztlan/generator-front 0.4.0 */
import * as React from 'react'

import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'
import {
  useApplicationContext, Button,
} from '../../common/index.js'

// Local Definitions

const baseClassName = styleNames.base

const componentClassName = 'theme-switcher'

const defaultThemes = {
  'dark-theme' :'Dark',
  'light-theme':'Light',
}

/**
 * This is the component description.
 */
function ThemeSwitcher({
  id,
  className: userClassName,
  style,
  themes = defaultThemes,
}: // ...otherProps
InferProps<typeof ThemeSwitcher.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const {
    theme, isTheme, setTheme,
  } = useApplicationContext()

  return (
    <ul
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'inline',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
    >
      <li>
        <p>{theme}</p>
      </li>
      {Object.keys(themes).map((themeName) => (
        <li key={themeName}>
          <Button
            onClick={() => setTheme(themeName)}
            className={isTheme(themeName) ? 'bold' : ''}
            variant="simple"
            color="paragraph"
          >
            {themes[themeName]}
          </Button>
        </li>
      ))}
    </ul>
  )
}

ThemeSwitcher.propTypes = {
  /**
   * The HTML id for this element
   */
  id:PropTypes.string,

  /**
   * The HTML class names for this element
   */
  className:PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style:PropTypes.objectOf(PropTypes.string),

  /**
   * The themes for the theme switcher.
   */
  themes:PropTypes.objectOf(PropTypes.string),
}

export default ThemeSwitcher
