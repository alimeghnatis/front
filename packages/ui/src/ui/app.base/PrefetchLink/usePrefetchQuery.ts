import {
  fetchQuery,
  useRelayEnvironment,
  GraphQLTaggedNode,
} from 'react-relay'

/**
 * Creates a function to perform a Relay-managed GraphQL fetch operation.
 *
 * @param QUERY - The GraphQL tagged node (query) to be executed.
 * @param variables - The variables to be passed with the GraphQL query.
 * @param options - Additional options to be used with the fetch operation.
 * @returns A promise resolving to the query results.
 */
function usePrefetchQuery(): (
  QUERY: GraphQLTaggedNode,
  variables: Record<string, any>,
  options?: Record<string, any>
) => Promise<any> {
  const environment = useRelayEnvironment()
  return (
    QUERY: GraphQLTaggedNode,
    variables: Record<string, any>,
    options: Record<string, any> = { fetchPolicy: 'store-or-network' },
  ) => fetchQuery(
    environment, QUERY, variables, options,
  ).toPromise()
}

export default usePrefetchQuery
