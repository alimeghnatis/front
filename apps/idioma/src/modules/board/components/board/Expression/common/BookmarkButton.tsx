import * as React from 'react'
import { useCallback } from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import styleNames from '@aztlan/bem'
import { Button } from '@aztlan/ui'

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
    isNew
    isProcessed
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

function BookmarkButton(
  {
    data, groupID, ...props
  }: InferProps<typeof BookmarkButton.propTypes>,
  ref,
): React.ReactElement {
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

  const isNewAndUnprocessed = result.isNew && !result.isProcessed

  //
  //
  return (
    <Button
      disabled={isBookmarkInFlight || result.isNew}
      onClick={handleBookmark}
      key={result.id}
      color={result.isBookmarked ? 'important' : undefined}
      className={[
        result.isNew && styleNames.modifierNew,
        !result.isProcessed && styleNames.modifierLoading,
      ]
        .filter(Boolean)
        .join(' ')}
      title={
        result.isBookmarked ? 'Unbookmark expression' : 'Bookmark expression'
      }
      {...props}
      ref={ref}
    >
      !
    </Button>
  )
}

BookmarkButton.propTypes = { data: PropTypes.object.isRequired }

export default React.forwardRef(BookmarkButton as React.ForwardRefRenderFunction<HTMLButtonElement>)
