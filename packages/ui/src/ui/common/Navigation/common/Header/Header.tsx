/* @aztlan/generator-front 1.2.22 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import styleNames from '@aztlan/bem'
import { ComponentPropTypes } from './types.js'
import type { ComponentProps } from './types.js'

const baseClassName = styleNames.base
const componentClassName = 'navigation-header'

/**
 * description
 * @param {InferProps<typeof Header.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Header
 */
function Header({
  id,
  className: userClassName,
  style,
  as: Wrapper = 'nav',
  fixed,
  left,
  children,
  right,
  leftSpan = 2,
  leftSpanDesktop = 3,
  rightSpan = 2,
  rightSpanDesktop = 3,
  UNSTABLE_borders,
  UNSTABLE_padded,
}: ComponentProps): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  return (
    <Wrapper
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        fixed && styleNames.modifierFixed,
        fixed && 'default-columns',
        UNSTABLE_padded && 'section padded',
        UNSTABLE_borders && 'borders',
        'grid',
      ]
        .filter((e) => e)
        .join(' ')}
      style={{
        '--left-span'         :leftSpan,
        '--left-span-desktop' :leftSpanDesktop,
        '--right-span'        :rightSpan,
        '--right-span-desktop':rightSpanDesktop,
        ...style,
      } as React.CSSProperties}
      // {...otherProps}
    >
      {left && <span className="left">{left}</span>}
      <span className="center">{children}</span>
      {right && <span className="right">{right}</span>}

    </Wrapper>
  )
}

Header.propTypes = ComponentPropTypes

export default Header
