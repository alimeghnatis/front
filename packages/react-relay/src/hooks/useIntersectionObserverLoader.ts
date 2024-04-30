import { useEffect } from 'react'

/**
 * Types for the options passed to the IntersectionObserver.
 */
type IntersectionObserverOptions = {
  threshold? :number | number[];
  rootMargin?:string;
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
  hasNext: boolean,
  loadNext: (count: number) => void,
  isLoadingNext: boolean,
  options: Partial<IntersectionObserverOptions> = {},
): void {
  const {
    threshold = 0, rootMargin = '0px',
  } = options

  useEffect(
    () => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasNext && !isLoadingNext) {
            loadNext(15) // Function to load next items
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
      hasNext,
      isLoadingNext,
      loadNext,
    ],
  )
}

export default useIntersectionObserverLoader
