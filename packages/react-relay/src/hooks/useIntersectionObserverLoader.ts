import { useEffect } from 'react'

/**
 * Types for the options passed to the IntersectionObserver.
 */
type IntersectionObserverOptions = {
  threshold? :number | number[];
  rootMargin?:string;
  quantity?  :number;
}

/**
 * Custom React hook that uses IntersectionObserver
 * to load more items when a referenced element becomes visible.
 *
 * @param args - Object containing all necessary arguments for the hook.
 * @returns void
 */
function useIntersectionObserverLoader(
  ref: React.RefObject<Element>,
  hasMore: boolean,
  loadMore: (count: number) => void,
  isLoadingMore: boolean,
  options: Partial<IntersectionObserverOptions> = {},
): void {
  const {
    threshold = 0, rootMargin = '0px', quantity = 15,
  } = options

  useEffect(
    () => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore && !isLoadingMore) {
            loadMore(quantity) // Function to load next items
          }
        },
        {
          threshold,
          rootMargin,
        },
      )

      if (ref.current) {
        observer.observe(ref.current)
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      }
    }, [
      ref.current,
      hasMore,
      isLoadingMore,
      loadMore,
    ],
  )
}

export default useIntersectionObserverLoader
