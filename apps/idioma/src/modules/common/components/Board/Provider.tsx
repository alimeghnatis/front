import * as React from 'react'
import {
  useMemo, useEffect, useCallback, useRef,
} from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  useLocation, matchPath, generatePath,
} from 'react-router-dom'
import {
  useRefetchableFragment,
  GraphQLTaggedNode,
  graphql,
} from 'react-relay'
import { useApplicationContext } from '@aztlan/ui'
import * as paths from 'modules/paths'

import Context from './Context.js'

const isValidBase64 = (input: string): boolean => {
  const base64Regex = /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/
  return base64Regex.test(input)
}

const isGlobalId = (input: string): boolean => {
  if (isValidBase64(input)) {
    try {
      return atob(input).includes(':')
    } catch (error) {
      return false
    }
  } else {
    return false
  }
}

const FRAGMENT = graphql`
  fragment ProviderBoardFragment on Query
    @refetchable(queryName: "ProviderBoardRefetchQuery")
    @argumentDefinitions(
      id: { type: "ID" }
      #boardGroupCount: { type: "Int" }
      #boardGroupCursor: { type: "String" }
    ) {
    board(id: $id) {
      id
      name
      created
      updated
      newExpressionsCount
      displayTranslations
      ...BoardFragment
      ...BoardUpdateFormFragment
      ...VariantBoardFragment
      ...ChatFragment
      #@arguments(count: $boardGroupCount, cursor: $boardGroupCursor)
    }
  }
`

function RawProvider({
  data,
  children,
  basePath = paths.board.absolute.HOME,
  baseBoardPath = paths.board.absolute.BOARD_HOME2,
  baseBoardPathAlt = paths.board.absolute.BOARD_HOME,
  createBoardPath = paths.board.absolute.NEW_BOARD,
  expressionDetailsPath,
}: // ...otherProps
InferProps<typeof RawProvider.propTypes>): React.ReactElement {
  // const { board: currentBoardId } = useParams()
  const location = useLocation()

  const {
    currentBoardId,
    currentExpressionId,
    currentExpressionActionSlug,
  } = useMemo(
    () => {
      const boardMatch = matchPath(
        location.pathname, {
          path :baseBoardPath,
          exact:false,
        },
      )
      const boardMatchAlt = matchPath(
        location.pathname, {
          path :baseBoardPathAlt,
          exact:false,
        },
      )
      const boardMatchParam = boardMatch?.params.board || boardMatchAlt?.params.board
      const expressionMatch = matchPath(
        location.pathname, { path: expressionDetailsPath },
      )
      const expressionMatchParam = expressionMatch?.params.expression
      const expressionActionSlugMatchParam = expressionMatch?.params.slug
      return {
        currentBoardId     :isGlobalId(boardMatchParam) ? boardMatchParam : null,
        currentExpressionId:isGlobalId(expressionMatchParam)
          ? expressionMatchParam
          : null,
        currentExpressionActionSlug:expressionActionSlugMatchParam,
      }
    }, [location.pathname],
  )

  const [
    result,
    refetchBoard,
  ] = useRefetchableFragment(
    FRAGMENT as GraphQLTaggedNode,
    data,
  )

  const selectedBoard = result.board

  useEffect(
    () => {
      if (currentBoardId && currentBoardId !== selectedBoard?.id) {
        refetchBoard({ id: currentBoardId })
      }
    }, [currentBoardId],
  )

  const baseBoardUrl = useMemo(
    () => {
      if (selectedBoard) {
        return generatePath(
          baseBoardPath, { board: selectedBoard.id },
        )
      }
      return null
    }, [selectedBoard],
  )

  const getExpressionDetailsUrl = useCallback(
    (
      expressionId: string, slug: string,
    ): string => generatePath(
      expressionDetailsPath, {
        board     :selectedBoard.id,
        expression:expressionId,
        slug,
      },
    ),
    [selectedBoard],
  )

  const containerRef = useRef(null)

  const contextValue = useMemo(
    () => ({
      data:selectedBoard,
      id  :selectedBoard?.id,
      uuid:selectedBoard && atob(selectedBoard.id).split(':')[1],
      currentBoardId,
      currentExpressionId,
      currentExpressionActionSlug,
      basePath,
      baseBoardPath,
      baseBoardPathAlt,
      baseBoardUrl,
      createBoardPath,
      expressionDetailsPath,
      getExpressionDetailsUrl,
      containerRef,
    }),
    [
      baseBoardPath,
      baseBoardPathAlt,
      createBoardPath,
      expressionDetailsPath,
      getExpressionDetailsUrl,
      basePath,
      baseBoardUrl,
      selectedBoard,
      currentBoardId,
      currentExpressionId,
      currentExpressionActionSlug,
      data,
      containerRef,
    ],
  )

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

RawProvider.propTypes = {
  /** The children JSX */
  children:PropTypes.node,

  /** The fragment to use */
  FRAGMENT:PropTypes.object,

  /** The base path */
  basePath:PropTypes.string,

  /** The base board path */
  baseBoardPath:PropTypes.string,

  /** The base board path alt */
  baseBoardPathAlt:PropTypes.string,

  /** The create board path */
  createBoardPath:PropTypes.string,

  /** The expression details path */
  expressionDetailsPath:PropTypes.string,

  /** The data to use */
  data:PropTypes.any,
}

export { RawProvider }

function Provider(props): React.ReactElement {
  const { data } = useApplicationContext()

  return (
    <RawProvider
      data={data}
      {...props}
    />
  )
}

export default Provider
