import * as React from 'react'
import {
  useMemo, useEffect, useCallback,
} from 'react'
import * as PropTypes from 'prop-types'
import { InferProps } from 'prop-types'
import {
  useParams,
  useLocation,
  matchPath,
  generatePath,
} from 'react-router-dom'
import {
  useRefetchableFragment, GraphQLTaggedNode,
} from 'react-relay'
import { useApplicationContext } from '@aztlan/ui'

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

function RawProvider({
  children,
  FRAGMENT,
  data,
  basePath,
  baseBoardPath,
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
        location.pathname, { path: baseBoardPath },
      )
      const boardMatchParam = boardMatch?.params.board
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
      baseBoardUrl,
      expressionDetailsPath,
      getExpressionDetailsUrl,
    }),
    [
      baseBoardPath,
      expressionDetailsPath,
      getExpressionDetailsUrl,
      basePath,
      baseBoardUrl,
      selectedBoard,
      currentBoardId,
      currentExpressionId,
      currentExpressionActionSlug,
      data,
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
