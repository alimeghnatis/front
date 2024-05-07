import {
  graphql, useFragment,
} from 'react-relay'
import { useViewer } from '@aztlan/ui'

const FRAGMENT = graphql`
  fragment useBoardMembershipsFragment on UserNode {
    boardMemberships(first: 50)
      @connection(key: "useBoardMembershipsFragment_boardMemberships") {
      edges {
        node {
          id
          role
          board {
            id
            name
            newExpressionsCount
            isDefault
          }
        }
      }
    }
  }
`
const useBoardMemberships = () => {
  const { data } = useViewer()

  const result = useFragment(
    FRAGMENT, data,
  )

  return result?.boardMemberships
}

export default useBoardMemberships
