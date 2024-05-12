/* <%= pkg %> <%= version %> */
import * as React from 'react'<% if (!optionNoStyles) { %>
import { useInsertionEffect } from 'react'
<% } %>
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
<% if (optionRelay) { %>
import { graphql, useFragment } from 'react-relay'
<% } %>
<% if (!optionNoStyles) { %>
import styleNames from '@<%= npmOrg %>/bem'
<% } %>

<% if (!optionDiet || !optionNoStyles) { %>
const baseClassName = styleNames.base<% } %>
const componentClassName = '<%= lower %>'

<% if (optionRelay) { %>
const FRAGMENT = graphql`
  fragment <%= name %>Fragment on <%= name %>Node
    #@refetchable(queryName: "<%= name %>RefetchQuery") 
    {
      id
  }
`
<% } %>

/**
 * description
 * @param {InferProps<typeof <%= name %>.propTypes>} props -
 * @returns {React.ReactElement} - Rendered <%= name %>
 */
function <%= name %>({
  id,
  className:userClassName,
  style,
  children,
  <% if (optionRelay) { %>
  data,
  <% } %>
  //...otherProps
<% if (!optionDiet) { %>
}: InferProps<typeof <%= name %>.propTypes>): React.ReactElement {<% } %>
  <% if(optionDiet) { %>
  }): React.ReactElement {<% } %>

<% if (!optionNoStyles) { %>
  useInsertionEffect(() => {
    // @ts-ignore
    import('./styles.scss')
  }, [])
<% } %>

  <% if (optionRelay) { %>
  const result = useFragment(
    FRAGMENT, data,
  )
  <% } %>
  
  return(
    <div
      id={id}
      className={[
        <% if (!optionDiet || !optionNoStyles) { %>
        baseClassName,
        <% } %>
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

<% if (!optionDiet) { %>
<%= name %>.propTypes = {
  /** The HTML id for this element */
  id: PropTypes.string,
  
  /** The HTML class names for this element */
  className: PropTypes.string,
  
  /** The React-written, css properties for this element. */
  style: PropTypes.objectOf(PropTypes.string),
  
  /** The children JSX */
  children: PropTypes.node,

  <% if (optionRelay) { %>
  /** The relay data to use for the component fragment */
  data: PropTypes.any,
  <% } %>
}
<% } %>

export default <%= name %>

