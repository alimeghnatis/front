import * as React from 'react'
import {
  graphql, useLazyLoadQuery,
} from 'react-relay'
import UsageState from './UsageState'
import './styles.scss'

/**
 * The GraphQL query to fetch current usage state data for the viewer
 * using a fragment from UsageStateFragment.
 */
const QUERY = graphql`
  query UsageStateLoaderQuery {
    viewer {
      currentUsageState {
        ...UsageStateFragment
      }
    }
  }
`

/**
 * A React component to load and render the usage state data.
 * Uses Relay's useLazyLoadQuery to fetch data.
 * @returns {React.ReactElement} - Rendered component for the current usage state.
 */
function UsageStateLoader(): React.ReactElement {
  // Fetch the data using Relay's useLazyLoadQuery hook
  const data = useLazyLoadQuery(
    QUERY, {},
  )

  // Render the UsageState component with the loaded data
  return <UsageState data={data.viewer.currentUsageState} />
}

export default UsageStateLoader
