import * as React from 'react'
import { useCallback } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'

import {
  graphql,
  useFragment,
  // RecordSourceSelectorProxy,
  ConnectionHandler,
  useMutation,
} from 'react-relay'

const FRAGMENT = graphql`
  fragment BookmarkButtonFragment on ExpressionNode {
    id
    isBookmarked
  }
`

const MUTATION_UPDATE = graphql`
  mutation BookmarkButtonMutation($input: UpdateExpressionMutationInput!) {
    updateExpression(input: $input) {
      instance {
        id
        isBookmarked
      }
      errors {
        field
        messages
      }
    }
  }
`

function BookmarkButton({
  data,
  groupID,
  ...props
}: InferProps<typeof BookmarkButton.propTypes>): React.ReactElement {
  const result = useFragment(
    FRAGMENT, data,
  )

  const [
    updateExpression,
    isBookmarkInFlight,
  ] = useMutation(MUTATION_UPDATE)

  const handleBookmark = useCallback(
    (): void => {
      updateExpression({
        variables:{
          input:{
            id          :atob(result.id).split(':')[1],
            isBookmarked:!result.isBookmarked,
          },
        },
        optimisticResponse:{
          updateExpression:{
            instance:{
              id          :result.id,
              isBookmarked:!result.isBookmarked,
            },
            errors:null,
          },
        },
      })
    }, [
      result.id,
      result.isBookmarked,
      updateExpression,
    ],
  )

  //
  //
  return (
    <button
      disabled={isBookmarkInFlight}
      onClick={handleBookmark}
      key={result.id}
      style={{ background: result.isBookmarked ? 'red' : 'white' }}
      title={
        result.isBookmarked ? 'Unbookmark expression' : 'Bookmark expression'
      }
      {...props}
    >
      !
    </button>
  )
}

BookmarkButton.propTypes = { data: PropTypes.object.isRequired }

export default BookmarkButton
