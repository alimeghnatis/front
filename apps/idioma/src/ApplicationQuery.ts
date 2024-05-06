import { graphql } from 'react-relay'

// Local Definitions
export const QUERY_APPLICATION = graphql`
  query ApplicationQuery(
    $loginRequestedResource: String!
    $board: ID #$boardGroupCount: Int #$boardGroupCursor: String
  ) {
    viewer {
      id
      ...ApplicationQueryViewerFragment
    }
    ...ProviderBoardFragment
      @arguments(
        id: $board
        #boardGroupCount: $boardGroupCount
        #boardGroupCursor: $boardGroupCursor
      )
    ...LoginPageButtonFragment @arguments(resource: $loginRequestedResource)
    ...HomePageLoginButtonFragment @arguments(resource: $loginRequestedResource)
    time
  }
`

export const FRAGMENT_VIEWER = graphql`
  fragment ApplicationQueryViewerFragment on UserNode {
    id
    firstName
    lastName
    created
    updated
    email
    profilePicture
    isActive
    isSuperuser
    #groups {
    #  edges {
    #    node {
    #      id
    #      name
    #    }
    #  }
    #}
    ...ProfilePageFragment
    ...ViewerUpdateFormFragment
    ...ApplicationQueryAuthenticationDebugFragment
    ...useBoardMembershipsFragment
  }
`

export const FRAGMENT_AUTHENTICATION_DEBUG = graphql`
  fragment ApplicationQueryAuthenticationDebugFragment on UserNode {
    id
    firstName
    lastName
    email
  }
`

export const MUTATION_LOGOUT = graphql`
  mutation ApplicationQueryLogoutMutation {
    deleteTokenCookie(input: { clientMutationId: "logout-delete-access" }) {
      deleted
      clientMutationId
    }
    deleteRefreshTokenCookie(
      input: { clientMutationId: "logout-delete-refresh" }
    ) {
      deleted
      clientMutationId
    }
  }
`
