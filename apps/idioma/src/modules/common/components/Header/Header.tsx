/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'
import {
  useInsertionEffect, useCallback,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  NavigationHeader, useTriptychContext, Button,
} from '@aztlan/ui'
import {
  useHistory, Link,
} from 'react-router-dom'

import styleNames from '@aztlan/bem'

const baseClassName = styleNames.base
const componentClassName = 'header'

/**
 * description
 * @param {InferProps<typeof Header.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Header
 */
function Header({
  id,
  className: userClassName,
  style,
  children,
  right,
}: // ...otherProps

InferProps<typeof Header.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )
  const {
    toggleNavigation, selectSecondary,
  } = useTriptychContext()

  const history = useHistory()

  const { location } = history

  return (
    <NavigationHeader
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      left={(
        <Button
          onClick={toggleNavigation}
          variant="simple"
        >
          Menu
        </Button>
      )}
      leftSpanDesktop={1}
      rightSpanDesktop={3}
      right={(
        <>
          <Button
            onClick={() => selectSecondary('help')}
            type="button"
            variant="simple"
          >
            Help
          </Button>
          <Button
            as={Link}
            to="/profile"
            variant="simple"
          >
            P
          </Button>
          {right}
        </>
      )}
      // {...otherProps}
    >
      {children}
    </NavigationHeader>
  )
}

Header.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,

  /** The right items */
  right:PropTypes.node,
}

export default Header
