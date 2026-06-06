import {
  useCallback, useEffect,
} from 'react'
import throttle from 'lodash.throttle'
import { useApplicationContext } from '../../common/index.js'
import usePrefetchQuery from './usePrefetchQuery.js'

export type PrefetcherOptions = {
  throttleMs?    :number;
  shouldPrefetch?:(route: any, match: any) => boolean;
}

const defaultPrefetcherOptions: PrefetcherOptions = {
  throttleMs    :5000,
  shouldPrefetch:(
    route, match,
  ) => route && route.QUERY && !route.isPrivate && match,
}

function usePrefetcher(options: PrefetcherOptions = {}) {
  const {
    throttleMs, shouldPrefetch,
  } = {
    ...defaultPrefetcherOptions,
    ...options,
  }
  const { matchRoute } = useApplicationContext()
  const prefetchQuery = usePrefetchQuery()

  const prefetchData = useCallback(
    (to: string) => {
      const {
        route, match,
      } = matchRoute(to)
      if (route && match && shouldPrefetch(
        route, match,
      )) {
        const queryVariables = route.prepareQueryVariables?.(match.params) || match.params
        prefetchQuery(
          route.QUERY, queryVariables,
        )
      }
    },
    [
      matchRoute,
      shouldPrefetch,
      prefetchQuery,
    ],
  )

  const throttledPrefetchData = useCallback(
    throttle(
      prefetchData, throttleMs,
    ),
    [
      prefetchData,
      throttleMs,
    ],
  )

  useEffect(
    () => () => {
      // @ts-ignore
      throttledPrefetchData.cancel()
    },
    [throttledPrefetchData],
  )

  return (to: string) => throttledPrefetchData(to)
}

export default usePrefetcher
