/* @aztlan/generator-front 3.4.0 */
import * as React from 'react'
import { useInsertionEffect } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import styleNames from '@aztlan/bem'



const baseClassName = styleNames.base
const componentClassName = 'expression'

/**
 * description
 * @param {InferProps<typeof Expression.propTypes>} props -
 * @returns {React.ReactElement} - Rendered Expression
 */
function Expression({
  id,
  className:userClassName,
  style,
  children,
  //...otherProps

}: InferProps<typeof Expression.propTypes>): React.ReactElement {
  


  useInsertionEffect(() => {
    // @ts-ignore
    import('./styles.scss')
  }, [])

  
  return(
    <div
      id={id}
      className={[
        
        baseClassName,
        
        componentClassName,
        userClassName,
      ]
        .filter((e) => e)
        .join(' ')}
      style={ style }
      //{...otherProps}
    >
      {children}
    </div>
  )
}


Expression.propTypes = {
  /** The HTML id for this element */
  id: PropTypes.string,
  
  /** The HTML class names for this element */
  className: PropTypes.string,
  
  /** The React-written, css properties for this element. */
  style: PropTypes.objectOf(PropTypes.string),
  
  /** The children JSX */
  children: PropTypes.node,
}


export default Expression

