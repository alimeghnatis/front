/* <%= pkg %> <%= version %> */
import * as React from 'react'<% if (!optionNoStyles) { %>
import { useInsertionEffect } from 'react'
<% } %>
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
<% if (optionFragment) { %>
import { graphql, useFragment } from 'react-relay'
<% } %>
<% if (optionMutation) { %>
 import { useCallback } from 'react'
import { useMutation } from 'react-relay'
import { useNotificationContext } from '@<%= npmOrg %>/ui'
<% } %>
<% if (!optionNoStyles) { %>
import styleNames from '@<%= npmOrg %>/bem'
<% } %>

<% if (!optionDiet || !optionNoStyles) { %>
const baseClassName = styleNames.base<% } %>
const componentClassName = '<%= lower %>'

<% if (optionFragment) { %>
const FRAGMENT = graphql`
  fragment <%= name %>Fragment on <%= name %>Node
    #@refetchable(queryName: "<%= name %>RefetchQuery") 
    {
      id
  }
`
<% } %>

<% if (optionMutation) { %>
const MUTATION = graphql`
  mutation <%= name %>Mutation($input: <%= name %>Input!) {
    <%= lower %>(input: $input) {
      instance {
        id
      } 
      errors {
        field
        messages
      }   
    }
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
  <% if (optionFragment) { %>
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

  <% if (optionFragment) { %>
  const result = useFragment(
    FRAGMENT, data,
  )
  <% } %>

  <% if (optionMutation) { %>
  const [
    commit,
    isInFlight,
  ] = useMutation(MUTATION)

  const { notify } = useNotificationContext()

  const handleCommit = useCallback(
    ():void => {
      commit({
        variables: {
          input:{},
        },
        optimisticResponse: {
          <%= lower %>: {
            instance: {
              id: '0',
            },
            errors: null,
          },
        },
        onCompleted:(response) => {
          notify.success('Expression created')
        },
        onError:(error) => {
          const { errors } = error?.res
          notify.errorCode(errors?.[0]?.message)
        },
      })
    }


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

  <% if (optionFragment) { %>
  /** The relay data to use for the component fragment */
  data: PropTypes.any,
  <% } %>
}
<% } %>

export default <%= name %>

