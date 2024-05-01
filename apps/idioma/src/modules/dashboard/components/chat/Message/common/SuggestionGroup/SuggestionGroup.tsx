/* @aztlan/generator-front 3.6.3 */
import * as React from 'react'
import {
  useInsertionEffect, useState, useCallback,
} from 'react'

import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  graphql,
  useFragment,
  useMutation,
  ConnectionHandler,
} from 'react-relay'

import styleNames from '@aztlan/bem'

import { Suggestion } from '../Suggestion/index.js'
import { useBoardContext } from '../../../../Board/index.js'

const baseClassName = styleNames.base
const componentClassName = 'suggestion-group'

const FRAGMENT = graphql`
  fragment SuggestionGroupFragment on AssistantLanguageMessageType {
    suggestions
    iso6391
    iso6392
    iso6393
  }
`

const MUTATION_CREATE_GROUP = graphql`
  mutation SuggestionGroupCreateGroupMutation(
    $input: CreateGroupMutationInput!
    $connections: [ID!]!
  ) {
    createGroup(input: $input) {
      instance
        @prependNode(connections: $connections, edgeTypeName: "GroupNodeEdge") {
        ...DefaultGroupFragment
      }
      errors {
        field
        messages
      }
    }
  }
`

/**
 * description
 * @param {InferProps<typeof SuggestionGroup.propTypes>} props -
 * @returns {React.ReactElement} - Rendered SuggestionGroup
 */
function SuggestionGroup({
  id,
  className: userClassName,
  style,
  data,
}: // ...otherProps

InferProps<typeof SuggestionGroup.propTypes>): React.ReactElement {
  useInsertionEffect(
    () => {
    // @ts-ignore
      import('./styles.scss')
    }, [],
  )

  const result = useFragment(
    FRAGMENT, data,
  )

  const [
    selected,
    setSelected,
  ] = useState([])

  const selectSuggestions = useCallback(
    (suggestions) => {
      setSelected(suggestions)
    }, [],
  )

  const [
    commit,
    isInFlight,
  ] = useMutation(MUTATION_CREATE_GROUP)

  const {
    id: boardID, uuid: boardUUID,
  } = useBoardContext()

  const createGroupFromSuggestions = useCallback(
    (suggestionsIndexes) => {
      const connectionID = ConnectionHandler.getConnectionID(
        boardID,
        'BoardFragment_groups',
      )
      const tempID = btoa(`GroupNode:${Math.random()}`)
      const tempCreated = new Date().toISOString()
      const suggestionsToCommit = result.suggestions.filter((
        suggestion, index,
      ) => suggestionsIndexes.includes(index))
      commit({
        variables:{
          input:{
            expressions:suggestionsToCommit.map((suggestion) => ({ content: suggestion })),
            board      :boardUUID,
          },
          connections:[connectionID],
        },
        optimisticResponse:{
          createGroup:{
            instance:{
              id         :tempID,
              created    :tempCreated,
              expressions:{
                edges:suggestionsToCommit.map((
                  suggestion, index,
                ) => ({
                  node:{
                    id              :btoa(`ExpressionNode:${Math.random()}`),
                    created         :tempCreated,
                    content         :suggestion,
                    correctedContent:suggestion,
                  },
                  cursor:index.toString(),
                })),
              },
            },
            errors:[],
          },
        },
      })
    },
    [
      result.suggestions,
      result.iso6391,
      result.iso6392,
      result.iso6393,
    ],
  )

  return (
    <div
      id={id}
      className={[
        baseClassName,
        componentClassName,
        userClassName,
        'container grid',
      ]
        .filter((e) => e)
        .join(' ')}
      style={style}
      // {...otherProps}
      onMouseLeave={() => setSelected([])}
    >
      {result.suggestions.map((
        suggestion, index,
      ) => (
        <Suggestion
          key={suggestion}
          language={result.iso6391 || result.iso6392 || result.iso6393}
          onMouseOver={() => selectSuggestions([index])}
          selected={selected.includes(index)}
          handleClick={() => createGroupFromSuggestions([index])}
          isInFlight={isInFlight}
        >
          {suggestion}
        </Suggestion>
      ))}
      <div className="container actions grid">
        <div className="content">
          <p>Add all suggestions to the board</p>
        </div>
        <button
          type="button"
          onMouseOver={() => selectSuggestions(result.suggestions.map((
            _, index,
          ) => index))}
          onClick={() => createGroupFromSuggestions(selected)}
          disabled={isInFlight}
        >
          Add
        </button>
      </div>
    </div>
  )
}

SuggestionGroup.propTypes = {
  /** The HTML id for this element */
  id:PropTypes.string,

  /** The HTML class names for this element */
  className:PropTypes.string,

  /** The React-written, css properties for this element. */
  style:PropTypes.objectOf(PropTypes.string),

  /** The children JSX */
  children:PropTypes.node,
}

export default SuggestionGroup
