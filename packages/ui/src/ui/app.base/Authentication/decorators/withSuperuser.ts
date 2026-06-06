import * as React from 'react'
import { useViewer } from '../hooks/index.js' // adjust the import path as needed

/**
 * HOC to render the component only if the user is a superuser.
 * @param WrappedComponent - The React component to render if the user is a superuser.
 * @returns Either the WrappedComponent or null based on the superuser status.
 */
function withSuperuser<T>(WrappedComponent: React.ComponentType<T>) {
  return function WrapperComponent(props: T) {
    const { data } = useViewer()
    const { isSuperuser } = data || {}

    // Render the WrappedComponent only if the user is a superuser
    return isSuperuser ? React.createElement(
      WrappedComponent, props,
    ) : null
  }
}

export default withSuperuser
